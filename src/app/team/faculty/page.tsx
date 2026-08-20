import React from 'react';
import Link from 'next/link';
import { Users, Mail, ArrowRight, CheckCircle2, Sparkles, Building2 } from 'lucide-react';
import { facultyList } from '@/lib/siteData';

export const metadata = {
  title: 'Faculty Coordinators & PIs | HiMPaTH - IIT Ropar',
  description: 'Principal investigators and faculty coordinators leading HiMPaTH research at IIT Ropar.',
};

export default function FacultyPage() {
  return (
    <div className="bg-[#fbfcfa] min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#071e2e] via-[#0f3b4c] to-[#1a5b66] text-white overflow-hidden border-b border-white/10">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center space-x-2 text-xs font-semibold text-[#e4c982] uppercase tracking-widest mb-4">
            <Link href="/" className="hover:underline">Home</Link>
            <span>›</span>
            <Link href="/team" className="hover:underline">Members</Link>
            <span>›</span>
            <span>Faculty Coordinators</span>
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-[#e4c982] text-xs font-black uppercase tracking-wider mb-4 border border-white/15">
              <Users className="w-3.5 h-3.5" />
              <span>Principal Investigators &amp; Leadership</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
              Faculty Coordinators
            </h1>
            <p className="text-[#d2e4e8] text-base sm:text-lg mt-6 leading-relaxed">
              Meet the faculty members at the Department of Civil Engineering, IIT Ropar driving research innovation in mountain highway systems.
            </p>
          </div>
        </div>
      </section>

      {/* Faculty Profiles List */}
      <section className="py-20 lg:py-24 max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {facultyList.map((faculty) => (
          <div
            key={faculty.id}
            className="bg-white rounded-3xl border border-[#dbe5e4] p-8 sm:p-12 shadow-card hover:shadow-xl transition-all duration-300 relative overflow-hidden"
          >
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-6 border-b border-[#eef4f3]">
              <div className="flex items-start gap-4 sm:gap-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-[#10384a] to-[#258b82] text-[#e4c982] flex items-center justify-center font-black text-2xl shrink-0 shadow-md">
                  {faculty.initials}
                </div>
                <div>
                  <span className="px-3 py-1 rounded-full bg-[#e6f2ef] text-[#258b82] text-[10px] font-black tracking-widest uppercase mb-2 inline-block">
                    {faculty.role}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102b3c] leading-tight">
                    {faculty.name}
                  </h2>
                  <p className="text-xs sm:text-sm font-bold text-[#258b82]">
                    {faculty.designation}
                  </p>
                  <p className="text-xs text-slate-500">
                    {faculty.institution}
                  </p>
                </div>
              </div>

              <a
                href={`mailto:${faculty.email}`}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#f0f6f4] hover:bg-[#258b82] hover:text-white text-[#1e667c] text-xs font-bold uppercase tracking-wider transition-all self-start"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{faculty.email}</span>
              </a>
            </div>

            <div className="pt-6 space-y-6">
              <p className="text-sm sm:text-base text-[#495e67] leading-relaxed">
                {faculty.bio}
              </p>

              <div>
                <span className="text-[10.5px] font-black uppercase tracking-wider text-[#258b82] block mb-2">
                  Specialized Research Focus Areas
                </span>
                <div className="flex flex-wrap gap-2">
                  {faculty.researchFocus.map((focus, fIdx) => (
                    <span key={fIdx} className="px-3 py-1.5 rounded-lg bg-[#f6faf8] text-[#173f52] text-xs font-semibold border border-[#dbe5e4]">
                      {focus}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
