/**
 * All site copy lives here. Edit this file to change text anywhere on the site.
 * Items marked TODO are placeholders awaiting the client's approved copy.
 */

export const site = {
  name: "Frances Okolo, CPA",
  shortName: "Frances Okolo",
  credential: "CPA",
  description:
    "Outsourced accounting, grant management, and fractional finance services for nonprofits and multi-entity organizations.",
  email: "hello@francesokolo.com", // TODO: confirm with client
  linkedin: "https://www.linkedin.com/", // TODO: client's LinkedIn URL
  location: "San Antonio, TX",
  responseTime: "Within two business days",

  // Toggle sections on once the client supplies real content.
  features: {
    testimonials: false,
    clientLogos: false,
  },
};

export const nav = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const home = {
  eyebrow: "Frances Okolo, CPA · Nonprofit & multi-entity accounting",
  headline: "Clear books. Clean audits. A finance function your board can trust.",
  lede:
    "I work with small and growing nonprofits that have outgrown spreadsheets and part-time bookkeeping but aren't ready for a full finance team. I become that team.",
  meta: [
    { title: "Fractional, not freelance", text: "A standing role on your team, at the hours you actually need." },
    { title: "Fund-level clarity", text: "Restricted, unrestricted, grant by grant, program by program." },
    { title: "Audit-ready by design", text: "Close the books every month as if the auditors arrive tomorrow." },
  ],
  band: {
    eyebrow: "Why it matters",
    headline: "Financial clarity is not overhead. It is what lets a mission grow.",
    text:
      "Funders read the numbers before they read the story. A clean audit, a defensible budget, and a board packet that answers questions before they are asked will do more for your next grant than any pitch deck.",
  },
  who: {
    eyebrow: "Who I work with",
    headline: "Organizations at the point where the money got complicated.",
    items: [
      { title: "Small nonprofits", text: "Budgets from roughly $500K to $10M, often with one person wearing the finance hat alongside three others." },
      { title: "Multi-entity organizations", text: "Parent and affiliate structures, fiscal sponsors and sponsored projects, 501(c)(3)s paired with (c)(4)s or LLCs." },
      { title: "Grant-funded programs", text: "Foundation and institutional awards with restrictions, match requirements, and reporting calendars that need to be tracked precisely." },
      { title: "Boards in transition", text: "New executive director, first audit, a funder asking for financial statements, or a merger on the table." },
    ],
  },
  servicesIntro: {
    eyebrow: "Services",
    headline: "Everything a finance department does, scaled to fit.",
    linkText: "All services, including grant management, fractional services, and compliance",
  },
  process: {
    eyebrow: "How it works",
    headline: "A steady rhythm, established in the first ninety days.",
    steps: [
      { title: "Discovery", text: "A 45-minute call, then a review of your books, chart of accounts, and last audit or 990. You get a written assessment either way." },
      { title: "Cleanup & setup", text: "Reconcile what's behind, restructure the chart of accounts around funds and programs, and set the systems your team will actually use." },
      { title: "Monthly rhythm", text: "Books closed by a fixed date. A management report that reads in ten minutes. Questions answered before the board meeting." },
      { title: "Strategic partnership", text: "Budget season, audit season, grant season. I'm in the room for each, and on call in between." },
    ],
  },
  aboutTeaser: {
    eyebrow: "About",
    headline: "Fifteen years inside finance departments. Now I build them for others.", // TODO: confirm years
    text:
      "Frances Okolo is a CPA and finance executive with a background in nonprofit and multi-entity accounting, audit leadership, and financial transformation. She works with a small number of organizations at a time so each gets a real seat at the table.",
    linkText: "Read more about Frances",
  },
  cta: {
    eyebrow: "Get started",
    headline: "Let's look at your books together.",
    text: "A 45-minute intro call, no preparation needed. You'll leave with a clear read on where you stand.",
    button: "Book an intro call",
  },
};

export const testimonials = {
  eyebrow: "In their words",
  headline: "What clients say after the first audit together.",
  items: [
    { quote: "Our auditors told us it was the cleanest set of books they had seen from an organization our size.", name: "Executive Director", org: "Community health nonprofit" },
    { quote: "For the first time, our board actually understands our finances. That changed how we plan.", name: "Board Treasurer", org: "Arts education organization" },
  ],
};

export const clientLogos = {
  eyebrow: "Selected clients",
  // Add files to /public/logos and list them here, e.g. { src: "/logos/acme.svg", alt: "Acme Foundation" }
  items: [] as { src: string; alt: string }[],
};

export type Service = { idx: string; title: string; summary: string; details: string[] };

export const services: Service[] = [
  {
    idx: "01 · Foundations",
    title: "Accounting & monthly close",
    summary: "The core. Accurate books, closed on time, structured around how your organization actually runs.",
    details: ["Bookkeeping and reconciliations", "Fund, program, and functional expense allocation", "Payroll and benefits accounting", "Monthly management reports", "Chart of accounts design"],
  },
  {
    idx: "02 · Grants",
    title: "Grant & fund management",
    summary: "Every dollar traceable to its source and its restriction.",
    details: ["Grant budgets and allowable cost tracking", "Restricted net asset release schedules", "Funder financial reporting", "Indirect cost rate support", "Match and cost-share documentation"],
  },
  {
    idx: "03 · Strategy",
    title: "Fractional services",
    summary: "Senior financial leadership on a schedule that fits your budget.",
    details: ["Annual budgeting and reforecasting", "Cash flow planning and reserves policy", "Board and finance committee reporting", "Scenario modeling for growth or contraction", "Finance staff coaching and hiring support"],
  },
  {
    idx: "04 · Compliance",
    title: "Compliance & filings",
    summary: "Keep the organization in good standing with every agency that watches it.",
    details: ["Form 990 preparation and review", "State charitable registrations", "1099 and payroll tax filings", "Sales tax exemption maintenance", "Policy documentation for funders"],
  },
];

export const servicesPage = {
  eyebrow: "Services",
  headline: "Built for nonprofits. Scaled to the organization you are now.",
  lede: "Engagements are structured as a monthly retainer or a defined project. Most clients start with a cleanup and move into a monthly rhythm.",
  models: {
    eyebrow: "Engagement models",
    items: [
      { title: "Monthly retainer", text: "A fixed monthly fee covering the close, reporting, and a set number of advisory hours. Scoped after discovery; reviewed annually." },
      { title: "Defined project", text: "Cleanup, audit prep, or a system migration. Fixed scope, fixed fee, fixed timeline." },
    ],
  },
  cta: {
    eyebrow: "Not sure where to start?",
    headline: "Discovery comes first, and it's free.",
    text: "A short call and a look at your books. You'll get a written assessment whether or not we work together.",
    button: "Book an intro call",
  },
};

export const about = {
  eyebrow: "About",
  headline: "I've sat on every side of the table.",
  facts: [
    ["Credential", "Certified Public Accountant"],
    ["Focus", "Nonprofit & multi-entity accounting"],
    ["Background", "Finance executive, audit leadership, financial transformation"],
    ["Based in", site.location],
    ["Works with", "Organizations nationwide, remotely"],
  ],
  lede:
    "Frances Okolo is a CPA and finance executive who has led accounting for nonprofits and multi-entity organizations, managed audits from both sides, and rebuilt finance functions that had stopped serving the people who depended on them.",
  // TODO: replace with client's approved bio
  paragraphs: [
    "She started her career in public accounting, auditing organizations whose books told her more about their leadership than any interview could. She then moved inside, running finance for mission-driven organizations with multiple entities, restricted funding, and boards that needed to understand the numbers quickly.",
    "That experience shaped a simple conviction: most nonprofits don't need more accounting. They need accounting that is organized around the way they actually work, closed on a rhythm, and explained in plain language to the people making decisions.",
    "Today she works with a small number of organizations as their outsourced accountant, controller, or fractional finance lead. The engagement is shaped to what each one needs, and it grows with them.",
  ],
  principles: {
    eyebrow: "How I work",
    items: [
      { title: "Few clients, deep work", text: "I keep the roster small so every organization gets senior attention, not a junior team." },
      { title: "Plain language", text: "Reports are written for the executive director and the board, not for other accountants." },
      { title: "Audit-ready always", text: "Every month is closed as if fieldwork starts tomorrow. Audit season becomes a formality." },
    ],
  },
};

export const contact = {
  eyebrow: "Contact",
  headline: "Tell me where the books stand.",
  lede: "A few details and I'll reply within two business days to set up an intro call.",
  aside: "Prefer to talk first? Email is fine.",
  budgets: ["Under $500K", "$500K – $2M", "$2M – $10M", "Over $10M"],
  needs: ["Monthly accounting", "Audit preparation", "Cleanup / catch-up", "Fractional services", "Not sure yet"],
  success: { title: "Thank you.", text: "Your message is on its way. Expect a reply within two business days." },
};
