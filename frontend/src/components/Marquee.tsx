import { MARQUEE_ITEMS } from "@/data/content";

export function Marquee() {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  return (
    <div
      data-testid="tech-marquee"
      aria-hidden
      className="overflow-hidden border-y border-slate-800 bg-slate-950 py-4"
    >
      <div className="animate-marquee flex w-max items-center gap-8">
        {items.map((item, i) => (
          <span key={`${item}-${i}`} className="flex items-center gap-8 whitespace-nowrap">
            <span className="font-mono text-xs tracking-[0.2em] text-slate-400 uppercase">
              {item}
            </span>
            <span className="h-1 w-1 rounded-full bg-sky-500" />
          </span>
        ))}
      </div>
    </div>
  );
}
