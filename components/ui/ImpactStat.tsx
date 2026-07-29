export function ImpactStat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-sage-200 bg-white p-6 text-center">
      <p className="font-heading text-[clamp(2rem,1.6rem+1.6vw,2.75rem)] font-semibold text-ochre-800">{value}</p>
      <p className="mt-2 text-sm leading-snug text-charcoal-700">{label}</p>
    </div>
  );
}
