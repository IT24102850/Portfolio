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
  const projects = Array.isArray(content.projects) ? content.projects : [];
  const highlight = searchParams?.highlight;

  const uniqueTech = new Set<string>();
  const signatureCount = projects.filter((project) => project.special).length;

  projects.forEach((project) => {
    if (Array.isArray(project.tech)) {
      project.tech.forEach((tech) => uniqueTech.add(tech));
    }
  });

  const heroStats = [
    { label: 'Projects Shipped', value: projects.length.toString() },
    { label: 'Core Technologies', value: uniqueTech.size.toString() },
    { label: 'Signature Builds', value: signatureCount.toString() }
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="relative flex-1 pt-32">
        <div className="pointer-events-none absolute -left-48 top-16 hidden h-72 w-72 rounded-[24rem] glow-ring opacity-60 md:block" />
        <div className="pointer-events-none absolute -right-40 bottom-20 hidden h-64 w-64 rounded-[24rem] glow-ring opacity-50 md:block" />
        <section className="relative mx-auto max-w-6xl px-6 pb-24">
          <header className="relative mb-12 space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs uppercase tracking-[0.28em] text-cyan-100">
              Project Archive
            </span>
            <div className="space-y-4">
              <h1 className="text-3xl font-semibold text-white sm:text-4xl">
                Crafted products with a studio-grade finish
              </h1>
              <p className="muted max-w-3xl text-base">
                From IoT telemetry to commerce platforms, each build blends design, hardware awareness, and reliable deployment workflows. Explore the work and the stacks that power it.
              </p>
            </div>
            <div className="grid gap-3 pt-2 sm:grid-cols-3">
              {heroStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-3xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-zinc-300 shadow-[0_30px_60px_-45px_rgba(15,23,42,0.9)] backdrop-blur-md"
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
          </header>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => {
              const isHighlighted = highlight === project.title;
              const gallery = Array.isArray(project.gallery) ? project.gallery : [];
              const hashtags = Array.isArray(project.hashtags) ? project.hashtags : [];
              const techStack = Array.isArray(project.tech) ? project.tech : [];
              const isBattleBot = project.title === 'BattleBot Control Stack';
              const isSignature = Boolean(project.special);

              const cardAccent = isSignature
                ? 'border-cyan-400/60 bg-cyan-500/10 shadow-[0_30px_60px_-40px_rgba(45,212,191,0.65)]'
                : 'border-white/10 bg-white/[0.04] shadow-[0_30px_60px_-45px_rgba(15,23,42,0.9)]';

              return (
                <article
                  key={project.title}
                  className={`group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl p-6 backdrop-blur-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-[0_40px_80px_-50px_rgba(34,211,238,0.75)] ${cardAccent} ${
                    isHighlighted ? 'ring-2 ring-cyan-400/70' : ''
                  }`}
                >
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/15 via-transparent to-indigo-500/15" />
                  </div>
                  {isSignature && (
                    <span className="absolute right-6 top-6 inline-flex items-center gap-1 rounded-full border border-cyan-200/40 bg-cyan-300/10 px-3 py-1 text-[0.65rem] uppercase tracking-[0.28em] text-cyan-100">
                      Signature
                    </span>
                  )}
                  <div className="relative z-10 space-y-4">
                    {!isBattleBot && typeof project.progress === 'number' && (
                      <div className="flex items-center gap-3 text-[0.65rem] uppercase tracking-[0.28em] text-zinc-300/90">
                        <span>{project.progress}% complete</span>
                        <span className="h-1 w-1 rounded-full bg-white/20" />
                        <span>Project</span>
                      </div>
                    )}
                    {!isBattleBot && project.highlight && (
                      <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-400/15 px-3 py-1 text-[0.65rem] uppercase tracking-[0.28em] text-cyan-100">
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
                      <p className="text-sm leading-relaxed text-amber-100/90">{project.story}</p>
                    )}
                    {!isBattleBot && (
                      <div className="flex flex-wrap gap-2">
                        {techStack.map((tag) => (
                          <span key={tag} className="tag-pill bg-white/8 text-cyan-200/90">
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
                                className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5"
                              >
                                <Image
                                  src={image.src}
                                  alt={image.alt}
                                  width={1280}
                                  height={720}
                                  sizes="100vw"
                                  className="h-auto w-full object-contain"
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
                            {gallery.slice(1).map((image) => (
                              <div
                                key={image.src}
                                className="relative col-span-2 aspect-square overflow-hidden rounded-2xl"
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
                  {!isBattleBot && typeof project.progress === 'number' && (
                    <div className="relative z-10 mt-6">
                      <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-[#6366f1] via-[#8b5cf6] to-[#22d3ee]"
                          style={{ width: `${project.progress}%` }}
                        />
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
