import React from "react";

export interface GraphScaleToggleProps {
  isLogScale: boolean;
  onToggle: (isLog: boolean) => void;
}

export function GraphScaleToggle({ isLogScale, onToggle }: GraphScaleToggleProps) {
  return (
    <div className="flex items-center gap-2">
      <span className={`text-xs font-bold ${!isLogScale ? 'text-slate-900 dark:text-white' : 'text-slate-500 dark:text-slate-400'}`}>
        LINEAR
      </span>

      <button
        onClick={() => onToggle(!isLogScale)}
        className="relative inline-flex h-5 w-9 items-center rounded-full bg-indigo-500 dark:bg-indigo-600 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900 cursor-pointer"
        aria-pressed={isLogScale}
        aria-label="Toggle Logarithmic Scale"
      >
        <span
          className={`inline-block h-3 w-3 transform rounded-full bg-white transition-transform ${
            isLogScale ? "translate-x-5" : "translate-x-1"
          }`}
        />
      </button>

      <span className={`text-xs font-bold ${isLogScale ? 'text-slate-900 dark:text-white' : 'text-slate-500 dark:text-slate-400'}`}>
        LOG
      </span>
    </div>
  );
}
