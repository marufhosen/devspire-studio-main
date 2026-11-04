import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { Pressable } from "@/components/motion/pressable";
import { Reveal } from "@/components/motion/reveal";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import { buttonVariants } from "@/components/ui/button";
import { careersPage, site } from "@/lib/site";
import { cn } from "@/lib/utils";

const { openings } = careersPage;

const cvMailto = `mailto:${site.email}?subject=${encodeURIComponent(careersPage.subject)}`;

export function Openings() {
  return (
    <section id="openings" className="bg-white py-16 lg:py-24">
      <div className="site-container">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="flex items-center justify-center gap-3 text-xs font-bold tracking-[0.2em] text-brand-accent uppercase">
            <span className="h-px w-8 bg-brand-accent" />
            {openings.eyebrow}
            <span className="h-px w-8 bg-brand-accent" />
          </p>
          <h2 className="mt-5 font-heading text-3xl leading-tight font-extrabold text-brand sm:text-4xl">
            {openings.title}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-500 sm:text-base">
            {openings.intro}
          </p>
        </Reveal>

        {/* The empty state is the point of this page, so it leads the section. */}
        <Reveal
          delay={0.08}
          className="mt-12 border-t-2 border-brand-accent bg-brand-soft px-6 py-8 shadow-xl shadow-brand/25 sm:px-10 sm:py-10"
        >
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
            <div>
              <p className="inline-flex items-center gap-2.5 border border-brand-accent/40 bg-white px-3.5 py-2 text-[0.7rem] font-bold tracking-[0.2em] text-brand-accent uppercase">
                <span
                  aria-hidden="true"
                  className="size-2 shrink-0 bg-brand-accent"
                />
                {openings.status}
              </p>
              <h3 className="mt-5 font-heading text-2xl leading-tight font-extrabold text-brand sm:text-3xl">
                {openings.headline}
              </h3>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-600">
                {openings.note}
              </p>
            </div>

            <div className="flex shrink-0 flex-col items-start gap-4">
              <Pressable>
                <a
                  href={cvMailto}
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "h-11 bg-brand-accent px-7 text-[0.72rem] font-bold tracking-[0.16em] text-white uppercase shadow-lg shadow-brand-accent/25 hover:bg-brand-accent-dark",
                  )}
                >
                  {openings.action}
                </a>
              </Pressable>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-[0.72rem] font-bold tracking-[0.16em] text-brand uppercase transition-colors hover:text-brand-accent"
              >
                {openings.secondaryAction}
                <ArrowRight className="size-4 text-brand-accent" />
              </Link>
            </div>
          </div>
        </Reveal>

        <Stagger as="ul" className="mt-8 grid auto-rows-fr gap-6 sm:grid-cols-2">
          {openings.points.map((point) => (
            <StaggerItem
              key={point.title}
              as="li"
              hover
              className="h-full border-t-2 border-brand-accent bg-white p-6 shadow-xl shadow-brand/25 sm:p-7"
            >
              <h3 className="font-heading text-base font-extrabold text-brand">
                {point.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-slate-500">
                {point.description}
              </p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
