"use client";

import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AppIcon } from "@/components/site/icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SheetClose } from "@/components/ui/sheet";
import type { ServiceSummary } from "@/lib/site";
import { cn } from "@/lib/utils";

type ServiceNavItemProps = {
  /** Nav label, e.g. "Services". */
  label: string;
  /** Where the label goes — the full listing page. */
  href: string;
  /** Services, each linking to its own detail page. */
  items: readonly ServiceSummary[];
  /** Whether the current route sits under `href`. */
  isActive: boolean;
};

/** Hover intent: a short delay before opening, a longer grace period on leave. */
const OPEN_DELAY = 90;
const CLOSE_DELAY = 180;

// The menu primitive highlights items with the neutral `--accent` tint; the
// brand colours are forced with `!` so it matches the rest of the site chrome
// without editing the primitive itself.
const itemClassName = cn(
  "gap-2.5 px-3 py-2.5 text-[0.72rem] font-bold tracking-[0.12em] text-brand-dark uppercase",
  "[&_svg]:text-brand-orange!",
  "hover:bg-brand! focus:bg-brand! data-highlighted:bg-brand!",
  "hover:text-white! focus:text-white! data-highlighted:text-white!",
  "hover:[&_svg]:text-white! focus:[&_svg]:text-white! data-highlighted:[&_svg]:text-white!",
);

/**
 * Desktop "Services" entry. The label links to `/services`; hovering the item
 * opens the menu of service detail pages, and the caret does it on click or
 * with the keyboard.
 */
export function ServicesNavItem({
  label,
  href,
  items,
  isActive,
}: ServiceNavItemProps) {
  const [open, setOpen] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  function clearTimer() {
    if (timer.current !== null) {
      clearTimeout(timer.current);
      timer.current = null;
    }
  }

  // Drop a pending open/close if the item unmounts mid-hover.
  useEffect(() => {
    return () => {
      if (timer.current !== null) {
        clearTimeout(timer.current);
      }
    };
  }, []);

  function openOnHover(event: React.PointerEvent) {
    if (event.pointerType !== "mouse") {
      return;
    }
    clearTimer();
    timer.current = setTimeout(() => setOpen(true), OPEN_DELAY);
  }

  function closeAfterLeaving() {
    clearTimer();
    timer.current = setTimeout(() => setOpen(false), CLOSE_DELAY);
  }

  return (
    <li
      className="flex items-center"
      onPointerEnter={openOnHover}
      onPointerLeave={closeAfterLeaving}
    >
      <Link
        href={href}
        aria-current={isActive ? "page" : undefined}
        onClick={() => setOpen(false)}
        className={cn(
          "block py-2 pl-3.5 text-[0.72rem] font-bold tracking-widest uppercase transition-colors hover:text-brand-orange",
          isActive || open ? "text-brand-orange" : "text-white/80",
        )}
      >
        {label}
      </Link>

      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger
          render={
            <button
              type="button"
              aria-label={`Show ${label} links`}
              className="flex items-center rounded-none py-2 pr-1 pl-1 text-white/70 transition-colors hover:text-brand-orange data-popup-open:text-brand-orange"
            />
          }
        >
          {/* Rotate the icon about its own centre — rotating the button would
              move it, since the button's padding is not symmetric. */}
          <ChevronDown
            className={cn("size-4 transition-transform", open && "rotate-180")}
          />
        </DropdownMenuTrigger>

        <DropdownMenuContent
          align="start"
          sideOffset={6}
          onPointerEnter={clearTimer}
          onPointerLeave={closeAfterLeaving}
          className="w-auto min-w-[19rem] rounded-none border-t-2 border-brand-orange bg-white p-1.5 shadow-xl shadow-brand/25 ring-0"
        >
          {items.map((item) => (
            <DropdownMenuItem
              key={item.slug}
              render={<Link href={`/services/${item.slug}`} />}
              className={itemClassName}
            >
              <AppIcon name={item.icon} />
              {item.title}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </li>
  );
}

/**
 * Mobile equivalent: the sheet shows the listing link followed by an indented
 * link to every service detail page. Hover has no meaning here, so it only
 * closes the sheet on navigation.
 */
export function ServicesMobileNavItem({
  label,
  href,
  items,
  isActive,
}: ServiceNavItemProps) {
  return (
    <div className="border-b border-white/10">
      <SheetClose
        nativeButton={false}
        render={
          <Link
            href={href}
            aria-current={isActive ? "page" : undefined}
            className="block w-full px-3 py-3 text-sm font-semibold tracking-wide text-white/85 uppercase hover:text-brand-orange"
          />
        }
      >
        {label}
      </SheetClose>
      <ul className="flex flex-col pb-2">
        {items.map((item) => (
          <li key={item.slug}>
            <SheetClose
              nativeButton={false}
              render={
                <Link
                  href={`/services/${item.slug}`}
                  className="flex items-center gap-2.5 px-6 py-2 text-xs font-semibold tracking-wide text-white/70 uppercase hover:text-brand-orange"
                />
              }
            >
              <AppIcon name={item.icon} className="size-4 text-brand-orange" />
              {item.title}
            </SheetClose>
          </li>
        ))}
      </ul>
    </div>
  );
}
