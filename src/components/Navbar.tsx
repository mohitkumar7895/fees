'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { useApp } from '@/context/AppContext';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/classes', label: 'Classes' },
  { href: '/teachers', label: 'Teachers' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const { isMobileNavOpen, toggleMobileNav, closeMobileNav } = useApp();

  const isActive = (path: string) => {
    if (!pathname) return false;
    if (path === '/' && pathname === '/') return true;
    if (path !== '/' && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="bg-gray-50 position-relative shadow-sm border-b border-gray-100 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-2.5">
          {/* Logo */}
          <Link href="/" className="inline-block py-1" onClick={closeMobileNav}>
            <div className="relative w-64 sm:w-80 h-16 sm:h-20">
              <Image
                src="/img/logo1.png"
                alt="A.K. Sunshine Logo"
                fill
                sizes="(max-width: 640px) 250px, 350px"
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center font-bold mx-auto">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-6 text-base tracking-wide transition-colors ${
                    active
                      ? 'text-school-primary font-black'
                      : 'text-school-secondary hover:text-school-primary'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/admission"
              className="hidden sm:inline-block bg-school-primary hover:bg-school-primaryDark text-white font-bold py-2.5 px-5 rounded-full shadow-sm text-sm uppercase tracking-wider transition-all"
            >
              Online Admission
            </Link>

            <Link
              href="/dashboard"
              className="hidden sm:inline-flex items-center gap-1.5 bg-school-secondary hover:bg-school-secondaryDark text-white font-bold py-2.5 px-5 rounded-full shadow-sm text-sm uppercase tracking-wider transition-all"
            >
              Dashboard ERP
            </Link>

            <button
              type="button"
              onClick={toggleMobileNav}
              aria-label="Toggle navigation"
              className="lg:hidden p-2 rounded-lg text-school-secondary hover:text-school-primary"
            >
              {isMobileNavOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileNavOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-6 py-4 space-y-2 shadow-lg animate-in slide-in-from-top">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMobileNav}
                className={`block py-2.5 px-3 rounded-lg font-bold text-base ${
                  active ? 'text-school-primary bg-school-primaryLight' : 'text-school-secondary hover:text-school-primary'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="pt-2 space-y-2">
            <Link
              href="/admission"
              onClick={closeMobileNav}
              className="block w-full text-center bg-school-primary text-white font-bold py-2.5 rounded-full text-sm uppercase tracking-wider shadow-sm"
            >
              Online Admission
            </Link>
            <Link
              href="/dashboard"
              onClick={closeMobileNav}
              className="block w-full text-center bg-school-secondary text-white font-bold py-2.5 rounded-full text-sm uppercase tracking-wider shadow-sm"
            >
              Dashboard ERP
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
