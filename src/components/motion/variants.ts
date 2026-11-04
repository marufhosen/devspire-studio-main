import type { Transition, Variants, ViewportOptions } from "framer-motion";

/**
 * The site's single source of animation timing. Every entrance, hover and
 * transition should read from these tokens so the whole site moves at one
 * rhythm — long, gentle decelerations rather than bouncy springs.
 */

/** Decelerating curve for entrances: quick to start, soft on arrival. */
export const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];

/** Symmetric curve for state changes that settle back where they began. */
export const EASE_IN_OUT: [number, number, number, number] = [0.4, 0, 0.2, 1];

export const DURATION = {
  /** Hover and press feedback — must feel immediate. */
  fast: 0.22,
  /** Scroll reveals and page transitions. */
  base: 0.5,
  /** Large media and hero treatments. */
  slow: 0.7,
} as const;

export const STAGGER = {
  /** Dense rows of small items. */
  tight: 0.05,
  /** Default for card grids and list items. */
  base: 0.08,
  /** Spacious columns that deserve their own beat. */
  loose: 0.12,
} as const;

/**
 * Reveal once, just before the element is fully on screen. `amount` is kept low
 * so tall sections (a grid taller than the viewport) still trigger.
 */
export const viewportOnce: ViewportOptions = {
  once: true,
  amount: 0.15,
  margin: "0px 0px -8% 0px",
};

export const SPRING_SOFT: Transition = {
  type: "spring",
  stiffness: 260,
  damping: 30,
  mass: 0.8,
};

export type RevealDirection = "up" | "down" | "left" | "right" | "none";

export const revealOffsets: Record<
  RevealDirection,
  { x?: number; y?: number }
> = {
  up: { y: 1 },
  down: { y: -1 },
  left: { x: 1 },
  right: { x: -1 },
  none: {},
};

/**
 * Fade plus a short travel in `direction`. The offset is multiplied by
 * `distance` so callers can make a hero drift further than a caption.
 */
export function revealVariants({
  direction = "up",
  distance = 20,
  delay = 0,
}: {
  direction?: RevealDirection;
  distance?: number;
  delay?: number;
} = {}): Variants {
  const axis = revealOffsets[direction];
  const hidden: Record<string, number> = { opacity: 0 };

  if (axis.x !== undefined) hidden.x = axis.x * distance;
  if (axis.y !== undefined) hidden.y = axis.y * distance;

  return {
    hidden,
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: DURATION.base, ease: EASE_OUT, delay },
    },
  };
}

/** Parent for `StaggerItem` children; the delay cascades down the tree. */
export function staggerVariants({
  delay = 0,
  staggerChildren = STAGGER.base,
  delayChildren = 0,
}: {
  delay?: number;
  staggerChildren?: number;
  delayChildren?: number;
} = {}): Variants {
  return {
    hidden: {},
    show: {
      transition: {
        delayChildren: delay + delayChildren,
        staggerChildren,
      },
    },
  };
}

/** Child reveal used inside `<Stagger>`; inherits the parent's timeline. */
export const staggerItemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.base, ease: EASE_OUT },
  },
};

/** Shared hover/tap targets so interactive elements feel identical. */
export const HOVER_LIFT = { y: -6 } as const;
export const HOVER_LIFT_SM = { y: -2 } as const;
export const TAP_PRESS = { scale: 0.985 } as const;

export const hoverTransition: Transition = {
  duration: DURATION.fast,
  ease: EASE_OUT,
};
