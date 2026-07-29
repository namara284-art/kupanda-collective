import { threeGenerationReturn } from "@/content/homepage";
import { Container } from "@/components/ui/Container";

const offsets = ["lg:translate-y-0", "lg:translate-y-10", "lg:-translate-y-4"];

export function ThreeGenerationReturn() {
  return (
    <section className="bg-sage-100 py-20 sm:py-24" aria-labelledby="three-gen-heading">
      <Container>
        <div className="max-w-2xl">
          <h2 id="three-gen-heading" className="text-balance text-[clamp(1.7rem,1.4rem+1.5vw,2.6rem)] font-semibold text-forest-900">
            {threeGenerationReturn.heading}
          </h2>
        </div>

        <div className="relative mt-14">
          <svg
            aria-hidden="true"
            viewBox="0 0 800 60"
            preserveAspectRatio="none"
            className="pointer-events-none absolute inset-x-0 top-[4.5rem] hidden h-16 w-full text-leaf-500/50 lg:block"
          >
            <path d="M0 30 C 150 -10, 250 70, 400 30 S 650 -10, 800 30" stroke="currentColor" strokeWidth="3" fill="none" strokeDasharray="2 14" strokeLinecap="round" />
          </svg>

          <ol className="relative grid gap-8 sm:grid-cols-3 sm:gap-6">
            {threeGenerationReturn.returns.map((item, i) => (
              <li key={item.label} className={`flex flex-col items-center text-center ${offsets[i]}`}>
                <span className="flex h-28 w-28 shrink-0 items-center justify-center rounded-full border-4 border-white bg-forest-700 font-heading text-lg font-semibold text-cream-50 shadow-lg sm:h-32 sm:w-32">
                  {item.label}
                </span>
                <p className="mt-5 max-w-[16rem] text-[1.02rem] leading-relaxed text-charcoal-800">{item.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
