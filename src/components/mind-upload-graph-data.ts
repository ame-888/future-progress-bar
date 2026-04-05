export type MindUploadDataPoint = {
  year: number;
  maxNeurons: number | null;
  completeBrainNeurons: number;
  maxNeuronsNote?: string;
  completeBrainNote?: string;
};

export const HUMAN_BRAIN_NEURONS = 86000000000;

export const MIND_UPLOAD_DATA: MindUploadDataPoint[] = [];

for (let year = 2001; year <= 2026; year++) {
  let maxNeurons = 0;
  let maxNeuronsNote = "";
  let completeBrainNeurons = 0;
  let completeBrainNote = "";

  // Complete Brain
  if (year >= 2001 && year <= 2013) {
    completeBrainNeurons = 0;
  } else if (year >= 2014 && year <= 2022) {
    completeBrainNeurons = 302;
    completeBrainNote = "302 neurons (C. elegans)";
  } else if (year >= 2023 && year <= 2025) {
    completeBrainNeurons = 3016;
    completeBrainNote = "3,016 neurons (Drosophila Larva)";
  } else if (year === 2026) {
    completeBrainNeurons = 139000;
    completeBrainNote = "139,000 neurons (Adult Drosophila)";
  }

  // Max Neurons
  if (year >= 2001 && year <= 2013) {
    maxNeurons = 0;
  } else if (year >= 2014 && year <= 2021) {
    maxNeurons = 302;
    maxNeuronsNote = "302 neurons (C. elegans)";
  } else if (year >= 2022 && year <= 2023) {
    maxNeurons = 25000;
    maxNeuronsNote = "~25,000 neurons (Drosophila Hemibrain)";
  } else if (year >= 2024 && year <= 2025) {
    maxNeurons = 67000;
    maxNeuronsNote = "~67,000 neurons (Mouse Visual Cortex / MICrONS)";
  } else if (year === 2026) {
    maxNeurons = 139000;
    maxNeuronsNote = "139,000 neurons (Adult Drosophila)";
  }

  const point: MindUploadDataPoint = {
    year,
    maxNeurons,
    completeBrainNeurons,
  };
  if (maxNeuronsNote) point.maxNeuronsNote = maxNeuronsNote;
  if (completeBrainNote) point.completeBrainNote = completeBrainNote;

  MIND_UPLOAD_DATA.push(point);
}
