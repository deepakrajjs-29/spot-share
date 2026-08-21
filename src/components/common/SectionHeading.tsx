import React from 'react';

interface SectionHeadingProps {
  badgeText?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  dark?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badgeText,
  title,
  subtitle,
  centered = true,
  dark = true,
  className = ""
}) => {
  return (
    <div className={`mb-12 lg:mb-14 xl:mb-16 ${centered ? 'text-center' : 'text-left'} ${className}`}>
      {badgeText && (
        <span className={`inline-block text-[11px] sm:text-xs font-bold uppercase tracking-[0.12em] mb-3 ${
          dark ? 'text-[#c9a84c]' : 'text-[#c9a84c]'
        }`}>
          {badgeText}
        </span>
      )}

      <h2 className={`text-2xl sm:text-3xl lg:text-[2rem] xl:text-[2.5rem] font-bold tracking-tight leading-[1.18] ${
        dark ? 'text-slate-900' : 'text-slate-900'
      }`}>
        {title}
      </h2>

      {subtitle && (
        <p className={`mt-4 text-base sm:text-lg xl:text-xl leading-relaxed max-w-[760px] ${
          centered ? 'mx-auto' : ''
        } ${dark ? 'text-slate-600' : 'text-slate-600'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};
