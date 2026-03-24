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
import { LEV_LIFESPAN_DATA, LevLifespanDataPoint } from "./lev-graph-data";

interface CustomTooltipProps {
  active?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload?: any[];
  label?: string;
}

const CustomTooltip = ({ active, payload, label }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload as LevLifespanDataPoint;
    const isPositive = data.lifespanGain >= 0;

    // Only show note for 2022 as requested by the user
    const shouldShowNote = data.year === 2022 && data.note;

    return (
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-3 rounded-lg shadow-lg">
        <p className="font-bold text-slate-900 dark:text-white text-lg mb-1">{label}</p>
        <div className="flex flex-col gap-1">
          <p className="text-sm text-slate-600 dark:text-slate-300">
            <span className="font-semibold">Global Average:</span> {data.globalAverage.toFixed(3)} years
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
  return (
    <div className="w-full mb-8 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden bg-white dark:bg-slate-900/50 shadow-sm">
      <div className="p-4 md:p-6 border-b border-slate-200 dark:border-slate-800">
        <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">
          Longevity Escape Velocity (LEV) Progress
        </h2>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
          Tracking the annual increase in global average lifespan. LEV is achieved when this gain consistently exceeds +1.0 year per year.
        </p>
      </div>

      <div className="p-4 md:p-6 h-[400px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={LEV_LIFESPAN_DATA}
            margin={{
              top: 20,
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
            />
            <YAxis
              domain={[-2.0, 2.0]}
              stroke="#64748b"
              tick={{ fill: '#64748b' }}
              tickFormatter={(value) => `${value > 0 ? '+' : ''}${value.toFixed(1)}`}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#94a3b8', strokeWidth: 1, strokeDasharray: '5 5' }} />

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

            <Line
              type="monotone"
              dataKey="lifespanGain"
              stroke="#6366f1"
              strokeWidth={3}
              dot={{ r: 4, fill: '#6366f1', strokeWidth: 2, stroke: '#ffffff' }}
              activeDot={{ r: 6, fill: '#4f46e5', strokeWidth: 2, stroke: '#ffffff' }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
