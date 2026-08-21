import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { CONFERENCE_INFO } from '../../data/conference';
import { CONFIG } from '../../data/config';
import { CTAButton } from '../common/CTAButton';

interface NavItem {
  name: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { name: "About", href: "#about" },
  { name: "Dates", href: "#dates" },
  { name: "Tracks", href: "#tracks" },
  { name: "Speaker", href: "#speakers" },
  { name: "Author Info", href: "#author-info" },
  { name: "Submission", href: "#submission" },
  { name: "Registration", href: "#registration" },
  { name: "Publication", href: "#publication" },
  { name: "Committee", href: "#committee" },
  { name: "Contact", href: "#contact" }
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = NAV_ITEMS.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-navy-950/97 backdrop-blur-md border-b border-white/10 '
          : 'bg-navy-950 border-b border-white/8'
      }`}
    >
      <div className="max-w-[1480px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="flex items-center justify-between gap-6 h-[68px] lg:h-[72px]">
          
          {/* Logo & Identity */}
          <a
            href="#hero"
            className="flex items-center gap-3 focus:outline-none shrink-0"
          >
            <img
              src="/logo.png"
              alt="SNS College of Technology Logo"
              className="h-10 w-auto object-contain"
            />
            <div className="flex flex-col leading-tight">
              <span className="text-base lg:text-[17px] font-extrabold tracking-tight text-white">
                {CONFERENCE_INFO.shortTitle}
                <span className="hidden xl:inline text-[#e8c872] font-semibold text-xs ml-2 tracking-[0.05em]">· 11–12 March 2027</span>
              </span>
              <span className="text-[11px] text-slate-300 font-normal hidden md:block leading-tight mt-0.5">
                SNS College of Technology, Coimbatore
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-0.5 flex-1 justify-center">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`px-3 xl:px-3.5 py-2 text-[11px] xl:text-xs font-semibold uppercase tracking-[0.07em] rounded-lg transition-all duration-200 whitespace-nowrap ${
                    isActive
                      ? 'text-[#f3d688] bg-white/10 shadow-sm border border-[#c9a84c]/30'
                      : 'text-slate-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
          </nav>

          {/* Desktop CTA Action Buttons */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href={CONFIG.REGISTRATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#f3d688] hover:text-white hover:bg-white/15 border border-[#c9a84c]/50 rounded-lg transition-all shadow-sm"
            >
              Register
            </a>
            <a
              href={CONFIG.SUBMISSION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 text-xs font-extrabold uppercase tracking-wider bg-[#c9a84c] hover:bg-[#e8c872] text-slate-950 rounded-lg transition-all shadow-md hover:scale-105"
            >
              Submit Paper
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={CONFIG.SUBMISSION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="sm:hidden px-3 py-1.5 text-xs font-bold rounded-md bg-[#b8963e] text-slate-900"
            >
              Submit
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md bg-navy-900 text-slate-300 hover:text-slate-900 border border-white/10 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[68px] bg-navy-950 border-b border-white/10 shadow-2xl max-h-[85vh] overflow-y-auto z-50">
          <div className="px-4 pt-3 pb-6 space-y-1 bg-navy-950">
            <div className="p-3 mb-2 rounded-md bg-navy-900 border border-white/10 text-xs">
              <p className="font-bold text-white">{CONFERENCE_INFO.shortTitle}</p>
              <p className="text-slate-300 mt-0.5">{CONFERENCE_INFO.datesText} · {CONFERENCE_INFO.venue}</p>
            </div>

            {NAV_ITEMS.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={closeMobileMenu}
                className="flex items-center justify-between px-3 py-2.5 text-xs font-semibold uppercase tracking-[0.05em] text-slate-200 hover:text-white hover:bg-white/10 rounded-md transition-colors"
              >
                <span>{item.name}</span>
                <ChevronRight className="w-4 h-4 text-[#c9a84c]" />
              </a>
            ))}

            <div className="pt-4 mt-2 border-t border-white/10 grid grid-cols-2 gap-2">
              <a
                href={CONFIG.REGISTRATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMobileMenu}
                className="px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-center border border-[#c9a84c]/50 text-[#f3d688] bg-white/5 rounded-lg"
              >
                Register
              </a>
              <a
                href={CONFIG.SUBMISSION_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMobileMenu}
                className="px-4 py-2.5 text-xs font-extrabold uppercase tracking-wider text-center bg-[#c9a84c] text-slate-950 rounded-lg shadow-md"
              >
                Submit Paper
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
