import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronRight } from "lucide-react";
import { WORKFLOW_STEPS } from "@/data/content";

export function WorkflowPipeline() {
  const [active, setActive] = useState(0);

  return (
    <div
      data-testid="workflow-pipeline"
      className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xl shadow-slate-900/5 sm:p-6"
    >
      <div className="flex items-center justify-between">
        <p className="font-mono text-[10px] tracking-[0.25em] text-slate-400 uppercase">
          Signature workflow
        </p>
        <span className="inline-flex items-center gap-1.5 font-mono text-[10px] text-emerald-600">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse-dot" />
          HOW I APPROACH A PROBLEM
        </span>
      </div>

      <ol className="mt-5 space-y-0.5">
        {WORKFLOW_STEPS.map((step, i) => {
          const isActive = i === active;
          return (
            <li key={step.label} className="relative">
              {i < WORKFLOW_STEPS.length - 1 && (
                <span
                  aria-hidden
                  className={`absolute top-9 left-[15px] h-[calc(100%-24px)] w-px transition-colors duration-300 ${
                    isActive ? "bg-sky-500" : "bg-slate-200"
                  }`}
                />
              )}
              <button
                data-testid={`workflow-step-${i + 1}`}
                onClick={() => setActive(i)}
                onMouseEnter={() => setActive(i)}
                aria-pressed={isActive}
                className={`group relative flex w-full items-center gap-3 rounded-lg px-2 py-2 text-left transition-colors duration-200 ${
                  isActive ? "bg-sky-50" : "hover:bg-slate-50"
                }`}
              >
                <span
                  className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border font-mono text-[11px] transition-colors duration-200 ${
                    isActive
                      ? "border-sky-600 bg-sky-600 text-white"
                      : "border-slate-200 bg-white text-slate-400 group-hover:border-slate-300"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  className={`flex-1 text-sm font-medium transition-colors duration-200 ${
                    isActive ? "text-sky-700" : "text-slate-600"
                  }`}
                >
                  {step.label}
                </span>
                <ChevronRight
                  className={`h-4 w-4 transition-all duration-200 ${
                    isActive ? "translate-x-0 text-sky-500 opacity-100" : "-translate-x-1 opacity-0"
                  }`}
                />
              </button>
            </li>
          );
        })}
      </ol>

      <div className="mt-5 rounded-xl border border-slate-200 bg-slate-50 p-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="font-mono text-[10px] tracking-[0.2em] text-sky-600 uppercase">
              {WORKFLOW_STEPS[active].meta}
            </p>
            <p data-testid="workflow-step-detail" className="mt-2 text-sm leading-relaxed text-slate-600">
              {WORKFLOW_STEPS[active].blurb}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
