import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, MapPin, ExternalLink, Globe, PhoneCall } from 'lucide-react';

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
                  <span className="text-[#258b82]">›</span> Strategic Objectives
                </Link>
              </li>
              <li>
                <Link href="/research/pillars" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-[#258b82]">›</span> Six Research Pillars
                </Link>
              </li>
              <li>
                <Link href="/research/ongoing" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-[#258b82]">›</span> Ongoing Research Studies
                </Link>
              </li>
              <li>
                <Link href="/research/proposals" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-[#258b82]">›</span> Grant Proposals (DST, BRO)
                </Link>
              </li>
              <li>
                <Link href="/research/facilities" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-[#258b82]">›</span> Research Facilities &amp; Labs
                </Link>
              </li>
              <li>
                <Link href="/projects/ongoing" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-[#258b82]">›</span> Ongoing Funded Grants
                </Link>
              </li>
              <li>
                <Link href="/team/faculty" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-[#258b82]">›</span> Faculty Coordinators
                </Link>
              </li>
              <li>
                <Link href="/news/publications" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-[#258b82]">›</span> Scientific Publications
                </Link>
              </li>
              <li>
                <Link href="/news/workshops" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-[#258b82]">›</span> Workshops &amp; Training
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
                  <a href="mailto:himpath@iitrpr.ac.in" className="text-slate-200 hover:text-[#e4c982] transition-colors font-medium">
                    himpath@iitrpr.ac.in
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

        {/* Footer Bottom */}
        <div className="border-t border-white/10 pt-6 mt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] text-[#718790]">
          <div>
            © {new Date().getFullYear()} <strong className="text-slate-300 font-semibold">HiMPaTH</strong> · Department of Civil Engineering, IIT Ropar. All rights reserved.
          </div>
          <div className="flex items-center space-x-2 text-[#e4c982] font-semibold text-[10.5px] uppercase tracking-wider">
            <span>Research</span>
            <span>·</span>
            <span>Innovation</span>
            <span>·</span>
            <span>Sustainability</span>
            <span>·</span>
            <span>Resilience</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
