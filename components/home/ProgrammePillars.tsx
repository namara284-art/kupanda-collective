import { Sprout, HeartPulse, HandCoins, Users, LineChart } from "lucide-react";
import { programmes } from "@/content/programmes";
import { ProgrammeCard } from "@/components/programme/ProgrammeCard";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const icons = {
  "early-childhood-development": Sprout,
  "health-and-nurturing-care": HeartPulse,
  "caregiver-livelihoods": HandCoins,
  "participation-and-social-cohesion": Users,
  "evidence-learning-and-policy": LineChart,
} as const;

export function ProgrammePillars() {
  return (
    <section className="bg-sage-100 py-16 sm:py-20" aria-labelledby="pillars-heading">
      <Container>
        <SectionHeading
          id="pillars-heading"
          eyebrow="Our approach"
          title="Five connected programme areas"
          description="Each pillar reinforces the others around the same child, caregiver and community."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {programmes.map((programme) => (
            <ProgrammeCard key={programme.slug} programme={programme} Icon={icons[programme.slug as keyof typeof icons]} />
          ))}
        </div>
      </Container>
    </section>
  );
}
