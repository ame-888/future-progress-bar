with open("src/components/progress-table.tsx", "r") as f:
    text = f.read()

# We need to replace the isLastUpdated logic.
# Also we need to format the lastUpdated property from "YYYY-MM-DD" to "Month Day, Year".
# And add an id to the measurement element.

# Let's add a date formatter function at the top or inside the component
date_formatter = """
function formatDateStr(dateStr?: string) {
  if (!dateStr) return null;
  const parts = dateStr.split('-');
  if (parts.length !== 3) return dateStr;
  const year = parts[0];
  const month = parseInt(parts[1], 10) - 1;
  const day = parseInt(parts[2], 10);
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const getOrdinalSuffix = (d: number) => {
    if (d > 3 && d < 21) return 'th';
    switch (d % 10) {
      case 1: return 'st';
      case 2: return 'nd';
      case 3: return 'rd';
      default: return 'th';
    }
  };
  return `${months[month]} ${day}${getOrdinalSuffix(day)}, ${year}`;
}
"""

if "function formatDateStr" not in text:
    text = text.replace('import { MAIN_DOMAINS, MeasurementHistory } from "./progress-table-data";', 'import { MAIN_DOMAINS, MeasurementHistory } from "./progress-table-data";\n' + date_formatter)


# Replace `<div key={measurement.id}` with `<div key={measurement.id} id={measurement.id}`
# Wait, let's just make sure the `id={measurement.id}` is added.
text = text.replace('<div key={measurement.id} className="p-4 md:p-6 bg-slate-50', '<div key={measurement.id} id={measurement.id} className="p-4 md:p-6 bg-slate-50')
text = text.replace('<div key={measurement.id} className="p-4 md:p-6 bg-white', '<div key={measurement.id} id={measurement.id} className="p-4 md:p-6 bg-white')

# Next, we replace the history map section
old_history_section = """{/* Render details if available on the current history */}
                  {measurement.history && measurement.history.length > 0 && measurement.history[measurement.history.length - 1].details && (
                    <div className="mt-4 flex flex-col items-start text-xs space-y-2 w-full">
                      <div className="flex items-center gap-1 font-bold text-[10px] text-slate-500 dark:text-slate-400 tracking-widest uppercase mb-1">
                        AS OF TODAY
                        <div className="relative group flex items-center">
                          <QuestionMarkCircleIcon className="w-4 h-4 text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300 cursor-pointer transition-colors" />
                          <div className="absolute left-0 top-full mt-2 w-56 p-2 bg-slate-900/95 dark:bg-slate-800/95 text-slate-100 dark:text-slate-200 text-xs rounded-lg shadow-xl opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 z-50 backdrop-blur-sm border border-slate-700/50 text-left normal-case tracking-normal">
                            Latest real-world values and historically significant past milestones.
                            <div className="absolute -top-1 left-2 w-3 h-3 bg-slate-900/95 dark:bg-slate-800/95 border-t border-l border-slate-700/50 rotate-45 transform translate-y-px"></div>
                          </div>
                        </div>
                      </div>
                      {measurement.history[measurement.history.length - 1].details?.map((detail, idx) => {
                        const isLastUpdated = detail.toLowerCase().startsWith("last updated");

                        if (isLastUpdated) {
                          return (
                            <div key={idx} className="mt-2 w-full flex justify-start">
                              <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-semibold bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800/50 shadow-sm transition-all hover:bg-indigo-100 dark:hover:bg-indigo-900/50">
                                <svg className="w-3.5 h-3.5 mr-1.5 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                {detail}
                              </span>
                            </div>
                          );
                        }

                        return (
                          <div key={idx} className="flex items-start gap-1.5 py-1 text-slate-700 dark:text-slate-300">
                            <span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-indigo-400 dark:bg-indigo-500 shrink-0"></span>
                            <span className="font-medium text-sm">{detail}</span>
                          </div>
                        );
                      })}
                    </div>
                  )}"""

new_history_section = """{/* Render details if available on the current history */}
                  {((measurement.history && measurement.history.length > 0 && measurement.history[measurement.history.length - 1].details) || measurement.lastUpdated) && (
                    <div className="mt-4 flex flex-col items-start text-xs space-y-2 w-full">
                      {(measurement.history && measurement.history.length > 0 && measurement.history[measurement.history.length - 1].details) ? (
                        <div className="flex items-center gap-1 font-bold text-[10px] text-slate-500 dark:text-slate-400 tracking-widest uppercase mb-1">
                          AS OF TODAY
                          <div className="relative group flex items-center">
                            <QuestionMarkCircleIcon className="w-4 h-4 text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300 cursor-pointer transition-colors" />
                            <div className="absolute left-0 top-full mt-2 w-56 p-2 bg-slate-900/95 dark:bg-slate-800/95 text-slate-100 dark:text-slate-200 text-xs rounded-lg shadow-xl opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 z-50 backdrop-blur-sm border border-slate-700/50 text-left normal-case tracking-normal">
                              Latest real-world values and historically significant past milestones.
                              <div className="absolute -top-1 left-2 w-3 h-3 bg-slate-900/95 dark:bg-slate-800/95 border-t border-l border-slate-700/50 rotate-45 transform translate-y-px"></div>
                            </div>
                          </div>
                        </div>
                      ) : null}
                      {measurement.history && measurement.history.length > 0 && measurement.history[measurement.history.length - 1].details?.map((detail, idx) => {
                        return (
                          <div key={idx} className="flex items-start gap-1.5 py-1 text-slate-700 dark:text-slate-300">
                            <span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-indigo-400 dark:bg-indigo-500 shrink-0"></span>
                            <span className="font-medium text-sm">{detail}</span>
                          </div>
                        );
                      })}
                      {measurement.lastUpdated && (
                        <div className="mt-2 w-full flex justify-start">
                          <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-semibold bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800/50 shadow-sm transition-all hover:bg-indigo-100 dark:hover:bg-indigo-900/50">
                            <svg className="w-3.5 h-3.5 mr-1.5 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Last Updated on {formatDateStr(measurement.lastUpdated)}
                          </span>
                        </div>
                      )}
                    </div>
                  )}"""

text = text.replace(old_history_section, new_history_section)

# We need to pass the formatted `lastUpdated` property into the graph components and add an ID.
# Let's search for the components
# e.g., <SpaceExplorationGraph />
graphs_map = {
    "LongevityGraph": "longevity",
    "AiGraph": "ai",
    "SpaceExplorationGraph": "space-exploration",
    "QuantumComputingGraph": "quantum-computing",
    "SuperconductorGraph": "superconductor",
    "BciGraph": "bci",
    "MindUploadGraph": "mind-upload",
    "VrGraph": "vr",
    "CulturedMeatGraph": "cultured-meat",
    "NuclearFusionGraph": "nuclear-fusion"
}

for comp, id_name in graphs_map.items():
    if f"<{comp} />" in text:
        text = text.replace(f"<{comp} />", f'<div id="north-star-{id_name}"><{comp} lastUpdated={{formatDateStr(activeDomain.northStar?.lastUpdated)}} /></div>')

with open("src/components/progress-table.tsx", "w") as f:
    f.write(text)
