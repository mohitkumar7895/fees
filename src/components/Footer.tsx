'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  MapPin,
  Mail,
  Phone,
  Facebook,
  Youtube,
  Instagram,
  ChevronRight,
  Loader2,
  CheckCircle2,
} from 'lucide-react';
import { schoolInfo } from '@/lib/data';
import { useApp } from '@/context/AppContext';

export const Footer: React.FC = () => {
  const { showToast } = useApp();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, name }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setIsSubscribed(true);
        showToast({
          type: 'success',
          title: 'Subscribed',
          message: 'Thank you for subscribing to our newsletter.',
        });
        setName('');
        setEmail('');
      } else {
        showToast({
          type: 'error',
          title: 'Error',
          message: data.message || 'Subscription failed.',
        });
      }
    } catch {
      showToast({
        type: 'error',
        title: 'Error',
        message: 'Could not connect to server.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-school-secondary text-white mt-12 pt-16 pb-6 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12">
          {/* Col 1 */}
          <div className="space-y-4">
            <Link href="/" className="inline-block bg-white/95 p-2 rounded-lg">
              <div className="relative w-64 h-14">
                <Image
                  src="/img/logo1.png"
                  alt="A.K. Sunshine Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed">
              A.K. Sunshine Convent School is an educational institution located in Nagla Sikandar, Tundla, Firozabad, Uttar Pradesh.
            </p>
            <div className="flex items-center gap-2 pt-2">
              <a
                href="https://www.facebook.com/profile.php?id=100063942094912&mibextid=wwXIfr&rdid=ZZrA6jzeupi6MxYb&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1AMwAu6YeX%2F%3Fmibextid%3DwwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-school-primary text-school-primary hover:bg-school-primary hover:text-white flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="http://www.youtube.com/@a.k.sunshineconventschool5140?feature=shared"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-school-primary text-school-primary hover:bg-school-primary hover:text-white flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="http://www.instagram.com/firoz3496?utm_source=qr&igsh=MTZ0c285dTJwaXRwcw=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-school-primary text-school-primary hover:bg-school-primary hover:text-white flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Col 2 */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-school-primary mb-4">Get In Touch</h3>
            <div className="flex items-start">
              <MapPin className="w-5 h-5 text-school-primary shrink-0 mr-3 mt-1" />
              <div className="text-sm text-gray-300">
                <h5 className="text-white font-bold text-base">Address</h5>
                <p>
                  Nagla Sikandar, Punjab National Bank ke Samne wale Raste Par, <br />
                  Tundla, Firozabad <br />
                  Pin 283204
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <Mail className="w-5 h-5 text-school-primary shrink-0 mr-3 mt-1" />
              <div className="text-sm text-gray-300">
                <h5 className="text-white font-bold text-base">Email</h5>
                <p>aksunshinetdl@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start">
              <Phone className="w-5 h-5 text-school-primary shrink-0 mr-3 mt-1" />
              <div className="text-sm text-gray-300">
                <h5 className="text-white font-bold text-base">Phone</h5>
                <p>+91-6396670330</p>
              </div>
            </div>
          </div>

          {/* Col 3 */}
          <div>
            <h3 className="text-2xl font-bold text-school-primary mb-4">Quick Links</h3>
            <div className="flex flex-col space-y-2 text-sm">
              <Link href="/" className="text-gray-300 hover:text-white flex items-center">
                <ChevronRight className="w-4 h-4 mr-1 text-school-primary" /> Home
              </Link>
              <Link href="/about" className="text-gray-300 hover:text-white flex items-center">
                <ChevronRight className="w-4 h-4 mr-1 text-school-primary" /> About Us
              </Link>
              <Link href="/classes" className="text-gray-300 hover:text-white flex items-center">
                <ChevronRight className="w-4 h-4 mr-1 text-school-primary" /> Our Classes
              </Link>
              <Link href="/teachers" className="text-gray-300 hover:text-white flex items-center">
                <ChevronRight className="w-4 h-4 mr-1 text-school-primary" /> Our Teachers
              </Link>
              <Link href="/gallery" className="text-gray-300 hover:text-white flex items-center">
                <ChevronRight className="w-4 h-4 mr-1 text-school-primary" /> Gallery
              </Link>
              <Link href="/blog" className="text-gray-300 hover:text-white flex items-center">
                <ChevronRight className="w-4 h-4 mr-1 text-school-primary" /> Our Blog
              </Link>
              <Link href="/contact" className="text-gray-300 hover:text-white flex items-center">
                <ChevronRight className="w-4 h-4 mr-1 text-school-primary" /> Contact Us
              </Link>
            </div>
          </div>

          {/* Col 4 */}
          <div>
            <h3 className="text-2xl font-bold text-school-primary mb-4">Newsletter</h3>
            {isSubscribed ? (
              <div className="bg-emerald-900/40 border border-emerald-500 rounded-xl p-4 text-center">
                <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
                <p className="text-sm font-bold text-emerald-200">Thank you for subscribing!</p>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-3">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded text-sm bg-white text-gray-900 placeholder-gray-500 focus:outline-hidden"
                />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded text-sm bg-white text-gray-900 placeholder-gray-500 focus:outline-hidden"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-school-primary hover:bg-school-primaryDark text-white font-bold py-3 rounded text-sm transition-colors uppercase tracking-wider"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Now'}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom copyright matching original footer.php */}
        <div className="pt-8 border-t border-school-primary/20 text-center text-sm text-gray-300 space-y-1">
          <p className="m-0">
            &copy;{' '}
            <a className="text-school-primary font-bold hover:underline" href="https://www.aksunshine.in">
              AK SUNSINE CONVENT SCHOOL
            </a>
            . All Rights Reserved. Designed by{' '}
            <a
              className="text-school-primary font-bold hover:underline"
              href="https://provisioningtech.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              PROVISIONING TECH
            </a>
          </p>
          <p className="text-xs text-gray-400">
            Distributed By:{' '}
            <a
              href="https://provisioningtech.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-school-primary hover:underline"
            >
              PT Team
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
