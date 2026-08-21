import React, { useState, useEffect } from 'react';
import { CONFERENCE_INFO } from '../../data/conference';
import { CONFIG } from '../../data/config';
import { ArrowUp, BookOpen, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: "About Conference",     href: "#about" },
    { name: "Important Dates",      href: "#dates" },
    { name: "Conference Tracks",    href: "#tracks" },
    { name: "Distinguished Speaker",href: "#speakers" },
    { name: "Author Guidelines",    href: "#author-info" },
    { name: "Paper Submission",     href: "#submission" },
    { name: "Registration Tariff",  href: "#registration" },
    { name: "Publication Details",  href: "#publication" },
    { name: "Committee Directory",  href: "#committee" },
    { name: "Contact Secretariat",  href: "#contact" },
  ];

  return (
    <footer className="bg-navy-950 text-slate-900 relative border-t border-white/10">

      {/* Main footer body */}
      <div className="max-w-[1480px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-white/10">

          {/* Brand column */}
          <div className="md:col-span-5 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-md bg-teal-800 text-[#e0ca8e] flex items-center justify-center font-extrabold text-xs tracking-widest border border-teal-600/40">
                SNS
              </div>
              <span className="text-xl font-extrabold text-slate-900 tracking-tight">
                {CONFERENCE_INFO.shortTitle}
              </span>
            </div>

            <div className="space-y-1 text-sm">
              <p className="text-slate-200 font-medium leading-snug">{CONFERENCE_INFO.title}</p>
              <p className="text-slate-500 italic text-xs mt-2">"{CONFERENCE_INFO.theme}"</p>
            </div>

            <div className="text-xs text-slate-400 space-y-0.5 pt-1">
              <p className="font-semibold text-slate-300">Department of Electronics and Communication Engineering</p>
              <p>SNS College of Technology (Autonomous)</p>
              <p>{CONFERENCE_INFO.location}</p>
              <p className="text-[#c9a84c] font-semibold pt-1">{CONFERENCE_INFO.datesText}</p>
            </div>

            <div className="flex items-center gap-2 pt-1">
              <Mail className="w-3.5 h-3.5 text-teal-500 shrink-0" />
              <a href={`mailto:${CONFIG.CONTACT_EMAIL}`} className="text-xs text-[#c9a84c] hover:text-[#d4b96a] hover:underline underline-offset-2 transition-colors">
                {CONFIG.CONTACT_EMAIL}
              </a>
            </div>
          </div>

          {/* Quick links column */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#c9a84c]">
              Quick Navigation
            </h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xs text-slate-400 hover:text-slate-900 transition-colors py-0.5 leading-snug"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Proceedings column */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#c9a84c]">
              Proceedings &amp; Indexing
            </h4>

            <div className="flex items-start gap-3 p-4 rounded-lg bg-white/5 border border-white/8">
              <BookOpen className="w-4 h-4 text-[#c9a84c] shrink-0 mt-0.5" />
              <div className="space-y-1 text-xs text-slate-300 leading-relaxed">
                <p className="font-bold text-[#d4b96a]">Springer LNEE</p>
                <p className="text-slate-400">Lecture Notes in Electrical Engineering</p>
                <p className="text-slate-400">Scopus &amp; Web of Science Indexed</p>
              </div>
            </div>

            <p className="text-[11px] text-slate-500 leading-relaxed">
              Selected papers planned for publication subject to Springer quality review and acceptance criteria.
            </p>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p className="text-center sm:text-left">
            &copy; {new Date().getFullYear()} SNSECT'27 &middot; Department of Electronics and Communication Engineering,
            SNS College of Technology. All Rights Reserved.
          </p>
          <div className="flex items-center gap-2 text-[11px] text-slate-600 shrink-0">
            <span>Hybrid Conference</span>
            <span>&middot;</span>
            <span>Coimbatore, Tamil Nadu, India</span>
          </div>
        </div>
      </div>

      {/* Back to top */}
      {showBackToTop && (
        <button
          type="button"
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 p-3 rounded-lg bg-teal-800 hover:bg-[#b8963e] text-slate-900  border border-teal-600/40 transition-colors focus:outline-none"
          aria-label="Back to Top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}
    </footer>
  );
};
