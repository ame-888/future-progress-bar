"use client";

import React, { useState, useMemo } from "react";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/solid";
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
import { aiGraphData } from "./ai-graph-data";
import { GraphScaleToggle } from "./graph-scale-toggle";

interface CustomTooltipProps {
  active?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload?: any[];
  label?: string;
}

const formatYAxisTick = (value: number) => {
  if (value === 1000) return "$1K";
  if (value === 10000) return "$10K";
  if (value === 100000) return "$100K";
  if (value === 1000000) return "$1M";
  if (value === 10000000) return "$10M";
  if (value === 100000000) return "$100M";
  if (value === 1000000000) return "$1B";
  return `$${value}`;
};

const CustomTooltip = ({ active, payload, label }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    const isExplosion = data.cost <= 1000;

    return (
      <div className="bg-slate-900/95 backdrop-blur-md border border-slate-700 p-3 rounded-xl shadow-2xl">
        <p className="text-slate-300 font-mono text-sm mb-2">{label}</p>
        <div className="space-y-1">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <div
                className={`w-2 h-2 rounded-full ${isExplosion ? "bg-amber-400" : "bg-indigo-400"}`}
              />
              <span className="text-slate-100 font-bold font-mono text-lg">
                ${data.cost.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 2 })}
              </span>
              <span className="text-slate-400 text-xs font-semibold tracking-wider">
                / HR
              </span>
            </div>
            {data.note && (
              <span className="text-slate-400 text-xs italic">
                {data.note}
              </span>
            )}
          </div>
        </div>
      </div>
    );
  }
  return null;
};

export const AiGraph = ({ lastUpdated }: { lastUpdated?: string }) => {
  const [isLogScale, setIsLogScale] = useState(true);
  const scale = isLogScale ? "log" : "linear";

  return (
    <div className="w-full mb-8 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden bg-white dark:bg-slate-900/50 shadow-sm">
      <div className="p-4 md:p-6 border-b border-slate-200 dark:border-slate-800 flex justify-between items-start gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              Human-Equivalent Brain-Hour Cost (HEBC)
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
            Tracking the cost to generate the same number of calculations as a human brain, in an hour, over the years (using the best hardware available)
          </p>
        </div>
        <div className="flex-shrink-0 mt-1">
          <GraphScaleToggle isLogScale={isLogScale} onToggle={setIsLogScale} />
        </div>
      </div>

      <div className="p-4 md:p-6 h-[400px] w-full relative">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
              data={aiGraphData}
              margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="currentColor"
                className="text-slate-200 dark:text-slate-800"
                vertical={false}
              />

              <XAxis
                dataKey="year"
                stroke="currentColor"
                className="text-slate-400 text-xs font-medium"
                tickMargin={12}
                tickLine={false}
                axisLine={false}
              />

              <YAxis
                reversed={true}
                stroke="currentColor"
                className="text-slate-400 text-xs font-medium font-mono"
                tickMargin={12}
                tickLine={false}
                axisLine={false}
                scale={scale}
                domain={scale === "log" ? [1000, 1000000000] : ["auto", "auto"]}
                ticks={
                  scale === "log"
                    ? [1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000]
                    : undefined
                }
                tickFormatter={formatYAxisTick}
              />

              <Tooltip
                content={<CustomTooltip />}
                cursor={{
                  stroke: "rgba(99, 102, 241, 0.2)",
                  strokeWidth: 2,
                  strokeDasharray: "4 4",
                }}
              />

              <ReferenceLine
                y={1000}
                stroke="#fbbf24"
                strokeDasharray="4 4"
                strokeWidth={2}
                label={{
                  position: "insideBottomLeft",
                  value: "Intelligence Explosion",
                  fill: "#fbbf24",
                  fontSize: 12,
                  fontWeight: 700,
                  className:
                    "uppercase tracking-widest drop-shadow-md bg-black/50 px-1 rounded",
                  dy: 15,
                }}
              />

              <Line
                type={scale === "log" ? "linear" : "monotone"}
                dataKey="cost"
                stroke="#6366f1"
                strokeWidth={3}
                dot={{
                  r: 4,
                  fill: "#312e81",
                  stroke: "#818cf8",
                  strokeWidth: 2,
                }}
                activeDot={{
                  r: 6,
                  fill: "#4f46e5",
                  stroke: "#c7d2fe",
                  strokeWidth: 3,
                }}
                isAnimationActive={false}
              />
            </LineChart>
        </ResponsiveContainer>
      </div>
      {lastUpdated && (
        <div className="mt-2 px-4 md:px-6 pb-4 text-left text-xs text-slate-500 dark:text-slate-400">
          Last Updated on {lastUpdated}
        </div>
      )}
    </div>
  );
};
