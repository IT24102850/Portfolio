import SiteFooter from '../../components/site-footer';
import SiteHeader from '../../components/site-header';

type Experience = {
  title: string;
  company: string;
  period: string;
  focus: string;
  impact: string;
  achievements: string[];
  tools: string[];
};

const experiences: Experience[] = [
  {
    title: 'Full-Stack Product Engineer',
    company: 'Independent Studio',
    period: '2023 – Present',
    focus: 'Design-to-deployment ownership for premium digital products.',
    impact:
      'Leads discovery, UX, and engineering delivery for client and self-directed launches across commerce, productivity, and hardware-integrated experiences.',
    achievements: [
      'Shipped MelodyMart, a Java/Tomcat commerce stack with structured MVC pipelines and responsive merchandising UI.',
      'Built IoT Water Monitoring dashboards that integrate ESP32 telemetry with Firebase analytics for real-world households.',
      'Created a reusable design system and motion guidelines adopted across three production web builds.',
    ],
    tools: ['Next.js', 'React', 'Node.js', 'Tailwind', 'Figma'],
  },
  {
    title: 'Undergraduate Research & Mentoring',
    company: 'SLIIT Faculty of Computing',
    period: '2022 – Present',
    focus: 'Applied research in human-computer interaction, robotics, and IoT ecosystems.',
    impact:
      'Facilitates peer-led workshops while experimenting with intelligent interfaces that bridge software and embedded platforms.',
    achievements: [
      'Captured 1st place at EMBED X Robotics Workshop 2025 with a BattleBot control stack and telemetry cockpit.',
      'Delivered maker-lab sessions that introduced over 80 students to ESP32 firmware, realtime dashboards, and rapid prototyping.',
      'Documented robotics tooling and shared open resources used in recurring campus labs.',
    ],
    tools: ['ESP32', 'C++', 'React', 'Firebase', 'Fusion 360'],
  },
  {
    title: 'Freelance Developer & Consultant',
    company: 'Remote Clients',
    period: '2021 – Present',
    focus: 'Cross-platform software, automation, and data visualization engagements.',
    impact:
      'Delivers lightweight tooling and dashboards that improve operational visibility for startups and community teams.',
    achievements: [
      'Rolled out Android and Flutter prototypes for campus services, spanning transit schedules, events, and notifications.',
      'Built multilingual NLP assistants using Python pipelines tailored for Sinhala and English workflows.',
      'Authored deployment playbooks covering CI/CD, observability, and long-term maintenance handoff.',
    ],
    tools: ['Flutter', 'Android', 'Python', 'FastAPI', 'MongoDB'],
  },
];

export default function ExperiencePage() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-[#050510]">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-40 top-32 h-96 w-96 rounded-full bg-cyan-500/15 blur-[160px]" />
        <div className="absolute right-0 top-1/3 h-[28rem] w-[28rem] translate-x-1/4 rounded-full bg-indigo-500/20 blur-[200px]" />
      </div>
      <SiteHeader />
      <main className="flex-1 pt-32">
        <section className="relative mx-auto max-w-6xl px-6 pb-24">
          <header className="mb-12 space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs uppercase tracking-[0.28em] text-cyan-100">
              Experience
            </span>
            <div className="space-y-4">
              <h1 className="text-3xl font-semibold text-white sm:text-4xl">
                Momentum built through research, craft, and delivery.
              </h1>
              <p className="muted max-w-3xl text-base">
                A timeline of leadership, experiments, and consulting work that blends UX vision with embedded systems and production-grade engineering.
              </p>
            </div>
          </header>

          <div className="relative pl-6">
            <div className="absolute left-2 top-0 bottom-0 hidden w-px bg-gradient-to-b from-cyan-400/40 via-white/10 to-transparent md:block" />
            <div className="flex flex-col gap-8">
              {experiences.map((experience) => (
                <article
                  key={`${experience.title}-${experience.company}`}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-[0_30px_60px_-45px_rgba(15,23,42,0.8)] backdrop-blur-lg transition-transform duration-300 hover:-translate-y-2 hover:border-cyan-400/50 hover:shadow-[0_40px_80px_-50px_rgba(34,211,238,0.75)]"
                >
                  <div className="pointer-events-none absolute -left-[19px] top-8 hidden h-4 w-4 rounded-full border-2 border-cyan-300/70 bg-[#050510] md:block" />
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 via-transparent to-indigo-500/15" />
                  </div>
                  <div className="relative z-10 space-y-4">
                    <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                      <div>
                        <h2 className="text-2xl font-semibold text-white">{experience.title}</h2>
                        <p className="text-sm uppercase tracking-[0.2em] text-cyan-200/90">{experience.company}</p>
                      </div>
                      <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.28em] text-zinc-300">
                        {experience.period}
                      </span>
                    </div>
                    <p className="text-sm font-medium text-cyan-100/90">{experience.focus}</p>
                    <p className="muted text-sm leading-relaxed">{experience.impact}</p>
                    <div className="space-y-3">
                      <p className="text-xs uppercase tracking-[0.28em] text-zinc-400">Highlights</p>
                      <ul className="space-y-2 text-sm text-zinc-200">
                        {experience.achievements.map((achievement) => (
                          <li
                            key={achievement}
                            className="rounded-2xl border border-white/5 bg-white/5 px-3 py-2 text-cyan-100/90"
                          >
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {experience.tools.map((tool) => (
                        <span key={tool} className="tag-pill bg-white/8 text-cyan-200/90">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
