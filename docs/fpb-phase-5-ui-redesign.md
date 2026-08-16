# Phase 5 UI redesign

## Previous problems

The public site mixed a strong canonical dataset with a crowded header, overlapping CSS generations, article-sized registry rows, non-interactive audit claims, long specification walls, repeated source cards, and methodology text competing with charts. See `fpb-phase-5-ui-audit.md` for the route-by-route audit.

## Design system

The redesign uses a restrained scientific-atlas system: warm neutral light surfaces, deep observatory dark surfaces, violet/cyan accents, serif display typography, compact mono metadata, a consistent 4/8-based spacing rhythm, 10–24 px radii, three surface elevations, and semantic status/freshness/evidence treatments. Shared components cover page and section headers, statistics, statuses, freshness, evidence, definition versions, disclosures, empty states, cards, filters, and tables.

Status meaning is always expressed with icon and text, never color alone. UNKNOWN, NO VERIFIED RESULT, ZERO, and LOWER BOUND remain distinct. Motion is subtle and disabled under `prefers-reduced-motion`.

## Navigation

Desktop navigation gives Overview, Progress, Research, and Forecasts primary weight. Standards, Audit, Sources, Changelog, Update Guide, and Archive live in an accessible Data & Methodology disclosure. Mobile uses a labelled menu button, large tap targets, current-page state, and the same complete information architecture.

## Page architecture

- The homepage combines a dataset snapshot, civilization score, Stone-to-Antimatter map, near-frontier and unknown signals, five-domain navigation, recent observation activity, and a compact audit summary.
- Field pages lead with four consistent measurement cards. Answer, status, achieved/next milestone, freshness, and evidence precede secondary disclosures. North Star charts now keep methodology and limitations in a dedicated disclosure.
- Measurement specifications have a top answer panel, sticky deep links, five scan-friendly chapters, a desktop context rail, evidence cards, a milestone ladder, and separate observation/definition timelines.
- Research and Audit use focused client components for instant filtering, reset, live result counts, quick quality signals, and empty states. Canonical data is passed once from server components.
- Standards uses anchored documentation, normative-language cards, state and temporal references, an evidence hierarchy, and a visible ZERO-versus-UNKNOWN comparison.
- The Update Guide uses a five-step workflow, prominent manifest input, and copy controls for all operational payloads.
- Forecasts retain a hard observed/predicted boundary and browser-local personal forecasts.

## Responsive and accessibility decisions

Layouts collapse at content-driven breakpoints for 375 px phones and 768 px tablets; wide tables are intentionally scrollable and all other surfaces prevent accidental overflow. Sticky filters become normal-flow controls on small screens. Native details, buttons, links, inputs, and selects are retained. Headings, labels, table scopes, live result counts, keyboard focus, touch targets, contrast, and reduced motion are standardized.

## Representative review set

The intended QA set is the homepage; AI and longevity progress; representative VERIFIED, LOWER BOUND, UNKNOWN, and NO VERIFIED RESULT specifications; Audit; Research; Sources; Standards; and mobile navigation at 375, 768, and 1440 px.

## Remaining limitations

The evidence ledger still uses server query submission rather than the instant registry filter model, and repeated source URLs are not yet fully normalized into a separate canonical source entity. Changelog filtering remains a follow-up opportunity. Existing Recharts plots retain their established chart-level visual language. These do not alter or hide canonical semantics.
