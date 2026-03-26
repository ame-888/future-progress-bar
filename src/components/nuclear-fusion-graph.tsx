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
  ReferenceArea,
  ResponsiveContainer,
} from "recharts";
import { NUCLEAR_FUSION_DATA, NuclearFusionDataPoint } from "./nuclear-fusion-graph-data";
import { GraphScaleToggle } from "./graph-scale-toggle";

interface CustomTooltipProps {
  active?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload?: any[];
  label?: string;
}

const CustomTooltip = ({ active, payload, label }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload as NuclearFusionDataPoint;

    return (
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-3 rounded-lg shadow-lg">
        <p className="font-bold text-slate-900 dark:text-white text-lg mb-1">{label}</p>
        <div className="flex flex-col gap-1">
          <p className="text-sm text-slate-600 dark:text-slate-300">
            <span className="font-semibold">Lawson Criterion:</span>{" "}
            {data.lawsonCriterion.toFixed(2)} &times; 10<sup>21</sup>
          </p>
        </div>
      </div>
    );
  }
  return null;
};

export function NuclearFusionGraph() {
  const [isLogScale, setIsLogScale] = useState(false);

  const scaleType = isLogScale ? "log" : "linear";

  // Need safe data since log doesn't work with 0 or negative
  const chartData = NUCLEAR_FUSION_DATA.map(d => ({
    ...d,
    safeLawson: d.lawsonCriterion <= 0 ? 0.01 : d.lawsonCriterion
  }));

  const yAxisDomain = isLogScale ? [0.01, 100] : [0, 55];
  const ticks = isLogScale ? [0.01, 0.1, 1, 10, 100] : undefined;

  return (
    <div className="w-full mb-8 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden bg-white dark:bg-slate-900/50 shadow-sm">
      <div className="p-4 md:p-6 border-b border-slate-200 dark:border-slate-800 flex justify-between items-start gap-4">
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">
            Lawson Criterion
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Tracking the required product of plasma density, temperature, and confinement time needed to achieve a net energy output
          </p>
        </div>
        <div className="flex-shrink-0 mt-1">
          <GraphScaleToggle isLogScale={isLogScale} onToggle={setIsLogScale} />
        </div>
      </div>

      <div className="p-4 md:p-6 h-[400px] w-full relative">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={chartData}
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
              scale={scaleType}
              domain={yAxisDomain}
              ticks={ticks}
              stroke="#64748b"
              tick={{ fill: '#64748b' }}
              tickFormatter={(value) => `${value.toFixed(1)}`}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#94a3b8', strokeWidth: 1, strokeDasharray: '5 5' }} />

            {/* Perpetual Ignition Zone */}
            <ReferenceArea
              y1={30}
              y2={50}
              fill="#fbbf24"
              fillOpacity={0.2}
              strokeOpacity={0}
            />
            <ReferenceLine
              y={40}
              stroke="none"
              label={{
                position: 'center',
                value: 'Perpetual Ignition Zone',
                fill: '#fbbf24',
                fontSize: 14,
                fontWeight: 'bold'
              }}
            />

            {/* Breakeven Threshold (Silver Line) */}
            <ReferenceLine
              y={5.0}
              stroke="#94a3b8"
              strokeWidth={2}
              strokeDasharray="4 4"
              label={{
                position: 'top',
                value: 'Scientific Breakeven (5.0 × 10²¹)',
                fill: '#94a3b8',
                fontSize: 12,
                fontWeight: 'bold'
              }}
            />

            <Line
              type="monotone"
              dataKey={isLogScale ? "safeLawson" : "lawsonCriterion"}
              stroke="#f97316"
              strokeWidth={3}
              dot={{ r: 4, fill: '#f97316', strokeWidth: 2, stroke: '#ffffff' }}
              activeDot={{ r: 6, fill: '#ea580c', strokeWidth: 2, stroke: '#ffffff' }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
