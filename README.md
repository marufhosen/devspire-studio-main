# Devspire Studio — Marketing Website

Public-facing website for **Devspire Studio**, a software and data studio based in Dhaka, Bangladesh.

The site currently ships the **homepage, About, Services, Why Us and Case Studies sections, and the Contact, Careers, Privacy Policy and Projects pages**. Header, navigation and footer are shared through the root layout, so additional pages can be added later without touching them.

- **Website:** Devspire Studio
- **Slogan:** Technology that drives your business forward
- **Email:** studiodevspire@gmail.com
- **Phone:** +880 1944 007152 (displayed; `tel:` links use the E.164 form `+8801944007152` from `site.phone`)
- **Address:** Aftabnagar, Badda, Dhaka-1212, Bangladesh

## Tech stack

| Concern  | Choice                                                 |
| -------- | ------------------------------------------------------ |
| Framework| Next.js 16 (App Router, Turbopack) + React 19          |
| Styling  | Tailwind CSS v4 (CSS-first theme in `globals.css`)     |
| UI kit   | shadcn/ui — `base-lyra` style, `@base-ui/react` primitives |
| Icons    | lucide-react (+ inline SVG brand marks)                |
| Fonts    | Montserrat (UI/headings), Dancing Script (signature)   |
| Tooling  | Biome (lint + format), TypeScript                      |
| Runtime  | Bun (package manager), Node 20+ also works             |

## What is built

The homepage is composed of these sections, in order:

1. **Top utility bar** — social links and opening hours on a darker navy strip.
2. **Header** — logo, address block and "Call Us Anytime" phone on desktop; on smaller screens the contact details collapse into a compact accent "Call Now" button beside the logo.
3. **Primary navigation** — real routes (Home, Services, Case Studies, Projects, About Us, Why Us, Careers, Contact) with the active page highlighted (including nested case study pages), "Get a Quote", and a slide-in sheet menu below the `lg` breakpoint whose body scrolls under a fixed header (eight items plus "Get a Quote" need the full desktop width). Sticks to the top on desktop. **Services** opens a dropdown listing all five service detail pages on hover (or via the caret beside it, by click and keyboard), while the label itself still goes to `/services`; the mobile sheet expands the same five links inline.
4. **Hero** — gradient background, eyebrow label, headline, intro copy, accent CTA and secondary link, with a portrait that extends behind the card row.
5. **Highlight cards** — four white cards overlapping the hero (Quality Services, Valuable Ideas, Budget Friendly, Support 24/7).
6. **Mission** — handshake photo beside a navy panel: "Who We Are", values list and a script-font motto.
7. **Stats band** — navy strip with four key numbers.
8. **Services** — the same five services listed under `/services` (Software Development, Data Analytics, Technical Support, IT Consulting, Training & Workshops), rendered from `serviceList` so the landing page and the services section can never drift apart. Each card links to its detail page, with "View All Services" and a "Start a Project" call to action above the grid.
9. **Testimonials** — deep-navy band with a quote carousel (drag, arrow-key and prev/next support) over two client quotes, each with a portrait avatar.
10. **Why Choose Us / Our Advantages** — light band with a circular navy icon badge per column: Rapid Delivery, Data-Driven Approach and 24/7 Support.
11. **Security & Compliance** — navy authority band with a white badge card per standard (GDPR, SOC 2 Type II, ISO 27001), each showing the standard's logo from `public/`, over the line "Built with security, privacy, and compliance at the core."
12. **CTA band** — gradient panel with a consultation CTA plus phone and email.
13. **Footer** — brand blurb, social links, company links, services and contact details, then the copyright line with a **Privacy Policy** link.

The **Case Studies** section lives under `/case-studies`:

1. **Listing** — hero with the intro, a "Start Your Success Story" call to action and an "Explore Our Projects" link, then a card grid of every study showing its image, industry, summary, service tags and key results.
2. **Detail** — one static page per study at `/case-studies/[slug]`: hero with a back link, the story image, Overview, The Challenge, a numbered Our Approach panel, Services Delivered, a navy Key Results band and the shared closing call to action.

The **Services** section lives under `/services`:

1. **Listing** — hero with the intro and a "Get Started" call to action, then five service cards (Software Development, Data Analytics, Technical Support, IT Consulting, Training & Workshops), each listing its six capabilities and linking to its detail page. A navy "How We Work" band closes with the four-step process.
2. **Detail** — one static page per service at `/services/[slug]`, composed of: a hero with a back link and two actions; an expertise grid; a numbered methodology band; benefits; five-question FAQ accordion; and the shared closing call to action with an "Explore Other Services" link.
3. **Tabbed detail pages** — Software Development (six tech-stack tabs), Data Analytics (four stack tabs) and Training (four format tabs) add a navy tabbed band with full keyboard support (arrows, Home, End); each panel keeps an icon, a description and its technology or feature chips.
4. **Extra bands where the content calls for them** — Technical Support adds a pricing section (Basic / Professional / Enterprise with a highlighted plan) and IT Consulting adds an industries band. Detail pages with related work end with a navy Success Stories band linking into `/case-studies`.

The **Contact page** (`/contact`) is the destination for every quote and contact call to action across the site:

1. **Hero** — the intro copy plus a "Send a Message" link that scrolls to the form.
2. **Form and channels** — the enquiry form posts to `/api/contact`, which validates it and forwards it by email; beside it sit cards for email, phone and the office address. The address card spans the full width of the column and its address text links straight out to Google Maps in a new tab, the same destination as its "Get directions" action.
3. **Office hours** — a navy band with the support schedule and the 24/7 enterprise note.

All copy, contact details, nav links, services, testimonials, advantages, stats, case studies, the featured projects, social profiles and the privacy policy live in one place: [`src/lib/site.ts`](src/lib/site.ts).

The **About page** (`/about`) continues the story:

1. **About hero** — eyebrow, page title, intro copy and CTAs.
2. **Our Story** — team photo beside the founding story, from 2015 to 500+ global clients.
3. **Our Foundation** — navy band with Mission / Vision / Values tabs (click or arrow keys), each showing an icon, a statement and its principle list.
4. **Leadership** — three portrait cards for the CEO, CTO and COO.
5. **Join Our Team** — gradient careers call to action.

The **Why Us page** (`/why-us`) is where the navigation's Why Us link lands — the homepage keeps its own "Our Advantages" summary band:

1. **Why-us hero** — eyebrow, page title, intro copy and two CTAs (Start a Project, See Our Work).
2. **Stats band** — the shared navy figures strip.
3. **What Sets Us Apart** — six white cards with a violet top border, each an icon, a commitment and its detail.
4. **The Difference** — a row-by-row comparison of a typical vendor against working with Devspire Studio, the Devspire Studio side highlighted on a soft navy panel.
5. **How We Work** — the shared four-step process band.
6. **Testimonials** — the shared navy quote carousel.
7. **Questions Before You Commit** — five-question FAQ accordion.
8. **Closing call to action** — the shared CTA panel.

The **Careers page** (`/careers`) is reached from the navigation and from the About page's "Join Our Team" band. Because Devspire Studio has **no open vacancies at the moment**, the page is built around that fact rather than around a job list:

1. **Careers hero** — eyebrow, page title, intro copy and two CTAs (Send Your CV, Meet the Team), plus the address every application goes to.
2. **Open Positions** — the centrepiece: a "no open positions right now" status panel explaining why the list is empty, what happens to a speculative application (read by a human, answered within two weeks, held on file for six months), and an email-your-CV call to action.
3. **Why Devspire Studio** — six benefit cards: work that ships, senior colleagues, competitive pay, flexible and remote working, a learning budget and health cover.
4. **The Teams We Hire Into** — a navy band listing the six disciplines we grow (engineering, data, cloud, design, quality, delivery) with their focus areas, so a speculative application can name the right team.
5. **How Hiring Works** — the shared four-step band describing the hiring process.
6. **Stats band** — the shared navy figures strip.
7. **Closing call to action** — the shared CTA panel.

Adding a real vacancy later means adding an entry to `careersPage.openings` (and a list section under `src/components/careers/`); nothing else on the page assumes the list is empty.

The **Privacy Policy page** (`/privacy-policy`) is reached from the **Privacy Policy** link in the footer's copyright bar — deliberately not a primary navigation item:

1. **Privacy hero** — eyebrow, page title, intro copy and a "Last updated" badge carrying the revision date.
2. **Policy body** — a sticky "On This Page" contents list beside thirteen numbered sections (who we are, the information we collect, how we use it, our legal basis, cookies and analytics, when we share information, retention, security, international transfers, your rights, children's privacy and changes to the policy). Sections with lists render them as accent-marked bullets, and each one carries an `id` so the contents list links straight to it.
3. **Questions About This Policy** — a card with the contact email, phone and office address pulled from `site.ts`, plus CTAs to `/contact` and `/services`.

Editing the policy means editing the `privacySections` array in [`src/lib/site.ts`](src/lib/site.ts): each entry is one numbered section, and the contents list, the anchor ids and the metadata description all derive from it. The `privacyPolicy` object beside it holds the page title, intro, revision date and the footer link's label and href, so the link and the page can never point at different URLs.

The **Projects page** (`/projects`) showcases the platforms Devspire Studio has built and still runs, each linked to its live site. It is reached from the primary navigation and its footer Company link, and from an "Explore Our Projects" link on `/case-studies`:

1. **Projects hero** — eyebrow, page title, intro copy, a "Start a Project" call to action with a "See Client Case Studies" link, and a monogram badge per project that jumps to its section below.
2. **Flagship platforms** — one row per project (`#property-source`, `#interview-ai`), alternating side to side: the number and category, the platform name, overview paragraphs, a fact strip, capability bullets, a "Visit <platform>" button that opens the live product in a new tab and a "Build Something Like This" link into `/contact`. Beside it sits the preview panel — a photograph under a navy gradient carrying the platform name, its domain and its monogram.
3. **Closing call to action** — the shared CTA panel, inviting a platform of your own.

Editing the page means editing the `projectShowcase` array in [`src/lib/site.ts`](src/lib/site.ts): each entry is one feature row, and the hero's jump links, the anchors and the sections all derive from it. The `projectsPage` object beside it holds the page title, intro, metadata summary and the labels used by the hero, the section header, the visit buttons and the Case Studies cross-link (the navigation entry itself is a `navLinks` entry, so the header, mobile sheet and footer Company column all carry it) — so nothing points at a different URL than the page itself.

## Project structure

```
src/
├─ app/
│  ├─ layout.tsx        # shared chrome: SiteHeader + SiteNav + <main> + SiteFooter, fonts, metadata
│  ├─ page.tsx          # homepage — sections only
│  ├─ about/page.tsx    # About page — sections only
│  ├─ case-studies/
│  │  ├─ page.tsx           # Case Studies listing
│  │  └─ [slug]/page.tsx    # one Case Study detail page per study
│  ├─ careers/page.tsx  # Careers page — sections only
│  ├─ contact/page.tsx  # Contact page
│  ├─ privacy-policy/page.tsx  # Privacy Policy page — sections only
│  ├─ projects/page.tsx  # Projects page — sections only
│  ├─ why-us/page.tsx   # Why Us page — sections only
│  ├─ services/
│  │  ├─ page.tsx           # Services listing
│  │  └─ [slug]/page.tsx    # one Service detail page per service
│  ├─ api/contact/
│  │  └─ route.ts           # validates the enquiry and sends it by email
│  └─ globals.css       # Tailwind v4 theme, Devspire Studio brand tokens, .site-container
├─ components/
│  ├─ site/             # shared chrome: header, nav, footer, icon maps
│  ├─ home/             # homepage section components
│  ├─ about/            # About page section components
│  ├─ case-studies/     # listing hero, card, grid, detail sections, CTA
│  ├─ services/         # listing hero, grid, process band, detail sections, tabs, FAQ
│  ├─ why-us/           # hero, differentiators grid, vendor comparison
│  ├─ careers/          # hero, open-positions empty state, benefits, disciplines
│  ├─ contact/          # hero, enquiry form, contact channels, office hours
│  ├─ privacy-policy/   # hero, numbered policy body, contact card
│  ├─ projects/         # hero, platform feature rows
│  └─ ui/               # shadcn/ui primitives (generated)
└─ lib/
   └─ site.ts           # site content and design data
public/
├─ devspire-logo.jpg    # original studio badge, used by the Logo component
├─ gdpr.webp            # GDPR badge (Security & Compliance band)
├─ soc-2.webp           # SOC 2 Type II badge (Security & Compliance band)
├─ iso.webp             # ISO 27001 badge (Security & Compliance band)
├─ mark-kole.jpeg       # testimonial portrait
└─ placeholder-avatar.png # fallback avatar for testimonials
```

## Getting started

```bash
# install dependencies
bun install

# start the dev server (http://localhost:3000)
bun dev
```

Other scripts:

```bash
bun run build   # production build
bun run start   # serve the production build
bun run lint    # biome check (lint + format check)
bun run format  # biome format --write
bunx tsc --noEmit  # type check
```

> **Note:** Next.js 16 allows only one `next dev` process per project directory. If `bun dev` reports that another dev server is already running, use the existing one, stop it, or start on another port with `bunx next dev -p 3100`.

## Customising

- **Brand colours** — edit the `--brand*` tokens at the top of [`src/app/globals.css`](src/app/globals.css). They follow the brand logo: a cosmic-navy base (`--brand`, `--brand-dark`, `--brand-deep`), a violet accent (`--brand-accent`, `--brand-accent-dark`), and the logo spectrum (`--brand-cyan`, `--brand-indigo`, `--brand-violet`, `--brand-magenta`, `--brand-silver`). They are exposed to Tailwind as `bg-brand`, `text-brand-accent`, `border-brand`, etc., so no component hardcodes hex values.
- **Copy and data** — edit [`src/lib/site.ts`](src/lib/site.ts).
- **Container width** — the `.site-container` class in `globals.css` controls page width and padding for every section.
- **Remote images** — Unsplash is the only whitelisted host, configured in [`next.config.ts`](next.config.ts) together with the allowed image `qualities`. Add new hosts there before using them.
- **Logo** — the lockup is the `Logo` component in `src/components/site/logo.tsx`: the original badge artwork in `public/devspire-logo.jpg`, masked to a circle so the square JPEG corners stay hidden, beside the DEVSPIRE / STUDIO wordmark set in gradient type. Pass `tone="dark"` for a navy wordmark on light surfaces, and replace `public/devspire-logo.jpg` when a higher-resolution export is available.
- **Social profiles** — `socials` in `src/lib/site.ts` is deliberately empty until the studio's own accounts exist; add one entry per profile (its `icon` must match a key in `src/components/site/brand-icon.tsx`).

## Deployment

The site is fully static-friendly: `bun run build` prerenders `/`, `/about`, `/services` and every service detail page, `/case-studies` and every case study detail page, `/why-us`, `/careers`, `/contact`, `/privacy-policy` and `/projects`, and it can be deployed to Vercel or any Node host with `bun run start`.

The contact form is the one piece that needs configuration. `/api/contact` sends enquiries through [Resend](https://resend.com) and reads these environment variables:

| Variable               | Required | Purpose                                                        |
| ---------------------- | -------- | -------------------------------------------------------------- |
| `RESEND_API_KEY`       | yes      | Without it the endpoint returns a clear "not configured" error. |
| `CONTACT_FROM_EMAIL`   | no       | Sender address; defaults to `onboarding@resend.dev`.            |
| `CONTACT_TO_EMAIL`     | no       | Where enquiries land; defaults to the address in `site.ts`.     |

While the Resend account has no verified domain, the test sender `onboarding@resend.dev` only delivers to the account owner's own address — anything else is rejected with a 403 and the form reports a send failure. So `CONTACT_TO_EMAIL` currently points at that owner address. To deliver to `studiodevspire@gmail.com` instead:

1. Add a domain at [resend.com/domains](https://resend.com/domains) and add the DNS records Resend shows until it reports `verified`.
2. Set `CONTACT_FROM_EMAIL` to an address on that domain (for example `enquiries@yourdomain.com`) and `CONTACT_TO_EMAIL` to the studio inbox.
3. Restart the server so the new values are read.

Remote images are optimised at runtime through the Next.js image optimizer, so the deployment target needs outbound access to `images.unsplash.com` (or set `images.unoptimized` and serve the originals).

## Roadmap

- Remaining pages (Blog) using the shared layout.
- Publish openings on `/careers` as they arise, with an application route rather than a mailto.
- A verified sending domain once the studio has one, so enquiries can be sent from a branded address and reach the studio inbox rather than the provider's test sender and the account owner's address.
