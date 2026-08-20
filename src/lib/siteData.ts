export interface ProjectItem {
  id: string;
  title: string;
  agency: string;
  agencyFull: string;
  fundingScheme: string;
  budget: string;
  duration: string;
  status: 'Ongoing' | 'Completed' | 'Pilot Track Active';
  principalInvestigator: string;
  coInvestigators: string[];
  summary: string;
  objectives: string[];
  deliverables: string[];
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
  category: 'Research Breakthrough' | 'Field Demonstration' | 'Workshop & Training' | 'Publication';
  summary: string;
  fullStory: string;
  author: string;
  tags: string[];
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

export const ongoingProjectsList: ProjectItem[] = [
  {
    id: 'anrf-irg-01',
    title: 'Influence of Aged Binder Viscosity in RAP on Mechanical and Hydrological Behaviour of Pervious Concrete Pavement',
    agency: 'ANRF',
    agencyFull: 'Anusandhan National Research Foundation (ANRF / SERB), Government of India',
    fundingScheme: 'Interdisciplinary Research Grant (IRG)',
    budget: '₹58.57 Lakh',
    duration: '2024 – 2027 (36 Months)',
    status: 'Ongoing',
    principalInvestigator: 'Dr. Surya Kant Sahdeo (PI)',
    coInvestigators: ['Department of Civil Engineering, IIT Ropar'],
    summary: 'Investigating how aged bituminous mastic film on reclaimed asphalt pavement (RAP) aggregates affects cement paste hydration, mechanical interlock, pore connectivity, and storm-water filtration in pervious concrete road shoulders.',
    objectives: [
      'Evaluate microstructural interfacial transition zone (ITZ) between aged RAP and cement paste',
      'Optimize aggregate gradations for high void retention (>18%) and compressive strength (>20 MPa)',
      'Model permeability decline under continuous mountain silt sedimentation',
      'Construct a 150-meter instrumented pilot test track for real-time sensor monitoring',
    ],
    deliverables: [
      'RAP-integrated pervious concrete mix design specifications',
      'Permeability retention and anti-clogging protocol',
      '2 peer-reviewed journal publications and 1 national workshop',
    ],
    fieldLocation: 'IIT Ropar Transport Engineering Proving Ground',
  },
  {
    id: 'nmhs-debris-02',
    title: 'Utilisation of Landslide Debris and Plastic Waste for Different Layers of Pavement Section in Mountain Road Corridors',
    agency: 'NMHS',
    agencyFull: 'National Mission on Himalayan Studies (NMHS), MoEF&CC, Government of India',
    fundingScheme: 'Medium-Grant R&D Project',
    budget: '₹44.53 Lakh',
    duration: '2023 – 2026 (36 Months)',
    status: 'Ongoing',
    principalInvestigator: 'Dr. Surya Kant Sahdeo (PI)',
    coInvestigators: ['Dr. Shray Pathak (Co-PI)', 'Dr. Raheena M (Co-PI)'],
    summary: 'Formulating eco-friendly chemical stabilization matrices to valorize catastrophic mountain landslide debris, tunnel muck, and single-use plastic waste into loadbearing road base and subgrade courses across Himachal Pradesh and Uttarakhand.',
    objectives: [
      'Geotechnical characterization of landslide debris samples from 5 major Himalayan slide zones',
      'Formulate lime, slag, and shredded plastic dry-coating stabilization techniques',
      'Perform repeated cyclic loading and resilient modulus testing under high moisture saturation',
      'Life Cycle Assessment (LCA) quantifying avoided carbon emissions from virgin quarrying',
    ],
    deliverables: [
      'Landslide Muck Repurposing Manual for Himalayan PWDs and BRO',
      'Optimal shredded plastic dosage charts for mountain sub-bases',
      'Pilot demonstration on vulnerable mountain corridor',
    ],
    fieldLocation: 'Himachal Pradesh & Punjab Border Corridors',
  },
  {
    id: 'isird-seed-03',
    title: 'Freeze-Thaw Resilient Roads Using Recycled Asphalt and Agro-Waste in Mountainous Zones',
    agency: 'ISIRD',
    agencyFull: 'Institute Seed Infrastructure Research Grant, IIT Ropar',
    fundingScheme: 'Institutional Research Grant',
    budget: '₹18.50 Lakh',
    duration: '2023 – 2025 (24 Months)',
    status: 'Ongoing',
    principalInvestigator: 'Dr. Surya Kant Sahdeo (PI)',
    coInvestigators: ['Department of Civil Engineering'],
    summary: 'Developing zero-slump roller-compacted concrete pavement (RCCP) modified with agricultural straw biochar and milled asphalt for frost-heave durability in sub-zero Himalayan altitudes.',
    objectives: [
      'Synthesize high-silica agro-waste ashes as pozzolanic micro-fillers in RCCP',
      'Conduct 300+ accelerated laboratory freeze-thaw cycles (-20°C to +20°C)',
      'Characterize flexural fatigue life and residual dynamic elasticity',
    ],
    deliverables: [
      'Freeze-thaw durable RCCP mix guidelines',
      'Thermal shock resistance benchmark datasets',
    ],
    fieldLocation: 'Advanced Concrete Testing Laboratory, IIT Ropar',
  },
];

export const completedProjectsList: ProjectItem[] = [
  {
    id: 'comp-01',
    title: 'Laboratory Evaluation of Cold-In-Place Recycled Asphalt Pavements with Foamed Bitumen',
    agency: 'State Highway Agency Collaboration',
    agencyFull: 'State Public Works Department (PWD) in partnership with Academic R&D',
    fundingScheme: 'Applied Industry Research Initiative',
    budget: '₹14.20 Lakh',
    duration: '2022 – 2024',
    status: 'Completed',
    principalInvestigator: 'Dr. Surya Kant Sahdeo',
    coInvestigators: ['Highway Engineering Research Team'],
    summary: 'Validated the mechanical fatigue endurance and moisture susceptibility of foamed bitumen stabilized base courses utilizing 100% reclaimed asphalt pavement from deteriorated highway sections.',
    objectives: [
      'Optimize foamed bitumen expansion ratio and half-life parameters',
      'Establish minimum active cementitious filler requirements',
      'Formulate structural layer coefficient values for IRC 37 design catalogue',
    ],
    deliverables: [
      'Technical monograph on foamed bitumen cold recycling for highway rehabilitation',
      'Design charts submitted to regional PWD engineering circles',
    ],
  },
  {
    id: 'comp-02',
    title: 'Digital Terrain Modeling and Geotechnical Risk Mapping for Mountain Highway Alignments',
    agency: 'Institutional R&D',
    agencyFull: 'Department of Civil Engineering, IIT Ropar',
    fundingScheme: 'Departmental Special Project',
    budget: '₹11.80 Lakh',
    duration: '2022 – 2023',
    status: 'Completed',
    principalInvestigator: 'Dr. Shray Pathak',
    coInvestigators: ['Dr. Surya Kant Sahdeo'],
    summary: 'Developed multi-criteria GIS algorithms combining satellite InSAR surface displacement, slope curvature, and hydrology to identify stable alignments for mountain infrastructure.',
    objectives: [
      'Multi-source satellite data integration for landslide susceptibility indexing',
      'Validation against historical landslide inventory across Himachal Pradesh',
    ],
    deliverables: [
      'High-resolution digital terrain hazard database',
      'Peer-reviewed publication in International Journal of Remote Sensing',
    ],
  },
];

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
    role: 'Project Coordinator · HiMPaTH',
    designation: 'Assistant Professor, Department of Civil Engineering',
    department: 'Department of Civil Engineering',
    institution: 'Indian Institute of Technology Ropar, Punjab',
    initials: 'SS',
    category: 'Faculty Coordinator',
    bio: 'Dr. Surya Kant Sahdeo leads the Centre of Excellence (HiMPaTH) at IIT Ropar. His research focuses on sustainable pavement materials, recycling & waste valorization, Full-Depth Reclamation (FDR), pervious concrete pavements, binder rheology, and life-cycle carbon assessment for resilient mountain transport.',
    researchFocus: [
      'Pavement Engineering & Materials',
      'RAP & Waste Valorization (Plastic, Landslide Muck, Biochar)',
      'Full-Depth Reclamation (FDR) & In-Situ Stabilization',
      'Pervious Concrete & High-Porosity Hydrological Systems',
      'Life Cycle Assessment (LCA) & Carbon Accounting',
    ],
    email: 'himpath@iitrpr.ac.in',
  },
  {
    id: 'dr-pathak',
    name: 'Dr. Shray Pathak',
    role: 'Co-Coordinator · HiMPaTH',
    designation: 'Assistant Professor, Department of Civil Engineering',
    department: 'Department of Civil Engineering',
    institution: 'Indian Institute of Technology Ropar, Punjab',
    initials: 'SP',
    category: 'Faculty Coordinator',
    bio: 'Dr. Shray Pathak specializes in geomatics engineering, satellite remote sensing, LiDAR terrain modeling, and geospatial hazard mapping for transportation corridors in the Indian Himalayan Region.',
    researchFocus: [
      'Geospatial Intelligence & GIS',
      'Satellite Remote Sensing & InSAR',
      'LiDAR 3D Terrain Digital Twins',
      'Multi-Criteria Highway Corridor Planning',
    ],
    email: 'shray@iitrpr.ac.in',
  },
  {
    id: 'dr-raheena',
    name: 'Dr. Raheena M',
    role: 'Co-Coordinator · HiMPaTH',
    designation: 'Assistant Professor, Department of Civil Engineering',
    department: 'Department of Civil Engineering',
    institution: 'Indian Institute of Technology Ropar, Punjab',
    initials: 'RM',
    category: 'Faculty Coordinator',
    bio: 'Dr. Raheena M specializes in geotechnical and foundation engineering, slope stability analysis, geosynthetics, and ground improvement techniques tailored for steep, seismically active Himalayan slopes.',
    researchFocus: [
      'Geotechnical Engineering & Soil Mechanics',
      'Slope Stability & Landslide Mitigation',
      'Geosynthetics & Geogrids Reinforcement',
      'Soil-Structure Interaction on Steep Slopes',
    ],
    email: 'raheena@iitrpr.ac.in',
  },
];

export const researchScholarsList: TeamMemberItem[] = [
  {
    id: 'scholar-01',
    name: 'Senior Research Fellow (Pavement Materials)',
    role: 'Doctoral Researcher',
    designation: 'Senior Research Fellow (ANRF Project)',
    department: 'Department of Civil Engineering',
    institution: 'IIT Ropar',
    initials: 'SR',
    category: 'Research Scholar',
    bio: 'Investigating binder stripping mechanics, high-temperature dynamic shear rheology, and hydraulic pore retention in recycled asphalt pervious concrete systems.',
    researchFocus: ['Binder Rheology', 'Pervious Concrete Hydrology', 'Microstructural ITZ Analysis'],
    email: 'himpath@iitrpr.ac.in',
  },
  {
    id: 'scholar-02',
    name: 'Junior Research Fellow (Geotechnical Stabilization)',
    role: 'Doctoral Researcher',
    designation: 'Junior Research Fellow (NMHS Project)',
    department: 'Department of Civil Engineering',
    institution: 'IIT Ropar',
    initials: 'JR',
    category: 'Research Scholar',
    bio: 'Working on chemical stabilization protocols and mechanical triaxial testing of landslide debris and polymer waste composites for mountain sub-base layers.',
    researchFocus: ['Landslide Muck Stabilization', 'Plastic Upcycling', 'Cyclic Triaxial Testing'],
    email: 'himpath@iitrpr.ac.in',
  },
  {
    id: 'scholar-03',
    name: 'Project Research Engineer (AI & Computer Vision)',
    role: 'Project Engineer',
    designation: 'Research Staff (Asset Management)',
    department: 'Department of Civil Engineering',
    institution: 'IIT Ropar',
    initials: 'PE',
    category: 'Research Scholar',
    bio: 'Developing deep neural network models for automated road crack segmentation, distress severity classification, and mobile edge inference.',
    researchFocus: ['Deep Learning Computer Vision', 'Automated Pavement Distress Detection', 'Edge AI Systems'],
    email: 'himpath@iitrpr.ac.in',
  },
];

export const advisoryBoardList: TeamMemberItem[] = [
  {
    id: 'adv-01',
    name: 'National Technical Advisory Committee',
    role: 'Institutional Advisory Body',
    designation: 'Senior Experts from IITs, CRRI, BRO, and MoRTH',
    department: 'Inter-Institutional Oversight Panel',
    institution: 'Government of India',
    initials: 'AC',
    category: 'Advisory Board',
    bio: 'Providing strategic technical guidance, national mission alignment, and facilitating multi-agency field validation on strategic Himalayan corridors.',
    researchFocus: ['Strategic Policy Guidance', 'Codal Integration', 'Inter-Agency Technology Transfer'],
    email: 'himpath@iitrpr.ac.in',
  },
];

export const newsArticlesList: NewsItem[] = [
  {
    id: 'news-01',
    title: 'From Laboratory Innovation to Resilient Himalayan Road Infrastructure',
    date: '2024 · Active R&D',
    category: 'Research Breakthrough',
    summary: 'HiMPaTH advances its pioneering formulations for freeze-thaw resistant RCCP and porous asphalt toward full-scale field test tracks.',
    fullStory: 'The Centre of Excellence at IIT Ropar has achieved critical laboratory validation milestones in evaluating recycled aggregate pervious concrete and low-temperature biochar modified asphalt binders. With support from national funding bodies, the team is preparing pilot demonstration tracks on strategic highways.',
    author: 'HiMPaTH Research Communications',
    tags: ['Research', 'Pavements', 'Field Trials', 'IIT Ropar'],
  },
  {
    id: 'news-02',
    title: 'High-Impact Research Publications in International Transportation Journals',
    date: '2024 · Publications',
    category: 'Publication',
    summary: 'Faculty and researchers publish novel findings on RAP binder viscosity, freeze-thaw endurance, and geotechnical slope resilience.',
    fullStory: 'Recent peer-reviewed articles authored by Dr. Surya Kant Sahdeo and collaborators have been accepted in leading international journals, detailing experimental breakthroughs in cold-weather pavement durability and circular aggregate characterization.',
    author: 'HiMPaTH Editorial Team',
    tags: ['Publications', 'Journals', 'Knowledge Transfer'],
  },
  {
    id: 'news-03',
    title: 'Upcoming National Workshop on Sustainable Mountain Highway Engineering',
    date: 'Upcoming · 2025',
    category: 'Workshop & Training',
    summary: 'Engaging field engineers from BRO, State PWDs, NHIDCL, and academic scholars on sustainable mix designs and resilient DPR preparation.',
    fullStory: 'HiMPaTH will host a 3-day intensive hands-on technical workshop at IIT Ropar covering bitumen rheology testing, full-depth reclamation mix design, slope bioengineering, and automated AI road distress inspections for mountainous regions.',
    author: 'HiMPaTH Training Directorate',
    tags: ['Workshop', 'Capacity Building', 'Engineers Training'],
  },
];

export const publicationsList: PublicationItem[] = [
  {
    id: 'pub-01',
    title: 'Hydraulic Conductivity and Mechanical Characterization of Recycled Aggregate Pervious Concrete for Storm-Water Management',
    authors: ['Dr. Surya Kant Sahdeo', 'Research Fellows at IIT Ropar'],
    journal: 'Journal of Sustainable Transportation Engineering',
    year: 2024,
    category: 'Journal Article',
    abstract: 'This paper investigates the interconnected air-void geometry, compressive fatigue, and sediment clogging kinetics of pervious concrete containing up to 40% recycled aggregate fractions under simulated Himalayan monsoon storm-water runoff.',
  },
  {
    id: 'pub-02',
    title: 'Performance-Based Rheological Evaluation of Low-Temperature Biochar-Modified Bituminous Binders for Cold Mountain Climates',
    authors: ['Dr. Surya Kant Sahdeo', 'Collaborators'],
    journal: 'Construction and Building Materials',
    year: 2024,
    category: 'Journal Article',
    abstract: 'Dynamic shear rheometer (DSR) and bending beam rheometer (BBR) testing were conducted to characterize the low-temperature creep stiffness, m-value, and oxidative aging resistance of VG-10 binders modified with agro-waste biochar down to -30°C.',
  },
  {
    id: 'pub-03',
    title: 'Geospatial Vulnerability Assessment and Multi-Criteria Alignment Planning for Himalayan Transport Corridors',
    authors: ['Dr. Shray Pathak', 'Dr. Surya Kant Sahdeo'],
    journal: 'International Journal of Remote Sensing & Geomatics',
    year: 2023,
    category: 'Journal Article',
    abstract: 'Integrating satellite InSAR deformation mapping and LiDAR elevation digital twins to develop predictive risk maps for highway alignment selection in young geological formations.',
  },
];

export const workshopsList: WorkshopItem[] = [
  {
    id: 'ws-01',
    title: 'National Workshop on Climate-Resilient Mountain Pavements & Full-Depth Reclamation (FDR)',
    date: 'Upcoming · Senate Hall, IIT Ropar',
    location: 'Department of Civil Engineering, IIT Ropar, Punjab',
    targetAudience: 'Executive Engineers from BRO, NHIDCL, State PWDs, Doctoral Scholars & Consultants',
    description: 'An executive 3-day technical training module combining theoretical design principles, laboratory testing demonstrations, and field quality control guidelines for sustainable road construction.',
    keyTopics: [
      'Superpave Performance Grading and Dynamic Shear Rheology',
      'Mix design optimization for Full-Depth Reclamation (FDR) and RCCP',
      'Pervious concrete shoulder design for slope erosion control',
      'Formulating climate-resilient Detailed Project Reports (DPRs)',
    ],
    registrationStatus: 'Open for Registration',
  },
  {
    id: 'ws-02',
    title: 'Field Training on Drone LiDAR and AI Computer Vision for Road Distress Auditing',
    date: 'Upcoming · IIT Ropar Main Campus',
    location: 'Geomatics & Computational Lab, IIT Ropar',
    targetAudience: 'Highway survey engineers, GIS analysts, and transport planners',
    description: 'Hands-on training on flying multi-spectral drones, generating 3D terrain digital twins, and deploying deep learning computer vision algorithms for automated road crack and distress mapping.',
    keyTopics: [
      'Drone flight planning over steep mountain road cuttings',
      'Point cloud processing and digital elevation model extraction',
      'Automated crack segmentation using deep neural networks',
    ],
    registrationStatus: 'Upcoming',
  },
];
