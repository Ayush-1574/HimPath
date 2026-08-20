import React from 'react';
import Link from 'next/link';
import { BookOpen, ArrowRight, CheckCircle2, FileText, Sparkles } from 'lucide-react';
import { publicationsList } from '@/lib/siteData';

export const metadata = {
  title: 'Publications & Scientific Papers | HiMPaTH - IIT Ropar',
  description: 'Peer-reviewed journal articles, conference papers, and technical reports by HiMPaTH researchers.',
};

export default function PublicationsPage() {
  return (
    <div className="bg-[#fbfcfa] min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#071e2e] via-[#0f3b4c] to-[#1a5b66] text-white overflow-hidden border-b border-white/10">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center space-x-2 text-xs font-semibold text-[#e4c982] uppercase tracking-widest mb-4">
            <Link href="/" className="hover:underline">Home</Link>
            <span>›</span>
            <Link href="/news" className="hover:underline">News</Link>
            <span>›</span>
            <span>Publications</span>
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-[#e4c982] text-xs font-black uppercase tracking-wider mb-4 border border-white/15">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Peer-Reviewed Science &amp; Codal Research</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
              Scientific Publications
            </h1>
            <p className="text-[#d2e4e8] text-base sm:text-lg mt-6 leading-relaxed">
              Explore scientific articles authored by HiMPaTH investigators published in leading international transportation, geotechnical, and remote sensing journals.
            </p>
          </div>
        </div>
      </section>

      {/* Publications List */}
      <section className="py-20 lg:py-24 max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {publicationsList.map((pub) => (
          <div
            key={pub.id}
            className="bg-white rounded-3xl border border-[#dbe5e4] p-8 sm:p-12 shadow-card hover:shadow-xl transition-all duration-300 relative"
          >
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="px-3 py-1 rounded-full bg-[#e6f2ef] text-[#258b82] text-[10px] font-black uppercase tracking-widest">
                {pub.category} · {pub.year}
              </span>
              <span className="text-xs font-bold text-[#102b3c]">
                {pub.journal}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102b3c] leading-snug mb-2">
              {pub.title}
            </h2>

            <p className="text-xs font-semibold text-[#258b82] mb-4">
              Authors: {pub.authors.join(', ')}
            </p>

            <div className="p-6 bg-[#f7faf9] rounded-2xl border border-[#dbe5e4] text-xs sm:text-sm text-[#4e636d] leading-relaxed">
              <strong className="text-[#102b3c] block mb-1 font-bold">Abstract:</strong>
              {pub.abstract}
            </div>

            <div className="pt-6 mt-6 border-t border-[#f0f5f4] flex items-center justify-between text-xs">
              <span className="text-slate-500 font-medium">Department of Civil Engineering, IIT Ropar</span>
              <Link
                href="/contact"
                className="font-bold text-[#258b82] hover:text-[#102b3c] uppercase tracking-wider inline-flex items-center gap-1"
              >
                <span>Request Reprint</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
