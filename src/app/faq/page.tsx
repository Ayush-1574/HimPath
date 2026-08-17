'use client';

import React, { useState } from 'react';
import { fallbackData } from '@/lib/data';
import { ChevronDown, HelpCircle, Search } from 'lucide-react';

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState('');

  const faqs = fallbackData.faqs.filter(
    (f) =>
      f.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-white">
      {/* Banner */}
      <section className="bg-slate-900 text-white py-14 border-b-4 border-[#f25c05]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#f25c05]">
            Knowledge Base
          </span>
          <h1 className="text-3xl sm:text-5xl font-black mt-2">
            Frequently Asked Questions (FAQ)
          </h1>
          <p className="text-gray-300 mt-4 max-w-3xl text-base sm:text-lg leading-relaxed">
            Find answers regarding the CEVA mission, seismic testing protocols, research fellowships, and vernacular architectural standards.
          </p>
        </div>
      </section>

      {/* Search & Accordion */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search Bar */}
          <div className="relative mb-10">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search frequently asked questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#f25c05] text-sm"
            />
          </div>

          {/* Accordion List */}
          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={faq.id}
                  className="border border-gray-200 rounded-xl overflow-hidden shadow-sm transition-all"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full p-5 text-left bg-white hover:bg-gray-50 flex items-center justify-between gap-4 font-bold text-gray-900 text-base"
                  >
                    <div className="flex items-center space-x-3">
                      <HelpCircle className="w-5 h-5 text-[#f25c05] shrink-0" />
                      <span>{faq.question}</span>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-500 shrink-0 transition-transform ${
                        isOpen ? 'rotate-180 text-[#f25c05]' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="p-5 bg-gray-50 border-t border-gray-100 text-sm text-gray-700 leading-relaxed">
                      {faq.answer}
                      <div className="mt-3 pt-2 text-[11px] font-bold text-orange-700 uppercase tracking-wider">
                        Category: {faq.category}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}

            {faqs.length === 0 && (
              <div className="text-center py-12 text-gray-500 text-sm">
                No matching questions found. Try a different search keyword or contact us directly.
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
