import { Check } from "lucide-react";
import type { PathwayYear } from "@/content/initiative";

export function Timeline({ pathway }: { pathway: PathwayYear[] }) {
  return (
    <ol className="grid gap-6 lg:grid-cols-3">
      {pathway.map((year) => (
        <li key={year.year} className="flex flex-col rounded-2xl border border-sage-200 bg-white p-6">
          <div className="mb-1 text-sm font-semibold uppercase tracking-wide text-leaf-600">{year.year}</div>
          <h3 className="text-lg font-semibold text-forest-900">{year.label}</h3>
          <ul className="mt-4 space-y-3">
            {year.items.map((item) => (
              <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-charcoal-700">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-forest-600" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  );
}
