// Partnership pathways shown on the Partner With Us page and referenced
// from the homepage partnership invitation.

export type PartnershipPathway = {
  title: string;
  description: string;
  audiences: string[];
};

export const partnershipPathways: PartnershipPathway[] = [
  {
    title: "Programme funding",
    description: "Support Kupanda's core programme areas through multi-year or catalytic funding.",
    audiences: ["Foundations", "Development partners", "Donors"],
  },
  {
    title: "Co-design and implementation",
    description:
      "Work alongside Kupanda and community platforms, Neighborhood Assemblies and People's Parliaments, to design and deliver programmes together.",
    audiences: ["Government", "Refugee-led organisations", "Civil society"],
  },
  {
    title: "Research and costing",
    description: "Lead or contribute to costing and outcomes research on community-led childcare and livelihoods programming.",
    audiences: ["Research institutions", "Policy institutions"],
  },
  {
    title: "Caregiver credentialing",
    description:
      "Support partnerships with technical and vocational bodies to deliver nationally recognised caregiver credentials.",
    audiences: ["Technical/vocational bodies", "Government"],
  },
  {
    title: "Childcare enterprise financing",
    description: "Contribute capital, technical design or financial expertise to women-led childcare enterprises.",
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
    description: "Help document and share community evidence, stories and implementation lessons with wider audiences.",
    audiences: ["Journalists", "Advocates", "Research institutions"],
  },
  {
    title: "In-kind technical support",
    description:
      "Offer specialist skills, from enterprise finance to child protection systems, to strengthen programme design and delivery.",
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

// Shorter list for the homepage partnership invitation section.
export const homepagePartnershipAreas = [
  "Childcare systems",
  "Caregiver credentials",
  "Women-led enterprises",
  "Health integration",
  "Research and costing",
  "Community financing",
  "Policy implementation",
] as const;

export const partnerPageIntro = {
  heading: "Let's build something communities can sustain",
  body: "Kupanda Collective works with foundations, government, researchers, technical partners and refugee-led organisations. Whatever your organisation brings, there is likely a way to work together, and we welcome a conversation even if it does not fit neatly into the pathways below.",
};

export const whyPartner = {
  heading: "Why partner with Kupanda",
  reasons: [
    "A trust-based presence with refugee and host communities, built through structured platforms like Neighborhood Assemblies rather than one-off consultation.",
    "A model that treats childcare, health, livelihoods and participation as connected, not separate, funding lines.",
    "A women-led Ugandan organisation working directly alongside government on registration, licensing and systems integration.",
  ],
};

export const whatKupandaBrings = {
  heading: "What Kupanda brings",
  body: "Community legitimacy and relationships built over time, a working model for connecting childcare to caregiver livelihoods, and a track record of designing programmes with the communities they serve rather than for them. Partners bring funding, technical expertise, research capacity or government relationships that extend what any one organisation could do alone.",
};
