import { AI_SYSTEM_PROMPT } from '@/data/aiPrompts';
import { MapObject } from '@/types/editor';
import { BuildRoomOptions, getGroundedZ } from '@/utils/roomBuilder';
import { AssembleClusterOptions } from '@/utils/clusterAssembler';
import { MaterialTheme } from '@/utils/materialCohesion';

export interface ToolCallExecution {
  id: string;
  name: string;
  args: Record<string, unknown>;
  status: 'running' | 'completed' | 'failed';
  result?: string;
}

export interface AgentMessage {
  id: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: number;
  toolCalls?: ToolCallExecution[];
  visionSnapshot?: string; // base64 thumbnail of what was seen
}

export interface AgentContextHandlers {
  buildRoom: (options: BuildRoomOptions) => string[];
  assembleCluster?: (options: AssembleClusterOptions) => string[];
  applyMaterialTheme?: (theme: MaterialTheme) => number;
  placeFurniture: (params: {
    modelId: number;
    x: number;
    y: number;
    floorLevel?: number;
    rz?: number;
    name?: string;
    surface?: 'floor' | 'tabletop' | 'wall' | 'ceiling';
    color?: string;
    textureName?: string;
  }) => string;
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
  }>) => string[];
  createObject: (params: {
    modelId: number;
    x: number;
    y: number;
    z: number;
    rx?: number;
    ry?: number;
    rz?: number;
    name?: string;
    color?: string;
    textureName?: string;
  }) => string;
  batchCreateObjects: (objects: Array<{
    modelId: number;
    x: number;
    y: number;
    z: number;
    rx?: number;
    ry?: number;
    rz?: number;
    name?: string;
    color?: string;
    textureName?: string;
  }>) => string[];
  modifyObject: (params: {
    objectId: string;
    x?: number;
    y?: number;
    z?: number;
    rx?: number;
    ry?: number;
    rz?: number;
    color?: string;
    textureName?: string;
  }) => boolean;
  deleteObject: (objectId: string) => boolean;
  clearScene: () => void;
  getSceneObjects: () => MapObject[];
  captureViewport: () => string | null;
  setCameraPreset: (preset: 'front' | 'back' | 'top' | 'inside') => void;
  searchObjects: (query: string, category?: string, limit?: number) => Array<{
    id: number;
    name: string;
    category: string;
    dimensions: [number, number, number];
  }>;
}

// Function Declarations formatted for Gemini API Tools
export const AGENT_FUNCTION_DECLARATIONS = [
  {
    name: 'build_room',
    description: 'Builds a complete, 100% airtight, millimeter-accurate room with zero gaps and no floating walls. Mathematically aligns perimeter walls (19353), flat floor slab (19379), flat ceiling roof slab (19379), and optional doorways. ALWAYS use this tool to create any room, office, jail cell, corridor, or hall rather than placing walls manually!',
    parameters: {
      type: 'OBJECT',
      properties: {
        name: { type: 'STRING', description: 'Name of the room, e.g. "Main Lobby", "Sel Tahanan 1", "Chief Office", "Living Room".' },
        centerX: { type: 'NUMBER', description: 'Center X coordinate in meters (default 0).' },
        centerY: { type: 'NUMBER', description: 'Center Y coordinate in meters (default 0).' },
        width: { type: 'NUMBER', description: 'Room width along X in meters (e.g. 3.2, 6.4, 9.6, 12.8).' },
        depth: { type: 'NUMBER', description: 'Room depth along Y in meters (e.g. 3.2, 6.4, 9.6, 12.8).' },
        floorLevel: { type: 'NUMBER', description: 'Floor elevation in meters (default 0.00, 3.50 for 2nd floor, -3.50 for basement).' },
        wallTexture: { type: 'STRING', description: 'Texture preset for walls (e.g. wall001, wall003, wall008, wall010).' },
        floorTexture: { type: 'STRING', description: 'Texture preset for floor (e.g. des_crckrock, wall025, wall027).' },
        hasCeiling: { type: 'BOOLEAN', description: 'Whether to place a ceiling slab to seal the room from above (default true).' },
        doorways: {
          type: 'ARRAY',
          description: 'List of doorways in perimeter walls.',
          items: {
            type: 'OBJECT',
            properties: {
              wall: { type: 'STRING', enum: ['north', 'south', 'east', 'west'], description: 'Which wall side has the doorway.' },
              doorModelId: { type: 'INTEGER', description: 'Optional door model ID to place inside doorway (e.g. 19302 for Jail Door).' }
            },
            required: ['wall']
          }
        }
      },
      required: ['name', 'width', 'depth']
    }
  },
  {
    name: 'assemble_cluster',
    description: 'Assembles a complete, high-density functional furniture cluster / zone (e.g. "kitchen_island_gourmet", "living_fireplace_lounge", "executive_workstation", "reception_lobby_suite", "waiting_lounge", "conference_boardroom", "bathroom_suite", "elevator_shaft_pair", "modern_louver_divider", "master_bedroom_suite", "dining_banquet_suite", "jail_cell_suite", "medical_examination", "tuning_mechanic_bay"). Automatically arranges 5-15 related props with millimeter-accurate relative spacing, perfect rotation, zero floating, and authentic community materials in a single call. Use this as your primary tool to build ultra-realistic, rich, living environments effortlessly without placing items one by one.',
    parameters: {
      type: 'OBJECT',
      properties: {
        clusterType: {
          type: 'STRING',
          enum: [
            'kitchen_island_gourmet',
            'living_fireplace_lounge',
            'executive_workstation',
            'reception_lobby_suite',
            'waiting_lounge',
            'conference_boardroom',
            'bathroom_suite',
            'elevator_shaft_pair',
            'modern_louver_divider',
            'master_bedroom_suite',
            'dining_banquet_suite',
            'jail_cell_suite',
            'medical_examination',
            'tuning_mechanic_bay'
          ],
          description: 'The type of functional cluster to assemble.'
        },
        centerX: { type: 'NUMBER', description: 'Center X position in meters.' },
        centerY: { type: 'NUMBER', description: 'Center Y position in meters.' },
        floorLevel: { type: 'NUMBER', description: 'Floor elevation in meters (0.00 for 1st floor, 6.50 for 2nd floor).' },
        rz: { type: 'NUMBER', description: 'Orientation rotation in degrees (0 - 360).' },
        style: { type: 'STRING', enum: ['modern', 'luxury', 'industrial', 'classic'], description: 'Material styling preset.' }
      },
      required: ['clusterType', 'centerX', 'centerY']
    }
  },
  {
    name: 'place_furniture',
    description: 'Places furniture or props with AUTOMATIC GROUNDING. Automatically calculates the exact Z height so feet rest perfectly on the floor (surface: "floor"), items rest on desks (surface: "tabletop"), items hang from ceiling (surface: "ceiling"), or mount on walls (surface: "wall"). ZERO FLOATING.',
    parameters: {
      type: 'OBJECT',
      properties: {
        modelId: { type: 'INTEGER', description: 'Model ID of the furniture or prop (e.g. from search_objects).' },
        x: { type: 'NUMBER', description: 'X position in meters.' },
        y: { type: 'NUMBER', description: 'Y position in meters.' },
        floorLevel: { type: 'NUMBER', description: 'Floor level (default 0.00, 3.50 for 2nd floor, -3.50 for basement).' },
        rz: { type: 'NUMBER', description: 'Yaw rotation in degrees (0 - 360).' },
        name: { type: 'STRING', description: 'Descriptive name for the item.' },
        surface: { type: 'STRING', enum: ['floor', 'tabletop', 'wall', 'ceiling'], description: 'Mounting surface: "floor" (ground), "tabletop" (resting on desk ~0.78m), "wall" (mounted at eye level 1.8m), or "ceiling" (hanging flush).' },
        color: { type: 'STRING', description: 'Hex color tint.' },
        textureName: { type: 'STRING', description: 'Texture preset name.' }
      },
      required: ['modelId', 'x', 'y']
    }
  },
  {
    name: 'batch_place_furniture',
    description: 'Places MULTIPLE furniture items or props simultaneously with AUTOMATIC GROUNDING. Essential for rapidly furnishing entire rooms, lobbies, corridors, and offices in a single turn with rich object density (10-30+ items) without running out of tool loops. Supports placing items on the floor (surface: "floor"), on tables/desks (surface: "tabletop"), on walls (surface: "wall"), or hanging from ceiling (surface: "ceiling").',
    parameters: {
      type: 'OBJECT',
      properties: {
        items: {
          type: 'ARRAY',
          description: 'List of furniture items and props to place.',
          items: {
            type: 'OBJECT',
            properties: {
              modelId: { type: 'INTEGER', description: 'GTA SA model ID (e.g. 2185 desk, 1714 chair, 2226 PC, 1702 couch).' },
              x: { type: 'NUMBER', description: 'X position in meters.' },
              y: { type: 'NUMBER', description: 'Y position in meters.' },
              surface: { type: 'STRING', enum: ['floor', 'tabletop', 'wall', 'ceiling'], description: 'Surface to ground on: "floor" (base on floor), "tabletop" (resting on desk/counter ~0.78m), "wall" (mounted at eye level 1.8m), or "ceiling" (hanging flush from roof).' },
              floorLevel: { type: 'NUMBER', description: 'Floor level (default 0.00, 3.50 for 2nd floor).' },
              rz: { type: 'NUMBER', description: 'Yaw rotation in degrees (0 - 360).' },
              name: { type: 'STRING', description: 'Descriptive name (e.g. "Executive Desk", "Office Chair", "Desktop PC").' },
              color: { type: 'STRING', description: 'Hex color tint.' },
              textureName: { type: 'STRING', description: 'Texture preset name.' }
            },
            required: ['modelId', 'x', 'y']
          }
        }
      },
      required: ['items']
    }
  },
  {
    name: 'search_objects',
    description: 'Searches the catalog of 1,480+ authentic SA-MP 3D models using keywords (e.g. "meja", "table", "chair", "kursi", "sofa", "stair", "tangga", "door", "pintu", "fence", "pagar", "bed", "kasur", "toilet", "light", "lampu", "computer", "pc", "counter", "barrier", "shelf", "wardrobe") or category. Always use this tool whenever you need to find the best model IDs and exact physical dimensions for objects before placing them.',
    parameters: {
      type: 'OBJECT',
      properties: {
        query: {
          type: 'STRING',
          description: 'Search keyword in Indonesian or English (e.g. "meja", "kursi", "sofa", "tangga", "pintu", "kasur", "table", "chair", "door", "stair", "fence", "counter").'
        },
        category: {
          type: 'STRING',
          description: 'Optional category filter: walls, floors, doors, living, bedroom, kitchen, bathroom, office, lighting, props.'
        },
        limit: {
          type: 'INTEGER',
          description: 'Maximum results to return (default 8, max 15).'
        }
      },
      required: ['query']
    }
  },
  {
    name: 'batch_create_objects',
    description: 'Creates multiple 3D SA-MP interior objects simultaneously. Highly recommended for rapidly generating walls, floors, ceilings, and room layouts in a single turn.',
    parameters: {
      type: 'OBJECT',
      properties: {
        objects: {
          type: 'ARRAY',
          description: 'List of objects to instantiate.',
          items: {
            type: 'OBJECT',
            properties: {
              modelId: { type: 'INTEGER', description: 'GTA SA / SA-MP model ID (e.g. 19353 for modular wall, 19379 for floor slab, 1702 for couch).' },
              x: { type: 'NUMBER', description: 'SA-MP X coordinate (East/West in meters).' },
              y: { type: 'NUMBER', description: 'SA-MP Y coordinate (North/South depth in meters).' },
              z: { type: 'NUMBER', description: 'SA-MP Z coordinate (Elevation / Height in meters. Floor surface is 0.00, wall center is 1.75).' },
              rx: { type: 'NUMBER', description: 'Roll rotation in degrees (default 0).' },
              ry: { type: 'NUMBER', description: 'Pitch rotation in degrees (default 0, or 90 for floor slabs).' },
              rz: { type: 'NUMBER', description: 'Yaw compass rotation in degrees (0 - 360).' },
              name: { type: 'STRING', description: 'Descriptive name for the object.' },
              color: { type: 'STRING', description: 'Hex color tint, e.g. #e2e8f0 or #f3eedb.' },
              textureName: { type: 'STRING', description: 'Texture preset name, e.g. wall001, wall008, wall025, des_crckrock.' }
            },
            required: ['modelId', 'x', 'y', 'z']
          }
        }
      },
      required: ['objects']
    }
  },
  {
    name: 'create_object',
    description: 'Creates a single 3D SA-MP object in the interior room.',
    parameters: {
      type: 'OBJECT',
      properties: {
        modelId: { type: 'INTEGER', description: 'GTA SA model ID.' },
        x: { type: 'NUMBER', description: 'SA-MP X coordinate.' },
        y: { type: 'NUMBER', description: 'SA-MP Y coordinate.' },
        z: { type: 'NUMBER', description: 'SA-MP Z coordinate.' },
        rx: { type: 'NUMBER', description: 'Roll in degrees (default 0).' },
        ry: { type: 'NUMBER', description: 'Pitch in degrees (default 0).' },
        rz: { type: 'NUMBER', description: 'Yaw in degrees (0 - 360).' },
        name: { type: 'STRING', description: 'Object name.' },
        color: { type: 'STRING', description: 'Hex color code.' },
        textureName: { type: 'STRING', description: 'Texture name.' }
      },
      required: ['modelId', 'x', 'y', 'z']
    }
  },
  {
    name: 'modify_object',
    description: 'Modifies an existing object (moves position, adjusts rotation, changes color or texture).',
    parameters: {
      type: 'OBJECT',
      properties: {
        objectId: { type: 'STRING', description: 'Unique ID of the object to modify.' },
        x: { type: 'NUMBER', description: 'New X position.' },
        y: { type: 'NUMBER', description: 'New Y position.' },
        z: { type: 'NUMBER', description: 'New Z position.' },
        rx: { type: 'NUMBER', description: 'New Roll rotation.' },
        ry: { type: 'NUMBER', description: 'New Pitch rotation.' },
        rz: { type: 'NUMBER', description: 'New Yaw rotation.' },
        color: { type: 'STRING', description: 'New hex color.' },
        textureName: { type: 'STRING', description: 'New texture name.' }
      },
      required: ['objectId']
    }
  },
  {
    name: 'delete_object',
    description: 'Deletes an object from the interior scene.',
    parameters: {
      type: 'OBJECT',
      properties: {
        objectId: { type: 'STRING', description: 'Unique ID of the object to remove.' }
      },
      required: ['objectId']
    }
  },
  {
    name: 'clear_scene',
    description: 'Removes all objects from the current scene to start fresh with an empty canvas.',
    parameters: {
      type: 'OBJECT',
      properties: {}
    }
  },
  {
    name: 'get_scene_summary',
    description: 'Retrieves a real-time list of all objects currently placed in the room with their positions, rotations, and dimensions.',
    parameters: {
      type: 'OBJECT',
      properties: {}
    }
  },
  {
    name: 'capture_viewport_vision',
    description: 'Takes a camera snapshot of the 3D room to visually inspect aesthetic composition, lighting, and layout.',
    parameters: {
      type: 'OBJECT',
      properties: {
        reason: { type: 'STRING', description: 'The reason or specific area you want to inspect.' }
      }
    }
  },
  {
    name: 'apply_material_theme',
    description: 'Applies a cohesive material and color theme across the entire map or a specific room (e.g. "modern_luxury", "corporate_executive", "police_government", "industrial_garage", "warm_cozy_home", "classic_wood"). Automatically harmonizes all walls, floors, ceilings, woodwork, and metal fixtures to look like a high-end community showcase map.',
    parameters: {
      type: 'OBJECT',
      properties: {
        theme: {
          type: 'STRING',
          enum: ['modern_luxury', 'corporate_executive', 'police_government', 'industrial_garage', 'warm_cozy_home', 'classic_wood'],
          description: 'Cohesive theme to apply.'
        }
      },
      required: ['theme']
    }
  },
  {
    name: 'set_camera_preset',
    description: 'Adjusts the 3D viewport camera to view the room from different angles.',
    parameters: {
      type: 'OBJECT',
      properties: {
        preset: {
          type: 'STRING',
          enum: ['front', 'back', 'top', 'inside'],
          description: 'Camera view preset (front perspective, back perspective, top-down CAD floorplan, or inside room eye-level).'
        }
      },
      required: ['preset']
    }
  }
];

export const DEFAULT_AI_MODEL = 'gemini-3.5-flash-lite';

export interface ModelOption {
  id: string;
  name: string;
  desc: string;
  badge?: string;
}

export const SUPPORTED_MODELS: ModelOption[] = [
  {
    id: 'gemini-3.5-flash-lite',
    name: 'Gemini 3.5 Flash-Lite',
    desc: 'Super Cepat, Ringan & Efisien Kuota (Rekomendasi)',
    badge: 'Recommended'
  },
  {
    id: 'gemini-3.6-flash',
    name: 'Gemini 3.6 Flash',
    desc: 'Frontier Agentic Execution & Penalaran Coding Kuat',
    badge: 'Pro Agent'
  },
  {
    id: 'gemini-3.8-flash',
    name: 'Gemini 3.8 Flash',
    desc: 'Flagship Multimodal Flash Terbaru',
    badge: 'Flagship'
  }
];

/**
 * Fetches Gemini API with automatic exponential backoff retry for 503/429 high demand spikes.
 */
async function fetchGeminiWithRetry(
  endpoint: string,
  requestBody: Record<string, unknown>,
  activeModel: string,
  onRetryNotice?: (notice: string) => void,
  maxRetries: number = 3
): Promise<Response> {
  let attempt = 0;
  while (attempt <= maxRetries) {
    attempt++;
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(requestBody)
    });

    if (res.ok) {
      return res;
    }

    const errText = await res.text();
    let errMsg = `Gemini API Error (${res.status})`;
    try {
      const parsed = JSON.parse(errText);
      if (parsed.error?.message) errMsg = parsed.error.message;
    } catch {
      errMsg = errText || errMsg;
    }

    const isTemporarySpike =
      res.status === 503 ||
      res.status === 429 ||
      errMsg.toLowerCase().includes('high demand') ||
      errMsg.toLowerCase().includes('overloaded') ||
      errMsg.toLowerCase().includes('resource has been exhausted') ||
      errMsg.toLowerCase().includes('rate limit');

    if (isTemporarySpike && attempt <= maxRetries) {
      const waitMs = attempt * 2500; // 2.5s, 5.0s, 7.5s
      const notice = `Server Google sedang sibuk (high demand). Mencoba ulang otomatis (${attempt}/${maxRetries}) dalam ${waitMs / 1000} detik...`;
      console.warn(notice);
      onRetryNotice?.(notice);
      await new Promise(resolve => setTimeout(resolve, waitMs));
      continue;
    }

    if (res.status === 404 || errMsg.toLowerCase().includes('not found') || errMsg.toLowerCase().includes('not available')) {
      errMsg = `Model "${activeModel}" tidak ditemukan atau sudah tidak tersedia. Pesan: ${errMsg}. Silakan pilih model lain seperti Gemini 3.5 Flash-Lite atau Gemini 3.6 Flash di menu Pengaturan AI Copilot.`;
    }

    throw new Error(errMsg);
  }

  throw new Error('Gagal menghubungi model setelah beberapa kali percobaan otomatis.');
}

export async function runAgentStep(
  apiKey: string,
  userPrompt: string,
  handlers: AgentContextHandlers,
  conversationHistory: Array<{ role: 'user' | 'model'; parts: unknown[] }>,
  onToolUpdate?: (tools: ToolCallExecution[]) => void,
  modelName: string = DEFAULT_AI_MODEL
): Promise<{ replyText: string; updatedHistory: Array<{ role: 'user' | 'model'; parts: unknown[] }> }> {
  const currentObjects = handlers.getSceneObjects();
  const sceneSummary = currentObjects.map(o => ({
    id: o.id,
    modelId: o.modelId,
    name: o.name,
    category: o.category,
    position: o.position,
    rotation: o.rotation,
    dimensions: o.dimensions
  }));

  // Capture current 3D canvas vision snapshot
  const visionSnapshot = handlers.captureViewport();

  // Construct current user turn parts
  const userTurnParts: unknown[] = [];

  // Vision input if available
  if (visionSnapshot && visionSnapshot.startsWith('data:image')) {
    const base64Data = visionSnapshot.split(',')[1];
    if (base64Data) {
      userTurnParts.push({
        inlineData: {
          mimeType: 'image/jpeg',
          data: base64Data
        }
      });
    }
  }

  // Text context with scene state and user request
  const textPayload = `[SCENE_STATE]
Total Objects in Room: ${currentObjects.length}
Scene Objects:
${JSON.stringify(sceneSummary, null, 2)}

[USER_REQUEST]
${userPrompt}`;

  userTurnParts.push({ text: textPayload });

  const history = [...conversationHistory, { role: 'user' as const, parts: userTurnParts }];
  const activeToolCalls: ToolCallExecution[] = [];

  // Multi-turn tool execution loop (up to 12 turns for rich complex facility builds)
  let loopCount = 0;
  const MAX_LOOPS = 12;
  const activeModel = modelName.trim() || DEFAULT_AI_MODEL;

  while (loopCount < MAX_LOOPS) {
    loopCount++;

    const requestBody = {
      contents: history,
      systemInstruction: {
        parts: [{ text: AI_SYSTEM_PROMPT }]
      },
      tools: [{ functionDeclarations: AGENT_FUNCTION_DECLARATIONS }],
      generationConfig: {
        temperature: 0.4,
        maxOutputTokens: 6144
      }
    };

    const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(activeModel)}:generateContent?key=${apiKey}`;
    const res = await fetchGeminiWithRetry(endpoint, requestBody, activeModel, (notice) => {
      const retryId = `retry_${Date.now()}`;
      activeToolCalls.push({
        id: retryId,
        name: 'auto_retry',
        args: { message: notice },
        status: 'running',
        result: notice
      });
      onToolUpdate?.([...activeToolCalls]);
    });

    const data = await res.json();
    const candidate = data.candidates?.[0];
    if (!candidate || !candidate.content) {
      return { replyText: 'Maaf, tidak ada respon dari model AI.', updatedHistory: history };
    }

    const modelParts = candidate.content.parts || [];
    history.push({ role: 'model', parts: modelParts });

    // Check if model emitted functionCalls
    const functionCalls = modelParts.filter((p: { functionCall?: unknown }) => Boolean(p.functionCall));

    if (functionCalls.length === 0) {
      // Model finished calling tools, extract text response
      const textParts = modelParts
        .filter((p: { text?: string }) => typeof p.text === 'string')
        .map((p: { text: string }) => p.text);
      return {
        replyText: textParts.join('\n') || 'Tugas desain selesai dieksekusi.',
        updatedHistory: history
      };
    }

    // Execute all returned function calls
    const toolResponseParts: unknown[] = [];

    for (const callPart of functionCalls) {
      const call = callPart.functionCall;
      const toolId = `tool_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`;
      const toolExecution: ToolCallExecution = {
        id: toolId,
        name: call.name,
        args: call.args || {},
        status: 'running'
      };
      activeToolCalls.push(toolExecution);
      onToolUpdate?.([...activeToolCalls]);

      let toolResult: Record<string, unknown> = { success: true };

      try {
        switch (call.name) {
          case 'build_room': {
            const createdIds = handlers.buildRoom(call.args as BuildRoomOptions);
            toolResult = { success: true, count: createdIds.length, createdIds };
            toolExecution.result = `Ruangan dibuat: ${createdIds.length} elemen dinding/lantai/plafon rapat`;
            break;
          }
          case 'assemble_cluster': {
            const createdIds = handlers.assembleCluster
              ? handlers.assembleCluster(call.args as AssembleClusterOptions)
              : [];
            toolResult = { success: true, count: createdIds.length, createdIds };
            toolExecution.result = `Cluster ${call.args.clusterType} berhasil dirakit (${createdIds.length} elemen)`;
            break;
          }
          case 'apply_material_theme': {
            const updatedCount = handlers.applyMaterialTheme
              ? handlers.applyMaterialTheme(call.args.theme as MaterialTheme)
              : 0;
            toolResult = { success: true, updatedCount };
            toolExecution.result = `Tema material "${call.args.theme}" diterapkan ke ${updatedCount} objek`;
            break;
          }
          case 'place_furniture': {
            const p = call.args as Parameters<typeof handlers.placeFurniture>[0];
            const newId = handlers.placeFurniture(p);
            toolResult = { success: true, objectId: newId };
            toolExecution.result = `Perabotan ditempatkan rapat lantai (ID: ${newId})`;
            break;
          }
          case 'batch_place_furniture': {
            const list = (call.args.items || []) as Parameters<typeof handlers.batchPlaceFurniture>[0];
            const createdIds = handlers.batchPlaceFurniture(list);
            toolResult = { success: true, count: createdIds.length, createdIds };
            toolExecution.result = `Berhasil menempatkan ${createdIds.length} perabotan rapat lantai`;
            break;
          }
          case 'batch_create_objects': {
            const list = (call.args.objects || []) as Array<{
              modelId: number;
              x: number;
              y: number;
              z: number;
              rx?: number;
              ry?: number;
              rz?: number;
              name?: string;
              color?: string;
              textureName?: string;
            }>;
            const createdIds = handlers.batchCreateObjects(list);
            toolResult = { success: true, count: createdIds.length, createdIds };
            toolExecution.result = `Berhasil membuat ${createdIds.length} objek`;
            break;
          }
          case 'create_object': {
            const newId = handlers.createObject(call.args as Parameters<typeof handlers.createObject>[0]);
            toolResult = { success: true, objectId: newId };
            toolExecution.result = `Objek dibuat dengan ID: ${newId}`;
            break;
          }
          case 'modify_object': {
            const ok = handlers.modifyObject(call.args as Parameters<typeof handlers.modifyObject>[0]);
            toolResult = { success: ok };
            toolExecution.result = ok ? 'Objek berhasil diperbarui' : 'Objek tidak ditemukan';
            break;
          }
          case 'delete_object': {
            const ok = handlers.deleteObject(call.args.objectId as string);
            toolResult = { success: ok };
            toolExecution.result = ok ? 'Objek dihapus' : 'Objek tidak ditemukan';
            break;
          }
          case 'clear_scene': {
            handlers.clearScene();
            toolResult = { success: true, message: 'Semua objek dibersihkan' };
            toolExecution.result = 'Kanvas dibersihkan';
            break;
          }
          case 'get_scene_summary': {
            const objs = handlers.getSceneObjects();
            toolResult = {
              success: true,
              count: objs.length,
              objects: objs.map(o => ({ id: o.id, modelId: o.modelId, name: o.name, pos: o.position, rot: o.rotation }))
            };
            toolExecution.result = `Ditemukan ${objs.length} objek`;
            break;
          }
          case 'capture_viewport_vision': {
            const snap = handlers.captureViewport();
            toolResult = { success: Boolean(snap), message: 'Viewport snapshot captured' };
            toolExecution.result = 'Tangkapan kamera diambil untuk inspeksi';
            break;
          }
          case 'search_objects': {
            const q = (call.args.query as string) || '';
            const cat = call.args.category as string | undefined;
            const lim = typeof call.args.limit === 'number' ? call.args.limit : 8;
            const matches = handlers.searchObjects(q, cat, lim);
            toolResult = {
              success: true,
              query: q,
              foundCount: matches.length,
              objects: matches
            };
            toolExecution.result = `Ditemukan ${matches.length} objek untuk "${q}"`;
            break;
          }
          case 'set_camera_preset': {
            handlers.setCameraPreset(call.args.preset as 'front' | 'back' | 'top' | 'inside');
            toolResult = { success: true, preset: call.args.preset };
            toolExecution.result = `Kamera disetel ke sudut: ${call.args.preset}`;
            break;
          }
          default:
            toolResult = { error: `Tool ${call.name} not implemented` };
            toolExecution.result = 'Tool tidak dikenal';
        }
        toolExecution.status = 'completed';
      } catch (err: unknown) {
        const msg = err instanceof Error ? err.message : String(err);
        toolResult = { success: false, error: msg };
        toolExecution.status = 'failed';
        toolExecution.result = `Gagal: ${msg}`;
      }

      onToolUpdate?.([...activeToolCalls]);

      toolResponseParts.push({
        functionResponse: {
          name: call.name,
          response: toolResult
        }
      });
    }

    // Send function responses back to Gemini
    history.push({
      role: 'user',
      parts: toolResponseParts
    });
  }

  return { replyText: 'Selesai menjalankan langkah-langkah desain ruangan.', updatedHistory: history };
}
