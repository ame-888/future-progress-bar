import React, { useMemo } from "react";
import { MAIN_DOMAINS } from "./progress-table-data";

export function MainProgressBar() {
  const { levelsCompleted, totalLevels, northStarsCompleted, totalNorthStars } = useMemo(() => {
    const levelsCompleted = [0, 0, 0, 0, 0, 0, 0, 0];
    const totalLevels = [0, 0, 0, 0, 0, 0, 0, 0];
    let northStarsCompleted = 0; // Hardcoded per user request, will be informed manually
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

  const ages = [
    "STONE AGE",
    "BRONZE AGE",
    "IRON AGE",
    "STEEL AGE",
    "PLASTIC AGE",
    "SILICON AGE",
    "METAMATERIAL AGE",
    "ANTIMATTER AGE"
  ];

  return (
    <div className="w-full max-w-[120rem] mx-auto mt-8 mb-4 px-2 sm:px-4">
      <div className="w-full overflow-x-auto">
        <div className="min-w-[800px] border-2 border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-sm">
          {/* Header Row */}
          <div className="grid grid-cols-9 border-b-2 border-slate-300 dark:border-slate-700">
            {ages.map((age, idx) => (
              <div
                key={age}
                className={`p-3 text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center min-h-[48px] ${idx !== 8 ? 'border-r-2 border-slate-300 dark:border-slate-700' : ''}`}
              >
                {age}
              </div>
            ))}
            <div className="p-3 text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center min-h-[48px]">
              SPECIAL
            </div>
          </div>

          {/* Values Row */}
          <div className="grid grid-cols-9">
            {ages.map((age, idx) => (
              <div
                key={`${age}-val`}
                className={`p-3 text-sm text-slate-600 dark:text-slate-400 flex items-center min-h-[48px] ${idx !== 8 ? 'border-r-2 border-slate-300 dark:border-slate-700' : ''}`}
              >
                {levelsCompleted[idx]}/{totalLevels[idx]}
              </div>
            ))}
            <div className="p-3 text-sm text-slate-600 dark:text-slate-400 flex items-center min-h-[48px]">
              {northStarsCompleted}/{totalNorthStars}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
