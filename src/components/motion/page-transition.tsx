"use client";

import { m } from "framer-motion";
import type { ReactNode } from "react";
import { DURATION, EASE_OUT } from "@/components/motion/variants";

/**
 * Route entrance. Mounted from `app/template.tsx`, so it re-runs on every
 * navigation and gives each page the same short fade-and-rise as it appears.
 * Kept deliberately quick — a page transition should never delay reading.
 */
export function PageTransition({ children }: { children: ReactNode }) {
  return (
    <m.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: DURATION.base, ease: EASE_OUT }}
    >
      {children}
    </m.div>
  );
}
