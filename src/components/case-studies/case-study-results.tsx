import type { CaseStudy } from "@/lib/site";

export function CaseStudyResults({ study }: { study: CaseStudy }) {
  return (
    <section className="relative overflow-hidden bg-brand py-12 lg:py-16">
      <div className="pointer-events-none absolute -top-20 -right-16 size-72 rounded-full bg-white/5" />
      <div className="pointer-events-none absolute -bottom-24 -left-10 size-72 rounded-full bg-brand-accent/15 blur-2xl" />

      <div className="site-container relative">
        <h2 className="flex items-center gap-3 text-xs font-bold tracking-[0.2em] text-brand-accent uppercase">
          <span className="h-px w-8 bg-brand-accent" />
          Key Results
        </h2>

        <dl className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {study.results.map((result) => (
            <div
              key={result.label}
              className="border-l-2 border-brand-accent/60 pl-5"
            >
              <dt className="font-heading text-3xl font-extrabold text-white sm:text-4xl">
                {result.value}
              </dt>
              <dd className="mt-1.5 text-xs font-semibold tracking-widest text-white/70 uppercase">
                {result.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
