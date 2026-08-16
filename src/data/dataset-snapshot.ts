export const DATASET_SNAPSHOT = {
  id: "fpb-2026-08-16",
  researchCutoff: "2026-08-16",
  standardVersion: "FPB-MS-draft-phase-1",
  auditDocument: "docs/data-audit-2026-08-16.md",
} as const;

export type DatasetSnapshot = typeof DATASET_SNAPSHOT;
