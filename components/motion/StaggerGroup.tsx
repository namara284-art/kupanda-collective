"use client";

import { motion, type HTMLMotionProps } from "motion/react";
import { stagger, viewport } from "@/lib/motion";

type StaggerGroupProps = HTMLMotionProps<"div"> & {
  interval?: keyof typeof stagger;
  as?: "div" | "ul" | "ol" | "dl";
};

/** Wraps a set of StaggerItem children so they reveal in a short, gentle sequence. */
export function StaggerGroup({ interval = "normal", as = "div", className, children, ...rest }: StaggerGroupProps) {
  const MotionTag = motion[as] as React.ElementType;
  return (
    <MotionTag
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger[interval] } },
      }}
      className={className}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
