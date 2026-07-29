// Stories & Learning content hub.
//
// EDITORIAL NOTE FOR CONTENT MANAGERS:
// Every entry below is a placeholder. Do not replace `isPlaceholder: true`
// entries with real content until:
//   1. Informed consent has been obtained for any story, quote or photograph
//      of a named or identifiable individual (see /safeguarding).
//   2. Children's identities are protected — no full names or identifying
//      details of children without documented guardian consent.
//   3. Photographs have verified rights/credit information.
//   4. Content has been reviewed by Kupanda Collective before publication.
//
// To add a real story, duplicate an entry, set isPlaceholder: false, and
// fill in author, publishedAt, image and body content. Longer-form pieces
// can migrate to MDX files under /content/stories/ as the archive grows.

export type StoryCategory =
  | "Community Stories"
  | "Programme Updates"
  | "Research and Learning"
  | "Policy and Advocacy"
  | "Resources";

export const storyCategories: StoryCategory[] = [
  "Community Stories",
  "Programme Updates",
  "Research and Learning",
  "Policy and Advocacy",
  "Resources",
];

export type StoryCard = {
  slug: string;
  title: string;
  category: StoryCategory;
  summary: string;
  isPlaceholder: true;
  statusLabel: "Editorial placeholder" | "Forthcoming";
};

export const storyPlaceholders: StoryCard[] = [
  {
    slug: "what-community-led-childcare-can-unlock",
    title: "What community-led childcare can unlock",
    category: "Community Stories",
    summary:
      "A forthcoming piece on how strengthening existing caregiver networks changes outcomes for children and families.",
    isPlaceholder: true,
    statusLabel: "Forthcoming",
  },
  {
    slug: "listening-through-neighborhood-assemblies",
    title: "Listening through Neighborhood Assemblies",
    category: "Community Stories",
    summary:
      "An editorial placeholder for reflections on what Neighborhood Assemblies surface when communities set their own priorities.",
    isPlaceholder: true,
    statusLabel: "Editorial placeholder",
  },
  {
    slug: "why-caregiver-credentials-matter-in-displacement",
    title: "Why caregiver credentials matter in displacement settings",
    category: "Policy and Advocacy",
    summary:
      "A forthcoming explainer on the link between recognised qualifications, women's income and national ECCE policy.",
    isPlaceholder: true,
    statusLabel: "Forthcoming",
  },
  {
    slug: "costing-childcare-in-protracted-displacement",
    title: "Costing childcare in protracted displacement",
    category: "Research and Learning",
    summary:
      "Placeholder for updates from the costing and outcomes study planned under the Childcare Workforce Initiative.",
    isPlaceholder: true,
    statusLabel: "Forthcoming",
  },
  {
    slug: "building-a-childcare-enterprise-fund",
    title: "Building a cooperative-owned Childcare Enterprise Fund",
    category: "Programme Updates",
    summary: "A forthcoming update on the design and early operation of the Childcare Enterprise Fund.",
    isPlaceholder: true,
    statusLabel: "Forthcoming",
  },
  {
    slug: "organisational-profile",
    title: "Kupanda Collective organisational profile",
    category: "Resources",
    summary: "A downloadable organisational profile will be added here once finalised and approved for release.",
    isPlaceholder: true,
    statusLabel: "Editorial placeholder",
  },
];
