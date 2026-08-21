import React, { useState } from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { COMMITTEE_GROUPS } from '../../data/committees';
import { Search, Plus, Minus } from 'lucide-react';

export const CommitteeSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [expandedGroups, setExpandedGroups] = useState<Record<string, boolean>>({
    'chief-patrons': true,
    'patrons': true,
    'steering-committee': true,
    'conference-chairs': true,
    'organizing-secretary': true,
    'international-advisory': true,
    'national-advisory': false,
    'programme-chairs': true,
    'publication-chairs': true,
    'publicity-chairs': true,
    'finance-chairs': true,
    'organizing-committee': false
  });

  const toggleGroup = (id: string) => {
    setExpandedGroups(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const categories = ['All', 'Leadership', 'Chairs', 'Advisory', 'Organizing'];

  const filteredGroups = COMMITTEE_GROUPS.filter(group => {
    if (selectedCategory !== 'All' && group.category !== selectedCategory) {
      return false;
    }
    if (!searchQuery.trim()) return true;

    const query = searchQuery.toLowerCase();
    const matchesGroup = group.title.toLowerCase().includes(query);
    const matchesMember = group.members.some(
      m => m.name.toLowerCase().includes(query) ||
           m.affiliation.toLowerCase().includes(query) ||
           (m.roleOrDesignation && m.roleOrDesignation.toLowerCase().includes(query)) ||
           (m.countryOrLocation && m.countryOrLocation.toLowerCase().includes(query))
    );
    return matchesGroup || matchesMember;
  });

  const totalMembersCount = COMMITTEE_GROUPS.reduce((acc, g) => acc + g.members.length, 0);

  return (
    <section id="committee" className="py-20 lg:py-24 relative" style={{ backgroundColor: "#ffffff" }}>
      <div className="max-w-[1480px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        
        <SectionHeading
          badgeText="CONFERENCE COMMITTEES"
          title="Organizing & Advisory Committees"
          subtitle={`A distinguished assembly of ${totalMembersCount}+ international scholars, academic leaders, and engineering faculty guiding SNSECT’27.`}
          centered={true}
        />

        {/* Filter Controls & Search */}
        <div className="max-w-4xl mx-auto mb-8 space-y-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            
            {/* Category Filter Tabs */}
            <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-slate-100/80 rounded-xl border border-slate-200 w-full sm:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all duration-200 ${
                    selectedCategory === cat
                      ? 'bg-navy-950 text-[#f3d688] shadow-sm'
                      : 'text-slate-600 hover:text-slate-950 hover:bg-white/60'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search committee member..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-slate-200 bg-white text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#c9a84c] shadow-sm"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-slate-800"
                >
                  ✕
                </button>
              )}
            </div>

          </div>
        </div>

        {/* Committee Directory Expandable List */}
        <div className="max-w-4xl mx-auto divide-y divide-slate-200 border border-slate-200 bg-white rounded-2xl shadow-md overflow-hidden">
          {filteredGroups.map((group) => {
            const isExpanded = expandedGroups[group.id] || searchQuery.length > 0;
            const displayedMembers = searchQuery.trim()
              ? group.members.filter(
                  m => m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                       m.affiliation.toLowerCase().includes(searchQuery.toLowerCase()) ||
                       (m.roleOrDesignation && m.roleOrDesignation.toLowerCase().includes(searchQuery.toLowerCase())) ||
                       (m.countryOrLocation && m.countryOrLocation.toLowerCase().includes(searchQuery.toLowerCase()))
                )
              : group.members;

            return (
              <div key={group.id} className="transition-colors">
                {/* Header */}
                <button
                  type="button"
                  onClick={() => toggleGroup(group.id)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 bg-white hover:bg-white transition-colors focus:outline-none"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold font-mono text-[#c9a84c] uppercase tracking-wider">
                      {group.badgeText}
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900">
                      {group.title}
                    </h3>
                    <span className="text-xs text-slate-500 font-medium hidden sm:inline">
                      ({group.members.length})
                    </span>
                  </div>

                  <div className="text-slate-500 shrink-0">
                    {isExpanded ? <Minus className="w-4 h-4 text-[#c9a84c]" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {/* Member List when expanded */}
                {isExpanded && (
                  <div className="px-4 sm:px-6 pb-6 pt-2 border-t border-slate-200 bg-white/50">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                      {displayedMembers.map((member, mIdx) => (
                        <div key={mIdx} className="space-y-0.5 py-1 border-b border-slate-200/50 md:border-b-0">
                          <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                            {member.name}
                          </h4>

                          {member.roleOrDesignation &&
                            group.id !== 'international-advisory' &&
                            group.id !== 'national-advisory' && (
                            <p className="text-[11px] font-semibold text-[#d4b96a]">
                              {member.roleOrDesignation}
                            </p>
                          )}

                          <p className="text-xs text-slate-600 leading-snug">
                            {member.affiliation}
                            {member.countryOrLocation && `, ${member.countryOrLocation}`}
                          </p>
                        </div>
                      ))}
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
