"use client";

import { MotionConfig } from "motion/react";
import { easeGrowth } from "@/lib/motion";

/**
 * Applies the shared Kupanda easing curve to every `motion.*` element by
 * default, and sets `reducedMotion="user"` so Motion automatically strips
 * transform-based animation (scale/x/y/rotate) for visitors who have
 * requested reduced motion at the OS level, independent of any per-component
 * check.
 */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig transition={{ ease: easeGrowth }} reducedMotion="user">
      {children}
    </MotionConfig>
  );
}
