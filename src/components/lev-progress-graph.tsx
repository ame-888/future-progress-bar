"use client";

import React, { useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine,
  ResponsiveContainer,
} from "recharts";
import { LEV_DATA_BY_REGION, LevLifespanDataPoint } from "./lev-graph-data";

interface CustomTooltipProps {
  active?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload?: any[];
  label?: string;
  region: string;
}

const CustomTooltip = ({ active, payload, label, region }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload as LevLifespanDataPoint;
    const isPositive = data.lifespanGain >= 0;

    // Only show note for 2022 as requested by the user
    const shouldShowNote = data.year === 2022 && data.note;

    const displayName = region === "World" ? "Global" : region;

    return (
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-3 rounded-lg shadow-lg">
        <p className="font-bold text-slate-900 dark:text-white text-lg mb-1">{label}</p>
        <div className="flex flex-col gap-1">
          <p className="text-sm text-slate-600 dark:text-slate-300">
            <span className="font-semibold">{displayName} Average:</span> {data.average.toFixed(3)} years
          </p>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            <span className="font-semibold">Exact Lifespan Gain:</span>{" "}
            <span className={isPositive ? "text-emerald-600 dark:text-emerald-400 font-bold" : "text-red-600 dark:text-red-400 font-bold"}>
              {isPositive ? "+" : ""}{data.lifespanGain.toFixed(3)} years
            </span>
          </p>
          {shouldShowNote && (
            <p className="text-xs text-amber-600 dark:text-amber-400 mt-1 italic max-w-[200px]">
              {data.note}
            </p>
          )}
        </div>
      </div>
    );
  }
  return null;
};

export function LevProgressGraph() {
  const [selectedRegion, setSelectedRegion] = useState<string>("World");

  const regionOptions = [
    { value: "World", label: "🌍 World" },
    { value: "Brazil", label: "🇧🇷 Brazil" },
    { value: "USA", label: "🇺🇸 USA" },
    { value: "India", label: "🇮🇳 India" },
    { value: "Russia", label: "🇷🇺 Russia" },
    { value: "China", label: "🇨🇳 China" },
  ];

  const currentData = LEV_DATA_BY_REGION[selectedRegion] || LEV_DATA_BY_REGION["World"];

  // Calculate dynamic offset for the split color
  const dataMax = Math.max(...currentData.map((d) => d.lifespanGain));
  const dataMin = Math.min(...currentData.map((d) => d.lifespanGain));

  // The threshold where the color should split (1.0 yr/yr)
  const threshold = 1.0;

  let splitOffset = 0;
  if (dataMax <= threshold) {
    splitOffset = 0;
  } else if (dataMin >= threshold) {
    splitOffset = 1;
  } else {
    // Recharts gradient offsets are calculated from top (0%) to bottom (100%)
    // Top represents dataMax, bottom represents dataMin.
    splitOffset = (dataMax - threshold) / (dataMax - dataMin);
  }

  // Convert to percentage string for the SVG gradient
  const splitPercentage = `${(splitOffset * 100).toFixed(2)}%`;

  const displayName = selectedRegion === "World" ? "global" : selectedRegion;

  return (
    <div className="w-full mb-8 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden bg-white dark:bg-slate-900/50 shadow-sm">
      <div className="p-4 md:p-6 border-b border-slate-200 dark:border-slate-800 flex flex-col md:flex-row md:justify-between md:items-start gap-4">
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            Annual Increase in Lifespan
            <span className="text-xs font-semibold px-2 py-1 bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400 rounded-full uppercase tracking-wider">
              North Star
            </span>
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-2xl">
            Tracking the annual increase in {displayName} average lifespan. LEV is achieved when this gain consistently exceeds +1.0 year per year.
          </p>
        </div>
        <div className="flex-shrink-0">
          <select
            value={selectedRegion}
            onChange={(e) => setSelectedRegion(e.target.value)}
            className="bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-pointer outline-none"
          >
            {regionOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="p-4 md:p-6 h-[400px] w-full relative">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={currentData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 10,
            }}
          >
            <defs>
              <linearGradient id="splitColor" x1="0" y1="0" x2="0" y2="1">
                <stop offset={splitPercentage} stopColor="#22c55e" stopOpacity={0.8} />
                <stop offset={splitPercentage} stopColor="#ef4444" stopOpacity={0.8} />
              </linearGradient>
              <linearGradient id="splitColorLine" x1="0" y1="0" x2="0" y2="1">
                <stop offset={splitPercentage} stopColor="#16a34a" />
                <stop offset={splitPercentage} stopColor="#dc2626" />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" opacity={0.2} />
            <XAxis
              dataKey="year"
              stroke="#64748b"
              tick={{ fill: '#64748b' }}
              tickMargin={10}
            />
            <YAxis
              domain={[-2.0, 2.0]}
              stroke="#64748b"
              tick={{ fill: '#64748b' }}
              tickFormatter={(value) => `${value > 0 ? '+' : ''}${value.toFixed(1)}`}
            />
            <Tooltip content={<CustomTooltip region={selectedRegion} />} cursor={{ stroke: '#94a3b8', strokeWidth: 1, strokeDasharray: '5 5' }} />

            {/* Zero line */}
            <ReferenceLine y={0} stroke="#64748b" strokeOpacity={0.5} />

            {/* LEV Threshold (Golden Line) */}
            <ReferenceLine
              y={1.0}
              stroke="#fbbf24"
              strokeWidth={2}
              strokeDasharray="4 4"
              label={{
                position: 'top',
                value: 'LEV Threshold (+1.0 yr/yr)',
                fill: '#fbbf24',
                fontSize: 12,
                fontWeight: 'bold'
              }}
            />

            <Area
              type="monotone"
              dataKey="lifespanGain"
              stroke="url(#splitColorLine)"
              strokeWidth={3}
              fill="url(#splitColor)"
              dot={{ r: 4, fill: '#6366f1', strokeWidth: 2, stroke: '#ffffff' }}
              activeDot={{ r: 6, fill: '#4f46e5', strokeWidth: 2, stroke: '#ffffff' }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
