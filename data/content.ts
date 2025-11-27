export default {
  name: "Hasiru",
  title: "Cyberpunk Developer",
  about: "I'm Hasiru Chamika — an undergraduate student at SLIIT. I build web & mobile apps and work on embedded systems and IoT. I have hands-on experience with Python, JavaScript, React, Node.js, Android, Flutter and ESP32-based projects. Currently exploring data science and machine learning.",
  location: "Weligama, Southern Province, Sri Lanka",
  phone: "+94 741 906 332",
  email: "hasiruchamika2004@gmail.com",
  linkedin: "https://www.linkedin.com/in/hasiru-chamika-ab0047228?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  github: "https://github.com/IT24102850",
  facebook: "https://www.facebook.com/share/19UvN1ravP/",
  instagram: "https://www.instagram.com/chamika_2k04?utm_source=qr&igsh=MTNwcHh3dDdzOWE0ag==",
  whatsapp: "https://wa.me/94741906332",
  aboutPage: {
    hero: {
      headline: "Grounded in community, driven by curiosity",
      subheading: "Life in code, circuits, and coastal sunsets.",
      description:
        "Born and raised in Weligama, I split my days between university labs, maker meetups, and the ocean breeze. I document everything—from robotics victories to the quiet early-morning study sessions that push my craft forward.",
      quote:
        "Building is how I understand the world. Every project starts as a story worth sharing.",
      image: "/images/my.jpg",
      stats: [
        { label: "Years tinkering", value: "6+" },
        { label: "Projects shipped", value: "12" },
        { label: "Workshops mentored", value: "8" }
      ],
      quickFacts: [
        { label: "Currently", value: "BSc (Hons) in Information Technology at SLIIT" },
        { label: "Home Base", value: "Weligama, Sri Lanka" },
        { label: "Favourite Time", value: "4:30 AM sunrise planning" }
      ]
    },
    lifestyle: [
      {
        title: "Morning Ritual",
        description:
          "Coffee, journal, and a 30-minute review of GitHub issues before classes. Quiet focus sets the tone for the day.",
        details: ["Daily gratitude notes", "Circuit ideas sketched in a dotted notebook", "Lo-fi playlists on repeat"]
      },
      {
        title: "Campus Life",
        description:
          "SLIIT keeps me in motion—from labs and meetups to mentoring juniors on their first embedded builds.",
        details: ["Co-leading robotics study groups", "Testing ESP32 firmware in the hardware lab", "Planning hackathon concepts with friends"]
      },
      {
        title: "Weekend Reset",
        description:
          "Weekends are reserved for family, beach walks in Weligama, and editing footage from recent projects.",
        details: ["Photography drives along the southern coast", "Experimenting with synthwave mixes", "Family dinners and cricket recaps"]
      }
    ],
    timeline: [
      {
        year: "2018",
        title: "First line of code",
        description: "Built my first basic Arduino project to automate bedroom lights and was instantly hooked."
      },
      {
        year: "2021",
        title: "Freelance beginnings",
        description: "Started delivering small web apps for local businesses while balancing school exams."
      },
      {
        year: "2023",
        title: "Joined SLIIT",
        description: "Began my undergraduate journey, diving deeper into software engineering and embedded systems."
      },
      {
        year: "2025",
        title: "EMBED X Champion",
        description: "Won 1st place at EMBED X Robotics Workshop with a custom BattleBot control stack."
      }
    ],
    highlights: [
      {
        title: "BattleBot Finals",
        description: "Final-round adrenaline with my team moments after clinching the trophy.",
        image: "/images/projects/robot2.jpg"
      },
      {
        title: "IoT Demo Day",
        description: "Presenting the smart water monitoring dashboard to visiting lecturers at SLIIT.",
        image: "/images/projects/iot1.jpg"
      },
      {
        title: "MelodyMart Launch",
        description: "Celebrating the first production deploy with live orders coming in.",
        image: "/images/projects/melodymart.jpeg"
      }
    ],
    favorites: [
      "Synthwave playlists while coding",
      "Sunset photography along the southern coast",
      "Collecting vintage robot figurines",
      "Teaching juniors the basics of firmware debugging"
    ]
  },
  projects: [
    {
      title: "UML Studio Telegram Bot",
      description:
        "Telegram bot that transforms PlantUML snippets or .uml files into polished PNG diagrams in seconds — all powered from a Google Colab backend.",
      tech: ["Python", "Telegram Bot API", "PlantUML", "Graphviz", "Async Programming", "Cloud Automation", "Google Colab"],
      special: false,
     
      story:
        "Built UML Studio to help developers preview PlantUML diagrams without desktop tools. Drop text or upload a .uml file and the bot renders the graphic, streams status updates, and returns a shareable PNG — all running serverlessly via Google Colab.",
      hashtags: ["#Python", "#TelegramBot", "#PlantUML", "#Graphviz", "#Automation"],
      link: "https://t.me/umlstudiobot",
      linkLabel: "Try UML Studio",
      gallery: [{ src: "/images/projects/uml.png", alt: "UML Studio brand preview" }]
    },
    {
      title: "IoT Water Monitoring System",
      description: "ESP32-powered smart tank monitor with Firebase analytics and a React dashboard for households in Sri Lanka.",
      tech: ["Arduino Mega", "Arduino", "IOT"],
      special: false,
      gallery: [
        { src: "/images/projects/iot1.jpg", alt: "IoT water monitoring dashboard" },
        { src: "/images/projects/iot2.jpg", alt: "IoT water monitoring system hardware" }
      ]
    },
    {
      title: "BattleBot Control Stack",
      description:
        "ESP32-powered control stack that secured 1st place at the EMBED X Robotics Workshop 2025 — pairing low-latency drive firmware with a telemetry cockpit for real-time battle tuning.",
      tech: ["ESP32", "C++", "React"],
      progress: 70,
      highlight: "🏆 1st Place · EMBED X Robotics Workshop 2025",
      story:
        "Thrilled to share that I won 1st place in the Battle Bot competition at the EMBED X Robotics Workshop 2025! Nearly 100 delegates joined us at SLIIT’s Engineering Auditorium for ESP32 robotics, combat matches, and an immersive maker challenge.",
      hashtags: ["#Robotics", "#EMBEDX2025", "#BattleBots", "#Innovation", "#Tech", "#SLIIT", "#ESP32"],
      gallery: [
        { src: "/images/projects/robot2.jpg", alt: "BattleBot trophy celebration" }
      ]
    },
    {
      title: "Student Course Registration System - NexoraSkill",
      description:
        "Web application built with Java, JSP, and Servlets to streamline student enrollment, course management, and admin approvals.",
      tech: ["Java", "JSP", "Servlets", "HTML", "CSS", "JavaScript"],
      progress: 100,
      story:
        "Completed in May 2025, this project showcases a full-stack registration workflow featuring user authentication, course request management, and a JSP-powered admin dashboard deployed on Apache Tomcat.",
      hashtags: ["#Java", "#JSP", "#WebDevelopment", "#SLIIT"],
      gallery: [
        { src: "/images/projects/oop.jpg", alt: "NexoraSkill student registration interface" }
      ]
    },
    {
      title: "MelodyMart E-Commerce Platform",
      description:
        "Full-featured musical-instrument e-commerce experience with catalog browsing, category filtering, checkout flow, and repair-service management.",
      tech: ["Java", "Maven", "Tomcat", "JSP", "HTML", "CSS", "JavaScript"],
      progress: 95,
      story:
        "Built to demonstrate end-to-end web application architecture, MelodyMart strengthened my backend development, structured MVC design, and responsive UI skills. Feedback and suggestions are always welcome!",
      gallery: [{ src: "/images/projects/melodymart.jpeg", alt: "MelodyMart e-commerce landing page" }]
    }
  ]
}