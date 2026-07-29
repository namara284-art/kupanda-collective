import { Sprout } from "lucide-react";
import { meaning } from "@/content/homepage";
import { Container } from "@/components/ui/Container";

export function MeaningSection() {
  const [firstSentence, ...restSentences] = meaning.paragraph.split(". ");
  const rest = restSentences.join(". ");

  return (
    <section className="bg-cream-50 py-20 sm:py-28" aria-labelledby="meaning-heading">
      <Container className="content-container-wide">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-sage-100 text-forest-700">
              <Sprout className="h-6 w-6" aria-hidden="true" />
            </span>
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.14em] text-clay-600">{meaning.eyebrow}</p>
            <h2 id="meaning-heading" className="text-balance font-heading text-[clamp(2rem,1.6rem+1.8vw,3.2rem)] font-medium leading-[1.1] text-forest-900">
              {meaning.display}
            </h2>
          </div>

          <div className="text-[1.05rem] leading-relaxed text-charcoal-700">
            <p className="mb-5 font-heading text-xl font-medium leading-snug text-forest-800">{firstSentence}.</p>
            <p className="sm:columns-2 sm:gap-8 [&>*]:break-inside-avoid">{rest}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
