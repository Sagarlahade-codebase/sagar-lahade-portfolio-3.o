// src/components/CloudContainersSection.tsx
import { Section } from "./section";

export const CloudContainersSection = () => (
  <Section id="cloud" title="Cloud & Containers">
    <div className="grid gap-6 md:grid-cols-3 text-sm text-slate-200">
      {/* OCI */}
      <div
        className="
          group rounded-2xl border border-slate-800 bg-slate-900/70 p-4
          transition-all duration-300
          hover:-translate-y-1
          hover:border-primary/70
          hover:bg-slate-900
          hover:shadow-[0_0_0_1px_rgba(59,130,246,0.15),0_12px_30px_-12px_rgba(59,130,246,0.35)]
        "
      >
        <h3 className="mb-2 font-heading text-sm font-semibold text-slate-100 transition-colors group-hover:text-primary">
          Oracle Cloud Infrastructure
        </h3>
        <p className="mb-2 text-slate-300">
          Oracle Cloud Infrastructure 2025 Architect Associate and Developer
          Professional. Design and implement secure, scalable architectures on OCI.
        </p>
        <ul className="list-disc space-y-1 pl-5 text-xs text-slate-300">
          <li>Compute, networking, storage and IAM.</li>
          <li>Containers with OKE, Functions and API Gateway.</li>
          <li>OCI Logging, Monitoring and DevOps tooling.</li>
        </ul>
      </div>

      {/* AWS */}
      <div
        className="
          group rounded-2xl border border-slate-800 bg-slate-900/70 p-4
          transition-all duration-300
          hover:-translate-y-1
          hover:border-primary/70
          hover:bg-slate-900
          hover:shadow-[0_0_0_1px_rgba(59,130,246,0.15),0_12px_30px_-12px_rgba(59,130,246,0.35)]
        "
      >
        <h3 className="mb-2 font-heading text-sm font-semibold text-slate-100 transition-colors group-hover:text-primary">
          AWS
        </h3>
        <p className="mb-2 text-slate-300">
          Comfortable deploying Spring Boot services on AWS and wiring them into
          CI/CD pipelines.
        </p>
        <ul className="list-disc space-y-1 pl-5 text-xs text-slate-300">
          <li>EC2 for application servers.</li>
          <li>RDS (PostgreSQL/MySQL) for managed relational databases.</li>
          <li>S3 + CloudFront for static React assets and images.</li>
          <li>Externalised configuration and environment-specific profiles.</li>
        </ul>
      </div>

      {/* Containers */}
      <div
        className="
          group rounded-2xl border border-slate-800 bg-slate-900/70 p-4
          transition-all duration-300
          hover:-translate-y-1
          hover:border-primary/70
          hover:bg-slate-900
          hover:shadow-[0_0_0_1px_rgba(59,130,246,0.15),0_12px_30px_-12px_rgba(59,130,246,0.35)]
        "
      >
        <h3 className="mb-2 font-heading text-sm font-semibold text-slate-100 transition-colors group-hover:text-primary">
          Containers & Platform
        </h3>
        <p className="mb-2 text-slate-300">
          IBM “Introduction to Containers with Docker, Kubernetes & OpenShift”.
        </p>
        <ul className="list-disc space-y-1 pl-5 text-xs text-slate-300">
          <li>Containerising Spring Boot services with Docker.</li>
          <li>Image structure, health checks and environment variables.</li>
          <li>Basics of Kubernetes/OKD: pods, services, deployments.</li>
        </ul>
      </div>
    </div>
  </Section>
);
