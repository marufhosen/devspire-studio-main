import type { ReactNode } from "react";

import { PageTransition } from "@/components/motion/page-transition";

/**
 * A template re-mounts on every navigation (a layout does not), which is what
 * makes the shared page transition run for each route without any client-side
 * route tracking.
 */
export default function Template({ children }: { children: ReactNode }) {
  return <PageTransition>{children}</PageTransition>;
}
