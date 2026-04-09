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

          {/* Domains */}
          <div className="flex flex-col md:flex-row gap-4 items-start">
            <div className="flex-shrink-0 bg-emerald-100 dark:bg-emerald-900/30 p-3 rounded-full">
              <GlobeAltIcon className="w-6 h-6 text-emerald-500" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2 uppercase tracking-wide">
                Domains
              </h3>
              <p>
                The 11 main domains of the application (e.g., LEV, AI, BCI). They represent the critical, over-arching domains of human and technological progress we are tracking.
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
