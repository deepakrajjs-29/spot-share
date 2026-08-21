import React from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { DISTINGUISHED_SPEAKER } from '../../data/speakers';
import { Building, Globe2 } from 'lucide-react';

export const SpeakerSection: React.FC = () => {
  const speaker = DISTINGUISHED_SPEAKER;

  return (
    <section id="speakers" className="py-20 lg:py-24 relative" style={{ backgroundColor: "#ffffff" }}>
      <div className="max-w-[1480px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">

        <SectionHeading
          badgeText="DISTINGUISHED SPEAKER"
          title="Distinguished Speaker"
          subtitle="Renowned international researcher sharing insights in cybersecurity, business analytics, and resilient digital architectures."
          centered={true}
        />

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 rounded-2xl overflow-hidden border border-slate-200 shadow-xl">

            {/* Left: keynote image */}
            <div className="lg:col-span-2 relative min-h-[260px] lg:min-h-0">
              <img
                src="/speaker_keynote.jpg"
                alt="Distinguished keynote speaker"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="inline-block px-3 py-1 rounded-full bg-[#c9a84c] text-slate-900 text-[11px] font-bold uppercase tracking-widest">
                  Keynote Speaker
                </span>
              </div>
            </div>

            {/* Right: speaker bio */}
            <div className="lg:col-span-3 p-7 sm:p-10 bg-white flex flex-col justify-center space-y-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#c9a84c] block mb-1">
                  Distinguished Speaker
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
                  {speaker.name}
                </h3>
                <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-slate-600 font-medium mt-2">
                  <span className="flex items-center gap-1">
                    <Globe2 className="w-3.5 h-3.5 text-[#c9a84c]" />
                    {speaker.field}
                  </span>
                  <span className="text-slate-300">·</span>
                  <span className="flex items-center gap-1">
                    <Building className="w-3.5 h-3.5 text-slate-500" />
                    {speaker.institution}, {speaker.country}
                  </span>
                </div>
              </div>

              <p className="font-serif text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                {speaker.bio}
              </p>

              {/* Research Areas */}
              <div className="pt-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-2">
                  Areas of Specialization:
                </span>
                <div className="flex flex-wrap gap-2">
                  {speaker.expertise.map((item, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full bg-amber-50/90 border border-amber-200 text-xs font-bold text-amber-900 shadow-2xs"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
