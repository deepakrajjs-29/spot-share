import React from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { ABOUT_INSTITUTION } from '../../data/conference';
import { CheckCircle } from 'lucide-react';

export const AboutInstitution: React.FC = () => {
  return (
    <section id="about-institution" className="py-20 lg:py-24 relative" style={{ backgroundColor: '#f8fafc' }}>
      <div className="max-w-[1480px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">

        {/* Heading */}
        <SectionHeading
          badgeText="HOST INSTITUTION"
          title={ABOUT_INSTITUTION.heading}
          subtitle={ABOUT_INSTITUTION.subheading}
          centered={true}
        />

        {/* Full-width Overview Card */}
        <div className="rounded-2xl p-8 sm:p-10 mb-10 bg-white border border-slate-200 shadow-md">
          <h3 className="text-lg font-bold mb-3 text-[#c9a84c] flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#c9a84c]" />
            Institution Overview
          </h3>
          <p className="leading-relaxed text-sm sm:text-base text-slate-700">
            {ABOUT_INSTITUTION.description}
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-5 mb-10">
          {ABOUT_INSTITUTION.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl text-center bg-white border border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200"
            >
              <div className="text-3xl sm:text-4xl font-extrabold font-mono tracking-tight leading-none text-[#b8963e]">
                {stat.value}
              </div>
              <div className="text-xs font-semibold mt-2 uppercase tracking-wider text-slate-600">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Key Highlights Card */}
        <div className="max-w-5xl mx-auto p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-md">
          <h3 className="text-sm font-bold uppercase tracking-[0.08em] text-slate-900 mb-5 text-center">
            Institutional Distinctions &amp; Accreditations
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {ABOUT_INSTITUTION.highlights.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                <CheckCircle className="w-4 h-4 shrink-0 mt-0.5 text-[#c9a84c]" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
