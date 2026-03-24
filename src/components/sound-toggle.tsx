"use client";

import * as React from "react";
import { SpeakerWaveIcon, SpeakerXMarkIcon } from "@heroicons/react/24/outline";
import { useSound } from "./sound-provider";

export function SoundToggle() {
  const { soundEnabled, toggleSound } = useSound();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        className="fixed top-4 right-16 p-2 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-slate-100 transition-colors hover:bg-slate-300 dark:hover:bg-slate-700 z-50 focus:outline-none focus:ring-2 focus:ring-slate-400 dark:focus:ring-slate-500 cursor-pointer"
        aria-label="Toggle sound"
      >
        <div className="h-5 w-5" />
      </button>
    );
  }

  return (
    <button
      onClick={toggleSound}
      className="fixed top-4 right-16 p-2 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-slate-100 transition-colors hover:bg-slate-300 dark:hover:bg-slate-700 z-50 focus:outline-none focus:ring-2 focus:ring-slate-400 dark:focus:ring-slate-500 cursor-pointer"
      aria-label="Toggle sound"
    >
      {soundEnabled ? (
        <SpeakerWaveIcon className="h-5 w-5" />
      ) : (
        <SpeakerXMarkIcon className="h-5 w-5" />
      )}
      <span className="sr-only">Toggle sound</span>
    </button>
  );
}
