import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CaseStudiesCta } from "@/components/case-studies/case-studies-cta";
import { CaseStudyBody } from "@/components/case-studies/case-study-body";
import { CaseStudyHero } from "@/components/case-studies/case-study-hero";
import { CaseStudyResults } from "@/components/case-studies/case-study-results";
import { caseStudies } from "@/lib/site";

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/case-studies/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((item) => item.slug === slug);

  if (!study) {
    return { title: "Case Study" };
  }

  return {
    title: study.title,
    description: study.summary,
    openGraph: {
      title: study.title,
      description: study.summary,
      type: "article",
    },
  };
}

export default async function CaseStudyPage({
  params,
}: PageProps<"/case-studies/[slug]">) {
  const { slug } = await params;
  const study = caseStudies.find((item) => item.slug === slug);

  if (!study) {
    notFound();
  }

  return (
    <>
      <CaseStudyHero study={study} />
      <CaseStudyBody study={study} />
      <CaseStudyResults study={study} />
      <CaseStudiesCta withAllStudiesLink />
    </>
  );
}
