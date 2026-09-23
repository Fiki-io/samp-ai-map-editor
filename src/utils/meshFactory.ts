import * as THREE from 'three';
import { MapObject } from '@/types/editor';

// Cache generated textures and loaded geometries
const textureCache = new Map<string, THREE.CanvasTexture>();
const geoCache = new Map<number, THREE.BufferGeometry | null>(); // null = not available

/**
 * Coordinate Conversion Utilities between SA-MP and Three.js
 * 
 * SA-MP Coordinate System:
 * - X: East (+) / West (-)
 * - Y: North (+) / South (-) -> In Three.js this is -Z (Forward/Depth)
 * - Z: Elevation / Floor Height (+) -> In Three.js this is Y (Up)
 * 
 * SA-MP Rotation System (degrees):
 * - RX: Roll
 * - RY: Pitch
 * - RZ: Compass Yaw (0 = North, 90 = West, 180 = South, 270 = East)
 *       In Three.js, Yaw around the vertical axis is RotY!
 */
export function sampToThreePosition(sampPos: [number, number, number]): [number, number, number] {
  return [sampPos[0], sampPos[2], -sampPos[1]];
}

export function threeToSampPosition(threePos: [number, number, number]): [number, number, number] {
  return [
    parseFloat(threePos[0].toFixed(4)),
    parseFloat((-threePos[2]).toFixed(4)),
    parseFloat(threePos[1].toFixed(4))
  ];
}

export function sampToThreeRotation(sampRot: [number, number, number]): [number, number, number] {
  return [
    THREE.MathUtils.degToRad(sampRot[0]),
    THREE.MathUtils.degToRad(-sampRot[2]), // SA-MP RZ (Yaw) -> Three.js Y (Yaw)
    THREE.MathUtils.degToRad(sampRot[1])
  ];
}

export function threeToSampRotation(threeRotRad: [number, number, number]): [number, number, number] {
  let rz = -THREE.MathUtils.radToDeg(threeRotRad[1]);
  // Normalize RZ to 0 - 360
  rz = ((rz % 360) + 360) % 360;
  return [
    parseFloat(THREE.MathUtils.radToDeg(threeRotRad[0]).toFixed(2)),
    parseFloat(THREE.MathUtils.radToDeg(threeRotRad[2]).toFixed(2)),
    parseFloat(rz.toFixed(2))
  ];
}

let bundleIndexPromise: Promise<Record<string, string>> | null = null;
const loadedBundles = new Set<string>();
const loadingBundlePromises = new Map<string, Promise<void>>();

function buildBufferGeometryFromData(data: { vertices: number[]; normals?: number[]; uvs?: number[]; indices?: number[] }): THREE.BufferGeometry {
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(data.vertices, 3));
  if (data.normals && data.normals.length > 0) {
    geo.setAttribute('normal', new THREE.Float32BufferAttribute(data.normals, 3));
  }
  if (data.uvs && data.uvs.length > 0) {
    geo.setAttribute('uv', new THREE.Float32BufferAttribute(data.uvs, 2));
  }
  if (data.indices && data.indices.length > 0) {
    geo.setIndex(data.indices);
  }
  if (!data.normals || data.normals.length === 0) {
    geo.computeVertexNormals();
  }
  geo.userData = { isCachedDFF: true };
  return geo;
}

/**
 * Fetch and cache DFF-based geometries from lightweight category bundles (/models/bundles/{category}.json)
 * Automatically bundles on-demand, caching 100+ models in memory per category load.
 */
export async function fetchDFFGeometry(modelId: number): Promise<THREE.BufferGeometry | null> {
  if (geoCache.has(modelId)) return geoCache.get(modelId)!;

  try {
    // 1. Fetch category index once (32 KB)
    if (!bundleIndexPromise) {
      bundleIndexPromise = fetch('/models/bundles/index.json')
        .then(res => res.ok ? res.json() : {})
        .catch(() => ({}));
    }
    const index = await bundleIndexPromise;
    const bundleFile = index[modelId.toString()];

    if (!bundleFile) {
      // Not in DFF index, fallback to procedural geometry
      geoCache.set(modelId, null);
      return null;
    }

    // 2. Load the category bundle if not already loaded or loading
    if (!loadedBundles.has(bundleFile)) {
      if (!loadingBundlePromises.has(bundleFile)) {
        const loadP = (async () => {
          try {
            const res = await fetch(`/models/bundles/${bundleFile}`);
            if (res.ok) {
              const bundleData = await res.json() as Record<string, { vertices: number[]; normals?: number[]; uvs?: number[]; indices?: number[] }>;
              for (const [mStr, mData] of Object.entries(bundleData)) {
                const mNum = parseInt(mStr, 10);
                if (!isNaN(mNum) && !geoCache.has(mNum)) {
                  geoCache.set(mNum, buildBufferGeometryFromData(mData));
                }
              }
              loadedBundles.add(bundleFile);
            }
          } catch (e) {
            console.warn(`Failed to load bundle ${bundleFile}:`, e);
          }
        })();
        loadingBundlePromises.set(bundleFile, loadP);
      }
      await loadingBundlePromises.get(bundleFile);
    }

    return geoCache.get(modelId) || null;
  } catch {
    geoCache.set(modelId, null);
    return null;
  }
}

/**
 * Creates lightweight, high-performance 256x256 procedural canvas textures
 */
function createProceduralTexture(type: string, colorHex: string): THREE.CanvasTexture {
  const cacheKey = `${type}_${colorHex}`;
  if (textureCache.has(cacheKey)) return textureCache.get(cacheKey)!;

  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 256;
  const ctx = canvas.getContext('2d')!;

  ctx.fillStyle = colorHex;
  ctx.fillRect(0, 0, 256, 256);

  if (type === 'wood') {
    // 4 horizontal wooden planks with distinct grain lines and seams
    const plankH = 64;
    for (let p = 0; p < 256; p += plankH) {
      ctx.fillStyle = 'rgba(0,0,0,0.06)';
      ctx.fillRect(0, p, 256, 2);

      ctx.fillStyle = 'rgba(255,255,255,0.04)';
      ctx.fillRect(0, p + 2, 256, 1);

      // Fine wood grain fibers
      for (let y = p + 4; y < p + plankH - 2; y += 6) {
        ctx.strokeStyle = `rgba(0,0,0,${0.03 + Math.random() * 0.05})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.bezierCurveTo(85, y + (Math.random() * 3 - 1.5), 170, y + (Math.random() * 3 - 1.5), 256, y);
        ctx.stroke();
      }
    }
  } else if (type === 'tile') {
    // 4x4 ceramic tiles with neat beveled edges and dark grout
    const size = 64;
    ctx.strokeStyle = 'rgba(0,0,0,0.35)';
    ctx.lineWidth = 4;
    for (let x = 0; x <= 512; x += size) {
      ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, 512); ctx.stroke();
    }
    for (let y = 0; y <= 512; y += size) {
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(512, y); ctx.stroke();
    }
    // Subtle tile surface reflection gradient
    for (let x = 0; x < 512; x += size) {
      for (let y = 0; y < 512; y += size) {
        const grad = ctx.createLinearGradient(x, y, x + size, y + size);
        grad.addColorStop(0, 'rgba(255,255,255,0.08)');
        grad.addColorStop(1, 'rgba(0,0,0,0.05)');
        ctx.fillStyle = grad;
        ctx.fillRect(x + 4, y + 4, size - 8, size - 8);
      }
    }
  } else if (type === 'marble') {
    // Elegant organic marble veins
    ctx.strokeStyle = 'rgba(255,255,255,0.25)';
    ctx.lineWidth = 3;
    for (let i = 0; i < 8; i++) {
      ctx.beginPath();
      ctx.moveTo(Math.random() * 512, 0);
      ctx.bezierCurveTo(
        Math.random() * 512, 170,
        Math.random() * 512, 340,
        Math.random() * 512, 512
      );
      ctx.stroke();
    }
    // Sub-veins
    ctx.strokeStyle = 'rgba(0,0,0,0.12)';
    ctx.lineWidth = 1.5;
    for (let i = 0; i < 6; i++) {
      ctx.beginPath();
      ctx.moveTo(0, Math.random() * 512);
      ctx.bezierCurveTo(
        170, Math.random() * 512,
        340, Math.random() * 512,
        512, Math.random() * 512
      );
      ctx.stroke();
    }
  } else if (type === 'brick') {
    // Running bond industrial brickwork
    const rowH = 32;
    const colW = 64;
    ctx.strokeStyle = 'rgba(255,255,255,0.2)';
    ctx.lineWidth = 3;
    for (let r = 0; r < 512; r += rowH) {
      ctx.beginPath(); ctx.moveTo(0, r); ctx.lineTo(512, r); ctx.stroke();
      const offset = (Math.floor(r / rowH) % 2) * (colW / 2);
      for (let c = offset; c < 512; c += colW) {
        ctx.beginPath(); ctx.moveTo(c, r); ctx.lineTo(c, r + rowH); ctx.stroke();
      }
    }
  } else if (type === 'carpet') {
    // Fine woven carpet fiber texture
    ctx.fillStyle = 'rgba(0,0,0,0.06)';
    for (let i = 0; i < 400; i++) {
      ctx.fillRect(Math.random() * 512, Math.random() * 512, 2, 2);
    }
  } else if (type === 'wallpaper') {
    // Refined vertical pinstripes
    ctx.strokeStyle = 'rgba(255,255,255,0.12)';
    ctx.lineWidth = 3;
    for (let x = 16; x < 512; x += 32) {
      ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, 512); ctx.stroke();
    }
  } else {
    // 'drywall' / default: Realistic interior drywall & plaster with micro-stippling and subtle ambient gradient
    ctx.fillStyle = 'rgba(0,0,0,0.04)';
    for (let i = 0; i < 500; i++) {
      ctx.fillRect(Math.random() * 512, Math.random() * 512, 2, 2);
    }
    ctx.fillStyle = 'rgba(255,255,255,0.05)';
    for (let i = 0; i < 350; i++) {
      ctx.fillRect(Math.random() * 512, Math.random() * 512, 1.5, 1.5);
    }
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  textureCache.set(cacheKey, texture);
  return texture;
}

function getTextureType(txdName: string, texName: string): string {
  const txd = txdName.toLowerCase();
  const tex = texName.toLowerCase();
  if (txd.includes('wood') || tex.includes('wood') || tex.includes('timber') || tex.includes('parquet') || tex.includes('des_crckrock') || tex.includes('pine')) return 'wood';
  if (txd.includes('tile') || tex.includes('tile') || tex.includes('wall027') || tex.includes('wall028') || tex.includes('wall029')) return 'tile';
  if (txd.includes('brick') || tex.includes('brick') || tex.includes('wall010') || tex.includes('wall011')) return 'brick';
  if (txd.includes('marble') || tex.includes('marble') || tex.includes('wall025') || tex.includes('wall026')) return 'marble';
  if (txd.includes('carpet') || tex.includes('carpet') || tex.includes('wall016') || tex.includes('wall017') || tex.includes('wall022')) return 'carpet';
  if (tex.includes('wall018') || tex.includes('wall024') || txd.includes('wallpaper')) return 'wallpaper';
  return 'drywall';
}

function buildMaterial(obj: MapObject): THREE.MeshStandardMaterial {
  const mat0 = obj.materials[0];
  let baseColor = mat0?.color || '#e2e8f0';
  // If color is pure black from Pawn (0x00000000 = default un-tinted texture in SA-MP), fallback to clean drywall color
  if (baseColor === '#000000' || baseColor === '#000') {
    baseColor = '#e2e8f0';
  }
  const textureType = mat0 ? getTextureType(mat0.txdName, mat0.textureName) : 'drywall';
  const texture = createProceduralTexture(textureType, baseColor);

  return new THREE.MeshStandardMaterial({
    color: baseColor,
    map: texture,
    roughness: textureType === 'marble' || textureType === 'tile' ? 0.25 : 0.7,
    metalness: textureType === 'marble' ? 0.1 : 0.02,
    side: THREE.DoubleSide,       // 100% solid, visible from both front and back
    shadowSide: THREE.DoubleSide, // Solid shadow casting on both sides
    transparent: false,           // Explicitly opaque - never transparent
    opacity: 1.0,
    depthWrite: true,
    depthTest: true
  });
}

/**
 * Creates a Three.js Group from a real DFF geometry (if available),
 * or falls back to a high-fidelity procedural interior mesh.
 */
export function createObjectMesh(
  obj: MapObject,
  isSelected: boolean,
  dffGeo?: THREE.BufferGeometry | null
): THREE.Group {
  const group = new THREE.Group();
  group.name = obj.id;
  group.userData = { mapObjectId: obj.id, modelId: obj.modelId };

  // Convert SA-MP coordinates [X, Y (North), Z (Height)] to Three.js [X, Y (Height), -Z (Depth)]
  const [tx, ty, tz] = sampToThreePosition(obj.position);
  group.position.set(tx, ty, tz);

  // Convert SA-MP rotation [RX, RY, RZ (Yaw)] to Three.js [RX, -RotY (Yaw), RZ]
  const [rx, ry, rz] = sampToThreeRotation(obj.rotation);
  group.rotation.set(rx, ry, rz);

  const material = buildMaterial(obj);
  const [w, h, d] = obj.dimensions;
  const cat = obj.category || 'props';
  const lname = obj.name.toLowerCase();

  // ── 1. USE REAL DFF GEOMETRY if available ──────────────────────────────────
  if (dffGeo) {
    const mesh = new THREE.Mesh(dffGeo, material);
    // Performance optimization: only large structures cast shadows to save 60%+ shadow draw calls
    const isLargeStructure = cat === 'walls' || cat === 'floors' || (w * h * d > 2.5);
    mesh.castShadow = isLargeStructure;
    mesh.receiveShadow = true;
    group.add(mesh);

    // Only render bounding selection box when specifically selected to avoid 100+ line draw calls
    if (isSelected) {
      dffGeo.computeBoundingBox();
      const bb = dffGeo.boundingBox!;
      const bbW = Math.max(bb.max.x - bb.min.x, 0.1);
      const bbH = Math.max(bb.max.y - bb.min.y, 0.1);
      const bbD = Math.max(bb.max.z - bb.min.z, 0.1);
      addSelectionBox(group, bbW, bbH, bbD);
    }
    return group;
  }

  // ── 2. HIGH-FIDELITY PROCEDURAL FALLBACKS ────────────────────────────────────
  if (cat === 'walls' || (obj.modelId >= 19353 && obj.modelId <= 19465)) {
    // Modular Wall (w = width along X, h = height along Y, d = thickness along Z)
    const wallGeo = new THREE.BoxGeometry(w, h, d);
    const wallMesh = new THREE.Mesh(wallGeo, material);
    wallMesh.castShadow = true;
    wallMesh.receiveShadow = true;
    group.add(wallMesh);

    // Skirting baseboard at floor level
    const baseMat = new THREE.MeshStandardMaterial({ color: '#1e293b', roughness: 0.5, side: THREE.DoubleSide });
    const baseMesh = new THREE.Mesh(new THREE.BoxGeometry(w + 0.01, 0.12, d + 0.02), baseMat);
    baseMesh.position.y = -h / 2 + 0.06;
    group.add(baseMesh);

  } else if (cat === 'floors' || obj.modelId === 19379 || obj.modelId === 19380) {
    // Floor/Ceiling Slab: w along X, 0.15 thickness along Y, d along Z
    const floorMesh = new THREE.Mesh(new THREE.BoxGeometry(w, 0.15, d), material);
    floorMesh.receiveShadow = true;
    group.add(floorMesh);

  } else if (cat === 'living' && (lname.includes('couch') || lname.includes('sofa'))) {
    // Detailed 3-Seater Sofa with cushions, armrests, and legs
    const seatMat = buildMaterial(obj);
    const seatBase = new THREE.Mesh(new THREE.BoxGeometry(w * 0.88, h * 0.38, d * 0.65), seatMat);
    seatBase.position.set(0, -h * 0.15, 0);
    group.add(seatBase);

    // Backrest
    const back = new THREE.Mesh(new THREE.BoxGeometry(w * 0.88, h * 0.55, d * 0.25), seatMat);
    back.position.set(0, h * 0.12, -d * 0.22);
    group.add(back);

    // Arms
    const armGeo = new THREE.BoxGeometry(w * 0.12, h * 0.5, d * 0.75);
    const leftArm = new THREE.Mesh(armGeo, seatMat);
    leftArm.position.set(-w * 0.44, -h * 0.05, 0);
    group.add(leftArm);
    const rightArm = new THREE.Mesh(armGeo, seatMat);
    rightArm.position.set(w * 0.44, -h * 0.05, 0);
    group.add(rightArm);

    // Legs
    const legMat = new THREE.MeshStandardMaterial({ color: '#2a1f1a', roughness: 0.8, side: THREE.DoubleSide });
    const legGeo = new THREE.BoxGeometry(0.06, 0.14, 0.06);
    [[-w * 0.4, -h / 2 + 0.07, -d * 0.28], [w * 0.4, -h / 2 + 0.07, -d * 0.28],
     [-w * 0.4, -h / 2 + 0.07, d * 0.28], [w * 0.4, -h / 2 + 0.07, d * 0.28]].forEach(([lx, ly, lz]) => {
      const leg = new THREE.Mesh(legGeo, legMat);
      leg.position.set(lx, ly, lz);
      group.add(leg);
    });

  } else if (cat === 'bedroom' && lname.includes('bed')) {
    // Realistic Bed with headboard, mattress, and dual pillows
    const frameMat = new THREE.MeshStandardMaterial({ color: '#33271e', roughness: 0.8, side: THREE.DoubleSide });
    const mattressMat = buildMaterial(obj);

    const bedBase = new THREE.Mesh(new THREE.BoxGeometry(w, h * 0.22, d), frameMat);
    bedBase.position.y = -h * 0.35;
    group.add(bedBase);

    const mattress = new THREE.Mesh(new THREE.BoxGeometry(w * 0.94, h * 0.45, d * 0.94), mattressMat);
    mattress.position.y = -h * 0.05;
    group.add(mattress);

    const head = new THREE.Mesh(new THREE.BoxGeometry(w, h * 0.9, d * 0.12), frameMat);
    head.position.set(0, h * 0.05, -d / 2 + 0.06);
    group.add(head);

    const pillowMat = new THREE.MeshStandardMaterial({ color: '#ffffff', roughness: 0.9, side: THREE.DoubleSide });
    const pillowGeo = new THREE.BoxGeometry(w * 0.38, 0.12, d * 0.22);
    [-w * 0.24, w * 0.24].forEach(px => {
      const p = new THREE.Mesh(pillowGeo, pillowMat);
      p.position.set(px, h * 0.22, -d * 0.25);
      group.add(p);
    });

  } else if (cat === 'kitchen' && (lname.includes('sink') || lname.includes('counter') || lname.includes('cabinet'))) {
    // Kitchen Cabinet with stainless sink and countertop
    const counterMat = new THREE.MeshStandardMaterial({ color: '#27272a', roughness: 0.3, side: THREE.DoubleSide });
    const bodyMat = buildMaterial(obj);

    const body = new THREE.Mesh(new THREE.BoxGeometry(w, h * 0.9, d * 0.92), bodyMat);
    body.position.y = -h * 0.05;
    group.add(body);

    const counter = new THREE.Mesh(new THREE.BoxGeometry(w * 1.02, h * 0.1, d), counterMat);
    counter.position.y = h / 2 - 0.05;
    group.add(counter);

  } else if (cat === 'bathroom' && lname.includes('toilet')) {
    // Ceramic Toilet Bowl with cistern tank
    const ceramicMat = new THREE.MeshStandardMaterial({ color: '#f8fafc', roughness: 0.15, side: THREE.DoubleSide });
    const tank = new THREE.Mesh(new THREE.BoxGeometry(w * 0.75, h * 0.55, d * 0.3), ceramicMat);
    tank.position.set(0, h * 0.18, -d * 0.3);
    group.add(tank);

    const bowl = new THREE.Mesh(new THREE.CylinderGeometry(w * 0.38, w * 0.3, h * 0.45, 16), ceramicMat);
    bowl.position.set(0, -h * 0.22, d * 0.08);
    group.add(bowl);

  } else if (cat === 'office' && lname.includes('desk')) {
    // Office Desk with tabletop and dual leg pillars
    const woodMat = buildMaterial(obj);
    const top = new THREE.Mesh(new THREE.BoxGeometry(w, 0.08, d), woodMat);
    top.position.y = h / 2 - 0.04;
    group.add(top);

    const legL = new THREE.Mesh(new THREE.BoxGeometry(0.08, h - 0.08, d * 0.9), woodMat);
    legL.position.set(-w / 2 + 0.1, 0, 0);
    group.add(legL);

    const legR = new THREE.Mesh(new THREE.BoxGeometry(0.08, h - 0.08, d * 0.9), woodMat);
    legR.position.set(w / 2 - 0.1, 0, 0);
    group.add(legR);

  } else if (cat === 'lighting') {
    // Ambient Ceiling Light Fixture with warm emissive core
    const fixtureMat = new THREE.MeshStandardMaterial({ color: '#1e293b', roughness: 0.3, metalness: 0.5, side: THREE.DoubleSide });
    const bulbMat = new THREE.MeshStandardMaterial({
      color: '#fffbeb',
      emissive: new THREE.Color('#fef08a'),
      emissiveIntensity: 0.9,
      side: THREE.DoubleSide
    });

    const housing = new THREE.Mesh(new THREE.CylinderGeometry(w * 0.45, w * 0.55, h * 0.4, 16), fixtureMat);
    group.add(housing);

    const bulb = new THREE.Mesh(new THREE.SphereGeometry(w * 0.25, 16, 12), bulbMat);
    bulb.position.y = -h * 0.15;
    group.add(bulb);

  } else if (cat === 'doors') {
    // Wooden Door with frame and metallic brass handle
    const doorMat = buildMaterial(obj);
    const door = new THREE.Mesh(new THREE.BoxGeometry(w * 0.88, h * 0.96, d), doorMat);
    group.add(door);

    const frameMat = new THREE.MeshStandardMaterial({ color: '#1e293b', roughness: 0.6, side: THREE.DoubleSide });
    const frameL = new THREE.Mesh(new THREE.BoxGeometry(w * 0.06, h, d * 1.1), frameMat);
    frameL.position.x = -w / 2 + 0.03;
    group.add(frameL);
    const frameR = new THREE.Mesh(new THREE.BoxGeometry(w * 0.06, h, d * 1.1), frameMat);
    frameR.position.x = w / 2 - 0.03;
    group.add(frameR);

    const handleMat = new THREE.MeshStandardMaterial({ color: '#eab308', metalness: 0.9, roughness: 0.15, side: THREE.DoubleSide });
    const handle = new THREE.Mesh(new THREE.CylinderGeometry(0.016, 0.016, 0.16, 8), handleMat);
    handle.rotation.z = Math.PI / 2;
    handle.position.set(w * 0.35, 0, d / 2 + 0.03);
    group.add(handle);

  } else {
    // Generic high-detail box
    const mesh = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), material);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    group.add(mesh);
  }

  // Edge outline for crisp architectural look
  const edgesGeo = new THREE.EdgesGeometry(new THREE.BoxGeometry(w, h, d));
  const edgesMat = new THREE.LineBasicMaterial({
    color: isSelected ? 0x38bdf8 : 0x334155,
    opacity: isSelected ? 1 : 0.4,
    transparent: !isSelected,
    depthWrite: false
  });
  const edgeSeg = new THREE.LineSegments(edgesGeo, edgesMat);
  edgeSeg.userData = { isEdgeOutline: true };
  group.add(edgeSeg);

  if (isSelected) {
    addSelectionBox(group, w, h, d);
  }
  return group;
}

function addSelectionBox(group: THREE.Group, w: number, h: number, d: number) {
  const selGeo = new THREE.EdgesGeometry(new THREE.BoxGeometry(w + 0.08, h + 0.08, d + 0.08));
  const selMat = new THREE.LineBasicMaterial({ color: '#38bdf8', linewidth: 2, depthWrite: false });
  const selSeg = new THREE.LineSegments(selGeo, selMat);
  selSeg.userData = { isSelectionBox: true };
  group.add(selSeg);
}

/**
 * Updates selection visuals without tearing down or rebuilding 3D geometries
 */
export function updateMeshSelection(
  group: THREE.Group,
  isSelected: boolean,
  dimensions: [number, number, number]
) {
  // 1. Update edge outlines
  group.traverse((child) => {
    if (child.userData?.isEdgeOutline && (child as THREE.LineSegments).material) {
      const mat = (child as THREE.LineSegments).material as THREE.LineBasicMaterial;
      mat.color.setHex(isSelected ? 0x38bdf8 : 0x334155);
      mat.opacity = isSelected ? 1 : 0.4;
      mat.needsUpdate = true;
    }
  });

  // 2. Remove existing selection box if any
  const toRemove: THREE.Object3D[] = [];
  group.children.forEach((c) => {
    if (c.userData?.isSelectionBox) {
      toRemove.push(c);
    }
  });
  toRemove.forEach((c) => {
    group.remove(c);
    if ((c as THREE.LineSegments).geometry) (c as THREE.LineSegments).geometry.dispose();
    if ((c as THREE.LineSegments).material) {
      const m = (c as THREE.LineSegments).material;
      if (Array.isArray(m)) m.forEach(x => x.dispose());
      else m.dispose();
    }
  });

  // 3. If newly selected, add selection box
  if (isSelected) {
    addSelectionBox(group, dimensions[0], dimensions[1], dimensions[2]);
  }
}

/**
 * Recursively disposes geometries and materials to prevent WebGL memory leaks
 */
export function disposeHierarchy(node: THREE.Object3D) {
  node.traverse((child) => {
    const isMesh = 'isMesh' in child && Boolean((child as THREE.Mesh).isMesh);
    const isLine = 'isLineSegments' in child && Boolean((child as THREE.LineSegments).isLineSegments);
    if (isMesh || isLine) {
      const obj = child as THREE.Mesh;
      if (obj.geometry && !obj.geometry.userData?.isCachedDFF) {
        obj.geometry.dispose();
      }
      if (obj.material) {
        if (Array.isArray(obj.material)) {
          obj.material.forEach((m) => m.dispose());
        } else {
          obj.material.dispose();
        }
      }
    }
  });
}

