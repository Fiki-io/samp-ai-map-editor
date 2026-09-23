'use client';

import React, { useState, useMemo } from 'react';
import { X, Copy, Check, Download, FileCode, SlidersHorizontal } from 'lucide-react';
import { useEditor } from '@/context/EditorContext';
import { exportToPawn } from '@/utils/pawnParser';
import { StreamerConfig } from '@/types/editor';

interface ExportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ExportModal({ isOpen, onClose }: ExportModalProps) {
  const { objects } = useEditor();

  const [useNative, setUseNative] = useState(false);
  const [copied, setCopied] = useState(false);

  // Streamer config state
  const [config, setConfig] = useState<StreamerConfig>({
    worldId: -1,
    interiorId: -1,
    playerId: -1,
    streamDistance: 300.0,
    drawDistance: 300.0,
    variableName: 'obj',
    offsetX: 0.0,
    offsetY: 0.0,
    offsetZ: 1000.0
  });

  const generatedPawn = useMemo(() => {
    return exportToPawn(objects, config, useNative);
  }, [objects, config, useNative]);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedPawn);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadPwn = () => {
    const blob = new Blob([generatedPawn], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `interior_map_${Date.now()}.pwn`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleDownloadJson = () => {
    const jsonStr = JSON.stringify(objects, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `interior_project_${Date.now()}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      <div className="w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-xl shadow-2xl flex flex-col max-h-[88vh] overflow-hidden">
        {/* Modal Header */}
        <div className="p-4 border-b border-slate-800 flex items-center justify-between bg-slate-950/60">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-blue-600/20 text-blue-400 flex items-center justify-center border border-blue-500/30">
              <FileCode className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-sm font-bold text-white">Ekspor Kode Pawn / SA-MP Streamer</h2>
              <p className="text-xs text-slate-400">
                {objects.length} Objek siap diekspor lengkap dengan teksur material dan koordinat anti-tabrakan.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Configuration Bar */}
        <div className="p-3 bg-slate-950/40 border-b border-slate-800 space-y-2.5 text-xs">
          {/* Row 1: Core Streamer Settings */}
          <div className="grid grid-cols-4 gap-3">
            <div>
              <label className="block text-[10px] text-slate-400 font-medium mb-1">Format Output</label>
              <select
                value={useNative ? 'native' : 'streamer'}
                onChange={e => setUseNative(e.target.value === 'native')}
                className="w-full bg-slate-900 border border-slate-800 rounded px-2 py-1 text-slate-200 text-xs focus:outline-none focus:border-blue-500"
              >
                <option value="streamer">Streamer Plugin (CreateDynamicObject)</option>
                <option value="native">Native SA-MP (CreateObject)</option>
              </select>
            </div>

            <div>
              <label className="block text-[10px] text-slate-400 font-medium mb-1">Virtual World ID</label>
              <input
                type="number"
                value={config.worldId}
                onChange={e => setConfig(prev => ({ ...prev, worldId: parseInt(e.target.value, 10) || -1 }))}
                className="w-full bg-slate-900 border border-slate-800 rounded px-2 py-1 text-slate-200 text-xs font-mono"
              />
            </div>

            <div>
              <label className="block text-[10px] text-slate-400 font-medium mb-1">Interior ID</label>
              <input
                type="number"
                value={config.interiorId}
                onChange={e => setConfig(prev => ({ ...prev, interiorId: parseInt(e.target.value, 10) || -1 }))}
                className="w-full bg-slate-900 border border-slate-800 rounded px-2 py-1 text-slate-200 text-xs font-mono"
              />
            </div>

            <div>
              <label className="block text-[10px] text-slate-400 font-medium mb-1">Stream / Draw Distance</label>
              <input
                type="number"
                value={config.streamDistance}
                onChange={e => setConfig(prev => ({ ...prev, streamDistance: parseFloat(e.target.value) || 300 }))}
                className="w-full bg-slate-900 border border-slate-800 rounded px-2 py-1 text-slate-200 text-xs font-mono"
              />
            </div>
          </div>

          {/* Row 2: Base Position Offset & Anti-Collision */}
          <div className="pt-2 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-1.5">
              <span className="text-[10px] font-semibold text-slate-300">Lokasi In-Game:</span>
              <button
                type="button"
                onClick={() => setConfig(prev => ({ ...prev, offsetX: 0, offsetY: 0, offsetZ: 1000 }))}
                className={`px-2 py-0.5 rounded text-[10px] font-medium transition-all ${
                  (config.offsetZ || 0) >= 500
                    ? 'bg-blue-600 text-white font-semibold'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                ☁️ Di Atas Langit (+1000m Z)
              </button>
              <button
                type="button"
                onClick={() => setConfig(prev => ({ ...prev, offsetX: 0, offsetY: 0, offsetZ: 0 }))}
                className={`px-2 py-0.5 rounded text-[10px] font-medium transition-all ${
                  (config.offsetZ || 0) === 0
                    ? 'bg-blue-600 text-white font-semibold'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                🏞️ Di Tanah (0m Z)
              </button>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <span className="text-[10px] text-slate-500 font-mono">X:</span>
                <input
                  type="number"
                  step="any"
                  value={config.offsetX ?? 0}
                  onChange={e => setConfig(prev => ({ ...prev, offsetX: parseFloat(e.target.value) || 0 }))}
                  className="w-16 bg-slate-900 border border-slate-800 rounded px-1.5 py-0.5 text-slate-200 text-[10px] font-mono"
                />
              </div>
              <div className="flex items-center gap-1">
                <span className="text-[10px] text-slate-500 font-mono">Y:</span>
                <input
                  type="number"
                  step="any"
                  value={config.offsetY ?? 0}
                  onChange={e => setConfig(prev => ({ ...prev, offsetY: parseFloat(e.target.value) || 0 }))}
                  className="w-16 bg-slate-900 border border-slate-800 rounded px-1.5 py-0.5 text-slate-200 text-[10px] font-mono"
                />
              </div>
              <div className="flex items-center gap-1">
                <span className="text-[10px] text-slate-500 font-mono">Z:</span>
                <input
                  type="number"
                  step="any"
                  value={config.offsetZ ?? 1000}
                  onChange={e => setConfig(prev => ({ ...prev, offsetZ: parseFloat(e.target.value) || 0 }))}
                  className="w-16 bg-slate-900 border border-slate-800 rounded px-1.5 py-0.5 text-slate-200 text-[10px] font-mono text-cyan-300 font-bold"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Code Preview Box */}
        <div className="flex-1 p-3 overflow-y-auto bg-slate-950 font-mono text-[11px] text-emerald-400 select-text scrollbar-thin">
          <pre className="whitespace-pre-wrap leading-relaxed">{generatedPawn}</pre>
        </div>

        {/* Modal Footer Actions */}
        <div className="p-3 border-t border-slate-800 bg-slate-950/60 flex items-center justify-between">
          <button
            onClick={handleDownloadJson}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-400 hover:text-slate-200 bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 transition-all"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Simpan JSON Proyek</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                copied
                  ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/20'
                  : 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700'
              }`}
            >
              {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Tersalin ke Clipboard!' : 'Salin Kode Pawn'}</span>
            </button>

            <button
              onClick={handleDownloadPwn}
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/20 transition-all active:scale-95"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download File .pwn</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
