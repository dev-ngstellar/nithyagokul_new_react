"use client";

import React, { useEffect, useState } from "react";

interface StatsCounterProps {
  value: number;
  suffix?: string;
  label: string;
  icon?: React.ReactNode;
}

export default function StatsCounter({ value, suffix = "", label, icon, textClassName = "text-white" }: StatsCounterProps & { textClassName?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const start = 0;
    const end = value;
    if (start === end) return;

    let startTime: number | null = null;
    const duration = 2000; // 2 seconds

    const animateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const progressPercentage = Math.min(progress / duration, 1);

      const easeValue = progressPercentage * (2 - progressPercentage);
      const currentCount = Math.floor(easeValue * end);

      setCount(currentCount);

      if (progress < duration) {
        requestAnimationFrame(animateCount);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animateCount);
  }, [value]);

  return (
    <div className="flex items-center gap-3.5">
      {icon && (
        <div className="p-2 bg-gold/10 border border-gold/20 rounded-lg text-gold shrink-0 transition-transform duration-300 group-hover:scale-105">
          {icon}
        </div>
      )}
      <div className="flex flex-col text-left z-10 min-w-0">
        <div className={`font-serif text-xl sm:text-2xl md:text-3xl font-bold tracking-tight leading-none ${textClassName}`}>
          {count}
          {suffix && <span className="text-gold ml-0.5">{suffix}</span>}
        </div>
        {label && (
          <div className="text-[10px] uppercase tracking-wider text-slate-300 font-semibold font-sans mt-1.5 truncate">
            {label}
          </div>
        )}
      </div>
    </div>
  );
}
