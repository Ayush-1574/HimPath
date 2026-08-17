import React from 'react';
import Image from 'next/image';
import { Calendar, MapPin, Tag, Users } from 'lucide-react';
import { getActivities } from '@/lib/data';

export default async function ActivitiesPage() {
  const activities = await getActivities();

  return (
    <div className="bg-white">
      {/* Banner */}
      <section className="bg-slate-900 text-white py-14 border-b-4 border-[#f25c05]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#f25c05]">
            Outreach &amp; Engagement
          </span>
          <h1 className="text-3xl sm:text-5xl font-black mt-2">
            CEVA Activities, Workshops &amp; Field Studies
          </h1>
          <p className="text-gray-300 mt-4 max-w-3xl text-base sm:text-lg leading-relaxed">
            Hands-on training, international symposiums, ambient vibration field monitoring, and capacity building programs organized under the NMHS grant.
          </p>
        </div>
      </section>

      {/* Activities Grid */}
      <section className="py-16">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((act) => (
              <div
                key={act.id}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover-lift flex flex-col"
              >
                <div className="relative h-52 bg-slate-900">
                  <Image
                    src={act.imageUrl || '/images/workshop-1.svg'}
                    alt={act.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-[#f25c05] text-white text-xs font-bold px-3 py-1 rounded shadow">
                    {act.category}
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow space-y-3">
                  <div className="flex items-center space-x-2 text-xs text-gray-500 font-medium">
                    <Calendar className="w-4 h-4 text-[#f25c05]" />
                    <span>
                      {new Date(act.date).toLocaleDateString('en-US', {
                        weekday: 'short',
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </span>
                  </div>

                  <h3 className="font-bold text-lg text-gray-900 leading-snug">
                    {act.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed flex-grow">
                    {act.description}
                  </p>

                  <div className="pt-3 border-t border-gray-100 flex items-center space-x-2 text-xs text-gray-500 font-medium">
                    <MapPin className="w-4 h-4 text-gray-400 shrink-0" />
                    <span className="line-clamp-1">{act.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
