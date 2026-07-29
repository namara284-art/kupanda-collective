import { positioning } from "@/content/homepage";
import { siteConfig } from "@/content/site-settings";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function PositioningSection() {
  return (
    <section className="py-16 sm:py-20" aria-labelledby="positioning-heading">
      <Container className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <SectionHeading id="positioning-heading" title={positioning.heading} />
        <div className="space-y-4">
          {positioning.paragraphs.map((p) => (
            <p key={p} className="text-[1.02rem] leading-relaxed text-charcoal-700">
              {p}
            </p>
          ))}
          <p className="pt-2 text-sm font-semibold italic text-forest-600">{siteConfig.tagline}</p>
        </div>
      </Container>
    </section>
  );
}
