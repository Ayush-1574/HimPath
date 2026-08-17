'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Mail, Clock, Youtube, Linkedin, Menu, X } from 'lucide-react';

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Vernacular Architecture', href: '/vernacular-architecture' },
    { name: 'Techniques', href: '/techniques' },
    { name: 'Activities', href: '/activities' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Downloads', href: '/downloads' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="w-full bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      {/* 1. TOP INFORMATION BAR */}
      <div className="border-b border-gray-100 bg-white text-xs text-gray-600">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-wrap items-center justify-between gap-3">
          {/* Social Icons */}
          <div className="flex items-center space-x-3">
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-red-600 transition-colors"
              aria-label="YouTube"
            >
              <Youtube className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-700 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>

          {/* Email & Working Hours */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-8">
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4 text-emerald-600" />
              <a
                href="mailto:ceva@iitrpr.ac.in"
                className="hover:text-emerald-700 font-medium transition-colors"
              >
                ceva@iitrpr.ac.in
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4 text-emerald-600" />
              <span>
                Open hours: <strong className="font-medium text-gray-700">Mon – Fri 8.00 am – 6.00 pm</strong>
              </span>
            </div>
          </div>

          {/* IIT Ropar & Department Badges */}
          <div className="flex items-center space-x-2">
            <a
              href="https://www.iitrpr.ac.in"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0070f3] hover:bg-[#005bb5] text-white px-3 py-1 rounded text-xs font-semibold tracking-wide transition-colors"
            >
              IIT Ropar
            </a>
            <span className="text-gray-300">/</span>
            <a
              href="https://civil.iitrpr.ac.in"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0070f3] hover:bg-[#005bb5] text-white px-3 py-1 rounded text-xs font-semibold tracking-wide transition-colors"
            >
              Dept. of Civil Engineering
            </a>
          </div>
        </div>
      </div>

      {/* 2. MAIN HEADER & NAVIGATION */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-2 sm:py-3">
          {/* CEVA Logo Brand Block */}
          <Link href="/" className="flex items-center group">
            <div className="flex items-stretch rounded-sm overflow-hidden shadow-sm border border-[#e65100]">
              {/* Mountain Emblem Round Icon */}
              <div className="bg-white flex items-center justify-center p-1.5 border-r border-[#e65100]">
                <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 border-black flex items-center justify-center bg-sky-600">
                  {/* Mountain peak styling */}
                  <div className="absolute inset-0 bg-sky-600">
                    <div className="absolute bottom-4 left-1 w-0 h-0 border-l-[14px] border-l-transparent border-r-[14px] border-r-transparent border-b-[20px] border-b-white" />
                    <div className="absolute bottom-4 left-4 w-0 h-0 border-l-[18px] border-l-transparent border-r-[18px] border-r-transparent border-b-[26px] border-b-white" />
                    <div className="absolute bottom-4 right-1 w-0 h-0 border-l-[14px] border-l-transparent border-r-[14px] border-r-transparent border-b-[20px] border-b-white" />
                    <div className="absolute bottom-4 left-6 w-3 h-3 bg-amber-800" />
                  </div>
                  {/* CEVA badge text pill */}
                  <div className="absolute bottom-0 inset-x-0 bg-black text-white text-center font-extrabold text-[11px] sm:text-[13px] py-0.5 tracking-wider">
                    CEVA
                  </div>
                </div>
              </div>

              {/* Orange Title Banner */}
              <div className="bg-[#f25c05] text-black px-3 sm:px-5 py-2 flex flex-col justify-center select-none">
                <span className="text-xs sm:text-base font-bold leading-tight">Centre of</span>
                <span className="text-xs sm:text-base font-bold leading-tight">Excellence on</span>
                <span className="text-xs sm:text-base font-medium leading-tight">
                  sustainable <strong className="font-black">Vernacular</strong>
                </span>
                <span className="text-xs sm:text-base font-bold leading-tight">Architecture</span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-7 text-[15px] font-semibold text-gray-700">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`transition-colors py-1 relative hover:text-black ${
                    isActive ? 'text-black font-extrabold' : 'text-gray-600'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#f25c05]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Mobile menu button */}
          <div className="xl:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-gray-200 px-4 pt-2 pb-6 space-y-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive
                    ? 'bg-orange-50 text-[#e65100] font-bold'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
