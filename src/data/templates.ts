import { MapObject } from '@/types/editor';

export type TemplateType = 'empty' | 'starter_4x4' | 'room_8x8' | 'store_247';

export interface TemplateInfo {
  id: TemplateType;
  name: string;
  description: string;
  badge: string;
  objectCount: number;
}

export const TEMPLATE_LIST: TemplateInfo[] = [
  {
    id: 'empty',
    name: 'Kanvas Kosong (Clean Blank)',
    description: 'Mulai dari nol tanpa objek awal sama sekali. Ruang kerja 100% bersih untuk kebebasan desain penuh.',
    badge: '0 Objek',
    objectCount: 0
  },
  {
    id: 'starter_4x4',
    name: 'Ruangan Minimalis (3.2 x 3.2m)',
    description: 'Ruang tamu rapi presisi 1 kamar. 4 dinding modular rapat tanpa celah, lantai parket flat, sofa, meja kaca, dan lampu.',
    badge: '7 Objek',
    objectCount: 7
  },
  {
    id: 'room_8x8',
    name: 'Ruang Tamu Luas (6.4 x 6.4m)',
    description: 'Ruangan besar dengan 8 panel dinding modular saling mengunci, lantai marmer luas, sofa set lengkap, TV, dan 2 lampu gantung.',
    badge: '14 Objek',
    objectCount: 14
  },
  {
    id: 'store_247',
    name: 'Minimarket / Toko 24/7',
    description: 'Denah toko modern lengkap dengan lantai ubin keramik putih, rak display snack, kulkas pendingin, meja kasir, dan PC kasir.',
    badge: '12 Objek',
    objectCount: 12
  }
];

/**
 * 1. STARTER 4X4 (Airtight 3.212m x 3.212m Snug Room):
 * - Wall 19353 length is 3.212m, height is 3.500m (half-height 1.75m), thickness 0.178m.
 * - Sits exactly on floor Z = 0.00m (center Z = 1.75m).
 * - North/South walls run East-West (Rotation Yaw = 90 deg).
 * - East/West walls run North-South (Rotation Yaw = 0 deg).
 * - Floor 19379 rotated flat (Pitch RY = 90 deg) at Z = -0.089m so top surface is at Z = 0.00m.
 */
export const STARTER_4X4: MapObject[] = [
  // Flat Floor Slab (Model: 19379 rotated horizontal)
  {
    id: 'starter_floor',
    modelId: 19379,
    name: 'Modular Floor Slab',
    category: 'floors',
    position: [0, 0, -0.089],
    rotation: [0, 90, 0], // Pitch RY = 90 deg lies 100% flat
    dimensions: [10.5, 0.18, 9.6],
    materials: {
      0: {
        index: 0,
        modelId: 10756,
        txdName: 'airportroads_sfse',
        textureName: 'des_crckrock',
        color: '#422817'
      }
    },
    materialTexts: {},
    visible: true,
    locked: true
  },
  // North Wall (runs East-West from X=-1.606 to X=+1.606 at Y=+1.606)
  {
    id: 'starter_wall_n',
    modelId: 19353,
    name: 'Modular Wall North',
    category: 'walls',
    position: [0, 1.606, 1.75],
    rotation: [0, 0, 90], // Yaw 90 aligns width along East-West
    dimensions: [3.21, 3.5, 0.18],
    materials: {
      0: {
        index: 0,
        modelId: 19353,
        txdName: 'all_walls',
        textureName: 'wall001',
        color: '#e2e8f0'
      }
    },
    materialTexts: {},
    visible: true,
    locked: false
  },
  // South Wall (runs East-West from X=-1.606 to X=+1.606 at Y=-1.606)
  {
    id: 'starter_wall_s',
    modelId: 19353,
    name: 'Modular Wall South',
    category: 'walls',
    position: [0, -1.606, 1.75],
    rotation: [0, 0, 90],
    dimensions: [3.21, 3.5, 0.18],
    materials: {
      0: {
        index: 0,
        modelId: 19353,
        txdName: 'all_walls',
        textureName: 'wall001',
        color: '#e2e8f0'
      }
    },
    materialTexts: {},
    visible: true,
    locked: false
  },
  // East Wall (runs North-South from Y=-1.606 to Y=+1.606 at X=+1.606)
  {
    id: 'starter_wall_e',
    modelId: 19353,
    name: 'Modular Wall East',
    category: 'walls',
    position: [1.606, 0, 1.75],
    rotation: [0, 0, 0], // Yaw 0 aligns width along North-South
    dimensions: [3.21, 3.5, 0.18],
    materials: {
      0: {
        index: 0,
        modelId: 19353,
        txdName: 'all_walls',
        textureName: 'wall001',
        color: '#e2e8f0'
      }
    },
    materialTexts: {},
    visible: true,
    locked: false
  },
  // West Wall (runs North-South from Y=-1.606 to Y=+1.606 at X=-1.606)
  {
    id: 'starter_wall_w',
    modelId: 19353,
    name: 'Modular Wall West',
    category: 'walls',
    position: [-1.606, 0, 1.75],
    rotation: [0, 0, 0],
    dimensions: [3.21, 3.5, 0.18],
    materials: {
      0: {
        index: 0,
        modelId: 19353,
        txdName: 'all_walls',
        textureName: 'wall001',
        color: '#e2e8f0'
      }
    },
    materialTexts: {},
    visible: true,
    locked: false
  },
  // Sofa (resting flat on floor Z=0.00m against North Wall)
  {
    id: 'starter_couch',
    modelId: 1702,
    name: 'Modern Living Couch',
    category: 'living',
    position: [0, 0.7, 0.425],
    rotation: [0, 0, 180], // Facing South towards center of room
    dimensions: [2.2, 0.85, 0.95],
    materials: {
      0: {
        index: 0,
        modelId: 1702,
        txdName: 'all_walls',
        textureName: 'wall016',
        color: '#1e293b'
      }
    },
    materialTexts: {},
    visible: true,
    locked: false
  },
  // Glass Coffee Table in center
  {
    id: 'starter_table',
    modelId: 1723,
    name: 'Glass Coffee Table',
    category: 'living',
    position: [0, -0.3, 0.225],
    rotation: [0, 0, 0],
    dimensions: [1.2, 0.45, 0.8],
    materials: {},
    materialTexts: {},
    visible: true,
    locked: false
  },
  // Chandelier Light hanging from ceiling
  {
    id: 'starter_light',
    modelId: 1215,
    name: 'Vintage Hanging Chandelier',
    category: 'lighting',
    position: [0, 0, 2.7],
    rotation: [0, 0, 0],
    dimensions: [0.6, 0.8, 0.6],
    materials: {},
    materialTexts: {},
    visible: true,
    locked: false
  }
];

/**
 * 2. ROOM 8X8 (Grand Hall 6.424m x 6.424m x 3.5m height):
 * - 8 wall panels (2 per side) meeting at millimeter precision without any gaps.
 * - 1 seamless flat floor slab covering the entire room.
 * - Full furniture set: 3-seater sofa, 2 matching armchairs, coffee table, TV console, 2 chandeliers.
 */
export const ROOM_8X8: MapObject[] = [
  // Seamless Large Floor Slab
  {
    id: 'floor_8x8_main',
    modelId: 19379,
    name: 'Polished Marble Floor Slab',
    category: 'floors',
    position: [0, 0, -0.089],
    rotation: [0, 90, 0],
    dimensions: [10.5, 0.18, 9.6],
    materials: {
      0: {
        index: 0,
        modelId: 19379,
        txdName: 'all_walls',
        textureName: 'wall025',
        color: '#f8fafc'
      }
    },
    materialTexts: {},
    visible: true,
    locked: true
  },
  // North Walls (at Y = +3.212m, running along East-West)
  {
    id: 'wall_8x8_n1',
    modelId: 19353,
    name: 'Wall North Left',
    category: 'walls',
    position: [-1.606, 3.212, 1.75],
    rotation: [0, 0, 90],
    dimensions: [3.21, 3.5, 0.18],
    materials: { 0: { index: 0, modelId: 19353, txdName: 'all_walls', textureName: 'wall001', color: '#e2e8f0' } },
    materialTexts: {}, visible: true, locked: false
  },
  {
    id: 'wall_8x8_n2',
    modelId: 19353,
    name: 'Wall North Right',
    category: 'walls',
    position: [1.606, 3.212, 1.75],
    rotation: [0, 0, 90],
    dimensions: [3.21, 3.5, 0.18],
    materials: { 0: { index: 0, modelId: 19353, txdName: 'all_walls', textureName: 'wall001', color: '#e2e8f0' } },
    materialTexts: {}, visible: true, locked: false
  },
  // South Walls (at Y = -3.212m, running along East-West)
  {
    id: 'wall_8x8_s1',
    modelId: 19353,
    name: 'Wall South Left',
    category: 'walls',
    position: [-1.606, -3.212, 1.75],
    rotation: [0, 0, 90],
    dimensions: [3.21, 3.5, 0.18],
    materials: { 0: { index: 0, modelId: 19353, txdName: 'all_walls', textureName: 'wall001', color: '#e2e8f0' } },
    materialTexts: {}, visible: true, locked: false
  },
  {
    id: 'wall_8x8_s2',
    modelId: 19353,
    name: 'Wall South Right',
    category: 'walls',
    position: [1.606, -3.212, 1.75],
    rotation: [0, 0, 90],
    dimensions: [3.21, 3.5, 0.18],
    materials: { 0: { index: 0, modelId: 19353, txdName: 'all_walls', textureName: 'wall001', color: '#e2e8f0' } },
    materialTexts: {}, visible: true, locked: false
  },
  // East Walls (at X = +3.212m, running along North-South)
  {
    id: 'wall_8x8_e1',
    modelId: 19353,
    name: 'Wall East Top',
    category: 'walls',
    position: [3.212, 1.606, 1.75],
    rotation: [0, 0, 0],
    dimensions: [3.21, 3.5, 0.18],
    materials: { 0: { index: 0, modelId: 19353, txdName: 'all_walls', textureName: 'wall001', color: '#e2e8f0' } },
    materialTexts: {}, visible: true, locked: false
  },
  {
    id: 'wall_8x8_e2',
    modelId: 19353,
    name: 'Wall East Bottom',
    category: 'walls',
    position: [3.212, -1.606, 1.75],
    rotation: [0, 0, 0],
    dimensions: [3.21, 3.5, 0.18],
    materials: { 0: { index: 0, modelId: 19353, txdName: 'all_walls', textureName: 'wall001', color: '#e2e8f0' } },
    materialTexts: {}, visible: true, locked: false
  },
  // West Walls (at X = -3.212m, running along North-South)
  {
    id: 'wall_8x8_w1',
    modelId: 19353,
    name: 'Wall West Top',
    category: 'walls',
    position: [-3.212, 1.606, 1.75],
    rotation: [0, 0, 0],
    dimensions: [3.21, 3.5, 0.18],
    materials: { 0: { index: 0, modelId: 19353, txdName: 'all_walls', textureName: 'wall001', color: '#e2e8f0' } },
    materialTexts: {}, visible: true, locked: false
  },
  {
    id: 'wall_8x8_w2',
    modelId: 19353,
    name: 'Wall West Bottom',
    category: 'walls',
    position: [-3.212, -1.606, 1.75],
    rotation: [0, 0, 0],
    dimensions: [3.21, 3.5, 0.18],
    materials: { 0: { index: 0, modelId: 19353, txdName: 'all_walls', textureName: 'wall001', color: '#e2e8f0' } },
    materialTexts: {}, visible: true, locked: false
  },
  // Living Room Set
  {
    id: 'sofa_8x8_main',
    modelId: 1702,
    name: 'Main Executive Sofa',
    category: 'living',
    position: [0, 1.4, 0.425],
    rotation: [0, 0, 180],
    dimensions: [2.2, 0.85, 0.95],
    materials: { 0: { index: 0, modelId: 1702, txdName: 'all_walls', textureName: 'wall016', color: '#0f172a' } },
    materialTexts: {}, visible: true, locked: false
  },
  {
    id: 'chair_8x8_left',
    modelId: 1704,
    name: 'Armchair Left',
    category: 'living',
    position: [-1.7, 0.2, 0.425],
    rotation: [0, 0, 90], // Facing East into conversation area
    dimensions: [0.95, 0.85, 0.95],
    materials: {}, materialTexts: {}, visible: true, locked: false
  },
  {
    id: 'chair_8x8_right',
    modelId: 1704,
    name: 'Armchair Right',
    category: 'living',
    position: [1.7, 0.2, 0.425],
    rotation: [0, 0, 270], // Facing West into conversation area
    dimensions: [0.95, 0.85, 0.95],
    materials: {}, materialTexts: {}, visible: true, locked: false
  },
  {
    id: 'table_8x8_center',
    modelId: 1723,
    name: 'Glass Coffee Table',
    category: 'living',
    position: [0, 0.2, 0.225],
    rotation: [0, 0, 0],
    dimensions: [1.2, 0.45, 0.8],
    materials: {}, materialTexts: {}, visible: true, locked: false
  },
  {
    id: 'tv_8x8',
    modelId: 1717,
    name: 'Flat Screen TV Unit',
    category: 'living',
    position: [0, -2.8, 0.45],
    rotation: [0, 0, 0], // Facing North towards sofa
    dimensions: [1.4, 0.9, 0.5],
    materials: {}, materialTexts: {}, visible: true, locked: false
  },
  // Two Balanced Ceiling Chandeliers
  {
    id: 'light_8x8_north',
    modelId: 1215,
    name: 'Grand Chandelier North',
    category: 'lighting',
    position: [0, 1.4, 2.7],
    rotation: [0, 0, 0],
    dimensions: [0.6, 0.8, 0.6],
    materials: {}, materialTexts: {}, visible: true, locked: false
  },
  {
    id: 'light_8x8_south',
    modelId: 1215,
    name: 'Grand Chandelier South',
    category: 'lighting',
    position: [0, -1.4, 2.7],
    rotation: [0, 0, 0],
    dimensions: [0.6, 0.8, 0.6],
    materials: {}, materialTexts: {}, visible: true, locked: false
  }
];

/**
 * 3. STORE 247 (Convenience Store / 24-7 Minimarket):
 * - 6.424m x 6.424m store footprint with front entrance opening.
 * - Flat white tile floor.
 * - Checkout counter with POS terminal, snack display gondola, 2 beverage coolers, and neon lights.
 */
export const STORE_247: MapObject[] = [
  // Supermarket White Tile Floor
  {
    id: 'store_floor',
    modelId: 19379,
    name: 'Commercial Store Floor',
    category: 'floors',
    position: [0, 0, -0.089],
    rotation: [0, 90, 0],
    dimensions: [10.5, 0.18, 9.6],
    materials: {
      0: {
        index: 0,
        modelId: 19379,
        txdName: 'all_walls',
        textureName: 'wall027',
        color: '#f8fafc'
      }
    },
    materialTexts: {},
    visible: true,
    locked: true
  },
  // Back Walls (North, Y = +3.212m)
  {
    id: 'store_wall_n1',
    modelId: 19353,
    name: 'Store Back Wall Left',
    category: 'walls',
    position: [-1.606, 3.212, 1.75],
    rotation: [0, 0, 90],
    dimensions: [3.21, 3.5, 0.18],
    materials: { 0: { index: 0, modelId: 19353, txdName: 'all_walls', textureName: 'wall010', color: '#e2e8f0' } },
    materialTexts: {}, visible: true, locked: false
  },
  {
    id: 'store_wall_n2',
    modelId: 19353,
    name: 'Store Back Wall Right',
    category: 'walls',
    position: [1.606, 3.212, 1.75],
    rotation: [0, 0, 90],
    dimensions: [3.21, 3.5, 0.18],
    materials: { 0: { index: 0, modelId: 19353, txdName: 'all_walls', textureName: 'wall010', color: '#e2e8f0' } },
    materialTexts: {}, visible: true, locked: false
  },
  // East Walls (Right, X = +3.212m)
  {
    id: 'store_wall_e1',
    modelId: 19353,
    name: 'Store Wall East N',
    category: 'walls',
    position: [3.212, 1.606, 1.75],
    rotation: [0, 0, 0],
    dimensions: [3.21, 3.5, 0.18],
    materials: { 0: { index: 0, modelId: 19353, txdName: 'all_walls', textureName: 'wall001', color: '#ffffff' } },
    materialTexts: {}, visible: true, locked: false
  },
  {
    id: 'store_wall_e2',
    modelId: 19353,
    name: 'Store Wall East S',
    category: 'walls',
    position: [3.212, -1.606, 1.75],
    rotation: [0, 0, 0],
    dimensions: [3.21, 3.5, 0.18],
    materials: { 0: { index: 0, modelId: 19353, txdName: 'all_walls', textureName: 'wall001', color: '#ffffff' } },
    materialTexts: {}, visible: true, locked: false
  },
  // West Walls (Left, X = -3.212m)
  {
    id: 'store_wall_w1',
    modelId: 19353,
    name: 'Store Wall West N',
    category: 'walls',
    position: [-3.212, 1.606, 1.75],
    rotation: [0, 0, 0],
    dimensions: [3.21, 3.5, 0.18],
    materials: { 0: { index: 0, modelId: 19353, txdName: 'all_walls', textureName: 'wall001', color: '#ffffff' } },
    materialTexts: {}, visible: true, locked: false
  },
  {
    id: 'store_wall_w2',
    modelId: 19353,
    name: 'Store Wall West S',
    category: 'walls',
    position: [-3.212, -1.606, 1.75],
    rotation: [0, 0, 0],
    dimensions: [3.21, 3.5, 0.18],
    materials: { 0: { index: 0, modelId: 19353, txdName: 'all_walls', textureName: 'wall001', color: '#ffffff' } },
    materialTexts: {}, visible: true, locked: false
  },
  // South Wall Left (Front Entrance area: left panel is wall, right panel is entrance opening)
  {
    id: 'store_wall_s1',
    modelId: 19353,
    name: 'Store Front Wall Left',
    category: 'walls',
    position: [-1.606, -3.212, 1.75],
    rotation: [0, 0, 90],
    dimensions: [3.21, 3.5, 0.18],
    materials: { 0: { index: 0, modelId: 19353, txdName: 'all_walls', textureName: 'wall001', color: '#ffffff' } },
    materialTexts: {}, visible: true, locked: false
  },
  // Cashier Checkout Desk
  {
    id: 'store_desk',
    modelId: 2185,
    name: 'Cashier Counter Desk',
    category: 'office',
    position: [-1.4, -1.8, 0.45],
    rotation: [0, 0, 90], // Facing entrance customer queue
    dimensions: [1.8, 0.9, 0.8],
    materials: {}, materialTexts: {}, visible: true, locked: false
  },
  // Cashier POS Terminal Computer (placed on counter at Z = 0.90 + 0.25 = 1.15)
  {
    id: 'store_pc',
    modelId: 2226,
    name: 'POS Cash Register Terminal',
    category: 'office',
    position: [-1.4, -1.8, 1.15],
    rotation: [0, 0, 90],
    dimensions: [0.6, 0.5, 0.5],
    materials: {}, materialTexts: {}, visible: true, locked: false
  },
  // Two Drink Cooler Refrigerators against back North Wall
  {
    id: 'store_fridge_1',
    modelId: 2360,
    name: 'Beverage Cooler Left',
    category: 'kitchen',
    position: [-0.6, 2.7, 0.925],
    rotation: [0, 0, 180], // Facing customer forward
    dimensions: [0.95, 1.85, 0.8],
    materials: {}, materialTexts: {}, visible: true, locked: false
  },
  {
    id: 'store_fridge_2',
    modelId: 2360,
    name: 'Beverage Cooler Right',
    category: 'kitchen',
    position: [0.8, 2.7, 0.925],
    rotation: [0, 0, 180],
    dimensions: [0.95, 1.85, 0.8],
    materials: {}, materialTexts: {}, visible: true, locked: false
  },
  // Snack Shelf Gondola Rack in center
  {
    id: 'store_shelf',
    modelId: 2190,
    name: 'Snack Display Gondola',
    category: 'office',
    position: [1.2, 0.2, 1.0],
    rotation: [0, 0, 0], // Along North-South aisle
    dimensions: [1.2, 2.0, 0.45],
    materials: {}, materialTexts: {}, visible: true, locked: false
  },
  // Commercial Bright White Neon Beam on ceiling
  {
    id: 'store_neon_main',
    modelId: 18656,
    name: 'Commercial White Ceiling Beam',
    category: 'lighting',
    position: [0, 0, 3.2],
    rotation: [0, 0, 0],
    dimensions: [0.3, 0.3, 2.0],
    materials: {}, materialTexts: {}, visible: true, locked: false
  }
];

export function getTemplateObjects(type: TemplateType): MapObject[] {
  switch (type) {
    case 'empty':
      return [];
    case 'starter_4x4':
      return JSON.parse(JSON.stringify(STARTER_4X4));
    case 'room_8x8':
      return JSON.parse(JSON.stringify(ROOM_8X8));
    case 'store_247':
      return JSON.parse(JSON.stringify(STORE_247));
    default:
      return [];
  }
}
