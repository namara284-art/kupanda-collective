"use client";

import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { hero } from "@/content/homepage";
import { Button } from "@/components/ui/Button";
import { AnimatedHeading } from "@/components/motion/AnimatedHeading";
import { GrowthLine } from "@/components/motion/GrowthLine";
import { transition, stagger, distance } from "@/lib/motion";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: stagger.loose, delayChildren: 0.15 } },
};

const rise = {
  hidden: { opacity: 0, y: distance.medium },
  visible: { opacity: 1, y: 0 },
};

export function OrganicHero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    // Negative top margin slides this section up underneath the sticky,
    // transparent header (see Header.tsx `transparent` mode) so the header
    // genuinely overlaps the hero instead of sitting above it in normal flow.
    <section className="relative -mt-20 overflow-hidden bg-forest-950 sm:-mt-24">
      <div className="grid min-h-[92vh] lg:grid-cols-[minmax(0,0.86fr)_minmax(0,1.14fr)] lg:items-stretch">
        {/* Text panel: offset, sits above/beside the image rather than beneath a centred headline. */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={container}
          className="relative z-10 flex flex-col justify-end bg-cream-100 px-6 pb-12 pt-32 sm:px-10 sm:pb-16 sm:pt-40 lg:justify-center lg:px-14 lg:py-24"
        >
          <motion.div
            aria-hidden="true"
            animate={prefersReducedMotion ? undefined : { y: [0, -10, 0] }}
            transition={prefersReducedMotion ? undefined : { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -right-6 top-1/2 hidden h-40 w-auto -translate-y-1/2 text-leaf-500 lg:block"
          >
            <GrowthLine
              d="M30 10 C10 40 50 70 20 100 C -10 130 40 150 25 190"
              viewBox="0 0 60 200"
              className="h-40 w-auto"
              strokeWidth={4}
              durationSeconds={1.3}
              delay={0.5}
            />
          </motion.div>

          <AnimatedHeading
            as="h1"
            text={hero.headline}
            className="text-balance font-heading text-[clamp(2.25rem,1.7rem+2.6vw,3.8rem)] font-semibold leading-[1.05] text-forest-900"
          />

          <motion.p variants={rise} transition={transition.hero} className="mt-6 max-w-md text-[1.08rem] leading-relaxed text-charcoal-700">
            {hero.supporting}
          </motion.p>

          <motion.p variants={rise} transition={transition.hero} className="mt-4 text-sm font-semibold italic text-clay-600">
            {hero.tagline}
          </motion.p>

          <motion.div variants={rise} transition={transition.hero} className="mt-8 flex flex-wrap gap-3">
            <Button href={hero.primaryCta.href} variant="primary">
              {hero.primaryCta.label}
            </Button>
            <Button href={hero.secondaryCta.href} variant="secondary">
              {hero.secondaryCta.label}
            </Button>
          </motion.div>
        </motion.div>

        {/* Documentary-style image, full-bleed on the right, offset above the text panel on mobile. */}
        <motion.div
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ ...transition.hero, duration: 1.1 }}
          className="relative min-h-[50vh] lg:min-h-full"
        >
          <Image
            src="/images/community/gathering-dance.jpg"
            alt="Women from a Kupanda Collective community gathering dancing together outdoors"
            fill
            priority
            sizes="(min-width: 1024px) 60vw, 100vw"
            className="object-cover"
          />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.4 }}
        className="pointer-events-none absolute inset-x-0 bottom-4 hidden justify-center sm:flex"
      >
        <ChevronDown className="h-6 w-6 animate-bounce text-cream-50/70" aria-hidden="true" />
      </motion.div>
    </section>
  );
}
