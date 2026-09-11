import { Terminal, Linkedin, Mail } from "lucide-react";
import { LINKS, NAV_ITEMS } from "@/data/content";
import { scrollToId } from "@/lib/lenis";

export function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-[#07090E]">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-12 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="flex items-center gap-2.5 font-heading text-sm font-semibold tracking-wide text-slate-100">
            <span className="grid h-7 w-7 place-items-center rounded-md bg-sky-500 text-slate-950">
              <Terminal className="h-3.5 w-3.5" />
            </span>
            SHANU ABHISHEK
          </p>
          <p className="mt-2 max-w-sm text-[13px] leading-relaxed text-slate-500">
            Technical Support Engineer & Software Developer — support, investigation,
            automation, and the systems in between.
          </p>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-5 gap-y-2">
          {NAV_ITEMS.map((n) => (
            <button
              key={n.id}
              data-testid={`footer-link-${n.id}`}
              onClick={() => scrollToId(n.id)}
              className="text-[13px] text-slate-500 transition-colors duration-200 hover:text-sky-300"
            >
              {n.label}
            </button>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            data-testid="footer-linkedin-link"
            href={LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="grid h-9 w-9 place-items-center rounded-full border border-slate-700 text-slate-400 transition-colors duration-200 hover:border-sky-500 hover:text-sky-300"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            data-testid="footer-email-link"
            href={`mailto:${LINKS.email}`}
            aria-label="Send email"
            className="grid h-9 w-9 place-items-center rounded-full border border-slate-700 text-slate-400 transition-colors duration-200 hover:border-sky-500 hover:text-sky-300"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
      <div className="border-t border-slate-800/60">
        <p className="mx-auto max-w-7xl px-5 py-5 font-mono text-[11px] text-slate-600 sm:px-8">
          © 2026 Shanu Abhishek · Built with React, TypeScript & Tailwind · All case studies
          anonymized
        </p>
      </div>
    </footer>
  );
}
