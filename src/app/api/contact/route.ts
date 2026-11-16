import { NextRequest, NextResponse } from 'next/server';
import { store } from '@/lib/store';
import { ContactMessage } from '@/models/contact';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, subject, message } = body;

    // Validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        {
          success: false,
          message: 'Please fill in all required fields (Name, Email, Subject, Message).',
        },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        {
          success: false,
          message: 'Please enter a valid email address.',
        },
        { status: 400 }
      );
    }

    const newContact: ContactMessage = {
      name: String(name).trim(),
      email: String(email).trim().toLowerCase(),
      phone: phone ? String(phone).trim() : undefined,
      subject: String(subject).trim(),
      message: String(message).trim(),
    };

    const saved = store.addContact(newContact);

    return NextResponse.json(
      {
        success: true,
        message: 'Your message has been received successfully. We will contact you soon.',
        data: saved,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Contact API Error:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'An unexpected server error occurred. Please try again.',
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  const contacts = store.getContacts();
  return NextResponse.json({ success: true, data: contacts });
}
