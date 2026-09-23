'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { TransformControls } from 'three/examples/jsm/controls/TransformControls.js';
import { useEditor } from '@/context/EditorContext';
import {
  createObjectMesh,
  fetchDFFGeometry,
  sampToThreePosition,
  sampToThreeRotation,
  threeToSampPosition,
  threeToSampRotation,
  updateMeshSelection,
  disposeHierarchy
} from '@/utils/meshFactory';
import { AlertCircle, RotateCcw, Box, Sparkles, Monitor } from 'lucide-react';

interface MeshEntry {
  group: THREE.Group;
  modelId: number;
  matHash: string;
  visible: boolean;
  dimensions: [number, number, number];
}

export default function MapCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [webglError, setWebglError] = useState<string | null>(null);
  const [retryKey, setRetryKey] = useState(0);

  const {
    objects,
    selectedId,
    selectedObject,
    transformMode,
    cameraMode,
    snapSettings,
    focusTarget,
    setSelectedId,
    updateObject,
    deleteObject,
    duplicateObject,
    undo,
    redo,
    setTransformMode,
    focusOnSelected,
    clearFocusTarget,
    registerCanvasCapture,
    registerCameraPreset
  } = useEditor();

  // Internal Three.js references
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const persCameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const orthoCameraRef = useRef<THREE.OrthographicCamera | null>(null);
  const activeCameraRef = useRef<THREE.Camera | null>(null);
  const orbitControlsRef = useRef<OrbitControls | null>(null);
  const transformControlsRef = useRef<TransformControls | null>(null);
  const objectsGroupRef = useRef<THREE.Group | null>(null);
  const lightsGroupRef = useRef<THREE.Group | null>(null);

  // Incremental mesh tracking to prevent recreating meshes every frame
  const meshEntriesRef = useRef<Map<string, MeshEntry>>(new Map());
  const isDraggingRef = useRef(false);

  // Store latest state in refs for event listeners
  const stateRef = useRef({
    objects,
    selectedId,
    transformMode,
    cameraMode,
    snapSettings
  });

  useEffect(() => {
    stateRef.current = {
      objects,
      selectedId,
      transformMode,
      cameraMode,
      snapSettings
    };
  }, [objects, selectedId, transformMode, cameraMode, snapSettings]);

  // Initial Scene & WebGL Setup
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Reset error state
    setWebglError(null);

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    // 1. Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#090d16');
    sceneRef.current = scene;

    // 2. Objects & Dynamic Lights Groups
    const objectsGroup = new THREE.Group();
    scene.add(objectsGroup);
    objectsGroupRef.current = objectsGroup;

    const lightsGroup = new THREE.Group();
    scene.add(lightsGroup);
    lightsGroupRef.current = lightsGroup;

    // 3. Cameras
    const persCamera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    persCamera.position.set(6, 6, 8);
    persCamera.lookAt(0, 1.5, 0);
    persCameraRef.current = persCamera;

    const aspect = width / height;
    const frustumSize = 12;
    const orthoCamera = new THREE.OrthographicCamera(
      (-frustumSize * aspect) / 2,
      (frustumSize * aspect) / 2,
      frustumSize / 2,
      -frustumSize / 2,
      0.1,
      1000
    );
    orthoCamera.position.set(0, 20, 0);
    orthoCamera.lookAt(0, 0, 0);
    orthoCameraRef.current = orthoCamera;

    activeCameraRef.current = persCamera;

    // 4. WebGL Renderer with optimized lightweight settings
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: false,
        powerPreference: 'high-performance',
        failIfMajorPerformanceCaveat: false,
        stencil: false,
        depth: true,
        preserveDrawingBuffer: true // Required for AI Vision canvas snapshot
      });
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      console.warn('WebGL initialization failed:', msg);
      setWebglError(msg || 'Browser tidak dapat membuat konteks WebGL.');
      return;
    }

    renderer.setSize(width, height);
    // Cap pixel ratio to 1.5: saves 40-60% GPU fillrate on 4K/Retina displays while staying ultra-crisp
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;

    // Graceful WebGL Context Loss / Restore handling
    const domEl = renderer.domElement;
    const handleContextLost = (e: Event) => {
      e.preventDefault();
      console.warn('WebGL context lost. Rendering paused.');
    };
    const handleContextRestored = () => {
      console.log('WebGL context restored. Resuming 3D scene...');
      setRetryKey((k) => k + 1);
    };

    domEl.addEventListener('webglcontextlost', handleContextLost, false);
    domEl.addEventListener('webglcontextrestored', handleContextRestored, false);

    container.appendChild(domEl);
    rendererRef.current = renderer;

    // 5. Lighting (Bright interior studio ambient + key sunlight + soft fill light)
    const ambientLight = new THREE.AmbientLight('#ffffff', 0.95);
    scene.add(ambientLight);

    const hemiLight = new THREE.HemisphereLight('#f8fafc', '#334155', 0.75);
    hemiLight.position.set(0, 20, 0);
    scene.add(hemiLight);

    // Primary Key Light (South-East)
    const dirLight = new THREE.DirectionalLight('#ffffff', 1.0);
    dirLight.position.set(8, 16, 10);
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.width = 1024;
    dirLight.shadow.mapSize.height = 1024;
    dirLight.shadow.camera.near = 0.5;
    dirLight.shadow.camera.far = 40;
    const d = 12;
    dirLight.shadow.camera.left = -d;
    dirLight.shadow.camera.right = d;
    dirLight.shadow.camera.top = d;
    dirLight.shadow.camera.bottom = -d;
    dirLight.shadow.bias = -0.0005;
    scene.add(dirLight);

    // Soft Studio Fill Light (North-West) - ensures reverse walls never fall into black shadows
    const fillLight = new THREE.DirectionalLight('#93c5fd', 0.55);
    fillLight.position.set(-8, 14, -10);
    scene.add(fillLight);

    // 6. Helpers: Crisp Interior Grids
    const grid = new THREE.GridHelper(50, 50, '#0ea5e9', '#1e293b');
    grid.position.y = -0.01;
    scene.add(grid);

    const fineGrid = new THREE.GridHelper(20, 40, '#0284c7', '#0f172a');
    fineGrid.position.y = -0.005;
    scene.add(fineGrid);

    // 7. Orbit Controls
    const orbit = new OrbitControls(persCamera, domEl);
    orbit.enableDamping = true;
    orbit.dampingFactor = 0.08;
    orbit.target.set(0, 1.5, 0);
    orbit.maxPolarAngle = Math.PI / 2 + 0.05;
    orbitControlsRef.current = orbit;

    // 8. Transform Controls
    const transform = new TransformControls(persCamera, domEl);
    transform.size = 0.85;
    scene.add(transform.getHelper());
    transformControlsRef.current = transform;

    transform.addEventListener('dragging-changed', (event) => {
      orbit.enabled = !event.value;
      isDraggingRef.current = !!event.value;

      if (!event.value) {
        // Drag ended: commit final coordinates to history
        const activeObj = transform.object;
        if (activeObj && activeObj.userData.mapObjectId) {
          const id = activeObj.userData.mapObjectId;
          const pos = threeToSampPosition([
            activeObj.position.x,
            activeObj.position.y,
            activeObj.position.z
          ]);
          const rot = threeToSampRotation([
            activeObj.rotation.x,
            activeObj.rotation.y,
            activeObj.rotation.z
          ]);
          updateObject(id, { position: pos, rotation: rot }, true);
        }
      }
    });

    // Real-time coordinate updates during drag without rebuilding meshes
    transform.addEventListener('change', () => {
      const activeObj = transform.object;
      if (activeObj && activeObj.userData.mapObjectId && isDraggingRef.current) {
        const id = activeObj.userData.mapObjectId;
        const pos = threeToSampPosition([
          activeObj.position.x,
          activeObj.position.y,
          activeObj.position.z
        ]);
        const rot = threeToSampRotation([
          activeObj.rotation.x,
          activeObj.rotation.y,
          activeObj.rotation.z
        ]);
        updateObject(id, { position: pos, rotation: rot }, false);
      }
    });

    // 9. Raycasting Click Selection
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    let mouseDownPos = { x: 0, y: 0 };

    const onPointerDown = (e: MouseEvent) => {
      mouseDownPos = { x: e.clientX, y: e.clientY };
    };

    const onPointerUp = (e: MouseEvent) => {
      const dist = Math.hypot(e.clientX - mouseDownPos.x, e.clientY - mouseDownPos.y);
      if (dist > 5) return; // Orbit or pan drag, not click
      if (transform.dragging) return;

      const rect = domEl.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      const cam = activeCameraRef.current;
      if (!cam || !objectsGroupRef.current) return;

      raycaster.setFromCamera(mouse, cam);
      const intersects = raycaster.intersectObjects(objectsGroupRef.current.children, true);

      if (intersects.length > 0) {
        let target: THREE.Object3D | null = intersects[0].object;
        while (target && target.parent !== objectsGroupRef.current) {
          target = target.parent;
        }
        if (target && target.userData.mapObjectId) {
          setSelectedId(target.userData.mapObjectId);
        }
      } else {
        setSelectedId(null);
      }
    };

    domEl.addEventListener('pointerdown', onPointerDown);
    domEl.addEventListener('pointerup', onPointerUp);

    // 10. Animation Loop
    let animId = 0;
    const animate = () => {
      animId = requestAnimationFrame(animate);
      if (orbit.enabled) {
        orbit.update();
      }
      if (activeCameraRef.current && sceneRef.current) {
        renderer.render(sceneRef.current, activeCameraRef.current);
      }
    };
    animate();

    // 11. Resize Observer
    const resizeObserver = new ResizeObserver(() => {
      if (!container || !rendererRef.current) return;
      const newW = container.clientWidth;
      const newH = container.clientHeight;
      if (newW === 0 || newH === 0) return;

      rendererRef.current.setSize(newW, newH);

      if (persCameraRef.current) {
        persCameraRef.current.aspect = newW / newH;
        persCameraRef.current.updateProjectionMatrix();
      }

      if (orthoCameraRef.current) {
        const asp = newW / newH;
        orthoCameraRef.current.left = (-frustumSize * asp) / 2;
        orthoCameraRef.current.right = (frustumSize * asp) / 2;
        orthoCameraRef.current.top = frustumSize / 2;
        orthoCameraRef.current.bottom = -frustumSize / 2;
        orthoCameraRef.current.updateProjectionMatrix();
      }
    });
    resizeObserver.observe(container);

    // Cleanup
    return () => {
      cancelAnimationFrame(animId);
      resizeObserver.disconnect();
      domEl.removeEventListener('webglcontextlost', handleContextLost);
      domEl.removeEventListener('webglcontextrestored', handleContextRestored);
      domEl.removeEventListener('pointerdown', onPointerDown);
      domEl.removeEventListener('pointerup', onPointerUp);

      // Cleanly dispose all tracked meshes from GPU memory
      meshEntriesRef.current.forEach((entry) => {
        disposeHierarchy(entry.group);
      });
      meshEntriesRef.current.clear();

      transform.dispose();
      orbit.dispose();
      renderer.dispose();
      if (container.contains(domEl)) {
        container.removeChild(domEl);
      }
    };
  }, [setSelectedId, updateObject, retryKey]);

  // Register AI Vision snapshot & camera preset handlers
  useEffect(() => {
    registerCanvasCapture(() => {
      if (!rendererRef.current) return null;
      try {
        if (activeCameraRef.current && sceneRef.current) {
          rendererRef.current.render(sceneRef.current, activeCameraRef.current);
        }
        return rendererRef.current.domElement.toDataURL('image/jpeg', 0.85);
      } catch (e) {
        console.warn('Failed to capture canvas screenshot:', e);
        return null;
      }
    });

    registerCameraPreset((preset: 'front' | 'back' | 'top' | 'inside') => {
      const cam = persCameraRef.current;
      const orbit = orbitControlsRef.current;
      if (!cam || !orbit) return;

      switch (preset) {
        case 'front':
          cam.position.set(6, 6, 8);
          orbit.target.set(0, 1.5, 0);
          break;
        case 'back':
          cam.position.set(-6, 6, -8);
          orbit.target.set(0, 1.5, 0);
          break;
        case 'top':
          cam.position.set(0, 14, 0.01);
          orbit.target.set(0, 0, 0);
          break;
        case 'inside':
          cam.position.set(0, 1.5, 2.5);
          orbit.target.set(0, 1.5, -2);
          break;
      }
      orbit.update();
    });
  }, [registerCanvasCapture, registerCameraPreset]);

  // Synchronize Camera Mode (Perspective Orbit vs Orthographic Top-Down Floorplan)
  useEffect(() => {
    if (!orbitControlsRef.current || !transformControlsRef.current) return;

    if (cameraMode === 'top') {
      if (orthoCameraRef.current) {
        activeCameraRef.current = orthoCameraRef.current;
        orbitControlsRef.current.object = orthoCameraRef.current;
        transformControlsRef.current.camera = orthoCameraRef.current;
        orthoCameraRef.current.position.set(0, 20, 0);
        orthoCameraRef.current.lookAt(0, 0, 0);
        orbitControlsRef.current.enableRotate = false; // Pure architectural pan/zoom in floorplan mode
        orbitControlsRef.current.target.set(0, 0, 0);
      }
    } else {
      if (persCameraRef.current) {
        activeCameraRef.current = persCameraRef.current;
        orbitControlsRef.current.object = persCameraRef.current;
        transformControlsRef.current.camera = persCameraRef.current;
        orbitControlsRef.current.enableRotate = true;
      }
    }
  }, [cameraMode]);

  // Synchronize Transform Mode & Snapping
  useEffect(() => {
    const tc = transformControlsRef.current;
    if (!tc) return;

    tc.setMode(transformMode);

    if (snapSettings.enabled) {
      tc.setTranslationSnap(snapSettings.positionSnap);
      tc.setRotationSnap(THREE.MathUtils.degToRad(snapSettings.rotationSnap));
    } else {
      tc.setTranslationSnap(null);
      tc.setRotationSnap(null);
    }
  }, [transformMode, snapSettings]);

  // HIGH-PERFORMANCE INCREMENTAL MESH RECONCILIATION
  // Reuses existing 3D geometries and materials; only updates matrices or rebuilds changed objects
  useEffect(() => {
    const group = objectsGroupRef.current;
    const lightsGroup = lightsGroupRef.current;
    const tc = transformControlsRef.current;
    if (!group || !tc) return;

    const meshMap = meshEntriesRef.current;
    const currentIds = new Set(objects.map((o) => o.id));

    // 1. Remove deleted objects and dispose their GPU allocations
    meshMap.forEach((entry, id) => {
      if (!currentIds.has(id)) {
        group.remove(entry.group);
        disposeHierarchy(entry.group);
        meshMap.delete(id);
      }
    });

    // 2. Reconcile existing objects or spawn new meshes
    const reconcileObjects = async () => {
      for (const obj of objects) {
        const matHash = `${obj.modelId}_${JSON.stringify(obj.materials)}_${obj.dimensions.join(',')}`;
        const isSelected = obj.id === selectedId;
        const existing = meshMap.get(obj.id);

        if (existing) {
          // If model or materials changed, dispose and recreate
          if (existing.matHash !== matHash) {
            group.remove(existing.group);
            disposeHierarchy(existing.group);

            const dffGeo = await fetchDFFGeometry(obj.modelId);
            const newMesh = createObjectMesh(obj, isSelected, dffGeo ?? undefined);
            newMesh.visible = obj.visible;
            group.add(newMesh);

            meshMap.set(obj.id, {
              group: newMesh,
              modelId: obj.modelId,
              matHash,
              visible: obj.visible,
              dimensions: obj.dimensions
            });
          } else {
            // High-speed matrix update: do not rebuild!
            existing.group.visible = obj.visible;
            if (!isDraggingRef.current || obj.id !== selectedId) {
              const [tx, ty, tz] = sampToThreePosition(obj.position);
              existing.group.position.set(tx, ty, tz);
              const [rx, ry, rz] = sampToThreeRotation(obj.rotation);
              existing.group.rotation.set(rx, ry, rz);
            }
            // Update selection visuals without touching geometries
            updateMeshSelection(existing.group, isSelected, obj.dimensions);
          }
        } else {
          // New object: fetch geometry and add
          const dffGeo = await fetchDFFGeometry(obj.modelId);
          const newMesh = createObjectMesh(obj, isSelected, dffGeo ?? undefined);
          newMesh.visible = obj.visible;
          group.add(newMesh);

          meshMap.set(obj.id, {
            group: newMesh,
            modelId: obj.modelId,
            matHash,
            visible: obj.visible,
            dimensions: obj.dimensions
          });
        }
      }

      // 3. Attach or detach TransformControls to selected object
      const selectedEntry = selectedId ? meshMap.get(selectedId) : null;
      if (selectedEntry && !selectedObject?.locked && selectedEntry.visible) {
        tc.attach(selectedEntry.group);
      } else {
        tc.detach();
      }

      // 4. Update Dynamic Lighting (Lightweight, castShadow = false for point lights)
      if (lightsGroup) {
        while (lightsGroup.children.length > 0) {
          lightsGroup.remove(lightsGroup.children[0]);
        }

        objects.forEach((obj) => {
          if (!obj.visible) return;
          const isLamp =
            obj.category === 'lighting' ||
            [18646, 18653, 18654, 18655, 18656, 1215].includes(obj.modelId);

          if (isLamp) {
            const [lx, ly, lz] = sampToThreePosition(obj.position);
            let lightColor = '#fef08a';
            let lightIntensity = 2.0;
            let lightDistance = 12;

            if (obj.modelId === 18653) lightColor = '#ef4444';
            else if (obj.modelId === 18654) lightColor = '#22c55e';
            else if (obj.modelId === 18655) lightColor = '#3b82f6';
            else if (obj.modelId === 18656) {
              lightColor = '#ffffff';
              lightIntensity = 2.8;
            }

            // High performance: no shadow maps on point lights to keep 60+ FPS
            const ptLight = new THREE.PointLight(lightColor, lightIntensity, lightDistance, 1.4);
            ptLight.position.set(lx, ly - 0.2, lz);
            ptLight.castShadow = false;
            lightsGroup.add(ptLight);
          }
        });
      }
    };

    reconcileObjects();
  }, [objects, selectedId, selectedObject?.locked]);

  // Handle Focus Target (Fly camera to selected SA-MP object)
  useEffect(() => {
    if (focusTarget && orbitControlsRef.current && persCameraRef.current) {
      const [tx, ty, tz] = sampToThreePosition(focusTarget);
      orbitControlsRef.current.target.set(tx, ty, tz);
      persCameraRef.current.position.set(tx + 3.8, ty + 3.2, tz + 5.0);
      orbitControlsRef.current.update();
      clearFocusTarget();
    }
  }, [focusTarget, clearFocusTarget]);

  // Keyboard Shortcuts (W, E, Del, Ctrl+D, Ctrl+Z, Ctrl+Y, F)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const activeTag = (document.activeElement?.tagName || '').toLowerCase();
      if (activeTag === 'input' || activeTag === 'textarea') return;

      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'z') {
        e.preventDefault();
        undo();
      } else if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'y') {
        e.preventDefault();
        redo();
      } else if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'd') {
        e.preventDefault();
        if (stateRef.current.selectedId) {
          duplicateObject(stateRef.current.selectedId);
        }
      } else if (e.key === 'Delete' || e.key === 'Backspace') {
        if (stateRef.current.selectedId) {
          deleteObject(stateRef.current.selectedId);
        }
      } else if (e.key.toLowerCase() === 'w') {
        setTransformMode('translate');
      } else if (e.key.toLowerCase() === 'e') {
        setTransformMode('rotate');
      } else if (e.key.toLowerCase() === 'f') {
        focusOnSelected();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [undo, redo, duplicateObject, deleteObject, setTransformMode, focusOnSelected]);

  return (
    <div className="relative w-full h-full overflow-hidden bg-slate-950 select-none">
      {/* 3D WebGL Canvas Container */}
      <div ref={containerRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

      {/* WebGL Error / Hardware Acceleration Fallback Card (Inline, non-destructive) */}
      {webglError && (
        <div className="absolute inset-0 z-50 flex items-center justify-center p-6 bg-slate-950/90 backdrop-blur-md">
          <div className="max-w-md w-full bg-slate-900 border border-red-500/30 rounded-2xl p-6 shadow-2xl text-center space-y-4">
            <div className="w-14 h-14 mx-auto rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400">
              <AlertCircle className="w-7 h-7" />
            </div>

            <div className="space-y-1">
              <h3 className="text-lg font-semibold text-slate-100">
                Akselerasi Grafis 3D (WebGL) Dibutuhkan
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Studio ini menggunakan rendering 3D performa tinggi Three.js secara langsung tanpa emulator 2D.
              </p>
            </div>

            <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-3.5 text-left text-xs text-slate-300 space-y-2">
              <div className="flex items-center gap-2 text-sky-400 font-medium">
                <Monitor className="w-4 h-4" />
                <span>Tips Mengaktifkan di Browser:</span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-slate-400 text-[11px] leading-relaxed">
                <li>Buka Settings &rarr; System &rarr; aktifkan <strong>"Use graphics acceleration when available"</strong>.</li>
                <li>Buka <code className="bg-slate-800 px-1 py-0.5 rounded text-sky-300">chrome://flags/#ignore-gpu-blocklist</code> lalu pilih Enabled.</li>
              </ul>
            </div>

            <button
              onClick={() => setRetryKey((k) => k + 1)}
              className="w-full py-2.5 px-4 bg-sky-600 hover:bg-sky-500 active:bg-sky-700 text-white font-medium rounded-xl text-sm flex items-center justify-center gap-2 transition-all shadow-lg shadow-sky-600/20"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Coba Inisialisasi Ulang 3D</span>
            </button>
          </div>
        </div>
      )}

      {/* Floating Viewport Status & Hotkey Helper */}
      <div className="absolute bottom-4 left-4 z-10 flex items-center gap-3 bg-slate-900/80 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-slate-800 text-xs text-slate-400 font-mono pointer-events-none">
        <span className="flex items-center gap-1.5">
          <kbd className="px-1.5 py-0.5 bg-slate-800 border border-slate-700 rounded text-slate-200">W</kbd> Move
        </span>
        <span className="flex items-center gap-1.5">
          <kbd className="px-1.5 py-0.5 bg-slate-800 border border-slate-700 rounded text-slate-200">E</kbd> Rotate
        </span>
        <span className="flex items-center gap-1.5">
          <kbd className="px-1.5 py-0.5 bg-slate-800 border border-slate-700 rounded text-slate-200">Ctrl+D</kbd> Clone
        </span>
        <span className="flex items-center gap-1.5">
          <kbd className="px-1.5 py-0.5 bg-slate-800 border border-slate-700 rounded text-slate-200">Del</kbd> Delete
        </span>
        <span className="flex items-center gap-1.5">
          <kbd className="px-1.5 py-0.5 bg-slate-800 border border-slate-700 rounded text-slate-200">F</kbd> Focus
        </span>
      </div>

      {/* Top camera indicator */}
      {cameraMode === 'top' && (
        <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10 bg-amber-500/10 border border-amber-500/40 text-amber-400 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider backdrop-blur-md flex items-center gap-1.5">
          <Box className="w-3.5 h-3.5" />
          <span>Floorplan Mode (3D Top-Down Orthographic)</span>
        </div>
      )}
    </div>
  );
}
