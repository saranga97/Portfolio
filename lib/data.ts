import React from "react";
import { FaJava, FaPhp, FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { RiAngularjsLine } from "react-icons/ri";
import kekstagramImg from "@/public/kekstagramImg.png";
import locavelowImg from "@/public/locavelowImg.png";
import gallerycafeImg from "@/public/gallerycafeImg.png";
import ar from "@/public/AR.jpeg";
import syos from "@/public/syos.png";
import bigtripImg from "@/public/bigtripImg.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Full-Stack Developer",
    location: "Byte",
    description:
      "Gained hands-on experience in Web and mobile application development using tech stack - PHP, Laravel, C panel, MySQL and Flutter",
    icon: React.createElement(FaPhp),
    date: "2024",
  },
  {
    title: "Full-Stack Developer",
    location: "Advent Software",
    description:
      "Gained hands-on experience in Web application development using tech stack - React, Angular, Node.js, Express.js, MongoDB, and Docker",
    icon: React.createElement(LuGraduationCap),
    date: "2023 - 2024",
  },
  {
    title: "Trainee Software Engineer",
    location: "CodeGen International",
    description:
      "Gained hands-on experience in AI powered web services application design and development as well as team work and collaboration. In here I worked with Java, Spring Boot, Angular, and MySQL. In here I worked in LIA Project",
    icon: React.createElement(FaJava),
    date: "2023",
  },
  {
    title: "BsC in Electrical and Information Engineering (Specialized in Software Engineering)",
    location: "Faculty of Engineering, University of Ruhuna",
    description:
      "Took my graduation in BSc. Software Engineering of Department of Electrical and Information Engineering - Faculty of Engineering , University of Ruhuna.",
    icon: React.createElement(LuGraduationCap),
    date: "2020-2024",
  },
] as const;

export const projectsData = [
  {
    title: "The Gallery Cafe",
    description:
      "This is a Full Stack web application developed for a Customer with features like Online Food Ordering, Reserve tables and Parking reservations .",
    tags: [
      "PHP",
      "JavaScript",
      "MVC",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "MySQL",
      "Resend Mail",
    ],
    imageUrl: gallerycafeImg,
    projectUrl: "https://github.com/saranga97/gallery_cafe",
  },
  {
    title: "AR app to explore heritage sites in SriLanka",
    description: "This is an ongoing task for my Final Year project.",
    tags: ["Unity", "C#", "Google AR Foundation", "Lightship"],
    imageUrl: ar,
    projectUrl:
      "https://github.com/saranga97/AR-app-to-explore-heritage-sites-in-Sri-Lanka",
  },
  {
    title: "Synex Store",
    description:
      "This is a Point of Sales (POS) System done for a client to streamline the billing process & integrates with stock management to ensure efficient inventory control",
    tags: ["Java", "HTML", "CSS", "JavaScript", "MySQL"],
    imageUrl: syos,
    projectUrl: "https://github.com/saranga97/Synex-Outlet-Store-POS-System",
  },
] as const;

export const skillsData = [
  "Java",
  "Spring Boot",
  "JavaScript",
  "TypeScript",
  "React",
  "Angular",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "NestJS",
  "PostgreSQL",
  "Express.js",
  "Chart.js",
  "PHP",
  "MySQL",
  "Docker",
  ".NET",
  "C#",
  "Unity",
  "Lightship",
  "Google AR Foundation",
] as const;
