// src/components/AwardsAchievementsSection.tsx
import { motion } from "framer-motion";
import { Section } from "./section";

const achievements = [
  {
    title: "Research Excellence Award",
    org: "Pimpri Chinchwad College of Engineering (PCCOE)",
    description:
      "Received a cash award for research on deep learning–based cervical cancer detection, recognising innovation and applied AI research in healthcare.",
    highlight: "Academic · AI / Deep Learning",
  },
  {
    title: "Innovation & Sustainability Project (Patent Pending)",
    org: "Academic / Social Impact Project",
    description:
      "Developed a Ganesh Idol Management System with sponsorship to mitigate water contamination risks caused by traditional immersion practices; patent filing in progress.",
    highlight: "Innovation · Sustainability",
  },
  {
    title: "Published Research Contribution",
    org: "Scopus-Indexed Research",
    description:
      "Designed an enhanced Apriori Algorithm improving system performance by ~15%, leading to a published research paper in a peer-reviewed journal.",
    highlight: "Algorithms · Performance",
  },
  {
    title: "Strategic Mind Award",
    org: "Config Server LLP",
    description:
      "Awarded for impactful backend architecture decisions, strong technology–business alignment, and data-driven problem solving in Java microservices.",
    highlight: "Industry · Architecture",
  },
];

export const AwardsAchievementsSection = () => (
  <Section id="awards" title="Awards & Achievements">
    <div className="grid gap-5 md:grid-cols-2">
      {achievements.map((item, idx) => (
        <motion.article
          key={item.title}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4, delay: idx * 0.06 }}
          className="
            group flex flex-col justify-between rounded-2xl
            border border-slate-800 bg-slate-900/70 p-5
            transition-all duration-300
            hover:-translate-y-1
            hover:border-primary/70
            hover:bg-slate-900
            hover:shadow-[0_0_0_1px_rgba(59,130,246,0.15),0_18px_40px_rgba(59,130,246,0.35)]
          "
        >
          {/* Highlight tag */}
          <div className="mb-2 inline-flex w-fit rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-primary">
            {item.highlight}
          </div>

          {/* Title */}
          <h3 className="mb-1 text-sm font-semibold text-slate-100 group-hover:text-primary transition-colors">
            {item.title}
          </h3>

          {/* Organization */}
          <p className="mb-2 text-xs text-slate-400">{item.org}</p>

          {/* Description */}
          <p className="text-sm text-slate-300 leading-relaxed">
            {item.description}
          </p>
        </motion.article>
      ))}
    </div>
  </Section>
);
