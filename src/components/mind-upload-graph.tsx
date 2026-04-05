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
import { GraphScaleToggle } from "./graph-scale-toggle";
import { MIND_UPLOAD_DATA, HUMAN_BRAIN_NEURONS } from "./mind-upload-graph-data";

interface CustomTooltipProps {
  active?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload?: any[];
  label?: string;
  isLogScale: boolean;
}

const formatYAxisTick = (value: number) => {
  if (value >= 1000000000) return `${(value / 1000000000)}B`;
  if (value >= 1000000) return `${(value / 1000000)}M`;
  if (value >= 1000) return `${(value / 1000)}K`;
  return value.toString();
};

const CustomTooltip = ({ active, payload, label, isLogScale }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    // Process payload data
    const maxNeuronsEntry = payload.find(entry => entry.name === "Max Neurons");
    const completeBrainEntry = payload.find(entry => entry.name === "Complete Brain simulated");

    const getVal = (entry: any) => {
      let val = entry.value;
      if (isLogScale && val === 0.1) val = 0;
      if (val === null || val === undefined || (isLogScale && entry.value === 0.1 && !entry.payload.completeBrainNeurons && entry.name === "Complete Brain simulated")) {
        return null;
      }
      return val;
    };

    const maxNeuronsVal = maxNeuronsEntry ? getVal(maxNeuronsEntry) : null;
    const completeBrainVal = completeBrainEntry ? getVal(completeBrainEntry) : null;

    return (
      <div className="flex flex-col gap-2">
        <p className="font-bold text-slate-900 dark:text-white text-lg drop-shadow-sm">{label}</p>

        {maxNeuronsVal !== null && (
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-3 rounded-lg shadow-lg">
            <p className="text-sm font-medium" style={{ color: maxNeuronsEntry?.color }}>
              Max Neurons: {maxNeuronsVal.toLocaleString()} neurons
            </p>
            {maxNeuronsEntry?.payload?.maxNeuronsNote && (
              <p className="text-xs text-[#6366f1] mt-1 italic max-w-[250px]">
                {maxNeuronsEntry.payload.maxNeuronsNote}
              </p>
            )}
          </div>
        )}

        {completeBrainVal !== null && (
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-3 rounded-lg shadow-lg">
            <p className="text-sm font-medium" style={{ color: completeBrainEntry?.color }}>
              Complete Brain simulated: {completeBrainVal.toLocaleString()} neurons
            </p>
            {completeBrainEntry?.payload?.completeBrainNote && (
              <p className="text-xs text-[#10b981] mt-1 italic max-w-[250px]">
                {completeBrainEntry.payload.completeBrainNote}
              </p>
            )}
          </div>
        )}
      </div>
    );
  }
  return null;
};

export function MindUploadGraph() {
  const [isLogScale, setIsLogScale] = useState(true);
  const scale = isLogScale ? "log" : "linear";

  // Transform data for log scale (map 0 to 0.1)
  const chartData = MIND_UPLOAD_DATA.map(point => ({
    ...point,
    maxNeuronsDisplay: point.maxNeurons === null ? null : (scale === "log" && point.maxNeurons === 0 ? 0.1 : point.maxNeurons),
    completeBrainDisplay: scale === "log" && point.completeBrainNeurons === 0 ? 0.1 : point.completeBrainNeurons,
  }));

  // Filter out nulls for maxNeurons so Recharts connects the line correctly if needed,
  // but Recharts natively handles nulls by breaking the line or ignoring the point.

  // Use fixed ticks for log scale to make it readable
  const logTicks = [0.1, 1, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000, 10000000000, 100000000000];

  return (
    <div className="w-full bg-white dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-slate-800/60 p-4 md:p-6 mb-8 transition-colors">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            Neurons Simulated
            <span className="text-xs font-semibold px-2 py-1 bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400 rounded-full uppercase tracking-wider">
              North Star
            </span>
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Maximum amount of neurons vs largest complete brain simulated
          </p>
        </div>
        <div className="flex items-center gap-2 bg-slate-100 dark:bg-slate-800/50 p-1 rounded-lg shrink-0">
          <GraphScaleToggle isLogScale={isLogScale} onToggle={setIsLogScale} />
        </div>
      </div>

      <div className="h-[400px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={chartData}
            margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#475569" opacity={0.2} vertical={false} />
            <XAxis
              dataKey="year"
              stroke="#64748b"
              fontSize={12}
              tickMargin={10}
              tick={{ fill: '#64748b' }}
            />
            <YAxis
              scale={scale}
              domain={scale === "log" ? [0.1, 100000000000] : [0, 100000000000]}
              ticks={scale === "log" ? logTicks : undefined}
              tickFormatter={formatYAxisTick}
              stroke="#64748b"
              fontSize={12}
              tickMargin={10}
              tick={{ fill: '#64748b' }}
            />
            <Tooltip content={<CustomTooltip isLogScale={scale === "log"} />} />

            <ReferenceLine
              y={HUMAN_BRAIN_NEURONS}
              stroke="#eab308"
              strokeDasharray="3 3"
              opacity={0.8}
              label={{
                position: 'insideTopLeft',
                value: 'Human Brain (86B)',
                fill: '#eab308',
                fontSize: 12,
                fontWeight: 'bold',
                dy: -10
              }}
            />

            <Line
              type={scale === "log" ? "linear" : "monotone"}
              dataKey="maxNeuronsDisplay"
              name="Max Neurons"
              stroke="#6366f1"
              strokeWidth={3}
              dot={{ fill: '#6366f1', r: 4, strokeWidth: 2, stroke: '#fff' }}
              activeDot={{ r: 6, strokeWidth: 0 }}
              connectNulls={false}
            />
            <Line
              type={scale === "log" ? "linear" : "monotone"}
              dataKey="completeBrainDisplay"
              name="Complete Brain simulated"
              stroke="#10b981"
              strokeWidth={3}
              dot={{ fill: '#10b981', r: 4, strokeWidth: 2, stroke: '#fff' }}
              activeDot={{ r: 6, strokeWidth: 0 }}
              connectNulls={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
