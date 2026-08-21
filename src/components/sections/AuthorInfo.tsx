import React, { useState } from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { AUTHOR_GUIDELINES } from '../../data/authors';
import { CONFIG } from '../../data/config';
import { FileText, FileCode, CheckCircle, AlertTriangle, Plus, Minus } from 'lucide-react';
import { CTAButton } from '../common/CTAButton';

export const AuthorInfo: React.FC = () => {
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setActiveAccordion(activeAccordion === id ? null : id);
  };

  return (
    <section id="author-info" className="py-20 lg:py-24 relative" style={{ backgroundColor: "#ffffff" }}>
      <div className="max-w-[1480px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        
        <SectionHeading
          badgeText="AUTHOR DESK"
          title="Author Information & Springer CRC Guidelines"
          subtitle="Authors must prepare their manuscripts strictly in accordance with Springer Lecture Notes in Electrical Engineering (LNEE) format."
          centered={true}
        />

        {/* Springer Template Download Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 max-w-4xl mx-auto">
          
          <div className="p-6 rounded-lg bg-white border border-slate-200 flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <FileText className="w-5 h-5 text-[#c9a84c]" />
                <h3 className="text-base font-bold text-slate-900">
                  Springer Word Template (.docx)
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Official single-column Microsoft Word template for LNEE conference proceedings. Includes styles for headings, equations, and references.
              </p>
            </div>
            <div className="pt-2">
              <CTAButton
                href={CONFIG.WORD_TEMPLATE_URL}
                isExternal={true}
                variant="outline"
                size="sm"
                icon="download"
              >
                Download Word Template
              </CTAButton>
            </div>
          </div>

          <div className="p-6 rounded-lg bg-white border border-slate-200 flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <FileCode className="w-5 h-5 text-[#c9a84c]" />
                <h3 className="text-base font-bold text-slate-900">
                  Springer LaTeX Package (.zip)
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Official Springer llncs LaTeX package with document classes, BibTeX styles, and formatting documentation for mathematical models.
              </p>
            </div>
            <div className="pt-2">
              <CTAButton
                href={CONFIG.LATEX_TEMPLATE_URL}
                isExternal={true}
                variant="primary"
                size="sm"
                icon="download"
              >
                Download LaTeX Package
              </CTAButton>
            </div>
          </div>

        </div>

        {/* Page Limit Contradiction Transparency Box */}
        <div className="max-w-4xl mx-auto mb-10 p-5 rounded-lg bg-yellow-900/40/90 border border-[#a07830] text-amber-950 text-xs sm:text-sm">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-[#c9a84c] shrink-0 mt-0.5" />
            <div className="space-y-1">
              <h4 className="font-bold text-amber-900">
                Manuscript Page Length & Guidelines Specification
              </h4>
              <p className="leading-relaxed text-amber-900/90">
                {AUTHOR_GUIDELINES.pageLimitsNotice.officialRequirement}
              </p>
              <p className="font-semibold text-amber-800 text-xs mt-1">
                {AUTHOR_GUIDELINES.pageLimitsNotice.submissionNote}
              </p>
              <p className="font-medium text-amber-900/80 text-xs mt-1 italic border-t border-[#a07830]/80 pt-1.5">
                {AUTHOR_GUIDELINES.pageLimitsNotice.authorClarification}
              </p>
            </div>
          </div>
        </div>

        {/* Clean Accordions: Author Guidelines & CRC Rules */}
        <div className="max-w-4xl mx-auto space-y-3">
          
          <div className="rounded-lg border border-slate-200 bg-white overflow-hidden">
            <button
              type="button"
              onClick={() => toggleAccordion('guidelines')}
              className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 focus:outline-none hover:bg-white transition-colors"
            >
              <h3 className="text-sm sm:text-base font-bold text-slate-900">
                General Author Submission Guidelines
              </h3>
              <div className="text-slate-500">
                {activeAccordion === 'guidelines' ? <Minus className="w-4 h-4 text-[#c9a84c]" /> : <Plus className="w-4 h-4" />}
              </div>
            </button>

            {activeAccordion === 'guidelines' && (
              <div className="px-4 sm:px-6 pb-5 pt-1 border-t border-slate-200 bg-white/50 space-y-2.5">
                {AUTHOR_GUIDELINES.generalRules.map((rule, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <CheckCircle className="w-4 h-4 text-[#c9a84c] shrink-0 mt-0.5" />
                    <span>{rule}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="rounded-lg border border-slate-200 bg-white overflow-hidden">
            <button
              type="button"
              onClick={() => toggleAccordion('crc')}
              className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 focus:outline-none hover:bg-white transition-colors"
            >
              <h3 className="text-sm sm:text-base font-bold text-slate-900">
                Camera-Ready Copy (CRC) & Final Submission Rules
              </h3>
              <div className="text-slate-500">
                {activeAccordion === 'crc' ? <Minus className="w-4 h-4 text-[#c9a84c]" /> : <Plus className="w-4 h-4" />}
              </div>
            </button>

            {activeAccordion === 'crc' && (
              <div className="px-4 sm:px-6 pb-5 pt-1 border-t border-slate-200 bg-white/50 space-y-2.5">
                {AUTHOR_GUIDELINES.crcRules.map((rule, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <CheckCircle className="w-4 h-4 text-[#c9a84c] shrink-0 mt-0.5" />
                    <span>{rule}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
