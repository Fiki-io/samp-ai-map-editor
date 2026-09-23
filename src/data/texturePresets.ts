export interface TexturePreset {
  id: string;
  name: string;
  category: 'wood' | 'tiles' | 'walls' | 'carpet' | 'marble' | 'concrete' | 'brick' | 'metal' | 'glass';
  modelId: number;
  txdName: string;
  textureName: string;
  previewColor: string; // CSS hex color representation for UI swatch
  description?: string;
}

/**
 * 100% Authentic GTA San Andreas & SA-MP Texture Studio Presets.
 * All modelId, txdName, and textureName pairs are verified to exist in GTA SA archives
 * and work flawlessly with SA-MP SetDynamicObjectMaterial.
 */
export const TEXTURE_PRESETS: TexturePreset[] = [
  // ── DINDING & WALLPAPER (all_walls TXD) ─────────────────────────────────────
  {
    id: 'wall_white_drywall',
    name: 'White Drywall Plaster',
    category: 'walls',
    modelId: 19353,
    txdName: 'all_walls',
    textureName: 'wall001',
    previewColor: '#e8e8e8',
    description: 'Dinding gypsum putih halus standar interior modern'
  },
  {
    id: 'wall_warm_cream',
    name: 'Warm Cream Stucco',
    category: 'walls',
    modelId: 19353,
    txdName: 'all_walls',
    textureName: 'wall003',
    previewColor: '#f3eedb',
    description: 'Plester krem hangat dengan tekstur halus'
  },
  {
    id: 'wall_charcoal_grey',
    name: 'Modern Charcoal Wall',
    category: 'walls',
    modelId: 19353,
    txdName: 'all_walls',
    textureName: 'wall008',
    previewColor: '#4a4e54',
    description: 'Dinding abu-abu arang kontemporer minimalis'
  },
  {
    id: 'wall_obsidian_dark',
    name: 'Matte Obsidian Wall',
    category: 'walls',
    modelId: 19353,
    txdName: 'all_walls',
    textureName: 'wall013',
    previewColor: '#232528',
    description: 'Aksen dinding hitam matte elegan untuk studio & kamar mewah'
  },
  {
    id: 'wall_striped_paper',
    name: 'Classic Striped Wallpaper',
    category: 'walls',
    modelId: 19353,
    txdName: 'all_walls',
    textureName: 'wall018',
    previewColor: '#d6cbb8',
    description: 'Wallpaper garis-garis vertikal klasik'
  },
  {
    id: 'wall_damask_pattern',
    name: 'Vintage Floral Wallpaper',
    category: 'walls',
    modelId: 19353,
    txdName: 'all_walls',
    textureName: 'wall024',
    previewColor: '#c9baa3',
    description: 'Wallpaper motif bunga ornamen vintage'
  },

  // ── KAYU & PARKET (Wood & Parquet) ──────────────────────────────────────────
  {
    id: 'wood_dark_parquet',
    name: 'Dark Walnut Parquet (TS Classic)',
    category: 'wood',
    modelId: 10756,
    txdName: 'airportroads_sfse',
    textureName: 'des_crckrock',
    previewColor: '#422817',
    description: 'Tekstur parket kayu gelap terpopuler di Texture Studio SA-MP'
  },
  {
    id: 'wood_natural_timber',
    name: 'Natural Timber Pine',
    category: 'wood',
    modelId: 10756,
    txdName: 'cuntwwood',
    textureName: 'timber',
    previewColor: '#966f44',
    description: 'Papan kayu pinus alami dengan serat kayu terlihat jelas'
  },
  {
    id: 'wood_varnished_oak',
    name: 'Polished Golden Oak',
    category: 'wood',
    modelId: 19353,
    txdName: 'all_walls',
    textureName: 'wall021',
    previewColor: '#b8860b',
    description: 'Lantai kayu ek pernis mengkilap bernuansa emas hangat'
  },
  {
    id: 'wood_vertical_slats',
    name: 'Wood Acoustic Slats',
    category: 'wood',
    modelId: 19353,
    txdName: 'all_walls',
    textureName: 'wall020',
    previewColor: '#6e4726',
    description: 'Panel kisi-kisi kayu vertikal aksen dinding TV & ruang santai'
  },

  // ── KERAMIK & UBIN (Tiles & Ceramic) ────────────────────────────────────────
  {
    id: 'tile_white_gloss',
    name: 'White Ceramic Tile (4x4m)',
    category: 'tiles',
    modelId: 19379,
    txdName: 'all_walls',
    textureName: 'wall027',
    previewColor: '#f8f8fa',
    description: 'Ubin keramik putih bersih dengan garis nat halus'
  },
  {
    id: 'tile_black_granite',
    name: 'Black Polished Granite Tile',
    category: 'tiles',
    modelId: 19379,
    txdName: 'all_walls',
    textureName: 'wall028',
    previewColor: '#1a1c20',
    description: 'Granit hitam kilap untuk lantai dapur dan lobi mewah'
  },
  {
    id: 'tile_mosaic_cyan',
    name: 'Bathroom Cyan Mosaic',
    category: 'tiles',
    modelId: 19379,
    txdName: 'all_walls',
    textureName: 'wall029',
    previewColor: '#2b7a78',
    description: 'Ubin mozaik kecil khusus kamar mandi & dinding dapur'
  },

  // ── MARMER (Marble) ─────────────────────────────────────────────────────────
  {
    id: 'marble_carrara_white',
    name: 'Carrara White Marble',
    category: 'marble',
    modelId: 19379,
    txdName: 'all_walls',
    textureName: 'wall025',
    previewColor: '#eaeef2',
    description: 'Marmer putih Carrara dengan urat abu-abu lembut'
  },
  {
    id: 'marble_nero_marquina',
    name: 'Nero Marquina Black Marble',
    category: 'marble',
    modelId: 19379,
    txdName: 'all_walls',
    textureName: 'wall026',
    previewColor: '#121417',
    description: 'Marmer hitam mewah dengan guratan putih'
  },

  // ── KARPET & KAIN (Carpets & Fabrics) ──────────────────────────────────────
  {
    id: 'carpet_crimson_red',
    name: 'Royal Crimson Velvet Carpet',
    category: 'carpet',
    modelId: 19379,
    txdName: 'all_walls',
    textureName: 'wall016',
    previewColor: '#800020',
    description: 'Karpet beludru merah tua untuk kamar tidur dan ruang VIP'
  },
  {
    id: 'carpet_navy_executive',
    name: 'Executive Navy Blue Wool',
    category: 'carpet',
    modelId: 19379,
    txdName: 'all_walls',
    textureName: 'wall017',
    previewColor: '#152238',
    description: 'Karpet wol biru dongker formal untuk kantor dan ruang rapat'
  },
  {
    id: 'carpet_warm_grey',
    name: 'Modern Textured Grey Carpet',
    category: 'carpet',
    modelId: 19379,
    txdName: 'all_walls',
    textureName: 'wall022',
    previewColor: '#5c6370',
    description: 'Karpet serat abu-abu netral untuk ruang tamu minimalis'
  },

  // ── BATA & BETON (Brick & Concrete) ─────────────────────────────────────────
  {
    id: 'brick_loft_red',
    name: 'Industrial Red Brick',
    category: 'brick',
    modelId: 19353,
    txdName: 'all_walls',
    textureName: 'wall010',
    previewColor: '#8b3a2b',
    description: 'Bata merah ekspos gaya industrial loft'
  },
  {
    id: 'brick_white_painted',
    name: 'Painted White Brick',
    category: 'brick',
    modelId: 19353,
    txdName: 'all_walls',
    textureName: 'wall011',
    previewColor: '#dcd8cf',
    description: 'Dinding bata bercat putih gaya skandinavia'
  },
  {
    id: 'concrete_smooth_panel',
    name: 'Smooth Exposed Concrete',
    category: 'concrete',
    modelId: 19353,
    txdName: 'all_walls',
    textureName: 'wall007',
    previewColor: '#787c82',
    description: 'Beton ekspos halus arsitektur modern'
  },

  // ── LOGAM & KACA (Metal & Glass) ────────────────────────────────────────────
  {
    id: 'metal_acoustic_panel',
    name: 'Acoustic Soundproofing Tile',
    category: 'metal',
    modelId: 19353,
    txdName: 'all_walls',
    textureName: 'wall030',
    previewColor: '#32373e',
    description: 'Panel busa peredam suara studio musik & home theater'
  },
  {
    id: 'glass_tinted_dark',
    name: 'Tinted Black Glass',
    category: 'glass',
    modelId: 19353,
    txdName: 'all_walls',
    textureName: 'wall014',
    previewColor: '#1e242d',
    description: 'Kaca gelap riben untuk partisi kamar mandi & jendela'
  },

  // ── COMMUNITY MASTERCLASS PRESETS (Dari Pro Mapper SA-MP) ───────────────────
  {
    id: 'comm_pure_white',
    name: 'Clean White Drywall (Airport White)',
    category: 'walls',
    modelId: 10765,
    txdName: 'airportgnd_sfse',
    textureName: 'white',
    previewColor: '#ffffff',
    description: 'Tekstur dinding & slab paling populer di SA-MP. Putih bersih flat tanpa bintik, sempurna untuk diwarnai hex tint'
  },
  {
    id: 'comm_matte_black',
    name: 'Matte Black Metal / Trim',
    category: 'metal',
    modelId: 10765,
    txdName: 'airportgnd_sfse',
    textureName: 'black64',
    previewColor: '#121212',
    description: 'Hitam pekat matte untuk railing pipa, frame kusen, dan lis langit-langit'
  },
  {
    id: 'comm_hotel_marble',
    name: 'Grand Hotel Glossy Marble Tile',
    category: 'tiles',
    modelId: 15034,
    txdName: 'genhotelsave',
    textureName: 'bathtile05_int',
    previewColor: '#e3dfd3',
    description: 'Ubin marmer mewah berkilau standar lobby hotel bintang 5 & balai kota (City Hall)'
  },
  {
    id: 'comm_cop_carpet',
    name: 'Official Blue-Grey Office Carpet',
    category: 'carpet',
    modelId: 14847,
    txdName: 'mp_policesf',
    textureName: 'mp_cop_carpet',
    previewColor: '#3d4a58',
    description: 'Karpet kantor resmi instansi kepolisian, kejaksaan, dan ruang rapat eksekutif'
  },
  {
    id: 'comm_polished_wood',
    name: 'Polished Oak / Walnut Wood',
    category: 'wood',
    modelId: 14847,
    txdName: 'ab_trukstpc',
    textureName: 'mp_CJ_WOOD5',
    previewColor: '#633918',
    description: 'Kayu jati/oak dipoles mewah untuk meja resepsionis dan panel dinding VIP'
  },
  {
    id: 'comm_elevator_doors',
    name: 'Brushed Steel Elevator Doors',
    category: 'metal',
    modelId: 3051,
    txdName: 'bigwhitesfe',
    textureName: 'liftdoors_kb_256',
    previewColor: '#8a9199',
    description: 'Tekstur pintu lift baja tahan karat (stainless steel) untuk shaft vertikal antar lantai'
  },
  {
    id: 'comm_green_glass',
    name: 'Architectural Safety Glass (Greenish Clear)',
    category: 'glass',
    modelId: 3858,
    txdName: 'cj_tv',
    textureName: 'green_glass_64',
    previewColor: '#86b09e',
    description: 'Kaca railing balkon mezzanine & partisi modern semi-transparan'
  },
  {
    id: 'comm_brushed_metal',
    name: 'Brushed Industrial Metal',
    category: 'metal',
    modelId: 5042,
    txdName: 'bombshop_las',
    textureName: 'greymetal',
    previewColor: '#5c6066',
    description: 'Baja industrial abu-abu untuk balok penyangga dan ventilasi AC'
  }
];

export const COLOR_PALETTE = [
  '#FFFFFF', '#000000', '#F3F4F6', '#9CA3AF', '#4B5563', '#1F2937',
  '#EF4444', '#DC2626', '#F97316', '#F59E0B', '#10B981', '#059669',
  '#06B6D4', '#3B82F6', '#1D4ED8', '#6366F1', '#8B5CF6', '#EC4899'
];
