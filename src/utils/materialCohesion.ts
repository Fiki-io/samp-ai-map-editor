/**
 * Auto-Material Cohesion Engine for SA-MP 3D Map Editor
 *
 * Automatically harmonizes all walls, floors, ceilings, woodwork, metal trims,
 * and glass fixtures into a unified, professional community showcase aesthetic.
 */

import { MapObject, MaterialOverride } from '@/types/editor';

export type MaterialTheme =
  | 'modern_luxury'
  | 'corporate_executive'
  | 'police_government'
  | 'industrial_garage'
  | 'warm_cozy_home'
  | 'classic_wood';

export interface ThemePalette {
  name: string;
  description: string;
  wall: { txd: string; tex: string; color: string };
  floor: { txd: string; tex: string; color: string };
  ceiling: { txd: string; tex: string; color: string };
  wood: { txd: string; tex: string; color: string };
  metal: { txd: string; tex: string; color: string };
  glass: { txd: string; tex: string; color: string };
}

export const THEME_PALETTES: Record<MaterialTheme, ThemePalette> = {
  modern_luxury: {
    name: 'Modern Luxury Penthouse & Villa',
    description: 'Dinding drywall putih mulus seamless, lantai parket kayu hangat, lis hitam matte, dan kayu walnut gelap.',
    wall: { txd: 'burnsground', tex: 'newall10_seamless', color: '#FFFFFF' },
    floor: { txd: 'ab_trukstpd', tex: 'Bow_bar_flooring', color: '#669999' },
    ceiling: { txd: 'airportgnd_sfse', tex: 'white', color: '#FFFFFF' },
    wood: { txd: 'break_s_bins', tex: 'CJ_WOOD_DARK', color: '#FFFFFF' },
    metal: { txd: 'airportgnd_sfse', tex: 'black64', color: '#121212' },
    glass: { txd: 'break_fence3', tex: 'CJ_FRAME_Glass', color: '#FFFFFF' }
  },
  corporate_executive: {
    name: 'Corporate HQ & Executive Office',
    description: 'Dinding krem gading elegan, karpet instansi resmi, kayu jati/oak dipoles, dan kaca balustrade hijau jernih.',
    wall: { txd: 'airportgnd_sfse', tex: 'white', color: '#F7F4EB' },
    floor: { txd: 'mp_policesf', tex: 'mp_cop_carpet', color: '#FFFFFF' },
    ceiling: { txd: 'airportgnd_sfse', tex: 'white', color: '#FFFFFF' },
    wood: { txd: 'ab_trukstpc', tex: 'mp_CJ_WOOD5', color: '#FFFFFF' },
    metal: { txd: 'airportgnd_sfse', tex: 'black64', color: '#121212' },
    glass: { txd: 'cj_tv', tex: 'green_glass_64', color: '#FFFFFF' }
  },
  police_government: {
    name: 'Government Facility & Police Precinct',
    description: 'Standar balai kota dan kepolisian resmi dengan ubin marmer lobby, karpet biru navy, dan pintu baja tahan karat.',
    wall: { txd: 'airportgnd_sfse', tex: 'white', color: '#EAEFF5' },
    floor: { txd: 'genhotelsave', tex: 'bathtile05_int', color: '#FFFFFF' },
    ceiling: { txd: 'airportgnd_sfse', tex: 'white', color: '#FFFFFF' },
    wood: { txd: 'ab_trukstpc', tex: 'mp_CJ_WOOD5', color: '#FFFFFF' },
    metal: { txd: 'bombshop_las', tex: 'greymetal', color: '#FFFFFF' },
    glass: { txd: 'cj_tv', tex: 'green_glass_64', color: '#FFFFFF' }
  },
  industrial_garage: {
    name: 'Industrial Garage & Tuning Workshop',
    description: 'Beton ekspos kokoh, dinding bata merah industrial, lantai baja abu-abu, dan aksen logam gelap.',
    wall: { txd: 'all_walls', tex: 'wall007', color: '#FFFFFF' },
    floor: { txd: 'bombshop_las', tex: 'greymetal', color: '#FFFFFF' },
    ceiling: { txd: 'bombshop_las', tex: 'greymetal', color: '#555555' },
    wood: { txd: 'all_walls', tex: 'wall010', color: '#FFFFFF' },
    metal: { txd: 'bombshop_las', tex: 'greymetal', color: '#FFFFFF' },
    glass: { txd: 'break_fence3', tex: 'CJ_FRAME_Glass', color: '#FFFFFF' }
  },
  warm_cozy_home: {
    name: 'Warm Cozy Hearth & Cabin',
    description: 'Panel dinding dekoratif hotel berbintang, perapian kayu gelap, dan lantai kayu bertekstur nyaman.',
    wall: { txd: 'airport3_las', tex: 'gnhotelwall02_128', color: '#FFFFFF' },
    floor: { txd: 'ab_trukstpd', tex: 'Bow_bar_flooring', color: '#FFFFFF' },
    ceiling: { txd: 'airportgnd_sfse', tex: 'white', color: '#FFFFFF' },
    wood: { txd: 'break_s_bins', tex: 'CJ_WOOD_DARK', color: '#FFFFFF' },
    metal: { txd: 'airportgnd_sfse', tex: 'black64', color: '#121212' },
    glass: { txd: 'break_fence3', tex: 'CJ_FRAME_Glass', color: '#FFFFFF' }
  },
  classic_wood: {
    name: 'Classic Vintage Oak & Leather',
    description: 'Kemewahan kayu klasik untuk ruang sidang pengadilan, perpustakaan, atau klub cerutu eksklusif.',
    wall: { txd: 'ab_trukstpc', tex: 'mp_CJ_WOOD5', color: '#FFFFFF' },
    floor: { txd: 'ab_trukstpd', tex: 'Bow_bar_flooring', color: '#FFFFFF' },
    ceiling: { txd: 'airportgnd_sfse', tex: 'white', color: '#FFFFFF' },
    wood: { txd: 'break_s_bins', tex: 'CJ_WOOD_DARK', color: '#FFFFFF' },
    metal: { txd: 'bombshop_las', tex: 'greymetal', color: '#D4AF37' },
    glass: { txd: 'cj_tv', tex: 'green_glass_64', color: '#FFFFFF' }
  }
};

/**
 * Harmonizes materials across objects in the scene according to the chosen theme.
 */
export function applyMaterialThemeToObjects(
  objects: MapObject[],
  theme: MaterialTheme
): Array<{ id: string; materials: Record<number, MaterialOverride> }> {
  const palette = THEME_PALETTES[theme];
  if (!palette) return [];

  const updates: Array<{ id: string; materials: Record<number, MaterialOverride> }> = [];

  for (const obj of objects) {
    const nameLower = (obj.name || '').toLowerCase();
    const cat = (obj.category || '').toLowerCase();

    let targetMat: { txd: string; tex: string; color: string } | null = null;

    // Detect surface role
    if (cat === 'walls' || nameLower.includes('wall') || nameLower.includes('dinding')) {
      targetMat = palette.wall;
    } else if (nameLower.includes('ceiling') || nameLower.includes('plafon') || nameLower.includes('roof') || (cat === 'floors' && obj.position[2] > 2.5)) {
      targetMat = palette.ceiling;
    } else if (cat === 'floors' || nameLower.includes('floor') || nameLower.includes('lantai') || nameLower.includes('slab')) {
      targetMat = palette.floor;
    } else if (nameLower.includes('desk') || nameLower.includes('table') || nameLower.includes('meja') || nameLower.includes('cabinet') || nameLower.includes('lemari') || nameLower.includes('counter')) {
      targetMat = palette.wood;
    } else if (nameLower.includes('louver') || nameLower.includes('slat') || nameLower.includes('pipe') || nameLower.includes('rail') || nameLower.includes('barrier')) {
      targetMat = palette.metal;
    } else if (nameLower.includes('glass') || nameLower.includes('kaca') || nameLower.includes('shower') || nameLower.includes('balustrade')) {
      targetMat = palette.glass;
    }

    if (targetMat) {
      updates.push({
        id: obj.id,
        materials: {
          0: {
            index: 0,
            modelId: obj.modelId,
            txdName: targetMat.txd,
            textureName: targetMat.tex,
            color: targetMat.color
          }
        }
      });
    }
  }

  return updates;
}
