"use client";

import { Mail, MapPin, Menu, Phone } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ServicesMobileNavItem,
  ServicesNavItem,
} from "@/components/site/nav-dropdown";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navLinks, serviceList, site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteNav() {
  const pathname = usePathname();

  // Highlight a nav item for its route and any nested route beneath it.
  function matchesPath(href: string) {
    return (
      href === pathname || (href !== "/" && pathname.startsWith(`${href}/`))
    );
  }

  return (
    <div className="relative z-50 border-t border-white/10 bg-brand shadow-md lg:sticky lg:top-0">
      <div className="site-container flex h-12 items-center justify-between gap-4">
        <nav aria-label="Primary">
          <ul className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => {
              const isActive = matchesPath(link.href);

              if ("submenu" in link) {
                return (
                  <ServicesNavItem
                    key={link.label}
                    label={link.label}
                    href={link.href}
                    items={serviceList}
                    isActive={isActive}
                  />
                );
              }

              return (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    aria-current={isActive ? "page" : undefined}
                    className={cn(
                      "block px-3.5 py-2 text-[0.72rem] font-bold tracking-widest uppercase transition-colors hover:text-brand-accent",
                      isActive ? "text-brand-accent" : "text-white/80",
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <Sheet>
            <SheetTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Open menu"
                  className="text-white hover:bg-white/10 hover:text-brand-accent lg:hidden"
                />
              }
            >
              <Menu />
            </SheetTrigger>
            <SheetContent
              side="left"
              className="overflow-hidden bg-brand-deep text-white"
            >
              <SheetHeader>
                <SheetTitle className="text-white">Menu</SheetTitle>
              </SheetHeader>

              {/* Scrolls on its own so the header and close button stay put. */}
              <div className="flex min-h-0 flex-1 flex-col overflow-y-auto overscroll-contain [scrollbar-width:thin] [scrollbar-color:var(--brand-accent)_var(--brand-deep)]">
                <nav aria-label="Mobile" className="flex flex-col px-4">
                  {navLinks.map((link) => {
                    if ("submenu" in link) {
                      return (
                        <ServicesMobileNavItem
                          key={link.label}
                          label={link.label}
                          href={link.href}
                          items={serviceList}
                          isActive={matchesPath(link.href)}
                        />
                      );
                    }

                    return (
                      <SheetClose
                        key={link.label}
                        nativeButton={false}
                        render={
                          <Link
                            href={link.href}
                            aria-current={
                              matchesPath(link.href) ? "page" : undefined
                            }
                          >
                            {link.label}
                          </Link>
                        }
                        className="border-b border-white/10 py-3 text-sm font-semibold tracking-wide text-white/85 uppercase hover:text-brand-accent"
                      />
                    );
                  })}
                </nav>
                <div className="mt-4 flex flex-col gap-3 px-4 pb-6 text-xs text-white/70">
                  <p className="flex items-start gap-2">
                    <MapPin className="mt-0.5 size-4 shrink-0 text-brand-accent" />
                    {site.address}
                  </p>
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
            </SheetContent>
          </Sheet>
        </nav>

        <div className="flex items-center">
          <Link
            href="/contact"
            className="text-[0.72rem] font-bold tracking-widest text-white/80 uppercase transition-colors hover:text-brand-accent"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </div>
  );
}
