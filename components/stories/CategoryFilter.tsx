"use client";

import { cn } from "@/lib/cn";

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
              "min-h-11 rounded-full border px-4 py-2 text-sm font-medium transition-colors",
              isActive
                ? "border-forest-700 bg-forest-700 text-cream-50"
                : "border-sage-300 bg-white text-charcoal-700 hover:border-forest-600 hover:text-forest-800"
            )}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
