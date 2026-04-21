1. **Refactor Data Model:**
   - Add `lastUpdated` string property to the `Measurement` type.
   - Add `northStar` object with `title` and `lastUpdated` to `SubDomainData` type in `src/components/progress-table-data.ts`.
   - Iterate through `src/components/progress-table-data.ts` and convert the hardcoded `"Last Updated on [Date]"` in `details` arrays into a proper `lastUpdated` property on each `Measurement` object using the `"YYYY-MM-DD"` format (e.g., `"2026-04-12"`).
   - Add `northStar` property for all subdomains with `lastUpdated` using `"YYYY-MM-DD"` format (e.g., Space Exploration -> `northStar: { title: "Maximum Commercial Efficiency to LEO", lastUpdated: "2026-04-21" }`).
   - Remove `"Last Updated on ..."` elements from all arrays.

2. **Update Specific Data Values:**
   - Find "Payload Mass to LEO (Single Launch)" in `src/components/progress-table-data.ts`.
   - Change title to "Net Useful Payload Mass to LEO (Single Launch)".
   - Change `currentValue` to `77`.
   - Replace its `history` with a new object having `value: 77` and `details: ["This record was achieved by the Skylab space station, launched by NASA on May 14, 1973, aboard a modified two-stage Saturn V rocket"]`.
   - Set its `lastUpdated` to `"2026-04-21"`.

3. **Update React Components (UI):**
   - In `src/components/progress-table.tsx`, remove the logic parsing `Last Updated on` from details.
   - Add logic to display a nicely formatted date pill at the bottom of the history section by reading the `lastUpdated` property of the `Measurement`. (e.g. format `"2026-04-21"` back to `"Last Updated on April 21st, 2026"` using existing patterns). Add `id={measurement.id}` to the milestone elements.
   - Add IDs to the North Star components rendering in `src/components/progress-table.tsx` or specific graph files based on the subdomain ID (e.g., `id={\`north-star-${activeDomain.id}\`}`). Remove hardcoded "Last Updated on..." strings from `*-graph.tsx` files and make them read from the data if passed, or just delete them and let the Warning Clock be the global index. Wait, the user wants the UI visually identical. I'll need to pass the formatted `lastUpdated` string down to the graph components from `progress-table.tsx` and display it identically. Let's adjust: each `*-graph.tsx` gets a `lastUpdated` prop, and renders the standard text `<div className="mt-2 px-4 md:px-6 pb-4 text-left text-xs text-slate-500 dark:text-slate-400">Last Updated on {formattedDate}</div>`.

4. **Implement Warning Clock Feature:**
   - In `src/components/digital-clock.tsx` (or a sibling component), calculate the number of months since `lastUpdated` for all milestones and north stars across the dataset.
   - Categorize them into Red (>6 months), Orange (3-6 months), and Yellow (1-3 months).
   - Render these horizontally next to the clock as badges: `[🟥 5] [🟧 2] [🟨 0]`. If a count is 0, don't render that badge.
   - Add hover popups displaying a list of names and exactly formatted last updated dates, with click handlers utilizing `scrollIntoView` to jump to the `id` of the element.

5. **Complete pre-commit steps to ensure proper testing, verification, review, and reflection are done.**

6. **Submit.**
