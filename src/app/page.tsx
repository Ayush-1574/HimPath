'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Mountain,
  ShieldCheck,
  Zap,
  Activity,
  Layers,
  ArrowRight,
  TrendingUp,
  Cpu,
  Compass,
  CheckCircle2,
  Mail,
  Send,
  Building,
  Award,
  Globe2,
  TreeDeciduous,
  FileText,
  Clock,
  Sparkles,
} from 'lucide-react';

export default function HiMPaTHHomePage() {
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryEmail, setInquiryEmail] = useState('');
  const [inquiryMessage, setInquiryMessage] = useState('');
  const [inquiryStatus, setInquiryStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleInquirySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setInquiryStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: inquiryName,
          email: inquiryEmail,
          subject: 'HiMPaTH General Inquiry',
          message: inquiryMessage,
        }),
      });
      if (!res.ok) throw new Error('Submission failed');
      setInquiryStatus('success');
      setInquiryName('');
      setInquiryEmail('');
      setInquiryMessage('');
    } catch (err) {
      setInquiryStatus('error');
    }
  };

  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <section id="home" className="relative min-h-[790px] lg:min-h-[850px] flex items-center overflow-hidden bg-[#071e2e] pt-24 pb-20">
        {/* Background Gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_20%,rgba(255,255,255,0.18),transparent_28%),linear-gradient(120deg,#071e2e_0%,#123f52_48%,#3a6c72_100%)] pointer-events-none" />
        
        {/* Geometric light lines */}
        <div className="absolute inset-x-[-8%] bottom-[-20%] h-[60%] bg-[linear-gradient(165deg,transparent_0_18%,rgba(255,255,255,0.09)_18.2%_19%,transparent_19.2%),linear-gradient(175deg,transparent_0_30%,rgba(255,255,255,0.06)_30.2%_31%,transparent_31.2%)] -skew-y-3 pointer-events-none" />

        {/* Dynamic Vector Mountain & Road graphic */}
        <div className="absolute right-[-4%] bottom-[-2%] w-[85%] md:w-[62%] lg:w-[56%] h-[72%] opacity-90 pointer-events-none select-none">
          <svg viewBox="0 0 800 600" preserveAspectRatio="none" className="w-full h-full">
            <polygon points="0,600 160,330 270,450 430,160 570,400 690,260 800,390 800,600" fill="rgba(255,255,255,0.11)" />
            <polygon points="0,600 180,410 300,500 455,260 590,470 710,360 800,430 800,600" fill="rgba(6,28,42,0.48)" />
            <polygon points="430,160 365,295 420,270 455,330 505,250" fill="rgba(239,247,244,0.65)" />
            {/* Highway Ribbons */}
            <path d="M80 600 C210 540,300 530,410 500 S620 430,800 455" fill="none" stroke="rgba(228,201,130,0.95)" strokeWidth="12" />
            <path d="M80 600 C210 540,300 530,410 500 S620 430,800 455" fill="none" stroke="rgba(20,58,72,0.85)" strokeWidth="7" />
          </svg>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 w-full pt-10 pb-12">
          <div className="max-w-[840px]">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-sm mb-5 text-[#dcebea] text-[11px] font-extrabold uppercase tracking-[2.5px]">
              <span className="w-2 h-2 rounded-full bg-[#e4c982] animate-pulse" />
              <span>Centre of Excellence · Department of Civil Engineering · IIT Ropar</span>
            </div>

            {/* Main Branding Title */}
            <h1 className="text-[54px] sm:text-[80px] lg:text-[104px] font-black text-white leading-[0.88] tracking-[-4px] sm:tracking-[-6px] drop-shadow-sm">
              HiM<span className="text-[#e4c982]">PaTH</span>
            </h1>

            {/* Sub-expansion */}
            <p className="text-[17px] sm:text-[22px] lg:text-[25px] text-[#d9e7e7] font-medium tracking-tight mt-3 mb-6">
              Himalayan Pathways for Transport and Highways
            </p>

            {/* Headline */}
            <h2 className="text-[26px] sm:text-[38px] lg:text-[48px] font-extrabold text-white leading-[1.12] tracking-tight max-w-[780px]">
              Where <span className="text-[#e4c982] underline decoration-[#c9a45b]/40 decoration-wavy underline-offset-8">Innovation Meets the Himalayan Landscape</span>
            </h2>

            {/* Description */}
            <p className="text-[15px] sm:text-[17px] text-[#d8e6e8] leading-relaxed max-w-[680px] my-6">
              Advancing sustainable, climate-resilient and technology-driven transportation infrastructure for the Indian Himalayan Region through pioneering research, innovative pavement systems, and field validation.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/about"
                className="px-6 py-3.5 rounded-md text-xs font-black tracking-wider uppercase bg-[#c9a45b] text-[#102b3c] hover:bg-[#e4c982] shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
              >
                EXPLORE HiMPaTH
              </Link>
              <Link
                href="/research"
                className="px-6 py-3.5 rounded-md text-xs font-bold tracking-wider uppercase border border-white/50 text-white hover:bg-white/10 hover:border-white transition-all duration-200"
              >
                EXPLORE OUR RESEARCH
              </Link>
            </div>
          </div>
        </div>

        {/* Hero Bottom Strip */}
        <div className="absolute bottom-0 left-0 right-0 bg-[#04141e]/75 backdrop-blur-md border-t border-white/10">
          <div className="max-w-[1240px] mx-auto px-4">
            <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-white/10 text-center text-[#dce9ea] text-[10px] sm:text-[11px] font-extrabold tracking-[2px] uppercase py-4">
              <div className="px-2">Research</div>
              <div className="px-2">Innovation</div>
              <div className="px-2">Sustainability</div>
              <div className="px-2">Resilience</div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 01 · THE HIMALAYAN CHALLENGE */}
      <section className="py-20 lg:py-24 bg-[#f0f6f4] border-b border-[#dbe5e4]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-end mb-12">
            <div>
              <div className="text-[#258b82] text-[11px] font-black uppercase tracking-[2.4px] mb-2">
                01 · The Himalayan Challenge
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#102b3c] leading-[1.12] tracking-tight">
                Building resilient roads for challenging Himalayan terrain.
              </h2>
            </div>
            <div className="text-lg sm:text-xl font-bold text-[#173f52] leading-snug">
              Fragile terrain. Extreme climate. Critical connectivity.
              <p className="text-sm sm:text-base font-normal text-[#66767d] mt-3 leading-relaxed">
                The Indian Himalayan Region demands transportation infrastructure designed specifically for conditions where conventional approaches face severe geotechnical, structural, and climatic challenges.
              </p>
            </div>
          </div>

          {/* 5 Challenge Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="bg-white p-6 rounded-xl border border-[#dbe5e4] shadow-card hover:-translate-y-1 transition-all duration-300">
              <div className="text-3xl mb-4">⛰</div>
              <h4 className="font-bold text-[#102b3c] text-base mb-2">Fragile Terrain</h4>
              <p className="text-xs text-[#66767d] leading-relaxed">Steep slopes, young geological formations, and complex geotechnical constraints.</p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#dbe5e4] shadow-card hover:-translate-y-1 transition-all duration-300">
              <div className="text-3xl mb-4">❄</div>
              <h4 className="font-bold text-[#102b3c] text-base mb-2">Extreme Climate</h4>
              <p className="text-xs text-[#66767d] leading-relaxed">Heavy rainfall, cloudbursts, flash floods, snow loading, and rapid freeze-thaw cycles.</p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#dbe5e4] shadow-card hover:-translate-y-1 transition-all duration-300">
              <div className="text-3xl mb-4">◒</div>
              <h4 className="font-bold text-[#102b3c] text-base mb-2">Landslides</h4>
              <p className="text-xs text-[#66767d] leading-relaxed">Chronic slope instability, mass wasting, soil erosion, and corridor cutoffs.</p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#dbe5e4] shadow-card hover:-translate-y-1 transition-all duration-300">
              <div className="text-3xl mb-4">≋</div>
              <h4 className="font-bold text-[#102b3c] text-base mb-2">Drainage Challenges</h4>
              <p className="text-xs text-[#66767d] leading-relaxed">High-velocity mountain runoff, sub-surface water pressure, and drainage system failures.</p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#dbe5e4] shadow-card hover:-translate-y-1 transition-all duration-300">
              <div className="text-3xl mb-4">↗</div>
              <h4 className="font-bold text-[#102b3c] text-base mb-2">Connectivity Risks</h4>
              <p className="text-xs text-[#66767d] leading-relaxed">Prolonged road closures, high maintenance lifecycle costs, and critical safety hazards.</p>
            </div>
          </div>

          {/* Highlight Transition Bar */}
          <div className="mt-8 p-5 sm:p-6 bg-white border-l-4 border-[#c9a45b] rounded-r-xl shadow-sm text-[#173f52] font-extrabold text-base sm:text-lg">
            HiMPaTH transforms Himalayan transportation challenges into opportunities for resilient infrastructure innovation.
          </div>
        </div>
      </section>

      {/* SECTION 02 · ABOUT HIMPATH */}
      <section id="about" className="py-20 lg:py-24 bg-white border-b border-[#dbe5e4]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Visual Box */}
            <div className="lg:col-span-5 relative min-h-[420px] sm:min-h-[480px] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-[#10384a] via-[#2a7779] to-[#d4dfd7] p-8 flex flex-col justify-between">
              <div>
                <span className="text-[#dfeeee] text-[10px] font-black uppercase tracking-[2px]">
                  Centre of Excellence · IIT Ropar
                </span>
                <span className="absolute top-4 right-6 text-[120px] sm:text-[140px] font-black text-white/10 select-none leading-none">
                  02
                </span>
              </div>

              {/* Decorative Mountain Lines */}
              <div className="absolute inset-0 pointer-events-none">
                <svg viewBox="0 0 600 600" preserveAspectRatio="none" className="w-full h-full opacity-60">
                  <polygon points="0,520 150,260 250,390 360,120 480,350 600,220 600,600 0,600" fill="rgba(255,255,255,0.12)" />
                  <path d="M-10 590 C160 500 250 510 360 445 S500 410 620 390" fill="none" stroke="rgba(228,201,130,0.9)" strokeWidth="11" />
                  <path d="M-10 590 C160 500 250 510 360 445 S500 410 620 390" fill="none" stroke="rgba(10,44,59,0.8)" strokeWidth="6" />
                </svg>
              </div>

              <div className="relative z-10 text-white mt-auto pt-24">
                <strong className="block text-2xl sm:text-3xl font-extrabold leading-tight text-white mb-1">
                  Research. Innovation. Field Impact.
                </strong>
                <span className="text-xs sm:text-sm text-[#d6e9e8]">
                  Bridging laboratory research and real-world transportation solutions.
                </span>
              </div>
            </div>

            {/* Copy Content */}
            <div className="lg:col-span-7 space-y-4">
              <div className="text-[#258b82] text-[11px] font-black uppercase tracking-[2.4px]">
                02 · About HiMPaTH
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#102b3c] leading-[1.12] tracking-tight">
                Technology driven solutions for challenging environments.
              </h2>
              
              <p className="text-base sm:text-lg font-bold text-[#173f52] leading-relaxed pt-1">
                Welcome to HiMPaTH — Himalayan Pathways for Transport and Highways, a Centre of Excellence at the Department of Civil Engineering, IIT Ropar.
              </p>

              <p className="text-sm text-[#66767d] leading-relaxed">
                HiMPaTH is dedicated to advancing <strong className="text-[#273943]">sustainable, resilient and innovative transportation infrastructure</strong> for the Indian Himalayan Region and other challenging mountainous environments. Led by <strong className="text-[#102b3c]">Dr. Surya Kant Sahdeo</strong>, Assistant Professor, Department of Civil Engineering, IIT Ropar, the Centre brings together expertise in pavement engineering, sustainable materials, recycling and waste valorization, resilient infrastructure, advanced material characterization, performance-based testing and life-cycle assessment.
              </p>

              <p className="text-sm text-[#66767d] leading-relaxed">
                Through the integration of research, technology and field-based innovation, HiMPaTH addresses challenges arising from fragile terrain, steep slopes and extreme climatic conditions, with a focus on developing durable, climate-adaptive and resource-efficient transportation solutions.
              </p>

              <p className="text-sm text-[#66767d] leading-relaxed">
                The Centre aims to bridge the gap between <strong className="text-[#273943]">laboratory research and real-world application</strong>, transforming innovative ideas into practical solutions that support safer, more sustainable and resilient Himalayan road infrastructure.
              </p>

              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-xs font-black tracking-wider uppercase text-[#258b82] hover:text-[#1e667c] transition-colors"
                >
                  <span>READ MORE ABOUT HiMPaTH</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 03 · VISION & MISSION */}
      <section id="vision" className="py-20 lg:py-24 bg-[#102b3c] text-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-[#e4c982] text-[11px] font-black uppercase tracking-[2.4px] mb-2">
            03 · Vision &amp; Mission
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-white leading-[1.12] tracking-tight mb-10">
            Building a Resilient Future for Himalayan Roads
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 sm:p-10 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-[#e4c982]/40 transition-all duration-300">
              <h3 className="text-2xl font-black text-[#e4c982] mb-4">
                Our Vision
              </h3>
              <p className="text-[#d0dde0] text-sm sm:text-base leading-relaxed">
                To establish HiMPaTH as a leading Centre of Excellence for climate-resilient and sustainable road infrastructure in the Indian Himalayan Region, advancing innovative and technology-driven solutions for safer, more durable, reliable and resilient transportation networks.
              </p>
            </div>

            <div className="p-8 sm:p-10 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-[#e4c982]/40 transition-all duration-300">
              <h3 className="text-2xl font-black text-[#e4c982] mb-4">
                Our Mission
              </h3>
              <p className="text-[#d0dde0] text-sm sm:text-base leading-relaxed">
                To develop and implement climate-resilient road technologies through multidisciplinary research, sustainable construction practices, field validation and data-driven planning, while supporting DPR development, policy, standardization, capacity building and stakeholder collaboration for resilient Himalayan connectivity.
              </p>
            </div>
          </div>

          {/* Sanskrit Motto */}
          <div className="mt-14 pt-10 border-t border-white/10 text-center">
            <div className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#e4c982] tracking-wide font-normal">
              “आ नो भद्राः क्रतवो यन्तु विश्वतः”
            </div>
            <span className="block text-xs sm:text-sm text-[#b9c9cd] mt-2 font-medium tracking-wide">
              Let noble thoughts come from everywhere.
            </span>
          </div>
        </div>
      </section>

      {/* SECTION 04 · WHAT HIMPATH DOES */}
      <section id="what" className="py-20 lg:py-24 bg-white border-b border-[#dbe5e4]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <div>
              <div className="text-[#258b82] text-[11px] font-black uppercase tracking-[2.4px] mb-2">
                04 · What HiMPaTH Does
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#102b3c] leading-[1.12] tracking-tight">
                Research &amp; Innovation Pillars
              </h2>
            </div>
            <p className="max-w-[620px] text-sm sm:text-base text-[#66767d] leading-relaxed">
              HiMPaTH brings together research, technology development and field implementation to create practical solutions for resilient Himalayan transportation infrastructure.
            </p>
          </div>

          {/* 5 What Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="p-6 bg-[#f5f8f7] rounded-b-xl border-t-4 border-[#258b82] border-x border-b border-[#dbe5e4] flex flex-col justify-between hover:-translate-y-1 transition-all duration-300">
              <div>
                <span className="text-[10.5px] font-black text-[#258b82] tracking-wider uppercase">01 · RESILIENT PLANNING</span>
                <h3 className="text-lg font-bold text-[#102b3c] mt-4 mb-2 leading-snug">Climate-Resilient DPR Frameworks</h3>
              </div>
              <p className="text-xs text-[#66767d] leading-relaxed mt-2">Terrain-sensitive planning, design and vulnerability assessment for sustainable road infrastructure.</p>
            </div>

            <div className="p-6 bg-[#f5f8f7] rounded-b-xl border-t-4 border-[#258b82] border-x border-b border-[#dbe5e4] flex flex-col justify-between hover:-translate-y-1 transition-all duration-300">
              <div>
                <span className="text-[10.5px] font-black text-[#258b82] tracking-wider uppercase">02 · TECHNOLOGY</span>
                <h3 className="text-lg font-bold text-[#102b3c] mt-4 mb-2 leading-snug">Advanced Road Technologies</h3>
              </div>
              <p className="text-xs text-[#66767d] leading-relaxed mt-2">Sustainable and climate-resilient pavement and road construction technologies.</p>
            </div>

            <div className="p-6 bg-[#f5f8f7] rounded-b-xl border-t-4 border-[#258b82] border-x border-b border-[#dbe5e4] flex flex-col justify-between hover:-translate-y-1 transition-all duration-300">
              <div>
                <span className="text-[10.5px] font-black text-[#258b82] tracking-wider uppercase">03 · RESILIENCE</span>
                <h3 className="text-lg font-bold text-[#102b3c] mt-4 mb-2 leading-snug">Drainage &amp; Slope Resilience</h3>
              </div>
              <p className="text-xs text-[#66767d] leading-relaxed mt-2">Integrated drainage, erosion control, slope stabilization and GIS-based terrain assessment.</p>
            </div>

            <div className="p-6 bg-[#f5f8f7] rounded-b-xl border-t-4 border-[#258b82] border-x border-b border-[#dbe5e4] flex flex-col justify-between hover:-translate-y-1 transition-all duration-300">
              <div>
                <span className="text-[10.5px] font-black text-[#258b82] tracking-wider uppercase">04 · STANDARDS</span>
                <h3 className="text-lg font-bold text-[#102b3c] mt-4 mb-2 leading-snug">Policy &amp; Code Integration</h3>
              </div>
              <p className="text-xs text-[#66767d] leading-relaxed mt-2">Technical guidelines, standards and resilient engineering practices for Himalayan infrastructure.</p>
            </div>

            <div className="p-6 bg-[#f5f8f7] rounded-b-xl border-t-4 border-[#258b82] border-x border-b border-[#dbe5e4] flex flex-col justify-between hover:-translate-y-1 transition-all duration-300">
              <div>
                <span className="text-[10.5px] font-black text-[#258b82] tracking-wider uppercase">05 · INTELLIGENCE</span>
                <h3 className="text-lg font-bold text-[#102b3c] mt-4 mb-2 leading-snug">AI &amp; Data-Driven Solutions</h3>
              </div>
              <p className="text-xs text-[#66767d] leading-relaxed mt-2">Distress mapping, performance prediction, vulnerability assessment and decision support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 05 · RESEARCH AREAS */}
      <section id="research" className="py-20 lg:py-24 bg-[#f6f8f7] border-b border-[#dbe5e4]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-[#258b82] text-[11px] font-black uppercase tracking-[2.4px] mb-2">
            05 · Research Areas
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#102b3c] leading-[1.12] tracking-tight">
            Innovating for the roads of tomorrow.
          </h2>
          <p className="max-w-[760px] text-sm sm:text-base text-[#66767d] mt-3 mb-10 leading-relaxed">
            Multidisciplinary research connecting pavement engineering, sustainability, climate resilience, geospatial intelligence and policy.
          </p>

          {/* 6 Research Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-7 bg-white rounded-2xl border border-[#dbe5e4] shadow-card hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
              <div className="absolute right-[-20px] bottom-[-20px] w-28 h-28 rounded-full bg-[#258b82]/5 group-hover:scale-150 transition-transform duration-500" />
              <span className="text-[10.5px] font-black text-[#258b82] tracking-wider uppercase">PAVEMENTS</span>
              <h3 className="text-xl font-bold text-[#102b3c] mt-3 mb-2">Climate-Resilient Pavements</h3>
              <p className="text-xs text-[#66767d] leading-relaxed">Full-Depth Reclamation (FDR) · Roller-Compacted Concrete (RCCP) · Porous Asphalt · Pervious Concrete systems designed for extreme mountain hydrology and freeze-thaw cycles.</p>
            </div>

            <div className="p-7 bg-white rounded-2xl border border-[#dbe5e4] shadow-card hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
              <div className="absolute right-[-20px] bottom-[-20px] w-28 h-28 rounded-full bg-[#258b82]/5 group-hover:scale-150 transition-transform duration-500" />
              <span className="text-[10.5px] font-black text-[#258b82] tracking-wider uppercase">SUSTAINABILITY</span>
              <h3 className="text-xl font-bold text-[#102b3c] mt-3 mb-2">Sustainable Materials</h3>
              <p className="text-xs text-[#66767d] leading-relaxed">Reclaimed Asphalt Pavement (RAP) · Landslide Debris · Plastic Waste · Agro-Waste and Biochar for circular, resource-efficient and carbon-conscious construction.</p>
            </div>

            <div className="p-7 bg-white rounded-2xl border border-[#dbe5e4] shadow-card hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
              <div className="absolute right-[-20px] bottom-[-20px] w-28 h-28 rounded-full bg-[#258b82]/5 group-hover:scale-150 transition-transform duration-500" />
              <span className="text-[10.5px] font-black text-[#258b82] tracking-wider uppercase">RESILIENCE</span>
              <h3 className="text-xl font-bold text-[#102b3c] mt-3 mb-2">Drainage &amp; Slope Engineering</h3>
              <p className="text-xs text-[#66767d] leading-relaxed">High-efficiency storm-water management · Geosynthetics &amp; Geogrids · Erosion control · Bioengineering slope stabilization tailored to steep topography.</p>
            </div>

            <div className="p-7 bg-white rounded-2xl border border-[#dbe5e4] shadow-card hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
              <div className="absolute right-[-20px] bottom-[-20px] w-28 h-28 rounded-full bg-[#258b82]/5 group-hover:scale-150 transition-transform duration-500" />
              <span className="text-[10.5px] font-black text-[#258b82] tracking-wider uppercase">GEOSPATIAL</span>
              <h3 className="text-xl font-bold text-[#102b3c] mt-3 mb-2">GIS &amp; Geospatial Intelligence</h3>
              <p className="text-xs text-[#66767d] leading-relaxed">Terrain digital twin characterization · Alignment &amp; corridor planning · Vulnerability mapping and multi-criteria risk mitigation.</p>
            </div>

            <div className="p-7 bg-white rounded-2xl border border-[#dbe5e4] shadow-card hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
              <div className="absolute right-[-20px] bottom-[-20px] w-28 h-28 rounded-full bg-[#258b82]/5 group-hover:scale-150 transition-transform duration-500" />
              <span className="text-[10.5px] font-black text-[#258b82] tracking-wider uppercase">DATA &amp; AI</span>
              <h3 className="text-xl font-bold text-[#102b3c] mt-3 mb-2">AI-Driven Infrastructure</h3>
              <p className="text-xs text-[#66767d] leading-relaxed">Computer vision for road distress detection · Machine learning performance prediction · Automated maintenance decision-support systems.</p>
            </div>

            <div className="p-7 bg-white rounded-2xl border border-[#dbe5e4] shadow-card hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
              <div className="absolute right-[-20px] bottom-[-20px] w-28 h-28 rounded-full bg-[#258b82]/5 group-hover:scale-150 transition-transform duration-500" />
              <span className="text-[10.5px] font-black text-[#258b82] tracking-wider uppercase">POLICY</span>
              <h3 className="text-xl font-bold text-[#102b3c] mt-3 mb-2">Policy &amp; Standards</h3>
              <p className="text-xs text-[#66767d] leading-relaxed">Indian Roads Congress (IRC) · MoRTH guidelines integration · Standard specifications · Himalayan road DPR development frameworks.</p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/research"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg text-xs font-black tracking-wider uppercase bg-[#258b82] hover:bg-[#102b3c] text-white shadow-md hover:shadow-lg transition-all"
            >
              <span>EXPLORE FULL RESEARCH HUB &amp; PROPOSALS</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 06 · RESEARCH -> FIELD PIPELINE */}
      <section className="py-20 lg:py-24 bg-gradient-to-br from-[#0c2c3d] via-[#174e61] to-[#0f3446] text-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-[#e4c982] text-[11px] font-black uppercase tracking-[2.4px] mb-2">
            06 · Research → Field
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-white leading-[1.12] tracking-tight">
            From research to real-world impact.
          </h2>
          <p className="max-w-[760px] text-sm sm:text-base text-[#c7d9dd] mt-3 mb-12 leading-relaxed">
            A connected pathway from understanding Himalayan challenges to implementing resilient infrastructure solutions.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 pt-4">
            <div className="pt-6 border-t-2 border-white/30 relative pr-4">
              <span className="text-[10.5px] font-black text-[#e4c982] tracking-widest uppercase">01 · IDENTIFY</span>
              <h3 className="text-xl font-bold text-white mt-3 mb-1.5">Understand</h3>
              <p className="text-xs text-[#c7d7db] leading-relaxed">Characterize terrain, climate, traffic dynamics and infrastructure vulnerabilities.</p>
            </div>

            <div className="pt-6 border-t-2 border-white/30 relative pr-4">
              <span className="text-[10.5px] font-black text-[#e4c982] tracking-widest uppercase">02 · INNOVATE</span>
              <h3 className="text-xl font-bold text-white mt-3 mb-1.5">Develop</h3>
              <p className="text-xs text-[#c7d7db] leading-relaxed">Create sustainable materials, engineered pavement structures and data-driven solutions.</p>
            </div>

            <div className="pt-6 border-t-2 border-white/30 relative pr-4">
              <span className="text-[10.5px] font-black text-[#e4c982] tracking-widest uppercase">03 · VALIDATE</span>
              <h3 className="text-xl font-bold text-white mt-3 mb-1.5">Evaluate</h3>
              <p className="text-xs text-[#c7d7db] leading-relaxed">Assess laboratory and simulated field performance under harsh mountainous conditions.</p>
            </div>

            <div className="pt-6 border-t-2 border-white/30 relative pr-4">
              <span className="text-[10.5px] font-black text-[#e4c982] tracking-widest uppercase">04 · DEMONSTRATE</span>
              <h3 className="text-xl font-bold text-white mt-3 mb-1.5">Implement</h3>
              <p className="text-xs text-[#c7d7db] leading-relaxed">Translate validated technologies into pilot field test tracks and highway corridors.</p>
            </div>

            <div className="pt-6 border-t-2 border-white/30 relative">
              <span className="text-[10.5px] font-black text-[#e4c982] tracking-widest uppercase">05 · IMPACT</span>
              <h3 className="text-xl font-bold text-white mt-3 mb-1.5">Transform</h3>
              <p className="text-xs text-[#c7d7db] leading-relaxed">Enable safer, durable, sustainable and resilient all-weather road connectivity.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 07 · ONGOING RESEARCH */}
      <section id="research-action" className="py-20 lg:py-24 bg-white border-b border-[#dbe5e4]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-[#258b82] text-[11px] font-black uppercase tracking-[2.4px] mb-2">
            07 · Ongoing Research
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#102b3c] leading-[1.12] tracking-tight">
            Research in action.
          </h2>
          <p className="max-w-[760px] text-sm sm:text-base text-[#66767d] mt-3 mb-10 leading-relaxed">
            Current research activities under the HiMPaTH research group at IIT Ropar.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="rounded-2xl border border-[#dbe5e4] overflow-hidden bg-white shadow-card hover:-translate-y-1 transition-all duration-300 group">
              <div className="h-40 bg-gradient-to-br from-[#194b5d] to-[#6d9993] relative p-4 flex items-end">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
                <span className="relative z-10 text-[10px] font-extrabold text-[#e4c982] bg-[#071e2e]/80 px-2.5 py-1 rounded-full uppercase tracking-wider">
                  Storm-water &amp; Hydrology
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-[#102b3c] mb-2">Porous Asphalt</h3>
                <p className="text-xs text-[#66767d] leading-relaxed">Crumb-rubber modified porous asphalt for sustainable storm-water drainage and high-friction mountain surface courses.</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="rounded-2xl border border-[#dbe5e4] overflow-hidden bg-white shadow-card hover:-translate-y-1 transition-all duration-300 group">
              <div className="h-40 bg-gradient-to-br from-[#133e50] to-[#258b82] relative p-4 flex items-end">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
                <span className="relative z-10 text-[10px] font-extrabold text-[#e4c982] bg-[#071e2e]/80 px-2.5 py-1 rounded-full uppercase tracking-wider">
                  Permeable Systems
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-[#102b3c] mb-2">Pervious Concrete</h3>
                <p className="text-xs text-[#66767d] leading-relaxed">Sustainable pavement systems supporting storm-water management, runoff reduction and resilient road shoulder infrastructure.</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="rounded-2xl border border-[#dbe5e4] overflow-hidden bg-white shadow-card hover:-translate-y-1 transition-all duration-300 group">
              <div className="h-40 bg-gradient-to-br from-[#1a4a5a] to-[#4c7e83] relative p-4 flex items-end">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
                <span className="relative z-10 text-[10px] font-extrabold text-[#e4c982] bg-[#071e2e]/80 px-2.5 py-1 rounded-full uppercase tracking-wider">
                  Recycled Materials
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-[#102b3c] mb-2">RAP-Based RCCP</h3>
                <p className="text-xs text-[#66767d] leading-relaxed">Recycled asphalt pavement integrated into high-strength, low-maintenance structural roller-compacted concrete pavement systems.</p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="rounded-2xl border border-[#dbe5e4] overflow-hidden bg-white shadow-card hover:-translate-y-1 transition-all duration-300 group">
              <div className="h-40 bg-gradient-to-br from-[#0c2f42] to-[#1f6d78] relative p-4 flex items-end">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
                <span className="relative z-10 text-[10px] font-extrabold text-[#e4c982] bg-[#071e2e]/80 px-2.5 py-1 rounded-full uppercase tracking-wider">
                  In-situ Pavement Recycling
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-[#102b3c] mb-2">Full-Depth Reclamation</h3>
                <p className="text-xs text-[#66767d] leading-relaxed">In-situ pavement recycling, structural base reconstitution and enhanced load-bearing capacity for heavy transport corridors.</p>
              </div>
            </div>

            {/* Card 5 */}
            <div className="rounded-2xl border border-[#dbe5e4] overflow-hidden bg-white shadow-card hover:-translate-y-1 transition-all duration-300 group">
              <div className="h-40 bg-gradient-to-br from-[#124254] to-[#3a8b8c] relative p-4 flex items-end">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
                <span className="relative z-10 text-[10px] font-extrabold text-[#e4c982] bg-[#071e2e]/80 px-2.5 py-1 rounded-full uppercase tracking-wider">
                  Circular Economy
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-[#102b3c] mb-2">Circular Pavement Materials</h3>
                <p className="text-xs text-[#66767d] leading-relaxed">Landslide debris, hill-cut material and RAP valorized in stabilized sub-base and base layers to minimize virgin aggregate mining.</p>
              </div>
            </div>

            {/* Card 6 */}
            <div className="rounded-2xl border border-[#dbe5e4] overflow-hidden bg-white shadow-card hover:-translate-y-1 transition-all duration-300 group">
              <div className="h-40 bg-gradient-to-br from-[#0e364a] to-[#258b82] relative p-4 flex items-end">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
                <span className="relative z-10 text-[10px] font-extrabold text-[#e4c982] bg-[#071e2e]/80 px-2.5 py-1 rounded-full uppercase tracking-wider">
                  Decarbonization
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-[#102b3c] mb-2">Carbon-Negative Pavements</h3>
                <p className="text-xs text-[#66767d] leading-relaxed">Biochar-based concrete pavement systems exploring carbon capture, CO₂ sequestration and environmental sustainability.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 08 · PROJECTS */}
      <section id="projects" className="py-20 lg:py-24 bg-[#f0f6f4] border-b border-[#dbe5e4]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-[#258b82] text-[11px] font-black uppercase tracking-[2.4px] mb-2">
            08 · Projects
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#102b3c] leading-[1.12] tracking-tight">
            Research with purpose. Projects with impact.
          </h2>

          <h3 className="text-2xl font-bold text-[#102b3c] mt-8 mb-2">
            Ongoing Funded Projects
          </h3>
          <p className="text-sm sm:text-base text-[#66767d] leading-relaxed mb-8 max-w-[900px]">
            <strong className="text-[#102b3c]">Dr. Surya Kant Sahdeo</strong> is leading several nationally funded research projects focused on <strong className="text-[#273943]">infrastructure resilience and sustainable construction</strong>. Some of the ongoing funded projects include:
          </p>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-7 rounded-2xl border border-[#dbe5e4] shadow-card flex flex-col justify-between hover:-translate-y-1 transition-all duration-300">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-[#e6f2ef] text-[#258b82] text-[10px] font-black tracking-widest uppercase">
                  ANRF · IRG
                </span>
                <h3 className="text-lg font-bold text-[#102b3c] mt-4 mb-2 leading-snug">
                  RAP Binder Viscosity &amp; Pervious Concrete Pavement
                </h3>
                <p className="text-xs text-[#66767d] leading-relaxed">
                  Influence of aged binder viscosity in RAP on the mechanical and hydrological behaviour of pervious concrete pavement.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#dbe5e4] font-black text-[#c9a45b] text-base">
                ₹58.57 Lakh
              </div>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-[#dbe5e4] shadow-card flex flex-col justify-between hover:-translate-y-1 transition-all duration-300">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-[#e6f2ef] text-[#258b82] text-[10px] font-black tracking-widest uppercase">
                  NMHS
                </span>
                <h3 className="text-lg font-bold text-[#102b3c] mt-4 mb-2 leading-snug">
                  Landslide Debris &amp; Plastic Waste
                </h3>
                <p className="text-xs text-[#66767d] leading-relaxed">
                  Utilisation of landslide debris and plastic waste for different layers of pavement section in mountain road corridors.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#dbe5e4] font-black text-[#c9a45b] text-base">
                ₹44.53 Lakh
              </div>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-[#dbe5e4] shadow-card flex flex-col justify-between hover:-translate-y-1 transition-all duration-300">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-[#e6f2ef] text-[#258b82] text-[10px] font-black tracking-widest uppercase">
                  ISIRD
                </span>
                <h3 className="text-lg font-bold text-[#102b3c] mt-4 mb-2 leading-snug">
                  Recycled Asphalt &amp; Agro-Waste in RCCP
                </h3>
                <p className="text-xs text-[#66767d] leading-relaxed">
                  Freeze-thaw resilient roads using recycled asphalt and agro-waste in mountainous zones.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#dbe5e4] font-black text-[#c9a45b] text-base">
                ₹18.50 Lakh
              </div>
            </div>
          </div>

          {/* Completed Projects Placeholder */}
          <h3 className="text-2xl font-bold text-[#102b3c] mt-14 mb-3">
            Completed Projects
          </h3>
          <div className="min-h-[140px] border border-dashed border-[#b8c9c7] rounded-2xl bg-white/60 flex items-center justify-center text-xs text-[#87979d] tracking-wide">
            <span>Completed projects will be catalogued and updated here.</span>
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg text-xs font-black tracking-wider uppercase bg-[#258b82] hover:bg-[#102b3c] text-white shadow-md hover:shadow-lg transition-all"
            >
              <span>EXPLORE ALL FUNDED PROJECTS</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 09 · RESEARCH PROPOSALS */}
      <section id="research-proposals" className="py-20 lg:py-24 bg-white border-b border-[#dbe5e4]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-[#258b82] text-[11px] font-black uppercase tracking-[2.4px] mb-2">
            09 · Research Proposals
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#102b3c] leading-[1.12] tracking-tight">
            Expanding the Horizon of Research
          </h2>
          <p className="max-w-[820px] text-sm sm:text-base text-[#66767d] mt-3 mb-10 leading-relaxed">
            HiMPaTH continues to strengthen its research portfolio through proposals submitted to <strong className="text-[#273943]">national and international funding agencies</strong>, focusing on climate-resilient infrastructure, sustainable pavement technologies and innovative materials for durable transportation systems.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="p-6 bg-[#f5f8f7] border border-[#dbe5e4] border-l-4 border-l-[#258b82] rounded-xl">
              <strong className="block text-sm sm:text-base font-bold text-[#102b3c] mb-2">
                Department of Science and Technology (DST), Government of India
              </strong>
              <span className="block text-xs sm:text-sm text-[#66767d] italic leading-relaxed">
                Development of Carbon-Negative Concrete Pavement: Optimizing Biochar Dosage and Assessing CO₂ Sequestration Potential for Enhanced Performance and Sustainability.
              </span>
            </div>

            <div className="p-6 bg-[#f5f8f7] border border-[#dbe5e4] border-l-4 border-l-[#258b82] rounded-xl">
              <strong className="block text-sm sm:text-base font-bold text-[#102b3c] mb-2">
                Border Roads Organisation (BRO), Ministry of Defence, Government of India
              </strong>
              <span className="block text-xs sm:text-sm text-[#66767d] italic leading-relaxed">
                Green Alternative (Biochar-Modified VG-10) for Flexible Pavement in High-Altitude Regions.
              </span>
            </div>

            <div className="p-6 bg-[#f5f8f7] border border-[#dbe5e4] border-l-4 border-l-[#258b82] rounded-xl">
              <strong className="block text-sm sm:text-base font-bold text-[#102b3c] mb-2">
                National Asphalt Pavement Association (NAPA) &amp; Federal Aviation Administration (FAA): AAPTP
              </strong>
              <span className="block text-xs sm:text-sm text-[#66767d] italic leading-relaxed">
                Feasibility Study of Using Porous Asphalt Pavements for Airfields (Phase I: Review &amp; Feasibility Study).
              </span>
            </div>

            <div className="p-6 bg-[#f5f8f7] border border-[#dbe5e4] border-l-4 border-l-[#258b82] rounded-xl">
              <strong className="block text-sm sm:text-base font-bold text-[#102b3c] mb-2">
                National Technical Textiles Mission (NTTM), Ministry of Textiles, Government of India
              </strong>
              <span className="block text-xs sm:text-sm text-[#66767d] italic leading-relaxed">
                A Performance Study of Fibre-Reinforced Roller Compacted Concrete Pavement.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10 · IMPACT */}
      <section className="py-20 lg:py-24 bg-[#f5f8f7] border-b border-[#dbe5e4]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-[#258b82] text-[11px] font-black uppercase tracking-[2.4px] mb-2">
            10 · Impact
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#102b3c] leading-[1.12] tracking-tight">
            Why HiMPaTH matters.
          </h2>
          <p className="max-w-[760px] text-sm sm:text-base text-[#66767d] mt-3 mb-10 leading-relaxed">
            Building infrastructure that responds to the needs of the Himalayan environment and the communities it connects.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 rounded-2xl bg-white border border-[#dbe5e4] shadow-card">
              <div className="text-3xl mb-4">⛰</div>
              <h3 className="text-xl font-bold text-[#102b3c] mb-2">Regional Impact</h3>
              <p className="text-xs sm:text-sm text-[#66767d] leading-relaxed">
                Safer, more reliable and resilient connectivity across Himalayan regions, supporting all-weather transportation networks, strategic routes, and emergency mobility.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-[#dbe5e4] shadow-card">
              <div className="text-3xl mb-4">♻</div>
              <h3 className="text-xl font-bold text-[#102b3c] mb-2">Environmental Impact</h3>
              <p className="text-xs sm:text-sm text-[#66767d] leading-relaxed">
                Resource-efficient construction through RAP, landslide debris, plastic and agro-waste, alongside erosion mitigation, carbon sequestration, and climate adaptation.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-[#dbe5e4] shadow-card">
              <div className="text-3xl mb-4">◎</div>
              <h3 className="text-xl font-bold text-[#102b3c] mb-2">Socio-Economic Impact</h3>
              <p className="text-xs sm:text-sm text-[#66767d] leading-relaxed">
                Improved access to tourism, agriculture, healthcare, education, markets and local economic opportunities for mountainous communities across India.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 11 · NATIONAL RELEVANCE */}
      <section className="py-20 lg:py-24 bg-[#102b3c] text-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-[#e4c982] text-[11px] font-black uppercase tracking-[2.4px] mb-2">
            11 · National Relevance
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-white leading-[1.12] tracking-tight">
            Aligned with national priorities.
          </h2>
          <p className="max-w-[760px] text-sm sm:text-base text-[#c6d6da] mt-3 mb-10 leading-relaxed">
            HiMPaTH contributes to national missions and strategic frameworks for resilient and sustainable infrastructure.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="p-6 rounded-xl border border-white/15 bg-white/[0.04]">
              <strong className="block text-[#e4c982] text-base font-bold mb-2">NMHS</strong>
              <p className="text-xs text-[#c7d5d9] leading-relaxed">Himalayan ecosystem resilience and sustainable infrastructure development.</p>
            </div>

            <div className="p-6 rounded-xl border border-white/15 bg-white/[0.04]">
              <strong className="block text-[#e4c982] text-base font-bold mb-2">ANRF</strong>
              <p className="text-xs text-[#c7d5d9] leading-relaxed">Interdisciplinary research, advanced technology innovation and field validation.</p>
            </div>

            <div className="p-6 rounded-xl border border-white/15 bg-white/[0.04]">
              <strong className="block text-[#e4c982] text-base font-bold mb-2">PM Gati Shakti</strong>
              <p className="text-xs text-[#c7d5d9] leading-relaxed">Integrated infrastructure planning and reliable mountain multi-modal connectivity.</p>
            </div>

            <div className="p-6 rounded-xl border border-white/15 bg-white/[0.04]">
              <strong className="block text-[#e4c982] text-base font-bold mb-2">SDGs</strong>
              <p className="text-xs text-[#c7d5d9] leading-relaxed">SDG 9 · 11 · 12 · 13 — Industry innovation, sustainable cities, responsible consumption, climate action.</p>
            </div>

            <div className="p-6 rounded-xl border border-white/15 bg-white/[0.04]">
              <strong className="block text-[#e4c982] text-base font-bold mb-2">MoRTH</strong>
              <p className="text-xs text-[#c7d5d9] leading-relaxed">Enhanced road durability, safety standards and resource-efficient road construction.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 12 · HIMPATH MEMBERS */}
      <section id="team" className="py-20 lg:py-24 bg-white border-b border-[#dbe5e4]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-[#258b82] text-[11px] font-black uppercase tracking-[2.4px] mb-2">
            12 · HiMPaTH Members
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#102b3c] leading-[1.12] tracking-tight">
            The people driving the mission.
          </h2>
          <p className="max-w-[760px] text-sm sm:text-base text-[#66767d] mt-3 mb-10 leading-relaxed">
            An interdisciplinary team bringing together transportation, geotechnical and geomatics expertise.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Primary Member */}
            <div className="lg:col-span-6 p-8 rounded-2xl bg-gradient-to-br from-[#0e3346] to-[#1f6975] text-white flex flex-col justify-between shadow-xl">
              <div>
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center font-black text-xl text-white mb-6 border border-white/30">
                  SS
                </div>
                <div className="text-[10px] font-black uppercase tracking-[1.5px] text-[#e4c982] mb-1">
                  Project Coordinator · HiMPaTH
                </div>
                <h3 className="text-2xl font-black text-white mb-2">
                  Dr. Surya Kant Sahdeo
                </h3>
                <p className="text-xs sm:text-sm text-[#d2e1e3] leading-relaxed">
                  Assistant Professor, Department of Civil Engineering, Indian Institute of Technology Ropar.
                </p>
                <p className="text-xs text-[#b8d1d5] mt-3 leading-relaxed">
                  Specializing in pavement engineering, sustainable pavement materials, recycling &amp; waste valorization, FDR, pervious concrete, and resilient transport systems.
                </p>
              </div>
            </div>

            {/* Co-Coordinator 1 */}
            <div className="lg:col-span-3 p-8 rounded-2xl bg-[#f8faf9] border border-[#dbe5e4] shadow-card flex flex-col justify-between hover:-translate-y-1 transition-all duration-300">
              <div>
                <div className="w-14 h-14 rounded-full bg-[#e7f1ef] text-[#1e667c] flex items-center justify-center font-black text-lg mb-6 border border-[#258b82]/30">
                  SP
                </div>
                <div className="text-[10px] font-black uppercase tracking-[1.5px] text-[#258b82] mb-1">
                  Co-Coordinator · HiMPaTH
                </div>
                <h3 className="text-xl font-bold text-[#102b3c] mb-2">
                  Dr. Shray Pathak
                </h3>
                <p className="text-xs text-[#66767d] leading-relaxed">
                  Assistant Professor, Department of Civil Engineering, Indian Institute of Technology Ropar.
                </p>
              </div>
            </div>

            {/* Co-Coordinator 2 */}
            <div className="lg:col-span-3 p-8 rounded-2xl bg-[#f8faf9] border border-[#dbe5e4] shadow-card flex flex-col justify-between hover:-translate-y-1 transition-all duration-300">
              <div>
                <div className="w-14 h-14 rounded-full bg-[#e7f1ef] text-[#1e667c] flex items-center justify-center font-black text-lg mb-6 border border-[#258b82]/30">
                  RM
                </div>
                <div className="text-[10px] font-black uppercase tracking-[1.5px] text-[#258b82] mb-1">
                  Co-Coordinator · HiMPaTH
                </div>
                <h3 className="text-xl font-bold text-[#102b3c] mb-2">
                  Dr. Raheena M
                </h3>
                <p className="text-xs text-[#66767d] leading-relaxed">
                  Assistant Professor, Department of Civil Engineering, Indian Institute of Technology Ropar.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/team"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg text-xs font-black tracking-wider uppercase bg-[#258b82] hover:bg-[#102b3c] text-white shadow-md hover:shadow-lg transition-all"
            >
              <span>VIEW ALL HiMPaTH MEMBERS &amp; SCHOLARS</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 13 · NEWS & EVENTS */}
      <section id="news" className="py-20 lg:py-24 bg-[#f0f6f4] border-b border-[#dbe5e4]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-[#258b82] text-[11px] font-black uppercase tracking-[2.4px] mb-2">
            13 · News &amp; Events
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#102b3c] leading-[1.12] tracking-tight">
            What&apos;s happening at HiMPaTH.
          </h2>
          <p className="max-w-[760px] text-sm sm:text-base text-[#66767d] mt-3 mb-10 leading-relaxed">
            Research updates, field demonstrations, publications, workshops, collaborations and achievements.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-6 p-8 rounded-2xl bg-gradient-to-br from-[#123b4d] to-[#247b7b] text-white flex flex-col justify-between shadow-xl">
              <div>
                <span className="text-[10.5px] font-black uppercase tracking-widest text-[#e4c982]">
                  RESEARCH UPDATE
                </span>
                <h3 className="text-2xl font-bold text-white mt-3 mb-3 leading-snug">
                  From laboratory innovation to resilient Himalayan infrastructure.
                </h3>
                <p className="text-xs sm:text-sm text-[#d5e5e6] leading-relaxed">
                  Follow HiMPaTH as our pioneering pavement formulations and circular material tests move toward real-world field demonstration and practical mountain highway solutions.
                </p>
              </div>
            </div>

            <div className="lg:col-span-3 p-8 rounded-2xl bg-white border border-[#dbe5e4] shadow-card flex flex-col justify-between hover:-translate-y-1 transition-all duration-300">
              <div>
                <span className="text-[10.5px] font-black uppercase tracking-widest text-[#258b82]">
                  PUBLICATIONS
                </span>
                <h3 className="text-lg font-bold text-[#102b3c] mt-3 mb-2 leading-snug">
                  Research &amp; Knowledge
                </h3>
                <p className="text-xs text-[#66767d] leading-relaxed">
                  Peer-reviewed journal articles, international conference proceedings, technical guidelines, and research outcomes.
                </p>
              </div>
            </div>

            <div className="lg:col-span-3 p-8 rounded-2xl bg-white border border-[#dbe5e4] shadow-card flex flex-col justify-between hover:-translate-y-1 transition-all duration-300">
              <div>
                <span className="text-[10.5px] font-black uppercase tracking-widest text-[#258b82]">
                  EVENTS
                </span>
                <h3 className="text-lg font-bold text-[#102b3c] mt-3 mb-2 leading-snug">
                  Workshops &amp; Field Activities
                </h3>
                <p className="text-xs text-[#66767d] leading-relaxed">
                  Technical training modules, stakeholder engagements, Himalayan field visits, and cross-institute industry collaborations.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/news"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg text-xs font-black tracking-wider uppercase bg-[#258b82] hover:bg-[#102b3c] text-white shadow-md hover:shadow-lg transition-all"
            >
              <span>EXPLORE ALL NEWS, PUBLICATIONS &amp; EVENTS</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 14 · CONNECT / CTA */}
      <section id="contact" className="py-20 lg:py-28 bg-gradient-to-r from-[#123b4c] via-[#16505f] to-[#1d7178] text-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Info */}
            <div className="lg:col-span-6 space-y-4 text-center lg:text-left">
              <div className="text-[#e4c982] text-[11px] font-black uppercase tracking-[2.4px]">
                14 · Connect with HiMPaTH
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-[1.12] tracking-tight">
                Building resilient pathways for the Himalayas.
              </h2>
              <p className="text-sm sm:text-base text-[#d4e5e6] leading-relaxed max-w-[580px]">
                From research and innovation to field implementation, HiMPaTH is shaping sustainable, climate-resilient and reliable transportation infrastructure for the future.
              </p>

              <div className="pt-4 flex flex-wrap justify-center lg:justify-start gap-4">
                <a
                  href="mailto:himpath@iitrpr.ac.in"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md text-xs font-black tracking-wider uppercase bg-[#c9a45b] text-[#102b3c] hover:bg-[#e4c982] shadow-lg hover:shadow-xl transition-all"
                >
                  <Mail className="w-4 h-4" />
                  <span>CONNECT WITH US: himpath@iitrpr.ac.in</span>
                </a>
              </div>
            </div>

            {/* Right Quick Inquiry Form */}
            <div className="lg:col-span-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 sm:p-8 shadow-2xl">
              <h3 className="text-xl font-bold text-white mb-1">Send an Inquiry to HiMPaTH</h3>
              <p className="text-xs text-[#d2e1e3] mb-6">Have a research inquiry, partnership proposal, or consultation query?</p>

              {inquiryStatus === 'success' ? (
                <div className="p-6 bg-emerald-950/60 border border-emerald-400/50 rounded-xl text-center space-y-2">
                  <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                  <h4 className="font-bold text-white text-base">Inquiry Submitted Successfully</h4>
                  <p className="text-xs text-emerald-200">Thank you for reaching out. The HiMPaTH team at IIT Ropar will respond promptly.</p>
                  <button
                    onClick={() => setInquiryStatus('idle')}
                    className="mt-3 text-xs font-bold text-[#e4c982] underline uppercase tracking-wider"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleInquirySubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-200 mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={inquiryName}
                        onChange={(e) => setInquiryName(e.target.value)}
                        placeholder="Dr. / Prof. / Er."
                        className="w-full bg-black/20 border border-white/20 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-[#e4c982]"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-200 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={inquiryEmail}
                        onChange={(e) => setInquiryEmail(e.target.value)}
                        placeholder="name@organization.com"
                        className="w-full bg-black/20 border border-white/20 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-[#e4c982]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-200 mb-1">
                      Message / Subject *
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={inquiryMessage}
                      onChange={(e) => setInquiryMessage(e.target.value)}
                      placeholder="Specify your inquiry regarding HiMPaTH research, funding, or collaborations..."
                      className="w-full bg-black/20 border border-white/20 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-[#e4c982]"
                    />
                  </div>

                  {inquiryStatus === 'error' && (
                    <p className="text-xs text-rose-300 font-medium">
                      Could not send message automatically. Please contact himpath@iitrpr.ac.in directly.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={inquiryStatus === 'loading'}
                    className="w-full py-3 bg-[#c9a45b] hover:bg-[#e4c982] text-[#102b3c] font-black text-xs uppercase tracking-wider rounded-lg transition-all flex items-center justify-center gap-2 shadow-md"
                  >
                    {inquiryStatus === 'loading' ? (
                      <span>Sending inquiry...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>SUBMIT INQUIRY</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
