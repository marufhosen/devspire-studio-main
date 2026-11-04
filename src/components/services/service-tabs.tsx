"use client";

import { m } from "framer-motion";
import { type KeyboardEvent, useRef, useState } from "react";

import { DURATION, EASE_OUT } from "@/components/motion/variants";
import { AppIcon } from "@/components/site/icons";
import type { ServiceTab } from "@/lib/site";
import { cn } from "@/lib/utils";

export function ServiceTabs({
  tabs,
  idPrefix,
}: {
  tabs: readonly ServiceTab[];
  idPrefix: string;
}) {
  const [activeId, setActiveId] = useState(tabs[0].id);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const activeTab = tabs.find((tab) => tab.id === activeId) ?? tabs[0];

  function handleKeyDown(
    event: KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) {
    const lastIndex = tabs.length - 1;
    let nextIndex: number | null = null;

    if (event.key === "ArrowRight") {
      nextIndex = index === lastIndex ? 0 : index + 1;
    } else if (event.key === "ArrowLeft") {
      nextIndex = index === 0 ? lastIndex : index - 1;
    } else if (event.key === "Home") {
      nextIndex = 0;
    } else if (event.key === "End") {
      nextIndex = lastIndex;
    }

    if (nextIndex === null) {
      return;
    }

    event.preventDefault();
    setActiveId(tabs[nextIndex].id);
    tabRefs.current[nextIndex]?.focus();
  }

  const tablistClass =
    tabs.length > 4
      ? "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6"
      : "grid grid-cols-2 lg:grid-cols-4";

  return (
    <div className="mt-10">
      <div role="tablist" aria-label="Service details" className={tablistClass}>
        {tabs.map((tab, index) => {
          const isActive = tab.id === activeTab.id;

          return (
            <button
              key={tab.id}
              ref={(element) => {
                tabRefs.current[index] = element;
              }}
              type="button"
              role="tab"
              id={`${idPrefix}-tab-${tab.id}`}
              aria-selected={isActive}
              aria-controls={`${idPrefix}-panel-${tab.id}`}
              tabIndex={isActive ? 0 : -1}
              onClick={() => setActiveId(tab.id)}
              onKeyDown={(event) => handleKeyDown(event, index)}
              className={cn(
                "relative px-3 py-4 text-[0.7rem] font-bold tracking-[0.18em] uppercase transition-colors sm:text-xs sm:tracking-[0.22em]",
                "focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-brand-accent",
                isActive
                  ? "bg-brand-deep text-white"
                  : "text-brand-soft/60 hover:bg-brand-soft/10 hover:text-white",
              )}
            >
              {tab.label}
              {isActive ? (
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-brand-accent" />
              ) : null}
            </button>
          );
        })}
      </div>

      {tabs.map((tab) => {
        const isActive = tab.id === activeTab.id;

        return (
          <div
            key={tab.id}
            role="tabpanel"
            id={`${idPrefix}-panel-${tab.id}`}
            aria-labelledby={`${idPrefix}-tab-${tab.id}`}
            hidden={!isActive}
            className="mt-6 border border-brand-soft/15 bg-brand-deep px-6 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-12"
          >
            {/* Panels stay mounted for ARIA; the selected one fades in. */}
            <m.div
              initial={false}
              animate={isActive ? "show" : "hidden"}
              variants={{
                hidden: { opacity: 0, y: 8 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: DURATION.base, ease: EASE_OUT },
                },
              }}
              className="grid items-center gap-8 lg:grid-cols-[auto_1fr] lg:gap-14"
            >
            <div className="flex justify-center">
              <span className="flex size-20 items-center justify-center rounded-full bg-brand-soft/10 lg:size-28">
                <AppIcon
                  name={tab.icon}
                  className="size-9 text-brand-accent lg:size-11"
                />
              </span>
            </div>

            <div>
              <h3 className="font-heading text-xl font-extrabold text-white sm:text-2xl">
                {tab.heading}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/75 sm:text-base">
                {tab.description}
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {tab.items.map((item) => (
                  <li
                    key={item}
                    className="border border-brand-soft/20 bg-brand-soft/10 px-3 py-1.5 text-[0.7rem] font-semibold tracking-wide text-brand-soft uppercase"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              </div>
            </m.div>
          </div>
        );
      })}
    </div>
  );
}
