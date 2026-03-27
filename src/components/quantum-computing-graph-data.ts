export type QuantumComputingDataPoint = {
  year: number;
  logicalQubits: number;
  description: string;
};

export const QUANTUM_COMPUTING_DATA: QuantumComputingDataPoint[] = [
  {
    year: 2000,
    logicalQubits: 0,
    description: 'For two decades, physicists are just trying to get physical hardware to work. "Logical" error-corrected qubits exist entirely on chalkboards as theoretical math.',
  },
  {
    year: 2021,
    logicalQubits: 1,
    description: 'A team at the University of Maryland/IonQ manages to create a single fault-tolerant logical qubit, proving the math actually works in the real world.',
  },
  {
    year: 2022,
    logicalQubits: 2,
    description: 'Google and other labs manage to string together a couple of logical qubits, proving that adding more physical qubits can actively reduce error rates.',
  },
  {
    year: 2023,
    logicalQubits: 48,
    description: 'A massive paradigm shift. A joint team from Harvard, MIT, and QuEra abandons superconducting chips, uses lasers to trap neutral atoms, and suddenly jumps the world record to 48.',
  },
  {
    year: 2024,
    logicalQubits: 48,
    description: 'The industry spends the year focusing on quality over quantity. Microsoft partners with Atom Computing and Quantinuum to create 24 logical qubits with record-shattering low error rates, though Harvard\'s 48 remains the raw volume record.',
  },
  {
    year: 2025,
    logicalQubits: 96,
    description: 'Harvard and QuEra scale up their architecture, publishing a landmark paper demonstrating algorithms running on 96 logical qubits, proving that scaling the system up continues to drive errors down.',
  },
  {
    year: 2026,
    logicalQubits: 96,
    description: 'The standing record as of early 2026. IBM, Google, Microsoft, and QuEra are now in an all-out sprint to be the first to reach the 1,000 Logical Qubit Holy Grail by the end of the decade.',
  },
];
