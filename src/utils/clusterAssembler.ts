/**
 * Dynamic Architectural Cluster Assembler for SA-MP 3D Map Editor
 *
 * Provides high-level, modular functional assemblies (kitchen island, executive workstation,
 * reception counter, bathroom suite, elevator shaft, etc.) with millimeter-accurate relative
 * offsets, rotation matrices, surface grounding, and authentic materials.
 */

import { getGroundedZ } from './roomBuilder';

export type ClusterType =
  | 'kitchen_island_gourmet'
  | 'living_fireplace_lounge'
  | 'executive_workstation'
  | 'reception_lobby_suite'
  | 'waiting_lounge'
  | 'conference_boardroom'
  | 'bathroom_suite'
  | 'elevator_shaft_pair'
  | 'modern_louver_divider'
  | 'master_bedroom_suite'
  | 'dining_banquet_suite'
  | 'jail_cell_suite'
  | 'medical_examination'
  | 'tuning_mechanic_bay';

export interface ClusterItemDefinition {
  modelId: number;
  relX: number; // Relative X offset from cluster center before rotation
  relY: number; // Relative Y offset from cluster center before rotation
  surface: 'floor' | 'tabletop' | 'wall' | 'ceiling';
  surfaceZOffset?: number; // Extra custom Z offset in meters
  relRz: number; // Relative yaw rotation in degrees
  name: string;
  txdName?: string;
  textureName?: string;
  color?: string;
}

export interface AssembleClusterOptions {
  clusterType: ClusterType;
  centerX: number;
  centerY: number;
  floorLevel?: number;
  rz?: number; // Overall orientation rotation (0-360)
  style?: 'modern' | 'luxury' | 'industrial' | 'classic';
}

export interface GeneratedClusterObject {
  modelId: number;
  position: [number, number, number];
  rotation: [number, number, number];
  name: string;
  materials?: Record<number, {
    index: number;
    modelId: number;
    txdName: string;
    textureName: string;
    color: string;
  }>;
}

// ─────────────────────────────────────────────────────────────────────────────
// CLUSTER DEFINITIONS (Community Masterclass Recipes)
// ─────────────────────────────────────────────────────────────────────────────

const CLUSTERS: Record<ClusterType, ClusterItemDefinition[]> = {
  // 1. Kitchen Island Gourmet Suite (Inspired by contoh2.txt)
  kitchen_island_gourmet: [
    // Island Cooker & Extraction Hood
    { modelId: 19923, relX: 0.0, relY: 0.0, surface: 'floor', relRz: 0, name: 'Mkislandcooker1 (Kitchen Island)', txdName: 'break_s_bins', textureName: 'CJ_WOOD_DARK' },
    { modelId: 19924, relX: 0.0, relY: 0.0, surface: 'ceiling', surfaceZOffset: -0.4, relRz: 0, name: 'Mkextractionhood1 (Cooker Hood)', txdName: 'bombshop_las', textureName: 'greymetal' },
    // Cooking props on top of island
    { modelId: 19581, relX: -0.3, relY: 0.1, surface: 'tabletop', relRz: 15, name: 'Marcosfryingpan1 (Frying Pan)' },
    { modelId: 19582, relX: -0.3, relY: 0.1, surface: 'tabletop', surfaceZOffset: 0.03, relRz: 45, name: 'Marcossteak1 (Sizzling Steak)' },
    { modelId: 19586, relX: -0.6, relY: 0.15, surface: 'tabletop', relRz: -30, name: 'Marcosspatula1 (Cooking Spatula)' },
    { modelId: 11718, relX: 0.35, relY: 0.1, surface: 'tabletop', relRz: 0, name: 'Sweetssaucepan1 (Small Saucepan)' },
    // Appliances on counter
    { modelId: 11743, relX: 0.8, relY: -0.1, surface: 'tabletop', relRz: -90, name: 'Mcoffeemachine1 (Espresso Coffee Machine)' },
    { modelId: 19835, relX: 0.6, relY: -0.1, surface: 'tabletop', relRz: 0, name: 'Coffeecup1 (Coffee Mug)' },
    { modelId: 19830, relX: -0.8, relY: -0.1, surface: 'tabletop', relRz: 0, name: 'Blender1 (Kitchen Blender)' },
    // Ceiling recessed lamp above island
    { modelId: 945, relX: 0.0, relY: 0.0, surface: 'ceiling', relRz: 0, name: 'WS_CF_LAMPS (Island Spot Lamp)', txdName: 'csrspalace02', textureName: 'casinolightsyel_128' }
  ],

  // 2. Living Room & Cozy Hearth (Inspired by contoh2.txt)
  living_fireplace_lounge: [
    // Stone Fireplace with Firewood stack
    { modelId: 11724, relX: 0.0, relY: 2.2, surface: 'floor', relRz: 180, name: 'Fireplacesurround1 (Stone Fireplace)', txdName: 'break_s_bins', textureName: 'CJ_WOOD_DARK' },
    { modelId: 19632, relX: 0.0, relY: 2.2, surface: 'floor', surfaceZOffset: 0.1, relRz: 0, name: 'Firewood1 (Stack of Firewood)' },
    // Wall TV above fireplace or beside it
    { modelId: 19786, relX: 0.0, relY: 2.15, surface: 'wall', surfaceZOffset: 0.3, relRz: 180, name: 'Lcdtvbig1 (Wall Flat TV)', txdName: 'chinese_furn', textureName: 'ab_tv_noise' },
    // Lounge Coffee Table & Luxury Couch
    { modelId: 2315, relX: 0.0, relY: 0.4, surface: 'floor', relRz: 0, name: 'CJ_TV_TABLE4 (Coffee Table)', txdName: 'break_s_bins', textureName: 'CJ_WOOD_DARK' },
    { modelId: 1753, relX: 0.0, relY: -0.9, surface: 'floor', relRz: 0, name: 'SWANK_COUCH_1 (Luxury Leather Couch)', txdName: 'mrk_couches2', textureName: 'kb_sofa5_256' },
    // Wall Picture Frame & Light Switch
    { modelId: 2262, relX: 1.8, relY: 2.2, surface: 'wall', relRz: 180, name: 'Frame_SLIM_3 (Wall Art Frame)', txdName: 'break_fence3', textureName: 'CJ_FRAME_Glass' },
    { modelId: 19827, relX: 2.4, relY: 2.2, surface: 'wall', surfaceZOffset: -0.4, relRz: 180, name: 'Lightswitch2 (Wall Light Switch)' }
  ],

  // 3. Executive Workstation (Complete Pro Office Set)
  executive_workstation: [
    // Wooden Executive Desk & Swivel Chair
    { modelId: 2185, relX: 0.0, relY: 0.0, surface: 'floor', relRz: 0, name: 'Office Desk (Large Executive)', txdName: 'ab_trukstpc', textureName: 'mp_CJ_WOOD5' },
    { modelId: 1714, relX: 0.0, relY: -0.7, surface: 'floor', relRz: 0, name: 'Swivel Chair (Ergonomic Staff Seat)' },
    // Tabletop Equipment
    { modelId: 2226, relX: 0.0, relY: 0.05, surface: 'tabletop', relRz: 0, name: 'Desktop PC (Monitor & Tower)' },
    { modelId: 19808, relX: 0.0, relY: -0.2, surface: 'tabletop', relRz: 0, name: 'Keyboard1 (Desktop Keyboard)' },
    { modelId: 19807, relX: 0.5, relY: 0.05, surface: 'tabletop', relRz: -15, name: 'Telephone1 (Office Desk Phone)' },
    { modelId: 19835, relX: -0.5, relY: 0.05, surface: 'tabletop', relRz: 0, name: 'Coffeecup1 (Staff Coffee Mug)' },
    // Under desk / side accessories
    { modelId: 2184, relX: 0.8, relY: -0.2, surface: 'floor', relRz: 0, name: 'Small Wastebasket Bin' },
    { modelId: 19814, relX: 0.0, relY: 0.6, surface: 'floor', surfaceZOffset: 0.25, relRz: 180, name: 'ElectricalOutlet2 (Wall Power Plug)' }
  ],

  // 4. Reception & Front Office Service Counter (Inspired by contoh.txt)
  reception_lobby_suite: [
    // Service Counter units
    { modelId: 2162, relX: 0.0, relY: 0.0, surface: 'floor', relRz: 0, name: 'MED_OFFICE_UNIT_1 (Main Counter Desk)', txdName: 'ab_trukstpc', textureName: 'mp_CJ_WOOD5' },
    { modelId: 2163, relX: 1.6, relY: -0.6, surface: 'floor', relRz: 90, name: 'MED_OFFICE_UNIT_2 (Counter Corner Return)', txdName: 'ab_trukstpc', textureName: 'mp_CJ_WOOD5' },
    // Staff chair behind counter
    { modelId: 1714, relX: 0.0, relY: -0.85, surface: 'floor', relRz: 0, name: 'Receptionist Swivel Chair' },
    // Desktop PC on counter
    { modelId: 2226, relX: 0.2, relY: 0.0, surface: 'tabletop', relRz: 0, name: 'Service Counter PC' },
    { modelId: 19807, relX: -0.4, relY: 0.0, surface: 'tabletop', relRz: -10, name: 'Reception Phone' },
    // Welcome Sign & Clock
    { modelId: 19174, relX: 0.0, relY: 0.55, surface: 'wall', relRz: 0, name: 'SAMPPicture3 (Reception Service Nameplate)' },
    { modelId: 19825, relX: 0.0, relY: -1.6, surface: 'wall', relRz: 180, name: 'SprunkClock1 (Lobby Wall Clock)' },
    // Potted indoor plant
    { modelId: 2001, relX: -1.6, relY: 0.2, surface: 'floor', relRz: 0, name: 'nu_plant_ofc (Potted Ficus Plant)' }
  ],

  // 5. Waiting Lounge & Amenities Hub (Inspired by contoh.txt)
  waiting_lounge: [
    // Couches facing each other or L-shaped
    { modelId: 1753, relX: 0.0, relY: 1.3, surface: 'floor', relRz: 180, name: 'SWANK_COUCH_1 (Visitor Leather Sofa)', txdName: 'mrk_couches2', textureName: 'kb_sofa5_256' },
    { modelId: 1753, relX: 0.0, relY: -1.3, surface: 'floor', relRz: 0, name: 'SWANK_COUCH_1 (Visitor Leather Sofa)', txdName: 'mrk_couches2', textureName: 'kb_sofa5_256' },
    // Coffee table with magazines in between
    { modelId: 2315, relX: 0.0, relY: 0.0, surface: 'floor', relRz: 0, name: 'CJ_TV_TABLE4 (Lounge Table)', txdName: 'break_s_bins', textureName: 'CJ_WOOD_DARK' },
    { modelId: 2816, relX: 0.0, relY: 0.0, surface: 'tabletop', relRz: 20, name: 'gb_bedmags01 (Lounge Magazines)' },
    // Amenities on side
    { modelId: 955, relX: 2.2, relY: 0.7, surface: 'floor', relRz: -90, name: 'CJ_EXT_SPRUNK (Sprunk Soda Machine)' },
    { modelId: 956, relX: 2.2, relY: -0.7, surface: 'floor', relRz: -90, name: 'CJ_EXT_CANDY (Snack Candy Machine)' },
    { modelId: 2001, relX: -2.0, relY: 1.3, surface: 'floor', relRz: 0, name: 'nu_plant_ofc (Decorative Plant)' },
    { modelId: 19825, relX: 0.0, relY: 2.2, surface: 'wall', relRz: 180, name: 'SprunkClock1 (Wall Clock)' }
  ],

  // 6. Conference & Boardroom Suite (Inspired by contoh.txt Floor 2)
  conference_boardroom: [
    // Long conference table
    { modelId: 2185, relX: -1.0, relY: 0.0, surface: 'floor', relRz: 0, name: 'Conference Table Left', txdName: 'ab_trukstpc', textureName: 'mp_CJ_WOOD5' },
    { modelId: 2185, relX: 1.0, relY: 0.0, surface: 'floor', relRz: 0, name: 'Conference Table Right', txdName: 'ab_trukstpc', textureName: 'mp_CJ_WOOD5' },
    // Top side chairs
    { modelId: 1811, relX: -1.5, relY: 0.85, surface: 'floor', relRz: 180, name: 'Executive Chair 1' },
    { modelId: 1811, relX: -0.5, relY: 0.85, surface: 'floor', relRz: 180, name: 'Executive Chair 2' },
    { modelId: 1811, relX: 0.5, relY: 0.85, surface: 'floor', relRz: 180, name: 'Executive Chair 3' },
    { modelId: 1811, relX: 1.5, relY: 0.85, surface: 'floor', relRz: 180, name: 'Executive Chair 4' },
    // Bottom side chairs
    { modelId: 1811, relX: -1.5, relY: -0.85, surface: 'floor', relRz: 0, name: 'Executive Chair 5' },
    { modelId: 1811, relX: -0.5, relY: -0.85, surface: 'floor', relRz: 0, name: 'Executive Chair 6' },
    { modelId: 1811, relX: 0.5, relY: -0.85, surface: 'floor', relRz: 0, name: 'Executive Chair 7' },
    { modelId: 1811, relX: 1.5, relY: -0.85, surface: 'floor', relRz: 0, name: 'Executive Chair 8' },
    // Head of table chairs
    { modelId: 1811, relX: -2.3, relY: 0.0, surface: 'floor', relRz: 90, name: 'Board Chairman Chair' },
    { modelId: 1811, relX: 2.3, relY: 0.0, surface: 'floor', relRz: -90, name: 'Board Vice Chair' },
    // Wall Presentation Monitor
    { modelId: 19786, relX: 0.0, relY: 2.2, surface: 'wall', relRz: 180, name: 'Boardroom Presentation TV', txdName: 'chinese_furn', textureName: 'ab_tv_noise' }
  ],

  // 7. En-Suite Luxury Bathroom Suite (Inspired by contoh2.txt)
  bathroom_suite: [
    // Glass Shower Enclosure
    { modelId: 2522, relX: -1.2, relY: 1.0, surface: 'floor', relRz: 0, name: 'Glass Shower Enclosure', txdName: 'break_fence3', textureName: 'CJ_FRAME_Glass' },
    // Toilet bowl & accessories
    { modelId: 2528, relX: 1.2, relY: 1.0, surface: 'floor', relRz: 180, name: 'CJ_TOILET3 (Toilet Bowl)' },
    { modelId: 19873, relX: 1.6, relY: 0.9, surface: 'floor', surfaceZOffset: 0.6, relRz: 90, name: 'Toiletpaperroll1 (Toilet Paper Holder)' },
    // Vanity Sink & Accessories
    { modelId: 2515, relX: 0.0, relY: -1.0, surface: 'floor', relRz: 0, name: 'CJ_BS_SINK (Wash Basin Sink)' },
    { modelId: 19874, relX: 0.25, relY: -0.95, surface: 'tabletop', relRz: 0, name: 'Soapbar1 (Soap Bar)' },
    { modelId: 11707, relX: -0.6, relY: -1.0, surface: 'wall', surfaceZOffset: -0.4, relRz: 0, name: 'Towelrack1 (Towel Rack)' }
  ],

  // 8. Elevator Shaft Pair with Multi-Floor Spawn Hubs (Inspired by contoh.txt)
  elevator_shaft_pair: [
    // Floor 1 Lift Door & Call Button
    { modelId: 3051, relX: 0.0, relY: 0.0, surface: 'floor', relRz: 0, name: 'lift_dr (Floor 1 Elevator Door)', txdName: 'bigwhitesfe', textureName: 'liftdoors_kb_256' },
    { modelId: 19174, relX: 1.1, relY: 0.05, surface: 'floor', surfaceZOffset: 1.4, relRz: 0, name: 'SAMPPicture3 (Elevator Call Button & Floor 1 Sign)' },
    // Floor 2 Lift Door (stacked directly above at Z + 6.5m)
    { modelId: 3051, relX: 0.0, relY: 0.0, surface: 'floor', surfaceZOffset: 6.5, relRz: 0, name: 'lift_dr (Floor 2 Elevator Door)', txdName: 'bigwhitesfe', textureName: 'liftdoors_kb_256' },
    { modelId: 19174, relX: 1.1, relY: 0.05, surface: 'floor', surfaceZOffset: 7.9, relRz: 0, name: 'SAMPPicture3 (Elevator Call Button & Floor 2 Sign)' }
  ],

  // 9. Modern Vertical Louver Divider (Inspired by contoh2.txt Model 2920)
  modern_louver_divider: [
    { modelId: 2920, relX: -1.2, relY: 0.0, surface: 'floor', relRz: 0, name: 'Modern Slat Slat 1', txdName: 'airportgnd_sfse', textureName: 'black64' },
    { modelId: 2920, relX: -0.6, relY: 0.0, surface: 'floor', relRz: 0, name: 'Modern Slat Slat 2', txdName: 'airportgnd_sfse', textureName: 'black64' },
    { modelId: 2920, relX: 0.0, relY: 0.0, surface: 'floor', relRz: 0, name: 'Modern Slat Slat 3', txdName: 'airportgnd_sfse', textureName: 'black64' },
    { modelId: 2920, relX: 0.6, relY: 0.0, surface: 'floor', relRz: 0, name: 'Modern Slat Slat 4', txdName: 'airportgnd_sfse', textureName: 'black64' },
    { modelId: 2920, relX: 1.2, relY: 0.0, surface: 'floor', relRz: 0, name: 'Modern Slat Slat 5', txdName: 'airportgnd_sfse', textureName: 'black64' }
  ],

  // 10. Master Bedroom Suite
  master_bedroom_suite: [
    // King Bed in center
    { modelId: 1700, relX: 0.0, relY: 0.0, surface: 'floor', relRz: 0, name: 'King Bed Luxury' },
    // Nightstands on left and right
    { modelId: 2197, relX: -1.5, relY: 0.2, surface: 'floor', relRz: 0, name: 'Nightstand Left', txdName: 'break_s_bins', textureName: 'CJ_WOOD_DARK' },
    { modelId: 2197, relX: 1.5, relY: 0.2, surface: 'floor', relRz: 0, name: 'Nightstand Right', txdName: 'break_s_bins', textureName: 'CJ_WOOD_DARK' },
    // Bedside lamps
    { modelId: 1215, relX: -1.5, relY: 0.2, surface: 'tabletop', relRz: 0, name: 'Bedside Lamp Left' },
    { modelId: 1215, relX: 1.5, relY: 0.2, surface: 'tabletop', relRz: 0, name: 'Bedside Lamp Right' },
    // Bedroom Rug & Wardrobe
    { modelId: 2817, relX: 0.0, relY: -0.6, surface: 'floor', surfaceZOffset: 0.01, relRz: 0, name: 'gb_bedrug01 (Luxury Carpet Rug)' },
    { modelId: 2190, relX: -2.4, relY: -1.0, surface: 'floor', relRz: 90, name: 'Large Clothes Wardrobe Closet', txdName: 'break_s_bins', textureName: 'CJ_WOOD_DARK' }
  ],

  // 11. Dining Banquet Suite (Inspired by contoh2.txt Floor 2)
  dining_banquet_suite: [
    { modelId: 2185, relX: 0.0, relY: 0.0, surface: 'floor', relRz: 0, name: 'Dining Table', txdName: 'break_s_bins', textureName: 'CJ_WOOD_DARK' },
    // 6 Dining Chairs
    { modelId: 1739, relX: -0.8, relY: 0.75, surface: 'floor', relRz: 180, name: 'SWANK_DIN_CHAIR_5 Chair 1', txdName: 'break_s_bins', textureName: 'CJ_WOOD_DARK' },
    { modelId: 1739, relX: 0.0, relY: 0.75, surface: 'floor', relRz: 180, name: 'SWANK_DIN_CHAIR_5 Chair 2', txdName: 'break_s_bins', textureName: 'CJ_WOOD_DARK' },
    { modelId: 1739, relX: 0.8, relY: 0.75, surface: 'floor', relRz: 180, name: 'SWANK_DIN_CHAIR_5 Chair 3', txdName: 'break_s_bins', textureName: 'CJ_WOOD_DARK' },
    { modelId: 1739, relX: -0.8, relY: -0.75, surface: 'floor', relRz: 0, name: 'SWANK_DIN_CHAIR_5 Chair 4', txdName: 'break_s_bins', textureName: 'CJ_WOOD_DARK' },
    { modelId: 1739, relX: 0.0, relY: -0.75, surface: 'floor', relRz: 0, name: 'SWANK_DIN_CHAIR_5 Chair 5', txdName: 'break_s_bins', textureName: 'CJ_WOOD_DARK' },
    { modelId: 1739, relX: 0.8, relY: -0.75, surface: 'floor', relRz: 0, name: 'SWANK_DIN_CHAIR_5 Chair 6', txdName: 'break_s_bins', textureName: 'CJ_WOOD_DARK' },
    // Tabletop centerpiece & Wine bottle
    { modelId: 19823, relX: 0.0, relY: 0.0, surface: 'tabletop', relRz: 0, name: 'Alcoholbottle4 (Wine Bottle)' }
  ],

  // 12. Jail Cell Detention Enclosure (For Police/Precinct/Prison)
  jail_cell_suite: [
    { modelId: 19302, relX: 0.0, relY: 1.5, surface: 'floor', relRz: 0, name: 'Jail Cell Sliding Steel Gate' },
    { modelId: 1701, relX: -1.2, relY: -0.8, surface: 'floor', relRz: 0, name: 'Steel Prisoner Bunk Bed' },
    { modelId: 2528, relX: 1.2, relY: -1.2, surface: 'floor', relRz: 0, name: 'Prisoner Cell Toilet' }
  ],

  // 13. Medical Examination & Treatment Pod
  medical_examination: [
    { modelId: 19999, relX: 0.0, relY: 0.0, surface: 'floor', relRz: 0, name: 'Medical Patient Examination Bed' },
    { modelId: 2185, relX: 1.5, relY: 0.5, surface: 'floor', relRz: -90, name: 'Doctor Consultation Desk' },
    { modelId: 1714, relX: 1.9, relY: 0.5, surface: 'floor', relRz: -90, name: 'Doctor Chair' },
    { modelId: 2190, relX: -1.5, relY: 1.2, surface: 'floor', relRz: 180, name: 'Medicine & Tool Cabinet' }
  ],

  // 14. Mechanic Bay & Tuning Hub (For Garages & Workshops)
  tuning_mechanic_bay: [
    { modelId: 19464, relX: 0.0, relY: 0.0, surface: 'floor', relRz: 0, name: 'Hydraulic Ramp Base', txdName: 'bombshop_las', textureName: 'greymetal' },
    { modelId: 2185, relX: 2.2, relY: 1.2, surface: 'floor', relRz: 180, name: 'Heavy Duty Tool Workbench' },
    { modelId: 2184, relX: 2.2, relY: -1.2, surface: 'floor', relRz: 0, name: 'Waste Oil Drain Bin' }
  ]
};

// ─────────────────────────────────────────────────────────────────────────────
// TRANSFORMATION & GENERATOR FUNCTION
// ─────────────────────────────────────────────────────────────────────────────

export function assembleCluster(options: AssembleClusterOptions): GeneratedClusterObject[] {
  const clusterDefs = CLUSTERS[options.clusterType];
  if (!clusterDefs) {
    throw new Error(`Unknown cluster type: ${options.clusterType}`);
  }

  const rad = ((options.rz || 0) * Math.PI) / 180;
  const cos = Math.cos(rad);
  const sin = Math.sin(rad);
  const baseFloor = options.floorLevel ?? 0.0;

  return clusterDefs.map(def => {
    // 2D Rotation matrix around cluster center
    const rotatedX = def.relX * cos - def.relY * sin;
    const rotatedY = def.relX * sin + def.relY * cos;

    const posX = Number((options.centerX + rotatedX).toFixed(4));
    const posY = Number((options.centerY + rotatedY).toFixed(4));

    // Calculate exact Z elevation using grounder
    const baseZ = getGroundedZ(def.modelId, baseFloor, def.surface);
    const finalZ = Number((baseZ + (def.surfaceZOffset || 0)).toFixed(4));

    // Final heading
    const finalRz = Number((((options.rz || 0) + def.relRz) % 360).toFixed(2));

    const obj: GeneratedClusterObject = {
      modelId: def.modelId,
      position: [posX, posY, finalZ],
      rotation: [0, 0, finalRz],
      name: def.name
    };

    if (def.textureName && def.txdName) {
      obj.materials = {
        0: {
          index: 0,
          modelId: def.modelId,
          txdName: def.txdName,
          textureName: def.textureName,
          color: def.color || '#FFFFFF'
        }
      };
    }

    return obj;
  });
}
