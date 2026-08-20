import React from 'react';
import Link from 'next/link';
import { GraduationCap, Mail, ArrowRight, CheckCircle2, Sparkles, Building2 } from 'lucide-react';
import { researchScholarsList } from '@/lib/siteData';

export const metadata = {
  title: 'Research Scholars & Staff | HiMPaTH - IIT Ropar',
  description: 'Doctoral research fellows, postgraduate scholars, and project engineers at HiMPaTH, IIT Ropar.',
};

export default function ScholarsPage() {
  return (
    <div className="bg-[#fbfcfa] min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#071e2e] via-[#0f3b4c] to-[#1a5b66] text-white overflow-hidden border-b border-white/10">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center space-x-2 text-xs font-semibold text-[#e4c982] uppercase tracking-widest mb-4">
            <Link href="/" className="hover:underline">Home</Link>
            <span>›</span>
            <Link href="/team" className="hover:underline">Members</Link>
            <span>›</span>
            <span>Research Scholars</span>
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-[#e4c982] text-xs font-black uppercase tracking-wider mb-4 border border-white/15">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Doctoral Fellows &amp; Project Engineers</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
              Research Scholars &amp; Technical Staff
            </h1>
            <p className="text-[#d2e4e8] text-base sm:text-lg mt-6 leading-relaxed">
              Meet the doctoral candidates, research engineers, and scholars conducting experimental tests, finite element modeling, and sensor instrumentation at IIT Ropar.
            </p>
          </div>
        </div>
      </section>

      {/* Scholars Grid */}
      <section className="py-20 lg:py-24 max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {researchScholarsList.map((scholar) => (
            <div
              key={scholar.id}
              className="bg-white rounded-3xl border border-[#dbe5e4] p-8 shadow-card hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-[#e7f1ef] text-[#1e667c] flex items-center justify-center font-black text-xl mb-6 border border-[#258b82]/30">
                  {scholar.initials}
                </div>

                <span className="px-3 py-1 rounded-full bg-[#e6f2ef] text-[#258b82] text-[10px] font-black tracking-widest uppercase mb-2 inline-block">
                  {scholar.role}
                </span>

                <h2 className="text-xl font-extrabold text-[#102b3c] mb-1">
                  {scholar.name}
                </h2>
                <p className="text-xs font-bold text-[#258b82] mb-3">
                  {scholar.designation}
                </p>

                <p className="text-xs text-[#52646d] leading-relaxed mb-6">
                  {scholar.bio}
                </p>

                <div className="space-y-1.5 pt-4 border-t border-[#f0f5f4]">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                    Specialized Topics
                  </span>
                  {scholar.researchFocus.map((topic, tIdx) => (
                    <div key={tIdx} className="flex items-center gap-1.5 text-xs text-[#173f52] font-semibold">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#258b82] shrink-0" />
                      <span>{topic}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[#dbe5e4] flex items-center justify-between text-xs">
                <span className="text-slate-500 font-medium">IIT Ropar</span>
                <a
                  href={`mailto:${scholar.email}`}
                  className="font-bold text-[#258b82] hover:text-[#102b3c] uppercase tracking-wider inline-flex items-center gap-1"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Email</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Join CTA */}
        <div className="mt-16 p-8 bg-gradient-to-r from-[#102b3c] to-[#1e5868] text-white rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h3 className="text-2xl font-bold">Interested in PhD or Postdoctoral Research?</h3>
            <p className="text-xs sm:text-sm text-[#d4e4e7] mt-1">
              We welcome applications from motivated scholars with backgrounds in Civil Engineering, Pavements, Geotechnical, and Geomatics.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-6 py-3.5 rounded-lg bg-[#c9a45b] text-[#102b3c] hover:bg-[#e4c982] font-black text-xs uppercase tracking-wider transition-all shrink-0 inline-flex items-center gap-2"
          >
            <span>Apply / Inquire</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
