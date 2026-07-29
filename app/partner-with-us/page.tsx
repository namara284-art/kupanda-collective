import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { PartnerForm } from "@/components/forms/PartnerForm";
import { partnershipPathways, partnerPageIntro, whyPartner, whatKupandaBrings } from "@/content/partnership";
import { buildMetadata } from "@/lib/metadata";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { StaggerGroup } from "@/components/motion/StaggerGroup";
import { StaggerItem } from "@/components/motion/StaggerItem";

export const metadata: Metadata = buildMetadata({
  title: "Partner With Us",
  description: "Partner with Kupanda Collective on programme funding, co-design, research, caregiver credentialing, enterprise financing, policy implementation and more.",
  path: "/partner-with-us",
});

export default function PartnerWithUsPage() {
  return (
    <>
      <div className="border-b border-sage-200 bg-cream-100 py-14 sm:py-20">
        <Container>
          <Breadcrumbs items={[{ label: "Partner With Us" }]} />
          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.14em] text-forest-600">Partner With Us</p>
          <h1 className="mt-2 max-w-3xl text-balance text-[clamp(2rem,1.7rem+1.8vw,3.3rem)] font-semibold text-forest-900">
            {partnerPageIntro.heading}
          </h1>
          <p className="mt-4 max-w-2xl text-[1.08rem] leading-relaxed text-charcoal-700">{partnerPageIntro.body}</p>
        </Container>
      </div>

      <section className="py-14 sm:py-16" aria-labelledby="why-heading">
        <Container className="max-w-3xl">
          <ScrollReveal>
            <h2 id="why-heading" className="font-heading text-2xl font-semibold text-forest-900">
              {whyPartner.heading}
            </h2>
          </ScrollReveal>
          <StaggerGroup as="ul" interval="tight" className="mt-6 space-y-4">
            {whyPartner.reasons.map((reason) => (
              <StaggerItem key={reason} as="li" className="flex gap-3">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-forest-600" aria-hidden="true" />
                <span className="text-[1.02rem] leading-relaxed text-charcoal-700">{reason}</span>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Container>
      </section>

      {/* Partnership pathways as a flowing, divided list, not a repeated card grid. */}
      <section className="bg-sage-100 py-14 sm:py-16" aria-labelledby="pathways-heading">
        <Container className="max-w-3xl">
          <ScrollReveal>
            <h2 id="pathways-heading" className="font-heading text-2xl font-semibold text-forest-900">
              Ways to work together
            </h2>
          </ScrollReveal>
          <StaggerGroup interval="tight" className="mt-6 divide-y divide-sage-300 rounded-2xl border border-sage-300 bg-white">
            {partnershipPathways.map((pathway) => (
              <StaggerItem key={pathway.title} className="flex flex-col gap-2 p-5 sm:flex-row sm:items-start sm:gap-8 sm:p-6">
                <h3 className="shrink-0 font-heading text-lg font-medium text-forest-800 sm:w-64">{pathway.title}</h3>
                <div>
                  <p className="text-sm leading-relaxed text-charcoal-700">{pathway.description}</p>
                  <ul className="mt-2 flex flex-wrap gap-1.5" aria-label="Relevant audiences">
                    {pathway.audiences.map((audience) => (
                      <li key={audience} className="rounded-full bg-sage-100 px-2.5 py-1 text-xs font-medium text-forest-800">
                        {audience}
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Container>
      </section>

      <section className="py-14 sm:py-16" aria-labelledby="brings-heading">
        <Container className="max-w-3xl">
          <ScrollReveal>
            <h2 id="brings-heading" className="font-heading text-2xl font-semibold text-forest-900">
              {whatKupandaBrings.heading}
            </h2>
            <p className="mt-4 text-[1.02rem] leading-relaxed text-charcoal-700">{whatKupandaBrings.body}</p>
          </ScrollReveal>
        </Container>
      </section>

      <section className="bg-clay-100 py-14 sm:py-16" aria-labelledby="enquiry-heading">
        <Container className="max-w-2xl">
          <ScrollReveal variant="scale">
            <h2 id="enquiry-heading" className="text-center font-heading text-2xl font-semibold text-forest-900">
              Send a partnership enquiry
            </h2>
            <div className="mt-8 rounded-3xl border border-sage-200 bg-white p-6 sm:p-8">
              <PartnerForm />
            </div>
          </ScrollReveal>
        </Container>
      </section>
    </>
  );
}
