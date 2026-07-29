import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { siteConfig } from "@/content/site-settings";

export type Crumb = { label: string; href?: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const crumbs: { name: string; item?: string }[] = [
    { name: "Home", item: siteConfig.domain },
    ...items.map((item) => ({ name: item.label, item: item.href ? `${siteConfig.domain}${item.href}` : undefined })),
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: crumb.name,
      item: crumb.item,
    })),
  };

  return (
    <nav aria-label="Breadcrumb" className="text-sm">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ol className="flex flex-wrap items-center gap-1.5 text-charcoal-500">
        <li className="flex items-center gap-1.5">
          <Link href="/" className="hover:text-forest-800 hover:underline">
            Home
          </Link>
          <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
        </li>
        {items.map((item, i) => (
          <li key={item.label} className="flex items-center gap-1.5">
            {item.href && i < items.length - 1 ? (
              <>
                <Link href={item.href} className="hover:text-forest-800 hover:underline">
                  {item.label}
                </Link>
                <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
              </>
            ) : (
              <span aria-current="page" className="font-medium text-forest-800">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
