import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PartnerCategoryCard } from "@/components/shared/PartnerCategoryCard";
import { PartnerForm } from "@/components/forms/PartnerForm";
import { partnershipPathways } from "@/content/partnership";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Partner With Us",
  description:
    "Partner with Kupanda Collective on programme funding, co-design, research, caregiver credentialing, enterprise financing, policy implementation and more.",
  path: "/partner-with-us",
});

export default function PartnerWithUsPage() {
  return (
    <>
      <div className="border-b border-sage-200 bg-cream-100 py-10 sm:py-14">
        <Container>
          <Breadcrumbs items={[{ label: "Partner With Us" }]} />
          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.14em] text-forest-600">Partner With Us</p>
          <h1 className="mt-2 max-w-3xl text-balance text-[clamp(2rem,1.7rem+1.6vw,3rem)] font-semibold text-forest-900">
            Build community-led childcare systems with us
          </h1>
          <p className="mt-4 max-w-2xl text-[1.05rem] leading-relaxed text-charcoal-700">
            Kupanda Collective works with foundations, government, researchers, technical partners and
            refugee-led organisations. Whatever your organisation brings, there is likely a pathway below.
          </p>
        </Container>
      </div>

      <section className="py-14 sm:py-16" aria-labelledby="pathways-heading">
        <Container>
          <SectionHeading id="pathways-heading" title="Ways to work together" align="center" />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {partnershipPathways.map((pathway) => (
              <PartnerCategoryCard key={pathway.title} pathway={pathway} />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-sage-100 py-14 sm:py-16" aria-labelledby="enquiry-heading">
        <Container className="max-w-2xl">
          <SectionHeading id="enquiry-heading" title="Send a partnership enquiry" align="center" />
          <div className="mt-8 rounded-2xl border border-sage-200 bg-white p-6 sm:p-8">
            <PartnerForm />
          </div>
        </Container>
      </section>
    </>
  );
}
