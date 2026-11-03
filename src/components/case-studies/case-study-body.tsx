import Image from "next/image";

import type { CaseStudy } from "@/lib/site";

export function CaseStudyBody({ study }: { study: CaseStudy }) {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="site-container">
        <div className="relative aspect-[16/9] overflow-hidden bg-brand-soft shadow-[0_35px_65px_-45px_rgba(15,59,107,0.55)]">
          <Image
            src={study.image.src}
            alt={study.image.alt}
            fill
            quality={90}
            sizes="(min-width: 1024px) 1152px, 100vw"
            className="object-cover"
          />
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
          <div>
            <h2 className="font-heading text-2xl font-extrabold text-brand sm:text-3xl">
              Overview
            </h2>
            {study.overview.map((paragraph) => (
              <p
                key={paragraph}
                className="mt-4 text-sm leading-relaxed text-slate-500 sm:text-base"
              >
                {paragraph}
              </p>
            ))}

            <h2 className="mt-12 font-heading text-2xl font-extrabold text-brand sm:text-3xl">
              The Challenge
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-500 sm:text-base">
              {study.challenge}
            </p>
          </div>

          <div>
            <div className="border-t-2 border-brand-orange bg-slate-50 p-7">
              <h2 className="text-[0.7rem] font-bold tracking-[0.2em] text-brand-orange uppercase">
                Our Approach
              </h2>
              <ol className="mt-6 grid gap-5">
                {study.approach.map((step, index) => (
                  <li key={step} className="flex items-start gap-4">
                    <span className="flex size-7 shrink-0 items-center justify-center bg-brand text-[0.7rem] font-bold text-white">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm leading-relaxed text-slate-600">
                      {step}
                    </span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="mt-6 border border-slate-200 p-7">
              <h2 className="text-[0.7rem] font-bold tracking-[0.2em] text-brand uppercase">
                Services Delivered
              </h2>
              <ul className="mt-5 flex flex-wrap gap-2">
                {study.services.map((service) => (
                  <li
                    key={service}
                    className="border border-slate-200 px-3 py-1.5 text-[0.65rem] font-semibold tracking-wide text-slate-500 uppercase"
                  >
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
