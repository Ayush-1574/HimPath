import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    success: true,
    data: [
      {
        number: '01',
        title: 'Climate-Resilient DPR Frameworks',
        description: 'Establish terrain-sensitive detailed project report guidelines, integrating geotechnical slope risk and climate adaptation criteria.',
      },
      {
        number: '02',
        title: 'Sustainable Road Technologies',
        description: 'Advance full-depth reclamation (FDR), roller-compacted concrete (RCCP), and porous asphalt surfaces designed for extreme freeze-thaw mountain hydrology.',
      },
      {
        number: '03',
        title: 'Waste Valorization & Circular Economy',
        description: 'Repurpose regional mountain landslide debris, tunnel excavation muck, and post-consumer plastic waste to eliminate virgin aggregate quarrying.',
      },
      {
        number: '04',
        title: 'Slope Engineering & Drainage Resilience',
        description: 'Develop high-velocity runoff dissipators, sub-surface siphons, and geosynthetic-bioengineered slope stabilization.',
      },
      {
        number: '05',
        title: 'Geospatial & AI Intelligence',
        description: 'Generate 3D LiDAR terrain digital twins and deploy deep learning computer vision for automated road distress auditing.',
      },
      {
        number: '06',
        title: 'Policy & Indian Roads Congress (IRC) Codal Integration',
        description: 'Formulate standard operating procedures, technical guidelines, and codal revisions for national highway agencies.',
      },
    ],
  });
}
