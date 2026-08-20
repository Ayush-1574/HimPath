import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    success: true,
    data: {
      centreName: 'HiMPaTH — Himalayan Pathways for Transport and Highways',
      hostInstitution: 'Department of Civil Engineering, Indian Institute of Technology Ropar',
      motto: {
        sanskrit: 'आ नो भद्राः क्रतवो यन्तु विश्वतः',
        meaning: 'Let noble thoughts come from everywhere',
      },
      vision: 'To establish HiMPaTH as a leading Centre of Excellence for climate-resilient and sustainable road infrastructure in the Indian Himalayan Region, advancing innovative and technology-driven solutions for safer, more durable, reliable and resilient transportation networks.',
      mission: 'To develop and implement climate-resilient road technologies through multidisciplinary research, sustainable construction practices, field validation and data-driven planning, while supporting DPR development, policy, standardization, capacity building and stakeholder collaboration for resilient Himalayan connectivity.',
    },
  });
}
