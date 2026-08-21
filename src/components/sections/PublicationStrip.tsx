import React from 'react';
import { CONFERENCE_INFO } from '../../data/conference';

const creds = [
  {
    label: 'Springer LNEE',
    detail: 'Lecture Notes in Electrical Engineering',
    accent: true,
  },
  {
    label: 'Scopus Indexed',
    detail: 'Global Scholarly Indexing',
    accent: false,
  },
  {
    label: 'Double-Blind Review',
    detail: 'Impartial Technical Evaluation',
    accent: false,
  },
  {
    label: 'Two Volumes',
    detail: 'Conference Proceedings Series',
    accent: false,
  },
];

export const PublicationStrip: React.FC = () => {
  return (
    <div className="bg-navy-950 border-b border-white/10 text-white">
      <div className="max-w-[1480px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 py-5">

        {/* Top row — credibility items */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 divide-x divide-white/10">
          {creds.map((item, idx) => (
            <div key={idx} className="flex flex-col px-5 first:pl-0 last:pr-0 py-2">
              <span className={`text-sm sm:text-base font-bold tracking-tight leading-tight ${
                item.accent ? 'text-[#f3d688]' : 'text-white'
              }`}>
                {item.label}
              </span>
              <span className="text-[11px] text-slate-300 mt-0.5 leading-snug">
                {item.detail}
              </span>
            </div>
          ))}
        </div>

        {/* Disclaimer row */}
        <div className="mt-4 pt-4 border-t border-white/8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-500">
          <p className="leading-relaxed max-w-3xl">
            <span className="text-slate-300 font-semibold">Publication Notice: </span>
            {CONFERENCE_INFO.publicationDisclaimer}
          </p>
          <a
            href="#publication"
            className="shrink-0 text-[#c9a84c] hover:text-[#d4b96a] font-semibold underline-offset-2 hover:underline whitespace-nowrap transition-colors"
          >
            Publication Guidelines →
          </a>
        </div>

      </div>
    </div>
  );
};
