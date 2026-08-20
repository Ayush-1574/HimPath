import { NextResponse } from 'next/server';
import { researchFacilitiesData } from '@/lib/researchData';

export async function GET() {
  return NextResponse.json({
    success: true,
    count: researchFacilitiesData.length,
    data: researchFacilitiesData,
  });
}
