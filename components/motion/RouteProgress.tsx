"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

/**
 * A slim leaf-green line at the top of the viewport that creeps forward the
 * moment an internal link is clicked, then completes and fades once the
 * route has actually changed. Purely a perceived-performance affordance; it
 * never blocks or delays navigation itself.
 */
export function RouteProgress() {
  const pathname = usePathname();
  const [active, setActive] = useState(false);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef<number | null>(null);
  const isFirstRender = useRef(true);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    function onClick(e: MouseEvent) {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const anchor = (e.target as HTMLElement)?.closest("a");
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href || href.startsWith("#") || anchor.target === "_blank") return;

      let url: URL;
      try {
        url = new URL(href, window.location.href);
      } catch {
        return;
      }
      if (url.origin !== window.location.origin) return;
      if (url.pathname === window.location.pathname) return;

      setActive(true);
      setProgress(14);
      if (intervalRef.current) window.clearInterval(intervalRef.current);
      intervalRef.current = window.setInterval(() => {
        setProgress((p) => (p >= 86 ? p : p + (86 - p) * 0.15));
      }, 110);
    }

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [prefersReducedMotion]);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (intervalRef.current) window.clearInterval(intervalRef.current);
    setProgress(100);
    const timeout = window.setTimeout(() => setActive(false), 220);
    return () => window.clearTimeout(timeout);
  }, [pathname]);

  if (prefersReducedMotion) return null;

  return (
    <AnimatePresence>
      {active ? (
        <motion.div
          key="route-progress"
          role="presentation"
          aria-hidden="true"
          className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-leaf-600 via-leaf-500 to-leaf-400"
          initial={{ opacity: 1, width: 0 }}
          animate={{ opacity: 1, width: `${progress}%` }}
          exit={{ opacity: 0 }}
          transition={{ width: { duration: 0.2, ease: [0.22, 1, 0.36, 1] }, opacity: { duration: 0.25 } }}
        />
      ) : null}
    </AnimatePresence>
  );
}
