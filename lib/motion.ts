// Central motion configuration for the Kupanda Collective motion system.
// Every animation wrapper in components/motion imports its timing, easing
// and distance values from here so the site has one consistent, tunable
// motion language rather than one-off numbers scattered through components.

/** Kupanda's signature ease: a soft rise that settles without overshoot. */
export const easeGrowth: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const duration = {
  micro: 0.2, // hover/focus micro-interactions
  control: 0.28, // buttons, cards
  reveal: 0.6, // scroll reveals
  hero: 0.85, // hero entrance sequence
  page: 0.4, // route/page transitions
} as const;

export const stagger = {
  tight: 0.06,
  normal: 0.09,
  loose: 0.12,
} as const;

/** Modest travel distances (px) used by rise/slide reveal variants. */
export const distance = {
  small: 12,
  medium: 22,
  large: 36,
} as const;

export const spring = {
  gentle: { type: "spring" as const, stiffness: 260, damping: 24, mass: 0.8 },
  interactive: { type: "spring" as const, stiffness: 320, damping: 20, mass: 0.6 },
};

/** Fraction of a section that must be visible before a scroll reveal fires. */
export const viewport = {
  amount: 0.2,
  once: true,
  margin: "0px 0px -80px 0px",
} as const;

export const transition = {
  reveal: { duration: duration.reveal, ease: easeGrowth },
  control: { duration: duration.control, ease: easeGrowth },
  micro: { duration: duration.micro, ease: easeGrowth },
  hero: { duration: duration.hero, ease: easeGrowth },
  page: { duration: duration.page, ease: easeGrowth },
} as const;

// Shared whileInView variants, consumed by ScrollReveal.
export const revealVariants = {
  "fade-up": {
    hidden: { opacity: 0, y: distance.medium },
    visible: { opacity: 1, y: 0 },
  },
  "fade-left": {
    hidden: { opacity: 0, x: -distance.large },
    visible: { opacity: 1, x: 0 },
  },
  "fade-right": {
    hidden: { opacity: 0, x: distance.large },
    visible: { opacity: 1, x: 0 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.96 },
    visible: { opacity: 1, scale: 1 },
  },
  clip: {
    hidden: { clipPath: "inset(0 0 100% 0)", opacity: 1 },
    visible: { clipPath: "inset(0 0 0% 0)", opacity: 1 },
  },
} as const;

export type RevealVariant = keyof typeof revealVariants;
