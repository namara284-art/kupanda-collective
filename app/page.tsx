import type { Metadata } from "next";
import { OrganicHero } from "@/components/home/OrganicHero";
import { MeaningSection } from "@/components/home/MeaningSection";
import { ThreeGenerationReturn } from "@/components/home/ThreeGenerationReturn";
import { GrowthEcosystem } from "@/components/home/GrowthEcosystem";
import { OrganicPathway } from "@/components/home/OrganicPathway";
import { AssembliesSection } from "@/components/home/AssembliesSection";
import { StoryReel } from "@/components/home/StoryReel";
import { PartnershipInvitation } from "@/components/home/PartnershipInvitation";
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
      <OrganicHero />
      <MeaningSection />
      <ThreeGenerationReturn />
      <GrowthEcosystem />
      <OrganicPathway />
      <AssembliesSection />
      <StoryReel />
      <PartnershipInvitation />
    </>
  );
}
