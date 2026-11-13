import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, TrophyIcon } from '../../components/icons';
import PageHeader from '../../components/page-header';
import { experiences, site } from '../../data/site';

const description =
  'Experience of Hasiru Chamika: full-stack product engineering, undergraduate research and mentoring at SLIIT, and freelance development since 2021.';

export const metadata: Metadata = {
  title: 'Experience',
  description,
  alternates: { canonical: '/experience' },
  openGraph: { title: `Experience · ${site.name}`, description, url: '/experience' },
};

export default function ExperiencePage() {
  return (
    <>
      <PageHeader
        eyebrow="Experience"
        title={
          <>
            Momentum built through research, craft and{' '}
            <span className="font-serif font-normal text-accent italic">delivery.</span>
          </>
        }
      >
        <p>
          A timeline of engineering, experiments and consulting work that connects product thinking with embedded
          systems and production code.
        </p>
      </PageHeader>

      <section className="container-page" aria-label="Roles">
        <ol className="border-t border-line">
          {experiences.map((experience) => (
            <li
              key={experience.title}
              className="reveal grid gap-6 border-b border-line py-12 lg:grid-cols-[16rem_1fr] lg:gap-16"
            >
              <div>
                <p className="font-mono text-sm text-accent">{experience.period}</p>
                <p className="mt-2 text-muted">{experience.company}</p>
              </div>
              <div className="max-w-3xl">
                <h2 className="text-3xl font-medium sm:text-4xl">{experience.title}</h2>
                <p className="mt-4 text-lg text-fg">{experience.focus}</p>
                <p className="mt-3 leading-relaxed text-muted">{experience.impact}</p>
                <ul className="mt-6 space-y-3">
                  {experience.achievements.map((achievement) => (
                    <li key={achievement} className="flex gap-4 leading-relaxed">
                      <span className="mt-[0.7em] h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {achievement}
                    </li>
                  ))}
                </ul>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {experience.tools.map((tool) => (
                    <li key={tool} className="chip">
                      {tool}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="container-page grid gap-4 pt-16 md:grid-cols-2" aria-label="Education and awards">
        <div className="card card-glow reveal p-7 sm:p-9">
          <p className="eyebrow">Education</p>
          <h2 className="mt-5 text-2xl font-medium">{site.degree}</h2>
          <p className="mt-2 text-muted">{site.university}</p>
        </div>
        <div className="card card-glow reveal p-7 sm:p-9">
          <p className="eyebrow">Award</p>
          <h2 className="mt-5 flex items-center gap-3 text-2xl font-medium">
            <TrophyIcon className="h-6 w-6 text-accent" />
            1st place, BattleBot competition
          </h2>
          <p className="mt-2 text-muted">EMBED X Robotics Workshop 2025, IEEE RAS Student Branch Chapter of SLIIT.</p>
          <Link
            href="/projects/battlebot"
            className="link-underline mt-5 inline-flex items-center gap-1.5 text-sm text-muted hover:text-fg"
          >
            See the build
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
