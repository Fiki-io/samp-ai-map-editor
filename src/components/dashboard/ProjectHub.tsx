'use client';

import React, { useState } from 'react';
import { useEditor } from '@/context/EditorContext';
import { TEMPLATE_LIST, TemplateType } from '@/data/templates';
import {
  FolderPlus,
  FileUp,
  Download,
  Trash2,
  Copy,
  FolderOpen,
  Box,
  Layers,
  Sparkles,
  Search,
  Clock,
  Compass,
  ArrowRight,
  Plus,
  Store,
  Home,
  Grid3X3
} from 'lucide-react';

interface ProjectHubProps {
  onOpenImport: () => void;
  onOpenExportForProject?: (projectId: string) => void;
}

export default function ProjectHub({ onOpenImport, onOpenExportForProject }: ProjectHubProps) {
  const {
    projects,
    createProject,
    openProject,
    deleteProject,
    duplicateProject,
    renameProject
  } = useEditor();

  const [searchQuery, setSearchQuery] = useState('');
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [newProjectName, setNewProjectName] = useState('');
  const [selectedTemplate, setSelectedTemplate] = useState<TemplateType>('empty');

  // Inline rename state
  const [renamingId, setRenamingId] = useState<string | null>(null);
  const [renameValue, setRenameValue] = useState('');

  const filteredProjects = projects.filter((p) =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleStartCreate = (defaultTemplate: TemplateType = 'empty') => {
    setSelectedTemplate(defaultTemplate);
    setNewProjectName(
      defaultTemplate === 'empty'
        ? 'Interior Baru'
        : defaultTemplate === 'starter_4x4'
        ? 'Ruangan Minimalis 4x4m'
        : defaultTemplate === 'room_8x8'
        ? 'Ruang Tamu Luas 8x8m'
        : 'Toko Minimarket 24/7'
    );
    setIsCreateModalOpen(true);
  };

  const handleConfirmCreate = (e: React.FormEvent) => {
    e.preventDefault();
    createProject(newProjectName, selectedTemplate);
    setIsCreateModalOpen(false);
  };

  const formatTimestamp = (ts: number) => {
    const diffMs = Date.now() - ts;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMins / 60);
    const diffDays = Math.floor(diffHours / 24);

    if (diffMins < 1) return 'Baru saja';
    if (diffMins < 60) return `${diffMins} menit yang lalu`;
    if (diffHours < 24) return `${diffHours} jam yang lalu`;
    if (diffDays < 7) return `${diffDays} hari yang lalu`;
    return new Date(ts).toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  const getTemplateIcon = (id: TemplateType) => {
    switch (id) {
      case 'empty':
        return <Box className="w-5 h-5 text-sky-400" />;
      case 'starter_4x4':
        return <Home className="w-5 h-5 text-emerald-400" />;
      case 'room_8x8':
        return <Grid3X3 className="w-5 h-5 text-indigo-400" />;
      case 'store_247':
        return <Store className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#070b14] text-slate-100 flex flex-col select-none overflow-y-auto">
      {/* Top Navbar */}
      <header className="h-16 border-b border-slate-800/80 bg-slate-900/60 backdrop-blur-xl px-6 flex items-center justify-between shrink-0 sticky top-0 z-30">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-sky-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-sky-500/20 border border-sky-400/30">
            <Compass className="w-5 h-5 text-white" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-sm tracking-wide text-white">SA-MP 3D STUDIO</span>
              <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/20">
                PRO EDITION
              </span>
            </div>
            <p className="text-[11px] text-slate-400 font-mono">Open.mp & SA-MP Interior Map Editor</p>
          </div>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            onClick={onOpenImport}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-medium text-slate-200 bg-slate-800/90 hover:bg-slate-700/90 border border-slate-700/80 transition-all shadow-sm hover:border-slate-600"
          >
            <FileUp className="w-4 h-4 text-emerald-400" />
            <span>Import Pawn / TXD</span>
          </button>

          <button
            onClick={() => handleStartCreate('empty')}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-500 hover:to-blue-500 border border-sky-400/30 transition-all shadow-lg shadow-sky-600/25 active:scale-95"
          >
            <Plus className="w-4 h-4" />
            <span>Buat Mapping Baru</span>
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-6xl w-full mx-auto p-6 md:p-10 space-y-10">
        {/* Scenario 1: User Baru / Belum Ada Mapping */}
        {projects.length === 0 ? (
          <div className="space-y-8 py-6">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-medium mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Siap Digunakan Tanpa Setup Rumit</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                Mulai Desain Interior SA-MP Anda
              </h1>
              <p className="text-sm text-slate-400 leading-relaxed">
                Anda belum memiliki mapping yang tersimpan di sesi ini. Pilih salah satu template di bawah untuk membuka editor 3D, atau import script Pawn yang sudah ada.
              </p>
            </div>

            {/* Quick Template Choice Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
              {TEMPLATE_LIST.map((tpl) => (
                <div
                  key={tpl.id}
                  onClick={() => handleStartCreate(tpl.id)}
                  className="group relative bg-slate-900/60 hover:bg-slate-800/80 border border-slate-800 hover:border-sky-500/50 rounded-2xl p-5 transition-all duration-200 cursor-pointer flex flex-col justify-between hover:shadow-xl hover:shadow-sky-500/10 hover:-translate-y-1"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700/60 flex items-center justify-center group-hover:scale-110 transition-transform">
                        {getTemplateIcon(tpl.id)}
                      </div>
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 border border-slate-700">
                        {tpl.badge}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-200 group-hover:text-sky-300 transition-colors text-sm">
                        {tpl.name}
                      </h3>
                      <p className="text-xs text-slate-400 mt-1 line-clamp-3 leading-relaxed">
                        {tpl.description}
                      </p>
                    </div>
                  </div>

                  <div className="pt-5 flex items-center gap-1.5 text-xs font-semibold text-sky-400 group-hover:translate-x-1 transition-transform">
                    <span>Mulai Mapping</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              ))}
            </div>

            {/* Import Script Banner */}
            <div className="bg-gradient-to-r from-slate-900/80 to-slate-800/60 border border-slate-800 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                  <FileUp className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-200 text-sm">Punya File Script Pawn (.pwn) atau Texture Studio?</h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Impor kode CreateDynamicObject / SetDynamicObjectMaterial langsung menjadi mapping 3D visual.
                  </p>
                </div>
              </div>
              <button
                onClick={onOpenImport}
                className="px-4 py-2.5 rounded-xl text-xs font-medium text-white bg-emerald-600 hover:bg-emerald-500 transition-all shadow-lg shadow-emerald-600/20 shrink-0"
              >
                Import Script Sekarang
              </button>
            </div>
          </div>
        ) : (
          /* Scenario 2: User Memiliki Mapping Tersimpan */
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2">
              <div>
                <h1 className="text-2xl font-bold text-white tracking-tight">Daftar Mapping Saya</h1>
                <p className="text-xs text-slate-400 mt-0.5">
                  Tersimpan di browser Anda ({projects.length} Mapping). Klik buka untuk melanjutkan editing 3D.
                </p>
              </div>

              {/* Search Bar */}
              <div className="relative w-full sm:w-72">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Cari nama mapping..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-800 focus:border-sky-500 rounded-xl pl-9 pr-3 py-2 text-xs text-slate-200 placeholder-slate-500 focus:outline-none transition-colors"
                />
              </div>
            </div>

            {/* Grid of Saved Projects */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredProjects.map((p) => {
                const isRenaming = renamingId === p.id;
                return (
                  <div
                    key={p.id}
                    className="group bg-slate-900/60 hover:bg-slate-900/90 border border-slate-800 hover:border-slate-700 rounded-2xl p-5 transition-all flex flex-col justify-between space-y-4 hover:shadow-xl hover:shadow-black/40"
                  >
                    {/* Header: Icon, Name, Count */}
                    <div className="space-y-3">
                      <div className="flex items-start justify-between">
                        <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400">
                          <Layers className="w-5 h-5" />
                        </div>
                        <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-slate-800/90 text-sky-300 border border-slate-700">
                          {p.objects.length} Objek
                        </span>
                      </div>

                      {/* Project Name (Editable or Click to Open) */}
                      <div>
                        {isRenaming ? (
                          <div className="flex items-center gap-1.5 mt-1">
                            <input
                              type="text"
                              autoFocus
                              value={renameValue}
                              onChange={(e) => setRenameValue(e.target.value)}
                              onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                  renameProject(p.id, renameValue);
                                  setRenamingId(null);
                                } else if (e.key === 'Escape') {
                                  setRenamingId(null);
                                }
                              }}
                              className="bg-slate-950 border border-sky-500 rounded px-2 py-0.5 text-xs text-white focus:outline-none flex-1 font-semibold"
                            />
                            <button
                              onClick={() => {
                                renameProject(p.id, renameValue);
                                setRenamingId(null);
                              }}
                              className="text-[11px] px-2 py-0.5 bg-sky-600 text-white rounded font-medium"
                            >
                              Simpan
                            </button>
                          </div>
                        ) : (
                          <div className="flex items-center justify-between group/title">
                            <h3
                              onClick={() => openProject(p.id)}
                              className="font-semibold text-slate-100 hover:text-sky-300 transition-colors text-sm cursor-pointer line-clamp-1"
                              title={p.name}
                            >
                              {p.name}
                            </h3>
                            <button
                              onClick={() => {
                                setRenamingId(p.id);
                                setRenameValue(p.name);
                              }}
                              className="opacity-0 group-hover/title:opacity-100 text-[10px] text-slate-400 hover:text-slate-200 px-1 py-0.5 rounded hover:bg-slate-800 transition-opacity"
                            >
                              Ubah Nama
                            </button>
                          </div>
                        )}

                        <div className="flex items-center gap-1.5 text-[11px] text-slate-400 mt-1 font-mono">
                          <Clock className="w-3 h-3" />
                          <span>{formatTimestamp(p.updatedAt)}</span>
                        </div>
                      </div>
                    </div>

                    {/* Actions: Open, Export, Duplicate, Delete */}
                    <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between gap-2">
                      <button
                        onClick={() => openProject(p.id)}
                        className="flex-1 py-2 px-3 rounded-xl text-xs font-semibold text-white bg-sky-600 hover:bg-sky-500 active:bg-sky-700 flex items-center justify-center gap-1.5 transition-all shadow-md shadow-sky-600/20"
                      >
                        <FolderOpen className="w-3.5 h-3.5" />
                        <span>Buka Studio</span>
                      </button>

                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => {
                            openProject(p.id);
                            if (onOpenExportForProject) {
                              onOpenExportForProject(p.id);
                            }
                          }}
                          title="Export ke Pawn Code"
                          className="p-2 rounded-xl text-slate-400 hover:text-indigo-300 hover:bg-slate-800 transition-colors"
                        >
                          <Download className="w-4 h-4" />
                        </button>

                        <button
                          onClick={() => duplicateProject(p.id)}
                          title="Duplikasi Mapping"
                          className="p-2 rounded-xl text-slate-400 hover:text-sky-300 hover:bg-slate-800 transition-colors"
                        >
                          <Copy className="w-4 h-4" />
                        </button>

                        <button
                          onClick={() => {
                            if (confirm(`Yakin ingin menghapus mapping "${p.name}"?`)) {
                              deleteProject(p.id);
                            }
                          }}
                          title="Hapus Mapping"
                          className="p-2 rounded-xl text-slate-400 hover:text-red-400 hover:bg-red-500/10 transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </main>

      {/* Modal: Buat Mapping Baru */}
      {isCreateModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-lg w-full p-6 shadow-2xl space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <FolderPlus className="w-5 h-5 text-sky-400" />
                <h3 className="font-semibold text-base text-white">Buat Sesi Mapping Baru</h3>
              </div>
              <button
                onClick={() => setIsCreateModalOpen(false)}
                className="text-slate-400 hover:text-white text-xs px-2 py-1 rounded hover:bg-slate-800"
              >
                Batal
              </button>
            </div>

            <form onSubmit={handleConfirmCreate} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  Nama Mapping / Ruangan:
                </label>
                <input
                  type="text"
                  required
                  autoFocus
                  value={newProjectName}
                  onChange={(e) => setNewProjectName(e.target.value)}
                  placeholder="Contoh: Interior Rumah Ganton #2"
                  className="w-full bg-slate-950 border border-slate-800 focus:border-sky-500 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-2">
                  Pilih Template Awal:
                </label>
                <div className="grid grid-cols-2 gap-2.5">
                  {TEMPLATE_LIST.map((tpl) => (
                    <div
                      key={tpl.id}
                      onClick={() => setSelectedTemplate(tpl.id)}
                      className={`p-3 rounded-xl border text-left cursor-pointer transition-all ${
                        selectedTemplate === tpl.id
                          ? 'bg-sky-500/10 border-sky-500 text-sky-300'
                          : 'bg-slate-950/60 border-slate-800/80 text-slate-400 hover:bg-slate-800/50'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-semibold text-xs text-white">{tpl.name}</span>
                      </div>
                      <span className="text-[10px] font-mono text-slate-500">{tpl.badge}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-3 flex items-center justify-end gap-2 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => setIsCreateModalOpen(false)}
                  className="px-4 py-2 rounded-xl text-xs font-medium text-slate-300 hover:bg-slate-800 transition-colors"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl text-xs font-semibold text-white bg-sky-600 hover:bg-sky-500 active:bg-sky-700 shadow-lg shadow-sky-600/20 transition-all"
                >
                  Buka Studio 3D
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
