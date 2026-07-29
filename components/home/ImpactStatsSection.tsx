import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { impactStats } from "@/content/homepage";
import { ImpactStat } from "@/components/ui/ImpactStat";
import { Container } from "@/components/ui/Container";

export function ImpactStatsSection() {
  return (
    <section className="py-16 sm:py-20" aria-labelledby="impact-heading">
      <Container>
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.14em] text-clay-600">
              {impactStats.heading}
            </p>
            <h2 id="impact-heading" className="max-w-2xl text-balance text-[clamp(1.5rem,1.25rem+1.2vw,2.1rem)] font-semibold text-forest-900">
              {impactStats.subheading}
            </h2>
          </div>
          <Link
            href={impactStats.cta.href}
            className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-forest-700 hover:text-forest-900"
          >
            {impactStats.cta.label}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {impactStats.stats.map((stat) => (
            <ImpactStat key={stat.label} value={stat.value} label={stat.label} />
          ))}
        </div>
      </Container>
    </section>
  );
}
