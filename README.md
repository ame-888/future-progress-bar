# Future Progress Bar maintainer handbook

Future Progress Bar tracks 48 active measurements under FPB-MS 1.0. `src/lib/measurement-catalog.ts`, the observation/evidence/level/history modules, and their composition in `progress-table-data.ts` are the canonical source. Pages, APIs, score, ledger, manifest, changelog, and audits derive from it.

## Default two-pass update workflow

1. **Research:** download `/api/update-manifest`, give ChatGPT the generic prompt on `/update-guide`, and request `FPB-update-proposal-1.0`. Research each cadence independently; never infer ZERO from silence.
2. **Implementation:** review the proposal, then ask Codex to apply only approved observation/evidence changes, append observation history, advance snapshot metadata, validate, test, and report score impact. Do not blindly import arbitrary JSON.

## Updating values

Obtain the manifest; research the canonical question; prepare and human-review a proposal; edit the canonical observation and evidence modules; append observation history; advance `dataset-snapshot.ts`; run `npm run data:validate`, `npm test`, `npm run lint`, and `npm run build`; inspect `/audit`; deploy.

## Semantic maintenance

- **Add a measurement:** add a stable ID/spec, observation, seven levels, evidence, history, domain membership, and tests. Active count changes require an intentional policy/test change.
- **Change a definition:** increment semantic `definitionVersion`, set `effectiveFrom`, append definition history, name changed fields, and flag comparability/series breaks. Never disguise this as an observation update.
- **Change a ladder:** preserve one variable, document every threshold rationale and score effect, and version the definition.
- **ZERO:** store numeric `0`, status `zero`, and a cutoff-specific `zeroBasis` grounded in logical, authoritative-exhaustive, or documented exhaustive evidence.
- **UNKNOWN / NO VERIFIED RESULT:** store no numeric value. UNKNOWN means no defensible answer; NO VERIFIED RESULT means candidates exist but fail verification.
- **ESTIMATE:** store method and structured uncertainty range where available. **LOWER BOUND:** prefix display with `≥`/“at least,” explain non-exhaustiveness, and link enumerated cases when available.
- **Evidence/entities:** create stable evidence IDs, exact supported claims, access dates and publication dates when known; entity and near-miss evidence IDs must resolve.
- **Retire/replace:** remove from active domain composition, add the archival record and replacement link/reason, and preserve history.
- **North Star:** update definition, cutoff, methodology, limitations, series provenance and point sources; it remains non-scoring.
- **AI forecast:** record model/version, captured date, protocol/prompt version, level/year, and source. Mark older incomplete records `legacy-incomplete`; forecasts never count as observations.

## Commands

`npm run data:summary` prints the snapshot, all IDs/questions/answers, freshness, evidence coverage, and score. `npm run data:audit` emits structured quality signals. `npm run data:validate` enforces FPB-MS invariants. `npm test`, `npm run lint`, and `npm run build` are release gates.

## Maintainer checklist

- [ ] Observation and definition changes separated
- [ ] Status/value/evidence/entity relationships valid
- [ ] History appended and snapshot advanced
- [ ] Score effect reviewed
- [ ] Validation, tests, lint, build passed
- [ ] Public specification, API, source ledger, changelog, and audit inspected

See `docs/fpb-ms-phase-3-maintenance.md` for route and proposal details.
