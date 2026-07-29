import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { EditorialSplit } from "@/components/programme/EditorialSplit";
import { CommunityQuote } from "@/components/shared/CommunityQuote";
import { programmes } from "@/content/programmes";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Our Work",
  description:
    "Kupanda Collective's five connected programme pillars: early childhood development, health and nurturing care, caregiver livelihoods, participation and social cohesion, and evidence and policy influence.",
  path: "/our-work",
});

export default function OurWorkPage() {
  return (
    <>
      <div className="border-b border-sage-200 bg-cream-100 py-14 sm:py-20">
        <Container>
          <Breadcrumbs items={[{ label: "Our Work" }]} />
          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.14em] text-forest-600">Our Work</p>
          <h1 className="mt-2 max-w-3xl text-balance text-[clamp(2rem,1.7rem+1.6vw,3.2rem)] font-semibold text-forest-900">
            One community system
          </h1>
        </Container>
      </div>

      <div>
        {programmes.map((programme, index) => (
          <div key={programme.slug}>
            <EditorialSplit
              id={programme.slug}
              tone={index % 2 === 0 ? "cream" : "sage"}
              reverse={index % 2 === 1}
              title={programme.title}
              body={programme.summary}
              cta={{ label: "Explore More", href: `/our-work/${programme.slug}` }}
              image={{
                alt: `${programme.title} in practice, photograph to be supplied by Kupanda Collective`,
              }}
            />
            {index === 1 ? (
              <div className="bg-forest-900 py-16 text-center sm:py-20">
                <Container className="max-w-2xl">
                  <CommunityQuote
                    tone="dark"
                    quote="Communities already possess trusted structures, knowledge and leadership. When these structures receive the right support and connections, they can deliver lasting outcomes for children, caregivers and families."
                    className="mx-auto text-left"
                  />
                </Container>
              </div>
            ) : null}
          </div>
        ))}
      </div>

      <section className="bg-clay-100 py-16 text-center sm:py-20" aria-labelledby="cta-heading">
        <Container className="max-w-xl">
          <h2 id="cta-heading" className="text-balance text-2xl font-semibold text-forest-900">
            See how these pillars connect to community governance
          </h2>
          <p className="mt-3 text-charcoal-700">
            Neighborhood Assemblies and People&rsquo;s Parliaments sit underneath every pillar above.
          </p>
          <Link
            href="/our-work/participation-and-social-cohesion"
            className="mt-6 inline-flex items-center gap-1.5 rounded-full bg-forest-700 px-6 py-3 text-sm font-semibold text-cream-50 transition-colors hover:bg-forest-800"
          >
            Participation and Social Cohesion
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </Container>
      </section>
    </>
  );
}
