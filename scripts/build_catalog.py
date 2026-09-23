#!/usr/bin/env python3
"""
Curates a clean, 100% interior-focused object catalog for SA-MP Interior Studio.
Combines:
1. All 1,445 extracted 3D models with true bounding box dimensions.
2. Verified GTA SA interior props (furniture, kitchen, bathroom, lighting, doors).
Outputs: src/data/sampObjects.ts
"""

import json
import os

INDEX_FILE = "public/models/models_index.json"
OUTPUT_FILE = "src/data/sampObjects.ts"

with open(INDEX_FILE, "r") as f:
    models_index = json.load(f)

# Category classification heuristics based on model name and ID
def get_category(mid, name):
    mid = int(mid)
    lname = name.lower()

    # Modular Walls
    if (19353 <= mid <= 19465) or "wall" in lname:
        return "walls"

    # Floors & Ceilings
    if mid in [19379, 19380] or "floor" in lname or "ceiling" in lname or "tile" in lname or "rug" in lname:
        return "floors"

    # Doors & Frames
    if "door" in lname or "gate" in lname or "frame" in lname or (1491 <= mid <= 1515) or mid == 11714:
        return "doors"

    # Lighting
    if (18646 <= mid <= 18658) or "light" in lname or "lamp" in lname or "neon" in lname or "chand" in lname:
        return "lighting"

    # Living Room (Couches, Sofas, Coffee Tables, TV Units)
    if "couch" in lname or "sofa" in lname or "armchair" in lname or "cbooth" in lname or "telly" in lname or "tv" in lname or (1702 <= mid <= 1713) or (11682 <= mid <= 11685) or mid == 11717:
        return "living"

    # Bedroom (Beds, Wardrobes, Nightstands)
    if "bed" in lname or "wardrobe" in lname or "closet" in lname or (1700 <= mid <= 1701) or (1793 <= mid <= 1803) or (2300 <= mid <= 2302) or mid in [11720, 11731]:
        return "bedroom"

    # Kitchen & Dining
    if "kitchen" in lname or "cook" in lname or "fridge" in lname or "oven" in lname or "stove" in lname or "cbar" in lname or "cworktop" in lname or (2135 <= mid <= 2150) or mid in [2360, 11686, 11688]:
        return "kitchen"

    # Bathroom
    if "toilet" in lname or "bath" in lname or "shower" in lname or "sink" in lname or "wc" in lname or (2514 <= mid <= 2528) or (2738 <= mid <= 2740) or mid == 11732:
        return "bathroom"

    # Office & Electronics
    if "desk" in lname or "chair" in lname or "stool" in lname or "swivel" in lname or "pc" in lname or "comput" in lname or "office" in lname or "book" in lname or (2185 <= mid <= 2205) or (2226 <= mid <= 2229) or mid in [11687, 11734]:
        return "office"

    return "props"

def format_name(name):
    clean = name.replace("_", " ").strip()
    return clean.title()

catalog = []
seen_ids = set()

# 1. Add all extracted models from models_index.json
for mid_str, info in models_index.items():
    mid = int(mid_str)
    seen_ids.add(mid)
    dims = info.get("dimensions", [1.0, 1.0, 1.0])
    # Sanitize dimensions
    dims = [max(round(d, 2), 0.1) for d in dims]
    cat = get_category(mid, info["name"])
    
    catalog.append({
        "id": mid,
        "name": format_name(info["name"]),
        "txd": "all_walls" if (19353 <= mid <= 19465) else "samp",
        "category": cat,
        "dimensions": dims
    })

# 2. Add high-priority iconic GTA SA interior furniture with realistic dimensions
curated_furniture = [
    # Living Room Couches & Sofas
    (1702, "Modern Living Couch (3-Seater)", "kb_parker", "living", [2.2, 0.85, 0.95]),
    (1703, "Classic Velvet Sofa (3-Seater)", "kb_parker", "living", [2.15, 0.82, 0.9]),
    (1704, "Armchair Single (Park)", "kb_parker", "living", [1.0, 0.85, 0.9]),
    (1705, "Modern Single Lounge Chair", "kb_parker", "living", [0.95, 0.82, 0.88]),
    (1706, "Cozy Leather Couch", "kbcouch1", "living", [2.1, 0.85, 0.92]),
    (1707, "Curved Corner Couch", "kb_carcouch", "living", [2.4, 0.88, 1.2]),
    (1712, "White Fabric Sofa (3-Seater)", "kbcouch1", "living", [2.2, 0.85, 0.9]),
    (1720, "Long Executive Couch", "kbcouch1", "living", [2.6, 0.85, 0.95]),
    (1723, "Glass Coffee Table", "CJ_TABLES", "living", [1.4, 0.45, 0.8]),
    (1717, "Flat Panel Television", "cj_TV", "living", [1.2, 0.8, 0.15]),

    # Bedroom Beds & Wardrobes
    (1700, "King Size Master Bed", "CJ_BEDS", "bedroom", [2.1, 0.8, 2.2]),
    (1701, "Medium Double Bed", "CJ_MED_BEDS", "bedroom", [1.6, 0.75, 2.05]),
    (1793, "Contemporary Wooden Bed", "CJ_BEDS", "bedroom", [1.8, 0.85, 2.1]),
    (1794, "Luxury Canopy Bed", "CJ_BEDS", "bedroom", [2.2, 2.3, 2.2]),
    (1745, "Double Door Wardrobe", "CJ_FURN", "bedroom", [1.4, 2.1, 0.65]),
    (1799, "Bedside Nightstand with Lamp", "CJ_FURN", "bedroom", [0.55, 0.65, 0.5]),

    # Kitchen & Dining
    (2135, "Modular Kitchen Countertop Sink", "CJ_KITCHEN", "kitchen", [1.5, 0.9, 0.7]),
    (2136, "Kitchen Cabinet with Stove", "CJ_KITCHEN", "kitchen", [1.2, 0.9, 0.7]),
    (2137, "Corner Kitchen Cabinet", "CJ_KITCHEN", "kitchen", [0.9, 0.9, 0.9]),
    (2360, "Double Door Stainless Refrigerator", "Shopping_acc", "kitchen", [0.95, 1.85, 0.8]),
    (2130, "Modern Dining Table (6-Person)", "CJ_TABLES", "kitchen", [2.0, 0.78, 1.0]),
    (2125, "Dining Room Padded Chair", "CJ_seating", "kitchen", [0.5, 0.9, 0.55]),

    # Bathroom
    (2514, "Ceramic White Toilet Bowl", "CJ_BATH", "bathroom", [0.55, 0.8, 0.75]),
    (2516, "Marble Bathroom Vanity Sink", "CJ_BATH", "bathroom", [1.1, 0.9, 0.6]),
    (2520, "Acrylic Luxury Bathtub", "CJ_BATH", "bathroom", [1.75, 0.65, 0.85]),
    (2522, "Glass Shower Enclosure", "CJ_BATH", "bathroom", [1.0, 2.1, 1.0]),
    (2738, "Wall Vanity Mirror", "CJ_BATH", "bathroom", [0.9, 1.1, 0.05]),

    # Office & Workspace
    (2185, "Executive Wooden Office Desk", "CJ_OFFICE", "office", [1.8, 0.78, 0.9]),
    (1714, "Ergonomic Office Swivel Chair", "CJ_OFFICE", "office", [0.65, 1.1, 0.65]),
    (2190, "Large Wooden Bookshelf", "CJ_OFFICE", "office", [1.2, 2.0, 0.45]),
    (2226, "Desktop PC Tower & Monitor", "cj_electrical", "office", [0.8, 0.55, 0.6]),

    # Doors & Windows
    (1491, "Modern White Interior Door", "CJ_DOORS", "doors", [0.95, 2.2, 0.08]),
    (1495, "Dark Wood Paneled Door", "CJ_DOORS", "doors", [0.95, 2.2, 0.08]),
    (1499, "Glass French Double Door", "CJ_DOORS", "doors", [1.8, 2.2, 0.08]),

    # Lighting
    (18646, "Modern Ceiling Lamp (Ambient)", "police_light", "lighting", [0.6, 0.2, 0.6]),
    (18653, "Neon Tube Light (Red)", "police_light", "lighting", [0.15, 1.5, 0.15]),
    (18654, "Neon Tube Light (Green)", "police_light", "lighting", [0.15, 1.5, 0.15]),
    (18655, "Neon Tube Light (Blue)", "police_light", "lighting", [0.15, 1.5, 0.15]),
    (18656, "Ceiling Spot Light Beam (White)", "police_light", "lighting", [0.3, 0.3, 0.3]),
    (1215, "Vintage Hanging Chandelier", "CJ_LIGHTING", "lighting", [0.8, 1.1, 0.8])
]

for mid, name, txd, cat, dims in curated_furniture:
    if mid not in seen_ids:
        catalog.append({
            "id": mid,
            "name": name,
            "txd": txd,
            "category": cat,
            "dimensions": dims
        })
        seen_ids.add(mid)
    else:
        # Update existing entry with better curated name and dims if needed
        for c in catalog:
            if c["id"] == mid:
                c["name"] = name
                c["category"] = cat
                c["dimensions"] = dims
                break

# Sort catalog by ID
catalog.sort(key=lambda x: x["id"])

# Category labels
categories_order = {
    "all": "Semua Objek",
    "walls": "Dinding Modular (Walls)",
    "floors": "Lantai & Plafon (Floors)",
    "doors": "Pintu & Jendela (Doors)",
    "living": "Ruang Tamu (Living)",
    "bedroom": "Kamar Tidur (Bedroom)",
    "kitchen": "Dapur & Makan (Kitchen)",
    "bathroom": "Kamar Mandi (Bathroom)",
    "office": "Kantor & Elektronik (Office)",
    "lighting": "Lampu & Pencahayaan",
    "props": "Dekorasi & Props"
}

# Write TypeScript file
ts_content = """export interface SampObjectInfo {
  id: number;
  name: string;
  txd: string;
  category: 'walls' | 'floors' | 'doors' | 'living' | 'bedroom' | 'kitchen' | 'bathroom' | 'office' | 'lighting' | 'props';
  dimensions: [number, number, number]; // [width, height, depth] in meters
}

export const CATEGORY_LABELS: Record<string, string> = {
  all: 'Semua Objek',
  walls: 'Dinding Modular (Walls)',
  floors: 'Lantai & Plafon (Floors)',
  doors: 'Pintu & Jendela (Doors)',
  living: 'Ruang Tamu (Living)',
  bedroom: 'Kamar Tidur (Bedroom)',
  kitchen: 'Dapur & Makan (Kitchen)',
  bathroom: 'Kamar Mandi (Bathroom)',
  office: 'Kantor & Elektronik (Office)',
  lighting: 'Lampu & Pencahayaan',
  props: 'Dekorasi & Props'
};

export const SAMP_OBJECTS: SampObjectInfo[] = """

ts_content += json.dumps(catalog, indent=2) + ";\n\n"

ts_content += """export function getObjectInfo(id: number): SampObjectInfo | undefined {
  return SAMP_OBJECTS.find(o => o.id === id);
}
"""

with open(OUTPUT_FILE, "w") as f:
    f.write(ts_content)

print(f"Generated {OUTPUT_FILE} with {len(catalog)} curated interior objects!")
