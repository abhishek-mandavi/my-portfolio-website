export const technologies = [
{ name: "Java" , logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"},
{ name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"},
{ name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
{ name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
{ name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
{ name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
{ name: "MySQL" , logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"},
{ name: "Firebase" , logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-original.svg"},
{ name: "Figma" , logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"},
{ name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
{ name: "System Design", logo:"https://cdn.iconscout.com/icon/premium/png-256-thumb/system-design-5347949-4460888.png"},
{name: "Coding Design Patterns", logo:"https://w1.pngwing.com/pngs/561/274/png-transparent-cartoon-book-reactive-design-patterns-distributed-computing-computer-programming-system-programming-ebook-edition-application-software-computer-network-blue-thumbnail.png"},
]


export const projects = [
  {
    title: "Code-IT",
    description: "An Online Code Editor platform , supporting multi-language code execution with real-time output handling and error states.",
    image: "/images/code.png",
    technologies: ["Javascript", "Next.js", "Tailwind CSS" , "Convex"],
    liveUrl: "https://online-code-gold.vercel.app/",
    githubUrl: "https://github.com/abhishek-mandavi/online-code",
    features: [
      "Online IDE supporting multi-language code execution ",
      "Real-time output handling and error states.",
      "Admin dashboard",
    ]
  },
  {
    title: "AI-Powered Mock Interview Platform",
    description: "Mock Interview platform that uses AI to prioritize and categorize tasks, with team collaboration features.",
    image: "/images/ai-interview.png",
    technologies: ["Nextjs", "Firebase", "VapiAI", "MongoDB", "Google Gemini"],
    liveUrl: "https://ai-mock-interview-interviewprep.vercel.app/",
    githubUrl: "https://github.com/abhishek-mandavi/ai-mock-interview",
    features: [
      "Voice-based interviews powered by Vapi AI",
      "Dynamic AI-generated feedback using Google Gemini",
      "Custom interview flows with question sets",
      "Smart scoring and evaluation system (using Zod validation)"
    ]
  },
  {
    title: "ResumeIO",
    description: "Comprehensive Resume analyzer platform providing insights of your resume.",
    image: "/images/resumeio.png",
    technologies: ["Javascript" , "Reactjs", "React-Router", "TailwindCss", "MongoDB"],
    liveUrl: "https://resume-analyzer-nine-omega.vercel.app/",
    githubUrl: "https://github.com/abhishek-mandavi/resume-analyzer",
    features: [
      "users upload and store all their resumes in one place.",
      "Server-side rendering",
      "Asset bundling and optimization",
      " Data loading and mutations"
    ]
  }
];