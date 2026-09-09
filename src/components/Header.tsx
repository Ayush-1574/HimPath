'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown, ExternalLink, Mail, Linkedin } from 'lucide-react';
import { SITE_CONTACT } from '@/lib/siteData';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#08202f]/90 backdrop-blur-md border-b border-white/10 shadow-lg">
      {/* Top micro bar */}
      <div className="hidden md:block border-b border-white/5 bg-[#051621]/60 text-[11px] text-slate-300 py-1">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <span className="font-semibold tracking-wider text-[#e4c982]">
              CENTRE OF EXCELLENCE
            </span>
            <span className="text-slate-500">•</span>
            <span>Department of Civil Engineering, IIT Ropar</span>
          </div>
          <div className="flex items-center space-x-5 text-slate-300">
            <a
              href={`mailto:${SITE_CONTACT.email}`}
              className="hover:text-[#e4c982] transition-colors flex items-center gap-1.5"
            >
              <Mail className="w-3 h-3 text-[#258b82]" />
              <span>{SITE_CONTACT.email}</span>
            </a>
            <span className="text-slate-500">|</span>
            <a
              href={SITE_CONTACT.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#e4c982] transition-colors flex items-center gap-1"
            >
              <Linkedin className="w-3 h-3 text-[#258b82]" />
              <span>linkedin/{SITE_CONTACT.linkedinHandle}</span>
            </a>
            <span className="text-slate-500">|</span>
            <a
              href="https://www.iitrpr.ac.in"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1 text-[10.5px] uppercase font-bold tracking-wider"
            >
              <span>IIT Ropar Portal</span>
              <ExternalLink className="w-2.5 h-2.5 opacity-70" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-[76px] sm:h-[86px] flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            href="/#home"
            onClick={closeMenu}
            className="flex items-center gap-3 group transition-transform duration-200 hover:-translate-y-0.5"
          >
            <div className="bg-white/95 rounded-lg px-2.5 py-1.5 shadow-md flex items-center border border-white/40">
              <div className="relative h-10 sm:h-12 w-32 sm:w-40">
                <Image
                  src="/HiMPaTH-logo.svg"
                  alt="HiMPaTH - Himalayan Pathways for Transport and Highways"
                  fill
                  priority
                  className="object-contain"
                />
              </div>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1">
            {/* ABOUT DROPDOWN */}
            <div
              className="relative group"
              onMouseEnter={() => setActiveDropdown('about')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href="/about"
                className="flex items-center gap-1 px-3 py-2 text-[12px] font-bold tracking-[0.4px] text-slate-100 group-hover:text-[#e4c982] transition-colors uppercase"
              >
                <span>ABOUT</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-70 group-hover:rotate-180 transition-transform duration-200" />
              </Link>
              <div className="absolute top-[38px] left-0 min-w-[240px] p-2 bg-white rounded-xl border border-[#dbe5e4] shadow-2xl opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 ease-out z-50">
                <Link
                  href="/about"
                  className="block px-3 py-2 text-xs font-semibold text-[#173f52] rounded-lg hover:bg-[#eef5f3] hover:text-[#258b82] transition-colors"
                >
                  About HiMPaTH (Overview)
                </Link>
                <Link
                  href="/about/vision-mission"
                  className="block px-3 py-2 text-xs font-semibold text-[#173f52] rounded-lg hover:bg-[#eef5f3] hover:text-[#258b82] transition-colors"
                >
                  Vision &amp; Mission
                </Link>
                <Link
                  href="/about/objectives"
                  className="block px-3 py-2 text-xs font-semibold text-[#173f52] rounded-lg hover:bg-[#eef5f3] hover:text-[#258b82] transition-colors"
                >
                  Strategic Objectives (5 Objectives)
                </Link>
                <Link
                  href="/about/mandate"
                  className="block px-3 py-2 text-xs font-semibold text-[#173f52] rounded-lg hover:bg-[#eef5f3] hover:text-[#258b82] transition-colors"
                >
                  Institutional Mandate &amp; Host
                </Link>
              </div>
            </div>

            {/* RESEARCH HUB DROPDOWN */}
            <div
              className="relative group"
              onMouseEnter={() => setActiveDropdown('research')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href="/research"
                className="flex items-center gap-1 px-3 py-2 text-[12px] font-bold tracking-[0.4px] text-slate-100 group-hover:text-[#e4c982] transition-colors uppercase"
              >
                <span>RESEARCH HUB</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-70 group-hover:rotate-180 transition-transform duration-200" />
              </Link>
              <div className="absolute top-[38px] left-0 min-w-[260px] p-2 bg-white rounded-xl border border-[#dbe5e4] shadow-2xl opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 ease-out z-50">
                <Link
                  href="/research"
                  className="block px-3 py-2 text-xs font-semibold text-[#173f52] rounded-lg hover:bg-[#eef5f3] hover:text-[#258b82] transition-colors"
                >
                  Research Hub (Overview)
                </Link>
                <Link
                  href="/research/facilities"
                  className="block px-3 py-2 text-xs font-semibold text-[#173f52] rounded-lg hover:bg-[#eef5f3] hover:text-[#258b82] transition-colors"
                >
                  Research Facilities (01 – 04)
                </Link>
                <Link
                  href="/research/pillars"
                  className="block px-3 py-2 text-xs font-semibold text-[#173f52] rounded-lg hover:bg-[#eef5f3] hover:text-[#258b82] transition-colors"
                >
                  Research Pillars &amp; Themes
                </Link>
                <Link
                  href="/research/pipeline"
                  className="block px-3 py-2 text-xs font-semibold text-[#173f52] rounded-lg hover:bg-[#eef5f3] hover:text-[#258b82] transition-colors"
                >
                  Lab → Field Pipeline
                </Link>
              </div>
            </div>

            {/* PROJECTS DROPDOWN */}
            <div
              className="relative group"
              onMouseEnter={() => setActiveDropdown('projects')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href="/projects"
                className="flex items-center gap-1 px-3 py-2 text-[12px] font-bold tracking-[0.4px] text-slate-100 group-hover:text-[#e4c982] transition-colors uppercase"
              >
                <span>PROJECTS</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-70 group-hover:rotate-180 transition-transform duration-200" />
              </Link>
              <div className="absolute top-[38px] left-0 min-w-[260px] p-2 bg-white rounded-xl border border-[#dbe5e4] shadow-2xl opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 ease-out z-50">
                <Link
                  href="/projects"
                  className="block px-3 py-2 text-xs font-semibold text-[#173f52] rounded-lg hover:bg-[#eef5f3] hover:text-[#258b82] transition-colors"
                >
                  Projects Directory (Overview)
                </Link>
                <Link
                  href="/projects/ongoing"
                  className="block px-3 py-2 text-xs font-semibold text-[#173f52] rounded-lg hover:bg-[#eef5f3] hover:text-[#258b82] transition-colors"
                >
                  Ongoing Funded Projects &amp; Proposals
                </Link>
                <Link
                  href="/projects/completed"
                  className="block px-3 py-2 text-xs font-semibold text-[#173f52] rounded-lg hover:bg-[#eef5f3] hover:text-[#258b82] transition-colors"
                >
                  Completed Projects
                </Link>
                <Link
                  href="/projects/collaborations"
                  className="block px-3 py-2 text-xs font-semibold text-[#173f52] rounded-lg hover:bg-[#eef5f3] hover:text-[#258b82] transition-colors"
                >
                  Institutional Engagement (Ecosystem)
                </Link>
              </div>
            </div>

            {/* MEMBERS DROPDOWN */}
            <div
              className="relative group"
              onMouseEnter={() => setActiveDropdown('team')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href="/team"
                className="flex items-center gap-1 px-3 py-2 text-[12px] font-bold tracking-[0.4px] text-slate-100 group-hover:text-[#e4c982] transition-colors uppercase"
              >
                <span>MEMBERS</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-70 group-hover:rotate-180 transition-transform duration-200" />
              </Link>
              <div className="absolute top-[38px] left-0 min-w-[220px] p-2 bg-white rounded-xl border border-[#dbe5e4] shadow-2xl opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 ease-out z-50">
                <Link
                  href="/team"
                  className="block px-3 py-2 text-xs font-semibold text-[#173f52] rounded-lg hover:bg-[#eef5f3] hover:text-[#258b82] transition-colors"
                >
                  Members Directory
                </Link>
                <Link
                  href="/team/faculty"
                  className="block px-3 py-2 text-xs font-semibold text-[#173f52] rounded-lg hover:bg-[#eef5f3] hover:text-[#258b82] transition-colors"
                >
                  Faculty Coordinators
                </Link>
                <Link
                  href="/team/advisors"
                  className="block px-3 py-2 text-xs font-semibold text-[#173f52] rounded-lg hover:bg-[#eef5f3] hover:text-[#258b82] transition-colors"
                >
                  Advisory Board &amp; Stakeholders
                </Link>
                <Link
                  href="/team/scholars"
                  className="block px-3 py-2 text-xs font-semibold text-[#173f52] rounded-lg hover:bg-[#eef5f3] hover:text-[#258b82] transition-colors"
                >
                  Research Scholars &amp; Staff
                </Link>
              </div>
            </div>

            {/* NEWS & EVENTS DROPDOWN */}
            <div
              className="relative group"
              onMouseEnter={() => setActiveDropdown('news')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href="/news"
                className="flex items-center gap-1 px-3 py-2 text-[12px] font-bold tracking-[0.4px] text-slate-100 group-hover:text-[#e4c982] transition-colors uppercase"
              >
                <span>NEWS &amp; EVENTS</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-70 group-hover:rotate-180 transition-transform duration-200" />
              </Link>
              <div className="absolute top-[38px] left-0 min-w-[220px] p-2 bg-white rounded-xl border border-[#dbe5e4] shadow-2xl opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 ease-out z-50">
                <Link
                  href="/news"
                  className="block px-3 py-2 text-xs font-semibold text-[#173f52] rounded-lg hover:bg-[#eef5f3] hover:text-[#258b82] transition-colors"
                >
                  News &amp; Events Hub
                </Link>
                <Link
                  href="/news/updates"
                  className="block px-3 py-2 text-xs font-semibold text-[#173f52] rounded-lg hover:bg-[#eef5f3] hover:text-[#258b82] transition-colors"
                >
                  Events &amp; Site Visits
                </Link>
                <Link
                  href="/news/publications"
                  className="block px-3 py-2 text-xs font-semibold text-[#173f52] rounded-lg hover:bg-[#eef5f3] hover:text-[#258b82] transition-colors"
                >
                  Scientific Publications
                </Link>
                <Link
                  href="/news/workshops"
                  className="block px-3 py-2 text-xs font-semibold text-[#173f52] rounded-lg hover:bg-[#eef5f3] hover:text-[#258b82] transition-colors"
                >
                  Workshops &amp; Training
                </Link>
              </div>
            </div>

            {/* CONTACT BUTTON */}
            <Link
              href="/contact"
              className="ml-3 px-4 py-2 text-xs font-extrabold tracking-wider uppercase rounded-lg bg-[#c9a45b] text-[#102b3c] hover:bg-[#e4c982] transition-all shadow-md"
            >
              CONTACT US
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-white hover:text-[#e4c982] focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#071b28] border-b border-white/10 px-4 pt-2 pb-6 space-y-3 text-sm">
          <Link
            href="/"
            onClick={closeMenu}
            className="block py-2 text-slate-200 hover:text-[#e4c982] font-bold uppercase tracking-wider"
          >
            Home
          </Link>

          <div>
            <span className="block py-1 text-xs font-bold text-[#e4c982] uppercase tracking-wider">About</span>
            <div className="pl-3 space-y-1.5 text-xs text-slate-300">
              <Link href="/about" onClick={closeMenu} className="block py-1 hover:text-white">About Overview</Link>
              <Link href="/about/vision-mission" onClick={closeMenu} className="block py-1 hover:text-white">Vision &amp; Mission</Link>
              <Link href="/about/objectives" onClick={closeMenu} className="block py-1 hover:text-white">5 Strategic Objectives</Link>
              <Link href="/about/mandate" onClick={closeMenu} className="block py-1 hover:text-white">Institutional Mandate</Link>
            </div>
          </div>

          <div>
            <span className="block py-1 text-xs font-bold text-[#e4c982] uppercase tracking-wider">Research Hub</span>
            <div className="pl-3 space-y-1.5 text-xs text-slate-300">
              <Link href="/research" onClick={closeMenu} className="block py-1 hover:text-white">Research Hub Overview</Link>
              <Link href="/research/facilities" onClick={closeMenu} className="block py-1 hover:text-white">Research Facilities</Link>
              <Link href="/research/pillars" onClick={closeMenu} className="block py-1 hover:text-white">Research Pillars</Link>
              <Link href="/research/pipeline" onClick={closeMenu} className="block py-1 hover:text-white">Lab → Field Pipeline</Link>
            </div>
          </div>

          <div>
            <span className="block py-1 text-xs font-bold text-[#e4c982] uppercase tracking-wider">Projects</span>
            <div className="pl-3 space-y-1.5 text-xs text-slate-300">
              <Link href="/projects" onClick={closeMenu} className="block py-1 hover:text-white">Projects Directory</Link>
              <Link href="/projects/ongoing" onClick={closeMenu} className="block py-1 hover:text-white">Ongoing Funded Projects</Link>
              <Link href="/projects/completed" onClick={closeMenu} className="block py-1 hover:text-white">Completed Projects</Link>
              <Link href="/projects/collaborations" onClick={closeMenu} className="block py-1 hover:text-white">Institutional Engagement</Link>
            </div>
          </div>

          <div>
            <span className="block py-1 text-xs font-bold text-[#e4c982] uppercase tracking-wider">Members</span>
            <div className="pl-3 space-y-1.5 text-xs text-slate-300">
              <Link href="/team" onClick={closeMenu} className="block py-1 hover:text-white">Members Directory</Link>
              <Link href="/team/faculty" onClick={closeMenu} className="block py-1 hover:text-white">Faculty Coordinators</Link>
              <Link href="/team/advisors" onClick={closeMenu} className="block py-1 hover:text-white">Advisory Board</Link>
              <Link href="/team/scholars" onClick={closeMenu} className="block py-1 hover:text-white">Research Scholars</Link>
            </div>
          </div>

          <div>
            <span className="block py-1 text-xs font-bold text-[#e4c982] uppercase tracking-wider">News &amp; Events</span>
            <div className="pl-3 space-y-1.5 text-xs text-slate-300">
              <Link href="/news" onClick={closeMenu} className="block py-1 hover:text-white">News Hub</Link>
              <Link href="/news/updates" onClick={closeMenu} className="block py-1 hover:text-white">Events &amp; Site Visits</Link>
              <Link href="/news/publications" onClick={closeMenu} className="block py-1 hover:text-white">Scientific Publications</Link>
              <Link href="/news/workshops" onClick={closeMenu} className="block py-1 hover:text-white">Workshops &amp; Training</Link>
            </div>
          </div>

          <div className="pt-2">
            <Link
              href="/contact"
              onClick={closeMenu}
              className="block w-full text-center py-2.5 bg-[#c9a45b] text-[#102b3c] font-black text-xs uppercase tracking-wider rounded-lg"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
