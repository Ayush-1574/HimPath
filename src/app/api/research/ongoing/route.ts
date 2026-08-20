import { NextResponse } from 'next/server';
import { ongoingResearchData } from '@/lib/researchData';

export async function GET() {
  return NextResponse.json({
    success: true,
    count: ongoingResearchData.length,
    data: ongoingResearchData,
  });
}
