import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";

import { AppIcon } from "@/components/site/icons";
import { serviceList } from "@/lib/site";

export function ServicesGrid() {
  return (
    <section id="all-services" className="bg-slate-50 py-16 lg:py-24">
      <div className="site-container">
        <div className="grid auto-rows-fr gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {serviceList.map((service) => (
            <article
              key={service.slug}
              className="group relative flex flex-col border-t-2 border-brand-orange bg-white p-6 shadow-[0_25px_50px_-35px_rgba(15,59,107,0.55)] transition-transform duration-300 hover:-translate-y-1.5 sm:p-7"
            >
              <span className="flex size-12 items-center justify-center bg-brand text-white transition-colors duration-300 group-hover:bg-brand-orange">
                <AppIcon name={service.icon} className="size-6" />
              </span>

              <h2 className="mt-5 font-heading text-lg font-extrabold text-brand sm:text-xl">
                <Link
                  href={`/services/${service.slug}`}
                  className="after:absolute after:inset-0 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-brand-orange"
                >
                  {service.title}
                </Link>
              </h2>

              <p className="mt-2.5 text-sm leading-relaxed text-slate-500">
                {service.description}
              </p>

              <ul className="mt-5 grid gap-2.5">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2.5 text-sm leading-snug text-slate-600"
                  >
                    <Check
                      className="mt-0.5 size-3.5 shrink-0 text-brand-orange"
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              <span className="mt-auto inline-flex items-center gap-2 pt-6 text-[0.7rem] font-bold tracking-[0.16em] text-brand-orange uppercase">
                Learn More
                <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
