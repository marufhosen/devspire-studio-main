"use client";

import { AnimatePresence, m, useReducedMotion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

import {
  EASE_OUT,
  HOVER_LIFT_SM,
  TAP_PRESS,
} from "@/components/motion/variants";

/** Pixels of scroll before the control is offered. */
const REVEAL_AFTER = 480;

/**
 * Back-to-top control pinned to the bottom-right corner of the viewport.
 *
 * It appears once the reader is well into the page and steps out of the way
 * again at the top. The scroll listener is passive and only changes state when
 * the threshold is crossed, so scrolling never re-renders the page. Reduced
 * motion switches the jump to instant rather than animated.
 */
export function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    function handleScroll() {
      const shouldShow = window.scrollY > REVEAL_AFTER;
      setVisible((current) => (current === shouldShow ? current : shouldShow));
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  }

  return (
    <AnimatePresence>
      {visible ? (
        <m.div
          initial={{ opacity: 0, y: 12, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 12, scale: 0.9 }}
          transition={{ duration: 0.24, ease: EASE_OUT }}
          className="fixed right-4 bottom-4 z-40 sm:right-6 sm:bottom-6"
        >
          <m.button
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            whileHover={HOVER_LIFT_SM}
            whileTap={TAP_PRESS}
            transition={{ duration: 0.22, ease: EASE_OUT }}
            className="flex size-11 items-center justify-center bg-brand-accent text-white shadow-lg shadow-brand/30 transition-colors hover:bg-brand-accent-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent"
          >
            <ArrowUp className="size-5" aria-hidden="true" />
          </m.button>
        </m.div>
      ) : null}
    </AnimatePresence>
  );
}
