import React from 'react';
import Link from 'next/link';
import { Phone, Mail, CreditCard, FileText, User } from 'lucide-react';
import { schoolInfo } from '@/lib/data';

export const TopBar: React.FC = () => {
  return (
    <div className="bg-[#1c1f23] text-white text-xs md:text-sm py-2 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
        {/* Contact numbers and email */}
        <div className="flex items-center flex-wrap gap-4 text-gray-200">
          <a
            href={`tel:${schoolInfo.contact.phone}`}
            className="flex items-center gap-1.5 hover:text-school-primary transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-school-primary" />
            <span>{schoolInfo.contact.phoneDisplay}</span>
          </a>
          <span className="hidden sm:inline text-gray-600">|</span>
          <a
            href={`mailto:${schoolInfo.contact.email}`}
            className="flex items-center gap-1.5 hover:text-school-primary transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-school-primary" />
            <span>{schoolInfo.contact.email}</span>
          </a>
        </div>

        {/* Action links */}
        <div className="flex items-center gap-3 text-xs">
          <Link
            href="/contact"
            className="flex items-center gap-1 text-gray-300 hover:text-white transition-colors pl-3 border-l border-gray-700"
          >
            <CreditCard className="w-3 h-3 text-school-accent" />
            <span>Fee Payment</span>
          </Link>
          <Link
            href="/admission"
            className="flex items-center gap-1 text-gray-300 hover:text-white transition-colors pl-3 border-l border-gray-700"
          >
            <FileText className="w-3 h-3 text-school-primary" />
            <span>Online Admission</span>
          </Link>
          <Link
            href="/dashboard"
            className="flex items-center gap-1 text-gray-300 hover:text-white transition-colors pl-3 border-l border-gray-700"
          >
            <User className="w-3 h-3 text-school-accent" />
            <span>Staff / ERP Login</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
