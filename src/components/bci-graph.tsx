"use client";

import React from "react";
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
import { BCI_DATA, BciDataPoint } from "./bci-graph-data";

interface CustomTooltipProps {
  active?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload?: any[];
  label?: string;
}

const CustomTooltip = ({ active, payload, label }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload as BciDataPoint;

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

export function BciGraph() {
  return (
    <div className="w-full mb-8 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden bg-white dark:bg-slate-900/50 shadow-sm">
      <div className="p-4 md:p-6 border-b border-slate-200 dark:border-slate-800">
        <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">
          Stevenson's Law: BCI Channel Capacity
        </h2>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
          Tracking the maximum number of simultaneous channels/electrodes we can record from (The absolute limit of human engineering).
        </p>
      </div>

      <div className="p-4 md:p-6 h-[400px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={BCI_DATA}
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
              scale="log"
              domain={[100, 1000000]}
              ticks={[100, 1000, 10000, 100000, 1000000]}
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
                value: 'Broadband Brain Connectivity (1M Channels)',
                fill: '#fbbf24',
                fontSize: 12,
                fontWeight: 'bold'
              }}
            />

            <Line
              type="monotone"
              dataKey="channels"
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
