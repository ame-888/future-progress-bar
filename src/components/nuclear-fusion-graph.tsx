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
      <div className="flex flex-col gap-2">
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-3 py-1 rounded-lg shadow-sm w-fit self-center">
          <p className="font-bold text-slate-900 dark:text-white text-sm">{label}</p>
        </div>
        <div className="flex gap-2">
          {/* MCF Box */}
          <div className="bg-white dark:bg-slate-900 border-l-4 border-l-red-500 border border-slate-200 dark:border-slate-800 p-3 rounded-r-lg shadow-lg max-w-[200px]">
            <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase mb-1">Magnetic (MCF)</p>
            <p className="text-sm text-slate-900 dark:text-white font-medium">
              {data.mcfValue.toFixed(2)} &times; 10<sup>21</sup>
            </p>
            {data.mcfNote && (
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 italic whitespace-normal break-words">
                {data.mcfNote}
              </p>
            )}
          </div>

          {/* NIF Box */}
          {data.nifValue !== undefined && (
            <div className="bg-white dark:bg-slate-900 border-l-4 border-l-orange-500 border border-slate-200 dark:border-slate-800 p-3 rounded-r-lg shadow-lg max-w-[200px]">
              <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase mb-1">Inertial (NIF)</p>
              <p className="text-sm text-slate-900 dark:text-white font-medium">
                {data.nifValue.toFixed(2)} &times; 10<sup>21</sup>
              </p>
              {data.nifNote && (
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 italic whitespace-normal break-words">
                  {data.nifNote}
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    );
  }
  return null;
};

export function NuclearFusionGraph() {
  const [isLogScale, setIsLogScale] = useState(false);

  const scaleType = isLogScale ? "log" : "linear";

  const yAxisDomain = isLogScale ? [0.01, 100] : [0, 55];
  const ticks = isLogScale ? [0.01, 0.1, 1, 10, 100] : undefined;

  return (
    <div className="w-full mb-8 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden bg-white dark:bg-slate-900/50 shadow-sm">
      <div className="p-4 md:p-6 border-b border-slate-200 dark:border-slate-800 flex justify-between items-start gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              Lawson Criterion
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
            Tracking the best achieved product of plasma density, temperature, and confinement time
          </p>
          <div className="mt-3 flex items-center gap-4 text-xs font-medium">
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-sm bg-red-500"></div>
              <span className="text-slate-700 dark:text-slate-300">MCF (Magnetic Confinement)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-sm bg-orange-500"></div>
              <span className="text-slate-700 dark:text-slate-300">NIF (Inertial Confinement)</span>
            </div>
          </div>
        </div>
        <div className="flex-shrink-0 mt-1">
          <GraphScaleToggle isLogScale={isLogScale} onToggle={setIsLogScale} />
        </div>
      </div>

      <div className="p-4 md:p-6 h-[400px] w-full relative mt-2">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={NUCLEAR_FUSION_DATA}
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
              tickFormatter={(value) => `${value > 0 && value < 0.1 ? value.toFixed(2) : value.toFixed(1)}`}
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
                value: 'Commercial Power Viability',
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
                value: 'Ignition Threshold (5.0 × 10²¹)',
                fill: '#94a3b8',
                fontSize: 12,
                fontWeight: 'bold'
              }}
            />

            <Line
              type="linear"
              dataKey="mcfValue"
              stroke="#ef4444" // red-500
              strokeWidth={3}
              dot={{ r: 4, fill: '#ef4444', strokeWidth: 2, stroke: '#ffffff' }}
              activeDot={{ r: 6, fill: '#dc2626', strokeWidth: 2, stroke: '#ffffff' }}
              isAnimationActive={false}
            />
            <Line
              type="linear"
              dataKey="nifValue"
              stroke="#f97316" // orange-500
              strokeWidth={3}
              dot={{ r: 4, fill: '#f97316', strokeWidth: 2, stroke: '#ffffff' }}
              activeDot={{ r: 6, fill: '#ea580c', strokeWidth: 2, stroke: '#ffffff' }}
              isAnimationActive={false}
            />
          </LineChart>
        </ResponsiveContainer>
        <div className="mt-2 px-4 md:px-6 pb-4 text-left text-xs text-slate-500 dark:text-slate-400">
          Last Updated on April 20th, 2026
        </div>
      </div>
    </div>
  );
}
