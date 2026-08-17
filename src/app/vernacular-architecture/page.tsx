import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Layers, Shield, SunMedium, Trees, Wind, CheckCircle2 } from 'lucide-react';

export default function VernacularArchitecturePage() {
  return (
    <div className="bg-white">
      {/* Banner */}
      <section className="bg-slate-900 text-white py-14 border-b-4 border-[#f25c05]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#f25c05]">
            Indigenous Heritage
          </span>
          <h1 className="text-3xl sm:text-5xl font-black mt-2">
            Himalayan Sustainable Vernacular Architecture
          </h1>
          <p className="text-gray-300 mt-4 max-w-3xl text-base sm:text-lg leading-relaxed">
            Discover how mountain civilizations evolved ingenious building typologies responding to topography, extreme snowfall, and high seismic hazard.
          </p>
        </div>
      </section>

      {/* Core Principles Grid */}
      <section className="py-16">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full">
              Ecological Principles
            </span>
            <h2 className="text-3xl font-extrabold text-gray-900 mt-3">
              Why Vernacular Systems Excel in Himalayan Terrains
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-amber-50/60 border border-amber-200/80 p-6 rounded-xl space-y-3">
              <div className="w-10 h-10 rounded-lg bg-amber-600 text-white flex items-center justify-center">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg">Inherent Seismic Ductility</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Rather than resisting ground shaking through rigid brute force, timber-laced dry masonry walls dissipate vibrational energy by frictional micro-slippage between dressed stones and wood beams.
              </p>
            </div>

            <div className="bg-blue-50/60 border border-blue-200/80 p-6 rounded-xl space-y-3">
              <div className="w-10 h-10 rounded-lg bg-blue-600 text-white flex items-center justify-center">
                <SunMedium className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg">Passive Solar Micro-Climate</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Massive dry-stone and rammed earth walls act as thermal batteries, capturing solar heat during sunny mountain days and maintaining indoor temperatures 8–12°C higher during freezing nights.
              </p>
            </div>

            <div className="bg-emerald-50/60 border border-emerald-200/80 p-6 rounded-xl space-y-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-600 text-white flex items-center justify-center">
                <Trees className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg">Hyper-Local &amp; Zero Carbon</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Utilizing naturally fallen deodar logs, river quartz, and slate shingles extracted from local quarries—eliminating thousands of truckloads of energy-intensive cement and steel transport on fragile hill roads.
              </p>
            </div>

            <div className="bg-orange-50/60 border border-orange-200/80 p-6 rounded-xl space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#f25c05] text-white flex items-center justify-center">
                <Wind className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg">Breathable &amp; Healthy</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Natural lime-mud plasters and timber linings regulate interior relative humidity, preventing condensation, mold growth, and sick building syndrome common in uninsulated concrete mountain structures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparative Section: RCC vs Vernacular */}
      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 text-center mb-10">
            Comparative Performance: Traditional Himalayan vs. Modern Unconfined RCC
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-sm border border-gray-200 text-left text-sm">
              <thead className="bg-slate-900 text-white text-xs uppercase tracking-wider">
                <tr>
                  <th className="p-4">Parameter</th>
                  <th className="p-4 text-emerald-400">Kath-Kuni / Vernacular System</th>
                  <th className="p-4 text-rose-300">Modern Unconfined RCC in Hills</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-gray-700">
                <tr>
                  <td className="p-4 font-bold text-gray-900">Seismic Behavior</td>
                  <td className="p-4 text-emerald-800 bg-emerald-50/40">
                    High energy dissipation; ductile box action; no catastrophic collapse
                  </td>
                  <td className="p-4 text-rose-800 bg-rose-50/30">
                    Brittle shear failure at soft storeys &amp; short columns on slopes
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-gray-900">Embodied Carbon</td>
                  <td className="p-4 text-emerald-800 bg-emerald-50/40">
                    Near Zero / Carbon negative (stores sequestered timber carbon)
                  </td>
                  <td className="p-4 text-rose-800 bg-rose-50/30">
                    Extremely high (cement clinker, rebar, hill transport fuel)
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-gray-900">Thermal Comfort</td>
                  <td className="p-4 text-emerald-800 bg-emerald-50/40">
                    Excellent natural insulation; low heating energy requirements
                  </td>
                  <td className="p-4 text-rose-800 bg-rose-50/30">
                    High thermal bridge; cold indoor dampness requiring high artificial heating
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-gray-900">End-of-Life Recyclability</td>
                  <td className="p-4 text-emerald-800 bg-emerald-50/40">
                    100% reusable timber, slate shingles, and stone
                  </td>
                  <td className="p-4 text-rose-800 bg-rose-50/30">
                    Non-biodegradable debris dumping in fragile mountain riverbeds
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
