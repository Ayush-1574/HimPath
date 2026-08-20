import { NextResponse } from 'next/server';
import { facultyList } from '@/lib/siteData';

export async function GET() {
  return NextResponse.json({
    success: true,
    count: facultyList.length,
    data: facultyList,
  });
}
