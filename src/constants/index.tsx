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
  cubesat,
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
    id: "experience",
    title: "Experience",
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
    title: "AI & Computer Vision",
    icon: backend,
  },
  {
    title: "Camera System",
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
    title: "Machine Learning Computer Vision Engineering Intern",
    company_name: "AGCO - Precision Planting",
    icon: precisionplanting,
    iconBg: "#65422C",
    date: "Oct 2022 - Present",
    points: [
      "React Native / Swift UIKit Frontend Design: Developed the frontend interface using both React Native with Swift UIkit which enhances user interaction with the agricultural data platform mobile app.",
      "User Interface and Experience Optimization: Engineered new camera systems and user interfaces to facilitate better interaction between farmers and farming machinery, improving accessibility and usability of precision agriculture data.",
      "Augmented Reality and Machine Learning: Improved user interaction within an augmented reality system using iOS ARKit, Core ML, and Swift UIkit for precise analysis of crop emergence and vital agricultural metrics.",
      "Embedded Systems Integration: Developed a robust agricultural product testing automation QA tool that interfaces with embedded systems using CAN bus, Linux Sockets, and SocketIO.",
      "Full-Stack System Development: Actively working on integrating a C++ system-wide controller with Node"
    ],
  },
  {
    title: "Software Engineer R&D",
    company_name: "Founders",
    icon: founders,
    iconBg: "#FFEAD1",
    date: "Feb 2023 - Present",
    points: [
      "Conducted user research to identify entrepreneurial networking pain points, driving the Figma design and development of a co-founder matching platform that allow entrepreneurial minded people to find members and kickstart their startup.",
      "Develop website platform from the ground up using React and Tailwind CSS for the UI, Django for backend",
    ],
  },
  {
    title: "Autonomous Drone Perception System Assistant Researcher",
    company_name: "UIUC Advanced Controls Research Laboratory (Multi-Rotor Platform)",
    icon: uiuc,
    iconBg: "#0D2E53",
    date: "Aug 2023 - Present",
    points: [
      "Working with Prof. Naira Hovakimyan in the Advanced Controls Research Laboratory as an undergraduate research assistant, focusing on advancing autonomous drone perception systems.",
      "Utilize ROS for onboard data collection and train/verify flight algorithms in python using gathered depth perception data from stereo cameras.",
      "Designed and executed experiments using the AirSim and Gazebo simulation platform to validate and refine the performance of the developed perception and planning algorithms."
    ],
  },
  {
    title: "Head of Payload and Command & Data Handling Subsystem",
    company_name: "BCCSAT-1 Satellite - Launched into low earth orbit on March 22, 2021",
    icon: cubesat,
    iconBg: "#0D2E53",
    date: "May 2018 - Dec 2023",
    points: [
      "Pioneered the world's first 1U CubeSat capable of multispectral imaging for precision agriculture and image sensing.",
      "Developed and configured the 2x2 array of onboard cameras and filters using only off-the-shelf components capable of capturing multispectral images and performing image sensing.",
      "Developed NDVI & NDRE image processing algorithm to calculate the relative biomass of the vegetations in the area for precision agriculture and geographical survey of water sources, city boundaries, and agriculture/vegetation.",
      "Programmed, designed, and assembled on-board computer capable of managing 6 subsystems, FRAM and central memories mapping, data transmission using AX.25 packet format, error management, and firmware upgrade.",

    ],
  },
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
  }
];

const testimonials = [
  {
    testimonial:
      "Lorem Ipsum.",
    name: "Lorem",
    designation: "Lorem",
    company: "Lorem",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
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
