"use client";

import React, { useState } from "react";
import { DOMAINS, Measurement } from "./progress-table-data";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";

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
                    border-b-2
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
  const [isHistoryExpanded, setIsHistoryExpanded] = useState(false);

  // Find the current level based on currentValue and goals
  // The levels array should be sorted by goal ascending
  let currentLevelIdx = measurement.levels.findIndex(level => measurement.currentValue < level.goal);

  // If all goals are met, it will remain -1. Let's handle that by capping it.
  const isCompleted = currentLevelIdx === -1 && measurement.levels.length > 0;

  // Calculate next goal and previous goal value
  let nextGoal = null;
  let previousGoalValue = 0; // Default previous goal value is 0

  if (isCompleted) {
    nextGoal = measurement.levels[measurement.levels.length - 1];
    previousGoalValue = measurement.levels.length > 1
      ? measurement.levels[measurement.levels.length - 2].goal
      : 0;
  } else if (currentLevelIdx !== -1) {
    nextGoal = measurement.levels[currentLevelIdx];
    previousGoalValue = currentLevelIdx > 0
      ? measurement.levels[currentLevelIdx - 1].goal
      : 0;
  }

  // Calculate percentage
  let percentage = 0;
  if (isCompleted) {
    percentage = 100;
  } else if (nextGoal) {
    const range = nextGoal.goal - previousGoalValue;
    const progress = measurement.currentValue - previousGoalValue;
    percentage = Math.max(0, Math.min(100, (progress / range) * 100));
  }

  return (
    <div className="border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden bg-white dark:bg-slate-900/50 transition-colors duration-200 shadow-sm">
      <div className="p-4 md:p-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-4 gap-4">
          <div>
            <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-1">
              {measurement.title}
            </h3>
            <div className="text-slate-500 dark:text-slate-400 text-sm">
              Current: <strong className="text-slate-800 dark:text-slate-200 text-lg">{measurement.currentValue}</strong> {measurement.unit}
            </div>
          </div>
          <div className="text-left md:text-right">
            {isCompleted ? (
              <div className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400">
                All goals achieved!
              </div>
            ) : nextGoal ? (
              <div className="flex flex-col items-start md:items-end">
                <span className="text-xs font-medium text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-1">
                  Level {nextGoal.level} Goal
                </span>
                <span className="text-lg font-bold text-slate-900 dark:text-white">
                  {nextGoal.goal} <span className="text-sm font-normal text-slate-500 dark:text-slate-400">{measurement.unit}</span>
                </span>
              </div>
            ) : null}
          </div>
        </div>

        {/* Progress Bar */}
        {nextGoal && !isCompleted && (
          <div className="mb-4">
            <div className="flex justify-between text-xs text-slate-500 dark:text-slate-400 mb-1">
              <span>{previousGoalValue} {measurement.unit}</span>
              <span>{Math.round(percentage)}%</span>
            </div>
            <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-3 md:h-4 overflow-hidden relative">
              <div
                className="bg-indigo-500 dark:bg-indigo-400 h-full rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${percentage}%` }}
              ></div>
            </div>
          </div>
        )}

        {/* History Toggle */}
        <button
          onClick={() => setIsHistoryExpanded(!isHistoryExpanded)}
          className="flex items-center text-sm font-medium text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 transition-colors mt-4"
        >
          {isHistoryExpanded ? (
            <>
              <ChevronUpIcon className="w-4 h-4 mr-1" /> Hide History
            </>
          ) : (
            <>
              <ChevronDownIcon className="w-4 h-4 mr-1" /> View History
            </>
          )}
        </button>
      </div>

      {/* History Section */}
      {isHistoryExpanded && (
        <div className="border-t border-slate-100 dark:border-slate-800/50 bg-slate-50/50 dark:bg-slate-900/30 p-4 md:p-6 transition-all duration-200">
          <h4 className="text-sm font-bold text-slate-700 dark:text-slate-300 mb-3 uppercase tracking-wider">
            Historical Data
          </h4>
          {measurement.history.length === 0 ? (
            <p className="text-sm text-slate-500 dark:text-slate-400 italic">
              No historical data available for this measurement.
            </p>
          ) : (
            <div className="space-y-3">
              {measurement.history.map((record, idx) => (
                <div key={idx} className="flex justify-between items-center text-sm border-b border-slate-200 dark:border-slate-800 pb-2 last:border-0 last:pb-0">
                  <span className="text-slate-500 dark:text-slate-400">{record.date}</span>
                  <div className="text-right">
                    <span className="font-medium text-slate-800 dark:text-slate-200 mr-2">
                      {record.value} {measurement.unit}
                    </span>
                    {record.note && (
                      <span className="text-slate-400 dark:text-slate-500 text-xs hidden sm:inline-block">
                        ({record.note})
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
