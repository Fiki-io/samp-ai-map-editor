# 🌆 SA-MP & open.mp 3D Interior Map Editor + AI Architect

A state-of-the-art web-based **3D Map Editor & Autonomous AI World Architect** for **GTA San Andreas (SA-MP & open.mp)**. Built with Next.js, Three.js, and Google Gemini AI Agentic Function Calling.

---

## ✨ Key Features

### 🤖 1. Autonomous AI Architect (Gemini Agentic Copilot)
- **Universal Multi-Zoning Intelligence**: Designs complete facilities (Lobby/Reception, Circulation Corridors, Staff Workspaces, Holding Cells, Meeting Rooms, Vaults) rather than isolated single boxes.
- **Function Calling Engine**:
  - `search_objects`: Real-time semantic catalog search with Indonesian & English keyword mapping.
  - `build_room`: Mathematically calculates 100% airtight, zero-gap walls (`19353`), floor slabs (`19379`), ceilings, and accessible doorway openings (`19355`).
  - `batch_place_furniture`: Places 15–30 grounded props per batch call.
- **Precision Grounding System (Zero-Floating)**:
  - `surface: 'floor'`: Aligns legs and wheels directly to floor level ($Z = 0.00\,\text{m}$).
  - `surface: 'tabletop'`: Places computers, laptops, desk lamps, and phones flush on desks ($Z = \text{floorLevel} + 0.78\,\text{m}$).
  - `surface: 'ceiling'`: Mounts chandeliers and lamps flush against roof slabs.
  - `surface: 'wall'`: Mounts wall decor and clocks at eye level ($1.8\,\text{m}$).

### 🧱 2. Authentic 3D Catalog & Textures
- **1,480+ Curated SA-MP Interior Models**: Real extracted RenderWare DFF bounding dimensions.
- **113 Modular Wall Variations**: SA-MP 0.3.7 modular walls (`19353`–`19465`) with door frames and windows.
- **Official Texture Studio Presets**: All textures use authentic GTA SA TXD/Texture pairings (`all_walls`, `wall001`–`wall030`, `airportroads_sfse`, `cuntwwood`, etc.).

### 🚀 3. Sky Safe Export & Pawn Integration
- **Anti-Collision Elevation Offset**: Exports with automatic $+1000\,\text{m}$ $Z$ elevation in the sky to prevent collision with San Andreas terrain.
- **In-Game Teleport Command Generator**: Automatically generates `SetPlayerPos`, `SetPlayerVirtualWorld`, and `SetPlayerInterior` for server admins.
- **Pawn Script Export**: Generates clean, ready-to-compile `CreateDynamicObject` and `SetDynamicObjectMaterial` code.

---

## 🛠️ Tech Stack
- **Framework**: [Next.js](https://nextjs.org/) (App Router, Turbopack)
- **3D Engine**: [Three.js](https://threejs.org/) with OrbitControls & TransformControls
- **Styling**: Tailwind CSS & Lucide Icons
- **AI Model**: Google Gemini API (`gemini-3.5-flash-lite`, `gemini-3.6-flash`)

---

## 🚀 Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Fiki-io/samp-ai-map-editor.git
   cd samp-ai-map-editor
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   Navigate to [http://localhost:3000](http://localhost:3000).

5. **AI Copilot Setup:**
   - Open AI Copilot drawer in the editor.
   - Insert your Gemini API Key in the Settings menu.

---

## 📄 License
MIT License.
