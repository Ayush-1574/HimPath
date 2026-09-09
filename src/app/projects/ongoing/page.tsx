import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, FolderKanban } from 'lucide-react';
import { ongoingProjectsList, submittedProjectsList } from '@/lib/siteData';

export const metadata = {
  title: 'Ongoing Funded Projects & Proposals | HiMPaTH - IIT Ropar',
  description: 'Detailed dossiers of active sponsored research grants funded by ANRF, ISIRD, and proposals submitted to NTTM and BRO.',
};

export default function OngoingProjectsPage() {
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
            <span>Ongoing Funded Projects</span>
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-[#e4c982] text-xs font-black uppercase tracking-wider mb-4 border border-white/15">
              <FolderKanban className="w-3.5 h-3.5" />
              <span>National Competitive R&amp;D Grants</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
              Projects
            </h1>
            <p className="text-[#e4c982] font-semibold text-lg sm:text-xl mt-3">
              Ongoing Funded Projects &amp; Submitted Proposals
            </p>
            <p className="text-[#d2e4e8] text-sm sm:text-base mt-3 leading-relaxed">
              Dr. Surya Kant Sahdeo and team lead major multi-year research grants addressing critical transport challenges across the Indian Himalayan Region.
            </p>
          </div>
        </div>
      </section>

      {/* Projects List */}
      <section className="py-20 lg:py-24 max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Ongoing Projects Section */}
        <div>
          <div className="text-[#258b82] text-[11px] font-black uppercase tracking-[2.4px] mb-2">
            Sponsored Grants
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102b3c] mb-8">
            Ongoing Funded Projects
          </h2>

          <div className="space-y-8">
            {ongoingProjectsList.map((proj, idx) => (
              <div
                key={proj.id}
                className="bg-white rounded-3xl border border-[#dbe5e4] p-8 sm:p-12 shadow-card hover:shadow-xl transition-all duration-300 relative overflow-hidden"
              >
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-6 border-b border-[#eef4f3]">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="px-3.5 py-1 rounded-full bg-[#10384a] text-[#e4c982] text-[10.5px] font-black tracking-widest uppercase">
                        0{idx + 1} · {proj.agency}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-black tracking-widest uppercase border border-emerald-200">
                        {proj.status}
                      </span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#102b3c] leading-snug mt-2">
                      {proj.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#258b82] font-semibold mt-1">
                      {proj.agencyFull}
                    </p>
                  </div>

                  <div className="shrink-0 bg-[#f7faf9] p-4 rounded-2xl border border-[#dbe5e4] text-right self-start">
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">Total Grant</span>
                    <span className="text-2xl sm:text-3xl font-black text-[#c9a45b]">{proj.budget}</span>
                  </div>
                </div>

                <div className="pt-6 space-y-6">
                  <p className="text-sm sm:text-base text-[#495e67] leading-relaxed">
                    {proj.summary}
                  </p>

                  {proj.objectives && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                      <div className="p-6 bg-[#f7faf9] rounded-2xl border border-[#dbe5e4]">
                        <h4 className="text-xs font-black uppercase tracking-wider text-[#258b82] mb-3">Project Objectives</h4>
                        <ul className="space-y-2 text-xs text-[#52646d]">
                          {proj.objectives.map((obj, oIdx) => (
                            <li key={oIdx} className="flex items-start gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#258b82] shrink-0 mt-0.5" />
                              <span>{obj}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {proj.deliverables && (
                        <div className="p-6 bg-[#f7faf9] rounded-2xl border border-[#dbe5e4] flex flex-col justify-between">
                          <div>
                            <h4 className="text-xs font-black uppercase tracking-wider text-[#258b82] mb-3">Key Deliverables</h4>
                            <ul className="space-y-2 text-xs text-[#52646d]">
                              {proj.deliverables.map((del, dIdx) => (
                                <li key={dIdx} className="flex items-start gap-2">
                                  <span className="text-[#c9a45b] font-bold">›</span>
                                  <span>{del}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="mt-4 pt-4 border-t border-[#dbe5e4] flex items-center justify-between text-xs">
                            <span className="text-slate-500 font-semibold">{proj.principalInvestigator}</span>
                            <Link
                              href="/contact"
                              className="font-bold text-[#258b82] hover:text-[#102b3c] uppercase tracking-wider inline-flex items-center gap-1"
                            >
                              <span>Inquire</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Submitted & Under Review Section */}
        <div>
          <div className="text-[#258b82] text-[11px] font-black uppercase tracking-[2.4px] mb-2">
            Proposals Pipeline
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102b3c] mb-8">
            Submitted &amp; Under Review
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {submittedProjectsList.map((sub, sIdx) => (
              <div
                key={sub.id}
                className="bg-white rounded-3xl border border-[#dbe5e4] p-8 shadow-card flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-2.5 py-1 rounded-full bg-[#10384a] text-[#e4c982] text-[10px] font-black tracking-widest uppercase">
                      0{sIdx + 1} · {sub.agency}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-800 text-[10px] font-bold uppercase border border-amber-200">
                      Under Review
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#102b3c] mb-2 leading-snug">
                    {sub.title}
                  </h3>

                  <p className="text-xs text-slate-500 mb-4">
                    {sub.agencyFull}
                  </p>

                  <p className="text-xs text-[#52646d] leading-relaxed">
                    {sub.summary}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
