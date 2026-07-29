import Link from "next/link";
import { ArrowRight, type LucideIcon } from "lucide-react";
import type { Programme } from "@/content/programmes";

export function ProgrammeCard({ programme, Icon }: { programme: Programme; Icon: LucideIcon }) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-sage-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
      <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-sage-100 text-forest-700">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </span>
      <h3 className="text-lg font-semibold text-forest-900">{programme.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-charcoal-700">{programme.summary}</p>
      <Link
        href={`/our-work#${programme.slug}`}
        className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-forest-700 hover:text-forest-900"
      >
        Learn more
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </Link>
    </div>
  );
}
