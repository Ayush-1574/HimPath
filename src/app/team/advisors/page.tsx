import React from 'react';
import Link from 'next/link';
import { Award, Mail, ArrowRight, CheckCircle2, Shield, Sparkles } from 'lucide-react';
import { advisoryBoardList } from '@/lib/siteData';

export const metadata = {
  title: 'National Advisory Board | HiMPaTH - IIT Ropar',
  description: 'National Technical Advisory Committee and senior mentors supporting HiMPaTH Centre of Excellence.',
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
              <span>Institutional Oversight &amp; Strategic Mentorship</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
              National Advisory Board
            </h1>
            <p className="text-[#d2e4e8] text-base sm:text-lg mt-6 leading-relaxed">
              Comprising senior academic leaders, chief engineers from strategic organizations, and highway policy experts guiding research alignment and national impact.
            </p>
          </div>
        </div>
      </section>

      {/* Advisory Body Details */}
      <section className="py-20 lg:py-24 max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {advisoryBoardList.map((adv) => (
          <div
            key={adv.id}
            className="bg-white rounded-3xl border border-[#dbe5e4] p-8 sm:p-12 shadow-card hover:shadow-xl transition-all duration-300 relative overflow-hidden"
          >
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-6 border-b border-[#eef4f3]">
              <div className="flex items-start gap-4 sm:gap-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-[#10384a] to-[#258b82] text-[#e4c982] flex items-center justify-center font-black text-2xl shrink-0 shadow-md">
                  {adv.initials}
                </div>
                <div>
                  <span className="px-3 py-1 rounded-full bg-[#e6f2ef] text-[#258b82] text-[10px] font-black tracking-widest uppercase mb-2 inline-block">
                    {adv.role}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102b3c] leading-tight">
                    {adv.name}
                  </h2>
                  <p className="text-xs sm:text-sm font-bold text-[#258b82]">
                    {adv.designation}
                  </p>
                  <p className="text-xs text-slate-500">
                    {adv.institution}
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6 space-y-6">
              <p className="text-sm sm:text-base text-[#495e67] leading-relaxed">
                {adv.bio}
              </p>

              <div>
                <span className="text-[10.5px] font-black uppercase tracking-wider text-[#258b82] block mb-2">
                  Advisory Mandate Areas
                </span>
                <div className="flex flex-wrap gap-2">
                  {adv.researchFocus.map((f, idx) => (
                    <span key={idx} className="px-3 py-1.5 rounded-lg bg-[#f6faf8] text-[#173f52] text-xs font-semibold border border-[#dbe5e4]">
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
