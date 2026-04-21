"use client";

import { useState, useEffect } from "react";

export function DigitalClock() {
  const [mounted, setMounted] = useState(false);
  const [time, setTime] = useState<Date | null>(null);

  useEffect(() => {
    setMounted(true);
    setTime(new Date());

    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  if (!mounted || !time) {
    // Return a placeholder of identical height to avoid layout shift, or nothing
    return <div className="h-10 shrink-0"></div>;
  }

  // Format date and time according to user's timezone implicitly via toLocaleString
  // Example: "Monday, April 20, 2026 at 10:30:45 AM" (formatting depends on locale)
  const formattedTime = time.toLocaleString(undefined, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return (
    <div className="bg-slate-100 dark:bg-slate-800/40 text-slate-700 dark:text-slate-300 px-4 py-2 flex items-center justify-center text-sm shadow-sm z-50 relative shrink-0 border-b border-slate-200 dark:border-slate-800 font-mono">
      <span className="font-medium tracking-wide">
        {formattedTime}
      </span>
    </div>
  );
}
