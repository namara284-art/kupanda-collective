import { hero } from "@/content/homepage";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ImagePlaceholder } from "@/components/shared/ImagePlaceholder";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-sage-200 bg-cream-100">
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-[420px] w-[420px] text-leaf-300/40"
        viewBox="0 0 200 200"
        fill="none"
      >
        <path
          d="M100 10 C40 10 10 60 10 100 C10 150 50 190 100 190 C150 190 190 150 190 100"
          stroke="currentColor"
          strokeWidth="16"
          strokeLinecap="round"
        />
      </svg>

      <Container className="relative grid gap-10 py-14 sm:py-20 lg:grid-cols-2 lg:items-center lg:gap-16 lg:py-24">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-forest-600">{hero.eyebrow}</p>
          <h1 className="text-balance text-[clamp(2.1rem,1.7rem+2vw,3.4rem)] font-semibold text-forest-900">
            {hero.headline}
          </h1>
          <p className="mt-6 max-w-xl text-[1.1rem] leading-relaxed text-charcoal-700">{hero.supporting}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={hero.primaryCta.href} variant="primary">
              {hero.primaryCta.label}
            </Button>
            <Button href={hero.secondaryCta.href} variant="secondary">
              {hero.secondaryCta.label}
            </Button>
          </div>
        </div>

        <ImagePlaceholder
          className="lg:order-last"
          aspect="aspect-[4/3] lg:aspect-[5/4]"
          slot={{
            alt: "Caregivers and young children in a community childcare setting in Uganda",
            caption: "Photography to be supplied by Kupanda Collective",
          }}
        />
      </Container>
    </section>
  );
}
