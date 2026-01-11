// src/sections/EducationCertsSection.tsx
import { Section } from "../components/section";

import ociImg from "../assets/oracle_logo.jfif";
import ibmImg from "../assets/ibm_logo.jfif";
import microsoftImg from "../assets/microsoft_logo.jfif";
import hackerrankImg from "../assets/hackerrank_logo.jfif";
import aiImg from "../assets/pantech_logo.jpg";

/* ================= PRIMARY CERTIFICATIONS ================= */

const primaryCerts = [
  {
    title: "Oracle Cloud Infrastructure 2025 Architect Associate",
    provider: "Oracle",
    img: ociImg,
    link: "https://drive.google.com/file/d/1_FwywobuKX-3Ftcl6o8JxLJ08o41P4W3/view?usp=sharing",
  },
  {
    title: "Oracle Cloud Infrastructure 2025 Developer Professional",
    provider: "Oracle",
    img: ociImg,
    link: "https://drive.google.com/file/d/1ETsn6lRrqLoKDu3_8dPSMGhZUFOPBWcp/view?usp=sharing",
  },
  {
    title: "Introduction to Containers with Docker, Kubernetes & OpenShift",
    provider: "IBM / Coursera",
    img: ibmImg,
    link: "https://www.coursera.org/account/accomplishments/verify/ZLUFQTP2LG45",
  },
  {
    title: "Machine Learning & AI Internship (30 days)",
    provider: "Pantech Solutions",
    img: aiImg,
    link: "https://drive.google.com/file/d/1oPGHb_Fm90tV4LsK7dYOJFJYUheCHoI5/view?usp=sharing",
  },
  {
    title: "MTA: Software Development Fundamentals",
    provider: "Microsoft",
    img: microsoftImg,
    link: "https://learn.microsoft.com/en-gb/users/sagarlahade-5293/transcript/vp191t2n1oo926q",
  },
  {
    title: "HackerRank Skill Certifications",
    provider: "Java, Problem Solving",
    img: hackerrankImg,
    link: "https://www.hackerrank.com/profile/sagarlahade_con1",
  },
];

/* ================= ADDITIONAL LEARNING ================= */

const additionalLearning = [
  "Spring Boot 3, Spring 6 & Hibernate – Udemy",
  "Java 8 New Features – Udemy",
  "Java DSA Course – Scaler",
  "Image Processing Onramp – MathWorks",
];

/* ================= COMPONENT ================= */

export const EducationCertsSection = () => (
  <Section id="certs" title="Education & Certifications">
    <div className="grid gap-8 md:grid-cols-[2fr,3fr]">
      {/* ================= EDUCATION ================= */}
      <article
        className="
          group rounded-2xl border border-slate-800 bg-slate-900/70 p-6
          transition-all duration-300
          hover:-translate-y-1
          hover:border-primary/70
          hover:bg-slate-900
          hover:shadow-[0_0_0_1px_rgba(59,130,246,0.15),0_12px_30px_-12px_rgba(59,130,246,0.35)]
        "
      >
        <h3 className="font-heading text-base font-semibold text-slate-50 transition-colors group-hover:text-primary">
          Education
        </h3>

        {/* ---------- M.Tech ---------- */}
        <div className="mt-4">
          <p className="text-sm font-semibold text-slate-100">
            Master of Technology (M.Tech), Computer Engineering
          </p>
          <p className="text-sm text-slate-300">
            Pimpri Chinchwad College of Engineering (PCCOE), Pune
          </p>
          <p className="mt-1 text-xs text-slate-400">
            Dec 2021 – Nov 2023 ·{" "}
            <span className="font-medium text-emerald-400">89%</span>
          </p>

          <div className="mt-3 flex flex-wrap gap-2">
            {[
              "Software Development Life Cycle (SDLC)",
              "Data Analytics",
              "Artificial Intelligence",
              "Machine Learning",
              "Image Processing",
              "Python Programming",
              "R Programming",
            ].map((subject) => (
              <span
                key={subject}
                className="rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1 text-[11px] text-slate-300"
              >
                {subject}
              </span>
            ))}
          </div>
        </div>

        {/* ---------- B.Tech ---------- */}
        <div className="mt-6 border-t border-slate-800 pt-4">
          <p className="text-sm font-semibold text-slate-100">
            B.Tech, Computer Engineering
          </p>
          <p className="text-sm text-slate-300">
            D. Y. Patil Institute of Engineering & Technology, Pune
          </p>
          <p className="mt-1 text-xs text-slate-400">
            Aug 2014 – Apr 2018 · 63%
          </p>

          <div className="mt-3 flex flex-wrap gap-2">
            {[
              "Data Structures",
              "Algorithms",
              "DBMS",
              "SDLC",
              "Java Programming",
              "Software Engineering",
            ].map((subject) => (
              <span
                key={subject}
                className="rounded-full border border-slate-800 bg-slate-900/60 px-3 py-1 text-[11px] text-slate-400"
              >
                {subject}
              </span>
            ))}
          </div>
        </div>
      </article>

      {/* ================= CERTIFICATIONS ================= */}
      <section>
        <h3 className="mb-4 font-heading text-base font-semibold text-slate-50">
          Professional Certifications
        </h3>

        <ul className="grid auto-rows-fr grid-cols-1 gap-4 sm:grid-cols-2">
          {primaryCerts.map((cert) => (
            <li
              key={cert.title}
              className="
                group flex h-full items-start gap-4 rounded-xl
                border border-slate-800 bg-slate-900/70 p-4
                transition-all duration-300
                hover:-translate-y-1
                hover:border-primary/70
                hover:bg-slate-900
                hover:shadow-[0_0_0_1px_rgba(59,130,246,0.15),0_12px_30px_-12px_rgba(59,130,246,0.35)]
              "
            >
              <img
                src={cert.img}
                alt={cert.provider}
                className="mt-1 h-9 w-9 object-contain"
              />

              <div className="flex flex-1 flex-col justify-between">
                <div>
                  <p className="line-clamp-2 text-sm font-medium text-slate-100 transition-colors group-hover:text-primary">
                    {cert.title}
                    {cert.title.includes("AI") && (
                      <span className="ml-2 rounded bg-emerald-500/10 px-2 py-0.5 text-[10px] text-emerald-400">
                        AI
                      </span>
                    )}
                  </p>
                  <p className="mt-1 text-xs text-slate-400">
                    {cert.provider}
                  </p>
                </div>

                <a
                  href={cert.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 text-xs text-primary hover:underline"
                >
                  Verify
                </a>
              </div>
            </li>
          ))}
        </ul>

        {/* ================= ADDITIONAL LEARNING ================= */}
        <div className="mt-6">
          <h4 className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-400">
            Additional learning & coursework
          </h4>

          <div className="flex flex-wrap gap-2">
            {additionalLearning.map((item) => (
              <span
                key={item}
                className="rounded-full border border-slate-800 bg-slate-900/60 px-3 py-1 text-[11px] text-slate-300"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  </Section>
);
