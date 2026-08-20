import { NextResponse } from 'next/server';
import { publicationsList } from '@/lib/siteData';

export async function GET() {
  return NextResponse.json({
    success: true,
    count: publicationsList.length,
    data: publicationsList,
  });
}
