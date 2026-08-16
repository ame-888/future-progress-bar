# FPB-MS 1.0 Phase 2 migration audit

**Effective/cutoff:** 2026-08-16 · **Scope:** 48 active measurements, 336 thresholds, 12 North Stars. This is additive to, and does not overwrite, the August 10 and August 16 audits.

## Outcome

The catalog now derives **0 / 336**, unchanged from the pre-migration score. No observed numeric magnitude changed. Fifteen unsupported exact-zero answers changed epistemic state (thirteen to NO VERIFIED RESULT, two shares to UNKNOWN); none crossed L1. Structured evidence remains present for 9 observations. The other 39 now carry an explicit `legacy-incomplete` evidence exception rather than appearing silently sourced. This is transparent coverage, not resolution: those 39 are the principal remaining warning.

## All measurements reviewed

| Field | IDs reviewed |
|---|---|
| AI | `ai-millennium-problems`, `ai-exclusively-professors`, `ai-led-companies`, `ai-led-countries-1` |
| Robotics | `robotics-1`, `robotics-2`, `robotics-police-countries`, `robotics-3` |
| Self-driving | `self-driving-car-2`, `self-driving-car-3`, `self-driving-car-1`, `self-driving-car-4` |
| Longevity | `lev-1`, `lev-2`, `lev-3`, `lev-4` |
| Space | `space-1`, `space-moon-pop`, `space-mars-pop`, `space-2` |
| Quantum | `qc-gate-model-physical-qubits`, `qc-system-two-qubit-fidelity`, `qc-3`, `qc-4` |
| Superconductors | `superconductor-1`, `superconductor-je-20k-20t`, `superconductor-3`, `superconductor-commercial-piece-length` |
| BCI | `bci-1`, `bci-2`, `bci-3`, `bci-4` |
| Mind upload | `mind-upload-price-1`, `mind-upload-adoption-1`, `mind-upload-adoption-2`, `mind-upload-1` |
| VR | `vr-5`, `vr-commercial-ppd`, `vr-4`, `vr-shared-world-concurrency` |
| Cultivated meat | `cultured-meat-1`, `cultured-meat-3`, `cultured-meat-2`, `cultured-meat-4` |
| Fusion | `fusion-1`, `fusion-2`, `fusion-3`, `fusion-4` |

All 48 questions and definitions were individually reviewed. Unlisted wording was retained because it already asked one stable construct; all specifications nevertheless gained authored identity, rationale, variable, scope, qualification, protocol, source hierarchy, glossary references, and ladder design metadata.

## Question and construct changes

* `ai-led-companies`: replaced the incompatible public-market-cap/private-valuation population with the 100 largest **publicly traded** companies by one worldwide equity-market-cap snapshot.
* `bci-2` and `bci-3`: replaced “Which and how many” with scalar 195-state count questions; identities belong in observation metadata when evidence permits.
* `self-driving-car-2`: now requires both operative authorization and an actually operating public SAE L4/L5 service outside a trial.
* `vr-4`: replaced philosophical “perfect replication” with simultaneous elicitation of named modalities confirmed by participant-response or neurophysiological testing, and made it a record.
* `ai-millennium-problems`: L1–L7 now count the same variable—qualifying AI solutions to the seven named Clay problems. An independently qualifying AI solution can be assessed for every named problem; the unrelated “create and solve a new problem” construct was removed.

## Stable-definition cleanup

`space-2` no longer names Buran or 79.4 t in its stable definition; that result remains in observation history. `superconductor-3` no longer embeds 48.7 T or the current component values; its stable boundary instead requires component reporting. `vr-shared-world-concurrency` lost the meaningless generic worldwide denominator. All share metrics now store numerator, denominator, geography, period, aggregation, and compatibility rules.

## Status, value, score, and ZERO decisions

| IDs | Before | After | Reason | Numeric/score effect |
|---|---|---|---|---|
| `ai-millennium-problems`, `ai-exclusively-professors`, `ai-led-companies`, `ai-led-countries-1`, `robotics-police-countries`, `self-driving-car-3`, `self-driving-car-1`, `self-driving-car-4`, `bci-4`, `mind-upload-adoption-1`, `mind-upload-adoption-2`, `vr-4`, `cultured-meat-4` | ZERO / 0 | NO VERIFIED RESULT / nonnumeric | Retained audit material does not establish an exact exhaustive global zero under FPB-MS. | Stored zero removed; score remains 0. |
| `bci-3` | VERIFIED / 1 | LOWER BOUND / ≥1 | The August 10 audit already established that no exhaustive country registry supports an exact count; Phase 2 restores that audited epistemic state. | Numeric minimum retained; score remains 0. |
| `robotics-2`, `robotics-3` | ZERO / 0% | UNKNOWN / nonnumeric | No compatible exhaustive global numerator supports an exact share of zero. | Stored zero removed; score remains 0. |
| `space-mars-pop` | ZERO / 0 | ZERO / 0 | Exhaustive historical human-spaceflight record supports no human having reached Mars. | None. |
| `fusion-1`, `fusion-2`, `fusion-4` | ZERO / 0 | ZERO / 0 | The documented worldwide audit supports no grid-connected commercial fusion plant and therefore zero generation/export under these linked definitions. | None. |

Thus all 19 inherited ZERO observations were reviewed: 15 changed and 4 retained with explicit `zeroBasis`. No positive numeric value changed; `bci-3` retained value 1 while regaining its audited lower-bound qualifier.

## Thresholds, versions, and series breaks

Only `ai-millennium-problems` L7 changed: condition “create and solve a new Millennium-level problem” became numeric goal 7, measuring all seven named problems. All other 335 threshold values were retained after review. Every level has a rationale and every ladder has pattern/L1/intermediate/L7 rationale.

All measurements receive an initial FPB semantic definition. Unchanged-meaning migrations are `1.0.0`. Materially clarified `ai-millennium-problems`, `ai-led-companies`, `self-driving-car-2`, `bci-2`, `bci-3`, `vr-4`, `space-2`, and `superconductor-3` are `2.0.0`. Series breaks are marked for `ai-millennium-problems`, `ai-led-companies`, and `vr-4`; other clarifications preserve the scalar series. Definition history records the effective date and avoids back-casting.

## Evidence and entities

Before Phase 2, 9/48 observations had structured ledgers and 39 had silent gaps. After Phase 2, 9/48 retain structured ledgers and 39/48 have explicit exceptional `legacy-incomplete` bases. No citation was fabricated. Entity types and reconciliation validation are implemented; however, public identity lists were not invented where the retained evidence could not support them. Completing the 39 ledgers and then adding evidence-resolving entity/near-miss records is the remaining research warning.

## North Stars and forecasts

All 12 North Stars now have version/effective date, construct, variable, methodology, temporal semantics, evidence requirements, source-module provenance, cutoff, and limitations. The cutoff is consistently 2026-08-16. AI is explicitly the cost of 10^16 dense FP32 FLOP/s in 2026 USD, not “human-equivalent brain cost.” North Stars remain non-scoring.

All 1,148 forecast rows remain separate from observations and now map to measurement/level/model/predicted-year provenance records. Since capture dates, prompt/protocol versions, and formal model version identifiers were never stored, those fields remain null and every row is honestly `legacy-incomplete`.

## Editorial changes and remaining warnings

Quantum descriptions now limit possible speedups to selected workloads; fusion is not called boundless; cultivated meat does not claim universal environmental superiority; autonomous vehicles reference SAE levels and operational design domains; BCI consistently means brain-computer interface; longevity indicators do not claim LEV has occurred.

Remaining warnings are the 39 incomplete evidence ledgers, corresponding absent evidence-backed entity lists, legacy North-Star point provenance gaps, and incomplete provenance on 1,148 forecasts. These are disclosed rather than fabricated. Phase 3 transparency/maintenance UX was not implemented.
