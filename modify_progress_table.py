import re

with open("src/components/progress-table.tsx", "r") as f:
    content = f.read()

# First, let's find where the button is.
button_search = """            <button
              onClick={() => {
                setIsPredictionsModalOpen(true);
                playSound('/click.wav');
              }}
              className="px-4 py-2 rounded-full font-bold text-sm tracking-wide bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 cursor-pointer animate-pulse"
            >
              Full List of Predictions
            </button>"""

replacement = """
            <div className="flex flex-col items-center bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-xl max-w-lg w-full mt-4 cursor-pointer hover:shadow-2xl transition-all duration-200 group"
                 onClick={() => {
                   setIsPredictionsModalOpen(true);
                   playSound('/click.wav');
                 }}>
              <div className="w-full flex items-center justify-between mb-3 border-b border-slate-100 dark:border-slate-800 pb-2">
                <h3 className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <SparklesIcon className="w-5 h-5 text-indigo-500" />
                  Upcoming Predictions ({allPredictions.sortedYears.length > 0 ? allPredictions.sortedYears[0] : new Date().getFullYear()})
                </h3>
                <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 group-hover:underline">See all &rarr;</span>
              </div>
              <div className="w-full flex flex-col gap-2 max-h-[160px] overflow-hidden relative">
                {allPredictions.sortedYears.length > 0 && allPredictions.groupedByYear[allPredictions.sortedYears[0]].slice(0, 10).map((pred, idx) => {
                  let predictorColorClass = "text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800";
                  if (pred.isUser) {
                    predictorColorClass = "text-black bg-white";
                  } else {
                    if (pred.name.toLowerCase().includes("grok")) {
                      predictorColorClass = "text-yellow-800 bg-yellow-100 dark:text-yellow-200 dark:bg-yellow-900/30";
                    } else if (pred.name.toLowerCase().includes("claude")) {
                      predictorColorClass = "text-orange-800 bg-orange-100 dark:text-orange-200 dark:bg-orange-900/30";
                    } else if (pred.name.toLowerCase().includes("gemini")) {
                      predictorColorClass = "text-sky-800 bg-sky-100 dark:text-sky-200 dark:bg-sky-900/30";
                    } else if (pred.name.toLowerCase().includes("gpt")) {
                      predictorColorClass = "text-emerald-800 bg-emerald-100 dark:text-emerald-200 dark:bg-emerald-900/30";
                    }
                  }

                  return (
                    <div key={idx} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300 truncate">
                      <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider whitespace-nowrap ${predictorColorClass}`}>
                        {pred.name}
                      </span>
                      <span className="truncate" title={`${pred.title} reaches Lvl ${pred.level}`}>
                        {pred.title} reaches Lvl {pred.level}
                      </span>
                    </div>
                  );
                })}
                {allPredictions.sortedYears.length > 0 && allPredictions.groupedByYear[allPredictions.sortedYears[0]].length > 10 && (
                  <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-white dark:from-slate-900 to-transparent flex items-end justify-center pb-1">
                    <span className="text-xs text-slate-400 font-medium">+{allPredictions.groupedByYear[allPredictions.sortedYears[0]].length - 10} more...</span>
                  </div>
                )}
              </div>
            </div>
"""

content = content.replace(button_search, replacement)

with open("src/components/progress-table.tsx", "w") as f:
    f.write(content)
