import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

import { Pressable } from "@/components/motion/pressable";
import { Reveal } from "@/components/motion/reveal";
import { buttonVariants } from "@/components/ui/button";
import { privacyPolicy, site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function PrivacyContact() {
  return (
    <section className="bg-brand-soft py-16 lg:py-24">
      <div className="site-container">
        <Reveal className="border-t-2 border-brand-accent bg-white p-8 shadow-xl shadow-brand/25 lg:p-12">
          <p className="flex items-center gap-3 text-xs font-bold tracking-[0.2em] text-brand-accent uppercase">
            <span className="h-px w-8 bg-brand-accent" />
            Contact
          </p>
          <h2 className="mt-5 font-heading text-2xl leading-tight font-extrabold text-brand sm:text-3xl">
            {privacyPolicy.contact.title}
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
            {privacyPolicy.contact.description}
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            <div className="flex gap-3">
              <Mail className="mt-0.5 size-4 shrink-0 text-brand-accent" />
              <div className="text-sm">
                <p className="font-heading font-bold text-brand">Email</p>
                <a
                  href={`mailto:${site.email}`}
                  className="text-slate-600 transition-colors hover:text-brand-accent"
                >
                  {site.email}
                </a>
              </div>
            </div>

            <div className="flex gap-3">
              <Phone className="mt-0.5 size-4 shrink-0 text-brand-accent" />
              <div className="text-sm">
                <p className="font-heading font-bold text-brand">Call</p>
                <a
                  href={`tel:${site.phone}`}
                  className="text-slate-600 transition-colors hover:text-brand-accent"
                >
                  {site.phoneDisplay}
                </a>
              </div>
            </div>

            <div className="flex gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-brand-accent" />
              <div className="text-sm">
                <p className="font-heading font-bold text-brand">Visit</p>
                <span className="text-slate-600">{site.address}</span>
              </div>
            </div>
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-6">
            <Pressable>
              <Link
                href="/contact"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "h-11 bg-brand-accent px-7 text-[0.72rem] font-bold tracking-[0.16em] text-white shadow-lg shadow-brand-accent/25 hover:bg-brand-accent-dark",
                )}
              >
                {privacyPolicy.contact.action}
              </Link>
            </Pressable>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-[0.72rem] font-bold tracking-[0.16em] text-brand uppercase transition-colors hover:text-brand-accent"
            >
              Explore Our Services
              <ArrowRight className="size-4 text-brand-accent" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
