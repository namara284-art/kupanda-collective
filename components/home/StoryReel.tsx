"use client";

import Link from "next/link";
import { ArrowRight, ImageIcon } from "lucide-react";
import { motion } from "motion/react";
import { storiesReel } from "@/content/homepage";
import { storyPlaceholders } from "@/content/stories";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { StaggerGroup } from "@/components/motion/StaggerGroup";
import { StaggerItem } from "@/components/motion/StaggerItem";
import { transition } from "@/lib/motion";

export function StoryReel() {
  const [lead, ...rest] = storyPlaceholders;
  const teasers = rest.slice(0, 3);

  return (
    <section className="py-20 sm:py-24" aria-labelledby="stories-heading">
      <Container>
        <ScrollReveal className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div className="max-w-xl">
            <h2 id="stories-heading" className="text-balance text-[clamp(1.6rem,1.3rem+1.4vw,2.3rem)] font-semibold text-forest-900">
              {storiesReel.heading}
            </h2>
          </div>
          <Link
            href={storiesReel.cta.href}
            className="group inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-forest-700 hover:text-forest-900"
          >
            {storiesReel.cta.label}
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </ScrollReveal>

        <StaggerGroup className="mt-10 grid gap-6 lg:grid-cols-2">
          <StaggerItem>
            <motion.article
              whileHover={{ y: -4 }}
              transition={transition.control}
              className="flex h-full flex-col overflow-hidden rounded-3xl border border-sage-200 bg-white transition-shadow duration-200 hover:shadow-lg lg:flex-row"
            >
              <motion.div
                whileHover={{ scale: 1.04 }}
                transition={transition.control}
                className="flex aspect-[16/10] items-center justify-center bg-sage-100 lg:aspect-auto lg:w-2/5"
                aria-hidden="true"
              >
                <ImageIcon className="h-9 w-9 text-forest-400" />
              </motion.div>
              <div className="flex flex-1 flex-col justify-center p-6 sm:p-8">
                <div className="mb-3 flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-sage-100 px-2.5 py-1 text-xs font-semibold text-forest-800">
                    {lead.category}
                  </span>
                  <span className="rounded-full bg-clay-100 px-2.5 py-1 text-xs font-semibold text-clay-600">
                    {lead.statusLabel}
                  </span>
                </div>
                <h3 className="font-heading text-xl font-semibold text-forest-900">{lead.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal-700">{lead.summary}</p>
              </div>
            </motion.article>
          </StaggerItem>

          <StaggerItem className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {teasers.map((story) => (
              <motion.article
                key={story.slug}
                whileHover={{ y: -3 }}
                transition={transition.control}
                className="flex gap-4 rounded-2xl border border-sage-200 bg-white p-4 transition-shadow duration-200 hover:shadow-md"
              >
                <div className="flex aspect-square w-16 shrink-0 items-center justify-center rounded-xl bg-sage-100" aria-hidden="true">
                  <ImageIcon className="h-5 w-5 text-forest-400" />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wide text-clay-600">{story.statusLabel}</span>
                  <h3 className="mt-0.5 text-sm font-semibold leading-snug text-forest-900">{story.title}</h3>
                </div>
              </motion.article>
            ))}
          </StaggerItem>
        </StaggerGroup>
      </Container>
    </section>
  );
}
