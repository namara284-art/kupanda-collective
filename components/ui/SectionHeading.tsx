import { cn } from "@/lib/cn";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  id,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  id?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-forest-600">
          {eyebrow}
        </p>
      ) : null}
      <h2 id={id} className="text-balance text-[clamp(1.6rem,1.3rem+1.4vw,2.5rem)] font-semibold text-forest-900">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-[1.05rem] leading-relaxed text-charcoal-700">{description}</p>
      ) : null}
    </div>
  );
}
