import { Stagger, StaggerItem } from "@/components/motion/stagger";
import { AppIcon } from "@/components/site/icons";
import { Card, CardContent } from "@/components/ui/card";
import { highlights } from "@/lib/site";

export function Highlights() {
  return (
    <section
      id="highlights"
      className="relative z-10 -mt-24 bg-transparent pb-16 lg:-mt-32 lg:pb-24"
    >
      <div className="site-container">
        <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item) => (
            <StaggerItem key={item.title} hover className="h-full">
              <Card className="h-full gap-4 rounded-none border-t-2 border-t-brand-accent py-6 shadow-[0_18px_40px_-24px_rgba(19,26,46,0.45)] ring-1 ring-black/5">
                <CardContent className="flex flex-col gap-3">
                  <span className="flex size-11 items-center justify-center bg-brand-soft text-brand-accent">
                    <AppIcon name={item.icon} className="size-6" />
                  </span>
                  <h3 className="font-heading text-lg font-bold text-brand">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-500">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
