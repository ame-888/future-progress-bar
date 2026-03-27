"use client";

import { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";

export function DisclaimerBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-amber-100 dark:bg-amber-900/40 text-amber-900 dark:text-amber-200 px-4 py-2 flex items-center justify-between text-sm shadow-sm z-50 relative shrink-0">
      <div className="flex-1 text-center font-medium">
        This website is still under construction. Any information present here may be incomplete or inaccurate.
      </div>
      <button
        type="button"
        className="-mr-1 flex p-1 hover:bg-amber-200 dark:hover:bg-amber-800/60 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500"
        onClick={() => setIsVisible(false)}
        aria-label="Dismiss"
      >
        <XMarkIcon className="h-5 w-5" aria-hidden="true" />
      </button>
    </div>
  );
}
