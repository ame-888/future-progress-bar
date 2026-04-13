"use client";

import { useEffect, useState } from "react";

export function DateWidget() {
  const [dateStr, setDateStr] = useState<string | null>(null);

  useEffect(() => {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
    const yyyy = today.getFullYear();

    setDateStr(`TODAY IS ${dd}/${mm}/${yyyy}`);
  }, []);

  if (!dateStr) return null;

  return (
    <div className="fixed top-2 right-2 z-[100] bg-black/80 text-white text-xs font-mono px-2 py-1 rounded shadow-lg pointer-events-none select-none">
      {dateStr}
    </div>
  );
}
