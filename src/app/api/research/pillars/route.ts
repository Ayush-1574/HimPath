import { NextResponse } from 'next/server';
import { researchPillars } from '@/lib/researchData';

export async function GET() {
  return NextResponse.json({
    success: true,
    count: researchPillars.length,
    data: researchPillars,
  });
}
