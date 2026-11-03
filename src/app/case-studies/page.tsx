import type { Metadata } from "next";

import { CaseStudiesCta } from "@/components/case-studies/case-studies-cta";
import { CaseStudiesGrid } from "@/components/case-studies/case-studies-grid";
import { CaseStudiesHero } from "@/components/case-studies/case-studies-hero";
import { caseStudiesPage } from "@/lib/site";

export const metadata: Metadata = {
  title: "Case Studies",
  description: caseStudiesPage.intro,
  openGraph: {
    title: "Case Studies",
    description: caseStudiesPage.intro,
    type: "website",
  },
};

export default function CaseStudiesPage() {
  return (
    <>
      <CaseStudiesHero />
      <CaseStudiesGrid />
      <CaseStudiesCta />
    </>
  );
}
