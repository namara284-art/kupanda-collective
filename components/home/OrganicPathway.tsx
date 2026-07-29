import { modelPathway } from "@/content/homepage";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const verticalOffset = ["lg:mt-0", "lg:mt-10", "lg:mt-0", "lg:mt-10", "lg:mt-0", "lg:mt-10"];

export function OrganicPathway() {
  return (
    <section className="bg-cream-100 py-20 sm:py-24" aria-labelledby="pathway-heading">
      <Container>
        <SectionHeading
          id="pathway-heading"
          eyebrow={modelPathway.eyebrow}
          title={modelPathway.heading}
          align="center"
        />

        {/* Desktop: continuous organic line, alternating label depth */}
        <div className="relative mt-16 hidden lg:block">
          <svg
            aria-hidden="true"
            viewBox="0 0 1200 60"
            preserveAspectRatio="none"
            className="pointer-events-none absolute inset-x-0 top-6 h-10 w-full text-leaf-600"
          >
            <path
              d="M0 30 C 100 5, 140 55, 240 30 S 340 5, 440 30 S 540 55, 640 30 S 740 5, 840 30 S 940 55, 1040 30 S 1140 5, 1200 30"
              stroke="currentColor"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
          <ol className="relative flex justify-between">
            {modelPathway.steps.map((step, i) => (
              <li key={step} className={`flex w-40 flex-col items-center text-center ${verticalOffset[i]}`}>
                <span className="mb-3 h-4 w-4 rounded-full border-4 border-forest-700 bg-cream-100" aria-hidden="true" />
                <p className="text-sm font-semibold text-forest-900">{step}</p>
              </li>
            ))}
          </ol>
        </div>

        {/* Mobile/tablet: vertical organic line */}
        <ol className="relative mt-12 space-y-6 border-l-2 border-dashed border-leaf-600 pl-6 lg:hidden">
          {modelPathway.steps.map((step) => (
            <li key={step} className="relative">
              <span
                aria-hidden="true"
                className="absolute -left-[1.95rem] top-1 h-3.5 w-3.5 rounded-full border-4 border-forest-700 bg-cream-100"
              />
              <p className="font-semibold text-forest-900">{step}</p>
            </li>
          ))}
        </ol>

        <p className="sr-only">This pathway shows the sequence: {modelPathway.steps.join(" leads to ")}.</p>
      </Container>
    </section>
  );
}
