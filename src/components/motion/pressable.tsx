"use client";

import { m } from "framer-motion";
import type { ReactNode } from "react";
import {
  HOVER_LIFT_SM,
  hoverTransition,
  TAP_PRESS,
} from "@/components/motion/variants";
import { cn } from "@/lib/utils";

/**
 * Pointer feedback for links and buttons: a small lift on hover and a slight
 * press on tap. It wraps the control rather than replacing it, so buttons keep
 * their existing markup, focus handling and link semantics.
 */
export function Pressable({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <m.div
      whileHover={HOVER_LIFT_SM}
      whileTap={TAP_PRESS}
      transition={hoverTransition}
      className={cn("inline-flex", className)}
    >
      {children}
    </m.div>
  );
}
