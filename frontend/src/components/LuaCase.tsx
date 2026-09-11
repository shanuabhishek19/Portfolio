import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowDown, Info } from "lucide-react";
import { Reveal, SectionHead, DemoBadge } from "@/components/Section";
import { LUA_FLOW, LUA_LINES } from "@/data/content";

export function LuaCase() {
  const [line, setLine] = useState(7);

  return (
    <section id="notifications" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHead
          no="05"
          eyebrow="Engineering case study"
          title="From business requirement to notification logic"
          sub="An event-driven Teamcenter notification framework in Lua, serving ~12,000 end users — built by gathering requirements from business stakeholders and translating them into condition-matching logic validated against the database."
          dark
        />
        <Reveal delay={0.15}>
          <DemoBadge label="Illustrative code — not production" />
        </Reveal>
      </div>

      <div className="mt-14 grid gap-6 lg:grid-cols-12">
        <Reveal className="lg:col-span-4">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
            <p className="font-mono text-[10px] tracking-[0.25em] text-slate-500 uppercase">
              Requirement → delivery
            </p>
            <ol className="mt-5 space-y-1">
              {LUA_FLOW.map((f, i) => (
                <li key={f}>
                  <div className="flex items-center gap-3 rounded-lg border border-slate-800 bg-[#0B0F17] px-3.5 py-2.5">
                    <span className="font-mono text-[10px] text-sky-400">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[13px] font-medium text-slate-300">{f}</span>
                  </div>
                  {i < LUA_FLOW.length - 1 && (
                    <span className="flex justify-center py-0.5 text-slate-700">
                      <ArrowDown className="h-3 w-3" />
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-8">
          <div
            data-testid="lua-code-viewer"
            className="overflow-hidden rounded-2xl border border-slate-800 bg-[#05080E]"
          >
            <div className="flex items-center justify-between border-b border-slate-800 px-5 py-3">
              <p className="font-mono text-[11px] text-slate-500">notification_handler.lua</p>
              <p className="font-mono text-[10px] tracking-[0.2em] text-slate-600 uppercase">
                click a line — what does it do?
              </p>
            </div>
            <div className="overflow-x-auto p-4 sm:p-5">
              {LUA_LINES.map((l, i) => (
                <button
                  key={i}
                  data-testid={`lua-line-${i + 1}`}
                  onClick={() => setLine(i)}
                  aria-pressed={line === i}
                  className={`flex w-full items-start gap-4 rounded-md px-3 py-1 text-left font-mono text-[12.5px] leading-6 whitespace-pre transition-colors duration-150 ${
                    line === i ? "bg-slate-800/80" : "hover:bg-slate-900"
                  }`}
                >
                  <span className="w-5 shrink-0 text-right text-slate-600 select-none">
                    {i + 1}
                  </span>
                  <span>
                    {l.tokens.map((tok, j) => (
                      <span key={j} className={tok.c}>
                        {tok.t}
                      </span>
                    ))}
                  </span>
                </button>
              ))}
            </div>
            <div className="border-t border-slate-800 bg-slate-900/40 px-5 py-4">
              <AnimatePresence mode="wait">
                <motion.p
                  key={line}
                  data-testid="lua-line-explanation"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.22 }}
                  className="flex items-start gap-2.5 text-[13.5px] leading-relaxed text-slate-300"
                >
                  <Info className="mt-0.5 h-4 w-4 shrink-0 text-sky-400" />
                  <span>
                    <span className="mr-2 font-mono text-[11px] text-sky-400">
                      L{line + 1}
                    </span>
                    {LUA_LINES[line].note}
                  </span>
                </motion.p>
              </AnimatePresence>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
