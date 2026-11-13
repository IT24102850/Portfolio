import type { Metadata } from 'next';
import Link from 'next/link';
import PageHeader from '../../components/page-header';
import { projectsUsing } from '../../data/projects';
import { site, skillGroups } from '../../data/site';

const description =
  'The stack Hasiru Chamika works in, mapped to the projects that prove it: TypeScript, React, Next.js, ASP.NET Core, Flutter, Python, PostgreSQL, ESP32 and more.';

export const metadata: Metadata = {
  title: 'Skills',
  description,
  alternates: { canonical: '/skills' },
  openGraph: { title: `Skills · ${site.name}`, description, url: '/skills' },
};

export default function SkillsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Skills"
        title={
          <>
            Tools and stacks, each backed by a{' '}
            <span className="font-serif font-normal text-accent italic">shipped</span> build.
          </>
        }
      >
        <p>
          This page is generated from the project data. Every skill links to the work that used it, so nothing is on
          the list without evidence.
        </p>
      </PageHeader>

      <section className="container-page" aria-label="Skill groups">
        <div className="border-t border-line">
          {skillGroups.map((group) => (
            <div key={group.title} className="reveal grid gap-6 border-b border-line py-10 lg:grid-cols-[16rem_1fr] lg:gap-16">
              <h2 className="text-2xl font-medium">{group.title}</h2>
              <ul className="grid gap-x-10 sm:grid-cols-2">
                {group.skills.map((skill) => {
                  const used = projectsUsing(skill);
                  return (
                    <li key={skill} className="border-b border-line py-4 last:border-b-0 sm:[&:nth-last-child(2):nth-child(odd)]:border-b-0">
                      <div className="flex items-baseline justify-between gap-4">
                        <span className="text-lg">{skill}</span>
                        <span className="font-mono text-xs text-faint">
                          {used.length} {used.length === 1 ? 'project' : 'projects'}
                        </span>
                      </div>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted">
                        {used.map((project, i) => (
                          <span key={project.slug}>
                            {i > 0 ? ', ' : null}
                            <Link href={`/projects/${project.slug}`} className="link-underline hover:text-fg">
                              {project.title}
                            </Link>
                          </span>
                        ))}
                      </p>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
