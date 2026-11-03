import { ArrowLeft } from "lucide-react";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ServiceCta({
  eyebrow,
  title,
  description,
  action,
  withAllServicesLink = false,
}: {
  eyebrow?: string;
  title: string;
  description: string;
  action: string;
  withAllServicesLink?: boolean;
}) {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="site-container">
        <div className="relative overflow-hidden bg-gradient-to-r from-brand-dark to-brand px-8 py-12 text-white lg:px-14 lg:py-16">
          <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-xl">
              {eyebrow ? (
                <p className="text-xs font-bold tracking-[0.2em] text-brand-accent uppercase">
                  {eyebrow}
                </p>
              ) : null}
              <h2
                className={
                  eyebrow
                    ? "mt-4 font-heading text-3xl leading-tight font-extrabold sm:text-4xl"
                    : "font-heading text-3xl leading-tight font-extrabold sm:text-4xl"
                }
              >
                {title}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-white/75">
                {description}
              </p>
            </div>

            <div className="flex w-full flex-col items-start gap-5 sm:w-auto">
              <Link
                href="/contact"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "h-11 bg-brand-accent px-7 text-[0.72rem] font-bold tracking-[0.16em] text-white uppercase hover:bg-brand-accent-dark",
                )}
              >
                {action}
              </Link>

              {withAllServicesLink ? (
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 text-[0.72rem] font-bold tracking-[0.16em] text-white/80 uppercase transition-colors hover:text-brand-accent"
                >
                  <ArrowLeft className="size-4 text-brand-accent" />
                  Explore Other Services
                </Link>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
