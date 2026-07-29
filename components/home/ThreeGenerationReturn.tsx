"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { threeGenerationReturn } from "@/content/homepage";
import { Container } from "@/components/ui/Container";
import { GrowthLine } from "@/components/motion/GrowthLine";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { transition, duration as durations, stagger, viewport } from "@/lib/motion";

const offsets = ["lg:translate-y-0", "lg:translate-y-10", "lg:-translate-y-4"];
const itemCount = 3;
// Roughly how long the staggered entrance takes, so the settle-in pulse
// waits for the whole system to have appeared before it plays.
const entranceMs = (0.3 + stagger.loose * (itemCount - 1) + durations.reveal) * 1000;

export function ThreeGenerationReturn() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const listRef = useRef<HTMLOListElement>(null);
  const listInView = useInView(listRef, { once: true, amount: 0.3 });

  useEffect(() => {
    if (!listInView) return;
    const timeout = window.setTimeout(() => setActiveIndex(-1), entranceMs);
    return () => window.clearTimeout(timeout);
  }, [listInView]);

  return (
    <section className="bg-sage-100 py-20 sm:py-24" aria-labelledby="three-gen-heading">
      <Container>
        <ScrollReveal className="max-w-2xl">
          <h2 id="three-gen-heading" className="text-balance text-[clamp(1.7rem,1.4rem+1.5vw,2.6rem)] font-semibold text-forest-900">
            {threeGenerationReturn.heading}
          </h2>
        </ScrollReveal>

        <div className="relative mt-14">
          <GrowthLine
            d="M0 30 C 150 -10, 250 70, 400 30 S 650 -10, 800 30"
            viewBox="0 0 800 60"
            preserveAspectRatio="none"
            className="pointer-events-none absolute inset-x-0 top-[4.5rem] hidden h-16 w-full text-leaf-500/50 lg:block"
            strokeWidth={3}
            durationSeconds={1.4}
          />
          {/* Mobile/tablet: a vertical connector growing downward behind the stack. */}
          <GrowthLine
            d="M2 0 L2 100"
            viewBox="0 0 4 100"
            preserveAspectRatio="none"
            className="pointer-events-none absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 text-leaf-500/40 lg:hidden"
            strokeWidth={2}
            durationSeconds={1}
          />

          <motion.ol
            ref={listRef}
            className="relative grid gap-8 sm:grid-cols-3 sm:gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: stagger.loose, delayChildren: 0.3 } } }}
          >
            {threeGenerationReturn.returns.map((item, i) => {
              const dimmed = activeIndex !== null && activeIndex >= 0 && activeIndex !== i;
              const pulsing = activeIndex === -1;
              return (
                <motion.li
                  key={item.label}
                  className={`flex flex-col items-center text-center ${offsets[i]}`}
                  variants={{ hidden: { opacity: 0, scale: 0.85, y: 16 }, visible: { opacity: 1, scale: 1, y: 0 } }}
                  transition={transition.reveal}
                  animate={dimmed ? { opacity: 0.55 } : { opacity: 1 }}
                  onHoverStart={() => setActiveIndex(i)}
                  onHoverEnd={() => setActiveIndex(-1)}
                  onFocus={() => setActiveIndex(i)}
                  onBlur={() => setActiveIndex(-1)}
                >
                  <motion.span
                    tabIndex={0}
                    className="flex h-28 w-28 shrink-0 items-center justify-center rounded-full border-4 border-white bg-forest-700 font-heading text-lg font-semibold text-cream-50 shadow-lg outline-offset-4 sm:h-32 sm:w-32"
                    animate={
                      activeIndex === i
                        ? { scale: 1.06 }
                        : pulsing
                          ? { scale: [1, 1.04, 1] }
                          : { scale: 1 }
                    }
                    transition={pulsing && activeIndex !== i ? { duration: 1.6, delay: i * 0.15, ease: "easeInOut" } : transition.control}
                  >
                    {item.label}
                  </motion.span>
                  <p className="mt-5 max-w-[16rem] text-[1.02rem] leading-relaxed text-charcoal-800">{item.description}</p>
                </motion.li>
              );
            })}
          </motion.ol>
        </div>
      </Container>
    </section>
  );
}
