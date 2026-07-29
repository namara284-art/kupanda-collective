"use client";

import { AnimatePresence, motion } from "motion/react";
import { usePathname } from "next/navigation";
import { transition, distance } from "@/lib/motion";

/**
 * Fades the outgoing page out while the incoming page rises gently into
 * place. Server-rendered page content is passed straight through as
 * `children`, so routes stay server components; this wrapper only adds the
 * transition. `initial={false}` skips animating the very first paint so
 * content is never hidden behind a fade on first load. Next.js's App Router
 * already resets and announces focus on navigation, so this component stays
 * purely visual rather than fighting that built-in behaviour.
 */
export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <AnimatePresence initial={false}>
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: distance.small }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -distance.small / 2 }}
        transition={transition.page}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
