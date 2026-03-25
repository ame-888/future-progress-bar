export type QuantumComputingDataPoint = {
  year: number;
  aq: number;
  description: string;
};

export const QUANTUM_COMPUTING_DATA: QuantumComputingDataPoint[] = [
  {
    year: 2000,
    aq: 2,
    description: 'Early Nuclear Magnetic Resonance (NMR) experiments. Barely universal, highly noisy.',
  },
  {
    year: 2006,
    aq: 4,
    description: 'Early ion trap systems successfully entangle a handful of qubits.',
  },
  {
    year: 2016,
    aq: 5,
    description: 'IBM puts the first 5-qubit machine on the cloud for public access.',
  },
  {
    year: 2019,
    aq: 15,
    description: 'Google\'s Sycamore processor achieves "Quantum Supremacy." They had 53 physical qubits, but due to noise, the algorithmic depth was much lower.',
  },
  {
    year: 2020,
    aq: 20,
    description: 'Companies like Quantinuum and IonQ begin seriously scaling hardware with intense focus on error correction.',
  },
  {
    year: 2023,
    aq: 29,
    description: 'IonQ Forte pushes the boundary of what trapped ions can achieve without full fault tolerance.',
  },
  {
    year: 2025,
    aq: 36,
    description: 'The current State of the Art. In mid-to-late 2025, Quantinuum hit a massive Quantum Volume record ($2^{23}$), and IonQ demonstrated world-record 99.99% two-qubit gate fidelities, laying the final groundwork needed to push toward the AQ 100 zone.',
  },
];
