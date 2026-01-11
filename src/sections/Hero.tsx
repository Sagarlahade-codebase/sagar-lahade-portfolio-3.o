// src/sections/Hero.tsx
import { motion, type Variants } from "framer-motion";
import { profile } from "../data/profile";

import avatar from "../assets/avatar-placeholder.jpg";
import githubIcon from "../assets/github.svg";
import linkedinIcon from "../assets/linkedin.svg";
import hackerrankIcon from "../assets/hackerrank-white.svg";

/* ===== BADGE IMAGES ===== */
import ociArchBadge from "../assets/OCI25badge.png";
import ociDevBadge from "../assets/OCIbage.png";
import MTAbadge from "../assets/MTAbadge.png";

/* ===== ANIMATION VARIANTS ===== */
const containerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.06 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

/* ===== BADGE CONFIG (NATURAL SIZES) ===== */
const badgeImages = [
  {
    src: ociArchBadge,
    label: "OCI Architect Certified",
    size: "h-10 sm:h-11",
  },
  {
    src: ociDevBadge,
    label: "OCI Developer Certified",
    size: "h-8 sm:h-9",
  },
  {
    src: MTAbadge,
    label: "MTA Developer",
    size: "h-7 sm:h-8",
  },
];

export const Hero = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden px-4"
    >
      {/* ===== BACKGROUND GLOWS ===== */}
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute -top-32 -left-40 h-72 w-72 rounded-full bg-primary/70 blur-3xl" />
        <div className="absolute bottom-[-6rem] right-[-4rem] h-80 w-80 rounded-full bg-secondary/60 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),transparent_60%)]" />
      </div>

      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 gap-10 pt-20 pb-14 md:grid-cols-[3fr,2fr]">
        {/* ================= LEFT ================= */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col"
        >
          {/* Tech strip */}
          <motion.div variants={itemVariants}>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_10px_rgba(56,189,248,0.9)]" />
              Java · Spring Boot · ReactJS · Cloud
            </div>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="font-heading text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl"
          >
            Java Backend &amp; Full-Stack Engineer
          </motion.h1>

          {/* Intro */}
          <motion.p
            variants={itemVariants}
            className="mt-4 max-w-2xl text-sm text-slate-200 sm:text-base"
          >
            Java-focused backend and full-stack engineer with 3.8+ years building
            secure healthcare and E-commerce systems on Spring Boot, ReactJS and
            AWS / Oracle Cloud.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="mt-2 max-w-2xl text-sm text-slate-300 sm:text-base"
          >
            {profile.heroSubtitle}
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="mt-3 text-xs text-slate-400">
            {profile.location} · Open to {profile.openTo}
          </motion.p>

          {/* ===== TECH TAGS ===== */}
          <motion.div
            variants={itemVariants}
            className="mt-5 flex flex-wrap gap-2"
          >
            {profile.techTags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-slate-700/80 bg-slate-900/80 px-3 py-1 text-xs text-slate-200"
              >
                {tag}
              </span>
            ))}
          </motion.div>

          {/* ===== IMAGE BADGES (NATURAL SCALE) ===== */}
          <motion.div
            variants={itemVariants}
            className="mt-6 flex flex-wrap gap-3"
          >
            {badgeImages.map((badge) => (
              <div
                key={badge.label}
                title={badge.label}
                className="
                  group flex items-center gap-3 rounded-xl
                  border border-primary/30
                  bg-gradient-to-br from-slate-900/90 to-slate-800/80
                  px-3 py-2
                  backdrop-blur-md
                  transition-all duration-300
                  hover:-translate-y-0.5
                  hover:border-primary
                  hover:shadow-[0_0_0_1px_rgba(59,130,246,0.3),0_10px_30px_rgba(59,130,246,0.35)]
                "
              >
                <img
                  src={badge.src}
                  alt={badge.label}
                  className={`${badge.size} w-auto object-contain drop-shadow-[0_0_6px_rgba(255,255,255,0.35)]`}
                />
                <span className="text-[11px] font-medium text-slate-200 group-hover:text-primary">
                  {badge.label}
                </span>
              </div>
            ))}
          </motion.div>

          {/* ===== CTAs ===== */}
          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-wrap gap-3"
          >
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollTo("experience")}
              className="rounded-full bg-primary px-5 py-2 text-sm font-medium text-white shadow-[0_14px_45px_rgba(56,189,248,0.4)] hover:bg-primary/90"
            >
              View Experience &amp; Projects
            </motion.button>

            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              href={profile.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-slate-600 bg-slate-900/70 px-5 py-2 text-sm font-medium text-slate-100 hover:border-primary/70 hover:bg-slate-800/90"
            >
              Download Resume
            </motion.a>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollTo("contact")}
              className="rounded-full border border-slate-600 bg-transparent px-5 py-2 text-sm font-medium text-slate-100 hover:border-primary/70 hover:bg-slate-800/80"
            >
              Contact Me
            </motion.button>
          </motion.div>
        </motion.div>

        {/* ================= RIGHT ================= */}
        <div className="flex flex-col items-center gap-6 md:items-end">
          {/* Snapshot card */}
          <motion.div className="w-full max-w-sm">
            <motion.div
              whileHover={{
                y: -4,
                boxShadow:
                  "0 0 0 1px rgba(59,130,246,0.15),0 22px 60px rgba(59,130,246,0.35)",
              }}
              className="rounded-3xl border border-slate-800 bg-slate-900/80 p-5 transition-all duration-300"
            >
              <div className="mb-4 flex items-center gap-4">
                <div className="relative h-20 w-20 overflow-hidden rounded-full border border-slate-500">
                  <img
                    src={avatar}
                    alt="Sagar Lahade portrait"
                    className="h-full w-full object-cover"
                  />
                  <span className="absolute bottom-1 right-1 h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.9)]" />
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-[0.16em] text-slate-400">
                    Snapshot
                  </p>
                  <p className="font-heading text-sm font-semibold text-slate-100">
                    {profile.name}
                  </p>
                  <p className="text-xs text-slate-400">
                    Java Backend &amp; Full-Stack Engineer
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                {[
                  ["Experience", "3.8+ years"],
                  ["Focus", "Backend-heavy full-stack"],
                  ["Domains", "Healthcare · MedTech · E-commerce"],
                  ["Open to", "Java Backend / Full-Stack"],
                ].map(([label, value]) => (
                  <div key={label}>
                    <p className="text-slate-400">{label}</p>
                    <p className="font-medium text-slate-100">{value}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Social strip */}
          <motion.div className="w-full max-w-sm">
            <motion.div
              whileHover={{
                y: -2,
                boxShadow:
                  "0 0 0 1px rgba(59,130,246,0.15),0 18px 45px rgba(59,130,246,0.35)",
              }}
              className="rounded-3xl border border-slate-800 bg-slate-950/70 px-4 py-3 text-xs text-slate-300 transition-all duration-300"
            >
              <p className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                Find me on
              </p>

              <div className="flex flex-wrap gap-2">
                {[
                  ["GitHub", profile.links.github, githubIcon],
                  ["LinkedIn", profile.links.linkedin, linkedinIcon],
                  ["HackerRank", profile.links.hackerrank, hackerrankIcon],
                ].map(([label, href, icon]) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 rounded-full border border-slate-700 px-2.5 py-1 transition-all hover:-translate-y-0.5 hover:border-primary/70 hover:bg-slate-800/80"
                  >
                    <img src={icon} alt="" className="h-3.5 w-3.5" />
                    <span>{label}</span>
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
