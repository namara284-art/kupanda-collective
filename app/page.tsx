import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { PositioningSection } from "@/components/home/PositioningSection";
import { ProgrammePillars } from "@/components/home/ProgrammePillars";
import { FlagshipFeature } from "@/components/home/FlagshipFeature";
import { ImpactStatsSection } from "@/components/home/ImpactStatsSection";
import { ModelPathway } from "@/components/home/ModelPathway";
import { CommunityVoiceSection } from "@/components/home/CommunityVoiceSection";
import { PartnershipCtaSection } from "@/components/home/PartnershipCtaSection";
import { NewsletterSignup } from "@/components/home/NewsletterSignup";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Kupanda Collective | Community-Led Childcare and Refugee Self-Reliance",
  description:
    "Kupanda Collective strengthens community-led systems connecting childcare, caregiver livelihoods, health and social cohesion for refugee and host communities in Uganda.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <PositioningSection />
      <ProgrammePillars />
      <FlagshipFeature />
      <ImpactStatsSection />
      <ModelPathway />
      <CommunityVoiceSection />
      <PartnershipCtaSection />
      <NewsletterSignup />
    </>
  );
}
