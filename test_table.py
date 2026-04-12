with open("src/components/progress-table.tsx", "r") as f:
    content = f.read()

# Need to add state for expandedYears
# const [expandedYears, setExpandedYears] = useState<Record<number, boolean>>({});
state_search = "const [isMeasurementDropdownOpen, setIsMeasurementDropdownOpen] = useState(false);"
state_replacement = """const [isMeasurementDropdownOpen, setIsMeasurementDropdownOpen] = useState(false);
  const [expandedYears, setExpandedYears] = useState<Record<number, boolean>>({});"""

content = content.replace(state_search, state_replacement)

# Need to initialize expandedYears after allPredictions is computed, or just handle it dynamically
# Let's initialize it in useEffect when allPredictions changes
effect_search = """  // Compute flat list of all predictions across all domains/measurements
  const allPredictions = React.useMemo(() => {"""
effect_replacement = """
  // Compute flat list of all predictions across all domains/measurements
  const allPredictions = React.useMemo(() => {"""

content = content.replace(effect_search, effect_replacement)

# Wait, instead of an effect, I can just do: `expandedYears[year] !== false` which defaults to true.
# Let's write a function:
toggle_search = """  const areAllExpanded = Object.keys(expandedCategories).length > 0 && Object.values(expandedCategories).every(Boolean);"""
toggle_replacement = """  const areAllExpanded = Object.keys(expandedCategories).length > 0 && Object.values(expandedCategories).every(Boolean);

  const toggleYear = (year: number) => {
    setExpandedYears(prev => ({ ...prev, [year]: prev[year] === undefined ? false : !prev[year] }));
    playSound('/click.wav');
  };
"""
content = content.replace(toggle_search, toggle_replacement)

# Now let's change the table rendering.
table_search = """                    <tbody className="divide-y divide-slate-200 dark:divide-slate-700/50">
                      {allPredictions.sortedYears.map(year => (
                        allPredictions.groupedByYear[year].map((pred, idx) => {
                          let rowClass = "hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors";
                          let predictorColorClass = "text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800";

                          if (pred.isUser) {
                            rowClass = "bg-black text-white hover:bg-slate-900 transition-colors";
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
                            <tr key={`${year}-${idx}`} className={rowClass}>
                              <td className={`px-4 py-3 font-mono font-bold ${pred.isUser ? 'text-white' : 'text-indigo-600 dark:text-indigo-400'}`}>
                                {pred.year}
                              </td>
                              <td className="px-4 py-3">
                                <span className={`text-xs font-bold px-2 py-1 rounded uppercase tracking-wider ${predictorColorClass}`}>
                                  {pred.name}
                                </span>
                              </td>
                              <td className={`px-4 py-3 font-medium ${pred.isUser ? 'text-slate-200' : 'text-slate-900 dark:text-white'} truncate max-w-xs`} title={pred.title}>
                                {pred.title}
                              </td>
                              <td className="px-4 py-3">
                                <div className="flex items-center gap-2 text-xs">
                                  <span className="uppercase tracking-wider font-semibold opacity-90">L{pred.level}</span>
                                  <span className="opacity-50">&bull;</span>
                                  <span className="opacity-90 truncate max-w-[200px]" title={pred.label ? pred.label : `${pred.goal} ${pred.unit || ''}`}>
                                    {pred.label ? pred.label : `${pred.goal} ${pred.unit || ''}`}
                                  </span>
                                </div>
                              </td>
                              <td className="px-4 py-3 text-right text-xs opacity-70">
                                {pred.timestamp ? new Date(pred.timestamp).toLocaleDateString() : 'N/A'}
                              </td>
                              <td className="px-4 py-3 text-right text-xs">
                                {pred.isUser && pred.measurementId && (
                                  <div className="flex justify-end gap-3">
                                    <button
                                      onClick={() => handleEditPrediction(pred.measurementId!, pred.level, pred.year)}
                                      className="text-slate-300 hover:text-indigo-400 transition-colors"
                                      title="Edit Prediction"
                                    >
                                      Edit
                                    </button>
                                    <button
                                      onClick={() => handleDeletePrediction(pred.measurementId!, pred.level)}
                                      className="text-slate-300 hover:text-red-400 transition-colors"
                                      title="Delete Prediction"
                                    >
                                      Delete
                                    </button>
                                  </div>
                                )}
                              </td>
                            </tr>
                          );
                        })
                      ))}
                      {allPredictions.sortedYears.length === 0 && (
                        <tr>
                          <td colSpan={5} className="px-4 py-8 text-center text-slate-500">
                            No predictions found for the selected filter.
                          </td>
                        </tr>
                      )}
                    </tbody>"""

table_replacement = """                    {allPredictions.sortedYears.map(year => {
                      const isExpanded = expandedYears[year] !== false; // Default true
                      return (
                        <tbody key={year} className="divide-y divide-slate-200 dark:divide-slate-700/50">
                          {/* Year Header Row */}
                          <tr
                            onClick={() => toggleYear(year)}
                            className="bg-slate-100 dark:bg-slate-800 cursor-pointer hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                          >
                            <td colSpan={6} className="px-4 py-2 font-bold text-slate-900 dark:text-white">
                              <div className="flex items-center gap-2">
                                <span className={`transform transition-transform ${isExpanded ? 'rotate-90' : ''}`}>&#9654;</span>
                                {year} ({allPredictions.groupedByYear[year].length} predictions)
                              </div>
                            </td>
                          </tr>

                          {/* Prediction Rows */}
                          {isExpanded && allPredictions.groupedByYear[year].map((pred, idx) => {
                            let rowClass = "hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors";
                            let predictorColorClass = "text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800";

                            if (pred.isUser) {
                              rowClass = "bg-black text-white hover:bg-slate-900 transition-colors";
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
                              <tr key={`${year}-${idx}`} className={rowClass}>
                                <td className={`px-4 py-3 font-mono font-bold ${pred.isUser ? 'text-white' : 'text-indigo-600 dark:text-indigo-400'}`}>
                                  {pred.year}
                                </td>
                                <td className="px-4 py-3">
                                  <span className={`text-xs font-bold px-2 py-1 rounded uppercase tracking-wider ${predictorColorClass}`}>
                                    {pred.name}
                                  </span>
                                </td>
                                <td className={`px-4 py-3 font-medium ${pred.isUser ? 'text-slate-200' : 'text-slate-900 dark:text-white'} truncate max-w-xs`} title={pred.title}>
                                  {pred.title}
                                </td>
                                <td className="px-4 py-3">
                                  <div className="flex items-center gap-2 text-xs">
                                    <span className="uppercase tracking-wider font-semibold opacity-90">L{pred.level}</span>
                                    <span className="opacity-50">&bull;</span>
                                    <span className="opacity-90 truncate max-w-[200px]" title={pred.label ? pred.label : `${pred.goal} ${pred.unit || ''}`}>
                                      {pred.label ? pred.label : `${pred.goal} ${pred.unit || ''}`}
                                    </span>
                                  </div>
                                </td>
                                <td className="px-4 py-3 text-right text-xs opacity-70">
                                  {pred.timestamp ? new Date(pred.timestamp).toLocaleDateString() : 'N/A'}
                                </td>
                                <td className="px-4 py-3 text-right text-xs">
                                  {pred.isUser && pred.measurementId && (
                                    <div className="flex justify-end gap-3">
                                      <button
                                        onClick={() => handleEditPrediction(pred.measurementId!, pred.level, pred.year)}
                                        className="text-slate-300 hover:text-indigo-400 transition-colors"
                                        title="Edit Prediction"
                                      >
                                        Edit
                                      </button>
                                      <button
                                        onClick={() => handleDeletePrediction(pred.measurementId!, pred.level)}
                                        className="text-slate-300 hover:text-red-400 transition-colors"
                                        title="Delete Prediction"
                                      >
                                        Delete
                                      </button>
                                    </div>
                                  )}
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      );
                    })}
                    {allPredictions.sortedYears.length === 0 && (
                      <tbody>
                        <tr>
                          <td colSpan={6} className="px-4 py-8 text-center text-slate-500">
                            No predictions found for the selected filter.
                          </td>
                        </tr>
                      </tbody>
                    )}"""

content = content.replace(table_search, table_replacement)

with open("src/components/progress-table.tsx", "w") as f:
    f.write(content)
