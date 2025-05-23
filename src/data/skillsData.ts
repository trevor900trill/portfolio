export interface Skill {
  name: string;
  level: number; // 1-100
  category: "frontend" | "backend" | "other";
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
}

export const skills: Skill[] = [
  { name: "Flutter", level: 95, category: "frontend" },
  { name: "JavaScript/TypeScript", level: 95, category: "frontend" },
  { name: "React/Next.js", level: 90, category: "frontend" },
  { name: "Vue.js/Nuxt.js", level: 85, category: "frontend" },
  { name: "HTML/CSS/SCSS", level: 90, category: "frontend" },
  { name: "Tailwind/Material UI", level: 88, category: "frontend" },
  { name: ".NET", level: 95, category: "backend" },
  { name: "Node.js", level: 85, category: "backend" },
  { name: "Express/Nest.js", level: 82, category: "backend" },
  { name: "PostgreSQL", level: 85, category: "backend" },
  { name: "MongoDB", level: 80, category: "backend" },
  { name: "Docker", level: 80, category: "backend" },
  { name: "AWS", level: 75, category: "backend" },
  { name: "Git/GitHub", level: 88, category: "other" },
  { name: "CI/CD", level: 75, category: "other" },
  { name: "Agile/Scrum", level: 85, category: "other" },
];

export const experiences: Experience[] = [
  {
    title: "Frontend Developer",
    company: "QwikPace",
    location: "Nairobi, Kenya(Remote)",
    period: "Jan 2022 - Present",
    description: [
      "Developed and maintained multiple web applications using React",
      "Built a payroll management system with complex calculations and reporting features",
      "Created a waste management platform with real-time tracking and analytics",
      "Implemented a fuel management system with inventory control and sales tracking",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Ebiashara",
    location: "Nairobi, Kenya",
    period: "August 2023 - June 2025",
    description: [
      "Developed Software solutions for Ebiashara clients, sped up project timelines 20%",
      "Designed, Test and maintain web applications using React, Typescript and Java script",
      "Developed and maintained multiple web applications using React",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "Stagic",
    location: "Denmark, Coppenhagen(Remote)",
    period: "December 2023 - April 2024",
    description: [
      "Built web/apps with React, Next.js and cut delivery time 15% via CI/CD pipelines",
      "Collaborated on milestones, syncing with Danish standards",
      "I have demonstrated expertise in crafting responsive web applications at Stagic",
    ],
  },
  {
    title: "Co Founder/Full Stack Developer",
    company: "Zapp",
    location: "Nairobi, Kenya(Remote)",
    period: "Mar 2020 - Dec 2021",
    description: [
      "Developed a delivery management system using React Native and Node.js",
      "Created vendor and courier mobile applications with real-time tracking",
      "Implemented secure payment processing and order management features",
      "Optimized application performance and user experience",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "Duhqa",
    location: "Nairobi, Kenya",
    period: "Jun 2019 - Feb 2020",
    description: [
      "Built an e-commerce platform using Vue.js and Node.js",
      "Implemented inventory management and order processing systems",
      "Developed admin dashboard with analytics and reporting features",
      "Improved site performance and SEO optimization",
    ],
  },
];

export const education: Education[] = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "Kenyatta University",
    location: "Nairobi, Kenya",
    period: "2015 - 2019",
  },
];
