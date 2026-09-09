export interface ResearchPillar {
  id: string;
  slug: string;
  pillarNumber: string;
  title: string;
  category: string;
  summary: string;
  description: string;
  keyTechnologies: string[];
  challengesAddressed: string[];
  applications: string[];
  equipment: string[];
}

export interface PipelineStage {
  step: string;
  title: string;
  subtitle: string;
  summary: string;
  activities: string[];
  keyOutputs: string[];
  collaborators: string[];
}

export interface OngoingResearchItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  tag: string;
  summary: string;
  description: string;
  labFacility: string;
  keyInnovations: string[];
  targetImpact: string;
  status: string;
}

export interface GrantProposal {
  id: string;
  agency: string;
  agencyFull: string;
  scheme: string;
  title: string;
  status: string;
  category: string;
  grantType: string;
  summary: string;
  objectives: string[];
  expectedImpact: string;
}

export interface LabFacility {
  id: string;
  facilityNumber: string;
  name: string;
  subTitle: string;
  category: string;
  description: string;
  majorEquipment: string[];
  viewMoreEquipment: string[];
  testingCapabilities: string[];
  complianceStandards: string[];
  location?: string;
}

export const researchPillars: ResearchPillar[] = [
  {
    id: '1',
    slug: 'climate-resilient-pavements',
    pillarNumber: '01',
    category: 'Pavement Systems',
    title: 'Climate-Resilient Pavements',
    summary: 'Engineered pavement systems specifically designed for extreme mountain hydrology, freeze-thaw cycles, and heavy axle loads.',
    description: 'Pavement infrastructure in the Indian Himalayan Region faces unprecedented thermal swings (-20°C to +35°C), torrential monsoon runoff, and heavy strategic transport. This pillar focuses on Full-Depth Reclamation (FDR), high-strength Roller-Compacted Concrete Pavements (RCCP), and open-graded porous asphalt surfaces.',
    keyTechnologies: [
      'Full-Depth Reclamation (FDR) with cementitious and foamed bitumen stabilizers',
      'Roller-Compacted Concrete Pavements (RCCP) with rapid-curing formulations',
      'High-friction Porous Asphalt Surface Courses with modified polymer binders',
      'Pervious Concrete Shoulder and storm-water management systems',
    ],
    challengesAddressed: [
      'Sub-zero freeze-thaw cracking and moisture damage',
      'Surface water ponding, aquaplaning, and severe erosion on steep inclines',
      'High lifecycle maintenance costs of conventional flexible pavements',
    ],
    applications: ['Strategic Border Highway Corridors', 'Mountain Expressways & Tunnel Portals', 'High-Altitude Cold-Desert Roads'],
    equipment: ['Dynamic Shear Rheometer (DSR)', 'Wheel Tracking Rut Tester', 'Repeated Load Permanent Deformation (RLPD)'],
  },
  {
    id: '2',
    slug: 'sustainable-materials-recycling',
    pillarNumber: '02',
    category: 'Circular Economy',
    title: 'Sustainable Materials & Recycling',
    summary: 'Valorization of regional industrial and mountain waste streams to eliminate virgin aggregate mining in fragile ecosystems.',
    description: 'Mining virgin aggregates in fragile mountain ecosystems causes landslides, deforestation, and high transport costs. This research pillar develops scientific recycling protocols for Reclaimed Asphalt Pavement (RAP), landslide debris/muck, agro-waste biochar, and post-consumer plastic waste.',
    keyTechnologies: [
      'High-RAP content hot and warm mix asphalt technologies',
      'Landslide debris and hill-cut muck aggregate grading and chemical stabilization',
      'Biomass-derived biochar bitumen modification for CO2 sequestration',
      'Upcycled shredded plastic composite stabilizers for sub-base courses',
    ],
    challengesAddressed: [
      'Acute scarcity and high haulage cost of crushed virgin rock aggregates',
      'Catastrophic roadside dumping of tunnel excavation muck and landslide deposits',
      'Severe plastic waste pollution in pristine mountain valleys',
    ],
    applications: ['Low-Carbon Rural Roads (PMGSY)', 'Full-Depth Highway Base Reconstruction', 'Erosion-Control Retaining Matrices'],
    equipment: ['Los Angeles Abrasion Apparatus', 'Aggregate Impact Tester', 'Thermal Gravimetric Analyzer (TGA)'],
  },
  {
    id: '3',
    slug: 'drainage-slope-engineering',
    pillarNumber: '03',
    category: 'Geotechnical & Hydrology',
    title: 'Drainage & Slope Engineering',
    summary: 'Integrated subsurface hydraulic interception, rapid runoff dissipation, and bio-engineered slope reinforcement.',
    description: 'Over 70% of mountain road failures stem from unmanaged surface and subsurface hydrology during intense cloudbursts. HiMPaTH engineers permeable shoulder catchments, sub-surface siphonage networks, and high-tensile geosynthetics.',
    keyTechnologies: [
      'High-capacity porous asphalt and pervious concrete pavement edge drains',
      'Non-woven geotextile-wrapped French drain infiltration networks',
      'Bio-engineered vetiver root-matrix slope anchoring with coir geotextiles',
      'Energy-dissipating stepped chutes and cascade drop structures',
    ],
    challengesAddressed: [
      'Pavement foundation softening due to water ingress and capillary action',
      'Erosive scour of downhill embankment slopes during flash floods',
      'Hydrostatic pore pressure buildup behind retaining walls',
    ],
    applications: ['Vulnerable Landslide Slide Zones', 'High-Rainfall Valley Corridors', 'Steep Mountain Embankment Portals'],
    equipment: ['Hydraulic Permeability Test Rigs', 'Geosynthetic Tensile Tester', 'Large-Scale Direct Shear Box'],
  },
  {
    id: '4',
    slug: 'geospatial-corridor-intelligence',
    pillarNumber: '04',
    category: 'Geomatics & Remote Sensing',
    title: 'GIS & Geospatial Intelligence',
    summary: 'Satellite remote sensing, drone LiDAR digital twins, and multi-criteria corridor hazard modeling for mountain highways.',
    description: 'Traditional ground surveying is dangerous, slow, and constrained in steep Himalayan topography. This pillar integrates spaceborne Synthetic Aperture Radar (InSAR) surface displacement mapping and high-resolution aerial LiDAR.',
    keyTechnologies: [
      'Satellite InSAR millimeter-level slope displacement early-warning systems',
      'High-density Drone LiDAR point cloud 3D terrain reconstruction',
      'Multi-Criteria Decision Analysis (MCDA) for climate-adaptive highway alignment',
      'Hydro-geomorphic catchment modeling for cross-drainage culvert sizing',
    ],
    challengesAddressed: [
      'Inaccessible terrain preventing manual geotechnical inspections',
      'Unforeseen geological faulting intersecting new road alignments',
      'Inadequate hydrological sizing of cross-drainage structures',
    ],
    applications: ['Strategic Border Roads DPR Preparation', 'Real-Time Slope Displacement Monitoring', 'Corridor Asset Inventory GIS Databases'],
    equipment: ['Enterprise ArcGIS & QGIS Spatial Servers', 'Multi-Spectral Aerial Drone Fleet', 'High-Precision RTK-GNSS Units'],
  },
  {
    id: '5',
    slug: 'ai-data-driven-asset-management',
    pillarNumber: '05',
    category: 'Smart Mobility & AI',
    title: 'AI & Data-Driven Management',
    summary: 'Deep learning computer vision for automated road distress auditing, edge inferencing, and predictive maintenance.',
    description: 'Maintaining vast mountain road networks requires moving from reactive emergency repairs to predictive asset management. HiMPaTH deploys edge-AI camera sensors and deep convolutional neural networks.',
    keyTechnologies: [
      'Automated crack segmentation and pothole detection algorithms',
      'Edge-computed Pavement Condition Index (PCI) in real-time survey vehicles',
      'Machine learning life-cycle deterioration prediction models for cold climates',
      'Centralized Highway Asset Management System (HAMS) dashboards',
    ],
    challengesAddressed: [
      'Subjective, slow, and hazardous manual windshield surveys',
      'Delayed maintenance triggering catastrophic full-depth pavement failures',
      'Inefficient allocation of limited regional highway repair budgets',
    ],
    applications: ['State Highway Routine Inspection Fleets', 'PMGSY Rural Network Quality Auditing', 'Tunnel Surface Distress Surveillance'],
    equipment: ['NVIDIA GPU Deep Learning Clusters', 'Industrial High-Speed Line-Scan Cameras', 'Mobile Edge AI Processing Units'],
  },
  {
    id: '6',
    slug: 'policy-standards-codal-integration',
    pillarNumber: '06',
    category: 'Governance & Codes',
    title: 'Policy & Standards Integration',
    summary: 'Transforming empirical laboratory discoveries into Indian Roads Congress (IRC) specifications and climate-resilient DPR frameworks.',
    description: 'Pioneering scientific materials only achieve true impact when codified into national standards. HiMPaTH works closely with the Ministry of Road Transport and Highways (MoRTH) and the Indian Roads Congress (IRC).',
    keyTechnologies: [
      'Drafting special technical publications (IRC:SP) for mountain pavement design',
      'Carbon-accounting metric frameworks for Green Highway Detailed Project Reports (DPRs)',
      'Standardized Quality Control / Quality Assurance (QC/QA) protocols for recycled mixes',
      'Executive capacity-building modules for BRO and State PWD engineers',
    ],
    challengesAddressed: [
      'Outdated plain-terrain codal assumptions failing in extreme mountain climates',
      'Contractual barriers preventing the commercial bidding of sustainable recycled materials',
      'Knowledge gaps among regional field engineers regarding new green technologies',
    ],
    applications: ['MoRTH 5th Revision Specification Updates', 'BRO Special Engineering Guidelines', 'National Green Highway Tendering Frameworks'],
    equipment: ['Comprehensive Codal Library & IRC Standards Database', 'Standardized Materials Testing Reference Proving Grounds'],
  },
];

export const pipelineStages: PipelineStage[] = [
  {
    step: '01',
    title: 'Identify & Benchmark',
    subtitle: 'Himalayan Problem Identification',
    summary: 'Systematically cataloging regional road failure modes, extreme micro-climates, geological fault lines, and local waste streams.',
    activities: [
      'Field reconnaissance in Himachal Pradesh, Ladakh, and Uttarakhand',
      'High-resolution satellite mapping of chronic slide corridors',
      'Collection and characterization of regional aggregate, RAP, and muck samples',
    ],
    keyOutputs: ['Himalayan Transportation Vulnerability Atlas', 'Baseline Material Defect Taxonomy'],
    collaborators: ['Border Roads Organisation (BRO)', 'State PWDs'],
  },
  {
    step: '02',
    title: 'Formulate & Innovate',
    subtitle: 'Laboratory Material Design',
    summary: 'Developing sustainable binder matrices, zero-slump roller-compacted concrete, and porous asphalt formulations.',
    activities: [
      'Dynamic rheological optimization of biochar VG-10 binders down to -30°C',
      'Microstructural interfacial transition zone (ITZ) characterization',
      '300+ accelerated laboratory freeze-thaw cycles',
    ],
    keyOutputs: ['Proprietary Mix Formulations', 'Material Patent Applications'],
    collaborators: ['IIT Ropar Central Research Facilities', 'DST'],
  },
  {
    step: '03',
    title: 'Simulate & Validate',
    subtitle: 'Dynamic Performance Testing',
    summary: 'Subjecting prototype pavement slabs and subgrades to high-cycle dynamic wheel tracking and heavy axle fatigue simulations.',
    activities: [
      'Submerged wheel tracking rut tests simulating monsoon deluge conditions',
      'Four-point dynamic flexural fatigue cycling',
      'Repeated Load Permanent Deformation (RLPD) triaxial testing',
    ],
    keyOutputs: ['Dynamic Modulus Master Curves', 'Failure Envelope Benchmarks'],
    collaborators: ['National Highway Agencies', 'CRRI'],
  },
  {
    step: '04',
    title: 'Pilot & Demonstrate',
    subtitle: 'Full-Scale Field Test Tracks',
    summary: 'Translating validated laboratory designs into instrumented 150m+ pilot road sections on active mountain highways.',
    activities: [
      'Construction of instrumented pilot tracks with embedded strain gauges',
      'Real-time automated crack detection via edge-AI survey vehicles',
      'Seasonal hydrological infiltration and frost heave monitoring',
    ],
    keyOutputs: ['Instrumented Test Track Performance Data', 'Pilot Verification Monographs'],
    collaborators: ['BRO Executive Engineers', 'NHIDCL Project Divisions'],
  },
  {
    step: '05',
    title: 'Codify & Deploy',
    subtitle: 'Policy, Codes & National Rollout',
    summary: 'Publishing evidence-based specifications in IRC guidelines and standardizing climate-resilient DPR frameworks.',
    activities: [
      'Drafting technical recommendations for Indian Roads Congress (IRC:37 / IRC:SP:53)',
      'Executive masterclasses and training workshops for over 500+ highway engineers',
      'Integrating recycled material line-items into national EPC public tenders',
    ],
    keyOutputs: ['IRC Codal Revision Submissions', 'Certified Highway Engineering Masterclasses'],
    collaborators: ['MoRTH', 'Indian Roads Congress (IRC)', 'NITI Aayog'],
  },
];

export const ongoingResearchData: OngoingResearchItem[] = [
  {
    id: '1',
    slug: 'rap-viscosity-pervious-concrete',
    title: 'Influence of Aged Binder Viscosity in RAP on Mechanical and Hydrological Behaviour of Pervious Concrete',
    category: 'Pavement Materials & Hydrology',
    tag: 'ANRF Funded',
    summary: 'Investigating interfacial hydration and pore retention in 100% recycled asphalt pervious concrete road shoulders.',
    description: 'This study investigates the complex chemical and mechanical interactions between aged bituminous films coating Reclaimed Asphalt Pavement (RAP) aggregates and fresh Portland cement matrix in pervious concrete applications.',
    labFacility: 'Civil Engineering Materials Lab, IIT Ropar',
    keyInnovations: [
      'Microstructural characterization of aged mastic-cement paste interface',
      'Optimized aggregate grading yielding >20% void ratio with >22 MPa compressive strength',
      'Sedimentation filtration model for high-altitude mountain runoff silt',
    ],
    targetImpact: 'Provides a zero-virgin-aggregate permeable shoulder design that prevents highway hydroplaning and filters runoff.',
    status: 'Active · Experimental Phase II',
  },
  {
    id: '2',
    slug: 'freeze-thaw-resilient-rccp',
    title: 'Freeze-Thaw Resilient Roller-Compacted Concrete Pavements Modified with Agro-Waste Biochar',
    category: 'Sustainable Materials',
    tag: 'ISIRD Grant',
    summary: 'Developing carbon-sequestering, zero-slump RCCP mixtures engineered to withstand severe frost-heaving.',
    description: 'In sub-zero Himalayan altitudes, cyclic freeze-thaw actions cause rapid spalling, scaling, and structural degradation of standard concrete pavements. This project synthesizes agricultural straw biochar into zero-slump RCCP.',
    labFacility: 'Pavement Performance Lab, IIT Ropar',
    keyInnovations: [
      'Biochar porous micro-structure acting as internal expansion reservoirs',
      'Up to 15% reduction in Portland cement content via pozzolanic micro-silica action',
      '300+ cycle freeze-thaw durability with zero mass loss',
    ],
    targetImpact: 'Enables rapid, heavy-duty paving for strategic high-altitude corridors with extreme freeze-thaw durability.',
    status: 'Active · Prototype Testing',
  },
];

export const grantProposalsData: GrantProposal[] = [
  {
    id: '1',
    agency: 'DST',
    agencyFull: 'Department of Science & Technology, Government of India',
    scheme: 'Advanced Manufacturing & Carbon Neutrality Technologies',
    title: 'Development of Carbon-Negative Concrete Pavement: Optimizing Biochar Dosage and Assessing CO2 Sequestration',
    status: 'Submitted · Under Review',
    category: 'Carbon Sequestration & Materials',
    grantType: 'National Competitive Grant',
    summary: 'Pioneering carbon-negative pavement infrastructure by incorporating high-surface-area agricultural biochar into highway concrete.',
    objectives: [
      'Establish optimal biochar pyrolysis parameters and dosage ratios (2–8%) in road concrete',
      'Quantify net CO2 sequestration using Life Cycle Assessment (LCA) from cradle to grave',
      'Validate flexural fatigue and freeze-thaw endurance under sub-zero thermal cycling',
      'Construct a 100-meter field demonstrator at IIT Ropar Transport Proving Grounds',
    ],
    expectedImpact: 'Paves the way for Net-Zero highway corridors that actively capture and permanently mineralize atmospheric carbon.',
  },
  {
    id: '2',
    agency: 'BRO',
    agencyFull: 'Border Roads Organisation, Ministry of Defence, Government of India',
    scheme: 'Strategic Border Highway R&D Mission',
    title: 'Green Alternative (Biochar-Modified VG-10) for Flexible Pavement in High-Altitude Regions',
    status: 'Submitted · Under Review',
    category: 'Strategic Defense Infrastructure',
    grantType: 'Strategic Defence Grant',
    summary: 'Developing low-temperature resilient, biochar-modified asphalt binders tailored for strategic border roads in Ladakh and Sikkim.',
    objectives: [
      'Formulate biochar-modified VG-10 bituminous binders with PG 58-34 performance grading',
      'Suppress low-temperature thermal cracking down to -30°C in high-altitude passes',
      'Conduct field validation on remote border highway sectors in Himachal Pradesh and Ladakh',
      'Draft standardized specifications for BRO executive tenders',
    ],
    expectedImpact: 'Significantly extends pavement operational life on critical defense supply corridors.',
  },
];

export const researchFacilitiesData: LabFacility[] = [
  {
    id: 'fac-01',
    facilityNumber: '01',
    name: 'Materials Characterization',
    subTitle: 'Aggregate, Soil & Subgrade Testing',
    category: 'Aggregate & Subgrade Materials',
    description: 'Comprehensive testing of aggregates and subgrade materials for pavement design, quality assessment, and performance evaluation.',
    majorEquipment: [
      'Specific Gravity Apparatus',
      'Aggregate Impact Tester Apparatus',
      'Los Angeles Abrasion Tester Apparatus',
      'CBR Apparatus',
    ],
    viewMoreEquipment: [
      'Sieve Analysis Apparatus',
      'Sieve Analysis Shaker Apparatus',
      'Shape Index Tester Apparatus',
      'Jaw Crusher Apparatus',
      'Heating Plate Apparatus',
      'Hot Air Oven Apparatus',
      'Water Bath Apparatus',
    ],
    testingCapabilities: [
      'Aggregate specific gravity and density assessment',
      'Aggregate impact resistance evaluation',
      'Los Angeles abrasion and wear assessment',
      'California Bearing Ratio (CBR) evaluation of subgrade materials',
      'Particle-size distribution and gradation analysis',
      'Aggregate shape and dimensional characterization',
    ],
    complianceStandards: [
      'IS 2386 (Part I): 1963',
      'IS 2386 (Part III): 1963',
      'IS 2386 (Part IV): 1963',
      'IS 2720 (Part 16): 1987',
    ],
    location: 'Civil Engineering Materials Lab, IIT Ropar',
  },
  {
    id: 'fac-02',
    facilityNumber: '02',
    name: 'Bitumen & Binder Research',
    subTitle: 'Bitumen Characterization & Binder Performance',
    category: 'Binder Science & Rheology',
    description: 'Facilities for physical, thermal and aging characterization of bituminous binders, supporting binder evaluation and the development of durable pavement materials.',
    majorEquipment: [
      'Rolling Thin Film Oven (RTFO)',
      'Pressure Aging Vessel (PAV)',
      'Brookfield viscometer',
      'GF Viscometer',
    ],
    viewMoreEquipment: [
      'Bitumen Centrifuge Extractor',
      'Flash & Fire Point Apparatus',
      'Penetration Testing Apparatus',
      'Softening Point Apparatus',
      'Ductility Testing Apparatus',
      'Water Bath',
      'Heating Plate',
      'Hot Air Oven',
    ],
    testingCapabilities: [
      'High-temperature short-term aging',
      'Long-term oxidative aging',
      'Rotational viscosity measurement',
      'Conventional binder characterization',
      'Penetration, softening point and ductility assessment',
      'Binder recovery from asphalt mixtures',
    ],
    complianceStandards: [
      'ASTM D2872',
      'ASTM D6521',
      'ASTM D4402',
      'IS 1206 (Part 2):1978',
      'IS 1203:1978',
      'IS 1205:1978',
      'IS 1208:1978',
      'IS 73:2013',
    ],
    location: 'Bitumen & Binder Rheology Wing, IIT Ropar',
  },
  {
    id: 'fac-03',
    facilityNumber: '03',
    name: 'Asphalt Mixture Research',
    subTitle: 'Asphalt Mix Design & Performance Evaluation',
    category: 'Mix Design & Surface Characterization',
    description: 'Facilities for asphalt mixture preparation, compaction, volumetric assessment, stability evaluation, and surface performance characterization.',
    majorEquipment: [
      'Asphalt Mixing Apparatus',
      'Automatic Marshall Mix Compactor',
      'Marshall Stability Apparatus',
      'Asphalt Mixture Density Meter',
    ],
    viewMoreEquipment: [
      'Thin Film Oven',
      'Film Stripping Tester',
      'British Pendulum Friction Tester',
      'Sand Patch Tester',
      'Modified Roughness Merlin Apparatus',
    ],
    testingCapabilities: [
      'Asphalt mixture preparation and mixing',
      'Marshall mix compaction and stability evaluation',
      'Asphalt mixture density assessment',
      'Film stripping evaluation',
      'Surface friction assessment',
      'Surface texture and pavement roughness evaluation',
    ],
    complianceStandards: [
      'ASTM D6926',
      'ASTM D6927',
      'ASTM D2041',
      'ASTM D2726',
      'ASTM D3625',
      'ASTM E303',
      'ASTM E965',
    ],
    location: 'Asphalt & Pavement Mix Lab, IIT Ropar',
  },
  {
    id: 'fac-04',
    facilityNumber: '04',
    name: 'Pavement Performance',
    subTitle: 'Pavement Mechanics & Structural Testing',
    category: 'Structural Mechanics & Durability',
    description: 'Facilities for evaluating the strength, durability, and structural performance of pavement and concrete systems under controlled laboratory conditions.',
    majorEquipment: [
      'Compression Testing Machine',
      'Flexural Testing Machine',
      'Freeze-Thaw Chamber',
      'Pavement Core Drilling Machine',
    ],
    viewMoreEquipment: [
      'Accelerated Curing Tank',
      'Tile Abrasion Apparatus',
    ],
    testingCapabilities: [
      'Compressive strength evaluation of concrete and pavement materials',
      'Flexural strength evaluation',
      'Freeze-thaw durability assessment',
      'Pavement core sampling and extraction',
      'Curing and strength development assessment',
      'Abrasion resistance evaluation',
    ],
    complianceStandards: [
      'IS 516 (Part 1/Sec 1):2021',
      'IS 516 (Part 2/Sec 1):2018',
      'ASTM C666/C666M',
      'IS 1199 (Part 5):2018',
    ],
    location: 'Pavement Performance & Durability Lab, IIT Ropar',
  },
];
