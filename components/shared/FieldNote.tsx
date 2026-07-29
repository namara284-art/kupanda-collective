import { Pin } from "lucide-react";

/**
 * A small hand-set annotation, used for asides, disclaimers and editorial
 * notes, as a warmer alternative to a plain callout box.
 */
export function FieldNote({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`radius-organic-2 -rotate-1 border border-dashed border-clay-500/50 bg-clay-100 px-5 py-4 text-sm leading-relaxed text-clay-700 ${className}`}
    >
      <span className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-clay-600">
        <Pin className="h-3.5 w-3.5" aria-hidden="true" />
        Field note
      </span>
      {children}
    </div>
  );
}
