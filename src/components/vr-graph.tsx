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
  ReferenceLine,
  ResponsiveContainer,
} from "recharts";
import { VR_DATA, VrDataPoint } from "./vr-graph-data";
import { GraphScaleToggle } from "./graph-scale-toggle";

interface CustomTooltipProps {
  active?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload?: any[];
  label?: string;
}

const CustomTooltip = ({ active, payload, label }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload as VrDataPoint;

    return (
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-3 rounded-lg shadow-lg">
        <p className="font-bold text-slate-900 dark:text-white text-lg mb-1">{label}</p>
        <div className="flex flex-col gap-1">
          <p className="text-sm text-slate-600 dark:text-slate-300">
            <span className="font-semibold">Channels:</span>{" "}
            {data.channels.toLocaleString()}
          </p>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            <span className="font-semibold">System:</span>{" "}
            {data.system}
          </p>
        </div>
      </div>
    );
  }
  return null;
};

const formatYAxisTick = (value: number) => {
  if (value === 1000000) return '1M';
  if (value === 100000) return '100K';
  if (value === 10000) return '10K';
  if (value === 1000) return '1K';
  if (value === 100) return '100';
  return value.toString();
};

export function VrGraph() {
  const [isLogScale, setIsLogScale] = useState(true);

  const scaleType = isLogScale ? "log" : "linear";
  const yAxisDomain = isLogScale ? [10, 1000000] : [0, 1000000];
  const ticks = isLogScale
    ? [10, 100, 1000, 10000, 100000, 1000000]
    : [0, 200000, 400000, 600000, 800000, 1000000];

  return (
    <div className="w-full mb-8 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden bg-white dark:bg-slate-900/50 shadow-sm">
      <div className="p-4 md:p-6 border-b border-slate-200 dark:border-slate-800 flex justify-between items-start gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            Simultaneous Neural Stimulation Channels
            <span className="text-xs font-semibold px-2 py-1 bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400 rounded-full uppercase tracking-wider">
              North Star
            </span>
          </h2>
            <div className="relative group flex items-center">
              <QuestionMarkCircleIcon className="w-5 h-5 text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300 cursor-pointer transition-colors" />
              <div className="absolute left-0 top-full mt-2 w-64 md:w-80 p-3 bg-slate-900/95 dark:bg-slate-800/95 text-slate-100 dark:text-slate-200 text-xs rounded-lg shadow-xl opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 z-50 backdrop-blur-sm border border-slate-700/50 text-left">
                The main graph featured at the top of each Subdomain. It tracks the absolute bleeding edge of human or lab capability to see when major phase shifts in that Subdomain will occur.
                <div className="absolute -top-1 left-2 w-3 h-3 bg-slate-900/95 dark:bg-slate-800/95 border-t border-l border-slate-700/50 rotate-45 transform translate-y-px"></div>
              </div>
            </div>
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Tracking the absolute limit of our ability to write sensory data directly into the nervous system.
          </p>
        </div>
        <div className="flex-shrink-0 mt-1">
          <GraphScaleToggle isLogScale={isLogScale} onToggle={setIsLogScale} />
        </div>
      </div>

      <div className="p-4 md:p-6 h-[400px] w-full relative">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={VR_DATA}
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

            {/* Breakeven Target Line */}
            <ReferenceLine
              y={1000000}
              stroke="#fbbf24"
              strokeWidth={2}
              strokeDasharray="4 4"
              label={{
                position: 'top',
                value: 'Breakeven (1M Channels)',
                fill: '#fbbf24',
                fontSize: 12,
                fontWeight: 'bold'
              }}
            />

            <Line
              type="linear"
              dataKey="channels"
              stroke="#8b5cf6"
              strokeWidth={3}
              dot={{ r: 4, fill: '#8b5cf6', strokeWidth: 2, stroke: '#ffffff' }}
              activeDot={{ r: 6, fill: '#6d28d9', strokeWidth: 2, stroke: '#ffffff' }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}