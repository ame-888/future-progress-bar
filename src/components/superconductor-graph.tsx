"use client";

import React, { useState } from "react";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/solid";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceArea,
  ResponsiveContainer,
} from "recharts";
import {
  SUPERCONDUCTOR_DATA,
  SuperconductorDataPoint,
} from "./superconductor-graph-data";
import { GraphScaleToggle } from "./graph-scale-toggle";

interface CustomTooltipProps {
  active?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload?: any[];
  label?: string;
}

const CustomTooltip = ({ active, payload, label }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload as SuperconductorDataPoint;

    return (
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-3 rounded-lg shadow-lg">
        <p className="font-bold text-slate-900 dark:text-white text-lg mb-1">
          {label}
        </p>
        <div className="flex flex-col gap-1">
          <p className="text-sm text-slate-600 dark:text-slate-300">
            <span className="font-semibold">{data.tc} K</span>
          </p>
          {data.note && (
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-[200px]">
              {data.note}
            </p>
          )}
        </div>
      </div>
    );
  }
  return null;
};

export function SuperconductorGraph({ lastUpdated }: { lastUpdated?: string }) {
  const [isLogScale, setIsLogScale] = useState(false);

  const scaleType = isLogScale ? "log" : "linear";
  const yAxisDomain = isLogScale ? [10, 1000] : [0, 400];
  const ticks = isLogScale ? [10, 100, 1000] : [0, 100, 200, 300, 400];

  return (
    <div className="w-full mb-8 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden bg-white dark:bg-slate-900/50 shadow-sm">
      <div className="p-4 md:p-6 border-b border-slate-200 dark:border-slate-800 flex justify-between items-start gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              Highest critical temperature (Tc) at ambient pressure
              <span className="text-xs font-semibold px-2 py-1 bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400 rounded-full uppercase tracking-wider">
                North Star
              </span>
            </h2>
            <div className="relative group flex items-center">
              <QuestionMarkCircleIcon className="w-5 h-5 text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300 cursor-pointer transition-colors" />
              <div className="absolute left-0 top-full mt-2 w-64 md:w-80 p-3 bg-slate-900/95 dark:bg-slate-800/95 text-slate-100 dark:text-slate-200 text-xs rounded-lg shadow-xl opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 z-50 backdrop-blur-sm border border-slate-700/50 text-left">
                The main graph featured at the top of each Subdomain. It tracks
                the absolute bleeding edge of human or lab capability to see
                when major phase shifts in that Subdomain will occur.
                <div className="absolute -top-1 left-2 w-3 h-3 bg-slate-900/95 dark:bg-slate-800/95 border-t border-l border-slate-700/50 rotate-45 transform translate-y-px"></div>
              </div>
            </div>
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Tracking the race to discover room-temperature, ambient-pressure
            superconductors.
          </p>
        </div>
        <div className="flex-shrink-0 mt-1">
          <GraphScaleToggle isLogScale={isLogScale} onToggle={setIsLogScale} />
        </div>
      </div>

      <div className="p-4 md:p-6 h-[400px] w-full relative">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={SUPERCONDUCTOR_DATA}
            margin={{
              top: 30,
              right: 30,
              left: 20,
              bottom: 10,
            }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#334155"
              opacity={0.2}
            />
            <XAxis
              dataKey="year"
              stroke="#64748b"
              tick={{ fill: "#64748b" }}
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
              tick={{ fill: "#64748b" }}
              tickFormatter={(val) => val.toString()}
            />
            <Tooltip
              content={<CustomTooltip />}
              cursor={{
                stroke: "#94a3b8",
                strokeWidth: 1,
                strokeDasharray: "5 5",
              }}
            />

            {/* Room Temperature Golden Zone */}
            <ReferenceArea
              y1={293}
              y2={298}
              fill="#fbbf24"
              fillOpacity={0.2}
              stroke="#fbbf24"
              strokeOpacity={0.5}
              label={{
                position: 'insideBottomLeft',
                value: 'Room Temperature Superconductivity',
                fill: '#fbbf24',
                fontSize: 12,
                fontWeight: 700,
                className: 'uppercase tracking-widest drop-shadow-md',
                dy: -10,
              }}
            />

            <Line
              type="linear"
              dataKey="tc"
              stroke="#0ea5e9"
              strokeWidth={3}
              dot={{ r: 4, fill: "#0ea5e9", strokeWidth: 2, stroke: "#ffffff" }}
              activeDot={{
                r: 6,
                fill: "#0284c7",
                strokeWidth: 2,
                stroke: "#ffffff",
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      {lastUpdated && (
        <div className="mt-2 w-full flex justify-start px-4 md:px-6 pb-4">
          <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-semibold bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800/50 shadow-sm transition-all hover:bg-indigo-100 dark:hover:bg-indigo-900/50">
            <svg className="w-3.5 h-3.5 mr-1.5 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Last Updated on {lastUpdated}
          </span>
        </div>
      )}
    </div>
  );
}
