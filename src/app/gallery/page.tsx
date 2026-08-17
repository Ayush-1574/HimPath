'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { fallbackData } from '@/lib/data';
import { Camera, Eye, X, MapPin } from 'lucide-react';

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [activeImage, setActiveImage] = useState<any | null>(null);

  const categories = ['ALL', 'Architecture', 'Sketches', 'Fieldwork', 'Models'];

  const filteredGallery =
    selectedCategory === 'ALL'
      ? fallbackData.gallery
      : fallbackData.gallery.filter((item) => item.category === selectedCategory);

  return (
    <div className="bg-white">
      {/* Banner */}
      <section className="bg-slate-900 text-white py-14 border-b-4 border-[#f25c05]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#f25c05]">
            Visual Repository
          </span>
          <h1 className="text-3xl sm:text-5xl font-black mt-2">
            CEVA Architectural Gallery &amp; Field Records
          </h1>
          <p className="text-gray-300 mt-4 max-w-3xl text-base sm:text-lg leading-relaxed">
            High-resolution photographic documentation, architectural isometric sketches, sensor testing setups, and dynamic shake table models.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-gray-50 border-b border-gray-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-center gap-2 sm:gap-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all ${
                selectedCategory === cat
                  ? 'bg-[#f25c05] text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
              }`}
            >
              {cat === 'ALL' ? 'All Visuals' : cat}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredGallery.map((item) => (
              <div
                key={item.id}
                onClick={() => setActiveImage(item)}
                className="group relative h-64 rounded-xl overflow-hidden bg-slate-900 cursor-pointer shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 border border-gray-200"
              >
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-between">
                  <span className="self-start bg-[#f25c05] text-white text-[11px] font-bold px-2 py-0.5 rounded">
                    {item.category}
                  </span>
                  <div>
                    <h3 className="text-white font-bold text-sm leading-snug line-clamp-2">
                      {item.title}
                    </h3>
                    {item.location && (
                      <p className="text-[11px] text-gray-300 flex items-center space-x-1 mt-1">
                        <MapPin className="w-3 h-3 text-[#f25c05]" />
                        <span>{item.location}</span>
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {activeImage && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 sm:p-8">
          <div className="relative max-w-4xl w-full bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-gray-700 flex flex-col">
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-4 right-4 z-10 bg-black/60 text-white p-2 rounded-full hover:bg-black transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="relative w-full h-[400px] sm:h-[500px] bg-black">
              <Image
                src={activeImage.imageUrl}
                alt={activeImage.title}
                fill
                className="object-contain"
              />
            </div>

            <div className="p-6 bg-slate-900 text-white space-y-2 border-t border-slate-800">
              <span className="text-xs font-bold text-[#f25c05] uppercase">
                {activeImage.category} • {activeImage.location}
              </span>
              <h3 className="text-lg sm:text-xl font-bold">{activeImage.title}</h3>
              <p className="text-xs sm:text-sm text-gray-300">{activeImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
