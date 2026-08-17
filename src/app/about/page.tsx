import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ShieldCheck, Target, Compass, Award, Mail, Building, Users } from 'lucide-react';
import { getTeam } from '@/lib/data';

export default async function AboutPage() {
  const team = await getTeam();

  return (
    <div className="bg-white">
      {/* Page Header Banner */}
      <section className="bg-slate-900 text-white py-14 border-b-4 border-[#f25c05]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#f25c05]">
            About the Centre
          </span>
          <h1 className="text-3xl sm:text-5xl font-black mt-2">
            Centre of Excellence on Sustainable Vernacular Architecture (CEVA)
          </h1>
          <p className="text-gray-300 mt-4 max-w-3xl text-base sm:text-lg leading-relaxed">
            Established at the Indian Institute of Technology Ropar and sponsored under the National Mission on Himalayan Studies (NMHS), MoEF&amp;CC, Govt. of India.
          </p>
        </div>
      </section>

      {/* Main Narrative */}
      <section className="py-16">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                Revitalizing Himalayan Architectural Wisdom for a Climate-Resilient Future
              </h2>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                The Indian Himalayan Region (IHR) possesses centuries-old vernacular building wisdom—such as <strong className="font-semibold text-gray-900">Kath-Kuni</strong> in Himachal Pradesh and <strong className="font-semibold text-gray-900">Dhajji-Dewari</strong> in Kashmir and Uttarakhand. These indigenous systems have demonstrated remarkable resilience against major historical earthquakes, severe snow loads, and extreme temperature fluctuations.
              </p>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                However, rapid urbanization and unscientific adoption of Reinforced Cement Concrete (RCC) in fragile mountain terrains have led to catastrophic structural vulnerabilities, excessive carbon emissions, and loss of indigenous craftsmanship.
              </p>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                CEVA was established to systematically document, scientifically validate, and technologically modernize these vernacular building systems through state-of-the-art laboratory testing, shake-table experiments, and digital design repositories.
              </p>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-amber-50/50 border border-amber-200 rounded-2xl p-8 shadow-sm space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-lg bg-[#f25c05] text-white flex items-center justify-center shrink-0">
                    <Target className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">Our Vision</h3>
                    <p className="text-sm text-gray-600 mt-1">
                      To establish a world-class hub for preserving, advancing, and standardizing Himalayan vernacular architecture to achieve climate-resilient, net-zero mountain habitats.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-lg bg-emerald-600 text-white flex items-center justify-center shrink-0">
                    <Compass className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">Our Mission</h3>
                    <p className="text-sm text-gray-600 mt-1">
                      Conduct advanced structural &amp; thermal testing, formulate modern hybrid building codes, empower indigenous master artisans, and disseminate open-access guidelines.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-600 text-white flex items-center justify-center shrink-0">
                    <Building className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">Institutional Host</h3>
                    <p className="text-sm text-gray-600 mt-1">
                      Department of Civil Engineering, Indian Institute of Technology Ropar, Punjab, in active collaboration with mountain state agencies and academic partners.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Research Team */}
      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#f25c05]">
              Core Team
            </span>
            <h2 className="text-3xl font-extrabold text-gray-900 mt-2">
              Principal Investigators &amp; Researchers
            </h2>
            <p className="text-gray-600 text-sm mt-2">
              Faculty and researchers leading the scientific documentation, computational modeling, and field investigations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover-lift flex flex-col"
              >
                <div className="w-16 h-16 rounded-full bg-slate-800 text-white font-bold text-xl flex items-center justify-center mb-4">
                  {member.name.split(' ').map((n) => n[0]).join('').slice(0, 2)}
                </div>
                <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
                <span className="text-xs font-semibold text-[#f25c05] mb-2">{member.role}</span>
                <span className="text-xs text-gray-500 font-medium mb-3">{member.department}</span>
                <p className="text-xs text-gray-600 leading-relaxed flex-grow">{member.bio}</p>
                {member.email && (
                  <div className="mt-4 pt-3 border-t border-gray-100 flex items-center space-x-2 text-xs text-blue-600">
                    <Mail className="w-3.5 h-3.5" />
                    <span>{member.email}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
