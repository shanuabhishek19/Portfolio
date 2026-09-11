import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle2, ChevronRight } from "lucide-react";
import { Reveal, SectionHead } from "@/components/Section";
import { AUTOMATION_PHASES, AUTOMATION_THINKING } from "@/data/content";

export function AutomationCase() {
  const [phase, setPhase] = useState(1);
  const current = AUTOMATION_PHASES[phase];

  return (
    <section id="automation" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
      <SectionHead
        no="06"
        eyebrow="Automation case study"
        title="Turning repetitive work into automation"
        sub="Weekly KPI reporting used to eat ~4 hours of manual effort. I built a Python + Selenium pipeline against the ticketing portal — then migrated it to the ServiceNow API when the organization's tooling changed."
        dark
      />

      <Reveal delay={0.1}>
        <div data-testid="automation-case" className="mt-14">
          <div
            className="inline-flex rounded-full border border-slate-800 bg-slate-900/60 p-1"
            role="tablist"
            aria-label="Automation phases"
          >
            {AUTOMATION_PHASES.map((p, i) => (
              <button
                key={p.id}
                data-testid={`automation-tab-${p.id}`}
                role="tab"
                aria-selected={phase === i}
                onClick={() => setPhase(i)}
                className={`relative rounded-full px-5 py-2.5 text-sm font-medium transition-colors duration-200 ${
                  phase === i ? "text-slate-950" : "text-slate-400 hover:text-slate-200"
                }`}
              >
                {phase === i && (
                  <motion.span
                    layoutId="automation-pill"
                    className="absolute inset-0 rounded-full bg-sky-400"
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  />
                )}
                <span className="relative">{p.label}</span>
              </button>
            ))}
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="lg:col-span-7"
              >
                <div className="h-full rounded-2xl border border-slate-800 bg-[#07090E] p-7 sm:p-9">
                  <p className="font-mono text-[11px] tracking-[0.25em] text-sky-400 uppercase">
                    {current.time}
                  </p>
                  <h3 className="mt-3 font-heading text-2xl font-semibold text-slate-50 sm:text-3xl">
                    {current.title}
                  </h3>
                  <ul className="mt-6 space-y-3.5">
                    {current.points.map((p) => (
                      <li key={p} className="flex items-start gap-3 text-[15px] text-slate-300">
                        <CheckCircle2 className="mt-0.5 h-4.5 w-4.5 shrink-0 text-emerald-400" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="lg:col-span-5">
              <div className="h-full rounded-2xl border border-slate-800 bg-slate-900/40 p-7">
                <p className="font-mono text-[10px] tracking-[0.25em] text-slate-500 uppercase">
                  The engineering thinking
                </p>
                <ol className="mt-5 space-y-0">
                  {AUTOMATION_THINKING.map((t, i) => (
                    <li key={t} className="flex items-center gap-3 py-2.5">
                      <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-slate-700 font-mono text-[10px] text-sky-400">
                        {i + 1}
                      </span>
                      <span className="text-sm text-slate-300">{t}</span>
                      {i < AUTOMATION_THINKING.length - 1 && (
                        <ChevronRight className="ml-auto h-3.5 w-3.5 rotate-90 text-slate-700" />
                      )}
                    </li>
                  ))}
                </ol>
                <div className="mt-6 rounded-xl border border-slate-800 bg-[#05080E] p-4">
                  <p className="font-mono text-[12px] leading-relaxed text-slate-400">
                    <span className="text-emerald-400">$</span> python kpi_report.py
                    <br />
                    <span className="text-slate-500"># source: ServiceNow API</span>
                    <br />
                    <span className="text-sky-300">✓ report generated in 0:00:41</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
