import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { Pressable } from "@/components/motion/pressable";
import { Reveal } from "@/components/motion/reveal";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import { buttonVariants } from "@/components/ui/button";
import { projectsPage } from "@/lib/site";
import { cn } from "@/lib/utils";

export function ProjectsHero() {
  return (
    <section className="relative overflow-hidden bg-brand-soft">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white via-[#eff1fb] to-[#dfe0f7]" />
      <div className="pointer-events-none absolute -top-28 right-0 size-[26rem] rounded-full bg-[#cfd9f5]/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-24 size-[24rem] rounded-full bg-white/70 blur-3xl" />

      <div className="site-container relative py-16 lg:py-24">
        <div className="max-w-3xl">
          <Reveal>
            <p className="flex items-center gap-3 text-xs font-bold tracking-[0.2em] text-brand uppercase">
              <span className="h-px w-8 bg-brand-accent" />
              {projectsPage.eyebrow}
            </p>
          </Reveal>
          <Reveal delay={0.06}>
            <h1 className="mt-5 font-heading text-4xl leading-[1.1] font-extrabold tracking-tight text-brand sm:text-5xl">
              {projectsPage.title}
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-6 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
              {projectsPage.intro}
            </p>
          </Reveal>

          <Reveal
            delay={0.18}
            className="mt-8 flex flex-wrap items-center gap-6"
          >
            <Pressable>
              <Link
                href="/contact"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "h-11 bg-brand-accent px-7 text-[0.72rem] font-bold tracking-[0.16em] text-white uppercase shadow-lg shadow-brand-accent/25 hover:bg-brand-accent-dark",
                )}
              >
                {projectsPage.action}
              </Link>
            </Pressable>
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-[0.72rem] font-bold tracking-[0.16em] text-brand uppercase transition-colors hover:text-brand-accent"
            >
              {projectsPage.secondaryAction}
              <ArrowRight className="size-4 text-brand-accent" />
            </Link>
          </Reveal>

          <Stagger as="ul" gap={0.05} className="mt-9 flex flex-wrap gap-3">
            {projectsPage.projects.map((project) => (
              <StaggerItem key={project.slug} as="li">
                <a
                  href={`#${project.slug}`}
                  className="inline-flex items-center gap-2.5 border border-brand/15 bg-white/80 px-4 py-2 text-[0.68rem] font-bold tracking-[0.16em] text-brand uppercase transition-colors hover:border-brand-accent hover:text-brand-accent"
                >
                  <span className="font-heading text-brand-accent">
                    {project.monogram}
                  </span>
                  {project.name}
                </a>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
