"use client";

import React from "react";
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
import { LEV_DATA, LevDataPoint } from "./lev-graph-data";

interface CustomTooltipProps {
  active?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload?: any[];
  label?: string;
}

const CustomTooltip = ({ active, payload, label }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload as LevDataPoint;
    const isLifespanPositive = data.lifespanGain >= 0;
    const isHealthspanPositive = data.healthspanGain !== undefined ? data.healthspanGain >= 0 : true;

    return (
      <div className="flex flex-col gap-2">
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-3 py-1 rounded-lg shadow-sm w-fit self-center">
          <p className="font-bold text-slate-900 dark:text-white text-sm">{label}</p>
        </div>
        <div className="flex gap-2">
          {/* Lifespan Box */}
          <div className="bg-white dark:bg-slate-900 border-l-4 border-l-red-500 border border-slate-200 dark:border-slate-800 p-3 rounded-r-lg shadow-lg max-w-[200px]">
            <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase mb-1">Lifespan</p>
            <p className={isLifespanPositive ? "text-emerald-600 dark:text-emerald-400 font-medium" : "text-red-600 dark:text-red-400 font-medium"}>
              {isLifespanPositive ? "+" : ""}{data.lifespanGain.toFixed(1)} years
            </p>
          </div>

          {/* Healthspan Box */}
          {data.healthspanGain !== undefined && (
            <div className="bg-white dark:bg-slate-900 border-l-4 border-l-green-500 border border-slate-200 dark:border-slate-800 p-3 rounded-r-lg shadow-lg max-w-[200px]">
              <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase mb-1">Healthspan</p>
              <p className={isHealthspanPositive ? "text-emerald-600 dark:text-emerald-400 font-medium" : "text-red-600 dark:text-red-400 font-medium"}>
                {isHealthspanPositive ? "+" : ""}{data.healthspanGain.toFixed(1)} years
              </p>
            </div>
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
      <div className="p-4 md:p-6 border-b border-slate-200 dark:border-slate-800 flex flex-col md:flex-row md:justify-between md:items-start gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            Annual Increase in Lifespan & Healthspan
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
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 whitespace-nowrap">
            Tracking the gains and losses in both lifespan (according to UN - WPP) and healthspan (according to WHO - GHO) over the years
          </p>
          <div className="mt-3 flex items-center gap-4 text-xs font-medium">
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-sm bg-yellow-500"></div>
              <span className="text-slate-700 dark:text-slate-300">Lifespan Gain</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-sm bg-blue-500"></div>
              <span className="text-slate-700 dark:text-slate-300">Healthspan Gain</span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 md:p-6 h-[400px] w-full relative">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={LEV_DATA}
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
              tickFormatter={(value) => `${value > 0 ? '+' : ''}${value}`}
              label={{ value: '(Years)', position: 'top', fill: '#64748b', fontSize: 12, offset: 10 }}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#94a3b8', strokeWidth: 1, strokeDasharray: '5 5' }} />

            {/* Zero line */}
            <ReferenceLine y={0} stroke="#64748b" strokeOpacity={0.5} />

            {/* COVID-19 Period */}
            <ReferenceArea
              x1={2020}
              x2={2023}
              fill="#a855f7"
              fillOpacity={0.1}
              label={{
                position: 'insideTop',
                value: 'COVID-19',
                fill: '#a855f7',
                fontSize: 12,
                fontWeight: 'bold'
              }}
            />

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
              type="linear"
              dataKey="lifespanGain"
              stroke="#eab308" // yellow-500
              strokeWidth={3}
              dot={{ r: 3.2, fill: '#eab308', strokeWidth: 2, stroke: '#ffffff' }}
              activeDot={{ r: 4.8, fill: '#ca8a04', strokeWidth: 2, stroke: '#ffffff' }}
              isAnimationActive={false}
            />
            <Line
              type="linear"
              dataKey="healthspanGain"
              stroke="#3b82f6" // blue-500
              strokeWidth={3}
              dot={{ r: 3.2, fill: '#3b82f6', strokeWidth: 2, stroke: '#ffffff' }}
              activeDot={{ r: 4.8, fill: '#2563eb', strokeWidth: 2, stroke: '#ffffff' }}
              isAnimationActive={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-2 px-4 md:px-6 pb-4 text-left text-xs text-slate-500 dark:text-slate-400">
        <p>* WHO (GHO) hasn't published data on 2022 onwards as of today</p>
        <p>Last Updated on April, 21st, 2026</p>
      </div>
    </div>
  );
}
