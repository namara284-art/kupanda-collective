"use client";

import { Sprout } from "lucide-react";
import { motion } from "motion/react";
import { meaning } from "@/content/homepage";
import { Container } from "@/components/ui/Container";
import { GrowthLine } from "@/components/motion/GrowthLine";
import { StaggerGroup } from "@/components/motion/StaggerGroup";
import { StaggerItem } from "@/components/motion/StaggerItem";
import { transition, viewport } from "@/lib/motion";

const leaves = [
  { d: "M0 0 C 14 -4 26 4 30 16 C 16 18 4 12 0 0 Z", x: -2, y: 58, delay: 0.75 },
  { d: "M0 0 C -14 -4 -26 4 -30 16 C -16 18 -4 12 0 0 Z", x: 2, y: 40, delay: 0.95 },
  { d: "M0 0 C 12 -3 22 4 26 14 C 14 16 3 10 0 0 Z", x: -1, y: 22, delay: 1.15 },
];

export function MeaningSection() {
  const [firstSentence, ...restSentences] = meaning.paragraph.split(". ");
  const rest = restSentences.join(". ");
  const [firstWord, ...restWords] = meaning.display.split(" ");
  const restOfDisplay = restWords.join(" ");

  return (
    <section className="bg-cream-50 py-20 sm:py-28" aria-labelledby="meaning-heading">
      <Container className="content-container-wide">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <div className="relative mb-4 flex h-14 w-12 items-end">
              {/* Growing stem, drawn on scroll, with three leaves opening in sequence. */}
              <GrowthLine
                d="M6 90 C 4 60 8 30 6 2"
                viewBox="0 0 12 92"
                className="absolute bottom-0 left-1/2 h-14 w-3 -translate-x-1/2 text-leaf-600"
                strokeWidth={2.5}
                durationSeconds={0.9}
              />
              {leaves.map((leaf, i) => (
                <motion.svg
                  key={i}
                  aria-hidden="true"
                  viewBox="-30 -20 60 40"
                  className="absolute left-1/2 h-6 w-7 text-leaf-500"
                  style={{ bottom: leaf.y, transform: `translateX(${leaf.x}px)` }}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={viewport}
                  transition={{ ...transition.control, delay: leaf.delay }}
                >
                  <path d={leaf.d} fill="currentColor" />
                </motion.svg>
              ))}
              <span className="relative z-10 mb-1 flex h-8 w-8 items-center justify-center rounded-full bg-sage-100 text-forest-700">
                <Sprout className="h-4 w-4" aria-hidden="true" />
              </span>
            </div>

            <h2 id="meaning-heading" className="text-balance font-heading text-[clamp(2rem,1.6rem+1.8vw,3.2rem)] font-medium leading-[1.1] text-forest-900">
              <motion.span
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={transition.reveal}
                className="block"
              >
                {firstWord}
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ ...transition.reveal, delay: 0.15 }}
                className="block"
              >
                {restOfDisplay}
              </motion.span>
            </h2>
          </div>

          <StaggerGroup interval="loose" className="text-[1.05rem] leading-relaxed text-charcoal-700">
            <StaggerItem as="div">
              <p className="mb-5 font-heading text-xl font-medium leading-snug text-forest-800">{firstSentence}.</p>
            </StaggerItem>
            <StaggerItem as="div">
              <p className="sm:columns-2 sm:gap-8 [&>*]:break-inside-avoid">{rest}</p>
            </StaggerItem>
          </StaggerGroup>
        </div>
      </Container>
    </section>
  );
}
