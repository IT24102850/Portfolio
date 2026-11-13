import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, PinIcon, TrophyIcon } from '../components/icons';
import LocalTime from '../components/local-time';
import ProjectCard from '../components/project-card';
import { featuredProjects, projects } from '../data/projects';
import { site } from '../data/site';

const marquee = [
  'TypeScript',
  'React',
  'Next.js',
  'ASP.NET Core',
  'Flutter',
  'Node.js',
  'PostgreSQL',
  'Python',
  'FastAPI',
  'Agent pipelines',
  'ESP32',
  'Supabase',
  'Docker',
  'Tailwind CSS',
];

const capabilities = [
  {
    index: '01',
    title: 'Full-stack web',
    body: 'Typed APIs and the interfaces on top of them. ASP.NET Core or Node on the server, React and Next.js in the browser, PostgreSQL underneath.',
  },
  {
    index: '02',
    title: 'Mobile',
    body: 'Flutter with Riverpod and React Native with Expo, sharing one backend and one set of workflows with the web client.',
  },
  {
    index: '03',
    title: 'Agentic AI and ML',
    body: 'Multi-agent pipelines with deterministic safety gates and human approval, plus classical ML for risk forecasting.',
  },
  {
    index: '04',
    title: 'IoT and embedded',
    body: 'ESP32 and Arduino firmware, sensor telemetry and the dashboards that make it readable. Competition-tested.',
  },
];

export default function Home() {
  const [lead, ...rest] = featuredProjects;
  const liveCount = projects.filter((project) => project.live).length;
  const years = new Date().getFullYear() - site.startedYear;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="bg-grid pointer-events-none absolute inset-0" aria-hidden="true" />
        <div
          className="pointer-events-none absolute -top-40 left-1/2 h-[34rem] w-[60rem] -translate-x-1/2 rounded-full bg-accent-soft blur-[120px]"
          aria-hidden="true"
        />
        <div className="container-page relative grid gap-12 pt-36 pb-20 sm:pt-44 lg:grid-cols-[1fr_22rem] lg:items-end lg:gap-16 lg:pb-28">
          <div>
            <p className="animate-rise inline-flex items-center gap-2.5 rounded-full border border-line bg-surface/60 py-1.5 pr-4 pl-3 text-sm text-muted backdrop-blur">
              <span className="animate-pulse-dot h-2 w-2 rounded-full bg-accent" />
              Open to internships and collaborations
            </p>
            <h1 className="animate-rise mt-7 text-[clamp(2.6rem,7.2vw,5.75rem)] leading-[0.98] font-medium [animation-delay:80ms]">
              <span className="block text-[0.34em] leading-normal font-normal tracking-normal text-muted">
                {site.name}, {site.role.toLowerCase()}
              </span>
              Building software{' '}
              <span className="font-serif font-normal text-accent italic">from firmware</span> to cloud.
            </h1>
            <p className="animate-rise mt-7 max-w-xl text-lg leading-relaxed text-muted [animation-delay:160ms]">
              {site.intro}
            </p>
            <div className="animate-rise mt-9 flex flex-wrap gap-3 [animation-delay:240ms]">
              <Link href="/projects" className="btn btn-primary">
                View my work
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/contact" className="btn btn-ghost">
                Get in touch
              </Link>
            </div>
          </div>

          <figure className="animate-rise card overflow-hidden [animation-delay:200ms]">
            <div className="relative aspect-[4/5]">
              <Image
                src={site.portrait}
                alt={`Portrait of ${site.name}`}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 352px"
                className="object-cover"
              />
            </div>
            <figcaption className="flex items-center justify-between gap-3 px-5 py-4 font-mono text-xs text-muted">
              <span className="inline-flex items-center gap-1.5">
                <PinIcon className="h-3.5 w-3.5" />
                {site.locality}, LK
              </span>
              <LocalTime />
            </figcaption>
          </figure>
        </div>

        {/* Stack marquee */}
        <div className="mask-fade-x relative border-y border-line py-5" aria-hidden="true">
          <div className="animate-marquee flex w-max gap-10 font-mono text-sm text-faint">
            {[...marquee, ...marquee].map((item, i) => (
              <span key={i} className="flex items-center gap-10">
                {item}
                <span className="h-1 w-1 rounded-full bg-accent" />
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Selected work */}
      <section className="container-page pt-24 sm:pt-32" aria-labelledby="work-heading">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">Selected work</p>
            <h2 id="work-heading" className="mt-4 text-4xl font-medium sm:text-5xl">
              Things I&apos;ve <span className="font-serif font-normal italic">shipped.</span>
            </h2>
          </div>
          <Link href="/projects" className="link-underline inline-flex items-center gap-1.5 text-sm text-muted hover:text-fg">
            All {projects.length} projects
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="reveal md:col-span-2">
            <ProjectCard project={lead} size="lg" priority />
          </div>
          {rest.slice(0, 4).map((project) => (
            <div key={project.slug} className="reveal">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </section>

      {/* Bento */}
      <section className="container-page pt-24 sm:pt-32" aria-labelledby="about-heading">
        <p className="eyebrow">At a glance</p>
        <h2 id="about-heading" className="mt-4 max-w-3xl text-4xl font-medium sm:text-5xl">
          Engineer first, with a <span className="font-serif font-normal italic">maker&apos;s</span> habit of finishing
          things.
        </h2>

        <div className="mt-12 grid gap-4 md:grid-cols-6">
          <div className="card card-glow reveal p-7 md:col-span-4 sm:p-9">
            <p className="eyebrow">About</p>
            <p className="mt-5 text-xl leading-relaxed sm:text-2xl">
              I started with an Arduino and a bedroom light switch in {site.startedYear}. Today I build multi-tenant
              platforms, mobile apps and agent pipelines, and I still reach for a soldering iron when a project needs
              one.
            </p>
            <Link href="/about" className="link-underline mt-8 inline-flex items-center gap-1.5 text-sm text-muted hover:text-fg">
              More about me
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="card card-glow reveal flex flex-col justify-between p-7 md:col-span-2">
            <TrophyIcon className="h-7 w-7 text-accent" />
            <div className="mt-10">
              <p className="text-2xl font-medium">1st place</p>
              <p className="mt-2 text-muted">BattleBot competition, EMBED X Robotics Workshop 2025 at SLIIT.</p>
            </div>
          </div>

          {[
            { value: `${projects.length}`, label: 'Projects documented here' },
            { value: `${liveCount}`, label: 'Live deployments you can open' },
            { value: `${years}+`, label: 'Years building things' },
          ].map((stat) => (
            <div key={stat.label} className="card reveal p-7 md:col-span-2">
              <p className="font-serif text-6xl leading-none">{stat.value}</p>
              <p className="mt-4 text-sm text-muted">{stat.label}</p>
            </div>
          ))}

          <div className="card card-glow reveal p-7 md:col-span-3">
            <p className="eyebrow">Currently</p>
            <p className="mt-5 text-xl">{site.degree}</p>
            <p className="mt-2 text-muted">{site.university}</p>
          </div>
          <div className="card card-glow reveal p-7 md:col-span-3">
            <p className="eyebrow">Latest</p>
            <p className="mt-5 text-xl">
              Unify: a four-agent booking pipeline with a deterministic safety gate, running on web and Flutter.
            </p>
            <Link
              href="/projects/unify"
              className="link-underline mt-4 inline-flex items-center gap-1.5 text-sm text-muted hover:text-fg"
            >
              Read the case study
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="container-page pt-24 sm:pt-32" aria-labelledby="capabilities-heading">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">Capabilities</p>
            <h2 id="capabilities-heading" className="mt-4 text-4xl font-medium sm:text-5xl">
              Where I&apos;m <span className="font-serif font-normal italic">useful.</span>
            </h2>
          </div>
          <Link href="/skills" className="link-underline inline-flex items-center gap-1.5 text-sm text-muted hover:text-fg">
            Full skill map
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
        <ol className="mt-12 border-t border-line">
          {capabilities.map((item) => (
            <li
              key={item.index}
              className="reveal group grid gap-3 border-b border-line py-8 transition-colors hover:bg-surface sm:grid-cols-[5rem_1fr_1.4fr] sm:gap-8 sm:px-4"
            >
              <span className="font-mono text-sm text-faint">{item.index}</span>
              <h3 className="text-2xl font-medium transition-colors group-hover:text-accent">{item.title}</h3>
              <p className="leading-relaxed text-muted">{item.body}</p>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}
