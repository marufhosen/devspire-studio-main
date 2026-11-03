"use client";

import { CheckCircle2 } from "lucide-react";
import { type KeyboardEvent, useRef, useState } from "react";

import { AppIcon } from "@/components/site/icons";
import { about } from "@/lib/site";
import { cn } from "@/lib/utils";

const tabs = about.foundation.tabs;

export function Foundation() {
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

  return (
    <section className="bg-brand py-16 lg:py-24">
      <div className="site-container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center gap-3 border border-brand-soft/20 bg-brand-soft/10 px-4 py-2 text-[0.7rem] font-bold tracking-[0.2em] text-brand-soft uppercase">
            What Drives Us
          </p>
          <h2
            id="foundation-heading"
            className="mt-6 font-heading text-3xl leading-tight font-extrabold text-white sm:text-4xl"
          >
            Our Foundation
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-white/70 sm:text-base">
            {about.foundation.intro}
          </p>
        </div>

        <div
          role="tablist"
          aria-labelledby="foundation-heading"
          className="mt-12 grid grid-cols-3 border border-brand-soft/15 bg-brand-soft/5"
        >
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
                id={`foundation-tab-${tab.id}`}
                aria-selected={isActive}
                aria-controls={`foundation-panel-${tab.id}`}
                tabIndex={isActive ? 0 : -1}
                onClick={() => setActiveId(tab.id)}
                onKeyDown={(event) => handleKeyDown(event, index)}
                className={cn(
                  "relative px-3 py-4 text-[0.7rem] font-bold tracking-[0.18em] uppercase transition-colors sm:text-xs sm:tracking-[0.24em]",
                  "focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-brand-orange",
                  isActive
                    ? "bg-brand-deep text-white"
                    : "text-brand-soft/60 hover:bg-brand-soft/10 hover:text-white",
                )}
              >
                {tab.label}
                {isActive ? (
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-brand-orange" />
                ) : null}
              </button>
            );
          })}
        </div>

        {tabs.map((tab) => (
          <div
            key={tab.id}
            role="tabpanel"
            id={`foundation-panel-${tab.id}`}
            aria-labelledby={`foundation-tab-${tab.id}`}
            hidden={tab.id !== activeTab.id}
            className="mt-6 border border-brand-soft/15 bg-brand-deep px-8 py-10 lg:px-12 lg:py-14"
          >
            <div className="grid items-center gap-8 lg:grid-cols-[auto_1fr] lg:gap-14">
              <div className="flex justify-center">
                <span className="flex size-24 items-center justify-center rounded-full bg-brand-soft/10 lg:size-32">
                  <AppIcon
                    name={tab.icon}
                    className="size-10 text-brand-orange lg:size-12"
                  />
                </span>
              </div>

              <div>
                <h3 className="font-heading text-2xl font-extrabold text-white sm:text-3xl">
                  {tab.heading}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-white/75 sm:text-base">
                  {tab.description}
                </p>
                <ul className="mt-6 grid gap-3">
                  {tab.points.map((point) => (
                    <li
                      key={point.text}
                      className="flex items-start gap-3 text-sm leading-relaxed text-white/85 sm:text-base"
                    >
                      <CheckCircle2
                        className="mt-0.5 size-4 shrink-0 text-brand-orange"
                        aria-hidden="true"
                      />
                      <span>
                        {point.label ? (
                          <strong className="font-semibold text-white">
                            {point.label}:{" "}
                          </strong>
                        ) : null}
                        {point.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
