import { getProject, projects } from '../../../data/projects';
import { site } from '../../../data/site';
import { ogImage, ogSize } from '../../../lib/og';

export const alt = `Project case study by ${site.name}`;
export const size = ogSize;
export const contentType = 'image/png';

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  return ogImage({
    eyebrow: `Case study · ${site.name}`,
    title: project?.title ?? 'Project',
    footer: project ? project.categories.join(' · ') : '',
  });
}
