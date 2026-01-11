// src/components/FlagshipProjectSection.tsx
import { Section } from "./section";

export const FlagshipProjectSection = () => (
  <Section id="flagship" title="Flagship Full-Stack Project · MediMart Cloud">
    <div className="grid gap-6 text-sm text-slate-200 md:grid-cols-[3fr,2fr]">
      {/* ================= TEXT SIDE ================= */}
      <div className="space-y-3">
        <p>
          MediMart Cloud is a healthcare-oriented E-commerce platform where hospitals
          and individuals can browse medical products, manage carts and orders and pay
          securely online.
        </p>

        <h3 className="mt-3 font-heading text-sm font-semibold">Tech stack</h3>
        <ul className="list-disc space-y-1 pl-5">
          <li>ReactJS SPA for products, cart, checkout and order history.</li>
          <li>
            Spring Boot APIs for catalog, cart, orders and users with Spring
            Security (JWT/OAuth 2.0) and Ehcache.
          </li>
          <li>PostgreSQL/MySQL for relational data.</li>
          <li>
            Containerised Spring Boot app on AWS EC2 or OCI compute; DB on RDS/OCI
            DB; React app on S3/OCI Object Storage + CDN.
          </li>
          <li>Secrets managed via Vault/OCI Vault.</li>
        </ul>

        <h3 className="mt-3 font-heading text-sm font-semibold">What it shows</h3>
        <ul className="list-disc space-y-1 pl-5">
          <li>
            Ability to design and ship features end-to-end: data model, API, security,
            UI and deployment.
          </li>
          <li>
            Cloud-ready patterns like externalised config, health endpoints and
            useful logging.
          </li>
          <li>
            Focus on security, caching, observability and tests so the system behaves
            well in production.
          </li>
        </ul>
      </div>

      {/* ================= ARCHITECTURE CARD ================= */}
      <div
        className="
          group rounded-2xl border border-slate-800 bg-slate-900/70 p-4 text-xs text-slate-300
          transition-all duration-300
          hover:-translate-y-1
          hover:border-primary/70
          hover:bg-slate-900
          hover:shadow-[0_0_0_1px_rgba(59,130,246,0.15),0_12px_30px_-12px_rgba(59,130,246,0.35)]
        "
      >
        <h3 className="mb-3 font-heading text-sm font-semibold text-slate-100 transition-colors group-hover:text-primary">
          High-level architecture 
        </h3>

        <ul className="mb-3 list-disc space-y-1 pl-4">
          <li>ReactJS SPA in browser.</li>
          <li>API Gateway / Load balancer.</li>
          <li>Spring Boot service (catalog/cart/orders/users).</li>
          <li>PostgreSQL/MySQL database.</li>
          <li>Object Storage (product images, static assets).</li>
          <li>Logging/monitoring in cloud-native tools.</li>
        </ul>

        <p className="text-[10px] text-slate-500">
        </p>
      </div>
    </div>
  </Section>
);
