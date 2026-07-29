"use client";

import { useState } from "react";
import Link from "next/link";
import { Sprout, HeartPulse, HandCoins, Users, LineChart, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { programmes } from "@/content/programmes";
import { ecosystem } from "@/content/homepage";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { AnimatedAccordionItem } from "@/components/motion/AnimatedAccordion";
import { transition, spring, stagger, viewport } from "@/lib/motion";

const icons = {
  "early-childhood-development": Sprout,
  "health-and-nurturing-care": HeartPulse,
  "caregiver-livelihoods": HandCoins,
  "participation-and-social-cohesion": Users,
  "evidence-learning-and-policy": LineChart,
} as const;

// Positions (top%, left%) tracing a five-point ring around a centre node.
const positions = [
  { top: "6%", left: "50%" },
  { top: "35%", left: "91%" },
  { top: "86%", left: "76%" },
  { top: "86%", left: "24%" },
  { top: "35%", left: "9%" },
];

export function GrowthEcosystem() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState<string | null>(null);

  return (
    <section className="bg-forest-900 py-20 text-cream-50 sm:py-24" aria-labelledby="ecosystem-heading">
      <Container>
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.14em] text-leaf-400">{ecosystem.eyebrow}</p>
          <h2 id="ecosystem-heading" className="text-balance text-[clamp(1.7rem,1.4rem+1.5vw,2.6rem)] font-semibold text-cream-50">
            {ecosystem.heading}
          </h2>
          <p className="mt-4 text-[1.02rem] leading-relaxed text-sage-100">{ecosystem.description}</p>
        </ScrollReveal>

        {/* Desktop: orbital composition */}
        <div className="relative mx-auto mt-16 hidden h-[600px] max-w-3xl lg:block">
          <svg aria-hidden="true" viewBox="0 0 100 100" className="pointer-events-none absolute inset-0 h-full w-full">
            {positions.map((pos, i) => (
              <motion.line
                key={i}
                x1="50"
                y1="50"
                x2={parseFloat(pos.left)}
                y2={parseFloat(pos.top)}
                stroke="currentColor"
                strokeWidth="0.4"
                strokeLinecap="round"
                className={activeIndex === i ? "text-leaf-400" : "text-forest-700"}
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={viewport}
                transition={{ ...transition.hero, delay: 0.2 + i * stagger.tight }}
              />
            ))}
          </svg>

          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={viewport}
            transition={transition.control}
            className="absolute left-1/2 top-1/2 flex h-40 w-40 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border-4 border-leaf-500 bg-forest-800 p-4 text-center shadow-xl"
          >
            <p className="font-heading text-base font-semibold leading-tight text-cream-50">{ecosystem.centre}</p>
          </motion.div>

          {programmes.map((programme, i) => {
            const Icon = icons[programme.slug as keyof typeof icons];
            const pos = positions[i];
            return (
              <motion.div
                key={programme.slug}
                className="absolute w-52 -translate-x-1/2 -translate-y-1/2"
                style={{ top: pos.top, left: pos.left }}
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={viewport}
                transition={{ ...transition.control, delay: 0.3 + i * stagger.normal }}
              >
                <motion.div whileHover={{ scale: 1.025 }} whileFocus={{ scale: 1.025 }} whileTap={{ scale: 0.98 }} transition={spring.interactive}>
                  <Link
                    href={`/our-work/${programme.slug}`}
                    onMouseEnter={() => setActiveIndex(i)}
                    onMouseLeave={() => setActiveIndex(null)}
                    onFocus={() => setActiveIndex(i)}
                    onBlur={() => setActiveIndex(null)}
                    className="group block rounded-2xl border border-forest-700 bg-forest-800/90 p-4 text-center transition-colors hover:border-leaf-400 hover:bg-forest-800"
                  >
                    <span className="mx-auto mb-2 flex h-9 w-9 items-center justify-center rounded-full bg-sage-100 text-forest-700">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <p className="text-sm font-semibold text-cream-50">{programme.shortTitle}</p>
                    <p className="mt-1 text-xs leading-snug text-sage-200 opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                      {programme.summary}
                    </p>
                  </Link>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile/tablet: accessible expandable rows */}
        <div className="mt-12 divide-y divide-forest-700 rounded-2xl border border-forest-700 lg:hidden">
          {programmes.map((programme) => {
            const Icon = icons[programme.slug as keyof typeof icons];
            const open = mobileOpen === programme.slug;
            return (
              <AnimatedAccordionItem
                key={programme.slug}
                id={`ecosystem-${programme.slug}`}
                open={open}
                onToggle={() => setMobileOpen(open ? null : programme.slug)}
                className="p-5"
                trigger={
                  <>
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sage-100 text-forest-700">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <span className="flex-1 font-semibold text-cream-50">{programme.shortTitle}</span>
                  </>
                }
              >
                <p className="mt-3 pl-12 text-sm leading-relaxed text-sage-200">{programme.summary}</p>
                <Link
                  href={`/our-work/${programme.slug}`}
                  className="group mt-3 ml-12 inline-flex items-center gap-1.5 text-sm font-semibold text-leaf-400 hover:text-leaf-300"
                >
                  Read more
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
                </Link>
              </AnimatedAccordionItem>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <Link
            href={ecosystem.cta.href}
            className="group inline-flex items-center gap-1.5 rounded-full bg-leaf-500 px-6 py-3 text-sm font-semibold text-forest-950 transition-all duration-200 hover:-translate-y-0.5 hover:bg-leaf-400 hover:shadow-lg"
          >
            {ecosystem.cta.label}
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
