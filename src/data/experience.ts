export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
  stack: string;
}

export const experience: ExperienceItem[] = [
  {
    company: "Canopus Solutions",
    role: "Java & Full‑Stack Developer",
    period: "Jul 2021 – Mar 2025",
    location: "Pune, India",
    bullets: [
      "Helped build and maintain MediMart, an online platform for medical supplies.",
      "Designed and implemented REST APIs in Spring Boot for product catalog, cart, orders and user management.",
      "Secured APIs with Spring Security (JWT, OAuth 2.0) and integrated a payment gateway for reliable checkout.",
      "Introduced unit tests and SonarQube/JaCoCo checks, which made refactoring safer and caught issues earlier.",
      "Integrated HashiCorp Vault so secrets and credentials were not hard‑coded and were ready for cloud deployment.",
    ],
    stack: "Java, Spring Boot, Spring Security, PostgreSQL, React/Thymeleaf, Vault",
  },
  {
    company: "Dept. of Science & Technology, India – CerviTester",
    role: "Software Developer (Consultant)",
    period: "Apr 2023 – Jun 2023",
    location: "Pune, India",
    bullets: [
      "Built Spring Boot APIs to manage patient data, image uploads and diagnostic report workflows.",
      "Integrated TensorFlow models into Java services to run automated classification of cervical images (test accuracy in the low‑80% range).",
      "Designed the data model in PostgreSQL and added validation/error handling so bad input didn’t crash the pipeline.",
    ],
    stack: "Java, Spring Boot, PostgreSQL, Python, TensorFlow",
  },
  {
    company: "Ohum Healthcare Solutions",
    role: "Trainee Technical Consultant",
    period: "Aug 2019 – Feb 2020",
    location: "Pune, India",
    bullets: [
      "Implemented Java 8 / Spring Boot / Spring MVC endpoints for patients, appointments, doctors, billing and records.",
      "Used Streams and Optional to simplify business logic and tuned PostgreSQL queries and indexes for realistic hospital data volumes.",
      "Participated in Agile ceremonies and code reviews.",
    ],
    stack: "Java, Spring Boot, Spring MVC, PostgreSQL",
  },
];
