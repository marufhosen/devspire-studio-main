import { CaseStudyCard } from "@/components/case-studies/case-study-card";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import { caseStudies } from "@/lib/site";

export function CaseStudiesGrid() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="site-container">
        <Stagger className="grid auto-rows-fr gap-6 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((study) => (
            <StaggerItem key={study.slug} hover className="h-full">
              <CaseStudyCard study={study} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
