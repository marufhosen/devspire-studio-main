import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { AppIcon } from "@/components/site/icons";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { serviceList } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Services() {
  return (
    <section id="services" className="bg-slate-50 py-16 lg:py-24">
      <div className="site-container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="flex items-center justify-center gap-3 text-xs font-bold tracking-[0.2em] text-brand-accent uppercase">
            <span className="h-px w-8 bg-brand-accent" />
            What We Do
            <span className="h-px w-8 bg-brand-accent" />
          </p>
          <h2 className="mt-5 font-heading text-3xl leading-tight font-extrabold text-brand sm:text-4xl">
            Services That Move Your Business Forward
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-500 sm:text-base">
            One partner for strategy, engineering and analytics — so your
            roadmap, delivery and data all pull in the same direction.
          </p>
        </div>

        <div className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-4">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-[0.72rem] font-bold tracking-[0.16em] text-brand-accent uppercase transition-colors hover:text-brand-accent-dark"
          >
            View All Services
            <ArrowRight className="size-4" />
          </Link>
          <Link
            href="/contact"
            className={cn(
              buttonVariants({ size: "lg" }),
              "h-10 bg-brand-accent px-6 text-[0.72rem] font-bold tracking-[0.16em] text-white uppercase shadow-lg shadow-brand-accent/25 hover:bg-brand-accent-dark",
            )}
          >
            Start a Project
          </Link>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {serviceList.map((service) => (
            <Card
              key={service.slug}
              size="sm"
              className="group relative gap-3 rounded-none border-t-2 border-t-transparent bg-white py-5 ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1.5 hover:border-t-brand-accent hover:shadow-[0_22px_45px_-28px_rgba(19,26,46,0.5)]"
            >
              <CardContent className="flex flex-1 flex-col gap-3">
                <span className="flex size-10 items-center justify-center bg-brand text-white transition-colors duration-300 group-hover:bg-brand-accent">
                  <AppIcon name={service.icon} className="size-5" />
                </span>
                <h3 className="font-heading text-base leading-snug font-bold text-brand">
                  <Link
                    href={`/services/${service.slug}`}
                    className="after:absolute after:inset-0 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-brand-accent"
                  >
                    {service.title}
                  </Link>
                </h3>
                <p className="text-xs leading-relaxed text-slate-500">
                  {service.description}
                </p>
                <span className="mt-auto inline-flex items-center gap-2 pt-1 text-[0.65rem] font-bold tracking-[0.14em] text-brand-accent uppercase">
                  Learn More
                  <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
