"use client";

import { domAnimation, LazyMotion, MotionConfig } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Owns the site's motion runtime.
 *
 * `LazyMotion` loads only the DOM animation features the site actually uses,
 * which keeps the bundle far smaller than importing the full `motion`
 * component. `strict` enforces that rule: render `m.*` inside here, never
 * `motion.*`.
 *
 * `reducedMotion="user"` honours `prefers-reduced-motion`: transform and layout
 * animation is dropped while opacity fades remain, so the site stays calm for
 * anyone who has asked the OS for less movement.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  );
}
