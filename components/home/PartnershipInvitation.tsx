import { partnershipSection } from "@/content/homepage";
import { homepagePartnershipAreas } from "@/content/partnership";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function PartnershipInvitation() {
  return (
    <section className="bg-clay-100 py-20 sm:py-24" aria-labelledby="partnership-heading">
      <Container className="content-container-wide">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.14em] text-clay-700">
            {partnershipSection.eyebrow}
          </p>
          <h2 id="partnership-heading" className="text-balance font-heading text-[clamp(1.8rem,1.4rem+1.8vw,2.7rem)] font-medium text-forest-900">
            {partnershipSection.heading}
          </h2>
          <p className="mt-4 text-[1.05rem] leading-relaxed text-charcoal-700">{partnershipSection.body}</p>
        </div>

        <ul className="mx-auto mt-8 flex max-w-2xl flex-wrap justify-center gap-2.5" aria-label="Partnership areas">
          {homepagePartnershipAreas.map((area) => (
            <li key={area} className="rounded-full border border-clay-500/40 bg-white px-4 py-2 text-sm font-semibold text-clay-700">
              {area}
            </li>
          ))}
        </ul>

        <div className="mt-9 text-center">
          <Button href={partnershipSection.cta.href} variant="primary">
            {partnershipSection.cta.label}
          </Button>
        </div>
      </Container>
    </section>
  );
}
