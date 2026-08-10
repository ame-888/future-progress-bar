import React, { useMemo } from "react";
import { MAIN_DOMAINS } from "./progress-table-data";

const ERAS = [
  { name: "Stone", symbol: "ST", tone: "era-stone", horizon: "Origins" },
  { name: "Iron", symbol: "FE", tone: "era-iron", horizon: "Industry" },
  { name: "Copper", symbol: "CU", tone: "era-copper", horizon: "Networks" },
  { name: "Bronze", symbol: "BR", tone: "era-bronze", horizon: "Scale" },
  { name: "Silver", symbol: "AG", tone: "era-silver", horizon: "Abundance" },
  { name: "Gold", symbol: "AU", tone: "era-gold", horizon: "Mastery" },
  { name: "Platinum", symbol: "PT", tone: "era-platinum", horizon: "Transcendence" },
  { name: "Antimatter", symbol: "AM", tone: "era-antimatter", horizon: "The frontier" },
];

export function MainProgressBar() {
  const { completed, totals, totalNorthStars } = useMemo(() => {
    const completed = Array(8).fill(0) as number[];
    const totals = Array(8).fill(0) as number[];
    let totalNorthStars = 0;
    MAIN_DOMAINS.forEach((domain) => domain.subdomains.forEach((subdomain) => {
      if (subdomain.northStar) totalNorthStars++;
      subdomain.measurements.forEach((measurement) => {
        totals[0]++; completed[0]++;
        measurement.levels.forEach((level) => {
          if (level.level < 1 || level.level > 7) return;
          totals[level.level]++;
          const reached = measurement.isLowerBetter
            ? measurement.currentValue <= level.goal
            : measurement.currentValue >= level.goal;
          if (reached) completed[level.level]++;
        });
      });
    }));
    return { completed, totals, totalNorthStars };
  }, []);

  const achieved = completed.reduce((sum, value) => sum + value, 0);
  const possible = totals.reduce((sum, value) => sum + value, 0);

  return (
    <section className="civilization-map" aria-labelledby="civilization-heading">
      <div className="civilization-map__header">
        <div>
          <p className="eyebrow">Civilization trajectory · live index</p>
          <h2 id="civilization-heading">From stone tools to an Antimatter Age</h2>
          <p>Every measurement advances one shared map of human capability.</p>
        </div>
        <div className="civilization-map__score" aria-label={`${achieved} of ${possible} era milestones reached`}>
          <strong>{achieved}<span> / {possible}</span></strong>
          <small>ERA MILESTONES REACHED</small>
        </div>
      </div>

      <div className="era-track" role="list" aria-label="Civilization eras">
        {ERAS.map((era, index) => {
          const percentage = totals[index] ? Math.round((completed[index] / totals[index]) * 100) : 0;
          return (
            <div className={`era-node ${era.tone}`} role="listitem" key={era.name}>
              <div className="era-node__line" aria-hidden="true"><span style={{ width: `${percentage}%` }} /></div>
              <div className="era-node__top"><span className="era-node__symbol">{era.symbol}</span><span>L{index}</span></div>
              <strong>{era.name}</strong>
              <em>{era.horizon}</em>
              <small>{completed[index]} / {totals[index]} · {percentage}%</small>
            </div>
          );
        })}
        <div className="north-star-node" role="listitem">
          <span aria-hidden="true">✦</span>
          <div><strong>North Stars</strong><small>0 / {totalNorthStars} frontier achievements</small></div>
        </div>
      </div>
    </section>
  );
}
