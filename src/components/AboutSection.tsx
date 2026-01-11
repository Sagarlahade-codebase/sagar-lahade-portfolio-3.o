// src/components/AboutSection.tsx
import { motion } from "framer-motion";
import { Section } from "./section";

export const AboutSection = () => {
  return (
    <Section id="about" title="About Me">
      <motion.div
        className="grid gap-8 items-start md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {/* ================= LEFT: TEXT ================= */}
        <div className="max-w-[46rem] text-sm text-slate-200">
          <p className="mb-4 inline-flex rounded-full bg-blue-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-blue-300 ring-1 ring-blue-500/30">
            Backend-leaning full-stack engineer · Java / Spring Boot · React · Cloud
          </p>

          <p className="mb-3">
            I enjoy taking messy, domain-heavy problems and turning them into clear,
            well-structured services. On some projects that meant sitting with doctors
            to understand diagnostic flows; on others it meant walking through payment
            edge cases with business teams before writing a single line of code.
          </p>

          <p className="mb-3">
            I lean towards simple designs that can be explained on a whiteboard in a
            few minutes. Once the basics are right—data model, API boundaries,
            security, tests—then I worry about performance and polish.
          </p>
        </div>

        {/* ================= RIGHT: PILLARS ================= */}
        <div className="space-y-4">
          {[
            {
              title: "Backend-first",
              body:
                "Comfortable owning Java/Spring Boot services end-to-end and exposing them via clean REST APIs.",
              detail:
                "Applied in MediMart, CerviTester and HealthHub, from data model to deployment.",
            },
            {
              title: "Cloud-aware",
              body:
                "Design services to run on AWS and Oracle Cloud using Docker and externalised configuration.",
              detail:
                "Used for MediMart Cloud deployments on AWS (EC2, S3, RDS) and OCI compute/networking.",
            },
            {
              title: "Quality-driven",
              body:
                "Use tests, code reviews and static analysis to keep codebases maintainable over time.",
              detail:
                "Backed by JUnit, SonarQube, JaCoCo and Postman suites across major services.",
            },
          ].map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: 0.4,
                delay: 0.08 * (idx + 1),
                ease: "easeOut",
              }}
              className="
                group relative overflow-hidden rounded-2xl
                border border-slate-800 bg-slate-900/70
                px-4 py-3 text-sm
                transition-all duration-300
                hover:-translate-y-1
                hover:border-primary/70
                hover:bg-slate-900
                hover:shadow-[0_0_0_1px_rgba(59,130,246,0.15),0_12px_30px_-12px_rgba(59,130,246,0.35)]
              "
            >
              <p className="font-semibold text-slate-100 transition-colors group-hover:text-primary">
                {card.title}
              </p>
              <p className="mt-1 text-xs text-slate-300">{card.body}</p>
              <p className="mt-1 text-[11px] text-slate-400">{card.detail}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
};
