# Phase 5 UI audit

Audit date: 2026-08-16. Scope: `/`, all twelve `/progress/*` field pages, the 48 `/research/[id]` specifications, `/research`, `/forecasts`, `/standards`, `/audit`, `/sources`, `/changelog`, `/update-guide`, `/archive`, `/about`, and `/contact`.

## Cross-site findings

- The header gave eight links equal weight and became a horizontally scrolling strip on phones. Current-page state was subtle, and the live clock above it looked like a maintainer diagnostic.
- Typography, spacing, radii, surfaces, labels, and controls were defined by overlapping generations of CSS. Later rules contradicted earlier rules, producing inconsistent cards and breakpoints.
- Status, freshness, evidence, and definition-version metadata appeared as undifferentiated prose. UNKNOWN and NO VERIFIED RESULT were not consistently separated from numeric results.
- Editorial pages used one narrow article template regardless of whether the content was documentation, a registry, a timeline, or a data-quality console.
- Focus treatment existed, but navigation disclosures, long tables, filter labels, touch targets, and mobile overflow needed systematic treatment.

## Route audit

### Overview (`/`)

The opening copy explained the project but did not surface the snapshot, nearest L1 measurements, unknowns, recent changes, or data quality. The civilization graphic was visually ambitious but consumed excessive vertical space on mobile. Field navigation was useful but lacked a compact global data summary.

### Progress (`/progress/*`)

All field routes reused one component, which is a strong foundation. However, measurement cards mixed result, question, status, milestone, four disclosures, evidence, history, and forecast links at nearly equal weight. The North Star placed a long methodology/provenance sentence immediately above the chart. Status and freshness were textual rather than a consistent visual language.

### Research registry and specifications (`/research`, `/research/[id]`)

The registry used server-submit selects and rendered each result like a large article, making 48 records slow to scan. Filters were not sticky or instant. Full specifications were a long sequence of sections with no local navigation, summary rail, grouped evidence cards, or timeline treatment.

### Forecasts (`/forecasts`)

Observed and forecast concepts were correctly separated semantically. The workspace needed clearer provenance labels, better control grouping, empty states, and less visually dominant legacy metadata.

### Standards (`/standards`)

Normative rules were stored as paragraph strings. There was no table of contents, anchored section system, normative callouts, status reference, ZERO/UNKNOWN comparison, or visually organized glossary.

### Audit (`/audit`)

The page called its table filterable while telling users to use browser find. It had no actual filter, sorting, signal actions, severity grouping, or usable narrow-screen presentation. The large stat block lacked prioritization.

### Sources (`/sources`)

Filtering required a submit and repeated a full card for every measurement/source pair. Search, sorting, supported-claim grouping, and clear external-link affordances were missing.

### Changelog (`/changelog`)

Observation and definition history were separated, but displayed as two long article streams. There was no timeline, filters, before/after treatment, or prominent distinction between reality and methodology changes.

### Update guide (`/update-guide`)

The workflow was prose in three sections. Large raw code blocks had no copy control, and the manifest was a quiet inline link rather than the primary input to the workflow.

### Archive, About, Contact

These pages were semantically sound but inherited the generic editorial wall. Archive cards needed stronger replacement/status hierarchy. About and Contact benefit from the shared page-header, readable content measure, cards, and callouts rather than bespoke styling.

## Redesign priorities

1. Establish a tokenized atlas design system and shared semantic primitives.
2. Replace the crowded header with four primary destinations and a grouped Data & Methodology menu, including an accessible mobile menu.
3. Put answer, epistemic state, level, freshness, and evidence first everywhere; progressively disclose methodology.
4. Turn registries and audit surfaces into real client-filtered data tools with URL-friendly controls and explicit empty states.
5. Structure specification and standards pages with anchored navigation and card/timeline patterns.
6. Validate 375 px, 768 px, and 1440 px layouts with no accidental horizontal overflow.
