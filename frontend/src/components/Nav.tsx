import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { Menu, X, FileDown, Terminal } from "lucide-react";
import { NAV_ITEMS, LINKS } from "@/data/content";
import { scrollToId } from "@/lib/lenis";

export function Nav() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.4 });

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-35% 0px -60% 0px" }
    );
    NAV_ITEMS.forEach((n) => {
      const el = document.getElementById(n.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  const go = (id: string) => {
    setOpen(false);
    scrollToId(id);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/70 bg-white/85 backdrop-blur-xl">
      <nav
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8"
        aria-label="Primary"
      >
        <button
          data-testid="nav-logo"
          onClick={() => go("home")}
          className="group flex items-center gap-2.5"
        >
          <span className="grid h-8 w-8 place-items-center rounded-md bg-slate-900 text-white transition-colors duration-200 group-hover:bg-sky-600">
            <Terminal className="h-4 w-4" />
          </span>
          <span className="font-heading text-sm font-semibold tracking-wide text-slate-900">
            SHANU<span className="text-sky-600">.</span>ABHISHEK
          </span>
        </button>

        <div className="hidden items-center gap-5 lg:flex">
          {NAV_ITEMS.map((n) => (
            <button
              key={n.id}
              data-testid={`nav-link-${n.id}`}
              onClick={() => go(n.id)}
              className={`relative text-[13px] font-medium tracking-wide transition-colors duration-200 ${
                active === n.id ? "text-sky-600" : "text-slate-500 hover:text-slate-900"
              }`}
            >
              {n.label}
              {active === n.id && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute -bottom-1.5 left-0 h-0.5 w-full rounded-full bg-sky-600"
                />
              )}
            </button>
          ))}
          <a
            data-testid="nav-resume-button"
            href={LINKS.resume}
            download
            className="ml-2 inline-flex items-center gap-1.5 rounded-full bg-slate-900 px-4 py-2 text-[13px] font-medium text-white transition-colors duration-200 hover:bg-sky-600"
          >
            <FileDown className="h-3.5 w-3.5" />
            Resume
          </a>
        </div>

        <button
          data-testid="nav-mobile-toggle"
          className="grid h-9 w-9 place-items-center rounded-md text-slate-700 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-slate-200 bg-white/95 px-5 py-4 backdrop-blur-xl lg:hidden">
          <div className="grid gap-1">
            {NAV_ITEMS.map((n) => (
              <button
                key={n.id}
                data-testid={`nav-mobile-link-${n.id}`}
                onClick={() => go(n.id)}
                className={`rounded-md px-3 py-2.5 text-left text-sm font-medium transition-colors duration-200 ${
                  active === n.id
                    ? "bg-sky-50 text-sky-700"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                }`}
              >
                {n.label}
              </button>
            ))}
            <a
              data-testid="nav-mobile-resume-button"
              href={LINKS.resume}
              download
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-slate-900 px-3 py-2.5 text-sm font-medium text-white"
            >
              <FileDown className="h-4 w-4" />
              Download Resume
            </a>
          </div>
        </div>
      )}

      <motion.div
        data-testid="nav-progress-bar"
        className="absolute bottom-0 left-0 h-0.5 w-full origin-left bg-sky-600"
        style={{ scaleX }}
      />
    </header>
  );
}
