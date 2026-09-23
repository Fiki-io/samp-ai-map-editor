import { MapObject } from '@/types/editor';
import { getObjectInfo } from '@/data/sampObjects';

export interface DoorwayConfig {
  wall: 'north' | 'south' | 'east' | 'west';
  segmentIndex?: number; // which segment along that wall (0-indexed, default middle)
  doorModelId?: number; // e.g. 19302 for jail door, or default doorway opening 19355
}

export interface BuildRoomOptions {
  name?: string;
  centerX?: number;
  centerY?: number;
  width?: number; // in meters, e.g. 3.2, 6.4, 9.6, 12.8
  depth?: number; // in meters, e.g. 3.2, 6.4, 9.6, 12.8
  floorLevel?: number; // default 0.00, 3.50 for 2nd floor, -3.50 for basement
  wallTexture?: string; // default 'wall001'
  wallColor?: string; // default '#e2e8f0'
  floorTexture?: string; // default 'des_crckrock'
  floorColor?: string; // default '#ffffff'
  hasCeiling?: boolean; // default true
  ceilingTexture?: string; // default 'wall001'
  ceilingColor?: string; // default '#f8fafc'
  doorways?: DoorwayConfig[];
  isSealedRoom?: boolean; // if true, don't automatically add default entrance doorway
}

const MODULAR_WALL_LENGTH = 3.212;
const MODULAR_WALL_HEIGHT = 3.500;
const MODULAR_WALL_THICKNESS = 0.178;

/**
 * Calculates the exact grounded Z elevation for any object so it rests perfectly on the floor without floating or clipping.
 */
export function getGroundedZ(
  modelId: number,
  floorLevel: number = 0.0,
  surface: 'floor' | 'tabletop' | 'wall' | 'ceiling' = 'floor'
): number {
  if (surface === 'ceiling') {
    // Hanging flush from ceiling
    return Number((floorLevel + MODULAR_WALL_HEIGHT - (modelId === 1215 || modelId >= 18646 ? 0.05 : 0.15)).toFixed(4));
  }

  if (surface === 'wall') {
    // Mounted on wall at standard eye level (1.8m above floor)
    return Number((floorLevel + 1.800).toFixed(4));
  }

  if (surface === 'tabletop') {
    // Resting on standard office / dining table surface (desk height is ~0.78m)
    return Number((floorLevel + 0.780).toFixed(4));
  }

  // Ceiling lights and chandeliers
  if (modelId === 1215 || modelId === 18646 || (modelId >= 18647 && modelId <= 18658)) {
    return Number((floorLevel + MODULAR_WALL_HEIGHT - 0.25).toFixed(4));
  }

  // Modular walls have origin at center (height 3.5m)
  if (modelId === 19353 || modelId === 19355 || modelId === 19357) {
    return Number((floorLevel + 1.750).toFixed(4));
  }

  // Floor/ceiling slabs 19379 (when rotated flat Pitch 90)
  if (modelId === 19379) {
    return Number((floorLevel - 0.089).toFixed(4));
  }

  // STANDARD GTA SA FURNITURE & GROUND PROPS:
  // In GTA SA (RenderWare DFF), virtually all standard furniture, seating, tables,
  // appliances, doors, plants, and floor props have their model origin (Z=0) at the BASE (contact plane with floor).
  // Placing at floorLevel ensures legs/wheels/base rest exactly flush on the floor surface with ZERO FLOATING!
  return Number(floorLevel.toFixed(4));
}

/**
 * Mathematically generates 100% airtight, zero-gap room boundaries (walls, floor slab, ceiling slab, doorways).
 */
export function generateRoomObjects(options: BuildRoomOptions): Array<{
  modelId: number;
  position: [number, number, number];
  rotation: [number, number, number];
  name: string;
  materials?: Record<number, { index: number; modelId: number; txdName: string; textureName: string; color: string }>;
}> {
  const roomName = options.name || 'Room';
  const cx = options.centerX ?? 0.0;
  const cy = options.centerY ?? 0.0;
  const floorLevel = options.floorLevel ?? 0.0;
  const reqWidth = Math.max(3.2, options.width ?? 6.4);
  const reqDepth = Math.max(3.2, options.depth ?? 6.4);

  const wallTex = options.wallTexture || 'wall001';
  const wallCol = options.wallColor || '#e2e8f0';
  const floorTex = options.floorTexture || 'des_crckrock';
  const floorCol = options.floorColor || '#ffffff';
  const ceilTex = options.ceilingTexture || 'wall001';
  const ceilCol = options.ceilingColor || '#f8fafc';
  const hasCeil = options.hasCeiling ?? true;
  
  // Determine number of modular wall segments along each axis
  const numX = Math.max(1, Math.round(reqWidth / MODULAR_WALL_LENGTH));
  const numY = Math.max(1, Math.round(reqDepth / MODULAR_WALL_LENGTH));

  // Ensure every room has at least one doorway unless explicitly sealed
  let doorways = options.doorways;
  if ((!doorways || doorways.length === 0) && !options.isSealedRoom) {
    doorways = [{ wall: 'south', segmentIndex: Math.floor(numX / 2) }];
  } else if (!doorways) {
    doorways = [];
  }

  const actualWidth = numX * MODULAR_WALL_LENGTH;
  const actualDepth = numY * MODULAR_WALL_LENGTH;

  const halfW = actualWidth / 2;
  const halfD = actualDepth / 2;

  const wallZ = Number((floorLevel + MODULAR_WALL_HEIGHT / 2).toFixed(4)); // exactly 1.750 above floor
  const floorZ = Number((floorLevel - 0.089).toFixed(4)); // top surface is exactly floorLevel
  const ceilZ = Number((floorLevel + MODULAR_WALL_HEIGHT).toFixed(4)); // rests flush on 3.5m wall top

  const objects: Array<{
    modelId: number;
    position: [number, number, number];
    rotation: [number, number, number];
    name: string;
    materials?: Record<number, { index: number; modelId: number; txdName: string; textureName: string; color: string }>;
  }> = [];

  const createMat = (modelId: number, txdName: string, textureName: string, color: string) => ({
    0: { index: 0, modelId, txdName, textureName, color }
  });

  // 1. Floor Slab (Model: 19379 rotated flat RY=90)
  // Slab size is 10.5m x 9.6m. Tile if necessary.
  const slabTilesX = Math.ceil(actualWidth / 10.0);
  const slabTilesY = Math.ceil(actualDepth / 9.0);

  for (let sx = 0; sx < slabTilesX; sx++) {
    for (let sy = 0; sy < slabTilesY; sy++) {
      const slabX = Number((cx - halfW + 5.0 + sx * 10.0).toFixed(4));
      const slabY = Number((cy - halfD + 4.5 + sy * 9.0).toFixed(4));

      // Floor
      objects.push({
        modelId: 19379,
        position: [slabTilesX === 1 ? cx : slabX, slabTilesY === 1 ? cy : slabY, floorZ],
        rotation: [0, 90, 0], // Pitch 90 lies flat horizontal
        name: `${roomName} Floor Slab`,
        materials: createMat(19379, 'airportroads_sfse', floorTex, floorCol)
      });

      // Ceiling
      if (hasCeil) {
        objects.push({
          modelId: 19379,
          position: [slabTilesX === 1 ? cx : slabX, slabTilesY === 1 ? cy : slabY, ceilZ],
          rotation: [0, 90, 0],
          name: `${roomName} Ceiling Slab`,
          materials: createMat(19379, 'all_walls', ceilTex, ceilCol)
        });
      }
    }
  }

  // Helper to check if a wall segment is a doorway
  const getDoorwayForSegment = (wallName: 'north' | 'south' | 'east' | 'west', segIdx: number, totalSegs: number) => {
    return doorways.find(d => {
      if (d.wall !== wallName) return false;
      const targetIdx = d.segmentIndex !== undefined ? d.segmentIndex : Math.floor(totalSegs / 2);
      return targetIdx === segIdx;
    });
  };

  // 2. North Wall (along East-West, Y = cy + halfD, rotation: [0, 0, 90])
  for (let i = 0; i < numX; i++) {
    const x = Number((cx - halfW + (i + 0.5) * MODULAR_WALL_LENGTH).toFixed(4));
    const y = Number((cy + halfD).toFixed(4));
    const door = getDoorwayForSegment('north', i, numX);

    const modelId = door ? 19355 : 19353;
    objects.push({
      modelId,
      position: [x, y, wallZ],
      rotation: [0, 0, 90],
      name: `${roomName} Wall North ${i + 1}`,
      materials: createMat(modelId, 'all_walls', wallTex, wallCol)
    });

    // If specific door model (like Jail Door 19302 or interior door 1491) is requested in doorway
    if (door && door.doorModelId && door.doorModelId !== 19355) {
      objects.push({
        modelId: door.doorModelId,
        position: [x, y, Number(floorLevel.toFixed(4))],
        rotation: [0, 0, 90],
        name: `${roomName} Door North`,
        materials: createMat(door.doorModelId, 'all_walls', 'wall001', '#e2e8f0')
      });
    }
  }

  // 3. South Wall (along East-West, Y = cy - halfD, rotation: [0, 0, 90])
  for (let i = 0; i < numX; i++) {
    const x = Number((cx - halfW + (i + 0.5) * MODULAR_WALL_LENGTH).toFixed(4));
    const y = Number((cy - halfD).toFixed(4));
    const door = getDoorwayForSegment('south', i, numX);

    const modelId = door ? 19355 : 19353;
    objects.push({
      modelId,
      position: [x, y, wallZ],
      rotation: [0, 0, 90],
      name: `${roomName} Wall South ${i + 1}`,
      materials: createMat(modelId, 'all_walls', wallTex, wallCol)
    });

    if (door && door.doorModelId && door.doorModelId !== 19355) {
      objects.push({
        modelId: door.doorModelId,
        position: [x, y, Number(floorLevel.toFixed(4))],
        rotation: [0, 0, 90],
        name: `${roomName} Door South`,
        materials: createMat(door.doorModelId, 'all_walls', 'wall001', '#e2e8f0')
      });
    }
  }

  // 4. East Wall (along North-South, X = cx + halfW, rotation: [0, 0, 0])
  for (let j = 0; j < numY; j++) {
    const x = Number((cx + halfW).toFixed(4));
    const y = Number((cy - halfD + (j + 0.5) * MODULAR_WALL_LENGTH).toFixed(4));
    const door = getDoorwayForSegment('east', j, numY);

    const modelId = door ? 19355 : 19353;
    objects.push({
      modelId,
      position: [x, y, wallZ],
      rotation: [0, 0, 0],
      name: `${roomName} Wall East ${j + 1}`,
      materials: createMat(modelId, 'all_walls', wallTex, wallCol)
    });

    if (door && door.doorModelId && door.doorModelId !== 19355) {
      objects.push({
        modelId: door.doorModelId,
        position: [x, y, Number(floorLevel.toFixed(4))],
        rotation: [0, 0, 0],
        name: `${roomName} Door East`,
        materials: createMat(door.doorModelId, 'all_walls', 'wall001', '#e2e8f0')
      });
    }
  }

  // 5. West Wall (along North-South, X = cx - halfW, rotation: [0, 0, 0])
  for (let j = 0; j < numY; j++) {
    const x = Number((cx - halfW).toFixed(4));
    const y = Number((cy - halfD + (j + 0.5) * MODULAR_WALL_LENGTH).toFixed(4));
    const door = getDoorwayForSegment('west', j, numY);

    const modelId = door ? 19355 : 19353;
    objects.push({
      modelId,
      position: [x, y, wallZ],
      rotation: [0, 0, 0],
      name: `${roomName} Wall West ${j + 1}`,
      materials: createMat(modelId, 'all_walls', wallTex, wallCol)
    });

    if (door && door.doorModelId && door.doorModelId !== 19355) {
      objects.push({
        modelId: door.doorModelId,
        position: [x, y, Number(floorLevel.toFixed(4))],
        rotation: [0, 0, 0],
        name: `${roomName} Door West`,
        materials: createMat(door.doorModelId, 'all_walls', 'wall001', '#e2e8f0')
      });
    }
  }

  return objects;
}
