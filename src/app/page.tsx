import { ModeToggle } from "@/components/mode-toggle";
import { ProgressTable } from "@/components/progress-table";
import { GamificationExplanation } from "@/components/gamification-explanation";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="relative flex-1 w-full bg-slate-50 dark:bg-slate-950 transition-colors duration-200">
      <ModeToggle />
      <div className="flex flex-col items-center justify-center min-h-screen py-4 md:py-8">
        <Suspense fallback={<div className="w-full h-96 flex items-center justify-center text-slate-500">Loading domains...</div>}>
          <ProgressTable />
        </Suspense>
        <GamificationExplanation />
      </div>
    </main>
  );
}
