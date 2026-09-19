// Individual case studies, rendered by src/pages/work/[slug].astro.
export interface CaseStudy {
  slug: string;
  kicker: string;
  title: string;
  lede: string;
  role: string;
  company: string;
  when: string;
  did: { label: string; text: string }[];
  outcomes: string[];
  stats: { b: string; span: string }[];
  tools: string[];
  related: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'invitations-mvp',
    kicker: 'SUBSCRIBE · Product Manager',
    title: 'Invitations: from PRD to a phased MVP rollout',
    lede: "Led the overhaul of SUBSCRIBE's Invitations feature from requirements through a controlled MVP rollout across six customer organizations.",
    role: 'Product Manager',
    company: 'SUBSCRIBE · Financial services',
    when: 'Oct 2025 – Apr 2026',
    did: [
      { label: 'Defined the requirements', text: 'Wrote the PRD and functional requirements for the overhaul.' },
      { label: 'Ran a phased rollout', text: 'Planned and ran a controlled, phased MVP rollout across six customer organizations.' },
      { label: 'Measured what mattered', text: 'Defined the MVP KPIs and built a SQL-powered Metabase dashboard to track them.' },
      { label: 'Listened to users', text: 'Synthesized user-survey feedback to prioritize enhancements and inform wider-release planning.' },
      { label: 'Owned quality and launch', text: 'Authored test cases, test plans, a day-of-launch runbook, and a go-live checklist, and triaged and prioritized defects with engineering through launch.' },
    ],
    outcomes: [
      'Shipped the MVP to six customer organizations through a controlled rollout.',
      'Gave the team a live KPI dashboard and a survey-informed set of enhancements to plan the wider release around.',
    ],
    stats: [{ b: '6', span: 'Customer organizations in the phased rollout' }],
    tools: ['SQL', 'Metabase', 'PRDs', 'Test plans', 'Runbooks'],
    related: ['stalled-initiative', 'backlog-and-standards'],
  },
  {
    slug: 'stalled-initiative',
    kicker: 'SUBSCRIBE · Product Manager',
    title: 'Relaunching a stalled three-year initiative in 30 days',
    lede: 'Re-scoped a long-stalled initiative into a prioritized delivery plan and shipped an initial release within 30 days.',
    role: 'Product Manager',
    company: 'SUBSCRIBE · Financial services',
    when: 'Oct 2025 – Apr 2026',
    did: [
      { label: 'Reframed the work', text: 'Translated unresolved stakeholder needs into a prioritized delivery plan.' },
      { label: 'Secured alignment', text: 'Got executive alignment on the re-scoped plan.' },
      { label: 'Shipped small, first', text: 'Launched an initial release within 30 days.' },
      { label: 'Validated after launch', text: 'Ran structured post-launch validation to guide follow-on work.' },
    ],
    outcomes: [
      'Moved an initiative that had been stalled for three years to a launched initial release in 30 days.',
      'Left the team with validated learnings to steer the follow-on work.',
    ],
    stats: [
      { b: '3 yrs', span: 'Initiative had been stalled' },
      { b: '30', span: 'Days to initial release' },
    ],
    tools: ['Scoping', 'Prioritization', 'Post-launch validation'],
    related: ['invitations-mvp', 'backlog-and-standards'],
  },
  {
    slug: 'backlog-and-standards',
    kicker: 'SUBSCRIBE · Product Manager',
    title: 'Sequencing three teams and raising the bar on requirements',
    lede: 'Defined product strategy and prioritized engineering backlogs across three teams, and set the acceptance-criteria standard that made tickets testable.',
    role: 'Product Manager',
    company: 'SUBSCRIBE · Financial services',
    when: 'Oct 2025 – Apr 2026',
    did: [
      { label: 'Prioritized across teams', text: 'Defined product strategy and prioritized engineering backlogs across three teams, sequencing requirements and dependencies across concurrent initiatives.' },
      { label: 'Set a standard', text: 'Established Gherkin-format acceptance-criteria standards so requirements were testable by default.' },
      { label: 'Built the skill', text: 'Mentored business analysts on writing testable tickets.' },
    ],
    outcomes: [
      'Increased on-time feature releases by 50%.',
      'Improved backlog readiness and requirement quality across three engineering teams.',
    ],
    stats: [
      { b: '50%', span: 'More on-time feature releases' },
      { b: '3', span: 'Engineering teams' },
    ],
    tools: ['Gherkin', 'User stories', 'Jira'],
    related: ['invitations-mvp', 'stalled-initiative'],
  },
  {
    slug: 'certification-app-mvp',
    kicker: 'Wide Eye · Senior DPM',
    title: 'Defining the MVP for an election-office certification app',
    lede: "Led MVP definition for CTCL's custom certification application for election offices, working with UX and engineering to decide what shipped first.",
    role: 'Senior Digital PM',
    company: 'Wide Eye · Creative agency',
    when: 'Nov 2024 – Oct 2025',
    did: [
      { label: 'Scoped the MVP', text: 'Partnered with UX and engineering to prioritize features.' },
      { label: 'Mapped the flows', text: 'Mapped applicant and administrator flows in Figma.' },
      { label: 'Defined the workflows', text: 'Defined the application, quiz-content, and tracking workflows.' },
      { label: 'Ran the backlog', text: 'Maintained the Asana delivery backlog.' },
      { label: 'Managed scope', text: 'Negotiated client scope additions into a formal post-MVP statement of work.' },
      { label: 'Made a clear call on payments', text: 'Aligned stakeholders on a manual check-payment workflow when Stripe integration was out of scope.' },
    ],
    outcomes: [
      'Kept the MVP focused by moving additional client requests into a formal post-MVP statement of work.',
      'Resolved the payments question with an agreed manual workflow instead of expanding scope.',
    ],
    stats: [],
    tools: ['Figma', 'Asana', 'Statements of work'],
    related: ['lms-integration', 'invitations-mvp'],
  },
  {
    slug: 'lms-integration',
    kicker: 'Wide Eye · Senior DPM',
    title: 'Connecting discovery to learning with an LMS integration',
    lede: "Led discovery through design for StriveTogether's educator learning experience, turning stakeholder needs and engineering constraints into integration requirements.",
    role: 'Senior Digital PM',
    company: 'Wide Eye · Creative agency',
    when: 'Nov 2024 – Oct 2025',
    did: [
      { label: 'Led discovery', text: 'Ran discovery through design for the educator learning experience.' },
      { label: 'Translated needs into requirements', text: 'Turned stakeholder needs and engineering constraints into requirements for a Docebo LMS–marketing-site integration.' },
    ],
    outcomes: [
      'Defined an integration intended to unify the journey from discovery to learning.',
    ],
    stats: [],
    tools: ['Docebo', 'Discovery', 'Requirements'],
    related: ['certification-app-mvp', 'invitations-mvp'],
  },
  {
    slug: 'wiego-migration',
    kicker: 'Studio Simpatico · Senior PM',
    title: 'Structuring a multilingual research library for a CMS migration',
    lede: "Defined the taxonomy, data structures, and content-mapping requirements for WIEGO's Drupal-to-WordPress migration and multilingual research library.",
    role: 'Senior Project Manager',
    company: 'Studio Simpatico · Creative agency',
    when: 'Jan 2022 – Nov 2024',
    did: [
      { label: 'Defined the structure', text: 'Partnered with UX and engineering to define taxonomy, data structures, and content-mapping requirements.' },
      { label: 'Designed for discovery', text: 'Scoped a multilingual research library with advanced filtering and search.' },
    ],
    outcomes: [
      'Gave the migration a clear content model to build against, from Drupal to WordPress.',
    ],
    stats: [],
    tools: ['Drupal', 'WordPress', 'Taxonomy', 'Content mapping'],
    related: ['certification-app-mvp', 'invitations-mvp'],
  },
];
