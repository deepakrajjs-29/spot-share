import React, { useState } from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { ABOUT_CONFERENCE } from '../../data/conference';
import { ChevronDown, ChevronUp, CheckCircle } from 'lucide-react';

export const AboutConference: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="about" className="py-20 lg:py-24 relative" style={{ backgroundColor: '#f8fafc' }}>
      <div className="max-w-[1480px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">

        <div className="mb-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">About the Conference</h2>
          <div className="w-10 h-1 rounded mx-auto" style={{ backgroundColor: '#c9a84c' }} />
        </div>

        {/* Full-width Overview Card */}
        <div className="rounded-2xl p-8 sm:p-10 mb-14 bg-white border border-slate-200/80 shadow-md">
          <h3 className="text-lg font-bold mb-3 text-[#c9a84c] flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#c9a84c]" />
            Conference Overview
          </h3>
          <p className="leading-relaxed text-sm sm:text-base text-slate-700">
            {ABOUT_CONFERENCE.overview}
          </p>
        </div>

        {/* 4 Research Focus Pillars */}
        <div className="mb-12">
          <div className="text-center max-w-xl mx-auto mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
              Core Research Pillars
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ABOUT_CONFERENCE.pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <span className="text-2xl font-bold font-mono block mb-2 text-[#c9a84c]">
                    0{idx + 1}
                  </span>
                  <h4 className="text-base font-bold text-slate-900 mb-2">
                    {pillar.title}
                  </h4>
                  <p className="text-xs sm:text-sm leading-relaxed text-slate-600">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Expandable Extended Focus Topics */}
        {isExpanded && (
          <div className="max-w-4xl mx-auto pt-8 space-y-4 border-t border-slate-200">
            <h4 className="text-xs font-bold uppercase tracking-[0.08em] text-slate-900 text-center">
              Comprehensive Research Domains &amp; Scope
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {ABOUT_CONFERENCE.coreFocusAreas.map((topic, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2 p-3 rounded-lg bg-white border border-slate-200 text-xs font-medium text-slate-700 shadow-sm"
                >
                  <CheckCircle className="w-4 h-4 shrink-0 mt-0.5 text-[#c9a84c]" />
                  <span className="leading-snug">{topic}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="text-center mt-8">
          <button
            type="button"
            onClick={() => setIsExpanded(!isExpanded)}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#b8963e] hover:text-[#93752e] transition-colors"
          >
            <span>{isExpanded ? "Show Less" : "View All Focus Domains & Scope"}</span>
            {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>

      </div>
    </section>
  );
};
