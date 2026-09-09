'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
  ExternalLink,
  Linkedin,
} from 'lucide-react';
import { SITE_CONTACT, ongoingProjectsList, submittedProjectsList, facultyList } from '@/lib/siteData';

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
        {/* Full Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/himpath.png"
            alt="HimPath - Himalayan Mountain Road and Highway Infrastructure"
            fill
            priority
            quality={100}
            className="object-cover object-center scale-[1.02] transition-transform duration-1000"
          />
          {/* Subtle luminous and directional gradient to keep image vivid while making text pop */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/30 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#04141e]/95 via-transparent to-black/30 pointer-events-none" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 w-full pt-10 pb-12">
          <div className="max-w-[840px] p-4 sm:p-6 rounded-2xl bg-black/20 backdrop-blur-[3px] border border-white/10 shadow-2xl">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/40 border border-white/20 backdrop-blur-md mb-5 text-[#e1eff0] text-[11px] font-extrabold uppercase tracking-[2.5px] shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#e4c982] animate-pulse" />
              <span>Centre of Excellence · Department of Civil Engineering · IIT Ropar</span>
            </div>

            {/* Main Branding Title */}
            <h1 className="text-[54px] sm:text-[80px] lg:text-[104px] font-black text-white leading-[0.88] tracking-[-4px] sm:tracking-[-6px] drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]">
              HiM<span className="text-[#e4c982]">PaTH</span>
            </h1>

            {/* Sub-expansion */}
            <p className="text-[17px] sm:text-[22px] lg:text-[25px] text-[#eff8f8] font-semibold tracking-tight mt-3 mb-6 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              Himalayan Pathways for Transport and Highways
            </p>

            {/* Headline */}
            <h2 className="text-[26px] sm:text-[38px] lg:text-[48px] font-extrabold text-white leading-[1.12] tracking-tight max-w-[780px] drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
              Where <span className="text-[#e4c982] underline decoration-[#c9a45b]/60 decoration-wavy underline-offset-8">Innovation Meets the Himalayan Landscape</span>
            </h2>

            {/* Description */}
            <p className="text-[15px] sm:text-[17px] text-[#f1f8f9] leading-relaxed max-w-[680px] my-6 font-normal drop-shadow-[0_2px_6px_rgba(0,0,0,0.85)]">
              Advancing sustainable, climate-resilient and technology-driven transportation infrastructure for the Indian Himalayan Region through pioneering research, innovative pavement systems, and field validation.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/about"
                className="px-6 py-3.5 rounded-md text-xs font-black tracking-wider uppercase bg-[#c9a45b] text-[#102b3c] hover:bg-[#e4c982] shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-200"
              >
                EXPLORE HiMPaTH
              </Link>
              <Link
                href="/research/facilities"
                className="px-6 py-3.5 rounded-md text-xs font-bold tracking-wider uppercase border-2 border-white/80 bg-black/30 backdrop-blur-sm text-white hover:bg-white hover:text-[#08202f] transition-all duration-200 shadow-lg"
              >
                RESEARCH FACILITIES (01–04)
              </Link>
            </div>
          </div>
        </div>

        {/* Hero Bottom Strip */}
        <div className="absolute bottom-0 left-0 right-0 bg-[#04141e]/75 backdrop-blur-md border-t border-white/10">
          <div className="max-w-[1240px] mx-auto px-4">
            <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-white/10 text-center text-[#dce9ea] text-[10px] sm:text-[11px] font-extrabold tracking-[2px] uppercase py-4">
              <div className="px-2">Research &amp; Testing</div>
              <div className="px-2">Field Validation</div>
              <div className="px-2">Engineering Standards</div>
              <div className="px-2">Capacity Building</div>
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
                Welcome to HiMPaTH — Himalayan Pathways for Transport and Highways, an interdisciplinary Centre of Excellence hosted by the Department of Civil Engineering, IIT Ropar.
              </p>

              <p className="text-sm text-[#66767d] leading-relaxed">
                Led by <strong className="text-[#102b3c]">Dr. Surya Kant Sahdeo</strong>, HiMPaTH integrates advanced material characterization, pavement performance testing, GIS-based assessment, and field-oriented research to develop durable, sustainable, and climate-resilient road infrastructure for the Indian Himalayan Region.
              </p>

              <p className="text-sm text-[#66767d] leading-relaxed">
                The Centre aims to bridge laboratory research with field implementation, supporting collaboration with government agencies and road-sector stakeholders including <strong className="text-[#102b3c]">MoRTH, BRO, NHAI, PMGSY, and State PWDs</strong>.
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <Link
                  href="/about/mandate"
                  className="inline-flex items-center gap-2 text-xs font-black tracking-wider uppercase text-[#258b82] hover:text-[#1e667c] transition-colors"
                >
                  <span>READ INSTITUTIONAL MANDATE</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/projects/collaborations"
                  className="inline-flex items-center gap-2 text-xs font-black tracking-wider uppercase text-[#c9a45b] hover:text-[#b08c45] transition-colors"
                >
                  <span>MULTI-AGENCY ECOSYSTEM</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 03 · VISION & MISSION (Key Strategic Goals & Action Pillars) */}
      <section id="vision" className="py-20 lg:py-24 bg-[#102b3c] text-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-[#e4c982] text-[11px] font-black uppercase tracking-[2.4px] mb-2">
            03 · Vision &amp; Mission
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-white leading-[1.12] tracking-tight mb-10">
            Building a Resilient Future for Himalayan Roads
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision Card with Key Strategic Goals */}
            <div className="p-8 sm:p-10 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-[#e4c982]/40 transition-all duration-300 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-black text-[#e4c982] mb-3">
                  Our Vision
                </h3>
                <p className="text-[#d0dde0] text-sm sm:text-base leading-relaxed mb-6">
                  To establish HiMPaTH as a leading Centre of Excellence for climate-resilient and sustainable road infrastructure in the Indian Himalayan Region, advancing innovative and technology-driven solutions for safer, more durable, reliable and resilient transportation networks.
                </p>
              </div>

              <div className="pt-6 border-t border-white/10 space-y-2.5">
                <span className="text-[11px] font-black uppercase tracking-wider text-[#e4c982] block mb-2">
                  Key Strategic Goals
                </span>
                <div className="flex items-start gap-2.5 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#e4c982] shrink-0 mt-0.5" />
                  <span>High-Performance Himalayan Pavements</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#e4c982] shrink-0 mt-0.5" />
                  <span>Sustainable Resource Utilization</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#e4c982] shrink-0 mt-0.5" />
                  <span>Climate-Resilient Infrastructure Planning</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#e4c982] shrink-0 mt-0.5" />
                  <span>Innovation to Implementation</span>
                </div>
              </div>
            </div>

            {/* Mission Card with Core Action Pillars */}
            <div className="p-8 sm:p-10 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-[#258b82]/60 transition-all duration-300 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-black text-[#258b82] mb-3">
                  Our Mission
                </h3>
                <p className="text-[#d0dde0] text-sm sm:text-base leading-relaxed mb-6">
                  To develop and implement climate-resilient road technologies through multidisciplinary research, sustainable construction practices, field validation and data-driven planning, while supporting DPR development, policy, standardization, capacity building and stakeholder collaboration for resilient Himalayan connectivity.
                </p>
              </div>

              <div className="pt-6 border-t border-white/10 space-y-2.5">
                <span className="text-[11px] font-black uppercase tracking-wider text-[#258b82] block mb-2">
                  Core Action Pillars
                </span>
                <div className="flex items-start gap-2.5 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#258b82] shrink-0 mt-0.5" />
                  <span>Advanced Research &amp; Testing</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#258b82] shrink-0 mt-0.5" />
                  <span>Field Validation &amp; Demonstration</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#258b82] shrink-0 mt-0.5" />
                  <span>Engineering Standards &amp; Guidelines</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#258b82] shrink-0 mt-0.5" />
                  <span>Training &amp; Capacity Building</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 04 · OBJECTIVES (5 Strategic Objectives) */}
      <section id="objectives" className="py-20 lg:py-24 bg-white border-b border-[#dbe5e4]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <div>
              <div className="text-[#258b82] text-[11px] font-black uppercase tracking-[2.4px] mb-2">
                04 · Strategic Objectives
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#102b3c] leading-[1.12] tracking-tight">
                Advancing Resilient, Sustainable &amp; Technology-Driven Road Infrastructure
              </h2>
            </div>
            <Link
              href="/about/objectives"
              className="px-5 py-2.5 rounded-lg bg-[#f0f6f4] hover:bg-[#258b82] hover:text-white text-[#258b82] text-xs font-bold uppercase tracking-wider transition-all self-start lg:self-end shrink-0 inline-flex items-center gap-1.5"
            >
              <span>View All 5 Objectives</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* 5 Objectives Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-7 bg-[#f7faf9] rounded-2xl border border-[#dbe5e4] flex flex-col justify-between hover:-translate-y-1 transition-all duration-300">
              <div>
                <span className="px-2.5 py-1 rounded-full bg-[#e6f2ef] text-[#258b82] text-[10px] font-black uppercase tracking-wider">
                  01 · Planning &amp; DPRs
                </span>
                <h3 className="text-lg font-bold text-[#102b3c] mt-4 mb-2 leading-snug">
                  Climate-Resilient Planning &amp; DPRs
                </h3>
                <p className="text-xs text-[#586b74] leading-relaxed">
                  Develop climate-responsive Detailed Project Report (DPR) frameworks that integrate terrain, climatic and infrastructure considerations into the planning, design and implementation of sustainable roads in the Indian Himalayan Region.
                </p>
              </div>
            </div>

            <div className="p-7 bg-[#f7faf9] rounded-2xl border border-[#dbe5e4] flex flex-col justify-between hover:-translate-y-1 transition-all duration-300">
              <div>
                <span className="px-2.5 py-1 rounded-full bg-[#e6f2ef] text-[#258b82] text-[10px] font-black uppercase tracking-wider">
                  02 · Road Technologies
                </span>
                <h3 className="text-lg font-bold text-[#102b3c] mt-4 mb-2 leading-snug">
                  Advanced &amp; Sustainable Road Technologies
                </h3>
                <p className="text-xs text-[#586b74] leading-relaxed">
                  Develop and demonstrate innovative, sustainable and climate-resilient construction technologies for PMGSY and rural roads, specifically adapted to the extreme climatic and challenging terrain conditions of the Himalayan region.
                </p>
              </div>
            </div>

            <div className="p-7 bg-[#f7faf9] rounded-2xl border border-[#dbe5e4] flex flex-col justify-between hover:-translate-y-1 transition-all duration-300">
              <div>
                <span className="px-2.5 py-1 rounded-full bg-[#e6f2ef] text-[#258b82] text-[10px] font-black uppercase tracking-wider">
                  03 · Drainage &amp; Slopes
                </span>
                <h3 className="text-lg font-bold text-[#102b3c] mt-4 mb-2 leading-snug">
                  Integrated Drainage, Erosion &amp; Slope Management
                </h3>
                <p className="text-xs text-[#586b74] leading-relaxed">
                  Develop integrated approaches for drainage, storm-water management, erosion control and slope stabilization, supported by GIS-based terrain characterization and corridor planning to improve the resilience of Himalayan roads.
                </p>
              </div>
            </div>

            <div className="p-7 bg-[#f7faf9] rounded-2xl border border-[#dbe5e4] flex flex-col justify-between hover:-translate-y-1 transition-all duration-300">
              <div>
                <span className="px-2.5 py-1 rounded-full bg-[#e6f2ef] text-[#258b82] text-[10px] font-black uppercase tracking-wider">
                  04 · Policy &amp; Standards
                </span>
                <h3 className="text-lg font-bold text-[#102b3c] mt-4 mb-2 leading-snug">
                  Policy, Standards &amp; Engineering Practices
                </h3>
                <p className="text-xs text-[#586b74] leading-relaxed">
                  Generate scientific evidence and technical recommendations to support policy formulation, standardization and integration of climate-resilient technologies into Indian road codes, specifications and engineering practices.
                </p>
              </div>
            </div>

            <div className="p-7 bg-[#f7faf9] rounded-2xl border border-[#dbe5e4] flex flex-col justify-between hover:-translate-y-1 transition-all duration-300 md:col-span-2 lg:col-span-2">
              <div>
                <span className="px-2.5 py-1 rounded-full bg-[#e6f2ef] text-[#258b82] text-[10px] font-black uppercase tracking-wider">
                  05 · AI &amp; Data
                </span>
                <h3 className="text-lg font-bold text-[#102b3c] mt-4 mb-2 leading-snug">
                  AI &amp; Data-Driven Infrastructure Management
                </h3>
                <p className="text-xs text-[#586b74] leading-relaxed">
                  Develop AI- and data-driven tools for pavement distress mapping, performance prediction and vulnerability assessment, enabling informed decision-making and resilient management of Himalayan road networks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 05 · ONGOING FUNDED PROJECTS & SUBMITTED PROPOSALS */}
      <section id="projects" className="py-20 lg:py-24 bg-[#f0f6f4] border-b border-[#dbe5e4]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-[#258b82] text-[11px] font-black uppercase tracking-[2.4px] mb-2">
            05 · Sponsored Research
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#102b3c] leading-[1.12] tracking-tight mb-4">
            Ongoing Funded Projects
          </h2>
          <p className="text-sm sm:text-base text-[#66767d] leading-relaxed mb-8 max-w-[900px]">
            National research grants investigating resilient pavement mechanics, recycled materials, and durability under harsh Himalayan conditions.
          </p>

          {/* Ongoing Funded Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
            {ongoingProjectsList.map((proj, idx) => (
              <div key={proj.id} className="bg-white p-8 rounded-2xl border border-[#dbe5e4] shadow-card flex flex-col justify-between hover:-translate-y-1 transition-all duration-300">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="inline-block px-3 py-1 rounded-full bg-[#e6f2ef] text-[#258b82] text-[10.5px] font-black tracking-widest uppercase">
                      {proj.agency} — {proj.fundingScheme}
                    </span>
                    <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full uppercase">
                      {proj.status}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[#102b3c] mb-2 leading-snug">
                    0{idx + 1} · {proj.title}
                  </h3>
                  <p className="text-xs text-[#66767d] leading-relaxed">
                    {proj.summary}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#dbe5e4] flex items-center justify-between">
                  <span className="text-xs text-slate-500 font-medium">{proj.agencyFull}</span>
                  <span className="font-black text-[#c9a45b] text-base">{proj.budget}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Submitted & Under Review Section */}
          <h3 className="text-2xl font-bold text-[#102b3c] mb-2">
            Submitted &amp; Under Review
          </h3>
          <p className="text-xs sm:text-sm text-[#66767d] mb-6">
            Proposals submitted to national ministries and defense organizations.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {submittedProjectsList.map((sub, sIdx) => (
              <div key={sub.id} className="bg-white p-6 rounded-2xl border border-[#dbe5e4] shadow-card flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[10px] font-black uppercase tracking-wider text-[#258b82]">
                      0{sIdx + 1} · {sub.agency}
                    </span>
                    <span className="text-[10px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded uppercase">
                      Under Review
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-[#102b3c] mb-2 leading-snug">
                    {sub.title}
                  </h4>
                  <p className="text-xs text-slate-500">
                    {sub.agencyFull}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Completed Projects (Clean Prototype Placeholder) */}
          <div className="pt-6 border-t border-[#dbe5e4]">
            <h3 className="text-xl font-bold text-[#102b3c] mb-2">
              Completed Projects
            </h3>
            <p className="text-xs text-slate-500 mb-3">
              No completed projects to be listed at present.
            </p>
            <div className="min-h-[90px] border border-dashed border-[#b8c9c7] rounded-2xl bg-white/60 flex items-center justify-center text-xs text-[#87979d] tracking-wide">
              <span>[This section is kept blank on the website for future additions.]</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 06 · FACULTY LEADERSHIP */}
      <section id="team" className="py-20 lg:py-24 bg-white border-b border-[#dbe5e4]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-[#258b82] text-[11px] font-black uppercase tracking-[2.4px] mb-2">
            06 · Faculty Coordinators
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#102b3c] leading-[1.12] tracking-tight mb-4">
            The people driving the mission.
          </h2>
          <p className="text-sm sm:text-base text-[#66767d] mb-12 max-w-[760px]">
            Faculty leadership at the Department of Civil Engineering, IIT Ropar bringing together pavement engineering, geomatics, and geotechnical expertise.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {facultyList.map((faculty) => (
              <div
                key={faculty.id}
                className="bg-[#f7faf9] rounded-3xl border border-[#dbe5e4] p-8 shadow-card flex flex-col justify-between hover:-translate-y-1 transition-all duration-300"
              >
                <div>
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#10384a] to-[#258b82] text-[#e4c982] flex items-center justify-center font-black text-2xl mb-5 shadow-md">
                    {faculty.initials}
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#258b82] block mb-1">
                    {faculty.role}
                  </span>
                  <h3 className="text-2xl font-extrabold text-[#102b3c] mb-1">
                    {faculty.name}
                  </h3>
                  <p className="text-xs text-slate-500 mb-4">
                    {faculty.institution}
                  </p>
                  <p className="text-xs text-[#51646d] leading-relaxed mb-6">
                    {faculty.bio}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#dbe5e4]">
                  <span className="text-[10px] font-black uppercase tracking-wider text-[#258b82] block mb-2">
                    Research Areas
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {faculty.researchFocus.slice(0, 4).map((f, fIdx) => (
                      <span key={fIdx} className="px-2.5 py-1 rounded bg-white text-[10.5px] font-semibold text-[#102b3c] border border-[#dbe5e4]">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/team/faculty"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg text-xs font-black tracking-wider uppercase bg-[#258b82] hover:bg-[#102b3c] text-white shadow-md hover:shadow-lg transition-all"
            >
              <span>VIEW FULL FACULTY PROFILES &amp; ADVISORY BOARD</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 07 · NEWS & EVENTS (Special Lecture by Dr. Rishi Singh Chhabra) */}
      <section id="news" className="py-20 lg:py-24 bg-[#f0f6f4] border-b border-[#dbe5e4]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-[#258b82] text-[11px] font-black uppercase tracking-[2.4px] mb-2">
            07 · Events &amp; Site Visits
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#102b3c] leading-[1.12] tracking-tight mb-4">
            Recent Events at HiMPaTH
          </h2>

          <div className="bg-white rounded-3xl border border-[#dbe5e4] p-8 sm:p-12 shadow-card mb-8">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="px-3 py-1 rounded-full bg-[#10384a] text-[#e4c982] text-[10.5px] font-black uppercase tracking-wider">
                Event · Special Lecture
              </span>
              <span className="text-xs font-semibold text-[#258b82]">
                IIT Ropar Main Campus
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#102b3c] mb-3 leading-snug">
              Special Lecture on Innovation, Research &amp; Industry Perspectives
            </h3>

            <p className="text-sm text-[#4a5e68] leading-relaxed mb-6 max-w-4xl">
              HiMPaTH, IIT Ropar hosted a special lecture by <strong>Dr. Rishi Singh Chhabra</strong>, Head – R&amp;D Division, DRG Industries Pvt. Ltd. (A Moglix Company), for students and faculty of Civil Engineering. The session explored innovation, research and development, industry practices, and emerging opportunities in civil engineering, fostering meaningful academic–industry engagement.
            </p>

            <p className="text-xs font-bold text-[#258b82] mb-6">
              Facilitated by Dr. Surya Kant Sahdeo, HiMPaTH.
            </p>

            {/* 4 Photo Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-[#f0f5f4]">
              <div className="relative h-44 rounded-xl overflow-hidden bg-slate-100 border border-[#dbe5e4] group shadow-sm">
                <Image
                  src="/images/events/lecture-1.svg"
                  alt="Special Lecture Presentation Slide"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="relative h-44 rounded-xl overflow-hidden bg-slate-100 border border-[#dbe5e4] group shadow-sm">
                <Image
                  src="/images/events/lecture-2.svg"
                  alt="Classroom Audience"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="relative h-44 rounded-xl overflow-hidden bg-slate-100 border border-[#dbe5e4] group shadow-sm">
                <Image
                  src="/images/events/lecture-3.svg"
                  alt="Speaker & HiMPaTH Coordinator"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="relative h-44 rounded-xl overflow-hidden bg-slate-100 border border-[#dbe5e4] group shadow-sm">
                <Image
                  src="/images/events/lecture-4.svg"
                  alt="Interactive Discussion & QA"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/news/updates"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-lg text-xs font-black tracking-wider uppercase bg-[#258b82] hover:bg-[#102b3c] text-white transition-all shadow"
            >
              <span>EXPLORE ALL EVENTS &amp; SITE VISITS</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 08 · CONNECT / CTA */}
      <section id="contact" className="py-20 lg:py-28 bg-gradient-to-r from-[#123b4c] via-[#16505f] to-[#1d7178] text-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Info */}
            <div className="lg:col-span-6 space-y-4 text-center lg:text-left">
              <div className="text-[#e4c982] text-[11px] font-black uppercase tracking-[2.4px]">
                Connect with HiMPaTH
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-[1.12] tracking-tight">
                Building resilient pathways for the Himalayas.
              </h2>
              <p className="text-sm sm:text-base text-[#d4e5e6] leading-relaxed max-w-[580px]">
                From research and innovation to field implementation, HiMPaTH is shaping sustainable, climate-resilient and reliable transportation infrastructure for the future.
              </p>

              <div className="pt-4 flex flex-wrap justify-center lg:justify-start gap-4">
                <a
                  href={`mailto:${SITE_CONTACT.email}`}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md text-xs font-black tracking-wider uppercase bg-[#c9a45b] text-[#102b3c] hover:bg-[#e4c982] shadow-lg hover:shadow-xl transition-all"
                >
                  <Mail className="w-4 h-4" />
                  <span>{SITE_CONTACT.email}</span>
                </a>
                <a
                  href={SITE_CONTACT.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md text-xs font-black tracking-wider uppercase bg-white/10 hover:bg-white/20 text-white border border-white/30 transition-all"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn: {SITE_CONTACT.linkedinHandle}</span>
                </a>
              </div>
            </div>

            {/* Right Quick Inquiry Form */}
            <div className="lg:col-span-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 sm:p-8 shadow-2xl">
              <h3 className="text-xl font-bold text-white mb-1">Send an Inquiry to HiMPaTH</h3>
              <p className="text-xs text-[#d2e1e3] mb-6">Have a research inquiry, partnership proposal, or testing consultation query?</p>

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
                      Could not send message automatically. Please contact himpath.coe@iitrpr.ac.in directly.
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
