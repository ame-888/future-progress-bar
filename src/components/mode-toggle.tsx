"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ModeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        className="fixed top-4 right-4 p-2 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-slate-100 transition-colors hover:bg-slate-300 dark:hover:bg-slate-700 z-50 focus:outline-none focus:ring-2 focus:ring-slate-400 dark:focus:ring-slate-500 cursor-pointer"
        aria-label="Toggle theme"
      >
        <div className="h-5 w-5" />
      </button>
    );
  }

  return (
    <button
      onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
      className="fixed top-4 right-4 p-2 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-slate-100 transition-colors hover:bg-slate-300 dark:hover:bg-slate-700 z-50 focus:outline-none focus:ring-2 focus:ring-slate-400 dark:focus:ring-slate-500 cursor-pointer"
      aria-label="Toggle theme"
    >
      <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute top-2 left-2 h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
