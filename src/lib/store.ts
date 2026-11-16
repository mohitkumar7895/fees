import { AdmissionApplication } from '@/models/admission';
import { ContactMessage, NewsletterSubscription } from '@/models/contact';

// In-memory store (persists during server runtime) with initial sample admission records
class SchoolDataStore {
  private admissions: Map<string, AdmissionApplication> = new Map();
  private contacts: ContactMessage[] = [];
  private newsletters: NewsletterSubscription[] = [];

  constructor() {
    // Seed sample application for demo status tracking
    this.admissions.set('AKS-2026-1001', {
      applicationId: 'AKS-2026-1001',
      targetClass: 'Class 1',
      firstName: 'Aarav',
      lastName: 'Sharma',
      gender: 'Male',
      dateOfBirth: '2019-05-14',
      mobileNumber: '9876543210',
      email: 'aarav.sharma@example.com',
      guardianType: 'Father',
      guardianName: 'Rajesh Sharma',
      guardianRelation: 'Father',
      guardianEmail: 'rajesh.sharma@example.com',
      guardianPhone: '9876543210',
      guardianOccupation: 'Business',
      guardianAddress: 'Nagla Sikandar, Tundla, Firozabad',
      documentsUploaded: ['Birth_Certificate.pdf', 'Aadhar_Card.pdf'],
      submittedAt: new Date(Date.now() - 86400000 * 3).toISOString(),
      status: 'Approved',
      statusNotes: 'Document verification completed. Please visit school reception to collect welcome kit and uniform details.',
    });

    this.admissions.set('AKS-2026-1002', {
      applicationId: 'AKS-2026-1002',
      targetClass: 'Class 2',
      firstName: 'Ananya',
      lastName: 'Verma',
      gender: 'Female',
      dateOfBirth: '2018-08-21',
      mobileNumber: '9123456789',
      email: 'ananya.verma@example.com',
      guardianType: 'Mother',
      guardianName: 'Sunita Verma',
      guardianRelation: 'Mother',
      guardianEmail: 'sunita.verma@example.com',
      guardianPhone: '9123456789',
      guardianOccupation: 'Teacher',
      guardianAddress: 'Main Market, Tundla',
      documentsUploaded: ['Previous_Report_Card.pdf'],
      submittedAt: new Date(Date.now() - 86400000 * 1).toISOString(),
      status: 'Under Review',
      statusNotes: 'Application received and currently under evaluation by the academic committee.',
    });
  }

  // Admissions
  addAdmission(application: AdmissionApplication): AdmissionApplication {
    this.admissions.set(application.applicationId, application);
    return application;
  }

  getAdmission(applicationId: string): AdmissionApplication | undefined {
    return this.admissions.get(applicationId.trim().toUpperCase());
  }

  getAllAdmissions(): AdmissionApplication[] {
    return Array.from(this.admissions.values());
  }

  // Contacts
  addContact(contact: ContactMessage): ContactMessage {
    const record = {
      ...contact,
      id: `MSG-${Date.now()}`,
      createdAt: new Date().toISOString(),
    };
    this.contacts.push(record);
    return record;
  }

  getContacts(): ContactMessage[] {
    return this.contacts;
  }

  // Newsletter
  addNewsletter(email: string, name?: string): NewsletterSubscription {
    const existing = this.newsletters.find((n) => n.email.toLowerCase() === email.toLowerCase());
    if (existing) {
      return existing;
    }
    const record: NewsletterSubscription = {
      id: `SUB-${Date.now()}`,
      email,
      name,
      subscribedAt: new Date().toISOString(),
    };
    this.newsletters.push(record);
    return record;
  }
}

// Global singleton across server requests in dev
const globalForStore = globalThis as unknown as { schoolStore?: SchoolDataStore };
export const store = globalForStore.schoolStore || new SchoolDataStore();
if (process.env.NODE_ENV !== 'production') {
  globalForStore.schoolStore = store;
}
