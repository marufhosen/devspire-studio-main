"use client";

import { m } from "framer-motion";
import type { ReactNode } from "react";
import {
  type RevealDirection,
  revealVariants,
  viewportOnce,
} from "@/components/motion/variants";
import { cn } from "@/lib/utils";

type RevealElement = "div" | "section" | "article" | "ul" | "header" | "figure";

const elements = {
  div: m.div,
  section: m.section,
  article: m.article,
  ul: m.ul,
  header: m.header,
  figure: m.figure,
} as const;

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Anchor id, for sections that in-page links scroll to. */
  id?: string;
  /** ARIA attributes for elements that carry a landmark or tablist role. */
  role?: string;
  "aria-label"?: string;
  "aria-labelledby"?: string;
  /** Element to render — defaults to a plain `div`. */
  as?: RevealElement;
  /** Seconds to wait before this element starts. */
  delay?: number;
  /** Which way the element travels as it fades in. */
  direction?: RevealDirection;
  /** Travel distance in pixels; keep this subtle. */
  distance?: number;
};

/**
 * Scroll-triggered entrance. Wrap a heading block, a two-column row or a
 * banner: the element fades and drifts in once, the first time it comes into
 * view. For grids and lists use `<Stagger>` / `<StaggerItem>` instead so the
 * children cascade rather than moving together.
 */
export function Reveal({
  children,
  className,
  id,
  role,
  "aria-label": ariaLabel,
  "aria-labelledby": ariaLabelledBy,
  as = "div",
  delay = 0,
  direction = "up",
  distance = 20,
}: RevealProps) {
  const Component = elements[as];

  return (
    <Component
      id={id}
      role={role}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      variants={revealVariants({ direction, distance, delay })}
      className={cn(className)}
    >
      {children}
    </Component>
  );
}
