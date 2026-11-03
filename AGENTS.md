<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Devspire Studio website — further UI development rules

Read this before adding or changing any UI. The homepage is done; more pages will follow. Keep the rules below so new work looks like it was always part of the site.

## Brand and design system

- Brand tokens are defined once in `src/app/globals.css` and exposed to Tailwind: `--brand` (`bg-brand`, `text-brand`, `border-brand`), `--brand-dark`, `--brand-deep`, `--brand-orange`, `--brand-orange-dark`, `--brand-soft`. **Never hardcode brand hex values in components** — use the token utilities.
- `--primary` is mapped to the brand navy, so stock shadcn components (`Button`, `Badge`, etc.) already carry the palette. Restyle through utilities instead of editing `src/components/ui/*`.
- Typography: Montserrat is `--font-sans` and `--font-heading`; Dancing Script is `font-signature` for the script accent only. Headings are `font-heading font-extrabold text-brand`; section eyebrows are small, uppercase, `tracking-[0.2em]`, with an orange rule span.
- Shape: this project uses the shadcn `base-lyra` style, so corners are square (`rounded-none`). Do not introduce rounded cards or pill buttons without a deliberate design decision.
- Recurring pattern language: navy surfaces for authority, orange for primary CTAs, icons and eyebrow accents; white cards with a 2px orange top border and a soft navy shadow.
- Page width comes from the `.site-container` class (`max-w-7xl` + responsive padding). Use it in every section — never set a per-section `max-w-*` wrapper.
- Section rhythm is `py-16 lg:py-24` (adjust only with reason). Give every section that the nav or a CTA links to a stable `id`.

## Structure and ownership

- `src/app/layout.tsx` owns the shared chrome — `SiteHeader`, `SiteNav`, `<main>{children}</main>`, `SiteFooter`. **Pages render only their own sections**; never add a second header, nav or footer.
- Site copy and data (name, legal name, description, email, phone, address, copyright, opening hours, nav links, services, stats, socials) live in `src/lib/site.ts`. Extend that module instead of hardcoding strings in components.
- Component locations: shared chrome in `src/components/site/`, page sections in `src/components/home/` (add one folder per page), shadcn primitives in `src/components/ui/`.
- Prefer server components. Add `"use client"` only for state or browser events — `site-nav.tsx` (mobile sheet) is the reference example.
- Keep one `h1` per page and keep landmarks (`header`/`nav`/`main`/`footer`) in the layout only. Label icon-only buttons with `aria-label`.

## Links, images, assets

- Every nav or CTA link must resolve to a real route or an existing section id. No dead links, no `href="#"`.
- Nav links currently use in-page hashes (`#services`). Once routed pages exist, switch them to real routes and derive the active state from the pathname instead of the hardcoded index check in `site-nav.tsx`.
- Use `next/image` for every image: pass `alt`, either `width`/`height` or `fill`, and a `sizes` hint so the optimizer serves a small variant (a full-size logo candidate is wrong).
- On Next 16 use the `preload` prop, not the deprecated `priority`.
- Remote images: Unsplash only, whitelisted in `next.config.ts` (`images.unsplash.com` plus the `qualities` allowlist). Add any new host there first.
- The logo is the `Logo` component in `src/components/site/logo.tsx` — an inline SVG growth mark plus the DEVSPIRE / STUDIO wordmark in the heading font, coloured only with `--brand-orange` and white or navy. There is no raster logo file: adjust the component rather than swapping in an image.
- Contact email is `studiodevspire@gmail.com`, phone `+8801944007152`, address "Aftabnagar, Badda, Dhaka-1212, Bangladesh". Pull these from `site.ts`; never retype them.

## Verifying UI work

```bash
bunx tsc --noEmit                 # types
bun run lint                      # biome (lint + format) — fix the cause, do not suppress
bunx next build                   # production build
```

Only one `next dev` process can run per project directory; reuse the running one or start another on a spare port (`bunx next dev -p 3100`). Check the page in the browser after UI changes — a passing build does not prove the layout renders.
