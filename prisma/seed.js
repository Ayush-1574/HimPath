const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('Seeding CEVA PostgreSQL database...');

  // 1. Clean existing records (if any)
  await prisma.activity.deleteMany({});
  await prisma.technique.deleteMany({});
  await prisma.galleryItem.deleteMany({});
  await prisma.download.deleteMany({});
  await prisma.fAQ.deleteMany({});
  await prisma.teamMember.deleteMany({});

  // 2. Techniques (Himalayan Vernacular Construction Systems)
  await prisma.technique.createMany({
    data: [
      {
        slug: 'kath-kuni',
        name: 'Kath-Kuni Architecture',
        region: 'Himachal Pradesh (Kullu, Shimla, Kinnaur)',
        materials: 'Deodar Wood, Dressed Stone, Slate, Mud Mortar',
        description: 'An ancient indigenous timber and dry-stone interlocking technique that exhibits exceptional seismic resistance and thermal comfort without the use of cement or nails.',
        features: [
          'Interlocking corner wooden beams (Kath-Kuni)',
          'Dry stone masonry infill providing energy dissipation during earthquakes',
          'Heavy slate cantilevered roofs for insulation and snow shedding',
          'Naturally pest-resistant Deodar timber frameworks',
        ],
        imageUrl: '/images/kath-kuni.svg',
      },
      {
        slug: 'dhajji-dewari',
        name: 'Dhajji-Dewari Technique',
        region: 'Kashmir, Jammu & Western Himalayas',
        materials: 'Timber Braced Frames, Stone/Burnt Brick Infill, Lime/Mud Plaster',
        description: 'Timber braced frame construction with lightweight masonry infill divided into small panels (patchwork wall), preventing progressive structural collapse during severe seismic events.',
        features: [
          'Subdivided diagonal wooden frames that dissipate shear stresses',
          'Lightweight walls reducing inertial earthquake forces',
          'High thermal retention through breathable lime-mud mortar',
          'Documented survival during major historical Himalayan earthquakes',
        ],
        imageUrl: '/images/dhajji-dewari.svg',
      },
      {
        slug: 'thathara',
        name: 'Thathara (Timber Frame with Earth)',
        region: 'Uttarakhand & Garhwal Region',
        materials: 'Pine/Deodar timber, River Cobbles, Lime',
        description: 'Distinctive multi-tiered mountain timber-stone composite architecture crafted along steep mountain slopes with cantilevered wooden verandahs.',
        features: [
          'High-altitude micro-climate responsiveness',
          'Deep eaves protecting mud plaster from torrential monsoons',
          'Zero carbon footprint utilizing hyper-local building materials',
        ],
        imageUrl: '/images/thathara.svg',
      },
      {
        slug: 'rammed-earth',
        name: 'Rammed Earth & Adobe Systems',
        region: 'Ladakh & Spiti Valley (Cold Arid Trans-Himalayas)',
        materials: 'Clay, Silt, Straw, Poplar/Willow poles',
        description: 'Monolithic thick thermal-mass earth walls engineered to store daytime solar radiation and slowly release warmth during sub-zero Himalayan nights.',
        features: [
          'Passive solar heating with up to 45cm thick loadbearing walls',
          'Breathable natural humidity control',
          'Complete recyclability and harmony with fragile cold-desert ecosystems',
        ],
        imageUrl: '/images/rammed-earth.svg',
      },
    ],
  });

  // 3. Activities & Events
  await prisma.activity.createMany({
    data: [
      {
        title: 'National Workshop on Indigenous Himalayan Construction & Seismic Resilience',
        category: 'Workshop',
        date: new Date('2024-11-15T09:30:00Z'),
        location: 'Senate Hall, IIT Ropar, Rupnagar, Punjab',
        description: 'A 3-day multi-disciplinary workshop bringing together master artisans, structural engineers, and researchers to document indigenous seismic engineering principles in Himachal and Uttarakhand.',
        imageUrl: '/images/workshop-1.svg',
        featured: true,
      },
      {
        title: 'Field Documentation & Dynamic Testing of Century-Old Kath-Kuni Temples',
        category: 'Field Visit',
        date: new Date('2024-10-04T10:00:00Z'),
        location: 'Naggar & Sarahan, Himachal Pradesh',
        description: 'Comprehensive ambient vibration testing, laser scanning, and material characterization of historic multi-tier temple towers.',
        imageUrl: '/images/fieldwork-1.svg',
        featured: true,
      },
      {
        title: 'International Symposium on Sustainable Vernacular Architecture (ISSVA 2024)',
        category: 'Conference',
        date: new Date('2024-09-20T09:00:00Z'),
        location: 'Department of Civil Engineering, IIT Ropar',
        description: 'Keynote lectures from global experts on integrating vernacular wisdom into modern national building codes (NBC) under NMHS sponsorship.',
        imageUrl: '/images/symposium.svg',
        featured: true,
      },
      {
        title: 'Hands-on Artisan Training on Lime Mortar & Wood Interlocking Joints',
        category: 'Training',
        date: new Date('2024-08-12T10:00:00Z'),
        location: 'CEVA Demonstration Site, IIT Ropar',
        description: 'Capacity building program for local masons, carpenters, and civil engineering graduate students.',
        imageUrl: '/images/training.svg',
        featured: false,
      },
    ],
  });

  // 4. Gallery Items
  await prisma.galleryItem.createMany({
    data: [
      {
        title: 'Traditional Kath-Kuni Two-Story Himalayan Residence',
        category: 'Architecture',
        location: 'Kullu Valley, Himachal Pradesh',
        imageUrl: '/images/gallery-kathkuni.svg',
        description: 'Cantilevered upper floor balcony (Chhajja) with slate roof and intricate wooden carvings.',
      },
      {
        title: 'Architectural Isometric Sketch: Corner Interlocking Detail',
        category: 'Sketches',
        location: 'CEVA Research Studio',
        imageUrl: '/images/sketch-detail.svg',
        description: 'Technical hand sketch illustrating the dry-joint friction mechanism and wooden dowels.',
      },
      {
        title: 'Field Team Conducting Non-Destructive Structural Testing',
        category: 'Fieldwork',
        location: 'Kinnaur District',
        imageUrl: '/images/fieldwork-testing.svg',
        description: 'Sensor placement for accelerometric monitoring of historic masonry tower.',
      },
      {
        title: 'Scale Model of Dhajji-Dewari Shear Wall under Shake Table Test',
        category: 'Models',
        location: 'IIT Ropar Structural Engineering Laboratory',
        imageUrl: '/images/model-shaketable.svg',
        description: 'Experimental investigation on energy dissipation capacity under simulated Himalayan seismic spectrum.',
      },
    ],
  });

  // 5. Downloads / Publications
  await prisma.download.createMany({
    data: [
      {
        title: 'Guidelines for Seismic Retrofitting and Preservation of Kath-Kuni Structures',
        category: 'Manual',
        fileSize: '4.8 MB',
        fileType: 'PDF',
        downloadUrl: '/downloads/guidelines-kath-kuni-preservation.pdf',
      },
      {
        title: 'NMHS Project Annual Report: Centre of Excellence on Sustainable Vernacular Architecture',
        category: 'Report',
        fileSize: '12.4 MB',
        fileType: 'PDF',
        downloadUrl: '/downloads/ceva-nmhs-annual-report.pdf',
      },
      {
        title: 'Thermal Performance and Life Cycle Carbon Assessment of Indigenous Himalayan Buildings',
        category: 'Research Paper',
        fileSize: '2.1 MB',
        fileType: 'PDF',
        downloadUrl: '/downloads/thermal-performance-paper.pdf',
      },
      {
        title: 'Standard Architectural Drawings & Joinery Details for Modern Vernacular Eco-Habitats',
        category: 'Manual',
        fileSize: '8.6 MB',
        fileType: 'PDF',
        downloadUrl: '/downloads/vernacular-joinery-drawings.pdf',
      },
    ],
  });

  // 6. FAQs
  await prisma.fAQ.createMany({
    data: [
      {
        question: 'What is the Centre of Excellence on Sustainable Vernacular Architecture (CEVA)?',
        answer: 'CEVA is a premier research and demonstration center established at the Indian Institute of Technology Ropar (IIT Ropar) and funded under the National Mission on Himalayan Studies (NMHS), Ministry of Environment, Forest & Climate Change (MoEF&CC), Government of India.',
        category: 'General',
        order: 1,
      },
      {
        question: 'Why is Himalayan vernacular architecture inherently earthquake-resistant?',
        answer: 'Traditional techniques like Kath-Kuni and Dhajji-Dewari use flexible timber frames interlocked with dry stone masonry. When subjected to ground shaking, the dry joints slide slightly, dissipating enormous seismic energy without catastrophic brittle failure.',
        category: 'Techniques',
        order: 2,
      },
      {
        question: 'How does CEVA support researchers, students, and architects?',
        answer: 'We provide open-access research data, testing facilities, digital repositories of joinery details, workshops, internships, and collaborative grants for preserving and modernizing indigenous Himalayan heritage.',
        category: 'Collaboration',
        order: 3,
      },
      {
        question: 'Can modern houses incorporate these vernacular techniques?',
        answer: 'Yes! CEVA develops contemporary hybrid construction guidelines that combine the thermal efficiency and aesthetic beauty of vernacular timber-stone systems with modern structural safety codes.',
        category: 'Techniques',
        order: 4,
      },
    ],
  });

  // 7. Team Members
  await prisma.teamMember.createMany({
    data: [
      {
        name: 'Dr. Reet Kamal Tiwari',
        role: 'Principal Investigator (PI)',
        department: 'Department of Civil Engineering, IIT Ropar',
        bio: 'Leading research on indigenous structural systems, geo-spatial Himalayan modeling, and sustainable materials.',
        email: 'reetkamal@iitrpr.ac.in',
      },
      {
        name: 'Prof. Naveen Kwatra',
        role: 'Co-Principal Investigator',
        department: 'Department of Civil Engineering, IIT Ropar',
        bio: 'Expert in earthquake engineering, structural dynamics, and masonry conservation.',
        email: 'ceva@iitrpr.ac.in',
      },
      {
        name: 'Er. Ananya Sharma',
        role: 'Senior Research Fellow',
        department: 'CEVA Lab, IIT Ropar',
        bio: 'Specializing in finite element analysis and non-destructive testing of heritage wood-stone joints.',
        email: 'ananya.ceva@iitrpr.ac.in',
      },
    ],
  });

  console.log('Database seeded successfully with authentic CEVA Himalayan data!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
