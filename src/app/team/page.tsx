import React from 'react';
import Link from 'next/link';
import { Users, GraduationCap, Award, ArrowRight, Sparkles, Mail, CheckCircle2 } from 'lucide-react';
import { facultyList, researchScholarsList, advisoryBoardList } from '@/lib/siteData';

export const metadata = {
  title: 'HiMPaTH Team & Members Directory | IIT Ropar',
  description: 'Meet the faculty coordinators, doctoral research scholars, project engineers, and national advisory committee at HiMPaTH.',
};

export default function TeamDirectoryPage() {
  const sections = [
    {
      title: 'Faculty Coordinators & PIs',
      href: '/team/faculty',
      badge: 'Principal Investigators',
      icon: <Users className="w-8 h-8 text-[#e4c982]" />,
      summary: 'Interdisciplinary faculty leading research across pavement materials, geomatics satellite mapping, and geotechnical slope resilience at IIT Ropar.',
      count: facultyList.length,
      highlights: [
        'Dr. Surya Kant Sahdeo (Project Coordinator)',
        'Dr. Shray Pathak (Co-Coordinator · Geomatics)',
        'Dr. Raheena M (Co-Coordinator · Geotechnical)',
      ],
      cta: 'Meet Faculty Coordinators',
    },
    {
      title: 'Research Scholars & Engineers',
      href: '/team/scholars',
      badge: 'Doctoral & Project Staff',
      icon: <GraduationCap className="w-8 h-8 text-[#e4c982]" />,
      summary: 'Senior and Junior Research Fellows, doctoral candidates, and project engineers driving laboratory testing and computational modeling.',
      count: researchScholarsList.length,
      highlights: [
        'Senior Research Fellows (Pavements)',
        'Junior Research Fellows (Stabilization)',
        'Project Engineers (AI & Computer Vision)',
      ],
      cta: 'View Research Scholars',
    },
    {
      title: 'National Advisory Board',
      href: '/team/advisors',
      badge: 'Oversight Committee',
      icon: <Award className="w-8 h-8 text-[#e4c982]" />,
      summary: 'Senior technical experts from leading IITs, CRRI, Border Roads Organisation (BRO), and Ministry of Road Transport & Highways (MoRTH).',
      count: advisoryBoardList.length,
      highlights: [
        'Technical Oversight Panel',
        'National Mission Alignment',
        'Multi-Agency Field Validation Guidance',
      ],
      cta: 'View Advisory Board',
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
            <span>HiMPaTH Members</span>
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-[#e4c982] text-xs font-black uppercase tracking-wider mb-4 border border-white/15">
              <Users className="w-3.5 h-3.5" />
              <span>Interdisciplinary Research Leadership</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
              The People Driving the Mission
            </h1>
            <p className="text-[#d2e4e8] text-base sm:text-lg mt-6 leading-relaxed">
              Bringing together world-class researchers across pavement materials, geotechnical engineering, geospatial intelligence, and smart asset management at IIT Ropar.
            </p>
          </div>

          {/* Quick Links */}
          <div className="mt-12 pt-6 border-t border-white/15 flex flex-wrap gap-3 text-xs font-bold uppercase tracking-wider">
            <Link href="/team/faculty" className="px-4 py-2.5 rounded-lg bg-white/10 hover:bg-[#c9a45b] hover:text-[#102b3c] transition-all border border-white/10">
              01 · Faculty Coordinators ({facultyList.length})
            </Link>
            <Link href="/team/scholars" className="px-4 py-2.5 rounded-lg bg-white/10 hover:bg-[#c9a45b] hover:text-[#102b3c] transition-all border border-white/10">
              02 · Research Scholars &amp; Staff ({researchScholarsList.length})
            </Link>
            <Link href="/team/advisors" className="px-4 py-2.5 rounded-lg bg-white/10 hover:bg-[#c9a45b] hover:text-[#102b3c] transition-all border border-white/10">
              03 · National Advisory Panel
            </Link>
          </div>
        </div>
      </section>

      {/* Directory Grid */}
      <section className="py-20 lg:py-24 max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sections.map((sec, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl border border-[#dbe5e4] p-8 shadow-card hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#10384a] to-[#258b82] flex items-center justify-center mb-6 shadow-md group-hover:scale-105 transition-transform">
                  {sec.icon}
                </div>

                <span className="px-3 py-1 rounded-full bg-[#e6f2ef] text-[#258b82] text-[10px] font-black tracking-widest uppercase mb-3 inline-block">
                  {sec.badge}
                </span>

                <h3 className="text-2xl font-extrabold text-[#102b3c] mb-3 group-hover:text-[#258b82] transition-colors">
                  {sec.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#5a6f79] leading-relaxed mb-6">
                  {sec.summary}
                </p>

                <div className="space-y-2 mb-8 pt-4 border-t border-[#f0f5f4]">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                    Featured Members
                  </span>
                  {sec.highlights.map((hl, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-xs text-[#173f52] font-semibold">
                      <span className="text-[#258b82] font-bold">›</span>
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                href={sec.href}
                className="w-full py-3.5 px-4 rounded-xl bg-[#102b3c] group-hover:bg-[#258b82] text-white font-extrabold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-md"
              >
                <span>{sec.cta}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
