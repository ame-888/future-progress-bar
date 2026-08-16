# Future Progress Bar Measurement Standard v1.0 (FPB-MS 1.0)

**Effective:** 2026-08-16 · **Normative code:** `src/lib/fpb-measurement-standard.ts` and `src/lib/measurement-types.ts`

## Normative language and anatomy

MUST, MUST NOT, SHOULD, and MAY have their ordinary standards meanings. Every active measurement MUST store a stable ID and title, semantic version and effective date, one scalar canonical question, construct and rationale, variable and unit, progress direction, indicator and temporal type, scope, inclusion/exclusion/boundary rules, research procedure and cadence, evidence hierarchy, ZERO/UNKNOWN/conflict rules, and milestone pattern and rationale. A question MUST NOT contain its current answer or join constructs with “which and how many.” Terms that affect qualification MUST be defined locally or reference the codebook.

## Time and indicators

`current` is the state valid at the cutoff; `period` aggregates an explicitly identified interval; `record` is the best result achieved by the cutoff. Publication and access dates MUST NOT replace observation dates. Indicator types are capability, adoption, policy, market, outcome, and proxy. A proxy MUST be presented as a proxy rather than proof of its motivating outcome.

## Evidence and conflicts

Sources MUST have stable ID, title, author/organization where known, URL, publication date where known, access date, type, and the exact supported claim. Preference is official/standards/registry evidence, peer-reviewed original research, filings, technical documentation, high-quality journalism that identifies primary evidence, then documented estimates. The exact construct controls: incompatible values MUST NOT be averaged. At equal authority, the later valid observation normally controls. Disagreement and exclusions MUST be recorded.

An inherited observation whose underlying citations were never retained MAY use `legacy-incomplete` only to disclose that gap; it MUST NOT be presented as fully evidenced and MUST be re-researched. Citations and provenance MUST NOT be invented.

## Epistemic states and ZERO

* **VERIFIED:** directly supported under the specification.
* **ESTIMATE:** numeric approximation from a documented method; uncertainty or a plausible range SHOULD be stored.
* **LOWER BOUND:** the stored positive minimum is supported but exhaustive coverage is not.
* **ZERO:** genuine numeric zero.
* **UNKNOWN:** no defensible numeric answer is available.
* **N/A:** the quantity has no meaningful applicable value.
* **NO VERIFIED RESULT:** candidates may exist, but none passes verification.

ZERO MUST have `zeroBasis` based on logical impossibility, an authoritative exhaustive source, or sufficiently exhaustive documented negative research. “Not found” alone MUST NOT become zero. Estimates MUST state the method. A lower-bound count MUST reconcile with the known entity list when identities are stored; lower bounds cannot prove a lower-is-progress threshold.

## Countries, entities, and shares

Default country scope is 193 UN members plus the Holy See and State of Palestine (195). A territory MUST NOT silently count as a sovereign state. Authorization means operative permission by the competent authority for the exact activity; trials and local or ethics approvals are distinct. Public/relevant count identities SHOULD be stored as stable structured entities with qualification summaries and resolving evidence IDs; near misses MAY record evidence-backed exclusions.

Every percentage MUST define numerator, denominator, geography, period, aggregation, and compatibility. Both sides MUST use the same scope, period, unit basis, and population/product boundary. Metadata that merely resembles a denominator MUST NOT be attached to a non-share.

## Milestones and scoring

Each measurement has exactly L1–L7. Its pattern is linear, logarithmic, saturation, ordinal, or custom. The specification MUST explain why L1 matters, why L7 is the endpoint, and how intermediate levels bridge them. Numeric thresholds MUST be strictly monotonic in progress direction. A ladder MUST NOT change its parent variable. Conditional levels require a named predicate and MAY declare prerequisites; their display goal can never score. Each satisfied threshold is one point, independently derived from observations; no achieved score may be hard-coded.

## Versions, history, and retirement

Definitions use semantic versions and chronological effective dates. Every semantic revision MUST record old/new meaning, reason, evidence, comparability, and score effect. A broken comparison MUST set a series break; new wording MUST NOT be back-cast onto old observations. Observation history stores world-state revisions separately. Retired metrics retain identity, reason, and replacement where applicable and MUST NOT reappear as active IDs.

## North Stars

North Stars are non-scoring series governed by `NorthStarDefinition`: question, construct/variable, unit, method, temporal semantics, evidence requirements, point provenance, cutoff, version/effective date, and limitations are mandatory. Points SHOULD preserve their source and calculation. The AI series measures the inflation-adjusted price of a raw dense-FP32 compute reference; it MUST NOT be called human-brain equivalence.

## Forecasts

Forecasts are never observations. Each forecast stores model name, version ID when known, capture time, protocol/prompt version, measurement, level, predicted year, notes, and optional source. Missing historical provenance MUST remain null and be marked `legacy-incomplete`, never reconstructed.

## Codebook

The canonical codebook in `FPB_GLOSSARY` defines current, period, record, commercial, operational, deployed, active, ordinary use, general-purpose, autonomous, fully autonomous, qualifying, sovereign country, authorization, trial, market authorization, AI-managed, AI-led, humanoid, brain-computer interface, mind upload, shipping product, and independent operation. A metric MAY narrow a term but MUST state the narrower boundary.
