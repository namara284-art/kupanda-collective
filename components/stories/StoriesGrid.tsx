"use client";

import { useMemo, useState } from "react";
import { storyCategories, storyPlaceholders } from "@/content/stories";
import { CategoryFilter } from "./CategoryFilter";
import { ArticleCard } from "./ArticleCard";
import { EmptyState } from "@/components/shared/EmptyState";
import { cn } from "@/lib/cn";

// Mixed tile widths for a magazine feel, cycling through a rhythm instead
// of a uniform three-column grid.
const spanRhythm = ["sm:col-span-3", "sm:col-span-3", "sm:col-span-2", "sm:col-span-2", "sm:col-span-2"];

export function StoriesGrid() {
  const [active, setActive] = useState<string>("All");

  const filtered = useMemo(
    () => (active === "All" ? storyPlaceholders : storyPlaceholders.filter((s) => s.category === active)),
    [active]
  );

  const [featured, ...rest] = filtered;

  return (
    <div>
      <CategoryFilter categories={storyCategories} active={active} onChange={setActive} />
      <div className="mt-8" aria-live="polite">
        {filtered.length === 0 ? (
          <EmptyState title="No entries in this category yet" body="Check back soon, or browse another category above." />
        ) : (
          <div className="space-y-6">
            <ArticleCard story={featured} featured />
            <div className="grid gap-5 sm:grid-cols-6">
              {rest.map((story, i) => (
                <div key={story.slug} className={cn("col-span-1", spanRhythm[i % spanRhythm.length])}>
                  <ArticleCard story={story} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
