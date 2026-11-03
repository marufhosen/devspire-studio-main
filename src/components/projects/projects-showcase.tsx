import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { ProjectFeature } from "@/components/projects/project-feature";
import { projectsPage } from "@/lib/site";

export function ProjectsShowcase() {
  return (
    <section id="platforms" className="bg-white py-16 lg:py-24">
      <div className="site-container">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="flex items-center gap-3 text-xs font-bold tracking-[0.2em] text-brand uppercase">
              <span className="h-px w-8 bg-brand-orange" />
              {projectsPage.section.eyebrow}
            </p>
            <h2 className="mt-5 font-heading text-3xl leading-tight font-extrabold text-brand sm:text-4xl">
              {projectsPage.section.title}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
              {projectsPage.section.intro}
            </p>
          </div>

          <Link
            href="/case-studies"
            className="inline-flex shrink-0 items-center gap-2 text-[0.72rem] font-bold tracking-[0.16em] text-brand uppercase transition-colors hover:text-brand-orange"
          >
            {projectsPage.secondaryAction}
            <ArrowRight className="size-4 text-brand-orange" />
          </Link>
        </div>

        <div className="mt-14 flex flex-col gap-16 lg:mt-16 lg:gap-24">
          {projectsPage.projects.map((project, index) => (
            <ProjectFeature
              key={project.slug}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
