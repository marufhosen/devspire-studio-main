import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import type { CaseStudy } from "@/lib/site";

export function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <article className="group relative flex flex-col border-t-2 border-brand-orange bg-white shadow-[0_25px_50px_-35px_rgba(15,59,107,0.55)] transition-transform duration-300 hover:-translate-y-1.5">
      <div className="relative aspect-[16/9] overflow-hidden bg-brand-soft">
        <Image
          src={study.image.src}
          alt={study.image.alt}
          fill
          quality={90}
          sizes="(min-width: 1024px) 400px, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
        <span className="absolute top-0 left-0 bg-brand px-3 py-1.5 text-[0.65rem] font-bold tracking-[0.16em] text-white uppercase">
          {study.industry}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="font-heading text-base font-bold text-brand sm:text-lg">
          <Link
            href={`/case-studies/${study.slug}`}
            className="after:absolute after:inset-0 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-brand-orange"
          >
            {study.title}
          </Link>
        </h3>
        <p className="mt-2.5 text-sm leading-relaxed text-slate-500">
          {study.summary}
        </p>

        <ul className="mt-4 flex flex-wrap gap-2">
          {study.services.slice(0, 2).map((service) => (
            <li
              key={service}
              className="border border-slate-200 px-2 py-0.5 text-[0.65rem] font-semibold tracking-wide text-slate-500 uppercase"
            >
              {service}
            </li>
          ))}
        </ul>

        <dl className="mt-5 grid grid-cols-2 gap-4 border-t border-slate-100 pt-4">
          {study.results.slice(0, 2).map((result) => (
            <div key={result.label}>
              <dt className="font-heading text-lg font-extrabold text-brand-orange">
                {result.value}
              </dt>
              <dd className="mt-0.5 text-[0.65rem] leading-snug font-semibold tracking-wide text-slate-500 uppercase">
                {result.label}
              </dd>
            </div>
          ))}
        </dl>

        <span className="mt-auto inline-flex items-center gap-2 pt-5 text-[0.7rem] font-bold tracking-[0.16em] text-brand-orange uppercase">
          View Case Study
          <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </div>
    </article>
  );
}
