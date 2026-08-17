'use client';

import React, { useState, useEffect } from 'react';
import { ArrowUp, Globe, ChevronUp } from 'lucide-react';

export default function FloatingWidgets() {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState('EN');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Language Selector (Bottom-Left) */}
      <div className="fixed bottom-6 left-6 z-40">
        <div className="relative">
          {langMenuOpen && (
            <div className="absolute bottom-full left-0 mb-2 w-32 bg-white rounded-lg shadow-xl border border-gray-200 py-1 text-sm text-gray-800">
              <button
                onClick={() => {
                  setSelectedLang('EN');
                  setLangMenuOpen(false);
                }}
                className="w-full text-left px-3 py-2 hover:bg-orange-50 flex items-center space-x-2 font-medium"
              >
                <span>🇬🇧</span>
                <span>English</span>
              </button>
              <button
                onClick={() => {
                  setSelectedLang('HI');
                  setLangMenuOpen(false);
                }}
                className="w-full text-left px-3 py-2 hover:bg-orange-50 flex items-center space-x-2 font-medium"
              >
                <span>🇮🇳</span>
                <span>हिन्दी</span>
              </button>
            </div>
          )}

          <button
            onClick={() => setLangMenuOpen(!langMenuOpen)}
            className="flex items-center space-x-2 bg-white/95 backdrop-blur-md border border-gray-300 px-3.5 py-2 rounded shadow-md hover:bg-gray-50 text-gray-800 text-sm font-bold transition-all"
            aria-label="Change Language"
          >
            <span className="text-base">{selectedLang === 'EN' ? '🇬🇧' : '🇮🇳'}</span>
            <span>{selectedLang}</span>
            <ChevronUp
              className={`w-4 h-4 text-gray-500 transition-transform ${
                langMenuOpen ? 'rotate-180' : ''
              }`}
            />
          </button>
        </div>
      </div>

      {/* Scroll to Top (Bottom-Right green circle with arrow) */}
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-[#10b981] hover:bg-[#059669] text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6 stroke-[2.5]" />
        </button>
      )}
    </>
  );
}
