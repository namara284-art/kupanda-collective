"use client";

import { motion } from "motion/react";
import { stagger, transition, viewport, distance } from "@/lib/motion";

/**
 * Reveals heading text word by word, like lines of new growth rising into
 * place. The real text stays in the DOM for search/AT; the split words are
 * `aria-hidden` and the wrapper carries the accessible name instead.
 */
export function AnimatedHeading({
  text,
  as: Tag = "h1",
  className,
  wordDelay = stagger.tight,
  once = true,
}: {
  text: string;
  as?: "h1" | "h2" | "h3";
  className?: string;
  wordDelay?: number;
  once?: boolean;
}) {
  const words = text.split(" ");

  return (
    <Tag className={className} aria-label={text}>
      <motion.span
        aria-hidden="true"
        initial="hidden"
        whileInView="visible"
        viewport={{ ...viewport, once }}
        variants={{ hidden: {}, visible: { transition: { staggerChildren: wordDelay } } }}
        className="inline"
      >
        {words.map((word, i) => (
          <motion.span
            key={`${word}-${i}`}
            variants={{
              hidden: { opacity: 0, y: distance.small },
              visible: { opacity: 1, y: 0 },
            }}
            transition={transition.reveal}
            className="inline-block"
          >
            {word}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        ))}
      </motion.span>
    </Tag>
  );
}
