import Link from 'next/link';
import type { Project } from '../data/projects';
import { ArrowUpRight, TrophyIcon } from './icons';
import ProjectCover from './project-cover';

export default function ProjectCard({
  project,
  size = 'md',
  priority = false,
}: {
  project: Project;
  size?: 'md' | 'lg';
  priority?: boolean;
}) {
  const large = size === 'lg';
  const shown = large ? 7 : 4;
  return (
    <article className={`card card-glow group flex h-full flex-col overflow-hidden ${large ? 'lg:flex-row' : ''}`}>
      <ProjectCover
        project={project}
        priority={priority}
        sizes={large ? '(max-width: 1024px) 100vw, 720px' : '(max-width: 768px) 100vw, 600px'}
        className={large ? 'aspect-[16/9] lg:aspect-auto lg:min-h-[26rem] lg:w-[58%]' : 'aspect-[16/9]'}
      />
      <div className={`flex flex-1 flex-col ${large ? 'p-7 sm:p-10' : 'p-6 sm:p-7'}`}>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-xs text-faint">
          <span>{project.year}</span>
          <span aria-hidden="true">/</span>
          <span>{project.categories.join(' · ')}</span>
        </div>
        <h3 className={`mt-4 font-medium ${large ? 'text-3xl sm:text-4xl' : 'text-2xl'}`}>
          <Link href={`/projects/${project.slug}`} className="after:absolute after:inset-0 after:z-10">
            {project.title}
          </Link>
        </h3>
        <p className={`mt-3 leading-relaxed text-muted ${large ? 'text-base sm:text-lg' : 'text-[0.95rem]'}`}>
          {project.tagline}
        </p>
        {project.award ? (
          <p className="mt-4 inline-flex items-center gap-2 text-sm text-accent">
            <TrophyIcon className="h-4 w-4" />
            {project.award}
          </p>
        ) : null}
        <ul className="mt-6 flex flex-wrap gap-2">
          {project.stack.slice(0, shown).map((tech) => (
            <li key={tech} className="chip">
              {tech}
            </li>
          ))}
          {project.stack.length > shown ? <li className="chip">+{project.stack.length - shown}</li> : null}
        </ul>
        <span className="mt-auto inline-flex items-center gap-1.5 pt-8 text-sm font-medium text-fg">
          Read case study
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </article>
  );
}
