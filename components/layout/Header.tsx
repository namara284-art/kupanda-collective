"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { primaryNav, partnerCta } from "@/content/site-settings";
import { cn } from "@/lib/cn";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const [lastPathname, setLastPathname] = useState(pathname);

  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setMenuOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b bg-cream-50/95 backdrop-blur transition-shadow duration-200",
        scrolled ? "border-sage-300 shadow-[0_2px_12px_rgba(22,57,31,0.08)]" : "border-transparent"
      )}
    >
      <div className="content-container flex h-16 items-center justify-between sm:h-20">
        <Logo />

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {primaryNav.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "rounded-full px-3.5 py-2 text-[0.94rem] font-medium transition-colors",
                  active ? "text-forest-800" : "text-charcoal-700 hover:text-forest-800"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Link
            href={partnerCta.href}
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-forest-700 px-5 py-2.5 text-[0.94rem] font-semibold text-cream-50 transition-colors hover:bg-forest-800"
          >
            {partnerCta.label}
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full text-forest-800 lg:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
        </button>
      </div>

      {menuOpen ? (
        <div
          id="mobile-menu"
          className="fixed inset-x-0 top-16 z-40 h-[calc(100dvh-4rem)] overflow-y-auto bg-cream-50 lg:hidden sm:top-20 sm:h-[calc(100dvh-5rem)]"
        >
          <nav aria-label="Mobile" className="content-container flex flex-col gap-1 py-6">
            {primaryNav.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={pathname === link.href ? "page" : undefined}
                className="rounded-lg px-3 py-3.5 text-lg font-medium text-charcoal-900 hover:bg-sage-100"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={partnerCta.href}
              className="mt-4 inline-flex min-h-12 items-center justify-center rounded-full bg-forest-700 px-5 py-3 text-base font-semibold text-cream-50"
            >
              {partnerCta.label}
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
