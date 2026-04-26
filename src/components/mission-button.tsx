"use client";

import React, { useState } from "react";

export function MissionButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="absolute top-4 left-4 z-50 flex flex-col gap-2">
        <button
          onClick={() => setIsOpen(true)}
          className="px-4 py-2 rounded-md bg-indigo-600 hover:bg-indigo-700 text-white font-semibold transition-colors shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer text-sm"
        >
          OUR MISSION
        </button>
        <button
          onClick={() => {}}
          className="px-4 py-2 rounded-md bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-semibold transition-colors shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-400 cursor-pointer text-sm"
        >
          SEND SUGGESTION
        </button>
        <button
          onClick={() => {}}
          className="px-4 py-2 rounded-md bg-red-600 hover:bg-red-700 text-white font-semibold transition-colors shadow-md focus:outline-none focus:ring-2 focus:ring-red-500 cursor-pointer text-sm"
        >
          REPORT ERROR
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4 transition-opacity">
          <div className="bg-white dark:bg-slate-900 rounded-xl shadow-xl max-w-sm w-full p-6 relative overflow-hidden">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
              Our Mission
            </h2>
            <div className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed space-y-4">
              <p>
                This site&apos;s intent is keeping track of innovation and humanity&apos;s technological and biological breakthroughs.
              </p>
              <p>
                We monitor critical domains that will shape our future, including:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-sm h-48 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-slate-300 dark:scrollbar-thumb-slate-600">
                <li><strong>AI (Artificial Intelligence)</strong>: The path to AGI, ASI and beyond.</li>
                <li><strong>Robotics</strong>: Automating physical labor and enhancing human capabilities.</li>
                <li><strong>Self-Driving Cars</strong>: Autonomous navigation redefining global transportation.</li>
                <li><strong>LEV (Longevity Escape Velocity)</strong>: Extending human lifespan, healthspan, and conquering aging.</li>
                <li><strong>Space Exploration</strong>: Humanity&apos;s journey to becoming a multi-planetary species.</li>
                <li><strong>Quantum Computing</strong>: Harnessing quantum mechanics for unprecedented computational power.</li>
                <li><strong>Superconductors</strong>: Enabling lossless energy transmission and advanced levitation.</li>
                <li><strong>BCI (Brain-Computer Interfaces)</strong>: Merging human minds with technology for augmented cognition.</li>
                <li><strong>Mind Upload</strong>: Digital preservation and transferring of human consciousness.</li>
                <li><strong>VR (Virtual Reality)</strong>: Immersive, full-dive digital worlds indistinguishable from reality.</li>
                <li><strong>Cultured Meat</strong>: Sustainable, cruelty-free cellular agriculture for a clean food supply.</li>
                <li><strong>Nuclear Fusion</strong>: Boundless, clean, and safe energy mimicking the power of stars.</li>
              </ul>
            </div>
            <div className="flex justify-end">
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 dark:focus:ring-slate-500 cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
