"use client";

import { motion } from "motion/react";
import { modelPathway } from "@/content/homepage";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GrowthLine } from "@/components/motion/GrowthLine";
import { StaggerGroup } from "@/components/motion/StaggerGroup";
import { transition } from "@/lib/motion";

const verticalOffset = ["lg:mt-0", "lg:mt-10", "lg:mt-0", "lg:mt-10", "lg:mt-0", "lg:mt-10"];

const dotVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: { scale: 1, opacity: 1 },
};

export function OrganicPathway() {
  return (
    <section className="bg-cream-100 py-20 sm:py-24" aria-labelledby="pathway-heading">
      <Container>
        <SectionHeading id="pathway-heading" title={modelPathway.heading} align="center" />

        {/* Desktop: continuous organic line, alternating label depth */}
        <div className="relative mt-16 hidden lg:block">
          <GrowthLine
            d="M0 30 C 100 5, 140 55, 240 30 S 340 5, 440 30 S 540 55, 640 30 S 740 5, 840 30 S 940 55, 1040 30 S 1140 5, 1200 30"
            viewBox="0 0 1200 60"
            preserveAspectRatio="none"
            className="pointer-events-none absolute inset-x-0 top-6 h-10 w-full text-leaf-600"
            strokeWidth={3}
            durationSeconds={1.6}
          />
          <StaggerGroup as="ol" interval="normal" className="relative flex justify-between">
            {modelPathway.steps.map((step, i) => (
              <motion.li
                key={step}
                variants={dotVariants}
                transition={transition.reveal}
                className={`flex w-40 flex-col items-center text-center ${verticalOffset[i]}`}
              >
                <span className="mb-3 h-4 w-4 rounded-full border-4 border-forest-700 bg-cream-100" aria-hidden="true" />
                <p className="text-sm font-semibold text-forest-900">{step}</p>
              </motion.li>
            ))}
          </StaggerGroup>
        </div>

        {/* Mobile/tablet: vertical organic line */}
        <div className="relative mt-12 lg:hidden">
          <GrowthLine
            d="M1 0 L1 100"
            viewBox="0 0 2 100"
            preserveAspectRatio="none"
            className="pointer-events-none absolute left-[calc(0.375rem-1px)] top-1 h-[calc(100%-1.5rem)] w-0.5 text-leaf-600"
            strokeWidth={2}
            durationSeconds={1.2}
          />
          <StaggerGroup as="ol" interval="tight" className="relative space-y-6 pl-6">
            {modelPathway.steps.map((step) => (
              <motion.li key={step} variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0 } }} transition={transition.reveal} className="relative">
                <span
                  aria-hidden="true"
                  className="absolute -left-[1.95rem] top-1 h-3.5 w-3.5 rounded-full border-4 border-forest-700 bg-cream-100"
                />
                <p className="font-semibold text-forest-900">{step}</p>
              </motion.li>
            ))}
          </StaggerGroup>
        </div>

        <p className="sr-only">This pathway shows the sequence: {modelPathway.steps.join(" leads to ")}.</p>
      </Container>
    </section>
  );
}
