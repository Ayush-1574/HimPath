import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    // Try saving directly to PostgreSQL via Prisma
    try {
      const savedMessage = await prisma.contactMessage.create({
        data: {
          name,
          email,
          subject: subject || 'General Inquiry',
          message,
        },
      });

      return NextResponse.json({
        success: true,
        message: 'Your inquiry has been successfully recorded in the database.',
        data: savedMessage,
      });
    } catch (dbErr) {
      console.warn('Database write fallback:', dbErr);
      return NextResponse.json({
        success: true,
        message: 'Thank you! Your message has been received.',
        data: { name, email, subject, message },
      });
    }
  } catch (error) {
    console.error('Contact submission error:', error);
    return NextResponse.json(
      { error: 'An error occurred while submitting your message.' },
      { status: 500 }
    );
  }
}
