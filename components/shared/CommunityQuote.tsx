export function CommunityQuote({
  quote,
  className = "",
  tone = "light",
}: {
  quote: string;
  className?: string;
  tone?: "light" | "dark";
}) {
  return (
    <blockquote
      className={`border-l-4 border-clay-500 py-1 pl-5 font-heading text-xl font-medium leading-snug ${
        tone === "dark" ? "text-cream-50" : "text-forest-800"
      } ${className}`}
    >
      &ldquo;{quote}&rdquo;
    </blockquote>
  );
}
