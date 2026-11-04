import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";

import { Pressable } from "@/components/motion/pressable";
import { Reveal } from "@/components/motion/reveal";
import { buttonVariants } from "@/components/ui/button";
import type { ServiceDetail } from "@/lib/site";
import { cn } from "@/lib/utils";

export function ServiceHero({ service }: { service: ServiceDetail }) {
  const secondaryHref = service.plans ? "#service-plans" : "/case-studies";

  return (
    <section className="relative overflow-hidden bg-brand-soft">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white via-[#eff1fb] to-[#dfe0f7]" />
      <div className="pointer-events-none absolute -top-28 right-0 size-[26rem] rounded-full bg-[#cfd9f5]/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-24 size-[24rem] rounded-full bg-white/70 blur-3xl" />

      <div className="site-container relative py-14 lg:py-20">
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-[0.7rem] font-bold tracking-[0.16em] text-slate-500 uppercase transition-colors hover:text-brand-accent"
        >
          <ArrowLeft className="size-3.5 text-brand-accent" />
          All Services
        </Link>

        <Reveal delay={0.08} className="mt-8 max-w-3xl">
          <p className="flex items-center gap-3 text-xs font-bold tracking-[0.2em] text-brand-accent uppercase">
            <span className="h-px w-8 bg-brand-accent" />
            {service.label}
          </p>
          <h1 className="mt-5 font-heading text-3xl leading-[1.1] font-extrabold tracking-tight text-brand sm:text-4xl lg:text-5xl">
            {service.title}
          </h1>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
            {service.intro}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4">
            <Pressable>
              <Link
                href="/contact"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "h-11 bg-brand-accent px-7 text-[0.72rem] font-bold tracking-[0.16em] text-white uppercase shadow-lg shadow-brand-accent/25 hover:bg-brand-accent-dark",
                )}
              >
                {service.primaryAction}
              </Link>
            </Pressable>
            {service?.secondaryAction && (
              <Link
                href={secondaryHref}
                className="inline-flex items-center gap-2 text-[0.72rem] font-bold tracking-[0.16em] text-brand uppercase transition-colors hover:text-brand-accent"
              >
                {service.secondaryAction}
                <ArrowRight className="size-3.5 text-brand-accent" />
              </Link>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
