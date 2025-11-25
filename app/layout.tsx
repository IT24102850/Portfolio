import './globals.css';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Plus_Jakarta_Sans } from 'next/font/google';
import SocialDock from '../components/social-dock';

export const metadata: Metadata = {
  title: 'Hasiru Chamika · Product Designer & Engineer',
  description:
    'Digital product designer and developer crafting polished end-to-end experiences across web, mobile, and embedded systems.',
  manifest: '/images/site.webmanifest',
  icons: {
    icon: [
      { url: '/images/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: ['/images/favicon.ico'],
    apple: [{ url: '/images/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
};

const plusJakarta = Plus_Jakarta_Sans({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${plusJakarta.className} text-zinc-200`}>
        {children}
        <SocialDock />
      </body>
    </html>
  );
}
