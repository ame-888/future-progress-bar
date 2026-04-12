with open("src/components/progress-table.tsx", "r") as f:
    content = f.read()

# I see the pills in the button preview are wrapping around in a weird way, or not properly spaced.
# Also the container needs to have enough space for text. Let's make it wider, maybe max-w-2xl
old_container = """<div className="flex flex-col items-center bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-xl max-w-lg w-full mt-4 cursor-pointer hover:shadow-2xl transition-all duration-200 group\""""
new_container = """<div className="flex flex-col items-center bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-xl max-w-2xl w-full mt-4 cursor-pointer hover:shadow-2xl transition-all duration-200 group\""""

# Let's adjust the row rendering
old_row = """                    <div key={idx} className="flex items-center text-sm text-slate-600 dark:text-slate-300 truncate w-full">
                      <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider whitespace-nowrap mr-2 flex-shrink-0 ${predictorColorClass}`}>
                        {pred.name}
                      </span>
                      <span className="truncate flex-1" title={`${pred.title} reaches Lvl ${pred.level}`}>
                        {pred.title} reaches Lvl {pred.level}
                      </span>
                    </div>"""

new_row = """                    <div key={idx} className="flex items-center text-sm text-slate-600 dark:text-slate-300 w-full py-0.5">
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider whitespace-nowrap mr-3 flex-shrink-0 inline-block ${predictorColorClass}`}>
                        {pred.name}
                      </span>
                      <span className="truncate flex-1" title={`${pred.title} reaches Lvl ${pred.level}`}>
                        {pred.title} reaches Lvl {pred.level}
                      </span>
                    </div>"""

content = content.replace(old_container, new_container).replace(old_row, new_row)

# Let's also increase the max height of the preview container because it's cropping the bottom items too aggressively
content = content.replace('className="w-full flex flex-col gap-2 max-h-[160px] overflow-hidden relative"', 'className="w-full flex flex-col gap-1 max-h-[220px] overflow-hidden relative"')

with open("src/components/progress-table.tsx", "w") as f:
    f.write(content)
