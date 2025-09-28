import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import { mobile, backend, creator, web, figma, novusarklogo } from "../assets";

// Removed unused tech asset imports to fix TS6133 errors

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "certificates",
    title: "Certificates",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Product Designer",
    icon: web,
  },
  {
    title: "UI/UX Designer",
    icon: backend,
  },
  {
    title: "Interaction Designer",
    icon: creator,
  },
  {
    title: "Design Strategist",
    icon: mobile,
  },
  // {
  //   title: "Content Creator",
  //   icon: creator,
  // },
];

const technologies: TTechnology[] = [
  // {
  //   name: "HTML 5",
  //   icon: html,
  // },
  // {
  //   name: "CSS 3",
  //   icon: css,
  // },
  // {
  //   name: "JavaScript",
  //   icon: javascript,
  // },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  // {
  //   name: "React JS",
  //   icon: reactjs,
  // },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  // {
  //   name: "Tailwind CSS",
  //   icon: tailwind,
  // },
  // {
  //   name: "Node JS",
  //   icon: nodejs,
  // },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  // {
  //   name: "git",
  //   icon: git,
  // },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences: TExperience[] = [
  {
    title: "Product Designer",
    companyName: "Novus Ark",
    icon: novusarklogo,
    iconBg: "#000000ff",
    date: "Present",
    points: [
      "Designing web and mobile interfaces for client-based projects at a service-based company.",
      "Responsible for end-to-end design—from research and wireframing to high-fidelity UI and prototyping.",
      "Collaborate with cross-functional teams to deliver user-centric, scalable, and visually consistent solutions.",
      "Focus on delivering intuitive, accessible, and visually engaging interfaces tailored to each client’s needs.",
      "Location: Vadodara, Gujarat.",
    ],
  },
  {
    title: "UI/UX Intern",
    companyName: "Novus Ark",
    icon: novusarklogo,
    iconBg: "#060636ff",
    date: "Nov 2023 - Jul 2024",
    points: [
      "A company specializing in the design and development of digital interfaces.",
      "Collaborated with the design and development team to create intuitive and user-friendly interfaces for web and mobile applications.",
      "Gained hands-on experience in wireframing, prototyping, and user research using tools like Figma.",
      "Contributed to real-time client projects while learning industry-standard UI/UX practices, responsive design principles, and scalable design systems.",
      "Location: Vadodara, Gujarat.",
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "Kishan has been doing a great job as a UI/UX intern with us. He's shown a strong understanding of user-centered design principles, delivered clean and thoughtful designs, and has always been open to feedback. His ability to translate ideas into intuitive user experiences has been a real asset to our projects. It's great to see how quickly he's growing and taking ownership of his work.",
    name: "Neha Shah",
    designation: "CoO & Co-Founder",
    company: "Novus Ark & Cutting Edge Infotech",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyt4GqXYVTYYj-jU8ygW20SUvyJjI4TV-fdQ&s",
  },
  // {
  //   testimonial:
  //     "I've never met a web developer who truly cares about their clients' success like Rick does.",
  //   name: "Chris Brown",
  //   designation: "COO",
  //   company: "DEF Corp",
  //   image: "https://randomuser.me/api/portraits/men/5.jpg",
  // },
  // {
  //   testimonial:
  //     "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //   name: "Lisa Wang",
  //   designation: "CTO",
  //   company: "456 Enterprises",
  //   image: "https://randomuser.me/api/portraits/women/6.jpg",
  // },
];

const projects: TProject[] = [
  {
    name: "RK Credit First Application",
    description:
      "Prototype for a credit card management app inspired by Unicard. Designed an intuitive credit card management app prototype using Figma, focusing on a clean and user-friendly experience. Developed wireframes, high-fidelity prototypes, and user flows for features such as expense tracking, bill reminders, and card management tools.",
    tags: [
      { name: "figma", color: "blue-text-gradient" },
      { name: "ui/ux", color: "green-text-gradient" },
      { name: "prototype", color: "pink-text-gradient" },
    ],
    image: figma,
    sourceCodeLink:
      "https://www.behance.net/gallery/233186659/RK-Credit-First-Fintech-App-UIUX-Design", // Replace with your actual Behance project link
  },
  {
    name: "Loyallty Dashboard Application",
    description:
      "Prototype for a Rewards Application inspired by modern brand programs. Designed a loyalty rewards app prototype using Figma focused on ease of use and modern aesthetics. Developed wireframes, high-fidelity prototypes, and user flows for core features such as real-time reward tracking, point redemption, offer filtering by category/location, and user profile management. Ensured a seamless reward experience by prioritizing intuitive navigation, responsive layouts, and minimal user friction.",
    tags: [
      { name: "figma", color: "blue-text-gradient" },
      { name: "ui/ux", color: "green-text-gradient" },
      { name: "dashboard", color: "pink-text-gradient" },
    ],
    image: novusarklogo,
    sourceCodeLink: "https://www.behance.net/kishanparvadiya", // Replace with your actual Behance project link
  },
];

export { services, technologies, experiences, testimonials, projects };
