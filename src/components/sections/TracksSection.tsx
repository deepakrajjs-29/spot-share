import React, { useState } from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { CONFERENCE_TRACKS } from '../../data/tracks';
import { Search, Plus, Minus, CheckCircle, Sparkles, Layers } from 'lucide-react';
import { CTAButton } from '../common/CTAButton';

export const TracksSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedTrackId, setExpandedTrackId] = useState<string | null>(null);

  const toggleTrack = (id: string) => {
    setExpandedTrackId(expandedTrackId === id ? null : id);
  };

  const filteredTracks = CONFERENCE_TRACKS.filter(track => {
    if (!searchQuery.trim()) return true;
    const query = searchQuery.toLowerCase();
    const matchesTitle = track.title.toLowerCase().includes(query);
    const matchesTopics = track.topics.some(t => t.toLowerCase().includes(query));
    return matchesTitle || matchesTopics;
  });

  return (
    <section id="tracks" className="py-20 lg:py-24 relative" style={{ backgroundColor: "#ffffff" }}>
      <div className="max-w-[1480px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        
        <SectionHeading
          badgeText="CALL FOR PAPERS"
          title="Conference Tracks & Research Areas"
          subtitle="Authors are invited to submit original research papers across 7 specialized conference tracks."
          centered={true}
        />

        {/* Feature Hero Banner for Tracks */}
        <div className="max-w-5xl mx-auto mb-12 rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-navy-950 relative">
          <div className="grid grid-cols-1 md:grid-cols-12 items-center">
            <div className="md:col-span-7 p-6 sm:p-8 text-white z-10 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#f3d688] text-xs font-bold border border-[#c9a84c]/40">
                <Sparkles className="w-3.5 h-3.5" />
                Interdisciplinary Innovation
              </div>
              <h3 className="text-xl sm:text-2xl font-bold leading-tight text-white">
                7 Conference Research Domains
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Covering Semiconductor Physics, VLSI &amp; Embedded Systems, 6G Wireless Networks, Quantum Computing, AI/ML Architectures, and Green Energy Harvesting.
              </p>
              <div className="flex items-center gap-4 pt-1 text-xs text-[#f3d688] font-semibold">
                <span className="flex items-center gap-1.5"><Layers className="w-4 h-4" /> Springer LNEE Indexed</span>
                <span>•</span>
                <span>Double-Blind Peer Reviewed</span>
              </div>
            </div>
            <div className="md:col-span-5 h-56 md:h-full min-h-[220px] relative overflow-hidden">
              <img
                src="/tracks_research.jpg"
                alt="Cutting-edge multidisciplinary engineering tracks"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-transparent via-navy-950/20 to-navy-950 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="max-w-xl mx-auto mb-8">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search research topics (e.g. VLSI, 6G, Quantum, Biomedical, Solar)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-white text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-yellow-600  transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-500 hover:text-slate-900"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Clean Expandable Track Rows */}
        <div className="max-w-4xl mx-auto divide-y divide-[#2a3a5c] border border-slate-200 bg-white rounded-2xl  overflow-hidden">
          {filteredTracks.map((track) => {
            const isExpanded = expandedTrackId === track.id || searchQuery.length > 0;

            return (
              <div key={track.id} className="transition-colors">
                <button
                  type="button"
                  onClick={() => toggleTrack(track.id)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 focus:outline-none hover:bg-white transition-colors"
                >
                  <div className="flex items-baseline gap-3 sm:gap-4 flex-1">
                    <span className="text-xs sm:text-sm font-bold font-mono text-[#c9a84c] bg-teal-900/30 px-2.5 py-1 rounded-md border border-[#b8963e] shrink-0">
                      Track {track.number}
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      {track.title}
                    </h3>
                  </div>

                  <div className="text-slate-500 shrink-0">
                    {isExpanded ? <Minus className="w-4 h-4 text-[#c9a84c]" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isExpanded && (
                  <div className="px-4 sm:px-6 pb-6 pt-2 bg-white/80 border-t border-slate-200 space-y-4">
                    <p className="text-xs sm:text-sm text-slate-600 italic">
                      {track.description}
                    </p>

                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2.5">
                        Research Topics &amp; Keywords:
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                        {track.topics.map((topic, tIdx) => (
                          <div
                            key={tIdx}
                            className="flex items-start gap-2 p-2.5 rounded-lg bg-white border border-slate-200 text-xs text-slate-700 shadow-2xs hover:border-teal-300 transition-colors"
                          >
                            <CheckCircle className="w-3.5 h-3.5 text-[#c9a84c] shrink-0 mt-0.5" />
                            <span className="leading-snug">{topic}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-3 flex items-center justify-between flex-wrap gap-3 text-xs border-t border-slate-200/60">
                      <span className="text-slate-500">
                        Selected papers planned for publication in Springer LNEE (Scopus Indexed).
                      </span>
                      <CTAButton
                        href="#submission"
                        variant="primary"
                        size="sm"
                        icon="arrow"
                      >
                        Submit to Track {track.number}
                      </CTAButton>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
