
"use client";

import { useState, useEffect } from "react";
import { MAIN_DOMAINS } from "./progress-table-data";
import { formatDateStr } from "./progress-table";

type WarningItem = {
  id: string;
  name: string;
  dateStr: string;
  monthsOld: number;
};

export function DigitalClock() {
  const [mounted, setMounted] = useState(false);
  const [time, setTime] = useState<Date | null>(null);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
    setTime(new Date());

    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  if (!mounted || !time) {
    return <div className="h-10 shrink-0"></div>;
  }

  const formattedTime = time.toLocaleString(undefined, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  const redItems: WarningItem[] = [];
  const orangeItems: WarningItem[] = [];
  const yellowItems: WarningItem[] = [];
  const greenItems: WarningItem[] = [];

  const checkDate = (id: string, name: string, dateStr: string | undefined) => {
    if (!dateStr) return;
    const parts = dateStr.split('-');
    if (parts.length !== 3) return;
    const itemDate = new Date(parseInt(parts[0], 10), parseInt(parts[1], 10) - 1, parseInt(parts[2], 10));
    const diffTime = time.getTime() - itemDate.getTime();
    const diffDays = diffTime / (1000 * 60 * 60 * 24);
    const monthsOld = diffDays / 30; // Approx months

    const warningItem: WarningItem = {
      id,
      name,
      dateStr,
      monthsOld
    };

    if (monthsOld > 6) {
      redItems.push(warningItem);
    } else if (monthsOld > 3 && monthsOld <= 6) {
      orangeItems.push(warningItem);
    } else if (monthsOld >= 1 && monthsOld <= 3) {
      yellowItems.push(warningItem);
    } else if (monthsOld < 1) {
      greenItems.push(warningItem);
    }
  };

  MAIN_DOMAINS.forEach(domain => {
    domain.subdomains.forEach(sub => {
      if (sub.northStar?.lastUpdated) {
        checkDate(`north-star-${sub.id}`, sub.northStar.title, sub.northStar.lastUpdated);
      }
      sub.measurements.forEach(m => {
        if (m.lastUpdated) {
          checkDate(m.id, m.title, m.lastUpdated);
        }
      });
    });
  });

  const handleJump = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const renderTooltip = (items: WarningItem[]) => {
    if (items.length === 0) return null;
    return (
      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-64 max-h-64 overflow-y-auto bg-slate-900 dark:bg-slate-800 text-slate-100 p-2 rounded shadow-xl text-xs opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none group-hover:pointer-events-auto z-50">
        <ul className="space-y-2">
          {items.map(item => (
            <li key={item.id} className="cursor-pointer hover:text-indigo-300 transition-colors" onClick={() => handleJump(item.id)}>
              <span className="font-semibold block">{item.name}</span>
              <span className="text-[10px] text-slate-400">Last Updated on {formatDateStr(item.dateStr)}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  const renderGreenTooltip = (items: WarningItem[]) => {
    if (items.length === 0) return null;

    // Find the item with the oldest last updated date (max monthsOld)
    const oldestItem = items.reduce((oldest, current) => {
      return current.monthsOld > oldest.monthsOld ? current : oldest;
    }, items[0]);

    return (
      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-64 max-h-64 overflow-y-auto bg-slate-900 dark:bg-slate-800 text-slate-100 p-2 rounded shadow-xl text-xs opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none group-hover:pointer-events-auto z-50">
        <ul className="space-y-2">
          <li key={oldestItem.id} className="cursor-pointer hover:text-indigo-300 transition-colors" onClick={() => handleJump(oldestItem.id)}>
            <span className="font-semibold block text-green-400 mb-1">Oldest updated item:</span>
            <span className="font-semibold block">{oldestItem.name}</span>
            <span className="text-[10px] text-slate-400">Last Updated on {formatDateStr(oldestItem.dateStr)}</span>
          </li>
        </ul>
      </div>
    );
  };

  return (
    <div className="bg-slate-100 dark:bg-slate-800/40 text-slate-700 dark:text-slate-300 px-4 py-2 flex items-center justify-center gap-4 text-sm shadow-sm z-50 relative shrink-0 border-b border-slate-200 dark:border-slate-800 font-mono">
      <span className="font-medium tracking-wide">
        {formattedTime}
      </span>

      <div className="flex items-center gap-2">
        {redItems.length > 0 && (
          <div className="relative group flex items-center justify-center">
            <span className="px-1.5 py-0.5 rounded text-xs font-bold bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 cursor-default border border-red-200 dark:border-red-800">
              🟥 {redItems.length}
            </span>
            {renderTooltip(redItems)}
          </div>
        )}

        {orangeItems.length > 0 && (
          <div className="relative group flex items-center justify-center">
            <span className="px-1.5 py-0.5 rounded text-xs font-bold bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400 cursor-default border border-orange-200 dark:border-orange-800">
              🟧 {orangeItems.length}
            </span>
            {renderTooltip(orangeItems)}
          </div>
        )}

        {yellowItems.length > 0 && (
          <div className="relative group flex items-center justify-center">
            <span className="px-1.5 py-0.5 rounded text-xs font-bold bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400 cursor-default border border-yellow-200 dark:border-yellow-800">
              🟨 {yellowItems.length}
            </span>
            {renderTooltip(yellowItems)}
          </div>
        )}

        {greenItems.length > 0 && (
          <div className="relative group flex items-center justify-center">
            <span className="px-1.5 py-0.5 rounded text-xs font-bold bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 cursor-default border border-green-200 dark:border-green-800">
              🟩 {greenItems.length}
            </span>
            {renderGreenTooltip(greenItems)}
          </div>
        )}
      </div>
    </div>
  );
}
