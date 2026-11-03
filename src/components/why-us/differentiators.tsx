import { AppIcon } from "@/components/site/icons";
import { whyUsPage } from "@/lib/site";

const { differentiators } = whyUsPage;

export function Differentiators() {
  return (
    <section id="differentiators" className="bg-slate-50 py-16 lg:py-24">
      <div className="site-container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="flex items-center justify-center gap-3 text-xs font-bold tracking-[0.2em] text-brand-orange uppercase">
            <span className="h-px w-8 bg-brand-orange" />
            {differentiators.eyebrow}
            <span className="h-px w-8 bg-brand-orange" />
          </p>
          <h2 className="mt-5 font-heading text-3xl leading-tight font-extrabold text-brand sm:text-4xl">
            {differentiators.title}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-500 sm:text-base">
            {differentiators.intro}
          </p>
        </div>

        <ul className="mt-12 grid auto-rows-fr gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {differentiators.items.map((item) => (
            <li
              key={item.title}
              className="border-t-2 border-brand-orange bg-white p-6 shadow-xl shadow-brand/25 sm:p-7"
            >
              <span className="flex size-12 items-center justify-center bg-brand text-brand-orange">
                <AppIcon name={item.icon} className="size-6" />
              </span>
              <h3 className="mt-5 font-heading text-lg font-extrabold text-brand">
                {item.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-slate-500">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
