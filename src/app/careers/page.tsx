import type { Metadata } from "next";

import { Benefits } from "@/components/careers/benefits";
import { CareersHero } from "@/components/careers/careers-hero";
import { Disciplines } from "@/components/careers/disciplines";
import { Openings } from "@/components/careers/openings";
import { Stats } from "@/components/home/stats";
import { ProcessBand } from "@/components/services/process-band";
import { ServiceCta } from "@/components/services/service-cta";
import { careersPage } from "@/lib/site";

export const metadata: Metadata = {
  title: "Careers",
  description: careersPage.summary,
  openGraph: {
    title: "Careers",
    description: careersPage.summary,
    type: "website",
  },
};

export default function CareersPage() {
  return (
    <>
      <CareersHero />
      <Openings />
      <Benefits />
      <Disciplines />
      <ProcessBand
        eyebrow={careersPage.process.eyebrow}
        title={careersPage.process.title}
        intro={careersPage.process.intro}
        steps={careersPage.process.steps}
        tone="light"
      />
      <Stats />
      <ServiceCta
        eyebrow={careersPage.cta.eyebrow}
        title={careersPage.cta.title}
        description={careersPage.cta.description}
        action={careersPage.cta.action}
      />
    </>
  );
}
