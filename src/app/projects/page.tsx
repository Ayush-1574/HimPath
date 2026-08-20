import React from 'react';
import Link from 'next/link';
import { ArrowRight, FolderKanban, CheckCircle2, DollarSign, Handshake, Archive, Sparkles } from 'lucide-react';
import { ongoingProjectsList, completedProjectsList, partnerCollaborationsList } from '@/lib/siteData';

export const metadata = {
  title: 'Projects Directory | HiMPaTH - IIT Ropar',
  description: 'National and international sponsored research projects, field demonstrations, and agency partnerships at HiMPaTH.',
};

export default function ProjectsDirectoryPage() {
  const projectSections = [
    {
      title: 'Ongoing Funded Projects',
      href: '/projects/ongoing',
      badge: 'Active Sponsored Grants',
      icon: <FolderKanban className="w-8 h-8 text-[#e4c982]" />,
      summary: 'Centrally funded multi-year research projects sponsored by ANRF, NMHS, and institutional seed grants focusing on recycled pavements and landslide debris stabilization.',
      count: ongoingProjectsList.length,
      highlights: [
        'ANRF: RAP Viscosity & Pervious Concrete (₹58.57 L)',
        'NMHS: Landslide Debris & Plastic Waste Valorization (₹44.53 L)',
        'ISIRD: Freeze-Thaw Resilient Roads in Mountains (₹18.50 L)',
      ],
      cta: 'Explore Ongoing Projects',
    },
    {
      title: 'Completed Projects & Field Trials',
      href: '/projects/completed',
      badge: 'Validated Milestones',
      icon: <Archive className="w-8 h-8 text-[#e4c982]" />,
      summary: 'Concluded investigations, laboratory verification monographs, and technology transfer dossiers catalogued for public and engineering adoption.',
      count: completedProjectsList.length,
      highlights: [
        'Cold-In-Place Recycled Asphalt with Foamed Bitumen',
        'Digital Terrain Modeling for Geotechnical Hazard Mapping',
        'IRC Structural Coefficient Database Formulations',
      ],
      cta: 'View Completed Projects Archive',
    },
    {
      title: 'Agency & Strategic Collaborations',
      href: '/projects/collaborations',
      badge: 'Multi-Agency Partnerships',
      icon: <Handshake className="w-8 h-8 text-[#e4c982]" />,
      summary: 'Active institutional partnerships with Border Roads Organisation (BRO), NHIDCL, MoRTH, and State Public Works Departments across Himalayan states.',
      count: partnerCollaborationsList.length,
      highlights: [
        'Border Roads Organisation (BRO) Strategic Trials',
        'NHIDCL Sustainable Tunnel Muck Paving Specifications',
        'Indian Roads Congress (IRC) Codal Updates',
        'State PWDs Highway Engineer Training',
      ],
      cta: 'View Partner Collaborations',
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
            <span>Projects Directory</span>
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-[#e4c982] text-xs font-black uppercase tracking-wider mb-4 border border-white/15">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Sponsored Research &amp; Field Implementations</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
              Projects with Purpose &amp; Impact
            </h1>
            <p className="text-[#d2e4e8] text-base sm:text-lg mt-6 leading-relaxed">
              Explore national and international research grants, completed highway technology transfers, and strategic agency collaborations driving sustainable mountain connectivity.
            </p>
          </div>

          {/* Quick Jump Bar */}
          <div className="mt-12 pt-6 border-t border-white/15 flex flex-wrap gap-3 text-xs font-bold uppercase tracking-wider">
            <Link href="/projects/ongoing" className="px-4 py-2.5 rounded-lg bg-white/10 hover:bg-[#c9a45b] hover:text-[#102b3c] transition-all border border-white/10">
              01 · Ongoing Funded Projects ({ongoingProjectsList.length})
            </Link>
            <Link href="/projects/completed" className="px-4 py-2.5 rounded-lg bg-white/10 hover:bg-[#c9a45b] hover:text-[#102b3c] transition-all border border-white/10">
              02 · Completed Projects ({completedProjectsList.length})
            </Link>
            <Link href="/projects/collaborations" className="px-4 py-2.5 rounded-lg bg-white/10 hover:bg-[#c9a45b] hover:text-[#102b3c] transition-all border border-white/10">
              03 · Partner Collaborations ({partnerCollaborationsList.length})
            </Link>
          </div>
        </div>
      </section>

      {/* Directory Grid */}
      <section className="py-20 lg:py-24 max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projectSections.map((sec, idx) => (
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
                    Featured Highlights
                  </span>
                  {sec.highlights.map((hl, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-xs text-[#173f52] font-semibold">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#258b82] shrink-0 mt-0.5" />
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
