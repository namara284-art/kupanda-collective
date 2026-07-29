import type { Metadata } from "next";
import { Users2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { buildMetadata } from "@/lib/metadata";
import {
  meaning,
  story,
  vision,
  mission,
  guidingBelief,
  whyCommunityLed,
  refugeeHostInclusion,
  womenLed,
  assemblies,
  howWeWork,
  values,
  governance,
} from "@/content/about";
import { siteConfig } from "@/content/site-settings";

export const metadata: Metadata = buildMetadata({
  title: "About Us",
  description:
    "Kupanda Collective is a Uganda-based, women-led organisation strengthening community-led systems for refugee and host communities.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <div className="border-b border-sage-200 bg-cream-100 py-10 sm:py-14">
        <Container>
          <Breadcrumbs items={[{ label: "About Us" }]} />
          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.14em] text-forest-600">About Us</p>
          <h1 className="mt-2 max-w-3xl text-balance text-[clamp(2rem,1.7rem+1.6vw,3rem)] font-semibold text-forest-900">
            Growth begins with what communities already have.
          </h1>
          <p className="mt-3 max-w-2xl text-sm italic text-charcoal-500">{siteConfig.tagline}</p>
        </Container>
      </div>

      <section className="py-14 sm:py-16">
        <Container className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <SectionHeading title={meaning.heading} />
          <p className="text-[1.05rem] leading-relaxed text-charcoal-700">{meaning.body}</p>
        </Container>
      </section>

      <section className="bg-sage-100 py-14 sm:py-16">
        <Container className="max-w-3xl">
          <SectionHeading title={story.heading} />
          <div className="mt-5 space-y-4">
            {story.paragraphs.map((p) => (
              <p key={p} className="text-[1.02rem] leading-relaxed text-charcoal-700">
                {p}
              </p>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-16">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-sage-200 bg-white p-7">
              <h2 className="text-xl font-semibold text-forest-900">{vision.heading}</h2>
              <p className="mt-3 leading-relaxed text-charcoal-700">{vision.body}</p>
            </div>
            <div className="rounded-2xl border border-sage-200 bg-white p-7">
              <h2 className="text-xl font-semibold text-forest-900">{mission.heading}</h2>
              <p className="mt-3 leading-relaxed text-charcoal-700">{mission.body}</p>
            </div>
          </div>
          <div className="mt-6 rounded-2xl bg-forest-900 p-7 text-cream-50 sm:p-9">
            <h2 className="text-xl font-semibold text-cream-50">{guidingBelief.heading}</h2>
            <p className="mt-3 leading-relaxed text-sage-100">{guidingBelief.body}</p>
          </div>
        </Container>
      </section>

      <section className="bg-sage-100 py-14 sm:py-16">
        <Container className="max-w-3xl">
          <SectionHeading title={whyCommunityLed.heading} />
          <div className="mt-5 space-y-4">
            {whyCommunityLed.paragraphs.map((p) => (
              <p key={p} className="text-[1.02rem] leading-relaxed text-charcoal-700">
                {p}
              </p>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-16">
        <Container className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading title={womenLed.heading} />
            <p className="mt-4 text-[1.02rem] leading-relaxed text-charcoal-700">{womenLed.body}</p>
          </div>
          <div>
            <SectionHeading title={refugeeHostInclusion.heading} />
            <div className="mt-4 space-y-4">
              {refugeeHostInclusion.paragraphs.map((p) => (
                <p key={p} className="text-[1.02rem] leading-relaxed text-charcoal-700">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-forest-900 py-14 text-cream-50 sm:py-16">
        <Container className="max-w-3xl">
          <SectionHeading
            title={assemblies.heading}
            className="[&_h2]:text-cream-50"
          />
          <div className="mt-5 space-y-4">
            {assemblies.paragraphs.map((p) => (
              <p key={p} className="text-[1.02rem] leading-relaxed text-sage-100">
                {p}
              </p>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-16">
        <Container>
          <SectionHeading title={howWeWork.heading} align="center" />
          <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {howWeWork.steps.map((step, i) => (
              <li key={step.title} className="rounded-2xl border border-sage-200 bg-white p-6">
                <span className="font-heading text-2xl font-semibold text-leaf-600">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-2 font-semibold text-forest-900">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal-700">{step.description}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="bg-sage-100 py-14 sm:py-16">
        <Container>
          <SectionHeading title="Our values" align="center" />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => (
              <div key={value.title} className="rounded-2xl bg-white p-6">
                <h3 className="font-semibold text-forest-900">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal-700">{value.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-16">
        <Container className="max-w-3xl">
          <div className="rounded-2xl border border-dashed border-sage-300 bg-white p-8 text-center">
            <Users2 className="mx-auto h-8 w-8 text-forest-600" aria-hidden="true" />
            <h2 className="mt-4 text-xl font-semibold text-forest-900">{governance.heading}</h2>
            <p className="mx-auto mt-2 max-w-xl text-sm leading-relaxed text-charcoal-700">{governance.body}</p>
          </div>
        </Container>
      </section>
    </>
  );
}
