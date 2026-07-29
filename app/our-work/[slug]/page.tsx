import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowLeft, CheckCircle2, Sprout, HeartPulse, HandCoins, Users, LineChart } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { ImagePlaceholder } from "@/components/shared/ImagePlaceholder";
import { FieldNote } from "@/components/shared/FieldNote";
import { programmes, getProgrammeBySlug } from "@/content/programmes";
import { buildMetadata } from "@/lib/metadata";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { AnimatedImage } from "@/components/motion/AnimatedImage";
import { StaggerGroup } from "@/components/motion/StaggerGroup";
import { StaggerItem } from "@/components/motion/StaggerItem";

// Approved photographs, where available, keyed by programme slug. Slugs
// without an entry fall back to ImagePlaceholder until a photo is supplied.
const photos: Partial<Record<string, { src: string; alt: string }>> = {
  "early-childhood-development": {
    src: "/images/community/children-portraits.jpg",
    alt: "Young children in a Kupanda Collective community, smiling and playing together",
  },
  "health-and-nurturing-care": {
    src: "/images/community/children-mealtime.jpg",
    alt: "Children sharing a meal together in a community setting",
  },
  "caregiver-livelihoods": {
    src: "/images/community/caregiver-and-child.jpg",
    alt: "A caregiver holding and comforting a young child among a group of women",
  },
  "participation-and-social-cohesion": {
    src: "/images/community/assembly-close.jpg",
    alt: "Community members, including caregivers with young children, gathered for a neighbourhood meeting",
  },
};

const icons = {
  "early-childhood-development": Sprout,
  "health-and-nurturing-care": HeartPulse,
  "caregiver-livelihoods": HandCoins,
  "participation-and-social-cohesion": Users,
  "evidence-learning-and-policy": LineChart,
} as const;

const tones = {
  "early-childhood-development": "bg-sage-100",
  "health-and-nurturing-care": "bg-clay-100",
  "caregiver-livelihoods": "bg-cream-200",
  "participation-and-social-cohesion": "bg-sage-100",
  "evidence-learning-and-policy": "bg-clay-100",
} as const;

export function generateStaticParams() {
  return programmes.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const programme = getProgrammeBySlug(slug);
  if (!programme) return {};
  return buildMetadata({
    title: programme.title,
    description: programme.summary,
    path: `/our-work/${slug}`,
  });
}

export default async function ProgrammePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const programme = getProgrammeBySlug(slug);
  if (!programme) notFound();

  const index = programmes.findIndex((p) => p.slug === slug);
  const prev = programmes[(index - 1 + programmes.length) % programmes.length];
  const next = programmes[(index + 1) % programmes.length];
  const Icon = icons[slug as keyof typeof icons];
  const tone = tones[slug as keyof typeof tones];
  const photo = photos[slug];

  return (
    <>
      <div className={`border-b border-sage-200 py-14 sm:py-20 ${tone}`}>
        <Container>
          <Breadcrumbs items={[{ label: "Our Work", href: "/our-work" }, { label: programme.shortTitle }]} />
          <span className="mt-6 flex h-12 w-12 items-center justify-center rounded-full bg-forest-700 text-cream-50">
            <Icon className="h-6 w-6" aria-hidden="true" />
          </span>
          <h1 className="mt-4 max-w-3xl text-balance text-[clamp(2rem,1.6rem+1.8vw,3.2rem)] font-semibold text-forest-900">
            {programme.title}
          </h1>
          <p className="mt-4 max-w-2xl text-[1.05rem] leading-relaxed text-charcoal-700">{programme.summary}</p>
        </Container>
      </div>

      <section className="py-14 sm:py-16" aria-labelledby="challenge-heading">
        <Container className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <ScrollReveal variant="fade-left">
            <h2 id="challenge-heading" className="text-sm font-semibold uppercase tracking-wide text-clay-600">
              The challenge
            </h2>
            <p className="mt-3 text-[1.1rem] leading-relaxed text-charcoal-800">{programme.challenge}</p>
          </ScrollReveal>
          {photo ? (
            <AnimatedImage className="aspect-[4/3] rounded-2xl">
              <Image src={photo.src} alt={photo.alt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
            </AnimatedImage>
          ) : (
            <ImagePlaceholder
              aspect="aspect-[4/3]"
              slot={{ alt: `Community context for ${programme.title}, photograph to be supplied by Kupanda Collective` }}
            />
          )}
        </Container>
      </section>

      <section className="bg-forest-900 py-14 text-cream-50 sm:py-16" aria-labelledby="approach-heading">
        <Container className="max-w-3xl">
          <ScrollReveal>
            <h2 id="approach-heading" className="text-sm font-semibold uppercase tracking-wide text-leaf-400">
              Kupanda&rsquo;s approach
            </h2>
            <p className="mt-3 text-[1.1rem] leading-relaxed text-sage-100">{programme.approach}</p>
          </ScrollReveal>
        </Container>
      </section>

      <section className="py-14 sm:py-16" aria-labelledby="interventions-heading">
        <Container>
          <h2 id="interventions-heading" className="text-sm font-semibold uppercase tracking-wide text-forest-600">
            Interventions
          </h2>
          <StaggerGroup as="ul" interval="tight" className="mt-6 grid gap-3 sm:grid-cols-2">
            {programme.interventions.map((item) => (
              <StaggerItem key={item} as="li" className="flex gap-3 rounded-2xl border border-sage-200 bg-white p-4">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-forest-600" aria-hidden="true" />
                <span className="text-sm leading-relaxed text-charcoal-700">{item}</span>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Container>
      </section>

      <section className={`py-14 sm:py-16 ${tone}`} aria-labelledby="change-heading">
        <Container className="max-w-3xl">
          <ScrollReveal variant="scale">
            <FieldNote>
              <span id="change-heading" className="mb-1 block text-sm font-semibold not-italic text-clay-700">
                The change sought
              </span>
              <span className="text-[1.02rem] leading-relaxed text-charcoal-800">{programme.changeSought}</span>
            </FieldNote>
          </ScrollReveal>
        </Container>
      </section>

      <nav aria-label="Other programme pillars" className="border-t border-sage-200 py-10">
        <Container className="flex flex-col items-stretch justify-between gap-4 sm:flex-row">
          <Link
            href={`/our-work/${prev.slug}`}
            className="group flex flex-1 items-center gap-2 rounded-2xl border border-sage-200 bg-white p-4 text-sm transition-colors hover:border-forest-600"
          >
            <ArrowLeft className="h-4 w-4 shrink-0 text-forest-600 transition-transform duration-200 group-hover:-translate-x-1" aria-hidden="true" />
            <span>
              <span className="block text-xs text-charcoal-500">Previous pillar</span>
              <span className="font-semibold text-forest-900">{prev.shortTitle}</span>
            </span>
          </Link>
          <Link
            href={`/our-work/${next.slug}`}
            className="group flex flex-1 items-center justify-end gap-2 rounded-2xl border border-sage-200 bg-white p-4 text-right text-sm transition-colors hover:border-forest-600"
          >
            <span>
              <span className="block text-xs text-charcoal-500">Next pillar</span>
              <span className="font-semibold text-forest-900">{next.shortTitle}</span>
            </span>
            <ArrowRight className="h-4 w-4 shrink-0 text-forest-600 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </Container>
      </nav>
    </>
  );
}
