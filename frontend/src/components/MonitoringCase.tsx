import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Radar, Terminal, MessageSquare, Search, RotateCcw, Zap } from "lucide-react";
import { Reveal, SectionHead, DemoBadge } from "@/components/Section";
import { MONITORED_SERVICES, ALERT_SEQUENCE } from "@/data/content";

const SEQ_ICONS = [Radar, Terminal, MessageSquare, Search];

export function MonitoringCase() {
  const [alerting, setAlerting] = useState(false);
  const [seqStep, setSeqStep] = useState(-1);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  const clearTimers = () => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  };

  useEffect(() => clearTimers, []);

  const simulate = () => {
    clearTimers();
    setAlerting(true);
    setSeqStep(-1);
    ALERT_SEQUENCE.forEach((_, i) => {
      timers.current.push(setTimeout(() => setSeqStep(i), 700 * (i + 1)));
    });
  };

  const reset = () => {
    clearTimers();
    setAlerting(false);
    setSeqStep(-1);
  };

  return (
    <section id="monitoring" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:pb-36 lg:pt-32">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHead
          no="07"
          eyebrow="Monitoring & alerting case study"
          title="Detecting problems before customers report them"
          sub="Nagios monitoring across 50+ hosts and 500+ services, a custom Python live dashboard, and Slack-based alerting that attaches failure diagnostics automatically — so investigation starts with context, not from zero."
          dark
        />
        <Reveal delay={0.15}>
          <DemoBadge />
        </Reveal>
      </div>

      <Reveal delay={0.1}>
        <div
          data-testid="monitoring-dashboard"
          className="mt-14 overflow-hidden rounded-2xl border border-slate-800 bg-[#07090E]"
        >
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 px-6 py-4">
            <div className="flex items-center gap-3">
              <p className="font-mono text-[11px] tracking-[0.25em] text-slate-400 uppercase">
                System health
              </p>
              <span
                className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider ${
                  alerting
                    ? "bg-red-500/15 text-red-400"
                    : "bg-emerald-500/15 text-emerald-400"
                }`}
              >
                <span
                  className={`h-1.5 w-1.5 rounded-full ${
                    alerting ? "bg-red-400" : "bg-emerald-400 animate-pulse-dot"
                  }`}
                />
                {alerting ? "1 critical" : "All systems nominal"}
              </span>
            </div>
            <div className="flex items-center gap-6 font-mono text-[11px] text-slate-500">
              <span>
                HOSTS <span className="text-slate-200">50+</span>
              </span>
              <span>
                SERVICES <span className="text-slate-200">500+</span>
              </span>
              <span className="hidden sm:inline">
                STACK <span className="text-slate-200">NAGIOS · PYTHON · SLACK API</span>
              </span>
            </div>
          </div>

          <div className="grid gap-0 lg:grid-cols-2">
            <div className="border-b border-slate-800 lg:border-r lg:border-b-0">
              <div className="border-b border-slate-800/60 px-6 py-3">
                <div className="flex gap-1">
                  {Array.from({ length: 40 }).map((_, i) => (
                    <motion.span
                      key={i}
                      className={`h-5 w-1.5 rounded-sm ${
                        alerting && i > 33 ? "bg-red-500/70" : "bg-emerald-500/60"
                      }`}
                      initial={{ scaleY: 0.3 }}
                      whileInView={{ scaleY: 0.4 + ((i * 37) % 10) / 14 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.02 }}
                    />
                  ))}
                </div>
              </div>
              <ul>
                {MONITORED_SERVICES.map((s) => {
                  const isCritical = alerting && s.name === "tc.db-connection-pool";
                  return (
                    <li
                      key={s.name}
                      className={`flex items-center justify-between border-b border-slate-800/50 px-6 py-3.5 transition-colors duration-500 ${
                        isCritical ? "bg-red-500/5" : ""
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={`h-2 w-2 rounded-full transition-colors duration-500 ${
                            isCritical ? "bg-red-500" : "bg-emerald-500"
                          }`}
                        />
                        <span className="font-mono text-[13px] text-slate-200">{s.name}</span>
                        <span className="font-mono text-[11px] text-slate-600">{s.host}</span>
                      </div>
                      <span
                        className={`font-mono text-[10px] uppercase tracking-wider transition-colors duration-500 ${
                          isCritical ? "text-red-400" : "text-emerald-500"
                        }`}
                      >
                        {isCritical ? "Critical" : "OK"}
                      </span>
                    </li>
                  );
                })}
              </ul>
              <div className="flex flex-wrap items-center gap-3 px-6 py-4">
                <button
                  data-testid="simulate-alert-button"
                  onClick={simulate}
                  disabled={alerting}
                  className="inline-flex items-center gap-2 rounded-full bg-red-500/90 px-5 py-2.5 text-xs font-semibold text-white transition-colors duration-200 hover:bg-red-500 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <Zap className="h-3.5 w-3.5" />
                  Simulate critical alert
                </button>
                <button
                  data-testid="reset-simulation-button"
                  onClick={reset}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-5 py-2.5 text-xs font-medium text-slate-300 transition-colors duration-200 hover:border-slate-500"
                >
                  <RotateCcw className="h-3.5 w-3.5" />
                  Reset
                </button>
              </div>
            </div>

            <div className="p-6 sm:p-8">
              <p className="font-mono text-[10px] tracking-[0.25em] text-slate-500 uppercase">
                Alert pipeline
              </p>
              <div className="mt-5 space-y-3">
                {ALERT_SEQUENCE.map((s, i) => {
                  const Icon = SEQ_ICONS[i];
                  const activeSeq = seqStep >= i;
                  const isCurrent = seqStep === i;
                  return (
                    <div
                      key={s.title}
                      data-testid={`alert-step-${i + 1}`}
                      className={`flex items-start gap-4 rounded-xl border p-4 transition-all duration-500 ${
                        isCurrent
                          ? "border-sky-500/50 bg-sky-500/10"
                          : activeSeq
                            ? "border-emerald-500/30 bg-emerald-500/5"
                            : "border-slate-800 bg-slate-900/30 opacity-50"
                      }`}
                    >
                      <span
                        className={`grid h-9 w-9 shrink-0 place-items-center rounded-lg transition-colors duration-500 ${
                          isCurrent
                            ? "bg-sky-500 text-slate-950"
                            : activeSeq
                              ? "bg-emerald-500/20 text-emerald-400"
                              : "bg-slate-800 text-slate-500"
                        }`}
                      >
                        <Icon className="h-4 w-4" />
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-slate-100">{s.title}</p>
                        <p className="mt-0.5 text-[13px] text-slate-400">{s.detail}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <AnimatePresence>
                {seqStep >= 2 && (
                  <motion.div
                    data-testid="slack-alert-card"
                    initial={{ opacity: 0, y: 12, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="mt-4 rounded-xl border border-slate-700 bg-slate-900 p-4"
                  >
                    <p className="font-mono text-[10px] tracking-[0.2em] text-slate-500 uppercase">
                      #ops-alerts · slack
                    </p>
                    <p className="mt-2 font-mono text-[12px] leading-relaxed text-slate-300">
                      <span className="text-red-400">[CRITICAL]</span> tc.db-connection-pool on
                      tc-db-01 — diagnostics attached (4 files)
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
