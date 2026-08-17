import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle, ShieldCheck, MapPin, Hammer, Wrench, Download } from 'lucide-react';
import { getTechniques } from '@/lib/data';

export default async function TechniquesPage() {
  const techniques = await getTechniques();

  return (
    <div className="bg-white">
      {/* Banner */}
      <section className="bg-slate-900 text-white py-14 border-b-4 border-[#f25c05]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#f25c05]">
            Engineering &amp; Craftsmanship
          </span>
          <h1 className="text-3xl sm:text-5xl font-black mt-2">
            Indigenous Himalayan Construction Techniques
          </h1>
          <p className="text-gray-300 mt-4 max-w-3xl text-base sm:text-lg leading-relaxed">
            Detailed architectural specifications, joinery blueprints, material compositions, and seismic performance metrics for key vernacular systems.
          </p>
        </div>
      </section>

      {/* Techniques Detail List */}
      <section className="py-16">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {techniques.map((item, index) => (
            <div
              key={item.id}
              id={item.slug}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm p-6 sm:p-10 scroll-mt-24"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Visual Image/Diagram */}
                <div className={`lg:col-span-5 ${index % 2 === 1 ? 'lg:order-last' : ''}`}>
                  <div className="relative w-full h-[320px] rounded-xl overflow-hidden bg-slate-50 border border-gray-200 p-2 shadow-inner">
                    <Image
                      src={item.imageUrl || '/images/hero-sketch.svg'}
                      alt={item.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="mt-3 flex items-center justify-between text-xs text-gray-500">
                    <span className="flex items-center space-x-1">
                      <MapPin className="w-3.5 h-3.5 text-[#f25c05]" />
                      <span>{item.region}</span>
                    </span>
                    <span className="font-semibold text-gray-700">{item.materials.split(',')[0]}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="lg:col-span-7 space-y-5">
                  <div className="flex items-center space-x-3">
                    <span className="bg-orange-100 text-[#f25c05] font-black text-xs px-2.5 py-1 rounded">
                      TYPOLOGY #{index + 1}
                    </span>
                    <span className="text-xs text-gray-500 font-medium">Himalayan Indigenous Standard</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                    {item.name}
                  </h2>

                  <div className="bg-amber-50/80 border-l-4 border-[#f25c05] p-3.5 text-xs text-amber-900 font-medium rounded-r">
                    <strong>Primary Materials:</strong> {item.materials}
                  </div>

                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="space-y-2 pt-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900">
                      Key Engineering &amp; Seismic Attributes:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {item.features.map((feat, fIndex) => (
                        <div key={fIndex} className="flex items-start space-x-2 text-xs text-gray-700">
                          <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-100 flex flex-wrap gap-4">
                    <Link
                      href="/downloads"
                      className="inline-flex items-center space-x-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold px-4 py-2.5 rounded transition-colors"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download CAD Joinery Details</span>
                    </Link>
                    <Link
                      href="/gallery"
                      className="inline-flex items-center space-x-2 border border-gray-300 hover:bg-gray-50 text-gray-800 text-xs font-bold px-4 py-2.5 rounded transition-colors"
                    >
                      <span>View Field Gallery</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
