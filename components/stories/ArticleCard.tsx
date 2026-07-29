"use client";

import { ImageIcon } from "lucide-react";
import { motion } from "motion/react";
import type { StoryCard } from "@/content/stories";
import { cn } from "@/lib/cn";
import { transition } from "@/lib/motion";

export function ArticleCard({ story, featured = false }: { story: StoryCard; featured?: boolean }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      whileHover={{ y: -4 }}
      transition={transition.reveal}
      className={cn(
        "flex h-full flex-col overflow-hidden rounded-3xl border border-sage-200 bg-white transition-shadow duration-200 hover:shadow-lg",
        featured && "sm:flex-row"
      )}
    >
      <motion.div
        whileHover={{ scale: 1.03 }}
        transition={transition.control}
        className={cn(
          "flex items-center justify-center bg-sage-100",
          featured ? "aspect-[16/9] sm:aspect-auto sm:w-2/5" : "aspect-[16/10]"
        )}
        aria-hidden="true"
      >
        <ImageIcon className={featured ? "h-10 w-10 text-forest-400" : "h-8 w-8 text-forest-400"} />
      </motion.div>
      <div className="flex flex-1 flex-col justify-center p-6">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-sage-100 px-2.5 py-1 text-xs font-semibold text-forest-800">
            {story.category}
          </span>
          <span className="rounded-full bg-clay-100 px-2.5 py-1 text-xs font-semibold text-clay-600">
            {story.statusLabel}
          </span>
        </div>
        <h3 className={cn("font-heading font-semibold text-forest-900", featured ? "text-2xl" : "text-lg")}>
          {story.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-charcoal-700">{story.summary}</p>
      </div>
    </motion.article>
  );
}
