'use client';

import React, { useState } from 'react';
import { X, FileUp, Sparkles, AlertCircle, Check } from 'lucide-react';
import { useEditor } from '@/context/EditorContext';
import { importFromPawn } from '@/utils/pawnParser';
import { MapObject } from '@/types/editor';

interface ImportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ImportModal({ isOpen, onClose }: ImportModalProps) {
  const { loadObjects, objects, isProjectOpen, importProject } = useEditor();

  const [inputCode, setInputCode] = useState('');
  const [newProjectName, setNewProjectName] = useState('');
  const [appendMode, setAppendMode] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleImport = () => {
    setErrorMsg(null);
    setSuccessMsg(null);

    const trimmed = inputCode.trim();
    if (!trimmed) {
      setErrorMsg('Silakan paste baris kode Pawn atau JSON terlebih dahulu.');
      return;
    }

    try {
      let importedObjs: MapObject[] = [];

      // 1. Try parsing as JSON first
      if (trimmed.startsWith('[') || trimmed.startsWith('{')) {
        const parsed = JSON.parse(trimmed);
        const objs: MapObject[] = Array.isArray(parsed) ? parsed : [parsed];
        if (objs.length > 0 && objs[0].modelId) {
          importedObjs = objs;
        }
      }

      // 2. Parse as Pawn script (CreateDynamicObject / CreateObject)
      if (importedObjs.length === 0) {
        importedObjs = importFromPawn(trimmed);
      }

      if (importedObjs.length === 0) {
        setErrorMsg('Tidak ditemukan fungsi CreateDynamicObject, CreateObject, atau JSON yang valid pada teks yang Anda masukkan.');
        return;
      }

      if (!isProjectOpen) {
        const projName = newProjectName.trim() || `Imported Map (${importedObjs.length} Objek)`;
        importProject(projName, importedObjs);
        setSuccessMsg(`Berhasil membuat proyek "${projName}" dengan ${importedObjs.length} objek!`);
      } else {
        loadObjects(appendMode ? [...objects, ...importedObjs] : importedObjs);
        setSuccessMsg(`Berhasil mengimpor ${importedObjs.length} objek ke dalam viewport 3D!`);
      }

      setTimeout(() => {
        onClose();
        setInputCode('');
        setNewProjectName('');
      }, 800);
    } catch (err: unknown) {
      setErrorMsg(`Gagal mengurai kode: ${err instanceof Error ? err.message : String(err)}`);
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = event => {
      const content = event.target?.result as string;
      if (content) {
        setInputCode(content);
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      <div className="w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-xl shadow-2xl flex flex-col max-h-[85vh] overflow-hidden">
        {/* Header */}
        <div className="p-4 border-b border-slate-800 flex items-center justify-between bg-slate-950/60">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-blue-600/20 text-blue-400 flex items-center justify-center border border-blue-500/30">
              <FileUp className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-sm font-bold text-white">Impor Script Pawn / Texture Studio</h2>
              <p className="text-xs text-slate-400">
                Paste baris CreateDynamicObject & SetDynamicObjectMaterial atau upload file .pwn / .json.
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

        {/* Input Area */}
        <div className="p-4 flex-1 flex flex-col gap-3 overflow-hidden">
          <div className="flex items-center justify-between">
            <label className="text-xs font-semibold text-slate-300">
              Paste Baris Kode Pawn di Bawah:
            </label>
            <label className="text-xs text-blue-400 hover:text-blue-300 cursor-pointer font-medium flex items-center gap-1">
              <span>Pilih File (.pwn / .json)</span>
              <input
                type="file"
                accept=".pwn,.txt,.json,.inc"
                onChange={handleFileUpload}
                className="hidden"
              />
            </label>
          </div>

          {!isProjectOpen && (
            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1">
                Nama Proyek Mapping Baru:
              </label>
              <input
                type="text"
                value={newProjectName}
                onChange={e => setNewProjectName(e.target.value)}
                placeholder="Contoh: Mapping Toko Hasil Impor (Opsional)"
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-blue-500 mb-1"
              />
            </div>
          )}

          <textarea
            value={inputCode}
            onChange={e => setInputCode(e.target.value)}
            placeholder={`Contoh:\nnew obj = CreateDynamicObject(19353, 0.0, 1.5, 2.0, 0.0, 0.0, 0.0, -1, -1, -1, 300.0, 300.0);\nSetDynamicObjectMaterial(obj, 0, 19353, "all_walls", "wall008", 0xFF4A4E54);`}
            className="w-full flex-1 min-h-[200px] bg-slate-950 border border-slate-800 rounded-lg p-3 text-xs font-mono text-slate-200 placeholder-slate-600 focus:outline-none focus:border-blue-500 scrollbar-thin resize-none"
          />

          {errorMsg && (
            <div className="flex items-center gap-2 p-2.5 rounded-lg bg-red-950/40 border border-red-500/40 text-xs text-red-300">
              <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
              <span>{errorMsg}</span>
            </div>
          )}

          {successMsg && (
            <div className="flex items-center gap-2 p-2.5 rounded-lg bg-emerald-950/40 border border-emerald-500/40 text-xs text-emerald-300">
              <Check className="w-4 h-4 shrink-0 text-emerald-400" />
              <span>{successMsg}</span>
            </div>
          )}

          {/* Mode Switch: Append vs Replace */}
          <div className="flex items-center gap-2 text-xs text-slate-400 bg-slate-950/50 p-2.5 rounded-lg border border-slate-800">
            <input
              type="checkbox"
              id="appendMode"
              checked={appendMode}
              onChange={e => setAppendMode(e.target.checked)}
              className="rounded bg-slate-900 border-slate-800 text-blue-600"
            />
            <label htmlFor="appendMode" className="cursor-pointer">
              Tambahkan ke objek yang sudah ada (Append Mode) — jika tidak dicentang, scene saat ini akan diganti.
            </label>
          </div>
        </div>

        {/* Footer */}
        <div className="p-3 border-t border-slate-800 bg-slate-950/60 flex items-center justify-end gap-2">
          <button
            onClick={onClose}
            className="px-3.5 py-1.5 rounded-lg text-xs font-medium text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            Batal
          </button>
          <button
            onClick={handleImport}
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/20 transition-all active:scale-95"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Impor & Tampilkan di 3D</span>
          </button>
        </div>
      </div>
    </div>
  );
}
