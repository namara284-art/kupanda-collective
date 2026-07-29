import Link from "next/link";
import { Sprout, HeartPulse, HandCoins, Users, LineChart, ArrowRight } from "lucide-react";
import { programmes } from "@/content/programmes";
import { ecosystem } from "@/content/homepage";
import { Container } from "@/components/ui/Container";

const icons = {
  "early-childhood-development": Sprout,
  "health-and-nurturing-care": HeartPulse,
  "caregiver-livelihoods": HandCoins,
  "participation-and-social-cohesion": Users,
  "evidence-learning-and-policy": LineChart,
} as const;

// Positions (top%, left%) tracing a five-point ring around a centre node.
const positions = [
  { top: "6%", left: "50%" },
  { top: "35%", left: "91%" },
  { top: "86%", left: "76%" },
  { top: "86%", left: "24%" },
  { top: "35%", left: "9%" },
];

export function GrowthEcosystem() {
  return (
    <section className="bg-forest-900 py-20 text-cream-50 sm:py-24" aria-labelledby="ecosystem-heading">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.14em] text-leaf-400">{ecosystem.eyebrow}</p>
          <h2 id="ecosystem-heading" className="text-balance text-[clamp(1.7rem,1.4rem+1.5vw,2.6rem)] font-semibold text-cream-50">
            {ecosystem.heading}
          </h2>
          <p className="mt-4 text-[1.02rem] leading-relaxed text-sage-100">{ecosystem.description}</p>
        </div>

        {/* Desktop: orbital composition */}
        <div className="relative mx-auto mt-16 hidden h-[600px] max-w-3xl lg:block">
          <div className="absolute left-1/2 top-1/2 flex h-40 w-40 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border-4 border-leaf-500 bg-forest-800 p-4 text-center shadow-xl">
            <p className="font-heading text-base font-semibold leading-tight text-cream-50">{ecosystem.centre}</p>
          </div>

          {programmes.map((programme, i) => {
            const Icon = icons[programme.slug as keyof typeof icons];
            const pos = positions[i];
            return (
              <Link
                key={programme.slug}
                href={`/our-work/${programme.slug}`}
                className="group absolute w-52 -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-forest-700 bg-forest-800/90 p-4 text-center transition-colors hover:border-leaf-400 hover:bg-forest-800"
                style={{ top: pos.top, left: pos.left }}
              >
                <span className="mx-auto mb-2 flex h-9 w-9 items-center justify-center rounded-full bg-sage-100 text-forest-700">
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </span>
                <p className="text-sm font-semibold text-cream-50">{programme.shortTitle}</p>
                <p className="mt-1 text-xs leading-snug text-sage-200 opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                  {programme.summary}
                </p>
              </Link>
            );
          })}
        </div>

        {/* Mobile/tablet: accessible expandable rows */}
        <div className="mt-12 divide-y divide-forest-700 rounded-2xl border border-forest-700 lg:hidden">
          {programmes.map((programme) => {
            const Icon = icons[programme.slug as keyof typeof icons];
            return (
              <details key={programme.slug} className="group p-5">
                <summary className="flex cursor-pointer list-none items-center gap-3 marker:content-none">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sage-100 text-forest-700">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span className="flex-1 font-semibold text-cream-50">{programme.shortTitle}</span>
                  <span aria-hidden="true" className="text-xl leading-none text-leaf-400 transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 pl-12 text-sm leading-relaxed text-sage-200">{programme.summary}</p>
                <Link
                  href={`/our-work/${programme.slug}`}
                  className="mt-3 ml-12 inline-flex items-center gap-1.5 text-sm font-semibold text-leaf-400 hover:text-leaf-300"
                >
                  Read more
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </details>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <Link
            href={ecosystem.cta.href}
            className="inline-flex items-center gap-1.5 rounded-full bg-leaf-500 px-6 py-3 text-sm font-semibold text-forest-950 transition-colors hover:bg-leaf-400"
          >
            {ecosystem.cta.label}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
