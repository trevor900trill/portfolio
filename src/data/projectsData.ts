export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  category: "web" | "mobile";
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Zapp Vendor App",
    description:
      "A mobile application for vendors to manage their products, orders, and deliveries with real-time tracking.",
    image:
      "https://images.pexels.com/photos/6169668/pexels-photo-6169668.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["Flutter", ".NET", "SQL Server", "AWS"],
    githubUrl: "https://github.com",
    liveUrl: "https://play.google.com/store/apps/details?id=com.vendor.zapp",
    category: "mobile",
    featured: true,
  },
  {
    id: 2,
    title: "Zapp Courier App",
    description:
      "A mobile application for couriers to manage deliveries with real-time tracking and route optimization.",
    image:
      "https://images.pexels.com/photos/4391470/pexels-photo-4391470.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["Flutter", ".NET", "SQL Server", "AWS"],
    githubUrl: "https://github.com",
    liveUrl:
      "https://play.google.com/store/apps/details?id=com.vendor.zappCourier",
    category: "mobile",
    featured: true,
  },
  {
    id: 3,
    title: "Payroll Management System",
    description:
      "A comprehensive payroll management system with features for salary calculations, tax deductions, reporting, and employee management.",
    image:
      "https://images.pexels.com/photos/6476254/pexels-photo-6476254.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["Vue", "Element UI", "Docker"],
    githubUrl: "https://github.com",
    liveUrl: "https://payroll.qwikpace.com",
    category: "web",
    featured: false,
  },
  {
    id: 4,
    title: "Waste Management Platform",
    description:
      "A waste management solution with real-time tracking, analytics, and reporting features for efficient waste collection and disposal.",
    image:
      "https://images.pexels.com/photos/5726837/pexels-photo-5726837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["React", "Material UI", "Tailwind CSS"],
    githubUrl: "https://github.com",
    liveUrl: "https://weee.qwikpace.com",
    category: "web",
    featured: false,
  },
  {
    id: 5,
    title: "Fuel Management System",
    description:
      "A comprehensive fuel management platform with inventory control, sales tracking, and reporting capabilities.",
    image:
      "https://images.pexels.com/photos/9796/car-refill-transportation-transport.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["React", "Hero UI", "Tailwind CSS"],
    githubUrl: "https://github.com",
    liveUrl: "https://fuelguru.qwikpace.com",
    category: "web",
    featured: false,
  },
];
