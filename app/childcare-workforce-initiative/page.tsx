import type { Metadata } from "next";
import { AlertTriangle, MapPin, Calendar, Landmark } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Timeline } from "@/components/initiative/Timeline";
import { ResultsTable } from "@/components/initiative/ResultsTable";
import { BudgetTable } from "@/components/initiative/BudgetTable";
import { ComponentCard } from "@/components/initiative/ComponentCard";
import { DownloadCard } from "@/components/shared/DownloadCard";
import { ImagePlaceholder } from "@/components/shared/ImagePlaceholder";
import { buildMetadata } from "@/lib/metadata";
import {
  initiativeMeta,
  theGap,
  policyWindow,
  theModel,
  components,
  pathway,
  results,
  resultsNote,
  budget,
  budgetTotal,
  financialSustainability,
  governmentIntegration,
  evidenceAndLearning,
  potentialPartners,
  whyNow,
} from "@/content/initiative";

export const metadata: Metadata = buildMetadata({
  title: initiativeMeta.title,
  description:
    "A proposed three-year, USD 800,000 initiative building a professionalised, community-financed childcare economy in Nakivale Refugee Settlement, Uganda.",
  path: "/childcare-workforce-initiative",
});

export default function ChildcareWorkforceInitiativePage() {
  return (
    <>
      <div className="border-b border-sage-200 bg-cream-100 py-10 sm:py-14">
        <Container>
          <Breadcrumbs items={[{ label: "Childcare Workforce Initiative" }]} />
          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.14em] text-forest-600">
            Flagship initiative
          </p>
          <h1 className="mt-2 max-w-4xl text-balance text-[clamp(2rem,1.6rem+2vw,3.2rem)] font-semibold text-forest-900">
            {initiativeMeta.title}
          </h1>
          <p className="mt-4 max-w-3xl text-[1.15rem] leading-relaxed text-charcoal-700">
            {initiativeMeta.subtitle}
          </p>

          <dl className="mt-7 grid gap-4 sm:grid-cols-3">
            <div className="flex items-start gap-2.5 rounded-xl border border-sage-200 bg-white p-4">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-forest-600" aria-hidden="true" />
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wide text-charcoal-500">Location</dt>
                <dd className="text-sm font-medium text-charcoal-900">{initiativeMeta.location}</dd>
              </div>
            </div>
            <div className="flex items-start gap-2.5 rounded-xl border border-sage-200 bg-white p-4">
              <Calendar className="mt-0.5 h-5 w-5 shrink-0 text-forest-600" aria-hidden="true" />
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wide text-charcoal-500">Duration</dt>
                <dd className="text-sm font-medium text-charcoal-900">{initiativeMeta.duration}</dd>
              </div>
            </div>
            <div className="flex items-start gap-2.5 rounded-xl border border-sage-200 bg-white p-4">
              <Landmark className="mt-0.5 h-5 w-5 shrink-0 text-forest-600" aria-hidden="true" />
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wide text-charcoal-500">
                  Scale of proposed investment
                </dt>
                <dd className="text-sm font-medium text-charcoal-900">{initiativeMeta.budget}</dd>
              </div>
            </div>
          </dl>

          <div className="mt-6 flex flex-wrap gap-3">
            <Button href="/partner-with-us" variant="primary">
              Partner on this initiative
            </Button>
            <Button href="#components" variant="secondary">
              See the model
            </Button>
          </div>
        </Container>
      </div>

      <div className="border-b border-clay-500/30 bg-clay-100">
        <Container className="flex items-start gap-3 py-4">
          <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-clay-600" aria-hidden="true" />
          <p className="text-sm leading-relaxed text-charcoal-900">{initiativeMeta.disclaimer}</p>
        </Container>
      </div>

      <section className="py-14 sm:py-16">
        <Container className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading title={theGap.heading} />
            <div className="mt-4 space-y-4">
              {theGap.paragraphs.map((p) => (
                <p key={p} className="leading-relaxed text-charcoal-700">
                  {p}
                </p>
              ))}
            </div>
          </div>
          <ImagePlaceholder
            aspect="aspect-[4/3]"
            slot={{ alt: "Everyday childcare in Nakivale Refugee Settlement — photograph to be supplied by Kupanda Collective" }}
          />
        </Container>
      </section>

      <section className="bg-sage-100 py-14 sm:py-16">
        <Container className="max-w-3xl">
          <SectionHeading title={policyWindow.heading} />
          <div className="mt-4 space-y-4">
            {policyWindow.paragraphs.map((p) => (
              <p key={p} className="leading-relaxed text-charcoal-700">
                {p}
              </p>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-16" aria-labelledby="model-heading">
        <Container>
          <SectionHeading id="model-heading" title={theModel.heading} description={theModel.intro} />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {theModel.points.map((point) => (
              <div key={point.title} className="rounded-2xl border border-sage-200 bg-white p-5">
                <h3 className="font-semibold text-forest-900">{point.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal-700">{point.description}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 max-w-3xl leading-relaxed text-charcoal-700">{theModel.closing}</p>
        </Container>
      </section>

      <section id="components" className="scroll-mt-20 bg-forest-900 py-14 text-cream-50 sm:py-16" aria-labelledby="components-heading">
        <Container>
          <SectionHeading
            id="components-heading"
            eyebrow="Programme design"
            title="Five connected components"
            align="center"
            className="[&_h2]:text-cream-50 [&_p]:text-sage-100"
          />
          <div className="mt-10 grid gap-5">
            {components.map((item) => (
              <ComponentCard key={item.number} item={item} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-16" aria-labelledby="pathway-heading">
        <Container>
          <SectionHeading
            id="pathway-heading"
            eyebrow="Implementation"
            title="Three-year implementation pathway"
            align="center"
          />
          <div className="mt-10">
            <Timeline pathway={pathway} />
          </div>
        </Container>
      </section>

      <section id="results" className="scroll-mt-20 bg-sage-100 py-14 sm:py-16" aria-labelledby="results-heading">
        <Container>
          <SectionHeading
            id="results-heading"
            eyebrow="Proposed three-year targets"
            title="Results framework"
            description={resultsNote}
          />
          <div className="mt-8">
            <ResultsTable results={results} />
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-16" aria-labelledby="finance-heading">
        <Container>
          <SectionHeading id="finance-heading" title={financialSustainability.heading} />
          <div className="mt-4 max-w-3xl space-y-4">
            {financialSustainability.paragraphs.map((p) => (
              <p key={p} className="leading-relaxed text-charcoal-700">
                {p}
              </p>
            ))}
          </div>
          <div className="mt-8">
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-charcoal-500">
              Proposed three-year budget allocation (USD)
            </h3>
            <BudgetTable budget={budget} total={budgetTotal} />
          </div>
        </Container>
      </section>

      <section className="bg-sage-100 py-14 sm:py-16">
        <Container className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading title={governmentIntegration.heading} />
            <div className="mt-4 space-y-4">
              {governmentIntegration.paragraphs.map((p) => (
                <p key={p} className="leading-relaxed text-charcoal-700">
                  {p}
                </p>
              ))}
            </div>
          </div>
          <div>
            <SectionHeading title={evidenceAndLearning.heading} />
            <div className="mt-4 space-y-4">
              {evidenceAndLearning.paragraphs.map((p) => (
                <p key={p} className="leading-relaxed text-charcoal-700">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-16">
        <Container className="max-w-3xl">
          <SectionHeading title={whyNow.heading} />
          <div className="mt-4 space-y-4">
            {whyNow.paragraphs.map((p) => (
              <p key={p} className="leading-relaxed text-charcoal-700">
                {p}
              </p>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-sage-100 py-14 sm:py-16" aria-labelledby="partners-heading">
        <Container>
          <SectionHeading id="partners-heading" title="Potential partners" align="center" />
          <ul className="mx-auto mt-8 grid max-w-3xl gap-3 sm:grid-cols-2">
            {potentialPartners.map((partner) => (
              <li key={partner} className="rounded-xl bg-white p-4 text-sm leading-relaxed text-charcoal-700">
                {partner}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="py-14 sm:py-16" aria-labelledby="download-heading">
        <Container className="max-w-3xl">
          <SectionHeading id="download-heading" title="Download the concept note" align="center" />
          <div className="mt-8">
            <DownloadCard
              title="Strengthening the Childcare Workforce in Refugee Communities — Concept Note"
              description="The full concept note, including detailed programme design, results framework and budget, is available on request to prospective partners and funders."
              status="on-request"
              href="/partner-with-us"
            />
          </div>
        </Container>
      </section>

      <section className="bg-forest-900 py-16 text-cream-50 sm:py-20">
        <Container className="max-w-2xl text-center">
          <h2 className="text-balance text-[clamp(1.6rem,1.3rem+1.4vw,2.3rem)] font-semibold text-cream-50">
            Help build a childcare economy that outlasts the grant that started it.
          </h2>
          <p className="mt-4 leading-relaxed text-sage-100">
            Kupanda Collective is seeking funding, technical and implementation partners for this initiative —
            in programme financing, research and costing, caregiver credentialing, enterprise financing, and
            policy implementation.
          </p>
          <Button href="/partner-with-us" variant="primary" className="mt-7 bg-leaf-500 text-forest-900 hover:bg-leaf-400">
            Partner With Us
          </Button>
        </Container>
      </section>
    </>
  );
}
