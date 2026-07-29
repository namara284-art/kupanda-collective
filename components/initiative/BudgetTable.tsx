import type { BudgetLine } from "@/content/initiative";

function formatUsd(n: number) {
  return `$${n.toLocaleString("en-US")}`;
}

export function BudgetTable({ budget, total }: { budget: BudgetLine[]; total: BudgetLine }) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-sage-200 bg-white">
      <table className="w-full min-w-[720px] border-collapse text-left text-sm">
        <caption className="sr-only">Proposed three-year budget allocation in USD, by project component</caption>
        <thead>
          <tr className="border-b border-sage-200 bg-sage-100">
            <th scope="col" className="px-5 py-3.5 font-semibold text-forest-900">
              Budget category
            </th>
            <th scope="col" className="px-5 py-3.5 text-right font-semibold text-forest-900">
              Year 1
            </th>
            <th scope="col" className="px-5 py-3.5 text-right font-semibold text-forest-900">
              Year 2
            </th>
            <th scope="col" className="px-5 py-3.5 text-right font-semibold text-forest-900">
              Year 3
            </th>
            <th scope="col" className="px-5 py-3.5 text-right font-semibold text-forest-900">
              Total (USD)
            </th>
            <th scope="col" className="px-5 py-3.5 text-right font-semibold text-forest-900">
              Share
            </th>
          </tr>
        </thead>
        <tbody>
          {budget.map((row, i) => (
            <tr key={row.category} className={i % 2 === 1 ? "bg-sage-50/60" : undefined}>
              <th scope="row" className="px-5 py-3.5 align-top font-medium text-charcoal-900">
                {row.category}
              </th>
              <td className="px-5 py-3.5 text-right tabular-nums text-charcoal-700">{formatUsd(row.year1)}</td>
              <td className="px-5 py-3.5 text-right tabular-nums text-charcoal-700">{formatUsd(row.year2)}</td>
              <td className="px-5 py-3.5 text-right tabular-nums text-charcoal-700">{formatUsd(row.year3)}</td>
              <td className="px-5 py-3.5 text-right tabular-nums font-semibold text-forest-700">
                {formatUsd(row.total)}
              </td>
              <td className="px-5 py-3.5 text-right tabular-nums text-charcoal-700">{row.share}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr className="border-t-2 border-forest-700 bg-sage-100 font-semibold text-forest-900">
            <th scope="row" className="px-5 py-4 text-left">
              {total.category}
            </th>
            <td className="px-5 py-4 text-right tabular-nums">{formatUsd(total.year1)}</td>
            <td className="px-5 py-4 text-right tabular-nums">{formatUsd(total.year2)}</td>
            <td className="px-5 py-4 text-right tabular-nums">{formatUsd(total.year3)}</td>
            <td className="px-5 py-4 text-right tabular-nums">{formatUsd(total.total)}</td>
            <td className="px-5 py-4 text-right tabular-nums">{total.share}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
