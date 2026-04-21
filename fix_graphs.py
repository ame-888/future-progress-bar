import os
import re

graphs = [
    "src/components/bci-graph.tsx",
    "src/components/cultured-meat-graph.tsx",
    "src/components/lev-progress-graph.tsx",
    "src/components/mind-upload-graph.tsx",
    "src/components/nuclear-fusion-graph.tsx",
    "src/components/quantum-computing-graph.tsx",
    "src/components/superconductor-graph.tsx",
    "src/components/vr-graph.tsx",
    "src/components/space-exploration-graph.tsx",
    "src/components/ai-graph.tsx"
]

for graph in graphs:
    if not os.path.exists(graph):
        continue
    with open(graph, "r") as f:
        text = f.read()

    # If it already takes lastUpdated as a prop, skip or adjust
    if "lastUpdated?: string" not in text:
        # Add lastUpdated prop to the component
        # Find export function Name() {
        text = re.sub(r'export function ([A-Za-z0-9]+)\(\)\s*{', r'export function \1({ lastUpdated }: { lastUpdated?: string }) {', text)

    # We want to replace the hardcoded "Last Updated on..." text at the bottom.
    # Pattern is `<p>Last Updated on...</p>` or `<div>Last Updated on...</div>`
    # Let's just find the text "Last Updated on" and replace its container or replace the hardcoded text with dynamic.

    # Actually, we should standardize it as:
    # {lastUpdated && (
    #   <div className="mt-2 px-4 md:px-6 pb-4 text-left text-xs text-slate-500 dark:text-slate-400">
    #     Last Updated on {lastUpdated}
    #   </div>
    # )}

    # For now, let's just do a regex replace of anything starting with `Last Updated on` and ending with `2026` inside tags
    # Some have <p>Last Updated on ...</p>, some have `Last Updated on April 19th, 2026` directly inside a div.

    if "Last Updated on" in text:
        text = re.sub(
            r'Last Updated on [A-Za-z]+ \d+(?:st|nd|rd|th), \d{4}',
            r'{lastUpdated ? `Last Updated on ${lastUpdated}` : ""}',
            text
        )
    else:
        # If it doesn't have it, we inject it before the last </div>
        # But maybe we just inject it before `    </div>\n  );\n}`
        if "{lastUpdated" not in text:
            replacement = r'      {lastUpdated && (\n        <div className="mt-2 px-4 md:px-6 pb-4 text-left text-xs text-slate-500 dark:text-slate-400">\n          Last Updated on {lastUpdated}\n        </div>\n      )}\n    </div>\n  );\n}'
            text = re.sub(r'\s*</div>\n\s*\);\n}', '\n' + replacement, text)

    with open(graph, "w") as f:
        f.write(text)

print("Done updating graphs")
