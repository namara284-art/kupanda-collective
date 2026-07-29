// Content for the flagship Childcare Workforce Initiative page.
// Figures are sourced directly from "Strengthening the Childcare Workforce
// in Refugee Communities" (concept note). All targets are PROPOSED and must
// remain labelled as such — see the disclaimer field below, used verbatim
// on the page.

export const initiativeMeta = {
  title: "Strengthening the Childcare Workforce in Refugee Communities",
  subtitle:
    "Building a Professionalized, Community-Financed Childcare Economy in Refugee-Hosting Contexts",
  location: "Nakivale Refugee Settlement, Isingiro District, Uganda",
  duration: "Proposed three-year demonstration programme",
  budget: "USD 800,000 (proposed, over three years)",
  disclaimer:
    "This page describes a proposed three-year initiative. Targets and programme components may be refined with communities, government and funding partners.",
};

export const theGap = {
  heading: "The childcare gap",
  paragraphs: [
    "Uganda hosts one of the largest refugee populations in Africa, and children aged 0 to 5 remain the least served group in its settlements. In Nakivale Refugee Settlement, childcare is provided almost entirely through informal, unpaid arrangements carried by refugee women, with limited training, recognition or income.",
    "Humanitarian responses have historically prioritised food assistance, health, water and primary education, leaving childcare for young children under-prioritised. Existing childcare spaces are few, unevenly distributed and largely informal. This gap undermines young children's development and places a disproportionate burden on women, whose participation in livelihoods, training and community life depends on whether safe, reliable childcare exists nearby.",
    "Settlements such as Nakivale also hold significant untapped caregiving capacity. Refugee women are already caring for children through trusted community arrangements. Strengthened, credentialed and financed, this capacity can become a professional workforce and a source of dignified income.",
  ],
};

export const policyWindow = {
  heading: "The opportunity created by Uganda's ECCE Policy",
  paragraphs: [
    "Uganda's Early Childhood Care and Education (ECCE) Policy commits to expanding access, strengthening the ECCE workforce, supporting registration and licensing, improving coordination and generating better data.",
    "The candid question is how these reforms will reach refugee children, informal providers and the women carrying unpaid care work in settlements. This initiative is designed to answer that question in practice, and to hand government a tested, costed model for doing so.",
  ],
};

export const theModel = {
  heading: "The proposed model: a childcare economy",
  intro:
    "Strengthening the Childcare Workforce in Refugee Communities invests in the childcare workforce as the foundation for nurturing care, women's economic participation and refugee self-reliance. For childcare in displacement settings to last, it must become part of everyday community and economic life.",
  points: [
    {
      title: "Caregivers gain recognised qualifications",
      description: "Credentials that remain useful wherever life takes them, including upon return or resettlement.",
    },
    {
      title: "Services earn revenue from the communities they serve",
      description: "Fee and community revenue reduce long-term dependence on external funding.",
    },
    {
      title: "Enterprises access capital to start and grow",
      description: "A cooperative-owned fund provides start-up and growth capital to certified caregivers.",
    },
    {
      title: "Government systems recognise and register what works",
      description: "Registration, licensing and EMIS integration bring refugee-led childcare inside national systems.",
    },
    {
      title: "Evidence prices the model for scale",
      description: "Costed evidence lets government and funders appraise and budget a larger second phase.",
    },
  ],
  closing:
    "Each pillar builds one of these features, and together they form an engine that keeps running after external funding ends.",
};

export type InitiativeComponent = {
  number: number;
  title: string;
  description: string;
  details: string[];
};

export const components: InitiativeComponent[] = [
  {
    number: 1,
    title: "Credentialed childcare workforce",
    description:
      "A Childcare Caregivers Incubator trains refugee women and youth already providing childcare, ending in a nationally recognised credential.",
    details: [
      "Training in responsive caregiving, play-based early learning, child protection and safeguarding, and inclusion of children with disabilities",
      "Grounded in the Nurturing Care Framework, plus foundational enterprise skills such as record keeping and service organisation",
      "Delivery combines practical sessions, peer learning and on-site coaching",
      "Partnership with the Directorate of Industrial Training (DIT) so graduates sit formal assessment under the Workers' Practically Acquired Skills framework, earning a nationally recognised credential in early childhood caregiving",
      "The credential makes caregivers employable inside and beyond the settlement, and gives government a workforce it can count and plan for under the ECCE Policy's workforce pillar",
    ],
  },
  {
    number: 2,
    title: "Childcare enterprise financing",
    description:
      "A cooperative-owned Childcare Enterprise Fund provides start-up and growth capital to certified caregivers, alongside demand-side financing that links childcare to household and market income.",
    details: [
      "Start-up and growth capital for certified caregivers establishing centres, home-based services and mobile childcare",
      "Caregivers join savings groups, cooperatives and livelihood associations that progressively own and govern the Fund itself",
      "Market-day childcare co-financed by vendor associations at MATIF and similar market sites",
      "Fee support linked to women's enterprise groups under the World Bank-funded GROW Project",
      "Matched savings products within village savings and loan associations to help households budget for care",
      "Cost per child is projected to fall from roughly USD 120 in Year 1 to roughly USD 80 by Year 3 as enrolment and fee revenue grow — figures to be validated through the baseline cost study",
    ],
  },
  {
    number: 3,
    title: "Quality, safety and integrated nurturing care",
    description:
      "Childcare centres, home-based arrangements and community spaces operate as integrated nurturing care platforms, not standalone childminding.",
    details: [
      "Safe, stimulating environments with developmentally appropriate play and learning",
      "Embedded health and nutrition promotion",
      "Strengthened referral pathways for child protection, health and social services",
      "Quality assurance tools and supportive supervision introduced jointly with District Local Government",
      "Alignment with national ECCE standards, so quality improvement and government oversight develop as a single system",
    ],
  },
  {
    number: 4,
    title: "Community governance and accountability",
    description:
      "Neighborhood Assemblies remain the governance spine of the initiative, keeping affordability, quality and inclusion under community control.",
    details: [
      "Refugee caregivers, parents and community leaders co-design services, set priorities and monitor quality",
      "Assemblies resolve grievances and engage duty bearers directly",
      "Assemblies govern community rules for the Enterprise Fund and fee arrangements",
      "Insights from the Assemblies feed directly into district and national advocacy for childcare investment",
    ],
  },
  {
    number: 5,
    title: "Government integration, research and scaling",
    description:
      "The initiative is implemented with government as a co-owner from the outset, and produces the costed evidence needed to appraise a second phase.",
    details: [
      "Implemented with the Office of the Prime Minister, Ministry of Education and Sports, Ministry of Gender, Labour and Social Development, District Local Government and settlement leadership as co-owners",
      "Registration and licensing pathways for refugee-led services, with EMIS capture of supported centres",
      "Adaptation of ECCE quality standards to settlement realities, and settlement ECCE implementation guidelines for adoption across refugee-hosting districts",
      "A focused costing and outcomes study with an independent research partner, with baseline and endline measurement of child development outcomes, women's income and labour participation, service quality and unit costs",
      "A published reference cost per child for settlement childcare, and a practical replication kit that refugee-led organisations can run with light support",
    ],
  },
];

export type PathwayYear = {
  year: string;
  label: string;
  items: string[];
};

export const pathway: PathwayYear[] = [
  {
    year: "Year 1",
    label: "Foundation",
    items: [
      "Map existing caregivers and childcare services across Nakivale",
      "Establish the Childcare Caregivers Incubator",
      "Conclude the DIT credentialing partnership",
      "Complete the baseline and costing study",
      "Design the Childcare Enterprise Fund with cooperatives and Neighborhood Assemblies",
      "Agree registration pathways with OPM, MoES and Isingiro District Local Government",
    ],
  },
  {
    year: "Year 2",
    label: "Expansion",
    items: [
      "Train and certify initial caregiver cohorts",
      "Capitalise the Enterprise Fund and finance first childcare enterprises",
      "Pilot demand-side financing around the GROW Project and MATIF market sites",
      "Begin service registration and EMIS capture",
      "Operate quality assurance and supportive supervision with Local Government",
    ],
  },
  {
    year: "Year 3",
    label: "Consolidation and replication readiness",
    items: [
      "Complete final caregiver cohorts",
      "Assess revenue performance and financial sustainability",
      "Publish the costing and outcomes study",
      "Finalise the replication kit",
      "Orient refugee-led organisations for second-phase delivery",
      "Share settlement ECCE implementation guidance with government and partners",
    ],
  },
];

export type ResultTarget = {
  resultArea: string;
  indicator: string;
  target: string;
};

export const results: ResultTarget[] = [
  {
    resultArea: "Access to quality childcare",
    indicator: "Children aged 0 to 5 attending supported childcare services in Nakivale",
    target: "8,000",
  },
  {
    resultArea: "Professionalised workforce",
    indicator:
      "Caregivers completing the Incubator and attaining a nationally recognised DIT-assessed credential",
    target: "300 (at least 60% refugee women)",
  },
  {
    resultArea: "Childcare enterprises",
    indicator:
      "Refugee-led childcare enterprises (centres, home-based and mobile services) operating to agreed quality standards",
    target: "120",
  },
  {
    resultArea: "Financial sustainability",
    indicator: "Share of enterprise operating costs covered by fee and community revenue by Year 3",
    target: "30%",
  },
  {
    resultArea: "Caregiver livelihoods",
    indicator: "Average increase in monthly income of certified caregivers against baseline",
    target: "+50%",
  },
  {
    resultArea: "Systems integration",
    indicator: "Childcare services registered with Local Government and captured in EMIS",
    target: "80",
  },
  {
    resultArea: "Government adoption",
    indicator: "Districts adopting settlement ECCE implementation guidance informed by the model",
    target: "1",
  },
  {
    resultArea: "Evidence for scale",
    indicator:
      "Published costing and outcomes study and replication kit, with refugee-led organisations oriented for second-phase delivery",
    target: "1 study; 3 RLOs",
  },
];

export const resultsNote =
  "Indicators will be disaggregated by sex, refugee and host status, and disability. All figures on this page are proposed three-year targets, not results already achieved.";

export type BudgetLine = {
  category: string;
  year1: number;
  year2: number;
  year3: number;
  total: number;
  share: string;
};

export const budget: BudgetLine[] = [
  { category: "Childcare workforce development and credentialing", year1: 70000, year2: 65000, year3: 45000, total: 180000, share: "22.5%" },
  { category: "Childcare Access Window", year1: 20000, year2: 45000, year3: 35000, total: 100000, share: "12.5%" },
  { category: "Childcare Enterprise Window and service quality", year1: 35000, year2: 55000, year3: 35000, total: 125000, share: "15.6%" },
  { category: "Integrated nurturing care and inclusion", year1: 25000, year2: 25000, year3: 20000, total: 70000, share: "8.8%" },
  { category: "Systems integration and government engagement", year1: 20000, year2: 15000, year3: 10000, total: 45000, share: "5.6%" },
  { category: "Community governance and advocacy", year1: 10000, year2: 10000, year3: 10000, total: 30000, share: "3.8%" },
  { category: "Monitoring, evaluation, costing and learning", year1: 30000, year2: 15000, year3: 25000, total: 70000, share: "8.8%" },
  { category: "Project personnel, administration and operations", year1: 51000, year2: 52000, year3: 52000, total: 155000, share: "19.4%" },
  { category: "Audit, safeguarding and institutional compliance", year1: 8000, year2: 8000, year3: 9000, total: 25000, share: "3.1%" },
];

export const budgetTotal = {
  category: "Total",
  year1: 269000,
  year2: 290000,
  year3: 241000,
  total: 800000,
  share: "100%",
};

export const financialSustainability = {
  heading: "Financial sustainability model",
  paragraphs: [
    "The initiative is designed so that revenue, not only grant funding, sustains childcare services over time. Cost per child is projected to fall from roughly USD 120 in Year 1 to roughly USD 80 by Year 3 as enrolment and fee revenue expand, with fee and community revenue projected to cover 30% of enterprise operating costs by the end of the grant period.",
    "Demand-side financing connects childcare fees to income already flowing through the settlement economy: market-day childcare co-financed by vendor associations, fee support linked to women's enterprise groups under the World Bank-funded GROW Project, and matched savings products through village savings and loan associations.",
    "District engagement during the grant period is intended to lay the ground for public co-financing beyond it. These figures will be validated through the baseline cost study and revised transparently as implementation proceeds.",
  ],
};

export const governmentIntegration = {
  heading: "Government and systems integration",
  paragraphs: [
    "From the outset, the initiative is designed for implementation with the Office of the Prime Minister, the Ministry of Education and Sports, the Ministry of Gender, Labour and Social Development, District Local Government and settlement leadership as co-owners, not as external observers.",
    "Concrete government-facing commitments include registration and licensing pathways for refugee-led services, EMIS (Education Management Information System) capture of supported centres, adaptation of ECCE quality standards to settlement realities, and settlement ECCE implementation guidelines intended for adoption across refugee-hosting districts.",
  ],
};

export const evidenceAndLearning = {
  heading: "Evidence, costing and learning",
  paragraphs: [
    "Credible cost and outcome data for childcare in protracted displacement remain scarce. The initiative proposes a focused costing and outcomes study with an independent research partner, with baseline and endline measurement of child development outcomes, women's income and labour participation, service quality and unit costs — culminating in a published reference cost per child for settlement childcare.",
    "Alongside the study, a test-and-learn approach would document implementation in real time, and the model would be packaged as a replication kit that refugee-led organisations can run with light support. Together, the reference cost and the kit are intended to give government and funders what they need to appraise and budget a larger second phase.",
  ],
};

export const potentialPartners = [
  "Foundations and development partners funding early childhood development, women's economic empowerment or displacement response",
  "Government ministries and District Local Government responsible for ECCE policy, registration and EMIS",
  "The Directorate of Industrial Training and technical/vocational credentialing bodies",
  "Research institutions able to lead or contribute to the costing and outcomes study",
  "Refugee-led organisations positioned for second-phase delivery",
  "Cooperative and enterprise-finance specialists able to help design the Childcare Enterprise Fund",
];

export const whyNow = {
  heading: "Why Kupanda Collective, why now",
  paragraphs: [
    "Uganda is moving into ECCE policy implementation, and decisions taken in the next three years will determine whether refugee children and informal providers are inside or outside that process.",
    "Kupanda Collective brings a trust-based presence in Nakivale built through community-led work, and working relationships across settlement leadership, refugee-led organisations, District Local Government and national ECCE actors. Childcare in refugee settings is deeply relational — families trust people they know, and models designed together with communities hold. Kupanda Collective's Neighborhood Assemblies make that co-design real.",
  ],
};
