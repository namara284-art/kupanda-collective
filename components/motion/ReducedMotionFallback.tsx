"use client";

import { useReducedMotion } from "motion/react";

/**
 * Renders `children` only when the visitor has not requested reduced
 * motion; otherwise renders `fallback` (or nothing). For purely decorative,
 * continuous effects (the hero's floating leaf, background flourishes) that
 * have no accessible fallback need beyond simply not running.
 */
export function ReducedMotionFallback({
  children,
  fallback = null,
}: {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}) {
  const prefersReducedMotion = useReducedMotion();
  return prefersReducedMotion ? <>{fallback}</> : <>{children}</>;
}
