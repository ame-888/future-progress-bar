export type RetiredMeasurement = {
  id: string;
  title: string;
  retiredOn: string;
  reason: string;
  replacementId?: string;
  replacementTitle?: string;
};

const RETIRED_ON = "2026-08-10";

export const RETIRED_MEASUREMENTS: RetiredMeasurement[] = [
  {
    id: "robotics-4",
    title:
      "Global Share of Humanoid Robots acting as independent police officers or security guards",
    retiredOn: RETIRED_ON,
    reason:
      "Robot bodies are not equivalent to full-time jobs or labor hours, so dividing them by a human workforce did not measure a share of roles cleanly.",
    replacementId: "robotics-police-countries",
    replacementTitle:
      "Countries with Humanoid Robots in Ordinary Independent Police or Security Duty",
  },
  {
    id: "qc-1",
    title: "Physical Qubit Count",
    retiredOn: RETIRED_ON,
    reason:
      "The scalar mixed fundamentally different architectures, including direct comparison of annealing and universal gate-model qubits.",
    replacementId: "qc-gate-model-physical-qubits",
    replacementTitle:
      "Maximum Physical Qubits in an Operational Universal Gate-Model Quantum Computer",
  },
  {
    id: "qc-2",
    title: "Two-Qubit Gate Fidelity - Physical Qubits",
    retiredOn: RETIRED_ON,
    reason:
      "A best specially selected pair can be cherry-picked and does not adequately characterize processor-wide quality across hardware and protocols.",
    replacementId: "qc-system-two-qubit-fidelity",
    replacementTitle: "Best Processor-Wide Average Two-Qubit Gate Fidelity",
  },
  {
    id: "superconductor-2",
    title: "Highest Critical Current Density",
    retiredOn: RETIRED_ON,
    reason:
      "The unrestricted record mixed films and wires, temperatures, fields, orientations, geometries, and superconducting-layer definitions.",
    replacementId: "superconductor-je-20k-20t",
    replacementTitle:
      "Maximum Engineering Current Density of Commercial REBCO Wire at 20 K, 20 T",
  },
  {
    id: "superconductor-4",
    title: "Continuous Piece Length (HTS Tape)",
    retiredOn: RETIRED_ON,
    reason:
      "Requiring public dense full-length Ic mapping made genuine commercial kilometer-class conductor unknown when private manufacturing QC was not published.",
    replacementId: "superconductor-commercial-piece-length",
    replacementTitle:
      "Maximum Published Continuous Piece Length of Commercial Production-Scale 2G HTS Tape",
  },
  {
    id: "vr-3",
    title: "Longest continuous session in a VR environment",
    retiredOn: RETIRED_ON,
    reason:
      "The result primarily measured human endurance, record rules, and documentation rather than improvement in VR technology.",
    replacementId: "vr-commercial-ppd",
    replacementTitle:
      "Maximum Native Central Pixel Density in a Shipping VR Headset (≥100° Horizontal FOV)",
  },
  {
    id: "vr-6",
    title: "Maximum Concurrent Users in a Single, Un-sharded VR Instance",
    retiredOn: RETIRED_ON,
    reason:
      "It rewarded one backend architecture even though distributed simulation may better support a seamless shared-world experience.",
    replacementId: "vr-shared-world-concurrency",
    replacementTitle:
      "Maximum Officially Supported Users in One Mutually Interactive VR World/Session",
  },
];
