import React from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { CONFERENCE_INFO } from '../../data/conference';
import { CONFIG } from '../../data/config';
import { BookOpen, Award, ShieldCheck, Layers, ExternalLink } from 'lucide-react';
import { CTAButton } from '../common/CTAButton';

export const PublicationOpportunities: React.FC = () => {
  const highlights = [
    {
      title: "Lecture Notes in Electrical Engineering (LNEE)",
      desc: "Springer's premier book series reporting substantial advances in electrical, electronic, and communication systems.",
      icon: BookOpen
    },
    {
      title: "Scopus Citation Indexing",
      desc: "Proceedings papers will be submitted for indexing in Scopus and major international scholarly indexing databases.",
      icon: Award
    },
    {
      title: "Two Dedicated Proceeding Volumes",
      desc: "Accepted and presented high-caliber manuscripts will be curated across two specialized topical volumes.",
      icon: Layers
    },
    {
      title: "Double-Blind Peer Review Governance",
      desc: "All manuscripts undergo rigorous double-blind evaluation by international domain specialists to ensure technical depth.",
      icon: ShieldCheck
    }
  ];

  return (
    <section id="publication" className="py-20 lg:py-24 relative" style={{ backgroundColor: "#ffffff" }}>
      <div className="max-w-[1480px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        
        <SectionHeading
          badgeText="SPRINGER PROCEEDINGS"
          title="Publication Opportunities"
          subtitle="Disseminating high-impact research to the global academic community through Springer's prestigious proceedings series."
          centered={true}
        />

        {/* Springer LNEE Academic Showcase with Image */}
        <div className="max-w-5xl mx-auto rounded-2xl bg-white border border-slate-200 shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left: Book & Journal Showcase Image */}
            <div className="lg:col-span-5 relative min-h-[320px] lg:min-h-full overflow-hidden bg-gradient-to-br from-slate-900 via-navy-950 to-slate-900 flex flex-col items-center justify-center p-6 sm:p-8">
              <div className="relative group">
                <img
                  src="/lnee_book_cover.png"
                  alt="Springer Nature - Lecture Notes in Electrical Engineering (LNEE)"
                  className="w-full max-w-[240px] sm:max-w-[260px] h-auto object-contain rounded-lg shadow-2xl border border-white/10 transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="mt-4 text-center">
                <span className="inline-block px-3 py-1 rounded-md bg-[#c9a84c] text-navy-950 text-[11px] font-extrabold uppercase tracking-wider shadow-md">
                  Scopus Indexed · Springer LNEE
                </span>
              </div>
            </div>

            {/* Right: Details & Callouts */}
            <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2 items-center">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#d4b96a] bg-teal-900/30 px-2.5 py-1 rounded-md border border-[#b8963e]">
                    Springer Nature
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-yellow-900/40 px-2.5 py-1 rounded-md border border-[#a07830]">
                    Scopus Indexed
                  </span>
                  <span className="text-xs text-slate-500 font-medium">
                    · Two Dedicated Volumes
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Lecture Notes in Electrical Engineering (LNEE)
                </h3>

                {/* Official Conditional Statement */}
                <div className="p-4 rounded-xl bg-white border-l-4 border-l-teal-600 border border-slate-200 text-xs sm:text-sm text-slate-900 leading-relaxed">
                  <strong className="text-slate-900 font-semibold block mb-1">Official Publication Notice:</strong>
                  <span className="font-serif font-normal">{CONFERENCE_INFO.publicationDisclaimer}</span>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Springer's LNEE series is indexed in major academic databases including EI Compendex, Scopus, INSPEC, and SCImago. Authors will receive electronic copy access upon final publication.
                </p>

                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <CTAButton
                    href={CONFIG.SPRINGER_LNEE_URL}
                    isExternal={true}
                    variant="primary"
                    size="md"
                    icon="external"
                    className="w-full sm:w-auto"
                  >
                    Visit Springer LNEE Series
                  </CTAButton>
                  <CTAButton
                    href="#author-info"
                    variant="outline"
                    size="md"
                    icon="none"
                    className="w-full sm:w-auto"
                  >
                    View Author Guidelines
                  </CTAButton>
                </div>
              </div>

              {/* Feature Points */}
              <div className="pt-4 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {highlights.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="flex items-start gap-2.5">
                      <Icon className="w-4 h-4 text-[#c9a84c] shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-xs font-bold text-slate-900">{item.title}</h4>
                        <p className="text-[11px] text-slate-600 mt-0.5 leading-snug">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
