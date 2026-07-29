"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { assemblies } from "@/content/homepage";
import { CommunityQuote } from "@/components/shared/CommunityQuote";
import { AnimatedImage } from "@/components/motion/AnimatedImage";
import { StaggerGroup } from "@/components/motion/StaggerGroup";
import { StaggerItem } from "@/components/motion/StaggerItem";
import { viewport } from "@/lib/motion";

// Abstract, non-figurative marks that gently converge toward the centre as
// the section appears, standing in for people gathering rather than
// depicting any individual.
const markers = [
  { x: -70, y: -46 }, { x: 68, y: -40 }, { x: -84, y: 20 },
  { x: 78, y: 34 }, { x: -30, y: 58 }, { x: 30, y: -60 },
];

export function AssembliesSection() {
  return (
    <section className="bg-cream-50" aria-labelledby="assemblies-heading">
      <div className="grid lg:grid-cols-2">
        <AnimatedImage className="relative min-h-[22rem]">
          <div className="relative h-full w-full">
            <Image
              src="/images/community/assembly-wide.jpg"
              alt="Community members gathered for a neighbourhood meeting, with a young child in the foreground"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            <svg aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full" viewBox="-100 -100 200 200">
              {markers.map((m, i) => (
                <motion.circle
                  key={i}
                  cx="0"
                  cy="0"
                  r="3"
                  className="fill-leaf-300/70"
                  initial={{ cx: m.x, cy: m.y, opacity: 0 }}
                  whileInView={{ cx: 0, cy: 0, opacity: [0, 0.9, 0] }}
                  viewport={viewport}
                  transition={{ duration: 1.1, delay: 0.15 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                />
              ))}
            </svg>
          </div>
        </AnimatedImage>

        <StaggerGroup interval="normal" className="flex flex-col justify-center px-6 py-16 sm:px-12 sm:py-20 lg:px-16">
          <StaggerItem>
            <h2 id="assemblies-heading" className="text-balance text-[clamp(1.6rem,1.3rem+1.4vw,2.3rem)] font-semibold text-forest-900">
              {assemblies.heading}
            </h2>
          </StaggerItem>
          <StaggerItem>
            <p className="mt-4 max-w-lg text-[1.02rem] leading-relaxed text-charcoal-700">{assemblies.body}</p>
          </StaggerItem>
          <StaggerItem>
            <CommunityQuote quote={assemblies.pullQuote} className="mt-6 max-w-lg" />
          </StaggerItem>
          <StaggerItem>
            <Link
              href={assemblies.cta.href}
              className="group mt-7 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-forest-700 hover:text-forest-900"
            >
              {assemblies.cta.label}
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </StaggerItem>
        </StaggerGroup>
      </div>
    </section>
  );
}
