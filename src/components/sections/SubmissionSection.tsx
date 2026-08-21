import React from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { CONFIG } from '../../data/config';
import { ShieldCheck } from 'lucide-react';
import { CTAButton } from '../common/CTAButton';

export const SubmissionSection: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Format Manuscript",
      description: "Prepare manuscript using official Springer LNEE single-column template (Word or LaTeX)."
    },
    {
      number: "02",
      title: "Anonymize for Review",
      description: "Remove all author identities, affiliations, acknowledgments, and self-citations for double-blind evaluation."
    },
    {
      number: "03",
      title: "Submit via Microsoft CMT",
      description: "Upload PDF and metadata to the official SNSECT’27 Microsoft CMT conference management portal."
    },
    {
      number: "04",
      title: "Automated Confirmation",
      description: "Receive an automated submission receipt with unique Paper ID for subsequent tracking."
    }
  ];

  return (
    <section id="submission" className="py-20 lg:py-24 relative" style={{ backgroundColor: "#ffffff" }}>
      <div className="max-w-[1480px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        
        <SectionHeading
          badgeText="ONLINE SUBMISSION"
          title="Submit Your Research Paper"
          subtitle="All manuscripts must be submitted through the official Microsoft CMT conference management portal."
          centered={true}
        />

        {/* Double-Blind Peer Review Notice Card */}
        <div className="max-w-4xl mx-auto p-6 sm:p-8 rounded-lg bg-white border border-slate-200  space-y-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-6 border-b border-slate-200">
            <div className="space-y-1.5 text-center sm:text-left">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#c9a84c]">
                <ShieldCheck className="w-4 h-4" /> Double-Blind Peer Review System
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Anonymized Manuscript Submission
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 max-w-xl leading-relaxed">
                To guarantee impartial evaluation, all initial submissions must be completely anonymized. Authors must ensure their identities and institutional affiliations do not appear in the uploaded manuscript body or headers.
              </p>
            </div>

            {/* Primary Action Button */}
            <div className="shrink-0 flex flex-col items-center gap-1.5 w-full sm:w-auto">
              <CTAButton
                href={CONFIG.SUBMISSION_URL}
                isExternal={true}
                variant="primary"
                size="lg"
                icon="external"
                className="w-full sm:w-auto"
                disabledNotice="Microsoft CMT Portal link to be updated as per schedule"
              >
                Submit via Microsoft CMT
              </CTAButton>
              <span className="text-[11px] text-slate-500 font-medium">
                Deadline: 30 November 2026
              </span>
            </div>
          </div>

          {/* Submission Workflow Summary */}
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-3">
              Submission Process Overview:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {steps.map((step, idx) => (
                <div key={idx} className="p-3.5 rounded bg-white border border-slate-200 space-y-1">
                  <span className="text-xs font-bold font-mono text-[#c9a84c]">0{idx + 1}</span>
                  <h4 className="text-xs font-bold text-slate-900">{step.title}</h4>
                  <p className="text-[11px] text-slate-600 leading-snug">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Microsoft CMT Note */}
          <div className="pt-2 text-center text-xs text-slate-500">
            <p>
              Microsoft CMT (Conference Management Toolkit) is used for paper submission, double-blind peer review, and author communication for SNSECT’27.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
