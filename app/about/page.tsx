import Image from 'next/image';
import SiteFooter from '../../components/site-footer';
import SiteHeader from '../../components/site-header';
import content from '../../data/content';

type AboutContent = typeof content.aboutPage;

type Highlight = {
  title: string;
  description: string;
  image?: string;
};

type TimelineEntry = {
  year: string;
  title: string;
  description: string;
};

type LifestyleCard = {
  title: string;
  description: string;
  details?: string[];
};

type Stat = {
  label: string;
  value: string;
};

type QuickFact = {
  label: string;
  value: string;
};

const aboutData: AboutContent = content.aboutPage ?? {
  hero: {
    headline: 'Always learning.',
    subheading: 'Life in motion.',
    description: 'Stories and highlights coming soon.',
    quote: 'Stay curious.',
    image: '/images/my.jpg',
    stats: [],
    quickFacts: []
  },
  lifestyle: [],
  timeline: [],
  highlights: [],
  favorites: []
};

const hero = aboutData.hero;
const lifestyle = Array.isArray(aboutData.lifestyle) ? (aboutData.lifestyle as LifestyleCard[]) : [];
const timeline = Array.isArray(aboutData.timeline) ? (aboutData.timeline as TimelineEntry[]) : [];
const highlights = Array.isArray(aboutData.highlights) ? (aboutData.highlights as Highlight[]) : [];
const favorites = Array.isArray(aboutData.favorites) ? aboutData.favorites : [];
const stats = Array.isArray(hero?.stats) ? (hero?.stats as Stat[]) : [];
const quickFacts = Array.isArray(hero?.quickFacts) ? (hero?.quickFacts as QuickFact[]) : [];

export default function AboutPage() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="pointer-events-none absolute -left-40 top-20 hidden h-72 w-72 rounded-[24rem] glow-ring opacity-70 md:block" />
        <div className="absolute -top-32 left-1/2 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-cyan-400/18 blur-[200px]" />
        <div className="absolute bottom-[-6rem] right-[-8rem] h-[38rem] w-[38rem] rounded-full bg-indigo-500/20 blur-[220px]" />
      </div>
      <SiteHeader />
      <main className="flex-1 pt-32">
        <section className="mx-auto max-w-6xl px-6 pb-24">
          <header className="mb-16 grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:items-center">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs uppercase tracking-[0.28em] text-cyan-100">
                About Me
              </span>
              <div className="space-y-4">
                <h1 className="text-3xl font-semibold text-white sm:text-4xl">{hero?.headline}</h1>
                <p className="text-lg text-cyan-100/80">{hero?.subheading}</p>
                <p className="muted max-w-2xl text-base">{hero?.description}</p>
              </div>
              <blockquote className="rounded-3xl border border-white/10 bg-white/[0.08] px-5 py-4 text-sm text-cyan-100/90 shadow-[0_25px_50px_-35px_rgba(15,23,42,0.65)]">
                “{hero?.quote}”
              </blockquote>
              {stats.length > 0 && (
                <div className="grid gap-3 sm:grid-cols-3">
                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-3xl border border-white/10 bg-white/[0.08] px-5 py-4 text-sm text-zinc-300 shadow-[0_30px_60px_-45px_rgba(15,23,42,0.7)] backdrop-blur-md"
                    >
                      <p className="text-xs uppercase tracking-[0.25em] text-zinc-400">{stat.label}</p>
                      <p className="mt-2 text-2xl font-semibold text-white">
                        <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-indigo-400 bg-clip-text text-transparent">
                          {stat.value}
                        </span>
                      </p>
                    </div>
                  ))}
                </div>
              )}
              {quickFacts.length > 0 && (
                <div className="grid gap-3 sm:grid-cols-3">
                  {quickFacts.map((fact) => (
                    <div key={fact.label} className="rounded-3xl border border-white/10 bg-white/[0.08] px-4 py-3 text-sm text-cyan-100/90">
                      <p className="text-xs uppercase tracking-[0.28em] text-zinc-400">{fact.label}</p>
                      <p className="mt-1 text-sm text-white/90">{fact.value}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="relative mx-auto w-full max-w-sm">
              <div className="absolute inset-0 rounded-[2.25rem] bg-gradient-to-br from-cyan-400/30 via-transparent to-purple-500/25 blur-3xl" />
              <div className="relative overflow-hidden rounded-[2.25rem] border border-white/10 bg-white/[0.08] shadow-[0_35px_70px_-45px_rgba(14,116,144,0.65)]">
                {hero?.image ? (
                  <Image
                    src={hero.image}
                    alt="Portrait"
                    width={640}
                    height={800}
                    className="h-full w-full object-cover"
                    priority
                  />
                ) : (
                  <div className="flex h-[28rem] items-center justify-center text-sm text-cyan-100/70">
                    Photo coming soon
                  </div>
                )}
              </div>
            </div>
          </header>

          {lifestyle.length > 0 && (
            <section className="mb-16 space-y-6">
              <div className="space-y-3">
                <h2 className="text-2xl font-semibold text-white">Lifestyle Snapshots</h2>
                <p className="muted max-w-3xl text-base">
                  How I balance studies, family, and the projects that keep me inspired.
                </p>
              </div>
              <div className="grid gap-6 md:grid-cols-3">
                {lifestyle.map((card) => (
                  <article
                    key={card.title}
                    className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.06] p-6 shadow-[0_30px_60px_-45px_rgba(15,23,42,0.65)] transition-transform duration-300 hover:-translate-y-2 hover:border-cyan-400/50 hover:shadow-[0_40px_80px_-50px_rgba(34,211,238,0.65)]"
                  >
                    <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/15 via-transparent to-indigo-500/10" />
                    </div>
                    <div className="relative z-10 space-y-3">
                      <h3 className="text-lg font-semibold text-white">{card.title}</h3>
                      <p className="muted text-sm leading-relaxed">{card.description}</p>
                      {Array.isArray(card.details) && card.details.length > 0 && (
                        <ul className="space-y-2 text-sm text-cyan-100/90">
                          {card.details.map((detail) => (
                            <li key={detail} className="rounded-2xl border border-white/5 bg-white/5 px-3 py-2">
                              {detail}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            </section>
          )}

          {timeline.length > 0 && (
            <section className="mb-16 space-y-6">
              <div className="space-y-3">
                <h2 className="text-2xl font-semibold text-white">Milestones</h2>
                <p className="muted max-w-3xl text-base">
                  Moments that shaped my journey from tinkering at home to engineering competitive robotics stacks.
                </p>
              </div>
              <div className="relative pl-6">
                <div className="absolute left-2 top-0 bottom-0 hidden w-px bg-gradient-to-b from-cyan-400/40 via-white/10 to-transparent md:block" />
                <div className="flex flex-col gap-8">
                  {timeline.map((entry) => (
                    <article
                      key={`${entry.year}-${entry.title}`}
                      className="relative rounded-3xl border border-white/10 bg-white/[0.06] p-6 shadow-[0_30px_60px_-45px_rgba(15,23,42,0.65)] backdrop-blur-lg"
                    >
                      <div className="pointer-events-none absolute -left-[19px] top-8 hidden h-4 w-4 rounded-full border-2 border-cyan-300/70 bg-[#0a1124] md:block" />
                      <div className="space-y-2">
                        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.28em] text-cyan-100/90">
                          {entry.year}
                        </span>
                        <h3 className="text-lg font-semibold text-white">{entry.title}</h3>
                        <p className="muted text-sm leading-relaxed">{entry.description}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </section>
          )}

          {highlights.length > 0 && (
            <section className="mb-16 space-y-6">
              <div className="space-y-3">
                <h2 className="text-2xl font-semibold text-white">Memory Gallery</h2>
                <p className="muted max-w-3xl text-base">
                  Snapshots from the wins, the experiments, and the people cheering me on.
                </p>
              </div>
              <div className="grid gap-6 md:grid-cols-3">
                {highlights.map((highlight) => (
                  <article
                    key={highlight.title}
                    className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.06] shadow-[0_30px_60px_-45px_rgba(15,23,42,0.65)] transition-transform duration-300 hover:-translate-y-2 hover:border-cyan-400/50 hover:shadow-[0_40px_80px_-50px_rgba(34,211,238,0.6)]"
                  >
                    <div className="relative h-56 overflow-hidden">
                      {highlight.image ? (
                        <Image
                          src={highlight.image}
                          alt={highlight.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover"
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center text-sm text-cyan-100/70">
                          Memory coming soon
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a1124] via-transparent to-transparent opacity-80" />
                    </div>
                    <div className="space-y-2 px-5 pb-6 pt-4">
                      <h3 className="text-lg font-semibold text-white">{highlight.title}</h3>
                      <p className="muted text-sm leading-relaxed">{highlight.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          )}

          {favorites.length > 0 && (
            <section className="space-y-6">
              <div className="space-y-3">
                <h2 className="text-2xl font-semibold text-white">Little Joys</h2>
                <p className="muted max-w-3xl text-base">
                  The habits and hobbies that refuel my creativity.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                {favorites.map((item) => (
                  <span key={item} className="rounded-3xl border border-white/10 bg-white/[0.08] px-4 py-2 text-sm text-cyan-100/90">
                    {item}
                  </span>
                ))}
              </div>
            </section>
          )}
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
