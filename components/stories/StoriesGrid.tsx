"use client";

import { useMemo, useState } from "react";
import { storyCategories, storyPlaceholders } from "@/content/stories";
import { CategoryFilter } from "./CategoryFilter";
import { ArticleCard } from "./ArticleCard";
import { EmptyState } from "@/components/shared/EmptyState";

export function StoriesGrid() {
  const [active, setActive] = useState<string>("All");

  const filtered = useMemo(
    () => (active === "All" ? storyPlaceholders : storyPlaceholders.filter((s) => s.category === active)),
    [active]
  );

  return (
    <div>
      <CategoryFilter categories={storyCategories} active={active} onChange={setActive} />
      <div className="mt-8" aria-live="polite">
        {filtered.length === 0 ? (
          <EmptyState
            title="No entries in this category yet"
            body="Check back soon, or browse another category above."
          />
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((story) => (
              <ArticleCard key={story.slug} story={story} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
