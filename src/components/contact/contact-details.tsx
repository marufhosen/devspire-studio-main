import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

import { ContactForm } from "@/components/contact/contact-form";
import { contactChannels, contactPage } from "@/lib/site";
import { cn } from "@/lib/utils";

const channelIcons = {
  mail: Mail,
  phone: Phone,
  "map-pin": MapPin,
} as const;

export function ContactDetails() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="site-container grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
        <ContactForm />

        <div>
          <h2 className="font-heading text-2xl leading-tight font-extrabold text-brand sm:text-3xl">
            {contactPage.information.title}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-500 sm:text-base">
            {contactPage.information.description}
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {contactChannels.map((channel) => {
              const Icon = channelIcons[channel.icon];
              const isExternal = channel.href.startsWith("http");

              return (
                <div
                  key={channel.label}
                  className={cn(
                    "border-t-2 border-brand-orange bg-slate-50 p-6",
                    channel.wide && "sm:col-span-2",
                  )}
                >
                  <span className="flex size-10 items-center justify-center bg-brand text-white">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-[0.7rem] font-bold tracking-[0.2em] text-brand uppercase">
                    {channel.label}
                  </h3>
                  {/* Channels that leave the site link their value itself, so
                      clicking the address opens Google Maps in a new tab. */}
                  {isExternal ? (
                    <a
                      href={channel.href}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-2 block w-fit text-sm leading-relaxed text-slate-600 underline decoration-slate-300 underline-offset-4 transition-colors hover:text-brand hover:decoration-brand"
                    >
                      {channel.value}
                    </a>
                  ) : (
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {channel.value}
                    </p>
                  )}
                  <a
                    href={channel.href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noreferrer" : undefined}
                    className="mt-4 inline-flex items-center gap-2 text-[0.7rem] font-bold tracking-[0.16em] text-brand-orange uppercase transition-colors hover:text-brand-orange-dark"
                  >
                    {channel.actionLabel}
                    <ArrowRight className="size-3.5" />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
