'use client';

import React, { createContext, useContext, useState, useEffect, useCallback, useMemo, useRef } from 'react';
import {
  MapObject,
  MapProject,
  TransformMode,
  CameraMode,
  SnapSettings,
  MaterialOverride,
  MaterialTextOverride
} from '@/types/editor';
import { getObjectInfo } from '@/data/sampObjects';
import { getTemplateObjects, TemplateType, STARTER_4X4 } from '@/data/templates';

interface EditorContextType {
  // Session & Project Management
  projects: MapProject[];
  currentProject: MapProject | null;
  isProjectOpen: boolean;
  createProject: (name: string, templateType?: TemplateType) => MapProject;
  openProject: (id: string) => void;
  exitProject: () => void;
  deleteProject: (id: string) => void;
  duplicateProject: (id: string) => void;
  renameProject: (id: string, newName: string) => void;
  importProject: (name: string, importedObjects: MapObject[]) => MapProject;

  // Scene Objects & Active State
  objects: MapObject[];
  selectedId: string | null;
  selectedObject: MapObject | undefined;
  transformMode: TransformMode;
  cameraMode: CameraMode;
  snapSettings: SnapSettings;
  canUndo: boolean;
  canRedo: boolean;
  focusTarget: [number, number, number] | null;

  // Editor Actions
  addObject: (modelId: number, customPos?: [number, number, number]) => string;
  updateObject: (id: string, updates: Partial<MapObject>, recordHistory?: boolean) => void;
  deleteObject: (id: string) => void;
  duplicateObject: (id: string) => string | null;
  setSelectedId: (id: string | null) => void;
  setTransformMode: (mode: TransformMode) => void;
  setCameraMode: (mode: CameraMode) => void;
  setSnapSettings: (settings: Partial<SnapSettings>) => void;
  updateMaterial: (id: string, index: number, material: MaterialOverride | null) => void;
  updateMaterialText: (id: string, index: number, textOverride: MaterialTextOverride | null) => void;
  toggleVisibility: (id: string) => void;
  toggleLock: (id: string) => void;
  undo: () => void;
  redo: () => void;
  loadObjects: (newObjects: MapObject[]) => void;
  clearAll: () => void;
  loadTemplateRoom: () => void;
  focusOnSelected: () => void;
  clearFocusTarget: () => void;

  // AI Agentic Copilot
  geminiApiKey: string;
  setGeminiApiKey: (key: string) => void;
  aiDrawerOpen: boolean;
  setAiDrawerOpen: (open: boolean) => void;
  batchAddObjects: (objects: Partial<MapObject>[]) => string[];
  captureCanvasImage: () => string | null;
  registerCanvasCapture: (fn: () => string | null) => void;
  setCameraPreset: (preset: 'front' | 'back' | 'top' | 'inside') => void;
  registerCameraPreset: (fn: (preset: 'front' | 'back' | 'top' | 'inside') => void) => void;
}

const DEFAULT_SNAP: SnapSettings = {
  enabled: true,
  positionSnap: 0.5,
  rotationSnap: 45
};

const PROJECTS_STORAGE_KEY = 'samp_studio_projects';
const ACTIVE_PROJECT_KEY = 'samp_studio_active_project_id';
const LEGACY_STORAGE_KEY = 'samp_interior_map';
const GEMINI_API_KEY_STORAGE = 'samp_studio_gemini_api_key';

const EditorContext = createContext<EditorContextType | null>(null);

export function EditorProvider({ children }: { children: React.ReactNode }) {
  // Project / Session State
  const [projects, setProjects] = useState<MapProject[]>([]);
  const [activeProjectId, setActiveProjectId] = useState<string | null>(null);
  const [isInitialized, setIsInitialized] = useState(false);

  // Active scene objects
  const [objects, setObjects] = useState<MapObject[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [transformMode, setTransformMode] = useState<TransformMode>('translate');
  const [cameraMode, setCameraMode] = useState<CameraMode>('orbit');
  const [snapSettings, setSnapSettingsState] = useState<SnapSettings>(DEFAULT_SNAP);
  const [focusTarget, setFocusTarget] = useState<[number, number, number] | null>(null);

  // Undo / Redo history for active project
  const [history, setHistory] = useState<MapObject[][]>([[]]);
  const [historyIndex, setHistoryIndex] = useState(0);

  // AI Agentic Copilot State
  const [geminiApiKey, setGeminiApiKeyState] = useState<string>('');
  const [aiDrawerOpen, setAiDrawerOpen] = useState<boolean>(false);
  const captureCanvasRef = useRef<(() => string | null) | null>(null);
  const cameraPresetRef = useRef<((preset: 'front' | 'back' | 'top' | 'inside') => void) | null>(null);

  // 1. Initial Load & Migration from localStorage on mount
  useEffect(() => {
    try {
      const savedApiKey = localStorage.getItem(GEMINI_API_KEY_STORAGE);
      if (savedApiKey) {
        setGeminiApiKeyState(savedApiKey);
      }

      let loadedProjects: MapProject[] = [];
      const savedProjects = localStorage.getItem(PROJECTS_STORAGE_KEY);

      if (savedProjects) {
        const parsed = JSON.parse(savedProjects);
        if (Array.isArray(parsed)) {
          loadedProjects = parsed;
        }
      }

      // Check legacy migration if user had previous unsaved project
      if (loadedProjects.length === 0) {
        const legacy = localStorage.getItem(LEGACY_STORAGE_KEY);
        if (legacy) {
          try {
            const parsedLegacy = JSON.parse(legacy);
            if (Array.isArray(parsedLegacy) && parsedLegacy.length > 0) {
              const migratedProj: MapProject = {
                id: `proj_${Date.now()}`,
                name: 'Mapping Default Saya',
                createdAt: Date.now(),
                updatedAt: Date.now(),
                objects: parsedLegacy
              };
              loadedProjects = [migratedProj];
              localStorage.setItem(PROJECTS_STORAGE_KEY, JSON.stringify(loadedProjects));
            }
          } catch {
            // ignore
          }
        }
      }

      // Automatically repair any legacy projects that had the vertical floor or cross-cutting walls
      loadedProjects = loadedProjects.map((p) => {
        let modified = false;
        const fixedObjs = p.objects.map((o) => {
          if (o.id === 'starter_floor' && o.rotation[1] === 0) {
            modified = true;
            return {
              ...o,
              position: [0, 0, -0.089] as [number, number, number],
              rotation: [0, 90, 0] as [number, number, number]
            };
          }
          if (o.id === 'starter_wall_n' && o.rotation[2] === 0) {
            modified = true;
            return {
              ...o,
              position: [0, 1.606, 1.75] as [number, number, number],
              rotation: [0, 0, 90] as [number, number, number]
            };
          }
          if (o.id === 'starter_wall_s' && o.rotation[2] === 180) {
            modified = true;
            return {
              ...o,
              position: [0, -1.606, 1.75] as [number, number, number],
              rotation: [0, 0, 90] as [number, number, number]
            };
          }
          if (o.id === 'starter_wall_e' && o.rotation[2] === 90) {
            modified = true;
            return {
              ...o,
              position: [1.606, 0, 1.75] as [number, number, number],
              rotation: [0, 0, 0] as [number, number, number]
            };
          }
          if (o.id === 'starter_wall_w' && o.rotation[2] === 270) {
            modified = true;
            return {
              ...o,
              position: [-1.606, 0, 1.75] as [number, number, number],
              rotation: [0, 0, 0] as [number, number, number]
            };
          }
          if (o.id === 'starter_couch' && o.position[1] === 0.5) {
            modified = true;
            return {
              ...o,
              position: [0, 0.7, 0.425] as [number, number, number],
              rotation: [0, 0, 180] as [number, number, number]
            };
          }
          return o;
        });

        if (modified) {
          return { ...p, objects: fixedObjs, updatedAt: Date.now() };
        }
        return p;
      });
      localStorage.setItem(PROJECTS_STORAGE_KEY, JSON.stringify(loadedProjects));

      setProjects(loadedProjects);

      // Check active project
      const activeId = localStorage.getItem(ACTIVE_PROJECT_KEY);
      if (activeId) {
        const targetProj = loadedProjects.find((p) => p.id === activeId);
        if (targetProj) {
          setActiveProjectId(targetProj.id);
          setObjects(targetProj.objects);
          setHistory([targetProj.objects]);
          setHistoryIndex(0);
        } else {
          // Stale active ID
          localStorage.removeItem(ACTIVE_PROJECT_KEY);
          setActiveProjectId(null);
        }
      }
    } catch (err) {
      console.error('Error loading projects from storage:', err);
    } finally {
      setIsInitialized(true);
    }
  }, []);

  // Current active project computed
  const currentProject = useMemo(() => {
    if (!activeProjectId) return null;
    return projects.find((p) => p.id === activeProjectId) || null;
  }, [activeProjectId, projects]);

  const isProjectOpen = Boolean(currentProject && isInitialized);

  // Helper: Persist projects to localStorage
  const saveProjectsToStorage = useCallback((updatedProjects: MapProject[]) => {
    try {
      localStorage.setItem(PROJECTS_STORAGE_KEY, JSON.stringify(updatedProjects));
    } catch (err) {
      console.error('Failed to save projects:', err);
    }
  }, []);

  // Helper: Sync current objects into the active project and save
  const syncAndSaveObjects = useCallback(
    (newObjs: MapObject[]) => {
      if (!activeProjectId) return;

      setProjects((prev) => {
        const updated = prev.map((p) => {
          if (p.id !== activeProjectId) return p;
          return {
            ...p,
            objects: newObjs,
            updatedAt: Date.now()
          };
        });
        saveProjectsToStorage(updated);
        return updated;
      });
    },
    [activeProjectId, saveProjectsToStorage]
  );

  const pushHistory = useCallback(
    (newObjects: MapObject[]) => {
      setHistory((prev) => {
        const trimmed = prev.slice(0, historyIndex + 1);
        return [...trimmed, newObjects];
      });
      setHistoryIndex((prev) => prev + 1);
      syncAndSaveObjects(newObjects);
    },
    [historyIndex, syncAndSaveObjects]
  );

  // Project Management Functions
  const createProject = useCallback(
    (name: string, templateType: TemplateType = 'empty'): MapProject => {
      const trimmedName = name.trim() || 'Mapping Tanpa Nama';
      const initialObjects = getTemplateObjects(templateType);
      const newProj: MapProject = {
        id: `proj_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
        name: trimmedName,
        createdAt: Date.now(),
        updatedAt: Date.now(),
        objects: initialObjects
      };

      setProjects((prev) => {
        const updated = [newProj, ...prev];
        saveProjectsToStorage(updated);
        return updated;
      });

      setActiveProjectId(newProj.id);
      localStorage.setItem(ACTIVE_PROJECT_KEY, newProj.id);
      setObjects(initialObjects);
      setHistory([initialObjects]);
      setHistoryIndex(0);
      setSelectedId(null);

      return newProj;
    },
    [saveProjectsToStorage]
  );

  const openProject = useCallback(
    (id: string) => {
      const target = projects.find((p) => p.id === id);
      if (!target) return;

      setActiveProjectId(target.id);
      localStorage.setItem(ACTIVE_PROJECT_KEY, target.id);
      setObjects(target.objects);
      setHistory([target.objects]);
      setHistoryIndex(0);
      setSelectedId(null);
    },
    [projects]
  );

  const exitProject = useCallback(() => {
    // Commit current objects to project before leaving
    if (activeProjectId) {
      syncAndSaveObjects(objects);
    }
    setActiveProjectId(null);
    localStorage.removeItem(ACTIVE_PROJECT_KEY);
    setSelectedId(null);
  }, [activeProjectId, objects, syncAndSaveObjects]);

  const deleteProject = useCallback(
    (id: string) => {
      setProjects((prev) => {
        const filtered = prev.filter((p) => p.id !== id);
        saveProjectsToStorage(filtered);
        return filtered;
      });

      if (activeProjectId === id) {
        setActiveProjectId(null);
        localStorage.removeItem(ACTIVE_PROJECT_KEY);
        setObjects([]);
      }
    },
    [activeProjectId, saveProjectsToStorage]
  );

  const duplicateProject = useCallback(
    (id: string) => {
      const target = projects.find((p) => p.id === id);
      if (!target) return;

      const duplicated: MapProject = {
        ...target,
        id: `proj_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
        name: `${target.name} (Salinan)`,
        createdAt: Date.now(),
        updatedAt: Date.now(),
        objects: JSON.parse(JSON.stringify(target.objects))
      };

      setProjects((prev) => {
        const updated = [duplicated, ...prev];
        saveProjectsToStorage(updated);
        return updated;
      });
    },
    [projects, saveProjectsToStorage]
  );

  const renameProject = useCallback(
    (id: string, newName: string) => {
      const trimmed = newName.trim();
      if (!trimmed) return;

      setProjects((prev) => {
        const updated = prev.map((p) => (p.id === id ? { ...p, name: trimmed, updatedAt: Date.now() } : p));
        saveProjectsToStorage(updated);
        return updated;
      });
    },
    [saveProjectsToStorage]
  );

  const importProject = useCallback(
    (name: string, importedObjects: MapObject[]): MapProject => {
      const trimmedName = name.trim() || `Imported Map (${importedObjects.length} Objek)`;
      const newProj: MapProject = {
        id: `proj_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
        name: trimmedName,
        createdAt: Date.now(),
        updatedAt: Date.now(),
        objects: importedObjects
      };

      setProjects((prev) => {
        const updated = [newProj, ...prev];
        saveProjectsToStorage(updated);
        return updated;
      });

      setActiveProjectId(newProj.id);
      localStorage.setItem(ACTIVE_PROJECT_KEY, newProj.id);
      setObjects(importedObjects);
      setHistory([importedObjects]);
      setHistoryIndex(0);
      setSelectedId(null);

      return newProj;
    },
    [saveProjectsToStorage]
  );

  // Editor Actions
  const selectedObject = useMemo(() => {
    return objects.find((o) => o.id === selectedId);
  }, [objects, selectedId]);

  const addObject = useCallback(
    (modelId: number, customPos?: [number, number, number]): string => {
      const info = getObjectInfo(modelId);
      const newId = `obj_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`;

      const defaultElevation = (info?.dimensions[1] || 1) / 2;
      const pos: [number, number, number] = customPos || [0, 0, parseFloat(defaultElevation.toFixed(3))];

      const newObj: MapObject = {
        id: newId,
        modelId,
        name: info?.name || `Object_${modelId}`,
        category: info?.category || 'props',
        position: pos,
        rotation: [0, 0, 0],
        dimensions: info?.dimensions || [1, 1, 1],
        materials: {
          0: {
            index: 0,
            modelId,
            txdName: info?.txd || 'all_walls',
            textureName: info?.category === 'walls' ? 'wall001' : 'default',
            color: '#e2e8f0'
          }
        },
        materialTexts: {},
        visible: true,
        locked: false
      };

      setObjects((prev) => {
        const updated = [...prev, newObj];
        pushHistory(updated);
        return updated;
      });

      setSelectedId(newId);
      return newId;
    },
    [pushHistory]
  );

  const updateObject = useCallback(
    (id: string, updates: Partial<MapObject>, recordHistory = true) => {
      setObjects((prev) => {
        const updated = prev.map((o) => (o.id === id ? { ...o, ...updates } : o));
        if (recordHistory) {
          pushHistory(updated);
        } else {
          syncAndSaveObjects(updated);
        }
        return updated;
      });
    },
    [pushHistory, syncAndSaveObjects]
  );

  const deleteObject = useCallback(
    (id: string) => {
      setObjects((prev) => {
        const updated = prev.filter((o) => o.id !== id);
        pushHistory(updated);
        return updated;
      });
      if (selectedId === id) {
        setSelectedId(null);
      }
    },
    [selectedId, pushHistory]
  );

  const duplicateObject = useCallback(
    (id: string): string | null => {
      const target = objects.find((o) => o.id === id);
      if (!target) return null;

      const newId = `obj_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`;
      const offset = snapSettings.enabled ? snapSettings.positionSnap : 0.5;

      const cloned: MapObject = {
        ...target,
        id: newId,
        name: `${target.name} (Salinan)`,
        position: [
          parseFloat((target.position[0] + offset).toFixed(3)),
          parseFloat((target.position[1] + offset).toFixed(3)),
          target.position[2]
        ],
        materials: JSON.parse(JSON.stringify(target.materials)),
        materialTexts: JSON.parse(JSON.stringify(target.materialTexts))
      };

      setObjects((prev) => {
        const updated = [...prev, cloned];
        pushHistory(updated);
        return updated;
      });

      setSelectedId(newId);
      return newId;
    },
    [objects, snapSettings, pushHistory]
  );

  const updateMaterial = useCallback(
    (id: string, index: number, material: MaterialOverride | null) => {
      setObjects((prev) => {
        const updated = prev.map((o) => {
          if (o.id !== id) return o;
          const newMats = { ...o.materials };
          if (material === null) {
            delete newMats[index];
          } else {
            newMats[index] = material;
          }
          return { ...o, materials: newMats };
        });
        pushHistory(updated);
        return updated;
      });
    },
    [pushHistory]
  );

  const updateMaterialText = useCallback(
    (id: string, index: number, textOverride: MaterialTextOverride | null) => {
      setObjects((prev) => {
        const updated = prev.map((o) => {
          if (o.id !== id) return o;
          const newTexts = { ...o.materialTexts };
          if (textOverride === null) {
            delete newTexts[index];
          } else {
            newTexts[index] = textOverride;
          }
          return { ...o, materialTexts: newTexts };
        });
        pushHistory(updated);
        return updated;
      });
    },
    [pushHistory]
  );

  const toggleVisibility = useCallback((id: string) => {
    setObjects((prev) => prev.map((o) => (o.id === id ? { ...o, visible: !o.visible } : o)));
  }, []);

  const toggleLock = useCallback((id: string) => {
    setObjects((prev) => prev.map((o) => (o.id === id ? { ...o, locked: !o.locked } : o)));
  }, []);

  const setSnapSettings = useCallback((settings: Partial<SnapSettings>) => {
    setSnapSettingsState((prev) => ({ ...prev, ...settings }));
  }, []);

  const undo = useCallback(() => {
    if (historyIndex > 0) {
      const newIdx = historyIndex - 1;
      setHistoryIndex(newIdx);
      setObjects(history[newIdx]);
      syncAndSaveObjects(history[newIdx]);
    }
  }, [historyIndex, history, syncAndSaveObjects]);

  const redo = useCallback(() => {
    if (historyIndex < history.length - 1) {
      const newIdx = historyIndex + 1;
      setHistoryIndex(newIdx);
      setObjects(history[newIdx]);
      syncAndSaveObjects(history[newIdx]);
    }
  }, [historyIndex, history, syncAndSaveObjects]);

  const loadObjects = useCallback(
    (newObjects: MapObject[]) => {
      setObjects(newObjects);
      pushHistory(newObjects);
      setSelectedId(null);
    },
    [pushHistory]
  );

  const clearAll = useCallback(() => {
    setObjects([]);
    pushHistory([]);
    setSelectedId(null);
  }, [pushHistory]);

  const loadTemplateRoom = useCallback(() => {
    const starter = JSON.parse(JSON.stringify(STARTER_4X4));
    setObjects(starter);
    pushHistory(starter);
    setSelectedId(null);
  }, [pushHistory]);

  const focusOnSelected = useCallback(() => {
    if (selectedObject) {
      setFocusTarget([...selectedObject.position]);
    }
  }, [selectedObject]);

  const clearFocusTarget = useCallback(() => {
    setFocusTarget(null);
  }, []);

  // AI Agentic Copilot Actions
  const setGeminiApiKey = useCallback((key: string) => {
    setGeminiApiKeyState(key);
    localStorage.setItem(GEMINI_API_KEY_STORAGE, key.trim());
  }, []);

  const batchAddObjects = useCallback(
    (newObjs: Partial<MapObject>[]): string[] => {
      const generatedIds: string[] = [];
      const createdList: MapObject[] = newObjs.map((item, idx) => {
        const modelId = item.modelId || 19353;
        const info = getObjectInfo(modelId);
        const newId = item.id || `obj_${Date.now()}_${idx}_${Math.random().toString(36).substring(2, 6)}`;
        generatedIds.push(newId);

        const defaultElevation = (info?.dimensions[1] || 1) / 2;
        const pos: [number, number, number] = item.position || [0, 0, parseFloat(defaultElevation.toFixed(3))];

        return {
          id: newId,
          modelId,
          name: item.name || info?.name || `Object_${modelId}`,
          category: item.category || info?.category || 'props',
          position: pos,
          rotation: item.rotation || [0, 0, 0],
          dimensions: item.dimensions || info?.dimensions || [1, 1, 1],
          materials: item.materials || {
            0: {
              index: 0,
              modelId,
              txdName: info?.txd || 'all_walls',
              textureName: info?.category === 'walls' ? 'wall001' : 'default',
              color: '#e2e8f0'
            }
          },
          materialTexts: item.materialTexts || {},
          visible: item.visible ?? true,
          locked: item.locked ?? false
        };
      });

      setObjects((prev) => {
        const updated = [...prev, ...createdList];
        pushHistory(updated);
        return updated;
      });

      return generatedIds;
    },
    [pushHistory]
  );

  const captureCanvasImage = useCallback(() => {
    return captureCanvasRef.current ? captureCanvasRef.current() : null;
  }, []);

  const registerCanvasCapture = useCallback((fn: () => string | null) => {
    captureCanvasRef.current = fn;
  }, []);

  const setCameraPreset = useCallback((preset: 'front' | 'back' | 'top' | 'inside') => {
    cameraPresetRef.current?.(preset);
  }, []);

  const registerCameraPreset = useCallback((fn: (preset: 'front' | 'back' | 'top' | 'inside') => void) => {
    cameraPresetRef.current = fn;
  }, []);

  return (
    <EditorContext.Provider
      value={{
        projects,
        currentProject,
        isProjectOpen,
        createProject,
        openProject,
        exitProject,
        deleteProject,
        duplicateProject,
        renameProject,
        importProject,
        objects,
        selectedId,
        selectedObject,
        transformMode,
        cameraMode,
        snapSettings,
        canUndo: historyIndex > 0,
        canRedo: historyIndex < history.length - 1,
        focusTarget,
        addObject,
        updateObject,
        deleteObject,
        duplicateObject,
        setSelectedId,
        setTransformMode,
        setCameraMode,
        setSnapSettings,
        updateMaterial,
        updateMaterialText,
        toggleVisibility,
        toggleLock,
        undo,
        redo,
        loadObjects,
        clearAll,
        loadTemplateRoom,
        focusOnSelected,
        clearFocusTarget,
        geminiApiKey,
        setGeminiApiKey,
        aiDrawerOpen,
        setAiDrawerOpen,
        batchAddObjects,
        captureCanvasImage,
        registerCanvasCapture,
        setCameraPreset,
        registerCameraPreset
      }}
    >
      {children}
    </EditorContext.Provider>
  );
}

export function useEditor() {
  const context = useContext(EditorContext);
  if (!context) {
    throw new Error('useEditor must be used within an EditorProvider');
  }
  return context;
}
