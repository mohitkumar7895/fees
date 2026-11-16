import { NextRequest, NextResponse } from 'next/server';
import { store } from '@/lib/store';

export async function POST(req: NextRequest) {
  try {
    const { email, name } = await req.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { success: false, message: 'A valid email address is required.' },
        { status: 400 }
      );
    }

    const sub = store.addNewsletter(email.trim().toLowerCase(), name?.trim());

    return NextResponse.json(
      {
        success: true,
        message: 'Successfully subscribed to school newsletter!',
        data: sub,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Newsletter API Error:', error);
    return NextResponse.json(
      { success: false, message: 'Server error processing newsletter subscription.' },
      { status: 500 }
    );
  }
}
