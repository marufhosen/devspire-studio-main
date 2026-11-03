import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import type { ServiceDetail } from "@/lib/site";
import { cn } from "@/lib/utils";

export function ServiceHero({ service }: { service: ServiceDetail }) {
  const secondaryHref = service.plans ? "#service-plans" : "/case-studies";

  return (
    <section className="relative overflow-hidden bg-brand-soft">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white via-[#eef4fb] to-[#dce8f6]" />
      <div className="pointer-events-none absolute -top-28 right-0 size-[26rem] rounded-full bg-[#c9ddf3]/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-24 size-[24rem] rounded-full bg-white/70 blur-3xl" />

      <div className="site-container relative py-14 lg:py-20">
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-[0.7rem] font-bold tracking-[0.16em] text-slate-500 uppercase transition-colors hover:text-brand-orange"
        >
          <ArrowLeft className="size-3.5 text-brand-orange" />
          All Services
        </Link>

        <div className="mt-8 max-w-3xl">
          <p className="flex items-center gap-3 text-xs font-bold tracking-[0.2em] text-brand-orange uppercase">
            <span className="h-px w-8 bg-brand-orange" />
            {service.label}
          </p>
          <h1 className="mt-5 font-heading text-3xl leading-[1.1] font-extrabold tracking-tight text-brand sm:text-4xl lg:text-5xl">
            {service.title}
          </h1>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
            {service.intro}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4">
            <Link
              href="/contact"
              className={cn(
                buttonVariants({ size: "lg" }),
                "h-11 bg-brand-orange px-7 text-[0.72rem] font-bold tracking-[0.16em] text-white uppercase shadow-lg shadow-brand-orange/25 hover:bg-brand-orange-dark",
              )}
            >
              {service.primaryAction}
            </Link>
            {service?.secondaryAction && (
              <Link
                href={secondaryHref}
                className="inline-flex items-center gap-2 text-[0.72rem] font-bold tracking-[0.16em] text-brand uppercase transition-colors hover:text-brand-orange"
              >
                {service.secondaryAction}
                <ArrowRight className="size-3.5 text-brand-orange" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
