import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { assemblies } from "@/content/homepage";
import { CommunityQuote } from "@/components/shared/CommunityQuote";

export function AssembliesSection() {
  return (
    <section className="bg-cream-50" aria-labelledby="assemblies-heading">
      <div className="grid lg:grid-cols-2">
        <div className="relative min-h-[22rem]">
          <Image
            src="/images/community/assembly-wide.jpg"
            alt="Community members gathered for a neighbourhood meeting, with a young child in the foreground"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        <div className="flex flex-col justify-center px-6 py-16 sm:px-12 sm:py-20 lg:px-16">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.14em] text-clay-600">{assemblies.eyebrow}</p>
          <h2 id="assemblies-heading" className="text-balance text-[clamp(1.6rem,1.3rem+1.4vw,2.3rem)] font-semibold text-forest-900">
            {assemblies.heading}
          </h2>
          <p className="mt-4 max-w-lg text-[1.02rem] leading-relaxed text-charcoal-700">{assemblies.body}</p>

          <CommunityQuote quote={assemblies.pullQuote} className="mt-6 max-w-lg" />

          <Link
            href={assemblies.cta.href}
            className="mt-7 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-forest-700 hover:text-forest-900"
          >
            {assemblies.cta.label}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
