import React from 'react';
import { CONFIG } from '../../data/config';
import { CTAButton } from '../common/CTAButton';

const TABLE_ROWS = [
  { category: 'UG Student',                      national: '₹ 7,000',  international: '$ 100' },
  { category: 'PG Student',                      national: '₹ 7,500',  international: '$ 125' },
  { category: 'Academician / Research Scholar',  national: '₹ 8,500',  international: '$ 200' },
  { category: 'Industry Expert',                 national: '₹ 10,000', international: '$ 225' },
  { category: 'Listener',                        national: '₹ 3,000',  international: '$ 50'  },
  { category: 'Co-author Registration',          national: '₹ 3,500',  international: '$ 60'  },
];

export const RegistrationSection: React.FC = () => {
  return (
    <section id="registration" className="py-20 lg:py-24 relative" style={{ backgroundColor: '#f8fafc' }}>
      <div className="max-w-[1480px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">

        {/* Heading */}
        <div className="mb-10 text-center">
          <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#c9a84c' }}>CONFERENCE TARIFF</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">Registration Fees</h2>
          <div className="w-10 h-1 rounded mx-auto" style={{ backgroundColor: '#c9a84c' }} />
        </div>

        {/* Fee Table */}
        <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden mb-8 bg-white border border-slate-200 shadow-lg">

          {/* Table Header */}
          <div className="grid grid-cols-3 px-6 py-4 text-xs font-extrabold uppercase tracking-widest bg-navy-950 text-[#f3d688] border-b border-navy-900">
            <div>Category</div>
            <div className="text-center">National (INR)</div>
            <div className="text-center">International (USD)</div>
          </div>

          {/* Rows */}
          {TABLE_ROWS.map((row, idx) => (
            <div
              key={idx}
              className={`grid grid-cols-3 items-center px-6 py-4.5 border-b border-slate-100 transition-colors ${
                idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/60'
              } hover:bg-yellow-50/40`}
            >
              <div className="text-sm font-bold text-slate-800 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c]" />
                {row.category}
              </div>
              <div className="text-center">
                <span className="text-base font-bold font-mono text-[#b8963e]">{row.national}</span>
                <span className="text-[10px] ml-1.5 px-1.5 py-0.5 rounded bg-slate-200/70 text-slate-700 font-semibold">+ 18% GST</span>
              </div>
              <div className="text-center text-base font-bold font-mono text-[#b8963e]">{row.international}</div>
            </div>
          ))}

          {/* Footer note inside table */}
          <div className="px-6 py-4 text-center text-xs font-medium text-slate-600 bg-slate-50 border-t border-slate-200">
            * Registration fees inclusive of 18% GST &nbsp;|&nbsp; Registration deadline: 30th July 2026
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-4xl mx-auto flex justify-center mt-8">
          <CTAButton
            href={CONFIG.REGISTRATION_URL}
            isExternal={true}
            variant="primary"
            size="md"
            icon="external"
            className="w-full sm:w-auto"
            disabledNotice="Registration portal link will be communicated in acceptance notification"
          >
            Register via Microsoft CMT
          </CTAButton>
        </div>

      </div>
    </section>
  );
};
