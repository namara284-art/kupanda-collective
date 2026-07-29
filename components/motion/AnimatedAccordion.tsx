"use client";

import { AnimatePresence, motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { transition } from "@/lib/motion";

/**
 * One accessible, smoothly-animating accordion row: a button that toggles a
 * height/opacity panel and rotates its disclosure chevron. Used in place of
 * native `<details>` wherever the row needs a genuinely smooth open/close
 * rather than the browser's abrupt one.
 */
export function AnimatedAccordionItem({
  id,
  open,
  onToggle,
  trigger,
  children,
  className,
}: {
  id: string;
  open: boolean;
  onToggle: () => void;
  trigger: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}) {
  const panelId = `${id}-panel`;
  const triggerId = `${id}-trigger`;

  return (
    <div className={className}>
      <button
        id={triggerId}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={onToggle}
        className="flex w-full cursor-pointer list-none items-center gap-3 text-left"
      >
        {trigger}
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={transition.control}
          className="ml-auto shrink-0"
          aria-hidden="true"
        >
          <ChevronDown className="h-5 w-5" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={triggerId}
            key="panel"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={transition.control}
            className="overflow-hidden"
          >
            {children}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
