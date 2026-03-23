"use client";

import React, { useState } from "react";

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
  const [activeTab, setActiveTab] = useState(0);

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
          {/* Header Row - Tabs */}
          <div className="flex flex-wrap md:flex-nowrap border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 transition-colors duration-200 overflow-x-auto">
            {COLUMNS.map((column, index) => {
              const isActive = index === activeTab;
              return (
                <button
                  key={`header-${index}`}
                  onClick={() => setActiveTab(index)}
                  className={`
                    flex-1 min-w-fit
                    py-3 px-2 md:p-3 lg:p-4
                    flex items-center justify-center
                    text-center whitespace-nowrap md:whitespace-normal md:break-words md:hyphens-auto leading-tight
                    text-[10px] sm:text-xs md:text-xs lg:text-sm
                    font-bold tracking-widest
                    uppercase transition-all duration-200
                    border-b-2
                    ${
                      isActive
                        ? "text-indigo-600 dark:text-indigo-400 border-indigo-600 dark:border-indigo-400 bg-white dark:bg-slate-950"
                        : "text-slate-500 dark:text-slate-400 border-transparent hover:text-slate-700 dark:hover:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/50"
                    }
                    ${index !== COLUMNS.length - 1 ? "border-r border-slate-200 dark:border-slate-800" : ""}
                  `}
                  style={{ wordBreak: 'break-word', hyphens: 'auto' }}
                >
                  {column}
                </button>
              );
            })}
          </div>

          {/* Body Rows - Selected Tab Content */}
          <div className="flex flex-col">
            {rows.map((rowIdx) => (
              <div
                key={`row-${rowIdx}`}
                className={`
                  ${rowIdx !== rows.length - 1 ? 'border-b border-slate-200 dark:border-slate-800' : ''}
                  transition-colors duration-200
                  group
                `}
              >
                <div
                  className={`
                    relative
                    h-12 sm:h-14 md:h-16 lg:h-20
                    p-2 md:p-3
                    flex items-center justify-center
                    transition-all duration-300 ease-in-out
                    hover:bg-indigo-50 dark:hover:bg-indigo-900/30
                    hover:z-10 hover:shadow-md
                    cursor-default
                  `}
                >
                  {/* Empty row content - to be filled later */}
                  <div className="w-full h-full rounded flex items-center justify-center text-[10px] md:text-sm text-slate-400 dark:text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity">
                    {/* Progress Step {rowIdx + 1} for {COLUMNS[activeTab]} */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
