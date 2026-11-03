import { Check } from "lucide-react";
import Image from "next/image";

const values = [
  "Ownership mindset",
  "Transparent delivery",
  "Long-term partnership",
];

export function Mission() {
  return (
    <section id="about" className="bg-white pb-16 lg:pb-24">
      <div className="site-container">
        <div className="grid lg:grid-cols-2">
          <div className="relative min-h-[280px] overflow-hidden sm:min-h-[360px] lg:min-h-[460px]">
            <Image
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80"
              alt="Two business partners shaking hands over an agreement"
              fill
              quality={90}
              sizes="(min-width: 1024px) 600px, 100vw"
              className="object-cover"
            />
          </div>

          <div className="flex flex-col justify-center bg-brand px-7 py-10 text-white sm:px-10 lg:px-14 lg:py-14">
            <p className="flex items-center gap-3 text-xs font-bold tracking-[0.2em] text-brand-orange uppercase">
              <span className="h-px w-8 bg-brand-orange" />
              Who We Are
            </p>
            <h2 className="mt-5 font-heading text-3xl leading-tight font-extrabold sm:text-4xl">
              Our Mission, Values and Motto
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-white/80">
              We started Devspire Studio with a simple belief — software should
              be measurable. Every product we deliver is guided by clear
              outcomes: faster operations, better decisions and experiences your
              customers remember. From the first workshop to long-term support,
              we work as one team with our clients.
            </p>

            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {values.map((value) => (
                <li
                  key={value}
                  className="flex items-center gap-2.5 text-sm text-white/90"
                >
                  <span className="flex size-5 items-center justify-center bg-brand-orange">
                    <Check className="size-3 text-white" />
                  </span>
                  {value}
                </li>
              ))}
            </ul>

            <div className="mt-9 border-t border-white/15 pt-6">
              <p className="font-signature text-3xl leading-none text-white">
                Building what&rsquo;s next
              </p>
              <p className="mt-2 text-[0.7rem] tracking-widest text-white/60 uppercase">
                Devspire Studio
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
