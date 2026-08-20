import React from 'react';
import Link from 'next/link';
import { ArrowRight, Workflow, CheckCircle2, Building, Layers, Sparkles, Users } from 'lucide-react';
import { pipelineStages } from '@/lib/researchData';

export const metadata = {
  title: 'Research → Field Pipeline | HiMPaTH - IIT Ropar',
  description: '5-stage translational methodology bridging laboratory characterization to real-world highway pilot tracks.',
};

export default function ResearchPipelinePage() {
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
            <span>Innovation Pipeline</span>
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-[#e4c982] text-xs font-black uppercase tracking-wider mb-4 border border-white/15">
              <Workflow className="w-3.5 h-3.5" />
              <span>Translational Science Methodology</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
              From Lab Discovery to Highway Impact
            </h1>
            <p className="text-[#d2e4e8] text-base sm:text-lg mt-6 leading-relaxed">
              HiMPaTH operates a structured 5-stage translational pipeline ensuring that scientific breakthroughs in pavement chemistry, mechanics, and AI directly solve rugged mountain connectivity challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Pipeline Stages Vertical Interactive Flow */}
      <section className="py-20 lg:py-24 max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {pipelineStages.map((stage, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl border border-[#dbe5e4] p-8 sm:p-12 shadow-card hover:shadow-xl transition-all duration-300 relative overflow-hidden"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-[#eef4f3]">
                <div className="flex items-center gap-4 sm:gap-6">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#0e3346] text-[#e4c982] flex items-center justify-center font-black text-xl sm:text-2xl shrink-0 shadow-md">
                    {stage.step}
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#258b82]">
                      STAGE {stage.step} · {stage.subtitle}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102b3c] leading-tight">
                      {stage.title}
                    </h2>
                  </div>
                </div>
              </div>

              <div className="pt-6 space-y-6">
                <p className="text-sm sm:text-base text-[#495e67] leading-relaxed">
                  {stage.summary}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                  <div className="p-6 bg-[#f7faf9] rounded-2xl border border-[#dbe5e4]">
                    <h3 className="text-xs font-black uppercase tracking-wider text-[#258b82] mb-3">Core Activities</h3>
                    <ul className="space-y-2 text-xs text-[#52646d]">
                      {stage.activities.map((act, aIdx) => (
                        <li key={aIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#258b82] shrink-0 mt-0.5" />
                          <span>{act}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-6 bg-[#f7faf9] rounded-2xl border border-[#dbe5e4]">
                    <h3 className="text-xs font-black uppercase tracking-wider text-[#258b82] mb-3">Key Deliverables</h3>
                    <ul className="space-y-2 text-xs text-[#52646d]">
                      {stage.keyOutputs.map((out, oIdx) => (
                        <li key={oIdx} className="flex items-start gap-2">
                          <span className="text-[#c9a45b] font-bold">›</span>
                          <span>{out}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-6 bg-[#f7faf9] rounded-2xl border border-[#dbe5e4]">
                    <h3 className="text-xs font-black uppercase tracking-wider text-[#258b82] mb-3">Collaborating Agencies</h3>
                    <ul className="space-y-2 text-xs text-[#52646d]">
                      {stage.collaborators.map((col, cIdx) => (
                        <li key={cIdx} className="flex items-start gap-2">
                          <Users className="w-3.5 h-3.5 text-[#258b82] shrink-0 mt-0.5" />
                          <span>{col}</span>
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
