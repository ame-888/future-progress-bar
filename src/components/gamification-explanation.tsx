import {
  StarIcon,
  ChartBarIcon,
  ViewColumnsIcon,
  QueueListIcon,
  GlobeAltIcon,
  FolderOpenIcon,
  ArrowRightCircleIcon,
  FlagIcon,
  AcademicCapIcon,
  CpuChipIcon
} from "@heroicons/react/24/solid";

export function GamificationExplanation() {
  return (
    <div className="w-full max-w-4xl mx-auto p-4 md:p-6 lg:p-8 mt-4 md:mt-8">
      <div className="bg-white dark:bg-slate-900 rounded-xl p-6 md:p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
        <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white mb-8 text-center">
          How it works
        </h2>

        <div className="space-y-8 text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed">

          {/* Dominions */}
          <div className="flex flex-col md:flex-row gap-4 items-start">
            <div className="flex-shrink-0 bg-emerald-100 dark:bg-emerald-900/30 p-3 rounded-full">
              <GlobeAltIcon className="w-6 h-6 text-emerald-500" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2 uppercase tracking-wide">
                Dominions
              </h3>
              <p>
                The 11 main tabs of the application (e.g., LEV, AI, BCI). They represent the critical, over-arching domains of human and technological progress we are tracking.
              </p>
            </div>
          </div>

          {/* North Star */}
          <div className="flex flex-col md:flex-row gap-4 items-start">
            <div className="flex-shrink-0 bg-amber-100 dark:bg-amber-900/30 p-3 rounded-full">
              <StarIcon className="w-6 h-6 text-amber-500" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2 uppercase tracking-wide">
                North Star
              </h3>
              <p>
                The main graph featured at the top of each Dominion. It tracks the absolute bleeding edge of human or lab capability to see when major phase shifts in that Dominion will occur.
              </p>
            </div>
          </div>

          {/* Categories */}
          <div className="flex flex-col md:flex-row gap-4 items-start">
            <div className="flex-shrink-0 bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full">
              <FolderOpenIcon className="w-6 h-6 text-blue-500" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2 uppercase tracking-wide">
                Categories
              </h3>
              <p>
                Collapsible sections within a Dominion that organize and encapsulate related progress bars and measurements.
              </p>
            </div>
          </div>

          {/* Progress Bars / Measurements */}
          <div className="flex flex-col md:flex-row gap-4 items-start">
            <div className="flex-shrink-0 bg-indigo-100 dark:bg-indigo-900/30 p-3 rounded-full">
              <ChartBarIcon className="w-6 h-6 text-indigo-500" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2 uppercase tracking-wide">
                Progress Bars (Measurements)
              </h3>
              <p>
                Specific metrics being tracked to show progress within a Category. Each progress bar tracks a single number toward ultimate milestones.
              </p>
            </div>
          </div>

          {/* Starting Value */}
          <div className="flex flex-col md:flex-row gap-4 items-start">
            <div className="flex-shrink-0 bg-slate-100 dark:bg-slate-800 p-3 rounded-full">
              <ArrowRightCircleIcon className="w-6 h-6 text-slate-500" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2 uppercase tracking-wide">
                Starting Value
              </h3>
              <p>
                An arbitrary baseline value from which a progress bar starts its measurement.
              </p>
            </div>
          </div>

          {/* Current Value */}
          <div className="flex flex-col md:flex-row gap-4 items-start">
            <div className="flex-shrink-0 bg-teal-100 dark:bg-teal-900/30 p-3 rounded-full">
              <FlagIcon className="w-6 h-6 text-teal-500" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2 uppercase tracking-wide">
                Current Value
              </h3>
              <p>
                The most recent, up-to-date value currently achieved for a specific progress bar.
              </p>
            </div>
          </div>

          {/* Levels */}
          <div className="flex flex-col md:flex-row gap-4 items-start">
            <div className="flex-shrink-0 bg-purple-100 dark:bg-purple-900/30 p-3 rounded-full">
              <AcademicCapIcon className="w-6 h-6 text-purple-500" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2 uppercase tracking-wide">
                Levels
              </h3>
              <p>
                The 7 overarching goals of each progress bar. They range from Level 0 (Stone) to Level 7 (Antimatter). Reaching a higher Level requires the progress bar to meet specific goal values.
              </p>
            </div>
          </div>

          {/* AS OF TODAY / History */}
          <div className="flex flex-col md:flex-row gap-4 items-start">
            <div className="flex-shrink-0 bg-rose-100 dark:bg-rose-900/30 p-3 rounded-full">
              <QueueListIcon className="w-6 h-6 text-rose-500" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2 uppercase tracking-wide">
                "AS OF TODAY" (History)
              </h3>
              <p>
                The detailed historical context written inside each progress bar. It lists the specific milestones, breakthroughs, or sub-components making up the current state of that measurement.
              </p>
            </div>
          </div>

          {/* Predictions */}
          <div className="flex flex-col md:flex-row gap-4 items-start">
            <div className="flex-shrink-0 bg-orange-100 dark:bg-orange-900/30 p-3 rounded-full">
              <CpuChipIcon className="w-6 h-6 text-orange-500" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2 uppercase tracking-wide">
                Predictions
              </h3>
              <p>
                For each Level in each progress bar, we track the predicted year of achievement from the 4 main AI companies to see what artificial intelligence forecasts for our future.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
