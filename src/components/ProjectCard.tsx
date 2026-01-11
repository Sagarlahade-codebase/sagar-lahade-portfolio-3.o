// src/components/ProjectCard.tsx
import { motion } from "framer-motion";
import type { Project } from "../data/projects";
import placeholderImg from "../assets/project-placeholder.jpg";

interface Props {
  project: Project;
}

export const ProjectCard = ({ project }: Props) => {
  const imageSrc = project.image ?? placeholderImg;

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="
        group flex flex-col overflow-hidden rounded-2xl
        border border-slate-800 bg-slate-900/70
        transition-all duration-300
        hover:-translate-y-1
        hover:border-primary/70
        hover:bg-slate-900
        hover:shadow-[0_0_0_1px_rgba(59,130,246,0.15),0_12px_30px_-12px_rgba(59,130,246,0.35)]
      "
    >
      {/* ================= IMAGE ================= */}
      <div className="relative w-full bg-slate-800">
        {/* 16:9 aspect ratio */}
        <div className="relative w-full pt-[56.25%]">
          <img
            src={imageSrc}
            alt={`${project.title} preview`}
            className="absolute inset-0 h-full w-full object-contain bg-slate-800 p-4"
          />
        </div>

        {/* overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />

        {/* project type tag */}
        <div className="absolute left-4 top-4 rounded-full bg-slate-900/80 px-3 py-1 text-[10px] uppercase tracking-wide text-slate-300 backdrop-blur">
          {project.type === "professional" ? "Professional" : "Personal / React"}
        </div>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="mb-2 font-heading text-base font-semibold text-slate-100 transition-colors group-hover:text-primary">
          {project.title}
        </h3>

        <p className="mb-4 text-sm leading-relaxed text-slate-300">
          {project.description}
        </p>

        {/* tech stack */}
        <div className="mb-5 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-full border border-slate-700 bg-slate-900 px-3 py-0.5 text-[11px] text-slate-300"
            >
              {t}
            </span>
          ))}
        </div>

        {/* ================= ACTIONS ================= */}
        {(project.demoUrl || project.codeUrl) && (
          <div className="mt-auto flex gap-3">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full border border-primary bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary transition hover:bg-primary hover:text-white"
              >
                Live Demo
              </a>
            )}

            {project.codeUrl && (
              <a
                href={project.codeUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full border border-slate-600 px-4 py-1.5 text-xs font-medium text-slate-200 transition hover:bg-slate-800"
              >
                Code
              </a>
            )}
          </div>
        )}
      </div>
    </motion.article>
  );
};
