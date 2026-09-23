'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useEditor } from '@/context/EditorContext';
import {
  runAgentStep,
  AgentMessage,
  ToolCallExecution,
  SUPPORTED_MODELS,
  DEFAULT_AI_MODEL
} from '@/services/aiAgentService';
import { QUICK_PROMPTS } from '@/data/aiPrompts';
import { searchSampObjects, getObjectInfo } from '@/data/sampObjects';
import { generateRoomObjects, getGroundedZ, BuildRoomOptions } from '@/utils/roomBuilder';
import { assembleCluster, AssembleClusterOptions } from '@/utils/clusterAssembler';
import { applyMaterialThemeToObjects, MaterialTheme } from '@/utils/materialCohesion';
import {
  Sparkles,
  X,
  Send,
  Eye,
  RotateCcw,
  Key,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Wrench,
  Bot,
  User,
  Compass,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Cpu
} from 'lucide-react';

export default function AiCopilotDrawer() {
  const {
    currentProject,
    aiDrawerOpen,
    setAiDrawerOpen,
    geminiApiKey,
    setGeminiApiKey,
    objects,
    addObject,
    batchAddObjects,
    updateObject,
    deleteObject,
    clearAll,
    undo,
    captureCanvasImage,
    setCameraPreset
  } = useEditor();

  const projectId = currentProject?.id || 'default_session';
  const chatStorageKey = `samp_ai_chat_${projectId}`;

  const [inputPrompt, setInputPrompt] = useState('');
  const [messages, setMessages] = useState<AgentMessage[]>([]);
  const [conversationHistory, setConversationHistory] = useState<Array<{ role: 'user' | 'model'; parts: unknown[] }>>([]);

  // Load chat history and memory when active project changes
  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      const saved = localStorage.getItem(chatStorageKey);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed.messages) && parsed.messages.length > 0) {
          setMessages(parsed.messages);
          setConversationHistory(parsed.conversationHistory || []);
          return;
        }
      }
    } catch (e) {
      console.warn('Failed to load project chat history:', e);
    }

    // Default welcome message for this project
    setMessages([
      {
        id: 'welcome',
        role: 'assistant',
        content: `Halo! Saya asisten AI Architect khusus proyek **${currentProject?.name || 'Mapping'}**. Percakapan dan memori desain proyek ini tersimpan khusus dan tidak akan hilang atau tertukar dengan proyek lain. Mau kita rancang apa hari ini?`,
        timestamp: Date.now()
      }
    ]);
    setConversationHistory([]);
  }, [projectId, chatStorageKey, currentProject?.name]);

  // Persist chat history whenever messages or conversationHistory change
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (messages.length === 0) return;
    if (messages.length === 1 && messages[0].id === 'welcome' && conversationHistory.length === 0) {
      return;
    }
    try {
      localStorage.setItem(chatStorageKey, JSON.stringify({
        messages,
        conversationHistory
      }));
    } catch (e) {
      console.warn('Failed to save project chat history:', e);
    }
  }, [messages, conversationHistory, chatStorageKey]);

  const handleClearProjectChat = () => {
    if (confirm(`Bersihkan riwayat percakapan & memori AI untuk proyek "${currentProject?.name || 'ini'}"?`)) {
      if (typeof window !== 'undefined') {
        localStorage.removeItem(chatStorageKey);
      }
      setMessages([
        {
          id: 'welcome',
          role: 'assistant',
          content: `Memori percakapan proyek **${currentProject?.name || 'Mapping'}** telah dibersihkan. Silakan beri instruksi baru!`,
          timestamp: Date.now()
        }
      ]);
      setConversationHistory([]);
    }
  };
  const [isProcessing, setIsProcessing] = useState(false);
  const [activeTools, setActiveTools] = useState<ToolCallExecution[]>([]);
  const [showKeyModal, setShowKeyModal] = useState(false);
  const [apiKeyInput, setApiKeyInput] = useState('');
  const [selectedModel, setSelectedModel] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('samp_editor_gemini_model') || DEFAULT_AI_MODEL;
    }
    return DEFAULT_AI_MODEL;
  });
  const [isCustomModel, setIsCustomModel] = useState(false);
  const [customModelInput, setCustomModelInput] = useState('');
  const [latestVision, setLatestVision] = useState<string | null>(null);
  const [showVisionPreview, setShowVisionPreview] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto scroll to bottom of chat
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, activeTools, isProcessing]);

  // Keep API key input synced
  useEffect(() => {
    setApiKeyInput(geminiApiKey || '');
  }, [geminiApiKey]);

  if (!aiDrawerOpen) return null;

  const handleSaveApiKey = () => {
    const trimmed = apiKeyInput.trim();
    setGeminiApiKey(trimmed);
    const chosenModel = isCustomModel && customModelInput.trim() ? customModelInput.trim() : selectedModel;
    setSelectedModel(chosenModel);
    if (typeof window !== 'undefined') {
      localStorage.setItem('samp_editor_gemini_model', chosenModel);
    }
    setShowKeyModal(false);
  };

  const handleSendMessage = async (promptText?: string) => {
    const textToSend = (promptText || inputPrompt).trim();
    if (!textToSend || isProcessing) return;

    if (!geminiApiKey) {
      setShowKeyModal(true);
      return;
    }

    setInputPrompt('');
    setIsProcessing(true);
    setActiveTools([]);

    // Capture visual snapshot of the 3D canvas
    const currentVision = captureCanvasImage();
    if (currentVision) {
      setLatestVision(currentVision);
    }

    const userMessage: AgentMessage = {
      id: `msg_${Date.now()}_u`,
      role: 'user',
      content: textToSend,
      timestamp: Date.now(),
      visionSnapshot: currentVision || undefined
    };

    setMessages(prev => [...prev, userMessage]);

    // Build context handlers for the AI agent
    const handlers = {
      buildRoom: (options: BuildRoomOptions) => {
        const generated = generateRoomObjects(options);
        return batchAddObjects(generated);
      },
      assembleCluster: (options: AssembleClusterOptions) => {
        const clusterObjs = assembleCluster(options);
        return batchAddObjects(clusterObjs);
      },
      applyMaterialTheme: (theme: MaterialTheme) => {
        const updates = applyMaterialThemeToObjects(objects, theme);
        updates.forEach(u => updateObject(u.id, { materials: u.materials }, false));
        return updates.length;
      },
      placeFurniture: (p: {
        modelId: number;
        x: number;
        y: number;
        floorLevel?: number;
        rz?: number;
        name?: string;
        surface?: 'floor' | 'tabletop' | 'wall' | 'ceiling';
        color?: string;
        textureName?: string;
      }) => {
        const floorLvl = p.floorLevel ?? 0.0;
        const exactZ = getGroundedZ(p.modelId, floorLvl, p.surface || 'floor');
        const id = addObject(p.modelId, [p.x, p.y, exactZ]);
        const updates: Record<string, unknown> = {
          rotation: [0, 0, p.rz || 0]
        };
        if (p.name) updates.name = p.name;
        if (p.color || p.textureName) {
          updates.materials = {
            0: {
              index: 0,
              modelId: p.modelId,
              txdName: 'all_walls',
              textureName: p.textureName || 'wall001',
              color: p.color || '#e2e8f0'
            }
          };
        }
        updateObject(id, updates, true);
        return id;
      },
      batchPlaceFurniture: (items: Array<{
        modelId: number;
        x: number;
        y: number;
        floorLevel?: number;
        surface?: 'floor' | 'tabletop' | 'wall' | 'ceiling';
        rz?: number;
        name?: string;
        color?: string;
        textureName?: string;
      }>) => {
        const formatted = items.map(item => {
          const floorLvl = item.floorLevel ?? 0.0;
          const exactZ = getGroundedZ(item.modelId, floorLvl, item.surface || 'floor');
          return {
            modelId: item.modelId,
            position: [item.x, item.y, exactZ] as [number, number, number],
            rotation: [0, 0, item.rz || 0] as [number, number, number],
            name: item.name,
            materials: (item.color || item.textureName) ? {
              0: {
                index: 0,
                modelId: item.modelId,
                txdName: 'all_walls',
                textureName: item.textureName || 'wall001',
                color: item.color || '#e2e8f0'
              }
            } : undefined
          };
        });
        return batchAddObjects(formatted);
      },
      createObject: (p: { modelId: number; x: number; y: number; z: number; rx?: number; ry?: number; rz?: number; name?: string; color?: string; textureName?: string }) => {
        let finalZ = p.z;
        const info = getObjectInfo(p.modelId);
        if (info && info.category !== 'walls' && info.category !== 'floors' && info.category !== 'lighting') {
          if (finalZ > 1.1 && finalZ < 2.8) {
            finalZ = getGroundedZ(p.modelId, 0.0, 'floor');
          }
        }
        const id = addObject(p.modelId, [p.x, p.y, finalZ]);
        const updates: Record<string, unknown> = {
          rotation: [p.rx || 0, p.ry || 0, p.rz || 0]
        };
        if (p.name) updates.name = p.name;
        if (p.color || p.textureName) {
          updates.materials = {
            0: {
              index: 0,
              modelId: p.modelId,
              txdName: 'all_walls',
              textureName: p.textureName || 'wall001',
              color: p.color || '#e2e8f0'
            }
          };
        }
        updateObject(id, updates, true);
        return id;
      },
      batchCreateObjects: (list: Array<{ modelId: number; x: number; y: number; z: number; rx?: number; ry?: number; rz?: number; name?: string; color?: string; textureName?: string }>) => {
        const formatted = list.map(item => {
          let finalZ = item.z;
          const info = getObjectInfo(item.modelId);
          if (info && info.category !== 'walls' && info.category !== 'floors' && info.category !== 'lighting') {
            if (finalZ > 1.1 && finalZ < 2.8) {
              finalZ = getGroundedZ(item.modelId, 0.0, 'floor');
            }
          }
          return {
            modelId: item.modelId,
            position: [item.x, item.y, finalZ] as [number, number, number],
            rotation: [item.rx || 0, item.ry || 0, item.rz || 0] as [number, number, number],
            name: item.name,
            materials: {
              0: {
                index: 0,
                modelId: item.modelId,
                txdName: 'all_walls',
                textureName: item.textureName || 'wall001',
                color: item.color || '#e2e8f0'
              }
            }
          };
        });
        return batchAddObjects(formatted);
      },
      modifyObject: (p: { objectId: string; x?: number; y?: number; z?: number; rx?: number; ry?: number; rz?: number; color?: string; textureName?: string }) => {
        const target = objects.find(o => o.id === p.objectId);
        if (!target) return false;
        const updates: Record<string, unknown> = {};
        if (p.x !== undefined || p.y !== undefined || p.z !== undefined) {
          updates.position = [
            p.x !== undefined ? p.x : target.position[0],
            p.y !== undefined ? p.y : target.position[1],
            p.z !== undefined ? p.z : target.position[2]
          ];
        }
        if (p.rx !== undefined || p.ry !== undefined || p.rz !== undefined) {
          updates.rotation = [
            p.rx !== undefined ? p.rx : target.rotation[0],
            p.ry !== undefined ? p.ry : target.rotation[1],
            p.rz !== undefined ? p.rz : target.rotation[2]
          ];
        }
        if (p.color || p.textureName) {
          const currentMat = target.materials[0] || { index: 0, modelId: target.modelId, txdName: 'all_walls', textureName: 'wall001', color: '#e2e8f0' };
          updates.materials = {
            ...target.materials,
            0: {
              ...currentMat,
              color: p.color || currentMat.color,
              textureName: p.textureName || currentMat.textureName
            }
          };
        }
        updateObject(p.objectId, updates, true);
        return true;
      },
      deleteObject: (id: string) => {
        deleteObject(id);
        return true;
      },
      clearScene: () => {
        clearAll();
      },
      getSceneObjects: () => {
        return objects;
      },
      captureViewport: () => {
        return captureCanvasImage();
      },
      setCameraPreset: (preset: 'front' | 'back' | 'top' | 'inside') => {
        setCameraPreset(preset);
      },
      searchObjects: (query: string, category?: string, limit?: number) => {
        return searchSampObjects(query, category, limit).map(o => ({
          id: o.id,
          name: o.name,
          category: o.category,
          dimensions: o.dimensions
        }));
      }
    };

    try {
      const { replyText, updatedHistory } = await runAgentStep(
        geminiApiKey,
        textToSend,
        handlers,
        conversationHistory,
        tools => {
          setActiveTools([...tools]);
        },
        selectedModel
      );

      setConversationHistory(updatedHistory);

      const assistantMessage: AgentMessage = {
        id: `msg_${Date.now()}_a`,
        role: 'assistant',
        content: replyText,
        timestamp: Date.now(),
        toolCalls: activeTools.length > 0 ? [...activeTools] : undefined
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      setMessages(prev => [
        ...prev,
        {
          id: `msg_${Date.now()}_err`,
          role: 'system',
          content: `⚠️ Error: ${msg}`,
          timestamp: Date.now()
        }
      ]);
    } finally {
      setIsProcessing(false);
      setActiveTools([]);
    }
  };

  return (
    <aside className="w-96 h-full flex flex-col bg-slate-900/95 backdrop-blur-xl border-l border-slate-800 shadow-2xl relative z-40 select-text">
      {/* 1. Header */}
      <div className="p-3.5 border-b border-slate-800/80 flex items-center justify-between bg-slate-950/60">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-purple-600 to-cyan-500 flex items-center justify-center shadow-lg shadow-purple-500/25">
            <Sparkles className="w-4 h-4 text-white animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <h2 className="text-xs font-bold text-slate-100">AI Architect Copilot</h2>
              <button
                onClick={() => setShowKeyModal(true)}
                className="text-[9px] px-1.5 py-0.5 rounded-full bg-purple-500/20 text-purple-300 hover:text-purple-200 hover:bg-purple-500/30 font-mono border border-purple-500/30 transition-colors flex items-center gap-1 cursor-pointer"
                title="Pilih Model Gemini"
              >
                <Cpu className="w-2.5 h-2.5 text-purple-400" />
                <span>{selectedModel.replace('gemini-', '')}</span>
                <ChevronDown className="w-2.5 h-2.5 opacity-60" />
              </button>
            </div>
            <div className="flex items-center gap-1.5 text-[10px] text-slate-400">
              <span className={`w-1.5 h-1.5 rounded-full ${geminiApiKey ? 'bg-emerald-400' : 'bg-amber-400'}`} />
              <span className="truncate max-w-[110px] text-slate-300 font-medium">{currentProject?.name || 'Mapping'}</span>
              <span>•</span>
              <span>{geminiApiKey ? 'Aktif' : 'No Key'}</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-1">
          <button
            onClick={handleClearProjectChat}
            title="Reset Memori & Percakapan Proyek Ini"
            className="p-1.5 rounded-md text-slate-400 hover:text-amber-400 hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => setShowKeyModal(true)}
            title="Pengaturan API Key & Model"
            className="p-1.5 rounded-md text-slate-400 hover:text-slate-200 hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <Key className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => setAiDrawerOpen(false)}
            title="Tutup AI Drawer"
            className="p-1.5 rounded-md text-slate-400 hover:text-slate-200 hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* 2. Vision Preview Banner */}
      {latestVision && (
        <div className="border-b border-slate-800 bg-slate-950/40 px-3 py-1.5 text-[11px] text-slate-300">
          <button
            onClick={() => setShowVisionPreview(v => !v)}
            className="w-full flex items-center justify-between hover:text-cyan-400 transition-colors"
          >
            <span className="flex items-center gap-1.5">
              <Eye className="w-3.5 h-3.5 text-cyan-400" />
              <span>Mata AI: Tangkapan Kanvas 3D Aktif</span>
            </span>
            {showVisionPreview ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>
          {showVisionPreview && (
            <div className="mt-2 rounded-lg overflow-hidden border border-slate-700 bg-black">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={latestVision} alt="AI Vision Snapshot" className="w-full h-auto object-cover" />
            </div>
          )}
        </div>
      )}

      {/* 3. Messages & Execution Thread */}
      <div className="flex-1 overflow-y-auto p-3 space-y-3.5 scrollbar-thin">
        {messages.map(msg => (
          <div key={msg.id} className="space-y-1.5">
            <div className="flex items-center gap-1.5 text-[10px] text-slate-400">
              {msg.role === 'user' ? (
                <>
                  <User className="w-3 h-3 text-blue-400" />
                  <span className="font-semibold text-blue-300">Anda</span>
                </>
              ) : msg.role === 'assistant' ? (
                <>
                  <Bot className="w-3 h-3 text-purple-400" />
                  <span className="font-semibold text-purple-300">AI Architect</span>
                </>
              ) : (
                <>
                  <AlertCircle className="w-3 h-3 text-amber-400" />
                  <span className="font-semibold text-amber-300">Sistem</span>
                </>
              )}
              <span className="text-slate-500 font-mono text-[9px]">
                {new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </span>
            </div>

            <div
              className={`p-3 rounded-xl text-xs leading-relaxed whitespace-pre-wrap ${
                msg.role === 'user'
                  ? 'bg-blue-600/20 border border-blue-500/30 text-slate-200'
                  : msg.role === 'assistant'
                  ? 'bg-slate-800/60 border border-slate-700/60 text-slate-200 shadow-sm'
                  : 'bg-red-950/30 border border-red-500/30 text-red-200'
              }`}
            >
              {msg.content}

              {/* Render Tool Executions Cards if any */}
              {msg.toolCalls && msg.toolCalls.length > 0 && (
                <div className="mt-2.5 pt-2 border-t border-slate-700/60 space-y-1.5">
                  <div className="text-[10px] font-semibold text-purple-300 flex items-center gap-1">
                    <Wrench className="w-3 h-3 text-purple-400" />
                    <span>Langkah Eksekusi Arsitektur:</span>
                  </div>
                  {msg.toolCalls.map(tc => (
                    <div
                      key={tc.id}
                      className="flex items-center justify-between bg-slate-900/80 p-1.5 rounded-lg border border-slate-800 text-[10px] font-mono"
                    >
                      <div className="flex items-center gap-1.5 truncate">
                        <CheckCircle2 className="w-3 h-3 text-emerald-400 flex-shrink-0" />
                        <span className="text-slate-300 truncate">{tc.name}</span>
                      </div>
                      {tc.result && <span className="text-slate-400 text-[9px] truncate ml-2">{tc.result}</span>}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}

        {/* Live Active Tool Calling Feedback */}
        {isProcessing && (
          <div className="p-3 rounded-xl bg-purple-950/20 border border-purple-500/30 text-xs space-y-2">
            <div className="flex items-center gap-2 text-purple-300 font-semibold text-[11px]">
              <Loader2 className="w-3.5 h-3.5 animate-spin text-purple-400" />
              <span>AI sedang merancang dan menata ruangan...</span>
            </div>

            {activeTools.length > 0 && (
              <div className="space-y-1.5">
                {activeTools.map(tc => (
                  <div
                    key={tc.id}
                    className="flex items-center justify-between bg-slate-950/60 p-1.5 rounded-lg border border-purple-500/20 text-[10px] font-mono"
                  >
                    <div className="flex items-center gap-1.5 truncate">
                      {tc.status === 'running' ? (
                        <Loader2 className="w-3 h-3 text-cyan-400 animate-spin flex-shrink-0" />
                      ) : tc.status === 'completed' ? (
                        <CheckCircle2 className="w-3 h-3 text-emerald-400 flex-shrink-0" />
                      ) : (
                        <AlertCircle className="w-3 h-3 text-red-400 flex-shrink-0" />
                      )}
                      <span className="text-slate-300 truncate">{tc.name}</span>
                    </div>
                    {tc.result && <span className="text-slate-400 text-[9px] truncate ml-2">{tc.result}</span>}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* 4. Quick Inspiration Chips */}
      <div className="px-3 py-2 border-t border-slate-800/80 bg-slate-950/40">
        <div className="text-[10px] font-semibold text-slate-400 mb-1.5 flex items-center justify-between">
          <span className="flex items-center gap-1">
            <Compass className="w-3 h-3 text-cyan-400" />
            <span>Inspirasi Cepat</span>
          </span>
          <button
            onClick={() => undo()}
            className="text-[10px] text-amber-400 hover:text-amber-300 flex items-center gap-1 hover:underline"
            title="Batalkan perubahan terakhir"
          >
            <RotateCcw className="w-2.5 h-2.5" />
            <span>Undo Desain</span>
          </button>
        </div>
        <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          {QUICK_PROMPTS.map(p => (
            <button
              key={p.id}
              onClick={() => handleSendMessage(p.prompt)}
              disabled={isProcessing}
              className="flex-shrink-0 px-2.5 py-1 rounded-full bg-slate-800/80 hover:bg-purple-900/40 border border-slate-700/80 hover:border-purple-500/50 text-[10px] text-slate-200 transition-all flex items-center gap-1"
            >
              <span>{p.icon}</span>
              <span>{p.title}</span>
            </button>
          ))}
        </div>
      </div>

      {/* 5. Input Area */}
      <div className="p-3 border-t border-slate-800/80 bg-slate-950/80">
        <div className="flex gap-1.5 items-end bg-slate-900 border border-slate-800 rounded-xl p-1.5 focus-within:border-purple-500 focus-within:ring-1 focus-within:ring-purple-500/50 transition-all">
          <textarea
            value={inputPrompt}
            onChange={e => setInputPrompt(e.target.value)}
            onKeyDown={e => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSendMessage();
              }
            }}
            placeholder="Ketik instruksi desain ruangan..."
            rows={2}
            disabled={isProcessing}
            className="w-full bg-transparent text-xs text-slate-100 placeholder-slate-500 focus:outline-none resize-none px-1.5 py-1"
          />
          <button
            onClick={() => handleSendMessage()}
            disabled={isProcessing || !inputPrompt.trim()}
            className="p-2 rounded-lg bg-gradient-to-tr from-purple-600 to-cyan-500 text-white hover:opacity-90 disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-md flex-shrink-0"
          >
            {isProcessing ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* 6. Settings / API Key Modal */}
      {showKeyModal && (
        <div className="absolute inset-0 bg-black/85 backdrop-blur-md z-50 flex items-center justify-center p-3 overflow-y-auto">
          <div className="w-full max-w-sm bg-slate-900 border border-slate-800 rounded-2xl p-4 shadow-2xl space-y-3.5">
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-2.5">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-100">
                <Cpu className="w-4 h-4 text-purple-400" />
                <span>Pengaturan AI Copilot</span>
              </div>
              <button
                onClick={() => setShowKeyModal(false)}
                className="p-1 rounded-md text-slate-400 hover:text-slate-200 hover:bg-slate-800 transition-colors"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Model Selector */}
            <div className="space-y-1.5">
              <label className="text-[11px] font-semibold text-slate-300 flex items-center justify-between">
                <span>Model AI Gemini:</span>
                <span className="text-[9px] text-purple-400 font-mono">v1beta REST API</span>
              </label>

              <div className="space-y-1.5">
                {SUPPORTED_MODELS.map(m => {
                  const isSelected = selectedModel === m.id && !isCustomModel;
                  return (
                    <button
                      key={m.id}
                      type="button"
                      onClick={() => {
                        setSelectedModel(m.id);
                        setIsCustomModel(false);
                      }}
                      className={`w-full text-left p-2 rounded-xl border transition-all text-xs flex flex-col gap-0.5 ${
                        isSelected
                          ? 'bg-purple-950/40 border-purple-500/80 ring-1 ring-purple-500/50 text-white'
                          : 'bg-slate-950/60 border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-slate-950'
                      }`}
                    >
                      <div className="flex items-center justify-between w-full">
                        <span className="font-semibold text-[11px] flex items-center gap-1.5">
                          <span className={`w-1.5 h-1.5 rounded-full ${isSelected ? 'bg-purple-400' : 'bg-slate-600'}`} />
                          {m.name}
                        </span>
                        {m.badge && (
                          <span
                            className={`text-[9px] px-1.5 py-0.2 rounded font-medium ${
                              m.badge === 'Recommended'
                                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                                : 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                            }`}
                          >
                            {m.badge}
                          </span>
                        )}
                      </div>
                      <span className="text-[10px] text-slate-400 pl-3 leading-tight">{m.desc}</span>
                    </button>
                  );
                })}

                {/* Custom Model Toggle */}
                <button
                  type="button"
                  onClick={() => setIsCustomModel(v => !v)}
                  className="text-[10px] text-slate-400 hover:text-slate-200 transition-colors flex items-center gap-1 pt-0.5"
                >
                  <span>{isCustomModel ? '− Sembunyikan Model Kustom' : '+ Gunakan Model ID Kustom'}</span>
                </button>

                {isCustomModel && (
                  <input
                    type="text"
                    value={customModelInput}
                    onChange={e => setCustomModelInput(e.target.value)}
                    placeholder="Contoh: gemini-3.5-flash-lite atau gemini-3.6-flash"
                    className="w-full bg-slate-950 border border-purple-500/60 rounded-lg px-2.5 py-1.5 text-[11px] font-mono text-purple-200 focus:outline-none"
                  />
                )}
              </div>
            </div>

            {/* API Key Section */}
            <div className="space-y-1.5 pt-1 border-t border-slate-800/80">
              <div className="flex items-center justify-between">
                <label className="text-[11px] font-semibold text-slate-300 flex items-center gap-1">
                  <Key className="w-3 h-3 text-purple-400" />
                  <span>Google AI Studio API Key:</span>
                </label>
                <a
                  href="https://aistudio.google.com/app/apikey"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[10px] text-cyan-400 hover:underline flex items-center gap-0.5 font-medium"
                >
                  <span>Dapatkan Key</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </div>

              <input
                type="password"
                value={apiKeyInput}
                onChange={e => setApiKeyInput(e.target.value)}
                placeholder="AIzaSy..."
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs font-mono text-slate-200 focus:outline-none focus:border-purple-500"
              />
              <p className="text-[10px] text-slate-400">
                Key Anda hanya disimpan lokal di browser Anda (Zero Server Storage).
              </p>
            </div>

            <div className="flex gap-2 justify-end pt-2 border-t border-slate-800/80">
              <button
                onClick={() => setShowKeyModal(false)}
                className="px-3 py-1.5 rounded-lg text-xs text-slate-400 hover:bg-slate-800 transition-colors"
              >
                Batal
              </button>
              <button
                onClick={handleSaveApiKey}
                className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white shadow-md transition-all"
              >
                Simpan Pengaturan
              </button>
            </div>
          </div>
        </div>
      )}
    </aside>
  );
}
