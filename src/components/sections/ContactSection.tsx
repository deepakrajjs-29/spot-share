import React from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { CONFIG } from '../../data/config';
import { VENUE_DETAILS } from '../../data/conference';
import { Mail, MapPin } from 'lucide-react';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 lg:py-24 relative" style={{ backgroundColor: "#ffffff" }}>
      <div className="max-w-[1480px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">

        <SectionHeading
          badgeText="CONFERENCE SECRETARIAT"
          title="Contact & Secretariat"
          subtitle="For paper submission inquiries, registration clarification, or session coordination, please reach out to the organizing secretariat."
          centered={true}
        />

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Secretariat Contact Card */}
          <div className="rounded-2xl bg-white border border-slate-200 shadow-lg overflow-hidden">

            {/* Header band */}
            <div className="px-8 py-6 border-b border-slate-100 bg-slate-50/50">
              <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#c9a84c] block mb-2">
                Organizing Secretary
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-tight">
                Dr. S. Pradeep
              </h3>
              <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">
                Associate Professor, Department of Electronics and Communication Engineering,{' '}
                SNS College of Technology, Coimbatore.
              </p>
            </div>

            {/* Contact detail grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
              <div className="flex items-start gap-4 px-8 py-6">
                <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-200 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-teal-700" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
                    Official Email
                  </span>
                  <a
                    href={`mailto:${CONFIG.CONTACT_EMAIL}`}
                    className="text-sm sm:text-base font-bold text-slate-900 hover:text-[#c9a84c] transition-colors break-all"
                  >
                    {CONFIG.CONTACT_EMAIL}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 px-8 py-6">
                <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-amber-700" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
                    Campus Address
                  </span>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {VENUE_DETAILS.fullAddress}
                  </p>
                </div>
              </div>
            </div>

            {/* Footer action bar */}
            <div className="px-8 py-5 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-slate-600 text-center sm:text-left">
                Registration & billing queries:{' '}
                <a
                  href={`mailto:${CONFIG.GRIEVANCE_EMAIL}`}
                  className="font-bold text-[#b8963e] hover:underline underline-offset-2"
                >
                  {CONFIG.GRIEVANCE_EMAIL}
                </a>
              </p>
              <a
                href={`mailto:${CONFIG.CONTACT_EMAIL}?subject=Inquiry%20regarding%20SNSECT%E2%80%9927`}
                className="w-full sm:w-auto flex-shrink-0 px-6 py-2.5 text-xs font-extrabold uppercase tracking-wider bg-[#c9a84c] hover:bg-[#e8c872] text-slate-950 rounded-lg shadow-md transition-all hover:scale-105 text-center flex items-center justify-center"
              >
                Email Secretariat
              </a>
            </div>

          </div>

          {/* Interactive Google Map at the bottom of the page */}
          <div className="rounded-2xl bg-white border border-slate-200 shadow-lg overflow-hidden">
            <div className="px-6 py-4 bg-navy-950 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-navy-900">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-5 h-5 text-[#f3d688]" />
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-white leading-tight">
                    SNS College of Technology — Campus Location
                  </h4>
                  <p className="text-xs text-slate-300">
                    Saravanampatti, Coimbatore, Tamil Nadu 641035
                  </p>
                </div>
              </div>
              <a
                href={CONFIG.MAP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-2.5 rounded-lg text-xs font-extrabold uppercase tracking-wider bg-[#c9a84c] hover:bg-[#e8c872] text-slate-950 shadow-md transition-all flex items-center justify-center gap-1.5 shrink-0"
              >
                <span>Open in Google Maps</span>
                <span className="text-xs">↗</span>
              </a>
            </div>

            {/* Embedded Responsive Map */}
            <div className="w-full h-80 sm:h-96 relative bg-slate-100">
              <iframe
                title="SNS College of Technology Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.228514936495!2d76.9942735748098!3d11.096309989072972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8f789d701f253%3A0xc3d5e2e88a0328b9!2sSNS%20College%20of%20Technology!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full border-0"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Transit & Landmarks Info */}
            <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-700">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#c9a84c]" />
                <span><strong>Coimbatore Airport (CJB):</strong> ~14 km</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#c9a84c]" />
                <span><strong>Railway Junction (CBE):</strong> ~12 km</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#c9a84c]" />
                <span><strong>Gandhipuram Bus Stand:</strong> ~10 km</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
