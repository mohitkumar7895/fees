'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { AdmissionFormData } from '@/models/admission';

export interface ToastMessage {
  id: string;
  type: 'success' | 'error' | 'info';
  title?: string;
  message: string;
}

interface AppContextType {
  // Mobile nav state
  isMobileNavOpen: boolean;
  toggleMobileNav: () => void;
  closeMobileNav: () => void;

  // Toasts
  toasts: ToastMessage[];
  showToast: (toast: Omit<ToastMessage, 'id'>) => void;
  dismissToast: (id: string) => void;

  // Admission draft storage
  admissionDraft: Partial<AdmissionFormData>;
  updateAdmissionDraft: (fields: Partial<AdmissionFormData>) => void;
  clearAdmissionDraft: () => void;

  // Gallery lightbox
  activeLightboxImg: string | null;
  openLightbox: (imgSrc: string) => void;
  closeLightbox: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const DRAFT_STORAGE_KEY = 'aks_admission_draft';

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [toasts, setToasts] = useState<ToastMessage[]>([]);
  const [activeLightboxImg, setActiveLightboxImg] = useState<string | null>(null);
  const [admissionDraft, setAdmissionDraft] = useState<Partial<AdmissionFormData>>({});

  // Load draft from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(DRAFT_STORAGE_KEY);
      if (saved) {
        setAdmissionDraft(JSON.parse(saved));
      }
    } catch {
      // ignore
    }
  }, []);

  const toggleMobileNav = () => setIsMobileNavOpen((prev) => !prev);
  const closeMobileNav = () => setIsMobileNavOpen(false);

  const showToast = ({ type, title, message }: Omit<ToastMessage, 'id'>) => {
    const id = `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
    setToasts((prev) => [...prev, { id, type, title, message }]);

    // Auto-dismiss after 4 seconds
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4500);
  };

  const dismissToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const updateAdmissionDraft = (fields: Partial<AdmissionFormData>) => {
    setAdmissionDraft((prev) => {
      const updated = { ...prev, ...fields };
      try {
        localStorage.setItem(DRAFT_STORAGE_KEY, JSON.stringify(updated));
      } catch {
        // ignore
      }
      return updated;
    });
  };

  const clearAdmissionDraft = () => {
    setAdmissionDraft({});
    try {
      localStorage.removeItem(DRAFT_STORAGE_KEY);
    } catch {
      // ignore
    }
  };

  const openLightbox = (imgSrc: string) => setActiveLightboxImg(imgSrc);
  const closeLightbox = () => setActiveLightboxImg(null);

  return (
    <AppContext.Provider
      value={{
        isMobileNavOpen,
        toggleMobileNav,
        closeMobileNav,
        toasts,
        showToast,
        dismissToast,
        admissionDraft,
        updateAdmissionDraft,
        clearAdmissionDraft,
        activeLightboxImg,
        openLightbox,
        closeLightbox,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}
