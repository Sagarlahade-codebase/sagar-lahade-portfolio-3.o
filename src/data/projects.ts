// src/data/projects.ts

import lahadeMartImg from "../assets/LahadeMart.png"; 
import sciCalImg from "../assets/SCICAL.png"; 
import jobPortalImg from "../assets/jobportal.png"; 
import bioMetricImg from "../assets/Bio.png"; 
import mediMart from "../assets/mediMart.png"; 
import cervi from "../assets/CerviTester.png"; 
import pump from "../assets/InfuCare.png"; 
import healthhub from "../assets/HealthHub.png"; 





export interface Project {
  title: string;
  type: "professional" | "personal";
  description: string;
  tech: string[];
  image?: string;
  demoUrl?: string;
  codeUrl?: string;
}

export const projects: Project[] = [
  {
    title: "MediMart Cloud",
    type: "professional",
    image:mediMart,
    description:
      "Healthcare-focused E-commerce app where hospitals and individuals can browse products, manage carts and place orders securely.",
    tech: [
      "ReactJS",
      "Java",
      "Spring Boot",
      "Spring Security",
      "PostgreSQL/MySQL",
      "Docker",
      "AWS/OCI",
    ],
  },
  {
    title: "CerviTester – Screening Backend",
    type: "professional",
    image:cervi,
    description:
      "Backend for an AI-assisted cervical cancer screening system with patient and image APIs and ML-backed predictions.",
    tech: ["Java 8", "Spring Boot", "PostgreSQL", "TensorFlow"],
  },
  {
    title: "InfuCare – Infusion Pump Monitoring",
    type: "professional",
    image:pump,
    description:
      "Telemetry APIs and reporting to detect infusion pump anomalies and generate alerts.",
    tech: ["Java", "Spring Boot", "PostgreSQL"],
  },
  {
    title: "HealthHub – Hospital Management System",
    type: "professional",
    image:healthhub,
    description:
      "Hospital workflows for patients, doctors, appointments, billing and records with role-based access.",
    tech: ["Java", "Spring Boot", "Spring MVC", "PostgreSQL", "Thymeleaf"],
  },
  {
    title: "LahadeMart React",
    type: "personal",
    image:lahadeMartImg,
    description:
      "ReactJS storefront with product listing, cart and checkout integrated with backend APIs.",
    tech: ["ReactJS", "Java", "SpringBoot","OAuth 2.0","JWT"],
    demoUrl: "https://sagarlahade-ecommerce-angular.vercel.app/",
    codeUrl:
      "https://github.com/Sagarlahade-codebase/EcommerceSpringBootFinal/tree/main/spring-boot-ecommerce",
  },
  {
    title: "JobPortal React",
    type: "personal",
    image:jobPortalImg,
    description:
      "Job listing SPA with filters, pagination and separate candidate and recruiter flows.",
    tech: ["ReactJS", "PostgreSQL", "SpringBoot","Thymeleaf"],
    demoUrl:"https://jobportal-z5ei.onrender.com/",
    codeUrl:"https://github.com/Sagarlahade-codebase/JobPortal/tree/main/JobPortal"
  },
  {
    title: "Scientific Calculator",
    type: "personal",
    image:sciCalImg,
    description:
      "Web calculator focusing on correct logic, state handling and clean UI.",
    tech: ["React / Vanilla JS", "Math logic"],
    demoUrl:"https://scientificcalculator-ndxi.onrender.com/",
    codeUrl:"https://github.com/Sagarlahade-codebase/ScientificCalculator/tree/main/CalculatorApplication"
  },
  {
    title: "Biometric Voting Machine",
    type: "personal",
    image:bioMetricImg,
    description:
      "Prototype exploring secure identification and voting workflows.",
    tech: ["Java 8", "SpringBoot", "Authentication", "HTML","CSS"],
    demoUrl:"https://temp-1-9raw.onrender.com/login.jsp",
    codeUrl:"https://github.com/Sagarlahade-codebase/BiometricVotingMachine/tree/main/bbb"
  },
];
