"use client";

import React, { useState } from "react";
import { DOMAINS, Measurement } from "./progress-table-data";
import { CheckCircleIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

export function ProgressTable() {
  const [activeTab, setActiveTab] = useState(3); // Start with LEV for now since it has data

  const handleTabClick = (index: number) => {
    setActiveTab(index);
    const audio = new Audio('/click.wav');
    audio.play().catch(e => console.error("Audio playback failed", e));
  };

  const activeDomain = DOMAINS[activeTab];

  return (
    <div className="w-full mx-auto p-4 md:p-6 lg:p-8">
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
            {DOMAINS.map((domain, index) => {
              const isActive = index === activeTab;
              return (
                <button
                  key={`header-${index}`}
                  onClick={() => handleTabClick(index)}
                  className={`
                    flex-1 min-w-fit
                    py-3 px-2 md:p-3 lg:p-4
                    flex items-center justify-center
                    text-center whitespace-nowrap md:whitespace-normal md:break-words md:hyphens-auto leading-tight
                    text-[10px] sm:text-xs md:text-xs lg:text-sm
                    font-bold tracking-widest
                    uppercase transition-all duration-200
                    border-b-2 cursor-pointer
                    ${
                      isActive
                        ? "text-white dark:text-slate-900 border-slate-900 dark:border-white bg-slate-900 dark:bg-white"
                        : "text-slate-500 dark:text-slate-400 border-transparent hover:text-slate-700 dark:hover:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/50"
                    }
                    ${index !== DOMAINS.length - 1 ? "border-r border-slate-200 dark:border-slate-800" : ""}
                  `}
                  style={{ wordBreak: 'break-word', hyphens: 'auto' }}
                >
                  {domain.name}
                </button>
              );
            })}
          </div>

          {/* Body Rows - Selected Tab Content */}
          <div className="flex flex-col p-4 md:p-6 lg:p-8 space-y-6">
            {activeDomain.measurements.length === 0 ? (
              <div className="py-12 text-center text-slate-500 dark:text-slate-400">
                Data for {activeDomain.name} is coming soon.
              </div>
            ) : (
              activeDomain.measurements.map((measurement) => (
                <MeasurementCard key={measurement.id} measurement={measurement} />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function MeasurementCard({ measurement }: { measurement: Measurement }) {
  // The levels array should be sorted by goal ascending
  const activeLevelIdx = measurement.levels.findIndex(level => measurement.currentValue < level.goal);
  const initialLevelIdx = activeLevelIdx === -1 ? measurement.levels.length - 1 : activeLevelIdx;
  const [viewLevelIdx, setViewLevelIdx] = useState(initialLevelIdx);

  const canGoLeft = viewLevelIdx > 0;
  const canGoRight = viewLevelIdx < measurement.levels.length - 1;

  const handleGoLeft = () => {
    if (canGoLeft) setViewLevelIdx(viewLevelIdx - 1);
  };

  const handleGoRight = () => {
    if (canGoRight) setViewLevelIdx(viewLevelIdx + 1);
  };

  const currentLevelGoal = measurement.levels[viewLevelIdx];
  const previousGoalValue = viewLevelIdx > 0 ? measurement.levels[viewLevelIdx - 1].goal : measurement.baseValue || 0;

  // Calculate percentage for the currently viewed level
  let percentage = 0;
  let displayValue = measurement.currentValue;

  if (measurement.currentValue >= currentLevelGoal.goal) {
    percentage = 100;
    displayValue = currentLevelGoal.goal; // Cap display at 100% of this level
  } else if (measurement.currentValue <= previousGoalValue) {
    percentage = 0;
    displayValue = previousGoalValue;
  } else {
    const range = currentLevelGoal.goal - previousGoalValue;
    const progress = measurement.currentValue - previousGoalValue;
    percentage = Math.max(0, Math.min(100, (progress / range) * 100));
  }

  // Should we show the actual current value marker, or just a generic completion marker?
  const isViewingCompletedLevel = measurement.currentValue >= currentLevelGoal.goal;
  const isViewingFutureLevel = measurement.currentValue <= previousGoalValue;

  return (
    <div className="border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden bg-white dark:bg-slate-900/50 transition-colors duration-200 shadow-sm relative">
      <div className="p-4 md:p-6 relative">
        <div className="flex flex-col md:flex-row md:items-start justify-between mb-4 gap-4">
          <div>
            <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-1">
              {measurement.title}
            </h3>
          </div>
          <div className="text-left md:text-right">
            {measurement.currentValue >= measurement.levels[measurement.levels.length - 1].goal ? (
              <div className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400">
                All goals achieved!
              </div>
            ) : null}
          </div>
        </div>

        {/* Progress Bar */}
        {currentLevelGoal && (
          <div className="mb-4 mt-12 relative flex items-center gap-4">
            <button
              onClick={handleGoLeft}
              disabled={!canGoLeft}
              className={`p-1 rounded-full ${canGoLeft ? 'text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer' : 'text-slate-300 dark:text-slate-700 cursor-not-allowed'}`}
            >
              <ChevronLeftIcon className="w-6 h-6" />
            </button>
            <div className="flex-1 relative">
              {/* Dynamic Current Value Marker */}
              {!isViewingFutureLevel && (
                <div
                  className="absolute transition-all duration-1000 ease-out z-10"
                  style={{
                    left: `${percentage}%`,
                    transform: 'translateX(-50%)',
                    top: '-60px' // Adjust the top position to accommodate the date text
                  }}
                >
                  <div className="flex flex-col items-center">
                    <div className="bg-slate-800 dark:bg-slate-200 text-white dark:text-slate-900 px-3 py-1.5 rounded-md text-sm font-bold shadow-md whitespace-nowrap relative flex flex-col items-center">
                      <span>{measurement.currentValue} <span className="font-normal text-xs">{measurement.unit}</span></span>
                      {/* Little triangle pointing down */}
                      <div className="absolute -bottom-1 w-2 h-2 bg-slate-800 dark:bg-slate-200 rotate-45"></div>
                    </div>
                    {/* Vertical line through progress bar */}
                    <div className="w-0.5 h-20 bg-slate-800 dark:bg-slate-200 opacity-30 my-1"></div>
                    {/* Date text underneath */}
                    <div className="text-[10px] font-bold text-slate-500 dark:text-slate-400 whitespace-nowrap mt-1">
                      {measurement.history.length > 0 ? measurement.history[measurement.history.length - 1].date : "MARCH - 2026"}
                    </div>
                  </div>
                </div>
              )}

              <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-3 md:h-4 overflow-visible relative mt-8">
                <div
                  className="bg-indigo-500 dark:bg-indigo-400 h-full rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${percentage}%` }}
                ></div>
              </div>
              <div className="flex justify-between mt-12">
                <div className="flex flex-col items-start">
                  <span className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
                    Starting Value
                  </span>
                  <span className="text-lg font-bold text-slate-900 dark:text-white">
                    {previousGoalValue} <span className="text-sm font-normal text-slate-500 dark:text-slate-400">{measurement.unit}</span>
                  </span>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-xs font-medium text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-1">
                    Level {currentLevelGoal.level} Goal
                  </span>
                  <span className="text-lg font-bold text-slate-900 dark:text-white">
                    {currentLevelGoal.goal} <span className="text-sm font-normal text-slate-500 dark:text-slate-400">{measurement.unit}</span>
                  </span>
                </div>
              </div>
            </div>
            <button
              onClick={handleGoRight}
              disabled={!canGoRight}
              className={`p-1 rounded-full ${canGoRight ? 'text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer' : 'text-slate-300 dark:text-slate-700 cursor-not-allowed'}`}
            >
              <ChevronRightIcon className="w-6 h-6" />
            </button>
          </div>
        )}
      </div>

    </div>
  );
}
