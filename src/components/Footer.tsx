import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, ExternalLink, ShieldCheck, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#111827] text-gray-300 pt-14 pb-8 border-t-4 border-[#f25c05]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Col 1: About CEVA */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded bg-[#f25c05] flex items-center justify-center text-black font-black text-xs">
                CEVA
              </div>
              <h3 className="text-white font-bold text-lg tracking-wide">
                Centre of Excellence
              </h3>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Centre of Excellence on sustainable Vernacular Architecture (CEVA) at IIT Ropar is funded by National Mission on Himalayan Studies (NMHS), Ministry of Environment, Forest &amp; Climate Change (MoEF&amp;CC), Government of India.
            </p>
            <div className="pt-2">
              <span className="inline-block bg-emerald-950 text-emerald-300 text-xs font-semibold px-3 py-1 rounded-full border border-emerald-700">
                NMHS Supported Initiative
              </span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-base mb-4 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-[#f25c05]">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/about" className="hover:text-white hover:underline transition-colors">
                  About the Centre
                </Link>
              </li>
              <li>
                <Link href="/vernacular-architecture" className="hover:text-white hover:underline transition-colors">
                  Vernacular Architecture
                </Link>
              </li>
              <li>
                <Link href="/techniques" className="hover:text-white hover:underline transition-colors">
                  Indigenous Techniques (Kath-Kuni &amp; Dhajji)
                </Link>
              </li>
              <li>
                <Link href="/activities" className="hover:text-white hover:underline transition-colors">
                  Workshops &amp; Activities
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-white hover:underline transition-colors">
                  Architectural Gallery &amp; Sketches
                </Link>
              </li>
              <li>
                <Link href="/downloads" className="hover:text-white hover:underline transition-colors">
                  Guidelines &amp; Research Downloads
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Research Focus */}
          <div>
            <h4 className="text-white font-semibold text-base mb-4 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-[#f25c05]">
              Research Domains
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#f25c05]" />
                <span>Seismic Resilience of Interlocking Joints</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#f25c05]" />
                <span>Life Cycle Assessment &amp; Carbon Footprint</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#f25c05]" />
                <span>Dynamic Laser Scanning of Heritage Assets</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#f25c05]" />
                <span>Modern Hybrid Building Guidelines</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#f25c05]" />
                <span>Artisan Capacity &amp; Knowledge Archival</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact Info */}
          <div className="space-y-3">
            <h4 className="text-white font-semibold text-base mb-4 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-[#f25c05]">
              Contact Details
            </h4>
            <div className="flex items-start space-x-3 text-sm text-gray-400">
              <MapPin className="w-5 h-5 text-[#f25c05] shrink-0 mt-0.5" />
              <span>
                Department of Civil Engineering, Indian Institute of Technology Ropar, Rupnagar, Punjab - 140001, India
              </span>
            </div>
            <div className="flex items-center space-x-3 text-sm text-gray-400">
              <Mail className="w-4 h-4 text-[#f25c05] shrink-0" />
              <a href="mailto:ceva@iitrpr.ac.in" className="hover:text-white transition-colors">
                ceva@iitrpr.ac.in
              </a>
            </div>
            <div className="flex items-center space-x-3 text-sm text-gray-400">
              <ExternalLink className="w-4 h-4 text-[#f25c05] shrink-0" />
              <a
                href="https://www.iitrpr.ac.in"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                www.iitrpr.ac.in
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 mt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>
            © {new Date().getFullYear()} CEVA, Indian Institute of Technology Ropar. All rights reserved.
          </p>
          <p className="flex items-center space-x-1">
            <span>Funded by NMHS, MoEF&amp;CC, Govt. of India</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
