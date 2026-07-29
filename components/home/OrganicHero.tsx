import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { hero } from "@/content/homepage";
import { Button } from "@/components/ui/Button";

export function OrganicHero() {
  return (
    // Negative top margin slides this section up underneath the sticky,
    // transparent header (see Header.tsx `transparent` mode) so the header
    // genuinely overlaps the hero instead of sitting above it in normal flow.
    <section className="relative -mt-20 overflow-hidden bg-forest-950 sm:-mt-24">
      <div className="grid min-h-[92vh] lg:grid-cols-[minmax(0,0.86fr)_minmax(0,1.14fr)] lg:items-stretch">
        {/* Text panel: offset, sits above/beside the image rather than beneath a centred headline. */}
        <div className="relative z-10 flex flex-col justify-end bg-cream-100 px-6 pb-12 pt-32 sm:px-10 sm:pb-16 sm:pt-40 lg:justify-center lg:px-14 lg:py-24">
          <svg
            aria-hidden="true"
            viewBox="0 0 60 200"
            className="absolute -right-6 top-1/2 hidden h-40 w-auto -translate-y-1/2 text-leaf-500 lg:block"
            fill="none"
          >
            <path
              d="M30 10 C10 40 50 70 20 100 C -10 130 40 150 25 190"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
              opacity="0.6"
            />
          </svg>

          <span className="mb-6 inline-flex w-fit items-center rounded-full bg-sage-200 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.1em] text-forest-800">
            {hero.label}
          </span>

          <h1 className="text-balance font-heading text-[clamp(2.25rem,1.7rem+2.6vw,3.8rem)] font-semibold leading-[1.05] text-forest-900">
            {hero.headline}
          </h1>

          <p className="mt-6 max-w-md text-[1.08rem] leading-relaxed text-charcoal-700">{hero.supporting}</p>

          <p className="mt-4 text-sm font-semibold italic text-clay-600">{hero.tagline}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={hero.primaryCta.href} variant="primary">
              {hero.primaryCta.label}
            </Button>
            <Button href={hero.secondaryCta.href} variant="secondary">
              {hero.secondaryCta.label}
            </Button>
          </div>
        </div>

        {/* Documentary-style image, full-bleed on the right, offset above the text panel on mobile. */}
        <div className="relative min-h-[50vh] lg:min-h-full">
          <Image
            src="/images/community/gathering-dance.jpg"
            alt="Women from a Kupanda Collective community gathering dancing together outdoors"
            fill
            priority
            sizes="(min-width: 1024px) 60vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-4 hidden justify-center sm:flex">
        <ChevronDown className="h-6 w-6 animate-bounce text-cream-50/70" aria-hidden="true" />
      </div>
    </section>
  );
}
