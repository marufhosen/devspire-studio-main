import { Mail, Phone } from "lucide-react";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Cta() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="site-container">
        <div className="relative overflow-hidden bg-gradient-to-r from-brand-dark to-brand px-8 py-12 text-white lg:px-14 lg:py-16">
          <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-xl">
              <p className="text-xs font-bold tracking-[0.2em] text-brand-accent uppercase">
                Let&rsquo;s Work Together
              </p>
              <h2 className="mt-4 font-heading text-3xl leading-tight font-extrabold sm:text-4xl">
                Have a project in mind? Let&rsquo;s talk.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-white/75">
                Tell us about your goals and we&rsquo;ll come back within one
                business day with a clear next step.
              </p>
            </div>

            <div className="flex w-full flex-col gap-4 sm:w-auto">
              <Link
                href="/contact"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "h-11 bg-brand-accent px-7 text-[0.72rem] font-bold tracking-[0.16em] text-white uppercase hover:bg-brand-accent-dark",
                )}
              >
                Get a Free Consultation
              </Link>
              <div className="flex flex-col gap-2 text-sm text-white/80">
                <a
                  href={`tel:${site.phone}`}
                  className="flex items-center gap-2 hover:text-brand-accent"
                >
                  <Phone className="size-4 text-brand-accent" />
                  {site.phoneDisplay}
                </a>
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-center gap-2 hover:text-brand-accent"
                >
                  <Mail className="size-4 text-brand-accent" />
                  {site.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
