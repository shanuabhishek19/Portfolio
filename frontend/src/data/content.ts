export const LINKS = {
  email: "shanuabhishek60@gmail.com",
  linkedin: "https://www.linkedin.com/in/shanuabhishek",
  resume: "/assets/Shanu_Abhishek_Resume.pdf",
};

export const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "investigation", label: "How I Solve Problems" },
  { id: "case-studies", label: "Case Studies" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export const HERO_TAGS = [
  "L2 Support",
  "Technical Troubleshooting",
  "Platform Operations",
  "Software Development",
  "Automation",
  "Root Cause Analysis",
];

export const WORKFLOW_STEPS = [
  { label: "Customer Issue", blurb: "Start from the user's words, not assumptions. What were they trying to do — and what happened instead?", meta: "input · user's report" },
  { label: "Triage", blurb: "Scope it fast: who is affected, since when, how severe — and did anything change recently?", meta: "mode · structured questions" },
  { label: "Reproduce", blurb: "Recreate the exact conditions. If I can see the failure, I can measure it.", meta: "mode · controlled test" },
  { label: "Investigate", blurb: "Correlate ticket history, system behavior, logs, SQL diagnostics, and configuration.", meta: "tools · logs / SQL / APIs" },
  { label: "Root Cause", blurb: "Keep narrowing until evidence — not guesswork — isolates the actual cause.", meta: "output · confirmed cause" },
  { label: "Fix", blurb: "Apply the correct fix or workaround — not just the fastest one.", meta: "output · resolution path" },
  { label: "Validate", blurb: "Prove it: re-run the scenario, check for regressions, confirm with the user.", meta: "check · regression pass" },
  { label: "Document", blurb: "Write it down so the next person — or the next incident — is faster.", meta: "output · KB article" },
  { label: "Prevent Recurrence", blurb: "Ask: can this happen again? Then act — documentation, automation, monitoring, or product feedback.", meta: "loop · continuous improvement" },
];

export const MARQUEE_ITEMS = [
  "Siemens Teamcenter", "NX CAD", "Active Workspace", "Python", "Lua", "Java", "C++",
  "SQL", "REST APIs", "JSON", "ServiceNow", "Jira", "Nagios", "Selenium",
  "Slack API", "Power BI", "Git", "Root Cause Analysis",
];

export const PHILOSOPHY_CARDS = [
  {
    title: "Customer Ownership",
    body: "Own an issue from the first report through diagnosis, resolution, communication, and follow-up. No bouncing users between queues — one accountable owner.",
  },
  {
    title: "Technical Investigation",
    body: "Use logs, SQL, ticket history, system behavior, APIs, and command-line diagnostics to identify root causes — evidence over guesswork.",
  },
  {
    title: "Engineering Mindset",
    body: "Build scripts, automation, notification logic, monitoring, and tooling to eliminate repetitive work instead of repeating it.",
  },
  {
    title: "Continuous Improvement",
    body: "Turn recurring incidents into documentation, automation, monitoring, or process improvements — so the same issue costs less every time.",
  },
];

export type Metric =
  | { kind: "counter"; value: number; prefix?: string; suffix?: string; label: string }
  | { kind: "range"; to: number; final: string; label: string }
  | { kind: "time"; label: string };

export const METRICS: Metric[] = [
  { kind: "counter", value: 12000, suffix: "+", label: "End users supported on an enterprise platform" },
  { kind: "counter", value: 95, suffix: "%+", label: "SLA compliance across customer cases" },
  { kind: "range", to: 50, final: "20–50", label: "Workflow & system issues resolved daily" },
  { kind: "counter", value: 20, prefix: "~", label: "Support cases handled weekly" },
  { kind: "counter", value: 50, suffix: "+", label: "Hosts under live monitoring" },
  { kind: "counter", value: 500, suffix: "+", label: "Services under live monitoring" },
  { kind: "time", label: "KPI report generation time" },
];

export const EXPERIENCE = [
  {
    role: "Software Developer — Technical & Customer Support",
    company: "Bosch and Siemens Hausgeräte",
    period: "June 2024 — Present",
    location: "Bengaluru, Karnataka",
    summary: "Front-line L2 support for Siemens Teamcenter & NX CAD across a 12,000-user environment — plus the automation, monitoring, and notification systems behind it.",
    bullets: [
      "Front-line technical support for Siemens Teamcenter and NX CAD, resolving customer and end-user issues via call, email, and chat — ~20 cases weekly in ServiceNow with 95%+ SLA compliance.",
      "Own customer issues end-to-end: diagnose the root cause, determine the right fix, explain it in plain language to non-technical users, and follow up to confirm resolution.",
      "Resolve 20–50 workflow and system issues daily (spiking during patch/version updates) across a 12,000-user base, using ticket history and direct SQL database diagnostics to identify recurring problems.",
      "Document recurring issues and fixes as internal knowledge-base content, reducing repeat escalations for common problems.",
      "Built a customer-facing, event-driven Teamcenter notification framework in Lua (tracked in Jira) serving ~12,000 end users — gathering requirements directly from business stakeholders and translating them into working product logic.",
      "Automated KPI/support reporting, cutting report generation time from ~4 hours to under 1 minute; migrated the workflow to the ServiceNow API after a company-wide tooling change, keeping reporting reliable through the transition.",
      "Built live monitoring for 50+ hosts and 500+ services via Nagios and a custom Python dashboard, with Slack-based alerting that catches operational issues before they become customer-facing incidents.",
    ],
    tags: ["Teamcenter", "NX CAD", "ServiceNow", "Jira", "SQL", "Lua", "Python", "Nagios", "Slack API"],
  },
  {
    role: "Software Developer Intern — Technical Support",
    company: "Bosch and Siemens Hausgeräte",
    period: "June 2023 — June 2024",
    location: "Bengaluru, Karnataka",
    summary: "First year on the support floor: Jira and ServiceNow ticket handling, triage, and learning to translate root causes into guidance.",
    bullets: [
      "Triaged and resolved issues reported by engineering end users via Jira and ServiceNow tickets, working directly with the Teamcenter support team.",
      "Practiced translating technical root causes into clear, actionable guidance for non-technical stakeholders — the foundation of the support workflow used today.",
    ],
    tags: ["Jira", "ServiceNow", "Teamcenter", "Ticket Triage"],
  },
  {
    role: "Data Analyst Intern",
    company: "ZF Friedrichshafen AG",
    period: "May 2022 — July 2022",
    location: "Hyderabad, India",
    summary: "Where the data habit started: SQL over relational business data, Power BI dashboards, and stakeholder communication.",
    bullets: [
      "Queried and aggregated relational business data using SQL, then built Power BI dashboards surfacing key metrics for stakeholders.",
      "Developed the data-literacy and stakeholder-communication skills now applied to customer case analysis.",
    ],
    tags: ["SQL", "Power BI", "Stakeholder Communication"],
  },
];

export const EDUCATION = {
  degree: "B.Tech — Computer Science",
  school: "Lovely Professional University",
  period: "2020 — 2024",
};

export type InvestigationStep = {
  n: string;
  title: string;
  body: string;
  evidenceLabel: string;
  evidence: string[];
  chips?: string[];
};

export const INVESTIGATION_STEPS: InvestigationStep[] = [
  {
    n: "01",
    title: "The Issue",
    body: "A user reports that a release sign-off task won't complete. The report is emotional and vague — that's normal. The first job is to listen, not to solve.",
    evidenceLabel: "incoming case",
    evidence: [
      "CASE #48213 · PRIORITY: HIGH",
      'User: "My workflow task won\'t complete —',
      'the sign-off has been stuck since morning."',
      "Channel: Email → ServiceNow",
    ],
  },
  {
    n: "02",
    title: "Triage",
    body: "Structured questions turn a vague report into a scoped problem: what happened, when it started, who is affected, whether it's isolated or widespread, and whether anything changed.",
    evidenceLabel: "triage checklist",
    evidence: [
      "✓ What exactly happens?  Task stays \"In Process\"",
      "✓ Since when?            After last night's patch window",
      "✓ Who else?              6 users on the same site",
      "✓ Recent change?         Version update deployed 02:00",
    ],
  },
  {
    n: "03",
    title: "Investigation",
    body: "Now the evidence sources: ticket history for patterns, system behavior for reproduction, logs for the failure moment, database diagnostics for state, and configuration/business rules for intent.",
    evidenceLabel: "correlated sources",
    evidence: [
      "10:42:11 workflow   · task 8841 → In Process",
      "10:42:13 dispatcher · module queued (site-02)",
      "10:42:14 condition  · evaluate release_signoff",
      "10:42:14 rule       · SKIP — property mismatch",
    ],
    chips: ["Ticket history", "System behavior", "Logs", "Database diagnostics", "Config & business rules"],
  },
  {
    n: "04",
    title: "Root Cause",
    body: "Each hypothesis gets eliminated by evidence, not intuition. Six users on one site rules out user error; unchanged ACLs rule out permissions; the timing points at the patch.",
    evidenceLabel: "narrowing down",
    evidence: [
      "• Not user error   — 6 users, same site",
      "• Not permissions  — ACLs unchanged",
      "• Post-patch only  → condition rule change",
      "SQL: properties migrated with new naming →",
      "rule still references the old property name.",
    ],
  },
  {
    n: "05",
    title: "Resolution",
    body: "The fix addresses the cause, a workaround unblocks users while it propagates, and validation proves the scenario actually works — with a regression check so the fix doesn't break anything else.",
    evidenceLabel: "fix & validate",
    evidence: [
      "Fix:       update condition mapping to new property",
      "Validate:  re-run task 8841 → Released ✓",
      "Regression: 3 sample workflows pass",
      "Workaround shared while fix propagated",
    ],
  },
  {
    n: "06",
    title: "Customer Communication",
    body: "The technical root cause gets translated into what the customer needs: what happened, what it means for them, and what to do next — in plain language, with expectations set.",
    evidenceLabel: "technical → human",
    evidence: [
      "Technical: \"Condition rule referenced a deprecated",
      "property name after schema migration.\"",
      "",
      "Customer hears: \"Last night's update changed how",
      "sign-off tasks are read. It's fixed — your task is",
      "released now. Here's what to do if you see it again.\"",
    ],
  },
  {
    n: "07",
    title: "Follow-up",
    body: "Resolution isn't done when the system is fixed — it's done when the customer confirms it. Then the knowledge gets written down so the next incident is faster.",
    evidenceLabel: "closing the loop",
    evidence: [
      "✓ Confirmed with all 6 affected users",
      "✓ Case resolved — SLA met",
      "✓ KB updated: \"Post-patch workflow sign-off",
      '   failures" + checklist entry added',
    ],
  },
  {
    n: "08",
    title: "Prevention",
    body: "The last question of every case: can this happen again? The answer becomes documentation, automation, monitoring, a process change, or feedback to product and engineering.",
    evidenceLabel: "can this happen again?",
    evidence: [
      "Recurring pattern → monitor condition-rule",
      "evaluation failures after every patch window.",
    ],
    chips: ["Documentation", "Automation", "Monitoring", "Process improvement", "Product feedback"],
  },
];

export const LUA_FLOW = [
  "Business Requirement",
  "Business Condition",
  "Notification Logic",
  "Lua Script",
  "Database Validation",
  "Testing",
  "Deployment",
  "End User",
];

export type LuaLine = { tokens: { t: string; c: string }[]; note: string };

const K = "text-rose-400";      // keyword
const S = "text-emerald-400";   // string
const F = "text-sky-300";       // function
const C = "text-slate-500";     // comment
const P = "text-slate-300";     // plain
const O = "text-amber-300";     // operator/property

export const LUA_LINES: LuaLine[] = [
  { tokens: [{ t: "-- ILLUSTRATIVE EXAMPLE — generic, anonymized logic", c: C }], note: "Every code sample here is illustrative. It mirrors the shape of real notification logic without exposing any proprietary production code." },
  { tokens: [{ t: "-- event handler: runs when a workflow task changes status", c: C }], note: "The framework is event-driven: business actions fire events, and handlers decide whether anyone needs to know about them." },
  { tokens: [{ t: "local function", c: K }, { t: " onTaskStatusChange", c: F }, { t: "(task, newStatus)", c: P }], note: "The entry point. The platform invokes this handler with the workflow task object and its new status whenever a transition happens." },
  { tokens: [{ t: "  local", c: K }, { t: " item  = task:", c: P }, { t: "getAttachedItem", c: F }, { t: "()", c: P }], note: "Pull the business object attached to the workflow task — the thing the user actually cares about, not the task itself." },
  { tokens: [{ t: "  local", c: K }, { t: " owner = item:", c: P }, { t: "getProperty", c: F }, { t: "(", c: P }, { t: "'owning_user'", c: S }, { t: ")", c: P }], note: "Read the properties the business rule depends on. In production these are validated against the database with SQL before deployment." },
  { tokens: [{ t: "  local", c: K }, { t: " group = item:", c: P }, { t: "getProperty", c: F }, { t: "(", c: P }, { t: "'owning_group'", c: S }, { t: ")", c: P }], note: "Ownership context matters: some notifications go to a person, others to a whole group — that decision comes from the business requirement." },
  { tokens: [{ t: "  -- business rule: notify the owner, only on release", c: C }], note: "The business requirement, translated into one sentence. This comment is the contract the condition below must enforce." },
  { tokens: [{ t: "  if", c: K }, { t: " newStatus ", c: P }, { t: "==", c: O }, { t: " 'Released'", c: S }, { t: " and", c: K }, { t: " owner ", c: P }, { t: "~=", c: O }, { t: " nil", c: K }, { t: " then", c: K }], note: "Condition matching — the heart of the logic. If this condition is wrong, the notification silently never sends, which is why these rules get tested against real database states." },
  { tokens: [{ t: "    local", c: K }, { t: " subject = ", c: P }, { t: "'Release notice: '", c: S }, { t: " .. ", c: O }, { t: "item:", c: P }, { t: "getId", c: F }, { t: "()", c: P }], note: "Build a message a human can act on. Concatenation (..) assembles a subject line that identifies the exact item — no cryptic system codes." },
  { tokens: [{ t: "    notifyUser", c: F }, { t: "(owner, subject, ", c: P }, { t: "buildReleaseBody", c: F }, { t: "(item))", c: P }], note: "Deliver through the platform's notification channel. The body builder keeps message formatting separate from the business rule." },
  { tokens: [{ t: "    logInfo", c: F }, { t: "(", c: P }, { t: "'notification.sent'", c: S }, { t: ", owner, item:", c: P }, { t: "getId", c: F }, { t: "())", c: P }], note: "Log every send. Auditability turns 'did the notification go out?' from a guess into a 30-second log check." },
  { tokens: [{ t: "  end", c: K }], note: "If the condition fails, the handler exits quietly — no notification, no error. Silent skips are exactly what the log line protects against." },
  { tokens: [{ t: "end", c: K }], note: "Guarded, condition-driven, and observable — the same three properties I look for when investigating why a notification didn't reach a user." },
];

export const AUTOMATION_PHASES = [
  {
    id: "before",
    label: "Before",
    time: "≈ 4 hours",
    title: "Manual report generation",
    points: [
      "Log into the ticketing portal and filter queues by hand",
      "Export raw data and clean it in spreadsheets",
      "Reconcile numbers across views manually",
      "Format the KPI deck — every single week",
    ],
  },
  {
    id: "automation",
    label: "Automation",
    time: "Python + Selenium",
    title: "A pipeline instead of a chore",
    points: [
      "Python + Selenium collector drives the ticketing portal",
      "Structured extraction of the exact KPI fields",
      "Validation checks catch bad data before it ships",
      "One command produces the finished report",
    ],
  },
  {
    id: "after",
    label: "After",
    time: "< 1 minute",
    title: "Under a minute — and future-proofed",
    points: [
      "Report generation cut from ~4 hours to under 1 minute",
      "Hours every week returned to actual support work",
      "Migrated to the ServiceNow API after the org-wide tool switch",
      "Reliability kept through the platform transition",
    ],
  },
];

export const AUTOMATION_THINKING = [
  "Identify the repetitive task",
  "Understand the data source",
  "Automate the extraction",
  "Validate the results",
  "Improve reliability",
  "Adapt when the platform changed",
];

export const MONITORED_SERVICES = [
  { name: "tc.dispatcher", host: "tc-app-01" },
  { name: "tc.notification-engine", host: "tc-app-02" },
  { name: "tc.db-connection-pool", host: "tc-db-01" },
  { name: "nx.license-server", host: "lic-srv-01" },
  { name: "aw.sync-gateway", host: "aw-gw-01" },
];

export const ALERT_SEQUENCE = [
  { title: "Nagios detects CRITICAL", detail: "tc.db-connection-pool stops responding to checks" },
  { title: "Diagnostics captured automatically", detail: "Python + Selenium grab logs and service state" },
  { title: "Slack alert delivered", detail: "Ops channel gets the failure + diagnostics attached" },
  { title: "Investigation begins", detail: "Engineers start with context, not from zero" },
];

export const SKILLS = [
  {
    category: "Support",
    items: ["L2 Technical Support", "Incident Management", "Problem Management", "Root Cause Analysis", "Escalation Handling", "SLA Management", "Ticket Triage", "Log Analysis"],
  },
  {
    category: "Platforms",
    items: ["Siemens Teamcenter", "NX CAD", "Active Workspace"],
  },
  {
    category: "ITSM",
    items: ["ServiceNow", "Jira"],
  },
  {
    category: "Development",
    items: ["Python", "Lua", "Java", "C++", "HTML"],
  },
  {
    category: "APIs & Data",
    items: ["REST APIs", "JSON", "HTTP Status Codes", "SQL", "Slack API", "ServiceNow API"],
  },
  {
    category: "Monitoring & Automation",
    items: ["Nagios", "Selenium", "Python Automation", "Monitoring & Alerting", "Git"],
  },
];

export const KB_ARTICLES = [
  {
    title: "Workflow troubleshooting checklist",
    type: "Runbook",
    excerpt: "Reproduce the stall → check dispatcher queues → verify condition rules → review logs at the failure timestamp → confirm with the user.",
  },
  {
    title: "Common notification condition failures",
    type: "RCA",
    excerpt: "Why event-driven notifications silently skip: condition mismatch after schema changes, missing properties, and status-transition timing.",
  },
  {
    title: "API response troubleshooting",
    type: "SOP",
    excerpt: "Reading HTTP status codes, validating JSON payloads, and isolating client-side vs server-side faults before escalating.",
  },
  {
    title: "Monitoring alert investigation",
    type: "Runbook",
    excerpt: "From a Nagios CRITICAL to confirmed impact: scope the blast radius, attach diagnostics, escalate with evidence.",
  },
  {
    title: "Incident resolution guide",
    type: "SOP",
    excerpt: "Ownership from first report to follow-up: communicate early, fix the cause, validate with the user, document the knowledge.",
  },
];

export const COMMAND_SYSTEMS = [
  { name: "Teamcenter", detail: "2+ years of L2 support on Siemens Teamcenter PLM — workflows, dispatcher, notifications, and direct SQL diagnostics across a 12,000-user environment." },
  { name: "Monitoring", detail: "Built Nagios-based monitoring for 50+ hosts and 500+ services, with a custom Python live dashboard served behind an Nginx reverse proxy." },
  { name: "Notification Engine", detail: "Designed and maintained an event-driven notification framework in Lua, translating business requirements into condition-matching logic serving ~12,000 users." },
  { name: "Automation", detail: "Python + Selenium automation for KPI reporting and Slack-based alerting — cutting ~4 hours of manual reporting to under a minute." },
];

export const FEEDBACK_FLOW = [
  "Customer Issue",
  "Pattern Identified",
  "Documented",
  "Product / Engineering Feedback",
  "Improvement",
  "Better Customer Experience",
];

export const WHY_PLATFORM = [
  { title: "Product Expertise", body: "I work deeply with enterprise platforms and understand how system behavior affects the people using it." },
  { title: "End-to-End Ownership", body: "I investigate issues from the initial report through resolution and follow-up — one owner, no handoffs." },
  { title: "Technical Depth", body: "SQL, APIs, logs, automation, scripting, and system diagnostics are my everyday investigation tools." },
  { title: "Continuous Learning", body: "I work across support, development, monitoring, automation, and data — and each side sharpens the other." },
];
