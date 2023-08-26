// @ts-nocheck

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  astroberry,
  precisionplanting,
  founders,
  aviate,
  uiuc,
  uiucfull,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Satellite Software & Payload System Researcher",
    company_name: "AstroBerry",
    icon: astroberry,
    iconBg: "#BBE4FF",
    date: "Mar 2019 - Dec 2019",
    points: [
      "Researched image processing algorithms for satellite multispectral images which is used for precision agriculture and remote sensing in Thailand.",
      "Engineered a biomass heatmap image format that allows for a more intuitive interpretation of crop, vegetation, and soil nitrogen level.",
      "Refined the design of camera and signal processing embedded system for small satellite with Dr. Phongsatorn Saisutjarit by revising on previously successful small satellite subsystems and innovating new technical designs to prevent failures from prior systems.",
    ],
  },
  {
    title: "Machine Learning Computer Vision Engineering Intern",
    company_name: "AGCO - Precision Planting",
    icon: precisionplanting,
    iconBg: "#65422C",
    date: "Oct 2022 - Present",
    points: [
      "Engineer new camera system, user interface design, and user experience design that enables better interaction between farmer, farming machinery, and precision agriculture data.",
      "Improve computer vision in augmented reality system and machine learning for the analysis of crop emergence and numerous crop metric for precision agriculture using ARKit and Core ML.",
      "•\tDesign the front-end using React Native and enhance back-end data structure for cloud syncing to AWS’s S3, DynamoDB, and Lambda for a mobile application use for the analysis of crop for precision agriculture.",
    ],
  },
  {
    title: "Software Engineer R&D",
    company_name: "Founders",
    icon: founders,
    iconBg: "#FFEAD1",
    date: "Feb 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Design and develop a co-founder matching platform using React for Illinois Entrepreneurship Center that allow entrepreneurial minded people to find members and kickstart their startup.",
    ],
  },
  {
    title: "Autonomous Drone Perception System Assistant Researcher",
    company_name: "UIUC Advanced Controls Research Laboratory (Multi-Rotor Platform)",
    icon: uiuc,
    iconBg: "#0D2E53",
    date: "Agu 2023 - Present",
    points: [
      "Working with Prof. Naira Hovakimyan in the Advanced Controls Research Laboratory as an undergraduate research assistant, focusing on advancing autonomous drone perception systems.",
      "Developed depth perception and contribute to safe path planning using stereo cameras. ",
      "Designed and executed experiments using the AirSim simulation platform to validate and refine the performance of the developed perception and planning algorithms.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
