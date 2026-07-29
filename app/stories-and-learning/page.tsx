import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StoriesGrid } from "@/components/stories/StoriesGrid";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Stories & Learning",
  description:
    "A forthcoming hub for community stories, programme updates, research and learning, and policy engagement from Kupanda Collective.",
  path: "/stories-and-learning",
});

export default function StoriesAndLearningPage() {
  return (
    <>
      <div className="border-b border-sage-200 bg-cream-100 py-10 sm:py-14">
        <Container>
          <Breadcrumbs items={[{ label: "Stories & Learning" }]} />
          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.14em] text-forest-600">Stories & Learning</p>
          <h1 className="mt-2 max-w-3xl text-balance text-[clamp(2rem,1.7rem+1.6vw,3rem)] font-semibold text-forest-900">
            Community stories, programme updates and evidence
          </h1>
          <p className="mt-4 max-w-2xl text-[1.05rem] leading-relaxed text-charcoal-700">
            This hub is being built out as Kupanda Collective&rsquo;s programmes generate verified stories, research
            and policy learning. The cards below show the kinds of content that will appear here — every one is
            clearly marked as a placeholder.
          </p>
        </Container>
      </div>

      <section className="py-14 sm:py-16">
        <Container>
          <SectionHeading eyebrow="Coming soon" title="What this hub will include" className="sr-only" />
          <StoriesGrid />
        </Container>
      </section>
    </>
  );
}
