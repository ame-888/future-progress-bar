import React, { useMemo } from "react";
import { MAIN_DOMAINS } from "./progress-table-data";
import { canObservationCompleteThreshold, getGlobalProgress } from "@/lib/progress-utils";

const ERAS = [
  { name: "Stone", symbol: "ST", horizon: "Origins", x: 4, y: 82 },
  { name: "Iron", symbol: "FE", horizon: "Industry", x: 17, y: 70 },
  { name: "Copper", symbol: "CU", horizon: "Networks", x: 30, y: 75 },
  { name: "Bronze", symbol: "BR", horizon: "Scale", x: 43, y: 58 },
  { name: "Silver", symbol: "AG", horizon: "Abundance", x: 57, y: 49 },
  { name: "Gold", symbol: "AU", horizon: "Mastery", x: 70, y: 35 },
  { name: "Platinum", symbol: "PT", horizon: "Transcendence", x: 83, y: 25 },
  { name: "Antimatter", symbol: "AM", horizon: "The frontier", x: 96, y: 9 },
];

export function MainProgressBar() {
  const { completed, totals, totalNorthStars, achieved, possible } = useMemo(() => {
    const completed = Array(8).fill(0) as number[];
    const totals = Array(8).fill(0) as number[];
    let totalNorthStars = 0;
    MAIN_DOMAINS.forEach((domain) => domain.subdomains.forEach((subdomain) => {
      if (subdomain.northStar) totalNorthStars++;
      subdomain.measurements.forEach((measurement) => measurement.levels.forEach((level) => {
        if (level.level < 1 || level.level > 7) return;
        totals[level.level]++;
        if (canObservationCompleteThreshold(measurement, level)) completed[level.level]++;
      }));
    }));
    return { completed, totals, totalNorthStars, ...getGlobalProgress(MAIN_DOMAINS) };
  }, []);

  return (
    <section className="civilization-map" aria-labelledby="civilization-heading">
      <div className="civilization-map__header">
        <div>
          <p className="atlas-kicker">The human ascent</p>
          <h2 id="civilization-heading">A mountain still being climbed</h2>
          <p>Thousands of discoveries, one shared trajectory—from tools shaped by hand to control over matter itself.</p>
        </div>
        <div className="civilization-map__score" aria-label={`Future Progress Bar index: ${achieved} of ${possible} era milestones reached`} title="A project-defined index in which each active measurement contributes one milestone at each era level. It is a comparative tracking framework, not an objective percentage of civilization completion.">
          <strong>{achieved}<span>/{possible}</span></strong><small>Future Progress Bar index — milestones reached</small>
          <p>A project-defined comparative tracking framework, not an objective percentage of civilization completion.</p>
        </div>
      </div>

      <div className="era-landscape" role="list" aria-label="Civilization eras">
        <svg className="era-landscape__path" viewBox="0 0 1000 270" preserveAspectRatio="none" aria-hidden="true">
          <path className="era-landscape__terrain" d="M0 245 C80 238 110 193 175 199 S255 227 310 207 S380 159 440 165 S525 146 575 135 S650 111 705 96 S785 79 835 66 S925 39 1000 13 L1000 270 L0 270Z" />
          <path className="era-landscape__route" pathLength="100" d="M20 228 C95 225 115 188 175 192 S257 217 310 198 S383 151 440 157 S525 137 575 126 S650 102 705 88 S784 70 835 57 S925 30 980 15" />
        </svg>
        {ERAS.map((era, index) => {
          const percentage = totals[index] ? Math.round((completed[index] / totals[index]) * 100) : 0;
          return (
            <div className={`era-waypoint era-waypoint--${index}`} style={{ left: `${era.x}%`, top: `${era.y}%` }} role="listitem" key={era.name}>
              <span className="era-waypoint__node"><i style={{ "--completion": `${percentage}%` } as React.CSSProperties}>{era.symbol}</i></span>
              <div className="era-waypoint__label"><small>L{index} · {percentage}%</small><strong>{era.name}</strong><em>{era.horizon}</em></div>
            </div>
          );
        })}
        <div className="north-star-node"><span>✦</span><div><small>Beyond the mapped path</small><strong>{totalNorthStars} North Stars</strong><p>Contextual long-run graphs; they do not add to the score.</p></div></div>
      </div>
    </section>
  );
}
