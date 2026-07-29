"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { primaryNav, partnerCta, siteConfig } from "@/content/site-settings";
import { cn } from "@/lib/cn";
import { transition, stagger, distance } from "@/lib/motion";

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(false);
  const pathname = usePathname();
  const [lastPathname, setLastPathname] = useState(pathname);
  const submenuRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

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
      if (e.key === "Escape") {
        setMenuOpen(false);
        return;
      }
      if (e.key !== "Tab" || !mobileMenuRef.current) return;
      const focusable = Array.from(mobileMenuRef.current.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR));
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";

    const firstLink = mobileMenuRef.current?.querySelector<HTMLElement>(FOCUSABLE_SELECTOR);
    firstLink?.focus();
    const menuButton = menuButtonRef.current;

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      menuButton?.focus();
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
        "sticky top-0 z-50 transition-[background-color,box-shadow,border-color] duration-300",
        transparent ? "bg-transparent" : "border-b border-sage-300 bg-cream-50/97 backdrop-blur shadow-[0_2px_16px_rgba(22,57,31,0.08)]"
      )}
    >
      {transparent ? (
        <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-forest-950/75 via-forest-950/35 to-transparent" aria-hidden="true" />
      ) : null}

      <div
        className={cn(
          "content-container-wide relative flex items-center justify-between transition-[height] duration-300",
          scrolled ? "h-16 sm:h-20" : "h-20 sm:h-24"
        )}
      >
        <Link href="/" className="flex items-center gap-2" aria-label={`${siteConfig.name} home`}>
          <Image
            src={transparent ? "/images/logo/kupanda-logo-white.png" : "/images/logo/kupanda-logo-full-color.png"}
            alt={`${siteConfig.name} logo`}
            width={598}
            height={249}
            priority
            className="h-9 w-auto transition-[height] duration-300 sm:h-11"
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
                      "group relative flex items-center gap-1 rounded-full px-4 py-2 text-[0.95rem] font-semibold transition-colors",
                      active ? (transparent ? "text-leaf-300" : "text-forest-800") : linkColor
                    )}
                  >
                    {link.label}
                    <ChevronDown className={cn("h-4 w-4 transition-transform duration-200", submenuOpen && "rotate-180")} aria-hidden="true" />
                    <NavUnderline active={Boolean(active)} transparent={transparent} />
                  </button>
                  <AnimatePresence>
                    {submenuOpen ? (
                      <motion.div
                        role="menu"
                        initial={{ opacity: 0, y: -8, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -8, scale: 0.98 }}
                        transition={transition.control}
                        className="radius-organic-1 absolute left-1/2 top-full mt-3 w-80 -translate-x-1/2 border border-sage-200 bg-cream-50 p-3 shadow-xl"
                      >
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            role="menuitem"
                            href={child.href}
                            className={cn(
                              "block rounded-xl px-4 py-2.5 text-[0.92rem] font-medium text-charcoal-800 transition-colors hover:bg-sage-100 hover:text-forest-800",
                              pathname === child.href && "bg-sage-100 text-forest-800"
                            )}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              );
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "group relative rounded-full px-4 py-2 text-[0.95rem] font-semibold transition-colors",
                  active ? (transparent ? "text-leaf-300" : "text-forest-800") : linkColor
                )}
              >
                {link.label}
                <NavUnderline active={Boolean(active)} transparent={transparent} />
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Link
            href={partnerCta.href}
            className={cn(
              "group inline-flex min-h-11 items-center justify-center gap-1.5 rounded-full px-6 py-2.5 text-[0.95rem] font-semibold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md",
              transparent
                ? "bg-leaf-500 text-forest-950 hover:bg-leaf-400"
                : "bg-forest-700 text-cream-50 hover:bg-forest-800"
            )}
          >
            {partnerCta.label}
          </Link>
        </div>

        <button
          ref={menuButtonRef}
          type="button"
          className={cn("inline-flex h-11 w-11 items-center justify-center rounded-full lg:hidden", textColor)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <AnimatePresence mode="wait" initial={false}>
            {menuOpen ? (
              <motion.span
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={transition.micro}
                className="flex"
              >
                <X className="h-6 w-6" aria-hidden="true" />
              </motion.span>
            ) : (
              <motion.span
                key="open"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={transition.micro}
                className="flex"
              >
                <Menu className="h-6 w-6" aria-hidden="true" />
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>

      <AnimatePresence>
        {menuOpen ? (
          <>
            <motion.div
              key="mobile-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={transition.control}
              className="fixed inset-0 top-20 z-30 bg-forest-950/30 lg:hidden sm:top-24"
              aria-hidden="true"
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              id="mobile-menu"
              ref={mobileMenuRef}
              key="mobile-panel"
              initial={{ opacity: 0, y: -distance.medium }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -distance.medium }}
              transition={transition.control}
              className="fixed inset-x-0 top-20 z-40 h-[calc(100dvh-5rem)] overflow-y-auto bg-cream-50 lg:hidden sm:top-24 sm:h-[calc(100dvh-6rem)]"
            >
              <motion.nav
                aria-label="Mobile"
                className="content-container flex flex-col gap-1 py-6"
                initial="hidden"
                animate="visible"
                variants={{ hidden: {}, visible: { transition: { staggerChildren: stagger.tight, delayChildren: 0.05 } } }}
              >
                {primaryNav.map((link) =>
                  link.children ? (
                    <motion.div
                      key={link.href}
                      variants={{ hidden: { opacity: 0, y: distance.small }, visible: { opacity: 1, y: 0 } }}
                      transition={transition.reveal}
                    >
                      <button
                        type="button"
                        aria-expanded={mobileSubmenuOpen}
                        onClick={() => setMobileSubmenuOpen((v) => !v)}
                        className="flex w-full items-center justify-between rounded-lg px-3 py-3.5 text-lg font-semibold text-charcoal-900 hover:bg-sage-100"
                      >
                        {link.label}
                        <motion.span animate={{ rotate: mobileSubmenuOpen ? 180 : 0 }} transition={transition.control}>
                          <ChevronDown className="h-5 w-5" aria-hidden="true" />
                        </motion.span>
                      </button>
                      <AnimatePresence initial={false}>
                        {mobileSubmenuOpen ? (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={transition.control}
                            className="ml-3 overflow-hidden border-l-2 border-sage-300 pl-3"
                          >
                            {link.children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                className="block rounded-lg px-3 py-2.5 text-base font-medium text-charcoal-700 hover:bg-sage-100"
                              >
                                {child.label}
                              </Link>
                            ))}
                          </motion.div>
                        ) : null}
                      </AnimatePresence>
                    </motion.div>
                  ) : (
                    <motion.div
                      key={link.href}
                      variants={{ hidden: { opacity: 0, y: distance.small }, visible: { opacity: 1, y: 0 } }}
                      transition={transition.reveal}
                    >
                      <Link
                        href={link.href}
                        aria-current={pathname === link.href ? "page" : undefined}
                        className="block rounded-lg px-3 py-3.5 text-lg font-semibold text-charcoal-900 hover:bg-sage-100"
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  )
                )}
                <motion.div variants={{ hidden: { opacity: 0, y: distance.small }, visible: { opacity: 1, y: 0 } }} transition={transition.reveal}>
                  <Link
                    href={partnerCta.href}
                    className="mt-4 inline-flex min-h-12 items-center justify-center rounded-full bg-forest-700 px-5 py-3 text-base font-semibold text-cream-50 transition-transform duration-200 hover:-translate-y-0.5"
                  >
                    {partnerCta.label}
                  </Link>
                </motion.div>
              </motion.nav>
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

/** A soft dot that grows into an underline beneath the active/hovered nav link. */
function NavUnderline({ active, transparent }: { active: boolean; transparent: boolean }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-x-4 bottom-1 h-[2px] origin-center scale-x-0 rounded-full transition-transform duration-200 ease-out group-hover:scale-x-100",
        active && "scale-x-100",
        transparent ? "bg-leaf-300" : "bg-forest-700"
      )}
    />
  );
}
