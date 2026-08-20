import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Handshake, Building2, Shield, Sparkles } from 'lucide-react';
import { partnerCollaborationsList } from '@/lib/siteData';

export const metadata = {
  title: 'Agency & Strategic Collaborations | HiMPaTH - IIT Ropar',
  description: 'Multi-agency institutional partnerships with Border Roads Organisation (BRO), NHIDCL, MoRTH, and State PWDs.',
};

export default function CollaborationsPage() {
  return (
    <div className="bg-[#fbfcfa] min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#071e2e] via-[#0f3b4c] to-[#1a5b66] text-white overflow-hidden border-b border-white/10">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center space-x-2 text-xs font-semibold text-[#e4c982] uppercase tracking-widest mb-4">
            <Link href="/" className="hover:underline">Home</Link>
            <span>›</span>
            <Link href="/projects" className="hover:underline">Projects</Link>
            <span>›</span>
            <span>Partner Collaborations</span>
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-[#e4c982] text-xs font-black uppercase tracking-wider mb-4 border border-white/15">
              <Handshake className="w-3.5 h-3.5" />
              <span>Multi-Agency Implementation Ecosystem</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
              Agency &amp; Strategic Partnerships
            </h1>
            <p className="text-[#d2e4e8] text-base sm:text-lg mt-6 leading-relaxed">
              HiMPaTH actively interfaces with strategic defence organizations, central infrastructure corporations, national standard-setting bodies, and state departments to deploy research into active mountain road contracts.
            </p>
          </div>
        </div>
      </section>

      {/* Collaborations List */}
      <section className="py-20 lg:py-24 max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {partnerCollaborationsList.map((partner) => (
            <div
              key={partner.id}
              className="bg-white rounded-3xl border border-[#dbe5e4] p-8 sm:p-10 shadow-card hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full bg-[#e6f2ef] text-[#258b82] text-[10px] font-black tracking-widest uppercase">
                    {partner.category}
                  </span>
                  <span className="text-xs font-bold text-slate-500">
                    {partner.contactRole}
                  </span>
                </div>

                <h2 className="text-2xl font-extrabold text-[#102b3c] mb-3 leading-snug">
                  {partner.name}
                </h2>

                <p className="text-xs sm:text-sm text-[#4e636d] leading-relaxed mb-6">
                  {partner.partnershipScope}
                </p>

                <div className="space-y-2 mb-6">
                  <span className="text-[10.5px] font-black uppercase tracking-wider text-[#258b82] block mb-2">
                    Key Collaborative Initiatives
                  </span>
                  <ul className="space-y-2 text-xs text-[#52646d]">
                    {partner.initiatives.map((init, iIdx) => (
                      <li key={iIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#258b82] shrink-0 mt-0.5" />
                        <span>{init}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 border-t border-[#dbe5e4] flex items-center justify-between">
                <span className="text-xs text-slate-500 font-semibold">Institutional Interface</span>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#258b82] hover:text-[#102b3c] uppercase tracking-wider"
                >
                  <span>Propose Collaboration</span>
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
