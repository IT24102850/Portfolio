import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, ArrowUpRight, GitHubIcon, TrophyIcon } from '../../../components/icons';
import JsonLd from '../../../components/json-ld';
import ProjectCover from '../../../components/project-cover';
import { getProject, projects } from '../../../data/projects';
import { site } from '../../../data/site';

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  const url = `/projects/${project.slug}`;
  return {
    title: project.title,
    description: project.tagline,
    keywords: [project.title, ...project.stack, ...project.categories],
    alternates: { canonical: url },
    openGraph: { type: 'article', title: `${project.title} · ${site.name}`, description: project.tagline, url },
    twitter: { card: 'summary_large_image', title: project.title, description: project.tagline },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const position = projects.indexOf(project);
  const next = projects[(position + 1) % projects.length];
  const facts = [
    { label: 'Year', value: project.year },
    { label: 'Type', value: project.categories.join(', ') },
    project.context ? { label: 'Context', value: project.context } : null,
    project.role ? { label: 'My role', value: project.role } : null,
  ].filter((fact): fact is { label: string; value: string } => fact !== null);

  return (
    <article>
      <header className="container-page pt-36 sm:pt-44">
        <nav aria-label="Breadcrumb" className="animate-rise">
          <Link href="/projects" className="inline-flex items-center gap-2 font-mono text-xs text-muted hover:text-fg">
            <ArrowLeft className="h-3.5 w-3.5" />
            All projects
          </Link>
        </nav>
        <h1 className="animate-rise mt-8 max-w-4xl text-5xl leading-[1.02] font-medium [animation-delay:80ms] sm:text-7xl">
          {project.title}
        </h1>
        <p className="animate-rise mt-6 max-w-3xl text-xl leading-relaxed text-muted [animation-delay:160ms] sm:text-2xl">
          {project.tagline}
        </p>
        {project.award ? (
          <p className="animate-rise mt-6 inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent-soft px-4 py-2 text-sm text-accent [animation-delay:200ms]">
            <TrophyIcon className="h-4 w-4" />
            {project.award}
          </p>
        ) : null}
        <div className="animate-rise mt-8 flex flex-wrap gap-3 [animation-delay:240ms]">
          {project.live ? (
            <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Open live site
              <ArrowUpRight className="h-4 w-4" />
            </a>
          ) : null}
          {project.repo ? (
            <a href={project.repo} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
              <GitHubIcon className="h-4 w-4" />
              Source code
            </a>
          ) : null}
        </div>
      </header>

      <div className="container-page mt-14">
        <ProjectCover
          project={project}
          priority
          sizes="(max-width: 1280px) 100vw, 1216px"
          className="card group aspect-[16/9]"
        />
      </div>

      <div className="container-page mt-16 grid gap-14 lg:grid-cols-[16rem_1fr] lg:gap-20">
        <aside>
          <dl className="grid grid-cols-2 gap-6 lg:grid-cols-1">
            {facts.map((fact) => (
              <div key={fact.label}>
                <dt className="eyebrow">{fact.label}</dt>
                <dd className="mt-2 text-fg">{fact.value}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-8">
            <h2 className="eyebrow">Stack</h2>
            <ul className="mt-3 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <li key={tech} className="chip">
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </aside>

        <div className="max-w-3xl">
          <h2 className="eyebrow">Overview</h2>
          <p className="mt-5 text-xl leading-relaxed sm:text-2xl sm:leading-relaxed">{project.description}</p>

          <h2 className="eyebrow mt-14">Highlights</h2>
          <ul className="mt-5 border-t border-line">
            {project.highlights.map((highlight, i) => (
              <li key={highlight} className="reveal grid grid-cols-[3rem_1fr] gap-2 border-b border-line py-5">
                <span className="font-mono text-sm text-faint">{String(i + 1).padStart(2, '0')}</span>
                <span className="text-lg leading-relaxed">{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {project.gallery?.length ? (
        <section className="container-page mt-16" aria-label="Gallery">
          <ul className={`grid gap-6 ${project.gallery.length > 1 ? 'md:grid-cols-2' : ''}`}>
            {project.gallery.map((image) => (
              <li key={image.src} className="card reveal relative aspect-[16/10] overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 600px"
                  className="object-cover"
                />
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <nav className="container-page mt-24" aria-label="Next project">
        <Link
          href={`/projects/${next.slug}`}
          className="card card-glow group flex items-center justify-between gap-6 p-7 sm:p-10"
        >
          <span>
            <span className="eyebrow">Next project</span>
            <span className="mt-3 block text-3xl font-medium sm:text-5xl">{next.title}</span>
          </span>
          <ArrowRight className="h-8 w-8 shrink-0 text-faint transition-all duration-300 group-hover:translate-x-2 group-hover:text-accent" />
        </Link>
      </nav>

      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': project.live ? 'SoftwareApplication' : 'CreativeWork',
              name: project.title,
              description: project.description,
              url: `${site.url}/projects/${project.slug}`,
              ...(project.live ? { applicationCategory: 'WebApplication', operatingSystem: 'Any', sameAs: project.live } : {}),
              ...(project.repo ? { codeRepository: project.repo } : {}),
              ...(project.cover ? { image: `${site.url}${project.cover.src}` } : {}),
              ...(project.award ? { award: project.award } : {}),
              dateCreated: project.year,
              keywords: project.stack.join(', '),
              author: { '@id': `${site.url}/#person` },
            },
            {
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: site.url },
                { '@type': 'ListItem', position: 2, name: 'Projects', item: `${site.url}/projects` },
                { '@type': 'ListItem', position: 3, name: project.title, item: `${site.url}/projects/${project.slug}` },
              ],
            },
          ],
        }}
      />
    </article>
  );
}
