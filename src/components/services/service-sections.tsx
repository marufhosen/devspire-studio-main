import { Check, CheckCircle2, Quote } from "lucide-react";

import { CaseStudyCard } from "@/components/case-studies/case-study-card";
import { ServiceTabs } from "@/components/services/service-tabs";
import { AppIcon } from "@/components/site/icons";
import { caseStudies, type ServiceDetail } from "@/lib/site";

function SectionHeading({
  eyebrow,
  title,
  intro,
  dark = false,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  dark?: boolean;
}) {
  if (dark) {
    return (
      <div className="mx-auto max-w-2xl text-center">
        <p className="inline-flex items-center gap-3 border border-brand-soft/20 bg-brand-soft/10 px-4 py-2 text-[0.7rem] font-bold tracking-[0.2em] text-brand-soft uppercase">
          {eyebrow}
        </p>
        <h2 className="mt-6 font-heading text-3xl leading-tight font-extrabold text-white sm:text-4xl">
          {title}
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-white/70 sm:text-base">
          {intro}
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="flex items-center justify-center gap-3 text-xs font-bold tracking-[0.2em] text-brand-orange uppercase">
        <span className="h-px w-8 bg-brand-orange" />
        {eyebrow}
        <span className="h-px w-8 bg-brand-orange" />
      </p>
      <h2 className="mt-5 font-heading text-3xl leading-tight font-extrabold text-brand sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-sm leading-relaxed text-slate-500 sm:text-base">
        {intro}
      </p>
    </div>
  );
}

export function ServiceExpertise({ service }: { service: ServiceDetail }) {
  const { expertise } = service;

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="site-container">
        <SectionHeading
          eyebrow={expertise.eyebrow}
          title={expertise.title}
          intro={expertise.intro}
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {expertise.items.map((item) => (
            <article
              key={item.title}
              className="border-t-2 border-brand-orange bg-slate-50 p-6 transition-colors duration-300 hover:bg-white hover:shadow-[0_22px_45px_-30px_rgba(15,59,107,0.5)] sm:p-7"
            >
              <span className="flex size-12 items-center justify-center bg-brand text-white">
                <AppIcon name={item.icon} className="size-6" />
              </span>
              <h3 className="mt-5 font-heading text-lg font-bold text-brand">
                {item.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
                {item.description}
              </p>
              {item.detail ? (
                <p className="mt-3 text-sm leading-relaxed text-slate-500">
                  {item.detail}
                </p>
              ) : null}
              {item.points ? (
                <ul className="mt-4 grid gap-2">
                  {item.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2.5 text-sm leading-snug text-slate-500"
                    >
                      <Check
                        className="mt-0.5 size-3.5 shrink-0 text-brand-orange"
                        aria-hidden="true"
                      />
                      {point}
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

export function ServiceStack({ service }: { service: ServiceDetail }) {
  if (!service.tabs) {
    return null;
  }

  return (
    <section className="bg-brand py-16 lg:py-24">
      <div className="site-container">
        <SectionHeading
          dark
          eyebrow={service.tabs.eyebrow}
          title={service.tabs.title}
          intro={service.tabs.intro}
        />
        <ServiceTabs tabs={service.tabs.tabs} idPrefix={service.slug} />
      </div>
    </section>
  );
}

export function ServiceBenefits({
  items,
  eyebrow,
  title,
  intro,
}: Pick<ServiceDetail["benefits"], "items" | "eyebrow" | "title" | "intro">) {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="site-container">
        <SectionHeading eyebrow={eyebrow} title={title} intro={intro} />

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((benefit) => (
            <li
              key={benefit.title}
              className="border border-slate-200 bg-white p-6 transition-colors duration-300 hover:border-brand/25"
            >
              <CheckCircle2
                className="size-6 text-brand-orange"
                aria-hidden="true"
              />
              <h3 className="mt-4 font-heading text-base font-bold text-brand">
                {benefit.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-slate-500">
                {benefit.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function ServicePlans({ service }: { service: ServiceDetail }) {
  if (!service.plans) {
    return null;
  }

  const { plans } = service;

  return (
    <section id="service-plans" className="bg-brand py-16 lg:py-24">
      <div className="site-container">
        <SectionHeading
          dark
          eyebrow={plans.eyebrow}
          title={plans.title}
          intro={plans.intro}
        />

        <div className="mt-12 grid items-start gap-6 lg:grid-cols-3">
          {plans.items.map((plan) => (
            <article
              key={plan.name}
              className={
                plan.highlighted
                  ? "relative border-2 border-brand-orange bg-brand-deep p-7"
                  : "border border-brand-soft/15 bg-brand-deep p-7"
              }
            >
              {plan.highlighted ? (
                <span className="absolute -top-3 left-7 bg-brand-orange px-3 py-1 text-[0.65rem] font-bold tracking-[0.16em] text-white uppercase">
                  Most Popular
                </span>
              ) : null}

              <h3 className="font-heading text-lg font-bold text-white">
                {plan.name}
              </h3>
              <p className="mt-4 flex items-baseline gap-2">
                <span className="font-heading text-4xl font-extrabold text-brand-orange">
                  {plan.price}
                </span>
                <span className="text-xs font-semibold tracking-wide text-white/60 uppercase">
                  /month
                </span>
              </p>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                {plan.summary}
              </p>

              <ul className="mt-6 grid gap-2.5">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2.5 text-sm leading-snug text-white/85"
                  >
                    <Check
                      className="mt-0.5 size-3.5 shrink-0 text-brand-orange"
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-white/60">{plans.note}</p>
        <p className="mt-2 text-center text-sm text-white/60">
          {plans.custom}{" "}
          <a
            href="/contact"
            className="font-semibold text-brand-orange hover:underline"
          >
            {plans.customAction}
          </a>
        </p>
      </div>
    </section>
  );
}

export function ServiceIndustries({ service }: { service: ServiceDetail }) {
  if (!service.industries) {
    return null;
  }

  const { industries } = service;

  return (
    <section className="bg-brand py-16 lg:py-24">
      <div className="site-container">
        <SectionHeading
          dark
          eyebrow={industries.eyebrow}
          title={industries.title}
          intro={industries.intro}
        />

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.items.map((industry) => (
            <li
              key={industry.name}
              className="border-l-2 border-brand-orange bg-brand-deep px-6 py-5"
            >
              <h3 className="font-heading text-base font-bold text-white">
                {industry.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">
                {industry.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function ServiceQuotes({ service }: { service: ServiceDetail }) {
  if (!service.quotes?.length) {
    return null;
  }

  return (
    <section className="bg-brand py-16 lg:py-24">
      <div className="site-container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="inline-flex items-center gap-3 border border-brand-soft/20 bg-brand-soft/10 px-4 py-2 text-[0.7rem] font-bold tracking-[0.2em] text-brand-soft uppercase">
            Testimonials
          </p>
          <h2 className="mt-6 font-heading text-3xl leading-tight font-extrabold text-white sm:text-4xl">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-white/70 sm:text-base">
            Hear from businesses that have built successful development teams
            with our help.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {service.quotes.map((quote) => (
            <figure
              key={quote.name}
              className="border border-brand-soft/15 bg-brand-deep px-6 py-8 sm:px-8 sm:py-10"
            >
              <Quote className="size-7 text-brand-orange" aria-hidden="true" />
              <blockquote className="mt-5 text-sm leading-relaxed text-white/85 sm:text-base">
                {quote.quote}
              </blockquote>
              <figcaption className="mt-6 border-t border-brand-soft/15 pt-5">
                <p className="font-heading text-sm font-bold text-white">
                  {quote.name}
                </p>
                <p className="mt-1 text-[0.7rem] font-semibold tracking-[0.14em] text-brand-orange uppercase">
                  {quote.role}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ServiceRelated({ service }: { service: ServiceDetail }) {
  const related = service.related
    .map((slug) => caseStudies.find((study) => study.slug === slug))
    .filter((study): study is NonNullable<typeof study> => Boolean(study));

  if (related.length === 0) {
    return null;
  }

  return (
    <section className="bg-brand py-16 lg:py-24">
      <div className="site-container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="inline-flex items-center gap-3 border border-brand-soft/20 bg-brand-soft/10 px-4 py-2 text-[0.7rem] font-bold tracking-[0.2em] text-brand-soft uppercase">
            Case Studies
          </p>
          <h2 className="mt-6 font-heading text-3xl leading-tight font-extrabold text-white sm:text-4xl">
            Success Stories
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-white/70 sm:text-base">
            See how our work has delivered measurable results for businesses
            like yours.
          </p>
        </div>

        <div className="mt-12 grid auto-rows-fr gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((study) => (
            <CaseStudyCard key={study.slug} study={study} />
          ))}
        </div>
      </div>
    </section>
  );
}
