import React from 'react';
import Link from 'next/link';
import { FlaskConical, ArrowRight, CheckCircle2, Sparkles, Building2, Tag } from 'lucide-react';
import { ongoingResearchData } from '@/lib/researchData';

export const metadata = {
  title: 'Ongoing Research Studies | HiMPaTH - IIT Ropar',
  description: 'Explore active experimental studies, laboratory mix formulations, and pilot track preparations at IIT Ropar.',
};

export default function OngoingResearchPage() {
  return (
    <div className="bg-[#fbfcfa] min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#071e2e] via-[#0f3b4c] to-[#1a5b66] text-white overflow-hidden border-b border-white/10">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center space-x-2 text-xs font-semibold text-[#e4c982] uppercase tracking-widest mb-4">
            <Link href="/" className="hover:underline">Home</Link>
            <span>›</span>
            <Link href="/research" className="hover:underline">Research Hub</Link>
            <span>›</span>
            <span>Ongoing Research</span>
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-[#e4c982] text-xs font-black uppercase tracking-wider mb-4 border border-white/15">
              <FlaskConical className="w-3.5 h-3.5" />
              <span>Active Laboratory &amp; Field Studies</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
              Ongoing Research Projects
            </h1>
            <p className="text-[#d2e4e8] text-base sm:text-lg mt-6 leading-relaxed">
              Explore active investigations underway at IIT Ropar—from polymer-modified porous asphalt and RAP-integrated RCCP to carbon-negative biochar concrete.
            </p>
          </div>
        </div>
      </section>

      {/* Ongoing Studies Cards */}
      <section className="py-20 lg:py-24 max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ongoingResearchData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl border border-[#dbe5e4] p-8 sm:p-10 shadow-card hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full bg-[#e6f2ef] text-[#258b82] text-[10px] font-black tracking-widest uppercase">
                    {item.category}
                  </span>
                  <span className="text-xs font-bold text-[#c9a45b]">
                    {item.status}
                  </span>
                </div>

                <h2 className="text-2xl font-extrabold text-[#102b3c] mb-3 leading-snug">
                  {item.title}
                </h2>

                <p className="text-xs sm:text-sm text-[#4e636d] leading-relaxed mb-6">
                  {item.description}
                </p>

                <div className="space-y-4 mb-6">
                  <div>
                    <span className="text-[10.5px] font-black uppercase tracking-wider text-[#258b82] block mb-2">
                      Key Technical Breakthroughs
                    </span>
                    <ul className="space-y-1.5 text-xs text-[#52646d]">
                      {item.keyInnovations.map((inv, iIdx) => (
                        <li key={iIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#258b82] shrink-0 mt-0.5" />
                          <span>{inv}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 bg-[#f6f9f8] rounded-xl border border-[#e2ecea] text-xs text-[#102b3c]">
                    <strong className="text-[#258b82] block mb-0.5">Target Field Impact:</strong>
                    <span>{item.targetImpact}</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-[#dbe5e4] flex items-center justify-between text-xs">
                <div className="flex items-center gap-1.5 text-slate-500">
                  <Building2 className="w-4 h-4 text-[#258b82]" />
                  <span className="font-medium">{item.labFacility}</span>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1 font-bold text-[#258b82] hover:text-[#102b3c] uppercase tracking-wider"
                >
                  <span>Inquire</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
