import React from 'react';
import Link from 'next/link';
import { Compass, Layers, Activity, ShieldCheck, Cpu, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Strategic Objectives | HiMPaTH - IIT Ropar',
  description: 'Advancing Resilient, Sustainable & Technology-Driven Road Infrastructure across the Indian Himalayan Region.',
};

export default function ObjectivesPage() {
  const objectives = [
    {
      num: '01',
      title: 'Climate-Resilient Planning & DPRs',
      description: 'Develop climate-responsive Detailed Project Report (DPR) frameworks that integrate terrain, climatic and infrastructure considerations into the planning, design and implementation of sustainable roads in the Indian Himalayan Region.',
      icon: <Compass className="w-6 h-6 text-[#e4c982]" />,
    },
    {
      num: '02',
      title: 'Advanced & Sustainable Road Technologies',
      description: 'Develop and demonstrate innovative, sustainable and climate-resilient construction technologies for PMGSY and rural roads, specifically adapted to the extreme climatic and challenging terrain conditions of the Himalayan region.',
      icon: <Layers className="w-6 h-6 text-[#e4c982]" />,
    },
    {
      num: '03',
      title: 'Integrated Drainage, Erosion & Slope Management',
      description: 'Develop integrated approaches for drainage, storm-water management, erosion control and slope stabilization, supported by GIS-based terrain characterization and corridor planning to improve the resilience of Himalayan roads.',
      icon: <Activity className="w-6 h-6 text-[#e4c982]" />,
    },
    {
      num: '04',
      title: 'Policy, Standards & Engineering Practices',
      description: 'Generate scientific evidence and technical recommendations to support policy formulation, standardization and integration of climate-resilient technologies into Indian road codes, specifications and engineering practices.',
      icon: <ShieldCheck className="w-6 h-6 text-[#e4c982]" />,
    },
    {
      num: '05',
      title: 'AI & Data-Driven Infrastructure Management',
      description: 'Develop AI- and data-driven tools for pavement distress mapping, performance prediction and vulnerability assessment, enabling informed decision-making and resilient management of Himalayan road networks.',
      icon: <Cpu className="w-6 h-6 text-[#e4c982]" />,
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
              Objectives
            </h1>
            <p className="text-[#e4c982] font-semibold text-lg sm:text-xl mt-3">
              Advancing Resilient, Sustainable &amp; Technology-Driven Road Infrastructure
            </p>
            <p className="text-[#d2e4e8] text-sm sm:text-base mt-3 leading-relaxed">
              HiMPaTH operates under 5 clear, action-oriented strategic objectives to deliver safer, more durable, and climate-adaptive road networks across Himalayan states.
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
              className={`bg-white rounded-3xl border border-[#dbe5e4] p-8 shadow-card hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between ${idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''}`}
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
