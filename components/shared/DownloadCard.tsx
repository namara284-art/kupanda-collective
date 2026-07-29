import { FileText } from "lucide-react";
import Link from "next/link";

export function DownloadCard({
  title,
  description,
  status = "available",
  href,
}: {
  title: string;
  description: string;
  status?: "available" | "coming-soon" | "on-request";
  href?: string;
}) {
  const statusLabel =
    status === "available" ? "Download" : status === "on-request" ? "Available on request" : "Coming soon";

  return (
    <div className="flex items-start gap-4 rounded-2xl border border-sage-200 bg-white p-6">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sage-100 text-forest-700">
        <FileText className="h-5 w-5" aria-hidden="true" />
      </span>
      <div className="flex-1">
        <h3 className="font-semibold text-forest-900">{title}</h3>
        <p className="mt-1 text-sm leading-relaxed text-charcoal-700">{description}</p>
        {status === "available" && href ? (
          <Link
            href={href}
            className="mt-3 inline-flex text-sm font-semibold text-forest-700 hover:text-forest-900 hover:underline"
          >
            {statusLabel}
          </Link>
        ) : status === "on-request" && href ? (
          <Link
            href={href}
            className="mt-3 inline-flex text-sm font-semibold text-forest-700 hover:text-forest-900 hover:underline"
          >
            Request this document
          </Link>
        ) : (
          <span className="mt-3 inline-flex rounded-full bg-sage-100 px-3 py-1 text-xs font-semibold text-charcoal-700">
            {statusLabel}
          </span>
        )}
      </div>
    </div>
  );
}
