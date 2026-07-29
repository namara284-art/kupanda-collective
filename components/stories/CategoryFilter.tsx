"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/cn";
import { transition } from "@/lib/motion";

export function CategoryFilter({
  categories,
  active,
  onChange,
}: {
  categories: readonly string[];
  active: string;
  onChange: (category: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2" role="group" aria-label="Filter stories by category">
      {["All", ...categories].map((category) => {
        const isActive = active === category;
        return (
          <button
            key={category}
            type="button"
            aria-pressed={isActive}
            onClick={() => onChange(category)}
            className={cn(
              "relative min-h-11 rounded-full border px-4 py-2 text-sm font-medium transition-colors",
              isActive ? "border-ochre-600 text-charcoal-900" : "border-sage-300 bg-white text-charcoal-700 hover:border-forest-600 hover:text-forest-800"
            )}
          >
            {isActive ? (
              <motion.span
                layoutId="category-filter-active"
                transition={transition.control}
                className="absolute inset-0 rounded-full bg-ochre-500"
              />
            ) : null}
            <span className="relative">{category}</span>
          </button>
        );
      })}
    </div>
  );
}
