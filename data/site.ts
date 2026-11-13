export const site = {
  url: 'https://hasiruchamika.com',
  name: 'Hasiru Chamika',
  shortName: 'Hasiru',
  role: 'Software Engineer',
  tagline: 'Full-stack, mobile and agentic-AI engineer who also ships firmware.',
  description:
    'Hasiru Chamika is a software engineer and SLIIT undergraduate in Sri Lanka building full-stack web apps, Flutter and React Native mobile apps, agentic AI systems and ESP32-based IoT products.',
  intro:
    "I'm an undergraduate at SLIIT who builds web and mobile apps and works on embedded systems and IoT. Day to day that means ASP.NET Core, React, Next.js, Node.js, Flutter and ESP32, with a growing share of my time going into machine learning and agent pipelines.",
  location: 'Weligama, Southern Province, Sri Lanka',
  locality: 'Weligama',
  region: 'Southern Province',
  country: 'LK',
  timeZone: 'Asia/Colombo',
  email: 'hasiruchamika2004@gmail.com',
  phone: '+94 741 906 332',
  phoneHref: 'tel:+94741906332',
  whatsapp: 'https://wa.me/94741906332',
  github: 'https://github.com/IT24102850',
  githubHandle: 'IT24102850',
  linkedin: 'https://www.linkedin.com/in/hasiru-chamika-ab0047228',
  instagram: 'https://www.instagram.com/chamika_2k04',
  instagramHandle: '@chamika_2k04',
  facebook: 'https://www.facebook.com/share/19UvN1ravP/',
  portrait: '/images/my.jpg',
  startedYear: 2018,
  university: 'Sri Lanka Institute of Information Technology (SLIIT)',
  degree: 'BSc (Hons) in Information Technology',
} as const;

export const nav = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Work' },
  { href: '/about', label: 'About' },
  { href: '/experience', label: 'Experience' },
  { href: '/skills', label: 'Skills' },
  { href: '/contact', label: 'Contact' },
] as const;

export const socials = [
  { key: 'github', label: 'GitHub', href: site.github, handle: `@${site.githubHandle}` },
  { key: 'linkedin', label: 'LinkedIn', href: site.linkedin, handle: 'Hasiru Chamika' },
  { key: 'whatsapp', label: 'WhatsApp', href: site.whatsapp, handle: site.phone },
  { key: 'instagram', label: 'Instagram', href: site.instagram, handle: site.instagramHandle },
  { key: 'facebook', label: 'Facebook', href: site.facebook, handle: 'Hasiru Chamika' },
] as const;

export const about = {
  headline: 'Grounded in community, driven by curiosity.',
  subheading: 'Life in code, circuits, and coastal sunsets.',
  description:
    'Born and raised in Weligama, I split my days between university labs, maker meetups, and the ocean breeze. I document everything, from robotics victories to the quiet early-morning study sessions that push my craft forward.',
  quote: 'Building is how I understand the world. Every project starts as a story worth sharing.',
  quickFacts: [
    { label: 'Currently', value: 'BSc (Hons) in Information Technology at SLIIT' },
    { label: 'Home base', value: 'Weligama, Sri Lanka' },
    { label: 'Favourite time', value: '4:30 AM sunrise planning' },
  ],
  lifestyle: [
    {
      title: 'Morning ritual',
      description:
        'Coffee, journal, and a 30-minute review of GitHub issues before classes. Quiet focus sets the tone for the day.',
      details: ['Daily gratitude notes', 'Circuit ideas sketched in a dotted notebook', 'Lo-fi playlists on repeat'],
    },
    {
      title: 'Campus life',
      description:
        'SLIIT keeps me in motion, from labs and meetups to mentoring juniors on their first embedded builds.',
      details: [
        'Co-leading robotics study groups',
        'Testing ESP32 firmware in the hardware lab',
        'Planning hackathon concepts with friends',
      ],
    },
    {
      title: 'Weekend reset',
      description:
        'Weekends are reserved for family, beach walks in Weligama, and editing footage from recent projects.',
      details: [
        'Photography drives along the southern coast',
        'Experimenting with synthwave mixes',
        'Family dinners and cricket recaps',
      ],
    },
  ],
  timeline: [
    {
      year: '2018',
      title: 'First line of code',
      description: 'Built my first basic Arduino project to automate bedroom lights and was instantly hooked.',
    },
    {
      year: '2021',
      title: 'Freelance beginnings',
      description: 'Started delivering small web apps for local businesses while balancing school exams.',
    },
    {
      year: '2023',
      title: 'Joined SLIIT',
      description: 'Began my undergraduate journey, diving deeper into software engineering and embedded systems.',
    },
    {
      year: '2025',
      title: 'EMBED X champion',
      description: 'Won 1st place at the EMBED X Robotics Workshop with a custom BattleBot control stack.',
    },
    {
      year: '2026',
      title: 'Unify and agentic AI',
      description:
        'Shipped Unify, a multi-tenant SME platform, and built its four-agent booking pipeline across web and mobile.',
    },
  ],
  favorites: [
    'Synthwave playlists while coding',
    'Sunset photography along the southern coast',
    'Collecting vintage robot figurines',
    'Teaching juniors the basics of firmware debugging',
  ],
} as const;

export type Experience = {
  title: string;
  company: string;
  period: string;
  focus: string;
  impact: string;
  achievements: string[];
  tools: string[];
};

export const experiences: Experience[] = [
  {
    title: 'Full-Stack Product Engineer',
    company: 'Independent Studio',
    period: '2023 – Present',
    focus: 'Design-to-deployment ownership for digital products.',
    impact:
      'Leads discovery, UX, and engineering delivery for client and self-directed launches across commerce, productivity, and hardware-integrated experiences.',
    achievements: [
      'Built the booking engine and four-agent AI pipeline for Unify, a multi-tenant SME platform running on ASP.NET Core, React and Flutter.',
      'Shipped MelodyMart, a Java/Tomcat commerce stack with structured MVC pipelines and responsive merchandising UI.',
      'Built IoT Water Monitoring dashboards that integrate ESP32 telemetry with Firebase analytics for real-world households.',
    ],
    tools: ['Next.js', 'React', 'ASP.NET Core', 'Node.js', 'Tailwind', 'Figma'],
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

export const skillGroups = [
  {
    title: 'Languages',
    skills: ['TypeScript', 'JavaScript', 'C#', 'Python', 'Dart', 'Java', 'C++'],
  },
  {
    title: 'Frontend',
    skills: ['React', 'Next.js', 'Tailwind CSS', 'Redux Toolkit', 'Vite', 'Three.js', 'Framer Motion'],
  },
  {
    title: 'Backend & data',
    skills: ['ASP.NET Core', 'Node.js', 'Express', 'FastAPI', 'PostgreSQL', 'Supabase', 'MongoDB', 'Redis', 'Firebase'],
  },
  {
    title: 'Mobile',
    skills: ['Flutter', 'Riverpod', 'React Native', 'Expo'],
  },
  {
    title: 'AI & machine learning',
    skills: ['Agent orchestration', 'Gemini', 'Groq', 'XGBoost', 'CNN', 'Streamlit'],
  },
  {
    title: 'IoT & embedded',
    skills: ['ESP32', 'Arduino'],
  },
  {
    title: 'Cloud & delivery',
    skills: ['Vercel', 'Render', 'Docker', 'Tomcat'],
  },
] as const;
