import { Info } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";

export function LegalPageBody({
  title,
  updated,
  sections,
}: {
  title: string;
  updated: string;
  sections: { heading: string; body: string }[];
}) {
  return (
    <>
      <div className="border-b border-sage-200 bg-cream-100 py-10 sm:py-14">
        <Container>
          <Breadcrumbs items={[{ label: title }]} />
          <h1 className="mt-4 text-balance text-[clamp(1.8rem,1.5rem+1.4vw,2.6rem)] font-semibold text-forest-900">
            {title}
          </h1>
          <div className="mt-4 flex items-start gap-2.5 rounded-xl bg-clay-100 p-4 text-sm text-charcoal-900">
            <Info className="mt-0.5 h-4 w-4 shrink-0 text-clay-600" aria-hidden="true" />
            <p>{updated}</p>
          </div>
        </Container>
      </div>

      <section className="py-14 sm:py-16">
        <Container className="max-w-3xl space-y-8">
          {sections.map((section) => (
            <div key={section.heading}>
              <h2 className="text-lg font-semibold text-forest-900">{section.heading}</h2>
              <p className="mt-2 leading-relaxed text-charcoal-700">{section.body}</p>
            </div>
          ))}
        </Container>
      </section>
    </>
  );
}
