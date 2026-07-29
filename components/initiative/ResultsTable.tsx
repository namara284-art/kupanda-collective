import type { ResultTarget } from "@/content/initiative";

export function ResultsTable({ results }: { results: ResultTarget[] }) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-sage-200 bg-white">
      <table className="w-full min-w-[640px] border-collapse text-left text-sm">
        <caption className="sr-only">
          Proposed three-year targets for the Childcare Workforce Initiative, by result area
        </caption>
        <thead>
          <tr className="border-b border-sage-200 bg-sage-100">
            <th scope="col" className="px-5 py-3.5 font-semibold text-forest-900">
              Result area
            </th>
            <th scope="col" className="px-5 py-3.5 font-semibold text-forest-900">
              Indicator
            </th>
            <th scope="col" className="px-5 py-3.5 font-semibold text-forest-900">
              Proposed three-year target
            </th>
          </tr>
        </thead>
        <tbody>
          {results.map((row, i) => (
            <tr key={row.resultArea} className={i % 2 === 1 ? "bg-sage-50/60" : undefined}>
              <th scope="row" className="px-5 py-4 align-top font-semibold text-charcoal-900">
                {row.resultArea}
              </th>
              <td className="px-5 py-4 align-top text-charcoal-700">{row.indicator}</td>
              <td className="whitespace-nowrap px-5 py-4 align-top font-semibold text-forest-700">{row.target}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
