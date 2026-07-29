// Central organisational configuration.
// Update this file to change navigation, contact placeholders, social links
// and footer content without touching any component code.
//
// Fields marked PLACEHOLDER must be replaced with Kupanda-approved
// information before public launch. See CONTENT_CHECKLIST.md.

export const siteConfig = {
  name: "Kupanda Collective",
  shortName: "Kupanda",
  tagline: "Ascending to Self-Reliance",
  domain: "https://www.kupandacollective.org", // PLACEHOLDER, replace with final domain
  description:
    "Kupanda Collective strengthens community-led systems connecting childcare, caregiver livelihoods, health and social cohesion for refugee and host communities in Uganda.",
  locale: "en_UG",
} as const;

export const contactInfo = {
  email: {
    general: "info@kupandacollective.org", // PLACEHOLDER
    partnerships: "partnerships@kupandacollective.org", // PLACEHOLDER
    media: "media@kupandacollective.org", // PLACEHOLDER
    safeguarding: "safeguarding@kupandacollective.org", // PLACEHOLDER
  },
  phone: "+256 (0) 000 000 000", // PLACEHOLDER
  location: {
    city: "Kampala, Uganda",
    note: "Working with communities across Uganda's refugee-hosting settlements and host neighbourhoods.",
  },
} as const;

export const socialLinks = [
  { label: "LinkedIn", href: "#", placeholder: true },
  { label: "X (Twitter)", href: "#", placeholder: true },
  { label: "Facebook", href: "#", placeholder: true },
  { label: "Instagram", href: "#", placeholder: true },
] as const;

export type NavLink = {
  label: string;
  href: string;
  /** Optional submenu, e.g. the programme pages under "Our Work". */
  children?: NavLink[];
};

export const primaryNav: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "Our Work",
    href: "/our-work",
    children: [
      { label: "Overview", href: "/our-work" },
      { label: "Early Childhood Development", href: "/our-work/early-childhood-development" },
      { label: "Health and Nurturing Care", href: "/our-work/health-and-nurturing-care" },
      { label: "Caregiver Livelihoods", href: "/our-work/caregiver-livelihoods" },
      { label: "Participation and Social Cohesion", href: "/our-work/participation-and-social-cohesion" },
      { label: "Evidence and Policy Influence", href: "/our-work/evidence-learning-and-policy" },
    ],
  },
  { label: "Stories & Learning", href: "/stories-and-learning" },
  { label: "Contact", href: "/contact" },
];

export const partnerCta: NavLink = {
  label: "Partner With Us",
  href: "/partner-with-us",
};

export const footerLinks: { title: string; links: NavLink[] }[] = [
  {
    title: "Explore",
    links: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about" },
      { label: "Our Work", href: "/our-work" },
      { label: "Stories & Learning", href: "/stories-and-learning" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Organisation",
    links: [
      { label: "Partner With Us", href: "/partner-with-us" },
      { label: "Privacy Notice", href: "/privacy" },
      { label: "Safeguarding", href: "/safeguarding" },
      { label: "Terms of Use", href: "/terms" },
    ],
  },
];
