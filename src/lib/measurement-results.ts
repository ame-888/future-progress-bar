import { MAIN_DOMAINS } from "../components/progress-table-data.ts";
import type { EvidenceReference, ResultStatus } from "./measurement-types.ts";

/** Frequently changing observation view, kept distinct from the stable question catalogue. */
export type MeasurementResult = {
  measurementId: string;
  researchCutoff: string;
  observationDate?: string;
  dataPeriod?: string;
  status: ResultStatus;
  value?: number;
  displayValue?: string;
  evidence: EvidenceReference[];
};

export const MEASUREMENT_RESULTS: Record<string, MeasurementResult> = Object.fromEntries(
  MAIN_DOMAINS.flatMap((domain) => domain.subdomains.flatMap((subdomain) => subdomain.measurements.map((measurement) => [measurement.id, {
    measurementId: measurement.id,
    researchCutoff: measurement.researchCutoff,
    observationDate: measurement.observationDate,
    dataPeriod: measurement.dataPeriod,
    status: measurement.valueStatus ?? "verified",
    value: measurement.currentValue,
    displayValue: measurement.displayValue,
    evidence: measurement.evidence,
  }]))),
);
