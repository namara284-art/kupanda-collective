export function EmptyState({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-2xl border border-dashed border-sage-300 bg-sage-100 p-10 text-center">
      <h3 className="text-lg font-semibold text-forest-900">{title}</h3>
      <p className="mx-auto mt-2 max-w-md text-sm text-charcoal-700">{body}</p>
    </div>
  );
}
