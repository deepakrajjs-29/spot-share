import React, { useState } from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { VENUE_DETAILS } from '../../data/conference';
import { CONFIG } from '../../data/config';
import { MapPin, Building, AlertCircle, ExternalLink, Navigation, Compass, Calendar, Clock } from 'lucide-react';
import { CTAButton } from '../common/CTAButton';

export const VenueSection: React.FC = () => {
  const [showMapModal, setShowMapModal] = useState(false);

  return (
    <section id="venue" className="py-20 lg:py-24 relative" style={{ backgroundColor: "#ffffff" }}>
      <div className="max-w-[1480px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">

        <SectionHeading
          badgeText="CONFERENCE LOCATION"
          title="Conference Venue"
          subtitle=""
          centered={true}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto">

          {/* Venue Details */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-white border border-slate-200  flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-[#c9a84c] uppercase tracking-wider bg-teal-900/30 px-2.5 py-1 rounded-md border border-[#b8963e]">
                  Host Campus
                </span>
                <span className="text-xs text-slate-500">·</span>
                <span className="text-xs text-slate-600 font-medium">Coimbatore – 641 035</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                {VENUE_DETAILS.name}
              </h3>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm text-slate-700">
                <MapPin className="w-4 h-4 text-[#c9a84c] shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  {VENUE_DETAILS.fullAddress}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {VENUE_DETAILS.description}
              </p>

              {/* Non-residential notice */}
              <div className="p-3.5 rounded-xl bg-yellow-900/40 border border-[#a07830] text-amber-900 text-xs flex items-start gap-2.5">
                <AlertCircle className="w-4 h-4 text-[#c9a84c] shrink-0 mt-0.5" />
                <span className="leading-snug">{VENUE_DETAILS.accommodationNotice}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <CTAButton
                href={CONFIG.MAP_URL}
                isExternal={true}
                variant="primary"
                size="md"
                icon="external"
                className="w-full sm:w-auto"
              >
                View on Google Maps
              </CTAButton>
              <CTAButton
                onClick={() => setShowMapModal(true)}
                variant="outline"
                size="md"
                icon="none"
                className="w-full sm:w-auto"
              >
                Preview Map
              </CTAButton>
            </div>
          </div>

          {/* Program Schedule — Paper Presentation Coming Soon */}
          <div className="lg:col-span-5 rounded-2xl bg-gradient-to-br from-navy-950 via-slate-900 to-navy-950 text-white border border-white/15 shadow-xl flex flex-col items-center justify-between overflow-hidden min-h-[360px] p-7 sm:p-8 text-center relative">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 right-0 w-36 h-36 bg-[#c9a84c]/10 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-36 h-36 bg-blue-600/10 rounded-full blur-2xl pointer-events-none" />

            {/* Header: PROGRAM SCHEDULE + Gold Line + PAPER PRESENTATION */}
            <div className="relative z-10 w-full flex flex-col items-center">
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#c9a84c] mb-1.5 block">
                CONFERENCE SESSIONS
              </span>
              <h4 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Program Schedule
              </h4>
              <div className="w-10 h-1 rounded mt-2.5 mb-2 mx-auto" style={{ backgroundColor: '#c9a84c' }} />
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-slate-300">
                Paper Presentation
              </p>
            </div>

            {/* Visual Icon: Academic Calendar / Timetable */}
            <div className="relative z-10 my-5 flex flex-col items-center justify-center">
              <div className="w-18 h-18 sm:w-20 sm:h-20 rounded-2xl bg-white/5 border border-white/15 backdrop-blur-md flex items-center justify-center shadow-inner transition-transform duration-300 hover:scale-105">
                <Calendar className="w-8 h-8 sm:w-9 sm:h-9 text-[#f3d688]" />
              </div>
              <span className="text-[11px] text-slate-400 mt-2.5 font-medium tracking-wide">
                11–12 March 2027 · Hybrid Mode
              </span>
            </div>

            {/* COMING SOON Badge & Detail */}
            <div className="relative z-10 w-full pt-4 border-t border-white/10 flex flex-col items-center">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#c9a84c]/15 border border-[#c9a84c]/40 text-xs font-extrabold uppercase tracking-[0.18em] text-[#f3d688] mb-2 shadow-xs">
                <Clock className="w-3.5 h-3.5 text-[#c9a84c]" />
                <span>Coming Soon</span>
              </div>
              <p className="text-[11px] sm:text-xs text-slate-400 max-w-xs leading-relaxed">
                Presentation time slots and technical session allocations will be notified following peer review completions.
              </p>
            </div>
          </div>

        </div>

        {/* Map Preview Modal */}
        {showMapModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/80 backdrop-blur-sm">
            <div className="bg-white rounded-2xl max-w-3xl w-full p-6 shadow-2xl border border-slate-200 relative animate-in fade-in zoom-in duration-200">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-200">
                <h4 className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[#c9a84c]" />
                  SNS College of Technology Location
                </h4>
                <button
                  type="button"
                  onClick={() => setShowMapModal(false)}
                  className="text-slate-500 hover:text-slate-700 font-bold text-lg p-1 rounded-lg hover:bg-white transition-colors"
                >
                  ✕
                </button>
              </div>

              <div className="w-full h-80 rounded-xl overflow-hidden bg-white border border-slate-200">
                <iframe
                  title="SNS College of Technology Location"
                  src={CONFIG.GOOGLE_MAP_EMBED_URL}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="mt-4 flex items-center justify-between text-xs text-slate-600">
                <span>{VENUE_DETAILS.fullAddress}</span>
                <a
                  href={CONFIG.MAP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#c9a84c] font-bold hover:underline flex items-center gap-1"
                >
                  Open in Google Maps <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
