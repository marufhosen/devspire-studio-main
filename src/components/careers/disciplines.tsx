import { AppIcon } from "@/components/site/icons";
import { careersPage } from "@/lib/site";

const { disciplines } = careersPage;

export function Disciplines() {
  return (
    <section
      id="disciplines"
      className="relative overflow-hidden bg-brand py-16 lg:py-24"
    >
      <div className="pointer-events-none absolute -top-24 right-0 size-80 rounded-full bg-white/5" />
      <div className="site-container relative">
        <div className="mx-auto max-w-2xl text-center">
          <p className="inline-flex items-center gap-3 border border-brand-soft/20 bg-brand-soft/10 px-4 py-2 text-[0.7rem] font-bold tracking-[0.2em] text-brand-soft uppercase">
            {disciplines.eyebrow}
          </p>
          <h2 className="mt-6 font-heading text-3xl leading-tight font-extrabold text-white sm:text-4xl">
            {disciplines.title}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-white/70 sm:text-base">
            {disciplines.intro}
          </p>
        </div>

        <ul className="mt-12 grid auto-rows-fr gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {disciplines.items.map((item) => (
            <li
              key={item.title}
              className="border-t-2 border-brand-orange bg-brand-deep p-6"
            >
              <span className="flex size-12 items-center justify-center bg-brand-orange text-white">
                <AppIcon name={item.icon} className="size-6" />
              </span>
              <h3 className="mt-5 font-heading text-lg font-extrabold text-white">
                {item.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-white/70">
                {item.description}
              </p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {item.areas.map((area) => (
                  <li
                    key={area}
                    className="border border-white/15 px-2.5 py-1 text-[0.65rem] font-semibold tracking-widest text-white/70 uppercase"
                  >
                    {area}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
