import type { Metadata } from "next";

import { ContactDetails } from "@/components/contact/contact-details";
import { ContactHero } from "@/components/contact/contact-hero";
import { ContactHours } from "@/components/contact/contact-hours";
import { contactPage } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: contactPage.intro,
  openGraph: {
    title: "Contact Us",
    description: contactPage.intro,
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactDetails />
      <ContactHours />
    </>
  );
}
