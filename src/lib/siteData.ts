export interface ProjectItem {
  id: string;
  title: string;
  agency: string;
  agencyFull: string;
  fundingScheme: string;
  budget: string;
  duration?: string;
  status: 'Ongoing' | 'Completed' | 'Submitted & Under Review';
  principalInvestigator?: string;
  coInvestigators?: string[];
  summary?: string;
  objectives?: string[];
  deliverables?: string[];
  fieldLocation?: string;
}

export interface PartnerCollaboration {
  id: string;
  name: string;
  category: 'Strategic / Defence' | 'Central Ministry / National Agency' | 'Academic / Global';
  partnershipScope: string;
  initiatives: string[];
  contactRole: string;
}

export interface TeamMemberItem {
  id: string;
  name: string;
  role: string;
  designation: string;
  department: string;
  institution: string;
  initials: string;
  category: 'Faculty Coordinator' | 'Research Scholar' | 'Advisory Board';
  bio: string;
  researchFocus: string[];
  email: string;
  profileUrl?: string;
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  category: 'Event' | 'Site visit' | 'Research Breakthrough' | 'Publication';
  summary: string;
  fullStory: string;
  author: string;
  tags: string[];
  images?: string[];
}

export interface PublicationItem {
  id: string;
  title: string;
  authors: string[];
  journal: string;
  year: number;
  doi?: string;
  category: 'Journal Article' | 'Conference Proceeding' | 'IRC Guideline / Monograph';
  abstract: string;
}

export interface WorkshopItem {
  id: string;
  title: string;
  date: string;
  location: string;
  targetAudience: string;
  description: string;
  keyTopics: string[];
  registrationStatus: 'Upcoming' | 'Completed' | 'Open for Registration';
}

// ── DATASETS ──────────────────────────────────────────────────

export const SITE_CONTACT = {
  email: 'himpath.coe@iitrpr.ac.in',
  linkedin: 'https://www.linkedin.com/company/himpath',
  linkedinHandle: 'himpath',
  location: 'Department of Civil Engineering, IIT Ropar, Rupnagar, Punjab – 140001, India',
};

export const ongoingProjectsList: ProjectItem[] = [
  {
    id: 'anrf-irg-01',
    title: 'Influence of Aged Binder Viscosity in Reclaimed Asphalt Pavement (RAP) on the Mechanical and Hydrological Behaviour of Pervious Concrete Pavement (PCP)',
    agency: 'ANRF',
    agencyFull: 'ANRF — Inclusive Research Grant (IRG)',
    fundingScheme: 'Inclusive Research Grant (IRG)',
    budget: '₹58,57,440',
    duration: 'Ongoing',
    status: 'Ongoing',
    principalInvestigator: 'Dr. Surya Kant Sahdeo (PI)',
    coInvestigators: ['Department of Civil Engineering, IIT Ropar'],
    summary: 'Influence of aged binder viscosity in reclaimed asphalt pavement (RAP) on the mechanical and hydrological behaviour of pervious concrete pavement (PCP).',
    objectives: [
      'Evaluate microstructural interfacial transition zone (ITZ) between aged RAP and cement paste',
      'Optimize aggregate gradations for high void retention and compressive strength',
      'Model permeability and filtration kinetics under continuous mountain silt sedimentation',
      'Conduct field validation on pilot test sections',
    ],
    deliverables: [
      'RAP-integrated pervious concrete mix design specifications',
      'Hydrological permeability retention protocol',
      'Peer-reviewed publications and technical reports',
    ],
  },
  {
    id: 'isird-seed-02',
    title: 'Use of Recycled Asphalt and Agro-Waste in RCCP for Freeze-Thaw Resilient Roads in Mountainous Zones',
    agency: 'ISIRD',
    agencyFull: 'ISIRD Grant, IIT Ropar',
    fundingScheme: 'ISIRD Grant',
    budget: '₹18,50,000',
    duration: 'Ongoing',
    status: 'Ongoing',
    principalInvestigator: 'Dr. Surya Kant Sahdeo (PI)',
    coInvestigators: ['Department of Civil Engineering, IIT Ropar'],
    summary: 'Developing freeze-thaw resilient roller-compacted concrete pavement (RCCP) utilizing recycled asphalt and agro-waste for sustainable mountain road networks.',
    objectives: [
      'Synthesize agro-waste micro-fillers in zero-slump RCCP mixtures',
      'Conduct accelerated freeze-thaw durability cycling tests',
      'Evaluate flexural fatigue and residual stiffness performance',
    ],
    deliverables: [
      'Freeze-thaw resilient RCCP mix design guidelines',
      'Durability datasets for high-altitude mountain road specifications',
    ],
  },
];

export const submittedProjectsList: ProjectItem[] = [
  {
    id: 'sub-01',
    title: 'A Performance Study of Fibre-Reinforced Roller Compacted Concrete Pavement',
    agency: 'NTTM',
    agencyFull: 'NTTM, Ministry of Textiles, Government of India',
    fundingScheme: 'National Technical Textiles Mission Grant',
    budget: 'Under Review',
    status: 'Submitted & Under Review',
    summary: 'A performance study of fibre-reinforced roller-compacted concrete pavement for mountain infrastructure.',
  },
  {
    id: 'sub-02',
    title: 'Construction and methodology of permeable pavement (Two-layer Pervious Concrete Pavement, PCP) in high rainfall area of Northeast region of India',
    agency: 'BRO',
    agencyFull: 'Border Roads Organisation (BRO), Government of India',
    fundingScheme: 'Strategic Mountain Road Grant',
    budget: 'Under Review',
    status: 'Submitted & Under Review',
    summary: 'Permeable two-layer pervious concrete pavement methodology tailored for high-rainfall northeastern mountain sectors.',
  },
  {
    id: 'sub-03',
    title: 'Construction and methodology of permeable pavement (Porous Asphalt Pavement, PAP) in high rainfall area of Northeast region of India',
    agency: 'BRO',
    agencyFull: 'Border Roads Organisation (BRO), Government of India',
    fundingScheme: 'Strategic Mountain Road Grant',
    budget: 'Under Review',
    status: 'Submitted & Under Review',
    summary: 'Construction and methodology of porous asphalt permeable pavements in heavy precipitation mountain terrains.',
  },
];

// Kept blank for future additions as requested in the specifications
export const completedProjectsList: ProjectItem[] = [];

export const partnerCollaborationsList: PartnerCollaboration[] = [
  {
    id: 'bro',
    name: 'Border Roads Organisation (BRO)',
    category: 'Strategic / Defence',
    partnershipScope: 'Developing climate-adaptive flexible and rigid pavement technologies for high-altitude strategic border corridors across Ladakh, Himachal Pradesh, Sikkim, and Arunachal Pradesh.',
    initiatives: [
      'Joint field trials on biochar-modified bitumen binders in sub-zero zones',
      'Evaluation of full-depth reclamation for remote mountain bypasses',
      'Technical workshops for BRO Executive Engineers',
    ],
    contactRole: 'Strategic Border Infrastructure Partner',
  },
  {
    id: 'nhidcl',
    name: 'National Highways & Infrastructure Development Corporation (NHIDCL)',
    category: 'Central Ministry / National Agency',
    partnershipScope: 'Translating sustainable road construction practices, tunnel muck recycling, and slope bioengineering into National Highway EPC contract specifications.',
    initiatives: [
      'Tunnel excavation muck valorization guidelines',
      'Erosion-resistant drainage and pervious shoulder pilots',
      'Climate-resilient DPR review committee participation',
    ],
    contactRole: 'Highway Implementation Partner',
  },
  {
    id: 'morth-irc',
    name: 'MoRTH & Indian Roads Congress (IRC)',
    category: 'Central Ministry / National Agency',
    partnershipScope: 'Contributing expert research findings and laboratory datasets toward updating national road codes and specifications (IRC:37, IRC:SP:53, MoRTH 5th Revision).',
    initiatives: [
      'Codal revisions for reclaimed asphalt pavement (RAP) in RCCP',
      'Guidelines on permeable friction courses for mountain roads',
      'Standardized carbon accounting metrics for highway DPRs',
    ],
    contactRole: 'Codal & Policy Body',
  },
  {
    id: 'state-pwds',
    name: 'State PWDs (Himachal Pradesh, Uttarakhand, J&K)',
    category: 'Central Ministry / National Agency',
    partnershipScope: 'Field validation of local landslide debris stabilization and capacity building for state highway engineers on sustainable rural and state road networks.',
    initiatives: [
      'District-level soil and debris mapping',
      'Hands-on laboratory training on bitumen rheology and testing',
      'Pilot road construction under PMGSY schemes',
    ],
    contactRole: 'Regional Execution Agency',
  },
];

export const facultyList: TeamMemberItem[] = [
  {
    id: 'dr-sahdeo',
    name: 'Dr. Surya Kant Sahdeo',
    role: 'Lead · Centre of Excellence (HiMPaTH)',
    designation: 'Assistant Professor, Department of Civil Engineering',
    department: 'Department of Civil Engineering',
    institution: 'Indian Institute of Technology Ropar, Punjab',
    initials: 'SS',
    category: 'Faculty Coordinator',
    bio: 'Surya Kant Sahdeo leads the Centre of Excellence (HiMPaTH) at IIT Ropar. His research focuses on pavement engineering, sustainable materials, recycled aggregates, waste utilization, and pervious and roller-compacted concrete pavements, with emphasis on pavement performance, design, construction, maintenance, and rehabilitation.',
    researchFocus: [
      'Pavement Engineering & Materials',
      'Sustainable and Low-Carbon Pavement Materials',
      'Recycled Aggregates & Waste Utilization',
      'Pervious & Roller-Compacted Concrete Pavements',
      'Pavement Performance, Maintenance & Rehabilitation',
      'Sustainable Transportation Infrastructure',
    ],
    email: 'himpath.coe@iitrpr.ac.in',
  },
  {
    id: 'dr-pathak',
    name: 'Dr. Shray Pathak',
    role: 'Faculty Coordinator · HiMPaTH',
    designation: 'Assistant Professor, Department of Civil Engineering',
    department: 'Department of Civil Engineering',
    institution: 'Indian Institute of Technology Ropar, Punjab',
    initials: 'SP',
    category: 'Faculty Coordinator',
    bio: 'Dr. Shray Pathak specializes in remote sensing, GIS, and geospatial technologies, with research applications in hydrology, flood and inundation assessment, climate change, urban sustainability, and geospatial decision-making. His work focuses on applying geospatial and data-driven approaches to address environmental and infrastructure-related challenges.',
    researchFocus: [
      'Remote Sensing & GIS',
      'Geospatial Technologies & Spatial Analysis',
      'Hydrology & Water Resources',
      'Flood & Inundation Assessment',
      'Climate Change & Urban Sustainability',
      'Geospatial Decision-Making',
    ],
    email: 'himpath.coe@iitrpr.ac.in',
  },
  {
    id: 'dr-raheena',
    name: 'Dr. Raheena M',
    role: 'Faculty Coordinator · HiMPaTH',
    designation: 'Assistant Professor, Department of Civil Engineering',
    department: 'Department of Civil Engineering',
    institution: 'Indian Institute of Technology Ropar, Punjab',
    initials: 'RM',
    category: 'Faculty Coordinator',
    bio: 'Dr. Raheena M specializes in geotechnical engineering and soil characterization, with research focused on soft and expansive soils, soil stabilization, ground improvement, bio-cementation, sustainable geosynthetics, and geotechnical resilience.',
    researchFocus: [
      'Geotechnical Engineering & Soil Characterization',
      'Soft & Expansive Soils',
      'Soil Stabilization & Ground Improvement',
      'Bio-Cementation & Sustainable Geotechnics',
      'Geosynthetics for Sustainable Infrastructure',
      'Landslide Modelling & Geotechnical Resilience',
    ],
    email: 'himpath.coe@iitrpr.ac.in',
  },
];

export const advisoryBoardInfo = {
  title: 'Institutional Governance & Collaboration',
  subtitle: 'National & Technical Collaboration',
  description: 'HiMPaTH brings together academic institutions, government agencies, research organizations, and road-sector stakeholders to strengthen technical collaboration, knowledge exchange, field validation, and implementation of climate-resilient transportation solutions in the Himalayan region.',
  areasOfCollaboration: [
    'Strategic Technical Guidance',
    'Policy & Codal Alignment',
    'Knowledge & Technology Exchange',
    'Field Validation & Demonstration',
    'Stakeholder Coordination',
  ],
  keyStakeholders: [
    'MoRTH',
    'BRO',
    'NHAI',
    'PMGSY',
    'State PWDs',
    'Academic & Research Institutions',
  ],
};

export const advisoryBoardList: TeamMemberItem[] = [
  {
    id: 'adv-01',
    name: 'National & Technical Stakeholders',
    role: 'Institutional Governance & Collaboration',
    designation: 'MoRTH · BRO · NHAI · PMGSY · State PWDs · Academic & Research Institutions',
    department: 'Inter-Institutional Governance Panel',
    institution: 'Government of India & State Highway Departments',
    initials: 'AB',
    category: 'Advisory Board',
    bio: 'HiMPaTH brings together academic institutions, government agencies, research organizations, and road-sector stakeholders to strengthen technical collaboration, knowledge exchange, field validation, and implementation of climate-resilient transportation solutions in the Himalayan region.',
    researchFocus: [
      'Strategic Technical Guidance',
      'Policy & Codal Alignment',
      'Knowledge & Technology Exchange',
      'Field Validation & Demonstration',
      'Stakeholder Coordination',
    ],
    email: 'himpath.coe@iitrpr.ac.in',
  },
];

export const researchScholarsList: TeamMemberItem[] = [
  {
    id: 'scholar-01',
    name: 'Research Scholars & Project Staff',
    role: 'Doctoral Researchers & Engineers',
    designation: 'Civil Engineering Research Group',
    department: 'Department of Civil Engineering',
    institution: 'IIT Ropar',
    initials: 'RS',
    category: 'Research Scholar',
    bio: 'Conducting advanced laboratory testing, dynamic mechanical characterization, GIS spatial modeling, and field pilot trials for Himalayan road infrastructure.',
    researchFocus: ['Pavement Materials', 'Binder Rheology', 'Geotechnical Stabilization', 'AI Computer Vision'],
    email: 'himpath.coe@iitrpr.ac.in',
  },
];

export const newsArticlesList: NewsItem[] = [
  {
    id: 'event-lecture-dr-rishi',
    title: 'Special Lecture on Innovation, Research & Industry Perspectives',
    date: 'Recent Event · IIT Ropar',
    category: 'Event',
    summary: 'Special lecture by Dr. Rishi Singh Chhabra exploring innovation, research & development, and emerging opportunities in civil engineering.',
    fullStory: 'HiMPaTH, IIT Ropar hosted a special lecture by Dr. Rishi Singh Chhabra, Head – R&D Division, DRG Industries Pvt. Ltd. (A Moglix Company), for students and faculty of Civil Engineering. The session explored innovation, research and development, industry practices, and emerging opportunities in civil engineering, fostering meaningful academic–industry engagement.\n\nFacilitated by Dr. Surya Kant Sahdeo, HiMPaTH.',
    author: 'Facilitated by Dr. Surya Kant Sahdeo, HiMPaTH',
    tags: ['Event', 'Special Lecture', 'Industry Engagement', 'Innovation', 'IIT Ropar'],
    images: [
      '/images/events/lecture-1.jpg',
      '/images/events/lecture-2.jpg',
      '/images/events/lecture-3.jpg',
      '/images/events/lecture-4.jpg',
    ],
  },
];

// Kept blank for now as specified in the PDF
export const publicationsList: PublicationItem[] = [];

// Kept blank for now as specified in the PDF
export const workshopsList: WorkshopItem[] = [];
