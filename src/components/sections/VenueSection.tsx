import React, { useState } from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { VENUE_DETAILS } from '../../data/conference';
import { CONFIG } from '../../data/config';
import { MapPin, Building, AlertCircle, ExternalLink, Navigation, Compass } from 'lucide-react';
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
            <div className="pt-2 flex flex-wrap gap-3">
              <CTAButton
                href={CONFIG.MAP_URL}
                isExternal={true}
                variant="primary"
                size="md"
                icon="external"
              >
                View on Google Maps
              </CTAButton>
              <button
                type="button"
                onClick={() => setShowMapModal(true)}
                className="px-4 py-2.5 rounded-lg text-sm font-semibold border border-slate-200 hover:bg-white text-slate-700 transition-colors shadow-2xs"
              >
                Preview Map
              </button>
            </div>
          </div>

          {/* Program Schedule — Coming Soon */}
          <div className="lg:col-span-5 rounded-2xl bg-navy-950 text-white border border-white/10 shadow-xl flex flex-col items-center overflow-hidden min-h-[340px]">
            {/* Heading */}
            <div className="w-full px-6 pt-6 pb-4 text-center">
              <h4 className="text-lg sm:text-xl font-bold text-white tracking-wide">
                Program Schedule
              </h4>
            </div>

            {/* Image */}
            <div className="w-full flex-1 overflow-hidden">
              <img
                src="/program_schedule.png"
                alt="Program Schedule"
                className="w-full h-full object-cover opacity-80"
                style={{ maxHeight: '220px' }}
              />
            </div>

            {/* Coming Soon */}
            <div className="w-full px-6 py-5 text-center">
              <p className="text-xs sm:text-sm text-[#f3d688] font-bold tracking-widest uppercase">
                Detailed Schedule Coming Soon
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
