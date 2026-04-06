import glob
import re

for filepath in glob.glob("src/components/*-graph.tsx"):
    if filepath == "src/components/lev-progress-graph.tsx":
        continue

    with open(filepath, "r") as f:
        content = f.read()

    # Need to add QuestionMarkCircleIcon import
    if "QuestionMarkCircleIcon" not in content:
        content = content.replace('import {', 'import { QuestionMarkCircleIcon } from "@heroicons/react/24/solid";\nimport {', 1)

    # Let's cleanly replace the <h2 ...> ... </h2> element completely.
    # The h2 always starts with:
    # <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
    # and ends with </h2>
    # We'll use a regex that captures everything inside the h2.

    pattern = r'(<h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">.*?</h2>)'

    replacement = r'''<div className="flex items-center gap-2">
            \1
            <div className="relative group flex items-center">
              <QuestionMarkCircleIcon className="w-5 h-5 text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300 cursor-pointer transition-colors" />
              <div className="absolute left-0 bottom-full mb-2 w-64 md:w-80 p-3 bg-slate-900/95 dark:bg-slate-800/95 text-slate-100 dark:text-slate-200 text-xs rounded-lg shadow-xl opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 z-50 backdrop-blur-sm border border-slate-700/50 text-left">
                The main graph featured at the top of each Subdomain. It tracks the absolute bleeding edge of human or lab capability to see when major phase shifts in that Subdomain will occur.
                <div className="absolute -bottom-1 left-2 w-3 h-3 bg-slate-900/95 dark:bg-slate-800/95 border-b border-r border-slate-700/50 rotate-45 transform translate-y-px"></div>
              </div>
            </div>
          </div>'''

    content = re.sub(pattern, replacement, content, flags=re.DOTALL)

    with open(filepath, "w") as f:
        f.write(content)
