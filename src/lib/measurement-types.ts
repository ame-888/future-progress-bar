export type ResultStatus = "zero" | "verified" | "estimate" | "lower-bound" | "unknown" | "not-applicable" | "no-verified-result";
export type TemporalType = "current" | "period" | "record";
export type IndicatorType = "capability" | "adoption" | "policy" | "market" | "outcome" | "proxy";
export type SourceType = "official" | "peer-reviewed" | "filing" | "technical" | "journalism" | "estimate";
export type ThresholdKind = "numeric" | "condition";
export type LadderPattern = "ascending" | "descending" | "mixed" | "legacy";
export type UpdateCadence = "continuous" | "monthly" | "quarterly" | "annual" | "event-driven" | "legacy";
export type ThresholdOperator = ">=" | "<=" | ">" | "<" | "=";

export type EvidenceReference = {
  id: string;
  title: string;
  organization?: string;
  url: string;
  publicationDate?: string;
  accessedDate: string;
  sourceType: SourceType;
  supports: string;
};

export type RatioMetadata = {
  numeratorDefinition?: string;
  denominatorDefinition: string;
  denominatorValue?: number;
  geography?: string;
  period?: string;
  aggregationRule?: string;
};

/** The stable, versioned definition of what FPB measures. Legacy placeholders are explicit. */
export type MeasurementSpec = {
  id: string;
  title: string;
  definitionVersion: string;
  effectiveFrom: string;
  state: "active" | "retired";
  question: string;
  construct: string;
  rationale: string | null;
  variable: string;
  unit: string;
  isLowerBetter: boolean;
  indicatorType: IndicatorType;
  temporalType: TemporalType;
  scope: { geographic?: string; population?: string };
  ratio?: RatioMetadata;
  qualification: { inclusionCriteria: readonly string[]; exclusionCriteria: readonly string[]; boundaryRules: readonly string[]; glossaryReferences: readonly string[] };
  protocol: { updateCadence: UpdateCadence; preferredSourceTypes: readonly SourceType[]; researchProcedure: string | null; zeroRule: string | null; unknownRule: string | null; sourceConflictRule: string | null; tieRule?: string | null };
  ladder: { pattern: LadderPattern; rationale: string | null };
  legacy: { operationalDefinition: string; metadataPending: true };
};

export type NumericObservationStatus = "zero" | "verified" | "estimate" | "lower-bound";
export type NonnumericObservationStatus = "unknown" | "not-applicable" | "no-verified-result";
type ObservationCommon = { measurementId: string; researchCutoff: string; observationDate?: string; dataPeriod?: string; displayValue?: string; answerSummary?: string; methodNote?: string; qualifyingEntities?: readonly string[]; excludedCandidates?: readonly string[]; evidence: readonly EvidenceReference[]; baseValue?: number | null; achievements?: Readonly<Record<string, boolean>> };
export type MeasurementObservation = ObservationCommon & (
  | { valueStatus: NumericObservationStatus; value: number; uncertainty?: { low?: number; high?: number; note?: string }; zeroBasis?: string }
  | { valueStatus: NonnumericObservationStatus; value?: never; uncertainty?: never; zeroBasis?: never }
);

export type NumericMilestone = { level: number; kind: "numeric"; goal: number; operator: ThresholdOperator; label?: string; rationale?: string | null; prerequisites?: readonly number[]; realityYear?: number };
export type ConditionMilestone = { level: number; kind: "condition"; conditionKey: string; label: string; rationale?: string | null; prerequisites?: readonly number[]; realityYear?: number; /** Legacy display-only value; never evaluated. */ goal: number };
export type MilestoneThreshold = NumericMilestone | ConditionMilestone;
export type Forecast = { measurementId: string; level: number; forecaster: string; year: number };
export type ObservationHistoryEntry = { measurementId: string; researchCutoff: string; valueStatus: ResultStatus; value?: number; observationDate?: string; dataPeriod?: string; reasonForRevision?: string; evidenceIds: readonly string[]; note?: string; details?: readonly string[] };
export type DefinitionHistoryEntry = { measurementId: string; definitionVersion: string; effectiveFrom: string; changedFields: readonly (keyof MeasurementSpec)[]; reason: string; migrationNote?: string; comparabilityBreak?: boolean };

export type NorthStarDefinition = { id: string; title: string; question: string; methodology: string; unit: string; researchCutoff: string; temporalType: TemporalType; series: { sourceModule: string; frequency: "annual" | "event"; startYear?: number } };

/** Input retained while Phase 2 migrates the 48 definitions field-by-field. */
export type LegacyMeasurementDefinition = { id: string; title: string; question: string; definition: string; temporalType: TemporalType; indicatorType: IndicatorType; unit: string; isLowerBetter: boolean; geographicScope?: string; denominator?: { description: string; value?: number; period?: string; geography?: string } };
export type MeasurementDefinition = LegacyMeasurementDefinition;
