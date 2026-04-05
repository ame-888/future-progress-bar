"use client";

import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine,
  ResponsiveContainer,
} from "recharts";
import { SPACE_EXPLORATION_DATA, SpaceExplorationDataPoint, ECONOMIC_TIPPING_POINT, STARSHIP_GOAL } from "./space-exploration-graph-data";
import { GraphScaleToggle } from "./graph-scale-toggle";

interface CustomTooltipProps {
  active?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload?: any[];
  label?: string;
}

const CustomTooltip = ({ active, payload, label }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload as SpaceExplorationDataPoint;

    return (
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-3 rounded-lg shadow-lg max-w-xs">
        <p className="font-bold text-slate-900 dark:text-white text-lg mb-1">{label}</p>
        <div className="flex flex-col gap-1">
          <p className="text-sm text-slate-600 dark:text-slate-300">
            <span className="font-semibold">{data.grams_per_dollar.toFixed(2)}</span> grams/$
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            (~${data.cost_per_kg.toLocaleString()}/kg)
          </p>
          {data.event && (
            <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 italic">
              {data.event}
            </p>
          )}
        </div>
      </div>
    );
  }
  return null;
};

const formatYAxisTick = (value: number) => {
  if (value === 100) return '100';
  if (value === 10) return '10';
  if (value === 1) return '1';
  if (value === 0.1) return '0.1';
  if (value === 0.01) return '0.01';
  return value.toString();
};

export function SpaceExplorationGraph() {
  const [isLogScale, setIsLogScale] = useState(true);

  const scaleType = isLogScale ? "log" : "linear";
  const yAxisDomain = isLogScale ? [0.01, 100] : [0, 100];
  const ticks = isLogScale
    ? [0.01, 0.1, 1, 10, 100]
    : [0, 25, 50, 75, 100];

  return (
    <div className="w-full mb-8 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden bg-white dark:bg-slate-900/50 shadow-sm">
      <div className="p-4 md:p-6 border-b border-slate-200 dark:border-slate-800 flex justify-between items-start gap-4">
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            Maximum Commercial Efficiency to LEO
            <span className="text-xs font-semibold px-2 py-1 bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400 rounded-full uppercase tracking-wider">
              North Star
            </span>
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Grams of payload delivered to Low Earth Orbit per US Dollar.
          </p>
        </div>
        <div className="flex-shrink-0 mt-1">
          <GraphScaleToggle isLogScale={isLogScale} onToggle={setIsLogScale} />
        </div>
      </div>

      <div className="p-4 md:p-6 h-[400px] w-full relative">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={SPACE_EXPLORATION_DATA}
            margin={{
              top: 30,
              right: 30,
              left: 20,
              bottom: 10,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" opacity={0.2} />
            <XAxis
              dataKey="year"
              stroke="#64748b"
              tick={{ fill: '#64748b' }}
              tickMargin={10}
              domain={[2000, 2026]}
              type="number"
              allowDecimals={false}
            />
            <YAxis
              scale={scaleType}
              domain={yAxisDomain}
              ticks={ticks}
              stroke="#64748b"
              tick={{ fill: '#64748b' }}
              tickFormatter={formatYAxisTick}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#94a3b8', strokeWidth: 1, strokeDasharray: '5 5' }} />

            {/* Economic Tipping Point */}
            <ReferenceLine
              y={ECONOMIC_TIPPING_POINT}
              stroke="#94a3b8"
              strokeWidth={2}
              strokeDasharray="4 4"
              label={{
                position: 'top',
                value: 'Economic Tipping Point (10g/$)',
                fill: '#94a3b8',
                fontSize: 12,
                fontWeight: 'bold'
              }}
            />

            {/* Starship Goal */}
            <ReferenceLine
              y={STARSHIP_GOAL}
              stroke="#fbbf24"
              strokeWidth={2}
              strokeDasharray="4 4"
              label={{
                position: 'top',
                value: 'Starship Goal (100g/$)',
                fill: '#fbbf24',
                fontSize: 12,
                fontWeight: 'bold'
              }}
            />

            <Line
              type="linear"
              dataKey="grams_per_dollar"
              stroke="#0ea5e9"
              strokeWidth={3}
              dot={{ r: 4, fill: '#0ea5e9', strokeWidth: 2, stroke: '#ffffff' }}
              activeDot={{ r: 6, fill: '#0284c7', strokeWidth: 2, stroke: '#ffffff' }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
