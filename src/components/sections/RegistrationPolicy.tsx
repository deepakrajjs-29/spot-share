import React, { useState } from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { REGISTRATION_POLICIES } from '../../data/registration';
import { CONFIG } from '../../data/config';
import { Mail, Plus, Minus } from 'lucide-react';

export const RegistrationPolicy: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleAccordion = (idx: number) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };

  return (
    <section id="registration-policy" className="py-20 lg:py-24 relative" style={{ backgroundColor: "#ffffff" }}>
      <div className="max-w-[1480px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        
        <SectionHeading
          badgeText="TERMS & CONDITIONS"
          title="Registration Policy"
          subtitle="Official policies governing author registrations, payment verification, and delegate entitlements."
          centered={true}
        />

        {/* Policy Accordion */}
        <div className="max-w-4xl mx-auto divide-y divide-[#2a3a5c] border-y border-slate-200 bg-white rounded-lg ">
          {REGISTRATION_POLICIES.map((policy, idx) => {
            const isExpanded = expandedIndex === idx;
            return (
              <div key={idx} className="transition-colors">
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 focus:outline-none hover:bg-white transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold font-mono text-[#c9a84c]">
                      0{idx + 1}
                    </span>
                    <h4 className="text-sm sm:text-base font-bold text-slate-900">
                      {policy.title}
                    </h4>
                  </div>
                  <div className="text-slate-500 shrink-0">
                    {isExpanded ? <Minus className="w-4 h-4 text-[#c9a84c]" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isExpanded && (
                  <div className="px-4 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200 bg-white/50">
                    <p>{policy.content}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Grievance Email Bar */}
        <div className="mt-8 max-w-4xl mx-auto p-4 rounded-lg bg-white border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm">
          <div className="flex items-center gap-2 text-slate-700">
            <Mail className="w-4 h-4 text-[#c9a84c] shrink-0" />
            <span>Registration queries & payment grievances:</span>
          </div>
          <a
            href={`mailto:${CONFIG.GRIEVANCE_EMAIL}`}
            className="font-bold text-[#c9a84c] hover:text-[#e0ca8e] underline underline-offset-2"
          >
            {CONFIG.GRIEVANCE_EMAIL}
          </a>
        </div>

      </div>
    </section>
  );
};
