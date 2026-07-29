import { programmes } from "@/content/programmes";

/**
 * Systems diagram: the five programme pillars arranged around the child,
 * caregiver and community at the centre. Built with HTML/CSS rather than
 * an image so it stays crisp at any size, is keyboard/screen-reader
 * friendly, and needs no separate alt text maintenance.
 */
export function SystemsDiagram() {
  return (
    <div>
      <div
        role="img"
        aria-label="Diagram: five connected programme pillars — early childhood development and childcare, health and integrated nurturing care, caregiver livelihoods, participation and social cohesion, and evidence and policy influence — surround a central focus on the child, caregiver and community."
        className="relative mx-auto grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4"
      >
        {programmes.slice(0, 2).map((p) => (
          <PillarNode key={p.slug} label={p.shortTitle} />
        ))}
        <div className="col-span-2 sm:col-span-1 sm:row-span-1" aria-hidden="true">
          <div className="flex h-full min-h-[120px] flex-col items-center justify-center rounded-2xl bg-forest-900 p-4 text-center text-cream-50">
            <p className="font-heading text-lg font-semibold leading-tight">Child, caregiver &amp; community</p>
          </div>
        </div>
        {programmes.slice(2, 4).map((p) => (
          <PillarNode key={p.slug} label={p.shortTitle} />
        ))}
        <div className="col-span-2 sm:col-span-1">
          <PillarNode label={programmes[4].shortTitle} />
        </div>
      </div>
    </div>
  );
}

function PillarNode({ label }: { label: string }) {
  return (
    <div
      aria-hidden="true"
      className="flex min-h-[120px] items-center justify-center rounded-2xl border-2 border-sage-300 bg-white p-4 text-center"
    >
      <p className="text-sm font-semibold text-forest-800">{label}</p>
    </div>
  );
}
