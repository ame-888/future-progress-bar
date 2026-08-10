export type ResultStatus = "zero" | "verified" | "estimate" | "lower-bound" | "unknown" | "not-applicable" | "no-verified-result";

export type EvidenceReference = {
  title: string;
  organization?: string;
  url: string;
  publicationDate?: string;
  accessedDate: string;
  sourceType: "official" | "peer-reviewed" | "filing" | "technical" | "journalism" | "estimate";
  supports?: string;
};

export type MeasurementDefinition = {
  id: string;
  title: string;
  question: string;
  definition: string;
  temporalType: "current" | "record";
  indicatorType: "capability" | "adoption" | "policy" | "market" | "outcome" | "proxy";
  unit: string;
  isLowerBetter: boolean;
  geographicScope?: string;
  denominator?: { description: string; value?: number; period?: string; geography?: string };
};

export type NorthStarDefinition = {
  id: string;
  title: string;
  question: string;
  methodology: string;
  unit: string;
  lastUpdated: string;
  series: { sourceModule: string; frequency: "annual" | "event"; startYear?: number };
};
