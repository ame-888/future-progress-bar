# FPB-MS Phase 1: typed foundation

**Snapshot:** `fpb-2026-08-16`  
**Research cutoff:** 2026-08-16  
**Scope:** architecture only; no measurement, observation, threshold, forecast, North Star, or scoring meaning was intentionally changed.

## Before Phase 1

The dashboard composed independently keyed definition, result, evidence, level, forecast, and history objects in `progress-table-data.ts`. That composition repeated a permissive UI type, made several required fields optional, and ended in `as unknown as Measurement`. Evidence was attached only after the result was loaded, history did not distinguish world-state revisions from definition revisions, condition levels were represented by an optional key beside a numeric goal, and catalogue validation permanently required the score to be `0 / 336`.

## Canonical architecture

`measurement-types.ts` is now the authoritative vocabulary. It defines exhaustive result, temporal, indicator, source, threshold, ladder-pattern, cadence, and operator unions, plus separate models for:

1. `MeasurementSpec` — stable identity, research identity, semantics, scope/ratio metadata, qualification, protocol, and ladder metadata;
2. `MeasurementObservation` — a dated, discriminated numeric/nonnumeric result with evidence attached directly;
3. `EvidenceReference` — stable ID, provenance, dates, source type, URL, and supported claim;
4. `MilestoneThreshold` — explicit numeric/operator or condition-key predicates;
5. `ObservationHistoryEntry` — evidence/world-state revisions;
6. `DefinitionHistoryEntry` — versioned FPB definition changes and comparability breaks;
7. `Forecast` — an active measurement and level reference;
8. `NorthStarDefinition` — contextual, explicitly non-scoring series metadata.

The composed UI model exposes these canonical objects while retaining compatibility fields used by the current pages. Composition now has an explicit `Measurement` return type and performs runtime completeness checks; there is no broad or double cast.

## Compatibility adapters

- The 48 existing operational definitions are converted into `MeasurementSpec` objects. Existing definition text becomes both the construct and the legacy operational definition. Missing research metadata is represented by `null`, empty collections, `legacy`, or `metadataPending`; no rationale or protocol was invented.
- Existing result records are converted into a discriminated `MeasurementObservation`. Numeric statuses require a numeric value. UNKNOWN, N/A, and NO VERIFIED RESULT take the nonnumeric branch. Existing evidence is embedded in the observation.
- Existing levels become explicit numeric or condition thresholds. The old numeric goal on the one condition threshold is display-only and can never score.
- Existing compact history rows become observation-history records referencing the current evidence IDs. The old history arrays remain available to the UI. Definition history is intentionally empty until actual definition events are researched in Phase 2.
- Existing forecast rows become typed measurement-and-level references while the UI prediction format remains available.

## Snapshot metadata

`DATASET_SNAPSHOT` is the single source for the snapshot ID, shared measurement research cutoff, draft standard version, and associated immutable audit document. Current observation records and evidence access dates consume it. North Star series retain their pre-existing cutoff because their series dates are not measurement snapshot dates. The two audit documents were not edited.

## Validation and scoring

Validation now checks the 5/12/48/336 topology, unique and retired IDs, canonical specification/observation references, required fields, snapshot cutoff, seven ordered levels, numeric finiteness and epistemic-state consistency, intentional ZERO, LOWER BOUND display qualification, monotonic numeric ladders, condition/numeric separation, evidence and history references, forecast targets, routes, North Stars, and global-score bounds/independent derivation.

The structural `achieved === 0` invariant was removed. The current snapshot still derives **0 / 336**, but any future score from 0 through 336 is valid when it agrees with independently evaluated milestone predicates. Every milestone is evaluated individually; completed-count prefix inference is not used.

## Phase 2 migration warnings

All 48 specifications still need authored rationale and research-protocol metadata. Qualification fields, preferred sources, ladder rationales, explicit variable/construct refinements, ratio numerators and aggregation rules, and definition history also require semantic migration. These are warnings rather than Phase 1 errors.

The following 39 measurements have no structured evidence ledger; no sources were fabricated:

`ai-millennium-problems`, `ai-exclusively-professors`, `ai-led-companies`, `ai-led-countries-1`, `robotics-1`, `robotics-2`, `robotics-police-countries`, `robotics-3`, `self-driving-car-3`, `self-driving-car-1`, `self-driving-car-4`, `lev-2`, `space-1`, `space-moon-pop`, `space-mars-pop`, `space-2`, `qc-gate-model-physical-qubits`, `qc-system-two-qubit-fidelity`, `qc-3`, `superconductor-1`, `superconductor-je-20k-20t`, `superconductor-3`, `superconductor-commercial-piece-length`, `bci-3`, `bci-4`, `mind-upload-price-1`, `mind-upload-adoption-1`, `mind-upload-adoption-2`, `mind-upload-1`, `vr-5`, `vr-commercial-ppd`, `vr-4`, `vr-shared-world-concurrency`, `cultured-meat-1`, `cultured-meat-4`, `fusion-1`, `fusion-2`, `fusion-3`, and `fusion-4`.

## Intentionally deferred debt

- Source ledgers and explicit supported claims for the 39 empty ledgers.
- Authored rather than legacy-derived specification fields for all 48 measurements.
- Backfilled dated history and definition-version events; current compact history lacks enough provenance to invent these safely.
- Formal prerequisite semantics and proof of any prefix property. The evaluator does not depend on a prefix property.
- Semantic standardization of questions, definitions, thresholds, observations, North Stars, and forecasts. Those belong to later phases.
