import { Section } from "./section";
import { motion } from "framer-motion";

const notes = [
  {
    title: "Designing JWT auth in Spring Boot",
    teaser:
      "Start from threats like token theft and over-privileged users, then design short-lived access tokens, refresh tokens and a clear rotation story instead of scattering checks everywhere.",
  },
  {
    title: "Integrating TensorFlow models from Java",
    teaser:
      "Treat the ML model as a dependency with latency and failure modes: define timeouts, input/output contracts and safe fallbacks when inference is slow or unavailable.",
  },
  {
    title: "Running MediMart on AWS vs OCI",
    teaser:
      "Map the same architecture to EC2/RDS/S3 or OCI compute/DB/Object Storage and pick based on team skills, managed services and operational effort, not just brand.",
  },
];

export const ThinkingSection = () => (
  <Section id="thinking" title="How I Think">
    <div className="grid gap-5 md:grid-cols-3">
      {notes.map((note, i) => (
        <motion.article
          key={note.title}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4, delay: i * 0.05 }}
          className="
            group rounded-2xl border border-slate-800 bg-slate-900/70 p-4 text-sm
            transition-all duration-300
            hover:-translate-y-1
            hover:border-primary/70
            hover:bg-slate-900
            hover:shadow-[0_0_0_1px_rgba(59,130,246,0.15),0_12px_30px_-12px_rgba(59,130,246,0.35)]
          "
        >
          <h3 className="mb-2 font-heading text-sm font-semibold text-slate-100 transition-colors group-hover:text-primary">
            {note.title}
          </h3>

          <p className="mb-3 text-sm text-slate-300">
            {note.teaser}
          </p>

          <p className="text-[10px] text-slate-500">
            These are the kinds of trade-offs I like to discuss in design reviews and
            interviews.
          </p>
        </motion.article>
      ))}
    </div>
  </Section>
);
