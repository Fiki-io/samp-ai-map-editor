export interface MaterialOverride {
  index: number;
  modelId: number;
  txdName: string;
  textureName: string;
  color: string; // Hex color string, e.g., '#FFFFFF' or '0xFFFFFFFF'
}

export interface MaterialTextOverride {
  index: number;
  text: string;
  size: number; // e.g. 10, 20, 30, 40 (SAMP OBJECT_MATERIAL_SIZE)
  font: string;
  fontSize: number;
  bold: boolean;
  fontColor: string; // Hex color
  backColor: string; // Hex color
  align: number; // 0: left, 1: center, 2: right
}

export type InteriorCategory =
  | 'walls'
  | 'floors'
  | 'doors'
  | 'living'
  | 'bedroom'
  | 'kitchen'
  | 'bathroom'
  | 'office'
  | 'lighting'
  | 'props';

export interface MapObject {
  id: string; // internal UUID
  modelId: number;
  name: string;
  category?: InteriorCategory | string;
  // SA-MP Coordinate System:
  // position[0] = X (East [+] / West [-])
  // position[1] = Y (North [+] / South [-], Room Depth)
  // position[2] = Z (Elevation / Floor Height Up [+])
  position: [number, number, number];
  // SA-MP Rotation:
  // rotation[0] = RX (Roll)
  // rotation[1] = RY (Pitch)
  // rotation[2] = RZ (Yaw / Compass Facing Heading in degrees [0-360])
  rotation: [number, number, number];
  dimensions: [number, number, number]; // [Width, Height, Depth] in meters
  materials: Record<number, MaterialOverride>;
  materialTexts: Record<number, MaterialTextOverride>;
  visible: boolean;
  locked: boolean;
}

export type TransformMode = 'translate' | 'rotate';
export type CameraMode = 'orbit' | 'fly' | 'top';

export interface SnapSettings {
  enabled: boolean;
  positionSnap: number; // 0.1, 0.25, 0.5, 1.0, 2.0
  rotationSnap: number; // 5, 15, 45, 90
}

export interface StreamerConfig {
  worldId: number;
  interiorId: number;
  playerId: number;
  streamDistance: number;
  drawDistance: number;
  variableName: string;
  offsetX?: number;
  offsetY?: number;
  offsetZ?: number;
}

export interface MapProject {
  id: string;
  name: string;
  description?: string;
  createdAt: number;
  updatedAt: number;
  objects: MapObject[];
}

