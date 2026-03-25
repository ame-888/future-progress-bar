export function GamificationExplanation() {
  return (
    <div className="w-full max-w-4xl mx-auto p-4 md:p-6 lg:p-8 mt-4 md:mt-8">
      <div className="bg-slate-100 dark:bg-slate-900 rounded-xl p-6 md:p-8 border border-slate-200 dark:border-slate-800">
        <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-4">
          How it works
        </h2>
        <div className="space-y-4 text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed">
          <p>
            This progress board tracks humanity's biggest technological and biological breakthroughs. Rather than just showing the current state, each metric is <strong>gamified</strong> into actionable milestones.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong className="text-slate-800 dark:text-slate-200">Levels &amp; Goals:</strong> Each measurement has a series of target "Levels." A progress bar shows exactly how close we are to reaching the next milestone.
            </li>
            <li>
              <strong className="text-slate-800 dark:text-slate-200">Domains:</strong> Switch between tabs at the top to see progress in different frontier technologies, such as Longevity Escape Velocity (LEV), AI, Nuclear Fusion, and Cultured Meat.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
