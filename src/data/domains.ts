export const DOMAIN_STRUCTURE = [
  {
    "id": "automation",
    "name": "AUTOMATION",
    "subdomains": [
      {
        "id": "ai",
        "name": "AI",
        "description": "Stands for Artificial Intelligence, focusing on creating systems capable of human-level or superhuman reasoning, creativity, and problem-solving.",
        "measurementIds": [
          "ai-millennium-problems",
          "ai-exclusively-professors",
          "ai-led-companies",
          "ai-led-countries-1"
        ]
      },
      {
        "id": "robotics",
        "name": "ROBOTICS",
        "description": "The engineering of machines capable of carrying out complex physical tasks autonomously or semi-autonomously in unstructured environments.",
        "measurementIds": [
          "robotics-1",
          "robotics-2",
          "robotics-police-countries",
          "robotics-3"
        ]
      },
      {
        "id": "self-driving-car",
        "name": "SELF-DRIVING CAR",
        "description": "Vehicles equipped with sensors and AI that can navigate and operate safely without human intervention across all driving conditions.",
        "measurementIds": [
          "self-driving-car-2",
          "self-driving-car-3",
          "self-driving-car-1",
          "self-driving-car-4"
        ]
      }
    ]
  },
  {
    "id": "civilization",
    "name": "CIVILIZATION",
    "subdomains": [
      {
        "id": "lev",
        "name": "LEV",
        "description": "Stands for Longevity Escape Velocity, the point at which life expectancy increases longer than the time that is passing, effectively meaning humans can theoretically live indefinitely.",
        "measurementIds": [
          "lev-1",
          "lev-2",
          "lev-3",
          "lev-4"
        ]
      },
      {
        "id": "space-exploration",
        "name": "SPACE EXPLORATION",
        "description": "The physical exploration of outer space, aiming to establish permanent human presence beyond Earth and utilize extraterrestrial resources.",
        "measurementIds": [
          "space-1",
          "space-moon-pop",
          "space-mars-pop",
          "space-2"
        ]
      }
    ]
  },
  {
    "id": "hardware",
    "name": "HARDWARE",
    "subdomains": [
      {
        "id": "quantum-computing",
        "name": "QUANTUM COMPUTING",
        "description": "A new paradigm of computation utilizing quantum mechanics to solve problems exponentially faster than classical computers, opening doors to advanced materials, chemistry, and cryptography.",
        "measurementIds": [
          "qc-gate-model-physical-qubits",
          "qc-system-two-qubit-fidelity",
          "qc-3",
          "qc-4"
        ]
      },
      {
        "id": "superconductor",
        "name": "SUPERCONDUCTOR",
        "description": "Materials that conduct electricity with zero resistance. We are specifically tracking the race toward room-temperature, ambient-pressure superconductors.",
        "measurementIds": [
          "superconductor-1",
          "superconductor-je-20k-20t",
          "superconductor-3",
          "superconductor-commercial-piece-length"
        ]
      }
    ]
  },
  {
    "id": "neuro",
    "name": "NEURO",
    "subdomains": [
      {
        "id": "bci",
        "name": "BCI",
        "description": "Stands for Brain-Machine Interface, a piece of tech that directly communicates with the human brain, capable of receiving signals, sending them, or sometimes both.",
        "measurementIds": [
          "bci-1",
          "bci-2",
          "bci-3",
          "bci-4"
        ]
      },
      {
        "id": "mind-upload",
        "name": "MIND UPLOAD",
        "description": "A tech that's being developed by mapping the brain, in order to one day simulate it.",
        "measurementIds": [
          "mind-upload-price-1",
          "mind-upload-adoption-1",
          "mind-upload-adoption-2",
          "mind-upload-1"
        ]
      },
      {
        "id": "vr",
        "name": "VR",
        "description": "Stands for Virtual Reality, immersive digital environments. We focus on true 'Full Dive' VR capabilities involving direct neural stimulation.",
        "measurementIds": [
          "vr-5",
          "vr-commercial-ppd",
          "vr-4",
          "vr-shared-world-concurrency"
        ]
      }
    ]
  },
  {
    "id": "sustainability",
    "name": "SUSTAINABILITY",
    "subdomains": [
      {
        "id": "cultured-meat",
        "name": "CULTURED MEAT",
        "description": "Real meat produced by cultivating animal cells directly, eliminating the need to raise and slaughter animals while significantly reducing environmental impact.",
        "measurementIds": [
          "cultured-meat-1",
          "cultured-meat-3",
          "cultured-meat-2",
          "cultured-meat-4"
        ]
      },
      {
        "id": "nuclear-fusion",
        "name": "NUCLEAR FUSION",
        "description": "The process that powers the sun, merging atomic nuclei to release massive amounts of clean, boundless energy. We track the race to make it a practical power source on Earth.",
        "measurementIds": [
          "fusion-1",
          "fusion-2",
          "fusion-3",
          "fusion-4"
        ]
      }
    ]
  }
] as const;
