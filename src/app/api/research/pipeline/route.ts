import { NextResponse } from 'next/server';
import { pipelineStages } from '@/lib/researchData';

export async function GET() {
  return NextResponse.json({
    success: true,
    count: pipelineStages.length,
    data: pipelineStages,
  });
}
