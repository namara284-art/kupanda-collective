"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { primaryNav, partnerCta, siteConfig } from "@/content/site-settings";
import { cn } from "@/lib/cn";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(false);
  const pathname = usePathname();
  const [lastPathname, setLastPathname] = useState(pathname);
  const submenuRef = useRef<HTMLDivElement>(null);

  const isHome = pathname === "/";
  const transparent = isHome && !scrolled;

  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setMenuOpen(false);
    setSubmenuOpen(false);
    setMobileSubmenuOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
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

  useEffect(() => {
    if (!submenuOpen) return;
    const onClickOutside = (e: MouseEvent) => {
      if (submenuRef.current && !submenuRef.current.contains(e.target as Node)) {
        setSubmenuOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSubmenuOpen(false);
    };
    document.addEventListener("mousedown", onClickOutside);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
      document.removeEventListener("keydown", onKey);
    };
  }, [submenuOpen]);

  const textColor = transparent ? "text-cream-50" : "text-charcoal-900";
  const linkColor = transparent
    ? "text-cream-50 hover:text-leaf-300"
    : "text-charcoal-700 hover:text-forest-800";

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-colors duration-300",
        transparent ? "bg-transparent" : "border-b border-sage-300 bg-cream-50/97 backdrop-blur shadow-[0_2px_16px_rgba(22,57,31,0.08)]"
      )}
    >
      {transparent ? (
        <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-forest-950/75 via-forest-950/35 to-transparent" aria-hidden="true" />
      ) : null}

      <div className="content-container-wide relative flex h-20 items-center justify-between sm:h-24">
        <Link href="/" className="flex items-center gap-2" aria-label={`${siteConfig.name} home`}>
          <Image
            src={transparent ? "/images/logo/kupanda-logo-white.png" : "/images/logo/kupanda-logo-full-color.png"}
            alt={`${siteConfig.name} logo`}
            width={598}
            height={249}
            priority
            className="h-9 w-auto sm:h-11"
          />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {primaryNav.map((link) => {
            const active = pathname === link.href || (link.children && pathname.startsWith(link.href + "/"));

            if (link.children) {
              return (
                <div key={link.href} className="relative" ref={submenuRef}>
                  <button
                    type="button"
                    aria-expanded={submenuOpen}
                    aria-haspopup="true"
                    onClick={() => setSubmenuOpen((v) => !v)}
                    className={cn(
                      "flex items-center gap-1 rounded-full px-4 py-2 text-[0.95rem] font-semibold transition-colors",
                      active ? (transparent ? "text-leaf-300" : "text-forest-800") : linkColor
                    )}
                  >
                    {link.label}
                    <ChevronDown className={cn("h-4 w-4 transition-transform", submenuOpen && "rotate-180")} aria-hidden="true" />
                  </button>
                  {submenuOpen ? (
                    <div
                      role="menu"
                      className="radius-organic-1 absolute left-1/2 top-full mt-3 w-80 -translate-x-1/2 border border-sage-200 bg-cream-50 p-3 shadow-xl"
                    >
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          role="menuitem"
                          href={child.href}
                          className={cn(
                            "block rounded-xl px-4 py-2.5 text-[0.92rem] font-medium text-charcoal-800 hover:bg-sage-100 hover:text-forest-800",
                            pathname === child.href && "bg-sage-100 text-forest-800"
                          )}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>
              );
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "rounded-full px-4 py-2 text-[0.95rem] font-semibold transition-colors",
                  active ? (transparent ? "text-leaf-300" : "text-forest-800") : linkColor
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
            className={cn(
              "inline-flex min-h-11 items-center justify-center rounded-full px-6 py-2.5 text-[0.95rem] font-semibold transition-colors",
              transparent
                ? "bg-leaf-500 text-forest-950 hover:bg-leaf-400"
                : "bg-forest-700 text-cream-50 hover:bg-forest-800"
            )}
          >
            {partnerCta.label}
          </Link>
        </div>

        <button
          type="button"
          className={cn("inline-flex h-11 w-11 items-center justify-center rounded-full lg:hidden", textColor)}
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
          className="fixed inset-x-0 top-20 z-40 h-[calc(100dvh-5rem)] overflow-y-auto bg-cream-50 lg:hidden sm:top-24 sm:h-[calc(100dvh-6rem)]"
        >
          <nav aria-label="Mobile" className="content-container flex flex-col gap-1 py-6">
            {primaryNav.map((link) =>
              link.children ? (
                <div key={link.href}>
                  <button
                    type="button"
                    aria-expanded={mobileSubmenuOpen}
                    onClick={() => setMobileSubmenuOpen((v) => !v)}
                    className="flex w-full items-center justify-between rounded-lg px-3 py-3.5 text-lg font-semibold text-charcoal-900 hover:bg-sage-100"
                  >
                    {link.label}
                    <ChevronDown className={cn("h-5 w-5 transition-transform", mobileSubmenuOpen && "rotate-180")} aria-hidden="true" />
                  </button>
                  {mobileSubmenuOpen ? (
                    <div className="ml-3 flex flex-col gap-1 border-l-2 border-sage-300 pl-3">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="rounded-lg px-3 py-2.5 text-base font-medium text-charcoal-700 hover:bg-sage-100"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={pathname === link.href ? "page" : undefined}
                  className="rounded-lg px-3 py-3.5 text-lg font-semibold text-charcoal-900 hover:bg-sage-100"
                >
                  {link.label}
                </Link>
              )
            )}
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
