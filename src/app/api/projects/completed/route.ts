import { NextResponse } from 'next/server';
import { completedProjectsList } from '@/lib/siteData';

export async function GET() {
  return NextResponse.json({
    success: true,
    count: completedProjectsList.length,
    data: completedProjectsList,
  });
}
