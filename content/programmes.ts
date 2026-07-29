// The five programme pillars. Used on the homepage (short form) and the
// Our Work page (full form). Content is grounded in "About Kupanda
// Collective" and the Childcare Workforce Concept Note.

export type Programme = {
  slug: string;
  shortTitle: string;
  title: string;
  summary: string;
  challenge: string;
  approach: string;
  interventions: string[];
  changeSought: string;
  relatedInitiative?: { label: string; href: string };
};

export const programmes: Programme[] = [
  {
    slug: "early-childhood-development",
    shortTitle: "Early Childhood Development",
    title: "Early Childhood Development and Childcare",
    summary:
      "Strengthening childcare centres, schools, home-based childcare and community programmes to provide safe, responsive, play-based early learning.",
    challenge:
      "Childcare for children aged 0 to 5 is under-prioritised in humanitarian response. Existing childcare spaces in refugee-hosting communities are few, unevenly distributed and largely informal, leaving many young children without safe, stimulating environments during their most formative years.",
    approach:
      "Kupanda strengthens the childcare capacity that already exists in communities — childcare centres, schools, home-based providers and community programmes — rather than building parallel services. Caregivers and teachers are trained and coached, not simply instructed once and left.",
    interventions: [
      "Training caregivers and teachers in nurturing care, responsive caregiving and play-based early learning",
      "Building capacity in child protection, safeguarding and disability inclusion",
      "Supporting access to play and learning materials",
      "Establishing and strengthening safe community play spaces",
      "Coaching and supportive supervision for home-based and centre-based providers",
    ],
    changeSought:
      "More children aged 0 to 5 — including children with special needs — accessing safe, inclusive, play-based early learning close to home, delivered by caregivers with recognised skills.",
    relatedInitiative: {
      label: "See this pillar in action: Childcare Workforce Initiative",
      href: "/childcare-workforce-initiative",
    },
  },
  {
    slug: "health-and-nurturing-care",
    shortTitle: "Health & Nurturing Care",
    title: "Health and Integrated Nurturing Care",
    summary:
      "Using trusted community structures as entry points for growth monitoring, nutrition assessment, disability screening and referral to health and protection services.",
    challenge:
      "Refugee and host-community families often live far from reliable health services, and community-based entry points for early detection — growth faltering, disability, maternal distress — are inconsistent. Problems that could be caught early are often caught late, or not at all.",
    approach:
      "Rather than running parallel clinics, Kupanda embeds health and nutrition support inside the community structures families already trust and use daily — childcare centres, schools, churches and community halls — and builds referral pathways from those points into formal services.",
    interventions: [
      "Growth monitoring and nutrition assessment within community and childcare settings",
      "Disability screening and referral",
      "Immunisation referral and tracking",
      "Mental health and maternal support",
      "Referral pathways to child protection, health and social services",
    ],
    changeSought:
      "Caregivers and children reached earlier by health, nutrition and protection support, through entry points they already trust, with fewer children falling through gaps between sectors.",
  },
  {
    slug: "caregiver-livelihoods",
    shortTitle: "Caregiver Livelihoods",
    title: "Caregiver Livelihoods and Economic Empowerment",
    summary:
      "Strengthening caregiver cooperatives, savings groups and livelihood associations, and connecting vocational training and market linkages to childcare and family wellbeing.",
    challenge:
      "Caregivers — most often women — carry the weight of balancing income generation with unpaid care work. Without reliable childcare and a route to recognised income, this burden limits their economic participation and deepens household vulnerability.",
    approach:
      "Kupanda treats caregiving and livelihoods as connected, not competing, priorities. It strengthens the cooperatives and savings structures caregivers already form, and links vocational training, entrepreneurship and financial literacy directly to childcare and family wellbeing.",
    interventions: [
      "Strengthening caregiver cooperatives, savings groups and livelihood associations",
      "Vocational training and entrepreneurship support",
      "Financial literacy and market linkages",
      "Community financing approaches tied to childcare and health",
      "Support for caregivers to convert skills and experience into recognised income",
    ],
    changeSought:
      "Caregivers — particularly refugee women — earning dignified, recognised income, with economic participation no longer constrained by the absence of safe childcare.",
    relatedInitiative: {
      label: "See this pillar in action: Childcare Workforce Initiative",
      href: "/childcare-workforce-initiative",
    },
  },
  {
    slug: "participation-and-social-cohesion",
    shortTitle: "Participation & Cohesion",
    title: "Participation and Social Cohesion",
    summary:
      "Creating platforms — including Neighborhood Assemblies and People's Parliaments — where refugees and host communities jointly set priorities, monitor services and engage duty bearers.",
    challenge:
      "Refugees and host communities share schools, markets and health facilities, but decisions about services are often made without either group at the table. Competition for scarce resources can strain relations between communities that otherwise share daily life.",
    approach:
      "Kupanda convenes structured, recurring spaces for dialogue and joint decision-making — Neighborhood Assemblies and community-led People's Parliaments — where refugees and host-community members, especially women, caregivers and young people, shape programmes together rather than receiving them.",
    interventions: [
      "Facilitating Neighborhood Assemblies as a standing platform for dialogue and priority-setting",
      "Supporting community-led People's Parliaments for joint decision-making and accountability",
      "Forming refugee-host governance committees to co-manage community initiatives",
      "Strengthening leadership of women, young people and vulnerable groups",
      "Creating grievance and feedback pathways to duty bearers",
    ],
    changeSought:
      "Refugee and host communities jointly setting priorities, monitoring services and holding duty bearers accountable, with women, caregivers and young people visibly represented in decisions that affect them.",
  },
  {
    slug: "evidence-learning-and-policy",
    shortTitle: "Evidence & Policy",
    title: "Evidence, Learning and Policy Influence",
    summary:
      "Documenting community experience and programme results, and working with local and national systems to translate evidence into stronger policy and financing decisions.",
    challenge:
      "Credible cost and outcome data for community-led programming in displacement settings remain scarce, which makes it difficult for government and funders to appraise, budget and scale what works.",
    approach:
      "Kupanda documents implementation as it happens — results, lessons and stories of change — and works directly with local and national systems to turn that evidence into policy, financing and service-delivery decisions, rather than leaving it in reports that go unread.",
    interventions: [
      "Documenting programme results, implementation lessons and stories of change",
      "Costed research and outcomes studies conducted with independent research partners",
      "Sharing evidence with local and national government to inform policy and financing",
      "Producing practical, replicable delivery guidance for other implementers",
      "Amplifying community and caregiver voice in policy conversations",
    ],
    changeSought:
      "Stronger policies, financing decisions and service-delivery models shaped by rigorous community evidence, and a growing body of practical guidance other organisations can use.",
    relatedInitiative: {
      label: "See this pillar in action: Childcare Workforce Initiative",
      href: "/childcare-workforce-initiative",
    },
  },
];
