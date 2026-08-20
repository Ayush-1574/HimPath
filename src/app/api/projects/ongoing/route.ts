import { NextResponse } from 'next/server';
import { ongoingProjectsList } from '@/lib/siteData';

export async function GET() {
  return NextResponse.json({
    success: true,
    count: ongoingProjectsList.length,
    data: ongoingProjectsList,
  });
}
