// src/components/ProjectsSection.tsx
import { useState } from "react";
import { Section } from "./section";
import { projects } from "../data/projects";
import { ProjectCard } from "./ProjectCard";

export const ProjectsSection = () => {
  const [tab, setTab] = useState<"professional" | "personal">("professional");

  const filteredProjects = projects.filter((p) => p.type === tab);

  return (
    <Section id="projects" title="Projects">
      {/* ================= FILTER TABS ================= */}
      <div className="mb-6 flex gap-3 text-sm">
        <button
          onClick={() => setTab("professional")}
          className={`
            rounded-full px-4 py-1.5 text-xs font-medium
            transition-all duration-300
            ${
              tab === "professional"
                ? "border border-primary bg-primary text-white shadow-[0_0_0_1px_rgba(59,130,246,0.35)]"
                : "border border-slate-600 text-slate-200 hover:-translate-y-0.5 hover:border-primary/70 hover:bg-slate-800 hover:shadow-[0_0_0_1px_rgba(59,130,246,0.15)]"
            }
          `}
        >
          Professional
        </button>

        <button
          onClick={() => setTab("personal")}
          className={`
            rounded-full px-4 py-1.5 text-xs font-medium
            transition-all duration-300
            ${
              tab === "personal"
                ? "border border-primary bg-primary text-white shadow-[0_0_0_1px_rgba(59,130,246,0.35)]"
                : "border border-slate-600 text-slate-200 hover:-translate-y-0.5 hover:border-primary/70 hover:bg-slate-800 hover:shadow-[0_0_0_1px_rgba(59,130,246,0.15)]"
            }
          `}
        >
          Personal & React
        </button>
      </div>

      {/* ================= PROJECT GRID ================= */}
      <div className="grid gap-5 md:grid-cols-2">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </Section>
  );
};
