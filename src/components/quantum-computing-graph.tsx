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
import { QUANTUM_COMPUTING_DATA, QuantumComputingDataPoint } from "./quantum-computing-graph-data";

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
            <span className="font-semibold">Algorithmic Qubits (AQ):</span>{" "}
            {data.aq}
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            {data.description}
          </p>
        </div>
      </div>
    );
  }
  return null;
};

export function QuantumComputingGraph() {
  return (
    <div className="w-full mb-8 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden bg-white dark:bg-slate-900/50 shadow-sm">
      <div className="p-4 md:p-6 border-b border-slate-200 dark:border-slate-800">
        <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">
          Quantum Computing: Algorithmic Qubits (AQ)
        </h2>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
          Tracking the progress of Algorithmic Qubits representing the usable computational power of quantum systems.
        </p>
      </div>

      <div className="p-4 md:p-6 h-[400px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={QUANTUM_COMPUTING_DATA}
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
              domain={[0, 100]}
              ticks={[0, 20, 40, 60, 80, 100]}
              stroke="#64748b"
              tick={{ fill: '#64748b' }}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#94a3b8', strokeWidth: 1, strokeDasharray: '5 5' }} />

            <ReferenceLine
              y={50}
              stroke="#cbd5e1"
              strokeWidth={2}
              strokeDasharray="4 4"
              label={{
                position: 'top',
                value: 'The Classical Wall (AQ 50)',
                fill: '#94a3b8',
                fontSize: 12,
                fontWeight: 'bold'
              }}
            />

            <ReferenceLine
              y={100}
              stroke="#fbbf24"
              strokeWidth={2}
              strokeDasharray="4 4"
              label={{
                position: 'top',
                value: 'Broad Quantum Advantage (AQ 100)',
                fill: '#fbbf24',
                fontSize: 12,
                fontWeight: 'bold'
              }}
            />

            <Line
              type="monotone"
              dataKey="aq"
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
