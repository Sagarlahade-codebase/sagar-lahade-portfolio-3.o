// src/components/SystemDesignSection.tsx
import { Section } from "./section";
import { motion } from "framer-motion";

export const SystemDesignSection = () => (
  <Section id="system-design" title="System Design & Impact">
    <div className="grid gap-6 text-sm text-slate-200 md:grid-cols-[3fr,2fr]">
      {/* ================= TEXT SIDE ================= */}
      <div className="space-y-3">
        <p className="mt-1 text-sm text-slate-200 md:text-base">
          For systems like MediMart, InfuCare, HealthHub and CerviTester, the
          starting point is always use cases and data: catalog, orders,
          billing, users, diagnostics, telemetry, and so on. Each domain
          becomes a Spring Boot service with its own data model and a small,
          consistent REST API surface.
        </p>

        <p className="text-sm text-slate-300 md:text-[15px]">
          Implementations follow a layered pattern (controller → service →
          repository) with strong validation at the edges, clear domain methods
          in the middle, and straightforward persistence logic at the bottom.
          Read-heavy paths get caching and pagination; write-heavy or critical
          flows prioritise transactional integrity, idempotency, and logging
          so issues are observable and easy to debug.
        </p>

        <h3 className="mt-4 font-heading text-xs font-semibold uppercase tracking-wide text-slate-300">
          Design practices used in projects
        </h3>

        <ul className="list-disc space-y-1 pl-5 text-sm text-slate-200">
          <li>
            Domain-based service separation for product, order, billing, user,
            telemetry, and ML inference in MediMart, InfuCare, HealthHub, and
            CerviTester.
          </li>
          <li>
            Versioned REST APIs, pagination and filtering for lists, and
            consistent error envelopes across services.
          </li>
          <li>
            Ehcache and tuned JPA/Hibernate queries with proper indices on
            read-heavy catalog, patient, and telemetry endpoints.
          </li>
          <li>
            Design for failure: timeouts, defensive coding, and explicit
            fallback or queue-based flows where downstream systems may be slow
            or unavailable.
          </li>
          <li>
            Security by design: JWT/OAuth 2.0, RBAC, and secret management via
            Vault/OCI Vault for cloud-ready deployments on AWS and OCI.
          </li>
        </ul>
      </div>

      {/* ================= METRICS / IMPACT CARD ================= */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="
          group relative rounded-2xl border border-slate-800 bg-slate-900/70 p-4
          transition-all duration-300
          hover:-translate-y-1
          hover:border-primary/70
          hover:bg-slate-900
          hover:shadow-[0_0_0_1px_rgba(59,130,246,0.15),0_12px_30px_-12px_rgba(59,130,246,0.35)]
        "
      >
        <h3 className="mb-2 font-heading text-xs font-semibold uppercase tracking-wide text-slate-300 transition-colors group-hover:text-primary">
          Metrics & impact (indicative)
        </h3>

        <ul className="mb-4 space-y-1 text-xs text-slate-300">
          <li>
            • Systems in roughly the 5K–20K record range and 100–500 daily
            active users for MediMart, InfuCare, and HealthHub.
          </li>
          <li>
            • Catalog/read APIs improved by an estimated 20–30% after adding
            caching and query/index tuning on key endpoints.
          </li>
          <li>
            • Fewer regressions reaching staging/production after adding JUnit
            tests plus SonarQube/JaCoCo into the build.
          </li>
          <li>
            • Manual reporting and lookups replaced with web workflows,
            reducing repetitive operational work for hospital/E-commerce teams.
          </li>
        </ul>

        {/* ================= MINI BAR CHART ================= */}
        <div className="mt-2">
          <p className="mb-1 text-[11px] text-slate-400">
            Latency before vs after optimisation (illustration only)
          </p>

          <div className="flex h-24 items-end gap-3">
            <div className="flex-1">
              <div className="h-20 w-full rounded-t-md bg-slate-700" />
              <p className="mt-1 text-center text-[10px] text-slate-400">
                Before
              </p>
            </div>
            <div className="flex-1">
              <div className="h-14 w-full rounded-t-md bg-primary" />
              <p className="mt-1 text-center text-[10px] text-slate-400">
                After
              </p>
            </div>
          </div>

          <p className="mt-2 text-[10px] text-slate-500">
            Bars are illustrative, not exact numbers; they represent the effect
            of caching, indexing, and simpler queries on read-heavy endpoints.
          </p>
        </div>
      </motion.div>
    </div>
  </Section>
);
