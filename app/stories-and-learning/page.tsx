import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { StoriesGrid } from "@/components/stories/StoriesGrid";
import { DownloadCard } from "@/components/shared/DownloadCard";
import { storyPlaceholders } from "@/content/stories";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Stories & Learning",
  description: "A forthcoming hub for community stories, programme updates, research and learning, and policy engagement from Kupanda Collective.",
  path: "/stories-and-learning",
});

export default function StoriesAndLearningPage() {
  const resources = storyPlaceholders.filter((s) => s.category === "Resources");

  return (
    <>
      <div className="border-b border-sage-200 bg-cream-100 py-14 sm:py-20">
        <Container>
          <Breadcrumbs items={[{ label: "Stories & Learning" }]} />
          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.14em] text-forest-600">Stories & Learning</p>
          <h1 className="mt-2 max-w-3xl text-balance text-[clamp(2rem,1.7rem+1.6vw,3.2rem)] font-semibold text-forest-900">
            Community stories, programme updates and evidence
          </h1>
        </Container>
      </div>

      <section className="py-14 sm:py-16">
        <Container>
          <StoriesGrid />
        </Container>
      </section>

      {resources.length > 0 ? (
        <section className="bg-sage-100 py-14 sm:py-16" aria-labelledby="resources-heading">
          <Container>
            <h2 id="resources-heading" className="text-sm font-semibold uppercase tracking-wide text-forest-800">
              Resources
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {resources.map((resource) => (
                <DownloadCard
                  key={resource.slug}
                  title={resource.title}
                  description={resource.summary}
                  status="coming-soon"
                />
              ))}
            </div>
          </Container>
        </section>
      ) : null}
    </>
  );
}
