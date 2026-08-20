import React from 'react';
import Link from 'next/link';
import { Calendar, MapPin, Users, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import { workshopsList } from '@/lib/siteData';

export const metadata = {
  title: 'Workshops & Training Programs | HiMPaTH - IIT Ropar',
  description: 'National capacity building workshops, executive training for highway engineers, and laboratory masterclasses at IIT Ropar.',
};

export default function WorkshopsPage() {
  return (
    <div className="bg-[#fbfcfa] min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#071e2e] via-[#0f3b4c] to-[#1a5b66] text-white overflow-hidden border-b border-white/10">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center space-x-2 text-xs font-semibold text-[#e4c982] uppercase tracking-widest mb-4">
            <Link href="/" className="hover:underline">Home</Link>
            <span>›</span>
            <Link href="/news" className="hover:underline">News</Link>
            <span>›</span>
            <span>Workshops &amp; Training</span>
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-[#e4c982] text-xs font-black uppercase tracking-wider mb-4 border border-white/15">
              <Calendar className="w-3.5 h-3.5" />
              <span>Capacity Building &amp; Engineer Training</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
              Workshops &amp; Field Training
            </h1>
            <p className="text-[#d2e4e8] text-base sm:text-lg mt-6 leading-relaxed">
              Equipping highway engineers, BRO officers, PWD executive personnel, and academic researchers with practical expertise in sustainable mountain road engineering.
            </p>
          </div>
        </div>
      </section>

      {/* Workshops List */}
      <section className="py-20 lg:py-24 max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {workshopsList.map((ws) => (
          <div
            key={ws.id}
            className="bg-white rounded-3xl border border-[#dbe5e4] p-8 sm:p-12 shadow-card hover:shadow-xl transition-all duration-300 relative overflow-hidden"
          >
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-6 border-b border-[#eef4f3]">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="px-3.5 py-1 rounded-full bg-[#10384a] text-[#e4c982] text-[10.5px] font-black tracking-widest uppercase">
                    {ws.registrationStatus}
                  </span>
                  <span className="text-xs font-bold text-[#258b82]">
                    {ws.date}
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102b3c] leading-tight mt-1">
                  {ws.title}
                </h2>
                <div className="flex items-center gap-2 text-xs text-slate-500 mt-2">
                  <MapPin className="w-4 h-4 text-[#258b82]" />
                  <span>{ws.location}</span>
                </div>
              </div>

              <Link
                href="/contact"
                className="px-6 py-3 rounded-xl bg-[#258b82] hover:bg-[#102b3c] text-white font-black text-xs uppercase tracking-wider transition-all self-start shrink-0 inline-flex items-center gap-1.5 shadow"
              >
                <span>Register / Inquire</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="pt-6 space-y-6">
              <p className="text-sm sm:text-base text-[#495e67] leading-relaxed">
                {ws.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                <div className="p-6 bg-[#f7faf9] rounded-2xl border border-[#dbe5e4]">
                  <h3 className="text-xs font-black uppercase tracking-wider text-[#258b82] mb-3">Key Technical Modules</h3>
                  <ul className="space-y-2 text-xs text-[#52646d]">
                    {ws.keyTopics.map((topic, tIdx) => (
                      <li key={tIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#258b82] shrink-0 mt-0.5" />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-6 bg-[#f7faf9] rounded-2xl border border-[#dbe5e4] flex flex-col justify-between">
                  <div>
                    <h3 className="text-xs font-black uppercase tracking-wider text-[#258b82] mb-2">Target Audience</h3>
                    <p className="text-xs text-[#52646d] leading-relaxed">
                      {ws.targetAudience}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#dbe5e4] text-[11px] text-slate-500">
                    Certificates of completion awarded by IIT Ropar upon course conclusion.
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
