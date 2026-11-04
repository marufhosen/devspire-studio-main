import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { Pressable } from "@/components/motion/pressable";
import { Reveal } from "@/components/motion/reveal";
import { buttonVariants } from "@/components/ui/button";
import { careersPage, site } from "@/lib/site";
import { cn } from "@/lib/utils";

const cvMailto = `mailto:${site.email}?subject=${encodeURIComponent(careersPage.subject)}`;

export function CareersHero() {
  return (
    <section className="relative overflow-hidden bg-brand-soft">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white via-[#eff1fb] to-[#dfe0f7]" />
      <div className="pointer-events-none absolute -top-28 right-0 size-[26rem] rounded-full bg-[#cfd9f5]/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-24 size-[24rem] rounded-full bg-white/70 blur-3xl" />

      <div className="site-container relative py-16 lg:py-24">
        <div className="max-w-3xl">
          <Reveal>
            <p className="flex items-center gap-3 text-xs font-bold tracking-[0.2em] text-brand uppercase">
              <span className="h-px w-8 bg-brand-accent" />
              {careersPage.eyebrow}
            </p>
          </Reveal>
          <Reveal delay={0.06}>
            <h1 className="mt-5 font-heading text-4xl leading-[1.1] font-extrabold tracking-tight text-brand sm:text-5xl">
              {careersPage.title}
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-6 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
              {careersPage.intro}
            </p>
          </Reveal>

          <Reveal
            delay={0.18}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <Pressable>
              <a
                href={cvMailto}
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "h-11 bg-brand-accent px-7 text-[0.72rem] font-bold tracking-[0.16em] text-white uppercase shadow-lg shadow-brand-accent/25 hover:bg-brand-accent-dark",
                )}
              >
                {careersPage.primaryAction}
              </a>
            </Pressable>
            <Pressable>
              <Link
                href="/about"
                className={cn(
                  buttonVariants({ variant: "ghost", size: "lg" }),
                  "h-11 gap-2 px-4 text-[0.72rem] font-bold tracking-[0.16em] text-brand uppercase hover:bg-white/70 hover:text-brand",
                )}
              >
                {careersPage.secondaryAction}
                <ArrowRight className="size-4 text-brand-accent" />
              </Link>
            </Pressable>
          </Reveal>

          <Reveal delay={0.24} className="mt-6 text-xs font-semibold tracking-wide text-slate-500">
            Applications go straight to{" "}
            <a
              href={`mailto:${site.email}`}
              className="text-brand underline decoration-brand-accent decoration-2 underline-offset-4 transition-colors hover:text-brand-accent"
            >
              {site.email}
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
