import { FileText } from "lucide-react";

import { privacyPolicy } from "@/lib/site";

export function PrivacyHero() {
  return (
    <section className="relative overflow-hidden bg-brand-soft">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white via-[#eff1fb] to-[#dfe0f7]" />
      <div className="pointer-events-none absolute -top-28 right-0 size-[26rem] rounded-full bg-[#cfd9f5]/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-24 size-[24rem] rounded-full bg-white/70 blur-3xl" />

      <div className="site-container relative py-16 lg:py-24">
        <div className="max-w-3xl">
          <p className="flex items-center gap-3 text-xs font-bold tracking-[0.2em] text-brand uppercase">
            <span className="h-px w-8 bg-brand-accent" />
            {privacyPolicy.eyebrow}
          </p>
          <h1 className="mt-5 font-heading text-4xl leading-[1.1] font-extrabold tracking-tight text-brand sm:text-5xl">
            {privacyPolicy.title}
          </h1>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
            {privacyPolicy.intro}
          </p>
          <p className="mt-8 inline-flex items-center gap-2.5 border border-brand/15 bg-white/80 px-4 py-2 text-[0.68rem] font-bold tracking-[0.16em] text-brand uppercase">
            <FileText className="size-3.5 text-brand-accent" />
            {privacyPolicy.lastUpdatedLabel}: {privacyPolicy.lastUpdated}
          </p>
        </div>
      </div>
    </section>
  );
}
