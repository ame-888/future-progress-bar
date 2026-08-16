export const DATASET_SNAPSHOT = {
  id: "fpb-2026-08-16",
  researchCutoff: "2026-08-16",
  standardVersion: "FPB-MS-1.0",
  auditDocument: "docs/fpb-ms-v1-migration.md",
} as const;

export type DatasetSnapshot = typeof DATASET_SNAPSHOT;
