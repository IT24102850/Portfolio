import type { MetadataRoute } from 'next';
import { site } from '../data/site';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${site.name} Portfolio`,
    short_name: site.shortName,
    description: site.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#09090b',
    theme_color: '#09090b',
    icons: [
      { src: '/images/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { src: '/images/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  };
}
