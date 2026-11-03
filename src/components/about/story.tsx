import Image from "next/image";

import { about } from "@/lib/site";

export function Story() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="site-container">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative aspect-[4/3] overflow-hidden shadow-[0_35px_65px_-45px_rgba(19,26,46,0.55)]">
            <Image
              src={about.story.image.src}
              alt={about.story.image.alt}
              fill
              quality={90}
              sizes="(min-width: 1024px) 560px, 100vw"
              className="object-cover"
            />
          </div>

          <div>
            <p className="flex items-center gap-3 text-xs font-bold tracking-[0.2em] text-brand-accent uppercase">
              <span className="h-px w-8 bg-brand-accent" />
              Our Story
            </p>
            <h2 className="mt-5 font-heading text-3xl leading-tight font-extrabold text-brand sm:text-4xl">
              {about.story.title}
            </h2>
            <div className="mt-5 space-y-4">
              {about.story.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-sm leading-relaxed text-slate-500 sm:text-base"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
