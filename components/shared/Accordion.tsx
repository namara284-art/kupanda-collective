export function Accordion({ items }: { items: { question: string; answer: string }[] }) {
  return (
    <div className="divide-y divide-sage-300 rounded-2xl border border-sage-200 bg-white">
      {items.map((item) => (
        <details key={item.question} className="group p-5 sm:p-6">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-forest-900 marker:content-none">
            {item.question}
            <span
              aria-hidden="true"
              className="shrink-0 text-xl leading-none text-forest-600 transition-transform group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <p className="mt-3 text-sm leading-relaxed text-charcoal-700">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
