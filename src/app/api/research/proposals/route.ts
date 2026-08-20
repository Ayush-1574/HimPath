import { NextResponse } from 'next/server';
import { grantProposalsData } from '@/lib/researchData';

export async function GET() {
  return NextResponse.json({
    success: true,
    count: grantProposalsData.length,
    data: grantProposalsData,
  });
}
