import type { Metadata } from "next";

import { AboutHero } from "@/components/about/about-hero";
import { Careers } from "@/components/about/careers";
import { Foundation } from "@/components/about/foundation";
import { Story } from "@/components/about/story";
import { about } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description: about.intro,
  openGraph: {
    title: "About Us",
    description: about.intro,
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <Story />
      <Foundation />
      <Careers />
    </>
  );
}
