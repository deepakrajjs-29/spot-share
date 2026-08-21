import React from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { PRESENTATION_MODES } from '../../data/registration';
import { CheckCircle, AlertCircle } from 'lucide-react';
import { CTAButton } from '../common/CTAButton';

export const ModeComparison: React.FC = () => {
  const physical = PRESENTATION_MODES.physical;
  const online = PRESENTATION_MODES.online;

  return (
    <section id="modes" className="py-20 lg:py-24 relative" style={{ backgroundColor: "#ffffff" }}>
      <div className="max-w-[1480px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        
        <SectionHeading
          badgeText="ATTENDANCE OPTIONS"
          title="Presentation Modes"
          subtitle="Authors may choose between in-person physical presentation on campus or interactive virtual presentation."
          centered={true}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
          
          {/* Physical Mode */}
          <div className="p-6 sm:p-8 rounded-lg border border-slate-200 bg-white/50 flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#d4b96a] bg-teal-900/30 px-2.5 py-0.5 rounded border border-[#b8963e]">
                  {physical.badge}
                </span>
              </div>

              <h3 className="text-lg font-bold text-slate-900 mb-4">
                {physical.title}
              </h3>

              <div className="space-y-2.5">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-2">
                  Includes:
                </span>
                {physical.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                    <CheckCircle className="w-4 h-4 text-[#c9a84c] shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 space-y-3">
              <div className="p-3 rounded bg-yellow-900/40 border border-[#a07830] text-amber-900 text-xs flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-[#c9a84c] shrink-0 mt-0.5" />
                <span>{physical.note}</span>
              </div>
              <CTAButton
                href="#registration"
                variant="primary"
                size="md"
                className="w-full"
              >
                Register for Physical Mode
              </CTAButton>
            </div>
          </div>

          {/* Online Mode */}
          <div className="p-6 sm:p-8 rounded-lg border border-slate-200 bg-white/50 flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-900 bg-white px-2.5 py-0.5 rounded border border-slate-200">
                  {online.badge}
                </span>
              </div>

              <h3 className="text-lg font-bold text-slate-900 mb-4">
                {online.title}
              </h3>

              <div className="space-y-2.5">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-2">
                  Includes:
                </span>
                {online.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                    <CheckCircle className="w-4 h-4 text-[#c9a84c] shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 space-y-3">
              <div className="p-3 rounded bg-white border border-slate-200 text-slate-700 text-xs flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                <span>{online.note}</span>
              </div>
              <CTAButton
                href="#registration"
                variant="outline"
                size="md"
                className="w-full"
              >
                Register for Online Mode
              </CTAButton>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
