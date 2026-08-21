import React from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { IMPORTANT_DATES } from '../../data/dates';
import { CONFIG } from '../../data/config';
import { Clock } from 'lucide-react';

export const ImportantDates: React.FC = () => {
  return (
    <section id="dates" className="py-20 lg:py-24 relative" style={{ backgroundColor: '#f8fafc' }}>
      <div className="max-w-[1480px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">

        <SectionHeading
          badgeText="CONFERENCE TIMELINE"
          title="Important Dates"
          subtitle="All deadlines are 23:59:59 IST (Indian Standard Time). Authors are advised to complete their submissions ahead of the deadline."
          centered={true}
          dark={true}
        />

        <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-lg">
          {IMPORTANT_DATES.map((item, idx) => {
            const isDeadline = item.isImportant;
            const isEvent = item.status === 'highlight';
            const isLast = idx === IMPORTANT_DATES.length - 1;

            return (
              <div
                key={item.id}
                className={`flex flex-col sm:grid sm:grid-cols-[auto_1fr] gap-0 transition-colors ${
                  idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/60'
                } hover:bg-yellow-50/30 ${!isLast ? 'border-b border-slate-100' : ''}`}
              >
                {/* Left: date column */}
                <div className="w-full sm:w-52 lg:w-60 py-4 sm:py-5 px-6 flex flex-col justify-center shrink-0">
                  <span className={`text-sm sm:text-base font-bold font-mono tracking-tight leading-tight ${
                    isEvent ? 'text-teal-700' : isDeadline ? 'text-[#b8963e]' : 'text-slate-700'
                  }`}>
                    {item.dateStr}
                  </span>
                  {item.badgeText && (
                    <span className={`mt-1.5 inline-block text-[10px] font-bold uppercase tracking-widest ${
                      isEvent ? 'text-teal-700' : isDeadline ? 'text-[#b8963e]' : 'text-slate-600'
                    }`}>
                      {item.badgeText}
                    </span>
                  )}
                </div>

                {/* Right: milestone info */}
                <div
                  className="py-4 sm:py-5 px-6 flex flex-col justify-center gap-1 border-t sm:border-t-0 sm:border-l-2"
                  style={{ borderColor: isEvent ? '#0d9488' : isDeadline ? '#c9a84c' : '#e2e8f0' }}
                >
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <h3 className="text-sm sm:text-base font-bold leading-snug text-slate-900">
                      {item.title}
                    </h3>
                    {isDeadline && !isEvent && (
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200">
                        <Clock className="w-3 h-3" /> Deadline
                      </span>
                    )}
                    {isEvent && (
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-teal-50 text-teal-800 border border-teal-200">
                        ★ Main Event
                      </span>
                    )}
                  </div>
                  <p className="text-xs sm:text-sm leading-relaxed max-w-xl text-slate-600">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <p className="mt-8 text-center text-xs text-slate-600">
          All deadlines are in <strong className="text-slate-800">IST (UTC+5:30)</strong>.&ensp;
          <a
            href={CONFIG.SUBMISSION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold hover:underline underline-offset-2 text-[#b8963e]"
          >
            Submit via Microsoft CMT →
          </a>
        </p>

      </div>
    </section>
  );
};
