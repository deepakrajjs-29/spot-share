import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

interface CountdownTimerProps {
  targetIsoDate: string;
  label?: string;
  sublabel?: string;
  theme?: 'dark' | 'light';
}

interface TimeRemaining {
  total: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const CountdownTimer: React.FC<CountdownTimerProps> = ({
  targetIsoDate,
  label = "Submission Deadline",
  sublabel = "30 November 2026",
  theme = 'dark'
}) => {
  const calculateTime = (): TimeRemaining => {
    const target = new Date(targetIsoDate).getTime();
    const now = new Date().getTime();
    const difference = target - now;

    if (difference <= 0) {
      return { total: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      total: difference,
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeRemaining>(calculateTime());

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(calculateTime()), 1000);
    return () => clearInterval(timer);
  }, [targetIsoDate]);

  const pad = (n: number) => n.toString().padStart(2, '0');

  const units = [
    { value: pad(timeLeft.days),    label: 'Days'  },
    { value: pad(timeLeft.hours),   label: 'Hours' },
    { value: pad(timeLeft.minutes), label: 'Mins'  },
    { value: pad(timeLeft.seconds), label: 'Secs'  },
  ];

  const isDark = theme === 'dark';

  return (
    <div className={`inline-flex flex-col sm:flex-row items-center gap-5 sm:gap-8 py-4 px-6 sm:px-8 rounded-xl border ${
      isDark
        ? 'bg-navy-900/60 border-white/10 text-slate-900'
        : 'bg-slate-50 border-slate-200 text-slate-800'
    }`}>
      {/* Label */}
      <div className="flex items-center gap-2.5 text-left">
        <Clock className={`w-4 h-4 shrink-0 ${isDark ? 'text-[#c9a84c]' : 'text-[#c9a84c]'}`} />
        <div>
          <span className="text-xs font-bold uppercase tracking-widest block leading-tight">
            {label}
          </span>
          <span className={`text-[11px] font-medium block leading-tight mt-0.5 ${
            isDark ? 'text-slate-400' : 'text-slate-500'
          }`}>
            {sublabel}
          </span>
        </div>
      </div>

      <div className={`hidden sm:block h-8 w-px ${isDark ? 'bg-white/10' : 'bg-slate-300'}`} />

      {/* Countdown values */}
      <div className="flex items-center gap-5 sm:gap-7">
        {units.map((unit, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <span className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold font-mono tracking-tight leading-none ${
              isDark ? 'text-[#d4b96a]' : 'text-[#c9a84c]'
            }`}>
              {unit.value}
            </span>
            <span className={`text-[10px] sm:text-xs font-semibold uppercase tracking-wider mt-1 ${
              isDark ? 'text-slate-500' : 'text-slate-400'
            }`}>
              {unit.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
