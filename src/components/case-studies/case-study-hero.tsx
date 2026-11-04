import { ArrowLeft } from "lucide-react";
import Link from "next/link";

import { Reveal } from "@/components/motion/reveal";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import type { CaseStudy } from "@/lib/site";

export function CaseStudyHero({ study }: { study: CaseStudy }) {
  return (
    <section className="relative overflow-hidden bg-brand-soft">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white via-[#eff1fb] to-[#dfe0f7]" />
      <div className="pointer-events-none absolute -top-28 right-0 size-[26rem] rounded-full bg-[#cfd9f5]/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-24 size-[24rem] rounded-full bg-white/70 blur-3xl" />

      <div className="site-container relative py-14 lg:py-20">
        <Link
          href="/case-studies"
          className="inline-flex items-center gap-2 text-[0.7rem] font-bold tracking-[0.16em] text-slate-500 uppercase transition-colors hover:text-brand-accent"
        >
          <ArrowLeft className="size-3.5 text-brand-accent" />
          All Case Studies
        </Link>

        <Reveal delay={0.08} className="mt-8 max-w-3xl">
          <p className="flex items-center gap-3 text-xs font-bold tracking-[0.2em] text-brand-accent uppercase">
            <span className="h-px w-8 bg-brand-accent" />
            {study.industry}
          </p>
          <h1 className="mt-5 font-heading text-3xl leading-[1.1] font-extrabold tracking-tight text-brand sm:text-4xl lg:text-5xl">
            {study.title}
          </h1>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
            {study.summary}
          </p>

          <Stagger as="ul" gap={0.05} className="mt-7 flex flex-wrap gap-2">
            {study.services.map((service) => (
              <StaggerItem
                key={service}
                as="li"
                className="border border-brand/15 bg-white/70 px-3 py-1.5 text-[0.65rem] font-semibold tracking-wide text-brand uppercase"
              >
                {service}
              </StaggerItem>
            ))}
          </Stagger>
        </Reveal>
      </div>
    </section>
  );
}
