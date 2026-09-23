#!/usr/bin/env python3
"""
Extracts RenderWare DFF 3D geometries from GTA SA cache archives:
- files/texdb/samp.img (SA-MP custom objects, modular walls 19353-19465, neon, etc.)
- files/texdb/gta_int.img (GTA SA interior furniture, kitchen, beds, chairs, tables, doors)
Outputs BufferGeometry JSON files into public/models/{modelId}.json
and updates public/models/models_index.json
"""

import os
import sys
import zipfile
import struct
import json

WORKSPACE = "/tmp/map"
CACHE_ZIP = os.path.join(WORKSPACE, "gtasa 2.10 cache.zip")
OUTPUT_DIR = os.path.join(WORKSPACE, "public/models")
INDEX_FILE = os.path.join(OUTPUT_DIR, "models_index.json")

os.makedirs(OUTPUT_DIR, exist_ok=True)

def parse_rw_geometry(data):
    """
    Parses a RenderWare 3.x DFF Clump to extract the first Geometry:
    Returns dict with vertices, normals, uvs, indices, and boundingBox.
    """
    offset = 0
    data_len = len(data)

    while offset < data_len - 12:
        chunk_type, chunk_size, chunk_version = struct.unpack("<III", data[offset:offset+12])
        if chunk_type == 0x0F: # Geometry Chunk
            # Inside Geometry chunk: first sub-chunk is Struct (0x01)
            if offset + 24 <= data_len:
                stype, ssize, sver = struct.unpack("<III", data[offset+12:offset+24])
                if stype == 0x01:
                    sdata = data[offset+24 : offset+24+ssize]
                    if len(sdata) < 16:
                        break
                    format_flags, num_uvs = struct.unpack("<HH", sdata[0:4])
                    num_tris, num_verts, num_morph = struct.unpack("<III", sdata[4:16])

                    has_normals = bool(format_flags & 0x10)
                    has_colors = bool(format_flags & 0x08)
                    has_uvs = bool(format_flags & 0x04) or (num_uvs > 0)

                    p = 16
                    # Skip prelit colors if present
                    if has_colors:
                        p += num_verts * 4

                    # Read UVs if present
                    uvs = []
                    if has_uvs:
                        for _ in range(num_verts):
                            if p + 8 > len(sdata): break
                            u, v = struct.unpack("<ff", sdata[p:p+8])
                            uvs.extend([round(u, 6), round(v, 6)])
                            p += 8

                    # Read Triangles (Indices)
                    indices = []
                    for _ in range(num_tris):
                        if p + 8 > len(sdata): break
                        # RW triangle: vertex2, vertex1, materialIndex, vertex0
                        v2, v1, mat_id, v0 = struct.unpack("<HHHH", sdata[p:p+8])
                        indices.extend([v0, v1, v2])
                        p += 8

                    # Morph Target Header: Bounding Sphere (16 bytes) + flags (8 bytes)
                    if p + 24 <= len(sdata):
                        bs_x, bs_y, bs_z, bs_radius = struct.unpack("<ffff", sdata[p:p+16])
                        has_vertices, has_normals_mt = struct.unpack("<II", sdata[p+16:p+24])
                        p += 24

                    # Read Vertices
                    vertices = []
                    min_x = min_y = min_z = float('inf')
                    max_x = max_y = max_z = float('-inf')

                    for _ in range(num_verts):
                        if p + 12 > len(sdata): break
                        vx, vy, vz = struct.unpack("<fff", sdata[p:p+12])
                        # GTA SA DFF coordinates:
                        # In GTA DFF: X is right, Y is forward, Z is up
                        # In Three.js: X is right, Y is up, Z is depth (-forward)
                        # We convert directly here to make Three.js mesh orientation natural:
                        # tx = vx, ty = vz, tz = -vy
                        tx = round(vx, 5)
                        ty = round(vz, 5)
                        tz = round(-vy, 5)

                        vertices.extend([tx, ty, tz])
                        min_x = min(min_x, tx); max_x = max(max_x, tx)
                        min_y = min(min_y, ty); max_y = max(max_y, ty)
                        min_z = min(min_z, tz); max_z = max(max_z, tz)
                        p += 12

                    # Read Normals
                    normals = []
                    if has_normals:
                        for _ in range(num_verts):
                            if p + 12 > len(sdata): break
                            nx, ny, nz = struct.unpack("<fff", sdata[p:p+12])
                            normals.extend([round(nx, 5), round(nz, 5), round(-ny, 5)])
                            p += 12

                    if len(vertices) > 0 and len(indices) > 0:
                        dim_w = round(max(max_x - min_x, 0.05), 3)
                        dim_h = round(max(max_y - min_y, 0.05), 3)
                        dim_d = round(max(max_z - min_z, 0.05), 3)
                        return {
                            "vertices": vertices,
                            "normals": normals,
                            "uvs": uvs,
                            "indices": indices,
                            "dimensions": [dim_w, dim_h, dim_d],
                            "vertCount": len(vertices) // 3,
                            "triCount": len(indices) // 3
                        }
        offset += 1
    return None

def build_ide_model_map(zip_ref):
    """
    Parses IDE files in the zip to map modelId -> dffName
    """
    model_to_dff = {}
    
    ide_files = [
        "files/SAMP/SAMP.ide",
        "files/data/maps/interior/props.ide",
        "files/data/maps/interior/props2.ide",
        "files/data/maps/interior/savehous.ide",
        "files/data/maps/interior/gen_int1.ide",
        "files/data/maps/interior/gen_int2.ide",
        "files/data/maps/interior/gen_int3.ide",
        "files/data/maps/interior/gen_int4.ide",
        "files/data/maps/interior/gen_int5.ide",
        "files/data/maps/interior/int_LA.ide",
        "files/data/maps/interior/int_SF.ide",
        "files/data/maps/interior/int_veg.ide",
        "files/data/default.ide"
    ]

    for ide_path in ide_files:
        if ide_path not in zip_ref.namelist():
            continue
        try:
            content = zip_ref.open(ide_path).read().decode("latin1", errors="ignore")
            for line in content.splitlines():
                line = line.strip()
                if not line or line.startswith("#"):
                    continue
                parts = [p.strip() for p in line.split(",")]
                if len(parts) >= 2 and parts[0].isdigit():
                    mid = int(parts[0])
                    dff_name = parts[1].lower()
                    if not dff_name.endswith(".dff"):
                        dff_name += ".dff"
                    # Keep first or priority
                    if mid not in model_to_dff or "SAMP.ide" in ide_path:
                        model_to_dff[mid] = dff_name
        except Exception as e:
            print(f"Error reading {ide_path}: {e}")

    return model_to_dff

def extract_all():
    print(f"Opening {CACHE_ZIP}...")
    with zipfile.ZipFile(CACHE_ZIP, "r") as z:
        print("Parsing IDE files...")
        model_map = build_ide_model_map(z)
        print(f"Found {len(model_map)} model ID mappings in IDE files.")

        # Invert: dffName -> [modelIds]
        dff_to_models = {}
        for mid, dff in model_map.items():
            dff_to_models.setdefault(dff, []).append(mid)

        models_index = {}
        # Load existing index if any
        if os.path.exists(INDEX_FILE):
            try:
                with open(INDEX_FILE, "r") as f:
                    models_index = json.load(f)
            except Exception:
                pass

        # Scan samp.img and gta_int.img
        img_sources = [
            ("files/texdb/samp.img", "samp.img"),
            ("files/texdb/gta_int.img", "gta_int.img")
        ]

        extracted_count = 0

        for img_path, img_label in img_sources:
            if img_path not in z.namelist():
                continue
            print(f"Scanning {img_label}...")
            with z.open(img_path) as f:
                header = f.read(8)
                if len(header) < 8:
                    continue
                num_entries = struct.unpack("<I", header[4:8])[0]
                entries = f.read(num_entries * 32)

                for i in range(num_entries):
                    off, streaming_size, size, name_raw = struct.unpack("<IHH24s", entries[i*32 : (i+1)*32])
                    fname = name_raw.split(b"\x00")[0].decode("ascii", errors="ignore").lower()
                    
                    if not fname.endswith(".dff"):
                        continue

                    # Check if this DFF belongs to any mapped interior model
                    target_mids = dff_to_models.get(fname, [])
                    if not target_mids:
                        continue

                    # Read DFF content
                    f.seek(off * 2048)
                    dff_bytes = f.read(streaming_size * 2048)
                    if len(dff_bytes) < 32:
                        continue

                    # Parse RenderWare geometry
                    geo = parse_rw_geometry(dff_bytes)
                    if not geo:
                        continue

                    # Save for each model ID
                    for mid in target_mids:
                        out_data = {
                            "modelId": mid,
                            "name": fname[:-4],
                            "vertices": geo["vertices"],
                            "normals": geo["normals"],
                            "uvs": geo["uvs"],
                            "indices": geo["indices"],
                            "dimensions": geo["dimensions"]
                        }
                        out_path = os.path.join(OUTPUT_DIR, f"{mid}.json")
                        with open(out_path, "w") as out_f:
                            json.dump(out_data, out_f)

                        models_index[str(mid)] = {
                            "name": fname[:-4],
                            "file": f"/models/{mid}.json",
                            "vertCount": geo["vertCount"],
                            "triCount": geo["triCount"],
                            "dimensions": geo["dimensions"]
                        }
                        extracted_count += 1

        # Write updated models_index.json
        with open(INDEX_FILE, "w") as f:
            json.dump(models_index, f, indent=2)

        print(f"Extraction complete! Extracted {extracted_count} real 3D models into {OUTPUT_DIR}")
        print(f"models_index.json now has {len(models_index)} indexed 3D models.")

if __name__ == "__main__":
    extract_all()
