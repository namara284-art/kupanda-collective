import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/cn";

export type ImageSlot = {
  /** Required descriptive alt text once a real photograph is added. */
  alt: string;
  /** Optional visible caption. */
  caption?: string;
  /** Rights/attribution metadata, not necessarily rendered publicly. */
  credit?: string;
};

/**
 * Placeholder for a future approved, consented photograph. Replace with
 * next/image once Kupanda supplies rights-cleared images. See
 * CONTENT_CHECKLIST.md. Keeping a consistent placeholder (rather than a
 * remote stock image) avoids licensing risk and broken links.
 */
export function ImagePlaceholder({
  slot,
  aspect = "aspect-[4/3]",
  className,
}: {
  slot: ImageSlot;
  aspect?: string;
  className?: string;
}) {
  return (
    <figure className={cn("overflow-hidden rounded-2xl", className)}>
      <div
        className={cn(
          "flex flex-col items-center justify-center gap-3 border border-dashed border-sage-300 bg-sage-100 px-6 text-center",
          aspect
        )}
        role="img"
        aria-label={slot.alt}
      >
        <ImageIcon className="h-8 w-8 text-forest-500" aria-hidden="true" />
        <p className="max-w-xs text-sm font-medium text-forest-700">{slot.alt}</p>
        <p className="text-xs text-charcoal-500">Image placeholder: awaiting approved photograph</p>
      </div>
      {slot.caption ? (
        <figcaption className="mt-2 text-sm text-charcoal-500">
          {slot.caption}
          {slot.credit ? <span className="text-charcoal-500/70"> ({slot.credit})</span> : null}
        </figcaption>
      ) : null}
    </figure>
  );
}
