"use client";

import { motion } from "motion/react";
import { spring } from "@/lib/motion";

/**
 * Wraps an interactive element with a restrained spring lift on hover/focus
 * and a slight press-down on tap, for the handful of primary interactive
 * elements that should feel a little more alive (hero CTA, ecosystem nodes).
 * Movement stays small (scale 1 -> 1.025, translateY -2px) so click accuracy
 * is unaffected.
 */
export function MagneticButton({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.span
      className={className}
      style={{ display: "inline-block" }}
      whileHover={{ scale: 1.025, y: -2 }}
      whileFocus={{ scale: 1.025, y: -2 }}
      whileTap={{ scale: 0.98, y: 0 }}
      transition={spring.interactive}
    >
      {children}
    </motion.span>
  );
}
