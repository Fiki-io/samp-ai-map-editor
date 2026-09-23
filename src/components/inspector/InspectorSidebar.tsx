'use client';

import React, { useState } from 'react';
import {
  Sliders,
  Paintbrush,
  Type,
  Trash2,
  Copy,
  Lock,
  Unlock,
  RotateCw,
  Focus,
  Check,
  X,
  Palette
} from 'lucide-react';
import { useEditor } from '@/context/EditorContext';
import { TEXTURE_PRESETS, COLOR_PALETTE, TexturePreset } from '@/data/texturePresets';

export default function InspectorSidebar() {
  const {
    selectedObject,
    updateObject,
    deleteObject,
    duplicateObject,
    toggleLock,
    updateMaterial,
    updateMaterialText,
    focusOnSelected
  } = useEditor();

  const [activeTab, setActiveTab] = useState<'transform' | 'materials' | 'text'>('transform');
  const [selectedMatIndex, setSelectedMatIndex] = useState<number>(0);
  const [selectedTexCategory, setSelectedTexCategory] = useState<string>('all');

  // Manual TXD inputs
  const [manualModelId, setManualModelId] = useState('10756');
  const [manualTxd, setManualTxd] = useState('airport_track');
  const [manualTex, setManualTex] = useState('des_crckrock');

  // Material Text inputs
  const [textContent, setTextContent] = useState('INTERIOR');
  const [fontName, setFontName] = useState('Arial');
  const [fontSize, setFontSize] = useState(28);
  const [isBold, setIsBold] = useState(true);
  const [textColor, setTextColor] = useState('#FFFFFF');
  const [backColor, setBackColor] = useState('#000000');

  if (!selectedObject) {
    return (
      <aside className="w-80 h-full bg-slate-900 border-l border-slate-800 flex flex-col items-center justify-center p-6 text-center select-none z-10">
        <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center mb-3 text-slate-500">
          <Sliders className="w-6 h-6" />
        </div>
        <h3 className="text-sm font-semibold text-slate-300 mb-1">Tidak Ada Objek Terpilih</h3>
        <p className="text-xs text-slate-500 leading-relaxed max-w-[200px]">
          Klik objek di viewport 3D atau pilih dari daftar Scene Outliner untuk mengedit koordinat dan tekstur.
        </p>
      </aside>
    );
  }

  const currentMat = selectedObject.materials[selectedMatIndex];
  const currentText = selectedObject.materialTexts[selectedMatIndex];

  // Apply a texture preset
  const handleApplyPreset = (preset: TexturePreset) => {
    updateMaterial(selectedObject.id, selectedMatIndex, {
      index: selectedMatIndex,
      modelId: preset.modelId,
      txdName: preset.txdName,
      textureName: preset.textureName,
      color: currentMat?.color || preset.previewColor || '#FFFFFF'
    });
  };

  // Apply manual TXD
  const handleApplyManualTxd = () => {
    const mid = parseInt(manualModelId, 10) || 10756;
    updateMaterial(selectedObject.id, selectedMatIndex, {
      index: selectedMatIndex,
      modelId: mid,
      txdName: manualTxd.trim(),
      textureName: manualTex.trim(),
      color: currentMat?.color || '#FFFFFF'
    });
  };

  // Apply color tint (equivalent to Texture Studio /color)
  const handleColorChange = (hex: string) => {
    if (currentMat) {
      updateMaterial(selectedObject.id, selectedMatIndex, {
        ...currentMat,
        color: hex
      });
    } else {
      updateMaterial(selectedObject.id, selectedMatIndex, {
        index: selectedMatIndex,
        modelId: selectedObject.modelId,
        txdName: 'all_walls',
        textureName: 'wall001',
        color: hex
      });
    }
  };

  // Remove material on current index
  const handleClearMaterial = () => {
    updateMaterial(selectedObject.id, selectedMatIndex, null);
  };

  // Save Material Text
  const handleApplyMaterialText = () => {
    updateMaterialText(selectedObject.id, selectedMatIndex, {
      index: selectedMatIndex,
      text: textContent,
      size: 40,
      font: fontName,
      fontSize: fontSize,
      bold: isBold,
      fontColor: textColor,
      backColor: backColor,
      align: 1
    });
  };

  const handleClearMaterialText = () => {
    updateMaterialText(selectedObject.id, selectedMatIndex, null);
  };

  // Quick 90 deg rotation helper
  const rotateAxis = (axisIndex: 0 | 1 | 2, deg: number) => {
    const newRot = [...selectedObject.rotation] as [number, number, number];
    newRot[axisIndex] = (newRot[axisIndex] + deg) % 360;
    updateObject(selectedObject.id, { rotation: newRot }, true);
  };

  const filteredPresets = selectedTexCategory === 'all'
    ? TEXTURE_PRESETS
    : TEXTURE_PRESETS.filter(p => p.category === selectedTexCategory);

  return (
    <aside className="w-80 h-full bg-slate-900 border-l border-slate-800 flex flex-col z-10 select-none overflow-hidden">
      {/* Header: Object ID & Name */}
      <div className="p-3 border-b border-slate-800 bg-slate-950/40">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs px-2 py-0.5 rounded bg-blue-500/20 text-blue-400 font-bold border border-blue-500/30">
              #{selectedObject.modelId}
            </span>
            <span className="text-xs font-semibold text-white truncate max-w-[130px]">
              {selectedObject.name}
            </span>
          </div>

          {/* Quick Actions */}
          <div className="flex items-center gap-1">
            <button
              onClick={focusOnSelected}
              title="Focus View (F)"
              className="p-1 text-slate-400 hover:text-blue-400 hover:bg-slate-800 rounded transition-colors"
            >
              <Focus className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => toggleLock(selectedObject.id)}
              title={selectedObject.locked ? 'Unlock' : 'Lock'}
              className="p-1 text-slate-400 hover:text-amber-400 hover:bg-slate-800 rounded transition-colors"
            >
              {selectedObject.locked ? <Lock className="w-3.5 h-3.5 text-amber-400" /> : <Unlock className="w-3.5 h-3.5" />}
            </button>
            <button
              onClick={() => duplicateObject(selectedObject.id)}
              title="Duplicate (Ctrl+D)"
              className="p-1 text-slate-400 hover:text-blue-400 hover:bg-slate-800 rounded transition-colors"
            >
              <Copy className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => deleteObject(selectedObject.id)}
              title="Delete (Del)"
              className="p-1 text-slate-400 hover:text-red-400 hover:bg-slate-800 rounded transition-colors"
            >
              <Trash2 className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex bg-slate-950 p-0.5 rounded-lg border border-slate-800 text-xs">
          <button
            onClick={() => setActiveTab('transform')}
            className={`flex-1 flex items-center justify-center gap-1 py-1 rounded font-medium transition-all ${
              activeTab === 'transform' ? 'bg-slate-800 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Sliders className="w-3 h-3" />
            <span>Transform</span>
          </button>
          <button
            onClick={() => setActiveTab('materials')}
            className={`flex-1 flex items-center justify-center gap-1 py-1 rounded font-medium transition-all ${
              activeTab === 'materials' ? 'bg-slate-800 text-blue-400 shadow-sm' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Paintbrush className="w-3 h-3" />
            <span>Textures</span>
          </button>
          <button
            onClick={() => setActiveTab('text')}
            className={`flex-1 flex items-center justify-center gap-1 py-1 rounded font-medium transition-all ${
              activeTab === 'text' ? 'bg-slate-800 text-amber-400 shadow-sm' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Type className="w-3 h-3" />
            <span>Text</span>
          </button>
        </div>
      </div>

      {/* Tab Content */}
      <div className="flex-1 overflow-y-auto p-3 space-y-4 scrollbar-thin">
        {activeTab === 'transform' && (
          <div className="space-y-4">
            {/* Position Controls */}
            <div>
              <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2 flex items-center justify-between">
                <span>Posisi SA-MP (X, Y, Z)</span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { label: 'X (Timur)', idx: 0, step: 0.5 },
                  { label: 'Y (Utara)', idx: 1, step: 0.5 },
                  { label: 'Z (Tinggi)', idx: 2, step: 0.1 }
                ].map(({ label, idx, step }) => (
                  <div key={label} className="bg-slate-950 p-1.5 rounded-md border border-slate-800">
                    <label className="block text-[10px] font-mono text-slate-400 font-semibold mb-0.5 truncate">
                      {label}
                    </label>
                    <input
                      type="number"
                      step={step}
                      value={selectedObject.position[idx]}
                      onChange={e => {
                        const val = parseFloat(e.target.value) || 0;
                        const newPos = [...selectedObject.position] as [number, number, number];
                        newPos[idx] = val;
                        updateObject(selectedObject.id, { position: newPos });
                      }}
                      className="w-full bg-transparent text-xs font-mono text-slate-200 focus:outline-none"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* SA-MP Rotation Controls */}
            <div>
              <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2 flex items-center justify-between">
                <span>Rotasi SA-MP (RX, RY, RZ)</span>
              </div>
              <div className="grid grid-cols-3 gap-2 mb-2">
                {[
                  { label: 'RX (Roll)', idx: 0 },
                  { label: 'RY (Pitch)', idx: 1 },
                  { label: 'RZ (Yaw)', idx: 2 }
                ].map(({ label, idx }) => (
                  <div key={label} className="bg-slate-950 p-1.5 rounded-md border border-slate-800">
                    <label className="block text-[10px] font-mono text-slate-400 font-semibold mb-0.5 truncate">
                      {label}°
                    </label>
                    <input
                      type="number"
                      step="15"
                      value={selectedObject.rotation[idx]}
                      onChange={e => {
                        const val = parseFloat(e.target.value) || 0;
                        const newRot = [...selectedObject.rotation] as [number, number, number];
                        newRot[idx] = val;
                        updateObject(selectedObject.id, { rotation: newRot });
                      }}
                      className="w-full bg-transparent text-xs font-mono text-slate-200 focus:outline-none"
                    />
                  </div>
                ))}
              </div>

              {/* Quick Wall Snapping 90° Rotations */}
              <div className="bg-slate-950/50 p-2 rounded-lg border border-slate-800">
                <span className="text-[10px] font-medium text-slate-400 block mb-1.5">
                  Quick 90° Wall Turn (RZ Yaw)
                </span>
                <div className="grid grid-cols-4 gap-1.5">
                  {[0, 90, 180, 270].map(angle => (
                    <button
                      key={angle}
                      onClick={() => {
                        const newRot = [...selectedObject.rotation] as [number, number, number];
                        newRot[2] = angle;
                        updateObject(selectedObject.id, { rotation: newRot }, true);
                      }}
                      className={`py-1 rounded text-[11px] font-mono border transition-all ${
                        Math.round(selectedObject.rotation[2]) % 360 === angle
                          ? 'bg-blue-600 text-white border-blue-500 font-bold'
                          : 'bg-slate-800 border-slate-700 text-slate-300 hover:text-white'
                      }`}
                    >
                      {angle}°
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Dimensions Info */}
            <div className="bg-slate-950/50 p-2.5 rounded-lg border border-slate-800 text-xs">
              <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                Object Scale / Dimensions
              </span>
              <div className="font-mono text-slate-300 text-[11px]">
                {selectedObject.dimensions[0]}m (W) × {selectedObject.dimensions[1]}m (H) × {selectedObject.dimensions[2]}m (D)
              </div>
            </div>
          </div>
        )}

        {activeTab === 'materials' && (
          <div className="space-y-4">
            {/* Material Index Selector (0 to 7) */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                  Material Index (Texture Studio)
                </span>
                {currentMat && (
                  <button
                    onClick={handleClearMaterial}
                    className="text-[10px] text-red-400 hover:underline flex items-center gap-0.5"
                  >
                    <X className="w-3 h-3" /> Reset
                  </button>
                )}
              </div>
              <div className="flex items-center gap-1 overflow-x-auto pb-1">
                {[0, 1, 2, 3, 4, 5, 6, 7].map(idx => {
                  const hasMat = !!selectedObject.materials[idx];
                  return (
                    <button
                      key={idx}
                      onClick={() => setSelectedMatIndex(idx)}
                      className={`relative min-w-[32px] h-8 rounded text-xs font-mono font-bold transition-all border ${
                        selectedMatIndex === idx
                          ? 'bg-blue-600 text-white border-blue-400 shadow-md'
                          : hasMat
                          ? 'bg-slate-800 text-amber-400 border-amber-500/50'
                          : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-slate-200'
                      }`}
                    >
                      {idx}
                      {hasMat && (
                        <span className="absolute top-0.5 right-0.5 w-1.5 h-1.5 rounded-full bg-amber-400" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Current Material Status */}
            {currentMat ? (
              <div className="p-2.5 rounded-lg bg-blue-950/20 border border-blue-500/30 text-xs font-mono space-y-1">
                <div className="text-blue-400 font-bold text-[11px]">Active on Index {selectedMatIndex}:</div>
                <div className="text-slate-300 text-[11px]">TXD: {currentMat.txdName}</div>
                <div className="text-slate-300 text-[11px]">Texture: {currentMat.textureName}</div>
                <div className="flex items-center gap-2 mt-1">
                  <span>Color:</span>
                  <div
                    className="w-4 h-4 rounded border border-white/20"
                    style={{ backgroundColor: currentMat.color }}
                  />
                  <span>{currentMat.color}</span>
                </div>
              </div>
            ) : (
              <div className="text-[11px] text-slate-500 italic">
                Index {selectedMatIndex} menggunakan tekstur asli objek bawaan GTA.
              </div>
            )}

            {/* Color Tint Palette (Equivalent to /color) */}
            <div>
              <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-1.5 flex items-center gap-1.5">
                <Palette className="w-3 h-3 text-pink-400" />
                <span>Color Tint (/color)</span>
              </span>
              <div className="grid grid-cols-9 gap-1 mb-2">
                {COLOR_PALETTE.map(hex => (
                  <button
                    key={hex}
                    onClick={() => handleColorChange(hex)}
                    style={{ backgroundColor: hex }}
                    className={`w-6 h-6 rounded border transition-transform hover:scale-110 ${
                      currentMat?.color.toLowerCase() === hex.toLowerCase()
                        ? 'border-white ring-2 ring-blue-500'
                        : 'border-slate-700'
                    }`}
                  />
                ))}
              </div>
              <div className="flex items-center gap-2 bg-slate-950 p-1.5 rounded-md border border-slate-800">
                <input
                  type="color"
                  value={currentMat?.color || '#FFFFFF'}
                  onChange={e => handleColorChange(e.target.value)}
                  className="w-7 h-7 rounded border-0 bg-transparent cursor-pointer"
                />
                <input
                  type="text"
                  value={currentMat?.color || '#FFFFFF'}
                  onChange={e => handleColorChange(e.target.value)}
                  className="bg-transparent text-xs font-mono text-slate-200 focus:outline-none flex-1"
                />
              </div>
            </div>

            {/* Texture Presets (Wood, Marble, Tiles, Wallpaper) */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                  Texture Presets
                </span>
                <select
                  value={selectedTexCategory}
                  onChange={e => setSelectedTexCategory(e.target.value)}
                  className="bg-slate-950 border border-slate-800 rounded px-1.5 py-0.5 text-[10px] text-slate-300 focus:outline-none"
                >
                  <option value="all">Semua</option>
                  <option value="walls">Drywall/Walls</option>
                  <option value="wood">Wood/Kayu</option>
                  <option value="tiles">Tiles/Keramik</option>
                  <option value="marble">Marble/Marmer</option>
                  <option value="carpet">Carpet/Karpet</option>
                  <option value="brick">Brick/Bata</option>
                  <option value="concrete">Concrete/Semen</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-1.5 max-h-48 overflow-y-auto scrollbar-thin pr-1">
                {filteredPresets.map(preset => (
                  <button
                    key={preset.id}
                    onClick={() => handleApplyPreset(preset)}
                    className="flex items-center gap-2 p-1.5 rounded bg-slate-950 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-left transition-all group"
                  >
                    <div
                      className="w-5 h-5 rounded shrink-0 border border-white/20"
                      style={{ backgroundColor: preset.previewColor }}
                    />
                    <div className="min-w-0 flex-1">
                      <div className="text-[11px] font-medium text-slate-200 truncate group-hover:text-blue-400">
                        {preset.name}
                      </div>
                      <div className="text-[9px] text-slate-500 font-mono truncate">
                        {preset.txdName}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Hardcore Manual TXD Inputs */}
            <div className="pt-2 border-t border-slate-800">
              <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider block mb-1.5">
                Manual TXD Input (/txd)
              </span>
              <div className="space-y-1.5 text-xs">
                <input
                  type="text"
                  placeholder="TXD Name (e.g. airport_track)"
                  value={manualTxd}
                  onChange={e => setManualTxd(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded px-2 py-1 text-slate-200 text-xs font-mono"
                />
                <input
                  type="text"
                  placeholder="Texture Name (e.g. des_crckrock)"
                  value={manualTex}
                  onChange={e => setManualTex(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded px-2 py-1 text-slate-200 text-xs font-mono"
                />
                <div className="flex gap-1.5">
                  <input
                    type="number"
                    placeholder="Model ID"
                    value={manualModelId}
                    onChange={e => setManualModelId(e.target.value)}
                    className="w-24 bg-slate-950 border border-slate-800 rounded px-2 py-1 text-slate-200 text-xs font-mono"
                  />
                  <button
                    onClick={handleApplyManualTxd}
                    className="flex-1 py-1 rounded bg-slate-800 hover:bg-blue-600 text-white font-medium text-xs transition-colors"
                  >
                    Apply TXD
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'text' && (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                Material Text (/text)
              </span>
              {currentText && (
                <button
                  onClick={handleClearMaterialText}
                  className="text-[10px] text-red-400 hover:underline flex items-center gap-0.5"
                >
                  <X className="w-3 h-3" /> Remove
                </button>
              )}
            </div>

            <div>
              <label className="block text-[10px] text-slate-400 font-medium mb-1">
                Teks Tulisan
              </label>
              <input
                type="text"
                value={textContent}
                onChange={e => setTextContent(e.target.value)}
                placeholder="Contoh: POLICE DEPT"
                className="w-full bg-slate-950 border border-slate-800 rounded px-2.5 py-1.5 text-xs text-slate-200 focus:outline-none focus:border-amber-500 font-sans"
              />
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="block text-[10px] text-slate-400 font-medium mb-1">
                  Font
                </label>
                <select
                  value={fontName}
                  onChange={e => setFontName(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded px-2 py-1 text-xs text-slate-200 focus:outline-none"
                >
                  <option value="Arial">Arial</option>
                  <option value="Impact">Impact</option>
                  <option value="Courier New">Courier New</option>
                  <option value="Georgia">Georgia</option>
                  <option value="Verdana">Verdana</option>
                </select>
              </div>

              <div>
                <label className="block text-[10px] text-slate-400 font-medium mb-1">
                  Ukuran Font ({fontSize}px)
                </label>
                <input
                  type="number"
                  value={fontSize}
                  onChange={e => setFontSize(parseInt(e.target.value, 10) || 24)}
                  className="w-full bg-slate-950 border border-slate-800 rounded px-2 py-1 text-xs text-slate-200 font-mono"
                />
              </div>
            </div>

            <div className="flex items-center gap-3">
              <label className="flex items-center gap-1.5 text-xs text-slate-300 cursor-pointer">
                <input
                  type="checkbox"
                  checked={isBold}
                  onChange={e => setIsBold(e.target.checked)}
                  className="rounded bg-slate-950 border-slate-800 text-blue-600 focus:ring-0"
                />
                <span>Tebal (Bold)</span>
              </label>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-1">
              <div>
                <label className="block text-[10px] text-slate-400 font-medium mb-1">
                  Warna Teks
                </label>
                <div className="flex items-center gap-1.5 bg-slate-950 p-1 rounded border border-slate-800">
                  <input
                    type="color"
                    value={textColor}
                    onChange={e => setTextColor(e.target.value)}
                    className="w-5 h-5 rounded border-0 bg-transparent cursor-pointer"
                  />
                  <span className="text-[10px] font-mono text-slate-300">{textColor}</span>
                </div>
              </div>

              <div>
                <label className="block text-[10px] text-slate-400 font-medium mb-1">
                  Warna Latar
                </label>
                <div className="flex items-center gap-1.5 bg-slate-950 p-1 rounded border border-slate-800">
                  <input
                    type="color"
                    value={backColor}
                    onChange={e => setBackColor(e.target.value)}
                    className="w-5 h-5 rounded border-0 bg-transparent cursor-pointer"
                  />
                  <span className="text-[10px] font-mono text-slate-300">{backColor}</span>
                </div>
              </div>
            </div>

            <button
              onClick={handleApplyMaterialText}
              className="w-full mt-2 py-1.5 rounded bg-amber-600 hover:bg-amber-500 text-white font-semibold text-xs shadow-md transition-colors flex items-center justify-center gap-1"
            >
              <Check className="w-3.5 h-3.5" />
              <span>Terapkan Teks pada Index {selectedMatIndex}</span>
            </button>
          </div>
        )}
      </div>
    </aside>
  );
}
