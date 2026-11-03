import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ProcessBand } from "@/components/services/process-band";
import { ServiceCta } from "@/components/services/service-cta";
import { ServiceFaq } from "@/components/services/service-faq";
import { ServiceHero } from "@/components/services/service-hero";
import {
  ServiceBenefits,
  ServiceExpertise,
  ServiceIndustries,
  ServiceQuotes,
  ServiceStack,
} from "@/components/services/service-sections";
import { serviceDetails, serviceList } from "@/lib/site";

export function generateStaticParams() {
  return serviceList.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceDetails.find((item) => item.slug === slug);

  if (!service) {
    return { title: "Service" };
  }

  return {
    title: service.label,
    description: service.intro,
    openGraph: {
      title: service.title,
      description: service.intro,
      type: "article",
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const service = serviceDetails.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <ServiceHero service={service} />
      <ServiceExpertise service={service} />
      <ServiceStack service={service} />
      <ProcessBand
        eyebrow={service.process.eyebrow}
        title={service.process.title}
        intro={service.process.intro}
        steps={service.process.steps}
      />
      <ServiceIndustries service={service} />
      <ServiceQuotes service={service} />
      <ServiceBenefits
        eyebrow={service.benefits.eyebrow}
        title={service.benefits.title}
        intro={service.benefits.intro}
        items={service.benefits.items}
      />
      <ServiceFaq faq={service.faq} />
      <ServiceCta
        title={service.cta.title}
        description={service.cta.description}
        action={service.cta.action}
        withAllServicesLink
      />
    </>
  );
}
