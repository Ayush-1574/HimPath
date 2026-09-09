import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    success: true,
    data: [
      {
        number: '01',
        title: 'Climate-Resilient Planning & DPRs',
        description: 'Develop climate-responsive Detailed Project Report (DPR) frameworks that integrate terrain, climatic and infrastructure considerations into the planning, design and implementation of sustainable roads in the Indian Himalayan Region.',
      },
      {
        number: '02',
        title: 'Advanced & Sustainable Road Technologies',
        description: 'Develop and demonstrate innovative, sustainable and climate-resilient construction technologies for PMGSY and rural roads, specifically adapted to the extreme climatic and challenging terrain conditions of the Himalayan region.',
      },
      {
        number: '03',
        title: 'Integrated Drainage, Erosion & Slope Management',
        description: 'Develop integrated approaches for drainage, storm-water management, erosion control and slope stabilization, supported by GIS-based terrain characterization and corridor planning to improve the resilience of Himalayan roads.',
      },
      {
        number: '04',
        title: 'Policy, Standards & Engineering Practices',
        description: 'Generate scientific evidence and technical recommendations to support policy formulation, standardization and integration of climate-resilient technologies into Indian road codes, specifications and engineering practices.',
      },
      {
        number: '05',
        title: 'AI & Data-Driven Infrastructure Management',
        description: 'Develop AI- and data-driven tools for pavement distress mapping, performance prediction and vulnerability assessment, enabling informed decision-making and resilient management of Himalayan road networks.',
      },
    ],
  });
}
