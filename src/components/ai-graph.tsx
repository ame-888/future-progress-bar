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

interface CustomTooltipProps {
  active?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload?: any[];
  label?: string;
}

const formatYAxisTick = (value: number) => {
  if (value === 0.01) return "$0.01";
  if (value === 0.1) return "$0.10";
  if (value === 1) return "$1";
  if (value === 10) return "$10";
  if (value === 100) return "$100";
  if (value === 1000) return "$1K";
  if (value === 10000) return "$10K";
  if (value === 100000) return "$100K";
  return `$${value}`;
};

const CustomTooltip = ({ active, payload, label }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    const isExplosion = data.cost <= 0.01;

    return (
      <div className="bg-slate-900/95 backdrop-blur-md border border-slate-700 p-3 rounded-xl shadow-2xl">
        <p className="text-slate-300 font-mono text-sm mb-2">{label}</p>
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full ${isExplosion ? 'bg-amber-400' : 'bg-indigo-400'}`} />
            <span className="text-slate-100 font-bold font-mono text-lg">
              ${data.cost.toFixed(2)}
            </span>
            <span className="text-slate-400 text-xs font-semibold tracking-wider">/ HR</span>
          </div>
        </div>
      </div>
    );
  }
  return null;
};

export const AiGraph = () => {
  const [scale, setScale] = useState<"linear" | "log">("log");

  return (
    <div className="w-full mx-auto max-w-5xl mb-12">
      {/* Title & Controls Header */}
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-6">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              AI Labor Cost Equivalence
            </h2>
            <span className="px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-xs font-bold uppercase tracking-widest">
              North Star
            </span>
          </div>
          <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base max-w-3xl leading-relaxed group relative inline-flex items-center gap-1 cursor-help">
            <QuestionMarkCircleIcon className="w-5 h-5 text-slate-400" />
            <span className="border-b border-dotted border-slate-400">Real-world cost (USD) to get one hour of expert-level cognitive work performed by AI.</span>

            {/* Tooltip on hover */}
            <span className="absolute z-50 left-0 bottom-full mb-2 hidden group-hover:block w-72 md:w-96 p-3 bg-slate-900 text-slate-200 text-xs rounded-lg shadow-xl border border-slate-700">
              Averaged across deployed use-cases: coding, analysis, customer support, design, research assistance, etc.
            </span>
          </p>
        </div>

        <div className="flex flex-col gap-3 min-w-[200px]">
          {/* Scale Toggle */}
          <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-lg border border-slate-200 dark:border-slate-700 w-full">
            <button
              onClick={() => setScale("linear")}
              className={`flex-1 px-3 py-1.5 rounded-md text-xs font-bold transition-all duration-200 ${
                scale === "linear"
                  ? "bg-white dark:bg-slate-900 shadow-sm text-indigo-600 dark:text-indigo-400"
                  : "text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
              }`}
            >
              Linear
            </button>
            <button
              onClick={() => setScale("log")}
              className={`flex-1 px-3 py-1.5 rounded-md text-xs font-bold transition-all duration-200 ${
                scale === "log"
                  ? "bg-white dark:bg-slate-900 shadow-sm text-indigo-600 dark:text-indigo-400"
                  : "text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
              }`}
            >
              Logarithmic
            </button>
          </div>
        </div>
      </div>

      {/* Graph Area */}
      <div className="bg-white dark:bg-slate-900 p-4 md:p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm relative">
        <div className="h-[400px] w-full">
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
                domain={scale === "log" ? [0.01, 100000] : ['auto', 'auto']}
                ticks={scale === "log" ? [0.01, 0.1, 1, 10, 100, 1000, 10000, 100000] : undefined}
                tickFormatter={formatYAxisTick}
              />

              <Tooltip content={<CustomTooltip />} cursor={{ stroke: 'rgba(99, 102, 241, 0.2)', strokeWidth: 2, strokeDasharray: '4 4' }} />

              <ReferenceLine
                y={0.01}
                stroke="#fbbf24"
                strokeDasharray="4 4"
                strokeWidth={2}
                label={{
                  position: "insideTopLeft",
                  value: "Intelligence Explosion",
                  fill: "#fbbf24",
                  fontSize: 12,
                  fontWeight: 700,
                  className: "uppercase tracking-widest drop-shadow-md bg-black/50 px-1 rounded",
                  dy: -10,
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
      </div>
    </div>
  );
};
