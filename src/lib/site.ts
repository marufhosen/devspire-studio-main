export const site = {
  name: "Devspire Studio",
  legalName: "Devspire Studio",
  slogan: "Technology that drives your business forward",
  description: "Technology that drives your business forward.",
  email: "studiodevspire@gmail.com",
  /** E.164, used only for `tel:` links — render `phoneDisplay` instead. */
  phone: "+8801944007152",
  /** Human-readable Bangladeshi format: trunk 0 dropped, grouped 4 + 6. */
  phoneDisplay: "+880 1944 007152",
  address: "Aftabnagar, Badda, Dhaka-1212, Bangladesh",
  copyright: "© 2026 Devspire Studio. All rights reserved.",
} as const;

export const openingHours = "Opening Hours: Sunday to Thursday - 9am to 6pm";

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services", submenu: "services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Projects", href: "/projects" },
  { label: "About Us", href: "/about" },
  { label: "Why Us", href: "/why-us" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
] as const;

export const highlights = [
  {
    icon: "badge-check",
    title: "Quality Services",
    description:
      "Senior engineers, clean architecture and rigorous delivery on every engagement.",
  },
  {
    icon: "lightbulb",
    title: "Valuable Ideas",
    description:
      "Product thinking that turns business goals into software people actually use.",
  },
  {
    icon: "wallet",
    title: "Budget Friendly",
    description:
      "Flexible engagement models with transparent milestone invoicing that scales with your ambitions.",
  },
  {
    icon: "headset",
    title: "Support 24/7",
    description:
      "Round-the-clock monitoring, maintenance and support for critical systems.",
  },
] as const;

/**
 * Compliance and security standards are shown as a badge band on the
 * homepage. Each entry points at a badge in `public/` and carries the
 * `{ src, alt, width, height }` shape the image component needs.
 */
export type ComplianceStandard = {
  name: string;
  description: string;
  logo: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
};

export const securityCompliance = {
  eyebrow: "Security & Compliance",
  title: "Standards We Build To",
  description: "Built with security, privacy, and compliance at the core.",
  standards: [
    {
      name: "GDPR",
      description:
        "Personal data handled to GDPR principles: lawful basis, data minimization and individual rights.",
      logo: { src: "/gdpr.webp", alt: "GDPR badge", width: 271, height: 271 },
    },
    {
      name: "SOC 2 Type II",
      description:
        "Security, availability and confidentiality controls that are documented, monitored and reviewed.",
      logo: {
        src: "/soc-2.webp",
        alt: "SOC 2 Type II badge",
        width: 551,
        height: 700,
      },
    },
    {
      name: "ISO 27001",
      description:
        "An information security management system that keeps risk, access and change under continuous review.",
      logo: {
        src: "/iso.webp",
        alt: "ISO 27001 badge",
        width: 271,
        height: 271,
      },
    },
  ] satisfies readonly ComplianceStandard[],
} as const;

export type FoundationPoint = {
  /** Optional bold lead-in rendered before the point, used by the values list. */
  label?: string;
  text: string;
};

export type FoundationTab = {
  id: string;
  label: string;
  icon: string;
  heading: string;
  description: string;
  points: readonly FoundationPoint[];
};

export const foundationTabs: readonly FoundationTab[] = [
  {
    id: "mission",
    label: "Mission",
    icon: "target",
    heading: "Our Mission",
    description:
      "To empower businesses with innovative software solutions and data-driven insights that drive growth, efficiency, and competitive advantage in the digital age.",
    points: [
      { text: "Deliver high-quality, scalable software solutions" },
      { text: "Transform raw data into actionable business intelligence" },
      { text: "Connect businesses with top-tier technical talent" },
    ],
  },
  {
    id: "vision",
    label: "Vision",
    icon: "lightbulb",
    heading: "Our Vision",
    description:
      "To be the global leader in innovative software solutions and data analytics, recognized for our technical excellence, client satisfaction, and positive impact on businesses and communities worldwide.",
    points: [
      { text: "Pioneer new technologies and methodologies" },
      { text: "Set industry standards for quality and innovation" },
      { text: "Create lasting value for clients and stakeholders" },
    ],
  },
  {
    id: "values",
    label: "Values",
    icon: "award",
    heading: "Our Values",
    description:
      "Our core values shape our culture, guide our decisions, and define how we work with clients and each other.",
    points: [
      {
        label: "Excellence",
        text: "We strive for excellence in everything we do",
      },
      {
        label: "Innovation",
        text: "We embrace creativity and forward thinking",
      },
      { label: "Integrity", text: "We act with honesty and transparency" },
      { label: "Collaboration", text: "We believe in the power of teamwork" },
      { label: "Client Focus", text: "We prioritize client success" },
    ],
  },
];

export const about = {
  intro:
    "We are a team of passionate developers, data scientists, and technology enthusiasts dedicated to transforming businesses through innovative software solutions.",
  story: {
    title: "From Startup to Industry Leader",
    paragraphs: [
      "Founded in 2015, Devspire Studio began as a small team of developers with a vision to make cutting-edge technology accessible to businesses of all sizes. What started as a software development shop quickly expanded into data analytics and cloud solutions.",
      "Today, we’re proud to serve over 500 clients globally, from startups to Fortune 500 companies, helping them leverage technology to achieve their business goals.",
    ],
    image: {
      src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
      alt: "Devspire Studio team collaborating around a table during a planning session",
    },
  },
  foundation: {
    intro: "The principles that guide everything we do at Devspire Studio.",
    tabs: foundationTabs,
  },
  team: {
    intro: "Meet the experts leading Devspire Studio’s innovation and growth.",
    members: [
      {
        name: "Robert Chen",
        role: "CEO & Founder",
        bio: "With over 20 years of experience in software development and business leadership, Robert founded Devspire Studio with a vision to transform how businesses leverage technology.",
        image: {
          src: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&crop=faces&w=800&h=1000&q=80",
          alt: "Portrait of Robert Chen, CEO and Founder of Devspire Studio",
        },
      },
      {
        name: "Dr. Amelia Rodriguez",
        role: "CTO",
        bio: "A former AI researcher with a Ph.D. in Computer Science, Amelia leads our technical strategy and innovation initiatives, ensuring we stay at the cutting edge.",
        image: {
          src: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&crop=faces&w=800&h=1000&q=80",
          alt: "Portrait of Dr. Amelia Rodriguez, Chief Technology Officer at Devspire Studio",
        },
      },
      {
        name: "Marcus Johnson",
        role: "COO",
        bio: "With a background in operations management at Fortune 500 companies, Marcus ensures our processes are efficient and our service delivery exceeds expectations.",
        image: {
          src: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&crop=faces&w=800&h=1000&q=80",
          alt: "Portrait of Marcus Johnson, Chief Operating Officer at Devspire Studio",
        },
      },
    ],
  },
  careers: {
    title: "Join Our Team",
    description:
      "We’re always looking for talented individuals to join our growing team.",
  },
} as const;

export type WhyUsDifferentiator = {
  icon: string;
  title: string;
  description: string;
};

export type WhyUsComparisonRow = {
  topic: string;
  typical: string;
  devspire: string;
};

export const whyUsPage = {
  eyebrow: "Why Choose Us",
  title: "Why Businesses Choose Devspire Studio",
  intro:
    "A decade of shipping software, data platforms and engineering teams for clients in 15+ countries has taught us what actually decides whether a project succeeds. Here is what that experience means for yours.",
  primaryAction: "Start a Project",
  secondaryAction: "See Our Work",
  differentiators: {
    eyebrow: "What Sets Us Apart",
    title: "Six Reasons Clients Stay With Us",
    intro:
      "Agencies are easy to find; partners who scope honestly, ship on time and stay after launch are not. These are the commitments every Devspire Studio engagement is held to.",
    items: [
      {
        icon: "users",
        title: "The Engineers Who Scope Also Build",
        description:
          "No sales hand-off and no bench of juniors. The people who estimate your project are the people who write the code.",
      },
      {
        icon: "clipboard",
        title: "Written Scope Before We Start",
        description:
          "Every engagement opens with an itemised scope, a delivery plan and a named team — agreed in writing before the first sprint.",
      },
      {
        icon: "shield",
        title: "Security Designed In, Not Bolted On",
        description:
          "Least-privilege access, encryption, dependency scanning and audit trails are part of the build rather than a pre-launch scramble.",
      },
      {
        icon: "chart",
        title: "Outcomes We Agree to Measure",
        description:
          "We agree the numbers that define success up front and report against them in every review, so progress is evidence rather than opinion.",
      },
      {
        icon: "wallet",
        title: "Engagement Without Surprises",
        description:
          "Milestone invoicing and change requests are quoted before any work begins. Clear scope, clear deliverables — nothing unannounced.",
      },
      {
        icon: "refresh",
        title: "Still Here After Launch",
        description:
          "Monitoring, maintenance and support continue past go-live, led by a named engineer who already knows how your system was built.",
      },
    ],
  },
  comparison: {
    eyebrow: "The Difference",
    title: "The Same Project, Run Two Ways",
    intro:
      "This is the contrast our clients describe when they explain why they moved to Devspire Studio.",
    typicalLabel: "Typical vendor",
    devspireLabel: "Working with Devspire Studio",
    rows: [
      {
        topic: "Your team",
        typical:
          "The people who pitched are replaced once the contract is signed.",
        devspire:
          "The engineers who scoped the work are the ones who build and support it.",
      },
      {
        topic: "Scope",
        typical: "A rough estimate that drifts with every change request.",
        devspire:
          "An itemised scope, with changes quoted and approved before work starts.",
      },
      {
        topic: "Visibility",
        typical: "A status update only when you ask for one.",
        devspire:
          "A weekly demo of working software, plus a written summary of risks.",
      },
      {
        topic: "Ownership",
        typical:
          "Code and infrastructure handed over, undocumented, at the end.",
        devspire:
          "Your repositories and cloud accounts from the first commit, fully documented.",
      },
      {
        topic: "After launch",
        typical:
          "A ticket queue and a new team learning your system from scratch.",
        devspire: "A named engineer on call, 24/7 for critical systems.",
      },
    ],
  },
  faq: {
    title: "Questions Before You Commit",
    intro: "The things prospective clients ask us most, answered plainly.",
    items: [
      {
        question: "How do you price a project?",
        answer:
          "Fixed price for a clearly defined scope, time and materials for products that will evolve, or a dedicated team on a monthly rate. We recommend the model that fits after discovery and confirm it in writing before any work begins.",
      },
      {
        question: "How soon can you start?",
        answer:
          "Discovery usually begins within a week of the first call, and engineers are committed to your project by the second or third week. Urgent work with an existing relationship can move faster.",
      },
      {
        question: "Who owns the code, data and infrastructure?",
        answer:
          "You do, from day one. Source code, infrastructure definitions and documentation live in your repositories and cloud accounts, so there is never a question of access if the engagement ends.",
      },
      {
        question: "What happens when requirements change mid-project?",
        answer:
          "We quote the change before starting it, including the cost and the effect on the timeline, so you can approve or decline with full information. Nothing is built off the agreed scope without your sign-off.",
      },
      {
        question: "How do you report progress?",
        answer:
          "A weekly demo of working software with the team that built it, followed by a short written summary: what shipped, what is next, and anything that needs a decision from you.",
      },
    ],
  },
  cta: {
    eyebrow: "Let’s Work Together",
    title: "Want a partner who stays after launch?",
    description:
      "Tell us what you are building and we will come back within one business day with a scoped, costed next step. No obligation, no pressure.",
    action: "Get a Free Consultation",
  },
} as const;

export type CareerBenefit = {
  icon: string;
  title: string;
  description: string;
};

export type CareerDiscipline = {
  icon: string;
  title: string;
  description: string;
  /** Typical focus areas inside the discipline, shown as chips. */
  areas: readonly string[];
};

export type CareerPoint = {
  title: string;
  description: string;
};

export const careersPage = {
  eyebrow: "Careers",
  title: "Build Your Career at Devspire Studio",
  intro:
    "We are the engineers, analysts and designers behind every Devspire Studio engagement — small teams, real ownership and work that reaches production. There is no open role to apply for today, so this page tells you honestly what we hire for and how to reach us.",
  summary:
    "There are no open vacancies at Devspire Studio right now. See what we hire for, how our hiring process works, and how to send a speculative application.",
  primaryAction: "Send Your CV",
  secondaryAction: "Meet the Team",
  subject: "Speculative application — Devspire Studio",
  openings: {
    eyebrow: "Open Positions",
    title: "Currently No Vacancy Available",
    intro:
      "We only list a role once the budget is approved and the team is waiting for it. Nothing is open today, and we would rather show an empty list than advertise the same evergreen jobs for years.",
    status: "No open positions right now",
    headline: "There are no vacancies at the moment",
    note: "Send your CV and a few lines about the work you want to do. We read every application ourselves and hold strong ones on file for six months, so you hear from us the moment a matching role opens.",
    points: [
      {
        title: "Speculative applications are read",
        description:
          "Your CV reaches the hiring lead for your discipline, not a keyword filter. No application disappears into a black hole.",
      },
      {
        title: "You always get an answer",
        description:
          "We reply to every application within two weeks, including the ones we say no to, with the reason why.",
      },
      {
        title: "Kept on file for six months",
        description:
          "Strong applications stay with us for six months and are the first names we revisit when a matching role opens.",
      },
      {
        title: "Referrals work too",
        description:
          "Know someone at Devspire Studio? Ask them to send your CV across — referred candidates get read the same week.",
      },
    ],
    action: "Email Your CV",
    secondaryAction: "Talk to Our Team",
  },
  benefits: {
    eyebrow: "Why Devspire Studio",
    title: "What You Get When You Join",
    intro:
      "The things that decide whether a job is good day to day — settled long before a role is ever advertised.",
    items: [
      {
        icon: "target",
        title: "Work That Ships",
        description:
          "You will see what you built in production for real users, not in a slide deck. Small teams, named ownership, short feedback loops.",
      },
      {
        icon: "users",
        title: "Senior Colleagues",
        description:
          "Work beside engineers and analysts who have shipped at scale, review code properly and would rather explain a decision than defend it.",
      },
      {
        icon: "wallet",
        title: "Competitive Pay",
        description:
          "Salaries at or above the market, reviewed against a published band for your level every year — no negotiation lottery.",
      },
      {
        icon: "globe",
        title: "Flexible and Remote",
        description:
          "Remote-first with our Dhaka office open to anyone who prefers it, and hours that assume you have a life outside work.",
      },
      {
        icon: "graduation",
        title: "Learning Budget",
        description:
          "A yearly budget for courses, certifications and conferences, plus protected time during work hours to actually use it.",
      },
      {
        icon: "shield",
        title: "Health & Wellbeing",
        description:
          "Health cover for you and your family, paid leave that people genuinely take, and a team that respects time off.",
      },
    ],
  },
  disciplines: {
    eyebrow: "Where You Could Fit",
    title: "The Teams We Hire Into",
    intro:
      "Even with nothing open, these are the disciplines we grow. Mention the one you want in your application and it reaches the right person.",
    items: [
      {
        icon: "code",
        title: "Software Engineering",
        description:
          "Product teams building web platforms, mobile apps, APIs and the systems behind them.",
        areas: ["Frontend", "Backend", "Mobile", "APIs"],
      },
      {
        icon: "chart",
        title: "Data & Analytics",
        description:
          "Analysts, data engineers and scientists turning messy business data into decisions.",
        areas: ["Data engineering", "BI", "Machine learning", "Forecasting"],
      },
      {
        icon: "cloud",
        title: "Cloud & DevOps",
        description:
          "Platform engineers who make deployments boring and infrastructure reproducible.",
        areas: ["AWS & Azure", "Kubernetes", "CI/CD", "Observability"],
      },
      {
        icon: "laptop",
        title: "Design & Product",
        description:
          "Designers who research, prototype and hand over interfaces developers can build without guessing.",
        areas: ["UX research", "UI design", "Prototyping", "Design systems"],
      },
      {
        icon: "clipboard",
        title: "Quality & Support",
        description:
          "The people who prove a release is ready and stay on call when it needs us at 3am.",
        areas: ["Test automation", "Manual QA", "Monitoring", "Help desk"],
      },
      {
        icon: "briefcase",
        title: "Delivery & Talent",
        description:
          "Project leads, analysts and recruiters who keep engagements on scope and teams well staffed.",
        areas: [
          "Project management",
          "Business analysis",
          "Technical recruiting",
          "Client success",
        ],
      },
    ],
  },
  process: {
    eyebrow: "How Hiring Works",
    title: "What Applying to Devspire Studio Looks Like",
    intro:
      "Four steps and about two weeks end to end for most roles — and a clear answer either way at the end of it.",
    steps: [
      {
        title: "Send Your CV",
        description:
          "Email your CV with a short note about the work you want to do. A CV and a few honest lines are enough — no cover letter template.",
      },
      {
        title: "Intro Call",
        description:
          "Thirty minutes with the hiring lead about your experience, what you want next and what the role actually involves day to day.",
      },
      {
        title: "Craft Conversation",
        description:
          "A session with the team you would join, built around a real problem rather than a timed puzzle. We pay for the time it takes.",
      },
      {
        title: "Offer & Onboarding",
        description:
          "A written offer with the level and salary band explained, then a named mentor through your first weeks.",
      },
    ],
  },
  cta: {
    eyebrow: "Stay in Touch",
    title: "No Vacancy Today Does Not Mean No Tomorrow",
    description:
      "Send your CV now and we will get in touch the moment a role matching your skills opens. Or start with a conversation about the problems our teams are solving.",
    action: "Contact Our Team",
  },
} as const;

export type ContactChannel = {
  icon: "mail" | "phone" | "map-pin";
  label: string;
  value: string;
  href: string;
  actionLabel: string;
  /** Spans both columns from `sm` up, so a long value has room to breathe. */
  wide?: boolean;
};

export const contactChannels: readonly ContactChannel[] = [
  {
    icon: "mail",
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
    actionLabel: "Email us",
  },
  {
    icon: "phone",
    label: "Phone",
    value: site.phoneDisplay,
    href: `tel:${site.phone}`,
    actionLabel: "Call us",
  },
  {
    icon: "map-pin",
    label: "Office",
    value: site.address,
    href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.address)}`,
    actionLabel: "Get directions",
    wide: true,
  },
];

export const contactPage = {
  eyebrow: "Get in Touch",
  title: "Contact Us",
  intro:
    "Have a question or interested in our services? We’d love to hear from you.",
  action: "Send a Message",
  form: {
    title: "Send a Message",
    description:
      "Fill out the form below and our team will get back to you within 24 hours.",
    name: { label: "Full Name", placeholder: "Your name" },
    email: { label: "Email Address", placeholder: "you@company.com" },
    phone: { label: "Phone (optional)", placeholder: "+880 1700 000000" },
    message: {
      label: "How can we help?",
      placeholder: "Tell us about your project or the question you have.",
    },
    submit: "Send Message",
    submitting: "Sending",
    success:
      "Thanks — your message is on its way. We reply to every enquiry within one business day.",
    failure:
      "We could not send your message. Please try again, or email us directly.",
    again: "Send another message",
  },
  information: {
    title: "Contact Information",
    description: "Reach out to us directly through any of these channels.",
  },

  officeHours: {
    eyebrow: "Office Hours",
    title: "When you can reach us",
    rows: [
      { days: "Sunday - Thursday", hours: "9:00 AM - 6:00 PM BDT" },
      { days: "Friday - Saturday", hours: "Closed" },
    ],
    note: "Technical support is available 24/7 for our enterprise clients.",
  },
} as const;

export type CaseStudyResult = {
  value: string;
  label: string;
};

export type CaseStudy = {
  slug: string;
  industry: string;
  title: string;
  summary: string;
  image: { src: string; alt: string };
  services: readonly string[];
  results: readonly CaseStudyResult[];
  overview: readonly string[];
  challenge: string;
  approach: readonly string[];
};

export const caseStudiesPage = {
  eyebrow: "Our Success Stories",
  title: "Case Studies",
  intro:
    "Discover how we’ve helped businesses across industries achieve remarkable results through innovative cloud development and data analytics solutions.",
  action: "Start Your Success Story",
  cta: {
    eyebrow: "Let’s Work Together",
    title: "Ready to Create Your Own Success Story?",
    description:
      "Our team of experts is ready to help you transform your business through innovative cloud development and data analytics solutions.",
    action: "Get Started Today",
  },
} as const;

export const caseStudies: readonly CaseStudy[] = [
  {
    slug: "retail-analytics-transformation",
    industry: "Retail",
    title: "Retail Analytics Transformation",
    summary:
      "How we helped a major retail chain increase sales by 35% through advanced customer analytics and personalization.",
    image: {
      src: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&h=800&q=80",
      alt: "Interior of a retail clothing store with rails of stock",
    },
    services: ["Data Analytics", "Custom Software"],
    results: [
      { value: "35%", label: "Sales Increase" },
      { value: "42%", label: "Customer Retention Improvement" },
    ],
    overview: [
      "A national retail chain with more than 300 stores was sitting on years of transaction data that nobody could act on. Sales, loyalty and inventory records lived in separate systems, so merchandising decisions rested on instinct and month-old spreadsheets.",
      "We built a unified customer analytics platform that turns every transaction into a usable signal — who buys what, when, and what they are likely to buy next.",
    ],
    challenge:
      "Marketing could not tell a first-time buyer from a lapsed regular, promotions went to the entire database instead of the shoppers who actually needed an incentive, and best sellers were only reordered after they had already run out.",
    approach: [
      "Consolidated point-of-sale, loyalty and inventory data into a single warehouse with nightly loads.",
      "Built segmentation and propensity models that score every shopper for churn risk and next-purchase likelihood.",
      "Delivered personalized offers plus a merchandising dashboard the buying team now uses in weekly range reviews.",
      "Piloted the program in 24 stores before rolling it out chain-wide over a single quarter.",
    ],
  },
  {
    slug: "manufacturing-efficiency-optimization",
    industry: "Manufacturing",
    title: "Manufacturing Efficiency Optimization",
    summary:
      "Streamlining operations and reducing costs by 28% through IoT integration and real-time analytics dashboards.",
    image: {
      src: "https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&w=1200&h=800&q=80",
      alt: "Industrial plant with processing towers and steam stacks",
    },
    services: ["IoT Solutions", "Data Analytics", "Process Automation"],
    results: [
      { value: "28%", label: "Cost Reduction" },
      { value: "40%", label: "Efficiency Improvement" },
    ],
    overview: [
      "A manufacturer running three production lines had no reliable picture of how those lines actually performed. Downtime was logged on paper, scrap rates were estimated, and maintenance happened on a fixed calendar rather than on condition.",
      "We instrumented the plant with sensors and built a real-time operations dashboard that shows output, energy use and machine health minute by minute — on the floor and in the boardroom.",
    ],
    challenge:
      "Unplanned stoppages were discovered only when a line had already stopped, energy consumption arrived as one monthly invoice with no way to attribute it, and the maintenance calendar meant healthy machines were serviced while failing ones waited.",
    approach: [
      "Installed IoT sensors on the critical machines and streamed readings to a time-series store.",
      "Built live dashboards for output, downtime, energy and quality, visible on shop-floor screens.",
      "Added threshold and trend alerts so engineers are paged before a failure, not after it.",
      "Automated the shift report that previously took two supervisors an hour to assemble.",
    ],
  },
  {
    slug: "fintech-mobile-app-development",
    industry: "Financial Services",
    title: "FinTech Mobile App Development",
    summary:
      "Creating a secure, scalable financial services platform that processed over $2B in transactions in its first year.",
    image: {
      src: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?auto=format&fit=crop&w=1200&h=800&q=80",
      alt: "Customer entering a PIN on an ATM keypad with a bank card",
    },
    services: ["Software Development", "Cloud Infrastructure", "Security"],
    results: [
      { value: "$2B+", label: "Transactions Processed" },
      { value: "99.99%", label: "Platform Uptime" },
      { value: "4.8/5", label: "App Rating" },
    ],
    overview: [
      "A financial services provider wanted to launch a consumer payments product without inheriting the constraints of its legacy core banking stack. The brief was a mobile-first experience that could pass a security review and scale past launch day.",
      "We designed and built the platform end to end — mobile apps, APIs, ledgers and the cloud infrastructure beneath them — with compliance and auditability designed in from the first sprint.",
    ],
    challenge:
      "The existing systems were batch-oriented and could not authorize payments in real time, integrations required manual steps, and every release needed a maintenance window the business could not afford.",
    approach: [
      "Ran a discovery sprint to map regulatory, KYC and audit requirements before writing code.",
      "Built an event-driven payments core with a double-entry ledger and idempotent transaction APIs.",
      "Shipped iOS and Android apps with biometric login, device binding and encrypted storage.",
      "Automated infrastructure, penetration testing and monitoring so releases ship continuously.",
    ],
  },
  {
    slug: "healthcare-management-system",
    industry: "Healthcare",
    title: "Healthcare Management System",
    summary:
      "Developing an integrated healthcare management system that reduced administrative costs by 45% and improved patient outcomes.",
    image: {
      src: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=1200&h=800&q=80",
      alt: "Hospital ward with a row of prepared beds",
    },
    services: ["Software Development", "Data Analytics", "Cloud Migration"],
    results: [
      { value: "45%", label: "Cost Reduction" },
      { value: "32%", label: "Improved Patient Outcomes" },
    ],
    overview: [
      "A multi-site care provider ran appointments, billing, records and pharmacy requests on disconnected tools. Staff re-keyed the same patient information into three systems, and clinicians had no single view of a patient’s history.",
      "We built one integrated system covering the full patient journey, then migrated the historical records into it so the clinical picture is complete from day one.",
    ],
    challenge:
      "Duplicate data entry consumed clinical time, appointment no-shows went unmanaged, and reporting for regulators took a fortnight of manual collation every quarter.",
    approach: [
      "Shadowed clinical and administrative teams to map the real patient journey rather than the documented one.",
      "Built a single patient record with role-based access and a full audit trail.",
      "Added scheduling with automated reminders and a clinician-facing dashboard of the day ahead.",
      "Migrated a decade of legacy records with validation, then automated compliance reporting.",
    ],
  },
  {
    slug: "ecommerce-platform-scaling",
    industry: "E-commerce",
    title: "E-commerce Platform Scaling",
    summary:
      "Helping an online retailer scale their platform to handle 10x growth during peak shopping seasons without performance issues.",
    image: {
      src: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&h=800&q=80",
      alt: "Fulfillment warehouse with racks of packed parcels ready for dispatch",
    },
    services: ["Cloud Infrastructure", "Performance Optimization", "DevOps"],
    results: [
      { value: "10x", label: "Traffic Handling" },
      { value: "99.99%", label: "Uptime" },
      { value: "3s", label: "Average Load Time" },
    ],
    overview: [
      "An online retailer’s platform worked well for most of the year and fell over every November. Traffic multiplied overnight, the checkout queue backed up, and the team spent peak season firefighting instead of selling.",
      "We re-architected the platform for elasticity and rebuilt the deployment pipeline so capacity and code could both move at the speed of demand.",
    ],
    challenge:
      "A monolithic application scaled vertically only, the database was a single point of failure, and deployments were manual, risky and forbidden during the trading period.",
    approach: [
      "Profiled the platform under simulated peak load to find the real bottlenecks rather than the suspected ones.",
      "Introduced caching, read replicas and a queue for order processing to absorb bursts.",
      "Moved to autoscaling containers with infrastructure defined as code.",
      "Built a CI/CD pipeline with load tests in the release gate, so peak readiness is proven rather than hoped for.",
    ],
  },
  {
    slug: "cloud-migration-financial-institution",
    industry: "Financial Services",
    title: "Cloud Migration for Financial Institution",
    summary:
      "Securely migrating a financial institution's legacy systems to the cloud, resulting in 65% cost savings and improved security.",
    image: {
      src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&h=800&q=80",
      alt: "Server racks with illuminated network cabling in a data center",
    },
    services: ["Cloud Migration", "Security", "DevOps"],
    results: [
      { value: "65%", label: "Cost Savings" },
      { value: "Zero", label: "Security Incidents" },
      { value: "99.99%", label: "Uptime" },
    ],
    overview: [
      "A financial institution was running its core systems on ageing on-premise hardware, with a data center contract renewal looming and no clear path off it. Regulators required evidence that any move would not weaken controls.",
      "We migrated the estate in waves — assessment, landing zone, pilot, then production — with security and compliance validated at every step.",
    ],
    challenge:
      "The estate mixed modern and decades-old workloads, dependencies between them were undocumented, and downtime windows were measured in minutes per year.",
    approach: [
      "Discovered and mapped every workload, dependency and data flow before moving anything.",
      "Built a compliant landing zone with encryption, network segmentation and centralized logging.",
      "Migrated in waves with rollback plans, rehearsed on non-production replicas first.",
      "Enabled infrastructure as code and automated patching to keep the estate auditable.",
    ],
  },
  {
    slug: "ai-support-assistant",
    industry: "AI & Automation",
    title: "AI Support Assistant for a Global Retailer",
    summary:
      "Deploying a retrieval-augmented AI assistant that resolved 68% of customer enquiries automatically and cut first-response time by 92%.",
    image: {
      src: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&h=800&q=80",
      alt: "Glowing AI lettering surrounded by a network of light connections",
    },
    services: ["AI & Process Automation", "Custom Software", "Data Analytics"],
    results: [
      { value: "68%", label: "Enquiries Auto-Resolved" },
      { value: "92%", label: "Faster First Response" },
      { value: "3.2x", label: "Support Capacity" },
    ],
    overview: [
      "A retailer’s support team was answering the same questions in five languages across three time zones. Response times stretched overnight, and the backlog grew faster than hiring could close it.",
      "We deployed an assistant grounded in the company’s own product data, policies and resolved tickets, with strict guardrails and a clean handover to a human whenever confidence drops.",
    ],
    challenge:
      "Agents spent most of their day on repetitive, low-complexity questions, knowledge lived in individual inboxes, and a wrong answer from an ungrounded bot would have been a brand risk.",
    approach: [
      "Built a retrieval layer over product documentation, policies and past tickets so answers cite real sources.",
      "Added guardrails, confidence thresholds and an automatic escalation path to human agents.",
      "Created an evaluation harness with a labeled question set to catch regressions before each release.",
      "Rolled out channel by channel, measuring containment and satisfaction every week.",
    ],
  },
  {
    slug: "computer-vision-quality-inspection",
    industry: "AI & Automation",
    title: "Computer Vision Quality Inspection",
    summary:
      "Training a vision model that inspects every unit on the production line in real time, catching 99.2% of defects and cutting scrap by 31%.",
    image: {
      src: "https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&w=1200&h=800&q=80",
      alt: "Robot with a camera head positioned in front of monitoring screens",
    },
    services: [
      "AI & Process Automation",
      "IoT Solutions",
      "Cloud Infrastructure",
    ],
    results: [
      { value: "99.2%", label: "Defect Detection Rate" },
      { value: "31%", label: "Reduction in Scrap" },
      { value: "100%", label: "Units Inspected" },
    ],
    overview: [
      "A manufacturer relied on human inspectors sampling a fraction of output at the end of the line. Defects that slipped through reached customers, and by the time a fault was spotted the whole batch had already been produced.",
      "We trained a computer vision model to inspect every unit as it passes, flagging defects in milliseconds and feeding the results back to the operators who can act on them.",
    ],
    challenge:
      "Sampling meant most units were never inspected, defects were discovered downstream at the cost of a recall, and there was no data on which machine or shift produced the failures.",
    approach: [
      "Captured and labeled a representative image set covering known defects and acceptable variation.",
      "Trained and tuned a vision model, then validated it against held-out production images.",
      "Deployed inference at the edge so inspection keeps working when the line is offline.",
      "Built an MLOps pipeline for retraining and connected results to the line’s control system.",
    ],
  },
  {
    slug: "predictive-demand-forecasting",
    industry: "AI & Automation",
    title: "Predictive Demand Forecasting for Inventory Planning",
    summary:
      "Building a machine learning forecasting service that improved demand accuracy by 27% and freed $4.2M of working capital tied up in stock.",
    image: {
      src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&h=800&q=80",
      alt: "Analytics dashboard showing demand and performance charts",
    },
    services: [
      "Data Analytics",
      "AI & Process Automation",
      "Cloud Infrastructure",
    ],
    results: [
      { value: "27%", label: "Forecast Accuracy Gain" },
      { value: "$4.2M", label: "Working Capital Released" },
      { value: "18%", label: "Fewer Stockouts" },
    ],
    overview: [
      "A distributor planned inventory with spreadsheets and a 12-month moving average. Seasonal demand swung hard, so the business carried too much of the wrong stock and ran out of the right stock at the worst possible moment.",
      "We built a forecasting service that combines the company’s own sales and inventory history with seasonality, promotions and lead times, and puts the result in front of the planners who need it.",
    ],
    challenge:
      "Forecasts ignored promotions and seasonality, planners did not trust the numbers so they overrode them, and nobody could measure whether a forecast had actually been right.",
    approach: [
      "Unified sales, inventory, pricing and lead-time data into a single planning dataset.",
      "Benchmarked statistical and machine learning models per product class before choosing an approach.",
      "Built automated retraining and forecast-accuracy tracking so quality is measured rather than assumed.",
      "Delivered a planner-facing dashboard that explains each forecast and highlights exceptions.",
    ],
  },
];

export type ServiceFeature = {
  icon: string;
  title: string;
  description: string;
  /** Longer follow-up paragraph used by the software development cards. */
  detail?: string;
  /** Bullet points shown under the description. */
  points?: readonly string[];
};

export type ServiceTab = {
  id: string;
  label: string;
  icon: string;
  heading: string;
  description: string;
  items: readonly string[];
};

export type ServiceStep = { title: string; description: string };
export type ServiceBenefit = { title: string; description: string };
export type ServiceFaq = { question: string; answer: string };
export type ServiceQuote = { quote: string; name: string; role: string };

export type ServicePlan = {
  name: string;
  price: string;
  summary: string;
  features: readonly string[];
  highlighted?: boolean;
};

export type ServiceIndustry = { name: string; description: string };

export type ServiceSummary = {
  slug: string;
  icon: string;
  title: string;
  description: string;
  features: readonly string[];
};

export type ServiceDetail = {
  slug: string;
  label: string;
  title: string;
  intro: string;
  primaryAction: string;
  secondaryAction?: string;
  expertise: {
    eyebrow: string;
    title: string;
    intro: string;
    items: readonly ServiceFeature[];
  };
  tabs?: {
    eyebrow: string;
    title: string;
    intro: string;
    tabs: readonly ServiceTab[];
  };
  process: {
    eyebrow: string;
    title: string;
    intro: string;
    steps: readonly ServiceStep[];
  };
  benefits: {
    eyebrow: string;
    title: string;
    intro: string;
    items: readonly ServiceBenefit[];
  };
  plans?: {
    eyebrow: string;
    title: string;
    intro: string;
    items: readonly ServicePlan[];
    note: string;
    custom: string;
    customAction: string;
  };
  industries?: {
    eyebrow: string;
    title: string;
    intro: string;
    items: readonly ServiceIndustry[];
  };
  quotes?: readonly ServiceQuote[];
  /** Slugs from `caseStudies` shown as related success stories. */
  related: readonly string[];
  faq: {
    title: string;
    intro: string;
    items: readonly ServiceFaq[];
  };
  cta: { title: string; description: string; action: string };
};

export const servicesPage = {
  eyebrow: "Our Services",
  title: "Technology Solutions for the Digital Age",
  intro:
    "Comprehensive technology solutions to help your business thrive in the digital age.",
  process: {
    eyebrow: "Our Process",
    title: "How We Work",
    intro:
      "Our proven methodology ensures successful outcomes for every project.",
    steps: [
      {
        title: "Discovery",
        description:
          "We begin by understanding your business goals, challenges, and requirements.",
      },
      {
        title: "Planning",
        description:
          "We develop a detailed roadmap and strategy tailored to your specific needs.",
      },
      {
        title: "Execution",
        description:
          "Our expert team implements the solution using agile methodologies.",
      },
      {
        title: "Support",
        description:
          "We provide ongoing maintenance, optimization, and support for your solution.",
      },
    ],
  },
  cta: {
    eyebrow: "Let’s Get Started",
    title: "Ready to Get Started?",
    description:
      "Contact us today to discuss how our services can help your business grow and thrive in the digital landscape.",
    action: "Get Started",
  },
} as const;

export const serviceList: readonly ServiceSummary[] = [
  {
    slug: "software-development",
    icon: "code",
    title: "Software Development",
    description:
      "Custom applications, web platforms, and mobile solutions built with cutting-edge technologies.",
    features: [
      "Custom Web Applications",
      "Mobile App Development",
      "Enterprise Software Solutions",
      "API Development & Integration",
      "UI/UX Design",
      "Legacy System Modernization",
    ],
  },
  {
    slug: "data-analytics",
    icon: "chart",
    title: "Data Analytics",
    description:
      "Transform raw data into actionable insights to drive business growth and innovation.",
    features: [
      "Business Intelligence",
      "Data Visualization",
      "Predictive Analytics",
      "Big Data Processing",
      "Machine Learning Models",
      "Data Strategy Consulting",
    ],
  },
  {
    slug: "support",
    icon: "headset",
    title: "Technical Support",
    description:
      "Comprehensive support services to ensure your systems run smoothly and efficiently.",
    features: [
      "24/7 Help Desk",
      "System Monitoring",
      "Troubleshooting",
      "Performance Optimization",
      "Security Audits",
      "Maintenance & Updates",
    ],
  },
  {
    slug: "consulting",
    icon: "briefcase",
    title: "IT Consulting",
    description:
      "Strategic guidance to help you make informed technology decisions and investments.",
    features: [
      "Technology Strategy",
      "Digital Transformation",
      "IT Infrastructure Planning",
      "Cloud Migration",
      "Security Assessment",
      "Process Optimization",
    ],
  },
  {
    slug: "training",
    icon: "graduation",
    title: "Training & Workshops",
    description:
      "Empower your team with the knowledge and skills they need to excel in the digital age.",
    features: [
      "Technical Skills Development",
      "Data Literacy Programs",
      "Agile Methodology Training",
      "DevOps Practices",
      "Custom Learning Paths",
      "Certification Preparation",
    ],
  },
];

export const serviceDetails: readonly ServiceDetail[] = [
  {
    slug: "software-development",
    label: "Software Development",
    title: "Custom Software Solutions for Your Business",
    intro:
      "We design and develop innovative, scalable software solutions tailored to your unique business needs and challenges.",
    primaryAction: "Get Started",
    secondaryAction: "View Our Work",
    expertise: {
      eyebrow: "Our Expertise",
      title: "Comprehensive Development Services",
      intro:
        "From concept to deployment, we provide end-to-end software development services to bring your vision to life.",
      items: [
        {
          icon: "globe",
          title: "Web Applications",
          description:
            "Custom web applications that deliver exceptional user experiences across all devices.",
          detail:
            "We build responsive, scalable web applications using modern frameworks and best practices to ensure optimal performance and maintainability.",
        },
        {
          icon: "smartphone",
          title: "Mobile Development",
          description:
            "Native and cross-platform mobile applications for iOS and Android platforms.",
          detail:
            "Our mobile development team creates intuitive, high-performance applications that provide seamless experiences across all devices.",
        },
        {
          icon: "layers",
          title: "Enterprise Solutions",
          description:
            "Robust, scalable enterprise software to streamline your business operations.",
          detail:
            "We develop custom enterprise solutions that integrate with your existing systems and processes to improve efficiency and productivity.",
        },
        {
          icon: "workflow",
          title: "API Development",
          description:
            "Secure, well-documented APIs that enable seamless integration between systems.",
          detail:
            "Our API development services help you connect disparate systems, extend functionality, and create new business opportunities through integration.",
        },
        {
          icon: "database",
          title: "Database Solutions",
          description:
            "Efficient data storage and management solutions for your business needs.",
          detail:
            "We design and implement database solutions that ensure data integrity, security, and performance, whether you need SQL or NoSQL databases.",
        },
        {
          icon: "refresh",
          title: "Legacy Modernization",
          description:
            "Transform outdated systems into modern, scalable applications.",
          detail:
            "We help you modernize legacy systems to improve performance, security, and user experience while preserving valuable business logic.",
        },
      ],
    },
    tabs: {
      eyebrow: "Technologies",
      title: "Our Tech Stack",
      intro:
        "We use the latest technologies and frameworks to build robust, scalable software solutions.",
      tabs: [
        {
          id: "frontend",
          label: "Frontend",
          icon: "globe",
          heading: "Frontend Development",
          description:
            "Modern, responsive user interfaces that provide exceptional user experiences.",
          items: [
            "React",
            "Next.js",
            "Vue.js",
            "Angular",
            "TypeScript",
            "Tailwind CSS",
          ],
        },
        {
          id: "backend",
          label: "Backend",
          icon: "server",
          heading: "Backend Development",
          description:
            "Robust, scalable server-side solutions that power your applications.",
          items: ["Node.js", "Python", "Java", "C#/.NET", "Go", "PHP"],
        },
        {
          id: "mobile",
          label: "Mobile",
          icon: "smartphone",
          heading: "Mobile Development",
          description:
            "Native and cross-platform mobile applications for iOS and Android.",
          items: [
            "React Native",
            "Flutter",
            "Swift",
            "Kotlin",
            "Xamarin",
            "Ionic",
          ],
        },
        {
          id: "database",
          label: "Database",
          icon: "database",
          heading: "Database Development",
          description:
            "Efficient data storage and management solutions for your business needs.",
          items: [
            "PostgreSQL",
            "MySQL",
            "MongoDB",
            "Firebase",
            "Redis",
            "SQL Server",
          ],
        },
        {
          id: "devops",
          label: "DevOps",
          icon: "settings",
          heading: "DevOps Development",
          description:
            "Streamlined development operations for faster, more reliable deployments.",
          items: ["Docker", "Kubernetes", "AWS", "Azure", "CI/CD", "Terraform"],
        },
        {
          id: "security",
          label: "Security",
          icon: "shield",
          heading: "Security Development",
          description:
            "Comprehensive security measures to protect your applications and data.",
          items: [
            "OAuth",
            "JWT",
            "Encryption",
            "Penetration Testing",
            "Security Audits",
            "Compliance",
          ],
        },
      ],
    },
    process: {
      eyebrow: "Our Process",
      title: "Development Methodology",
      intro:
        "Our proven development process ensures successful outcomes for every project.",
      steps: [
        {
          title: "Discovery & Planning",
          description:
            "We begin by understanding your business goals, target audience, and technical requirements. Our team works closely with you to define the scope, timeline, and budget for your project.",
        },
        {
          title: "Design & Architecture",
          description:
            "Our architects and designers create detailed technical specifications and user experience designs. We establish the technology stack, system architecture, and data models that will form the foundation of your solution.",
        },
        {
          title: "Development",
          description:
            "Using agile methodologies, our development team builds your solution in iterative sprints. This approach allows for regular feedback and adjustments throughout the development process.",
        },
        {
          title: "Testing & QA",
          description:
            "Our quality assurance team conducts thorough testing to ensure your software meets the highest standards of functionality, performance, security, and usability.",
        },
        {
          title: "Deployment",
          description:
            "We handle the deployment of your application to your preferred hosting environment, ensuring a smooth transition from development to production.",
        },
        {
          title: "Maintenance & Support",
          description:
            "Our relationship doesn't end at launch. We provide ongoing maintenance, updates, and support to ensure your software continues to perform optimally and evolves with your business needs.",
        },
      ],
    },
    benefits: {
      eyebrow: "Benefits",
      title: "Why Choose Devspire Studio",
      intro:
        "Partner with us for your software development needs and experience the Devspire Studio difference.",
      items: [
        {
          title: "Technical Excellence",
          description:
            "Our team of experienced developers follows industry best practices and coding standards to deliver high-quality, maintainable code.",
        },
        {
          title: "Agile Methodology",
          description:
            "We employ agile development practices to ensure flexibility, transparency, and regular delivery of working software throughout the project.",
        },
        {
          title: "User-Centered Design",
          description:
            "Our design approach focuses on creating intuitive, accessible interfaces that provide exceptional user experiences.",
        },
        {
          title: "Scalable Solutions",
          description:
            "We build software that can grow with your business, ensuring your investment continues to deliver value as your needs evolve.",
        },
        {
          title: "Security-First Approach",
          description:
            "Security is integrated throughout our development process, not added as an afterthought, to protect your data and systems.",
        },
        {
          title: "Ongoing Support",
          description:
            "Our relationship doesn't end at deployment. We provide comprehensive maintenance and support to ensure your software continues to perform optimally.",
        },
      ],
    },
    related: [
      "fintech-mobile-app-development",
      "healthcare-management-system",
      "ecommerce-platform-scaling",
    ],
    faq: {
      title: "Frequently Asked Questions",
      intro:
        "Find answers to common questions about our software development services.",
      items: [
        {
          question:
            "How long does a typical software development project take?",
          answer:
            "Project timelines vary based on complexity and scope. Simple applications might take 2-3 months, while enterprise solutions can take 6-12 months or more. During our discovery phase, we'll provide a detailed timeline for your specific project.",
        },

        {
          question:
            "Do you provide ongoing maintenance and support after launch?",
          answer:
            "Yes, we offer comprehensive maintenance and support services to ensure your software continues to perform optimally. Our support packages include bug fixes, security updates, performance optimization, and feature enhancements.",
        },
        {
          question:
            "How do you ensure the security of the applications you develop?",
          answer:
            "Security is integrated throughout our development process. We follow industry best practices for secure coding, conduct regular security audits and penetration testing, implement encryption for sensitive data, and stay updated on the latest security threats and mitigations.",
        },
        {
          question: "Can you work with our existing systems and technologies?",
          answer:
            "Yes, we have extensive experience integrating with existing systems and technologies. Whether you need to extend functionality, modernize legacy systems, or ensure seamless data flow between applications, our team can develop solutions that work with your current infrastructure.",
        },
      ],
    },
    cta: {
      title: "Ready to Start Your Project?",
      description:
        "Contact us today to discuss your software development needs and how we can help bring your vision to life.",
      action: "Start Your Project",
    },
  },
  {
    slug: "data-analytics",
    label: "Data Analytics",
    title: "Transform Data into Business Value",
    intro:
      "Unlock the power of your data with our comprehensive analytics solutions that drive informed decision-making and business growth.",
    primaryAction: "Get Started",
    secondaryAction: "View Our Work",
    expertise: {
      eyebrow: "Our Services",
      title: "Comprehensive Analytics Solutions",
      intro:
        "From data collection to actionable insights, we provide end-to-end analytics services tailored to your business needs.",
      items: [
        {
          icon: "chart",
          title: "Business Intelligence",
          description:
            "Transform raw data into actionable insights with interactive dashboards and reports.",
          points: [
            "Interactive dashboards",
            "Custom reporting",
            "KPI tracking",
            "Data visualization",
            "Real-time analytics",
          ],
        },
        {
          icon: "trending",
          title: "Predictive Analytics",
          description:
            "Forecast future trends and behaviors to make proactive business decisions.",
          points: [
            "Trend analysis",
            "Forecasting models",
            "Risk assessment",
            "Market prediction",
            "Scenario planning",
          ],
        },
        {
          icon: "database",
          title: "Big Data Processing",
          description:
            "Handle large volumes of data efficiently to extract valuable insights.",
          points: [
            "Data warehousing",
            "ETL processes",
            "Stream processing",
            "Data lake solutions",
            "Distributed computing",
          ],
        },
        {
          icon: "brain",
          title: "Machine Learning",
          description:
            "Implement AI-driven solutions to automate processes and enhance decision-making.",
          points: [
            "Classification models",
            "Clustering algorithms",
            "Recommendation systems",
            "Anomaly detection",
            "Natural language processing",
          ],
        },
        {
          icon: "pie",
          title: "Data Visualization",
          description:
            "Present complex data in intuitive visual formats for better understanding.",
          points: [
            "Interactive charts",
            "Geospatial mapping",
            "Real-time visualizations",
            "Custom dashboards",
            "Executive reporting",
          ],
        },
        {
          icon: "target",
          title: "Data Strategy Consulting",
          description:
            "Develop comprehensive data strategies aligned with your business objectives.",
          points: [
            "Data maturity assessment",
            "Roadmap development",
            "Technology selection",
            "Data governance",
            "ROI analysis",
          ],
        },
      ],
    },
    tabs: {
      eyebrow: "Technologies",
      title: "Our Analytics Stack",
      intro:
        "We leverage cutting-edge technologies and tools to deliver powerful analytics solutions.",
      tabs: [
        {
          id: "data-processing",
          label: "Data Processing",
          icon: "database",
          heading: "Data Processing",
          description:
            "Tools and platforms for efficient data processing and management.",
          items: [
            "Apache Spark",
            "Hadoop",
            "Kafka",
            "Snowflake",
            "AWS Glue",
            "Google BigQuery",
          ],
        },
        {
          id: "visualization",
          label: "Visualization",
          icon: "pie",
          heading: "Visualization",
          description:
            "Solutions for creating intuitive and interactive data visualizations.",
          items: [
            "Tableau",
            "Power BI",
            "D3.js",
            "Looker",
            "Grafana",
            "Kibana",
          ],
        },
        {
          id: "machine-learning",
          label: "Machine Learning",
          icon: "brain",
          heading: "Machine Learning",
          description:
            "Frameworks and libraries for implementing machine learning models.",
          items: [
            "TensorFlow",
            "PyTorch",
            "scikit-learn",
            "Keras",
            "H2O.ai",
            "NLTK",
          ],
        },
        {
          id: "cloud-platforms",
          label: "Cloud Platforms",
          icon: "cloud",
          heading: "Cloud Platforms",
          description: "Cloud-based solutions for scalable data analytics.",
          items: [
            "AWS",
            "Google Cloud",
            "Azure",
            "Databricks",
            "Snowflake",
            "IBM Cloud",
          ],
        },
      ],
    },
    process: {
      eyebrow: "Our Process",
      title: "Data Analytics Methodology",
      intro:
        "Our proven approach ensures we deliver valuable insights that drive business success.",
      steps: [
        {
          title: "Data Discovery",
          description:
            "We begin by understanding your business objectives and identifying the data sources that will help you achieve your goals. This includes assessing data quality, availability, and relevance.",
        },
        {
          title: "Data Collection & Integration",
          description:
            "We collect data from various sources and integrate it into a unified system. This may involve ETL (Extract, Transform, Load) processes, data cleansing, and normalization to ensure data quality and consistency.",
        },
        {
          title: "Data Processing & Analysis",
          description:
            "Using advanced analytics tools and techniques, we process and analyze your data to uncover patterns, trends, and insights. This may include statistical analysis, machine learning, and predictive modeling.",
        },
        {
          title: "Visualization & Reporting",
          description:
            "We transform complex data into intuitive visualizations and reports that make it easy to understand and act upon. Our dashboards provide real-time insights and enable data-driven decision-making.",
        },
        {
          title: "Implementation & Integration",
          description:
            "We implement analytics solutions that integrate seamlessly with your existing systems and workflows. This ensures that insights are accessible to the right people at the right time.",
        },
        {
          title: "Continuous Improvement",
          description:
            "Data analytics is an ongoing process. We continuously monitor and refine our solutions to ensure they remain aligned with your evolving business needs and deliver maximum value.",
        },
      ],
    },
    benefits: {
      eyebrow: "Benefits",
      title: "Why Choose Our Data Analytics Services",
      intro:
        "Discover how our data analytics solutions can transform your business.",
      items: [
        {
          title: "Data-Driven Decisions",
          description:
            "Replace gut feelings with data-backed insights to make more informed business decisions that drive growth and efficiency.",
        },
        {
          title: "Competitive Advantage",
          description:
            "Stay ahead of the competition by leveraging data to identify market trends, customer preferences, and business opportunities.",
        },
        {
          title: "Operational Efficiency",
          description:
            "Identify bottlenecks and inefficiencies in your operations to streamline processes and reduce costs.",
        },
        {
          title: "Enhanced Customer Experience",
          description:
            "Understand customer behavior and preferences to deliver personalized experiences that increase satisfaction and loyalty.",
        },
        {
          title: "Risk Mitigation",
          description:
            "Identify potential risks and develop strategies to mitigate them before they impact your business.",
        },
        {
          title: "Scalable Solutions",
          description:
            "Our analytics solutions grow with your business, ensuring you always have the insights you need to succeed.",
        },
      ],
    },
    related: [
      "retail-analytics-transformation",
      "predictive-demand-forecasting",
      "manufacturing-efficiency-optimization",
    ],
    faq: {
      title: "Frequently Asked Questions",
      intro:
        "Find answers to common questions about our data analytics services.",
      items: [
        {
          question: "How can data analytics benefit my business?",
          answer:
            "Data analytics can help you make more informed decisions, identify new business opportunities, optimize operations, enhance customer experiences, and gain a competitive advantage. By transforming raw data into actionable insights, you can drive growth, efficiency, and innovation across your organization.",
        },
        {
          question: "What types of data can you analyze?",
          answer:
            "We can analyze virtually any type of data, including structured data (e.g., databases, spreadsheets), unstructured data (e.g., text, images, videos), and semi-structured data (e.g., JSON, XML). Our team has experience working with customer data, operational data, financial data, market data, social media data, and more.",
        },
        {
          question:
            "How long does it take to implement a data analytics solution?",
          answer:
            "The timeline varies depending on the complexity of your data, the scope of the project, and your specific requirements. Simple analytics dashboards might take a few weeks, while comprehensive enterprise solutions could take several months. During our initial consultation, we'll provide a detailed timeline for your specific project.",
        },
        {
          question: "How do you ensure data security and privacy?",
          answer:
            "We take data security and privacy very seriously. We implement robust security measures, including encryption, access controls, and secure data storage. We also ensure compliance with relevant data protection regulations such as GDPR, CCPA, and HIPAA. Our team follows industry best practices for data handling and governance.",
        },
        {
          question:
            "Do I need to have technical expertise to use your analytics solutions?",
          answer:
            "No, our solutions are designed to be user-friendly and accessible to non-technical users. We provide intuitive dashboards and reports that make it easy to understand and act upon insights. We also offer training and support to ensure your team can effectively use our solutions. For more advanced users, we can provide additional capabilities and customization options.",
        },
      ],
    },
    cta: {
      title: "Ready to Unlock the Power of Your Data?",
      description:
        "Contact us today to discuss how our data analytics services can help you make better decisions and drive business growth.",
      action: "Get Started with Analytics",
    },
  },
  {
    slug: "support",
    label: "Technical Support",
    title: "Reliable Support for Your Critical Systems",
    intro:
      "Comprehensive technical support services to ensure your software and systems run smoothly, securely, and efficiently.",
    primaryAction: "Get Support",
    // secondaryAction: "View Support Plans",
    expertise: {
      eyebrow: "Our Services",
      title: "Comprehensive Support Solutions",
      intro:
        "From routine maintenance to emergency troubleshooting, we provide end-to-end support for all your technical needs.",
      items: [
        {
          icon: "headset",
          title: "24/7 Help Desk",
          description:
            "Round-the-clock technical support for all your software and systems.",
          points: [
            "Always available support",
            "Multi-channel communication",
            "Rapid response times",
            "Ticket tracking system",
            "Escalation management",
          ],
        },
        {
          icon: "monitor",
          title: "System Monitoring",
          description:
            "Proactive monitoring to identify and resolve issues before they impact your business.",
          points: [
            "Real-time performance tracking",
            "Automated alerts",
            "Resource utilization analysis",
            "Uptime guarantees",
            "Detailed reporting",
          ],
        },
        {
          icon: "wrench",
          title: "Troubleshooting",
          description:
            "Expert diagnosis and resolution of technical issues across your IT infrastructure.",
          points: [
            "Root cause analysis",
            "Quick issue resolution",
            "System recovery",
            "Error prevention",
            "Documentation of solutions",
          ],
        },
        {
          icon: "zap",
          title: "Performance Optimization",
          description:
            "Fine-tune your systems for maximum efficiency and performance.",
          points: [
            "Performance benchmarking",
            "System tuning",
            "Resource optimization",
            "Bottleneck identification",
            "Scalability planning",
          ],
        },
        {
          icon: "shield",
          title: "Security Audits",
          description:
            "Comprehensive security assessments to protect your systems and data.",
          points: [
            "Vulnerability scanning",
            "Security compliance checks",
            "Penetration testing",
            "Security patch management",
            "Risk assessment",
          ],
        },
        {
          icon: "settings",
          title: "Maintenance & Updates",
          description:
            "Regular maintenance and updates to keep your systems running smoothly.",
          points: [
            "Scheduled maintenance",
            "Software updates",
            "Patch management",
            "System backups",
            "Disaster recovery planning",
          ],
        },
      ],
    },
    process: {
      eyebrow: "Our Process",
      title: "How We Support You",
      intro:
        "Our structured approach ensures efficient resolution of issues and continuous improvement of your systems.",
      steps: [
        {
          title: "Incident Detection",
          description:
            "Issues are identified through monitoring alerts or support requests.",
        },
        {
          title: "Triage & Assignment",
          description:
            "Issues are prioritized and assigned to the appropriate specialist.",
        },
        {
          title: "Resolution",
          description:
            "Our experts diagnose and resolve the issue efficiently.",
        },
        {
          title: "Prevention",
          description:
            "We implement measures to prevent similar issues in the future.",
        },
      ],
    },
    benefits: {
      eyebrow: "Benefits",
      title: "Why Choose Our Technical Support",
      intro:
        "Discover how our support services can help your business operate more efficiently and securely.",
      items: [
        {
          title: "Minimize Downtime",
          description:
            "Our proactive monitoring and rapid response times help minimize system downtime, ensuring your business operations continue without interruption.",
        },
        {
          title: "Enhanced Security",
          description:
            "Regular security audits and updates protect your systems from threats and vulnerabilities, safeguarding your valuable data and maintaining customer trust.",
        },
        {
          title: "Optimized Performance",
          description:
            "Regular maintenance and performance tuning ensure your systems operate at peak efficiency, improving user experience and productivity.",
        },
        {
          title: "Expert Support",
          description:
            "Our team of certified technical specialists has the knowledge and experience to resolve complex issues quickly and effectively.",
        },
        {
          title: "Predictable Costs",
          description:
            "Our support plans provide fixed monthly costs, making it easier to budget for IT support and avoiding unexpected expenses.",
        },
        {
          title: "Focus on Your Business",
          description:
            "By handling your technical support needs, we free up your team to focus on core business activities and strategic initiatives.",
        },
      ],
    },
    related: [
      "ecommerce-platform-scaling",
      "cloud-migration-financial-institution",
    ],
    faq: {
      title: "Frequently Asked Questions",
      intro:
        "Find answers to common questions about our technical support services.",
      items: [
        {
          question: "What are your support hours?",
          answer:
            "Our support hours vary by plan. Basic plans include business hours support (9am-5pm), Professional plans include extended hours (7am-9pm), and Enterprise plans include 24/7/365 support coverage. All times are in your local time zone unless otherwise specified.",
        },
        {
          question: "How quickly will you respond to support requests?",
          answer:
            "Response times depend on your support plan and the severity of the issue. Critical issues receive the fastest response. Basic plans have a 4-hour response time, Professional plans have a 2-hour response time, and Enterprise plans guarantee a 1-hour response time for all issues.",
        },
        {
          question: "What types of systems and software do you support?",
          answer:
            "We support a wide range of systems and software, including custom applications, commercial off-the-shelf software, cloud platforms, databases, networks, and infrastructure. During onboarding, we'll create a detailed inventory of your systems to ensure comprehensive coverage.",
        },
        {
          question: "Can you support our legacy systems?",
          answer:
            "Yes, we specialize in supporting both modern and legacy systems. Our team has experience with a wide range of technologies and can help maintain older systems while also assisting with modernization efforts when you're ready to upgrade.",
        },
        {
          question: "How do we submit support requests?",
          answer:
            "Support requests can be submitted through multiple channels, including our customer portal, email, phone, and for Enterprise clients, a dedicated Slack channel. All requests are tracked in our system, and you'll receive regular updates on the status of your request.",
        },
      ],
    },
    cta: {
      title: "Ready for Reliable Technical Support?",
      description:
        "Contact us today to discuss your support needs and how we can help keep your systems running smoothly.",
      action: "Get Support",
    },
  },
  {
    slug: "consulting",
    label: "IT Consulting",
    title: "Strategic Technology Guidance",
    intro:
      "Expert advice to help you make informed technology decisions, optimize your IT investments, and drive business growth through digital innovation.",
    primaryAction: "Get Started",
    secondaryAction: "View Success Stories",
    expertise: {
      eyebrow: "Our Services",
      title: "Comprehensive Consulting Solutions",
      intro:
        "Strategic guidance to help you navigate the complex technology landscape and make informed decisions.",
      items: [
        {
          icon: "target",
          title: "Technology Strategy",
          description:
            "Develop a comprehensive technology roadmap aligned with your business objectives.",
          points: [
            "IT strategy development",
            "Technology roadmapping",
            "Digital transformation planning",
            "IT governance frameworks",
            "Technology investment planning",
          ],
        },
        {
          icon: "refresh",
          title: "Digital Transformation",
          description:
            "Navigate the journey to becoming a digitally-enabled organization.",
          points: [
            "Digital maturity assessment",
            "Transformation roadmap",
            "Change management",
            "Process digitization",
            "Digital culture development",
          ],
        },
        {
          icon: "layers",
          title: "IT Infrastructure Planning",
          description:
            "Design scalable, resilient infrastructure to support your business needs.",
          points: [
            "Infrastructure assessment",
            "Architecture design",
            "Capacity planning",
            "Disaster recovery planning",
            "Infrastructure roadmap",
          ],
        },
        {
          icon: "cloud",
          title: "Cloud Migration",
          description:
            "Strategically move your applications and data to the cloud for improved agility.",
          points: [
            "Cloud readiness assessment",
            "Migration strategy",
            "Cloud architecture design",
            "Vendor selection",
            "Implementation planning",
          ],
        },
        {
          icon: "shield",
          title: "Security Assessment",
          description:
            "Identify and address security vulnerabilities in your systems and processes.",
          points: [
            "Security audit",
            "Risk assessment",
            "Compliance evaluation",
            "Security architecture review",
            "Incident response planning",
          ],
        },
        {
          icon: "settings",
          title: "Process Optimization",
          description:
            "Streamline operations and improve efficiency through process improvement.",
          points: [
            "Process mapping",
            "Efficiency analysis",
            "Automation opportunities",
            "Workflow redesign",
            "Performance metrics",
          ],
        },
      ],
    },
    process: {
      eyebrow: "Our Approach",
      title: "How We Work",
      intro:
        "Our structured consulting methodology ensures we deliver actionable insights and tangible results.",
      steps: [
        {
          title: "Discovery",
          description:
            "We begin by understanding your business objectives, challenges, and current technology landscape through interviews, workshops, and analysis of existing systems and processes.",
        },
        {
          title: "Assessment",
          description:
            "Our experts conduct a thorough assessment of your current state, identifying strengths, weaknesses, opportunities, and threats in your technology ecosystem.",
        },
        {
          title: "Strategy Development",
          description:
            "Based on our findings, we develop a tailored strategy and roadmap that aligns technology initiatives with your business goals and provides a clear path forward.",
        },
        {
          title: "Recommendations",
          description:
            "We provide detailed, actionable recommendations for technology investments, process improvements, and organizational changes to achieve your desired outcomes.",
        },
        {
          title: "Implementation Support",
          description:
            "Our team can assist with implementing recommendations, providing project management, technical expertise, and change management support to ensure successful execution.",
        },
        {
          title: "Continuous Improvement",
          description:
            "We establish metrics and feedback mechanisms to measure progress, identify areas for improvement, and adapt the strategy as business needs evolve.",
        },
      ],
    },
    benefits: {
      eyebrow: "Benefits",
      title: "Why Choose Our Consulting Services",
      intro:
        "Discover how our strategic guidance can transform your technology investments and drive business growth.",
      items: [
        {
          title: "Strategic Alignment",
          description:
            "Ensure your technology investments are aligned with your business objectives, maximizing ROI and supporting growth.",
        },
        {
          title: "Risk Mitigation",
          description:
            "Identify and address potential risks before they impact your business, ensuring smoother implementation of technology initiatives.",
        },
        {
          title: "Cost Optimization",
          description:
            "Optimize your technology spending by identifying inefficiencies, consolidating systems, and prioritizing investments for maximum impact.",
        },
        {
          title: "Competitive Advantage",
          description:
            "Leverage technology as a strategic differentiator to gain a competitive edge in your market and respond quickly to changing conditions.",
        },
        {
          title: "Expert Guidance",
          description:
            "Access specialized knowledge and experience from consultants who have helped numerous organizations navigate similar challenges.",
        },
        {
          title: "Accelerated Transformation",
          description:
            "Speed up your digital transformation journey with proven methodologies and frameworks that reduce time to value.",
        },
      ],
    },
    industries: {
      eyebrow: "Industries",
      title: "Industry Expertise",
      intro:
        "We have deep experience across a wide range of industries, providing tailored consulting solutions for each sector's unique challenges.",
      items: [
        {
          name: "Retail",
          description:
            "Digital transformation, omnichannel strategies, customer experience",
        },
        {
          name: "Finance",
          description:
            "Security compliance, digital banking, fintech integration",
        },
        {
          name: "Healthcare",
          description: "Telehealth, patient experience, regulatory compliance",
        },
        {
          name: "Manufacturing",
          description: "Industry 4.0, IoT, supply chain optimization",
        },
        {
          name: "Technology",
          description: "Product strategy, scaling, go-to-market",
        },
        {
          name: "Education",
          description: "EdTech, digital learning, student experience",
        },
      ],
    },
    related: [
      "cloud-migration-financial-institution",
      "manufacturing-efficiency-optimization",
    ],
    faq: {
      title: "Frequently Asked Questions",
      intro:
        "Find answers to common questions about our IT consulting services.",
      items: [
        {
          question: "How long does a typical consulting engagement last?",
          answer:
            "The duration varies based on the scope and complexity of the project. Strategy development typically takes 4-8 weeks, while larger digital transformation initiatives may span several months. We offer both short-term assessments and long-term advisory relationships based on your needs.",
        },
        {
          question: "What is your consulting methodology?",
          answer:
            "Our methodology combines industry best practices with a tailored approach for each client. We focus on understanding your business objectives first, then conduct thorough assessments, develop strategic recommendations, and provide implementation support. Throughout the process, we emphasize knowledge transfer to ensure your team can sustain and build upon our work.",
        },
        {
          question: "How do you measure the success of consulting engagements?",
          answer:
            "We establish clear, measurable objectives at the beginning of each engagement and track progress against these metrics. Depending on the project, success metrics might include cost savings, revenue growth, improved operational efficiency, enhanced customer satisfaction, or successful technology implementation. We provide regular reports on these metrics throughout the engagement.",
        },
        {
          question:
            "Do you provide implementation support or just recommendations?",
          answer:
            "We offer both strategic recommendations and implementation support. Many clients engage us for the full lifecycle, from strategy development through implementation and beyond. Our team can provide project management, change management, and technical expertise to ensure successful execution of our recommendations.",
        },
        {
          question:
            "How do you stay current with rapidly evolving technologies?",
          answer:
            "Our consultants continuously update their knowledge through ongoing education, industry certifications, and participation in technology communities. We also maintain partnerships with leading technology providers and research organizations to stay informed about emerging trends and best practices. This ensures our recommendations incorporate the latest innovations while remaining practical and proven.",
        },
      ],
    },
    cta: {
      title: "Ready to Transform Your Technology?",
      description:
        "Contact us today to discuss how our consulting services can help you make informed technology decisions and drive business growth.",
      action: "Schedule a Consultation",
    },
  },
  {
    slug: "training",
    label: "Training & Workshops",
    title: "Empower Your Team with Essential Skills",
    intro:
      "Comprehensive training programs designed to enhance your team's technical capabilities and drive innovation in the digital age.",
    primaryAction: "Explore Training Options",
    secondaryAction: "View Success Stories",
    expertise: {
      eyebrow: "Our Programs",
      title: "Comprehensive Training Solutions",
      intro:
        "From technical skills to leadership development, we offer a wide range of training programs to meet your team's needs.",
      items: [
        {
          icon: "code",
          title: "Technical Skills Development",
          description:
            "Enhance your team's technical capabilities with hands-on, practical training.",
          points: [
            "Programming languages",
            "Web development",
            "Mobile development",
            "Cloud technologies",
            "DevOps practices",
          ],
        },
        {
          icon: "chart",
          title: "Data Literacy Programs",
          description:
            "Build data-driven decision making capabilities across your organization.",
          points: [
            "Data analysis fundamentals",
            "Business intelligence tools",
            "Data visualization",
            "Statistical analysis",
            "Machine learning basics",
          ],
        },
        {
          icon: "workflow",
          title: "Agile Methodology Training",
          description:
            "Transform how your teams collaborate and deliver value.",
          points: [
            "Scrum framework",
            "Kanban method",
            "Agile leadership",
            "Sprint planning",
            "Continuous improvement",
          ],
        },
        {
          icon: "settings",
          title: "DevOps Practices",
          description:
            "Bridge the gap between development and operations for faster delivery.",
          points: [
            "CI/CD pipelines",
            "Infrastructure as code",
            "Containerization",
            "Microservices architecture",
            "Monitoring and observability",
          ],
        },
        {
          icon: "map",
          title: "Custom Learning Paths",
          description:
            "Tailored training programs designed for your specific business needs.",
          points: [
            "Skills gap analysis",
            "Personalized curricula",
            "Role-based learning",
            "Project-based training",
            "Progress tracking",
          ],
        },
        {
          icon: "award",
          title: "Certification Preparation",
          description:
            "Prepare your team for industry-recognized certifications.",
          points: [
            "AWS certifications",
            "Microsoft certifications",
            "Google Cloud certifications",
            "Agile certifications",
            "Security certifications",
          ],
        },
      ],
    },
    tabs: {
      eyebrow: "Training Formats",
      title: "Flexible Learning Options",
      intro:
        "We offer multiple training formats to accommodate different learning styles and organizational needs.",
      tabs: [
        {
          id: "instructor-led",
          label: "Instructor-Led",
          icon: "users",
          heading: "Instructor-Led Training",
          description:
            "Live, interactive training sessions led by expert instructors.",
          items: [
            "Real-time interaction",
            "Personalized attention",
            "Immediate feedback",
            "Collaborative learning",
            "Customized pace",
            "Hands-on exercises",
          ],
        },
        {
          id: "self-paced",
          label: "Self-Paced",
          icon: "laptop",
          heading: "Self-Paced Training",
          description:
            "Flexible online courses that participants can complete on their own schedule.",
          items: [
            "Learn at your own pace",
            "24/7 access",
            "Repeat difficult sections",
            "No scheduling conflicts",
            "Cost-effective",
            "Consistent content delivery",
          ],
        },
        {
          id: "blended",
          label: "Blended",
          icon: "layers",
          heading: "Blended Training",
          description:
            "Combination of instructor-led sessions and self-paced learning materials.",
          items: [
            "Best of both worlds",
            "Reinforced learning",
            "Reduced time away from work",
            "Varied learning styles",
            "Community support",
            "Practical application",
          ],
        },
        {
          id: "workshops",
          label: "Workshops",
          icon: "presentation",
          heading: "Workshops Training",
          description:
            "Intensive, hands-on sessions focused on specific skills or projects.",
          items: [
            "Immersive experience",
            "Project-based learning",
            "Team building",
            "Immediate application",
            "Expert guidance",
            "Collaborative problem-solving",
          ],
        },
      ],
    },
    process: {
      eyebrow: "Our Process",
      title: "How We Deliver Training",
      intro:
        "Our structured approach ensures training programs that deliver measurable results.",
      steps: [
        {
          title: "Needs Assessment",
          description:
            "We identify your team's specific skill gaps and learning objectives.",
        },
        {
          title: "Custom Curriculum",
          description:
            "We design tailored training materials and exercises for your team.",
        },
        {
          title: "Delivery",
          description:
            "Expert instructors deliver engaging, interactive training sessions.",
        },
        {
          title: "Evaluation & Follow-up",
          description:
            "We measure results and provide resources for continued learning.",
        },
      ],
    },
    benefits: {
      eyebrow: "Benefits",
      title: "Why Invest in Training",
      intro:
        "Discover how our training programs can transform your team's capabilities and drive business success.",
      items: [
        {
          title: "Enhanced Productivity",
          description:
            "Well-trained employees work more efficiently, make fewer mistakes, and deliver higher quality results.",
        },
        {
          title: "Increased Innovation",
          description:
            "Training exposes your team to new ideas and technologies, fostering a culture of innovation and continuous improvement.",
        },
        {
          title: "Improved Retention",
          description:
            "Investing in employee development demonstrates your commitment to their growth, increasing job satisfaction and retention.",
        },
        {
          title: "Competitive Advantage",
          description:
            "A skilled workforce enables your organization to adapt quickly to market changes and stay ahead of competitors.",
        },
        {
          title: "Reduced Skill Gaps",
          description:
            "Targeted training programs address specific skill gaps in your organization, reducing dependency on external resources.",
        },
        {
          title: "Future-Ready Teams",
          description:
            "Continuous learning prepares your team for future challenges and technological advancements in your industry.",
        },
      ],
    },
    related: [],
    faq: {
      title: "Frequently Asked Questions",
      intro: "Find answers to common questions about our training programs.",
      items: [
        {
          question:
            "How are training programs customized for our organization?",
          answer:
            "We begin with a thorough needs assessment to understand your team's current skills, goals, and challenges. Based on this assessment, we develop customized training materials that incorporate your specific use cases, technologies, and business context. Throughout the program, we adjust content and pace based on participant feedback and progress.",
        },
        {
          question: "How many people can participate in a training session?",
          answer:
            "For instructor-led training, we typically recommend 8-15 participants per session to ensure everyone receives adequate attention and has opportunities to participate. For workshops and hands-on sessions, smaller groups of 5-10 are ideal. For larger organizations, we can run multiple sessions or design custom programs that combine large-group presentations with smaller breakout sessions.",
        },
        {
          question: "Do you provide training materials for participants?",
          answer:
            "Yes, all participants receive comprehensive training materials including presentation slides, exercise files, reference guides, and additional resources for continued learning. These materials are provided in digital format and, if requested, in print. Participants also gain access to our learning portal where they can review materials and access additional resources after the training.",
        },
        {
          question:
            "How do you measure the effectiveness of training programs?",
          answer:
            "We use a multi-level evaluation approach that includes participant satisfaction surveys, knowledge assessments, skill demonstrations, and follow-up evaluations to measure application of skills in the workplace. For more comprehensive programs, we work with you to establish key performance indicators (KPIs) that align with your business objectives and measure improvements in these areas over time.",
        },
        {
          question: "Can training be conducted at our location?",
          answer:
            "Yes, we offer on-site training at your location, which can be more convenient for larger teams and allows training to be conducted in your actual work environment. We also provide virtual instructor-led training for distributed teams and hybrid options that combine in-person and virtual elements. Our team will work with you to determine the best delivery method based on your team's needs and location.",
        },
      ],
    },
    cta: {
      title: "Ready to Upskill Your Team?",
      description:
        "Contact us today to discuss your training needs and how we can help your team develop the skills they need to excel.",
      action: "Schedule Training",
    },
  },
];

export const advantages = [
  {
    icon: "zap",
    title: "Rapid Delivery",
    description:
      "We employ agile methodologies to deliver high-quality solutions quickly and efficiently.",
  },
  {
    icon: "chart",
    title: "Data-Driven Approach",
    description:
      "Our solutions are backed by comprehensive data analysis and research to ensure optimal results.",
  },
  {
    icon: "headphones",
    title: "24/7 Support",
    description:
      "Our dedicated support team is always available to address your concerns and provide assistance.",
  },
] as const;

export const testimonials = [
  {
    quote:
      "Devspire Studio built a powerful real estate marketplace that makes it easier for investors, developers, and buyers to securely connect and trade property opportunities. Their team delivered an impressive platform that meets our business needs.",
    name: "Mark H Kole",
    role: "Chief Executive Officer (CEO) & Founder at Property Hub Exchange, Inc",
    avatar: {
      src: "/mark-kole.jpeg",
      alt: "Portrait of Mark H Kole",
    },
  },
  {
    quote:
      "Devspire Studio delivered a reliable analytics platform that has significantly improved how we understand our operations and make business decisions. Their solution has added real value to our organization, and their team was excellent to work with.",
    name: "Michael Chen",
    role: "Operations Director, GlobalTech",
    avatar: {
      src: "/placeholder-avatar.png",
      alt: "Portrait of Michael Chen",
    },
  },
] as const;

export const stats = [
  { value: "120+", label: "Projects Delivered" },
  { value: "40+", label: "Global Clients" },
  { value: "15+", label: "Countries Served" },
  { value: "98%", label: "Client Retention" },
] as const;

/**
 * Social profiles shown in the header utility bar and the footer. Add one entry
 * per account; `icon` must match a key in `brand-icon.tsx`. Empty until the
 * studio's own profiles exist, so the site never links to dead accounts.
 */
export const socials: readonly {
  label: string;
  href: string;
  icon: string;
}[] = [];

export type PrivacySection = {
  /** Stable anchor id, targeted by the on-page contents list. */
  id: string;
  title: string;
  paragraphs?: readonly string[];
  /** Bulleted list rendered below the paragraphs, e.g. categories of data. */
  points?: readonly string[];
};

/**
 * Full privacy policy copy. Each entry becomes one numbered section on
 * `/privacy-policy` with the `id` used as its anchor.
 */
export const privacySections: readonly PrivacySection[] = [
  {
    id: "who-we-are",
    title: "Who We Are",
    paragraphs: [
      "Devspire Studio is a software development, cloud engineering and data analytics company based in Dhaka, Bangladesh. We are the data controller for the personal information described in this policy, which means we decide why and how it is processed.",
      "This policy covers our website and the everyday business of running an engineering company. Where we process client data on behalf of a client — for example inside an application we build and operate for them — we act as a data processor and that client's own privacy notice applies to the data.",
    ],
  },
  {
    id: "information-you-give-us",
    title: "Information You Give Us",
    paragraphs: [
      "We collect the information you choose to share with us when you contact us, apply for a role or become a client or supplier:",
    ],
    points: [
      "Your name, email address, phone number and company when you complete our contact form or email us.",
      "The contents of your enquiry, including any project brief, specification or document you attach.",
      "Job application details — your CV, work history and the role you are applying for.",
      "Billing and contract details for clients and suppliers, such as a business address and tax registration number.",
      "Records of our correspondence and of meetings, calls and demos we hold with you.",
      "We do not ask for special category data such as health, religious or biometric information, and we ask that you do not send it to us through the contact form.",
    ],
  },
  {
    id: "information-collected-automatically",
    title: "Information Collected Automatically",
    paragraphs: [
      "Like most websites, our servers record limited technical information when you visit, and we receive information from clients and partners while delivering an engagement:",
    ],
    points: [
      "Technical data such as your IP address, browser and device type, operating system, referring page and the pages you view on our site.",
      "Security data such as the time of your request and any rate-limiting or abuse signals, used to keep the site available and safe.",
      "Engagement data our clients share with us so that we can build, support and improve the software we run for them.",
    ],
  },
  {
    id: "how-we-use-information",
    title: "How We Use Your Information",
    paragraphs: [
      "We use personal information only where we have a clear business reason to do so:",
    ],
    points: [
      "To reply to your enquiry, prepare a proposal and take the steps needed to enter into a contract with you.",
      "To deliver, support and maintain the software and analytics services we have agreed to provide.",
      "To assess job applications and to contact candidates about their application and future roles.",
      "To send invoices, keep our accounting records and meet tax and audit obligations.",
      "To keep the website secure and working, including rate limiting, abuse prevention and troubleshooting errors.",
      "To improve our services by understanding which pages and content are useful to visitors.",
      "To tell you about services and updates we think are relevant, but only where you have asked to hear from us. You can unsubscribe at any time using the link in the email or by contacting us.",
    ],
  },
  {
    id: "legal-basis",
    title: "Our Legal Basis for Processing",
    paragraphs: [
      "Where data protection law requires us to identify a legal basis, we rely on the following:",
    ],
    points: [
      "Contract — to provide services you or your employer have engaged us for, and to take steps before signing a contract.",
      "Legitimate interests — to reply to business enquiries, secure our systems and run our company, balanced against your rights and expectations.",
      "Legal obligation — to keep accounting, tax and compliance records for the periods the law requires.",
      "Consent — for marketing emails and any optional analytics that are not strictly necessary. You may withdraw consent at any time without affecting the service you receive.",
    ],
  },
  {
    id: "cookies-and-analytics",
    title: "Cookies and Analytics",
    paragraphs: [
      "Our website uses only the cookies needed to keep it working, such as remembering your cookie preference. We do not sell advertising space and we do not run third-party advertising trackers.",
      "If we use analytics to understand how the site is used, we prefer aggregated and privacy-respecting measurement, and we will ask for your consent first where the law requires it. You can also block or delete cookies in your browser settings — the site will keep working, but some preferences may not be remembered.",
    ],
  },
  {
    id: "sharing-information",
    title: "When We Share Information",
    paragraphs: [
      "We do not sell, rent or trade personal information. We share it only with the people and companies needed to run our business and deliver your project:",
    ],
    points: [
      "Service providers — hosting, email delivery, invoicing, analytics and support tools, each bound by contract to protect the data and to use it only for us.",
      "Project partners and subcontractors — specialist engineers or designers working on your engagement, only to the extent your project requires.",
      "Professional advisers — our accountants, insurers and lawyers, where they need the information to advise us.",
      "Authorities — where we are legally required to disclose information, or where disclosure is necessary to protect the rights and safety of Devspire Studio, our clients or the public.",
      "A successor organisation — if our business is ever merged or sold, the information may transfer as part of that transaction, and we will tell you and outline your choices before that happens.",
    ],
  },
  {
    id: "data-retention",
    title: "How Long We Keep Information",
    paragraphs: [
      "We keep personal information only as long as we need it for the purpose it was collected for, then delete or anonymise it.",
      "Contact enquiries that do not become projects are usually deleted within 24 months. Project and client records are kept for the life of the engagement plus the statutory accounting period. Job applications are kept for six months unless you ask us to hold them longer. Technical and security logs are kept for a short rolling window, typically 90 days.",
    ],
  },
  {
    id: "security",
    title: "How We Protect Information",
    paragraphs: [
      "We treat security as part of engineering, not an afterthought. Measures include encrypted transport for our website and email, encrypted storage of backups, least-privilege access to systems, role-based permissions inside client environments, monitoring and alerting on production systems, and a written incident response plan.",
      "No method of transmission or storage is completely secure, so we cannot guarantee absolute security. If a breach ever affects your personal information, we will notify you and the relevant regulator without undue delay where the law requires it.",
    ],
  },
  {
    id: "international-transfers",
    title: "International Transfers",
    paragraphs: [
      "Our team is based in Dhaka and we serve clients around the world, so information may be processed in a country other than your own, including on cloud infrastructure that stores data in several regions. When we transfer personal information internationally, we use providers with suitable contractual safeguards and we keep transfers to the minimum the service requires.",
    ],
  },
  {
    id: "your-rights",
    title: "Your Rights",
    paragraphs: [
      "Depending on where you live, you may have the following rights over the personal information we hold about you:",
    ],
    points: [
      "Access — ask for a copy of the information we hold about you and an explanation of how we use it.",
      "Correction — ask us to fix information that is inaccurate or incomplete.",
      "Erasure — ask us to delete information we no longer need, where there is no legal or contractual reason for us to keep it.",
      "Restriction and objection — ask us to pause a particular use, or object to processing based on our legitimate interests.",
      "Portability — ask for the information you gave us in a structured, commonly used, machine-readable format.",
      "Withdraw consent — opt out of marketing at any time, without affecting the services you already receive.",
      "To exercise any of these rights, email us and tell us what you would like. We may ask you to confirm your identity first, and we will respond within 30 days. If you are not satisfied with our answer, you may complain to the data protection authority in your country — and if you are in Bangladesh, we will help you find the right channel.",
    ],
  },
  {
    id: "children",
    title: "Children's Privacy",
    paragraphs: [
      "Our website and services are meant for businesses and professional audiences, and they are not directed to children. We do not knowingly collect personal information from anyone under 16. If you believe a child has sent us personal information, contact us and we will delete it.",
    ],
  },
  {
    id: "changes",
    title: "Changes to This Policy",
    paragraphs: [
      "We review this policy from time to time and update it when our tools, services or legal obligations change. The date at the top of this page always shows the current version, and material changes will be highlighted on the website or emailed to clients who have engaged us directly. Continuing to use our website after an update means you accept the revised policy.",
    ],
  },
];

/** Legal footer link; kept next to the policy copy so the two cannot drift apart. */
export const privacyPolicy = {
  label: "Privacy Policy",
  href: "/privacy-policy",
  eyebrow: "Legal",
  title: "Privacy Policy",
  intro:
    "How Devspire Studio collects, uses and protects personal information when you visit our website, contact us or work with us as a client, supplier or candidate.",
  summary:
    "How Devspire Studio collects, uses, shares and protects personal information, and the rights you have over the data we hold about you.",
  lastUpdatedLabel: "Last updated",
  lastUpdated: "7 October 2026",
  contact: {
    title: "Questions About This Policy",
    description:
      "If you have a question about this policy, want a copy of the personal information we hold about you, or want us to correct or delete it, contact us and we will respond within 30 days.",
    action: "Contact Our Team",
  },
  sections: privacySections,
} as const;

export type ProjectFact = {
  value: string;
  label: string;
};

export type Project = {
  /** Stable anchor id, targeted by the hero's jump links. */
  slug: string;
  name: string;
  /** Two-letter monogram shown on the preview panel. */
  monogram: string;
  /** Short category line, rendered next to the project number. */
  category: string;
  /** Domain shown on the preview panel and in the external link title. */
  domain: string;
  /** Live product, opened in a new tab. */
  href: string;
  image: { src: string; alt: string };
  /** Opening paragraphs shown beside the preview panel. */
  overview: readonly string[];
  /** What the platform does, one bullet per capability. */
  highlights: readonly string[];
  facts: readonly ProjectFact[];
};

/** The two flagship platforms featured on `/projects`. */
export const projectShowcase: readonly Project[] = [
  {
    slug: "property-source",
    name: "Property Source",
    monogram: "PS",
    category: "Global Real Estate Marketplace",
    domain: "app.propertysource.app",
    href: "https://app.propertysource.app/",
    image: {
      src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&h=800&q=80",
      alt: "Modern suburban house with a driveway and front garden",
    },
    overview: [
      "Property Source is a real estate technology brand we built end to end: a global off-market marketplace that gives investors, flippers, wholesalers and REITs one shared inventory to work from instead of scattered spreadsheets and private lists.",
      "Under the hood it is a multi-tenant SaaS platform. Every member can run an independently branded, white-label marketplace, yet all of them read and write to the same master database of properties. That shared inventory behaves much like the MLS agents already know — except Property Source is built for non-agent participants and is free to join and use.",
      "Investors list properties for free, buyers make real-time offers through the built-in contracting tool, and both sides complete the contract digitally. When a seller accepts, the deal is posted straight into the title company's CRM and order system; from the moment the title agent starts work, the platform streams the closing activity back to the buyer's and seller's accounts in real time.",
    ],
    highlights: [
      "One master database of properties shared across every marketplace on the network, so inventory is never trapped behind a single broker.",
      "A multi-tenant core behind thousands of template-driven white-label storefronts — each marketplace looks independent, all of them run on the same platform.",
      "Free membership and free listings for non-agent investors, with none of the MLS gatekeeping.",
      "Real-time offers on any listing, plus a built-in contracting tool that takes buyer and seller through a digital contract.",
      "Direct integration with title companies' CRM and order systems: an accepted deal is posted to the title company automatically.",
      "Closing activity pushed back to buyers and sellers in real time as the title agent processes the file.",
    ],
    facts: [
      { value: "Multi-Tenant", label: "White-Label SaaS" },
      { value: "Free", label: "To Join And List" },
      { value: "Real-Time", label: "Offers And Closing" },
    ],
  },
  {
    slug: "interview-ai",
    name: "InterviewAI",
    monogram: "IA",
    category: "AI Interview Preparation SaaS",
    domain: "interview.devspirestudio.org",
    href: "https://interview.devspirestudio.org/",
    image: {
      src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&h=800&q=80",
      alt: "Developer working through code on a laptop screen",
    },
    overview: [
      "InterviewAI is our own product: an AI-powered mock interview platform that puts developers through role-specific technical and behavioural interviews, then scores every answer the way a hiring panel would.",
      "Candidates choose a target role, experience level, difficulty and the technologies they work with, and the platform builds a session of exactly ten adaptive questions around that profile — technical core, architecture and behavioural — adapting the rubric from fresher logic to architect-level expectations.",
      "Each answer comes back with an independent AI evaluation covering technical correctness, conceptual depth and structure, plus a rewritten model answer. Sessions close with an aggregated performance dashboard, and retakes feed a progression chart so weak areas are visible rather than guessed at.",
    ],
    highlights: [
      "Session profiles built from the target role, experience level and the selected technologies, so questions match the stack the candidate actually works in.",
      "Every answer scored independently for technical accuracy, conceptual depth and communication, with a suggested rewrite alongside it.",
      "Structured scoring reports aggregate a session into strengths, skill gaps and concrete recommendations.",
      "Retakes and fresh question variations are tracked on a progression chart, turning practice into measurable improvement.",
      "Sessions are classified automatically as Easy, Medium, Hard or Advanced from the candidate's own settings.",
      "Free to use with unlimited sessions — the whole product is open, with no tiers and no credit card.",
    ],
    facts: [
      { value: "10", label: "Questions Per Session" },
      { value: "Free", label: "Unlimited Sessions" },
    ],
  },
];

/**
 * `/projects` — the two platforms Devspire Studio has built and runs, linked to their
 * live sites. The navigation entry lives in `navLinks`; `linkLabel` is the
 * cross-link shown on the Case Studies page.
 */
export const projectsPage = {
  label: "Projects",
  href: "/projects",
  linkLabel: "Explore Our Projects",
  eyebrow: "What We Have Built",
  title: "Projects",
  intro:
    "A closer look at two platforms we designed, engineered and still operate: a global off-market real estate marketplace delivered as multi-tenant SaaS, and an AI-powered mock interview platform that scores every answer like a hiring panel would.",
  summary:
    "Two platforms built end to end by Devspire Studio: Property Source, a global multi-tenant off-market real estate marketplace, and InterviewAI, an AI-powered mock interview platform for developers preparing for technical interviews.",
  action: "Start a Project",
  secondaryAction: "See Client Case Studies",
  projectAction: "Build Something Like This",
  visitLabel: "Visit",
  section: {
    eyebrow: "Flagship Platforms",
    title: "Two Platforms, Two Industries, One Standard",
    intro:
      "Different audiences, the same engineering discipline: shared data models, real-time workflows and integrations that reach all the way into the systems our clients already depend on.",
  },
  cta: {
    eyebrow: "Let's Work Together",
    title: "Building a Platform of Your Own?",
    description:
      "We take platforms end to end — product definition, architecture, engineering, third-party integrations and the operations that keep them running at scale. Tell us what you have in mind.",
    action: "Talk To Our Team",
  },
  projects: projectShowcase,
} as const;
