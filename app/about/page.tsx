import type { Metadata } from "next";
import { Users2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { CommunityQuote } from "@/components/shared/CommunityQuote";
import { ImagePlaceholder } from "@/components/shared/ImagePlaceholder";
import { buildMetadata } from "@/lib/metadata";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { AnimatedImage } from "@/components/motion/AnimatedImage";
import { StaggerGroup } from "@/components/motion/StaggerGroup";
import { StaggerItem } from "@/components/motion/StaggerItem";
import {
  meaning,
  story,
  whyCommunityLed,
  assemblies,
  womenLed,
  vision,
  mission,
  guidingBelief,
  howWeWork,
  values,
  governance,
} from "@/content/about";

export const metadata: Metadata = buildMetadata({
  title: "About Us",
  description: "Kupanda Collective is a Uganda-based, women-led organisation strengthening community-led systems for refugee and host communities.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <div className="border-b border-sage-200 bg-cream-100 py-14 sm:py-20">
        <Container>
          <Breadcrumbs items={[{ label: "About Us" }]} />
          <h1 className="mt-6 max-w-3xl text-balance text-[clamp(2rem,1.7rem+1.6vw,3.2rem)] font-semibold text-forest-900">
            Growth begins with what communities already have.
          </h1>
        </Container>
      </div>

      {/* A single vertical narrative rather than a set of uniform cards. */}
      <article className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <ScrollReveal as="section" aria-labelledby="meaning-heading" className="mb-16">
          <h2 id="meaning-heading" className="font-heading text-2xl font-semibold text-forest-900">
            {meaning.heading}
          </h2>
          <p className="mt-4 text-[1.08rem] leading-relaxed text-charcoal-700">{meaning.body}</p>
        </ScrollReveal>

        <ScrollReveal as="section" aria-labelledby="story-heading" className="mb-16">
          <h2 id="story-heading" className="font-heading text-2xl font-semibold text-forest-900">
            {story.heading}
          </h2>
          <div className="mt-4 space-y-4">
            {story.paragraphs.map((p) => (
              <p key={p} className="text-[1.05rem] leading-relaxed text-charcoal-700">
                {p}
              </p>
            ))}
          </div>
        </ScrollReveal>

        <AnimatedImage className="mb-16 aspect-[16/9] rounded-2xl">
          <ImagePlaceholder
            className="[&>div]:h-full"
            aspect=""
            slot={{
              src: "/images/community/children-playing.jpg",
              alt: "Children playing together in a Kupanda Collective community, near a traditional thatched-roof structure",
            }}
          />
        </AnimatedImage>

        <ScrollReveal as="section" aria-labelledby="problem-heading" className="mb-16">
          <h2 id="problem-heading" className="font-heading text-2xl font-semibold text-forest-900">
            {whyCommunityLed.heading}
          </h2>
          <div className="mt-4 space-y-4">
            {whyCommunityLed.paragraphs.map((p) => (
              <p key={p} className="text-[1.05rem] leading-relaxed text-charcoal-700">
                {p}
              </p>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal as="section" aria-labelledby="assemblies-heading" className="mb-16 border-l-4 border-clay-500 pl-6">
          <h2 id="assemblies-heading" className="font-heading text-2xl font-semibold text-forest-900">
            {assemblies.heading}
          </h2>
          <div className="mt-4 space-y-4">
            {assemblies.paragraphs.map((p) => (
              <p key={p} className="text-[1.05rem] leading-relaxed text-charcoal-700">
                {p}
              </p>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal as="section" aria-labelledby="women-led-heading" className="mb-16">
          <h2 id="women-led-heading" className="font-heading text-2xl font-semibold text-forest-900">
            {womenLed.heading}
          </h2>
          <p className="mt-4 text-[1.05rem] leading-relaxed text-charcoal-700">{womenLed.body}</p>
        </ScrollReveal>
      </article>

      <section className="bg-forest-900 py-16 text-cream-50 sm:py-20" aria-labelledby="vision-mission-heading">
        <Container className="max-w-3xl">
          <h2 id="vision-mission-heading" className="sr-only">
            Vision and mission
          </h2>
          <StaggerGroup className="space-y-10">
            <StaggerItem>
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-leaf-400">{vision.heading}</p>
              <p className="mt-3 font-heading text-xl font-medium leading-snug text-cream-50">{vision.body}</p>
            </StaggerItem>
            <StaggerItem>
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-leaf-400">{mission.heading}</p>
              <p className="mt-3 font-heading text-xl font-medium leading-snug text-cream-50">{mission.body}</p>
            </StaggerItem>
          </StaggerGroup>
          <ScrollReveal delay={0.15}>
            <CommunityQuote tone="dark" quote={guidingBelief.body} className="mt-10" />
          </ScrollReveal>
        </Container>
      </section>

      <section className="py-16 sm:py-20" aria-labelledby="how-we-work-heading">
        <Container className="max-w-3xl">
          <ScrollReveal>
            <h2 id="how-we-work-heading" className="font-heading text-2xl font-semibold text-forest-900">
              {howWeWork.heading}
            </h2>
          </ScrollReveal>
          <StaggerGroup as="ol" interval="tight" className="mt-8 space-y-8 border-l-2 border-dashed border-leaf-600 pl-6">
            {howWeWork.steps.map((step, i) => (
              <StaggerItem key={step.title} as="li" className="relative">
                <span
                  aria-hidden="true"
                  className="absolute -left-[2.05rem] top-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-forest-700 text-xs font-semibold text-cream-50"
                >
                  {i + 1}
                </span>
                <h3 className="font-semibold text-forest-900">{step.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-charcoal-700">{step.description}</p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Container>
      </section>

      <section className="bg-sage-100 py-16 sm:py-20" aria-labelledby="values-heading">
        <Container className="max-w-3xl">
          <ScrollReveal>
            <h2 id="values-heading" className="font-heading text-2xl font-semibold text-forest-900">
              Our values
            </h2>
          </ScrollReveal>
          <StaggerGroup as="dl" interval="tight" className="mt-8 space-y-5">
            {values.map((value) => (
              <StaggerItem key={value.title} className="flex flex-col gap-1 sm:flex-row sm:gap-6">
                <dt className="shrink-0 font-heading text-lg font-medium text-forest-800 sm:w-56">{value.title}</dt>
                <dd className="text-charcoal-700">{value.description}</dd>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Container>
      </section>

      <section className="py-16 sm:py-20" aria-labelledby="governance-heading">
        <Container className="max-w-3xl">
          <ScrollReveal variant="scale" className="radius-organic-1 border border-dashed border-sage-300 bg-white p-8 text-center">
            <Users2 className="mx-auto h-8 w-8 text-forest-600" aria-hidden="true" />
            <h2 id="governance-heading" className="mt-4 text-xl font-semibold text-forest-900">
              {governance.heading}
            </h2>
            <p className="mx-auto mt-2 max-w-xl text-sm leading-relaxed text-charcoal-700">{governance.body}</p>
          </ScrollReveal>
        </Container>
      </section>
    </>
  );
}
