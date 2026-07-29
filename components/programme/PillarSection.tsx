import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import type { Programme } from "@/content/programmes";
import { Container } from "@/components/ui/Container";
import { ImagePlaceholder } from "@/components/shared/ImagePlaceholder";

export function PillarSection({ programme, index }: { programme: Programme; index: number }) {
  const imageFirst = index % 2 === 1;

  return (
    <section
      id={programme.slug}
      className="scroll-mt-24 border-b border-sage-200 py-14 last:border-b-0 sm:py-16"
      aria-labelledby={`${programme.slug}-heading`}
    >
      <Container className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-16">
        <div className={imageFirst ? "lg:order-2" : undefined}>
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.14em] text-forest-600">
            Pillar {index + 1}
          </p>
          <h2 id={`${programme.slug}-heading`} className="text-balance text-[clamp(1.5rem,1.25rem+1.2vw,2.1rem)] font-semibold text-forest-900">
            {programme.title}
          </h2>

          <div className="mt-6 space-y-5">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-clay-600">The challenge</h3>
              <p className="mt-1.5 leading-relaxed text-charcoal-700">{programme.challenge}</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-clay-600">Kupanda&rsquo;s approach</h3>
              <p className="mt-1.5 leading-relaxed text-charcoal-700">{programme.approach}</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-clay-600">Illustrative interventions</h3>
              <ul className="mt-2 space-y-2">
                {programme.interventions.map((item) => (
                  <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-charcoal-700">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-forest-600" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl bg-sage-100 p-4">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-forest-700">The change sought</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-charcoal-700">{programme.changeSought}</p>
            </div>
            {programme.relatedInitiative ? (
              <Link
                href={programme.relatedInitiative.href}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-forest-700 hover:text-forest-900"
              >
                {programme.relatedInitiative.label}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            ) : null}
          </div>
        </div>

        <ImagePlaceholder
          className={imageFirst ? "lg:order-1" : undefined}
          aspect="aspect-[4/3]"
          slot={{ alt: `${programme.title} in practice — photograph to be supplied by Kupanda Collective` }}
        />
      </Container>
    </section>
  );
}
