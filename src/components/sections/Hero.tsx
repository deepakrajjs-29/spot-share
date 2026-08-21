import React from 'react';
import { CONFERENCE_INFO } from '../../data/conference';
import { CONFIG } from '../../data/config';
import { CountdownTimer } from '../common/CountdownTimer';

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative text-white overflow-hidden border-b border-white/10 bg-slate-950"
      style={{ paddingTop: '72px' }}
    >
      {/* Background image with gradient depth */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 transform transition-transform duration-1000"
        style={{ backgroundImage: 'url(/bg.jpg)' }}
      />

      {/* Luxury dark gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950/85 via-navy-950/75 to-navy-950/95 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-[1480px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 w-full">
        <div className="py-14 lg:py-20 xl:py-24 flex flex-col items-center text-center">

          {/* Logo badge at top */}
          <div className="mb-6">
            <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/25 shadow-[0_8px_32px_rgba(0,0,0,0.4)] inline-block transition-transform duration-300 hover:scale-105">
              <img
                src="/logo.png"
                alt="SNS College of Technology Logo"
                className="h-20 sm:h-24 lg:h-28 w-auto object-contain drop-shadow-md"
              />
            </div>
          </div>

          {/* International Academic Conference label */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#c9a84c]/40 text-xs sm:text-sm font-bold uppercase tracking-[0.18em] mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#c9a84c] animate-pulse" />
            <span style={{ color: '#f3d688' }}>International Academic Conference &nbsp;·&nbsp; Hybrid Mode</span>
          </div>

          {/* Big conference title in elegant serif */}
          <h1
            className="font-serif font-extrabold text-white leading-[1.12] mb-6 max-w-5xl drop-shadow-lg tracking-tight"
            style={{ fontSize: 'clamp(2.1rem, 4.5vw, 3.8rem)' }}
          >
            International Conference on{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e8c872] via-[#ffd700] to-[#d4af37] font-black">
              Sustainable and Novel Solutions
            </span>{' '}
            in Electronics and Communication Technologies
          </h1>

          {/* Organized by */}
          <p className="text-sm sm:text-base text-slate-200/90 mb-2 font-medium max-w-2xl">
            Organized by{' '}
            <span className="text-white font-bold">{CONFERENCE_INFO.organizer}</span>
          </p>

          {/* Short acronym badge */}
          <div className="mb-4">
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.25em] px-3 py-1 rounded bg-[#c9a84c]/20 border border-[#c9a84c]/50 text-[#f5db97]">
              {CONFERENCE_INFO.shortTitle}
            </span>
          </div>

          {/* Theme */}
          <p className="text-sm sm:text-base font-medium mb-10 max-w-2xl text-blue-200/80">
            Theme:{' '}
            <span className="font-semibold text-white">"{CONFERENCE_INFO.theme}"</span>
          </p>

          {/* 4-column frosted glass info row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mb-10 p-5 sm:p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/15 shadow-2xl w-full max-w-4xl">
            <div className="text-center p-3 rounded-xl bg-white/5 border border-white/5">
              <p className="text-[11px] font-bold uppercase tracking-widest mb-1 text-[#e8c872]">Dates</p>
              <p className="text-sm sm:text-base font-bold text-white">{CONFERENCE_INFO.datesText}</p>
            </div>
            <div className="text-center p-3 rounded-xl bg-white/5 border border-white/5">
              <p className="text-[11px] font-bold uppercase tracking-widest mb-1 text-[#e8c872]">Venue</p>
              <p className="text-sm sm:text-base font-bold text-white">{CONFERENCE_INFO.venue}</p>
            </div>
            <div className="text-center p-3 rounded-xl bg-white/5 border border-white/5">
              <p className="text-[11px] font-bold uppercase tracking-widest mb-1 text-[#e8c872]">Submission Deadline</p>
              <p className="text-sm sm:text-base font-bold text-white">{CONFERENCE_INFO.submissionDeadlineText}</p>
            </div>
            <div className="text-center p-3 rounded-xl bg-white/5 border border-white/5">
              <p className="text-[11px] font-bold uppercase tracking-widest mb-1 text-[#e8c872]">Published In</p>
              <p className="text-sm sm:text-base font-bold text-white">Springer LNEE (Scopus)</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
            <a
              href={CONFIG.SUBMISSION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 text-sm sm:text-base font-extrabold uppercase tracking-wider rounded-xl shadow-[0_4px_20px_rgba(201,168,76,0.35)] transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2"
              style={{ backgroundColor: '#c9a84c', color: '#091322' }}
            >
              <span>Submit Your Paper</span>
              <span className="text-xs">↗</span>
            </a>
            <a
              href={CONFIG.REGISTRATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 text-sm sm:text-base font-bold uppercase tracking-wider rounded-xl border-2 transition-all duration-300 hover:bg-white/15 active:scale-95 shadow-md flex items-center gap-2"
              style={{ borderColor: '#c9a84c', color: '#f3d688', backgroundColor: 'rgba(201, 168, 76, 0.08)' }}
            >
              <span>Register Now</span>
              <span className="text-xs">↗</span>
            </a>
          </div>

          {/* Countdown */}
          <CountdownTimer
            targetIsoDate={CONFIG.SUBMISSION_DEADLINE_ISO}
            label="Submission Deadline"
            sublabel="30 November 2026"
            theme="dark"
          />

        </div>
      </div>

      {/* Bottom accent glow */}
      <div className="h-1 bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent opacity-60" />
    </section>
  );
};
