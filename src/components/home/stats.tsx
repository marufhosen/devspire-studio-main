import { stats } from "@/lib/site";

export function Stats() {
  return (
    <section className="relative overflow-hidden bg-brand py-12 lg:py-16">
      <div className="pointer-events-none absolute -top-20 -right-16 size-72 rounded-full bg-white/5" />
      <div className="site-container relative">
        <dl className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="border-l-2 border-brand-accent/60 pl-5"
            >
              <dt className="font-heading text-3xl font-extrabold text-white sm:text-4xl">
                {stat.value}
              </dt>
              <dd className="mt-1.5 text-xs font-semibold tracking-widest text-white/70 uppercase">
                {stat.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
