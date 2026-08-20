import React from 'react';
import Link from 'next/link';
import { FileText, ArrowRight, CheckCircle2, Award, Building, Sparkles } from 'lucide-react';
import { grantProposalsData } from '@/lib/researchData';

export const metadata = {
  title: 'Grant Proposals & Research Grants | HiMPaTH - IIT Ropar',
  description: 'National and international competitive research proposals submitted to DST, BRO, NAPA/FAA, and NTTM.',
};

export default function GrantProposalsPage() {
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
            <span>Grant Proposals</span>
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-[#e4c982] text-xs font-black uppercase tracking-wider mb-4 border border-white/15">
              <FileText className="w-3.5 h-3.5" />
              <span>National &amp; International Research Bids</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
              Research Grant Proposals
            </h1>
            <p className="text-[#d2e4e8] text-base sm:text-lg mt-6 leading-relaxed">
              Expanding our research frontier through targeted competitive grant proposals submitted to the Department of Science &amp; Technology (DST), Border Roads Organisation (BRO), NAPA/FAA, and National Technical Textiles Mission (NTTM).
            </p>
          </div>
        </div>
      </section>

      {/* Grant Proposals List */}
      <section className="py-20 lg:py-24 max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {grantProposalsData.map((prop) => (
            <div
              key={prop.id}
              className="bg-white rounded-3xl border border-[#dbe5e4] p-8 sm:p-12 shadow-card hover:shadow-xl transition-all duration-300 relative overflow-hidden"
            >
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-6 border-b border-[#eef4f3]">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="px-3.5 py-1 rounded-full bg-[#10384a] text-[#e4c982] text-[10.5px] font-black tracking-widest uppercase">
                      {prop.agency}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-[#e6f2ef] text-[#258b82] text-[10px] font-black tracking-widest uppercase">
                      {prop.category}
                    </span>
                    <span className="text-xs font-bold text-[#c9a45b] ml-1">
                      {prop.status}
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102b3c] leading-snug mt-2">
                    {prop.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-[#258b82] font-semibold mt-1">
                    {prop.agencyFull} · {prop.scheme}
                  </p>
                </div>

                <span className="text-xs font-bold text-slate-500 shrink-0 bg-[#f7faf9] px-3 py-1.5 rounded-md border border-[#dbe5e4]">
                  {prop.grantType}
                </span>
              </div>

              <div className="pt-6 space-y-6">
                <p className="text-sm sm:text-base text-[#495e67] leading-relaxed">
                  {prop.summary}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                  <div className="p-6 bg-[#f7faf9] rounded-2xl border border-[#dbe5e4]">
                    <h3 className="text-xs font-black uppercase tracking-wider text-[#258b82] mb-3">Key Proposed Objectives</h3>
                    <ul className="space-y-2 text-xs text-[#52646d]">
                      {prop.objectives.map((obj, oIdx) => (
                        <li key={oIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#258b82] shrink-0 mt-0.5" />
                          <span>{obj}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-6 bg-gradient-to-br from-[#10384a]/5 to-[#258b82]/10 rounded-2xl border border-[#258b82]/20 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xs font-black uppercase tracking-wider text-[#102b3c] mb-2">Expected National &amp; Global Impact</h3>
                      <p className="text-xs sm:text-sm text-[#1e4a5a] leading-relaxed font-medium">
                        {prop.expectedImpact}
                      </p>
                    </div>
                    <div className="mt-4 pt-4 border-t border-[#258b82]/20 flex items-center justify-between">
                      <span className="text-[11px] text-slate-500 font-bold">Interested in Partnering?</span>
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-1 text-xs font-black text-[#258b82] hover:text-[#102b3c] uppercase tracking-wider"
                      >
                        <span>Contact PIs</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
