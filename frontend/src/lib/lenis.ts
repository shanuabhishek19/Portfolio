import type Lenis from "lenis";

export const lenisStore: { instance: Lenis | null } = { instance: null };

export function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  if (lenisStore.instance) {
    lenisStore.instance.scrollTo(el, { offset: -72, duration: 1.2 });
  } else {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}
