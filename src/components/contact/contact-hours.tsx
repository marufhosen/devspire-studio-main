import { contactPage } from "@/lib/site";

export function ContactHours() {
  return (
    <section className="relative overflow-hidden bg-brand py-12 lg:py-16">
      <div className="pointer-events-none absolute -top-20 -right-16 size-72 rounded-full bg-white/5" />
      <div className="site-container relative">
        <p className="flex items-center gap-3 text-xs font-bold tracking-[0.2em] text-brand-orange uppercase">
          <span className="h-px w-8 bg-brand-orange" />
          {contactPage.officeHours.eyebrow}
        </p>
        <h2 className="mt-5 font-heading text-2xl font-extrabold text-white sm:text-3xl">
          {contactPage.officeHours.title}
        </h2>

        <dl className="mt-8 grid gap-8 sm:grid-cols-2">
          {contactPage.officeHours.rows.map((row) => (
            <div
              key={row.days}
              className="border-l-2 border-brand-orange/60 pl-5"
            >
              <dt className="text-xs font-semibold tracking-widest text-white/70 uppercase">
                {row.days}
              </dt>
              <dd className="mt-1.5 font-heading text-xl font-extrabold text-white sm:text-2xl">
                {row.hours}
              </dd>
            </div>
          ))}
        </dl>

        <p className="mt-8 max-w-2xl text-sm leading-relaxed text-white/70">
          {contactPage.officeHours.note}
        </p>
      </div>
    </section>
  );
}
