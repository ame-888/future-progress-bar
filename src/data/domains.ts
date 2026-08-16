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
        "description": "Road vehicles with automated-driving systems, described consistently by their SAE automation level and operational design domain rather than a generic self-driving label.",
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
        "description": "Tracks population and frontier-age indicators relevant to longevity and the longevity-escape-velocity hypothesis; these indicators do not by themselves establish that escape velocity has been reached.",
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
        "description": "Computing systems that use quantum effects to pursue advantages on selected problems; speedups depend on the algorithm, hardware, error rates, and comparison method.",
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
        "description": "Brain-computer interfaces exchange information with neural activity by recording signals, stimulating neural tissue, or both.",
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
        "description": "Animal tissue produced by cultivating cells rather than raising and slaughtering a whole animal; environmental outcomes depend on energy, inputs, process, and scale.",
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
        "description": "The process that powers the sun, merging atomic nuclei and releasing energy. We track the technical and commercial evidence needed for practical electricity generation, without assuming unlimited supply or zero impact.",
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
