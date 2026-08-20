import { NextResponse } from 'next/server';
import { newsArticlesList } from '@/lib/siteData';

export async function GET() {
  return NextResponse.json({
    success: true,
    count: newsArticlesList.length,
    data: newsArticlesList,
  });
}
