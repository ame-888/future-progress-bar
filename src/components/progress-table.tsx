import React from "react";

const COLUMNS = [
  "AI",
  "BCI",
  "CULTURED MEAT",
  "LEV",
  "NUCLEAR FUSION",
  "ROBOTICS",
  "SELF-DRIVING CAR",
  "SPACE EXPLORATION",
  "SUPERCONDUCTOR",
  "VR",
];

const ROWS_COUNT = 10;

export function ProgressTable() {
  // Generate 10 empty rows
  const rows = Array.from({ length: ROWS_COUNT }, (_, i) => i);

  return (
    <div className="w-full max-w-7xl mx-auto p-4 md:p-6 lg:p-8">
      <div className="mb-6 flex flex-col items-center text-center">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-2">
          Future Progress Bar
        </h1>
        <p className="text-slate-500 dark:text-slate-400 max-w-2xl">
          Tracking the frontiers of human innovation across 10 critical domains.
        </p>
      </div>

      <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 shadow-sm overflow-hidden transition-colors duration-200">
        <div className="w-full overflow-hidden">
          {/* Header Row */}
          <div className="grid grid-cols-10 border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 transition-colors duration-200">
            {COLUMNS.map((column, index) => (
              <div
                key={`header-${index}`}
                className={`
                  py-2 px-1 md:p-3 lg:p-4
                  flex items-center justify-center
                  text-center break-words hyphens-auto leading-tight
                  text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs xl:text-sm
                  font-bold tracking-widest text-slate-700 dark:text-slate-300
                  uppercase transition-colors duration-200
                  ${index !== COLUMNS.length - 1 ? 'border-r border-slate-200 dark:border-slate-800' : ''}
                `}
                style={{ wordBreak: 'break-word', hyphens: 'auto' }}
              >
                {column}
              </div>
            ))}
          </div>

          {/* Body Rows */}
          <div className="flex flex-col">
            {rows.map((rowIdx) => (
              <div
                key={`row-${rowIdx}`}
                className={`
                  grid grid-cols-10
                  ${rowIdx !== rows.length - 1 ? 'border-b border-slate-200 dark:border-slate-800' : ''}
                  transition-colors duration-200
                  group
                `}
              >
                {COLUMNS.map((_, colIdx) => (
                  <div
                    key={`cell-${rowIdx}-${colIdx}`}
                    className={`
                      relative
                      aspect-[4/5] sm:aspect-[4/3] md:aspect-auto md:h-16 lg:h-20
                      p-1 md:p-2 lg:p-3
                      flex items-center justify-center
                      transition-all duration-300 ease-in-out
                      hover:bg-indigo-50 dark:hover:bg-indigo-900/30
                      hover:scale-[1.05] hover:z-10 hover:shadow-md
                      hover:rounded-md
                      cursor-default
                      ${colIdx !== COLUMNS.length - 1 ? 'border-r border-slate-200 dark:border-slate-800' : ''}
                    `}
                  >
                    {/* Empty cell content - to be filled later */}
                    <div className="w-full h-full rounded flex items-center justify-center text-[10px] md:text-sm text-slate-400 dark:text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity">
                      {/* {rowIdx},{colIdx} */}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
