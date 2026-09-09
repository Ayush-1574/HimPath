import React from 'react';
import Link from 'next/link';
import { Award, CheckCircle2, ShieldCheck, Building } from 'lucide-react';
import { advisoryBoardInfo } from '@/lib/siteData';

export const metadata = {
  title: 'Advisory Board & Governance | HiMPaTH - IIT Ropar',
  description: 'Institutional Governance & Collaboration, National & Technical Collaboration at HiMPaTH.',
};

export default function AdvisorsPage() {
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
            <span>Advisory Board</span>
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-[#e4c982] text-xs font-black uppercase tracking-wider mb-4 border border-white/15">
              <Award className="w-3.5 h-3.5" />
              <span>{advisoryBoardInfo.title}</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
              Advisory Board
            </h1>
            <p className="text-[#e4c982] font-semibold text-lg sm:text-xl mt-3">
              {advisoryBoardInfo.subtitle}
            </p>
            <p className="text-[#d2e4e8] text-sm sm:text-base mt-3 leading-relaxed">
              {advisoryBoardInfo.description}
            </p>
          </div>
        </div>
      </section>

      {/* Advisory Body Details */}
      <section className="py-20 lg:py-24 max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="bg-white rounded-3xl border border-[#dbe5e4] p-8 sm:p-12 shadow-card">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Areas of Collaboration */}
            <div>
              <div className="text-[#258b82] text-[11px] font-black uppercase tracking-[2.4px] mb-2">
                Strategic Scope
              </div>
              <h2 className="text-2xl font-extrabold text-[#102b3c] mb-6">
                Areas of Collaboration
              </h2>
              <ul className="space-y-3.5">
                {advisoryBoardInfo.areasOfCollaboration.map((area, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-[#173f52] font-semibold">
                    <CheckCircle2 className="w-5 h-5 text-[#258b82] shrink-0 mt-0.5" />
                    <span>{area}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Key Stakeholders */}
            <div>
              <div className="text-[#258b82] text-[11px] font-black uppercase tracking-[2.4px] mb-2">
                Partners &amp; Institutions
              </div>
              <h2 className="text-2xl font-extrabold text-[#102b3c] mb-6">
                Key Stakeholders
              </h2>
              <div className="grid grid-cols-2 gap-3">
                {advisoryBoardInfo.keyStakeholders.map((sh, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-[#f7faf9] border border-[#dbe5e4] flex items-center gap-2.5 font-bold text-xs text-[#102b3c]"
                  >
                    <Building className="w-4 h-4 text-[#258b82] shrink-0" />
                    <span>{sh}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
