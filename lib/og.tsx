import { ImageResponse } from 'next/og';
import { site } from '../data/site';

export const ogSize = { width: 1200, height: 630 };

/** Shared Open Graph card. Satori only supports flexbox, so every container declares display: flex. */
export function ogImage({ eyebrow, title, footer }: { eyebrow: string; title: string; footer: string }) {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 72,
          background: '#09090b',
          backgroundImage: 'radial-gradient(900px 500px at 85% -10%, rgba(190, 242, 100, 0.22), transparent 70%)',
          color: '#f4f4f5',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', fontSize: 28, color: '#a1a1aa' }}>
          <div style={{ width: 16, height: 16, borderRadius: 16, background: '#bef264', marginRight: 16 }} />
          {eyebrow}
        </div>
        <div
          style={{
            display: 'flex',
            fontSize: title.length > 28 ? 84 : 112,
            fontWeight: 600,
            letterSpacing: -4,
            lineHeight: 1.02,
          }}
        >
          {title}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 28, color: '#a1a1aa' }}>
          <div style={{ display: 'flex', maxWidth: 820 }}>{footer}</div>
          <div style={{ display: 'flex', color: '#bef264' }}>{site.url.replace('https://', '')}</div>
        </div>
      </div>
    ),
    ogSize,
  );
}
