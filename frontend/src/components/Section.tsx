import type { ReactNode } from "react";
import { motion } from "motion/react";

const EASE = [0.16, 1, 0.3, 1] as const;

export function Reveal({
  children,
  delay = 0,
  className = "",
  y = 28,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  y?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.75, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHead({
  no,
  eyebrow,
  title,
  sub,
  dark = false,
}: {
  no: string;
  eyebrow: string;
  title: string;
  sub?: string;
  dark?: boolean;
}) {
  return (
    <Reveal className="max-w-3xl">
      <p
        className={`font-mono text-xs tracking-[0.25em] uppercase ${
          dark ? "text-sky-400" : "text-sky-600"
        }`}
      >
        {no} · {eyebrow}
      </p>
      <h2
        className={`mt-4 font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-balance ${
          dark ? "text-slate-50" : "text-slate-900"
        }`}
      >
        {title}
      </h2>
      {sub && (
        <p
          className={`mt-5 text-base md:text-lg leading-relaxed ${
            dark ? "text-slate-400" : "text-slate-600"
          }`}
        >
          {sub}
        </p>
      )}
    </Reveal>
  );
}

export function DemoBadge({ label = "Portfolio Demonstration" }: { label?: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-400/40 bg-amber-400/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-amber-500">
      <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
      {label}
    </span>
  );
}
