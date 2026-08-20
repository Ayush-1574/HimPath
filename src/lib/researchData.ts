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
  name: string;
  category: string;
  description: string;
  keyEquipment: string[];
  testStandards: string[];
  capabilities: string[];
  location: string;
}

export const researchPillars: ResearchPillar[] = [
  {
    id: '1',
    slug: 'climate-resilient-pavements',
    pillarNumber: '01',
    category: 'Pavement Systems',
    title: 'Climate-Resilient Pavements',
    summary: 'Engineered pavement systems specifically designed for extreme mountain hydrology, freeze-thaw cycles, and heavy axle loads.',
    description: 'Pavement infrastructure in the Indian Himalayan Region faces unprecedented thermal swings (-20°C to +35°C), torrential monsoon runoff, and heavy strategic transport. This pillar focuses on Full-Depth Reclamation (FDR), high-strength Roller-Compacted Concrete Pavements (RCCP), and open-graded porous asphalt surfaces that prevent hydroplaning and resist cyclic freeze-thaw damage.',
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
    description: 'Mining virgin aggregates in fragile mountain ecosystems causes landslides, deforestation, and high transport costs. This research pillar develops scientific recycling protocols for Reclaimed Asphalt Pavement (RAP), landslide debris/muck, agro-waste biochar, and post-consumer plastic waste to engineer high-performance, carbon-conscious road materials.',
    keyTechnologies: [
      'High-RAP content hot and warm mix asphalt technologies',
      'Landslide debris and hill-cut muck aggregate grading and chemical stabilization',
      'Biomass-derived biochar bitumen modification for CO2 sequestration',
      'Upcycled shredded plastic composite stabilizers for sub-base courses',
    ],
    challengesAddressed: [
      'Ecological degradation from quarrying in Himalayan valleys',
      'Accumulation of hazardous plastic waste and unutilized mountain landslide muck',
      'High carbon footprint of long-distance bitumen and aggregate transport',
    ],
    applications: ['Circular Mountain Highways', 'Low-Carbon Rural Road Networks (PMGSY)', 'Tunnel Muck Repurposing Projects'],
    equipment: ['Binder Extraction & Recovery Unit', 'Rotational Viscometer', 'Atomic Absorption Spectrometer'],
  },
  {
    id: '3',
    slug: 'drainage-slope-engineering',
    pillarNumber: '03',
    category: 'Geotechnical Resilience',
    title: 'Drainage & Slope Engineering',
    summary: 'Integrated storm-water dissipation, geosynthetics reinforcement, and bioengineered slope stabilization.',
    description: 'Uncontrolled surface runoff and high pore-water pressures are the primary triggers of mountain slope collapses and highway washouts. HiMPaTH pioneers integrated water-shedding designs, permeable concrete infiltration layers, high-tensile geosynthetics, and root-reinforced bioengineering solutions to ensure stable embankments.',
    keyTechnologies: [
      'High-velocity cascaded mountain runoff energy dissipators',
      'Geogrids, geocells, and geotextile slope reinforcement systems',
      'Sub-surface horizontal siphon drainage and freeze-thaw pressure relief',
      'Deep-rooting native vegetation bioengineering matrix',
    ],
    challengesAddressed: [
      'Catastrophic flash floods, cloudburst surges, and road cutoffs',
      'Chronic slope instability and mass wasting along steep cuttings',
      'Pavement subgrade saturation and premature structural failure',
    ],
    applications: ['Vulnerable Landslide Corridors', 'High-Gradient Mountain Slopes', 'River-Bordering Road Embankments'],
    equipment: ['Large-Scale Direct Shear Apparatus', 'Hydraulic Infiltration Simulator', 'Triaxial Testing System'],
  },
  {
    id: '4',
    slug: 'gis-geospatial-intelligence',
    pillarNumber: '04',
    category: 'Geomatics',
    title: 'GIS & Geospatial Intelligence',
    summary: 'Satellite remote sensing, LiDAR terrain digital twins, and multi-criteria risk mitigation corridor planning.',
    description: 'Utilizing state-of-the-art satellite earth observation, drone photogrammetry, and LiDAR digital elevation models to create 3D digital twins of Himalayan transport corridors. Enables predictive multi-hazard risk assessment and optimal alignment selection.',
    keyTechnologies: [
      'LiDAR and drone-based 3D terrain digital twin generation',
      'Multi-hazard vulnerability and landslide susceptibility mapping',
      'Satellite InSAR ground deformation monitoring over highway alignments',
      'Multi-criteria GIS corridor optimization algorithms',
    ],
    challengesAddressed: [
      'Uncertain subsurface terrain conditions and blind-spot landslide zones',
      'Sub-optimal route planning causing frequent corridor blockages',
      'Lack of real-time geospatial deformation tracking on critical assets',
    ],
    applications: ['Greenfield Highway Alignment Planning', 'Disaster Early Warning Systems', 'Corridor Asset Inventory'],
    equipment: ['High-Performance GPU Cluster', 'Enterprise GIS Server', 'Multi-Spectral Drone Sensor Suite'],
  },
  {
    id: '5',
    slug: 'ai-data-driven-infrastructure',
    pillarNumber: '05',
    category: 'Smart Asset Management',
    title: 'AI & Data-Driven Infrastructure',
    summary: 'Deep learning computer vision for automated road distress recognition and predictive lifecycle asset management.',
    description: 'Transforming highway condition monitoring from manual, subjective inspections into continuous, high-precision automated systems. Deep neural networks analyze camera and sensor feeds to detect cracks, potholes, rutting, and slope distress in real time.',
    keyTechnologies: [
      'Computer vision algorithms for automated distress detection & classification',
      'Physics-informed machine learning for pavement life prediction',
      'Automated maintenance prioritization and budget optimization engines',
      'IoT edge sensing for structural health monitoring of bridges and retaining walls',
    ],
    challengesAddressed: [
      'Dangerous, labor-intensive manual inspections in hazardous mountain terrain',
      'Delayed maintenance leading to catastrophic structural road failures',
      'Inefficient allocation of annual road rehabilitation budgets',
    ],
    applications: ['Automated Highway Inspection Vehicles', 'Smart Road Maintenance Portals', 'Bridge & Tunnel Health Monitoring'],
    equipment: ['Edge AI Processing Units', 'High-Speed Line-Scan Cameras', 'Accelerated GPU Server'],
  },
  {
    id: '6',
    slug: 'policy-standards-dpr',
    pillarNumber: '06',
    category: 'National Standards',
    title: 'Policy, Standards & DPR Frameworks',
    summary: 'Evidence-based codal revisions, Indian Roads Congress (IRC) integration, and resilient DPR frameworks.',
    description: 'Bridging the critical gap between academic research breakthroughs and practical engineering adoption by drafting standard specifications, contributing to IRC special publications, and formulating climate-resilient Detailed Project Report (DPR) guidelines.',
    keyTechnologies: [
      'Climate-Resilient Detailed Project Report (DPR) Preparation Frameworks',
      'Drafting technical revisions for Indian Roads Congress (IRC) codes',
      'Life Cycle Cost Analysis (LCCA) and Carbon Accounting guidelines',
      'Standardized capacity-building modules for highway engineers',
    ],
    challengesAddressed: [
      'Reliance on plain-terrain road codes that fail in Himalayan conditions',
      'Lack of formal carbon and climate resilience scoring in DPR evaluations',
      'Slow technology transfer from laboratory testing to field tender contracts',
    ],
    applications: ['National Highway DPR Standards', 'BRO & MoRTH Special Specifications', 'State PWD Road Manuals'],
    equipment: ['Policy Simulation Software', 'LCCA Life-Cycle Modeling Suites', 'Open-Access Code Repositories'],
  },
];

export const pipelineStages: PipelineStage[] = [
  {
    step: '01',
    title: 'Understand & Characterize',
    subtitle: 'IDENTIFY',
    summary: 'Comprehensive multi-hazard characterization of Himalayan terrain geometry, extreme climate patterns, traffic loadings, and structural failure mechanisms.',
    activities: [
      'In-situ field distress audits across Himachal Pradesh, Ladakh, and Uttarakhand',
      'Climate data profiling: precipitation intensity, freeze-thaw cycles, solar radiation',
      'Collection and geotechnical grading of regional waste materials and landslide muck',
    ],
    keyOutputs: ['Himalayan Distress Atlas', 'Geotechnical Baseline Reports', 'Regional Material Inventory'],
    collaborators: ['State PWDs', 'Border Roads Organisation (BRO)', 'Academic Partners'],
  },
  {
    step: '02',
    title: 'Develop & Innovate',
    subtitle: 'INNOVATE',
    summary: 'Formulating sustainable binder blends, recycling matrices, fiber reinforcements, and computational structural models in IIT Ropar laboratories.',
    activities: [
      'Microstructural binder rheology and polymer-biochar modification',
      'Mix design optimization for pervious concrete and roller-compacted concrete',
      'Finite element modeling of multi-layered pavement systems under thermal shock',
    ],
    keyOutputs: ['Patented Mix Formulations', 'Optimal Stabilization Dosage Charts', 'Predictive Structural Models'],
    collaborators: ['IIT Ropar Research Fellows', 'Material Manufacturers', 'Research Sponsors'],
  },
  {
    step: '03',
    title: 'Evaluate & Validate',
    subtitle: 'VALIDATE',
    summary: 'Accelerated laboratory mechanical testing, environmental chamber simulations, and dynamic loading to verify durability.',
    activities: [
      'Repeated Load Permanent Deformation (RLPD) and 4-point bending fatigue tests',
      'Accelerated 300+ cycle freeze-thaw chamber testing and Cantabro abrasion loss',
      'Hydraulic conductivity and long-term clogging simulations under storm runoff',
    ],
    keyOutputs: ['Durability Benchmark Reports', 'Fatigue Endurance Curves', 'Permeability Retention Data'],
    collaborators: ['National Testing Laboratories', 'DST / NMHS Review Committees'],
  },
  {
    step: '04',
    title: 'Demonstrate in Field',
    subtitle: 'IMPLEMENT',
    summary: 'Constructing full-scale pilot test tracks and instrumented highway demonstration sections on active mountain road corridors.',
    activities: [
      'Construction of pilot road sections with local contractors and highway agencies',
      'Installation of subsurface IoT moisture, strain, and temperature sensor arrays',
      'Periodic Falling Weight Deflectometer (FWD) and laser profilometer monitoring',
    ],
    keyOutputs: ['Instrumented Pilot Test Tracks', 'Field Performance Monitored Datasets', 'Constructability Handbooks'],
    collaborators: ['BRO Project Deepak / Sampark', 'NHIDCL', 'Commercial Paving Contractors'],
  },
  {
    step: '05',
    title: 'Transform & Standardize',
    subtitle: 'IMPACT',
    summary: 'Translating validated technologies into national codes, MoRTH specifications, and widespread commercial engineering practice.',
    activities: [
      'Drafting proposed revisions for Indian Roads Congress (IRC) standards',
      'Conducting executive workshops and field training for practicing highway engineers',
      'Publishing open-access design manuals and life-cycle carbon calculators',
    ],
    keyOutputs: ['IRC Codal Guidelines', 'MoRTH Specifications', 'Engineer Training Modules'],
    collaborators: ['Indian Roads Congress (IRC)', 'Ministry of Road Transport & Highways (MoRTH)', 'Industry Stakeholders'],
  },
];

export const ongoingResearchData: OngoingResearchItem[] = [
  {
    id: '1',
    slug: 'porous-asphalt',
    title: 'Porous Asphalt Surface Systems',
    category: 'Hydrology & High Friction',
    tag: 'Active Experimental Study',
    summary: 'Crumb-rubber and polymer modified open-graded friction courses engineered for rapid mountain storm-water drainage and high-skid resistance.',
    description: 'High-velocity monsoon runoff creates hazardous aquaplaning conditions on steep Himalayan highway gradients. This project optimizes open-graded porous asphalt with 18–22% interconnected air voids and SBS/crumb-rubber polymer modification, achieving high hydraulic conductivity while preventing moisture-induced raveling and stone loss under heavy braking.',
    labFacility: 'Binder Rheology & Pavement Mechanics Lab',
    keyInnovations: [
      'Optimized crumb-rubber polymer binder with high recovery elasticity (>80%)',
      'Infiltration capacity exceeding 0.3 cm/s under high silt-load conditions',
      'Cantabro abrasion loss restricted to under 12% after moisture conditioning',
    ],
    targetImpact: 'Zero aquaplaning accidents on steep hairpin turns and sustainable lateral runoff shedding.',
    status: 'Laboratory Validated · Field Trial Prep',
  },
  {
    id: '2',
    slug: 'pervious-concrete',
    title: 'Pervious Concrete Pavement Systems',
    category: 'Permeable Concrete',
    tag: 'Active Experimental Study',
    summary: 'Engineered permeable concrete supporting roadway shoulder drainage, groundwater recharge, and freeze-thaw resilience.',
    description: 'Investigating high-porosity pervious concrete mixtures utilizing recycled aggregate fractions and silica fume admixtures. Focuses on balancing compressive strength (>20 MPa) with high permeability (>0.25 cm/s) and resistance to freeze-thaw deterioration in high-altitude cold environments.',
    labFacility: 'Hydraulics & Permeability Lab',
    keyInnovations: [
      'Nano-silica enriched paste matrix for high bond strength at aggregate contact points',
      'Interconnected pore network designed to avoid deep particulate clogging',
      'Survives 300+ freeze-thaw cycles with residual relative dynamic modulus > 85%',
    ],
    targetImpact: 'Eliminates open drain erosion and recharges fragile mountain valley aquifers.',
    status: 'Active Experimental Testing',
  },
  {
    id: '3',
    slug: 'rap-based-rccp',
    title: 'RAP-Integrated Roller Compacted Concrete (RCCP)',
    category: 'Heavy Structural Pavements',
    tag: 'Active Experimental Study',
    summary: 'Incorporating high percentages of Reclaimed Asphalt Pavement (RAP) into Roller-Compacted Concrete Pavements.',
    description: 'Roller-Compacted Concrete Pavements provide zero-slump, fast-curing heavy-duty pavements. This project investigates substituting up to 50% virgin coarse and fine aggregates with milled RAP, studying the impact of aged binder film on cement hydration, flexural fatigue life, and drying shrinkage.',
    labFacility: 'Pavement Mechanics & Durability Lab',
    keyInnovations: [
      'Surface pre-treatment protocols for RAP to enhance interfacial transition zone (ITZ)',
      'High flexural strength (>4.5 MPa) achieved with 40% virgin aggregate replacement',
      'Curing and re-opening to heavy vehicular traffic within 48 hours',
    ],
    targetImpact: 'Durable, zero-rutting heavy freight corridors with up to 35% cost reduction.',
    status: 'Laboratory Optimization Phase',
  },
  {
    id: '4',
    slug: 'full-depth-reclamation',
    title: 'Full-Depth Reclamation (FDR)',
    category: 'In-Situ Rehabilitation',
    tag: 'Active Field Research',
    summary: 'Pulverizing damaged pavement sections in-situ and stabilizing with cementitious and foamed bitumen blends.',
    description: 'Full-Depth Reclamation reconstructs failed asphalt roads by pulverizing the worn surface and underlying granular base, mixing them with stabilizing agents, and recompacting into an upgraded structural base without hauling away old materials or quarrying new rock.',
    labFacility: 'Pavement Materials & Geotechnical Lab',
    keyInnovations: [
      'Cold in-situ stabilization mix design tailored for mountain subgrades',
      '100% recycling of existing asphalt and base layers with zero waste hauling',
      'Structural layer coefficient equivalent to new crushed stone base',
    ],
    targetImpact: 'Cuts road rehabilitation carbon emissions by 60% and slashes construction time by half.',
    status: 'Guidelines Formulation & Pilot Design',
  },
  {
    id: '5',
    slug: 'circular-aggregates',
    title: 'Circular Mountain Aggregates (Landslide & Plastic Waste)',
    category: 'Waste Valorization',
    tag: 'Active Field Research',
    summary: 'Transforming landslide debris, tunnel muck, and municipal plastic waste into high-grade pavement layers.',
    description: 'Hundreds of thousands of tonnes of landslide muck and excavation debris block Himalayan highways annually. This project establishes grading, chemical stabilization, and plastic-coating protocols to convert this waste into compliant sub-base and base courses.',
    labFacility: 'Materials Characterization Lab',
    keyInnovations: [
      'Chemical lime-slag stabilization of high-fines landslide debris',
      'Dry-process incorporation of shredded polyolefin plastic waste',
      'California Bearing Ratio (CBR) improvement from 8% to > 80%',
    ],
    targetImpact: 'Conserves pristine mountain riverbeds and resolves municipal plastic disposal crises.',
    status: 'Active NMHS Sponsored Study',
  },
  {
    id: '6',
    slug: 'carbon-negative-biochar-concrete',
    title: 'Carbon-Negative Biochar Concrete Pavements',
    category: 'Decarbonization & Net-Zero',
    tag: 'Active Experimental Study',
    summary: 'Integrating biomass-derived biochar into concrete matrices to capture and permanently sequester CO2.',
    description: 'Investigates the incorporation of engineered agro-waste biochar as a carbon-sequestering micro-filler and internal curing agent in concrete pavements. Biochar improves fracture energy, delays shrinkage cracking, and permanently locks atmospheric carbon into highway infrastructure.',
    labFacility: 'Advanced Materials & Chemistry Lab',
    keyInnovations: [
      'Permanent sequestration of up to 50 kg CO2 per cubic meter of pavement concrete',
      'Internal curing effect mitigating autogenous shrinkage in low water-cement mixes',
      'Enhanced crack self-healing and reduced thermal conductivity in sub-zero weather',
    ],
    targetImpact: 'Paving the way towards net-zero and carbon-negative mountain transportation networks.',
    status: 'Experimental Formulation & LCA',
  },
];

export const grantProposalsData: GrantProposal[] = [
  {
    id: '1',
    agency: 'DST',
    agencyFull: 'Department of Science and Technology, Government of India',
    scheme: 'National Mission on Strategic Knowledge for Climate Change',
    title: 'Development of Carbon-Negative Concrete Pavement: Optimizing Biochar Dosage and Assessing CO2 Sequestration Potential',
    status: 'Submitted · Under Review',
    category: 'Decarbonization & Climate Resilience',
    grantType: 'National Competitive Research Grant',
    summary: 'A 3-year multi-stage experimental and field validation project focused on developing carbon-negative rigid pavement mixtures incorporating optimized agricultural biochar dosages.',
    objectives: [
      'Synthesize and characterize agricultural residue biochar for optimal cementitious compatibility',
      'Quantify permanent CO2 sequestration potential using thermogravimetric and carbon analyzers',
      'Evaluate mechanical fatigue, freeze-thaw durability, and crack self-healing kinetics',
      'Construct a 200m instrumented demonstration test track at IIT Ropar',
    ],
    expectedImpact: 'First standardized carbon-negative pavement specification in India, enabling scalable CO2 reduction in road construction.',
  },
  {
    id: '2',
    agency: 'BRO',
    agencyFull: 'Border Roads Organisation, Ministry of Defence, Government of India',
    scheme: 'Border Infrastructure Technology Enhancement Scheme',
    title: 'Green Alternative (Biochar-Modified VG-10) for Flexible Pavement in High-Altitude Regions',
    status: 'Submitted · Under Review',
    category: 'High-Altitude Infrastructure',
    grantType: 'Defence & Strategic Infrastructure Grant',
    summary: 'Formulating low-temperature ductile bituminous binders modified with agro-waste biochar for strategic roads across Ladakh, Sikkim, and Arunachal Pradesh.',
    objectives: [
      'Formulate biochar-modified VG-10 binder blends with low-temperature cracking resistance down to -30°C',
      'Evaluate short-term and long-term aging kinetics under high UV radiation exposure',
      'Assess moisture susceptibility and rutting resistance under heavy strategic multi-axle convoy loading',
      'Develop field laying guidelines for high-altitude sub-zero ambient conditions',
    ],
    expectedImpact: 'Enhanced lifecycle of strategic border roads, reducing seasonal maintenance closures and military supply line disruptions.',
  },
  {
    id: '3',
    agency: 'NAPA / FAA',
    agencyFull: 'National Asphalt Pavement Association & Federal Aviation Administration (AAPTP), USA',
    scheme: 'Airfield Asphalt Pavement Technology Program',
    title: 'Feasibility Study of Using Porous Asphalt Pavements for Airfields (Phase I)',
    status: 'International Research Grant',
    category: 'Aviation & High-Stress Pavements',
    grantType: 'International Bilateral Grant',
    summary: 'Comprehensive global review, hydraulic conductivity modeling, and material specification criteria for high-stress permeable airfield runway and taxiway pavements.',
    objectives: [
      'State-of-the-art international synthesis on porous asphalt airfield performance and failure modes',
      'Hydrodynamic modeling of rapid water evacuation under heavy aircraft tire hydroplaning velocities',
      'Develop high-shear modified binder and aggregate skeletal grading criteria',
      'Draft Phase II full-scale accelerated pavement testing (APT) protocol',
    ],
    expectedImpact: 'International guidelines for permeable runway surfaces that virtually eliminate standing water hazards during heavy rain.',
  },
  {
    id: '4',
    agency: 'NTTM',
    agencyFull: 'National Technical Textiles Mission, Ministry of Textiles, Government of India',
    scheme: 'Specialty Geo-Textiles & Technical Fibres in Infrastructure',
    title: 'Performance Study of Fibre-Reinforced Roller Compacted Concrete Pavement',
    status: 'Submitted · Under Review',
    category: 'Technical Textiles & Advanced Materials',
    grantType: 'National Technology Mission Grant',
    summary: 'Integrating high-tenacity synthetic polypropylene and basalt technical textile fibers into roller-compacted concrete to suppress drying shrinkage and reflective cracking.',
    objectives: [
      'Optimize fiber geometry, aspect ratio, and volumetric fraction in zero-slump RCC mixtures',
      'Evaluate post-crack residual flexural toughness and energy absorption capacity',
      'Assess joint spacing extension and elimination of steel dowel bars in mountain RCC pavements',
      'Draft standardized technical textile specifications for RCCP road tenders',
    ],
    expectedImpact: '30% longer joint spacing, lower maintenance costs, and domestic utilization of Indian technical textiles.',
  },
];

export const researchFacilitiesData: LabFacility[] = [
  {
    id: '1',
    name: 'Bitumen & Binder Rheology Laboratory',
    category: 'Materials Science',
    description: 'Equipped with precision testing instruments to characterize virgin, modified, and aged bituminous binders across wide operational temperatures (-36°C to +85°C).',
    keyEquipment: [
      'Dynamic Shear Rheometer (DSR) with temperature chamber',
      'Bending Beam Rheometer (BBR) for low-temperature creep stiffness',
      'Rolling Thin Film Oven (RTFO) & Pressure Aging Vessel (PAV)',
      'Rotational Brookfield Viscometer with thermosel system',
      'Automatic Ductility and Elastic Recovery Testing Machine',
    ],
    testStandards: ['ASTM D7175', 'AASHTO T315', 'IRC:SP:53', 'IS 73:2018', 'IS 1201-1220'],
    capabilities: [
      'Superpave Performance Grading (PG)',
      'Multiple Stress Creep Recovery (MSCR) rutting parameter',
      'Linear Amplitude Sweep (LAS) fatigue testing',
      'Long-term oxidative aging simulation',
    ],
    location: 'Ground Floor, Civil Engineering Block, IIT Ropar',
  },
  {
    id: '2',
    name: 'Pavement Mechanics & Heavy Structural Testing Lab',
    category: 'Structural Mechanics',
    description: 'State-of-the-art servo-hydraulic dynamic loading machines to assess permanent deformation, fatigue endurance, and dynamic modulus of asphalt and concrete.',
    keyEquipment: [
      'Universal Testing Machine (UTM-25 kN Dynamic Servo-Hydraulic)',
      'Wheel Tracking Rutting Apparatus with water bath chamber',
      'Four-Point Bending Beam Fatigue Testing System',
      'Repeated Load Permanent Deformation (RLPD) Triaxial Cell',
      'Resilient Modulus (Mr) testing for subgrade soils',
    ],
    testStandards: ['AASHTO T324', 'AASHTO T321', 'AASHTO T307', 'IRC 37:2018'],
    capabilities: [
      'Dynamic Modulus (|E*|) master curve generation',
      'Accelerated rutting depth characterization under submerged conditions',
      'High-cycle flexural beam fatigue testing',
      'In-situ resilient modulus of mountain subgrades',
    ],
    location: 'Pavement Engineering Lab, IIT Ropar Main Campus',
  },
  {
    id: '3',
    name: 'Hydraulics, Permeability & Durability Lab',
    category: 'Environmental Durability',
    description: 'Specialized testing setup for porous pavements, storm-water infiltration, freeze-thaw degradation, and aggregate abrasion kinetics.',
    keyEquipment: [
      'Falling Head and Constant Head Permeameters for Porous Pavements',
      'Automated Rapid Freeze-Thaw Environmental Chamber (-25°C to +25°C)',
      'Los Angeles & Cantabro Abrasion Testing Machines',
      'Surface Infiltration Ring Permeameter (ASTM C1701 / C1781)',
      'Ultrasonic Pulse Velocity (UPV) non-destructive testing kit',
    ],
    testStandards: ['ASTM C666', 'ASTM C1701', 'ASTM C1781', 'EN 12697-17', 'IS 516'],
    capabilities: [
      'Hydraulic infiltration rate assessment under sediment loading',
      'Rapid freeze-thaw cycle durability evaluation',
      'Cantabro stone loss percentage in porous asphalt',
      'Dynamic modulus tracking via ultrasonic pulse velocity',
    ],
    location: 'Concrete & Hydraulics Wing, IIT Ropar',
  },
  {
    id: '4',
    name: 'Geomatics, AI & Corridor Computing Lab',
    category: 'Computational & Geomatics',
    description: 'High-performance computing cluster supporting deep learning computer vision models, LiDAR processing, and GIS terrain analysis.',
    keyEquipment: [
      'NVIDIA GPU Deep Learning Compute Node (A100 / RTX 4090)',
      'Enterprise ArcGIS and QGIS Spatial Modeling Server',
      'Drone LiDAR and Multi-Spectral Aerial Sensor Suite',
      'High-Speed Industrial Inspection Cameras with Edge AI units',
    ],
    testStandards: ['OpenGIS Standards', 'IRC:SP:19', 'Survey of India Mapping Guidelines'],
    capabilities: [
      'Automated high-resolution road crack and distress recognition',
      '3D terrain digital twin and landslide hazard modeling',
      'Optimal corridor alignment multi-criteria simulation',
    ],
    location: 'Geomatics Lab, Department of Civil Engineering, IIT Ropar',
  },
];
