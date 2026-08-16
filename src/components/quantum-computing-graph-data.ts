export type QuantumComputingDataPoint = {
  year: number;
  logicalQubits: number;
  description: string;
};

export const QUANTUM_COMPUTING_DATA: QuantumComputingDataPoint[] = [
  {
    year: 2001,
    logicalQubits: 0,
    description: 'No qualifying multi-qubit encoded logical computation is included for this baseline year.',
  },
  {
    year: 2021,
    logicalQubits: 2,
    description: 'An experimental lattice-surgery result demonstrated a logical operation between two encoded logical qubits.',
  },
  {
    year: 2022,
    logicalQubits: 2,
    description: 'The standing raw maximum remained two encoded logical qubits; protection and experimental standards varied across implementations.',
  },
  {
    year: 2023,
    logicalQubits: 48,
    description: 'Harvard, MIT, and QuEra used up to 48 encoded logical qubits in programmable neutral-atom computations with logical encoding and error-detection techniques.',
  },
  {
    year: 2024,
    logicalQubits: 48,
    description: 'The raw maximum remained 48. Other systems reported smaller logical-qubit counts with different protection and error-characterization approaches.',
  },
  {
    year: 2025,
    logicalQubits: 96,
    description: 'Neutral-atom fault-tolerant work operated with up to 96 simultaneously active encoded logical qubits in programmable computations.',
  },
  {
    year: 2026,
    logicalQubits: 96,
    description: 'The raw maximum remained 96 encoded logical qubits at the 2026-08-16 research cutoff.',
  },
];
