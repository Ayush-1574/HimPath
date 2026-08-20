import { NextResponse } from 'next/server';

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

    // In a zero-database deployment (e.g. Vercel static/serverless),
    // we safely log the message to stdout / cloud logs and acknowledge success.
    console.log('[HiMPaTH Contact Submission]:', {
      timestamp: new Date().toISOString(),
      name,
      email,
      subject: subject || 'General Inquiry',
      message,
    });

    return NextResponse.json({
      success: true,
      message: 'Thank you! Your inquiry has been received by HiMPaTH.',
      data: {
        name,
        email,
        subject: subject || 'General Inquiry',
        receivedAt: new Date().toISOString(),
      },
    });
  } catch (error) {
    console.error('Contact submission error:', error);
    return NextResponse.json(
      { error: 'An error occurred while submitting your message.' },
      { status: 500 }
    );
  }
}
