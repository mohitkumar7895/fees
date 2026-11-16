'use client';

import React, { useState } from 'react';
import { MapPin, Mail, Phone, Clock, Send, Loader2, CheckCircle2 } from 'lucide-react';
import { useApp } from '@/context/AppContext';

export const ContactSection: React.FC = () => {
  const { showToast } = useApp();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setIsSuccess(true);
        showToast({
          type: 'success',
          title: 'Message Sent!',
          message: 'Your message has been received successfully.',
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        showToast({
          type: 'error',
          title: 'Error',
          message: data.message || 'Please check your inputs and try again.',
        });
      }
    } catch {
      showToast({
        type: 'error',
        title: 'Error',
        message: 'Could not send message. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-12 pb-16 bg-white" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center pb-6">
          <p className="section-title px-5 mb-2">
            <span>Get In Touch</span>
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-school-secondary mb-4">
            Contact Us For Any Query
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Form */}
          <div className="lg:col-span-7">
            {isSuccess ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h3 className="text-2xl font-bold text-emerald-900">Thank You!</h3>
                <p className="text-sm text-emerald-800">
                  Your message has been received. Our team will contact you shortly.
                </p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="bg-school-primary text-white font-bold py-2 px-6 rounded-full text-sm"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name *"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-hidden focus:border-school-primary focus:ring-1 focus:ring-school-primary bg-gray-50/50"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email *"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-hidden focus:border-school-primary focus:ring-1 focus:ring-school-primary bg-gray-50/50"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject *"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-hidden focus:border-school-primary focus:ring-1 focus:ring-school-primary bg-gray-50/50"
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    rows={6}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Message *"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-hidden focus:border-school-primary focus:ring-1 focus:ring-school-primary bg-gray-50/50"
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center gap-2 bg-school-primary hover:bg-school-primaryDark text-white font-bold py-3 px-8 rounded-full shadow-sm transition-all text-sm disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Contact Details List */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-start p-3.5 rounded-2xl bg-gray-50/70 border border-gray-100 hover:border-school-primary/30 hover:bg-gray-50 transition-all duration-300 transform hover:-translate-x-1">
              <div className="w-12 h-12 rounded-xl bg-school-primary text-white flex items-center justify-center shrink-0 mr-4 shadow-md">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h5 className="text-lg font-bold text-school-secondary mb-1">Address</h5>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Nagla Sikandar, Punjab National Bank ke Samne wale Raste Par, Tundla, Firozabad <br />
                  Pin 283204
                </p>
              </div>
            </div>

            <div className="flex items-start p-3.5 rounded-2xl bg-gray-50/70 border border-gray-100 hover:border-school-primary/30 hover:bg-gray-50 transition-all duration-300 transform hover:-translate-x-1">
              <div className="w-12 h-12 rounded-xl bg-school-primary text-white flex items-center justify-center shrink-0 mr-4 shadow-md">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h5 className="text-lg font-bold text-school-secondary mb-1">Email</h5>
                <a href="mailto:aksunshinetdl@gmail.com" className="text-sm text-gray-600 hover:text-school-primary transition-colors">
                  aksunshinetdl@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start p-3.5 rounded-2xl bg-gray-50/70 border border-gray-100 hover:border-school-primary/30 hover:bg-gray-50 transition-all duration-300 transform hover:-translate-x-1">
              <div className="w-12 h-12 rounded-xl bg-school-primary text-white flex items-center justify-center shrink-0 mr-4 shadow-md">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h5 className="text-lg font-bold text-school-secondary mb-1">Phone</h5>
                <a href="tel:+916396670330" className="text-sm text-gray-600 hover:text-school-primary transition-colors">
                  +91-6396670330
                </a>
              </div>
            </div>

            <div className="flex items-start p-3.5 rounded-2xl bg-gray-50/70 border border-gray-100 hover:border-school-primary/30 hover:bg-gray-50 transition-all duration-300 transform hover:-translate-x-1">
              <div className="w-12 h-12 rounded-xl bg-school-primary text-white flex items-center justify-center shrink-0 mr-4 shadow-md">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div>
                <h5 className="text-lg font-bold text-school-secondary mb-1">Visiting Hours</h5>
                <p className="text-sm font-semibold text-gray-700">Monday – Saturday:</p>
                <p className="text-sm text-gray-600">08:00 AM - 03:30 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
