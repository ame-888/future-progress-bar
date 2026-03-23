import { ModeToggle } from "@/components/mode-toggle";
import { ProgressTable } from "@/components/progress-table";
import { MissionButton } from "@/components/mission-button";

export default function Home() {
  return (
    <main className="flex-1 w-full bg-slate-50 dark:bg-slate-950 transition-colors duration-200">
      <MissionButton />
      <ModeToggle />
      <div className="flex flex-col items-center justify-center min-h-screen py-12 md:py-24">
        <ProgressTable />
      </div>
    </main>
  );
}
