import { NextResponse } from 'next/server';
import { researchScholarsList, advisoryBoardList } from '@/lib/siteData';

export async function GET() {
  return NextResponse.json({
    success: true,
    scholarsCount: researchScholarsList.length,
    scholars: researchScholarsList,
    advisors: advisoryBoardList,
  });
}
