export interface SampObjectInfo {
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

export const SAMP_OBJECTS: SampObjectInfo[] = [
  {
    "id": 300,
    "name": "Lapdna",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      1.84,
      1.03,
      0.35
    ]
  },
  {
    "id": 301,
    "name": "Sfpdna",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      1.83,
      1.03,
      0.35
    ]
  },
  {
    "id": 302,
    "name": "Lvpdna",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      1.84,
      1.03,
      0.35
    ]
  },
  {
    "id": 303,
    "name": "Lapdpc",
    "txd": "samp",
    "category": "office",
    "dimensions": [
      1.84,
      1.03,
      0.35
    ]
  },
  {
    "id": 304,
    "name": "Lapdpd",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      1.84,
      1.03,
      0.35
    ]
  },
  {
    "id": 305,
    "name": "Lvpdpc",
    "txd": "samp",
    "category": "office",
    "dimensions": [
      1.84,
      1.03,
      0.35
    ]
  },
  {
    "id": 306,
    "name": "Wfyclpd",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      1.81,
      0.69,
      0.31
    ]
  },
  {
    "id": 307,
    "name": "Vbfycpd",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      1.8,
      0.69,
      0.3
    ]
  },
  {
    "id": 308,
    "name": "Wfyclem",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      1.81,
      0.69,
      0.31
    ]
  },
  {
    "id": 309,
    "name": "Wfycllv",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      1.81,
      0.69,
      0.31
    ]
  },
  {
    "id": 310,
    "name": "Csherna",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      1.83,
      1.03,
      0.35
    ]
  },
  {
    "id": 311,
    "name": "Dsherna",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      1.83,
      1.03,
      0.35
    ]
  },
  {
    "id": 1215,
    "name": "Vintage Hanging Chandelier",
    "txd": "CJ_LIGHTING",
    "category": "lighting",
    "dimensions": [
      0.8,
      1.1,
      0.8
    ]
  },
  {
    "id": 1491,
    "name": "Modern White Interior Door",
    "txd": "CJ_DOORS",
    "category": "doors",
    "dimensions": [
      0.95,
      2.2,
      0.08
    ]
  },
  {
    "id": 1495,
    "name": "Dark Wood Paneled Door",
    "txd": "CJ_DOORS",
    "category": "doors",
    "dimensions": [
      0.95,
      2.2,
      0.08
    ]
  },
  {
    "id": 1499,
    "name": "Glass French Double Door",
    "txd": "CJ_DOORS",
    "category": "doors",
    "dimensions": [
      1.8,
      2.2,
      0.08
    ]
  },
  {
    "id": 1700,
    "name": "King Size Master Bed",
    "txd": "CJ_BEDS",
    "category": "bedroom",
    "dimensions": [
      2.1,
      0.8,
      2.2
    ]
  },
  {
    "id": 1701,
    "name": "Medium Double Bed",
    "txd": "CJ_MED_BEDS",
    "category": "bedroom",
    "dimensions": [
      1.6,
      0.75,
      2.05
    ]
  },
  {
    "id": 1702,
    "name": "Modern Living Couch (3-Seater)",
    "txd": "kb_parker",
    "category": "living",
    "dimensions": [
      2.2,
      0.85,
      0.95
    ]
  },
  {
    "id": 1703,
    "name": "Classic Velvet Sofa (3-Seater)",
    "txd": "kb_parker",
    "category": "living",
    "dimensions": [
      2.15,
      0.82,
      0.9
    ]
  },
  {
    "id": 1704,
    "name": "Armchair Single (Park)",
    "txd": "kb_parker",
    "category": "living",
    "dimensions": [
      1.0,
      0.85,
      0.9
    ]
  },
  {
    "id": 1705,
    "name": "Modern Single Lounge Chair",
    "txd": "kb_parker",
    "category": "living",
    "dimensions": [
      0.95,
      0.82,
      0.88
    ]
  },
  {
    "id": 1706,
    "name": "Cozy Leather Couch",
    "txd": "kbcouch1",
    "category": "living",
    "dimensions": [
      2.1,
      0.85,
      0.92
    ]
  },
  {
    "id": 1707,
    "name": "Curved Corner Couch",
    "txd": "kb_carcouch",
    "category": "living",
    "dimensions": [
      2.4,
      0.88,
      1.2
    ]
  },
  {
    "id": 1712,
    "name": "White Fabric Sofa (3-Seater)",
    "txd": "kbcouch1",
    "category": "living",
    "dimensions": [
      2.2,
      0.85,
      0.9
    ]
  },
  {
    "id": 1714,
    "name": "Ergonomic Office Swivel Chair",
    "txd": "CJ_OFFICE",
    "category": "office",
    "dimensions": [
      0.65,
      1.1,
      0.65
    ]
  },
  {
    "id": 1717,
    "name": "Flat Panel Television",
    "txd": "cj_TV",
    "category": "living",
    "dimensions": [
      1.2,
      0.8,
      0.15
    ]
  },
  {
    "id": 1720,
    "name": "Long Executive Couch",
    "txd": "kbcouch1",
    "category": "living",
    "dimensions": [
      2.6,
      0.85,
      0.95
    ]
  },
  {
    "id": 1723,
    "name": "Glass Coffee Table",
    "txd": "CJ_TABLES",
    "category": "living",
    "dimensions": [
      1.4,
      0.45,
      0.8
    ]
  },
  {
    "id": 1745,
    "name": "Double Door Wardrobe",
    "txd": "CJ_FURN",
    "category": "bedroom",
    "dimensions": [
      1.4,
      2.1,
      0.65
    ]
  },
  {
    "id": 1793,
    "name": "Contemporary Wooden Bed",
    "txd": "CJ_BEDS",
    "category": "bedroom",
    "dimensions": [
      1.8,
      0.85,
      2.1
    ]
  },
  {
    "id": 1794,
    "name": "Luxury Canopy Bed",
    "txd": "CJ_BEDS",
    "category": "bedroom",
    "dimensions": [
      2.2,
      2.3,
      2.2
    ]
  },
  {
    "id": 1799,
    "name": "Bedside Nightstand with Lamp",
    "txd": "CJ_FURN",
    "category": "bedroom",
    "dimensions": [
      0.55,
      0.65,
      0.5
    ]
  },
  {
    "id": 2125,
    "name": "Dining Room Padded Chair",
    "txd": "CJ_seating",
    "category": "kitchen",
    "dimensions": [
      0.5,
      0.9,
      0.55
    ]
  },
  {
    "id": 2130,
    "name": "Modern Dining Table (6-Person)",
    "txd": "CJ_TABLES",
    "category": "kitchen",
    "dimensions": [
      2.0,
      0.78,
      1.0
    ]
  },
  {
    "id": 2135,
    "name": "Modular Kitchen Countertop Sink",
    "txd": "CJ_KITCHEN",
    "category": "kitchen",
    "dimensions": [
      1.5,
      0.9,
      0.7
    ]
  },
  {
    "id": 2136,
    "name": "Kitchen Cabinet with Stove",
    "txd": "CJ_KITCHEN",
    "category": "kitchen",
    "dimensions": [
      1.2,
      0.9,
      0.7
    ]
  },
  {
    "id": 2137,
    "name": "Corner Kitchen Cabinet",
    "txd": "CJ_KITCHEN",
    "category": "kitchen",
    "dimensions": [
      0.9,
      0.9,
      0.9
    ]
  },
  {
    "id": 2185,
    "name": "Executive Wooden Office Desk",
    "txd": "CJ_OFFICE",
    "category": "office",
    "dimensions": [
      1.8,
      0.78,
      0.9
    ]
  },
  {
    "id": 2190,
    "name": "Large Wooden Bookshelf",
    "txd": "CJ_OFFICE",
    "category": "office",
    "dimensions": [
      1.2,
      2.0,
      0.45
    ]
  },
  {
    "id": 2226,
    "name": "Desktop PC Tower & Monitor",
    "txd": "cj_electrical",
    "category": "office",
    "dimensions": [
      0.8,
      0.55,
      0.6
    ]
  },
  {
    "id": 2360,
    "name": "Double Door Stainless Refrigerator",
    "txd": "Shopping_acc",
    "category": "kitchen",
    "dimensions": [
      0.95,
      1.85,
      0.8
    ]
  },
  {
    "id": 2514,
    "name": "Ceramic White Toilet Bowl",
    "txd": "CJ_BATH",
    "category": "bathroom",
    "dimensions": [
      0.55,
      0.8,
      0.75
    ]
  },
  {
    "id": 2516,
    "name": "Marble Bathroom Vanity Sink",
    "txd": "CJ_BATH",
    "category": "bathroom",
    "dimensions": [
      1.1,
      0.9,
      0.6
    ]
  },
  {
    "id": 2520,
    "name": "Acrylic Luxury Bathtub",
    "txd": "CJ_BATH",
    "category": "bathroom",
    "dimensions": [
      1.75,
      0.65,
      0.85
    ]
  },
  {
    "id": 2522,
    "name": "Glass Shower Enclosure",
    "txd": "CJ_BATH",
    "category": "bathroom",
    "dimensions": [
      1.0,
      2.1,
      1.0
    ]
  },
  {
    "id": 2738,
    "name": "Wall Vanity Mirror",
    "txd": "CJ_BATH",
    "category": "bathroom",
    "dimensions": [
      0.9,
      1.1,
      0.05
    ]
  },
  {
    "id": 11682,
    "name": "Cutscenecouch1",
    "txd": "samp",
    "category": "living",
    "dimensions": [
      0.83,
      0.94,
      1.08
    ]
  },
  {
    "id": 11683,
    "name": "Cutscenecouch2",
    "txd": "samp",
    "category": "living",
    "dimensions": [
      0.83,
      0.94,
      1.08
    ]
  },
  {
    "id": 11684,
    "name": "Cutscenecouch3",
    "txd": "samp",
    "category": "living",
    "dimensions": [
      0.84,
      0.94,
      1.08
    ]
  },
  {
    "id": 11685,
    "name": "Cutscenecouch4",
    "txd": "samp",
    "category": "living",
    "dimensions": [
      1.32,
      0.94,
      0.98
    ]
  },
  {
    "id": 11686,
    "name": "Cbarsection1",
    "txd": "samp",
    "category": "kitchen",
    "dimensions": [
      4.88,
      1.48,
      0.88
    ]
  },
  {
    "id": 11687,
    "name": "Cbarstool1",
    "txd": "samp",
    "category": "kitchen",
    "dimensions": [
      0.45,
      0.76,
      0.46
    ]
  },
  {
    "id": 11688,
    "name": "Cworktop1",
    "txd": "samp",
    "category": "kitchen",
    "dimensions": [
      1.0,
      1.0,
      0.54
    ]
  },
  {
    "id": 11689,
    "name": "Cboothseat1",
    "txd": "samp",
    "category": "living",
    "dimensions": [
      4.08,
      1.0,
      2.0
    ]
  },
  {
    "id": 11690,
    "name": "Ctable1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      1.6,
      0.78,
      1.6
    ]
  },
  {
    "id": 11691,
    "name": "Ctable2",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      3.02,
      0.78,
      1.6
    ]
  },
  {
    "id": 11692,
    "name": "A51Landbit1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      243.97,
      8.76,
      234.34
    ]
  },
  {
    "id": 11693,
    "name": "Hills250X250Grass1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      250.0,
      28.88,
      250.0
    ]
  },
  {
    "id": 11694,
    "name": "Hill250X250Rocky1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      250.0,
      62.15,
      250.0
    ]
  },
  {
    "id": 11695,
    "name": "Hill250X250Rocky2",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      250.0,
      65.07,
      250.0
    ]
  },
  {
    "id": 11696,
    "name": "Hill250X250Rocky3",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      250.0,
      140.22,
      250.0
    ]
  },
  {
    "id": 11697,
    "name": "Ropebridgepart1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      6.07,
      2.04,
      6.7
    ]
  },
  {
    "id": 11698,
    "name": "Ropebridgepart2",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      3.29,
      1.05,
      3.0
    ]
  },
  {
    "id": 11699,
    "name": "Samproadsign46",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.7,
      3.09,
      0.1
    ]
  },
  {
    "id": 11700,
    "name": "Samproadsign47",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.67,
      2.99,
      0.1
    ]
  },
  {
    "id": 11701,
    "name": "Ambulancelights1",
    "txd": "samp",
    "category": "lighting",
    "dimensions": [
      1.34,
      0.2,
      0.33
    ]
  },
  {
    "id": 11702,
    "name": "Ambulancelights2",
    "txd": "samp",
    "category": "lighting",
    "dimensions": [
      1.34,
      0.2,
      0.33
    ]
  },
  {
    "id": 11703,
    "name": "Magnocrane 03 2",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      11.14,
      7.49,
      43.19
    ]
  },
  {
    "id": 11704,
    "name": "Bdupsmask1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.65,
      0.68,
      0.18
    ]
  },
  {
    "id": 11705,
    "name": "Blacktelephone1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.55,
      0.27,
      0.48
    ]
  },
  {
    "id": 11706,
    "name": "Smallwastebin1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.56,
      0.98,
      0.5
    ]
  },
  {
    "id": 11707,
    "name": "Towelrack1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      1.02,
      0.57,
      0.15
    ]
  },
  {
    "id": 11708,
    "name": "Bricksingle1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.56,
      0.18,
      0.25
    ]
  },
  {
    "id": 11709,
    "name": "Abattoirsink1",
    "txd": "samp",
    "category": "bathroom",
    "dimensions": [
      1.38,
      1.35,
      0.91
    ]
  },
  {
    "id": 11710,
    "name": "Fireexitsign1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.54,
      0.26,
      0.1
    ]
  },
  {
    "id": 11711,
    "name": "Exitsign1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.54,
      0.26,
      0.1
    ]
  },
  {
    "id": 11712,
    "name": "Cross1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.24,
      0.12
    ]
  },
  {
    "id": 11713,
    "name": "Fireextpanel1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      1.07,
      0.66
    ]
  },
  {
    "id": 11714,
    "name": "Maintenancedoors1",
    "txd": "samp",
    "category": "doors",
    "dimensions": [
      0.1,
      2.51,
      3.0
    ]
  },
  {
    "id": 11715,
    "name": "Metalfork1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.33
    ]
  },
  {
    "id": 11716,
    "name": "Metalknife1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.33
    ]
  },
  {
    "id": 11717,
    "name": "Wooziescouch1",
    "txd": "samp",
    "category": "living",
    "dimensions": [
      2.05,
      0.97,
      1.03
    ]
  },
  {
    "id": 11718,
    "name": "Sweetssaucepan1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.31,
      0.19,
      0.6
    ]
  },
  {
    "id": 11719,
    "name": "Sweetssaucepan2",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.22,
      0.19,
      0.42
    ]
  },
  {
    "id": 11720,
    "name": "Sweetsbed1",
    "txd": "samp",
    "category": "bedroom",
    "dimensions": [
      2.11,
      1.17,
      2.79
    ]
  },
  {
    "id": 11721,
    "name": "Radiator1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      1.22,
      1.09,
      0.26
    ]
  },
  {
    "id": 11722,
    "name": "Saucebottle1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.14,
      0.28,
      0.14
    ]
  },
  {
    "id": 11723,
    "name": "Saucebottle2",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.14,
      0.28,
      0.14
    ]
  },
  {
    "id": 11724,
    "name": "Fireplacesurround1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      2.22,
      1.04,
      0.6
    ]
  },
  {
    "id": 11725,
    "name": "Fireplace1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.89,
      0.78,
      0.35
    ]
  },
  {
    "id": 11726,
    "name": "Hanginglight1",
    "txd": "samp",
    "category": "lighting",
    "dimensions": [
      0.86,
      2.14,
      0.85
    ]
  },
  {
    "id": 11727,
    "name": "Paperchaselight1",
    "txd": "samp",
    "category": "lighting",
    "dimensions": [
      0.57,
      0.55,
      0.1
    ]
  },
  {
    "id": 11728,
    "name": "Paperchasephone1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.35,
      0.53,
      0.17
    ]
  },
  {
    "id": 11729,
    "name": "Gymlockerclosed1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.67,
      2.05,
      0.51
    ]
  },
  {
    "id": 11730,
    "name": "Gymlockeropen1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.67,
      2.05,
      0.76
    ]
  },
  {
    "id": 11731,
    "name": "Wheartbed1",
    "txd": "samp",
    "category": "bedroom",
    "dimensions": [
      4.47,
      2.66,
      3.23
    ]
  },
  {
    "id": 11732,
    "name": "Wheartbath1",
    "txd": "samp",
    "category": "bathroom",
    "dimensions": [
      2.7,
      0.85,
      3.21
    ]
  },
  {
    "id": 11733,
    "name": "Wrockinghorse1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.5,
      1.77,
      2.09
    ]
  },
  {
    "id": 11734,
    "name": "Wrockingchair1",
    "txd": "samp",
    "category": "office",
    "dimensions": [
      0.72,
      1.3,
      1.0
    ]
  },
  {
    "id": 11735,
    "name": "Wboot1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.13,
      0.47,
      0.34
    ]
  },
  {
    "id": 11736,
    "name": "Medicalsatchel1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.4,
      0.1,
      0.25
    ]
  },
  {
    "id": 11737,
    "name": "Rockstarmat1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      1.02,
      0.1,
      0.8
    ]
  },
  {
    "id": 11738,
    "name": "Mediccase1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.31,
      0.24,
      0.16
    ]
  },
  {
    "id": 11739,
    "name": "Mcake1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.24,
      0.1,
      0.24
    ]
  },
  {
    "id": 11740,
    "name": "Mcake2",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.24,
      0.1,
      0.24
    ]
  },
  {
    "id": 11741,
    "name": "Mcake3",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.24,
      0.1,
      0.24
    ]
  },
  {
    "id": 11742,
    "name": "Mcakeslice1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.12
    ]
  },
  {
    "id": 11743,
    "name": "Mcoffeemachine1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.35,
      0.51,
      0.35
    ]
  },
  {
    "id": 11744,
    "name": "Mplate1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.3,
      0.1,
      0.3
    ]
  },
  {
    "id": 11745,
    "name": "Holdalledited1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.45,
      0.33,
      0.62
    ]
  },
  {
    "id": 11746,
    "name": "Doorkey1",
    "txd": "samp",
    "category": "doors",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 11747,
    "name": "Bandage1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 11748,
    "name": "Bandagepack1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.17,
      0.1,
      0.1
    ]
  },
  {
    "id": 11749,
    "name": "Cshandcuffs1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.18
    ]
  },
  {
    "id": 11750,
    "name": "Cshandcuffs2",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 11751,
    "name": "Areaboundary50M",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      50.0,
      64.0,
      0.1
    ]
  },
  {
    "id": 11752,
    "name": "Areaboundary10M",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      10.0,
      64.0,
      0.1
    ]
  },
  {
    "id": 11753,
    "name": "Areaboundary1M",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      1.0,
      64.0,
      0.1
    ]
  },
  {
    "id": 18631,
    "name": "Nomodelfile",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.25,
      0.34,
      0.1
    ]
  },
  {
    "id": 18632,
    "name": "Fishingrod",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      1.41,
      0.1
    ]
  },
  {
    "id": 18633,
    "name": "Gtasawrench1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.23,
      0.63
    ]
  },
  {
    "id": 18634,
    "name": "Gtasacrowbar1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.19,
      0.72
    ]
  },
  {
    "id": 18635,
    "name": "Gtasahammer1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.14,
      0.44,
      0.1
    ]
  },
  {
    "id": 18636,
    "name": "Policecap1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.26,
      0.12,
      0.16
    ]
  },
  {
    "id": 18637,
    "name": "Policeshield1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.5,
      0.16,
      1.0
    ]
  },
  {
    "id": 18638,
    "name": "Hardhat1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.16,
      0.18,
      0.27
    ]
  },
  {
    "id": 18639,
    "name": "Blackhat1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.16,
      0.36,
      0.39
    ]
  },
  {
    "id": 18640,
    "name": "Hair1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.23,
      0.31,
      0.29
    ]
  },
  {
    "id": 18641,
    "name": "Flashlight1",
    "txd": "samp",
    "category": "lighting",
    "dimensions": [
      0.1,
      0.25,
      0.1
    ]
  },
  {
    "id": 18642,
    "name": "Taser1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.23,
      0.1
    ]
  },
  {
    "id": 18643,
    "name": "Laserpointer1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      20.15,
      0.1,
      0.1
    ]
  },
  {
    "id": 18644,
    "name": "Screwdriver1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.36,
      0.1
    ]
  },
  {
    "id": 18645,
    "name": "Motorcyclehelmet1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.26,
      0.28,
      0.24
    ]
  },
  {
    "id": 18646,
    "name": "Modern Ceiling Lamp (Ambient)",
    "txd": "samp",
    "category": "lighting",
    "dimensions": [
      0.6,
      0.2,
      0.6
    ]
  },
  {
    "id": 18647,
    "name": "Redneontube1",
    "txd": "samp",
    "category": "lighting",
    "dimensions": [
      0.1,
      0.1,
      2.0
    ]
  },
  {
    "id": 18648,
    "name": "Blueneontube1",
    "txd": "samp",
    "category": "lighting",
    "dimensions": [
      0.1,
      0.1,
      2.0
    ]
  },
  {
    "id": 18649,
    "name": "Greenneontube1",
    "txd": "samp",
    "category": "lighting",
    "dimensions": [
      0.1,
      0.1,
      2.0
    ]
  },
  {
    "id": 18650,
    "name": "Yellowneontube1",
    "txd": "samp",
    "category": "lighting",
    "dimensions": [
      0.1,
      0.1,
      2.0
    ]
  },
  {
    "id": 18651,
    "name": "Pinkneontube1",
    "txd": "samp",
    "category": "lighting",
    "dimensions": [
      0.1,
      0.1,
      2.0
    ]
  },
  {
    "id": 18652,
    "name": "Whiteneontube1",
    "txd": "samp",
    "category": "lighting",
    "dimensions": [
      0.1,
      0.1,
      2.0
    ]
  },
  {
    "id": 18653,
    "name": "Neon Tube Light (Red)",
    "txd": "samp",
    "category": "lighting",
    "dimensions": [
      0.15,
      1.5,
      0.15
    ]
  },
  {
    "id": 18654,
    "name": "Neon Tube Light (Green)",
    "txd": "samp",
    "category": "lighting",
    "dimensions": [
      0.15,
      1.5,
      0.15
    ]
  },
  {
    "id": 18655,
    "name": "Neon Tube Light (Blue)",
    "txd": "samp",
    "category": "lighting",
    "dimensions": [
      0.15,
      1.5,
      0.15
    ]
  },
  {
    "id": 18656,
    "name": "Ceiling Spot Light Beam (White)",
    "txd": "samp",
    "category": "lighting",
    "dimensions": [
      0.3,
      0.3,
      0.3
    ]
  },
  {
    "id": 18657,
    "name": "Lightbeamred",
    "txd": "samp",
    "category": "lighting",
    "dimensions": [
      13.54,
      12.88,
      59.76
    ]
  },
  {
    "id": 18658,
    "name": "Lightbeamblue",
    "txd": "samp",
    "category": "lighting",
    "dimensions": [
      13.54,
      12.88,
      59.76
    ]
  },
  {
    "id": 18659,
    "name": "Spraytag1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      2.0,
      2.0
    ]
  },
  {
    "id": 18660,
    "name": "Spraytag2",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      2.0,
      2.0
    ]
  },
  {
    "id": 18661,
    "name": "Spraytag3",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      2.0,
      2.0
    ]
  },
  {
    "id": 18662,
    "name": "Spraytag4",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      2.0,
      2.0
    ]
  },
  {
    "id": 18663,
    "name": "Spraytag5",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      2.0,
      2.0
    ]
  },
  {
    "id": 18664,
    "name": "Spraytag6",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      2.0,
      2.0
    ]
  },
  {
    "id": 18665,
    "name": "Spraytag7",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      2.0,
      2.0
    ]
  },
  {
    "id": 18666,
    "name": "Spraytag8",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      2.0,
      2.0
    ]
  },
  {
    "id": 18667,
    "name": "Spraytag9",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      2.0,
      2.0
    ]
  },
  {
    "id": 18668,
    "name": "Blood Heli",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 18669,
    "name": "Boat Prop",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 18670,
    "name": "Camflash",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 18671,
    "name": "Carwashspray",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 18672,
    "name": "Cementp",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 18673,
    "name": "Cigarette Smoke",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 18674,
    "name": "Cloudfast",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 18675,
    "name": "Coke Puff",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 18676,
    "name": "Coke Trail",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 18677,
    "name": "Exhale",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 18678,
    "name": "Explosion Barrel",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 18679,
    "name": "Explosion Crate",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 18680,
    "name": "Explosion Door",
    "txd": "samp",
    "category": "doors",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 18681,
    "name": "Explosion Fuel Car",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 18682,
    "name": "Explosion Large",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 18683,
    "name": "Explosion Medium",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 18684,
    "name": "Explosion Molotov",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 18685,
    "name": "Explosion Small",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 18686,
    "name": "Explosion Tiny",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 18687,
    "name": "Extinguisher",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 18688,
    "name": "Fire",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 18689,
    "name": "Fire Bike",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 18690,
    "name": "Fire Car",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 18691,
    "name": "Fire Large",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 18692,
    "name": "Fire Med",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 18693,
    "name": "Flame99",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 18694,
    "name": "Flamethrowerp",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 18695,
    "name": "Gunflash",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 18696,
    "name": "Gunsmoke",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 18697,
    "name": "Heli Dust",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 18698,
    "name": "Insects",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 18699,
    "name": "Jetpackp",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 18700,
    "name": "Jetthrust",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 18701,
    "name": "Molotov Flame",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 18702,
    "name": "Nitrop",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 18703,
    "name": "Overheat Car",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 18704,
    "name": "Overheat Car Elec",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 18705,
    "name": "Petrolcan",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 18706,
    "name": "Prt Blood",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 18707,
    "name": "Prt Boatsplash",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 18708,
    "name": "Prt Bubble",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 18709,
    "name": "Prt Cardebris",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 18710,
    "name": "Prt Collisionsmoke",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 18711,
    "name": "Prt Glass",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 18712,
    "name": "Prt Gunshell",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 18713,
    "name": "Prt Sand2",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 18714,
    "name": "Prt Sand",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 18715,
    "name": "Prt Smoke Huge",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 18716,
    "name": "Prt Smoke Expand",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 18717,
    "name": "Prt Spark",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 18718,
    "name": "Prt Spark 2",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 18719,
    "name": "Prt Wake",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 18720,
    "name": "Prt Watersplash",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 18721,
    "name": "Prt Wheeldirt",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 18722,
    "name": "Puke",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 18723,
    "name": "Riot Smoke",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 18724,
    "name": "Shootlight",
    "txd": "samp",
    "category": "lighting",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 18725,
    "name": "Smoke30Lit",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 18726,
    "name": "Smoke30M",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 18727,
    "name": "Smoke50Lit",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 18728,
    "name": "Smoke Flare",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 18729,
    "name": "Spraycanp",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 18730,
    "name": "Tank Fire",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 18731,
    "name": "Teargas99",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 18732,
    "name": "Teargasad",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 18733,
    "name": "Tree Hit Fir",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 18734,
    "name": "Tree Hit Palm",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 18735,
    "name": "Vent2",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 18736,
    "name": "Vent",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 18737,
    "name": "Wallbust",
    "txd": "samp",
    "category": "walls",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 18738,
    "name": "Water Fnt Tme",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 18739,
    "name": "Water Fountain",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 18740,
    "name": "Water Hydrant",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 18741,
    "name": "Water Ripples",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 18742,
    "name": "Water Speed",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 18743,
    "name": "Water Splash",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 18744,
    "name": "Water Splash Big",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 18745,
    "name": "Water Splsh Sml",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 18746,
    "name": "Water Swim",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 18747,
    "name": "Waterfall End",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 18748,
    "name": "Ws Factorysmoke",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 18749,
    "name": "Samplogosmall",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.49,
      0.19,
      0.1
    ]
  },
  {
    "id": 18750,
    "name": "Samplogobig",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      98.54,
      6.32,
      43.13
    ]
  },
  {
    "id": 18751,
    "name": "Islandbase1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      111.48,
      16.01,
      114.04
    ]
  },
  {
    "id": 18752,
    "name": "Volcano",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      215.22,
      87.14,
      215.22
    ]
  },
  {
    "id": 18753,
    "name": "Base125Mx125M1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      125.0,
      1.0,
      125.0
    ]
  },
  {
    "id": 18754,
    "name": "Base250Mx250M1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      248.75,
      1.0,
      248.75
    ]
  },
  {
    "id": 18755,
    "name": "Vcelevator1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      4.14,
      3.88,
      4.38
    ]
  },
  {
    "id": 18756,
    "name": "Elevatordoor1",
    "txd": "samp",
    "category": "doors",
    "dimensions": [
      0.24,
      2.91,
      2.03
    ]
  },
  {
    "id": 18757,
    "name": "Elevatordoor2",
    "txd": "samp",
    "category": "doors",
    "dimensions": [
      0.24,
      2.91,
      2.0
    ]
  },
  {
    "id": 18758,
    "name": "Vcelevatorfront1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.16,
      5.08,
      8.0
    ]
  },
  {
    "id": 18759,
    "name": "Dmcage1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      50.0,
      10.0,
      50.0
    ]
  },
  {
    "id": 18760,
    "name": "Dmcage2",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      55.5,
      10.2,
      55.12
    ]
  },
  {
    "id": 18761,
    "name": "Racefinishline1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      18.5,
      10.0,
      0.87
    ]
  },
  {
    "id": 18762,
    "name": "Concrete1Mx1Mx5M",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      1.0,
      5.0,
      1.0
    ]
  },
  {
    "id": 18763,
    "name": "Concrete3Mx3Mx5M",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      3.0,
      5.0,
      3.0
    ]
  },
  {
    "id": 18764,
    "name": "Concrete5Mx5Mx5M",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      5.0,
      5.0,
      5.0
    ]
  },
  {
    "id": 18765,
    "name": "Concrete10Mx10Mx5M",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      10.0,
      5.0,
      10.0
    ]
  },
  {
    "id": 18766,
    "name": "Concrete10Mx1Mx5M",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      10.0,
      5.0,
      1.0
    ]
  },
  {
    "id": 18767,
    "name": "Concretestair1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      7.0,
      9.8,
      10.6
    ]
  },
  {
    "id": 18768,
    "name": "Skydiveplatform1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      32.65,
      0.66,
      32.65
    ]
  },
  {
    "id": 18769,
    "name": "Skydiveplatform1A",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      19.98,
      0.66,
      19.98
    ]
  },
  {
    "id": 18770,
    "name": "Skydiveplatform1B",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      2.0,
      200.0,
      2.0
    ]
  },
  {
    "id": 18771,
    "name": "Spiralstair1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      4.0,
      50.1,
      3.99
    ]
  },
  {
    "id": 18772,
    "name": "Tunnelsection1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      10.42,
      5.26,
      250.0
    ]
  },
  {
    "id": 18773,
    "name": "Tunneljoinsection1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      10.42,
      5.26,
      5.45
    ]
  },
  {
    "id": 18774,
    "name": "Tunneljoinsection2",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      10.42,
      5.26,
      3.99
    ]
  },
  {
    "id": 18775,
    "name": "Tunneljoinsection3",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      10.42,
      5.63,
      4.64
    ]
  },
  {
    "id": 18776,
    "name": "Tunneljoinsection4",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      10.42,
      6.39,
      5.62
    ]
  },
  {
    "id": 18777,
    "name": "Tunnelspiral1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      50.47,
      31.28,
      50.51
    ]
  },
  {
    "id": 18778,
    "name": "Rampt1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      21.69,
      3.44,
      8.33
    ]
  },
  {
    "id": 18779,
    "name": "Rampt2",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      40.0,
      20.88,
      12.0
    ]
  },
  {
    "id": 18780,
    "name": "Rampt3",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      69.5,
      40.37,
      10.0
    ]
  },
  {
    "id": 18781,
    "name": "Meshrampbig",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      28.63,
      22.47,
      45.34
    ]
  },
  {
    "id": 18782,
    "name": "Cookieramp1",
    "txd": "samp",
    "category": "kitchen",
    "dimensions": [
      15.71,
      2.04,
      15.2
    ]
  },
  {
    "id": 18783,
    "name": "Funboxtop1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      20.0,
      5.0,
      20.0
    ]
  },
  {
    "id": 18784,
    "name": "Funboxramp1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      20.0,
      5.0,
      20.0
    ]
  },
  {
    "id": 18785,
    "name": "Funboxramp2",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      20.0,
      5.0,
      20.0
    ]
  },
  {
    "id": 18786,
    "name": "Funboxramp3",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      20.0,
      6.08,
      20.0
    ]
  },
  {
    "id": 18787,
    "name": "Funboxramp4",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      20.0,
      5.0,
      10.0
    ]
  },
  {
    "id": 18788,
    "name": "Mroad40M",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      40.0,
      4.01,
      16.0
    ]
  },
  {
    "id": 18789,
    "name": "Mroad150M",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      150.0,
      4.01,
      16.0
    ]
  },
  {
    "id": 18790,
    "name": "Mroadbend180Deg1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      105.13,
      28.04,
      16.0
    ]
  },
  {
    "id": 18791,
    "name": "Mroadbend45Deg",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      84.08,
      4.01,
      23.14
    ]
  },
  {
    "id": 18792,
    "name": "Mroadtwist15Degl",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      80.0,
      7.63,
      16.08
    ]
  },
  {
    "id": 18793,
    "name": "Mroadtwist15Degr",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      80.0,
      7.63,
      16.08
    ]
  },
  {
    "id": 18794,
    "name": "Mroadbend15Deg1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      40.4,
      9.18,
      16.0
    ]
  },
  {
    "id": 18795,
    "name": "Mroadbend15Deg2",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      41.62,
      4.01,
      20.92
    ]
  },
  {
    "id": 18796,
    "name": "Mroadbend15Deg3",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      40.41,
      5.3,
      16.0
    ]
  },
  {
    "id": 18797,
    "name": "Mroadbend15Deg4",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      41.99,
      5.3,
      21.04
    ]
  },
  {
    "id": 18798,
    "name": "Mroadb45T15Degl",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      84.08,
      8.41,
      23.23
    ]
  },
  {
    "id": 18799,
    "name": "Mroadb45T15Degr",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      84.08,
      8.37,
      23.12
    ]
  },
  {
    "id": 18800,
    "name": "Mroadhelix1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      60.04,
      27.28,
      61.74
    ]
  },
  {
    "id": 18801,
    "name": "Mroadloop1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      51.93,
      51.37,
      35.68
    ]
  },
  {
    "id": 18802,
    "name": "Mbridgeramp1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      20.34,
      8.17,
      20.0
    ]
  },
  {
    "id": 18803,
    "name": "Mbridge150M1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      150.0,
      6.58,
      16.0
    ]
  },
  {
    "id": 18804,
    "name": "Mbridge150M2",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      150.0,
      9.07,
      16.0
    ]
  },
  {
    "id": 18805,
    "name": "Mbridge150M3",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      150.0,
      16.01,
      16.0
    ]
  },
  {
    "id": 18806,
    "name": "Mbridge150M4",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      150.0,
      22.91,
      16.0
    ]
  },
  {
    "id": 18807,
    "name": "Mbridge75Mhalf",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      75.0,
      22.91,
      16.0
    ]
  },
  {
    "id": 18808,
    "name": "Tube50M1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      10.83,
      50.0,
      11.0
    ]
  },
  {
    "id": 18809,
    "name": "Tube50Mglass1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      10.83,
      50.0,
      11.0
    ]
  },
  {
    "id": 18810,
    "name": "Tube50Mbulge1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      18.71,
      50.0,
      19.0
    ]
  },
  {
    "id": 18811,
    "name": "Tube50Mglassbulge1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      18.71,
      50.0,
      19.0
    ]
  },
  {
    "id": 18812,
    "name": "Tube50Mfunnel1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      79.77,
      50.0,
      81.0
    ]
  },
  {
    "id": 18813,
    "name": "Tube50Mglassfunnel1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      79.77,
      50.0,
      81.0
    ]
  },
  {
    "id": 18814,
    "name": "Tube50Mfunnel2",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      30.53,
      50.0,
      31.0
    ]
  },
  {
    "id": 18815,
    "name": "Tube50Mfunnel3",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      51.0,
      50.0,
      50.23
    ]
  },
  {
    "id": 18816,
    "name": "Tube50Mfunnel4",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      51.0,
      50.0,
      50.23
    ]
  },
  {
    "id": 18817,
    "name": "Tube50Mtsection1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      50.0,
      34.36,
      19.0
    ]
  },
  {
    "id": 18818,
    "name": "Tube50Mglasst1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      50.0,
      34.36,
      19.0
    ]
  },
  {
    "id": 18819,
    "name": "Tube50Mplus1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      50.0,
      50.0,
      19.0
    ]
  },
  {
    "id": 18820,
    "name": "Tube50Mglassplus1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      50.0,
      50.0,
      19.0
    ]
  },
  {
    "id": 18821,
    "name": "Tube50M45Bend1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      15.05,
      52.87,
      11.0
    ]
  },
  {
    "id": 18822,
    "name": "Tube50Mglass45Bend1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      15.05,
      52.87,
      11.0
    ]
  },
  {
    "id": 18823,
    "name": "Tube50M90Bend1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      18.57,
      52.68,
      11.0
    ]
  },
  {
    "id": 18824,
    "name": "Tube50Mglass90Bend1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      18.57,
      52.68,
      11.0
    ]
  },
  {
    "id": 18825,
    "name": "Tube50M180Bend1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      21.21,
      42.66,
      11.0
    ]
  },
  {
    "id": 18826,
    "name": "Tube50Mglass180Bend",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      21.21,
      42.66,
      11.0
    ]
  },
  {
    "id": 18827,
    "name": "Tube100M2",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      10.83,
      11.0,
      100.0
    ]
  },
  {
    "id": 18828,
    "name": "Spiraltube1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      296.8,
      156.57,
      286.97
    ]
  },
  {
    "id": 18829,
    "name": "Rtexturetube",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      10.83,
      50.0,
      11.0
    ]
  },
  {
    "id": 18830,
    "name": "Rtexturebridge",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      32.55,
      5.15,
      11.94
    ]
  },
  {
    "id": 18831,
    "name": "Rt25Mbend90Tube1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      13.91,
      30.17,
      11.0
    ]
  },
  {
    "id": 18832,
    "name": "Rt25Mbend180Tube1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      13.37,
      26.75,
      11.0
    ]
  },
  {
    "id": 18833,
    "name": "Rt50Mbend45Tube1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      15.05,
      52.87,
      11.0
    ]
  },
  {
    "id": 18834,
    "name": "Rt50Mbend180Tube1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      21.21,
      42.66,
      11.0
    ]
  },
  {
    "id": 18835,
    "name": "Rbfunnel",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      89.62,
      24.17,
      91.0
    ]
  },
  {
    "id": 18836,
    "name": "Rbhalfpipe",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      11.0,
      10.83,
      50.0
    ]
  },
  {
    "id": 18837,
    "name": "Rb25Mbend90Tube",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      13.91,
      30.17,
      11.0
    ]
  },
  {
    "id": 18838,
    "name": "Rb25Mbend180Tube",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      13.37,
      26.75,
      11.0
    ]
  },
  {
    "id": 18839,
    "name": "Rb50Mbend45Tube",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      15.05,
      52.87,
      11.0
    ]
  },
  {
    "id": 18840,
    "name": "Rb50Mbend90Tube",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      18.57,
      52.68,
      11.0
    ]
  },
  {
    "id": 18841,
    "name": "Rb50Mbend180Tube",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      21.21,
      42.66,
      11.0
    ]
  },
  {
    "id": 18842,
    "name": "Rb50Mtube",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      10.83,
      50.0,
      11.0
    ]
  },
  {
    "id": 18843,
    "name": "Glasssphere1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      100.0,
      99.03,
      100.0
    ]
  },
  {
    "id": 18844,
    "name": "Wateruvanimsphere1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      100.0,
      99.03,
      100.0
    ]
  },
  {
    "id": 18845,
    "name": "Rtexturesphere",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      80.0,
      80.0,
      80.0
    ]
  },
  {
    "id": 18846,
    "name": "Ufo",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      5.2,
      1.99,
      5.2
    ]
  },
  {
    "id": 18847,
    "name": "Hugehalfpipe1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      239.86,
      62.7,
      240.3
    ]
  },
  {
    "id": 18848,
    "name": "Samsitenondynamic",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      1.7,
      2.65,
      3.05
    ]
  },
  {
    "id": 18849,
    "name": "Paradropnondynamic",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      10.25,
      10.99,
      10.05
    ]
  },
  {
    "id": 18850,
    "name": "Helipad1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      32.62,
      24.51,
      32.62
    ]
  },
  {
    "id": 18851,
    "name": "Tubetoroad1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      50.0,
      14.85,
      18.32
    ]
  },
  {
    "id": 18852,
    "name": "Tube100M1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      10.83,
      100.0,
      11.0
    ]
  },
  {
    "id": 18853,
    "name": "Tube100M45Bend1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      20.11,
      101.59,
      11.0
    ]
  },
  {
    "id": 18854,
    "name": "Tube100M90Bend1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      27.89,
      97.69,
      11.0
    ]
  },
  {
    "id": 18855,
    "name": "Tube100M180Bend1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      37.25,
      74.5,
      11.0
    ]
  },
  {
    "id": 18856,
    "name": "Cage5Mx5Mx3M",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      5.0,
      3.0,
      5.0
    ]
  },
  {
    "id": 18857,
    "name": "Cage20Mx20Mx10M",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      20.0,
      5.0,
      20.0
    ]
  },
  {
    "id": 18858,
    "name": "Foamhoop1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      14.45,
      18.41,
      0.41
    ]
  },
  {
    "id": 18859,
    "name": "Quarterpipe1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      48.8,
      23.75,
      53.4
    ]
  },
  {
    "id": 18862,
    "name": "Garbagepileramp1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      26.77,
      5.65,
      29.27
    ]
  },
  {
    "id": 18863,
    "name": "Snowarc1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      59.27,
      21.58,
      35.26
    ]
  },
  {
    "id": 18864,
    "name": "Fakesnow1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      200.0,
      200.0,
      196.96
    ]
  },
  {
    "id": 18865,
    "name": "Mobilephone1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.16
    ]
  },
  {
    "id": 18866,
    "name": "Mobilephone2",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.16
    ]
  },
  {
    "id": 18867,
    "name": "Mobilephone3",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.16
    ]
  },
  {
    "id": 18868,
    "name": "Mobilephone4",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.16
    ]
  },
  {
    "id": 18869,
    "name": "Mobilephone5",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.16
    ]
  },
  {
    "id": 18870,
    "name": "Mobilephone6",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.16
    ]
  },
  {
    "id": 18871,
    "name": "Mobilephone7",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.16
    ]
  },
  {
    "id": 18872,
    "name": "Mobilephone8",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.16
    ]
  },
  {
    "id": 18873,
    "name": "Mobilephone9",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.16
    ]
  },
  {
    "id": 18874,
    "name": "Mobilephone10",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.16
    ]
  },
  {
    "id": 18875,
    "name": "Pager1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.14,
      0.1,
      0.11
    ]
  },
  {
    "id": 18876,
    "name": "Biggreengloop1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      5.18,
      9.18,
      5.18
    ]
  },
  {
    "id": 18877,
    "name": "Ferriswheelbit",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      23.91,
      23.91,
      4.54
    ]
  },
  {
    "id": 18878,
    "name": "Ferrisbasebit",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      25.68,
      16.72,
      10.45
    ]
  },
  {
    "id": 18879,
    "name": "Ferriscagebit",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      2.4,
      3.09,
      3.87
    ]
  },
  {
    "id": 18880,
    "name": "Speedcamera1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      1.41,
      6.38,
      0.92
    ]
  },
  {
    "id": 18881,
    "name": "Skydiveplatform2",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      10.0,
      201.33,
      9.85
    ]
  },
  {
    "id": 18882,
    "name": "Hugebowl1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      150.0,
      50.0,
      150.0
    ]
  },
  {
    "id": 18883,
    "name": "Hugebowl2",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      225.0,
      105.0,
      225.0
    ]
  },
  {
    "id": 18884,
    "name": "Hugebowl3",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      225.0,
      205.0,
      225.0
    ]
  },
  {
    "id": 18885,
    "name": "Gunvendingmachine1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      1.21,
      2.2,
      0.8
    ]
  },
  {
    "id": 18886,
    "name": "Electromagnet1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      3.75,
      1.08,
      3.75
    ]
  },
  {
    "id": 18887,
    "name": "Forcefield1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      1.5,
      2.0,
      1.5
    ]
  },
  {
    "id": 18888,
    "name": "Forcefield2",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      1.5,
      2.0,
      1.5
    ]
  },
  {
    "id": 18889,
    "name": "Forcefield3",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      4.58,
      6.1,
      4.58
    ]
  },
  {
    "id": 18890,
    "name": "Rake1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.25,
      1.05,
      0.1
    ]
  },
  {
    "id": 18891,
    "name": "Bandana1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.16,
      0.22,
      0.16
    ]
  },
  {
    "id": 18892,
    "name": "Bandana2",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.16,
      0.22,
      0.16
    ]
  },
  {
    "id": 18893,
    "name": "Bandana3",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.16,
      0.22,
      0.16
    ]
  },
  {
    "id": 18894,
    "name": "Bandana4",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.16,
      0.22,
      0.16
    ]
  },
  {
    "id": 18895,
    "name": "Bandana5",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.16,
      0.22,
      0.16
    ]
  },
  {
    "id": 18896,
    "name": "Bandana6",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.16,
      0.22,
      0.16
    ]
  },
  {
    "id": 18897,
    "name": "Bandana7",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.16,
      0.22,
      0.16
    ]
  },
  {
    "id": 18898,
    "name": "Bandana8",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.16,
      0.22,
      0.16
    ]
  },
  {
    "id": 18899,
    "name": "Bandana9",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.16,
      0.22,
      0.16
    ]
  },
  {
    "id": 18900,
    "name": "Bandana10",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.16,
      0.22,
      0.16
    ]
  },
  {
    "id": 18901,
    "name": "Bandana11",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.16,
      0.22,
      0.16
    ]
  },
  {
    "id": 18902,
    "name": "Bandana12",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.16,
      0.22,
      0.16
    ]
  },
  {
    "id": 18903,
    "name": "Bandana13",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.16,
      0.22,
      0.16
    ]
  },
  {
    "id": 18904,
    "name": "Bandana14",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.16,
      0.22,
      0.16
    ]
  },
  {
    "id": 18905,
    "name": "Bandana15",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.16,
      0.22,
      0.16
    ]
  },
  {
    "id": 18906,
    "name": "Bandana16",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.23,
      0.22,
      0.17
    ]
  },
  {
    "id": 18907,
    "name": "Bandana17",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.23,
      0.22,
      0.17
    ]
  },
  {
    "id": 18908,
    "name": "Bandana18",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.23,
      0.22,
      0.17
    ]
  },
  {
    "id": 18909,
    "name": "Bandana19",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.23,
      0.22,
      0.17
    ]
  },
  {
    "id": 18910,
    "name": "Bandana20",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.23,
      0.22,
      0.17
    ]
  },
  {
    "id": 18911,
    "name": "Mask1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.17,
      0.23,
      0.22
    ]
  },
  {
    "id": 18912,
    "name": "Mask2",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.17,
      0.23,
      0.22
    ]
  },
  {
    "id": 18913,
    "name": "Mask3",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.17,
      0.23,
      0.22
    ]
  },
  {
    "id": 18914,
    "name": "Mask4",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.17,
      0.23,
      0.22
    ]
  },
  {
    "id": 18915,
    "name": "Mask5",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.17,
      0.23,
      0.22
    ]
  },
  {
    "id": 18916,
    "name": "Mask6",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.17,
      0.23,
      0.22
    ]
  },
  {
    "id": 18917,
    "name": "Mask7",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.17,
      0.23,
      0.22
    ]
  },
  {
    "id": 18918,
    "name": "Mask8",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.17,
      0.23,
      0.22
    ]
  },
  {
    "id": 18919,
    "name": "Mask9",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.17,
      0.23,
      0.22
    ]
  },
  {
    "id": 18920,
    "name": "Mask10",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.17,
      0.23,
      0.22
    ]
  },
  {
    "id": 18921,
    "name": "Beret1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.12,
      0.2,
      0.24
    ]
  },
  {
    "id": 18922,
    "name": "Beret2",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.12,
      0.2,
      0.24
    ]
  },
  {
    "id": 18923,
    "name": "Beret3",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.12,
      0.2,
      0.24
    ]
  },
  {
    "id": 18924,
    "name": "Beret4",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.12,
      0.2,
      0.24
    ]
  },
  {
    "id": 18925,
    "name": "Beret5",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.12,
      0.2,
      0.24
    ]
  },
  {
    "id": 18926,
    "name": "Hat1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.13,
      0.16,
      0.26
    ]
  },
  {
    "id": 18927,
    "name": "Hat2",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.13,
      0.16,
      0.26
    ]
  },
  {
    "id": 18928,
    "name": "Hat3",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.13,
      0.16,
      0.26
    ]
  },
  {
    "id": 18929,
    "name": "Hat4",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.13,
      0.16,
      0.26
    ]
  },
  {
    "id": 18930,
    "name": "Hat5",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.13,
      0.16,
      0.26
    ]
  },
  {
    "id": 18931,
    "name": "Hat6",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.13,
      0.16,
      0.26
    ]
  },
  {
    "id": 18932,
    "name": "Hat7",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.13,
      0.16,
      0.26
    ]
  },
  {
    "id": 18933,
    "name": "Hat8",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.13,
      0.16,
      0.26
    ]
  },
  {
    "id": 18934,
    "name": "Hat9",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.13,
      0.16,
      0.26
    ]
  },
  {
    "id": 18935,
    "name": "Hat10",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.13,
      0.16,
      0.26
    ]
  },
  {
    "id": 18936,
    "name": "Helmet1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.28,
      0.16,
      0.25
    ]
  },
  {
    "id": 18937,
    "name": "Helmet2",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.28,
      0.16,
      0.25
    ]
  },
  {
    "id": 18938,
    "name": "Helmet3",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.28,
      0.16,
      0.25
    ]
  },
  {
    "id": 18939,
    "name": "Capback1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.16,
      0.15,
      0.25
    ]
  },
  {
    "id": 18940,
    "name": "Capback2",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.16,
      0.15,
      0.25
    ]
  },
  {
    "id": 18941,
    "name": "Capback3",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.16,
      0.15,
      0.25
    ]
  },
  {
    "id": 18942,
    "name": "Capback4",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.16,
      0.15,
      0.25
    ]
  },
  {
    "id": 18943,
    "name": "Capback5",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.16,
      0.15,
      0.25
    ]
  },
  {
    "id": 18944,
    "name": "Hatboater1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.12,
      0.26,
      0.3
    ]
  },
  {
    "id": 18945,
    "name": "Hatboater2",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.12,
      0.26,
      0.3
    ]
  },
  {
    "id": 18946,
    "name": "Hatboater3",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.12,
      0.26,
      0.3
    ]
  },
  {
    "id": 18947,
    "name": "Hatbowler1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.14,
      0.21,
      0.3
    ]
  },
  {
    "id": 18948,
    "name": "Hatbowler2",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.14,
      0.21,
      0.3
    ]
  },
  {
    "id": 18949,
    "name": "Hatbowler3",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.14,
      0.21,
      0.3
    ]
  },
  {
    "id": 18950,
    "name": "Hatbowler4",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.14,
      0.21,
      0.3
    ]
  },
  {
    "id": 18951,
    "name": "Hatbowler5",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.14,
      0.21,
      0.3
    ]
  },
  {
    "id": 18952,
    "name": "Boxinghelmet1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.15,
      0.2,
      0.23
    ]
  },
  {
    "id": 18953,
    "name": "Capknit1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.11,
      0.16,
      0.21
    ]
  },
  {
    "id": 18954,
    "name": "Capknit2",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.11,
      0.16,
      0.21
    ]
  },
  {
    "id": 18955,
    "name": "Capovereye1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.25,
      0.17,
      0.2
    ]
  },
  {
    "id": 18956,
    "name": "Capovereye2",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.25,
      0.17,
      0.2
    ]
  },
  {
    "id": 18957,
    "name": "Capovereye3",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.25,
      0.17,
      0.2
    ]
  },
  {
    "id": 18958,
    "name": "Capovereye4",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.25,
      0.17,
      0.2
    ]
  },
  {
    "id": 18959,
    "name": "Capovereye5",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.25,
      0.17,
      0.2
    ]
  },
  {
    "id": 18960,
    "name": "Caprimup1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.23,
      0.12,
      0.16
    ]
  },
  {
    "id": 18961,
    "name": "Captrucker1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.27,
      0.14,
      0.16
    ]
  },
  {
    "id": 18962,
    "name": "Cowboyhat2",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.14,
      0.33,
      0.35
    ]
  },
  {
    "id": 18963,
    "name": "Cjelvishead",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.24,
      0.26,
      0.19
    ]
  },
  {
    "id": 18964,
    "name": "Skullycap1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.25,
      0.18,
      0.17
    ]
  },
  {
    "id": 18965,
    "name": "Skullycap2",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.25,
      0.18,
      0.17
    ]
  },
  {
    "id": 18966,
    "name": "Skullycap3",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.25,
      0.18,
      0.17
    ]
  },
  {
    "id": 18967,
    "name": "Hatman1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.27,
      0.15,
      0.21
    ]
  },
  {
    "id": 18968,
    "name": "Hatman2",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.27,
      0.15,
      0.21
    ]
  },
  {
    "id": 18969,
    "name": "Hatman3",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.27,
      0.15,
      0.21
    ]
  },
  {
    "id": 18970,
    "name": "Hattiger1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.36,
      0.14,
      0.28
    ]
  },
  {
    "id": 18971,
    "name": "Hatcool1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.36,
      0.14,
      0.28
    ]
  },
  {
    "id": 18972,
    "name": "Hatcool2",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.36,
      0.14,
      0.28
    ]
  },
  {
    "id": 18973,
    "name": "Hatcool3",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.36,
      0.14,
      0.28
    ]
  },
  {
    "id": 18974,
    "name": "Maskzorro1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.25,
      0.11,
      0.15
    ]
  },
  {
    "id": 18975,
    "name": "Hair2",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.24,
      0.25,
      0.25
    ]
  },
  {
    "id": 18976,
    "name": "Motorcyclehelmet2",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.31,
      0.26,
      0.18
    ]
  },
  {
    "id": 18977,
    "name": "Motorcyclehelmet3",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.26,
      0.28,
      0.24
    ]
  },
  {
    "id": 18978,
    "name": "Motorcyclehelmet4",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.26,
      0.28,
      0.24
    ]
  },
  {
    "id": 18979,
    "name": "Motorcyclehelmet5",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.26,
      0.28,
      0.24
    ]
  },
  {
    "id": 18980,
    "name": "Concrete1Mx1Mx25M",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      1.0,
      25.0,
      1.0
    ]
  },
  {
    "id": 18981,
    "name": "Concrete1Mx25Mx25M",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      1.0,
      25.0,
      25.0
    ]
  },
  {
    "id": 18982,
    "name": "Tube100M3",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      10.83,
      11.0,
      100.0
    ]
  },
  {
    "id": 18983,
    "name": "Tube100M4",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      10.83,
      11.0,
      100.0
    ]
  },
  {
    "id": 18984,
    "name": "Tube100M5",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      10.83,
      11.0,
      100.0
    ]
  },
  {
    "id": 18985,
    "name": "Tube100M6",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      10.83,
      11.0,
      100.0
    ]
  },
  {
    "id": 18986,
    "name": "Tubetopipe1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      10.83,
      25.0,
      11.0
    ]
  },
  {
    "id": 18987,
    "name": "Tube25M1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      10.83,
      25.0,
      11.0
    ]
  },
  {
    "id": 18988,
    "name": "Tube25Mcutend1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      10.83,
      30.0,
      11.0
    ]
  },
  {
    "id": 18989,
    "name": "Tube25M45Bend1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      12.73,
      28.51,
      11.0
    ]
  },
  {
    "id": 18990,
    "name": "Tube25M90Bend1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      13.91,
      30.17,
      11.0
    ]
  },
  {
    "id": 18991,
    "name": "Tube25M180Bend1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      13.37,
      26.75,
      11.0
    ]
  },
  {
    "id": 18992,
    "name": "Tube10M45Bend1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      11.33,
      13.89,
      11.0
    ]
  },
  {
    "id": 18993,
    "name": "Tube10M90Bend1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      11.11,
      16.66,
      11.0
    ]
  },
  {
    "id": 18994,
    "name": "Tube10M180Bend1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      10.91,
      21.66,
      11.0
    ]
  },
  {
    "id": 18995,
    "name": "Tube5M1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      10.83,
      5.0,
      11.0
    ]
  },
  {
    "id": 18996,
    "name": "Tube5M45Bend1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      10.87,
      9.02,
      11.0
    ]
  },
  {
    "id": 18997,
    "name": "Tube1M1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      10.83,
      1.0,
      11.0
    ]
  },
  {
    "id": 18998,
    "name": "Tube200M1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      10.83,
      200.0,
      11.0
    ]
  },
  {
    "id": 18999,
    "name": "Tube200Mbendy1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      20.83,
      200.0,
      21.0
    ]
  },
  {
    "id": 19000,
    "name": "Tube200Mbulge1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      32.52,
      200.0,
      33.02
    ]
  },
  {
    "id": 19001,
    "name": "Vcwideloop1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      29.04,
      23.15,
      43.44
    ]
  },
  {
    "id": 19002,
    "name": "Firehoop1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      14.45,
      18.41,
      0.41
    ]
  },
  {
    "id": 19003,
    "name": "Rampt5",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      20.0,
      2.0,
      20.0
    ]
  },
  {
    "id": 19004,
    "name": "Roundbuilding1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      46.76,
      97.12,
      44.26
    ]
  },
  {
    "id": 19005,
    "name": "Rampt4",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      22.45,
      10.97,
      25.07
    ]
  },
  {
    "id": 19006,
    "name": "Glassestype1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.16,
      0.1,
      0.15
    ]
  },
  {
    "id": 19007,
    "name": "Glassestype2",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.16,
      0.1,
      0.15
    ]
  },
  {
    "id": 19008,
    "name": "Glassestype3",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.16,
      0.1,
      0.15
    ]
  },
  {
    "id": 19009,
    "name": "Glassestype4",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.16,
      0.1,
      0.15
    ]
  },
  {
    "id": 19010,
    "name": "Glassestype5",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.16,
      0.1,
      0.15
    ]
  },
  {
    "id": 19011,
    "name": "Glassestype6",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.16,
      0.1,
      0.15
    ]
  },
  {
    "id": 19012,
    "name": "Glassestype7",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.16,
      0.1,
      0.15
    ]
  },
  {
    "id": 19013,
    "name": "Glassestype8",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.16,
      0.1,
      0.15
    ]
  },
  {
    "id": 19014,
    "name": "Glassestype9",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.16,
      0.1,
      0.15
    ]
  },
  {
    "id": 19015,
    "name": "Glassestype10",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.16,
      0.1,
      0.15
    ]
  },
  {
    "id": 19016,
    "name": "Glassestype11",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.16,
      0.1,
      0.15
    ]
  },
  {
    "id": 19017,
    "name": "Glassestype12",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.16,
      0.1,
      0.15
    ]
  },
  {
    "id": 19018,
    "name": "Glassestype13",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.16,
      0.1,
      0.15
    ]
  },
  {
    "id": 19019,
    "name": "Glassestype14",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.16,
      0.1,
      0.15
    ]
  },
  {
    "id": 19020,
    "name": "Glassestype15",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.16,
      0.1,
      0.15
    ]
  },
  {
    "id": 19021,
    "name": "Glassestype16",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.16,
      0.1,
      0.15
    ]
  },
  {
    "id": 19022,
    "name": "Glassestype17",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.17,
      0.1,
      0.15
    ]
  },
  {
    "id": 19023,
    "name": "Glassestype18",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.17,
      0.1,
      0.15
    ]
  },
  {
    "id": 19024,
    "name": "Glassestype19",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.17,
      0.1,
      0.15
    ]
  },
  {
    "id": 19025,
    "name": "Glassestype20",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.17,
      0.1,
      0.15
    ]
  },
  {
    "id": 19026,
    "name": "Glassestype21",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.17,
      0.1,
      0.15
    ]
  },
  {
    "id": 19027,
    "name": "Glassestype22",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.17,
      0.1,
      0.15
    ]
  },
  {
    "id": 19028,
    "name": "Glassestype23",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.17,
      0.1,
      0.15
    ]
  },
  {
    "id": 19029,
    "name": "Glassestype24",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.17,
      0.1,
      0.15
    ]
  },
  {
    "id": 19030,
    "name": "Glassestype25",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.17,
      0.1,
      0.15
    ]
  },
  {
    "id": 19031,
    "name": "Glassestype26",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.17,
      0.1,
      0.15
    ]
  },
  {
    "id": 19032,
    "name": "Glassestype27",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.17,
      0.1,
      0.15
    ]
  },
  {
    "id": 19033,
    "name": "Glassestype28",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.17,
      0.1,
      0.15
    ]
  },
  {
    "id": 19034,
    "name": "Glassestype29",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.17,
      0.1,
      0.15
    ]
  },
  {
    "id": 19035,
    "name": "Glassestype30",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.17,
      0.1,
      0.15
    ]
  },
  {
    "id": 19036,
    "name": "Hockeymask1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.23,
      0.22,
      0.15
    ]
  },
  {
    "id": 19037,
    "name": "Hockeymask2",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.23,
      0.22,
      0.15
    ]
  },
  {
    "id": 19038,
    "name": "Hockeymask3",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.23,
      0.22,
      0.15
    ]
  },
  {
    "id": 19039,
    "name": "Watchtype1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 19040,
    "name": "Watchtype2",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 19041,
    "name": "Watchtype3",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 19042,
    "name": "Watchtype4",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 19043,
    "name": "Watchtype5",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 19044,
    "name": "Watchtype6",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 19045,
    "name": "Watchtype7",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 19046,
    "name": "Watchtype8",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 19047,
    "name": "Watchtype9",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 19048,
    "name": "Watchtype10",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 19049,
    "name": "Watchtype11",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 19050,
    "name": "Watchtype12",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 19051,
    "name": "Watchtype13",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 19052,
    "name": "Watchtype14",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 19053,
    "name": "Watchtype15",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 19054,
    "name": "Xmasbox1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      1.2,
      1.31,
      1.2
    ]
  },
  {
    "id": 19055,
    "name": "Xmasbox2",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      1.2,
      1.31,
      1.2
    ]
  },
  {
    "id": 19056,
    "name": "Xmasbox3",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      1.2,
      1.31,
      1.2
    ]
  },
  {
    "id": 19057,
    "name": "Xmasbox4",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      1.2,
      1.31,
      1.2
    ]
  },
  {
    "id": 19058,
    "name": "Xmasbox5",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      1.2,
      1.31,
      1.2
    ]
  },
  {
    "id": 19059,
    "name": "Xmasorb1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.91,
      1.04,
      0.91
    ]
  },
  {
    "id": 19060,
    "name": "Xmasorb2",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.91,
      1.04,
      0.91
    ]
  },
  {
    "id": 19061,
    "name": "Xmasorb3",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.91,
      1.04,
      0.91
    ]
  },
  {
    "id": 19062,
    "name": "Xmasorb4",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.91,
      1.04,
      0.91
    ]
  },
  {
    "id": 19063,
    "name": "Xmasorb5",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.91,
      1.04,
      0.91
    ]
  },
  {
    "id": 19064,
    "name": "Santahat1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.32,
      0.18,
      0.17
    ]
  },
  {
    "id": 19065,
    "name": "Santahat2",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.32,
      0.18,
      0.17
    ]
  },
  {
    "id": 19066,
    "name": "Santahat3",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.32,
      0.18,
      0.17
    ]
  },
  {
    "id": 19067,
    "name": "Hoodyhat1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.2,
      0.17,
      0.17
    ]
  },
  {
    "id": 19068,
    "name": "Hoodyhat2",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.2,
      0.17,
      0.17
    ]
  },
  {
    "id": 19069,
    "name": "Hoodyhat3",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.2,
      0.17,
      0.17
    ]
  },
  {
    "id": 19070,
    "name": "Wsdown1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      41.98,
      12.52,
      59.07
    ]
  },
  {
    "id": 19071,
    "name": "Wsstraight1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      41.98,
      2.0,
      60.0
    ]
  },
  {
    "id": 19072,
    "name": "Wsbend45Deg1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      41.98,
      7.51,
      58.7
    ]
  },
  {
    "id": 19073,
    "name": "Wsrocky1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      41.98,
      4.3,
      60.0
    ]
  },
  {
    "id": 19074,
    "name": "Cage20Mx20Mx10Mv2",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      20.0,
      5.0,
      20.02
    ]
  },
  {
    "id": 19075,
    "name": "Cage5Mx5Mx3Mv2",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      5.0,
      3.0,
      5.02
    ]
  },
  {
    "id": 19076,
    "name": "Xmastree1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      7.22,
      12.56,
      7.16
    ]
  },
  {
    "id": 19077,
    "name": "Hair3",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.2,
      0.16,
      0.21
    ]
  },
  {
    "id": 19078,
    "name": "Theparrot1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.67,
      0.17,
      0.36
    ]
  },
  {
    "id": 19079,
    "name": "Theparrot2",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.67,
      0.17,
      0.36
    ]
  },
  {
    "id": 19080,
    "name": "Laserpointer2",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      20.15,
      0.1,
      0.1
    ]
  },
  {
    "id": 19081,
    "name": "Laserpointer3",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      20.15,
      0.1,
      0.1
    ]
  },
  {
    "id": 19082,
    "name": "Laserpointer4",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      20.15,
      0.1,
      0.1
    ]
  },
  {
    "id": 19083,
    "name": "Laserpointer5",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      20.15,
      0.1,
      0.1
    ]
  },
  {
    "id": 19084,
    "name": "Laserpointer6",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      20.15,
      0.1,
      0.1
    ]
  },
  {
    "id": 19085,
    "name": "Eyepatch1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.2,
      0.1,
      0.14
    ]
  },
  {
    "id": 19086,
    "name": "Chainsawdildo1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      1.02,
      0.31,
      0.25
    ]
  },
  {
    "id": 19087,
    "name": "Rope1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      2.46,
      0.1
    ]
  },
  {
    "id": 19088,
    "name": "Rope2",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.68,
      2.99,
      0.52
    ]
  },
  {
    "id": 19089,
    "name": "Rope3",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      7.39,
      0.1
    ]
  },
  {
    "id": 19090,
    "name": "Pompomblue",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.49,
      0.44,
      0.45
    ]
  },
  {
    "id": 19091,
    "name": "Pompomred",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.49,
      0.44,
      0.45
    ]
  },
  {
    "id": 19092,
    "name": "Pompomgreen",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.49,
      0.44,
      0.45
    ]
  },
  {
    "id": 19093,
    "name": "Hardhat2",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.13,
      0.16,
      0.25
    ]
  },
  {
    "id": 19094,
    "name": "Burgershothat1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.24,
      0.35,
      0.37
    ]
  },
  {
    "id": 19095,
    "name": "Cowboyhat1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.14,
      0.33,
      0.35
    ]
  },
  {
    "id": 19096,
    "name": "Cowboyhat3",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.14,
      0.33,
      0.35
    ]
  },
  {
    "id": 19097,
    "name": "Cowboyhat4",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.14,
      0.33,
      0.35
    ]
  },
  {
    "id": 19098,
    "name": "Cowboyhat5",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.14,
      0.33,
      0.35
    ]
  },
  {
    "id": 19099,
    "name": "Policecap2",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.14,
      0.33,
      0.35
    ]
  },
  {
    "id": 19100,
    "name": "Policecap3",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.14,
      0.33,
      0.35
    ]
  },
  {
    "id": 19101,
    "name": "Armyhelmet1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.24,
      0.17,
      0.24
    ]
  },
  {
    "id": 19102,
    "name": "Armyhelmet2",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.24,
      0.17,
      0.24
    ]
  },
  {
    "id": 19103,
    "name": "Armyhelmet3",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.24,
      0.17,
      0.24
    ]
  },
  {
    "id": 19104,
    "name": "Armyhelmet4",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.24,
      0.17,
      0.24
    ]
  },
  {
    "id": 19105,
    "name": "Armyhelmet5",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.24,
      0.17,
      0.24
    ]
  },
  {
    "id": 19106,
    "name": "Armyhelmet6",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.17,
      0.18,
      0.26
    ]
  },
  {
    "id": 19107,
    "name": "Armyhelmet7",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.17,
      0.18,
      0.26
    ]
  },
  {
    "id": 19108,
    "name": "Armyhelmet8",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.17,
      0.18,
      0.26
    ]
  },
  {
    "id": 19109,
    "name": "Armyhelmet9",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.17,
      0.18,
      0.26
    ]
  },
  {
    "id": 19110,
    "name": "Armyhelmet10",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.17,
      0.18,
      0.26
    ]
  },
  {
    "id": 19111,
    "name": "Armyhelmet11",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.17,
      0.18,
      0.26
    ]
  },
  {
    "id": 19112,
    "name": "Armyhelmet12",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.17,
      0.18,
      0.26
    ]
  },
  {
    "id": 19113,
    "name": "Sillyhelmet1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.17,
      0.18,
      0.26
    ]
  },
  {
    "id": 19114,
    "name": "Sillyhelmet2",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.17,
      0.18,
      0.26
    ]
  },
  {
    "id": 19115,
    "name": "Sillyhelmet3",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.17,
      0.18,
      0.26
    ]
  },
  {
    "id": 19116,
    "name": "Plainhelmet1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.17,
      0.18,
      0.26
    ]
  },
  {
    "id": 19117,
    "name": "Plainhelmet2",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.17,
      0.18,
      0.26
    ]
  },
  {
    "id": 19118,
    "name": "Plainhelmet3",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.17,
      0.18,
      0.26
    ]
  },
  {
    "id": 19119,
    "name": "Plainhelmet4",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.17,
      0.18,
      0.26
    ]
  },
  {
    "id": 19120,
    "name": "Plainhelmet5",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.17,
      0.18,
      0.26
    ]
  },
  {
    "id": 19121,
    "name": "Bollardlight1",
    "txd": "samp",
    "category": "lighting",
    "dimensions": [
      0.28,
      1.03,
      0.24
    ]
  },
  {
    "id": 19122,
    "name": "Bollardlight2",
    "txd": "samp",
    "category": "lighting",
    "dimensions": [
      0.28,
      1.03,
      0.24
    ]
  },
  {
    "id": 19123,
    "name": "Bollardlight3",
    "txd": "samp",
    "category": "lighting",
    "dimensions": [
      0.28,
      1.03,
      0.24
    ]
  },
  {
    "id": 19124,
    "name": "Bollardlight4",
    "txd": "samp",
    "category": "lighting",
    "dimensions": [
      0.28,
      1.03,
      0.24
    ]
  },
  {
    "id": 19125,
    "name": "Bollardlight5",
    "txd": "samp",
    "category": "lighting",
    "dimensions": [
      0.28,
      1.03,
      0.24
    ]
  },
  {
    "id": 19126,
    "name": "Bollardlight6",
    "txd": "samp",
    "category": "lighting",
    "dimensions": [
      0.28,
      1.03,
      0.24
    ]
  },
  {
    "id": 19127,
    "name": "Bollardlight7",
    "txd": "samp",
    "category": "lighting",
    "dimensions": [
      0.28,
      1.03,
      0.24
    ]
  },
  {
    "id": 19128,
    "name": "Dancefloor1",
    "txd": "samp",
    "category": "floors",
    "dimensions": [
      4.0,
      0.13,
      4.0
    ]
  },
  {
    "id": 19129,
    "name": "Dancefloor2",
    "txd": "samp",
    "category": "floors",
    "dimensions": [
      20.0,
      0.13,
      20.0
    ]
  },
  {
    "id": 19130,
    "name": "Arrowtype1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.12,
      1.01,
      0.52
    ]
  },
  {
    "id": 19131,
    "name": "Arrowtype2",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.49,
      0.5
    ]
  },
  {
    "id": 19132,
    "name": "Arrowtype3",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.5,
      0.5
    ]
  },
  {
    "id": 19133,
    "name": "Arrowtype4",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.81,
      0.5
    ]
  },
  {
    "id": 19134,
    "name": "Arrowtype5",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.5,
      0.5
    ]
  },
  {
    "id": 19135,
    "name": "Enexmarker1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.39,
      0.5,
      0.39
    ]
  },
  {
    "id": 19136,
    "name": "Hair4",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.28,
      0.27,
      0.32
    ]
  },
  {
    "id": 19137,
    "name": "Cluckinbellhat1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.47,
      0.25,
      0.45
    ]
  },
  {
    "id": 19138,
    "name": "Policeglasses1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.14,
      0.1,
      0.15
    ]
  },
  {
    "id": 19139,
    "name": "Policeglasses2",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.14,
      0.1,
      0.15
    ]
  },
  {
    "id": 19140,
    "name": "Policeglasses3",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.14,
      0.1,
      0.15
    ]
  },
  {
    "id": 19141,
    "name": "Swathelmet1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.18,
      0.18,
      0.23
    ]
  },
  {
    "id": 19142,
    "name": "Swatarmour1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.55,
      0.42,
      0.41
    ]
  },
  {
    "id": 19143,
    "name": "Pinspotlight1",
    "txd": "samp",
    "category": "lighting",
    "dimensions": [
      0.26,
      0.34,
      0.26
    ]
  },
  {
    "id": 19144,
    "name": "Pinspotlight2",
    "txd": "samp",
    "category": "lighting",
    "dimensions": [
      0.26,
      0.34,
      0.26
    ]
  },
  {
    "id": 19145,
    "name": "Pinspotlight3",
    "txd": "samp",
    "category": "lighting",
    "dimensions": [
      0.26,
      0.34,
      0.26
    ]
  },
  {
    "id": 19146,
    "name": "Pinspotlight4",
    "txd": "samp",
    "category": "lighting",
    "dimensions": [
      0.26,
      0.34,
      0.26
    ]
  },
  {
    "id": 19147,
    "name": "Pinspotlight5",
    "txd": "samp",
    "category": "lighting",
    "dimensions": [
      0.26,
      0.34,
      0.26
    ]
  },
  {
    "id": 19148,
    "name": "Pinspotlight6",
    "txd": "samp",
    "category": "lighting",
    "dimensions": [
      0.26,
      0.34,
      0.26
    ]
  },
  {
    "id": 19149,
    "name": "Pinspotlight7",
    "txd": "samp",
    "category": "lighting",
    "dimensions": [
      0.26,
      0.34,
      0.26
    ]
  },
  {
    "id": 19150,
    "name": "Pinspotlight8",
    "txd": "samp",
    "category": "lighting",
    "dimensions": [
      0.26,
      0.34,
      0.26
    ]
  },
  {
    "id": 19151,
    "name": "Pinspotlight9",
    "txd": "samp",
    "category": "lighting",
    "dimensions": [
      0.26,
      0.34,
      0.26
    ]
  },
  {
    "id": 19152,
    "name": "Pinspotlight10",
    "txd": "samp",
    "category": "lighting",
    "dimensions": [
      0.26,
      0.34,
      0.26
    ]
  },
  {
    "id": 19153,
    "name": "Pinspotlight11",
    "txd": "samp",
    "category": "lighting",
    "dimensions": [
      0.26,
      0.34,
      0.26
    ]
  },
  {
    "id": 19154,
    "name": "Pinspotlight12",
    "txd": "samp",
    "category": "lighting",
    "dimensions": [
      0.26,
      0.34,
      0.26
    ]
  },
  {
    "id": 19155,
    "name": "Pinspotlight13",
    "txd": "samp",
    "category": "lighting",
    "dimensions": [
      0.26,
      0.34,
      0.26
    ]
  },
  {
    "id": 19156,
    "name": "Pinspotlight14",
    "txd": "samp",
    "category": "lighting",
    "dimensions": [
      0.26,
      0.34,
      0.26
    ]
  },
  {
    "id": 19157,
    "name": "Metallightbars1",
    "txd": "samp",
    "category": "lighting",
    "dimensions": [
      4.5,
      4.1,
      4.5
    ]
  },
  {
    "id": 19158,
    "name": "Metallightbars2",
    "txd": "samp",
    "category": "lighting",
    "dimensions": [
      20.5,
      5.1,
      20.5
    ]
  },
  {
    "id": 19159,
    "name": "Mirrorball1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.3,
      0.38,
      0.3
    ]
  },
  {
    "id": 19160,
    "name": "Hardhat3",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.13,
      0.16,
      0.25
    ]
  },
  {
    "id": 19161,
    "name": "Policehat1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.13,
      0.16,
      0.26
    ]
  },
  {
    "id": 19162,
    "name": "Policehat2",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.13,
      0.16,
      0.26
    ]
  },
  {
    "id": 19163,
    "name": "Gimpmask1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.17,
      0.22,
      0.23
    ]
  },
  {
    "id": 19164,
    "name": "Gtasamap1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      1.74,
      0.17,
      1.74
    ]
  },
  {
    "id": 19165,
    "name": "Gtasamap2",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      1.5,
      0.1,
      1.5
    ]
  },
  {
    "id": 19166,
    "name": "Gtasamap3",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      1.69,
      0.1,
      1.69
    ]
  },
  {
    "id": 19167,
    "name": "Gtasamap4",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.42,
      0.1,
      0.42
    ]
  },
  {
    "id": 19168,
    "name": "Gtasamap5",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      1.5,
      0.1,
      1.5
    ]
  },
  {
    "id": 19169,
    "name": "Gtasamap6",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      1.5,
      0.1,
      1.5
    ]
  },
  {
    "id": 19170,
    "name": "Gtasamap7",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      1.5,
      0.1,
      1.5
    ]
  },
  {
    "id": 19171,
    "name": "Gtasamap8",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      1.5,
      0.1,
      1.5
    ]
  },
  {
    "id": 19172,
    "name": "Samppicture1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      2.7,
      1.5,
      0.1
    ]
  },
  {
    "id": 19173,
    "name": "Samppicture2",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      2.16,
      0.75,
      0.1
    ]
  },
  {
    "id": 19174,
    "name": "Samppicture3",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      2.7,
      1.5,
      0.1
    ]
  },
  {
    "id": 19175,
    "name": "Samppicture4",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      2.7,
      1.5,
      0.1
    ]
  },
  {
    "id": 19176,
    "name": "Lsoffice1Door1",
    "txd": "samp",
    "category": "doors",
    "dimensions": [
      3.61,
      2.97,
      0.1
    ]
  },
  {
    "id": 19177,
    "name": "Mapmarkernew1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 19178,
    "name": "Mapmarkernew2",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 19179,
    "name": "Mapmarkernew3",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 19180,
    "name": "Mapmarkernew4",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 19181,
    "name": "Mapmarkernew5",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 19182,
    "name": "Mapmarkernew6",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 19183,
    "name": "Mapmarkernew7",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 19184,
    "name": "Mapmarkernew8",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 19185,
    "name": "Mapmarkernew9",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 19186,
    "name": "Mapmarkernew10",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 19187,
    "name": "Mapmarkernew11",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 19188,
    "name": "Mapmarkernew12",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 19189,
    "name": "Mapmarkernew13",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 19190,
    "name": "Mapmarkernew14",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 19191,
    "name": "Mapmarkernew15",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 19192,
    "name": "Mapmarkernew16",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 19193,
    "name": "Mapmarkernew17",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 19194,
    "name": "Mapmarkernew18",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 19195,
    "name": "Mapmarkernew19",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 19196,
    "name": "Mapmarkernew20",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 19197,
    "name": "Enexmarker2",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.85,
      1.31,
      0.86
    ]
  },
  {
    "id": 19198,
    "name": "Enexmarker3",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.85,
      1.31,
      0.86
    ]
  },
  {
    "id": 19200,
    "name": "Policehelmet1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.21,
      0.21,
      0.26
    ]
  },
  {
    "id": 19201,
    "name": "Mapmarker1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 19202,
    "name": "Mapmarker2",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 19203,
    "name": "Mapmarker3",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 19204,
    "name": "Mapmarker4",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 19205,
    "name": "Mapmarker5",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 19206,
    "name": "Mapmarker6",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 19207,
    "name": "Mapmarker7",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 19208,
    "name": "Mapmarker8",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 19209,
    "name": "Mapmarker9",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 19210,
    "name": "Mapmarker10",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 19211,
    "name": "Mapmarker11",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 19212,
    "name": "Mapmarker12",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 19213,
    "name": "Mapmarker13",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 19214,
    "name": "Mapmarker14",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 19215,
    "name": "Mapmarker15",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 19216,
    "name": "Mapmarker16",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 19217,
    "name": "Mapmarker17",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 19218,
    "name": "Mapmarker18",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 19219,
    "name": "Mapmarker19",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 19220,
    "name": "Mapmarker20",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 19221,
    "name": "Mapmarker21",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 19222,
    "name": "Mapmarker22",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 19223,
    "name": "Mapmarker23",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 19224,
    "name": "Mapmarker24",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 19225,
    "name": "Mapmarker25",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 19226,
    "name": "Mapmarker26",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 19227,
    "name": "Mapmarker27",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 19228,
    "name": "Mapmarker28",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 19229,
    "name": "Mapmarker29",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 19230,
    "name": "Mapmarker30",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 19231,
    "name": "Mapmarker31",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 19232,
    "name": "Mapmarker32",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 19233,
    "name": "Mapmarker33",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 19234,
    "name": "Mapmarker34",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 19235,
    "name": "Mapmarker35",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 19236,
    "name": "Mapmarker36",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 19237,
    "name": "Mapmarker37",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 19238,
    "name": "Mapmarker38",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 19239,
    "name": "Mapmarker39",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 19240,
    "name": "Mapmarker40",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 19241,
    "name": "Mapmarker41",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 19242,
    "name": "Mapmarker42",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 19243,
    "name": "Mapmarker43",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 19244,
    "name": "Mapmarker44",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 19245,
    "name": "Mapmarker45",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 19246,
    "name": "Mapmarker46",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 19247,
    "name": "Mapmarker47",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 19248,
    "name": "Mapmarker48",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 19249,
    "name": "Mapmarker49",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 19250,
    "name": "Mapmarker50",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 19251,
    "name": "Mapmarker51",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 19252,
    "name": "Mapmarker52",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 19253,
    "name": "Mapmarker53",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 19254,
    "name": "Mapmarker54",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 19255,
    "name": "Mapmarker55",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 19256,
    "name": "Mapmarker56",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 19257,
    "name": "Mapmarker57",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 19258,
    "name": "Mapmarker58",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 19259,
    "name": "Mapmarker59",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 19260,
    "name": "Mapmarker60",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 19261,
    "name": "Mapmarker61",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 19262,
    "name": "Mapmarker62",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 19263,
    "name": "Mapmarker63",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 19264,
    "name": "Mapmarker1A",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 19265,
    "name": "Mapmarker1B",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 19266,
    "name": "Mapmarker31A",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 19267,
    "name": "Mapmarker31B",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 19268,
    "name": "Mapmarker31C",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 19269,
    "name": "Mapmarker31D",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 19270,
    "name": "Mapmarkerfire1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 19271,
    "name": "Mapmarkerlight1",
    "txd": "samp",
    "category": "lighting",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 19272,
    "name": "Dmcage3",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      50.0,
      15.0,
      49.24
    ]
  },
  {
    "id": 19273,
    "name": "Keypadnondynamic",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.3,
      0.42,
      0.1
    ]
  },
  {
    "id": 19274,
    "name": "Hair5",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.33,
      0.32,
      0.3
    ]
  },
  {
    "id": 19277,
    "name": "Lifttype1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      5.2,
      2.79,
      1.27
    ]
  },
  {
    "id": 19278,
    "name": "Liftplatform1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      11.66,
      99.14,
      11.48
    ]
  },
  {
    "id": 19279,
    "name": "Lcsmalllight1",
    "txd": "samp",
    "category": "lighting",
    "dimensions": [
      0.67,
      0.49,
      0.42
    ]
  },
  {
    "id": 19280,
    "name": "Carrooflight1",
    "txd": "samp",
    "category": "lighting",
    "dimensions": [
      0.18,
      0.13,
      0.1
    ]
  },
  {
    "id": 19281,
    "name": "Pointlight1",
    "txd": "samp",
    "category": "lighting",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 19282,
    "name": "Pointlight2",
    "txd": "samp",
    "category": "lighting",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 19283,
    "name": "Pointlight3",
    "txd": "samp",
    "category": "lighting",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 19284,
    "name": "Pointlight4",
    "txd": "samp",
    "category": "lighting",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 19285,
    "name": "Pointlight5",
    "txd": "samp",
    "category": "lighting",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 19286,
    "name": "Pointlight6",
    "txd": "samp",
    "category": "lighting",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 19287,
    "name": "Pointlight7",
    "txd": "samp",
    "category": "lighting",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 19288,
    "name": "Pointlight8",
    "txd": "samp",
    "category": "lighting",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 19289,
    "name": "Pointlight9",
    "txd": "samp",
    "category": "lighting",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 19290,
    "name": "Pointlight10",
    "txd": "samp",
    "category": "lighting",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 19291,
    "name": "Pointlight11",
    "txd": "samp",
    "category": "lighting",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 19292,
    "name": "Pointlight12",
    "txd": "samp",
    "category": "lighting",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 19293,
    "name": "Pointlight13",
    "txd": "samp",
    "category": "lighting",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 19294,
    "name": "Pointlight14",
    "txd": "samp",
    "category": "lighting",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 19295,
    "name": "Pointlight15",
    "txd": "samp",
    "category": "lighting",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 19296,
    "name": "Pointlight16",
    "txd": "samp",
    "category": "lighting",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 19297,
    "name": "Pointlight17",
    "txd": "samp",
    "category": "lighting",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 19298,
    "name": "Pointlight18",
    "txd": "samp",
    "category": "lighting",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 19299,
    "name": "Pointlightmoon1",
    "txd": "samp",
    "category": "lighting",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 19300,
    "name": "Blankmodel",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 19301,
    "name": "Mp Sfpd Nocell",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      65.22,
      15.2,
      22.84
    ]
  },
  {
    "id": 19302,
    "name": "Pd Jail Door01",
    "txd": "samp",
    "category": "doors",
    "dimensions": [
      1.75,
      2.5,
      0.1
    ]
  },
  {
    "id": 19303,
    "name": "Pd Jail Door02",
    "txd": "samp",
    "category": "doors",
    "dimensions": [
      1.75,
      2.5,
      0.1
    ]
  },
  {
    "id": 19304,
    "name": "Pd Jail Door Top01",
    "txd": "samp",
    "category": "doors",
    "dimensions": [
      3.5,
      1.25,
      0.1
    ]
  },
  {
    "id": 19305,
    "name": "Sec Keypad2",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.3,
      0.42,
      0.1
    ]
  },
  {
    "id": 19306,
    "name": "Kmb Goflag2",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.93,
      1.0,
      0.1
    ]
  },
  {
    "id": 19307,
    "name": "Kmb Goflag3",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.93,
      1.0,
      0.1
    ]
  },
  {
    "id": 19308,
    "name": "Taxi01",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.17,
      0.27,
      0.9
    ]
  },
  {
    "id": 19309,
    "name": "Taxi02",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.17,
      0.27,
      0.9
    ]
  },
  {
    "id": 19310,
    "name": "Taxi03",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.17,
      0.27,
      0.9
    ]
  },
  {
    "id": 19311,
    "name": "Taxi04",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.17,
      0.27,
      0.9
    ]
  },
  {
    "id": 19312,
    "name": "A51Fencing",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      189.75,
      10.54,
      143.18
    ]
  },
  {
    "id": 19313,
    "name": "A51Fensin",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      14.06,
      6.72,
      0.15
    ]
  },
  {
    "id": 19314,
    "name": "Bullhorns01",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.12,
      1.78,
      0.38
    ]
  },
  {
    "id": 19315,
    "name": "Deer01",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.96,
      0.98,
      0.22
    ]
  },
  {
    "id": 19316,
    "name": "Ferriscagebit01",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      2.4,
      3.09,
      3.87
    ]
  },
  {
    "id": 19317,
    "name": "Bassguitar01",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.53,
      1.53,
      0.1
    ]
  },
  {
    "id": 19318,
    "name": "Flyingv01",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.53,
      1.41,
      0.1
    ]
  },
  {
    "id": 19319,
    "name": "Warlock01",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.54,
      1.4,
      0.1
    ]
  },
  {
    "id": 19320,
    "name": "Pumpkin01",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.7,
      0.68,
      0.75
    ]
  },
  {
    "id": 19321,
    "name": "Cuntainer",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      3.12,
      2.9,
      7.15
    ]
  },
  {
    "id": 19322,
    "name": "Mallb Law02",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      127.25,
      16.99,
      138.99
    ]
  },
  {
    "id": 19323,
    "name": "Lsmall Shop01",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      106.25,
      17.94,
      116.36
    ]
  },
  {
    "id": 19324,
    "name": "Kmb Atm1 2",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.73,
      1.96,
      0.66
    ]
  },
  {
    "id": 19325,
    "name": "Lsmall Window01",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      4.13,
      6.64
    ]
  },
  {
    "id": 19326,
    "name": "7 11 Sign01",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      1.32,
      1.26,
      0.1
    ]
  },
  {
    "id": 19327,
    "name": "7 11 Sign02",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      2.34,
      1.26,
      0.1
    ]
  },
  {
    "id": 19328,
    "name": "7 11 Sign03",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      1.31,
      2.1,
      0.1
    ]
  },
  {
    "id": 19329,
    "name": "7 11 Sign04",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      2.13,
      0.86,
      0.1
    ]
  },
  {
    "id": 19330,
    "name": "Fire Hat01",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.21,
      0.3,
      0.41
    ]
  },
  {
    "id": 19331,
    "name": "Fire Hat02",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.21,
      0.3,
      0.41
    ]
  },
  {
    "id": 19332,
    "name": "Hot Air Balloon01",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      23.89,
      29.09,
      23.53
    ]
  },
  {
    "id": 19333,
    "name": "Hot Air Balloon02",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      23.89,
      29.09,
      23.53
    ]
  },
  {
    "id": 19334,
    "name": "Hot Air Balloon03",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      23.89,
      29.09,
      23.53
    ]
  },
  {
    "id": 19335,
    "name": "Hot Air Balloon04",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      23.89,
      29.09,
      23.53
    ]
  },
  {
    "id": 19336,
    "name": "Hot Air Balloon05",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      23.89,
      29.09,
      23.53
    ]
  },
  {
    "id": 19337,
    "name": "Hot Air Balloon06",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      23.89,
      29.09,
      23.53
    ]
  },
  {
    "id": 19338,
    "name": "Hot Air Balloon07",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      23.89,
      29.09,
      23.53
    ]
  },
  {
    "id": 19339,
    "name": "Coffin01",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      2.51,
      0.71,
      1.08
    ]
  },
  {
    "id": 19340,
    "name": "Cslab01",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      88.99,
      7.5,
      173.94
    ]
  },
  {
    "id": 19341,
    "name": "Easter Egg01",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      1.15,
      1.43,
      1.17
    ]
  },
  {
    "id": 19342,
    "name": "Easter Egg02",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.79,
      0.99,
      0.81
    ]
  },
  {
    "id": 19343,
    "name": "Easter Egg03",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.79,
      0.99,
      0.81
    ]
  },
  {
    "id": 19344,
    "name": "Easter Egg04",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.28,
      0.35,
      0.29
    ]
  },
  {
    "id": 19345,
    "name": "Easter Egg05",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.28,
      0.35,
      0.29
    ]
  },
  {
    "id": 19346,
    "name": "Hotdog01",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.39
    ]
  },
  {
    "id": 19347,
    "name": "Badge01",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 19348,
    "name": "Cane01",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.97,
      0.1
    ]
  },
  {
    "id": 19349,
    "name": "Monocle01",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.12
    ]
  },
  {
    "id": 19350,
    "name": "Moustache01",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 19351,
    "name": "Moustache02",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 19352,
    "name": "Tophat01",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.33,
      0.13,
      0.33
    ]
  },
  {
    "id": 19353,
    "name": "Wall001",
    "txd": "all_walls",
    "category": "walls",
    "dimensions": [
      0.18,
      3.5,
      3.21
    ]
  },
  {
    "id": 19354,
    "name": "Wall002",
    "txd": "all_walls",
    "category": "walls",
    "dimensions": [
      0.18,
      3.5,
      3.21
    ]
  },
  {
    "id": 19355,
    "name": "Wall003",
    "txd": "all_walls",
    "category": "walls",
    "dimensions": [
      0.18,
      3.5,
      3.21
    ]
  },
  {
    "id": 19356,
    "name": "Wall004",
    "txd": "all_walls",
    "category": "walls",
    "dimensions": [
      0.18,
      3.5,
      3.21
    ]
  },
  {
    "id": 19357,
    "name": "Wall005",
    "txd": "all_walls",
    "category": "walls",
    "dimensions": [
      0.18,
      3.5,
      3.21
    ]
  },
  {
    "id": 19358,
    "name": "Wall006",
    "txd": "all_walls",
    "category": "walls",
    "dimensions": [
      0.18,
      3.5,
      3.21
    ]
  },
  {
    "id": 19359,
    "name": "Wall007",
    "txd": "all_walls",
    "category": "walls",
    "dimensions": [
      0.18,
      3.5,
      3.21
    ]
  },
  {
    "id": 19360,
    "name": "Wall008",
    "txd": "all_walls",
    "category": "walls",
    "dimensions": [
      0.18,
      3.5,
      3.21
    ]
  },
  {
    "id": 19361,
    "name": "Wall009",
    "txd": "all_walls",
    "category": "walls",
    "dimensions": [
      0.18,
      3.5,
      3.21
    ]
  },
  {
    "id": 19362,
    "name": "Wall010",
    "txd": "all_walls",
    "category": "walls",
    "dimensions": [
      0.18,
      3.5,
      3.21
    ]
  },
  {
    "id": 19363,
    "name": "Wall011",
    "txd": "all_walls",
    "category": "walls",
    "dimensions": [
      0.18,
      3.5,
      3.21
    ]
  },
  {
    "id": 19364,
    "name": "Wall012",
    "txd": "all_walls",
    "category": "walls",
    "dimensions": [
      0.18,
      3.5,
      3.21
    ]
  },
  {
    "id": 19365,
    "name": "Wall013",
    "txd": "all_walls",
    "category": "walls",
    "dimensions": [
      0.18,
      3.5,
      3.21
    ]
  },
  {
    "id": 19366,
    "name": "Wall014",
    "txd": "all_walls",
    "category": "walls",
    "dimensions": [
      0.18,
      3.5,
      3.21
    ]
  },
  {
    "id": 19367,
    "name": "Wall015",
    "txd": "all_walls",
    "category": "walls",
    "dimensions": [
      0.18,
      3.5,
      3.21
    ]
  },
  {
    "id": 19368,
    "name": "Wall016",
    "txd": "all_walls",
    "category": "walls",
    "dimensions": [
      0.18,
      3.5,
      3.21
    ]
  },
  {
    "id": 19369,
    "name": "Wall017",
    "txd": "all_walls",
    "category": "walls",
    "dimensions": [
      0.18,
      3.5,
      3.21
    ]
  },
  {
    "id": 19370,
    "name": "Wall018",
    "txd": "all_walls",
    "category": "walls",
    "dimensions": [
      0.18,
      3.5,
      3.21
    ]
  },
  {
    "id": 19371,
    "name": "Wall019",
    "txd": "all_walls",
    "category": "walls",
    "dimensions": [
      0.18,
      3.5,
      3.21
    ]
  },
  {
    "id": 19372,
    "name": "Wall020",
    "txd": "all_walls",
    "category": "walls",
    "dimensions": [
      0.18,
      3.5,
      3.21
    ]
  },
  {
    "id": 19373,
    "name": "Wall021",
    "txd": "all_walls",
    "category": "walls",
    "dimensions": [
      0.18,
      3.5,
      3.21
    ]
  },
  {
    "id": 19374,
    "name": "Wall022",
    "txd": "all_walls",
    "category": "walls",
    "dimensions": [
      0.18,
      3.5,
      3.21
    ]
  },
  {
    "id": 19375,
    "name": "Wall023",
    "txd": "all_walls",
    "category": "walls",
    "dimensions": [
      0.18,
      10.5,
      9.63
    ]
  },
  {
    "id": 19376,
    "name": "Wall024",
    "txd": "all_walls",
    "category": "walls",
    "dimensions": [
      0.18,
      10.5,
      9.63
    ]
  },
  {
    "id": 19377,
    "name": "Wall025",
    "txd": "all_walls",
    "category": "walls",
    "dimensions": [
      0.18,
      10.5,
      9.63
    ]
  },
  {
    "id": 19378,
    "name": "Wall026",
    "txd": "all_walls",
    "category": "walls",
    "dimensions": [
      0.18,
      10.5,
      9.63
    ]
  },
  {
    "id": 19379,
    "name": "Wall027",
    "txd": "all_walls",
    "category": "walls",
    "dimensions": [
      0.18,
      10.5,
      9.63
    ]
  },
  {
    "id": 19380,
    "name": "Wall028",
    "txd": "all_walls",
    "category": "walls",
    "dimensions": [
      0.18,
      10.5,
      9.63
    ]
  },
  {
    "id": 19381,
    "name": "Wall029",
    "txd": "all_walls",
    "category": "walls",
    "dimensions": [
      0.18,
      10.5,
      9.63
    ]
  },
  {
    "id": 19382,
    "name": "Wall030",
    "txd": "all_walls",
    "category": "walls",
    "dimensions": [
      0.18,
      10.5,
      9.63
    ]
  },
  {
    "id": 19383,
    "name": "Wall031",
    "txd": "all_walls",
    "category": "walls",
    "dimensions": [
      0.18,
      3.5,
      3.21
    ]
  },
  {
    "id": 19384,
    "name": "Wall032",
    "txd": "all_walls",
    "category": "walls",
    "dimensions": [
      0.18,
      3.5,
      3.21
    ]
  },
  {
    "id": 19385,
    "name": "Wall033",
    "txd": "all_walls",
    "category": "walls",
    "dimensions": [
      0.18,
      3.5,
      3.21
    ]
  },
  {
    "id": 19386,
    "name": "Wall034",
    "txd": "all_walls",
    "category": "walls",
    "dimensions": [
      0.18,
      3.5,
      3.21
    ]
  },
  {
    "id": 19387,
    "name": "Wall035",
    "txd": "all_walls",
    "category": "walls",
    "dimensions": [
      0.18,
      3.5,
      3.21
    ]
  },
  {
    "id": 19388,
    "name": "Wall036",
    "txd": "all_walls",
    "category": "walls",
    "dimensions": [
      0.18,
      3.5,
      3.21
    ]
  },
  {
    "id": 19389,
    "name": "Wall037",
    "txd": "all_walls",
    "category": "walls",
    "dimensions": [
      0.18,
      3.5,
      3.21
    ]
  },
  {
    "id": 19390,
    "name": "Wall038",
    "txd": "all_walls",
    "category": "walls",
    "dimensions": [
      0.18,
      3.5,
      3.21
    ]
  },
  {
    "id": 19391,
    "name": "Wall039",
    "txd": "all_walls",
    "category": "walls",
    "dimensions": [
      0.18,
      3.5,
      3.21
    ]
  },
  {
    "id": 19392,
    "name": "Wall040",
    "txd": "all_walls",
    "category": "walls",
    "dimensions": [
      0.18,
      3.5,
      3.21
    ]
  },
  {
    "id": 19393,
    "name": "Wall041",
    "txd": "all_walls",
    "category": "walls",
    "dimensions": [
      0.18,
      3.5,
      3.21
    ]
  },
  {
    "id": 19394,
    "name": "Wall042",
    "txd": "all_walls",
    "category": "walls",
    "dimensions": [
      0.18,
      3.5,
      3.21
    ]
  },
  {
    "id": 19395,
    "name": "Wall043",
    "txd": "all_walls",
    "category": "walls",
    "dimensions": [
      0.18,
      3.5,
      3.21
    ]
  },
  {
    "id": 19396,
    "name": "Wall044",
    "txd": "all_walls",
    "category": "walls",
    "dimensions": [
      0.18,
      3.5,
      3.21
    ]
  },
  {
    "id": 19397,
    "name": "Wall045",
    "txd": "all_walls",
    "category": "walls",
    "dimensions": [
      0.18,
      3.5,
      3.21
    ]
  },
  {
    "id": 19398,
    "name": "Wall046",
    "txd": "all_walls",
    "category": "walls",
    "dimensions": [
      0.18,
      3.5,
      3.21
    ]
  },
  {
    "id": 19399,
    "name": "Wall047",
    "txd": "all_walls",
    "category": "walls",
    "dimensions": [
      0.18,
      3.5,
      3.21
    ]
  },
  {
    "id": 19400,
    "name": "Wall048",
    "txd": "all_walls",
    "category": "walls",
    "dimensions": [
      0.18,
      3.5,
      3.21
    ]
  },
  {
    "id": 19401,
    "name": "Wall049",
    "txd": "all_walls",
    "category": "walls",
    "dimensions": [
      0.18,
      3.5,
      3.21
    ]
  },
  {
    "id": 19402,
    "name": "Wall050",
    "txd": "all_walls",
    "category": "walls",
    "dimensions": [
      0.18,
      3.5,
      3.21
    ]
  },
  {
    "id": 19403,
    "name": "Wall051",
    "txd": "all_walls",
    "category": "walls",
    "dimensions": [
      0.18,
      3.5,
      3.21
    ]
  },
  {
    "id": 19404,
    "name": "Wall052",
    "txd": "all_walls",
    "category": "walls",
    "dimensions": [
      0.18,
      3.5,
      3.21
    ]
  },
  {
    "id": 19405,
    "name": "Wall053",
    "txd": "all_walls",
    "category": "walls",
    "dimensions": [
      0.18,
      3.5,
      3.21
    ]
  },
  {
    "id": 19406,
    "name": "Wall054",
    "txd": "all_walls",
    "category": "walls",
    "dimensions": [
      0.18,
      3.5,
      3.21
    ]
  },
  {
    "id": 19407,
    "name": "Wall055",
    "txd": "all_walls",
    "category": "walls",
    "dimensions": [
      0.18,
      3.5,
      3.21
    ]
  },
  {
    "id": 19408,
    "name": "Wall056",
    "txd": "all_walls",
    "category": "walls",
    "dimensions": [
      0.18,
      3.5,
      3.21
    ]
  },
  {
    "id": 19409,
    "name": "Wall057",
    "txd": "all_walls",
    "category": "walls",
    "dimensions": [
      0.18,
      3.5,
      3.21
    ]
  },
  {
    "id": 19410,
    "name": "Wall058",
    "txd": "all_walls",
    "category": "walls",
    "dimensions": [
      0.18,
      3.5,
      3.21
    ]
  },
  {
    "id": 19411,
    "name": "Wall059",
    "txd": "all_walls",
    "category": "walls",
    "dimensions": [
      0.18,
      3.5,
      3.21
    ]
  },
  {
    "id": 19412,
    "name": "Wall060",
    "txd": "all_walls",
    "category": "walls",
    "dimensions": [
      0.18,
      3.5,
      3.21
    ]
  },
  {
    "id": 19413,
    "name": "Wall061",
    "txd": "all_walls",
    "category": "walls",
    "dimensions": [
      0.18,
      3.5,
      3.21
    ]
  },
  {
    "id": 19414,
    "name": "Wall062",
    "txd": "all_walls",
    "category": "walls",
    "dimensions": [
      0.18,
      3.5,
      3.21
    ]
  },
  {
    "id": 19415,
    "name": "Wall063",
    "txd": "all_walls",
    "category": "walls",
    "dimensions": [
      0.18,
      3.5,
      3.21
    ]
  },
  {
    "id": 19416,
    "name": "Wall064",
    "txd": "all_walls",
    "category": "walls",
    "dimensions": [
      0.18,
      3.5,
      3.21
    ]
  },
  {
    "id": 19417,
    "name": "Wall065",
    "txd": "all_walls",
    "category": "walls",
    "dimensions": [
      0.18,
      3.5,
      3.21
    ]
  },
  {
    "id": 19418,
    "name": "Handcuffs01",
    "txd": "all_walls",
    "category": "walls",
    "dimensions": [
      0.18,
      0.1,
      0.1
    ]
  },
  {
    "id": 19419,
    "name": "Police Lights01",
    "txd": "all_walls",
    "category": "walls",
    "dimensions": [
      1.61,
      0.16,
      0.28
    ]
  },
  {
    "id": 19420,
    "name": "Police Lights02",
    "txd": "all_walls",
    "category": "walls",
    "dimensions": [
      1.61,
      0.16,
      0.28
    ]
  },
  {
    "id": 19421,
    "name": "Headphones01",
    "txd": "all_walls",
    "category": "walls",
    "dimensions": [
      0.19,
      0.1,
      0.19
    ]
  },
  {
    "id": 19422,
    "name": "Headphones02",
    "txd": "all_walls",
    "category": "walls",
    "dimensions": [
      0.19,
      0.1,
      0.19
    ]
  },
  {
    "id": 19423,
    "name": "Headphones03",
    "txd": "all_walls",
    "category": "walls",
    "dimensions": [
      0.19,
      0.1,
      0.19
    ]
  },
  {
    "id": 19424,
    "name": "Headphones04",
    "txd": "all_walls",
    "category": "walls",
    "dimensions": [
      0.19,
      0.1,
      0.19
    ]
  },
  {
    "id": 19425,
    "name": "Speed Bump01",
    "txd": "all_walls",
    "category": "walls",
    "dimensions": [
      3.3,
      0.1,
      0.54
    ]
  },
  {
    "id": 19426,
    "name": "Wall066",
    "txd": "all_walls",
    "category": "walls",
    "dimensions": [
      0.18,
      3.5,
      1.61
    ]
  },
  {
    "id": 19427,
    "name": "Wall067",
    "txd": "all_walls",
    "category": "walls",
    "dimensions": [
      0.18,
      3.5,
      1.61
    ]
  },
  {
    "id": 19428,
    "name": "Wall068",
    "txd": "all_walls",
    "category": "walls",
    "dimensions": [
      0.18,
      3.5,
      1.61
    ]
  },
  {
    "id": 19429,
    "name": "Wall069",
    "txd": "all_walls",
    "category": "walls",
    "dimensions": [
      0.18,
      3.5,
      1.61
    ]
  },
  {
    "id": 19430,
    "name": "Wall070",
    "txd": "all_walls",
    "category": "walls",
    "dimensions": [
      0.18,
      3.5,
      1.61
    ]
  },
  {
    "id": 19431,
    "name": "Wall071",
    "txd": "all_walls",
    "category": "walls",
    "dimensions": [
      0.18,
      3.5,
      1.61
    ]
  },
  {
    "id": 19432,
    "name": "Wall072",
    "txd": "all_walls",
    "category": "walls",
    "dimensions": [
      0.18,
      3.5,
      1.61
    ]
  },
  {
    "id": 19433,
    "name": "Wall073",
    "txd": "all_walls",
    "category": "walls",
    "dimensions": [
      0.18,
      3.5,
      1.61
    ]
  },
  {
    "id": 19434,
    "name": "Wall074",
    "txd": "all_walls",
    "category": "walls",
    "dimensions": [
      0.18,
      3.5,
      1.61
    ]
  },
  {
    "id": 19435,
    "name": "Wall075",
    "txd": "all_walls",
    "category": "walls",
    "dimensions": [
      0.18,
      3.5,
      1.61
    ]
  },
  {
    "id": 19436,
    "name": "Wall076",
    "txd": "all_walls",
    "category": "walls",
    "dimensions": [
      0.18,
      3.5,
      1.61
    ]
  },
  {
    "id": 19437,
    "name": "Wall077",
    "txd": "all_walls",
    "category": "walls",
    "dimensions": [
      0.18,
      3.5,
      1.61
    ]
  },
  {
    "id": 19438,
    "name": "Wall078",
    "txd": "all_walls",
    "category": "walls",
    "dimensions": [
      0.18,
      3.5,
      1.61
    ]
  },
  {
    "id": 19439,
    "name": "Wall079",
    "txd": "all_walls",
    "category": "walls",
    "dimensions": [
      0.18,
      3.5,
      1.61
    ]
  },
  {
    "id": 19440,
    "name": "Wall080",
    "txd": "all_walls",
    "category": "walls",
    "dimensions": [
      0.18,
      3.5,
      1.61
    ]
  },
  {
    "id": 19441,
    "name": "Wall081",
    "txd": "all_walls",
    "category": "walls",
    "dimensions": [
      0.18,
      3.5,
      1.61
    ]
  },
  {
    "id": 19442,
    "name": "Wall082",
    "txd": "all_walls",
    "category": "walls",
    "dimensions": [
      0.18,
      3.5,
      1.61
    ]
  },
  {
    "id": 19443,
    "name": "Wall083",
    "txd": "all_walls",
    "category": "walls",
    "dimensions": [
      0.18,
      3.5,
      1.61
    ]
  },
  {
    "id": 19444,
    "name": "Wall084",
    "txd": "all_walls",
    "category": "walls",
    "dimensions": [
      0.18,
      3.5,
      1.61
    ]
  },
  {
    "id": 19445,
    "name": "Wall085",
    "txd": "all_walls",
    "category": "walls",
    "dimensions": [
      0.18,
      3.5,
      9.63
    ]
  },
  {
    "id": 19446,
    "name": "Wall086",
    "txd": "all_walls",
    "category": "walls",
    "dimensions": [
      0.18,
      3.5,
      9.63
    ]
  },
  {
    "id": 19447,
    "name": "Wall087",
    "txd": "all_walls",
    "category": "walls",
    "dimensions": [
      0.18,
      3.5,
      9.63
    ]
  },
  {
    "id": 19448,
    "name": "Wall088",
    "txd": "all_walls",
    "category": "walls",
    "dimensions": [
      0.18,
      3.5,
      9.63
    ]
  },
  {
    "id": 19449,
    "name": "Wall089",
    "txd": "all_walls",
    "category": "walls",
    "dimensions": [
      0.18,
      3.5,
      9.63
    ]
  },
  {
    "id": 19450,
    "name": "Wall090",
    "txd": "all_walls",
    "category": "walls",
    "dimensions": [
      0.18,
      3.5,
      9.63
    ]
  },
  {
    "id": 19451,
    "name": "Wall091",
    "txd": "all_walls",
    "category": "walls",
    "dimensions": [
      0.18,
      3.5,
      9.63
    ]
  },
  {
    "id": 19452,
    "name": "Wall092",
    "txd": "all_walls",
    "category": "walls",
    "dimensions": [
      0.18,
      3.5,
      9.63
    ]
  },
  {
    "id": 19453,
    "name": "Wall093",
    "txd": "all_walls",
    "category": "walls",
    "dimensions": [
      0.18,
      3.5,
      9.63
    ]
  },
  {
    "id": 19454,
    "name": "Wall094",
    "txd": "all_walls",
    "category": "walls",
    "dimensions": [
      0.18,
      3.5,
      9.63
    ]
  },
  {
    "id": 19455,
    "name": "Wall095",
    "txd": "all_walls",
    "category": "walls",
    "dimensions": [
      0.18,
      3.5,
      9.63
    ]
  },
  {
    "id": 19456,
    "name": "Wall096",
    "txd": "all_walls",
    "category": "walls",
    "dimensions": [
      0.18,
      3.5,
      9.63
    ]
  },
  {
    "id": 19457,
    "name": "Wall097",
    "txd": "all_walls",
    "category": "walls",
    "dimensions": [
      0.18,
      3.5,
      9.63
    ]
  },
  {
    "id": 19458,
    "name": "Wall098",
    "txd": "all_walls",
    "category": "walls",
    "dimensions": [
      0.18,
      3.5,
      9.63
    ]
  },
  {
    "id": 19459,
    "name": "Wall099",
    "txd": "all_walls",
    "category": "walls",
    "dimensions": [
      0.18,
      3.5,
      9.63
    ]
  },
  {
    "id": 19460,
    "name": "Wall100",
    "txd": "all_walls",
    "category": "walls",
    "dimensions": [
      0.18,
      3.5,
      9.63
    ]
  },
  {
    "id": 19461,
    "name": "Wall101",
    "txd": "all_walls",
    "category": "walls",
    "dimensions": [
      0.18,
      3.5,
      9.63
    ]
  },
  {
    "id": 19462,
    "name": "Wall102",
    "txd": "all_walls",
    "category": "walls",
    "dimensions": [
      0.18,
      3.5,
      9.63
    ]
  },
  {
    "id": 19463,
    "name": "Wall103",
    "txd": "all_walls",
    "category": "walls",
    "dimensions": [
      0.18,
      3.5,
      9.63
    ]
  },
  {
    "id": 19464,
    "name": "Wall104",
    "txd": "all_walls",
    "category": "walls",
    "dimensions": [
      0.26,
      5.1,
      5.94
    ]
  },
  {
    "id": 19465,
    "name": "Wall105",
    "txd": "all_walls",
    "category": "walls",
    "dimensions": [
      0.26,
      5.1,
      5.94
    ]
  },
  {
    "id": 19466,
    "name": "Window001",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      1.94,
      2.24
    ]
  },
  {
    "id": 19467,
    "name": "Vehicle Barrier01",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      4.51,
      0.59,
      0.78
    ]
  },
  {
    "id": 19468,
    "name": "Bucket01",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.29,
      0.32,
      0.29
    ]
  },
  {
    "id": 19469,
    "name": "Scarf01",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.11,
      0.14,
      0.14
    ]
  },
  {
    "id": 19470,
    "name": "Forsale01",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      1.02,
      0.66
    ]
  },
  {
    "id": 19471,
    "name": "Forsale02",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      1.34,
      1.04
    ]
  },
  {
    "id": 19472,
    "name": "Gasmask01",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.24,
      0.14,
      0.16
    ]
  },
  {
    "id": 19473,
    "name": "Grassplant01",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      1.93,
      1.99,
      1.89
    ]
  },
  {
    "id": 19474,
    "name": "Pokertable01",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      1.82,
      1.12,
      3.13
    ]
  },
  {
    "id": 19475,
    "name": "Plane001",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.4,
      0.47
    ]
  },
  {
    "id": 19476,
    "name": "Plane002",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.24,
      1.03
    ]
  },
  {
    "id": 19477,
    "name": "Plane003",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      1.4,
      2.78
    ]
  },
  {
    "id": 19478,
    "name": "Plane004",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.2,
      0.2
    ]
  },
  {
    "id": 19479,
    "name": "Plane005",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      6.56,
      14.8
    ]
  },
  {
    "id": 19480,
    "name": "Plane006",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      5.74,
      21.39
    ]
  },
  {
    "id": 19481,
    "name": "Plane007",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      11.79,
      37.35
    ]
  },
  {
    "id": 19482,
    "name": "Plane008",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      2.71,
      5.6
    ]
  },
  {
    "id": 19483,
    "name": "Plane009",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      1.35,
      2.54
    ]
  },
  {
    "id": 19484,
    "name": "Landbit01 01",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      131.87,
      20.83,
      82.07
    ]
  },
  {
    "id": 19485,
    "name": "Groundbit84 Sfs 01",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      164.27,
      19.1,
      232.59
    ]
  },
  {
    "id": 19486,
    "name": "Sfharryplums1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      32.39,
      6.55,
      17.61
    ]
  },
  {
    "id": 19487,
    "name": "Tophat02",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.33,
      0.13,
      0.33
    ]
  },
  {
    "id": 19488,
    "name": "Hatbowler6",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.3,
      0.14,
      0.21
    ]
  },
  {
    "id": 19489,
    "name": "Sfhouse1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      14.11,
      8.57,
      9.98
    ]
  },
  {
    "id": 19490,
    "name": "Sfhouse1Int",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      13.21,
      5.68,
      9.77
    ]
  },
  {
    "id": 19491,
    "name": "Sfhouse2",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      13.03,
      11.63,
      10.02
    ]
  },
  {
    "id": 19492,
    "name": "Sfhouse2Int",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      12.33,
      5.65,
      9.69
    ]
  },
  {
    "id": 19493,
    "name": "Sfhouse3",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      11.51,
      11.41,
      8.58
    ]
  },
  {
    "id": 19494,
    "name": "Sfhouse3Int",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      10.71,
      5.87,
      8.32
    ]
  },
  {
    "id": 19495,
    "name": "Sfhouse4",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      12.11,
      10.79,
      9.98
    ]
  },
  {
    "id": 19496,
    "name": "Sfhouse4Int",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      11.84,
      5.56,
      9.77
    ]
  },
  {
    "id": 19497,
    "name": "Lvhouse1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      30.06,
      6.07,
      26.67
    ]
  },
  {
    "id": 19498,
    "name": "Lvhouse1Int",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      13.99,
      2.94,
      21.6
    ]
  },
  {
    "id": 19499,
    "name": "Lvhouse2",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      18.69,
      6.2,
      29.04
    ]
  },
  {
    "id": 19500,
    "name": "Lvhouse2Int",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      12.96,
      3.21,
      16.21
    ]
  },
  {
    "id": 19501,
    "name": "Lvhouse3",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      18.51,
      6.04,
      28.94
    ]
  },
  {
    "id": 19502,
    "name": "Lvhouse3Int",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      14.22,
      3.02,
      16.24
    ]
  },
  {
    "id": 19503,
    "name": "Lvhouse4",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      31.22,
      5.78,
      28.94
    ]
  },
  {
    "id": 19504,
    "name": "Lvhouse4Int",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      25.71,
      3.59,
      17.07
    ]
  },
  {
    "id": 19505,
    "name": "Lshouse1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      17.13,
      7.69,
      13.8
    ]
  },
  {
    "id": 19506,
    "name": "Lshouse1Int",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      13.8,
      3.0,
      11.73
    ]
  },
  {
    "id": 19507,
    "name": "Lshouse2",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      14.19,
      5.5,
      14.45
    ]
  },
  {
    "id": 19508,
    "name": "Lshouse2Int",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      11.42,
      3.0,
      12.35
    ]
  },
  {
    "id": 19509,
    "name": "Lshouse3",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      10.81,
      5.46,
      13.03
    ]
  },
  {
    "id": 19510,
    "name": "Lshouse3Int",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      9.54,
      3.36,
      9.46
    ]
  },
  {
    "id": 19511,
    "name": "Lshouse4",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      10.55,
      5.91,
      14.54
    ]
  },
  {
    "id": 19512,
    "name": "Lshouse4Int",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      10.16,
      2.98,
      12.0
    ]
  },
  {
    "id": 19513,
    "name": "Whitephone",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.16
    ]
  },
  {
    "id": 19514,
    "name": "Swathgrey",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.18,
      0.18,
      0.23
    ]
  },
  {
    "id": 19515,
    "name": "Swatagrey",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.55,
      0.42,
      0.41
    ]
  },
  {
    "id": 19516,
    "name": "Hair2 Nc",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.24,
      0.25,
      0.25
    ]
  },
  {
    "id": 19517,
    "name": "Hair3 Nc",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.2,
      0.16,
      0.21
    ]
  },
  {
    "id": 19518,
    "name": "Hair5 Nc",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.33,
      0.32,
      0.3
    ]
  },
  {
    "id": 19519,
    "name": "Hair1 Nc",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.23,
      0.31,
      0.29
    ]
  },
  {
    "id": 19520,
    "name": "Pilothat01",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.15,
      0.2,
      0.26
    ]
  },
  {
    "id": 19521,
    "name": "Policehat01",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.15,
      0.2,
      0.26
    ]
  },
  {
    "id": 19522,
    "name": "Property Red",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.3,
      0.28,
      0.1
    ]
  },
  {
    "id": 19523,
    "name": "Property Orange",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.3,
      0.28,
      0.1
    ]
  },
  {
    "id": 19524,
    "name": "Property Yellow",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.3,
      0.28,
      0.1
    ]
  },
  {
    "id": 19525,
    "name": "Weddingcake1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.55,
      0.71,
      0.55
    ]
  },
  {
    "id": 19526,
    "name": "Atmfixed",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.78,
      1.7,
      0.92
    ]
  },
  {
    "id": 19527,
    "name": "Cauldron1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.95,
      0.9,
      0.95
    ]
  },
  {
    "id": 19528,
    "name": "Witcheshat1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.34,
      0.45,
      0.45
    ]
  },
  {
    "id": 19529,
    "name": "Plane125X125Grass1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      125.0,
      0.1,
      125.0
    ]
  },
  {
    "id": 19530,
    "name": "Plane125X125Sand1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      125.0,
      0.1,
      125.0
    ]
  },
  {
    "id": 19531,
    "name": "Plane125X125Conc1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      125.0,
      0.1,
      125.0
    ]
  },
  {
    "id": 19532,
    "name": "15X125Road1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      15.0,
      0.2,
      125.0
    ]
  },
  {
    "id": 19533,
    "name": "15X62 5Road1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      15.0,
      0.2,
      62.5
    ]
  },
  {
    "id": 19534,
    "name": "15X15Roadinters1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      15.0,
      0.2,
      15.0
    ]
  },
  {
    "id": 19535,
    "name": "15X15Roadinters2",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      15.0,
      0.2,
      15.0
    ]
  },
  {
    "id": 19536,
    "name": "Plane62 5X125Grass1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      125.0,
      0.1,
      62.5
    ]
  },
  {
    "id": 19537,
    "name": "Plane62 5X125Sand1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      125.0,
      0.1,
      62.5
    ]
  },
  {
    "id": 19538,
    "name": "Plane62 5X125Conc1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      125.0,
      0.1,
      62.5
    ]
  },
  {
    "id": 19539,
    "name": "Edge62 5X62 5Grass1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      62.5,
      20.23,
      62.5
    ]
  },
  {
    "id": 19540,
    "name": "Edge62 5X62 5Grass2",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      62.5,
      20.0,
      62.5
    ]
  },
  {
    "id": 19541,
    "name": "Edge62 5X15Grass1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      62.5,
      20.0,
      15.0
    ]
  },
  {
    "id": 19542,
    "name": "Edge62 5X125Grass1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      62.5,
      20.24,
      125.0
    ]
  },
  {
    "id": 19543,
    "name": "Plane62 5X15Grass1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      15.0,
      0.1,
      62.5
    ]
  },
  {
    "id": 19544,
    "name": "Plane62 5X15Sand1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      15.0,
      0.1,
      62.5
    ]
  },
  {
    "id": 19545,
    "name": "Plane62 5X15Conc1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      15.0,
      0.1,
      62.5
    ]
  },
  {
    "id": 19546,
    "name": "Edge62 5X62 5Grass3",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      62.5,
      20.0,
      62.5
    ]
  },
  {
    "id": 19547,
    "name": "Hill125X125Grass1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      125.0,
      13.43,
      125.0
    ]
  },
  {
    "id": 19548,
    "name": "Hill125X125Sand1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      125.0,
      19.39,
      125.0
    ]
  },
  {
    "id": 19549,
    "name": "Edge62 5X32 5Grass1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      62.5,
      20.0,
      32.5
    ]
  },
  {
    "id": 19550,
    "name": "Plane125X125Grass2",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      125.0,
      0.1,
      125.0
    ]
  },
  {
    "id": 19551,
    "name": "Plane125X125Sand2",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      125.0,
      0.1,
      125.0
    ]
  },
  {
    "id": 19552,
    "name": "Plane125X125Conc2",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      125.0,
      0.1,
      125.0
    ]
  },
  {
    "id": 19553,
    "name": "Strawhat1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.16,
      0.29,
      0.35
    ]
  },
  {
    "id": 19554,
    "name": "Beanie1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.19,
      0.14,
      0.19
    ]
  },
  {
    "id": 19555,
    "name": "Boxingglovel",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.16,
      0.22,
      0.12
    ]
  },
  {
    "id": 19556,
    "name": "Boxingglover",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.16,
      0.22,
      0.12
    ]
  },
  {
    "id": 19557,
    "name": "Sexymask1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.2,
      0.27,
      0.2
    ]
  },
  {
    "id": 19558,
    "name": "Pizzahat1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.14,
      0.16,
      0.28
    ]
  },
  {
    "id": 19559,
    "name": "Hikerbackpack1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.48,
      0.78,
      0.41
    ]
  },
  {
    "id": 19560,
    "name": "Meattray1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.34,
      0.1,
      0.17
    ]
  },
  {
    "id": 19561,
    "name": "Cerealbox1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.28,
      0.41,
      0.11
    ]
  },
  {
    "id": 19562,
    "name": "Cerealbox2",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.28,
      0.41,
      0.11
    ]
  },
  {
    "id": 19563,
    "name": "Juicebox1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.16,
      0.27,
      0.1
    ]
  },
  {
    "id": 19564,
    "name": "Juicebox2",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.16,
      0.27,
      0.1
    ]
  },
  {
    "id": 19565,
    "name": "Icecreambarsbox1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.48,
      0.27,
      0.1
    ]
  },
  {
    "id": 19566,
    "name": "Fishfingersbox1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.48,
      0.27,
      0.1
    ]
  },
  {
    "id": 19567,
    "name": "Icecreamcontainer1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.34,
      0.15,
      0.23
    ]
  },
  {
    "id": 19568,
    "name": "Icecreamcontainer2",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.34,
      0.15,
      0.23
    ]
  },
  {
    "id": 19569,
    "name": "Milkcarton1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.12,
      0.23,
      0.13
    ]
  },
  {
    "id": 19570,
    "name": "Milkbottle1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.14,
      0.33,
      0.13
    ]
  },
  {
    "id": 19571,
    "name": "Pizzabox1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.4,
      0.4,
      0.1
    ]
  },
  {
    "id": 19572,
    "name": "Pisshbox1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.41,
      0.33,
      0.3
    ]
  },
  {
    "id": 19573,
    "name": "Briquettesbag1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.36,
      0.59,
      0.17
    ]
  },
  {
    "id": 19574,
    "name": "Orange1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 19575,
    "name": "Apple1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 19576,
    "name": "Apple2",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 19577,
    "name": "Tomato1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 19578,
    "name": "Banana1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.3,
      0.1,
      0.12
    ]
  },
  {
    "id": 19579,
    "name": "Breadloaf1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.29,
      0.16,
      0.13
    ]
  },
  {
    "id": 19580,
    "name": "Pizza1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.43,
      0.1,
      0.41
    ]
  },
  {
    "id": 19581,
    "name": "Marcosfryingpan1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.41,
      0.1,
      0.77
    ]
  },
  {
    "id": 19582,
    "name": "Marcossteak1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.16,
      0.1,
      0.29
    ]
  },
  {
    "id": 19583,
    "name": "Marcosknife1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.52
    ]
  },
  {
    "id": 19584,
    "name": "Marcossaucepan1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.29,
      0.18,
      0.49
    ]
  },
  {
    "id": 19585,
    "name": "Marcospan1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.3,
      0.21,
      0.44
    ]
  },
  {
    "id": 19586,
    "name": "Marcosspatula1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.65
    ]
  },
  {
    "id": 19587,
    "name": "Plastictray1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      1.26,
      0.24,
      0.75
    ]
  },
  {
    "id": 19588,
    "name": "Footbridge1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      17.2,
      3.8,
      2.99
    ]
  },
  {
    "id": 19589,
    "name": "Rubbishskipempty1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      3.86,
      1.7,
      2.37
    ]
  },
  {
    "id": 19590,
    "name": "Wooziessword1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.23,
      0.8
    ]
  },
  {
    "id": 19591,
    "name": "Woozieshandfan1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.65,
      0.37,
      0.1
    ]
  },
  {
    "id": 19592,
    "name": "Shopbasket1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.46,
      0.49,
      0.64
    ]
  },
  {
    "id": 19593,
    "name": "Zombotechbuilding1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      88.26,
      113.05,
      85.83
    ]
  },
  {
    "id": 19594,
    "name": "Zombotechlab1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      10.8,
      5.91,
      48.03
    ]
  },
  {
    "id": 19595,
    "name": "Lsappartments1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      83.38,
      109.62,
      44.21
    ]
  },
  {
    "id": 19597,
    "name": "Lsbeachsideinsides",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      43.82,
      68.16,
      35.72
    ]
  },
  {
    "id": 19598,
    "name": "Sfbuilding1Outside",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      24.36,
      10.09,
      15.93
    ]
  },
  {
    "id": 19599,
    "name": "Sfbuilding1Inside",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      19.8,
      9.88,
      14.13
    ]
  },
  {
    "id": 19600,
    "name": "Sfbuilding1Land",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      43.82,
      7.88,
      33.0
    ]
  },
  {
    "id": 19601,
    "name": "Snowplow1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      3.35,
      0.79,
      0.96
    ]
  },
  {
    "id": 19602,
    "name": "Landmine1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.24,
      0.11,
      0.28
    ]
  },
  {
    "id": 19603,
    "name": "Waterplane1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      5.0,
      0.1,
      5.0
    ]
  },
  {
    "id": 19604,
    "name": "Waterplane2",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      5.0,
      0.1,
      10.0
    ]
  },
  {
    "id": 19605,
    "name": "Enexmarker4-2",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      1.2,
      1.94,
      1.2
    ]
  },
  {
    "id": 19606,
    "name": "Enexmarker4-3",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      1.2,
      1.94,
      1.2
    ]
  },
  {
    "id": 19607,
    "name": "Enexmarker4-4",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      1.2,
      1.94,
      1.2
    ]
  },
  {
    "id": 19608,
    "name": "Woodenstage1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      8.5,
      3.31,
      4.82
    ]
  },
  {
    "id": 19609,
    "name": "Drumkit1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      2.46,
      1.45,
      1.58
    ]
  },
  {
    "id": 19610,
    "name": "Microphone1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.29
    ]
  },
  {
    "id": 19611,
    "name": "Microphonestand1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.41,
      1.64,
      0.41
    ]
  },
  {
    "id": 19612,
    "name": "Guitaramp1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.47,
      0.2,
      0.44
    ]
  },
  {
    "id": 19613,
    "name": "Guitaramp2",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.74,
      0.73,
      0.69
    ]
  },
  {
    "id": 19614,
    "name": "Guitaramp3",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.61,
      0.6,
      0.36
    ]
  },
  {
    "id": 19615,
    "name": "Guitaramp4",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.53,
      0.23,
      0.31
    ]
  },
  {
    "id": 19616,
    "name": "Guitaramp5",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.8,
      1.25,
      0.38
    ]
  },
  {
    "id": 19617,
    "name": "Goldrecord1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.68,
      0.88,
      0.1
    ]
  },
  {
    "id": 19618,
    "name": "Safe1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.86,
      0.94,
      0.67
    ]
  },
  {
    "id": 19619,
    "name": "Safedoor1",
    "txd": "samp",
    "category": "doors",
    "dimensions": [
      0.85,
      0.83,
      0.18
    ]
  },
  {
    "id": 19620,
    "name": "Lightbar1",
    "txd": "samp",
    "category": "lighting",
    "dimensions": [
      1.25,
      0.22,
      0.24
    ]
  },
  {
    "id": 19621,
    "name": "Oilcan1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.12,
      0.26,
      0.28
    ]
  },
  {
    "id": 19622,
    "name": "Broom1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.53,
      1.35,
      0.11
    ]
  },
  {
    "id": 19623,
    "name": "Camera1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.23,
      0.31,
      0.16
    ]
  },
  {
    "id": 19624,
    "name": "Case1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.57,
      0.43,
      0.19
    ]
  },
  {
    "id": 19625,
    "name": "Ciggy1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 19626,
    "name": "Spade1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.19,
      1.26,
      0.1
    ]
  },
  {
    "id": 19627,
    "name": "Wrench1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.23,
      0.1,
      0.1
    ]
  },
  {
    "id": 19628,
    "name": "Mroadbend90Banked1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      58.13,
      10.92,
      58.93
    ]
  },
  {
    "id": 19629,
    "name": "Mroadbend90Banked2",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      58.13,
      10.92,
      58.93
    ]
  },
  {
    "id": 19630,
    "name": "Fish1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.32,
      0.17,
      0.1
    ]
  },
  {
    "id": 19631,
    "name": "Sledgehammer1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.2,
      0.91
    ]
  },
  {
    "id": 19632,
    "name": "Firewood1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.53,
      0.25,
      0.34
    ]
  },
  {
    "id": 19633,
    "name": "Ramp360Degree1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      21.75,
      4.3,
      21.75
    ]
  },
  {
    "id": 19634,
    "name": "Ramp360Degree2",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      43.1,
      20.32,
      43.1
    ]
  },
  {
    "id": 19635,
    "name": "Ramp360Degree3",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      43.1,
      12.4,
      43.1
    ]
  },
  {
    "id": 19636,
    "name": "Redapplescrate1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.56,
      0.17,
      0.82
    ]
  },
  {
    "id": 19637,
    "name": "Greenapplescrate1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.56,
      0.17,
      0.82
    ]
  },
  {
    "id": 19638,
    "name": "Orangescrate1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.56,
      0.17,
      0.82
    ]
  },
  {
    "id": 19639,
    "name": "Emptycrate1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.56,
      0.17,
      0.82
    ]
  },
  {
    "id": 19640,
    "name": "Emptyshopshelf1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      1.97,
      2.13,
      0.97
    ]
  },
  {
    "id": 19641,
    "name": "Fencesection1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      8.0,
      5.0,
      0.18
    ]
  },
  {
    "id": 19642,
    "name": "Tubeseg10M1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      10.0,
      5.26,
      32.98
    ]
  },
  {
    "id": 19643,
    "name": "Tubeseg10M2A",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      10.0,
      5.26,
      32.98
    ]
  },
  {
    "id": 19644,
    "name": "Tubeseg10M2B",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      10.0,
      5.26,
      32.98
    ]
  },
  {
    "id": 19645,
    "name": "Tubeseg25M1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      25.0,
      9.3,
      21.55
    ]
  },
  {
    "id": 19646,
    "name": "Tubehalf10M1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      10.0,
      5.5,
      10.83
    ]
  },
  {
    "id": 19647,
    "name": "Tubehalf10Mjoin1A",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      10.0,
      5.5,
      27.95
    ]
  },
  {
    "id": 19648,
    "name": "Tubehalf10Mjoin1B",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      10.0,
      5.5,
      27.95
    ]
  },
  {
    "id": 19649,
    "name": "Tubehalf50M1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      50.0,
      5.5,
      10.83
    ]
  },
  {
    "id": 19650,
    "name": "Tubeflat25X25M1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      25.0,
      0.5,
      25.0
    ]
  },
  {
    "id": 19651,
    "name": "Tubehalfspiral1A",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      42.66,
      25.5,
      42.66
    ]
  },
  {
    "id": 19652,
    "name": "Tubehalfspiral1B",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      42.66,
      25.5,
      42.66
    ]
  },
  {
    "id": 19653,
    "name": "Tubehalfspiral2A",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      42.66,
      15.5,
      42.66
    ]
  },
  {
    "id": 19654,
    "name": "Tubehalfspiral2B",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      42.66,
      15.5,
      42.66
    ]
  },
  {
    "id": 19655,
    "name": "Tubehalfspiral3A",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      21.33,
      15.5,
      42.66
    ]
  },
  {
    "id": 19656,
    "name": "Tubehalfspiral3B",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      21.33,
      15.5,
      42.66
    ]
  },
  {
    "id": 19657,
    "name": "Tubehalfspiral4A",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      21.33,
      10.5,
      42.66
    ]
  },
  {
    "id": 19658,
    "name": "Tubehalfspiral4B",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      21.33,
      10.5,
      42.66
    ]
  },
  {
    "id": 19659,
    "name": "Tubehalf180Bend1A",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      21.33,
      5.5,
      42.66
    ]
  },
  {
    "id": 19660,
    "name": "Tubehalf180Bend1B",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      21.33,
      5.5,
      42.66
    ]
  },
  {
    "id": 19661,
    "name": "Tubehalf90Bend1A",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      21.33,
      5.5,
      21.33
    ]
  },
  {
    "id": 19662,
    "name": "Tubehalf90Bend1B",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      21.33,
      5.5,
      21.33
    ]
  },
  {
    "id": 19663,
    "name": "Tubehalf50Mdip1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      50.0,
      10.0,
      10.83
    ]
  },
  {
    "id": 19664,
    "name": "Tubehalf50Mbump1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      50.0,
      10.0,
      10.83
    ]
  },
  {
    "id": 19665,
    "name": "Tubehalfloop1A",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      31.56,
      50.22,
      10.83
    ]
  },
  {
    "id": 19666,
    "name": "Tubehalfloop1B",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      31.56,
      50.22,
      10.83
    ]
  },
  {
    "id": 19667,
    "name": "Tubehalfloop2A",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      69.16,
      69.16,
      21.93
    ]
  },
  {
    "id": 19668,
    "name": "Tubehalfloop2B",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      69.16,
      69.16,
      21.93
    ]
  },
  {
    "id": 19669,
    "name": "Tubehalfbowl1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      28.3,
      5.5,
      30.35
    ]
  },
  {
    "id": 19670,
    "name": "Tubesupport1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      1.16,
      105.55,
      11.23
    ]
  },
  {
    "id": 19671,
    "name": "Tubesupport2",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      1.16,
      15.71,
      23.34
    ]
  },
  {
    "id": 19672,
    "name": "Tubehalflight1",
    "txd": "samp",
    "category": "lighting",
    "dimensions": [
      0.23,
      4.13,
      10.6
    ]
  },
  {
    "id": 19673,
    "name": "Tubehalf5Bend1A",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      10.23,
      6.35,
      10.83
    ]
  },
  {
    "id": 19674,
    "name": "Tubehalf5Bend1B",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      10.23,
      6.35,
      10.83
    ]
  },
  {
    "id": 19675,
    "name": "Tubehalf5Bend2A",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      10.71,
      6.37,
      10.83
    ]
  },
  {
    "id": 19676,
    "name": "Tubehalf5Bend2B",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      10.71,
      6.37,
      10.83
    ]
  },
  {
    "id": 19677,
    "name": "Tubehalftwist1A",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      50.0,
      11.49,
      11.49
    ]
  },
  {
    "id": 19678,
    "name": "Tubehalftwist1B",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      50.0,
      11.49,
      11.49
    ]
  },
  {
    "id": 19679,
    "name": "Tubehalftwist2A",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      50.0,
      11.49,
      11.49
    ]
  },
  {
    "id": 19680,
    "name": "Tubehalftwist2B",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      50.0,
      11.49,
      11.49
    ]
  },
  {
    "id": 19681,
    "name": "Tubehalf45Bend1A",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      26.34,
      5.5,
      18.57
    ]
  },
  {
    "id": 19682,
    "name": "Tubehalf45Bend1B",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      26.34,
      5.5,
      18.57
    ]
  },
  {
    "id": 19683,
    "name": "Tubehalf15Bend1A",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      25.43,
      8.66,
      10.83
    ]
  },
  {
    "id": 19684,
    "name": "Tubehalf15Bend1B",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      25.43,
      8.66,
      10.83
    ]
  },
  {
    "id": 19685,
    "name": "Tubehalf15Bend2A",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      25.43,
      8.66,
      10.83
    ]
  },
  {
    "id": 19686,
    "name": "Tubehalf15Bend2B",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      25.43,
      8.66,
      10.83
    ]
  },
  {
    "id": 19687,
    "name": "Tubehalf25M1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      25.0,
      5.5,
      10.83
    ]
  },
  {
    "id": 19688,
    "name": "Tubehalf45Bend3",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      24.45,
      14.02,
      10.83
    ]
  },
  {
    "id": 19689,
    "name": "Tubehalf45Bend4",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      24.45,
      14.02,
      10.83
    ]
  },
  {
    "id": 19690,
    "name": "Tubehalfntomjoin1A",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      10.0,
      5.5,
      10.83
    ]
  },
  {
    "id": 19691,
    "name": "Tubehalfntomjoin1B",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      10.0,
      5.5,
      10.83
    ]
  },
  {
    "id": 19692,
    "name": "Mtubeseg5M1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      5.0,
      2.63,
      16.49
    ]
  },
  {
    "id": 19693,
    "name": "Mtubeseg5M2A",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      5.0,
      2.63,
      16.49
    ]
  },
  {
    "id": 19694,
    "name": "Mtubeseg5M2B",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      5.0,
      2.63,
      16.49
    ]
  },
  {
    "id": 19695,
    "name": "Mtubeseg12 5M1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      12.5,
      4.65,
      10.77
    ]
  },
  {
    "id": 19696,
    "name": "Mtubehalf10M1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      10.0,
      2.75,
      5.42
    ]
  },
  {
    "id": 19697,
    "name": "Mtubehalf5Mjoin1A",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      5.0,
      2.75,
      13.98
    ]
  },
  {
    "id": 19698,
    "name": "Mtubehalf5Mjoin1B",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      5.0,
      2.75,
      13.98
    ]
  },
  {
    "id": 19699,
    "name": "Mtubehalf25M1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      25.0,
      2.75,
      5.42
    ]
  },
  {
    "id": 19700,
    "name": "Mtubeflt12 5X12 5M1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      12.5,
      0.25,
      12.5
    ]
  },
  {
    "id": 19701,
    "name": "Mtubehalfspiral1A",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      21.33,
      12.75,
      21.33
    ]
  },
  {
    "id": 19702,
    "name": "Mtubehalfspiral1B",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      21.33,
      12.75,
      21.33
    ]
  },
  {
    "id": 19703,
    "name": "Mtubehalfspiral2A",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      21.33,
      7.75,
      21.33
    ]
  },
  {
    "id": 19704,
    "name": "Mtubehalfspiral2B",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      21.33,
      7.75,
      21.33
    ]
  },
  {
    "id": 19705,
    "name": "Mtubehalfspiral3A",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      10.67,
      7.75,
      21.33
    ]
  },
  {
    "id": 19706,
    "name": "Mtubehalfspiral3B",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      10.67,
      7.75,
      21.33
    ]
  },
  {
    "id": 19707,
    "name": "Mtubehalfspiral4A",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      10.67,
      5.25,
      21.33
    ]
  },
  {
    "id": 19708,
    "name": "Mtubehalfspiral4B",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      10.67,
      5.25,
      21.33
    ]
  },
  {
    "id": 19709,
    "name": "Mtubehalf180Bend1A",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      10.67,
      2.75,
      21.33
    ]
  },
  {
    "id": 19710,
    "name": "Mtubehalf180Bend1B",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      10.67,
      2.75,
      21.33
    ]
  },
  {
    "id": 19711,
    "name": "Mtubehalf90Bend1A",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      10.67,
      2.75,
      10.67
    ]
  },
  {
    "id": 19712,
    "name": "Mtubehalf90Bend1B",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      10.67,
      2.75,
      10.67
    ]
  },
  {
    "id": 19713,
    "name": "Mtubehalf25Mdip1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      25.0,
      5.0,
      5.42
    ]
  },
  {
    "id": 19714,
    "name": "Mtubehalf25Mbump1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      25.0,
      5.0,
      5.42
    ]
  },
  {
    "id": 19715,
    "name": "Mtubehalfbowl1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      14.15,
      2.75,
      15.18
    ]
  },
  {
    "id": 19716,
    "name": "Mtubesupport1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.58,
      102.8,
      5.62
    ]
  },
  {
    "id": 19717,
    "name": "Mtubesupport2",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.58,
      7.85,
      20.53
    ]
  },
  {
    "id": 19718,
    "name": "Mtubehalflight1",
    "txd": "samp",
    "category": "lighting",
    "dimensions": [
      0.11,
      2.06,
      5.3
    ]
  },
  {
    "id": 19719,
    "name": "Mtubehalf5Bend1A",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      5.11,
      3.18,
      5.42
    ]
  },
  {
    "id": 19720,
    "name": "Mtubehalf5Bend1B",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      5.11,
      3.18,
      5.42
    ]
  },
  {
    "id": 19721,
    "name": "Mtubehalf5Bend2A",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      5.35,
      3.19,
      5.42
    ]
  },
  {
    "id": 19722,
    "name": "Mtubehalf5Bend2B",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      5.35,
      3.19,
      5.42
    ]
  },
  {
    "id": 19723,
    "name": "Mtubehalf45Bend1A",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      13.17,
      2.75,
      9.29
    ]
  },
  {
    "id": 19724,
    "name": "Mtubehalf45Bend1B",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      13.17,
      2.75,
      9.29
    ]
  },
  {
    "id": 19725,
    "name": "Mtubehalf15Bend1A",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      12.71,
      4.33,
      5.42
    ]
  },
  {
    "id": 19726,
    "name": "Mtubehalf15Bend1B",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      12.71,
      4.33,
      5.42
    ]
  },
  {
    "id": 19727,
    "name": "Mtubehalf15Bend2A",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      12.71,
      4.33,
      5.42
    ]
  },
  {
    "id": 19728,
    "name": "Mtubehalf15Bend2B",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      12.71,
      4.33,
      5.42
    ]
  },
  {
    "id": 19729,
    "name": "Mtubehalf45Bend3",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      12.23,
      7.01,
      5.42
    ]
  },
  {
    "id": 19730,
    "name": "Mtubehalf45Bend4",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      12.23,
      7.01,
      5.42
    ]
  },
  {
    "id": 19731,
    "name": "Tubehalfmtosjoin1A",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      5.0,
      2.75,
      5.42
    ]
  },
  {
    "id": 19732,
    "name": "Tubehalfmtosjoin1B",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      5.0,
      2.75,
      5.42
    ]
  },
  {
    "id": 19733,
    "name": "Stubeseg5M1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      5.0,
      1.32,
      8.24
    ]
  },
  {
    "id": 19734,
    "name": "Stubeseg5M2A",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      5.0,
      1.32,
      8.24
    ]
  },
  {
    "id": 19735,
    "name": "Stubeseg5M2B",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      5.0,
      1.32,
      8.24
    ]
  },
  {
    "id": 19736,
    "name": "Stubeseg6 25M1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      6.25,
      2.33,
      5.39
    ]
  },
  {
    "id": 19737,
    "name": "Stubehalf10M1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      10.0,
      1.38,
      2.71
    ]
  },
  {
    "id": 19738,
    "name": "Stubehalf5Mjoin1A",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      5.0,
      1.38,
      6.99
    ]
  },
  {
    "id": 19739,
    "name": "Stubehalf5Mjoin1B",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      5.0,
      1.38,
      6.99
    ]
  },
  {
    "id": 19740,
    "name": "Stubehalf12 5M1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      12.5,
      1.38,
      2.71
    ]
  },
  {
    "id": 19741,
    "name": "Stubeflat6 25M1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      6.25,
      0.12,
      6.25
    ]
  },
  {
    "id": 19742,
    "name": "Stubehalfspiral1A",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      10.67,
      6.38,
      10.67
    ]
  },
  {
    "id": 19743,
    "name": "Stubehalfspiral1B",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      10.67,
      6.38,
      10.67
    ]
  },
  {
    "id": 19744,
    "name": "Stubehalfspiral2A",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      10.67,
      3.88,
      10.67
    ]
  },
  {
    "id": 19745,
    "name": "Stubehalfspiral2B",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      10.67,
      3.88,
      10.67
    ]
  },
  {
    "id": 19746,
    "name": "Stubehalfspiral3A",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      5.33,
      3.88,
      10.67
    ]
  },
  {
    "id": 19747,
    "name": "Stubehalfspiral3B",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      5.33,
      3.88,
      10.67
    ]
  },
  {
    "id": 19748,
    "name": "Stubehalfspiral4A",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      5.33,
      2.62,
      10.67
    ]
  },
  {
    "id": 19749,
    "name": "Stubehalfspiral4B",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      5.33,
      2.62,
      10.67
    ]
  },
  {
    "id": 19750,
    "name": "Stubehalf180Bend1A",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      5.33,
      1.38,
      10.67
    ]
  },
  {
    "id": 19751,
    "name": "Stubehalf180Bend1B",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      5.33,
      1.38,
      10.67
    ]
  },
  {
    "id": 19752,
    "name": "Stubehalf90Bend1A",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      5.33,
      1.38,
      5.33
    ]
  },
  {
    "id": 19753,
    "name": "Stubehalf90Bend1B",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      5.33,
      1.38,
      5.33
    ]
  },
  {
    "id": 19754,
    "name": "Stubehalf12 5Mdip1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      12.5,
      2.5,
      2.71
    ]
  },
  {
    "id": 19755,
    "name": "Stubehalf12 5Mbump1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      12.5,
      2.5,
      2.71
    ]
  },
  {
    "id": 19756,
    "name": "Stubehalfbowl1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      7.07,
      1.38,
      7.59
    ]
  },
  {
    "id": 19757,
    "name": "Stubesupport1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.29,
      101.42,
      2.81
    ]
  },
  {
    "id": 19758,
    "name": "Stubesupport2",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.29,
      3.93,
      19.13
    ]
  },
  {
    "id": 19759,
    "name": "Stubehalflight1",
    "txd": "samp",
    "category": "lighting",
    "dimensions": [
      0.1,
      1.03,
      2.65
    ]
  },
  {
    "id": 19760,
    "name": "Stubehalf5Bend1A",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      2.56,
      1.59,
      2.71
    ]
  },
  {
    "id": 19761,
    "name": "Stubehalf5Bend1B",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      2.56,
      1.59,
      2.71
    ]
  },
  {
    "id": 19762,
    "name": "Stubehalf5Bend2A",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      2.68,
      1.59,
      2.71
    ]
  },
  {
    "id": 19763,
    "name": "Stubehalf5Bend2B",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      2.68,
      1.59,
      2.71
    ]
  },
  {
    "id": 19764,
    "name": "Stubehalf45Bend1A",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      6.58,
      1.38,
      4.64
    ]
  },
  {
    "id": 19765,
    "name": "Stubehalf45Bend1B",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      6.58,
      1.38,
      4.64
    ]
  },
  {
    "id": 19766,
    "name": "Stubehalf15Bend1A",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      6.36,
      2.17,
      2.71
    ]
  },
  {
    "id": 19767,
    "name": "Stubehalf15Bend1B",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      6.36,
      2.17,
      2.71
    ]
  },
  {
    "id": 19768,
    "name": "Stubehalf15Bend2A",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      6.36,
      2.17,
      2.71
    ]
  },
  {
    "id": 19769,
    "name": "Stubehalf15Bend2B",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      6.36,
      2.17,
      2.71
    ]
  },
  {
    "id": 19770,
    "name": "Stubehalf45Bend3",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      6.11,
      3.5,
      2.71
    ]
  },
  {
    "id": 19771,
    "name": "Stubehalf45Bend4",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      6.11,
      3.5,
      2.71
    ]
  },
  {
    "id": 19772,
    "name": "Crushedcarcube1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      1.07,
      1.2,
      1.45
    ]
  },
  {
    "id": 19773,
    "name": "Gunholster1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.25,
      0.18
    ]
  },
  {
    "id": 19774,
    "name": "Policebadge2",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 19775,
    "name": "Policebadge3",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 19776,
    "name": "Fbiidcard1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 19777,
    "name": "Fbilogo1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.22,
      0.1,
      0.21
    ]
  },
  {
    "id": 19778,
    "name": "Insigniadetective1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.25,
      0.1,
      0.25
    ]
  },
  {
    "id": 19779,
    "name": "Insigniadetective2",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.25,
      0.1,
      0.25
    ]
  },
  {
    "id": 19780,
    "name": "Insigniadetective3",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.25,
      0.1,
      0.25
    ]
  },
  {
    "id": 19781,
    "name": "Insigniasergeant1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.25,
      0.1,
      0.25
    ]
  },
  {
    "id": 19782,
    "name": "Insigniasergeant2",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.25,
      0.1,
      0.25
    ]
  },
  {
    "id": 19783,
    "name": "Insigniapofficer2",
    "txd": "samp",
    "category": "office",
    "dimensions": [
      0.25,
      0.1,
      0.25
    ]
  },
  {
    "id": 19784,
    "name": "Insigniapofficer3",
    "txd": "samp",
    "category": "office",
    "dimensions": [
      0.25,
      0.1,
      0.25
    ]
  },
  {
    "id": 19785,
    "name": "Insigniaseniorldoff",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.25,
      0.1,
      0.25
    ]
  },
  {
    "id": 19786,
    "name": "Lcdtvbig1",
    "txd": "samp",
    "category": "living",
    "dimensions": [
      2.36,
      1.27,
      0.15
    ]
  },
  {
    "id": 19787,
    "name": "Lcdtv1",
    "txd": "samp",
    "category": "living",
    "dimensions": [
      1.56,
      0.84,
      0.1
    ]
  },
  {
    "id": 19788,
    "name": "15X15Roadcorner1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      15.0,
      0.2,
      15.0
    ]
  },
  {
    "id": 19789,
    "name": "Cube1Mx1M",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      1.0,
      1.0,
      1.0
    ]
  },
  {
    "id": 19790,
    "name": "Cube5Mx5M",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      5.0,
      5.0,
      5.0
    ]
  },
  {
    "id": 19791,
    "name": "Cube10Mx10M",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      10.0,
      10.0,
      10.0
    ]
  },
  {
    "id": 19792,
    "name": "Sampkeycard1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 19793,
    "name": "Firewoodlog1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.53,
      0.17,
      0.17
    ]
  },
  {
    "id": 19794,
    "name": "Lsprisonwalls1",
    "txd": "samp",
    "category": "walls",
    "dimensions": [
      75.59,
      8.97,
      72.64
    ]
  },
  {
    "id": 19795,
    "name": "Lsprisongateeast",
    "txd": "samp",
    "category": "doors",
    "dimensions": [
      0.2,
      3.45,
      3.25
    ]
  },
  {
    "id": 19796,
    "name": "Lsprisongatesouth",
    "txd": "samp",
    "category": "doors",
    "dimensions": [
      0.2,
      3.53,
      2.52
    ]
  },
  {
    "id": 19797,
    "name": "Policevisorstrobe1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.33,
      0.11,
      0.1
    ]
  },
  {
    "id": 19798,
    "name": "Lsacarpark1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      80.75,
      11.79,
      40.61
    ]
  },
  {
    "id": 19799,
    "name": "Caligulasvaultdoor",
    "txd": "samp",
    "category": "doors",
    "dimensions": [
      2.0,
      3.01,
      0.45
    ]
  },
  {
    "id": 19800,
    "name": "Lsbcarpark1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      69.48,
      15.51,
      69.49
    ]
  },
  {
    "id": 19801,
    "name": "Balaclava1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.18,
      0.23,
      0.21
    ]
  },
  {
    "id": 19802,
    "name": "Gendoorint04Static",
    "txd": "samp",
    "category": "doors",
    "dimensions": [
      1.5,
      2.5,
      0.38
    ]
  },
  {
    "id": 19803,
    "name": "Towtrucklights1",
    "txd": "samp",
    "category": "lighting",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 19804,
    "name": "Padlock1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.12,
      0.19,
      0.1
    ]
  },
  {
    "id": 19805,
    "name": "Whiteboard1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      2.3,
      1.31,
      0.1
    ]
  },
  {
    "id": 19806,
    "name": "Chandelier1",
    "txd": "samp",
    "category": "lighting",
    "dimensions": [
      1.04,
      1.89,
      1.17
    ]
  },
  {
    "id": 19807,
    "name": "Telephone1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.2,
      0.15,
      0.23
    ]
  },
  {
    "id": 19808,
    "name": "Keyboard1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.48,
      0.1,
      0.23
    ]
  },
  {
    "id": 19809,
    "name": "Metaltray1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.27,
      0.1,
      0.47
    ]
  },
  {
    "id": 19810,
    "name": "Staffonlysign1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.36,
      0.24,
      0.1
    ]
  },
  {
    "id": 19811,
    "name": "Burgerbox1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.22,
      0.12,
      0.2
    ]
  },
  {
    "id": 19812,
    "name": "Beerkeg1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.7,
      1.0,
      0.7
    ]
  },
  {
    "id": 19813,
    "name": "Electricaloutlet1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.22,
      0.22,
      0.1
    ]
  },
  {
    "id": 19814,
    "name": "Electricaloutlet2",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.26,
      0.13,
      0.1
    ]
  },
  {
    "id": 19815,
    "name": "Toolboard1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      3.0,
      1.0,
      0.1
    ]
  },
  {
    "id": 19816,
    "name": "Oxygencylinder1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.15,
      0.52,
      0.15
    ]
  },
  {
    "id": 19817,
    "name": "Carfixerramp1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      2.52,
      1.97,
      9.83
    ]
  },
  {
    "id": 19818,
    "name": "Wineglass1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.29,
      0.12
    ]
  },
  {
    "id": 19819,
    "name": "Cocktailglass1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.15,
      0.27,
      0.18
    ]
  },
  {
    "id": 19820,
    "name": "Alcoholbottle1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.15,
      0.61,
      0.13
    ]
  },
  {
    "id": 19821,
    "name": "Alcoholbottle2",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.15,
      0.61,
      0.13
    ]
  },
  {
    "id": 19822,
    "name": "Alcoholbottle3",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.13,
      0.51,
      0.14
    ]
  },
  {
    "id": 19823,
    "name": "Alcoholbottle4",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.16,
      0.37,
      0.1
    ]
  },
  {
    "id": 19824,
    "name": "Alcoholbottle5",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.13,
      0.53,
      0.12
    ]
  },
  {
    "id": 19825,
    "name": "Sprunkclock1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.55,
      0.55,
      0.1
    ]
  },
  {
    "id": 19826,
    "name": "Lightswitch1",
    "txd": "samp",
    "category": "lighting",
    "dimensions": [
      0.16,
      0.18,
      0.1
    ]
  },
  {
    "id": 19827,
    "name": "Lightswitch2",
    "txd": "samp",
    "category": "lighting",
    "dimensions": [
      0.13,
      0.2,
      0.1
    ]
  },
  {
    "id": 19828,
    "name": "Lightswitch3Off",
    "txd": "samp",
    "category": "lighting",
    "dimensions": [
      0.2,
      0.13,
      0.1
    ]
  },
  {
    "id": 19829,
    "name": "Lightswitch3On",
    "txd": "samp",
    "category": "lighting",
    "dimensions": [
      0.2,
      0.13,
      0.1
    ]
  },
  {
    "id": 19830,
    "name": "Blender1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.28,
      0.6,
      0.35
    ]
  },
  {
    "id": 19831,
    "name": "Barbeque1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.93,
      1.41,
      0.61
    ]
  },
  {
    "id": 19832,
    "name": "Ammobox1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.39,
      0.23,
      0.17
    ]
  },
  {
    "id": 19833,
    "name": "Cow1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.58,
      1.43,
      1.84
    ]
  },
  {
    "id": 19834,
    "name": "Policelinetape1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      2.34,
      0.14,
      0.1
    ]
  },
  {
    "id": 19835,
    "name": "Coffeecup1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.12,
      0.19,
      0.12
    ]
  },
  {
    "id": 19836,
    "name": "Bloodpool1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.25,
      0.1,
      0.25
    ]
  },
  {
    "id": 19837,
    "name": "Grassclump1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.5,
      0.5,
      0.5
    ]
  },
  {
    "id": 19838,
    "name": "Grassclump2",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.5,
      0.5,
      0.5
    ]
  },
  {
    "id": 19839,
    "name": "Grassclump3",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.5,
      0.5,
      0.5
    ]
  },
  {
    "id": 19840,
    "name": "Waterfall1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      11.63,
      9.08,
      13.88
    ]
  },
  {
    "id": 19841,
    "name": "Waterfall2",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      11.63,
      26.61,
      15.77
    ]
  },
  {
    "id": 19842,
    "name": "Waterfallwater1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      11.63,
      0.1,
      25.0
    ]
  },
  {
    "id": 19843,
    "name": "Metalpanel1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      1.0,
      0.1,
      1.0
    ]
  },
  {
    "id": 19844,
    "name": "Metalpanel2",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      1.0,
      0.1,
      1.0
    ]
  },
  {
    "id": 19845,
    "name": "Metalpanel3",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      1.0,
      0.1,
      1.0
    ]
  },
  {
    "id": 19846,
    "name": "Metalpanel4",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      1.0,
      0.1,
      1.0
    ]
  },
  {
    "id": 19847,
    "name": "Legham1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.21,
      0.17,
      0.5
    ]
  },
  {
    "id": 19848,
    "name": "Cargobobplatform1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      1.33,
      1.03,
      3.41
    ]
  },
  {
    "id": 19849,
    "name": "Mihouse1Land",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      31.25,
      3.28,
      62.5
    ]
  },
  {
    "id": 19850,
    "name": "Mihouse1Land2",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      31.25,
      1.41,
      62.5
    ]
  },
  {
    "id": 19851,
    "name": "Mihouse1Land3",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      31.25,
      1.41,
      62.5
    ]
  },
  {
    "id": 19852,
    "name": "Mihouse1Land4",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      31.25,
      0.1,
      62.5
    ]
  },
  {
    "id": 19853,
    "name": "Mihouse1Land5",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      31.25,
      0.1,
      62.5
    ]
  },
  {
    "id": 19854,
    "name": "Mihouse1Outside",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      27.8,
      8.29,
      26.43
    ]
  },
  {
    "id": 19855,
    "name": "Mihouse1Inside",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      25.71,
      5.2,
      22.52
    ]
  },
  {
    "id": 19856,
    "name": "Mihouse1Intwalls1",
    "txd": "samp",
    "category": "walls",
    "dimensions": [
      21.13,
      4.48,
      14.97
    ]
  },
  {
    "id": 19857,
    "name": "Mihouse1Door1",
    "txd": "samp",
    "category": "doors",
    "dimensions": [
      1.5,
      2.51,
      0.1
    ]
  },
  {
    "id": 19858,
    "name": "Mihouse1Door2",
    "txd": "samp",
    "category": "doors",
    "dimensions": [
      1.5,
      2.51,
      0.1
    ]
  },
  {
    "id": 19859,
    "name": "Mihouse1Door3",
    "txd": "samp",
    "category": "doors",
    "dimensions": [
      1.5,
      2.51,
      0.1
    ]
  },
  {
    "id": 19860,
    "name": "Mihouse1Door4",
    "txd": "samp",
    "category": "doors",
    "dimensions": [
      1.5,
      2.51,
      0.1
    ]
  },
  {
    "id": 19861,
    "name": "Mihouse1Garagedoor1",
    "txd": "samp",
    "category": "doors",
    "dimensions": [
      5.3,
      2.5,
      0.1
    ]
  },
  {
    "id": 19862,
    "name": "Mihouse1Garagedoor2",
    "txd": "samp",
    "category": "doors",
    "dimensions": [
      5.3,
      2.5,
      0.1
    ]
  },
  {
    "id": 19863,
    "name": "Mihouse1Garagedoor3",
    "txd": "samp",
    "category": "doors",
    "dimensions": [
      5.3,
      2.5,
      0.1
    ]
  },
  {
    "id": 19864,
    "name": "Mihouse1Garagedoor4",
    "txd": "samp",
    "category": "doors",
    "dimensions": [
      5.3,
      2.5,
      0.1
    ]
  },
  {
    "id": 19865,
    "name": "Mifencewood1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      2.0,
      5.0
    ]
  },
  {
    "id": 19866,
    "name": "Mifenceblocks1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.2,
      0.75,
      5.0
    ]
  },
  {
    "id": 19867,
    "name": "Mailbox1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.22,
      1.36,
      0.54
    ]
  },
  {
    "id": 19868,
    "name": "Meshfence1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      5.27,
      3.42,
      0.78
    ]
  },
  {
    "id": 19869,
    "name": "Meshfence2",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      5.32,
      2.56,
      0.14
    ]
  },
  {
    "id": 19870,
    "name": "Metalgate1",
    "txd": "samp",
    "category": "doors",
    "dimensions": [
      4.73,
      3.54,
      0.14
    ]
  },
  {
    "id": 19871,
    "name": "Cordonstand1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.41,
      1.05,
      0.41
    ]
  },
  {
    "id": 19872,
    "name": "Carfixerramp2",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      2.52,
      1.92,
      5.44
    ]
  },
  {
    "id": 19873,
    "name": "Toiletpaperroll1",
    "txd": "samp",
    "category": "bathroom",
    "dimensions": [
      0.13,
      0.12,
      0.13
    ]
  },
  {
    "id": 19874,
    "name": "Soapbar1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.16,
      0.1,
      0.1
    ]
  },
  {
    "id": 19875,
    "name": "Crdoor01New",
    "txd": "samp",
    "category": "doors",
    "dimensions": [
      1.36,
      2.1,
      0.1
    ]
  },
  {
    "id": 19876,
    "name": "Dillimoregasext1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      21.39,
      7.23,
      50.0
    ]
  },
  {
    "id": 19877,
    "name": "Dillimoregasint1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      8.43,
      4.03,
      10.12
    ]
  },
  {
    "id": 19878,
    "name": "Skateboard1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.95,
      0.14,
      0.31
    ]
  },
  {
    "id": 19879,
    "name": "Wellsfargobuild1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      46.77,
      115.31,
      53.47
    ]
  },
  {
    "id": 19880,
    "name": "Wellsfargogrgdoor1",
    "txd": "samp",
    "category": "doors",
    "dimensions": [
      8.19,
      4.89,
      0.1
    ]
  },
  {
    "id": 19881,
    "name": "Kyliebarnfixed1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      14.56,
      8.45,
      8.37
    ]
  },
  {
    "id": 19882,
    "name": "Marcossteak2",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.16,
      0.1,
      0.29
    ]
  },
  {
    "id": 19883,
    "name": "Breadslice1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.12,
      0.1,
      0.12
    ]
  },
  {
    "id": 19884,
    "name": "Wsbend45Deg2",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      41.98,
      7.74,
      59.23
    ]
  },
  {
    "id": 19885,
    "name": "Wsstraight2",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      41.98,
      2.0,
      60.0
    ]
  },
  {
    "id": 19886,
    "name": "Wsstraight3",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      41.98,
      2.0,
      60.0
    ]
  },
  {
    "id": 19887,
    "name": "Wsstart1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      41.98,
      2.0,
      60.0
    ]
  },
  {
    "id": 19888,
    "name": "Wsbend45Deg3",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      58.21,
      2.0,
      68.86
    ]
  },
  {
    "id": 19889,
    "name": "Wsbend45Deg4",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      58.21,
      2.0,
      68.86
    ]
  },
  {
    "id": 19890,
    "name": "Wsstraight4",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      41.98,
      2.0,
      60.0
    ]
  },
  {
    "id": 19891,
    "name": "Wstubejoiner1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      41.98,
      3.17,
      60.0
    ]
  },
  {
    "id": 19892,
    "name": "Wsroadjoiner1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      41.98,
      2.0,
      60.0
    ]
  },
  {
    "id": 19893,
    "name": "Laptopsamp1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.33,
      0.28,
      0.37
    ]
  },
  {
    "id": 19894,
    "name": "Laptopsamp2",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.33,
      0.1,
      0.27
    ]
  },
  {
    "id": 19895,
    "name": "Ladderfiretrucklts1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.1
    ]
  },
  {
    "id": 19896,
    "name": "Cigarettepack1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.11
    ]
  },
  {
    "id": 19897,
    "name": "Cigarettepack2",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.11
    ]
  },
  {
    "id": 19898,
    "name": "Oilfloorstain1",
    "txd": "samp",
    "category": "floors",
    "dimensions": [
      1.93,
      0.1,
      2.03
    ]
  },
  {
    "id": 19899,
    "name": "Toolcabinet1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.98,
      2.51,
      2.57
    ]
  },
  {
    "id": 19900,
    "name": "Toolcabinet2",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.64,
      0.88,
      0.65
    ]
  },
  {
    "id": 19903,
    "name": "Mechaniccomputer1",
    "txd": "samp",
    "category": "office",
    "dimensions": [
      0.94,
      2.02,
      1.03
    ]
  },
  {
    "id": 19904,
    "name": "Constructionvest1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.4,
      0.61,
      0.33
    ]
  },
  {
    "id": 19905,
    "name": "A51Building1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      36.23,
      6.51,
      16.31
    ]
  },
  {
    "id": 19906,
    "name": "A51Building1Grgdoor",
    "txd": "samp",
    "category": "doors",
    "dimensions": [
      6.17,
      3.23,
      0.1
    ]
  },
  {
    "id": 19907,
    "name": "A51Building2",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      17.4,
      8.1,
      28.44
    ]
  },
  {
    "id": 19908,
    "name": "A51Building2Grgdoor",
    "txd": "samp",
    "category": "doors",
    "dimensions": [
      0.12,
      4.89,
      5.4
    ]
  },
  {
    "id": 19909,
    "name": "A51Building3",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      14.15,
      5.31,
      14.43
    ]
  },
  {
    "id": 19910,
    "name": "A51Building3Grgdoor",
    "txd": "samp",
    "category": "doors",
    "dimensions": [
      3.75,
      2.4,
      0.1
    ]
  },
  {
    "id": 19911,
    "name": "A51Hangardoor1",
    "txd": "samp",
    "category": "doors",
    "dimensions": [
      0.12,
      6.4,
      9.64
    ]
  },
  {
    "id": 19912,
    "name": "Sampmetalgate1",
    "txd": "samp",
    "category": "doors",
    "dimensions": [
      11.54,
      5.55,
      0.1
    ]
  },
  {
    "id": 19913,
    "name": "Sampbigfence1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      50.0,
      10.96,
      0.1
    ]
  },
  {
    "id": 19914,
    "name": "Cutscenebat1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.89,
      0.1,
      0.1
    ]
  },
  {
    "id": 19915,
    "name": "Cutscenecooker1",
    "txd": "samp",
    "category": "kitchen",
    "dimensions": [
      0.61,
      1.81,
      0.77
    ]
  },
  {
    "id": 19916,
    "name": "Cutscenefridge1",
    "txd": "samp",
    "category": "kitchen",
    "dimensions": [
      0.81,
      2.19,
      1.09
    ]
  },
  {
    "id": 19917,
    "name": "Cutsceneengine1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.94,
      0.76,
      1.12
    ]
  },
  {
    "id": 19918,
    "name": "Cutscenebox1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.32,
      0.23,
      0.27
    ]
  },
  {
    "id": 19919,
    "name": "Cutsceneperch1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.45,
      1.47,
      0.33
    ]
  },
  {
    "id": 19920,
    "name": "Cutsceneremote1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.1,
      0.17
    ]
  },
  {
    "id": 19921,
    "name": "Cutscenetoolbox1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.63,
      0.2,
      0.43
    ]
  },
  {
    "id": 19922,
    "name": "Mktable1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      3.13,
      0.79,
      1.41
    ]
  },
  {
    "id": 19923,
    "name": "Mkislandcooker1",
    "txd": "samp",
    "category": "kitchen",
    "dimensions": [
      1.97,
      1.01,
      1.47
    ]
  },
  {
    "id": 19924,
    "name": "Mkextractionhood1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      1.59,
      1.86,
      1.59
    ]
  },
  {
    "id": 19925,
    "name": "Mkworktop1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.87,
      0.92,
      0.87
    ]
  },
  {
    "id": 19926,
    "name": "Mkworktop2",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.87,
      0.92,
      1.92
    ]
  },
  {
    "id": 19927,
    "name": "Mkworktop3",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.87,
      0.94,
      1.92
    ]
  },
  {
    "id": 19928,
    "name": "Mkworktop4",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.87,
      0.92,
      0.87
    ]
  },
  {
    "id": 19929,
    "name": "Mkworktop5",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.87,
      0.92,
      2.86
    ]
  },
  {
    "id": 19930,
    "name": "Mkworktop6",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.87,
      0.92,
      1.18
    ]
  },
  {
    "id": 19931,
    "name": "Mkworktop7",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.87,
      0.92,
      0.74
    ]
  },
  {
    "id": 19932,
    "name": "Mkwallovencabinet1",
    "txd": "samp",
    "category": "walls",
    "dimensions": [
      0.52,
      1.17,
      0.74
    ]
  },
  {
    "id": 19933,
    "name": "Mkwalloven1",
    "txd": "samp",
    "category": "walls",
    "dimensions": [
      0.55,
      0.89,
      0.61
    ]
  },
  {
    "id": 19934,
    "name": "Mkcupboard1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.44,
      1.03,
      0.74
    ]
  },
  {
    "id": 19935,
    "name": "Mkcupboard2",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.44,
      1.03,
      0.99
    ]
  },
  {
    "id": 19936,
    "name": "Mkcupboard3",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.94,
      1.03,
      0.93
    ]
  },
  {
    "id": 19937,
    "name": "Mkcupboard4",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.44,
      1.03,
      1.92
    ]
  },
  {
    "id": 19938,
    "name": "Mkshelf1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.44,
      0.1,
      0.44
    ]
  },
  {
    "id": 19939,
    "name": "Mkshelf2",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.44,
      0.1,
      1.0
    ]
  },
  {
    "id": 19940,
    "name": "Mkshelf3",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.44,
      0.1,
      2.0
    ]
  },
  {
    "id": 19941,
    "name": "Goldbar1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.18,
      0.1,
      0.1
    ]
  },
  {
    "id": 19942,
    "name": "Policeradio1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.32,
      0.1
    ]
  },
  {
    "id": 19943,
    "name": "Stonepillar1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      2.13,
      7.07,
      2.13
    ]
  },
  {
    "id": 19944,
    "name": "Bodybag1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      1.0,
      0.33,
      2.35
    ]
  },
  {
    "id": 19945,
    "name": "Cpsize16Red",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      16.0,
      64.0,
      16.0
    ]
  },
  {
    "id": 19946,
    "name": "Cpsize16Green",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      16.0,
      64.0,
      16.0
    ]
  },
  {
    "id": 19947,
    "name": "Cpsize16Blue",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      16.0,
      64.0,
      16.0
    ]
  },
  {
    "id": 19948,
    "name": "Samproadsign1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.56,
      2.88,
      0.1
    ]
  },
  {
    "id": 19949,
    "name": "Samproadsign2",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.56,
      2.88,
      0.1
    ]
  },
  {
    "id": 19950,
    "name": "Samproadsign3",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.56,
      2.88,
      0.1
    ]
  },
  {
    "id": 19951,
    "name": "Samproadsign4",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.56,
      2.98,
      0.1
    ]
  },
  {
    "id": 19952,
    "name": "Samproadsign5",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.56,
      2.98,
      0.1
    ]
  },
  {
    "id": 19953,
    "name": "Samproadsign6",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.92,
      2.98,
      0.1
    ]
  },
  {
    "id": 19954,
    "name": "Samproadsign7",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.92,
      2.98,
      0.1
    ]
  },
  {
    "id": 19955,
    "name": "Samproadsign8",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.56,
      2.88,
      0.1
    ]
  },
  {
    "id": 19956,
    "name": "Samproadsign9",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.56,
      2.88,
      0.1
    ]
  },
  {
    "id": 19957,
    "name": "Samproadsign10",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.56,
      2.88,
      0.1
    ]
  },
  {
    "id": 19958,
    "name": "Samproadsign11",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.79,
      3.0,
      0.1
    ]
  },
  {
    "id": 19959,
    "name": "Samproadsign12",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.79,
      3.0,
      0.1
    ]
  },
  {
    "id": 19960,
    "name": "Samproadsign13",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.79,
      3.0,
      0.1
    ]
  },
  {
    "id": 19961,
    "name": "Samproadsign14",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.79,
      3.0,
      0.1
    ]
  },
  {
    "id": 19962,
    "name": "Samproadsign15",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.79,
      3.0,
      0.1
    ]
  },
  {
    "id": 19963,
    "name": "Samproadsign16",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.79,
      3.0,
      0.1
    ]
  },
  {
    "id": 19964,
    "name": "Samproadsign17",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.79,
      3.0,
      0.1
    ]
  },
  {
    "id": 19965,
    "name": "Samproadsign18",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.79,
      3.0,
      0.1
    ]
  },
  {
    "id": 19966,
    "name": "Samproadsign19",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.78,
      3.0,
      0.1
    ]
  },
  {
    "id": 19967,
    "name": "Samproadsign20",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.77,
      2.98,
      0.1
    ]
  },
  {
    "id": 19968,
    "name": "Samproadsign21",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.42,
      2.92,
      0.1
    ]
  },
  {
    "id": 19969,
    "name": "Samproadsign22",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.42,
      2.92,
      0.1
    ]
  },
  {
    "id": 19970,
    "name": "Samproadsign23",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.54,
      2.96,
      0.1
    ]
  },
  {
    "id": 19971,
    "name": "Samproadsign24",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.54,
      2.96,
      0.1
    ]
  },
  {
    "id": 19972,
    "name": "Samproadsign25",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      1.52,
      3.08,
      0.1
    ]
  },
  {
    "id": 19973,
    "name": "Samproadsign26",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.79,
      3.0,
      0.1
    ]
  },
  {
    "id": 19974,
    "name": "Samproadsign27",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.79,
      3.0,
      0.1
    ]
  },
  {
    "id": 19975,
    "name": "Samproadsign28",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      1.26,
      3.08,
      0.1
    ]
  },
  {
    "id": 19976,
    "name": "Samproadsign29",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.87,
      2.97,
      0.1
    ]
  },
  {
    "id": 19977,
    "name": "Samproadsign30",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.87,
      2.97,
      0.1
    ]
  },
  {
    "id": 19978,
    "name": "Samproadsign31",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      1.07,
      2.87,
      0.1
    ]
  },
  {
    "id": 19979,
    "name": "Samproadsign32",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.62,
      2.87,
      0.1
    ]
  },
  {
    "id": 19980,
    "name": "Samproadsign33",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      1.52,
      3.08,
      0.1
    ]
  },
  {
    "id": 19981,
    "name": "Samproadsign34",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.77,
      2.78,
      0.1
    ]
  },
  {
    "id": 19982,
    "name": "Samproadsign35",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.7,
      3.09,
      0.1
    ]
  },
  {
    "id": 19983,
    "name": "Samproadsign36",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.7,
      3.09,
      0.1
    ]
  },
  {
    "id": 19984,
    "name": "Samproadsign37",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.7,
      3.09,
      0.1
    ]
  },
  {
    "id": 19985,
    "name": "Samproadsign38",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.7,
      3.09,
      0.1
    ]
  },
  {
    "id": 19986,
    "name": "Samproadsign39",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.7,
      3.09,
      0.1
    ]
  },
  {
    "id": 19987,
    "name": "Samproadsign40",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.7,
      3.09,
      0.1
    ]
  },
  {
    "id": 19988,
    "name": "Samproadsign41",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.7,
      3.09,
      0.1
    ]
  },
  {
    "id": 19989,
    "name": "Samproadsign42",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.7,
      3.09,
      0.1
    ]
  },
  {
    "id": 19990,
    "name": "Samproadsign43",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.7,
      3.09,
      0.1
    ]
  },
  {
    "id": 19991,
    "name": "Samproadsign44",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.7,
      3.09,
      0.1
    ]
  },
  {
    "id": 19992,
    "name": "Samproadsign45",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.7,
      3.09,
      0.1
    ]
  },
  {
    "id": 19993,
    "name": "Cutscenebowl1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.15,
      0.1,
      0.15
    ]
  },
  {
    "id": 19994,
    "name": "Cutscenechair1",
    "txd": "samp",
    "category": "office",
    "dimensions": [
      0.51,
      0.93,
      0.56
    ]
  },
  {
    "id": 19995,
    "name": "Cutsceneammoclip1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      0.1,
      0.14,
      0.1
    ]
  },
  {
    "id": 19996,
    "name": "Cutscenefoldchair1",
    "txd": "samp",
    "category": "office",
    "dimensions": [
      0.46,
      0.92,
      0.56
    ]
  },
  {
    "id": 19997,
    "name": "Cutscenegrgtable1",
    "txd": "samp",
    "category": "props",
    "dimensions": [
      1.26,
      0.84,
      1.25
    ]
  },
  {
    "id": 19998,
    "name": "Cutscenelighterfl",
    "txd": "samp",
    "category": "lighting",
    "dimensions": [
      0.1,
      0.21,
      0.1
    ]
  },
  {
    "id": 19999,
    "name": "Cutscenechair2",
    "txd": "samp",
    "category": "office",
    "dimensions": [
      0.96,
      1.36,
      1.0
    ]
  },
  {
    "id": 3051,
    "name": "lift_dr (Elevator Door)",
    "txd": "bigwhitesfe",
    "category": "doors",
    "dimensions": [1.6, 2.4, 0.2]
  },
  {
    "id": 1536,
    "name": "Gen_doorEXT15 (Double Entrance Door)",
    "txd": "adam_v_doort",
    "category": "doors",
    "dimensions": [2.0, 2.5, 0.2]
  },
  {
    "id": 1753,
    "name": "SWANK_COUCH_1 (Modern Luxury Couch)",
    "txd": "mrk_couches2",
    "category": "living",
    "dimensions": [2.2, 0.9, 0.9]
  },
  {
    "id": 1811,
    "name": "MED_DIN_CHAIR_5 (Executive Office Chair)",
    "txd": "int_office",
    "category": "office",
    "dimensions": [0.7, 0.9, 0.7]
  },
  {
    "id": 2162,
    "name": "MED_OFFICE_UNIT_1 (Reception Service Counter)",
    "txd": "int_office",
    "category": "office",
    "dimensions": [2.0, 1.1, 1.0]
  },
  {
    "id": 2163,
    "name": "MED_OFFICE_UNIT_2 (Reception Counter Corner)",
    "txd": "int_office",
    "category": "office",
    "dimensions": [1.2, 1.1, 1.2]
  },
  {
    "id": 2315,
    "name": "CJ_TV_TABLE4 (Lounge Coffee Table)",
    "txd": "cj_furniture",
    "category": "living",
    "dimensions": [1.4, 0.5, 0.7]
  },
  {
    "id": 2515,
    "name": "CJ_BS_SINK (Restroom Wash Sink)",
    "txd": "cj_bathroom",
    "category": "bathroom",
    "dimensions": [0.8, 0.9, 0.6]
  },
  {
    "id": 2528,
    "name": "CJ_TOILET3 (Restroom Toilet)",
    "txd": "cj_bathroom",
    "category": "bathroom",
    "dimensions": [0.6, 0.8, 0.7]
  },
  {
    "id": 3858,
    "name": "ottosmash1 (Glass Railing Balustrade)",
    "txd": "cj_tv",
    "category": "walls",
    "dimensions": [2.5, 1.2, 0.1]
  },
  {
    "id": 3859,
    "name": "ottosmash04 (Glass Partition Wall)",
    "txd": "cj_tv",
    "category": "walls",
    "dimensions": [2.5, 2.0, 0.1]
  },
  {
    "id": 945,
    "name": "WS_CF_LAMPS (Recessed Ceiling Lamp)",
    "txd": "csrspalace02",
    "category": "lighting",
    "dimensions": [1.2, 0.2, 0.6]
  },
  {
    "id": 14687,
    "name": "Int_tat_lights02 (Modern Ceiling Spotlight)",
    "txd": "cj_lights",
    "category": "lighting",
    "dimensions": [0.8, 0.2, 0.8]
  },
  {
    "id": 1897,
    "name": "wheel_support (Balustrade Metal Bracket)",
    "txd": "wheels",
    "category": "props",
    "dimensions": [0.2, 1.1, 0.2]
  },
  {
    "id": 19087,
    "name": "Rope1 (Black Handrail Metal Pipe)",
    "txd": "airportgnd_sfse",
    "category": "props",
    "dimensions": [2.5, 0.1, 0.1]
  }
];

export function getObjectInfo(id: number): SampObjectInfo | undefined {
  return SAMP_OBJECTS.find(o => o.id === id);
}

const ID_EN_MAP: Record<string, string[]> = {
  meja: ['table', 'desk', 'counter', 'bar'],
  kursi: ['chair', 'seat', 'stool', 'bench', 'armchair'],
  sofa: ['sofa', 'couch', 'armchair', 'settee'],
  pintu: ['door', 'gate', 'portal', 'lift_dr'],
  lift: ['lift', 'elevator', 'lift_dr'],
  elevator: ['lift', 'elevator', 'lift_dr'],
  resepsionis: ['reception', 'counter', 'office_unit', 'med_office_unit'],
  washtafel: ['sink', 'basin', 'cj_bs_sink'],
  kaca: ['glass', 'ottosmash', 'window'],
  railing: ['rope', 'wheel_support', 'handrail', 'barrier', 'ottosmash'],
  jendela: ['window', 'glass'],
  tangga: ['stair', 'ladder', 'steps'],
  kasur: ['bed', 'mattress'],
  ranjang: ['bed', 'bunk'],
  lemari: ['wardrobe', 'cabinet', 'cupboard', 'closet'],
  lampu: ['light', 'lamp', 'neon', 'chandelier', 'lantern'],
  dapur: ['kitchen', 'sink', 'stove', 'oven', 'fridge'],
  kulkas: ['fridge', 'refrigerator'],
  toilet: ['toilet', 'cj_toilet', 'wc', 'restroom', 'bath', 'shower', 'sink'],
  pagar: ['fence', 'barrier', 'gate', 'wall'],
  komputer: ['pc', 'computer', 'monitor'],
  mobil: ['vehicle', 'car'],
  dinding: ['wall', 'modular'],
  lantai: ['floor', 'slab'],
  atap: ['roof', 'ceiling', 'slab'],
  plafon: ['ceiling', 'slab']
};

export function searchSampObjects(
  query: string,
  category?: string,
  limit: number = 10
): SampObjectInfo[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];

  // Direct ID search if query is numeric
  const numericId = parseInt(q, 10);
  if (!isNaN(numericId) && numericId.toString() === q) {
    const found = SAMP_OBJECTS.filter(o => o.id === numericId);
    if (found.length > 0) return found;
  }

  // Expanded query terms using ID_EN_MAP
  const queryTerms = [q];
  for (const [idWord, enWords] of Object.entries(ID_EN_MAP)) {
    if (q.includes(idWord)) {
      queryTerms.push(...enWords);
    }
  }

  const results: SampObjectInfo[] = [];

  for (const obj of SAMP_OBJECTS) {
    if (category && category !== 'all' && obj.category !== category) {
      continue;
    }

    const objName = obj.name.toLowerCase();
    const matches = queryTerms.some(term => objName.includes(term));

    if (matches) {
      results.push(obj);
      if (results.length >= limit) break;
    }
  }

  return results;
}
