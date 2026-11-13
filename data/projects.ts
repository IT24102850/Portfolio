export const categories = ['AI & Data', 'Full-stack', 'Mobile', 'IoT & Robotics', 'Web'] as const;
export type Category = (typeof categories)[number];

export type Project = {
  slug: string;
  title: string;
  /** One line, shown on cards and used as the meta description lead. */
  tagline: string;
  description: string;
  year: string;
  categories: Category[];
  role?: string;
  context?: string;
  award?: string;
  stack: string[];
  highlights: string[];
  cover?: { src: string; alt: string };
  gallery?: { src: string; alt: string }[];
  live?: string;
  repo?: string;
  featured?: boolean;
};

const gh = (repo: string) => `https://github.com/IT24102850/${repo}`;

export const projects: Project[] = [
  {
    slug: 'unify',
    title: 'Unify',
    tagline:
      'A multi-tenant operations platform for SMEs: bookings, billing, inventory and AI copilots on web and mobile.',
    description:
      'Unify is a universal SME management platform built by a three-person team at SLIIT. One backend serves a React web console and a Flutter app, and the tenant dashboard reshapes itself around what the business actually does: twelve tourism sub-types each get their own terminology, KPIs and booking fields, and clinics get a patient-flow operations desk instead of a generic calendar.',
    year: '2026',
    categories: ['Full-stack', 'AI & Data', 'Mobile'],
    role: 'Universal Booking & Resource Engine, agentic AI pipeline, platform console',
    context: 'SLIIT SE3090 · team of three',
    stack: [
      'ASP.NET Core',
      'C#',
      'PostgreSQL',
      'Supabase',
      'React',
      'Redux Toolkit',
      'TypeScript',
      'Flutter',
      'Dart',
      'Riverpod',
      'FastAPI',
      'Python',
      'Gemini',
      'Agent orchestration',
      'Docker',
      'Render',
      'Vercel',
    ],
    highlights: [
      'Owned the Universal Booking & Resource Engine: bookings, resources, schedules, availability and check-in.',
      'Built a four-agent pipeline (Planner, Domain Analysis, Action/Tool, Validation/Safety) that powers Schedule Copilot for staff and find-and-book for customers.',
      'Kept the pipeline a fixed, auditable sequence with a deterministic, non-LLM safety gate and manager approval before anything is applied.',
      'Gemini is the default model provider, with an Ollama provider behind a single environment switch.',
      'Deployed as Docker services on Render, PostgreSQL on Supabase, the React console on Vercel and an Android APK for the Flutter app.',
    ],
    cover: { src: '/images/work/unify.webp', alt: 'Unify landing page showing the multi-branch command deck dashboard' },
    live: 'https://se-3090-se-002.vercel.app',
    repo: gh('SE3090_SE002'),
    featured: true,
  },
  {
    slug: 'floodwatch-lk',
    title: 'FloodWatch LK',
    tagline:
      'Live flood and landslide risk for all 25 districts of Sri Lanka, turned into one instruction a household can act on.',
    description:
      'Official bulletins give regional rainfall figures and leave households to work out whether that means watch, pack or leave. FloodWatch LK scores every district from public rainfall forecasts and translates the score into a single plain instruction. The gap it closes is translation, since the major floods of the last decade were all forecast.',
    year: '2026',
    categories: ['Full-stack', 'AI & Data'],
    context: 'Hackathon build',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Open-Meteo', 'Vercel'],
    highlights: [
      'Scores all 25 districts from a single Open-Meteo forecast request, with no API key required.',
      'Risk scoring runs server-side in Next.js route handlers so the client stays thin.',
      'Covers both river flooding and slope failure, where a third consecutive wet day matters more than one heavy one.',
    ],
    cover: { src: '/images/work/floodwatch.webp', alt: 'FloodWatch LK district risk dashboard' },
    live: 'https://hackathon-mu-rosy.vercel.app',
    repo: gh('hackathon'),
    featured: true,
  },
  {
    slug: 'plus-teacher-app',
    title: 'Plus — Teacher App',
    tagline:
      'Timetable, one-tap attendance, fee tracking and automatic parent updates for private tuition teachers.',
    description:
      'One system with three views: Teacher, Parent and Student. Teachers get a calendar with clash checks and drag-to-reschedule, a live class timer, and a fee ledger. Parents get absence messages and fee reminders over WhatsApp. It ships as a PWA with no npm dependencies and no build step.',
    year: '2026',
    categories: ['Full-stack'],
    stack: ['JavaScript', 'PWA', 'Supabase', 'PostgreSQL', 'Vercel'],
    highlights: [
      'Fee ledger with FIFO allocation, part payments, receipts, undo and bank-slip confirmation.',
      'Supabase PostgreSQL with row level security on, so the anon key can read nothing; all access goes through server-checked serverless functions.',
      'Real WhatsApp sending and a scheduled job for fee reminders.',
      'Month, week and day calendar views with recurring and one-off classes, individual or group.',
    ],
    cover: { src: '/images/work/plus.webp', alt: 'Plus teacher app sign-in and timetable' },
    live: 'https://plus-teacher-app.vercel.app',
    repo: gh('teach-demo'),
    featured: true,
  },
  {
    slug: 'slfws',
    title: 'SLFWS: Geospatial Early Warning System',
    tagline:
      'A machine learning pipeline that predicts flood and landslide risk across Sri Lanka 24–48 hours ahead.',
    description:
      'An end-to-end, AI-driven disaster risk reduction framework designed to give emergency managers actionable intelligence by combining satellite-based precipitation data with terrain analysis and 50 years of historical disaster records. It was motivated by Cyclone Ditwah in November 2025 and the limits of static rainfall thresholds.',
    year: '2026',
    categories: ['AI & Data'],
    stack: ['Python', 'XGBoost', 'CNN', 'Streamlit'],
    highlights: [
      'District-level risk model covering all 25 districts.',
      'Combines satellite rainfall, terrain features and historical disaster records.',
      'Streamlit interface returns a colour-coded risk forecast from current or forecast rainfall.',
    ],
    cover: { src: '/images/projects/4.png', alt: 'SLFWS interface and risk forecast' },
    repo: gh('srilanka-flood-warning'),
    featured: true,
  },
  {
    slug: 'boardingbook',
    title: 'BoardingBook',
    tagline: 'Roommate matching and boarding search for university students, on web and mobile.',
    description:
      'A digital platform to streamline student group formation and roommate matching, with custom profiles, swipe-to-match and group workflows. Our team at SLIIT built it to solve the real problem of finding compatible roommates near campus, with a production-grade backend and strict validation. A companion Expo app brings it to Android.',
    year: '2026',
    categories: ['Full-stack', 'Mobile'],
    context: 'SLIIT group project',
    stack: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Redis', 'React Native', 'Expo'],
    highlights: [
      'Swipe-to-match roommate discovery with custom compatibility profiles.',
      'Group formation workflows for students booking a boarding place together.',
      'Web app on Vercel plus an Expo / React Native mobile client.',
    ],
    cover: { src: '/images/work/boardingbook.webp', alt: 'BoardingBook landing page' },
    gallery: [
      {
        src: '/images/projects/9681875b-be29-4ff0-862b-e6735f94761e.jpeg',
        alt: 'BoardingBook roommate finder interface',
      },
    ],
    live: 'https://bording-book.vercel.app/',
    repo: gh('BordingBook'),
    featured: true,
  },
  {
    slug: 'battlebot',
    title: 'BattleBot Control Stack',
    tagline: 'The ESP32 combat robot that took 1st place at the EMBED X Robotics Workshop 2025.',
    description:
      "A lightweight 2WD combat robot driven by two TT gear motors through a dual H-bridge and controlled wirelessly from an ESP32 acting as its own Wi-Fi access point. Nearly 100 delegates joined the workshop at SLIIT's Engineering Auditorium, hosted by the IEEE RAS Student Branch Chapter, for ESP32 robotics, a maze challenge and combat rounds.",
    year: '2025',
    categories: ['IoT & Robotics'],
    award: '1st place · EMBED X Robotics Workshop 2025',
    stack: ['ESP32', 'C++', 'Arduino', 'JavaScript'],
    highlights: [
      'ESP32 serves its own control page with directional buttons and a speed slider.',
      'Motor commands are plain HTTP GET requests, so the controller can be swapped out freely.',
      'Standalone telemetry dashboard shows direction, speed, Wi-Fi signal strength and uptime for a pit-crew screen.',
    ],
    cover: { src: '/images/projects/robot2.jpg', alt: 'BattleBot trophy celebration at EMBED X 2025' },
    gallery: [
      { src: '/images/projects/robot1.jpg', alt: 'BattleBot build at EMBED X 2025' },
      { src: '/images/projects/robot3.jpg', alt: 'EMBED X 2025 competition floor' },
    ],
    repo: gh('-EMBED-X'),
    featured: true,
  },
  {
    slug: 'raja-ai-travel-guide',
    title: 'Raja — AI Travel Guide',
    tagline: 'A 3D elephant guide that answers questions about travelling in Sri Lanka.',
    description:
      'A prototype AI assistant built for the Artin Solutions AI Product Prototype Challenge. Raja is a low-poly elephant avatar assembled entirely from Three.js primitives, so there are no model files to host. He idles, perks his ears while you type, sways while thinking and animates his trunk while talking.',
    year: '2026',
    categories: ['AI & Data', 'Web'],
    stack: ['JavaScript', 'Three.js', 'Groq'],
    highlights: [
      'Free-form chat powered by Llama 3 on the Groq free tier.',
      'Editable knowledge base panel: rewrite the persona, facts and instructions without touching code.',
      'Quick-reply chips for destinations, travel tips and trip planning.',
    ],
    cover: { src: '/images/work/raja.webp', alt: 'Raja the 3D elephant AI travel guide' },
    live: 'https://sri-lanka-ai-guide.vercel.app',
    repo: gh('sri-lanka-ai-guide'),
  },
  {
    slug: 'iot-water-monitoring',
    title: 'IoT Water Monitoring System',
    tagline: 'A smart tank monitor with cloud analytics and a dashboard for households in Sri Lanka.',
    description:
      'ESP32-powered smart tank monitor with Firebase analytics and a React dashboard for households in Sri Lanka.',
    year: '2025',
    categories: ['IoT & Robotics'],
    stack: ['ESP32', 'Arduino', 'Firebase', 'React'],
    highlights: [
      'Sensor telemetry pushed from the microcontroller to Firebase.',
      'React dashboard for tank level and usage history.',
    ],
    cover: { src: '/images/projects/iot1.jpg', alt: 'IoT water monitoring dashboard' },
    gallery: [{ src: '/images/projects/iot2.jpg', alt: 'IoT water monitoring system hardware' }],
  },
  {
    slug: 'kadey',
    title: 'Kadey Business Ledger',
    tagline: 'A business ledger for small and medium-sized enterprises with guided onboarding.',
    description:
      'A full-stack ledger application with a multi-step onboarding flow, secure authentication, and a backend that runs against a local JSON file in development or Supabase PostgreSQL in production.',
    year: '2026',
    categories: ['Full-stack'],
    stack: ['React', 'Vite', 'Tailwind CSS', 'Node.js', 'Express', 'Supabase', 'PostgreSQL'],
    highlights: [
      'Swappable data layer: local JSON for development, Supabase for production.',
      'Multi-step onboarding with business-type presets.',
    ],
    repo: gh('sme'),
  },
  {
    slug: 'campuseats',
    title: 'CampusEats Cloud',
    tagline: 'A three-tier food ordering app deployed end to end across Vercel and Render.',
    description:
      'Full-stack cloud deployment of the CampusEats application. The frontend, API and database each run on their own host and are wired together purely through platform configuration, with nothing secret committed.',
    year: '2026',
    categories: ['Full-stack'],
    context: 'SLIIT SE3090 coursework',
    stack: ['React', 'Vite', 'ASP.NET Core', 'C#', 'PostgreSQL', 'Docker', 'Render', 'Vercel'],
    highlights: [
      'ASP.NET Core 8 and EF Core API containerised with Docker on Render.',
      'React 18 frontend with TanStack Query on Vercel.',
      'PostgreSQL 17 on Render, connected through environment configuration only.',
    ],
    repo: gh('campuseats-cloud'),
  },
  {
    slug: 'hm-tech',
    title: 'HM Tech',
    tagline: 'A five-page marketing site with an interactive 3D hero.',
    description:
      "A premium, light-theme Next.js site for HM Tech built around the brand's violet and indigo palette, with an interactive 3D cube-field hero and tilt cards throughout.",
    year: '2026',
    categories: ['Web'],
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Three.js'],
    highlights: [
      'React Three Fiber hero scene.',
      'Filterable portfolio grid, services and engagement tiers.',
    ],
    cover: { src: '/images/work/hmtech.webp', alt: 'HM Tech marketing site home page' },
    live: 'https://hm-tech-rho.vercel.app',
    repo: gh('HM-TECH'),
  },
  {
    slug: 'ybcode',
    title: 'YBCode',
    tagline: 'A dark, motion-heavy studio site with a signature animated schematic hero.',
    description:
      'A Next.js marketing site for the YBCode software studio: glass navigation, ambient gradient glow, grain texture, magnetic buttons, a custom cursor and scroll-linked parallax.',
    year: '2026',
    categories: ['Web'],
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    highlights: [
      'Custom cursor with contextual labels and magnetic primary buttons.',
      'Animated counters, 3D tilt cards and a scroll progress bar.',
    ],
    cover: { src: '/images/work/ybcode.webp', alt: 'YBCode studio site home page' },
    live: 'https://ybcode-three.vercel.app',
    repo: gh('ybcode'),
  },
  {
    slug: 'mirissa-jetliner',
    title: 'Mirissa Jetliner',
    tagline: "A booking-focused site for a whale and dolphin watching operator on Sri Lanka's south coast.",
    description:
      'An immersive marketing site for Mirissa Jetliner, a whale watching boat running daily from Mirissa Harbour. The page descends from the surface as you scroll, and leads with pricing and booking, a voyage log, gallery and research sections.',
    year: '2026',
    categories: ['Web'],
    stack: ['HTML', 'CSS', 'JavaScript', 'Vercel'],
    highlights: [
      'Scroll-driven depth indicator that tracks the descent through the page.',
      'Booking and pricing call to action above the fold, with direct contact channels.',
    ],
    cover: { src: '/images/work/jetliner.webp', alt: 'Mirissa Jetliner whale watching site hero' },
    live: 'https://mirissajetliner-lkgd.vercel.app',
    repo: gh('mirissajetliner'),
  },
  {
    slug: 'melodymart',
    title: 'MelodyMart',
    tagline: 'A musical-instrument e-commerce platform with repair-service management.',
    description:
      'Full-featured musical-instrument e-commerce experience with catalog browsing, category filtering, checkout flow, and repair-service management. Built to demonstrate end-to-end web application architecture with a structured MVC design.',
    year: '2025',
    categories: ['Full-stack'],
    stack: ['Java', 'JSP', 'Tomcat', 'JavaScript'],
    highlights: ['Catalog, category filtering and checkout flow.', 'Repair-service management module.'],
    cover: { src: '/images/projects/melodymart.jpeg', alt: 'MelodyMart e-commerce landing page' },
    repo: gh('MelodyMart'),
  },
  {
    slug: 'nexoraskill',
    title: 'NexoraSkill',
    tagline: 'A student course registration system with an admin approval dashboard.',
    description:
      'Web application built with Java, JSP, and Servlets to streamline student enrollment, course management, and admin approvals. Completed in May 2025 and deployed on Apache Tomcat.',
    year: '2025',
    categories: ['Full-stack'],
    stack: ['Java', 'JSP', 'Tomcat', 'JavaScript'],
    highlights: ['User authentication and course request management.', 'JSP-powered admin dashboard.'],
    cover: { src: '/images/projects/oop.jpg', alt: 'NexoraSkill student registration interface' },
    repo: gh('oop-project'),
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

/** Projects whose stack lists the given technology. */
export function projectsUsing(tech: string) {
  return projects.filter((p) => p.stack.includes(tech));
}
