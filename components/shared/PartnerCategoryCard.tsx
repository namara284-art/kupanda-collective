import type { PartnershipPathway } from "@/content/partnership";

export function PartnerCategoryCard({ pathway }: { pathway: PartnershipPathway }) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-sage-200 bg-white p-6">
      <h3 className="text-lg font-semibold text-forest-900">{pathway.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-charcoal-700">{pathway.description}</p>
      <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Relevant audiences">
        {pathway.audiences.map((audience) => (
          <li key={audience} className="rounded-full bg-sage-100 px-2.5 py-1 text-xs font-medium text-forest-800">
            {audience}
          </li>
        ))}
      </ul>
    </div>
  );
}
