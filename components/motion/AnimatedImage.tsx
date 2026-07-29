"use client";

import { motion } from "motion/react";
import { transition, viewport } from "@/lib/motion";
import { cn } from "@/lib/cn";

/**
 * Wraps an image (or any media) with a soft clip-path reveal and a gentle
 * scale-down from 1.04 to 1, so photographs settle into place rather than
 * simply appearing. Pass the `next/image` (or other media) as children.
 */
export function AnimatedImage({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ clipPath: "inset(0 0 100% 0)" }}
      whileInView={{ clipPath: "inset(0 0 0% 0)" }}
      viewport={viewport}
      transition={{ ...transition.hero, delay }}
      className={cn("relative overflow-hidden", className)}
    >
      <motion.div
        initial={{ scale: 1.04 }}
        whileInView={{ scale: 1 }}
        viewport={viewport}
        transition={{ ...transition.hero, delay }}
        className="h-full w-full"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
