import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, BookOpen, ChevronRight } from "lucide-react";
import { Reveal, SectionHead, DemoBadge } from "@/components/Section";
import { KB_ARTICLES } from "@/data/content";

const TYPE_TONE: Record<string, string> = {
  Runbook: "bg-sky-50 text-sky-700 border-sky-200",
  RCA: "bg-rose-50 text-rose-700 border-rose-200",
  SOP: "bg-emerald-50 text-emerald-700 border-emerald-200",
};

export function KnowledgeBase() {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState<number | null>(null);

  const filtered = useMemo(
    () =>
      KB_ARTICLES.filter(
        (a) =>
          a.title.toLowerCase().includes(query.toLowerCase()) ||
          a.type.toLowerCase().includes(query.toLowerCase())
      ),
    [query]
  );

  return (
    <section id="knowledge" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHead
          no="12"
          eyebrow="Documentation"
          title="Make the next incident easier."
          sub="Recurring issues become knowledge-base content — so the next resolution is faster and the same escalation doesn't happen twice. The entries below are anonymized demonstrations."
        />
        <Reveal delay={0.15}>
          <DemoBadge />
        </Reveal>
      </div>

      <Reveal delay={0.1}>
        <div
          data-testid="knowledge-base"
          className="mt-14 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-900/5"
        >
          <div className="flex items-center gap-3 border-b border-slate-200 bg-slate-50/80 px-5 py-3.5">
            <span className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
              <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
              <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
            </span>
            <div className="relative flex-1 sm:max-w-sm">
              <Search className="pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                data-testid="kb-search-input"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search the knowledge base…"
                aria-label="Search knowledge base"
                className="w-full rounded-lg border border-slate-200 bg-white py-2 pr-3 pl-9 text-sm text-slate-800 placeholder:text-slate-400 focus:border-sky-400 focus:outline-none"
              />
            </div>
            <span className="hidden font-mono text-[11px] text-slate-400 sm:inline">
              {filtered.length} article{filtered.length === 1 ? "" : "s"}
            </span>
          </div>

          <ul className="divide-y divide-slate-100">
            {filtered.map((a) => {
              const idx = KB_ARTICLES.indexOf(a);
              const isOpen = open === idx;
              return (
                <li key={a.title}>
                  <button
                    data-testid={`kb-article-${idx + 1}`}
                    onClick={() => setOpen(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                    className={`flex w-full items-center gap-4 px-5 py-4.5 text-left transition-colors duration-200 sm:px-6 ${
                      isOpen ? "bg-sky-50/50" : "hover:bg-slate-50"
                    }`}
                  >
                    <BookOpen
                      className={`h-4.5 w-4.5 shrink-0 ${isOpen ? "text-sky-600" : "text-slate-400"}`}
                    />
                    <span className="flex-1 text-[15px] font-medium text-slate-800">
                      {a.title}
                    </span>
                    <span
                      className={`rounded-full border px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider ${TYPE_TONE[a.type]}`}
                    >
                      {a.type}
                    </span>
                    <ChevronRight
                      className={`h-4 w-4 text-slate-400 transition-transform duration-300 ${
                        isOpen ? "rotate-90 text-sky-600" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="border-t border-slate-100 bg-slate-50/60 px-6 py-4 pl-14 text-sm leading-relaxed text-slate-600">
                          {a.excerpt}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
            {filtered.length === 0 && (
              <li className="px-6 py-10 text-center text-sm text-slate-400">
                No articles match &ldquo;{query}&rdquo;
              </li>
            )}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
