export type GuardianType = 'Father' | 'Mother' | 'Other';

export type ApplicationStatus = 'Draft' | 'Submitted' | 'Under Review' | 'Approved' | 'Requires Verification';

export interface AdmissionFormData {
  // Student Basic Details
  targetClass: string;
  firstName: string;
  lastName: string;
  gender: 'Male' | 'Female' | 'Other' | '';
  dateOfBirth: string;
  mobileNumber: string;
  email: string;

  // Guardian Details
  guardianType: GuardianType;
  guardianName: string;
  guardianRelation: string;
  guardianEmail: string;
  guardianPhone: string;
  guardianOccupation: string;
  guardianAddress: string;

  // Document details (file names or uploaded status)
  documentsUploaded?: string[];
  notes?: string;
}

export interface AdmissionApplication extends AdmissionFormData {
  applicationId: string;
  submittedAt: string;
  status: ApplicationStatus;
  statusNotes?: string;
}

export interface AdmissionStatusQuery {
  applicationId: string;
  mobileNumber?: string;
}
