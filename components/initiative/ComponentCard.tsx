import type { InitiativeComponent } from "@/content/initiative";

export function ComponentCard({ item }: { item: InitiativeComponent }) {
  return (
    <div id={`component-${item.number}`} className="scroll-mt-24 rounded-2xl border border-sage-200 bg-white p-6 sm:p-8">
      <div className="flex items-start gap-4">
        <span
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-forest-700 font-heading text-lg font-semibold text-cream-50"
          aria-hidden="true"
        >
          {item.number}
        </span>
        <div>
          <h3 className="text-xl font-semibold text-forest-900">{item.title}</h3>
          <p className="mt-2 text-[1.02rem] leading-relaxed text-charcoal-700">{item.description}</p>
        </div>
      </div>
      <ul className="mt-5 space-y-2.5 border-t border-sage-200 pt-5 sm:pl-[60px]">
        {item.details.map((detail) => (
          <li key={detail} className="flex gap-2.5 text-sm leading-relaxed text-charcoal-700">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-leaf-500" aria-hidden="true" />
            <span>{detail}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
