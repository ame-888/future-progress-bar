# FPB final research audit — 2026-08-16

## Scope and hierarchy

This final pass reviewed all 48 active FPB-MS observations at the canonical 2026-08-16 cutoff. Evidence preference was regulator or official registry, then peer-reviewed literature, filings, technical manufacturer documentation, and only then secondary reporting or disclosed estimates. An external source supports a claim; a `ResearchAuditRecord` separately records candidate classes, source families, qualification screens, conclusion, and limitations. It is not counted as a source.

## Changed observations

| Measurement | Before | After | Status change |
|---|---|---|---|
| `robotics-1` | ≈1,500 | ≥5,500 | ESTIMATE → LOWER BOUND |
| `superconductor-je-20k-20t` | ≈1,400 A/mm² | ≥1,200 A/mm² | ESTIMATE → LOWER BOUND |
| `bci-1` | ≥81 | ≥95 | LOWER BOUND retained |
| `bci-3` | ≥1 | 1 | LOWER BOUND → VERIFIED |
| `mind-upload-1` | 166,691 | 166,694 | VERIFIED retained |
| `vr-5` | ≈5,000,000 | UNKNOWN | ESTIMATE → UNKNOWN |
| `fusion-3` | UNKNOWN | 0 hours | UNKNOWN → ZERO |
| `lev-2` | 86.73 internal | 86.734 internal | ESTIMATE retained; display 86.7 |

The retained decisions for the other 40 measurements are the canonical values enumerated by `npm run data:summary`. The derived score remained **0 / 336** before and after.

## Definition changes and series breaks

`robotics-1` v2.0.0 now counts cumulative external-customer deliveries rather than installed-active population. `bci-1` v2.0.0 counts cumulative people ever implanted rather than living retained implants. `fusion-3` v2.0.0 fixes the system boundary to magnetic-confinement `Q_plasma`. These three changes are material series breaks. `vr-shared-world-concurrency` v1.1.0 clarifies normal supported capacity and excludes staff/manual stress-test overrides without breaking comparability.

## Status decisions

The only ZERO observations are Mars human population and the four fusion observations. Their support packages use exhaustive historical or logically linked operating-facility bases. `vr-5`, household humanoid adoption, autonomous-surgery share, and cultivated-meat sales share remain UNKNOWN because compatible numerical data do not exist. Global negatives remain NO VERIFIED RESULT rather than casual zero. Manufacturer, trial, authorization, and country enumerations remain LOWER BOUND unless the searched population is demonstrably exhaustive.

## Cohorts, entities, and near misses

The BCI-1 calculation is stored as eight non-overlapping cohorts: 21 + 37 + 16 + 10 + 5 + 3 + 1 + 2 = **95**. Country/entity packages cover four driverless-service countries, the eight-country BCI trial floor, China for BCI medical authorization, five human-food cultivated-meat countries, and the United Kingdom for cultivated pet food. Audit records disclose MBZUAI, NetDragon/Tang Yu, Albania/Diella, R&D household placements, Singapore police robots, ODD-limited L4 vehicles, partial cortical percepts, and JET Q≈0.67 as important near misses.

## Coverage

Before this pass, Phase 4 documented only 9/48 measurements with retained external evidence and 39 legacy-incomplete packages. The final normalized registry links external evidence to 26/48 measurements. Public research-audit records cover 28/48 measurements. The union of direct evidence, appropriate research audit, or explicit N/A definitional basis supports 48/48 active observations. These numbers deliberately are not described as “48/48 external sources.”

## North Stars

Historical graph points remain provenance debt unless a reconstructable citation exists. The stale AI “human-equivalent brain” wording was removed. The self-driving distance-share module now exposes no points rather than fabricating 2001–2026 zero measurements. Remaining historical chart series should be treated as legacy-unverified pending point-level reconstruction; this pass does not invent citations.

## Limitations

Public sources do not form exhaustive global registries for humanoid deliveries, chronic BCI recipients, BCI trial authorizations, VR DAU, or several adoption shares. Manufacturer-confidential production records, private trial events, inconsistent jurisdictional systems, and unavailable platform telemetry constrain exact totals. Research audits are cutoff-specific and must be rerun at their stated cadence. Historical North Star point provenance remains the principal unresolved debt.
