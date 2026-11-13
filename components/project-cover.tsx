import Image from 'next/image';
import type { Project } from '../data/projects';

/** Screenshot when the project has one, otherwise a generated typographic cover. */
export default function ProjectCover({
  project,
  sizes,
  priority = false,
  className = '',
}: {
  project: Project;
  sizes: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <div className={`relative overflow-hidden bg-surface-2 ${className}`}>
      {project.cover ? (
        <Image
          src={project.cover.src}
          alt={project.cover.alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />
      ) : (
        <div className="absolute inset-0 grid place-items-center overflow-hidden" aria-hidden="true">
          <div className="bg-grid absolute inset-0 opacity-80" />
          <div className="absolute -top-1/3 left-1/2 h-[140%] w-[70%] -translate-x-1/2 rounded-full bg-accent-soft blur-3xl" />
          <span className="relative font-serif text-[clamp(3rem,9vw,6rem)] leading-none text-fg/90 italic">
            {project.title.split(' ')[0]}
          </span>
        </div>
      )}
    </div>
  );
}
