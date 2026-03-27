"use client";

import { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";

export function DisclaimerBanner() {
  return (
    <div className="bg-amber-100 dark:bg-amber-900/40 text-amber-900 dark:text-amber-200 px-4 py-2 flex items-center justify-between text-sm shadow-sm z-50 relative shrink-0">
      <div className="flex-1 text-center font-medium">
        This website is still under construction. Any information present here may be incomplete or inaccurate.
      </div>
    </div>
  );
}
