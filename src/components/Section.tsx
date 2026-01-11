// src/components/Section.tsx
import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
}

export const Section = ({ id, title, children }: SectionProps) => (
  <section id={id} className="scroll-mt-24 py-12 md:py-16">
    <div className="mx-auto max-w-6xl px-4">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
        className="mb-6 font-heading text-xl font-semibold md:text-2xl"
      >
        {title}
      </motion.h2>
      {children}
    </div>
  </section>
);
