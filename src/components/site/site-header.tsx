import { Clock, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { BrandIcon } from "@/components/site/brand-icon";
import { Logo } from "@/components/site/logo";
import { openingHours, site, socials } from "@/lib/site";
import { cn } from "@/lib/utils";

function ContactBadge({
  icon,
  title,
  children,
  className,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <span className="flex size-8 shrink-0 items-center justify-center bg-white/10 text-brand-orange">
        {icon}
      </span>
      <span className="flex flex-col leading-tight">
        <span className="text-[0.65rem] font-semibold tracking-wide text-white/60 uppercase">
          {title}
        </span>
        <span className="text-xs font-medium text-white">{children}</span>
      </span>
    </div>
  );
}

export function SiteHeader() {
  return (
    <header className="relative z-50">
      {/* Top utility bar */}
      <div className="hidden bg-brand-dark text-white md:block">
        <div className="site-container flex h-9 items-center justify-between">
          <div className="flex items-center gap-3">
            {socials.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="text-white/70 transition-colors hover:text-brand-orange"
              >
                <BrandIcon name={social.icon} className="size-3.5" />
              </Link>
            ))}
          </div>
          <p className="flex items-center gap-2 text-[0.7rem] text-white/75">
            <Clock className="size-3.5 text-brand-orange" />
            {openingHours}
          </p>
        </div>
      </div>

      {/* Brand + contact row */}
      <div className="bg-brand">
        <div className="site-container flex items-center justify-between gap-6 py-3.5">
          <Link
            href="/"
            aria-label={`${site.name} — home`}
            className="flex items-center"
          >
            <Logo />
          </Link>

          {/* Compact call action for small screens, where the contact details are hidden */}
          <a
            href={`tel:${site.phone}`}
            aria-label={`Call Now: ${site.phoneDisplay}`}
            className="flex shrink-0 items-center gap-2 bg-brand-orange px-3.5 py-2.5 text-[0.7rem] font-bold tracking-widest text-white uppercase transition-colors hover:bg-brand-orange-dark lg:hidden"
          >
            <Phone className="size-4" />
            Call Now
          </a>

          <div className="hidden items-center gap-6 lg:flex">
            <ContactBadge icon={<MapPin className="size-4" />} title="Visit Us">
              <span className="text-white/85">{site.address}</span>
            </ContactBadge>
            <span className="h-9 w-px bg-white/15" />
            <ContactBadge
              icon={<Phone className="size-4" />}
              title="Call Us Anytime"
            >
              <a href={`tel:${site.phone}`} className="hover:text-brand-orange">
                {site.phoneDisplay}
              </a>
            </ContactBadge>
          </div>
        </div>
      </div>
    </header>
  );
}
