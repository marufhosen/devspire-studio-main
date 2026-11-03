import { cn } from "@/lib/utils";

/**
 * Devspire Studio lockup: a three-step growth mark beside the wordmark.
 * Drawn from inline SVG and the typography tokens rather than a raster file so
 * it stays sharp at every size and follows the brand palette automatically.
 */
export function Logo({
  className,
  tone = "light",
}: {
  className?: string;
  /** `light` renders white type for navy surfaces; `dark` renders navy type. */
  tone?: "light" | "dark";
}) {
  return (
    <span className={cn("flex items-center gap-2.5 sm:gap-3", className)}>
      <svg
        viewBox="0 0 33 40"
        aria-hidden="true"
        focusable="false"
        className="h-9 w-auto shrink-0 text-brand-orange sm:h-10"
      >
        <rect
          x="0"
          y="24"
          width="7"
          height="16"
          fill="currentColor"
          opacity="0.55"
        />
        <rect
          x="13"
          y="12"
          width="7"
          height="28"
          fill="currentColor"
          opacity="0.8"
        />
        <rect x="26" y="0" width="7" height="40" fill="currentColor" />
      </svg>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-heading text-lg font-extrabold tracking-[0.02em] sm:text-xl",
            tone === "light" ? "text-white" : "text-brand",
          )}
        >
          DEVSPIRE
        </span>
        <span className="mt-1 text-[0.55rem] font-bold tracking-[0.42em] text-brand-orange sm:text-[0.6rem]">
          STUDIO
        </span>
      </span>
    </span>
  );
}
