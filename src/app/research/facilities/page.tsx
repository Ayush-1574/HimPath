import React from 'react';
import Link from 'next/link';
import { Building2, ArrowRight, CheckCircle2, FlaskConical, Wrench, ShieldCheck, MapPin } from 'lucide-react';
import { researchFacilitiesData } from '@/lib/researchData';

export const metadata = {
  title: 'Research Facilities & Laboratories | HiMPaTH - IIT Ropar',
  description: 'Testing facilities, binder rheometers, dynamic pavement mechanics, and AI computing laboratories at IIT Ropar.',
};

export default function ResearchFacilitiesPage() {
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
            <span>Research Facilities</span>
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-[#e4c982] text-xs font-black uppercase tracking-wider mb-4 border border-white/15">
              <Building2 className="w-3.5 h-3.5" />
              <span>State-of-the-Art Experimental Infrastructure</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
              Research Facilities &amp; Labs
            </h1>
            <p className="text-[#d2e4e8] text-base sm:text-lg mt-6 leading-relaxed">
              Explore testing equipment, binder rheometers, dynamic UTM loading cells, environmental freeze-thaw chambers, and GPU clusters supporting HiMPaTH research at IIT Ropar.
            </p>
          </div>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="py-20 lg:py-24 max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {researchFacilitiesData.map((lab) => (
            <div
              key={lab.id}
              className="bg-white rounded-3xl border border-[#dbe5e4] p-8 sm:p-12 shadow-card hover:shadow-xl transition-all duration-300 relative overflow-hidden"
            >
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-6 border-b border-[#eef4f3]">
                <div>
                  <span className="px-3 py-1 rounded-full bg-[#e6f2ef] text-[#258b82] text-[10px] font-black tracking-widest uppercase">
                    {lab.category}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102b3c] leading-tight mt-2">
                    {lab.name}
                  </h2>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-1">
                    <MapPin className="w-3.5 h-3.5 text-[#258b82]" />
                    <span>{lab.location}</span>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1 px-4 py-2 rounded-lg bg-[#f0f6f4] hover:bg-[#258b82] hover:text-white text-[#1e667c] text-xs font-bold uppercase tracking-wider transition-all self-start"
                >
                  <span>Request Testing Services</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="pt-6 space-y-6">
                <p className="text-sm sm:text-base text-[#495e67] leading-relaxed">
                  {lab.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                  <div className="p-6 bg-[#f7faf9] rounded-2xl border border-[#dbe5e4]">
                    <div className="flex items-center gap-2 mb-3 text-[#102b3c] font-bold text-xs uppercase tracking-wider">
                      <Wrench className="w-4 h-4 text-[#258b82]" />
                      <span>Major Equipment</span>
                    </div>
                    <ul className="space-y-1.5 text-xs text-[#52646d]">
                      {lab.keyEquipment.map((eq, eIdx) => (
                        <li key={eIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#258b82] shrink-0 mt-0.5" />
                          <span>{eq}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-6 bg-[#f7faf9] rounded-2xl border border-[#dbe5e4]">
                    <div className="flex items-center gap-2 mb-3 text-[#102b3c] font-bold text-xs uppercase tracking-wider">
                      <FlaskConical className="w-4 h-4 text-[#258b82]" />
                      <span>Testing Capabilities</span>
                    </div>
                    <ul className="space-y-1.5 text-xs text-[#52646d]">
                      {lab.capabilities.map((cap, cIdx) => (
                        <li key={cIdx} className="flex items-start gap-2">
                          <span className="text-[#c9a45b] font-bold">›</span>
                          <span>{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-6 bg-[#f7faf9] rounded-2xl border border-[#dbe5e4]">
                    <div className="flex items-center gap-2 mb-3 text-[#102b3c] font-bold text-xs uppercase tracking-wider">
                      <ShieldCheck className="w-4 h-4 text-[#258b82]" />
                      <span>Compliance Standards</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {lab.testStandards.map((std, sIdx) => (
                        <span key={sIdx} className="px-2.5 py-1 rounded bg-white text-[11px] font-bold text-[#173f52] border border-[#dbe5e4]">
                          {std}
                        </span>
                      ))}
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
