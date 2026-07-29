import { partnershipSection } from "@/content/homepage";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function PartnershipCtaSection() {
  return (
    <section className="bg-clay-100 py-16 sm:py-20" aria-labelledby="partnership-heading">
      <Container className="max-w-2xl text-center">
        <h2 id="partnership-heading" className="text-balance text-[clamp(1.6rem,1.3rem+1.4vw,2.3rem)] font-semibold text-forest-900">
          {partnershipSection.heading}
        </h2>
        <p className="mt-4 text-[1.05rem] leading-relaxed text-charcoal-700">{partnershipSection.body}</p>
        <Button href={partnershipSection.cta.href} variant="primary" className="mt-7">
          {partnershipSection.cta.label}
        </Button>
      </Container>
    </section>
  );
}
