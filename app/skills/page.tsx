import SiteFooter from '../../components/site-footer';
import SiteHeader from '../../components/site-header';
import content from '../../data/content';

type SkillUsage = {
  tech: string;
  projects: string[];
};

const projects = Array.isArray(content.projects) ? content.projects : [];

const deriveSkillsFromProjects = (): SkillUsage[] => {
  const usageMap = new Map<string, Set<string>>();

  projects.forEach((project) => {
    const techList = Array.isArray(project.tech) ? project.tech : [];
    techList.forEach((tech) => {
      const normalized = tech.trim();
      if (!normalized) {
        return;
      }
      if (!usageMap.has(normalized)) {
        usageMap.set(normalized, new Set());
      }
      usageMap.get(normalized)?.add(project.title);
    });
  });

  return Array.from(usageMap.entries())
    .map(([tech, projectSet]) => ({ tech, projects: Array.from(projectSet) }))
    .sort((a, b) => {
      if (b.projects.length !== a.projects.length) {
        return b.projects.length - a.projects.length;
      }
      return a.tech.localeCompare(b.tech);
    });
};

const skillUsage = deriveSkillsFromProjects();

export default function SkillsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 pt-32">
        <section className="mx-auto max-w-6xl px-6 pb-24">
          <header className="mb-12 space-y-4">
            <p className="text-sm uppercase tracking-[0.2em] text-zinc-400">Capabilities</p>
            <h1 className="text-3xl font-semibold text-white sm:text-4xl">
              Tools and stacks proven across recent builds.
            </h1>
            <p className="muted max-w-3xl text-base">
              This view auto-pulls technologies from my active projects, showing where each skill is battle-tested.
            </p>
          </header>

          <div className="grid gap-6 lg:grid-cols-2">
            {skillUsage.map((skill) => (
              <article
                key={skill.tech}
                className="flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition-transform duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-white/[0.07]"
              >
                <div className="space-y-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">Technology</p>
                    <h2 className="mt-2 text-lg font-semibold text-white">{skill.tech}</h2>
                    <p className="muted mt-2 text-sm">
                      Used in {skill.projects.length} project{skill.projects.length === 1 ? '' : 's'}:
                    </p>
                  </div>
                  <ul className="space-y-2 text-sm text-cyan-100/90">
                    {skill.projects.map((projectTitle) => (
                      <li key={projectTitle} className="rounded-2xl border border-white/5 bg-white/5 px-3 py-2">
                        {projectTitle}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
            {skillUsage.length === 0 && (
              <article className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-sm text-zinc-300">
                Project technologies will appear here once projects with tech stacks are added.
              </article>
            )}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
