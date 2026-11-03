import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { about } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Careers() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="site-container">
        <div className="relative overflow-hidden bg-gradient-to-r from-brand-dark to-brand px-8 py-12 text-white lg:px-14 lg:py-16">
          <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-xl">
              <p className="text-xs font-bold tracking-[0.2em] text-brand-accent uppercase">
                Careers
              </p>
              <h2 className="mt-4 font-heading text-3xl leading-tight font-extrabold sm:text-4xl">
                {about.careers.title}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-white/75">
                {about.careers.description}
              </p>
            </div>

            <Link
              href="/careers"
              className={cn(
                buttonVariants({ size: "lg" }),
                "h-11 shrink-0 gap-2 bg-brand-accent px-7 text-[0.72rem] font-bold tracking-[0.16em] text-white uppercase hover:bg-brand-accent-dark",
              )}
            >
              Visit Careers
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
