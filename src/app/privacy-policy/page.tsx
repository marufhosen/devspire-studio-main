import type { Metadata } from "next";

import { PrivacyContact } from "@/components/privacy-policy/privacy-contact";
import { PrivacyContent } from "@/components/privacy-policy/privacy-content";
import { PrivacyHero } from "@/components/privacy-policy/privacy-hero";
import { privacyPolicy } from "@/lib/site";

export const metadata: Metadata = {
  title: privacyPolicy.title,
  description: privacyPolicy.summary,
  openGraph: {
    title: privacyPolicy.title,
    description: privacyPolicy.summary,
    type: "website",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PrivacyHero />
      <PrivacyContent />
      <PrivacyContact />
    </>
  );
}
