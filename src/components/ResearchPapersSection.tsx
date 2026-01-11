// src/components/ResearchPapersSection.tsx
import { motion } from "framer-motion";
import { Section } from "./section";

const researchPapers = [
  {
    index: "Scopus",
    title:
      "DeepCerviCancer – Deep Learning-Based Cervical Image Classification using Colposcopy and Cytology Images",
    venue: "EAI Endorsed Transactions on Pervasive Health and Technology",
    link: "https://publications.eai.eu/index.php/phat/article/view/3473",
  },
  {
    index: "Scopus",
    title:
      "Analyze the Novel Apriori Algorithm for Frequent Pattern Generation and Improving the Performance by Generating Powersets for Unique Records",
    venue: "Communications in Mathematics and Applications",
    link: "https://www.rgnpublications.com/journals/index.php/cma/article/view/2375",
  },
  {
    index: "Scopus / Springer",
    title:
      "Tea Leaf Disease Classification Using an Encoder-Decoder Convolutional Neural Network with Skip Connections",
    venue:
      "International Conference on Image Processing and Capsule Networks (Springer)",
    link: "https://link.springer.com/chapter/10.1007/978-981-99-7093-3_24",
  },
];

export const ResearchPapersSection = () => (
  <Section id="researchpapers" title="Research Papers">
    <div className="grid gap-5 md:grid-cols-3">
      {researchPapers.map((paper, idx) => (
        <motion.article
          key={paper.title}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4, delay: idx * 0.05 }}
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
          {/* Index badge */}
          <div className="mb-2 inline-flex w-fit rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-primary">
            {paper.index}
          </div>

          {/* Title */}
          <h3 className="mb-3 text-sm font-semibold leading-snug text-slate-100 group-hover:text-primary transition-colors">
            {paper.title}
          </h3>

          {/* Venue */}
          <p className="mb-4 text-xs text-slate-400">{paper.venue}</p>

          {/* Action */}
          <a
            href={paper.link}
            target="_blank"
            rel="noreferrer"
            className="
              mt-auto inline-flex w-fit items-center gap-1
              rounded-full border border-slate-600 px-4 py-1.5
              text-xs font-medium text-slate-200
              transition-all
              hover:border-primary
              hover:bg-primary/10
              hover:text-primary
            "
          >
            Open Paper →
          </a>
        </motion.article>
      ))}
    </div>
  </Section>
);
