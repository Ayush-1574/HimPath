import React from 'react';
import Link from 'next/link';
import { Compass, CheckCircle2, ArrowRight, Sparkles, Layers, Recycle, Activity, MapPin, Cpu, ShieldCheck } from 'lucide-react';

export const metadata = {
  title: 'Strategic Objectives | HiMPaTH - IIT Ropar',
  description: 'Six core strategic objectives guiding climate-resilient road infrastructure research at IIT Ropar.',
};

export default function ObjectivesPage() {
  const objectives = [
    {
      num: '01',
      title: 'Climate-Resilient DPR Preparation Frameworks',
      description: 'Formulating scientific Detailed Project Report (DPR) guidelines that account for mountain micro-climates, extreme hydrology, and geotechnical slope vulnerability instead of plain-terrain assumptions.',
      icon: <Compass className="w-6 h-6 text-[#e4c982]" />,
    },
    {
      num: '02',
      title: 'Advanced Sustainable Road Technologies',
      description: 'Developing high-performance Full-Depth Reclamation (FDR), rapid-curing Roller-Compacted Concrete (RCCP), and porous asphalt surfaces engineered for freeze-thaw and heavy multi-axle loading.',
      icon: <Layers className="w-6 h-6 text-[#e4c982]" />,
    },
    {
      num: '03',
      title: 'Waste Valorization & Circular Construction',
      description: 'Systematically grading, chemically stabilizing, and repurposing mountain landslide muck, excavation debris, and post-consumer plastic waste to eliminate pristine riverbed quarrying.',
      icon: <Recycle className="w-6 h-6 text-[#e4c982]" />,
    },
    {
      num: '04',
      title: 'Drainage Resilience & Slope Stabilization',
      description: 'Designing high-velocity runoff dissipators, sub-surface siphons, high-tensile geosynthetics, and native bioengineered vegetation root matrices for stable mountain highway cuttings.',
      icon: <Activity className="w-6 h-6 text-[#e4c982]" />,
    },
    {
      num: '05',
      title: 'Geospatial Intelligence & AI Infrastructure',
      description: 'Deploying high-resolution satellite remote sensing, LiDAR 3D terrain digital twins, and deep learning computer vision algorithms for automated highway distress detection.',
      icon: <Cpu className="w-6 h-6 text-[#e4c982]" />,
    },
    {
      num: '06',
      title: 'National Codal & Policy Integration',
      description: 'Drafting evidence-based standard specifications and contributing to Indian Roads Congress (IRC) and MoRTH codes to fast-track laboratory technologies into commercial EPC tenders.',
      icon: <ShieldCheck className="w-6 h-6 text-[#e4c982]" />,
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
            <span>Strategic Objectives</span>
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-[#e4c982] text-xs font-black uppercase tracking-wider mb-4 border border-white/15">
              <Compass className="w-3.5 h-3.5" />
              <span>Core Action Roadmap</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
              Six Strategic Objectives
            </h1>
            <p className="text-[#d2e4e8] text-base sm:text-lg mt-6 leading-relaxed">
              HiMPaTH operates under 6 clear, action-oriented strategic objectives to deliver safer, more durable, and climate-adaptive road networks across Himalayan states.
            </p>
          </div>
        </div>
      </section>

      {/* Objectives Grid */}
      <section className="py-20 lg:py-24 max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {objectives.map((obj, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl border border-[#dbe5e4] p-8 shadow-card hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#10384a] to-[#258b82] flex items-center justify-center mb-6 shadow-md">
                  {obj.icon}
                </div>

                <span className="px-3 py-1 rounded-full bg-[#e6f2ef] text-[#258b82] text-[10px] font-black tracking-widest uppercase mb-3 inline-block">
                  Objective {obj.num}
                </span>

                <h2 className="text-xl font-extrabold text-[#102b3c] mb-3 leading-snug">
                  {obj.title}
                </h2>

                <p className="text-xs sm:text-sm text-[#4e636d] leading-relaxed">
                  {obj.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#f0f5f4] flex items-center justify-between text-xs">
                <span className="text-[#258b82] font-bold uppercase tracking-wider">Priority Domain</span>
                <Link
                  href="/contact"
                  className="font-bold text-[#102b3c] hover:text-[#258b82] uppercase tracking-wider flex items-center gap-1"
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
