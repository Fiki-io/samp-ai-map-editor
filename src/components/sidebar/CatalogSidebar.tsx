'use client';

import React, { useState, useMemo } from 'react';
import {
  Search,
  Plus,
  Eye,
  EyeOff,
  Lock,
  Unlock,
  Trash2,
  Copy,
  Focus,
  FolderTree,
  PackagePlus,
  Sparkles,
  FileUp,
  Download
} from 'lucide-react';
import { useEditor } from '@/context/EditorContext';
import { SAMP_OBJECTS, CATEGORY_LABELS, SampObjectInfo } from '@/data/sampObjects';

interface CatalogSidebarProps {
  onOpenExport?: () => void;
  onOpenImport?: () => void;
}

export default function CatalogSidebar({ onOpenExport, onOpenImport }: CatalogSidebarProps) {
  const {
    objects,
    selectedId,
    addObject,
    deleteObject,
    duplicateObject,
    toggleVisibility,
    toggleLock,
    setSelectedId,
    focusOnSelected
  } = useEditor();

  const [activeTab, setActiveTab] = useState<'catalog' | 'outliner'>('catalog');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Filtered catalog list
  const filteredCatalog = useMemo(() => {
    let result = SAMP_OBJECTS;

    if (selectedCategory !== 'all') {
      result = result.filter(o => o.category === selectedCategory);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(
        o => o.id.toString().includes(q) || o.name.toLowerCase().includes(q)
      );
    }

    // Limit to 100 items for smooth scrolling
    return result.slice(0, 100);
  }, [searchQuery, selectedCategory]);

  // Modular quick essentials (top used in SA-MP interior mapping)
  const quickModularWalls = useMemo(() => [
    { id: 19353, label: 'Wall 001 (Flat 4x3m)' },
    { id: 19366, label: 'Wall 014 (Door Frame)' },
    { id: 19367, label: 'Wall 015 (Window Frame)' },
    { id: 19379, label: 'Floor Tile (4x4m)' },
    { id: 19380, label: 'Ceiling Tile (4x4m)' },
    { id: 1702, label: 'Living Couch' },
    { id: 1723, label: 'Coffee Table' },
    { id: 18646, label: 'Ceiling Lamp' }
  ], []);

  return (
    <aside className="w-80 h-full bg-slate-900 border-r border-slate-800 flex flex-col z-10 select-none">
      {/* Tab Switcher */}
      <div className="flex border-b border-slate-800 bg-slate-950/60 p-1 gap-1">
        <button
          onClick={() => setActiveTab('catalog')}
          className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 text-xs font-semibold rounded-md transition-all ${
            activeTab === 'catalog'
              ? 'bg-slate-800 text-blue-400 shadow-sm'
              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
          }`}
        >
          <PackagePlus className="w-3.5 h-3.5" />
          <span>Object Catalog</span>
        </button>
        <button
          onClick={() => setActiveTab('outliner')}
          className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 text-xs font-semibold rounded-md transition-all ${
            activeTab === 'outliner'
              ? 'bg-slate-800 text-blue-400 shadow-sm'
              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
          }`}
        >
          <FolderTree className="w-3.5 h-3.5" />
          <span>Scene Outliner ({objects.length})</span>
        </button>
      </div>

      {activeTab === 'catalog' ? (
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Quick Essentials Bar */}
          <div className="p-2.5 border-b border-slate-800 bg-slate-950/30">
            <div className="flex items-center gap-1 text-[11px] font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">
              <Sparkles className="w-3 h-3 text-amber-400" />
              <span>Modular Interior Quick Add</span>
            </div>
            <div className="grid grid-cols-2 gap-1.5">
              {quickModularWalls.map(q => (
                <button
                  key={q.id}
                  onClick={() => addObject(q.id)}
                  className="flex items-center justify-between px-2 py-1 bg-slate-800/70 hover:bg-blue-600/20 hover:border-blue-500/40 border border-slate-700/60 rounded text-[11px] text-slate-200 transition-all text-left group"
                >
                  <span className="truncate">{q.label}</span>
                  <Plus className="w-3 h-3 text-slate-400 group-hover:text-blue-400" />
                </button>
              ))}
            </div>
          </div>

          {/* Search Box */}
          <div className="p-2.5 border-b border-slate-800">
            <div className="relative">
              <Search className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-500" />
              <input
                type="text"
                placeholder="Search ID (e.g. 19353) or name..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-md pl-8 pr-3 py-1.5 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500 font-sans"
              />
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-1 mt-2 overflow-x-auto pb-1 scrollbar-thin">
              {Object.entries(CATEGORY_LABELS).map(([catKey, label]) => {
                const shortNames: Record<string, string> = {
                  all: 'Semua',
                  walls: 'Dinding',
                  floors: 'Lantai',
                  doors: 'Pintu',
                  living: 'R. Tamu',
                  bedroom: 'Kamar',
                  kitchen: 'Dapur',
                  bathroom: 'K. Mandi',
                  office: 'Kantor',
                  lighting: 'Lampu',
                  props: 'Dekorasi'
                };
                const displayName = shortNames[catKey] || label;
                return (
                  <button
                    key={catKey}
                    onClick={() => setSelectedCategory(catKey)}
                    className={`px-2 py-0.5 rounded text-[10px] whitespace-nowrap font-medium transition-all ${
                      selectedCategory === catKey
                        ? 'bg-blue-600 text-white font-semibold shadow-sm'
                        : 'bg-slate-800 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {displayName}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Catalog Scrollable List */}
          <div className="flex-1 overflow-y-auto p-2 space-y-1.5 scrollbar-thin">
            {filteredCatalog.length === 0 ? (
              <div className="py-8 text-center text-xs text-slate-500">
                No objects found matching &quot;{searchQuery}&quot;
              </div>
            ) : (
              filteredCatalog.map(obj => (
                <div
                  key={obj.id}
                  className="flex items-center justify-between p-2 rounded-lg bg-slate-950/50 hover:bg-slate-800/60 border border-slate-800/80 hover:border-slate-700 transition-all group"
                >
                  <div className="flex flex-col min-w-0 pr-2">
                    <div className="flex items-center gap-1.5">
                      <span className="font-mono text-xs font-bold text-blue-400">
                        #{obj.id}
                      </span>
                      <span className="text-xs font-medium text-slate-200 truncate">
                        {obj.name}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-[10px] text-slate-500 font-mono mt-0.5">
                      <span>{obj.category}</span>
                      <span>•</span>
                      <span>{obj.dimensions[0]}x{obj.dimensions[1]}m</span>
                    </div>
                  </div>

                  <button
                    onClick={() => addObject(obj.id)}
                    title="Add to Scene"
                    className="p-1.5 rounded-md bg-blue-600/10 text-blue-400 hover:bg-blue-600 hover:text-white border border-blue-500/20 transition-all"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
      ) : (
        /* Scene Outliner Tab */
        <div className="flex-1 flex flex-col overflow-hidden">
          <div className="p-2 border-b border-slate-800 flex items-center justify-between text-xs text-slate-400">
            <span>Objects in scene: {objects.length}</span>
            {selectedId && (
              <button
                onClick={focusOnSelected}
                className="flex items-center gap-1 text-[11px] text-blue-400 hover:underline"
              >
                <Focus className="w-3 h-3" /> Focus
              </button>
            )}
          </div>

          <div className="flex-1 overflow-y-auto p-2 space-y-1 scrollbar-thin">
            {objects.length === 0 ? (
              <div className="py-8 text-center text-xs text-slate-500">
                Scene is empty. Spawn objects from the Catalog tab.
              </div>
            ) : (
              objects.map(obj => {
                const isSelected = obj.id === selectedId;
                return (
                  <div
                    key={obj.id}
                    onClick={() => setSelectedId(obj.id)}
                    className={`flex items-center justify-between px-2.5 py-1.5 rounded-md cursor-pointer text-xs transition-all border ${
                      isSelected
                        ? 'bg-blue-600/20 border-blue-500/60 text-white'
                        : 'bg-slate-950/40 border-slate-850 hover:bg-slate-800/50 text-slate-300'
                    }`}
                  >
                    <div className="flex items-center gap-2 min-w-0 pr-2">
                      <span className="font-mono text-[11px] text-blue-400 font-semibold">
                        {obj.modelId}
                      </span>
                      <span className="truncate">{obj.name}</span>
                    </div>

                    <div className="flex items-center gap-1 text-slate-500">
                      {/* Visibility Toggle */}
                      <button
                        onClick={e => {
                          e.stopPropagation();
                          toggleVisibility(obj.id);
                        }}
                        title={obj.visible ? 'Hide Object' : 'Show Object'}
                        className="p-1 hover:text-slate-200 transition-colors"
                      >
                        {obj.visible ? (
                          <Eye className="w-3 h-3" />
                        ) : (
                          <EyeOff className="w-3 h-3 text-red-400" />
                        )}
                      </button>

                      {/* Lock Toggle */}
                      <button
                        onClick={e => {
                          e.stopPropagation();
                          toggleLock(obj.id);
                        }}
                        title={obj.locked ? 'Unlock Object' : 'Lock Object'}
                        className="p-1 hover:text-slate-200 transition-colors"
                      >
                        {obj.locked ? (
                          <Lock className="w-3 h-3 text-amber-400" />
                        ) : (
                          <Unlock className="w-3 h-3" />
                        )}
                      </button>

                      {/* Duplicate */}
                      <button
                        onClick={e => {
                          e.stopPropagation();
                          duplicateObject(obj.id);
                        }}
                        title="Duplicate (Ctrl+D)"
                        className="p-1 hover:text-blue-400 transition-colors"
                      >
                        <Copy className="w-3 h-3" />
                      </button>

                      {/* Delete */}
                      <button
                        onClick={e => {
                          e.stopPropagation();
                          deleteObject(obj.id);
                        }}
                        title="Delete (Del)"
                        className="p-1 hover:text-red-400 transition-colors"
                      >
                        <Trash2 className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      )}

      {/* Quick Action Footer: Import & Export */}
      {(onOpenExport || onOpenImport) && (
        <div className="p-2.5 border-t border-slate-800 bg-slate-950/90 flex items-center gap-2 shrink-0">
          {onOpenImport && (
            <button
              onClick={onOpenImport}
              title="Import script Pawn / Texture Studio (Ctrl+I)"
              className="flex-1 py-1.5 px-2.5 rounded-lg text-xs font-medium text-emerald-300 bg-emerald-950/40 hover:bg-emerald-900/60 border border-emerald-500/30 flex items-center justify-center gap-1.5 transition-colors shadow-sm"
            >
              <FileUp className="w-3.5 h-3.5 text-emerald-400" />
              <span>Import Pawn</span>
            </button>
          )}
          {onOpenExport && (
            <button
              onClick={onOpenExport}
              title="Export ke Pawn Code (Ctrl+E)"
              className="flex-1 py-1.5 px-2.5 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-sky-600 to-indigo-600 hover:from-sky-500 hover:to-indigo-500 border border-sky-400/30 flex items-center justify-center gap-1.5 transition-colors shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export Code</span>
            </button>
          )}
        </div>
      )}
    </aside>
  );
}
