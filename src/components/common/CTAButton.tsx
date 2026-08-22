import React, { useState } from 'react';
import { ArrowRight, ExternalLink, Download, FileText, Clock } from 'lucide-react';

interface CTAButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'dark' | 'white';
  size?: 'sm' | 'md' | 'lg';
  icon?: 'arrow' | 'external' | 'download' | 'file' | 'none';
  onClick?: () => void;
  className?: string;
  isExternal?: boolean;
  disabledNotice?: string;
}

export const CTAButton: React.FC<CTAButtonProps> = ({
  children,
  href,
  variant = 'primary',
  size = 'md',
  icon = 'arrow',
  onClick,
  className = '',
  isExternal = false,
  disabledNotice
}) => {
  const [showNotice, setShowNotice] = useState(false);

  const baseStyles = "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2 relative select-none tracking-wide text-center max-w-full leading-normal";

  const sizeStyles = {
    sm: "px-3.5 py-2 text-xs gap-1.5 min-h-[36px]",
    md: "px-5 py-2.5 text-sm gap-2 min-h-[42px]",
    lg: "px-6 py-3 text-sm sm:text-base gap-2.5 min-h-[46px]"
  };

  const variantStyles = {
    primary: "bg-[#b8963e] hover:bg-teal-800 text-slate-900 focus:ring-yellow-500 active:scale-[0.99]",
    secondary: "bg-navy-900 hover:bg-navy-850 text-slate-900 focus:ring-navy-700 active:scale-[0.99]",
    outline: "bg-transparent hover:bg-white text-slate-800 border border-slate-200 focus:ring-slate-400 active:scale-[0.99]",
    white: "bg-white hover:bg-white text-navy-950 font-bold focus:ring-white active:scale-[0.99]",
    dark: "bg-white/10 hover:bg-white/20 text-slate-900 border border-white/20 focus:ring-white/30 active:scale-[0.99]"
  };

  const renderIcon = () => {
    switch (icon) {
      case 'arrow':
        return <ArrowRight className="w-4 h-4 ml-0.5 shrink-0" />;
      case 'external':
        return <ExternalLink className="w-3.5 h-3.5 ml-0.5 shrink-0" />;
      case 'download':
        return <Download className="w-4 h-4 ml-0.5 shrink-0" />;
      case 'file':
        return <FileText className="w-4 h-4 ml-0.5 shrink-0" />;
      default:
        return null;
    }
  };

  const handleClick = (e: React.MouseEvent) => {
    if (!href || href === '#' || href === '') {
      if (disabledNotice) {
        e.preventDefault();
        setShowNotice(true);
        setTimeout(() => setShowNotice(false), 3500);
      }
    }
    if (onClick) onClick();
  };

  const buttonContent = (
    <>
      <span>{children}</span>
      {renderIcon()}
      {showNotice && (
        <span className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap bg-navy-950 text-[#d4b96a] text-xs px-3 py-1 rounded shadow-xl border border-white/10 flex items-center gap-1.5 z-50 font-normal">
          <Clock className="w-3.5 h-3.5 text-[#c9a84c]" />
          {disabledNotice || "Link to be updated as per schedule"}
        </span>
      )}
    </>
  );

  if (href && href !== '#' && href !== '') {
    return (
      <a
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
        onClick={handleClick}
      >
        {buttonContent}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      onClick={handleClick}
    >
      {buttonContent}
    </button>
  );
};
