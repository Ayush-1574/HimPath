import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, MapPin, ExternalLink, Globe, Linkedin } from 'lucide-react';
import { SITE_CONTACT } from '@/lib/siteData';

export default function Footer() {
  return (
    <footer className="bg-[#071d2b] text-[#aebfc4] pt-16 pb-8 border-t border-white/10">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
          {/* Column 1: HiMPaTH Overview */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="bg-white/95 rounded-md p-1.5 inline-block shadow-sm">
                <div className="relative h-10 w-32">
                  <Image
                    src="/HiMPaTH-logo.svg"
                    alt="HiMPaTH Logo"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
            <p className="text-white font-bold text-base tracking-tight">
              Himalayan Pathways for Transport and Highways
            </p>
            <p className="text-xs text-[#8ca4ab] leading-relaxed">
              Centre of Excellence<br />
              Department of Civil Engineering<br />
              Indian Institute of Technology Ropar<br />
              Rupnagar, Punjab – 140001, India
            </p>
            <div className="pt-2">
              <span className="inline-block text-[11px] font-bold text-[#e4c982] bg-white/5 border border-[#e4c982]/30 px-3 py-1 rounded-full uppercase tracking-wider">
                Centre of Excellence · IIT Ropar
              </span>
            </div>
          </div>

          {/* Column 2: Explore Navigation */}
          <div className="md:col-span-4 space-y-3">
            <h3 className="text-white font-bold text-sm uppercase tracking-wider text-[#e4c982]">
              Explore
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/about/vision-mission" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-[#258b82]">›</span> Vision &amp; Mission
                </Link>
              </li>
              <li>
                <Link href="/about/objectives" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-[#258b82]">›</span> 5 Strategic Objectives
                </Link>
              </li>
              <li>
                <Link href="/about/mandate" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-[#258b82]">›</span> Institutional Mandate
                </Link>
              </li>
              <li>
                <Link href="/research/facilities" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-[#258b82]">›</span> Research Facilities (01–04)
                </Link>
              </li>
              <li>
                <Link href="/projects/ongoing" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-[#258b82]">›</span> Ongoing Funded Projects
                </Link>
              </li>
              <li>
                <Link href="/projects/collaborations" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-[#258b82]">›</span> Multi-Agency Ecosystem
                </Link>
              </li>
              <li>
                <Link href="/team/faculty" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-[#258b82]">›</span> Faculty Coordinators
                </Link>
              </li>
              <li>
                <Link href="/team/advisors" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-[#258b82]">›</span> Advisory Board
                </Link>
              </li>
              <li>
                <Link href="/news/updates" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-[#258b82]">›</span> Events &amp; Site Visits
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Connect */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="text-white font-bold text-sm uppercase tracking-wider text-[#e4c982]">
              Connect
            </h3>
            <div className="space-y-2.5 text-xs text-[#8ca4ab]">
              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-[#258b82] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[10px] text-slate-400 uppercase font-semibold">Official Email</span>
                  <a href={`mailto:${SITE_CONTACT.email}`} className="text-slate-200 hover:text-[#e4c982] transition-colors font-medium">
                    {SITE_CONTACT.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2 pt-1">
                <Linkedin className="w-4 h-4 text-[#258b82] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[10px] text-slate-400 uppercase font-semibold">LinkedIn</span>
                  <a
                    href={SITE_CONTACT.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-200 hover:text-[#e4c982] transition-colors flex items-center gap-1"
                  >
                    <span>{SITE_CONTACT.linkedinHandle}</span>
                    <ExternalLink className="w-3 h-3 opacity-60" />
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2 pt-1">
                <Globe className="w-4 h-4 text-[#258b82] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[10px] text-slate-400 uppercase font-semibold">Institute Website</span>
                  <a
                    href="https://www.iitrpr.ac.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-200 hover:text-[#e4c982] transition-colors flex items-center gap-1"
                  >
                    <span>www.iitrpr.ac.in</span>
                    <ExternalLink className="w-3 h-3 opacity-60" />
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2 pt-1">
                <MapPin className="w-4 h-4 text-[#258b82] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[10px] text-slate-400 uppercase font-semibold">Location</span>
                  <a
                    href="https://maps.google.com/?q=IIT+Ropar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-200 hover:text-[#e4c982] transition-colors flex items-center gap-1"
                  >
                    <span>IIT Ropar Main Campus</span>
                    <ExternalLink className="w-3 h-3 opacity-60" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-[#71858c]">
          <p>© {new Date().getFullYear()} HiMPaTH · Centre of Excellence, IIT Ropar. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/about" className="hover:text-white transition-colors">About</Link>
            <Link href="/research" className="hover:text-white transition-colors">Research</Link>
            <Link href="/projects" className="hover:text-white transition-colors">Projects</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
