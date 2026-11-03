import type { Metadata } from "next";

import { ProcessBand } from "@/components/services/process-band";
import { ServiceCta } from "@/components/services/service-cta";
import { ServicesGrid } from "@/components/services/services-grid";
import { ServicesHero } from "@/components/services/services-hero";
import { servicesPage } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description: servicesPage.intro,
  openGraph: {
    title: "Services",
    description: servicesPage.intro,
    type: "website",
  },
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesGrid />
      <ProcessBand
        eyebrow={servicesPage.process.eyebrow}
        title={servicesPage.process.title}
        intro={servicesPage.process.intro}
        steps={servicesPage.process.steps}
        tone="dark"
      />
      <ServiceCta
        eyebrow={servicesPage.cta.eyebrow}
        title={servicesPage.cta.title}
        description={servicesPage.cta.description}
        action={servicesPage.cta.action}
      />
    </>
  );
}
