import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, Briefcase, GraduationCap } from "lucide-react";
import { Reveal, SectionHead } from "@/components/Section";
import { EXPERIENCE, EDUCATION } from "@/data/content";

export function Experience() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="experience" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
      <SectionHead
        no="03"
        eyebrow="Experience"
        title="From the support floor to the systems behind it."
        sub="Every role added a layer: first resolving tickets, then investigating the systems behind them, then building the tooling."
      />

      <div className="relative mt-14">
        <span
          aria-hidden
          className="absolute top-0 bottom-0 left-[19px] w-px bg-slate-200 sm:left-[23px]"
        />
        <div className="space-y-6">
          {EXPERIENCE.map((job, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={job.role} delay={i * 0.08}>
                <div className="relative pl-14 sm:pl-16">
                  <span
                    className={`absolute top-6 left-0 grid h-10 w-10 place-items-center rounded-full border transition-colors duration-300 sm:h-12 sm:w-12 ${
                      isOpen
                        ? "border-sky-600 bg-sky-600 text-white"
                        : "border-slate-200 bg-white text-slate-400"
                    }`}
                  >
                    <Briefcase className="h-4 w-4" />
                  </span>
                  <article
                    data-testid={`experience-card-${i + 1}`}
                    className={`rounded-2xl border bg-white transition-all duration-300 ${
                      isOpen ? "border-sky-200 shadow-lg shadow-sky-900/5" : "border-slate-200 shadow-xs"
                    }`}
                  >
                    <button
                      data-testid={`experience-toggle-${i + 1}`}
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="flex w-full items-start justify-between gap-4 p-6 text-left sm:p-7"
                    >
                      <div>
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                          <span className="font-mono text-[11px] tracking-[0.15em] text-sky-600 uppercase">
                            {job.period}
                          </span>
                          <span className="font-mono text-[11px] text-slate-400">{job.location}</span>
                        </div>
                        <h3 className="mt-2 font-heading text-xl font-semibold text-slate-900 sm:text-2xl">
                          {job.role}
                        </h3>
                        <p className="mt-1 text-sm font-medium text-slate-500">{job.company}</p>
                        <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-slate-600">
                          {job.summary}
                        </p>
                      </div>
                      <ChevronDown
                        className={`mt-1 h-5 w-5 shrink-0 text-slate-400 transition-transform duration-300 ${
                          isOpen ? "rotate-180 text-sky-600" : ""
                        }`}
                      />
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="border-t border-slate-100 px-6 pt-5 pb-6 sm:px-7 sm:pb-7">
                            <ul className="space-y-3">
                              {job.bullets.map((b, j) => (
                                <li key={j} className="flex gap-3 text-[15px] leading-relaxed text-slate-600">
                                  <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-sky-500" />
                                  {b}
                                </li>
                              ))}
                            </ul>
                            <div className="mt-5 flex flex-wrap gap-2">
                              {job.tags.map((t) => (
                                <span
                                  key={t}
                                  className="rounded-md bg-slate-100 px-2.5 py-1 font-mono text-[11px] text-slate-600"
                                >
                                  {t}
                                </span>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </article>
                </div>
              </Reveal>
            );
          })}

          <Reveal delay={0.2}>
            <div className="relative pl-14 sm:pl-16">
              <span className="absolute top-5 left-0 grid h-10 w-10 place-items-center rounded-full border border-slate-200 bg-white text-slate-400 sm:h-12 sm:w-12">
                <GraduationCap className="h-4 w-4" />
              </span>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 rounded-2xl border border-dashed border-slate-300 bg-slate-50/50 px-6 py-5">
                <p className="font-heading text-base font-semibold text-slate-900">
                  {EDUCATION.degree}
                </p>
                <p className="text-sm text-slate-500">{EDUCATION.school}</p>
                <p className="font-mono text-[11px] tracking-[0.15em] text-slate-400">
                  {EDUCATION.period}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
