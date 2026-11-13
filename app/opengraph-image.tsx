import { site } from '../data/site';
import { ogImage, ogSize } from '../lib/og';

export const alt = `${site.name}, ${site.role}`;
export const size = ogSize;
export const contentType = 'image/png';

export default function Image() {
  return ogImage({
    eyebrow: `${site.role} · ${site.locality}, Sri Lanka`,
    title: site.name,
    footer: 'Full-stack, mobile, agentic AI and IoT',
  });
}
