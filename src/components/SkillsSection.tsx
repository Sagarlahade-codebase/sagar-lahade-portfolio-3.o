// src/components/SkillsSection.tsx
import { motion } from "framer-motion";
import { Section } from "./section";

const skillGroups = [
  {
    title: "Backend",
    usedIn: "MediMart, CerviTester, HealthHub",
    items: [
      { label: "Java 8/11", core: true },
      { label: "Spring Boot", core: true },
      { label: "Spring MVC" },
      { label: "REST APIs", core: true },
      { label: "JPA/Hibernate" },
      { label: "Spring Security", core: true },
      { label: "JWT / OAuth 2.0" },
      { label: "Validation & error handling" },
    ],
  },
  {
    title: "Frontend (ReactJS)",
    usedIn: "MediMart UI, LahadeMart React, JobPortal",
    items: [
      { label: "ReactJS", core: true },
      { label: "React Hooks" },
      { label: "React Router" },
      { label: "fetch/axios API calls" },
      { label: "HTML5, CSS3, JavaScript" },
      { label: "Responsive layouts" },
    ],
  },
  {
    title: "Cloud & Platform",
    usedIn: "MediMart Cloud on AWS/OCI",
    items: [
      { label: "AWS (EC2, S3, RDS basics)", core: true },
      {
        label: "Oracle Cloud (OCI compute, networking, storage, IAM)",
        core: true,
      },
      { label: "Docker" },
      { label: "Kubernetes / OpenShift basics" },
      { label: "Microservices fundamentals" },
    ],
  },
  {
    title: "Databases",
    usedIn: "All major backend projects",
    items: [
      { label: "PostgreSQL", core: true },
      { label: "MySQL" },
      { label: "Schema design" },
      { label: "Indexing & query optimisation" },
      { label: "Transactions" },
    ],
  },
  {
    title: "Quality & Delivery",
    usedIn: "MediMart, CerviTester, HealthHub",
    items: [
      { label: "Maven" },
      { label: "Git / GitHub / Bitbucket" },
      { label: "GitHub Actions / Jenkins-style CI/CD" },
      { label: "Postman" },
      { label: "JUnit", core: true },
      { label: "SonarQube", core: true },
      { label: "JaCoCo", core: true },
      { label: "Agile (Scrum), Jira" },
    ],
  },
  {
    title: "AI / Data & Fundamentals",
    usedIn: "CerviTester, internships, personal learning",
    items: [
      { label: "Python" },
      { label: "TensorFlow integration", core: true },
      { label: "Image-based disease detection" },
      { label: "Image processing basics" },
      { label: "DSA in Java" },
      { label: "Software design fundamentals (MTA)" },
    ],
  },
];

export const SkillsSection = () => (
  <Section id="skills" title="Skills">
    <p className="mb-4 text-sm text-slate-300">
      Strongest in Java/Spring backend, comfortable in ReactJS, and confident
      deploying services on AWS and Oracle Cloud. Everything listed below has
      been used in real projects, not just tutorials.
    </p>

    <div className="grid gap-5 md:grid-cols-2">
      {skillGroups.map((group, idx) => (
        <motion.div
          key={group.title}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4, delay: idx * 0.05 }}
          className="
            group rounded-2xl border border-slate-800 bg-slate-900/70 p-4
            transition-all duration-300
            hover:-translate-y-1
            hover:border-primary/70
            hover:bg-slate-900
            hover:shadow-[0_0_0_1px_rgba(59,130,246,0.15),0_12px_30px_-12px_rgba(59,130,246,0.35)]
          "
        >
          <h3 className="mb-2 font-heading text-sm font-semibold text-slate-100 transition-colors group-hover:text-primary">
            {group.title}
          </h3>

          <div className="mb-2 flex flex-wrap gap-2">
            {group.items.map((item) => (
              <span
                key={item.label}
                className={
                  item.core
                    ? "rounded-full border border-primary/70 bg-primary/15 px-2.5 py-0.5 text-xs text-primary"
                    : "rounded-full bg-slate-800 px-2.5 py-0.5 text-xs text-slate-200"
                }
              >
                {item.label}
                {item.core && (
                  <span className="ml-1 text-[9px] uppercase tracking-wide">
                    core
                  </span>
                )}
              </span>
            ))}
          </div>

          <p className="mt-1 text-[11px] text-slate-400">
            Used in: {group.usedIn}
          </p>
        </motion.div>
      ))}
    </div>
  </Section>
);
