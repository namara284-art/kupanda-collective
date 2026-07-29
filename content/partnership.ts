// Partnership pathways shown on the Partner With Us page and referenced
// from the homepage partnership section.

export type PartnershipPathway = {
  title: string;
  description: string;
  audiences: string[];
};

export const partnershipPathways: PartnershipPathway[] = [
  {
    title: "Programme funding",
    description:
      "Support the Childcare Workforce Initiative or Kupanda's core programme areas through multi-year or catalytic funding.",
    audiences: ["Foundations", "Development partners", "Donors"],
  },
  {
    title: "Co-design and implementation",
    description:
      "Work alongside Kupanda and community platforms — Neighborhood Assemblies and People's Parliaments — to design and deliver programmes together.",
    audiences: ["Government", "Refugee-led organisations", "Civil society"],
  },
  {
    title: "Research and costing",
    description:
      "Lead or contribute to the costing and outcomes study planned for the Childcare Workforce Initiative, or collaborate on wider research questions.",
    audiences: ["Research institutions", "Policy institutions"],
  },
  {
    title: "Caregiver credentialing",
    description:
      "Support the partnership with the Directorate of Industrial Training to deliver a nationally recognised caregiver credential.",
    audiences: ["Technical/vocational bodies", "Government"],
  },
  {
    title: "Childcare enterprise financing",
    description:
      "Contribute capital, technical design or financial expertise to the proposed cooperative-owned Childcare Enterprise Fund.",
    audiences: ["Foundations", "Impact investors", "Development partners"],
  },
  {
    title: "Health and nutrition integration",
    description:
      "Help extend growth monitoring, nutrition, disability screening and referral pathways through community childcare platforms.",
    audiences: ["Health and nutrition organisations", "Government"],
  },
  {
    title: "Policy implementation",
    description:
      "Partner on translating Uganda's ECCE Policy into practice for refugee-hosting settlements, including registration, licensing and EMIS integration.",
    audiences: ["Government ministries", "Local Government", "Policy institutions"],
  },
  {
    title: "Communications and learning",
    description:
      "Help document and share community evidence, stories and implementation lessons with wider audiences.",
    audiences: ["Journalists", "Advocates", "Research institutions"],
  },
  {
    title: "In-kind technical support",
    description:
      "Offer specialist skills — from enterprise finance to child protection systems — to strengthen programme design and delivery.",
    audiences: ["Civil society", "Technical partners", "ECD organisations"],
  },
];

export const partnershipInterestOptions = [
  "Programme funding",
  "Co-design and implementation",
  "Research and costing",
  "Caregiver credentialing",
  "Childcare enterprise financing",
  "Health and nutrition integration",
  "Policy implementation",
  "Communications and learning",
  "In-kind technical support",
  "Other",
] as const;
