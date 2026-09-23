'use client';

import React, { useState } from 'react';
import { EditorProvider, useEditor } from '@/context/EditorContext';
import TopNav from '@/components/ui/TopNav';
import CatalogSidebar from '@/components/sidebar/CatalogSidebar';
import InspectorSidebar from '@/components/inspector/InspectorSidebar';
import AiCopilotDrawer from '@/components/copilot/AiCopilotDrawer';
import MapCanvas from '@/components/viewport/MapCanvas';
import ExportModal from '@/components/modals/ExportModal';
import ImportModal from '@/components/modals/ImportModal';
import ProjectHub from '@/components/dashboard/ProjectHub';

function StudioContent() {
  const { isProjectOpen } = useEditor();
  const [isExportOpen, setIsExportOpen] = useState(false);
  const [isImportOpen, setIsImportOpen] = useState(false);

  // If no project is currently open (user just arrived or clicked Exit), display Project Hub
  if (!isProjectOpen) {
    return (
      <div className="w-screen h-screen overflow-hidden bg-[#070b14]">
        <ProjectHub
          onOpenImport={() => setIsImportOpen(true)}
          onOpenExportForProject={() => setIsExportOpen(true)}
        />
        <ImportModal
          isOpen={isImportOpen}
          onClose={() => setIsImportOpen(false)}
        />
        <ExportModal
          isOpen={isExportOpen}
          onClose={() => setIsExportOpen(false)}
        />
      </div>
    );
  }

  // Active Project 3D Studio Workspace
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100dvh',
        width: '100vw',
        overflow: 'hidden',
        background: '#0b0f19'
      }}
      className="font-sans select-none"
    >
      {/* Top Control Bar with Project Title, Transform, Camera, Snap, Import, Export, Exit */}
      <TopNav
        onOpenExport={() => setIsExportOpen(true)}
        onOpenImport={() => setIsImportOpen(true)}
      />

      {/* 3-Column Studio Workspace */}
      <div className="flex-1 flex overflow-hidden relative">
        {/* Left Column: Object Catalog & Scene Outliner */}
        <CatalogSidebar
          onOpenExport={() => setIsExportOpen(true)}
          onOpenImport={() => setIsImportOpen(true)}
        />

        {/* Center Column: 3D WebGL Viewport */}
        <main className="flex-1 h-full relative overflow-hidden bg-slate-950">
          <MapCanvas />
        </main>

        {/* Right Column: Object Inspector & Texture Studio */}
        <InspectorSidebar />

        {/* AI Agentic Architect Copilot Drawer */}
        <AiCopilotDrawer />
      </div>

      {/* Modals */}
      <ExportModal
        isOpen={isExportOpen}
        onClose={() => setIsExportOpen(false)}
      />
      <ImportModal
        isOpen={isImportOpen}
        onClose={() => setIsImportOpen(false)}
      />
    </div>
  );
}

export default function Home() {
  return (
    <EditorProvider>
      <StudioContent />
    </EditorProvider>
  );
}
