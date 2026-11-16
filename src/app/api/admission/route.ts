import { NextRequest, NextResponse } from 'next/server';
import { store } from '@/lib/store';
import { generateApplicationId } from '@/lib/utils';
import { AdmissionApplication, AdmissionFormData } from '@/models/admission';

export async function POST(req: NextRequest) {
  try {
    const body: AdmissionFormData = await req.json();

    // Validation
    const { targetClass, firstName, gender, dateOfBirth, mobileNumber, email, guardianName, guardianRelation, guardianAddress } = body;

    if (!targetClass || !firstName || !gender || !dateOfBirth || !mobileNumber || !email || !guardianName || !guardianRelation || !guardianAddress) {
      return NextResponse.json(
        {
          success: false,
          message: 'Please fill in all mandatory fields marked with an asterisk (*).',
        },
        { status: 400 }
      );
    }

    const applicationId = generateApplicationId();

    const application: AdmissionApplication = {
      ...body,
      applicationId,
      submittedAt: new Date().toISOString(),
      status: 'Under Review',
      statusNotes: 'Application received online. School admissions office will review documents and verify within 2-3 business days.',
    };

    const saved = store.addAdmission(application);

    return NextResponse.json(
      {
        success: true,
        message: 'Admission application submitted successfully.',
        data: {
          applicationId: saved.applicationId,
          status: saved.status,
          studentName: `${saved.firstName} ${saved.lastName || ''}`.trim(),
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Admission API POST Error:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Could not process admission application.',
      },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json(
        {
          success: false,
          message: 'Application ID is required to track status.',
        },
        { status: 400 }
      );
    }

    const application = store.getAdmission(id);

    if (!application) {
      return NextResponse.json(
        {
          success: false,
          message: `No application found for ID "${id}". Please verify and try again.`,
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: {
        applicationId: application.applicationId,
        studentName: `${application.firstName} ${application.lastName || ''}`.trim(),
        targetClass: application.targetClass,
        status: application.status,
        submittedAt: application.submittedAt,
        statusNotes: application.statusNotes,
      },
    });
  } catch (error) {
    console.error('Admission API GET Error:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Error looking up admission status.',
      },
      { status: 500 }
    );
  }
}
