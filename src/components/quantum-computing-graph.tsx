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
import { QUANTUM_COMPUTING_DATA, QuantumComputingDataPoint } from "./quantum-computing-graph-data";
import { GraphScaleToggle } from "./graph-scale-toggle";

interface CustomTooltipProps {
  active?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload?: any[];
  label?: string;
}

const CustomTooltip = ({ active, payload, label }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload as QuantumComputingDataPoint;

    return (
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-3 rounded-lg shadow-lg max-w-xs sm:max-w-sm">
        <p className="font-bold text-slate-900 dark:text-white text-lg mb-1">{label}</p>
        <div className="flex flex-col gap-1">
          <p className="text-sm text-slate-600 dark:text-slate-300">
            {data.logicalQubits} Logical Qubits
          </p>
        </div>
      </div>
    );
  }
  return null;
};

export function QuantumComputingGraph() {
  const [isLogScale, setIsLogScale] = useState(false);

  // Recharts log scale doesn't work well with 0.
  const chartData = QUANTUM_COMPUTING_DATA.map(d => ({
    ...d,
    safeLogicalQubits: d.logicalQubits === 0 ? 0.1 : d.logicalQubits
  }));

  const scaleType = isLogScale ? "log" : "linear";
  const yAxisDomain = isLogScale ? [0.1, 1000] : [0, 1000];
  const ticks = isLogScale ? [0.1, 1, 10, 100, 1000] : [0, 200, 400, 600, 800, 1000];

  const formatTick = (val: number) => {
    if (val === 0.1) return '0';
    if (val === 1000) return '1K';
    return val.toString();
  };

  return (
    <div className="w-full mb-8 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden bg-white dark:bg-slate-900/50 shadow-sm">
      <div className="p-4 md:p-6 border-b border-slate-200 dark:border-slate-800 flex justify-between items-start gap-4">
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">
            The March to a Thousand: Maximum Logical Qubits (2000–2026)
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Tracking the realization of error-corrected, fault-tolerant quantum memory.
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
              tickFormatter={formatTick}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#94a3b8', strokeWidth: 1, strokeDasharray: '5 5' }} />

            <ReferenceLine
              y={1000}
              stroke="#fbbf24"
              strokeWidth={2}
              strokeDasharray="4 4"
              label={{
                position: 'top',
                value: 'MegaQuOp (Mega-Qubit Operations) scale',
                fill: '#fbbf24',
                fontSize: 12,
                fontWeight: 'bold'
              }}
            />

            <Line
              type={isLogScale ? "linear" : "monotone"}
              dataKey={isLogScale ? "safeLogicalQubits" : "logicalQubits"}
              stroke="#8b5cf6"
              strokeWidth={3}
              dot={{ r: 4, fill: '#8b5cf6', strokeWidth: 2, stroke: '#ffffff' }}
              activeDot={{ r: 6, fill: '#7c3aed', strokeWidth: 2, stroke: '#ffffff' }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
