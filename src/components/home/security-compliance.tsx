import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";
import { securityCompliance } from "@/lib/site";

export function SecurityCompliance() {
  return (
    <section
      id="security-compliance"
      className="relative overflow-hidden bg-brand py-16 lg:py-24"
    >
      <div className="pointer-events-none absolute -top-24 -right-20 size-72 rounded-full bg-white/5" />
      <div className="pointer-events-none absolute -bottom-28 -left-24 size-72 rounded-full bg-white/5" />

      <div className="site-container relative">
        <div className="mx-auto max-w-3xl text-center">
          <p className="flex items-center justify-center gap-3 text-xs font-bold tracking-[0.2em] text-brand-orange uppercase">
            <span className="h-px w-8 bg-brand-orange" />
            {securityCompliance.eyebrow}
            <span className="h-px w-8 bg-brand-orange" />
          </p>
          <h2 className="mt-5 font-heading text-3xl leading-tight font-extrabold text-white sm:text-4xl">
            {securityCompliance.title}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-white/70 sm:text-base">
            {securityCompliance.description}
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {securityCompliance.standards.map((standard) => (
            <Card
              key={standard.name}
              className="gap-4 rounded-none border-t-2 border-t-brand-orange py-6 shadow-[0_18px_40px_-24px_rgba(15,59,107,0.45)] ring-1 ring-black/5"
            >
              <CardContent className="flex flex-col items-center gap-3 text-center">
                <div className="flex h-20 items-center justify-center">
                  <Image
                    src={standard.logo.src}
                    alt={standard.logo.alt}
                    width={standard.logo.width}
                    height={standard.logo.height}
                    sizes="96px"
                    className="h-full w-auto object-contain"
                  />
                </div>
                <h3 className="font-heading text-sm font-bold tracking-[0.12em] text-brand uppercase">
                  {standard.name}
                </h3>
                <p className="text-sm leading-relaxed text-slate-500">
                  {standard.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
