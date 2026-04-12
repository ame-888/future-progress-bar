with open("src/components/progress-table.tsx", "r") as f:
    content = f.read()

# I need to fix the layout for the button preview because the pill is overlapping text / not structured correctly
# Also GPT-5.4 Thinking Mini is getting a generic color instead of emerald? Or it is emerald but needs space

old_row = """                    <div key={idx} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300 truncate">
                      <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider whitespace-nowrap ${predictorColorClass}`}>
                        {pred.name}
                      </span>
                      <span className="truncate" title={`${pred.title} reaches Lvl ${pred.level}`}>
                        {pred.title} reaches Lvl {pred.level}
                      </span>
                    </div>"""

new_row = """                    <div key={idx} className="flex items-center text-sm text-slate-600 dark:text-slate-300 truncate w-full">
                      <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider whitespace-nowrap mr-2 flex-shrink-0 ${predictorColorClass}`}>
                        {pred.name}
                      </span>
                      <span className="truncate flex-1" title={`${pred.title} reaches Lvl ${pred.level}`}>
                        {pred.title} reaches Lvl {pred.level}
                      </span>
                    </div>"""

content = content.replace(old_row, new_row)

with open("src/components/progress-table.tsx", "w") as f:
    f.write(content)
