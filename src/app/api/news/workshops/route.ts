import { NextResponse } from 'next/server';
import { workshopsList } from '@/lib/siteData';

export async function GET() {
  return NextResponse.json({
    success: true,
    count: workshopsList.length,
    data: workshopsList,
  });
}
