export type MindUploadDataPoint = {
  year: number;
  maxNeurons: number | null;
  completeBrainNeurons: number;
  note?: string;
};

export const HUMAN_BRAIN_NEURONS = 86000000000;

export const MIND_UPLOAD_DATA: MindUploadDataPoint[] = [
  {
    year: 2006,
    maxNeurons: 10000,
    completeBrainNeurons: 0,
  },
  {
    year: 2015,
    maxNeurons: 31000,
    completeBrainNeurons: 0,
  },
  {
    year: 2020,
    maxNeurons: 51900,
    completeBrainNeurons: 0,
  },
  {
    year: 2025,
    maxNeurons: 9000000,
    completeBrainNeurons: 0,
  },
  {
    year: 2026,
    maxNeurons: null, // Don't plot max neurons for 2026
    completeBrainNeurons: 139000,
    note: "139k neurons (adult fruit fly)"
  }
];
