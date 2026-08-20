import React from 'react';
import Link from 'next/link';
import { 
  Layers, 
  Recycle, 
  Activity, 
  MapPin, 
  Cpu, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Wrench, 
  Target, 
  HelpCircle,
  Building2
} from 'lucide-react';
import { researchPillars } from '@/lib/researchData';

export const metadata = {
  title: 'Research Pillars & Focus Areas | HiMPaTH - IIT Ropar',
  description: 'Six core interdisciplinary research pillars driving climate-resilient mountain highway engineering at IIT Ropar.',
};

export default function ResearchPillarsPage() {
  const getIcon = (category: string) => {
    switch (category) {
      case 'Pavement Systems':
        return <Layers className="w-7 h-7" />;
      case 'Circular Economy':
        return <Recycle className="w-7 h-7" />;
      case 'Geotechnical Resilience':
        return <Activity className="w-7 h-7" />;
      case 'Geomatics':
        return <MapPin className="w-7 h-7" />;
      case 'Smart Asset Management':
        return <Cpu className="w-7 h-7" />;
      case 'National Standards':
        return <ShieldCheck className="w-7 h-7" />;
      default:
        return <Sparkles className="w-7 h-7" />;
    }
  };

  return (
    <div className="bg-[#fbfcfa] min-h-screen">
      {/* Hero Header */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#071e2e] via-[#0f3b4c] to-[#1a5b66] text-white overflow-hidden border-b border-white/10">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center space-x-2 text-xs font-semibold text-[#e4c982] uppercase tracking-widest mb-4">
            <Link href="/" className="hover:underline">Home</Link>
            <span>›</span>
            <Link href="/research" className="hover:underline">Research Hub</Link>
            <span>›</span>
            <span>Research Pillars</span>
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-[#e4c982] text-xs font-black uppercase tracking-wider mb-4 border border-white/15">
              <Layers className="w-3.5 h-3.5" />
              <span>Pillars 01 to 06 · Strategic R&amp;D Roadmap</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
              Six Core Research Pillars
            </h1>
            <p className="text-[#d2e4e8] text-base sm:text-lg mt-6 leading-relaxed">
              An interdisciplinary technical framework spanning pavement chemistry, structural mechanics, geotechnical stability, geomatics digital twins, artificial intelligence, and national codal policy.
            </p>
          </div>
        </div>
      </section>

      {/* Pillars List Section */}
      <section className="py-20 lg:py-24 max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {researchPillars.map((pillar) => (
            <div
              key={pillar.id}
              id={pillar.slug}
              className="bg-white rounded-3xl border border-[#dbe5e4] p-8 sm:p-12 shadow-card hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
            >
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-8 border-b border-[#eef4f3]">
                <div className="flex items-start gap-4 sm:gap-6">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-[#10384a] to-[#258b82] text-[#e4c982] flex items-center justify-center font-black shrink-0 shadow-md">
                    {getIcon(pillar.category)}
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="px-3 py-1 rounded-full bg-[#e6f2ef] text-[#258b82] text-[10px] font-black tracking-widest uppercase">
                        Pillar {pillar.pillarNumber} · {pillar.category}
                      </span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102b3c] leading-tight">
                      {pillar.title}
                    </h2>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#f0f6f4] hover:bg-[#258b82] hover:text-white text-[#1e667c] text-xs font-bold uppercase tracking-wider transition-all self-start"
                >
                  <span>Inquire / Collaborate</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="pt-8 space-y-8">
                <div>
                  <h3 className="text-sm font-black uppercase tracking-wider text-[#258b82] mb-2">Technical Overview</h3>
                  <p className="text-sm sm:text-base text-[#495e67] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
                  {/* Key Technologies */}
                  <div className="p-6 bg-[#f7faf9] rounded-2xl border border-[#dbe5e4]">
                    <div className="flex items-center gap-2 mb-3 text-[#102b3c] font-extrabold text-sm uppercase tracking-wider">
                      <Target className="w-4 h-4 text-[#258b82]" />
                      <span>Key Innovations</span>
                    </div>
                    <ul className="space-y-2 text-xs text-[#52646d] leading-relaxed">
                      {pillar.keyTechnologies.map((tech, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#258b82] shrink-0 mt-0.5" />
                          <span>{tech}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Challenges Addressed */}
                  <div className="p-6 bg-[#f7faf9] rounded-2xl border border-[#dbe5e4]">
                    <div className="flex items-center gap-2 mb-3 text-[#102b3c] font-extrabold text-sm uppercase tracking-wider">
                      <HelpCircle className="w-4 h-4 text-[#258b82]" />
                      <span>Himalayan Challenges</span>
                    </div>
                    <ul className="space-y-2 text-xs text-[#52646d] leading-relaxed">
                      {pillar.challengesAddressed.map((chall, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-[#c9a45b] font-bold">›</span>
                          <span>{chall}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Key Equipment Used */}
                  <div className="p-6 bg-[#f7faf9] rounded-2xl border border-[#dbe5e4]">
                    <div className="flex items-center gap-2 mb-3 text-[#102b3c] font-extrabold text-sm uppercase tracking-wider">
                      <Wrench className="w-4 h-4 text-[#258b82]" />
                      <span>Lab Testing Facilities</span>
                    </div>
                    <ul className="space-y-2 text-xs text-[#52646d] leading-relaxed">
                      {pillar.equipment.map((eq, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Building2 className="w-3.5 h-3.5 text-[#258b82] shrink-0 mt-0.5" />
                          <span>{eq}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 pt-3 border-t border-[#e2ecea]">
                      <Link
                        href="/research/facilities"
                        className="text-[11px] font-bold text-[#258b82] hover:underline uppercase tracking-wider flex items-center gap-1"
                      >
                        <span>View Full Lab Specs</span>
                        <ArrowRight className="w-3 h-3" />
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
