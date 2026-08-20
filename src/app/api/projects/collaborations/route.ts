import { NextResponse } from 'next/server';
import { partnerCollaborationsList } from '@/lib/siteData';

export async function GET() {
  return NextResponse.json({
    success: true,
    count: partnerCollaborationsList.length,
    data: partnerCollaborationsList,
  });
}
