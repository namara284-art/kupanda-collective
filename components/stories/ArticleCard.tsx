import { ImageIcon } from "lucide-react";
import type { StoryCard } from "@/content/stories";

export function ArticleCard({ story }: { story: StoryCard }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-sage-200 bg-white">
      <div className="flex aspect-[16/10] items-center justify-center bg-sage-100" aria-hidden="true">
        <ImageIcon className="h-8 w-8 text-forest-400" />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-sage-100 px-2.5 py-1 text-xs font-semibold text-forest-800">
            {story.category}
          </span>
          <span className="rounded-full bg-clay-100 px-2.5 py-1 text-xs font-semibold text-clay-600">
            {story.statusLabel}
          </span>
        </div>
        <h3 className="text-lg font-semibold text-forest-900">{story.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-charcoal-700">{story.summary}</p>
      </div>
    </article>
  );
}
