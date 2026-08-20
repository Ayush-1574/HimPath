import React from 'react';
import Link from 'next/link';
import { Target, Compass, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Vision & Mission | HiMPaTH - IIT Ropar',
  description: 'The vision, mission, and Sanskrit motto guiding sustainable and resilient mountain transport infrastructure.',
};

export default function VisionMissionPage() {
  return (
    <div className="bg-[#fbfcfa] min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#071e2e] via-[#0f3b4c] to-[#1a5b66] text-white overflow-hidden border-b border-white/10">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center space-x-2 text-xs font-semibold text-[#e4c982] uppercase tracking-widest mb-4">
            <Link href="/" className="hover:underline">Home</Link>
            <span>›</span>
            <Link href="/about" className="hover:underline">About</Link>
            <span>›</span>
            <span>Vision &amp; Mission</span>
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-[#e4c982] text-xs font-black uppercase tracking-wider mb-4 border border-white/15">
              <Target className="w-3.5 h-3.5" />
              <span>Guiding Principles &amp; Ethos</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
              Our Vision &amp; Mission
            </h1>
            <p className="text-[#d2e4e8] text-base sm:text-lg mt-6 leading-relaxed">
              Establishing a national Centre of Excellence dedicated to climate-adaptive, disaster-resilient, and technology-driven transportation infrastructure for the Indian Himalayan Region.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 lg:py-24 max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Sanskrit Motto Card */}
        <div className="bg-gradient-to-br from-[#102b3c] via-[#174e61] to-[#1c646b] rounded-3xl p-10 sm:p-14 text-white text-center shadow-2xl relative overflow-hidden">
          <span className="text-[10px] font-black uppercase tracking-[3px] text-[#e4c982] block mb-3">
            Inspirational Ethos
          </span>
          <div className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#e4c982] tracking-wide font-normal mb-4">
            “आ नो भद्राः क्रतवो यन्तु विश्वतः”
          </div>
          <p className="text-sm sm:text-base text-[#d8e8ea] max-w-xl mx-auto italic">
            “Let noble thoughts come from everywhere.”
          </p>
          <p className="text-xs text-[#b0c8cc] max-w-2xl mx-auto mt-4 leading-relaxed">
            Rigveda 1.89.1 — Emphasizing open interdisciplinary collaboration, global scientific knowledge exchange, and indigenous mountain engineering wisdom.
          </p>
        </div>

        {/* Vision & Mission Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Vision */}
          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#dbe5e4] shadow-card flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#e6f2ef] text-[#258b82] flex items-center justify-center font-bold mb-6">
                <Target className="w-7 h-7" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest text-[#258b82] block mb-1">
                Strategic Vision
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102b3c] mb-4">
                Our Vision
              </h2>
              <p className="text-sm sm:text-base text-[#4a5e68] leading-relaxed mb-6">
                To establish HiMPaTH as a leading Centre of Excellence for climate-resilient and sustainable road infrastructure in the Indian Himalayan Region, advancing innovative and technology-driven solutions for safer, more durable, reliable and resilient transportation networks.
              </p>
            </div>

            <div className="pt-6 border-t border-[#eef4f3] space-y-2">
              <span className="text-[10.5px] font-black uppercase tracking-wider text-slate-400 block mb-2">Key Strategic Goals</span>
              <div className="flex items-start gap-2 text-xs text-[#173f52] font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#258b82] shrink-0 mt-0.5" />
                <span>Zero-Rutting, High-Durability Mountain Highway Pavements</span>
              </div>
              <div className="flex items-start gap-2 text-xs text-[#173f52] font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#258b82] shrink-0 mt-0.5" />
                <span>100% Repurposing of Regional Landslide Debris &amp; Muck</span>
              </div>
              <div className="flex items-start gap-2 text-xs text-[#173f52] font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#258b82] shrink-0 mt-0.5" />
                <span>Standardized Climate-Resilient Detailed Project Reports</span>
              </div>
            </div>
          </div>

          {/* Mission */}
          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#dbe5e4] shadow-card flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#e6f2ef] text-[#258b82] flex items-center justify-center font-bold mb-6">
                <Compass className="w-7 h-7" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest text-[#258b82] block mb-1">
                Implementation Mandate
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102b3c] mb-4">
                Our Mission
              </h2>
              <p className="text-sm sm:text-base text-[#4a5e68] leading-relaxed mb-6">
                To develop and implement climate-resilient road technologies through multidisciplinary research, sustainable construction practices, field validation and data-driven planning, while supporting DPR development, policy, standardization, capacity building and stakeholder collaboration for resilient Himalayan connectivity.
              </p>
            </div>

            <div className="pt-6 border-t border-[#eef4f3] space-y-2">
              <span className="text-[10.5px] font-black uppercase tracking-wider text-slate-400 block mb-2">Core Action Pillars</span>
              <div className="flex items-start gap-2 text-xs text-[#173f52] font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#258b82] shrink-0 mt-0.5" />
                <span>Laboratory Micro-Mechanical &amp; Dynamic Durability Testing</span>
              </div>
              <div className="flex items-start gap-2 text-xs text-[#173f52] font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#258b82] shrink-0 mt-0.5" />
                <span>Instrumented Field Pilot Test Tracks with BRO &amp; NHIDCL</span>
              </div>
              <div className="flex items-start gap-2 text-xs text-[#173f52] font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#258b82] shrink-0 mt-0.5" />
                <span>Indian Roads Congress (IRC) Codal Contributions</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
