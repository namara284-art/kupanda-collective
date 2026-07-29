"use client";

import { motion, type HTMLMotionProps } from "motion/react";
import { distance, transition } from "@/lib/motion";

type StaggerItemProps = HTMLMotionProps<"div"> & {
  as?: "div" | "li" | "article";
  variant?: "fade-up" | "scale";
};

/** A single child of StaggerGroup; inherits the parent's stagger timing. */
export function StaggerItem({ as = "div", variant = "fade-up", className, children, ...rest }: StaggerItemProps) {
  const MotionTag = motion[as] as React.ElementType;
  const hidden = variant === "scale" ? { opacity: 0, scale: 0.94 } : { opacity: 0, y: distance.small };
  const visible = variant === "scale" ? { opacity: 1, scale: 1 } : { opacity: 1, y: 0 };

  return (
    <MotionTag variants={{ hidden, visible }} transition={transition.reveal} className={className} {...rest}>
      {children}
    </MotionTag>
  );
}
