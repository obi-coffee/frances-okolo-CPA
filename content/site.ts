/**
 * All site copy lives here. Edit this file to change text anywhere on the site.
 * Items marked TODO are placeholders awaiting the client's approved copy.
 */

export const site = {
  name: "Frances Okolo, CPA",
  shortName: "Frances Okolo",
  credential: "CPA",
  description:
    "Outsourced nonprofit accounting, audit readiness, and fractional finance services. Frances Okolo, CPA — San Antonio, Texas; clients nationwide.",
  email: "hello@francesokolo.com",
  linkedin: "https://www.linkedin.com/in/frances-okolo-cpa-985ba78/",
  location: "San Antonio, TX",
  responseTime: "Within two business days",
  url: "https://francesokolo.com",

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
  eyebrow: "Frances Okolo, CPA · Nonprofit accounting",
  headline: "Clear books. Clean audits. Finance support your board can trust.",
  lede:
    "I work with small and growing nonprofits that have outgrown spreadsheets and part-time bookkeeping but can't afford a full finance team.",
  meta: [
    { title: "Fractional, not freelance", text: "A standing role on your team, at the hours you actually need." },
    { title: "Fund-level clarity", text: "Restricted and unrestricted funds, every grant and program, tracked." },
    { title: "Audit-ready by design", text: "Year-round audit support." },
  ],
  band: {
    eyebrow: "Why it matters",
    headline: "Financial clarity isn’t a cost of doing good; it’s how good grows.",
    text:
      "Nonprofit accounting that funders, auditors, and boards can rely on. Funders read the numbers before they read the story. A clean audit, a defensible budget, and a board packet that answers questions before they are asked will do more for your next grant than any pitch deck.",
  },
  who: {
    eyebrow: "Who I work with",
    headline: "Nonprofit organizations in San Antonio and across Texas.",
    items: [
      { title: "Small nonprofits", text: "Budgets from roughly $500K to $10M." },
      { title: "Grant-funded programs", text: "Foundation and institutional awards with restrictions, match requirements, and reporting calendars that need to be tracked precisely." },
      { title: "Boards in transition", text: "New executive director, first audit, or a funder asking for financial statements." },
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
    headline: "Twenty years inside finance departments. Now I build them for others.",
    text:
      "Frances Okolo is a CPA and finance executive with a background in nonprofit accounting, audit leadership, and financial transformation. She works with a small number of organizations at a time so each gets a real seat at the table.",
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
    idx: "01 · Daily operations",
    title: "Accounting & monthly close",
    summary: "The core. Accurate books, closed on time, structured around how your organization actually runs.",
    details: ["Chart of accounts design", "Bookkeeping and reconciliations", "Fund, program, and functional expense allocation", "Monthly management reports"],
  },
  {
    idx: "02 · Audit readiness",
    title: "Year-round audit support",
    summary: "Preparation that turns audit season from a scramble into a formality.",
    details: ["PBC schedules and workpapers", "Auditor liaison through fieldwork", "Management letter remediation", "Internal control design"],
  },
  {
    idx: "03 · Grants",
    title: "Grant & fund management",
    summary: "Every dollar tracked to its source and its restriction.",
    details: ["Grant budgets and allowable cost tracking", "Restricted net asset release schedules", "Funder financial reporting", "Indirect cost rate support", "Match and cost-share documentation"],
  },
  {
    idx: "04 · Strategy",
    title: "Fractional services",
    summary: "Strategic financial leadership for nonprofit executives and boards. Often described as a fractional CFO or outsourced controller.",
    details: ["Annual budgeting and reforecasting", "Cash flow planning and reserves policy", "Board and finance committee reporting", "Scenario modeling for growth or contraction", "Finance staff coaching"],
  },
  {
    idx: "05 · Compliance & risk management",
    title: "Compliance & filings",
    summary: "Form 990, state filings, and funder requirements, met on time.",
    details: ["Form 990 preparation and review", "1099 filings", "Policy review and documentation"],
  },
];

export const servicesPage = {
  eyebrow: "Services",
  headline: "Accounting services built for nonprofits.",
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
    ["Focus", "Nonprofit accounting"],
    ["Background", "CFO, Controller, and Director of Finance roles; 20+ years"],
    ["Based in", site.location],
    ["Serves", "San Antonio, Texas; nonprofits nationwide (remote)"],
  ],
  lede:
    "Frances Okolo, CPA, is a nonprofit finance leader with more than 20 years of experience in GAAP reporting, audits, Form 990 compliance, treasury management, and internal controls. She has served as CFO, Controller, and Director of Finance for mission-driven organizations, and currently consults with nonprofits to strengthen compliance and streamline their financial operations. A trusted partner to executive teams and boards, she is known for decision-ready reporting that supports strategy and risk management.",
  // TODO: replace with client's approved bio
  paragraphs: [
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
  lede: "A few details and I'll reply within two business days to set up an intro call. Based in San Antonio; working with nonprofits across Texas and nationwide.",
  aside: "Prefer to talk first? Email is fine.",
  budgets: ["Under $500K", "$500K – $2M", "$2M – $10M", "Over $10M"],
  needs: ["Monthly accounting", "Audit preparation", "Cleanup / catch-up", "Fractional services", "Not sure yet"],
  success: { title: "Thank you.", text: "Your message is on its way. Expect a reply within two business days." },
};
