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
          <div className="flex items-center gap-2">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            Maximum Logical Qubits (2001–2026)
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
