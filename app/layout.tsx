import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Navilon Dev — Navigating Innovation',
  description: 'International IT company: software, games, AI & consulting.',
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
  openGraph: {
    title: 'Navilon Dev',
    description: 'Software, Games, AI & Innovation',
    url: 'https://navilon-dev.vercel.app',
    siteName: 'Navilon Dev',
    type: 'website'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
