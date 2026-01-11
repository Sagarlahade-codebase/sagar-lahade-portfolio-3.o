// src/components/ExperienceSection.tsx
import { motion } from "framer-motion";
import { Section } from "./section";

const experiences = [
  {
    company: "Config Server LLP · MediMart Cloud",
    role: "Java Developer",
    period: "Feb 2024 – Present",
    location: "Pune, Maharashtra (Remote-first)",
    points: [
      "Designed and developed Spring Boot REST APIs for MediMart Cloud – a healthcare E-commerce platform for browsing medical products, carts, orders, and user workflows.",
      "Implemented payment-gateway integration and secured APIs with Spring Security, JWT, and OAuth 2.0, enforcing role-based access for admin, doctor, and operations users.",
      "Integrated HashiCorp Vault with Spring Boot and externalized environment config so services can run safely on AWS/OCI with secrets outside code and property files.",
      "Added JUnit tests and SonarQube/JaCoCo checks for core modules, reducing regressions and making refactors safer across MediMart and legal/case-management services.",
    ],
    stack: [
      "Java 11",
      "Spring Boot",
      "Spring MVC",
      "REST APIs",
      "Spring Security (JWT/OAuth2)",
      "PostgreSQL",
      "Ehcache",
      "HashiCorp Vault",
      "Git",
      "JUnit",
      "SonarQube",
      "JaCoCo",
    ],
  },
  {
    company: "Polymorphism Infotech",
    role: "Java Developer",
    period: "Jun 2023 – Feb 2024",
    location: "Pune, India",
    points: [
"Used Maven for build automation and dependency management", 
"Optimized performance and fixed critical bugs, enhancing user experience",
"Followed Agile methodologies with tools like Jira and Git for source control and task tracking",
"Integrated TensorFlow deep learning models into Java to enable real-time predictions",
"Crafted DL models on MRI brain scans to identify brain tumor regions",
      "Created server-rendered UIs with Thymeleaf and collaborated with frontend teams on React/JS screens and API contracts.",
      "Used Ehcache and query optimization to improve latency on read-heavy endpoints.",
    ],
    stack: [
      "Java 8/11",
      "Spring Boot",
      "Spring MVC",
      "JPA/Hibernate",
      "REST APIs",
      "PostgreSQL",
      "MySQL",
      "Thymeleaf",
      "Ehcache",
      "Maven",
      "Git",
      "Jira",
    ],
  },
  {
    company: "Ohum Healthcare Solutions · HealthHub",
    role: "Trainee Technical Consultant",
    period: "Aug 2019 – Feb 2020",
    location: "Pune, India",
    points: [
      "Implemented Spring MVC / Spring Boot flows for hospital-management features.",
      "Used Java 8 features and PostgreSQL query tuning on hospital-scale datasets.",
      "Built Thymeleaf UIs and participated in Agile ceremonies using Git.",
    ],
    stack: [
      "Java 8",
      "Spring Boot",
      "Spring MVC",
      "REST APIs",
      "PostgreSQL",
      "Thymeleaf",
      "Git",
      "Agile",
    ],
  },
  
  {
    company: "WinJit Technologies",
    role: "Engineer Trainee",
    period: "Sep 2018 – Apr 2019",
    location: "Hybrid Client Engagement",
    points: [
      "Engineered Java-based edge and backend components to ingest press machine telemetry over MQTT and custom industrial protocols",
      "Built and hardened Spring Boot REST APIs with validation and logging to stream real-time IoT data into monitoring dashboards. ",
      "Implemented data-driven monitoring to optimize machine health visibility and cut productivity losses from downtime",
      "Designed PostgreSQL schemas and tuned queries to keep inference latency within real-world limits.",
    ],
    stack: [
      "Java 8",
      "Spring Boot",
      "REST APIs",
      "PostgreSQL",
      "TensorFlow (integration)",
      "Python (ML pipeline)",
      "Git",
    ],
  }
];

export const ExperienceSection = () => (
  <Section id="experience" title="Experience">
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="mx-auto flex max-w-5xl flex-col gap-6 sm:flex-row"
    >
      {/* timeline spine */}
      <div className="relative hidden w-10 sm:flex">
        <div className="mx-auto h-full w-px bg-slate-800" />
      </div>

      {/* experience cards */}
      <div className="flex-1 space-y-6">
        {experiences.map((exp, idx) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            className="
              group relative rounded-2xl border border-slate-800 bg-slate-900/70
              p-4 sm:p-5 transition-all duration-300
              hover:-translate-y-1
              hover:border-primary/70
              hover:bg-slate-900
              hover:shadow-[0_0_0_1px_rgba(59,130,246,0.15),0_12px_30px_-12px_rgba(59,130,246,0.35)]
            "
          >
            {/* timeline dot */}
            <div className="absolute -left-5 top-5 hidden sm:block">
              <div className="relative h-3 w-3 rounded-full bg-slate-900">
                <div className="absolute inset-0 rounded-full border border-slate-700" />
                <div className="absolute inset-1 rounded-full bg-primary shadow-[0_0_12px_rgba(56,189,248,0.8)]" />
              </div>
            </div>

            {/* header */}
            <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
              <div>
                <h3 className="font-heading text-base font-semibold text-slate-100 transition-colors group-hover:text-primary sm:text-lg">
                  {exp.role}
                </h3>
                <p className="text-sm text-slate-300">{exp.company}</p>
              </div>
              <div className="text-xs text-slate-400 sm:text-right">
                <p>{exp.period}</p>
                <p>{exp.location}</p>
              </div>
            </div>

            {/* bullets */}
            <ul className="mt-3 space-y-1.5 text-sm text-slate-200">
              {exp.points.map((line) => (
                <li key={line} className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>

            {/* stack */}
            <div className="mt-3 flex flex-wrap gap-2">
              {exp.stack.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-slate-700 bg-slate-900 px-2.5 py-1 text-[11px] text-slate-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </Section>
);
