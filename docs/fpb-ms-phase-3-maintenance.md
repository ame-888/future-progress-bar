# FPB-MS Phase 3: transparency and maintenance

## Public surface

- `/research` is the searchable registry; `/research/[measurement-id]` statically generates all full specifications.
- `/standards`, `/audit`, `/sources`, `/changelog`, and `/update-guide` publish rules, quality, evidence, history, and the update packet.
- `/api/measurements` is the compact registry, `/api/measurements/[id]` is a full canonical record, and `/api/update-manifest` is the audit starting point.

The manifest includes snapshot metadata and, per measurement, identity/question/version/type, current answer/status, cutoff/cadence/due date/freshness, preferred source families, procedure, uncertainty, entities, evidence IDs/URLs, and specification URL. All surfaces derive from canonical composition; no export is separately maintained.

## Update proposal and workflow

`FPB-update-proposal-1.0` is documented with a copyable generic prompt at `/update-guide`. It contains old/proposed value and status, changed/confidence/reason, observation date/period, full sources, entity additions/removals, definition issue, and score impact. Research and implementation are separate passes: ChatGPT proposes against the public manifest; a human approves; Codex edits canonical data and appends history.

Run `npm run data:summary`, `npm run data:audit`, `npm run data:validate`, `npm test`, `npm run lint`, and `npm run build`. Quality signals distinguish ERROR validation failures, WARNING maintenance debt, and INFO review disclosures: stale, missing evidence/publication date, estimate without range, incomplete lower-bound enumeration, ZERO review, and recent definition changes. North-Star and legacy forecast limitations remain disclosed.

## Remaining limitations

Phase 2 intentionally retained explicit `legacy-incomplete` exceptions where original source ledgers or forecast capture metadata were unavailable. Point-level North Star evidence still lives in graph-data modules and some historical entries lack before/after score deltas. These are visible debt, never fabricated provenance. Application of proposals remains reviewed rather than an unsafe general-purpose importer.
