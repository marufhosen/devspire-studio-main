import type { Metadata } from "next";

import { ProjectsHero } from "@/components/projects/projects-hero";
import { ProjectsShowcase } from "@/components/projects/projects-showcase";
import { ServiceCta } from "@/components/services/service-cta";
import { projectsPage } from "@/lib/site";

export const metadata: Metadata = {
  title: projectsPage.title,
  description: projectsPage.summary,
  openGraph: {
    title: projectsPage.title,
    description: projectsPage.summary,
    type: "website",
  },
};

export default function ProjectsPage() {
  return (
    <>
      <ProjectsHero />
      <ProjectsShowcase />
      <ServiceCta
        eyebrow={projectsPage.cta.eyebrow}
        title={projectsPage.cta.title}
        description={projectsPage.cta.description}
        action={projectsPage.cta.action}
      />
    </>
  );
}
