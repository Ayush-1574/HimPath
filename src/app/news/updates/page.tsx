import React from 'react';
import Link from 'next/link';
import { Newspaper, Calendar, User, Tag, ArrowRight, Sparkles } from 'lucide-react';
import { newsArticlesList } from '@/lib/siteData';

export const metadata = {
  title: 'Research Updates & News | HiMPaTH - IIT Ropar',
  description: 'Latest research milestones, laboratory testing breakthroughs, and field activities from HiMPaTH.',
};

export default function UpdatesPage() {
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
            <span>Research Updates</span>
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-[#e4c982] text-xs font-black uppercase tracking-wider mb-4 border border-white/15">
              <Newspaper className="w-3.5 h-3.5" />
              <span>Announcements &amp; Bulletins</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
              Research Updates &amp; News
            </h1>
            <p className="text-[#d2e4e8] text-base sm:text-lg mt-6 leading-relaxed">
              Stay up to date with recent developments, experimental milestones, and field trial updates from HiMPaTH at IIT Ropar.
            </p>
          </div>
        </div>
      </section>

      {/* Updates List */}
      <section className="py-20 lg:py-24 max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {newsArticlesList.map((article) => (
          <article
            key={article.id}
            className="bg-white rounded-3xl border border-[#dbe5e4] p-8 sm:p-12 shadow-card hover:shadow-xl transition-all duration-300 relative"
          >
            <div className="flex flex-wrap items-center gap-3 mb-4 text-xs font-bold">
              <span className="px-3 py-1 rounded-full bg-[#e6f2ef] text-[#258b82] uppercase tracking-wider">
                {article.category}
              </span>
              <span className="text-slate-400 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {article.date}
              </span>
              <span className="text-slate-400 flex items-center gap-1">
                <User className="w-3.5 h-3.5" />
                {article.author}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102b3c] mb-4 leading-snug">
              {article.title}
            </h2>

            <p className="text-sm sm:text-base text-[#4a5e68] leading-relaxed mb-6">
              {article.fullStory}
            </p>

            <div className="pt-6 border-t border-[#f0f5f4] flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-2">
                {article.tags.map((t, idx) => (
                  <span key={idx} className="px-2.5 py-1 rounded bg-[#f6faf8] text-[11px] font-semibold text-[#1e667c] border border-[#dbe5e4]">
                    #{t}
                  </span>
                ))}
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center gap-1 text-xs font-bold text-[#258b82] hover:text-[#102b3c] uppercase tracking-wider"
              >
                <span>Media Inquiries</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
