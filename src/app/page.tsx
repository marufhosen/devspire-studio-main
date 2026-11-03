import { Advantages } from "@/components/home/advantages";
import { Cta } from "@/components/home/cta";
import { Hero } from "@/components/home/hero";
import { Highlights } from "@/components/home/highlights";
import { Mission } from "@/components/home/mission";
import { SecurityCompliance } from "@/components/home/security-compliance";
import { Services } from "@/components/home/services";
import { Stats } from "@/components/home/stats";
import { Testimonials } from "@/components/home/testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Highlights />
      <Mission />
      <Stats />
      <Services />
      <Testimonials />
      <Advantages />
      <SecurityCompliance />
      <Cta />
    </>
  );
}
