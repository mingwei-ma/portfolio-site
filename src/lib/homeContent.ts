// Shared homepage/landing-page content.
export const services = [
  {
    num: '01',
    name: 'Program & delivery management',
    desc: "I've led end-to-end delivery in waterfall, hybrid, and agile environments, choosing the structure based on what the team and project actually need, not just process for the sake of it. From kickoff to gate reviews, I build the cadence a team will keep so leadership always knows what's shipping and when.",
  },
  {
    num: '02',
    name: 'Intake, roadmap & backlog',
    desc: "I design intake systems that give every request a clear path, whether that means building structure from scratch or untangling a system that's grown past its limits. Once requests are in, I prioritize by real business impact, not who asks loudest.",
  },
  {
    num: '03',
    name: 'Client & stakeholder relationships',
    desc: "For my team, that means tight feedback loops, clear acceptance criteria, and requests routed through the right channel, so nobody's guessing what's actually being asked. For the client, it means staying ahead of their questions, communicating early when something's off track, and showing up like a long-term partner instead of a vendor they hired for one project.",
  },
  {
    num: '04',
    name: 'Risk, escalation & reporting',
    desc: "I build reporting that's easy to self-serve, so people aren't waiting on me for status. When our tools couldn't get me the visibility I needed, I taught myself SQL and started pulling my own Metabase reports instead of waiting on someone else to do it. In standups, I listen for the early signals that something's starting to drift, and I always escalate with a recommendation already attached.",
  },
  {
    num: '05',
    name: 'Resourcing & capacity planning',
    desc: 'I balance workload across concurrent projects by working directly with design and engineering leads, and flex up or down with freelance staffing when a project needs it. To keep burn and capacity numbers accurate, I built custom spreadsheet reporting that tracked hours against budget in real time.',
  },
];

export const work = [
  { slug: 'subscribe', kicker: 'SUBSCRIBE · PM', title: 'A project management system built from zero', highlight: '/assets/work-highlight-1.png', body: 'Standardized a chaotic Asana workspace and drove full adoption across 10 teams, clearing a 4-year-old backlog in weeks.' },
  { slug: 'wide-eye', kicker: 'Wide Eye · Senior DPM', title: '$2.6M+ of brand & web, delivered', highlight: '/assets/work-highlight-2.png', body: 'Ran delivery and resourcing for 10+ clients and lifted team efficiency by 20%.' },
  { slug: 'studio-simpatico', kicker: 'Studio Simpatico · Senior DPM', title: 'The tools that sped up delivery', highlight: '/assets/work-highlight-3.png', body: 'Change-managed 20 retainer clients and 7+ builds from Basecamp to Linear.' },
];

export const testimonials = [
  { quote: 'Mingwei was absolutely amazing to work with...all of the organizational systems she put into place meant we were able to survive after she left.', attr: 'Lead Developer · Design Agency' },
  { quote: 'Top-tier when it came to project management. We never had any confusion about where we were in the process. [Mingwei] stuck to the plan and did it without making us feel overwhelmed.', attr: 'Director of Communications · Henry Luce Foundation' },
  { quote: 'Mingwei was a joy to work with — a great facilitator and note-taker, so nothing ever got dropped, with immediate follow-up after every meeting and a weekly digest that kept everything clear.', attr: 'Director of Comms · Natural Areas Conservancy' },
  { quote: "Mingwei was fantastic. I wish she could manage all my projects and my whole life. I couldn't have worked with a better team.", attr: 'Communications Consultant · Girl Be Heard' },
];


// Homepage-specific (product-leaning) versions; /program keeps `services` and `work` above.
export const homeServices = [
  {
    num: '01',
    name: 'Requirements & MVP definition',
    desc: "I turn customer and business needs into PRDs, functional requirements, user stories, and Gherkin acceptance criteria that design and engineering can build from. At SUBSCRIBE, I led the Invitations feature overhaul from PRD to a phased MVP rollout across six customer organizations.",
  },
  {
    num: '02',
    name: 'Roadmap & prioritization',
    desc: "I prioritize backlogs by real impact, sequencing requirements and dependencies across concurrent initiatives. Across three engineering teams, that helped increase on-time feature releases by 50%, and I re-scoped a stalled three-year initiative into a prioritized plan that launched an initial release within 30 days.",
  },
  {
    num: '03',
    name: 'Launch readiness & quality',
    desc: "I stay with a feature through launch: writing test plans and cases, running UAT, triaging defects with engineering, and authoring the day-of-launch runbooks and go-live checklists that make releases uneventful.",
  },
  {
    num: '04',
    name: 'Data, KPIs & iteration',
    desc: "I define the KPIs before we ship, then measure them. I built a SQL-powered Metabase dashboard for an MVP, synthesized user-survey feedback, and ran structured post-launch validation to decide what to build next.",
  },
  {
    num: '05',
    name: 'Delivery systems & partnerships',
    desc: "I work across UX, engineering, clients, and third-party vendors, and I build the systems that keep everyone aligned. That includes standardized workflows and QA templates, and a migration to Linear that increased operational efficiency by 25%.",
  },
];

export const homeWork = [
  { slug: 'invitations-mvp', kicker: 'SUBSCRIBE · Product Manager', title: 'Invitations, from PRD to phased MVP', highlight: '/assets/work-highlight-1.png', body: 'Led the feature overhaul through a controlled rollout across six customer organizations, with MVP KPIs and a SQL-powered Metabase dashboard.', href: '/work/invitations-mvp' },
  { slug: 'outpost', kicker: 'Outpost · Personal project', title: 'A product, from brief to prototype', highlight: '/assets/work-highlight-2.png', body: 'Took a coffee-shop finder for remote workers from problem framing to a working prototype with Claude Design and Claude Code.', href: '/work/personal', cta: 'See the build →' },
  { slug: 'certification-app-mvp', kicker: 'Wide Eye · Senior DPM', title: 'MVP for a certification app', highlight: '/assets/work-highlight-3.png', body: 'Defined the MVP with UX and engineering, mapped applicant and admin flows in Figma, and turned client scope additions into a post-MVP statement of work.', href: '/work/certification-app-mvp' },
];
