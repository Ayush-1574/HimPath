'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, HelpCircle, Search, Sparkles, ArrowRight } from 'lucide-react';

const himpathFaqs = [
  {
    id: 'faq-1',
    question: 'What is HiMPaTH at IIT Ropar?',
    answer: 'HiMPaTH (Himalayan Pathways for Transport and Highways) is a premier Centre of Excellence established at the Department of Civil Engineering, Indian Institute of Technology Ropar. The Centre is dedicated to advancing climate-resilient, sustainable, and technology-driven road and pavement infrastructure across the Indian Himalayan Region.',
  },
  {
    id: 'faq-2',
    question: 'What are the main research focus areas of HiMPaTH?',
    answer: 'HiMPaTH focuses on six core pillars: (1) Climate-Resilient Pavements (FDR, RCCP, Porous Asphalt), (2) Sustainable Materials & Waste Valorization (RAP, Landslide Muck, Plastic), (3) Drainage & Geotechnical Slope Engineering, (4) GIS & Geospatial Intelligence (LiDAR Digital Twins), (5) AI & Computer Vision for Automated Asset Management, and (6) Indian Roads Congress (IRC) Codal Standards Integration.',
  },
  {
    id: 'faq-3',
    question: 'How does HiMPaTH collaborate with highway agencies like BRO, NHIDCL, and MoRTH?',
    answer: 'HiMPaTH operates a 5-stage translational pipeline taking laboratory material formulations to full-scale instrumented field demonstration test tracks. We partner with the Border Roads Organisation (BRO), NHIDCL, Ministry of Road Transport & Highways (MoRTH), and State PWDs to provide design guidelines, field monitoring, and training workshops.',
  },
  {
    id: 'faq-4',
    question: 'What testing equipment and laboratory facilities are available at HiMPaTH?',
    answer: 'HiMPaTH houses state-of-the-art testing infrastructure at IIT Ropar, including Dynamic Shear Rheometers (DSR), Bending Beam Rheometers (BBR), servo-hydraulic Universal Testing Machines (UTM-25 kN), submerged Wheel Tracking Rut Testers, automated sub-zero Freeze-Thaw environmental chambers, and high-performance NVIDIA GPU clusters.',
  },
  {
    id: 'faq-5',
    question: 'How can external organizations or researchers collaborate with HiMPaTH?',
    answer: 'We actively collaborate through sponsored research grants, joint field trials, laboratory testing consultancies, and capacity-building workshops. Prospective collaborators can contact Centre Lead Dr. Surya Kant Sahdeo or email himpath.coe@iitrpr.ac.in.',
  },
  {
    id: 'faq-6',
    question: 'Are there opportunities for PhD and Research Scholars at HiMPaTH?',
    answer: 'Yes! HiMPaTH offers doctoral fellowships, Senior/Junior Research Fellowships (SRF/JRF), and project engineer roles under ongoing grants funded by ANRF, NMHS, and MoEF&CC. Applications are invited through IIT Ropar Civil Engineering admissions and project recruitment notices.',
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFaqs = himpathFaqs.filter(
    (f) =>
      f.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-[#fbfcfa] min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#071e2e] via-[#0f3b4c] to-[#1a5b66] text-white overflow-hidden border-b border-white/10">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center space-x-2 text-xs font-semibold text-[#e4c982] uppercase tracking-widest mb-4">
            <Link href="/" className="hover:underline">Home</Link>
            <span>›</span>
            <span>Frequently Asked Questions</span>
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-[#e4c982] text-xs font-black uppercase tracking-wider mb-4 border border-white/15">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Knowledge Base &amp; Technical Inquiries</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
              Frequently Asked Questions
            </h1>
            <p className="text-[#d2e4e8] text-base sm:text-lg mt-6 leading-relaxed">
              Find answers regarding HiMPaTH research mandates, funded project opportunities, laboratory testing capabilities, and agency partnerships.
            </p>
          </div>
        </div>
      </section>

      {/* Search & Accordion */}
      <section className="py-20 lg:py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Search Bar */}
        <div className="relative mb-10">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input
            type="text"
            placeholder="Search questions by topic (e.g. testing, grants, PWD, PhD)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-4 border border-[#dbe5e4] rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#258b82] text-xs sm:text-sm bg-white text-[#102b3c]"
          />
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.id}
                className="border border-[#dbe5e4] rounded-2xl overflow-hidden shadow-card transition-all bg-white"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-6 text-left hover:bg-[#f6faf8] flex items-center justify-between gap-4 font-extrabold text-[#102b3c] text-sm sm:text-base transition-colors"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#258b82] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="p-6 pt-0 border-t border-[#eef4f3] text-xs sm:text-sm text-[#4e636d] leading-relaxed">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions */}
        <div className="mt-16 p-8 rounded-3xl bg-white border border-[#dbe5e4] shadow-card text-center space-y-4">
          <h3 className="text-xl font-extrabold text-[#102b3c]">Have More Technical Questions?</h3>
          <p className="text-xs sm:text-sm text-[#5a6f79] max-w-md mx-auto">
            Reach out directly to Dr. Surya Kant Sahdeo and the HiMPaTH research secretariat.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#258b82] hover:bg-[#102b3c] text-white font-black text-xs uppercase tracking-wider transition-all shadow"
          >
            <span>Contact HiMPaTH Team</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
