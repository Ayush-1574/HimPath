import React from 'react';
import Link from 'next/link';
import { Building, ArrowRight, CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: 'Institutional Mandate | HiMPaTH - IIT Ropar',
  description: 'HiMPaTH Centre of Excellence hosted by Department of Civil Engineering, Indian Institute of Technology Ropar.',
};

export default function MandatePage() {
  const mandatePillars = [
    {
      title: 'Advanced Pavement & Material Research',
      desc: 'Characterization and performance evaluation of sustainable pavement materials and systems.',
    },
    {
      title: 'Structural & Field Performance Assessment',
      desc: 'Evaluation of pavement condition, behaviour, and long-term performance.',
    },
    {
      title: 'Terrain & Geospatial Assessment',
      desc: 'Terrain characterization and corridor planning for resilient infrastructure.',
    },
    {
      title: 'GIS, AI & Data-Driven Solutions',
      desc: 'Data-based assessment, prediction, and decision support for Himalayan road networks.',
    },
    {
      title: 'Field Demonstration & Validation',
      desc: 'Real-world testing and validation of sustainable, climate-resilient technologies.',
    },
  ];

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
            <span>Institutional Mandate</span>
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-[#e4c982] text-xs font-black uppercase tracking-wider mb-4 border border-white/15">
              <Building className="w-3.5 h-3.5" />
              <span>Institutional Host</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
              Institutional Mandate
            </h1>
            <p className="text-[#d2e4e8] text-base sm:text-lg mt-6 leading-relaxed">
              Hosted by the Department of Civil Engineering, Indian Institute of Technology Ropar, Punjab.
            </p>
          </div>
        </div>
      </section>

      {/* Main Narrative */}
      <section className="py-20 lg:py-24 max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="text-[#258b82] text-[11px] font-black uppercase tracking-[2.4px] mb-1">
                Institutional Host
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#102b3c] leading-tight">
                Department of Civil Engineering, IIT Ropar
              </h2>
            </div>

            <p className="text-base text-[#173f52] font-semibold leading-relaxed">
              HiMPaTH is an interdisciplinary Centre of Excellence hosted by the Department of Civil Engineering, Indian Institute of Technology Ropar, Punjab. The Centre is dedicated to advancing climate-resilient, sustainable, and technology-driven transportation infrastructure for the Indian Himalayan Region through research, innovation, field implementation, and policy support.
            </p>

            <p className="text-sm text-[#5a6f79] leading-relaxed">
              IIT Ropar provides the institutional foundation for HiMPaTH, bringing together engineering expertise, advanced research capabilities, and infrastructure for climate-resilient transportation research.
            </p>

            <p className="text-sm text-[#5a6f79] leading-relaxed">
              Led by <strong className="text-[#102b3c]">Dr. Surya Kant Sahdeo</strong>, HiMPaTH integrates advanced material characterization, pavement performance testing, GIS-based assessment, and field-oriented research to develop durable, sustainable, and climate-resilient road infrastructure for the Indian Himalayan Region.
            </p>

            <p className="text-sm text-[#5a6f79] leading-relaxed">
              The Centre aims to bridge laboratory research with field implementation, supporting collaboration with government agencies and road-sector stakeholders including <strong className="text-[#102b3c]">MoRTH, BRO, NHAI, PMGSY, and State PWDs</strong>.
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <Link
                href="/team/faculty"
                className="px-6 py-3.5 rounded-lg bg-[#258b82] hover:bg-[#102b3c] text-white text-xs font-black uppercase tracking-wider transition-all inline-flex items-center gap-2"
              >
                <span>Faculty Coordinators</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/projects/collaborations"
                className="px-6 py-3.5 rounded-lg bg-[#f0f6f4] hover:bg-[#e4ece9] text-[#102b3c] text-xs font-bold uppercase tracking-wider transition-all"
              >
                <span>Multi-Agency Ecosystem</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-white border border-[#dbe5e4] shadow-card space-y-4">
              <h3 className="text-lg font-black text-[#102b3c]">Core Action Mandate</h3>
              <div className="space-y-3.5 text-xs text-[#52646d]">
                {mandatePillars.map((p, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#258b82] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#102b3c] block">{p.title}</strong>
                      <span className="text-[#5a6f79] leading-relaxed">{p.desc}</span>
                    </div>
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
