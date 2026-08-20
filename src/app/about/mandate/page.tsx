import React from 'react';
import Link from 'next/link';
import { Building, ShieldCheck, ArrowRight, CheckCircle2, GraduationCap, Sparkles } from 'lucide-react';

export const metadata = {
  title: 'Institutional Mandate & Host | HiMPaTH - IIT Ropar',
  description: 'Learn about the Centre of Excellence institutional background at the Department of Civil Engineering, IIT Ropar.',
};

export default function MandatePage() {
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
              <span>National Institutional Host</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
              Institutional Mandate &amp; Governance
            </h1>
            <p className="text-[#d2e4e8] text-base sm:text-lg mt-6 leading-relaxed">
              Established as an interdisciplinary Centre of Excellence at the Department of Civil Engineering, Indian Institute of Technology Ropar, Punjab.
            </p>
          </div>
        </div>
      </section>

      {/* Main Narrative */}
      <section className="py-20 lg:py-24 max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="text-[#258b82] text-[11px] font-black uppercase tracking-[2.4px]">
              Institutional Host
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#102b3c] leading-tight">
              Department of Civil Engineering, IIT Ropar
            </h2>
            <p className="text-base font-bold text-[#173f52] leading-relaxed">
              IIT Ropar provides state-of-the-art laboratory infrastructure, dynamic computational clusters, and interdisciplinary faculty expertise to anchor national highway research.
            </p>
            <p className="text-sm text-[#5a6f79] leading-relaxed">
              Led by <strong className="text-[#102b3c]">Dr. Surya Kant Sahdeo</strong>, the Centre integrates cutting-edge material characterization (DSR, BBR, UTM, freeze-thaw chambers) with multi-agency field validation across the Himalayan states of Himachal Pradesh, Ladakh, Uttarakhand, and J&amp;K.
            </p>
            <p className="text-sm text-[#5a6f79] leading-relaxed">
              HiMPaTH operates as a strategic bridge linking laboratory science with on-ground implementation bodies—including the Border Roads Organisation (BRO), NHIDCL, Ministry of Road Transport &amp; Highways (MoRTH), and State PWDs.
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <Link
                href="/team/faculty"
                className="px-6 py-3.5 rounded-lg bg-[#258b82] hover:bg-[#102b3c] text-white text-xs font-black uppercase tracking-wider transition-all inline-flex items-center gap-2"
              >
                <span>Meet Centre Faculty</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/projects/collaborations"
                className="px-6 py-3.5 rounded-lg bg-[#f0f6f4] hover:bg-[#e4ece9] text-[#102b3c] text-xs font-bold uppercase tracking-wider transition-all"
              >
                <span>Partner Agencies</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-white border border-[#dbe5e4] shadow-card space-y-4">
              <h3 className="text-lg font-black text-[#102b3c]">Key Institutional Capabilities</h3>
              <div className="space-y-3 text-xs text-[#52646d]">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#258b82] shrink-0 mt-0.5" />
                  <span>Full-scale servo-hydraulic dynamic loading and fatigue apparatus</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#258b82] shrink-0 mt-0.5" />
                  <span>Sub-zero environmental freeze-thaw simulation chambers</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#258b82] shrink-0 mt-0.5" />
                  <span>NVIDIA GPU deep learning cluster for computer vision distress auditing</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#258b82] shrink-0 mt-0.5" />
                  <span>Multi-spectral drone fleet for high-resolution 3D terrain modeling</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
