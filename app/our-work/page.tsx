import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SystemsDiagram } from "@/components/programme/SystemsDiagram";
import { PillarSection } from "@/components/programme/PillarSection";
import { programmes } from "@/content/programmes";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Our Work",
  description:
    "Kupanda Collective's five connected programme pillars: early childhood development, health and nurturing care, caregiver livelihoods, participation and social cohesion, and evidence and policy influence.",
  path: "/our-work",
});

export default function OurWorkPage() {
  return (
    <>
      <div className="border-b border-sage-200 bg-cream-100 py-10 sm:py-14">
        <Container>
          <Breadcrumbs items={[{ label: "Our Work" }]} />
          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.14em] text-forest-600">Our Work</p>
          <h1 className="mt-2 max-w-3xl text-balance text-[clamp(2rem,1.7rem+1.6vw,3rem)] font-semibold text-forest-900">
            Five programme pillars, one system around every child and family
          </h1>
          <p className="mt-4 max-w-2xl text-[1.05rem] leading-relaxed text-charcoal-700">
            Kupanda Collective does not run five separate programmes. Early childhood development, health,
            livelihoods, participation and evidence are designed to reinforce one another around the same
            children, caregivers and communities — including families in humanitarian and displacement contexts.
          </p>
        </Container>
      </div>

      <section className="py-14 sm:py-16" aria-labelledby="systems-heading">
        <Container>
          <SectionHeading
            id="systems-heading"
            eyebrow="How the pillars connect"
            title="A system, not a set of separate services"
            align="center"
            description="Each pillar strengthens the environment around the child, the caregiver and the wider community — and each depends on the others to work."
          />
          <div className="mt-10">
            <SystemsDiagram />
          </div>
        </Container>
      </section>

      <div>
        {programmes.map((programme, index) => (
          <PillarSection key={programme.slug} programme={programme} index={index} />
        ))}
      </div>
    </>
  );
}
