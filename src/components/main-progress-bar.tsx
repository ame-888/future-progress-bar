import React, { useMemo } from "react";
import { MAIN_DOMAINS } from "./progress-table-data";

export function MainProgressBar() {
  const maxPoints = useMemo(() => {
    let total = 0;
    MAIN_DOMAINS.forEach((domain) => {
      domain.subdomains.forEach((sub) => {
        total += 1; // North Star
        sub.measurements.forEach((m) => {
          total += m.levels.length;
        });
      });
    });
    return total;
  }, []);

  const currentPoints = 0; // Hardcoded for now per user request
  const dateMarker = "April 19th 2026";
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  // Sections definition
  // User asked for exact numbers:
  // STONE AGE: 0-50
  // BRONZE AGE: 51-100
  // IRON AGE: 101-150
  // STEEL AGE: 151-200
  // PLASTIC AGE: 201-250
  // SILICON AGE: 251-300
  // METAMATERIAL AGE: 301-348 (Max)
  const sections = [
    { name: "STONE AGE", min: 0, max: 50, color: "bg-stone-400 dark:bg-stone-600" },
    { name: "BRONZE AGE", min: 50, max: 100, color: "bg-amber-600 dark:bg-amber-700" },
    { name: "IRON AGE", min: 100, max: 150, color: "bg-slate-400 dark:bg-slate-600" },
    { name: "STEEL AGE", min: 150, max: 200, color: "bg-zinc-300 dark:bg-zinc-500" },
    { name: "PLASTIC AGE", min: 200, max: 250, color: "bg-rose-400 dark:bg-rose-600" },
    { name: "SILICON AGE", min: 250, max: 300, color: "bg-blue-400 dark:bg-blue-600" },
    { name: "METAMATERIAL AGE", min: 300, max: maxPoints, color: "bg-purple-500 dark:bg-purple-700" },
  ];

  return (
    <div className="w-full max-w-[120rem] mx-auto mt-4 mb-2 px-2 sm:px-4">
      <div className="relative pt-8 pb-2">
        {/* Current Marker */}
        <div
          className="absolute top-0 z-10 flex flex-col items-center transition-all duration-500"
          style={{ left: `${(currentPoints / maxPoints) * 100}%`, transform: 'translateX(-50%)' }}
        >
          <div className="bg-indigo-600 text-white px-3 py-1 rounded-md text-xs font-bold shadow-md whitespace-nowrap mb-1">
            {dateMarker}
          </div>
          <div className="w-0.5 h-6 bg-indigo-600"></div>
          <div className="w-3 h-3 bg-indigo-600 rounded-full border-2 border-white dark:border-slate-900 absolute bottom-[-5px]"></div>
        </div>

        {/* The Bar */}
        <div className="w-full h-8 flex rounded-xl overflow-hidden shadow-sm border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800">
          {sections.map((sec, idx) => {
            const widthPct = ((sec.max - sec.min) / maxPoints) * 100;
            const isWeak = currentPoints < sec.max;
            const colorClass = isWeak ? `${sec.color} bg-opacity-30 dark:bg-opacity-30` : sec.color;

            return (
              <div
                key={sec.name}
                className={`h-full flex items-center justify-center border-r border-white/20 last:border-r-0 ${colorClass} relative group`}
                style={{ width: `${widthPct}%` }}
              >
                {/* Desktop view label */}
                <span className="text-[8px] md:text-[9px] font-bold text-white/90 px-1 text-center leading-tight whitespace-normal">
                  {sec.name}
                </span>
              </div>
            );
          })}
        </div>

        {/* Fill Indicator for current points - visually highlights up to current progress */}
        {/* Since current is 0, we can skip or just overlay a translucent fill if > 0 */}
        <div
          className="absolute top-8 left-0 h-8 bg-white/20 dark:bg-black/20 pointer-events-none rounded-l-xl transition-all duration-500"
          style={{ width: `${(currentPoints / maxPoints) * 100}%` }}
        ></div>

        {/* Tick marks and numbers below the bar */}
        <div className="relative w-full h-6 mt-2">
          {sections.map((sec, idx) => {
            // Only draw tick for max unless it's the first one which is 0
            if (idx === 0) {
              return (
                <React.Fragment key="start">
                  <div className="absolute left-0 text-[10px] text-slate-500 dark:text-slate-400 font-medium -translate-x-1/2">
                    0
                  </div>
                  <div className="absolute text-[10px] text-slate-500 dark:text-slate-400 font-medium -translate-x-1/2" style={{ left: `${(sec.max / maxPoints) * 100}%` }}>
                    {sec.max}
                  </div>
                </React.Fragment>
              );
            }
            return (
              <div
                key={sec.max}
                className="absolute text-[10px] text-slate-500 dark:text-slate-400 font-medium -translate-x-1/2"
                style={{ left: `${(sec.max / maxPoints) * 100}%` }}
              >
                {sec.max}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
