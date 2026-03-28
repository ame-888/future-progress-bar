import { StarIcon, ChartBarIcon, ViewColumnsIcon, QueueListIcon } from "@heroicons/react/24/solid";

export function GamificationExplanation() {
  return (
    <div className="w-full max-w-4xl mx-auto p-4 md:p-6 lg:p-8 mt-4 md:mt-8">
      <div className="bg-white dark:bg-slate-900 rounded-xl p-6 md:p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
        <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white mb-8 text-center">
          How it works
        </h2>

        <div className="space-y-8 text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed">

          <div className="flex flex-col md:flex-row gap-4 items-start">
            <div className="flex-shrink-0 bg-amber-100 dark:bg-amber-900/30 p-3 rounded-full">
              <StarIcon className="w-6 h-6 text-amber-500" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2 uppercase tracking-wide">
                The "North Star"
              </h3>
              <p>
                The main graph of each field. They all have particular milestones that, when reached, mean severe changes are coming. We track the absolute bleeding edge of human capability to see when these major phase shifts will occur.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 items-start">
            <div className="flex-shrink-0 bg-indigo-100 dark:bg-indigo-900/30 p-3 rounded-full">
              <ChartBarIcon className="w-6 h-6 text-indigo-500" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2 uppercase tracking-wide">
                The Progress Bars
              </h3>
              <p>
                They are specific numbers being tracked to show progress around the subject. They are divided in "LEVELS", from 0 (Stone) to 7 (Antimatter). To reach a higher LEVEL, a PROGRESS BAR must meet a certain minimum value. Feel free to see the requirements using the arrows. Level 7 can be quite crazy!
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 items-start">
            <div className="flex-shrink-0 bg-emerald-100 dark:bg-emerald-900/30 p-3 rounded-full">
              <ViewColumnsIcon className="w-6 h-6 text-emerald-500" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2 uppercase tracking-wide">
                Domains
              </h3>
              <p>
                There are currently 11 fields being tracked by this website. Switch between them to see what is the current state for each of them.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 items-start">
            <div className="flex-shrink-0 bg-rose-100 dark:bg-rose-900/30 p-3 rounded-full">
              <QueueListIcon className="w-6 h-6 text-rose-500" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2 uppercase tracking-wide">
                Current State Lists
              </h3>
              <p>
                Sometimes a number alone doesn't tell the whole story. For certain measurements, like the number of countries adopting a new technology, you will see a detailed list titled <strong className="text-slate-800 dark:text-slate-200">AS OF TODAY</strong> underneath the current value. These lists provide a breakdown of the specific milestones making up that total count.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
