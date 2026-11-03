"use client";

import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Image from "next/image";
import * as React from "react";

import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { testimonials } from "@/lib/site";

const controlClass =
  "flex size-10 items-center justify-center border border-brand-soft/25 text-brand-soft/80 transition-colors hover:border-brand-accent hover:bg-brand-accent hover:text-white focus-visible:border-brand-accent focus-visible:text-white lg:size-11";

export function Testimonials() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    const onSelect = () => setCurrent(api.selectedScrollSnap());
    onSelect();
    api.on("select", onSelect);
    api.on("reInit", onSelect);

    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api]);

  return (
    <section id="testimonials" className="bg-brand py-16 lg:py-24">
      <div className="site-container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center gap-3 border border-brand-soft/20 bg-brand-soft/10 px-4 py-2 text-[0.7rem] font-bold tracking-[0.2em] text-brand-soft uppercase">
            <span className="h-px w-6 bg-brand-accent" />
            Testimonials
          </p>
          <h2 className="mt-6 font-heading text-4xl leading-[1.05] font-extrabold text-white sm:text-5xl">
            What Our Clients Say
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-white/65 sm:text-base">
            Hear from businesses that have experienced the Devspire Studio
            difference.
          </p>
        </div>

        <Carousel
          opts={{ align: "start", loop: true }}
          setApi={setApi}
          className="mt-12 lg:mt-14"
        >
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.name}>
                <figure className="border border-brand-soft/15 bg-brand-deep px-6 py-8 sm:px-10 sm:py-10 lg:px-14 lg:py-12">
                  <Quote className="size-7 text-brand-accent" />
                  <blockquote className="mt-5 font-heading text-base leading-relaxed text-white/90 sm:text-lg lg:text-xl">
                    {testimonial.quote}
                  </blockquote>
                  <figcaption className="mt-7 flex items-center gap-4">
                    <Image
                      src={testimonial.avatar.src}
                      alt={testimonial.avatar.alt}
                      width={112}
                      height={112}
                      quality={75}
                      sizes="56px"
                      className="size-12 rounded-full object-cover ring-1 ring-brand-soft/25 sm:size-14"
                    />
                    <div>
                      <p className="font-heading text-sm font-bold text-white sm:text-base">
                        {testimonial.name}
                      </p>
                      <p className="mt-0.5 text-xs text-white/60 sm:text-sm">
                        {testimonial.role}
                      </p>
                    </div>
                  </figcaption>
                </figure>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <div className="mt-8 flex items-center justify-center gap-3">
          <button
            type="button"
            aria-label="Previous testimonial"
            className={controlClass}
            onClick={() => api?.scrollPrev()}
          >
            <ChevronLeft className="size-4" />
          </button>
          <button
            type="button"
            aria-label="Next testimonial"
            className={controlClass}
            onClick={() => api?.scrollNext()}
          >
            <ChevronRight className="size-4" />
          </button>
        </div>

        <p aria-live="polite" className="sr-only">
          Testimonial {current + 1} of {testimonials.length}
        </p>
      </div>
    </section>
  );
}
