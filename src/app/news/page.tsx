import React from 'react';
import Link from 'next/link';
import { Newspaper, BookOpen, Calendar, ArrowRight, Sparkles } from 'lucide-react';
import { newsArticlesList, publicationsList, workshopsList } from '@/lib/siteData';

export const metadata = {
  title: 'News & Events Directory | HiMPaTH - IIT Ropar',
  description: 'Events, site visits, scientific publications, and technical workshops at HiMPaTH.',
};

export default function NewsDirectoryPage() {
  const sections = [
    {
      title: 'Events & Site Visits',
      href: '/news/updates',
      badge: 'Academic & Industry Events',
      icon: <Newspaper className="w-8 h-8 text-[#e4c982]" />,
      summary: 'Special lectures, academic-industry interactions, and field site visits hosted by HiMPaTH at IIT Ropar.',
      count: newsArticlesList.length,
      highlights: [
        'Special Lecture: Dr. Rishi Singh Chhabra (DRG Industries)',
        'Academic–Industry Perspectives & Student Interaction',
        'Event Photo Gallery & Highlights',
      ],
      cta: 'View Events & Site Visits',
    },
    {
      title: 'Scientific Publications',
      href: '/news/publications',
      badge: 'Peer-Reviewed Science',
      icon: <BookOpen className="w-8 h-8 text-[#e4c982]" />,
      summary: 'High-impact journal articles, conference papers, and technical monographs authored by HiMPaTH researchers on pavement mechanics.',
      count: publicationsList.length,
      highlights: [
        'Peer-reviewed journal repository',
        'Section kept for future publication releases',
        'Codal contributions & technical papers',
      ],
      cta: 'View Publications Archive',
    },
    {
      title: 'Workshops & Training',
      href: '/news/workshops',
      badge: 'Capacity Building',
      icon: <Calendar className="w-8 h-8 text-[#e4c982]" />,
      summary: 'Executive workshops, hands-on laboratory testing sessions, and field training modules organized for highway engineers.',
      count: workshopsList.length,
      highlights: [
        'Capacity building modules for highway engineers',
        'Hands-on laboratory testing masterclasses',
        'Section kept for future training programs',
      ],
      cta: 'View Workshops & Training',
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
            <span>News &amp; Events</span>
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-[#e4c982] text-xs font-black uppercase tracking-wider mb-4 border border-white/15">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Knowledge Sharing &amp; Outreach</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
              News, Events &amp; Outreach
            </h1>
            <p className="text-[#d2e4e8] text-base sm:text-lg mt-6 leading-relaxed">
              Explore recent events, special lectures, scientific publications, and capacity-building workshops at IIT Ropar.
            </p>
          </div>

          {/* Quick Links */}
          <div className="mt-12 pt-6 border-t border-white/15 flex flex-wrap gap-3 text-xs font-bold uppercase tracking-wider">
            <Link href="/news/updates" className="px-4 py-2.5 rounded-lg bg-white/10 hover:bg-[#c9a45b] hover:text-[#102b3c] transition-all border border-white/10">
              01 · Events &amp; Site Visits ({newsArticlesList.length})
            </Link>
            <Link href="/news/publications" className="px-4 py-2.5 rounded-lg bg-white/10 hover:bg-[#c9a45b] hover:text-[#102b3c] transition-all border border-white/10">
              02 · Scientific Publications
            </Link>
            <Link href="/news/workshops" className="px-4 py-2.5 rounded-lg bg-white/10 hover:bg-[#c9a45b] hover:text-[#102b3c] transition-all border border-white/10">
              03 · Workshops &amp; Training
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
                    Highlights
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
