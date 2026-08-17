import React from 'react';
import { FileText, Download, ShieldCheck, BookOpen } from 'lucide-react';
import { getDownloads } from '@/lib/data';

export default async function DownloadsPage() {
  const downloads = await getDownloads();

  return (
    <div className="bg-white">
      {/* Banner */}
      <section className="bg-slate-900 text-white py-14 border-b-4 border-[#f25c05]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#f25c05]">
            Publications &amp; Guidelines
          </span>
          <h1 className="text-3xl sm:text-5xl font-black mt-2">
            CEVA Downloads &amp; Resource Repository
          </h1>
          <p className="text-gray-300 mt-4 max-w-3xl text-base sm:text-lg leading-relaxed">
            Access free open-access design manuals, NMHS technical reports, CAD blueprints, and research publications.
          </p>
        </div>
      </section>

      {/* Downloads List */}
      <section className="py-16">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {downloads.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover-lift flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-orange-100 text-[#f25c05] flex items-center justify-center shrink-0">
                    <FileText className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[11px] font-bold text-[#f25c05] uppercase tracking-wider">
                      {item.category}
                    </span>
                    <h3 className="font-bold text-gray-900 text-base leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-500 font-medium">
                      File format: {item.fileType} • Size: {item.fileSize}
                    </p>
                  </div>
                </div>

                <a
                  href={`#download-${item.id}`}
                  className="inline-flex items-center space-x-2 bg-[#0066cc] hover:bg-[#004c99] text-white px-4 py-2.5 rounded-lg text-xs font-bold shrink-0 transition-colors shadow-sm"
                >
                  <Download className="w-4 h-4" />
                  <span>Download</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
