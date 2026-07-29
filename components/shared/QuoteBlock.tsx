import { Sprout } from "lucide-react";

/**
 * Placeholder for a future, consented community-voice quote. Do not
 * populate `quote`/`attribution` with invented testimonials — see
 * /safeguarding and the editorial note in content/homepage.ts.
 */
export function CommunityVoicePlaceholder({
  heading,
  body,
  note,
}: {
  heading: string;
  body: string;
  note: string;
}) {
  return (
    <div className="rounded-2xl border border-dashed border-sage-300 bg-sage-100 p-8 text-center sm:p-12">
      <Sprout className="mx-auto h-8 w-8 text-forest-600" aria-hidden="true" />
      <h3 className="mt-4 text-xl font-semibold text-forest-900">{heading}</h3>
      <p className="mt-2 text-charcoal-700">{body}</p>
      <p className="mx-auto mt-4 max-w-2xl text-xs text-charcoal-500">{note}</p>
    </div>
  );
}
