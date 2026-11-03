import type { ServiceStep } from "@/lib/site";

export function ProcessBand({
  eyebrow,
  title,
  intro,
  steps,
  tone = "light",
}: {
  eyebrow: string;
  title: string;
  intro: string;
  steps: readonly ServiceStep[];
  tone?: "light" | "dark";
}) {
  const isDark = tone === "dark";

  return (
    <section
      className={
        isDark ? "bg-brand py-16 lg:py-24" : "bg-slate-50 py-16 lg:py-24"
      }
    >
      <div className="site-container">
        <div className="mx-auto max-w-2xl text-center">
          <p
            className={
              isDark
                ? "inline-flex items-center gap-3 border border-brand-soft/20 bg-brand-soft/10 px-4 py-2 text-[0.7rem] font-bold tracking-[0.2em] text-brand-soft uppercase"
                : "flex items-center justify-center gap-3 text-xs font-bold tracking-[0.2em] text-brand-accent uppercase"
            }
          >
            {isDark ? null : <span className="h-px w-8 bg-brand-accent" />}
            {eyebrow}
            {isDark ? null : <span className="h-px w-8 bg-brand-accent" />}
          </p>
          <h2
            className={
              isDark
                ? "mt-6 font-heading text-3xl leading-tight font-extrabold text-white sm:text-4xl"
                : "mt-5 font-heading text-3xl leading-tight font-extrabold text-brand sm:text-4xl"
            }
          >
            {title}
          </h2>
          <p
            className={
              isDark
                ? "mt-4 text-sm leading-relaxed text-white/70 sm:text-base"
                : "mt-4 text-sm leading-relaxed text-slate-500 sm:text-base"
            }
          >
            {intro}
          </p>
        </div>

        <ol
          className={
            isDark
              ? "mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
              : "mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          }
        >
          {steps.map((step, index) => (
            <li
              key={step.title}
              className={
                isDark
                  ? "border-t-2 border-brand-accent bg-brand-deep p-6"
                  : "border border-slate-200 bg-white p-6"
              }
            >
              <span
                className={
                  isDark
                    ? "flex size-9 items-center justify-center bg-brand-accent font-heading text-sm font-extrabold text-white"
                    : "flex size-9 items-center justify-center bg-brand font-heading text-sm font-extrabold text-white"
                }
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3
                className={
                  isDark
                    ? "mt-5 font-heading text-base font-bold text-white"
                    : "mt-5 font-heading text-base font-bold text-brand"
                }
              >
                {step.title}
              </h3>
              <p
                className={
                  isDark
                    ? "mt-2.5 text-sm leading-relaxed text-white/70"
                    : "mt-2.5 text-sm leading-relaxed text-slate-500"
                }
              >
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
