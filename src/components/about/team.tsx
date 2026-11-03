import Image from "next/image";

import { about } from "@/lib/site";

export function Team() {
  return (
    <section className="bg-slate-50 py-16 lg:py-24">
      <div className="site-container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="flex items-center justify-center gap-3 text-xs font-bold tracking-[0.2em] text-brand-accent uppercase">
            <span className="h-px w-8 bg-brand-accent" />
            Our Team
            <span className="h-px w-8 bg-brand-accent" />
          </p>
          <h2 className="mt-5 font-heading text-3xl leading-tight font-extrabold text-brand sm:text-4xl">
            Leadership
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-500 sm:text-base">
            {about.team.intro}
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {about.team.members.map((member) => (
            <article
              key={member.name}
              className="flex flex-col border-t-2 border-brand-accent bg-white shadow-[0_25px_50px_-35px_rgba(19,26,46,0.55)]"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-brand-soft">
                <Image
                  src={member.image.src}
                  alt={member.image.alt}
                  fill
                  quality={90}
                  sizes="(min-width: 768px) 380px, 100vw"
                  className="object-cover object-top"
                />
              </div>
              <div className="flex flex-1 flex-col px-7 py-7">
                <h3 className="font-heading text-lg font-bold text-brand">
                  {member.name}
                </h3>
                <p className="mt-1.5 text-[0.7rem] font-bold tracking-[0.16em] text-brand-accent uppercase">
                  {member.role}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-slate-500">
                  {member.bio}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
