'use client';

import { useState } from 'react';
import { categories, type Category, type Project } from '../data/projects';
import ProjectCard from './project-card';

export default function ProjectExplorer({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<Category | 'All'>('All');
  const visible = active === 'All' ? projects : projects.filter((project) => project.categories.includes(active));

  const filters = ['All', ...categories] as const;

  return (
    <div>
      <div role="group" aria-label="Filter projects by category" className="flex flex-wrap gap-2">
        {filters.map((filter) => {
          const count =
            filter === 'All' ? projects.length : projects.filter((p) => p.categories.includes(filter)).length;
          const selected = active === filter;
          return (
            <button
              key={filter}
              type="button"
              aria-pressed={selected}
              onClick={() => setActive(filter)}
              className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                selected ? 'border-fg bg-fg text-bg' : 'border-line text-muted hover:border-line-strong hover:text-fg'
              }`}
            >
              {filter} <span className={`font-mono text-xs ${selected ? 'opacity-60' : 'text-faint'}`}>{count}</span>
            </button>
          );
        })}
      </div>

      <p className="sr-only" aria-live="polite">
        Showing {visible.length} projects
      </p>

      <ul className="mt-10 grid gap-6 md:grid-cols-2">
        {visible.map((project, i) => (
          <li key={project.slug} className={i > 1 ? 'reveal' : undefined}>
            <ProjectCard project={project} priority={i < 2} />
          </li>
        ))}
      </ul>
    </div>
  );
}
