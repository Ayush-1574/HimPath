import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  Sparkles,
  Layers,
  BookOpen,
  Calendar,
  Building2,
  Award,
  ChevronRight,
  ShieldCheck,
  Download,
  Users,
  Compass,
} from 'lucide-react';
import { getTechniques, getActivities, getDownloads } from '@/lib/data';

export default async function HomePage() {
  const techniques = await getTechniques();
  const activities = await getActivities();
  const downloads = await getDownloads();

  return (
    <div className="w-full bg-white">
      {/* 1. HERO SECTION (Faithful to Screenshot) */}
      <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-gray-100 bg-gradient-to-b from-amber-50/20 via-white to-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Hand-Drawn Architectural Isometric Sketch */}
            <div className="lg:col-span-5 flex justify-center items-center">
              <div className="relative w-full max-w-[460px] aspect-[6/7] p-2 hover:scale-[1.02] transition-transform duration-500">
                <Image
                  src="/images/hero-sketch.svg"
                  alt="Architectural hand-drawn isometric sketch of Himalayan Kath-Kuni sustainable house"
                  fill
                  priority
                  className="object-contain drop-shadow-md"
                />
              </div>
            </div>

            {/* Right Column: Hero Content Matching Screenshot */}
            <div className="lg:col-span-7 space-y-6">
              {/* Star + Welcome Tag */}
              <div className="flex items-center space-x-2 text-emerald-700 font-bold text-sm tracking-widest uppercase">
                <span className="text-emerald-600 text-lg">★</span>
                <span>WELCOME TO CEVA</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#1e293b] leading-[1.12] tracking-tight">
                Centre of Excellence on sustainable Vernacular Architecture
              </h1>

              {/* Description Paragraph */}
              <p className="text-base sm:text-xl text-gray-700 font-normal leading-relaxed">
                Center of Excellence on sustainable Vernacular Architecture (CEVA) is established at <strong className="font-semibold text-gray-900">IIT Ropar</strong> and <strong className="font-semibold text-gray-900">funded by National Mission on Himalayan Studies (NMHS)</strong>, Ministry of Environment, Forest &amp; Climate Change (MoEF&amp;CC).
              </p>

              <div className="pt-2 border-t border-gray-100 flex flex-wrap items-center gap-4">
                <Link
                  href="/techniques"
                  className="inline-flex items-center space-x-2 bg-[#f25c05] hover:bg-[#d94e00] text-white px-6 py-3.5 rounded-md font-bold text-base shadow-md hover:shadow-lg transition-all"
                >
                  <span>Explore Vernacular Techniques</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>

                <Link
                  href="/about"
                  className="inline-flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 text-gray-900 px-6 py-3.5 rounded-md font-semibold text-base transition-colors"
                >
                  <span>About IIT Ropar CEVA</span>
                </Link>

                <Link
                  href="/downloads"
                  className="inline-flex items-center space-x-2 text-[#0066cc] hover:text-[#004c99] px-4 py-3 font-semibold text-sm transition-colors"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Guidelines</span>
                </Link>
              </div>

              {/* Key Pillars Badge Strip */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6">
                <div className="bg-amber-50/80 border border-amber-200 rounded p-3 text-center">
                  <span className="block text-xl font-extrabold text-amber-900">100%</span>
                  <span className="text-xs text-amber-800 font-medium">Eco-Materials</span>
                </div>
                <div className="bg-blue-50/80 border border-blue-200 rounded p-3 text-center">
                  <span className="block text-xl font-extrabold text-blue-900">Zone V</span>
                  <span className="text-xs text-blue-800 font-medium">Seismic Resilience</span>
                </div>
                <div className="bg-emerald-50/80 border border-emerald-200 rounded p-3 text-center">
                  <span className="block text-xl font-extrabold text-emerald-900">Net Zero</span>
                  <span className="text-xs text-emerald-800 font-medium">Carbon Impact</span>
                </div>
                <div className="bg-orange-50/80 border border-orange-200 rounded p-3 text-center">
                  <span className="block text-xl font-extrabold text-orange-900">NMHS</span>
                  <span className="text-xs text-orange-800 font-medium">Funded Centre</span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 2. CORE MISSIONS & KEY FOCUS AREAS */}
      <section className="py-16 bg-gray-50/60">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#f25c05] bg-orange-100/70 px-3 py-1 rounded-full">
              Mission &amp; Scope
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-3">
              Preserving Indigenous Himalayan Knowledge with Cutting-Edge Science
            </h2>
            <p className="text-gray-600 mt-3 text-base">
              Bridging centuries of empirical Himalayan vernacular wisdom with modern finite element modeling, seismic shake table testing, and sustainable architecture codes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-7 rounded-xl border border-gray-200 shadow-sm hover-lift relative overflow-hidden">
              <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center text-[#f25c05] mb-5">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Seismic Engineering of Dry-Joints
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Investigating energy dissipation in Kath-Kuni lap joints and Dhajji-Dewari diagonal timber bracings through shake-table dynamic simulations.
              </p>
              <Link href="/techniques" className="text-[#f25c05] text-sm font-semibold inline-flex items-center space-x-1 hover:underline">
                <span>Explore research</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-7 rounded-xl border border-gray-200 shadow-sm hover-lift relative overflow-hidden">
              <div className="w-12 h-12 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-600 mb-5">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Contemporary Hybrid Guidelines
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Formulating standardized engineering specifications to enable modern hill habitats to adopt timber-stone and rammed earth systems compliant with NBC.
              </p>
              <Link href="/downloads" className="text-emerald-700 text-sm font-semibold inline-flex items-center space-x-1 hover:underline">
                <span>View guidelines</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-7 rounded-xl border border-gray-200 shadow-sm hover-lift relative overflow-hidden">
              <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 mb-5">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Artisan Empowerment &amp; Field Archival
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Conducting hands-on master artisan workshops across Himachal Pradesh, Uttarakhand, and Kashmir to train the next generation of builders.
              </p>
              <Link href="/activities" className="text-blue-700 text-sm font-semibold inline-flex items-center space-x-1 hover:underline">
                <span>Upcoming workshops</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURED VERNACULAR TECHNIQUES */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#f25c05]">
                Indigenous Construction
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-1">
                Himalayan Vernacular Architectural Typologies
              </h2>
            </div>
            <Link
              href="/techniques"
              className="text-[#f25c05] font-bold text-sm inline-flex items-center space-x-1 hover:underline"
            >
              <span>View all techniques &amp; joinery details</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techniques.slice(0, 4).map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm hover-lift flex flex-col"
              >
                <div className="relative h-44 bg-gray-100 border-b border-gray-200">
                  <Image
                    src={item.imageUrl || '/images/hero-sketch.svg'}
                    alt={item.name}
                    fill
                    className="object-cover p-2"
                  />
                  <div className="absolute top-2 right-2 bg-black/70 text-white text-[11px] font-semibold px-2 py-0.5 rounded">
                    {item.region.split('(')[0]}
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="font-bold text-lg text-gray-900 mb-1">{item.name}</h3>
                  <p className="text-xs text-orange-700 font-semibold mb-2">
                    Materials: {item.materials}
                  </p>
                  <p className="text-xs text-gray-600 line-clamp-3 leading-relaxed flex-grow">
                    {item.description}
                  </p>
                  <div className="mt-4 pt-3 border-t border-gray-100">
                    <Link
                      href={`/techniques#${item.slug}`}
                      className="text-xs font-bold text-[#0066cc] hover:underline flex items-center justify-between"
                    >
                      <span>Read Technical Specs</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. LATEST ACTIVITIES & WORKSHOPS */}
      <section className="py-16 bg-gray-50/80">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">
                Events &amp; Research
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-1">
                Recent Activities &amp; Field Studies
              </h2>
            </div>
            <Link
              href="/activities"
              className="text-emerald-700 font-bold text-sm inline-flex items-center space-x-1 hover:underline"
            >
              <span>Explore all activities</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {activities.slice(0, 3).map((act) => (
              <div
                key={act.id}
                className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm hover-lift flex flex-col"
              >
                <div className="relative h-48 bg-slate-900">
                  <Image
                    src={act.imageUrl || '/images/workshop-1.svg'}
                    alt={act.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-2 left-2 bg-[#f25c05] text-white text-xs font-bold px-2.5 py-1 rounded">
                    {act.category}
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <div className="flex items-center space-x-2 text-xs text-gray-500 mb-2">
                    <Calendar className="w-3.5 h-3.5 text-gray-400" />
                    <span>{new Date(act.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                  <h3 className="font-bold text-base text-gray-900 mb-2 leading-snug line-clamp-2">
                    {act.title}
                  </h3>
                  <p className="text-xs text-gray-600 line-clamp-3 leading-relaxed flex-grow">
                    {act.description}
                  </p>
                  <div className="mt-4 pt-3 border-t border-gray-100 text-xs text-gray-500 font-medium">
                    📍 {act.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. DOWNLOADS & RESOURCES PREVIEW */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl p-8 sm:p-12 text-white shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <span className="bg-[#f25c05] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Open Access Knowledge
                </span>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
                  Download Standard Drawings, Manuals &amp; Research Reports
                </h2>
                <p className="text-sm sm:text-base text-gray-300">
                  Access CAD joinery blueprints, seismic retrofitting guidelines for Kath-Kuni, and NMHS annual project publications free for researchers and practitioners.
                </p>
                <div className="pt-2">
                  <Link
                    href="/downloads"
                    className="inline-flex items-center space-x-2 bg-white text-slate-900 hover:bg-gray-100 px-6 py-3 rounded font-bold text-sm transition-colors shadow"
                  >
                    <Download className="w-4 h-4 text-[#f25c05]" />
                    <span>Browse All Downloads</span>
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5 space-y-3">
                {downloads.slice(0, 3).map((item) => (
                  <div
                    key={item.id}
                    className="bg-slate-800/80 border border-slate-700 p-3.5 rounded-lg flex items-center justify-between hover:bg-slate-700/60 transition-colors"
                  >
                    <div className="space-y-0.5">
                      <h4 className="text-xs font-semibold text-white line-clamp-1">{item.title}</h4>
                      <span className="text-[11px] text-gray-400">
                        {item.category} • {item.fileSize}
                      </span>
                    </div>
                    <span className="bg-[#f25c05] text-white text-[10px] font-bold px-2 py-1 rounded shrink-0">
                      PDF
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. PARTNERS & AFFILIATION BANNER */}
      <section className="py-12 bg-gray-50 border-t border-gray-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-gray-500 mb-6">
            Institutional Affiliations &amp; Sponsoring Bodies
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-16 opacity-80 grayscale hover:grayscale-0 transition-all">
            <div className="text-center">
              <span className="block font-black text-gray-800 text-lg sm:text-xl">IIT ROPAR</span>
              <span className="text-[11px] text-gray-500">Dept. of Civil Engineering</span>
            </div>
            <div className="text-center">
              <span className="block font-black text-emerald-800 text-lg sm:text-xl">NMHS</span>
              <span className="text-[11px] text-gray-500">National Mission on Himalayan Studies</span>
            </div>
            <div className="text-center">
              <span className="block font-black text-blue-900 text-lg sm:text-xl">MoEF&amp;CC</span>
              <span className="text-[11px] text-gray-500">Ministry of Environment, Forest &amp; Climate Change</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
