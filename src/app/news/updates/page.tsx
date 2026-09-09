import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, User, ArrowRight, Sparkles } from 'lucide-react';
import { newsArticlesList } from '@/lib/siteData';

export const metadata = {
  title: 'Events & Site Visits | HiMPaTH - IIT Ropar',
  description: 'Special lectures, academic-industry engagement, and field site visits from HiMPaTH at IIT Ropar.',
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
            <Link href="/news" className="hover:underline">News &amp; Events</Link>
            <span>›</span>
            <span>Events &amp; Site Visits</span>
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-[#e4c982] text-xs font-black uppercase tracking-wider mb-4 border border-white/15">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Events &amp; Site Visits</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
              Events &amp; Site Visits
            </h1>
            <p className="text-[#d2e4e8] text-base sm:text-lg mt-6 leading-relaxed">
              Academic-industry interactions, guest lectures, technical presentations, and field site visits organized by HiMPaTH at IIT Ropar.
            </p>
          </div>
        </div>
      </section>

      {/* Updates / Events List */}
      <section className="py-20 lg:py-24 max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {newsArticlesList.map((article) => (
          <article
            key={article.id}
            className="bg-white rounded-3xl border border-[#dbe5e4] p-8 sm:p-12 shadow-card hover:shadow-xl transition-all duration-300 relative"
          >
            <div className="flex flex-wrap items-center gap-3 mb-4 text-xs font-bold">
              <span className="px-3.5 py-1 rounded-full bg-[#10384a] text-[#e4c982] uppercase tracking-wider text-[10.5px]">
                {article.category}
              </span>
              <span className="text-slate-400 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-[#258b82]" />
                {article.date}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102b3c] mb-4 leading-snug">
              {article.title}
            </h2>

            <div className="prose text-sm sm:text-base text-[#4a5e68] leading-relaxed mb-6 space-y-3">
              <p>
                HiMPaTH, IIT Ropar hosted a special lecture by <strong>Dr. Rishi Singh Chhabra</strong>, Head – R&amp;D Division, DRG Industries Pvt. Ltd. (A Moglix Company), for students and faculty of Civil Engineering. The session explored innovation, research and development, industry practices, and emerging opportunities in civil engineering, fostering meaningful academic–industry engagement.
              </p>
              <p className="font-semibold text-[#258b82]">
                Facilitated by Dr. Surya Kant Sahdeo, HiMPaTH.
              </p>
            </div>

            {/* Event Photos Grid */}
            {article.images && (
              <div className="mb-8 pt-6 border-t border-[#f0f5f4]">
                <h3 className="text-xs font-black uppercase tracking-wider text-[#258b82] mb-4">
                  Event Photo Gallery
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="relative h-56 sm:h-48 rounded-2xl overflow-hidden bg-slate-100 border border-[#dbe5e4] group shadow-sm">
                    <Image
                      src="/images/events/lecture-1.svg"
                      alt="Presentation and lecture by Dr. Rishi Singh Chhabra"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="relative h-56 sm:h-48 rounded-2xl overflow-hidden bg-slate-100 border border-[#dbe5e4] group shadow-sm">
                    <Image
                      src="/images/events/lecture-2.svg"
                      alt="Classroom audience of civil engineering students and faculty"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="relative h-56 sm:h-48 rounded-2xl overflow-hidden bg-slate-100 border border-[#dbe5e4] group shadow-sm">
                    <Image
                      src="/images/events/lecture-3.svg"
                      alt="Dr. Surya Kant Sahdeo and Dr. Rishi Singh Chhabra"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="relative h-56 sm:h-48 rounded-2xl overflow-hidden bg-slate-100 border border-[#dbe5e4] group shadow-sm">
                    <Image
                      src="/images/events/lecture-4.svg"
                      alt="Student and faculty interaction during the session"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>
            )}

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
                <span>Event Inquiries</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
