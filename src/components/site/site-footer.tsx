import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

import { BrandIcon } from "@/components/site/brand-icon";
import { Logo } from "@/components/site/logo";
import {
  navLinks,
  privacyPolicy,
  serviceList,
  site,
  socials,
} from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteFooter() {
  return (
    <footer id="contact" className="bg-brand-deep text-white/70">
      <div className="site-container grid gap-10 py-14 lg:grid-cols-12 lg:py-16">
        <div className="lg:col-span-4">
          <Logo />
          <p className="mt-5 max-w-sm text-sm leading-relaxed">
            {site.description} We build custom software, SaaS platforms and data
            analytics for teams around the world.
          </p>
          <div className="mt-6 flex items-center gap-2.5">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="flex size-9 items-center justify-center border border-white/15 text-white/70 transition-colors hover:border-brand-orange hover:bg-brand-orange hover:text-white"
              >
                <BrandIcon name={social.icon} className="size-4" />
              </a>
            ))}
          </div>
        </div>

        {/*
          Company and Services share one block so they sit side by side on
          small screens instead of stacking; on desktop the block fills the
          2 + 3 tracks the two lists used to occupy on their own.
        */}
        <div className="grid grid-cols-2 gap-x-6 lg:col-span-5 lg:gap-x-10">
          <div>
            <h3 className="font-heading text-sm font-bold tracking-widest text-white uppercase">
              Company
            </h3>
            <ul className="mt-5 flex flex-col gap-3 text-sm">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="inline-flex items-center gap-2 transition-colors hover:text-brand-orange"
                  >
                    <ArrowRight className="size-3 text-brand-orange" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-bold tracking-widest text-white uppercase">
              Services
            </h3>
            <ul className="mt-5 flex flex-col gap-3 text-sm">
              {serviceList.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-2 transition-colors hover:text-brand-orange"
                  >
                    <ArrowRight className="size-3 text-brand-orange" />
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="lg:col-span-3">
          <h3 className="font-heading text-sm font-bold tracking-widest text-white uppercase">
            Get In Touch
          </h3>
          <ul className="mt-5 flex flex-col gap-4 text-sm">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-brand-orange" />
              <span>{site.address}</span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 size-4 shrink-0 text-brand-orange" />
              <a
                href={`tel:${site.phone}`}
                className="transition-colors hover:text-brand-orange"
              >
                {site.phoneDisplay}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 size-4 shrink-0 text-brand-orange" />
              <a
                href={`mailto:${site.email}`}
                className="transition-colors hover:text-brand-orange"
              >
                {site.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div
          className={cn(
            "site-container flex flex-col items-center justify-between gap-3 py-5 text-xs text-white/55",
            "sm:flex-row",
          )}
        >
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
            <p>{site.copyright}</p>
            <span
              aria-hidden
              className="hidden h-3 w-px bg-white/20 sm:block"
            />
            <Link
              href={privacyPolicy.href}
              className="font-semibold text-white/70 transition-colors hover:text-brand-orange"
            >
              {privacyPolicy.label}
            </Link>
          </div>
          <p>{site.legalName}</p>
        </div>
      </div>
    </footer>
  );
}
