"use client";

import { m } from "framer-motion";
import type { ReactNode } from "react";
import {
  HOVER_LIFT,
  hoverTransition,
  STAGGER,
  staggerItemVariants,
  staggerVariants,
  viewportOnce,
} from "@/components/motion/variants";
import { cn } from "@/lib/utils";

type StaggerProps = {
  children: ReactNode;
  className?: string;
  /** Seconds to wait before the first child starts. */
  delay?: number;
  /** Seconds between each child. */
  gap?: number;
  as?: "div" | "ul" | "ol" | "dl";
};

const containers = { div: m.div, ul: m.ul, ol: m.ol, dl: m.dl } as const;

/**
 * Scroll-triggered container whose direct `<StaggerItem>` children reveal one
 * after another. The parent owns the timeline, so children never need their own
 * delays and stay in sync on every breakpoint.
 */
export function Stagger({
  children,
  className,
  delay = 0,
  gap = STAGGER.base,
  as = "div",
}: StaggerProps) {
  const Component = containers[as];

  return (
    <Component
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      variants={staggerVariants({ delay, staggerChildren: gap })}
      className={cn(className)}
    >
      {children}
    </Component>
  );
}

type StaggerItemProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "li" | "figure";
  /** Add the shared card lift on pointer hover. */
  hover?: boolean;
};

const items = { div: m.div, li: m.li, figure: m.figure } as const;

/**
 * One child of `<Stagger>`. `hover` opts into the shared lift-and-settle used by
 * cards, so hover feedback across the site is one consistent motion.
 */
export function StaggerItem({
  children,
  className,
  as = "div",
  hover = false,
}: StaggerItemProps) {
  const Component = items[as];

  return (
    <Component
      variants={staggerItemVariants}
      whileHover={hover ? HOVER_LIFT : undefined}
      transition={hoverTransition}
      className={cn(className)}
    >
      {children}
    </Component>
  );
}
