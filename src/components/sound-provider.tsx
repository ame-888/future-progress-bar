"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type SoundContextType = {
  soundEnabled: boolean;
  toggleSound: () => void;
  playSound: (url: string) => void;
};

const SoundContext = createContext<SoundContextType | undefined>(undefined);

export function SoundProvider({ children }: { children: React.ReactNode }) {
  const [soundEnabled, setSoundEnabled] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem("soundEnabled");
    if (saved !== null) {
      setSoundEnabled(JSON.parse(saved));
    }
  }, []);

  const toggleSound = () => {
    setSoundEnabled((prev) => {
      const next = !prev;
      localStorage.setItem("soundEnabled", JSON.stringify(next));
      return next;
    });
  };

  const playSound = (url: string) => {
    if (soundEnabled) {
      const audio = new Audio(url);
      audio.play().catch((e) => console.error("Audio playback failed", e));
    }
  };

  return (
    <SoundContext.Provider value={{ soundEnabled, toggleSound, playSound }}>
      {children}
    </SoundContext.Provider>
  );
}

export function useSound() {
  const context = useContext(SoundContext);
  if (context === undefined) {
    throw new Error("useSound must be used within a SoundProvider");
  }
  return context;
}
