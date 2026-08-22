import React from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { ABOUT_DEPARTMENT } from '../../data/conference';
import { Award } from 'lucide-react';

export const AboutDepartment: React.FC = () => {
  return (
    <section id="about-department" className="py-20 lg:py-24 relative" style={{ backgroundColor: '#f8fafc' }}>
      <div className="max-w-[1480px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">

        {/* Heading */}
        <SectionHeading
          badgeText="ORGANIZING DEPARTMENT"
          title={ABOUT_DEPARTMENT.heading}
          subtitle={ABOUT_DEPARTMENT.subheading}
          centered={true}
        />

        {/* Two-column: lab image left, content right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-16 items-center mb-14 max-w-6xl mx-auto">
          {/* Lab image */}
          <div className="section-img-card group rounded-2xl overflow-hidden shadow-xl border border-slate-200">
            <img
              src="/department_lab.jpg"
              alt="VLSI & Semiconductor Research Laboratory"
              className="w-full h-72 lg:h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/85 via-black/50 to-transparent">
              <p className="text-white text-sm font-bold">VLSI &amp; Semiconductor Research Lab</p>
              <p className="text-xs font-medium text-teal-300">MeitY C2S Funded Infrastructure</p>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <p className="text-sm sm:text-base leading-relaxed text-slate-700">
              {ABOUT_DEPARTMENT.description}
            </p>

            {/* MeitY C2S Callout Box */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-md">
              <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider mb-2 text-[#c9a84c]">
                <Award className="w-4 h-4" />
                MeitY Funded — Chip to Startup (C2S)
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                Semiconductor Research Initiative
              </h3>
              <p className="text-xs sm:text-sm leading-relaxed mb-4 text-slate-600">
                Awarded under the Government of India's C2S programme to develop VLSI/SoC tape-out design capabilities and train specialized semiconductor engineers.
              </p>
              <div className="flex gap-4">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-center flex-1">
                  <div className="text-lg sm:text-xl font-bold font-mono text-[#b8963e]">₹494 Lakhs</div>
                  <div className="text-[11px] font-semibold text-slate-600 mt-0.5">Project Grant</div>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-center flex-1">
                  <div className="text-lg sm:text-xl font-bold font-mono text-[#b8963e]">₹8 Lakhs</div>
                  <div className="text-[11px] font-semibold text-slate-600 mt-0.5">FPGA/EDA Tools</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 5 Departmental Laboratories */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-sm font-bold uppercase tracking-[0.08em] text-slate-900 mb-6 text-center">
            Departmental Laboratories &amp; Infrastructure
          </h3>

          {/* Row 1 — 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
            {ABOUT_DEPARTMENT.laboratories.slice(0, 3).map((lab, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <h4 className="text-sm font-bold text-slate-900 mb-1.5 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full shrink-0 bg-[#c9a84c]" />
                    {lab.name}
                  </h4>
                  <p className="text-xs leading-relaxed text-slate-600">
                    {lab.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Row 2 — 2 cards centered */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-2xl mx-auto">
            {ABOUT_DEPARTMENT.laboratories.slice(3).map((lab, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <h4 className="text-sm font-bold text-slate-900 mb-1.5 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full shrink-0 bg-[#c9a84c]" />
                    {lab.name}
                  </h4>
                  <p className="text-xs leading-relaxed text-slate-600">
                    {lab.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
