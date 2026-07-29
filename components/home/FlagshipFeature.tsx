import { CheckCircle2 } from "lucide-react";
import { flagshipFeature } from "@/content/homepage";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ImagePlaceholder } from "@/components/shared/ImagePlaceholder";

export function FlagshipFeature() {
  return (
    <section className="bg-forest-900 py-16 text-cream-50 sm:py-20" aria-labelledby="flagship-heading">
      <Container className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
        <ImagePlaceholder
          aspect="aspect-[4/3]"
          className="[&_div]:border-forest-700 [&_div]:bg-forest-800 [&_p]:text-sage-100"
          slot={{
            alt: "A refugee-led childcare enterprise in Nakivale Refugee Settlement",
            caption: "Photography to be supplied by Kupanda Collective",
          }}
        />
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-leaf-400">
            Flagship initiative
          </p>
          <h2 id="flagship-heading" className="text-balance text-[clamp(1.6rem,1.3rem+1.4vw,2.5rem)] font-semibold text-cream-50">
            {flagshipFeature.heading}
          </h2>
          <p className="mt-4 text-[1.05rem] leading-relaxed text-sage-100">{flagshipFeature.body}</p>
          <ul className="mt-6 space-y-2.5">
            {flagshipFeature.connections.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-sage-100">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-leaf-400" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
          <Button href={flagshipFeature.cta.href} variant="primary" className="mt-8 bg-leaf-500 text-forest-900 hover:bg-leaf-400">
            {flagshipFeature.cta.label}
          </Button>
        </div>
      </Container>
    </section>
  );
}
