'use client';

import React, { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { useApp } from '@/context/AppContext';
import { AdmissionFormData, ApplicationStatus } from '@/models/admission';
import {
  GraduationCap,
  User,
  Users,
  FileCheck,
  Search,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Calendar,
  Phone,
  Mail,
  Home,
  Briefcase,
  Upload,
} from 'lucide-react';

export const AdmissionForm: React.FC = () => {
  const searchParams = useSearchParams();
  const initialClass = searchParams?.get('class') || '';
  const { showToast, admissionDraft, updateAdmissionDraft, clearAdmissionDraft } = useApp();

  const [formData, setFormData] = useState<AdmissionFormData>({
    targetClass: initialClass || admissionDraft.targetClass || 'Class 1',
    firstName: admissionDraft.firstName || '',
    lastName: admissionDraft.lastName || '',
    gender: admissionDraft.gender || 'Male',
    dateOfBirth: admissionDraft.dateOfBirth || '',
    mobileNumber: admissionDraft.mobileNumber || '',
    email: admissionDraft.email || '',
    guardianType: admissionDraft.guardianType || 'Father',
    guardianName: admissionDraft.guardianName || '',
    guardianRelation: admissionDraft.guardianRelation || 'Father',
    guardianEmail: admissionDraft.guardianEmail || '',
    guardianPhone: admissionDraft.guardianPhone || '',
    guardianOccupation: admissionDraft.guardianOccupation || '',
    guardianAddress: admissionDraft.guardianAddress || '',
    documentsUploaded: admissionDraft.documentsUploaded || [],
    notes: admissionDraft.notes || '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState<{
    applicationId: string;
    studentName: string;
  } | null>(null);

  // Status check tab state
  const [activeTab, setActiveTab] = useState<'apply' | 'status'>('apply');
  const [statusQueryId, setStatusQueryId] = useState('');
  const [statusLoading, setStatusLoading] = useState(false);
  const [statusResult, setStatusResult] = useState<{
    applicationId: string;
    studentName: string;
    targetClass: string;
    status: ApplicationStatus;
    submittedAt: string;
    statusNotes?: string;
  } | null>(null);
  const [statusError, setStatusError] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    const updated = { ...formData, [name]: value };
    setFormData(updated);
    updateAdmissionDraft({ [name]: value });
  };

  const handleDocumentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const fileNames = Array.from(e.target.files).map((f) => f.name);
      const updated = {
        ...formData,
        documentsUploaded: [...(formData.documentsUploaded || []), ...fileNames],
      };
      setFormData(updated);
      updateAdmissionDraft({ documentsUploaded: updated.documentsUploaded });
      showToast({
        type: 'info',
        title: 'Files Selected',
        message: `${fileNames.length} document(s) staged for submission.`,
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch('/api/admission', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setSubmissionResult({
          applicationId: data.data.applicationId,
          studentName: `${formData.firstName} ${formData.lastName}`.trim(),
        });
        clearAdmissionDraft();
        showToast({
          type: 'success',
          title: 'Application Submitted!',
          message: `Your Application ID is ${data.data.applicationId}`,
        });
      } else {
        showToast({
          type: 'error',
          title: 'Submission Failed',
          message: data.message || 'Please check required fields.',
        });
      }
    } catch {
      showToast({
        type: 'error',
        title: 'Network Error',
        message: 'Could not connect to admission server. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCheckStatus = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!statusQueryId.trim()) return;

    setStatusLoading(true);
    setStatusError('');
    setStatusResult(null);

    try {
      const res = await fetch(`/api/admission?id=${encodeURIComponent(statusQueryId.trim())}`);
      const data = await res.json();

      if (res.ok && data.success) {
        setStatusResult(data.data);
      } else {
        setStatusError(data.message || 'Application not found. Please verify your Application ID.');
      }
    } catch {
      setStatusError('Unable to fetch status. Please try again later.');
    } finally {
      setStatusLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-10 px-4 sm:px-6">
      {/* Switcher: New Application / Status Tracker */}
      <div className="flex items-center justify-center gap-3 mb-10">
        <button
          type="button"
          onClick={() => setActiveTab('apply')}
          className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all ${
            activeTab === 'apply'
              ? 'bg-school-primary text-white shadow-md shadow-school-primary/20 scale-105'
              : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
          }`}
        >
          <GraduationCap className="w-4 h-4" />
          <span>New Online Admission</span>
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('status')}
          className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all ${
            activeTab === 'status'
              ? 'bg-school-secondary text-white shadow-md shadow-school-secondary/20 scale-105'
              : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
          }`}
        >
          <Search className="w-4 h-4" />
          <span>Track Application Status</span>
        </button>
      </div>

      {/* VIEW 1: Status Tracker */}
      {activeTab === 'status' && (
        <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-gray-100 space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-bold text-school-secondary">Track Admission Status</h2>
            <p className="text-sm text-gray-600">
              Enter your Application ID (e.g. <span className="font-mono text-school-primary font-bold">AKS-2026-1001</span>) to check the current review stage.
            </p>
          </div>

          <form onSubmit={handleCheckStatus} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input
              type="text"
              required
              value={statusQueryId}
              onChange={(e) => setStatusQueryId(e.target.value)}
              placeholder="e.g. AKS-2026-1001"
              className="flex-1 px-4 py-3 rounded-xl border border-gray-200 font-mono text-sm uppercase focus:outline-hidden focus:ring-2 focus:ring-school-primary"
            />
            <button
              type="submit"
              disabled={statusLoading}
              className="bg-school-secondary hover:bg-school-secondaryDark text-white px-6 py-3 rounded-xl font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {statusLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Search className="w-4 h-4" />}
              <span>Check Status</span>
            </button>
          </form>

          {statusError && (
            <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-sm flex items-center gap-3 max-w-lg mx-auto">
              <AlertCircle className="w-5 h-5 shrink-0 text-rose-600" />
              <span>{statusError}</span>
            </div>
          )}

          {statusResult && (
            <div className="mt-8 border border-gray-100 rounded-2xl p-6 bg-gray-50 space-y-4 max-w-xl mx-auto">
              <div className="flex items-center justify-between border-b pb-4">
                <div>
                  <div className="text-xs text-gray-500">Application Number</div>
                  <div className="font-mono font-bold text-school-primary text-lg">{statusResult.applicationId}</div>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                    statusResult.status === 'Approved'
                      ? 'bg-emerald-100 text-emerald-800'
                      : statusResult.status === 'Under Review'
                      ? 'bg-amber-100 text-amber-800'
                      : 'bg-blue-100 text-blue-800'
                  }`}
                >
                  {statusResult.status}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-500 block text-xs">Student Name</span>
                  <span className="font-semibold text-gray-800">{statusResult.studentName}</span>
                </div>
                <div>
                  <span className="text-gray-500 block text-xs">Target Class</span>
                  <span className="font-semibold text-gray-800">{statusResult.targetClass}</span>
                </div>
                <div>
                  <span className="text-gray-500 block text-xs">Submission Date</span>
                  <span className="font-semibold text-gray-800">
                    {new Date(statusResult.submittedAt).toLocaleDateString()}
                  </span>
                </div>
              </div>

              {statusResult.statusNotes && (
                <div className="p-3.5 rounded-xl bg-white border border-gray-200 text-xs text-gray-700 leading-relaxed">
                  <strong className="block text-gray-900 mb-1">Administrative Remarks:</strong>
                  {statusResult.statusNotes}
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* VIEW 2: Application Form */}
      {activeTab === 'apply' && (
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-gray-100">
          {submissionResult ? (
            <div className="text-center py-12 space-y-5">
              <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-12 h-12" />
              </div>
              <h2 className="text-3xl font-extrabold text-gray-900">Application Submitted!</h2>
              <p className="text-gray-600 max-w-lg mx-auto text-sm sm:text-base leading-relaxed">
                Thank you for applying for admission of <strong>{submissionResult.studentName}</strong>. Your application has been logged into our school system.
              </p>

              <div className="inline-block bg-teal-50 border-2 border-teal-200 rounded-2xl p-5 my-4">
                <div className="text-xs uppercase tracking-wider font-bold text-teal-800">Your Application ID</div>
                <div className="font-mono text-3xl font-black text-school-primary mt-1 select-all">
                  {submissionResult.applicationId}
                </div>
                <div className="text-xs text-teal-700 mt-2">
                  Please take a screenshot or write down this Application ID for tracking.
                </div>
              </div>

              <div className="pt-4 flex flex-wrap justify-center gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setStatusQueryId(submissionResult.applicationId);
                    setActiveTab('status');
                  }}
                  className="bg-school-secondary hover:bg-school-secondaryDark text-white px-6 py-3 rounded-full font-bold text-sm shadow-md transition-all"
                >
                  Track Application Status
                </button>
                <button
                  type="button"
                  onClick={() => setSubmissionResult(null)}
                  className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-3 rounded-full font-bold text-sm transition-all"
                >
                  Submit Another Form
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-10">
              <div className="border-b pb-4">
                <h2 className="text-2xl font-black text-school-secondary tracking-tight">
                  Online Student Admission Form
                </h2>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">
                  Fill in the student details and guardian contact information carefully.
                </p>
              </div>

              {/* Section 1: Basic Details */}
              <div className="space-y-5">
                <div className="flex items-center gap-2 text-school-primary font-bold text-lg border-b pb-2">
                  <User className="w-5 h-5" />
                  <span>1. Student Basic Details</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                  <div>
                    <label htmlFor="targetClass" className="block text-xs font-bold text-gray-700 mb-1.5 uppercase tracking-wider">
                      Applying for Class <span className="text-rose-500">*</span>
                    </label>
                    <select
                      id="targetClass"
                      name="targetClass"
                      required
                      value={formData.targetClass}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm bg-white focus:outline-hidden focus:ring-2 focus:ring-school-primary"
                    >
                      <option value="Playgroup">Playgroup</option>
                      <option value="Nursery">Nursery</option>
                      <option value="LKG">LKG</option>
                      <option value="UKG">UKG</option>
                      <option value="Class 1">Class 1</option>
                      <option value="Class 2">Class 2</option>
                      <option value="Class 3">Class 3</option>
                      <option value="Class 4">Class 4</option>
                      <option value="Class 5">Class 5</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="firstName" className="block text-xs font-bold text-gray-700 mb-1.5 uppercase tracking-wider">
                      First Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="e.g. Aarav"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-hidden focus:ring-2 focus:ring-school-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor="lastName" className="block text-xs font-bold text-gray-700 mb-1.5 uppercase tracking-wider">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="e.g. Sharma"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-hidden focus:ring-2 focus:ring-school-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor="gender" className="block text-xs font-bold text-gray-700 mb-1.5 uppercase tracking-wider">
                      Gender <span className="text-rose-500">*</span>
                    </label>
                    <select
                      id="gender"
                      name="gender"
                      required
                      value={formData.gender}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm bg-white focus:outline-hidden focus:ring-2 focus:ring-school-primary"
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="dateOfBirth" className="block text-xs font-bold text-gray-700 mb-1.5 uppercase tracking-wider">
                      Date Of Birth <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        id="dateOfBirth"
                        name="dateOfBirth"
                        required
                        value={formData.dateOfBirth}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-hidden focus:ring-2 focus:ring-school-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="mobileNumber" className="block text-xs font-bold text-gray-700 mb-1.5 uppercase tracking-wider">
                      Mobile Number <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="mobileNumber"
                      name="mobileNumber"
                      required
                      value={formData.mobileNumber}
                      onChange={handleChange}
                      placeholder="10-digit mobile number"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-hidden focus:ring-2 focus:ring-school-primary"
                    />
                  </div>

                  <div className="sm:col-span-2 md:col-span-3">
                    <label htmlFor="email" className="block text-xs font-bold text-gray-700 mb-1.5 uppercase tracking-wider">
                      Contact Email <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="parent@example.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-hidden focus:ring-2 focus:ring-school-primary"
                    />
                  </div>
                </div>
              </div>

              {/* Section 2: Guardian Details */}
              <div className="space-y-5">
                <div className="flex items-center gap-2 text-school-primary font-bold text-lg border-b pb-2">
                  <Users className="w-5 h-5" />
                  <span>2. Guardian Details</span>
                </div>

                {/* Guardian Radio Select */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-2 uppercase tracking-wider">
                    If Guardian Is <span className="text-rose-500">*</span>
                  </label>
                  <div className="flex items-center gap-6">
                    {(['Father', 'Mother', 'Other'] as const).map((type) => (
                      <label key={type} className="inline-flex items-center gap-2 cursor-pointer text-sm font-semibold text-gray-700">
                        <input
                          type="radio"
                          name="guardianType"
                          value={type}
                          checked={formData.guardianType === type}
                          onChange={handleChange}
                          className="w-4 h-4 text-school-primary focus:ring-school-primary"
                        />
                        <span>{type}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                  <div>
                    <label htmlFor="guardianName" className="block text-xs font-bold text-gray-700 mb-1.5 uppercase tracking-wider">
                      Guardian Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="guardianName"
                      name="guardianName"
                      required
                      value={formData.guardianName}
                      onChange={handleChange}
                      placeholder="Full Name"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-hidden focus:ring-2 focus:ring-school-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor="guardianRelation" className="block text-xs font-bold text-gray-700 mb-1.5 uppercase tracking-wider">
                      Relation with Child <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="guardianRelation"
                      name="guardianRelation"
                      required
                      value={formData.guardianRelation}
                      onChange={handleChange}
                      placeholder="Father / Mother / Uncle"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-hidden focus:ring-2 focus:ring-school-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor="guardianPhone" className="block text-xs font-bold text-gray-700 mb-1.5 uppercase tracking-wider">
                      Guardian Phone
                    </label>
                    <input
                      type="tel"
                      id="guardianPhone"
                      name="guardianPhone"
                      value={formData.guardianPhone}
                      onChange={handleChange}
                      placeholder="Alternate phone number"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-hidden focus:ring-2 focus:ring-school-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor="guardianEmail" className="block text-xs font-bold text-gray-700 mb-1.5 uppercase tracking-wider">
                      Guardian Email
                    </label>
                    <input
                      type="email"
                      id="guardianEmail"
                      name="guardianEmail"
                      value={formData.guardianEmail}
                      onChange={handleChange}
                      placeholder="guardian@example.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-hidden focus:ring-2 focus:ring-school-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor="guardianOccupation" className="block text-xs font-bold text-gray-700 mb-1.5 uppercase tracking-wider">
                      Occupation
                    </label>
                    <input
                      type="text"
                      id="guardianOccupation"
                      name="guardianOccupation"
                      value={formData.guardianOccupation}
                      onChange={handleChange}
                      placeholder="e.g. Business, Teacher, Service"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-hidden focus:ring-2 focus:ring-school-primary"
                    />
                  </div>

                  <div className="sm:col-span-2 md:col-span-3">
                    <label htmlFor="guardianAddress" className="block text-xs font-bold text-gray-700 mb-1.5 uppercase tracking-wider">
                      Residential Address <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      id="guardianAddress"
                      name="guardianAddress"
                      rows={3}
                      required
                      value={formData.guardianAddress}
                      onChange={handleChange}
                      placeholder="House / Village, Street, Near landmark, Tundla..."
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-hidden focus:ring-2 focus:ring-school-primary"
                    />
                  </div>
                </div>
              </div>

              {/* Section 3: Document Uploads */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-school-primary font-bold text-lg border-b pb-2">
                  <FileCheck className="w-5 h-5" />
                  <span>3. Document Attachments</span>
                </div>

                <div className="border-2 border-dashed border-gray-300 hover:border-school-primary rounded-2xl p-6 text-center transition-colors bg-gray-50">
                  <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                  <label htmlFor="docs" className="cursor-pointer">
                    <span className="text-school-primary font-bold hover:underline text-sm">
                      Upload Birth Certificate / Aadhar / Marksheet
                    </span>
                    <span className="text-xs text-gray-500 block mt-1">
                      (PNG, JPG, PDF up to 10MB. Multiple files can be selected)
                    </span>
                    <input
                      type="file"
                      id="docs"
                      multiple
                      onChange={handleDocumentChange}
                      className="hidden"
                    />
                  </label>

                  {formData.documentsUploaded && formData.documentsUploaded.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2 justify-center">
                      {formData.documentsUploaded.map((file, i) => (
                        <span key={i} className="inline-flex items-center gap-1.5 bg-white border border-gray-200 text-xs px-3 py-1 rounded-full text-gray-700 shadow-2xs">
                          <FileCheck className="w-3.5 h-3.5 text-emerald-600" />
                          <span>{file}</span>
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-school-primary hover:bg-school-primaryDark text-white px-8 py-3.5 rounded-full font-bold text-sm shadow-md hover:shadow-lg transition-all disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Submitting Application...</span>
                    </>
                  ) : (
                    <>
                      <GraduationCap className="w-5 h-5" />
                      <span>Submit Admission Application</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab('status')}
                  className="text-xs font-bold text-school-secondary hover:text-school-primary underline underline-offset-4"
                >
                  Already applied? Check status here &rarr;
                </button>
              </div>
            </form>
          )}
        </div>
      )}
    </div>
  );
};
