import { AppIcon } from "@/components/site/icons";
import { advantages } from "@/lib/site";

export function Advantages() {
  return (
    <section id="why-us" className="bg-slate-50 py-16 lg:py-24">
      <div className="site-container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="flex items-center justify-center gap-3 text-xs font-bold tracking-[0.2em] text-brand-accent uppercase">
            <span className="h-px w-8 bg-brand-accent" />
            Why Choose Us
            <span className="h-px w-8 bg-brand-accent" />
          </p>
          <h2 className="mt-5 font-heading text-3xl leading-tight font-extrabold text-brand sm:text-4xl">
            Our Advantages
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-500 sm:text-base">
            What sets Devspire Studio apart from other software development and
            data analytics companies.
          </p>
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
          {advantages.map((item) => (
            <div
              key={item.title}
              className="flex flex-col items-center text-center"
            >
              <span className="flex size-16 items-center justify-center rounded-full bg-brand text-brand-accent shadow-[0_18px_40px_-24px_rgba(19,26,46,0.45)] lg:size-20">
                <AppIcon name={item.icon} className="size-7 lg:size-8" />
              </span>
              <h3 className="mt-6 font-heading text-lg font-bold text-brand sm:text-xl">
                {item.title}
              </h3>
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-slate-500">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
