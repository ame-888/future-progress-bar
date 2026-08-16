# Data audit — 2026-08-16

## Scope

The complete production catalog of **48 active measurements and 336 scored thresholds** was reviewed against its operational definitions as of **2026-08-16**. Values and statuses not identified below were revalidated unchanged. The L1–L7 ladders, domains, and scoring rules were not changed.

## Definite numerical changes

- `lev-1`: **73.66 → 73.768 years** (`73.8` displayed), retaining `ESTIMATE`. The data basis is the UN *World Population Prospects 2024* 2026 world estimate, bringing it onto the newer series already used by `lev-2`.
- `lev-3`: **116 years, 354 days → 116 years, 360 days** (`116.9699 → 116.9863` under the catalog's 365-day fractional convention), retaining `VERIFIED`. Ethel Caterham remained the oldest verified living human at the cutoff.
- `lev-4`: **206 → 203**, retaining `VERIFIED`. This is the exact number of living validated entries on the GRG list at the cutoff, not an estimate of the world's true living supercentenarian population.

## Definition clarification

`robotics-2` remains **0%** with status `ZERO`: the review found no sufficiently clear public evidence of qualifying ordinary household adoption. Its canonical definition now treats paid or contracted early access consistently: a household may count when a qualifying general-purpose humanoid is physically resident and routinely available there for useful household tasks, while manufacturer-controlled R&D placements principally for testing or data collection do not count.

## Unchanged observations and uncertainty

The remaining 45 values and all statuses were retained. In particular, lower bounds remain lower bounds, and `UNKNOWN`, `N/A`, and `NO VERIFIED RESULT` observations remain nonnumeric and unscored. No uncertainty was converted into an exact value merely because the catalog was reviewed. Evidence access dates and active-measurement research cutoffs were advanced to 2026-08-16; observation dates for historical records remain their actual event dates.

## Score impact

**Before: 0 / 336. After: 0 / 336.** None of the changes reaches an L1 threshold, and lower-bound scoring semantics are unchanged.
