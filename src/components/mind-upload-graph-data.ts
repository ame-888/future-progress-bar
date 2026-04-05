export type MindUploadDataPoint = {
  year: number;
  maxNeurons: number | null;
  completeBrainNeurons: number;
  maxNeuronsNote?: string;
  completeBrainNote?: string;
};

export const HUMAN_BRAIN_NEURONS = 86000000000;

export const MIND_UPLOAD_DATA: MindUploadDataPoint[] = [
  {
    year: 2001,
    maxNeurons: 100,
    maxNeuronsNote: "Early small-scale evaluating basic kinetics.",
    completeBrainNeurons: 302,
    completeBrainNote: "302 neurons (C. elegans)",
  },
  {
    year: 2002,
    maxNeurons: 500,
    maxNeuronsNote: "Models exploring gap junction syncytia.",
    completeBrainNeurons: 302,
    completeBrainNote: "302 neurons (C. elegans)",
  },
  {
    year: 2003,
    maxNeurons: 1000,
    maxNeuronsNote: "Early thalamocortical scaling tests.",
    completeBrainNeurons: 302,
    completeBrainNote: "302 neurons (C. elegans)",
  },
  {
    year: 2004,
    maxNeurons: 2000,
    maxNeuronsNote: "Isolated runs of compartmental cortical columns.",
    completeBrainNeurons: 302,
    completeBrainNote: "302 neurons (C. elegans)",
  },
  {
    year: 2005,
    maxNeurons: 3560,
    maxNeuronsNote: "Single-column thalamocortical model.",
    completeBrainNeurons: 302,
    completeBrainNote: "302 neurons (C. elegans)",
  },
  {
    year: 2006,
    maxNeurons: 5000,
    maxNeuronsNote: "BBP neocortical proofs-of-concept.",
    completeBrainNeurons: 302,
    completeBrainNote: "302 neurons (C. elegans)",
  },
  {
    year: 2007,
    maxNeurons: 10000,
    maxNeuronsNote: "BBP initial data-driven model of rat column.",
    completeBrainNeurons: 302,
    completeBrainNote: "302 neurons (C. elegans)",
  },
  {
    year: 2008,
    maxNeurons: 10000,
    maxNeuronsNote: "BBP focuses on intrinsic cellular plasticity.",
    completeBrainNeurons: 302,
    completeBrainNote: "302 neurons (C. elegans)",
  },
  {
    year: 2009,
    maxNeurons: 10000,
    maxNeuronsNote: "Continued structural refinement of rat column.",
    completeBrainNeurons: 302,
    completeBrainNote: "302 neurons (C. elegans)",
  },
  {
    year: 2010,
    maxNeurons: 12000,
    maxNeuronsNote: "Incremental scaling of microcircuits.",
    completeBrainNeurons: 302,
    completeBrainNote: "302 neurons (C. elegans)",
  },
  {
    year: 2011,
    maxNeurons: 15000,
    maxNeuronsNote: "Larger microcircuit assemblies enable scaling.",
    completeBrainNeurons: 302,
    completeBrainNote: "302 neurons (C. elegans)",
  },
  {
    year: 2012,
    maxNeurons: 20000,
    maxNeuronsNote: "BBP expansions across cortical tissue slices.",
    completeBrainNeurons: 302,
    completeBrainNote: "302 neurons (C. elegans)",
  },
  {
    year: 2013,
    maxNeurons: 25000,
    maxNeuronsNote: "Neocortical scaling to predict field potentials.",
    completeBrainNeurons: 302,
    completeBrainNote: "302 neurons (C. elegans)",
  },
  {
    year: 2014,
    maxNeurons: 400000,
    maxNeuronsNote: "HBP cerebellar granular layer network simulation.",
    completeBrainNeurons: 302,
    completeBrainNote: "302 neurons (C. elegans)",
  },
  {
    year: 2015,
    maxNeurons: 400000,
    maxNeuronsNote: "HBP cerebellar model record maintained.",
    completeBrainNeurons: 302,
    completeBrainNote: "302 neurons (C. elegans)",
  },
  {
    year: 2016,
    maxNeurons: 400000,
    maxNeuronsNote: "Optimization of 400k cerebellar network.",
    completeBrainNeurons: 302,
    completeBrainNote: "302 neurons (C. elegans)",
  },
  {
    year: 2017,
    maxNeurons: 400000,
    maxNeuronsNote: "Cerebellar model adapted for GPU architectures.",
    completeBrainNeurons: 302,
    completeBrainNote: "302 neurons (C. elegans)",
  },
  {
    year: 2018,
    maxNeurons: 400000,
    maxNeuronsNote: "Simulation scale plateaus globally.",
    completeBrainNeurons: 302,
    completeBrainNote: "302 neurons (C. elegans)",
  },
  {
    year: 2019,
    maxNeurons: 400000,
    maxNeuronsNote: "Highly detailed models remain stable at peak.",
    completeBrainNeurons: 302,
    completeBrainNote: "302 neurons (C. elegans)",
  },
  {
    year: 2020,
    maxNeurons: 400000,
    maxNeuronsNote: "Cerebellar model remains the numeric peak.",
    completeBrainNeurons: 302,
    completeBrainNote: "302 neurons (C. elegans)",
  },
  {
    year: 2021,
    maxNeurons: 400000,
    maxNeuronsNote: "Advanced GPU frameworks accelerate peak-scale models.",
    completeBrainNeurons: 302,
    completeBrainNote: "302 neurons (C. elegans)",
  },
  {
    year: 2022,
    maxNeurons: 480000,
    maxNeuronsNote: "Fugaku multi-compartment Hodgkin-Huxley tests.",
    completeBrainNeurons: 302,
    completeBrainNote: "302 neurons (C. elegans)",
  },
  {
    year: 2023,
    maxNeurons: 1000000,
    maxNeuronsNote: "Preparatory multi-region scaling tests on Fugaku.",
    completeBrainNeurons: 302,
    completeBrainNote: "302 neurons (C. elegans)",
  },
  {
    year: 2024,
    maxNeurons: 4000000,
    maxNeuronsNote: "Intermediate milestones toward mammalian whole-cortex.",
    completeBrainNeurons: 302,
    completeBrainNote: "302 neurons (C. elegans)",
  },
  {
    year: 2025,
    maxNeurons: 9000000,
    maxNeuronsNote: "Entire mouse cortex simulated on Fugaku.",
    completeBrainNeurons: 302,
    completeBrainNote: "302 neurons (C. elegans)",
  },
  {
    year: 2026,
    maxNeurons: 9000000,
    maxNeuronsNote: "9-million-neuron mouse cortex remains undisputed peak.",
    completeBrainNeurons: 139000,
    completeBrainNote: "139k neurons (adult fruit fly)"
  }
];
