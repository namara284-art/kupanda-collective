import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ImagePlaceholder, type ImageSlot } from "@/components/shared/ImagePlaceholder";
import { AnimatedImage } from "@/components/motion/AnimatedImage";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

export function EditorialSplit({
  eyebrow,
  title,
  body,
  cta,
  image,
  reverse = false,
  id,
  tone = "cream",
}: {
  eyebrow?: string;
  title: string;
  body: string;
  cta?: { label: string; href: string };
  image: ImageSlot;
  reverse?: boolean;
  id?: string;
  tone?: "cream" | "sage";
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-24 ${tone === "sage" ? "bg-sage-100" : "bg-cream-50"}`}
      aria-labelledby={id ? `${id}-heading` : undefined}
    >
      <div className="grid lg:grid-cols-2">
        <div className={reverse ? "lg:order-2" : undefined}>
          <AnimatedImage className="[&>div]:h-full [&>div]:min-h-[20rem]">
            <ImagePlaceholder className="rounded-none [&>div]:h-full [&>div]:min-h-[20rem]" aspect="" slot={image} />
          </AnimatedImage>
        </div>
        <ScrollReveal
          variant={reverse ? "fade-left" : "fade-right"}
          className={`flex flex-col justify-center px-6 py-14 sm:px-12 sm:py-16 lg:px-16 ${reverse ? "lg:order-1" : undefined}`}
        >
          {eyebrow ? (
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.14em] text-forest-600">{eyebrow}</p>
          ) : null}
          <h3
            id={id ? `${id}-heading` : undefined}
            className="text-balance text-[clamp(1.5rem,1.25rem+1.2vw,2.1rem)] font-semibold text-forest-900"
          >
            {title}
          </h3>
          <p className="mt-4 max-w-lg text-[1.02rem] leading-relaxed text-charcoal-700">{body}</p>
          {cta ? (
            <Link
              href={cta.href}
              className="group mt-6 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-forest-700 hover:text-forest-900"
            >
              {cta.label}
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          ) : null}
        </ScrollReveal>
      </div>
    </section>
  );
}
