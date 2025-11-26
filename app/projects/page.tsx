import Image from 'next/image';
import SiteFooter from '../../components/site-footer';
import SiteHeader from '../../components/site-header';
import content from '../../data/content';

type ProjectsPageProps = {
  searchParams?: {
    highlight?: string;
  };
};

export default function ProjectsPage({ searchParams }: ProjectsPageProps) {
  const highlight = searchParams?.highlight;

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 pt-32">
        <section className="mx-auto max-w-6xl px-6 pb-24">
          <header className="mb-12 space-y-4">
            <p className="text-sm uppercase tracking-[0.2em] text-zinc-400">Project Archive</p>
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <h1 className="text-3xl font-semibold text-white sm:text-4xl">Digital products with polish</h1>
                <p className="muted mt-3 max-w-2xl text-base">
                  A curated view of experiments, production launches, and R&D explorations across web, mobile, and
                  embedded interfaces.
                </p>
              </div>
            </div>
          </header>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {content.projects.map((project) => {
              const isHighlighted = highlight === project.title;
              const gallery = Array.isArray(project.gallery) ? project.gallery : [];
              const hashtags = Array.isArray(project.hashtags) ? project.hashtags : [];
              const isBattleBot = project.title === 'BattleBot Control Stack';

              return (
                <article
                  key={project.title}
                  className={`flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition-transform duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-white/[0.07] ${
                    isHighlighted ? 'ring-2 ring-cyan-400/70' : ''
                  }`}
                >
                  <div className="space-y-4">
                    {!isBattleBot && (
                      <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-zinc-400">
                        <span>{project.progress}% complete</span>
                        <span className="h-1 w-1 rounded-full bg-white/20" />
                        <span>Project</span>
                      </div>
                    )}
                    {!isBattleBot && project.highlight && (
                      <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-[0.65rem] uppercase tracking-[0.28em] text-cyan-200">
                        <span>{project.highlight}</span>
                      </div>
                    )}
                    <h2 className="text-xl font-semibold text-white">{project.title}</h2>
                    <p className="muted text-sm leading-relaxed">{project.description}</p>
                    {!isBattleBot && project.story && (
                      <p className="text-xs leading-relaxed text-cyan-100/90">{project.story}</p>
                    )}
                    {isBattleBot && project.highlight && (
                      <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-400/10 px-3 py-1 text-[0.65rem] uppercase tracking-[0.28em] text-amber-200">
                        <span>{project.highlight}</span>
                      </div>
                    )}
                    {isBattleBot && project.story && (
                      <p className="text-sm leading-relaxed text-amber-100/90">
                        {project.story}
                      </p>
                    )}
                    {!isBattleBot && (
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tag) => (
                          <span key={tag} className="tag-pill bg-white/8 text-cyan-200">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                    {gallery.length > 0 && !isBattleBot && (
                      <div className="mt-4">
                        {gallery.length === 1 ? (
                          <div className="relative aspect-[3/2] overflow-hidden rounded-3xl border border-white/10 bg-white/5">
                            <Image
                              src={gallery[0].src}
                              alt={gallery[0].alt}
                              fill
                              sizes="(max-width: 768px) 100vw, 50vw"
                              className="object-cover"
                              priority={isHighlighted}
                            />
                          </div>
                        ) : gallery.length === 2 ? (
                          <div className="space-y-3">
                            {gallery.map((image, index) => (
                              <div
                                key={image.src}
                                className="relative aspect-[3/2] overflow-hidden rounded-3xl border border-white/10 bg-white/5"
                              >
                                <Image
                                  src={image.src}
                                  alt={image.alt}
                                  fill
                                  sizes="(max-width: 768px) 100vw, 50vw"
                                  className="object-cover"
                                  priority={isHighlighted && index === 0}
                                />
                              </div>
                            ))}
                          </div>
                        ) : (
                          <div className="grid grid-cols-5 grid-rows-2 gap-2">
                            <div className="relative col-span-3 row-span-2 aspect-[4/3] overflow-hidden rounded-2xl">
                              <Image
                                src={gallery[0].src}
                                alt={gallery[0].alt}
                                fill
                                sizes="(max-width: 768px) 100vw, 33vw"
                                className="object-cover"
                                priority={isHighlighted}
                              />
                            </div>
                            {gallery.slice(1).map((image, index) => (
                              <div
                                key={image.src}
                                className={`relative col-span-2 aspect-square overflow-hidden rounded-2xl ${index === 0 ? 'row-span-1' : 'row-span-1'}`}
                              >
                                <Image src={image.src} alt={image.alt} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                    {gallery.length > 0 && isBattleBot && (
                      <div className="mt-4 space-y-3">
                        <div className="overflow-hidden rounded-3xl border border-amber-400/20 bg-black/40" style={{ aspectRatio: '5 / 4' }}>
                          <Image
                            src={gallery[0].src}
                            alt={gallery[0].alt}
                            width={1280}
                            height={1024}
                            className="h-full w-full object-cover object-center"
                            priority={isHighlighted}
                          />
                        </div>
                        <p className="text-xs text-amber-200/80">Captured moments from the winning BattleBot build.</p>
                      </div>
                    )}
                    {hashtags.length > 0 && !isBattleBot && (
                      <div className="flex flex-wrap gap-2 pt-2">
                        {hashtags.map((tag) => (
                          <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[0.65rem] uppercase tracking-[0.2em] text-zinc-300">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                  {!isBattleBot && (
                    <div className="mt-6">
                      <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
                        <div className="h-full rounded-full bg-gradient-to-r from-[#6366f1] via-[#8b5cf6] to-[#22d3ee]" style={{ width: `${project.progress}%` }} />
                      </div>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
