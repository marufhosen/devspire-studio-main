import { Reveal } from "@/components/motion/reveal";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import { whyUsPage } from "@/lib/site";

const { comparison } = whyUsPage;

export function Comparison() {
  return (
    <section id="comparison" className="bg-white py-16 lg:py-24">
      <div className="site-container">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="flex items-center justify-center gap-3 text-xs font-bold tracking-[0.2em] text-brand-accent uppercase">
            <span className="h-px w-8 bg-brand-accent" />
            {comparison.eyebrow}
            <span className="h-px w-8 bg-brand-accent" />
          </p>
          <h2 className="mt-5 font-heading text-3xl leading-tight font-extrabold text-brand sm:text-4xl">
            {comparison.title}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-500 sm:text-base">
            {comparison.intro}
          </p>
        </Reveal>

        <Stagger as="ul" gap={0.1} className="mt-12 flex flex-col gap-8">
          {comparison.rows.map((row) => (
            <StaggerItem
              key={row.topic}
              as="li"
              className="grid gap-5 lg:grid-cols-[minmax(0,13rem)_1fr_1fr] lg:gap-8"
            >
              <h3 className="font-heading text-base font-extrabold text-brand lg:pt-1">
                {row.topic}
              </h3>

              <div className="border-l-2 border-slate-200 pl-5">
                <p className="text-[0.68rem] font-bold tracking-[0.18em] text-slate-400 uppercase">
                  {comparison.typicalLabel}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                  {row.typical}
                </p>
              </div>

              <div className="border-l-2 border-brand-accent bg-brand-soft/60 py-4 pr-4 pl-5">
                <p className="text-[0.68rem] font-bold tracking-[0.18em] text-brand-accent uppercase">
                  {comparison.devspireLabel}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-brand-dark">
                  {row.devspire}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
