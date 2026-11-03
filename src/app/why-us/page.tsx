import type { Metadata } from "next";

import { Stats } from "@/components/home/stats";
import { Testimonials } from "@/components/home/testimonials";
import { ProcessBand } from "@/components/services/process-band";
import { ServiceCta } from "@/components/services/service-cta";
import { ServiceFaq } from "@/components/services/service-faq";
import { Comparison } from "@/components/why-us/comparison";
import { Differentiators } from "@/components/why-us/differentiators";
import { WhyUsHero } from "@/components/why-us/why-us-hero";
import { servicesPage, whyUsPage } from "@/lib/site";

export const metadata: Metadata = {
  title: "Why Us",
  description: whyUsPage.intro,
  openGraph: {
    title: "Why Us",
    description: whyUsPage.intro,
    type: "website",
  },
};

export default function WhyUsPage() {
  return (
    <>
      <WhyUsHero />
      <Stats />
      <Differentiators />
      <Comparison />
      <ProcessBand
        eyebrow={servicesPage.process.eyebrow}
        title={servicesPage.process.title}
        intro={servicesPage.process.intro}
        steps={servicesPage.process.steps}
        tone="light"
      />
      <Testimonials />
      <ServiceFaq faq={whyUsPage.faq} />
      <ServiceCta
        eyebrow={whyUsPage.cta.eyebrow}
        title={whyUsPage.cta.title}
        description={whyUsPage.cta.description}
        action={whyUsPage.cta.action}
      />
    </>
  );
}
