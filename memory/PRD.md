# PRD — Shanu Abhishek Portfolio

## Original problem statement
Build a premium, production-quality interactive portfolio for Shanu Abhishek (Technical Support / Platform Operations + Software Developer) targeting Customer Support Specialist — Platform roles (Rippling as immediate target, without looking like a Rippling application site). Positioning: "Technical Support Engineer who thinks like a developer." All content strictly from the two supplied resumes — no invented metrics, companies, testimonials, or confidential information. Premium SaaS aesthetic, interactive case studies, responsive, accessible, SEO-ready.

## Architecture
- Frontend: Vite + React 19 + TypeScript, Tailwind v4, motion (framer-motion successor) for reveals, Lenis smooth scrolling, Space Grotesk / DM Sans / JetBrains Mono (fontsource variable).
- Mixed theme: light SaaS base (#F8FAFC) for story sections; command-center dark (#0B0F17 / #05080E) for the four case studies and contact.
- Content separated from components: `frontend/src/data/content.ts` holds every fact/metric/copy block; components in `frontend/src/components/*`; page assembled in `frontend/src/pages/Home.tsx`.
- Backend: FastAPI template retained (`GET /api/` health message). No DB-backed features needed.
- Resume PDF: `frontend/public/assets/Shanu_Abhishek_Resume.pdf` (Rippling-targeted version, per user choice), served as static asset with `download` attribute.

## User personas
- Recruiter / hiring manager (fast scan: hero, metrics, resume download)
- Support / engineering manager (deep dive: case studies, workflow, code viewer)
- Technical interviewer (skills ecosystem, projects, investigation method)

## Core requirements (static)
- Hero with headline, tags, CTAs, interactive 9-step problem-solving workflow
- "What I bring" philosophy cards; animated resume-only metrics
- Expandable experience timeline (3 roles + education)
- Signature 8-step investigation case study (anonymized)
- Teamcenter Lua notification case study with interactive code viewer
- KPI automation case study (Before/Automation/After)
- Monitoring & alerting dashboard simulation (labeled Portfolio Demonstration)
- Projects: Travel Integration Backend (architecture diagram), Iris ML
- Interactive skills ecosystem (no % bars), Customer↔Engineering bridge
- Customer-centricity translation tiers, KB mock, product-feedback flow
- "Why Platform Support?" alignment, resume download, mailto + LinkedIn contact
- Sticky nav with active-section + scroll progress; mobile responsive; accessibility; SEO/OG

## Implemented (2026-09-11)
- All sections above, built and verified end-to-end via public URL
- Lenis momentum scroll + masked line hero reveal + editorial marquee + parallax hero card
- Animated counters (12,000+ / 95%+ / 20–50 / ~20 / 50+ / 500+ / ~4hrs→<1min)
- Interactive monitoring alert simulation, Lua line-by-line explainer, KB search filter
- Support Command Center status panel (labeled Portfolio Simulation)
- SEO title/meta/OG in index.html; data-testids on all interactive elements
- Verified: typecheck clean, `/api/` 200 via public URL, resume PDF 200 (548 KB), desktop + mobile browser passes, zero console errors, mobile horizontal overflow fixed

## Prioritized backlog
- P0: none blocking
- P1: Real contact form via Resend (needs recipient email confirmation); second (developer) resume download if user wants both public
- P2: Blog/writing section; more case studies; OG share image; analytics

## Next tasks
1. Ask user if the developer-track resume should also be downloadable
2. Optional: contact form with managed Resend integration
3. Optional: custom OG image for social sharing
