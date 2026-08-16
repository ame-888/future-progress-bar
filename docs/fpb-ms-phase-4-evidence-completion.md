# FPB-MS Phase 4 evidence-completion ledger

**Research cutoff:** 2026-08-16  
**Baseline:** 9/48 active observations with structured evidence; 39 explicit `legacy-incomplete` packages.  
**Current result:** 9/48 with structured evidence; 39 explicit exceptions remain.  
**Score effect:** 0/336 before and after.

## Integrity decision

Phase 4 did **not** relabel inherited observations as researched. Network retrieval of candidate primary pages was blocked in this environment, and discussion-level citations would not satisfy FPB-MS. The 39 gaps therefore remain conspicuous rather than being filled with sources that merely discuss a topic. This ledger is the handoff queue, not a claim of 48/48 completion.

The canonical catalogue itself is now explicit: its 48 `MeasurementSpec` records are stored directly, and the runtime `migrateLegacyDefinition()` sentence parser, keyword-to-glossary matcher, unit heuristic, and rationale factory have been removed. Existing specification prose has been preserved verbatim rather than silently presenting mechanical Phase 2 prose as new Phase 4 authorship.

## Measurement-by-measurement ledger

| Measurement | Evidence before/new | Sources | Current status | Phase 4 observation change |
|---|---:|---:|---|---|
| `ai-millennium-problems` | legacy-incomplete → legacy-incomplete | 0 | `no-verified-result` | None; retained pending source verification |
| `ai-exclusively-professors` | legacy-incomplete → legacy-incomplete | 0 | `no-verified-result` | None; retained pending source verification |
| `ai-led-companies` | legacy-incomplete → legacy-incomplete | 0 | `no-verified-result` | None; retained pending source verification |
| `ai-led-countries-1` | legacy-incomplete → legacy-incomplete | 0 | `no-verified-result` | None; retained pending source verification |
| `robotics-1` | legacy-incomplete → legacy-incomplete | 0 | `estimate` | None; retained pending source verification |
| `robotics-2` | legacy-incomplete → legacy-incomplete | 0 | `unknown` | None; retained pending source verification |
| `robotics-police-countries` | legacy-incomplete → legacy-incomplete | 0 | `no-verified-result` | None; retained pending source verification |
| `robotics-3` | legacy-incomplete → legacy-incomplete | 0 | `unknown` | None; retained pending source verification |
| `self-driving-car-2` | structured → structured | 2 | `lower-bound` | None; retained pending source verification |
| `self-driving-car-3` | legacy-incomplete → legacy-incomplete | 0 | `no-verified-result` | None; retained pending source verification |
| `self-driving-car-1` | legacy-incomplete → legacy-incomplete | 0 | `no-verified-result` | None; retained pending source verification |
| `self-driving-car-4` | legacy-incomplete → legacy-incomplete | 0 | `no-verified-result` | None; retained pending source verification |
| `lev-1` | structured → structured | 1 | `estimate` | None; retained pending source verification |
| `lev-2` | legacy-incomplete → legacy-incomplete | 0 | `estimate` | None; retained pending source verification |
| `lev-3` | structured → structured | 1 | `verified` | None; retained pending source verification |
| `lev-4` | structured → structured | 1 | `verified` | None; retained pending source verification |
| `space-1` | legacy-incomplete → legacy-incomplete | 0 | `verified` | None; retained pending source verification |
| `space-moon-pop` | legacy-incomplete → legacy-incomplete | 0 | `verified` | None; retained pending source verification |
| `space-mars-pop` | legacy-incomplete → legacy-incomplete | 0 | `zero` | None; retained pending source verification |
| `space-2` | legacy-incomplete → legacy-incomplete | 0 | `verified` | None; retained pending source verification |
| `qc-gate-model-physical-qubits` | legacy-incomplete → legacy-incomplete | 0 | `lower-bound` | None; retained pending source verification |
| `qc-system-two-qubit-fidelity` | legacy-incomplete → legacy-incomplete | 0 | `verified` | None; retained pending source verification |
| `qc-3` | legacy-incomplete → legacy-incomplete | 0 | `verified` | None; retained pending source verification |
| `qc-4` | structured → structured | 1 | `verified` | None; retained pending source verification |
| `superconductor-1` | legacy-incomplete → legacy-incomplete | 0 | `no-verified-result` | None; retained pending source verification |
| `superconductor-je-20k-20t` | legacy-incomplete → legacy-incomplete | 0 | `estimate` | None; retained pending source verification |
| `superconductor-3` | legacy-incomplete → legacy-incomplete | 0 | `verified` | None; retained pending source verification |
| `superconductor-commercial-piece-length` | legacy-incomplete → legacy-incomplete | 0 | `verified` | None; retained pending source verification |
| `bci-1` | structured → structured | 3 | `lower-bound` | None; retained pending source verification |
| `bci-2` | structured → structured | 1 | `lower-bound` | None; retained pending source verification |
| `bci-3` | legacy-incomplete → legacy-incomplete | 0 | `lower-bound` | None; retained pending source verification |
| `bci-4` | legacy-incomplete → legacy-incomplete | 0 | `no-verified-result` | None; retained pending source verification |
| `mind-upload-price-1` | legacy-incomplete → legacy-incomplete | 0 | `not-applicable` | None; retained pending source verification |
| `mind-upload-adoption-1` | legacy-incomplete → legacy-incomplete | 0 | `no-verified-result` | None; retained pending source verification |
| `mind-upload-adoption-2` | legacy-incomplete → legacy-incomplete | 0 | `no-verified-result` | None; retained pending source verification |
| `mind-upload-1` | legacy-incomplete → legacy-incomplete | 0 | `verified` | None; retained pending source verification |
| `vr-5` | legacy-incomplete → legacy-incomplete | 0 | `estimate` | None; retained pending source verification |
| `vr-commercial-ppd` | legacy-incomplete → legacy-incomplete | 0 | `verified` | None; retained pending source verification |
| `vr-4` | legacy-incomplete → legacy-incomplete | 0 | `no-verified-result` | None; retained pending source verification |
| `vr-shared-world-concurrency` | legacy-incomplete → legacy-incomplete | 0 | `verified` | None; retained pending source verification |
| `cultured-meat-1` | legacy-incomplete → legacy-incomplete | 0 | `unknown` | None; retained pending source verification |
| `cultured-meat-3` | structured → structured | 1 | `lower-bound` | None; retained pending source verification |
| `cultured-meat-2` | structured → structured | 4 | `lower-bound` | None; retained pending source verification |
| `cultured-meat-4` | legacy-incomplete → legacy-incomplete | 0 | `no-verified-result` | None; retained pending source verification |
| `fusion-1` | legacy-incomplete → legacy-incomplete | 0 | `zero` | None; retained pending source verification |
| `fusion-2` | legacy-incomplete → legacy-incomplete | 0 | `zero` | None; retained pending source verification |
| `fusion-3` | legacy-incomplete → legacy-incomplete | 0 | `unknown` | None; retained pending source verification |
| `fusion-4` | legacy-incomplete → legacy-incomplete | 0 | `zero` | None; retained pending source verification |

## Required Phase 4 accounting

- **Sources added:** none. Source access could not be completed, so no provenance was manufactured.
- **Values/statuses changed:** none. Unsupported reclassification would reduce, not improve, data quality.
- **Entity lists/near misses added:** none. Existing cultivated-meat entities remain the only structured enumerations.
- **ZERO decisions:** the four inherited ZERO observations remain review warnings. Their generic audit basis is not treated as a completed exhaustive proof.
- **Estimates/lower bounds:** no uncertainty or enumeration claim was added without evidence.
- **Methodology/rationales:** runtime generation was removed, but inherited prose still requires individual research-editor review. This report does not call it rewritten.
- **Thresholds/definition versions:** unchanged; no semantic question change occurred.
- **North Stars:** no point-level provenance was invented. All 12 retain their disclosed legacy provenance limitation.
- **Forecasts:** the 1,148 legacy records retain `legacy-incomplete`; references remain validated against active definitions and levels.
- **Compatibility intentionally retained:** observation, level, history, and forecast source modules still use legacy-shaped records and are composed by `progress-table-data.ts`. Removing those adapters safely requires evidence/history migration, not a naming-only rewrite.

## Unresolved research work

1. Re-research every row still marked `legacy-incomplete` from authoritative primary sources.
2. Replace all inherited generic rationale/protocol/level text with independently reviewed, metric-specific authorship.
3. Add entity and near-miss ledgers for policy/count/lower-bound observations.
4. Reassess every ZERO, UNKNOWN, and NO VERIFIED RESULT with cutoff-specific evidence.
5. Add point-level provenance to all 12 North Star series, distinguishing measured, calculated, and interpolated points.
6. Re-run the complete validation, audit, test, lint, and production-build suite after those research edits.

## Completion criterion

This document must not be interpreted as Phase 4 research completion until the audit reports 48/48 meaningful evidence packages and the remaining tasks above have been closed. Its purpose is to prevent an architectural migration from being confused with substantive source verification.
