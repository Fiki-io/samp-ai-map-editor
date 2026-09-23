import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'SA-MP Interior Map Editor | 3D Web Studio',
  description: 'Modern 3D web-based interior map editor for GTA San Andreas Multiplayer (SA-MP) & open.mp with Texture Studio workflow and Pawn export.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${geistSans.variable} ${geistMono.variable} antialiased dark`} style={{ height: '100dvh', overflow: 'hidden' }}>
      <body style={{ height: '100dvh', overflow: 'hidden', background: '#0b0f19', color: '#e2e8f0', display: 'flex', flexDirection: 'column' }}>
        {children}
      </body>
    </html>
  );
}
