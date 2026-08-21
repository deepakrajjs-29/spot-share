import React from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { ETHICAL_GUIDELINES, FORMATTING_SPECS } from '../../data/authors';
import { ShieldAlert, CheckCircle } from 'lucide-react';

export const EthicalGuidelines: React.FC = () => {
  return (
    <section id="ethics" className="py-20 lg:py-24 relative" style={{ backgroundColor: "#ffffff" }}>
      <div className="max-w-[1480px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        
        <SectionHeading
          badgeText="PUBLICATION ETHICS"
          title={ETHICAL_GUIDELINES.heading}
          subtitle={ETHICAL_GUIDELINES.subheading}
          centered={true}
        />

        {/* Similarity Thresholds Callout */}
        <div className="max-w-4xl mx-auto mb-12 p-6 rounded-lg bg-white border border-slate-200">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-6 border-b border-slate-200">
            <div className="space-y-1 text-center sm:text-left">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#c9a84c]">
                <ShieldAlert className="w-4 h-4" />
                Anti-Plagiarism Benchmark
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                Plagiarism & Similarity Index Policy
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 max-w-lg leading-relaxed">
                All submitted manuscripts are subjected to rigorous plagiarism screening via Turnitin / iThenticate prior to double-blind peer review.
              </p>
            </div>

            <div className="flex items-center gap-4 shrink-0 text-center">
              <div className="p-3 rounded bg-white border border-slate-200 min-w-[120px]">
                <span className="text-2xl font-bold text-slate-900 block font-mono">
                  &le; {ETHICAL_GUIDELINES.similarityLimits.overallLimit}
                </span>
                <span className="text-[11px] font-medium text-slate-500">
                  Overall Limit
                </span>
              </div>
              <div className="p-3 rounded bg-white border border-slate-200 min-w-[120px]">
                <span className="text-2xl font-bold text-slate-900 block font-mono">
                  &le; {ETHICAL_GUIDELINES.similarityLimits.singleSourceLimit}
                </span>
                <span className="text-[11px] font-medium text-slate-500">
                  Single Source Limit
                </span>
              </div>
            </div>
          </div>

          {/* Ethics Rules Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            {ETHICAL_GUIDELINES.rules.map((rule, idx) => (
              <div key={idx} className="space-y-1">
                <h4 className="text-sm font-bold text-slate-900">
                  {rule.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {rule.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Manuscript Technical Specifications */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-base font-bold text-slate-900 mb-6 text-center">
            Manuscript Technical & Formatting Standards
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {FORMATTING_SPECS.map((spec) => (
              <div
                key={spec.id}
                className="p-5 rounded-lg border border-slate-200 bg-white/50 flex flex-col justify-between"
              >
                <div>
                  <h4 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#c9a84c]" />
                    {spec.title}
                  </h4>

                  <ul className="space-y-2">
                    {spec.requirements.map((req, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-2 text-xs text-slate-600 leading-snug">
                        <CheckCircle className="w-3.5 h-3.5 text-[#c9a84c] shrink-0 mt-0.5" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
