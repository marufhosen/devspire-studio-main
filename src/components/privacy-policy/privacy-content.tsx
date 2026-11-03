import { privacyPolicy } from "@/lib/site";

const sectionNumber = (index: number) => String(index + 1).padStart(2, "0");

export function PrivacyContent() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="site-container grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-24">
            <h2 className="font-heading text-sm font-bold tracking-widest text-brand uppercase">
              On This Page
            </h2>
            <ul className="mt-5 flex flex-col gap-3 text-sm">
              {privacyPolicy.sections.map((section, index) => (
                <li key={section.id} className="flex gap-3">
                  <span className="font-heading text-xs font-bold text-brand-accent">
                    {sectionNumber(index)}
                  </span>
                  <a
                    href={`#${section.id}`}
                    className="text-slate-500 transition-colors hover:text-brand-accent"
                  >
                    {section.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-10 lg:col-span-8 lg:gap-12">
          {privacyPolicy.sections.map((section, index) => (
            <article key={section.id} id={section.id} className="scroll-mt-28">
              <div className="flex items-baseline gap-4">
                <span className="font-heading text-sm font-extrabold tracking-widest text-brand-accent">
                  {sectionNumber(index)}
                </span>
                <h2 className="font-heading text-xl leading-tight font-extrabold text-brand sm:text-2xl">
                  {section.title}
                </h2>
              </div>

              {section.paragraphs ? (
                <div className="mt-4 space-y-4">
                  {section.paragraphs.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="text-sm leading-relaxed text-slate-600 sm:text-base"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              ) : null}

              {section.points ? (
                <ul className="mt-5 flex flex-col gap-3">
                  {section.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-3 text-sm leading-relaxed text-slate-600 sm:text-base"
                    >
                      <span
                        className="mt-2.5 size-1.5 shrink-0 bg-brand-accent"
                        aria-hidden
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
