import React from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  Layers, 
  Workflow, 
  FlaskConical, 
  FileText, 
  Building2, 
  Sparkles, 
  CheckCircle2, 
  Compass, 
  ChevronRight
} from 'lucide-react';

export const metadata = {
  title: 'Research Hub | HiMPaTH - IIT Ropar',
  description: 'Centre of Excellence on Himalayan Pathways for Transport and Highways. Discover our research pillars, lab pipeline, ongoing studies, grant proposals, and facilities.',
};

export default function ResearchHubPage() {
  const categories = [
    {
      title: 'Six Research Pillars',
      slug: 'pillars',
      href: '/research/pillars',
      badge: '01 · Core Focus Areas',
      icon: <Layers className="w-8 h-8 text-[#e4c982]" />,
      summary: 'Multidisciplinary research connecting climate-resilient pavements, circular waste recycling, geotechnical slope resilience, GIS geomatics, and AI infrastructure.',
      highlights: [
        'Climate-Resilient Pavements (FDR & RCCP)',
        'Sustainable Materials (RAP, Landslide Muck, Plastic)',
        'Drainage & Slope Bioengineering',
        'GIS & Geospatial Digital Twins',
        'AI Computer Vision Asset Management',
        'Indian Roads Congress (IRC) Codal Integration',
      ],
      cta: 'Explore All 6 Pillars',
    },
    {
      title: 'Lab-to-Field Pipeline',
      slug: 'pipeline',
      href: '/research/pipeline',
      badge: '02 · Methodology',
      icon: <Workflow className="w-8 h-8 text-[#e4c982]" />,
      summary: 'A connected 5-stage translational methodology taking scientific discoveries from atomic/micro-structural characterization at IIT Ropar to accelerated pilot field tracks.',
      highlights: [
        'Stage 1: Multi-hazard Terrain Characterization',
        'Stage 2: Mix Design & Binder Chemistry',
        'Stage 3: Dynamic Fatigue & Freeze-Thaw Validation',
        'Stage 4: Full-Scale BRO / NHIDCL Pilot Test Tracks',
        'Stage 5: National Standards & Technology Transfer',
      ],
      cta: 'View Innovation Pipeline',
    },
    {
      title: 'Ongoing Research Studies',
      slug: 'ongoing',
      href: '/research/ongoing',
      badge: '03 · Active Projects',
      icon: <FlaskConical className="w-8 h-8 text-[#e4c982]" />,
      summary: 'Active experimental studies exploring high-void porous asphalt, pervious concrete, RAP-modified RCCP, in-situ full-depth reclamation, and carbon-negative biochar concrete.',
      highlights: [
        'Crumb-Rubber Porous Asphalt Drainage Courses',
        'Pervious Concrete Hydrological Systems',
        'High-RAP Roller-Compacted Concrete Pavements',
        'Full-Depth In-Situ Pavement Reclamation',
        'Carbon-Negative Biochar Concrete Formulations',
      ],
      cta: 'View All Ongoing Studies',
    },
    {
      title: 'Competitive Grant Proposals',
      slug: 'proposals',
      href: '/research/proposals',
      badge: '04 · Research Grants',
      icon: <FileText className="w-8 h-8 text-[#e4c982]" />,
      summary: 'High-impact competitive research bids submitted to the Department of Science & Technology (DST), Border Roads Organisation (BRO), NAPA/FAA, and National Technical Textiles Mission (NTTM).',
      highlights: [
        'DST: Carbon-Negative Concrete Pavement Grant',
        'BRO: Biochar-Modified VG-10 Cold Climate Pavements',
        'NAPA / FAA: Permeable Airfield Runway Feasibility',
        'NTTM: Technical Textile Fibre-Reinforced RCCP',
      ],
      cta: 'View Grant Proposals',
    },
    {
      title: 'Research Facilities & Labs',
      slug: 'facilities',
      href: '/research/facilities',
      badge: '05 · Infrastructure',
      icon: <Building2 className="w-8 h-8 text-[#e4c982]" />,
      summary: 'Advanced testing infrastructure at IIT Ropar, including Dynamic Shear Rheometer (DSR), servo-hydraulic UTMs, wheel tracking rut testers, and AI compute clusters.',
      highlights: [
        'Bitumen & Binder Rheology Laboratory',
        'Pavement Mechanics & Heavy Structural Testing Lab',
        'Hydraulics, Permeability & Durability Lab',
        'Geomatics, AI & Corridor Computing Lab',
      ],
      cta: 'View Lab Facilities & Specs',
    },
  ];

  return (
    <div className="bg-[#fbfcfa] min-h-screen">
      {/* ── HERO BANNER ──────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#071e2e] via-[#0f3b4c] to-[#1a5b66] text-white overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg viewBox="0 0 1000 400" preserveAspectRatio="none" className="w-full h-full">
            <polygon points="0,400 200,100 400,300 600,80 800,280 1000,150 1000,400 0,400" fill="white" />
          </svg>
        </div>

        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center space-x-2 text-xs font-semibold text-[#e4c982] uppercase tracking-widest mb-4">
            <Link href="/" className="hover:underline">Home</Link>
            <span>›</span>
            <span>Research Hub</span>
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-[#e4c982] text-xs font-black uppercase tracking-wider mb-4 border border-white/15">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Cutting-Edge Himalayan Infrastructure Research</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
              Pioneering Research for Mountain Roads.
            </h1>

            <p className="text-[#d2e4e8] text-base sm:text-lg mt-6 leading-relaxed">
              Bridging fundamental materials science, advanced geotechnical engineering, AI-enabled asset management, and field validation to build climate-adaptive, disaster-resilient transportation systems.
            </p>
          </div>

          {/* Quick Page Jump Navigation Bar */}
          <div className="mt-12 pt-6 border-t border-white/15 flex flex-wrap gap-2 sm:gap-3 text-xs font-bold uppercase tracking-wider">
            <Link href="/research/pillars" className="px-4 py-2.5 rounded-lg bg-white/10 hover:bg-[#c9a45b] hover:text-[#102b3c] transition-all border border-white/10 flex items-center gap-1.5">
              <span>01 · Research Pillars</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
            <Link href="/research/pipeline" className="px-4 py-2.5 rounded-lg bg-white/10 hover:bg-[#c9a45b] hover:text-[#102b3c] transition-all border border-white/10 flex items-center gap-1.5">
              <span>02 · Lab → Field Pipeline</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
            <Link href="/research/ongoing" className="px-4 py-2.5 rounded-lg bg-white/10 hover:bg-[#c9a45b] hover:text-[#102b3c] transition-all border border-white/10 flex items-center gap-1.5">
              <span>03 · Ongoing Research</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
            <Link href="/research/proposals" className="px-4 py-2.5 rounded-lg bg-white/10 hover:bg-[#c9a45b] hover:text-[#102b3c] transition-all border border-white/10 flex items-center gap-1.5">
              <span>04 · Grant Proposals</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
            <Link href="/research/facilities" className="px-4 py-2.5 rounded-lg bg-white/10 hover:bg-[#c9a45b] hover:text-[#102b3c] transition-all border border-white/10 flex items-center gap-1.5">
              <span>05 · Research Facilities</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── RESEARCH PORTAL SECTIONS DIRECTORY ──────────────── */}
      <section className="py-20 lg:py-24 max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-black uppercase tracking-[2.4px] text-[#258b82]">
            Comprehensive Directory
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#102b3c] mt-2">
            Explore Research by Category
          </h2>
          <p className="text-sm sm:text-base text-[#66767d] mt-2">
            Click into any section below for in-depth technical specifications, methodologies, active datasets, and laboratory capabilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl border border-[#dbe5e4] p-8 shadow-card hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#10384a] to-[#258b82] flex items-center justify-center mb-6 shadow-md group-hover:scale-105 transition-transform">
                  {cat.icon}
                </div>

                <span className="px-3 py-1 rounded-full bg-[#e6f2ef] text-[#258b82] text-[10px] font-black tracking-widest uppercase mb-3 inline-block">
                  {cat.badge}
                </span>

                <h3 className="text-2xl font-extrabold text-[#102b3c] mb-3 group-hover:text-[#258b82] transition-colors">
                  {cat.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#5a6f79] leading-relaxed mb-6">
                  {cat.summary}
                </p>

                <div className="space-y-2 mb-8 pt-4 border-t border-[#f0f5f4]">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                    Key Highlights
                  </span>
                  {cat.highlights.slice(0, 4).map((hl, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-xs text-[#173f52] font-semibold">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#258b82] shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                href={cat.href}
                className="w-full py-3.5 px-4 rounded-xl bg-[#102b3c] group-hover:bg-[#258b82] text-white font-extrabold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-md"
              >
                <span>{cat.cta}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* ── COLLABORATION & INQUIRY BANNER ───────────────────── */}
      <section className="py-16 bg-gradient-to-r from-[#102b3c] via-[#174857] to-[#1c646b] text-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Interested in Joint Research or Testing?
            </h2>
            <p className="text-xs sm:text-sm text-[#d4e4e7] mt-1.5 max-w-2xl">
              We collaborate with central and state road agencies, industry partners, and academic institutions worldwide.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-6 py-3.5 rounded-lg text-xs font-black tracking-wider uppercase bg-[#c9a45b] text-[#102b3c] hover:bg-[#e4c982] transition-all shadow-lg inline-flex items-center gap-2 shrink-0"
          >
            <span>Contact HiMPaTH PIs</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
