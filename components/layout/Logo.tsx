import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/content/site-settings";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={className ?? "flex items-center gap-2"}
      aria-label={`${siteConfig.name} home`}
    >
      <Image
        src="/images/logo/kupanda-logo-full-color.png"
        alt={`${siteConfig.name} logo`}
        width={598}
        height={249}
        priority
        className="h-9 w-auto sm:h-10"
      />
    </Link>
  );
}
