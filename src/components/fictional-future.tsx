import React from "react";
import { BookOpenIcon } from "@heroicons/react/24/solid";

interface FictionalFutureData {
  title: string;
  points: string[];
}

const FICTIONAL_FUTURES: Record<string, FictionalFutureData> = {
  ai: {
    title: "The Culture Series (Iain M. Banks)",
    points: [
      "Imagine a post-scarcity society managed by hyper-intelligent, benevolent AIs called 'Minds' where humans live in absolute abundance.",
      "The 'Minds' are vastly more intelligent than humans but choose to cooperate and curate utopian environments for biological life.",
      "As real-world AI advances towards AGI, researchers aim for this kind of beneficial alignment—creating superintelligence that actively works to maximize human flourishing."
    ]
  },
  bci: {
    title: "Black Mirror: San Junipero",
    points: [
      "Features a simulated reality where human consciousness can be uploaded, allowing people to live vibrant, painless lives even after physical death.",
      "The technology relies on advanced neural interfaces seamlessly translating digital worlds into sensory experiences.",
      "Modern BCI research is taking the first steps by reading neural signals to restore movement or sight, paving the way toward eventual high-bandwidth mind-to-machine connection."
    ]
  },
  "cultured-meat": {
    title: "Star Trek: The Next Generation",
    points: [
      "The iconic 'Replicator' can synthesize any meal perfectly on command without harming a single animal.",
      "It represents a future where delicious, nutritious food is universally accessible, eliminating the need for traditional agriculture.",
      "Cultured meat is our real-world stepping stone—growing real animal tissue from cells, promising a clean, cruelty-free, and sustainable global food supply."
    ]
  },
  robotics: {
    title: "Bicentennial Man (Isaac Asimov)",
    points: [
      "Follows an android named Andrew who gradually upgrades himself to become more human over two centuries.",
      "It highlights a beautiful symbiosis between humans and robots, exploring themes of empathy, creativity, and self-determination.",
      "Today's robotics, combined with advanced LLMs, are increasingly capable of understanding nuance, hinting at a future of highly empathetic, versatile robotic companions."
    ]
  },
  "self-driving-car": {
    title: "Back to the Future Part II",
    points: [
      "Features incredibly smart, flying DeLoreans and automated highway systems that make travel effortless.",
      "The vision is one of perfect safety and efficiency, where traffic jams and accidents are relics of the past.",
      "While we might not have flying cars just yet, autonomous vehicle technology is rapidly approaching the point where human driving could become a purely recreational activity."
    ]
  },
  superconductor: {
    title: "Black Panther",
    points: [
      "Wakanda runs on 'Vibranium', a fictional material that seemingly acts as the ultimate room-temperature superconductor, storing and releasing infinite energy without loss.",
      "It enables levitating trains, frictionless transport, and incredible power grids.",
      "Discovering a true room-temperature, ambient-pressure superconductor in the real world would revolutionize our power grid, making MRI machines cheap, and enabling widespread magnetic levitation."
    ]
  },
  "nuclear-fusion": {
    title: "Iron Man",
    points: [
      "Tony Stark's 'Arc Reactor' is essentially a miniaturized, clean nuclear fusion reactor powering his suit and towers.",
      "It provides practically limitless, zero-emission energy from a tiny package.",
      "Real-world fusion reactors (like ITER and commercial startups) are pushing to recreate the power of the sun on Earth, promising humanity a future of truly infinite, clean baseline energy."
    ]
  },
  "space-exploration": {
    title: "Dr. Stone",
    points: [
      "A celebration of human ingenuity and the unwavering drive to rebuild civilization and reach the stars through sheer scientific progression.",
      "It demonstrates that with knowledge and cooperation, humanity can overcome any disaster and venture into the unknown.",
      "Current space programs are aiming to establish permanent human presence on the Moon and Mars, embodying that exact spirit of pushing the ultimate frontier."
    ]
  },
  lev: {
    title: "The Mars Trilogy (Kim Stanley Robinson)",
    points: [
      "Characters receive 'gerontological treatments' that continuously repair cellular damage, vastly extending their lifespans and healthspans.",
      "This allows individuals to live for centuries, dedicating their long lives to terraforming entire planets and vast multi-generational projects.",
      "Real Longevity Escape Velocity (LEV) research aims to do exactly this: repair aging at the cellular level so fast that we gain more than a year of life expectancy for every year we live."
    ]
  },
  "quantum-computing": {
    title: "Steins;Gate",
    points: [
      "Explores manipulating timelines and processing information across different realities, akin to how quantum computers calculate.",
      "Quantum computers use 'superposition' to process massive amounts of data simultaneously, solving problems that would take classical computers millennia.",
      "While we aren't sending D-Mails to the past, quantum computing will allow us to simulate complex molecules instantly, curing diseases and discovering new materials."
    ]
  },
  vr: {
    title: "Sword Art Online",
    points: [
      "Features 'FullDive' technology that completely intercepts brain signals to create indistinguishable, perfect virtual realities.",
      "Players can taste, touch, and feel entirely new worlds as if they were physically there.",
      "Current VR is getting incredible visual fidelity, and when combined with future non-invasive BCI tech, a true 'FullDive' experience where we can explore infinite digital universes could become reality."
    ]
  }
};

export function FictionalFuture({ domainId }: { domainId: string }) {
  const data = FICTIONAL_FUTURES[domainId];

  if (!data) return null;

  return (
    <div className="mt-8 border-2 border-indigo-200 dark:border-indigo-900/50 rounded-xl overflow-hidden bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 shadow-sm relative">
      {/* Decorative top bar */}
      <div className="h-1.5 w-full bg-gradient-to-r from-indigo-500 to-purple-500"></div>

      <div className="p-6 md:p-8 relative">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex-shrink-0 bg-indigo-100 dark:bg-indigo-900/50 p-2 rounded-lg text-indigo-600 dark:text-indigo-400">
            <BookOpenIcon className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest mb-1">
              Fictional Future
            </h3>
            <h4 className="text-xl md:text-2xl font-extrabold text-slate-900 dark:text-white">
              {data.title}
            </h4>
          </div>
        </div>

        <ul className="space-y-3 text-slate-700 dark:text-slate-300 ml-2 md:ml-4">
          {data.points.map((point, index) => (
            <li key={index} className="flex items-start">
              <span className="text-purple-500 mr-3 mt-1.5 flex-shrink-0">✦</span>
              <span className="leading-relaxed text-sm md:text-base">{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
