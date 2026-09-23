'use client';

import React, { useEffect } from 'react';
import {
  Move,
  RotateCw,
  Compass,
  Grid3X3,
  Undo2,
  Redo2,
  FileUp,
  Download,
  Layers,
  Box,
  Magnet,
  LogOut,
  FolderKanban,
  Sparkles
} from 'lucide-react';
import { useEditor } from '@/context/EditorContext';

interface TopNavProps {
  onOpenExport: () => void;
  onOpenImport: () => void;
}

export default function TopNav({ onOpenExport, onOpenImport }: TopNavProps) {
  const {
    currentProject,
    exitProject,
    objects,
    transformMode,
    cameraMode,
    snapSettings,
    canUndo,
    canRedo,
    setTransformMode,
    setCameraMode,
    setSnapSettings,
    undo,
    redo,
    aiDrawerOpen,
    setAiDrawerOpen
  } = useEditor();

  // Keyboard shortcut Ctrl+E for Export and Ctrl+I for Import
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const activeTag = (document.activeElement?.tagName || '').toLowerCase();
      if (activeTag === 'input' || activeTag === 'textarea') return;

      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'e') {
        e.preventDefault();
        onOpenExport();
      } else if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'i') {
        e.preventDefault();
        onOpenImport();
      } else if (e.altKey && e.key.toLowerCase() === 'a') {
        e.preventDefault();
        setAiDrawerOpen(!aiDrawerOpen);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onOpenExport, onOpenImport, aiDrawerOpen, setAiDrawerOpen]);

  return (
    <header className="h-14 bg-slate-900 border-b border-slate-800 flex items-center justify-between px-4 z-20 select-none shrink-0 gap-2 overflow-x-auto no-scrollbar">
      {/* Left: Project Branding & Project Name */}
      <div className="flex items-center gap-3 shrink-0">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-sky-600 to-indigo-600 flex items-center justify-center shadow-md shadow-sky-500/20">
            <Box className="w-4 h-4 text-white" />
          </div>
          <div>
            <h1 className="text-xs font-bold text-white tracking-wide flex items-center gap-1.5">
              <span>SAMP STUDIO</span>
              <span className="text-[10px] font-mono px-1 py-0.2 rounded bg-sky-500/10 text-sky-400 border border-sky-500/20">
                3D
              </span>
            </h1>
          </div>
        </div>

        <div className="h-5 w-px bg-slate-800" />

        {/* Current Project Name Tag */}
        <div
          title={`Proyek Aktif: ${currentProject?.name || 'Tanpa Nama'}`}
          className="flex items-center gap-1.5 text-xs text-slate-200 bg-slate-950/80 px-2.5 py-1 rounded-md border border-slate-800 max-w-[200px]"
        >
          <FolderKanban className="w-3.5 h-3.5 text-sky-400 shrink-0" />
          <span className="font-medium truncate">{currentProject?.name || 'Mapping Aktif'}</span>
        </div>

        <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 bg-slate-950/60 px-2 py-1 rounded-md border border-slate-800">
          <Layers className="w-3.5 h-3.5 text-sky-400" />
          <span>{objects.length} Objek</span>
        </div>
      </div>

      {/* Center Tools: Transform, Snapping, Camera, History */}
      <div className="flex items-center gap-2 shrink-0">
        {/* Transform Mode: Translate vs Rotate */}
        <div className="flex items-center p-0.5 rounded-lg bg-slate-950 border border-slate-800">
          <button
            onClick={() => setTransformMode('translate')}
            title="Translate / Geser (W)"
            className={`flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-medium transition-all ${
              transformMode === 'translate'
                ? 'bg-sky-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            <Move className="w-3.5 h-3.5" />
            <span>Move</span>
          </button>
          <button
            onClick={() => setTransformMode('rotate')}
            title="Rotate / Putar (E)"
            className={`flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-medium transition-all ${
              transformMode === 'rotate'
                ? 'bg-sky-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            <RotateCw className="w-3.5 h-3.5" />
            <span>Rotate</span>
          </button>
        </div>

        {/* Snapping Controls */}
        <div className="flex items-center gap-1.5 bg-slate-950 border border-slate-800 p-0.5 px-2 rounded-lg text-xs">
          <button
            onClick={() => setSnapSettings({ enabled: !snapSettings.enabled })}
            title="Toggle Snapping Grid"
            className={`flex items-center gap-1 px-1 py-1 rounded transition-colors ${
              snapSettings.enabled ? 'text-amber-400 font-semibold' : 'text-slate-500'
            }`}
          >
            <Magnet className="w-3.5 h-3.5" />
            <span>Snap</span>
          </button>

          {snapSettings.enabled && (
            <>
              <select
                value={snapSettings.positionSnap}
                onChange={(e) => setSnapSettings({ positionSnap: parseFloat(e.target.value) })}
                className="bg-slate-900 border border-slate-800 rounded px-1.5 py-0.5 text-[11px] text-slate-300 focus:outline-none focus:border-sky-500 font-mono"
                title="Grid Position Snap"
              >
                <option value="0.1">0.1m</option>
                <option value="0.25">0.25m</option>
                <option value="0.5">0.5m (Dinding)</option>
                <option value="1.0">1.0m</option>
                <option value="2.0">2.0m</option>
                <option value="4.0">4.0m (Ruang)</option>
              </select>

              <select
                value={snapSettings.rotationSnap}
                onChange={(e) => setSnapSettings({ rotationSnap: parseInt(e.target.value, 10) })}
                className="bg-slate-900 border border-slate-800 rounded px-1.5 py-0.5 text-[11px] text-slate-300 focus:outline-none focus:border-sky-500 font-mono"
                title="Rotation Angle Snap"
              >
                <option value="5">5°</option>
                <option value="15">15°</option>
                <option value="45">45°</option>
                <option value="90">90°</option>
              </select>
            </>
          )}
        </div>

        {/* Camera Mode: 3D Perspective vs Floorplan */}
        <div className="flex items-center p-0.5 rounded-lg bg-slate-950 border border-slate-800">
          <button
            onClick={() => setCameraMode('orbit')}
            title="3D Perspective Camera"
            className={`flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-medium transition-all ${
              cameraMode === 'orbit'
                ? 'bg-sky-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            <Compass className="w-3.5 h-3.5" />
            <span>3D View</span>
          </button>
          <button
            onClick={() => setCameraMode('top')}
            title="Top-Down 3D Orthographic Floorplan View"
            className={`flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-medium transition-all ${
              cameraMode === 'top'
                ? 'bg-amber-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            <Grid3X3 className="w-3.5 h-3.5" />
            <span>Floorplan</span>
          </button>
        </div>

        {/* Undo / Redo */}
        <div className="flex items-center gap-0.5">
          <button
            onClick={undo}
            disabled={!canUndo}
            title="Undo (Ctrl+Z)"
            className="p-1.5 rounded-md text-slate-400 hover:text-slate-200 hover:bg-slate-800/60 disabled:opacity-30 disabled:hover:bg-transparent transition-all"
          >
            <Undo2 className="w-4 h-4" />
          </button>
          <button
            onClick={redo}
            disabled={!canRedo}
            title="Redo (Ctrl+Y)"
            className="p-1.5 rounded-md text-slate-400 hover:text-slate-200 hover:bg-slate-800/60 disabled:opacity-30 disabled:hover:bg-transparent transition-all"
          >
            <Redo2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Right: AI Copilot, Import Pawn, Export Code, Exit Proyek */}
      <div className="flex items-center gap-2 shrink-0">
        {/* AI Copilot Button */}
        <button
          onClick={() => setAiDrawerOpen(!aiDrawerOpen)}
          title="Buka AI Architect Copilot (Alt+A)"
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all shadow-md active:scale-95 border ${
            aiDrawerOpen
              ? 'bg-gradient-to-r from-purple-600 to-cyan-500 text-white border-purple-400 shadow-purple-500/25 ring-2 ring-purple-400/40'
              : 'text-purple-300 bg-purple-950/60 hover:bg-purple-900/80 border-purple-500/40 hover:border-purple-400'
          }`}
        >
          <Sparkles className="w-3.5 h-3.5 text-purple-300 animate-pulse" />
          <span>AI Copilot</span>
        </button>

        {/* Import Map Button */}
        <button
          onClick={onOpenImport}
          title="Import script Pawn / Texture Studio (Ctrl+I)"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-emerald-300 bg-emerald-950/60 hover:bg-emerald-900/80 border border-emerald-500/40 hover:border-emerald-400 transition-all shadow-sm active:scale-95"
        >
          <FileUp className="w-3.5 h-3.5 text-emerald-400" />
          <span>Import Map</span>
        </button>

        {/* Export Pawn Button */}
        <button
          onClick={onOpenExport}
          title="Export ke script Pawn SA-MP / open.mp (Ctrl+E)"
          className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-sky-600 to-indigo-600 hover:from-sky-500 hover:to-indigo-500 border border-sky-400/40 transition-all shadow-lg shadow-sky-600/25 active:scale-95"
        >
          <Download className="w-3.5 h-3.5 text-white" />
          <span>Export Code</span>
        </button>

        <div className="h-5 w-px bg-slate-800" />

        {/* Exit Button */}
        <button
          onClick={exitProject}
          title="Simpan & Keluar ke Dashboard Proyek"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-300 hover:text-rose-200 bg-slate-800/80 hover:bg-rose-950/60 border border-slate-700/80 hover:border-rose-500/40 transition-all active:scale-95"
        >
          <LogOut className="w-3.5 h-3.5 text-rose-400" />
          <span>Exit</span>
        </button>
      </div>
    </header>
  );
}
