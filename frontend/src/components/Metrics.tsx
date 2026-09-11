import { useEffect, useRef } from "react";
import { motion, useInView, animate } from "motion/react";
import { Reveal, SectionHead } from "@/components/Section";
import { METRICS } from "@/data/content";
import type { Metric } from "@/data/content";

const EASE = [0.16, 1, 0.3, 1] as const;

function CounterValue({ metric }: { metric: Metric }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  useEffect(() => {
    if (!inView || !ref.current) return;
    if (metric.kind === "counter") {
      const controls = animate(0, metric.value, {
        duration: 1.9,
        ease: EASE,
        onUpdate: (v) => {
          if (ref.current)
            ref.current.textContent = `${metric.prefix ?? ""}${Math.round(v).toLocaleString("en-US")}${metric.suffix ?? ""}`;
        },
      });
      return () => controls.stop();
    }
    if (metric.kind === "range") {
      const controls = animate(0, metric.to, {
        duration: 1.6,
        ease: EASE,
        onUpdate: (v) => {
          if (ref.current) ref.current.textContent = String(Math.round(v));
        },
        onComplete: () => {
          if (ref.current) ref.current.textContent = metric.final;
        },
      });
      return () => controls.stop();
    }
  }, [inView, metric]);

  if (metric.kind === "time") return null;
  return (
    <span ref={ref} className="font-heading text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
      0
    </span>
  );
}

function TimeMetric() {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <div ref={ref}>
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="font-heading text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            ~4 hrs <span className="text-slate-300">→</span>{" "}
            <span className="text-sky-600">&lt;1 min</span>
          </p>
        </div>
      </div>
      <div className="mt-5 space-y-2">
        <div className="flex items-center gap-3">
          <span className="w-16 font-mono text-[10px] text-slate-400 uppercase">before</span>
          <div className="h-2 flex-1 overflow-hidden rounded-full bg-slate-100">
            <motion.div
              className="h-full rounded-full bg-slate-400"
              initial={{ width: 0 }}
              animate={inView ? { width: "100%" } : {}}
              transition={{ duration: 1.4, ease: EASE }}
            />
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-16 font-mono text-[10px] text-sky-600 uppercase">after</span>
          <div className="h-2 flex-1 overflow-hidden rounded-full bg-slate-100">
            <motion.div
              className="h-full rounded-full bg-sky-500"
              initial={{ width: 0 }}
              animate={inView ? { width: "1.2%" } : {}}
              transition={{ duration: 1.4, delay: 0.5, ease: EASE }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export function Metrics() {
  return (
    <section id="impact" className="border-y border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-28">
        <SectionHead
          no="02"
          eyebrow="Measurable impact"
          title="Numbers from the resume, not from a pitch deck."
          sub="Every figure below comes directly from my actual work — nothing inflated, nothing invented."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {METRICS.map((m, i) => (
            <Reveal key={m.label} delay={i * 0.06} className={m.kind === "time" ? "sm:col-span-2 lg:col-span-3" : ""}>
              <div
                data-testid={`metric-card-${i + 1}`}
                className="h-full rounded-2xl border border-slate-200 bg-slate-50/60 p-7 transition-colors duration-300 hover:border-sky-200"
              >
                {m.kind === "time" ? <TimeMetric /> : <CounterValue metric={m} />}
                <p className="mt-3 text-sm font-medium text-slate-500">{m.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
