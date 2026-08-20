import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Archive, DollarSign, Calendar, Sparkles } from 'lucide-react';
import { completedProjectsList } from '@/lib/siteData';

export const metadata = {
  title: 'Completed Projects & Field Trials | HiMPaTH - IIT Ropar',
  description: 'Archive of concluded research investigations, verified field trials, and technology transfer reports.',
};

export default function CompletedProjectsPage() {
  return (
    <div className="bg-[#fbfcfa] min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#071e2e] via-[#0f3b4c] to-[#1a5b66] text-white overflow-hidden border-b border-white/10">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center space-x-2 text-xs font-semibold text-[#e4c982] uppercase tracking-widest mb-4">
            <Link href="/" className="hover:underline">Home</Link>
            <span>›</span>
            <Link href="/projects" className="hover:underline">Projects</Link>
            <span>›</span>
            <span>Completed Projects</span>
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-[#e4c982] text-xs font-black uppercase tracking-wider mb-4 border border-white/15">
              <Archive className="w-3.5 h-3.5" />
              <span>Validated Research Outcomes &amp; Technical Reports</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
              Completed Projects &amp; Field Trials
            </h1>
            <p className="text-[#d2e4e8] text-base sm:text-lg mt-6 leading-relaxed">
              Explore concluded research investigations that have established foundational design charts, geotechnical hazard models, and technical recommendations for mountain highway engineering.
            </p>
          </div>
        </div>
      </section>

      {/* Completed Projects List */}
      <section className="py-20 lg:py-24 max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {completedProjectsList.map((proj) => (
            <div
              key={proj.id}
              className="bg-white rounded-3xl border border-[#dbe5e4] p-8 sm:p-12 shadow-card hover:shadow-xl transition-all duration-300 relative overflow-hidden"
            >
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-6 border-b border-[#eef4f3]">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="px-3.5 py-1 rounded-full bg-emerald-900/10 text-emerald-700 text-[10.5px] font-black tracking-widest uppercase border border-emerald-300/40">
                      Completed · {proj.duration}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-[#e6f2ef] text-[#258b82] text-[10px] font-black tracking-widest uppercase">
                      {proj.fundingScheme}
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102b3c] leading-snug mt-2">
                    {proj.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-[#258b82] font-semibold mt-1">
                    {proj.agencyFull}
                  </p>
                </div>

                <div className="shrink-0 bg-[#f7faf9] p-4 rounded-2xl border border-[#dbe5e4] text-right self-start">
                  <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">Total Grant</span>
                  <span className="text-2xl font-black text-[#102b3c]">{proj.budget}</span>
                </div>
              </div>

              <div className="pt-6 space-y-6">
                <p className="text-sm sm:text-base text-[#495e67] leading-relaxed">
                  {proj.summary}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                  <div className="p-6 bg-[#f7faf9] rounded-2xl border border-[#dbe5e4]">
                    <h3 className="text-xs font-black uppercase tracking-wider text-[#258b82] mb-3">Key Objectives</h3>
                    <ul className="space-y-2 text-xs text-[#52646d]">
                      {proj.objectives.map((obj, oIdx) => (
                        <li key={oIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{obj}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-6 bg-[#f7faf9] rounded-2xl border border-[#dbe5e4]">
                    <h3 className="text-xs font-black uppercase tracking-wider text-[#258b82] mb-3">Final Output &amp; Deliverables</h3>
                    <ul className="space-y-2 text-xs text-[#52646d]">
                      {proj.deliverables.map((del, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2">
                          <span className="text-[#c9a45b] font-bold">›</span>
                          <span>{del}</span>
                        </li>
                      ))}
                    </ul>
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
