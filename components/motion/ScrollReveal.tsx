"use client";

import { motion, type HTMLMotionProps } from "motion/react";
import { revealVariants, transition, viewport, type RevealVariant } from "@/lib/motion";

type ScrollRevealProps = HTMLMotionProps<"div"> & {
  variant?: RevealVariant;
  /** Delay in seconds, useful for hand-placed sequencing outside a StaggerGroup. */
  delay?: number;
  as?: "div" | "section" | "article" | "li";
};

/**
 * Fades/rises/reveals children once, the first time ~20% of the element is
 * visible. Reused across the site instead of one-off `whileInView` blocks so
 * every section shares the same viewport threshold and easing.
 */
export function ScrollReveal({ variant = "fade-up", delay = 0, as = "div", className, children, ...rest }: ScrollRevealProps) {
  const MotionTag = motion[as] as React.ElementType;
  const variants = revealVariants[variant];

  return (
    <MotionTag
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={variants}
      transition={{ ...transition.reveal, delay }}
      className={className}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
