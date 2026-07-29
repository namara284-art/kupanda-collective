import { ArrowRight } from "lucide-react";
import { modelPathway } from "@/content/homepage";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";

export function ModelPathway() {
  return (
    <section className="bg-sage-100 py-16 sm:py-20" aria-labelledby="model-pathway-heading">
      <Container>
        <SectionHeading id="model-pathway-heading" title={modelPathway.heading} align="center" />
        <ol className="mt-10 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-2">
          {modelPathway.steps.map((step, i) => (
            <li key={step} className="flex items-center gap-2">
              <span className="flex min-h-14 flex-1 items-center justify-center rounded-full border-2 border-forest-700 bg-white px-5 py-3 text-center text-sm font-semibold text-forest-900 sm:flex-none">
                {step}
              </span>
              {i < modelPathway.steps.length - 1 ? (
                <ArrowRight
                  className="hidden h-5 w-5 shrink-0 text-forest-600 sm:block"
                  aria-hidden="true"
                />
              ) : null}
            </li>
          ))}
        </ol>
        <p className="sr-only">
          This pathway shows the sequence: {modelPathway.steps.join(" leads to ")}.
        </p>
      </Container>
    </section>
  );
}
