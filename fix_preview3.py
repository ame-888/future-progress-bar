with open("src/components/progress-table.tsx", "r") as f:
    content = f.read()

# Make the prediction text left aligned
old_row = """                    <div key={idx} className="flex items-center text-sm text-slate-600 dark:text-slate-300 w-full py-0.5">
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider whitespace-nowrap mr-3 flex-shrink-0 inline-block ${predictorColorClass}`}>
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
                      <span className="truncate flex-1 text-left" title={`${pred.title} reaches Lvl ${pred.level}`}>
                        {pred.title} reaches Lvl {pred.level}
                      </span>
                    </div>"""

content = content.replace(old_row, new_row)

with open("src/components/progress-table.tsx", "w") as f:
    f.write(content)
