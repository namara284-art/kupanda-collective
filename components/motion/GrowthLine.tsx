"use client";

import { motion } from "motion/react";
import { transition, viewport } from "@/lib/motion";

/**
 * A single SVG path that draws itself once it scrolls into view, used for
 * every "growing line" moment in the motion system (the meaning section's
 * stem, connecting lines between outcomes, the programme pathway, the
 * ecosystem's spokes, the footer's closing leaf).
 */
export function GrowthLine({
  d,
  viewBox,
  className,
  strokeWidth = 3,
  delay = 0,
  durationSeconds = 1.1,
  preserveAspectRatio,
}: {
  d: string;
  viewBox: string;
  className?: string;
  strokeWidth?: number;
  delay?: number;
  durationSeconds?: number;
  preserveAspectRatio?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      viewBox={viewBox}
      preserveAspectRatio={preserveAspectRatio}
      className={className}
      fill="none"
    >
      <motion.path
        d={d}
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={viewport}
        transition={{ ...transition.hero, duration: durationSeconds, delay }}
      />
    </svg>
  );
}
