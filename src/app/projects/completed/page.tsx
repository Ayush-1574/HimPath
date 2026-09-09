import React from 'react';
import Link from 'next/link';
import { Archive, ArrowRight, FolderKanban } from 'lucide-react';

export const metadata = {
  title: 'Completed Projects | HiMPaTH - IIT Ropar',
  description: 'Archive of completed projects and reports at HiMPaTH, IIT Ropar.',
};

export default function CompletedProjectsPage() {
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
            <span>Completed Projects</span>
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-[#e4c982] text-xs font-black uppercase tracking-wider mb-4 border border-white/15">
              <Archive className="w-3.5 h-3.5" />
              <span>Project Archive</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
              Completed Projects
            </h1>
            <p className="text-[#d2e4e8] text-base sm:text-lg mt-6 leading-relaxed">
              Archived technical reports, concluded field trial monographs, and completed research project summaries.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content - Blank State */}
      <section className="py-20 lg:py-28 max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-[#dbe5e4] p-12 sm:p-16 shadow-card text-center max-w-3xl mx-auto space-y-6">
          <div className="w-16 h-16 rounded-2xl bg-[#f0f6f4] text-[#258b82] flex items-center justify-center mx-auto">
            <Archive className="w-8 h-8" />
          </div>

          <h2 className="text-2xl font-extrabold text-[#102b3c]">
            Completed Projects
          </h2>

          <p className="text-sm sm:text-base text-[#5a6f79] leading-relaxed">
            No completed projects to be listed at present.
          </p>

          <div className="p-4 rounded-xl bg-[#f7faf9] border border-dashed border-[#b8c9c7] text-xs text-[#71858c] font-medium">
            [Keep this section blank on the website for future additions.]
          </div>

          <div className="pt-4">
            <Link
              href="/projects/ongoing"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#258b82] hover:bg-[#102b3c] text-white text-xs font-black uppercase tracking-wider transition-all"
            >
              <span>View Ongoing Funded Projects</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
