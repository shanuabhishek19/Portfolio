import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Reveal, SectionHead } from "@/components/Section";
import { SKILLS } from "@/data/content";

export function Skills() {
  const [cat, setCat] = useState(0);

  return (
    <section id="skills" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
      <SectionHead
        no="09"
        eyebrow="Technical skills"
        title="An ecosystem, not a bar chart."
        sub="No invented percentages. These are the tools and disciplines I actually use at work — grouped by how they show up in a day."
      />

      <Reveal delay={0.1}>
        <div className="mt-12 flex flex-wrap gap-2" role="tablist" aria-label="Skill categories">
          {SKILLS.map((s, i) => (
            <button
              key={s.category}
              data-testid={`skill-category-${s.category.toLowerCase().replace(/[^a-z]+/g, "-")}`}
              role="tab"
              aria-selected={cat === i}
              onClick={() => setCat(i)}
              className={`rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-200 ${
                cat === i
                  ? "border-slate-900 bg-slate-900 text-white"
                  : "border-slate-200 bg-white text-slate-600 hover:border-slate-400 hover:text-slate-900"
              }`}
            >
              {s.category}
              <span
                className={`ml-2 font-mono text-[10px] ${cat === i ? "text-sky-300" : "text-slate-400"}`}
              >
                {s.items.length}
              </span>
            </button>
          ))}
        </div>

        <div className="relative mt-8 min-h-[180px] rounded-2xl border border-slate-200 bg-slate-50/60 p-7 sm:p-9">
          <AnimatePresence mode="wait">
            <motion.div
              key={cat}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap gap-2.5"
            >
              {SKILLS[cat].items.map((item, i) => (
                <motion.span
                  key={item}
                  data-testid={`skill-chip-${item.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] }}
                  className="rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 shadow-xs transition-colors duration-200 hover:border-sky-300 hover:text-sky-700"
                >
                  {item}
                </motion.span>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </Reveal>
    </section>
  );
}
