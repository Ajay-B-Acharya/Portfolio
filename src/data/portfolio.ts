export const portfolio = {
  name: "Ajay B. Acharya",
  role: "Developer. Engineer. Problem Solver.",
  projectName: "Floating Interface",
  tagline: "Electronics | Software | Innovation",

  about: {
    title: "About",
    description: [
      "Electronics and Communication Engineering student.",
      "Developer interested in software engineering, embedded systems and AI.",
    ],
  },

  skills: {
    title: "Skills",
    categories: [
      {
        name: "Languages",
        items: ["C++", "Java", "JavaScript", "TypeScript", "Python", "Embedded C"],
      },
      {
        name: "Technologies",
        items: ["React", "Three.js", "FastAPI", "PostgreSQL"],
      },
    ],
  },

  projects: {
    title: "Projects",
    items: [
      {
        name: "SpiceCraft",
        description: "E-commerce platform for spices",
      },
      {
        name: "IoT Honeypot Monitor",
        description: "Security monitoring system",
      },
      {
        name: "Collaborative IDE",
        description: "Real-time code collaboration tool",
      },
      {
        name: "Harmoniq Music Player",
        description: "Modern music player interface",
      },
    ],
  },

  experience: {
    title: "Experience",
    items: [
      "Education",
      "Internships",
      "Technical development experience",
    ],
  },

  achievements: {
    title: "Achievements",
    items: [
      "Athernex 2026",
      "Technical hackathons",
      "Engineering projects",
    ],
  },

  contact: {
    title: "Contact",
    links: [
      { label: "GitHub", url: "https://github.com" },
      { label: "LinkedIn", url: "https://linkedin.com" },
      { label: "Email", url: "mailto:contact@example.com" },
      { label: "Resume", url: "#" },
    ],
  },
} as const;
