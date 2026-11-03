import { ArrowRight } from "lucide-react";
import Image from "next/image";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section id="home" className="relative bg-brand-soft">
      {/* Soft background layers */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden bg-gradient-to-br from-white via-[#eff1fb] to-[#dfe0f7]">
        <div className="absolute -top-24 -left-24 size-[26rem] rounded-full bg-white/70 blur-3xl" />
        <div className="absolute top-10 right-0 size-[30rem] rounded-full bg-[#cfd9f5]/40 blur-3xl" />
      </div>

      <div className="site-container relative">
        <div className="grid items-center gap-10 pt-8 pb-32 lg:grid-cols-[1.05fr_1fr] lg:gap-6 lg:pt-14 lg:pb-44">
          <div className="max-w-xl">
            <p className="flex items-center gap-3 text-xs font-bold tracking-[0.2em] text-brand uppercase">
              <span className="h-px w-8 bg-brand-accent" />
              Welcome to Devspire Studio
            </p>
            <h1 className="mt-5 font-heading text-4xl leading-[1.1] font-extrabold tracking-tight text-brand sm:text-5xl lg:text-[3.4rem]">
              Software &amp; Data Solutions For Your Business
            </h1>
            <p className="mt-6 max-w-lg text-sm leading-relaxed text-slate-600 sm:text-base">
              Technology that drives your business forward. We are a product and
              engineering studio building custom software, SaaS platforms and
              analytics that help teams grow with confidence.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="/contact"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "h-11 bg-brand-accent px-7 text-[0.72rem] font-bold tracking-[0.16em] text-white uppercase shadow-lg shadow-brand-accent/25 hover:bg-brand-accent-dark",
                )}
              >
                Get a Quote
              </a>
              <a
                href="/services"
                className={cn(
                  buttonVariants({ variant: "ghost", size: "lg" }),
                  "h-11 gap-2 px-4 text-[0.72rem] font-bold tracking-[0.16em] text-brand uppercase hover:bg-white/70 hover:text-brand",
                )}
              >
                Our Services
                <ArrowRight className="size-4 text-brand-accent" />
              </a>
            </div>
          </div>

          <div className="relative mr-auto ml-auto hidden w-full max-w-sm -mb-20 md:block lg:-mb-32 lg:mr-0 lg:max-w-lg">
            <div className="relative aspect-[4/5]">
              <Image
                src="https://images.unsplash.com/photo-1498758536662-35b82cd15e29?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Consultant in a business suit ready to help"
                fill
                preload
                quality={90}
                sizes="(min-width: 1024px) 460px, 100vw"
                className="object-cover object-top [mask-image:linear-gradient(to_bottom,black_76%,transparent_100%)]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
