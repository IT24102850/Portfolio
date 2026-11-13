import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from '../../components/icons';
import JsonLd from '../../components/json-ld';
import PageHeader from '../../components/page-header';
import { projects } from '../../data/projects';
import { about, site } from '../../data/site';

const description =
  'About Hasiru Chamika: a software engineer and SLIIT undergraduate from Weligama, Sri Lanka, working across full-stack web, mobile, AI and embedded systems.';

export const metadata: Metadata = {
  title: 'About',
  description,
  alternates: { canonical: '/about' },
  openGraph: { type: 'profile', title: `About · ${site.name}`, description, url: '/about' },
};

export default function AboutPage() {
  const stats = [
    { value: `${new Date().getFullYear() - site.startedYear}+`, label: 'Years tinkering' },
    { value: `${projects.length}`, label: 'Projects documented' },
    { value: '1st', label: 'EMBED X 2025' },
  ];

  return (
    <>
      <PageHeader
        eyebrow="About"
        title={
          <>
            Grounded in community, driven by{' '}
            <span className="font-serif font-normal text-accent italic">curiosity.</span>
          </>
        }
      >
        <p>{about.subheading}</p>
      </PageHeader>

      <section className="container-page grid gap-10 lg:grid-cols-[24rem_1fr] lg:gap-16">
        <figure className="card overflow-hidden lg:sticky lg:top-28 lg:self-start">
          <div className="relative aspect-square">
            <Image
              src={site.portrait}
              alt={`${site.name} sitting at a cafe table by a window`}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 384px"
              className="object-cover"
            />
          </div>
          <figcaption className="grid grid-cols-3 divide-x divide-line border-t border-line">
            {stats.map((stat) => (
              <div key={stat.label} className="px-4 py-5">
                <p className="font-serif text-3xl leading-none">{stat.value}</p>
                <p className="mt-2 text-xs text-muted">{stat.label}</p>
              </div>
            ))}
          </figcaption>
        </figure>

        <div>
          <p className="text-2xl leading-relaxed sm:text-3xl sm:leading-snug">{about.description}</p>
          <p className="mt-6 text-lg leading-relaxed text-muted">{site.intro}</p>

          <blockquote className="mt-10 border-l-2 border-accent pl-6 font-serif text-3xl leading-snug italic sm:text-4xl">
            “{about.quote}”
          </blockquote>

          <dl className="mt-12 grid gap-4 sm:grid-cols-3">
            {about.quickFacts.map((fact) => (
              <div key={fact.label} className="card p-5">
                <dt className="eyebrow">{fact.label}</dt>
                <dd className="mt-3 text-fg">{fact.value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/projects" className="btn btn-primary">
              See the work
            </Link>
            <Link href="/contact" className="btn btn-ghost">
              Get in touch
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="container-page pt-24 sm:pt-32" aria-labelledby="timeline-heading">
        <p className="eyebrow">Journey</p>
        <h2 id="timeline-heading" className="mt-4 text-4xl font-medium sm:text-5xl">
          How I got <span className="font-serif font-normal italic">here.</span>
        </h2>
        <ol className="mt-12 border-t border-line">
          {about.timeline.map((item) => (
            <li
              key={item.year}
              className="reveal grid gap-2 border-b border-line py-8 sm:grid-cols-[8rem_1fr_1.5fr] sm:gap-8"
            >
              <span className="font-serif text-4xl leading-none text-accent">{item.year}</span>
              <h3 className="text-2xl font-medium">{item.title}</h3>
              <p className="leading-relaxed text-muted">{item.description}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="container-page pt-24 sm:pt-32" aria-labelledby="life-heading">
        <p className="eyebrow">Off the clock</p>
        <h2 id="life-heading" className="mt-4 text-4xl font-medium sm:text-5xl">
          A week in <span className="font-serif font-normal italic">Weligama.</span>
        </h2>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {about.lifestyle.map((block) => (
            <div key={block.title} className="card card-glow reveal p-7">
              <h3 className="text-xl font-medium">{block.title}</h3>
              <p className="mt-3 leading-relaxed text-muted">{block.description}</p>
              <ul className="mt-6 space-y-2 border-t border-line pt-5 text-sm text-muted">
                {block.details.map((detail) => (
                  <li key={detail} className="flex gap-3">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <ul className="mt-6 flex flex-wrap gap-2">
          {about.favorites.map((favorite) => (
            <li key={favorite} className="chip !px-4 !py-2 !text-sm">
              {favorite}
            </li>
          ))}
        </ul>
      </section>

      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'ProfilePage',
          url: `${site.url}/about`,
          name: `About ${site.name}`,
          mainEntity: { '@id': `${site.url}/#person` },
        }}
      />
    </>
  );
}
