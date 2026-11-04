import { ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Pressable } from "@/components/motion/pressable";
import { Reveal } from "@/components/motion/reveal";
import { buttonVariants } from "@/components/ui/button";
import { type Project, projectsPage } from "@/lib/site";
import { cn } from "@/lib/utils";

const projectNumber = (index: number) => String(index + 1).padStart(2, "0");

export function ProjectFeature({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  // Alternate the preview panel between the right and left column.
  const flipped = index % 2 === 1;

  return (
    <article
      id={project.slug}
      className="grid scroll-mt-28 items-center gap-8 lg:grid-cols-2 lg:gap-14"
    >
      <Reveal
        direction={flipped ? "left" : "right"}
        distance={20}
        className={cn(flipped && "lg:order-2")}
      >
        <p className="flex items-center gap-3 text-xs font-bold tracking-[0.2em] text-brand uppercase">
          <span className="h-px w-8 bg-brand-accent" />
          <span className="font-heading text-brand-accent">
            {projectNumber(index)}
          </span>
          {project.category}
        </p>
        <h3 className="mt-5 font-heading text-2xl leading-tight font-extrabold text-brand sm:text-3xl">
          {project.name}
        </h3>

        <div className="mt-4 space-y-4">
          {project.overview.map((paragraph) => (
            <p
              key={paragraph}
              className="text-sm leading-relaxed text-slate-600 sm:text-base"
            >
              {paragraph}
            </p>
          ))}
        </div>

        <dl className="mt-7 grid auto-cols-fr grid-flow-col gap-4 border-y border-slate-100 py-5">
          {project.facts.map((fact) => (
            <div key={fact.label}>
              <dt className="font-heading text-base font-extrabold text-brand-accent">
                {fact.value}
              </dt>
              <dd className="mt-0.5 text-[0.62rem] leading-snug font-semibold tracking-wide text-slate-500 uppercase">
                {fact.label}
              </dd>
            </div>
          ))}
        </dl>

        <ul className="mt-6 flex flex-col gap-3">
          {project.highlights.map((highlight) => (
            <li
              key={highlight}
              className="flex gap-3 text-sm leading-relaxed text-slate-600"
            >
              <span
                aria-hidden
                className="mt-2 size-1.5 shrink-0 bg-brand-accent"
              />
              {highlight}
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-wrap items-center gap-6">
          <Pressable>
            <a
              href={project.href}
              target="_blank"
              rel="noreferrer"
              title={`${projectsPage.visitLabel} ${project.domain} (opens in a new tab)`}
              className={cn(
                buttonVariants({ size: "lg" }),
                "h-11 bg-brand-accent px-7 text-[0.72rem] font-bold tracking-[0.16em] text-white uppercase shadow-lg shadow-brand-accent/25 hover:bg-brand-accent-dark",
              )}
            >
              {`${projectsPage.visitLabel} ${project.name}`}
              <ArrowUpRight className="size-4" />
            </a>
          </Pressable>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-[0.72rem] font-bold tracking-[0.16em] text-brand uppercase transition-colors hover:text-brand-accent"
          >
            {projectsPage.projectAction}
            <ArrowRight className="size-4 text-brand-accent" />
          </Link>
        </div>
      </Reveal>

      <Reveal
        direction={flipped ? "right" : "left"}
        distance={20}
        className={cn("relative", flipped && "lg:order-1")}
      >
        <div className="relative aspect-[4/3] overflow-hidden bg-brand-soft shadow-[0_25px_50px_-35px_rgba(19,26,46,0.55)]">
          <Image
            src={project.image.src}
            alt={project.image.alt}
            fill
            quality={90}
            sizes="(min-width: 1024px) 560px, 100vw"
            className="object-cover"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-deep via-brand-deep/45 to-brand-deep/5" />

          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6">
            <div>
              <p className="font-heading text-lg font-extrabold text-white">
                {project.name}
              </p>
              <p className="mt-1 text-[0.68rem] font-bold tracking-[0.16em] text-white/70 uppercase">
                {project.domain}
              </p>
            </div>
            <span className="flex size-11 shrink-0 items-center justify-center border border-white/20 bg-white/10 font-heading text-sm font-extrabold text-white">
              {project.monogram}
            </span>
          </div>
        </div>
      </Reveal>
    </article>
  );
}
