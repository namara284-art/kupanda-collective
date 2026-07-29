"use client";

import { useRef } from "react";
import { motion, useInView, useMotionValue, useReducedMotion, animate } from "motion/react";
import { useEffect } from "react";

/**
 * Counts a number from 0 up to `value` once it scrolls into view. The
 * animated digits are decorative (`aria-hidden`); a static `sr-only` node
 * carries the final formatted value so screen readers get the real number
 * immediately rather than a stream of intermediate ones.
 */
export function CountUpStatistic({
  value,
  prefix = "",
  suffix = "",
  durationSeconds = 1.5,
  className,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  durationSeconds?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const prefersReducedMotion = useReducedMotion();
  const count = useMotionValue(0);
  const formatted = new Intl.NumberFormat("en-US").format(value);

  useEffect(() => {
    if (!inView) return;
    if (prefersReducedMotion) {
      if (ref.current) ref.current.textContent = formatted;
      return;
    }
    const controls = animate(count, value, {
      duration: durationSeconds,
      ease: [0.22, 1, 0.36, 1],
      onUpdate(latest) {
        if (ref.current) {
          ref.current.textContent = new Intl.NumberFormat("en-US").format(Math.round(latest));
        }
      },
    });
    return () => controls.stop();
  }, [inView, prefersReducedMotion, count, value, durationSeconds, formatted]);

  return (
    <motion.span className={className}>
      <span aria-hidden="true">
        {prefix}
        <span ref={ref}>0</span>
        {suffix}
      </span>
      <span className="sr-only">
        {prefix}
        {formatted}
        {suffix}
      </span>
    </motion.span>
  );
}
