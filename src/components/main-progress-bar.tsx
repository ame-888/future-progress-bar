import React, { useMemo } from "react";
import { MAIN_DOMAINS } from "./progress-table-data";

export function MainProgressBar() {
  const { levelsCompleted, totalLevels, northStarsCompleted, totalNorthStars } = useMemo(() => {
    const levelsCompleted = [0, 0, 0, 0, 0, 0, 0, 0];
    const totalLevels = [0, 0, 0, 0, 0, 0, 0, 0];
    const northStarsCompleted = 0; // Hardcoded per user request, will be informed manually
    let totalNorthStars = 0;

    MAIN_DOMAINS.forEach((domain) => {
      domain.subdomains.forEach((sub) => {
        if (sub.northStar) {
            totalNorthStars++;
        }

        // Level 0 implies base level. If a measurement exists, it's at least in Level 0
        sub.measurements.forEach((m) => {
          totalLevels[0]++;
          levelsCompleted[0]++; // "currently, all milestones are in level 0, stone"

          m.levels.forEach((l) => {
            const idx = l.level; // level 1 to 7 maps to idx 1 to 7
            if (idx >= 1 && idx <= 7) {
              totalLevels[idx]++;

              let isCompleted = false;
              if (m.isLowerBetter) {
                  isCompleted = m.currentValue <= l.goal;
              } else {
                  isCompleted = m.currentValue >= l.goal;
              }

              if (isCompleted) {
                levelsCompleted[idx]++;
              }
            }
          });
        });
      });
    });

    return { levelsCompleted, totalLevels, northStarsCompleted, totalNorthStars };
  }, []);

  const columns = [
    { name: "STONE AGE", style: "bg-stone-200 text-stone-800 dark:bg-stone-800 dark:text-stone-300 border-stone-300 dark:border-stone-700" },
    { name: "IRON AGE", style: "bg-slate-300 text-slate-800 dark:bg-slate-700 dark:text-slate-200 border-slate-400 dark:border-slate-600" },
    { name: "COPPER AGE", style: "bg-orange-200 text-orange-900 dark:bg-orange-900/50 dark:text-orange-300 border-orange-400 dark:border-orange-700" },
    { name: "BRONZE AGE", style: "bg-amber-700/30 text-amber-900 dark:bg-amber-900/60 dark:text-amber-400 border-amber-700/50 dark:border-amber-700/60" },
    { name: "SILVER AGE", style: "bg-gradient-to-br from-slate-100 via-slate-300 to-slate-100 text-slate-800 dark:from-slate-700 dark:via-slate-500 dark:to-slate-700 dark:text-slate-100 border-slate-400 dark:border-slate-500 shadow-[inset_0_0_15px_rgba(255,255,255,0.5)] dark:shadow-[inset_0_0_15px_rgba(255,255,255,0.1)]" },
    { name: "GOLD AGE", style: "bg-gradient-to-br from-yellow-200 via-yellow-400 to-yellow-200 text-yellow-900 dark:from-yellow-700 dark:via-yellow-500 dark:to-yellow-700 dark:text-yellow-100 border-yellow-500 dark:border-yellow-600 shadow-[inset_0_0_15px_rgba(255,215,0,0.5)] dark:shadow-[inset_0_0_15px_rgba(255,215,0,0.2)]" },
    { name: "PLATINUM AGE", style: "bg-gradient-to-br from-teal-100 via-cyan-200 to-teal-100 text-teal-900 dark:from-teal-900 dark:via-cyan-700 dark:to-teal-900 dark:text-cyan-100 border-cyan-400 dark:border-cyan-600 shadow-[inset_0_0_15px_rgba(0,255,255,0.4)] dark:shadow-[inset_0_0_15px_rgba(0,255,255,0.1)]" },
    { name: "ANTIMATTER AGE", style: "bg-gradient-to-br from-purple-900 via-black to-purple-900 text-purple-200 dark:from-purple-950 dark:via-black dark:to-purple-950 border-purple-500/50 shadow-[0_0_15px_rgba(168,85,247,0.5)]" },
    { name: "SPECIAL", style: "bg-indigo-100 text-indigo-900 dark:bg-indigo-900/50 dark:text-indigo-300 border-indigo-400 dark:border-indigo-700 shadow-[0_0_10px_rgba(99,102,241,0.3)]" }
  ];

  return (
    <div className="w-full max-w-[120rem] mx-auto mt-8 mb-4 px-2 sm:px-4">
      <div className="w-full">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-9 gap-1">
          {columns.map((col, idx) => {
            const isSpecial = idx === 8;
            const completed = isSpecial ? northStarsCompleted : levelsCompleted[idx];
            const total = isSpecial ? totalNorthStars : totalLevels[idx];
            const isDone = completed === total && total > 0;

            return (
              <div
                key={col.name}
                className={`flex flex-col border-2 rounded-xl overflow-hidden relative group transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${col.style}`}
              >
                {/* Shine effect overlay for metal ages */}
                {(idx >= 4 && idx <= 7) && (
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-tr from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-[scan_2s_ease-in-out_infinite]"></div>
                )}

                <div className="p-1.5 text-xs sm:text-sm font-bold flex items-center justify-center border-b border-black/10 dark:border-white/10 text-center tracking-wider z-10">
                  {col.name}
                </div>

                <div className="p-1.5 text-sm sm:text-base font-medium flex items-center justify-center z-10 gap-2">
                  <span>{completed}/{total}</span>
                  {isDone && (
                    <svg className="w-6 h-6 text-green-500 drop-shadow-[0_0_3px_rgba(34,197,94,0.5)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
