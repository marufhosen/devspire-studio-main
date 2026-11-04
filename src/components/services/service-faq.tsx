"use client";

import { Reveal } from "@/components/motion/reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { ServiceDetail } from "@/lib/site";

export function ServiceFaq({ faq }: { faq: ServiceDetail["faq"] }) {
  return (
    <section className="bg-slate-50 py-16 lg:py-24">
      <div className="site-container">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="flex items-center justify-center gap-3 text-xs font-bold tracking-[0.2em] text-brand-accent uppercase">
            <span className="h-px w-8 bg-brand-accent" />
            FAQ
            <span className="h-px w-8 bg-brand-accent" />
          </p>
          <h2 className="mt-5 font-heading text-3xl leading-tight font-extrabold text-brand sm:text-4xl">
            {faq.title}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-500 sm:text-base">
            {faq.intro}
          </p>
        </Reveal>

        <Reveal
          delay={0.1}
          className="mt-10 border-t-2 border-brand-accent bg-white px-6 py-2 sm:px-8"
        >
          <Accordion>
            {faq.items.map((item, index) => (
              <AccordionItem
                key={item.question}
                value={`faq-${index}`}
                className="border-slate-200"
              >
                <AccordionTrigger className="py-5 font-heading text-sm font-bold text-brand no-underline hover:no-underline sm:text-base">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="overflow-visible text-sm leading-relaxed text-slate-500 data-open:animate-accordion-down">
                  <p className="pt-1 pb-5">{item.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
