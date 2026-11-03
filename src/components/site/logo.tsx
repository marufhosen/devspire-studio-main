import Image from "next/image";

import { cn } from "@/lib/utils";

/**
 * Devspire Studio lockup: the studio's own badge (`public/devspire-logo.jpg`,
 * masked to its circular rim) beside the DEVSPIRE / STUDIO wordmark, which is
 * set in the heading font so it stays legible at header size.
 */
export function Logo({
  className,
  tone = "light",
}: {
  className?: string;
  /** `light` renders light type for dark surfaces; `dark` renders navy type. */
  tone?: "light" | "dark";
}) {
  return (
    <span className={cn("flex items-center gap-2.5 sm:gap-3", className)}>
      <Image
        src="/devspire-logo.jpg"
        alt=""
        width={884}
        height={884}
        sizes="(min-width: 640px) 48px, 44px"
        className="size-11 shrink-0 rounded-full object-cover sm:size-12"
      />
      <span className="flex flex-col leading-none">
        <span className="bg-gradient-to-r from-brand-cyan via-brand-indigo to-brand-violet bg-clip-text font-heading text-lg font-extrabold tracking-[0.02em] text-transparent sm:text-xl">
          DEVSPIRE
        </span>
        <span
          className={cn(
            "mt-1 text-[0.55rem] font-bold tracking-[0.42em] sm:text-[0.6rem]",
            tone === "light" ? "text-brand-silver" : "text-brand",
          )}
        >
          STUDIO
        </span>
      </span>
    </span>
  );
}
