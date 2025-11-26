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
  projects: [
    {
      title: "IoT Water Monitoring System",
      description: "ESP32-powered smart tank monitor with Firebase analytics and a React dashboard for households in Sri Lanka.",
      tech: ["Arduino Mega", "Arduino", "IOT"],
      special: true,
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