"use client";

import React, { useState, useEffect } from "react";
import { MAIN_DOMAINS, Measurement, SubDomainData, MainDomainData } from "./progress-table-data";
import { useRouter, useSearchParams } from "next/navigation";
import { CheckCircleIcon, ChevronLeftIcon, ChevronRightIcon, QuestionMarkCircleIcon, ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import { BeakerIcon, CpuChipIcon, FireIcon, HeartIcon, SparklesIcon, RocketLaunchIcon, GlobeAltIcon, WindowIcon, EyeIcon, SwatchIcon, WrenchScrewdriverIcon, BoltIcon, TruckIcon, CloudArrowUpIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { LevProgressGraph } from "./lev-progress-graph";
import { MindUploadGraph } from "./mind-upload-graph";
import { NuclearFusionGraph } from "./nuclear-fusion-graph";
import { BciGraph } from "./bci-graph";
import { VrGraph } from "./vr-graph";
import { SuperconductorGraph } from "./superconductor-graph";
import { RoboticsGraph } from "./robotics-graph";
import { SpaceExplorationGraph } from "./space-exploration-graph";
import { AiGraph } from "./ai-graph";
import { QuantumComputingGraph } from "./quantum-computing-graph";
import { FictionalFuture } from "./fictional-future";
import { useSound } from "./sound-provider";

export function ProgressTable() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const tabParam = searchParams.get('tab');

  const [activeMainTab, setActiveMainTab] = useState(-1);
  const [activeSubTab, setActiveSubTab] = useState(-1);
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({});
  const [isPredictionsModalOpen, setIsPredictionsModalOpen] = useState(false);
  const { playSound } = useSound();

  // User predictions and filters state
  const [userPredictions, setUserPredictions] = useState<Record<string, { year: number; timestamp: number }>>({});
  const [predictionFilter, setPredictionFilter] = useState<'both' | 'ai' | 'mine'>('both');

  // Load user predictions from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('userPredictions');
      if (saved) {
        setUserPredictions(JSON.parse(saved));
      }
    } catch (e) {
      console.error('Failed to load user predictions:', e);
    }
  }, []);

  // Save user predictions to localStorage
  useEffect(() => {
    if (Object.keys(userPredictions).length > 0) {
      localStorage.setItem('userPredictions', JSON.stringify(userPredictions));
    }
  }, [userPredictions]);

  useEffect(() => {
    // Only run this once on mount or when tabParam changes, but use setTimeout to avoid synchronous setState warning
    const timeoutId = setTimeout(() => {
      let initialMainTab = 0; // Default AUTOMATION
      let initialSubTab = 0; // Default AI

      let targetSubId = null;

      if (tabParam) {
        targetSubId = tabParam.toLowerCase();
      } else {
        const savedTabId = localStorage.getItem('lastActiveTab');
        if (savedTabId) {
          targetSubId = savedTabId.toLowerCase();
        }
      }

      if (targetSubId) {
        for (let mIndex = 0; mIndex < MAIN_DOMAINS.length; mIndex++) {
          const sIndex = MAIN_DOMAINS[mIndex].subdomains.findIndex(s => s.id.toLowerCase() === targetSubId);
          if (sIndex !== -1) {
            initialMainTab = mIndex;
            initialSubTab = sIndex;
            break;
          }
        }
      }

      setActiveMainTab(initialMainTab);
      setActiveSubTab(initialSubTab);
    }, 0);

    return () => clearTimeout(timeoutId);
  }, [tabParam]);

  const handleMainTabClick = (index: number) => {
    setActiveMainTab(index);
    setActiveSubTab(0); // reset subtab when changing main domain
    const subDomainId = MAIN_DOMAINS[index].subdomains[0].id;
    localStorage.setItem('lastActiveTab', subDomainId);
    router.push(`/?tab=${subDomainId}`, { scroll: false });
    playSound('/click.wav');
  };

  const handleSubTabClick = (index: number) => {
    setActiveSubTab(index);
    const subDomainId = MAIN_DOMAINS[activeMainTab].subdomains[index].id;
    localStorage.setItem('lastActiveTab', subDomainId);
    router.push(`/?tab=${subDomainId}`, { scroll: false });
    playSound('/click.wav');
  };

  const activeMainDomain = activeMainTab !== -1 ? MAIN_DOMAINS[activeMainTab] : null;
  const activeDomain = activeMainDomain && activeSubTab !== -1 ? activeMainDomain.subdomains[activeSubTab] : null;

  // Group measurements by category
  const groupedMeasurements = React.useMemo(() => {
    if (!activeDomain) return {};
    return activeDomain.measurements.reduce((acc: Record<string, Measurement[]>, measurement: Measurement) => {
      const category = measurement.category || "General";
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(measurement);
      return acc;
    }, {} as Record<string, Measurement[]>);
  }, [activeDomain]);

  // When activeDomain changes, initialize expanded categories to true
  useEffect(() => {
    if (activeDomain) {
      const initialExpandedState: Record<string, boolean> = {};
      Object.keys(groupedMeasurements).forEach(category => {
        initialExpandedState[category] = true;
      });
      setExpandedCategories(initialExpandedState);
    }
  }, [activeDomain, groupedMeasurements]);

  const toggleCategory = (category: string) => {
    setExpandedCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
    playSound('/click.wav');
  };

  const toggleAll = () => {
    const allExpanded = Object.values(expandedCategories).every(Boolean);
    const newState: Record<string, boolean> = {};
    Object.keys(groupedMeasurements).forEach(category => {
      newState[category] = !allExpanded;
    });
    setExpandedCategories(newState);
    playSound('/click.wav');
  };

  const areAllExpanded = Object.keys(expandedCategories).length > 0 && Object.values(expandedCategories).every(Boolean);

  const toggleYear = (year: number) => {
    setExpandedYears(prev => ({ ...prev, [year]: prev[year] === undefined ? false : !prev[year] }));
    playSound('/click.wav');
  };


  // Form states
  const [measurementSearchTerm, setMeasurementSearchTerm] = useState("");
  const [selectedMeasurementId, setSelectedMeasurementId] = useState<string | null>(null);
  const [selectedLevel, setSelectedLevel] = useState<number | null>(null);
  const [predictionYear, setPredictionYear] = useState<string>("");
  const [isMeasurementDropdownOpen, setIsMeasurementDropdownOpen] = useState(false);
  const [expandedYears, setExpandedYears] = useState<Record<number, boolean>>({});
  const [predictionSearchQuery, setPredictionSearchQuery] = useState("");

  // Extract a flat list of all measurements for the dropdown
  const allMeasurementsFlat = React.useMemo(() => {
    const arr: { id: string; title: string; domain: string; subdomain: string; unit: string; levels: any[] }[] = [];
    MAIN_DOMAINS.forEach(domain => {
      domain.subdomains.forEach(subdomain => {
        subdomain.measurements.forEach(measurement => {
          arr.push({
            id: measurement.id,
            title: measurement.title,
            domain: domain.name,
            subdomain: subdomain.name,
            unit: measurement.unit,
            levels: measurement.levels,
          });
        });
      });
    });
    return arr;
  }, []);

  const filteredMeasurements = React.useMemo(() => {
    if (!measurementSearchTerm) return allMeasurementsFlat;
    return allMeasurementsFlat.filter(m => m.title.toLowerCase().includes(measurementSearchTerm.toLowerCase()));
  }, [allMeasurementsFlat, measurementSearchTerm]);

  const selectedMeasurementData = React.useMemo(() => {
    return allMeasurementsFlat.find(m => m.id === selectedMeasurementId);
  }, [allMeasurementsFlat, selectedMeasurementId]);


  const handleEditPrediction = (measurementId: string, level: number, year: number) => {
    setSelectedMeasurementId(measurementId);
    setSelectedLevel(level);
    setPredictionYear(year.toString());
    const m = allMeasurementsFlat.find(x => x.id === measurementId);
    if (m) {
      setMeasurementSearchTerm(m.title);
    }
  };

  const handleDeletePrediction = (measurementId: string, level: number) => {
    if (window.confirm("Are you sure you want to delete this prediction?")) {
      const key = `${measurementId}_${level}`;
      setUserPredictions(prev => {
        const newDict = { ...prev };
        delete newDict[key];
        return newDict;
      });
    }
  };

  const handlePredictionSubmit = (e: React.FormEvent) => {

    e.preventDefault();
    if (!selectedMeasurementId || selectedLevel === null || !predictionYear) return;

    const yearNum = parseInt(predictionYear, 10);
    if (isNaN(yearNum)) return;

    const key = `${selectedMeasurementId}_${selectedLevel}`;
    setUserPredictions(prev => ({
      ...prev,
      [key]: {
        year: yearNum,
        timestamp: Date.now()
      }
    }));
    playSound('/click.wav');

    // Optional reset
    // setPredictionYear("");
  };



  // Compute flat list of all predictions across all domains/measurements
  const allPredictions = React.useMemo(() => {
    const predictions: {
      year: number;
      name: string;
      title: string;
      level: number;
      goal: number;
      label?: string;
      unit?: string;
      isUser?: boolean;
      timestamp?: number;
      measurementId?: string;
    }[] = [];

    MAIN_DOMAINS.forEach(domain => {
      domain.subdomains.forEach(subdomain => {
        subdomain.measurements.forEach(measurement => {
          measurement.levels.forEach(level => {
            // Add AI Predictions
            if (predictionFilter === 'both' || predictionFilter === 'ai') {
              if (level.aiPredictions) {
                level.aiPredictions.forEach(pred => {
                  predictions.push({
                    year: pred.year,
                    name: pred.name,
                    title: measurement.title,
                    level: level.level,
                    goal: level.goal,
                    label: level.label,
                    unit: measurement.unit,
                    isUser: false,
                    measurementId: measurement.id
                  });
                });
              }
            }

            // Add User Predictions
            if (predictionFilter === 'both' || predictionFilter === 'mine') {
              const userKey = `${measurement.id}_${level.level}`;
              const userPred = userPredictions[userKey];
              if (userPred) {
                predictions.push({
                  year: userPred.year,
                  name: "My Prediction",
                  title: measurement.title,
                  level: level.level,
                  goal: level.goal,
                  label: level.label,
                  unit: measurement.unit,
                  isUser: true,
                  timestamp: userPred.timestamp,
                  measurementId: measurement.id
                });
              }
            }
          });
        });
      });
    });

    // Apply search filter
    const filteredPredictions = predictions.filter(p => {
      if (!predictionSearchQuery) return true;
      const q = predictionSearchQuery.toLowerCase();
      return p.title.toLowerCase().includes(q) ||
             p.name.toLowerCase().includes(q) ||
             p.year.toString().includes(q);
    });

    // Group by year
    const groupedByYear: Record<number, typeof filteredPredictions> = {};
    filteredPredictions.forEach(p => {
      if (!groupedByYear[p.year]) {
        groupedByYear[p.year] = [];
      }
      groupedByYear[p.year].push(p);
    });

    // Sort years chronologically
    const sortedYears = Object.keys(groupedByYear).map(Number).sort((a, b) => a - b);

    // Sort predictions alphabetically within each year
    sortedYears.forEach(year => {
      groupedByYear[year].sort((a, b) => {
        if (a.name === b.name) {
          return a.title.localeCompare(b.title);
        }
        return a.name.localeCompare(b.name);
      });
      });

    return { sortedYears, groupedByYear };
  }, [predictionFilter, userPredictions, predictionSearchQuery]);

  // Don't render until we know the initial tab (to avoid hydration mismatch or flash of wrong tab)
  if (activeMainTab === -1 || !activeDomain || !activeMainDomain) return null;

  const getDomainIconColorClass = (mainDomainId: string) => {
    switch (mainDomainId) {
      case "civilization":
        return "text-red-500/10 dark:text-red-400/10";
      case "hardware":
        return "text-slate-500/10 dark:text-slate-400/10";
      case "automation":
        return "text-yellow-500/10 dark:text-yellow-400/10";
      case "sustainability":
        return "text-blue-500/10 dark:text-blue-400/10";
      case "neuro":
        return "text-emerald-500/10 dark:text-emerald-400/10";
      default:
        return "text-indigo-500/10 dark:text-indigo-400/10";
    }
  };

  const getDomainIcon = (subdomainId: string, mainDomainId: string) => {
    const colorClass = getDomainIconColorClass(mainDomainId);
    const className = `w-[24rem] h-[24rem] md:w-[32rem] md:h-[32rem] ${colorClass} pointer-events-none absolute left-1/2 top-1/2 animate-float`;
    switch (subdomainId) {
      case "lev":
        return <HeartIcon className={className} />;
      case "ai":
        return <SparklesIcon className={className} />;
      case "bci":
        return <CpuChipIcon className={className} />;
      case "cultured-meat":
        return <BeakerIcon className={className} />;
      case "nuclear-fusion":
        return <FireIcon className={className} />;
      case "space-exploration":
        return <RocketLaunchIcon className={className} />;
      case "quantum-computing":
        return <WindowIcon className={className} />;
      case "robotics":
        return <WrenchScrewdriverIcon className={className} />;
      case "self-driving-car":
        return <TruckIcon className={className} />;
      case "superconductor":
        return <BoltIcon className={className} />;
      case "vr":
        return <EyeIcon className={className} />;
      case "mind-upload":
        return <CloudArrowUpIcon className={className} />;
      default:
        return <SwatchIcon className={className} />;
    }
  };

  return (
    <div className="w-full mx-auto p-4 md:p-6 lg:p-8">
      <div className="mb-6 flex flex-col items-center text-center relative py-12 md:py-20">
        <div className="absolute inset-x-0 -top-24 bottom-0 z-0 pointer-events-none overflow-visible">
          {getDomainIcon(activeDomain.id, activeMainDomain.id)}
        </div>
        <div className="relative z-10 flex flex-col items-center mt-8">
          <div className="flex flex-col lg:flex-row items-center w-full justify-between relative mb-2 gap-4">
            <div className="hidden lg:block lg:flex-1"></div>
            <div className="flex justify-center z-0 lg:flex-1 w-full shrink-0">
              <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white whitespace-nowrap">
                Future Progress Bar
              </h1>
            </div>
            <div className="flex justify-center lg:justify-end relative z-20 lg:flex-1 w-full">
              <button
                onClick={() => {
                  setIsPredictionsModalOpen(true);
                  playSound('/click.wav');
                }}
                className="flex items-center gap-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-4 py-2 rounded-xl shadow-sm hover:shadow-md hover:bg-slate-50 dark:hover:bg-slate-800 active:scale-95 transition-all text-sm font-bold text-slate-700 dark:text-slate-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-slate-950"
              >
                <SparklesIcon className="w-5 h-5 text-indigo-500" />
                Full List of Predictions
              </button>
            </div>
          </div>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl mt-4">
            Tracking the frontiers of human innovation across 5 domains and 12 subdomains.
          </p>
        </div>

        {/* Predictions Modal */}
        {isPredictionsModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-white dark:bg-slate-950 w-full max-w-7xl max-h-[90vh] rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 flex flex-col overflow-hidden relative">
              <div className="flex items-center justify-between p-4 md:p-6 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
                <h2 className="text-xl md:text-2xl font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-2">
                  <SparklesIcon className="w-6 h-6 text-indigo-500" />
                  Full List of Predictions
                </h2>
                <button
                  onClick={() => {
                    setIsPredictionsModalOpen(false);
                    playSound('/click.wav');
                  }}
                  className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-500 transition-colors cursor-pointer"
                >
                  <XMarkIcon className="w-6 h-6" />
                </button>
              </div>
              <div className="p-4 md:p-6 overflow-y-auto flex-1 space-y-8 bg-slate-50/30 dark:bg-slate-900/20">

                {/* Form to add user prediction */}
                <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm mb-6">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">Add Your Own Prediction</h3>
                  <form onSubmit={handlePredictionSubmit} className="flex flex-col gap-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {/* Measurement Dropdown */}
                      <div className="relative">
                        <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1 uppercase tracking-wider">Measurement</label>
                        <input
                          type="text"
                          placeholder="Search measurement..."
                          value={isMeasurementDropdownOpen ? measurementSearchTerm : selectedMeasurementData ? selectedMeasurementData.title : measurementSearchTerm}
                          onChange={(e) => {
                            setMeasurementSearchTerm(e.target.value);
                            setIsMeasurementDropdownOpen(true);
                            setSelectedMeasurementId(null);
                            setSelectedLevel(null);
                          }}
                          onFocus={() => setIsMeasurementDropdownOpen(true)}
                          className="w-full bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
                        />
                        {isMeasurementDropdownOpen && (
                          <div className="absolute z-20 w-full mt-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-xl max-h-60 overflow-y-auto">
                            {filteredMeasurements.length === 0 ? (
                              <div className="p-3 text-sm text-slate-500 text-center">No measurements found.</div>
                            ) : (
                              filteredMeasurements.map(m => (
                                <button
                                  key={m.id}
                                  type="button"
                                  onClick={() => {
                                    setSelectedMeasurementId(m.id);
                                    setMeasurementSearchTerm("");
                                    setIsMeasurementDropdownOpen(false);
                                    setSelectedLevel(null); // Reset level
                                  }}
                                  className="w-full text-left p-3 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 border-b border-slate-100 dark:border-slate-700/50 last:border-0"
                                >
                                  <div className="text-sm font-semibold text-slate-900 dark:text-white">{m.title}</div>
                                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{m.domain} &gt; {m.subdomain}</div>
                                </button>
                              ))
                            )}
                          </div>
                        )}
                        {/* Invisible backdrop to close dropdown */}
                        {isMeasurementDropdownOpen && (
                          <div
                            className="fixed inset-0 z-10"
                            onClick={() => setIsMeasurementDropdownOpen(false)}
                          ></div>
                        )}
                      </div>

                      {/* Level Dropdown */}
                      <div>
                        <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1 uppercase tracking-wider">Level</label>
                        <select
                          value={selectedLevel === null ? "" : selectedLevel}
                          onChange={(e) => setSelectedLevel(parseInt(e.target.value, 10))}
                          disabled={!selectedMeasurementId}
                          className="w-full bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          <option value="" disabled>Select a Level</option>
                          {selectedMeasurementData?.levels.map(l => (
                            <option key={l.level} value={l.level}>
                              Level {l.level}: {l.label ? l.label : `${l.goal} ${selectedMeasurementData.unit || ''}`}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Year Input */}
                      <div>
                        <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 mb-1 uppercase tracking-wider">Year</label>
                        <div className="flex gap-2">
                          <input
                            type="number"
                            placeholder="e.g. 2030"
                            value={predictionYear}
                            onChange={(e) => setPredictionYear(e.target.value)}
                            min={new Date().getFullYear()}
                            className="flex-1 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
                          />
                          <button
                            type="submit"
                            disabled={!selectedMeasurementId || selectedLevel === null || !predictionYear}
                            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-300 dark:disabled:bg-slate-700 text-white rounded-lg text-sm font-bold transition-colors disabled:cursor-not-allowed"
                          >
                            Save
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>

                {/* Filters */}
                <div className="flex justify-center mb-6 items-center gap-4">
                  <div className="relative w-64">
                    <input
                      type="text"
                      placeholder="Search predictions..."
                      value={predictionSearchQuery}
                      onChange={(e) => setPredictionSearchQuery(e.target.value)}
                      className="w-full bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
                    />
                  </div>
                  <div className="inline-flex bg-slate-100 dark:bg-slate-800 p-1 rounded-lg border border-slate-200 dark:border-slate-700">
                    <button
                      onClick={() => setPredictionFilter('ai')}
                      className={`px-4 py-1.5 rounded-md text-sm font-bold transition-colors ${predictionFilter === 'ai' ? 'bg-white dark:bg-slate-900 shadow-sm text-indigo-600 dark:text-indigo-400' : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'}`}
                    >
                      See only AI
                    </button>
                    <button
                      onClick={() => setPredictionFilter('mine')}
                      className={`px-4 py-1.5 rounded-md text-sm font-bold transition-colors ${predictionFilter === 'mine' ? 'bg-white dark:bg-slate-900 shadow-sm text-indigo-600 dark:text-indigo-400' : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'}`}
                    >
                      See only mine
                    </button>
                    <button
                      onClick={() => setPredictionFilter('both')}
                      className={`px-4 py-1.5 rounded-md text-sm font-bold transition-colors ${predictionFilter === 'both' ? 'bg-white dark:bg-slate-900 shadow-sm text-indigo-600 dark:text-indigo-400' : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'}`}
                    >
                      See both
                    </button>
                  </div>
                </div>

                {/* Predictions Table */}
                <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm bg-white dark:bg-slate-900">
                  <table className="w-full text-left text-sm whitespace-nowrap">
                    <thead className="bg-slate-50 dark:bg-slate-800/50 text-slate-600 dark:text-slate-300 border-b border-slate-200 dark:border-slate-700">
                      <tr>
                        <th className="px-4 py-3 font-semibold">Year</th>
                        <th className="px-4 py-3 font-semibold">Predictor</th>
                        <th className="px-4 py-3 font-semibold">Measurement</th>
                        <th className="px-4 py-3 font-semibold">Level & Goal</th>
                        <th className="px-4 py-3 font-semibold text-right">Date Made</th>
                        <th className="px-4 py-3 font-semibold text-right">Actions</th>
                      </tr>
                    </thead>
                    {allPredictions.sortedYears.map(year => {
                      const isExpanded = expandedYears[year] !== false; // Default true
                      return (
                        <tbody key={year} className="divide-y divide-slate-200 dark:divide-slate-700/50">
                          {/* Year Header Row */}
                          <tr
                            onClick={() => toggleYear(year)}
                            className="bg-slate-100 dark:bg-slate-800 cursor-pointer hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                          >
                            <td colSpan={6} className="px-4 py-2 font-bold text-slate-900 dark:text-white">
                              <div className="flex items-center gap-2">
                                <span className={`transform transition-transform ${isExpanded ? 'rotate-90' : ''}`}>&#9654;</span>
                                {year} ({allPredictions.groupedByYear[year].length} predictions)
                              </div>
                            </td>
                          </tr>

                          {/* Prediction Rows */}
                          {isExpanded && allPredictions.groupedByYear[year].map((pred, idx) => {
                            let rowClass = "hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors";
                            let predictorColorClass = "text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800";

                            if (pred.isUser) {
                              rowClass = "bg-black text-white hover:bg-slate-900 transition-colors";
                              predictorColorClass = "text-black bg-white";
                            } else {
                              if (pred.name.toLowerCase().includes("grok")) {
                                predictorColorClass = "text-yellow-800 bg-yellow-100 dark:text-yellow-200 dark:bg-yellow-900/30";
                              } else if (pred.name.toLowerCase().includes("claude")) {
                                predictorColorClass = "text-orange-800 bg-orange-100 dark:text-orange-200 dark:bg-orange-900/30";
                              } else if (pred.name.toLowerCase().includes("gemini")) {
                                predictorColorClass = "text-sky-800 bg-sky-100 dark:text-sky-200 dark:bg-sky-900/30";
                              } else if (pred.name.toLowerCase().includes("gpt")) {
                                predictorColorClass = "text-emerald-800 bg-emerald-100 dark:text-emerald-200 dark:bg-emerald-900/30";
                              }
                            }

                            return (
                              <tr key={`${year}-${idx}`} className={rowClass}>
                                <td className={`px-4 py-3 font-mono font-bold ${pred.isUser ? 'text-white' : 'text-indigo-600 dark:text-indigo-400'}`}>
                                  {pred.year}
                                </td>
                                <td className="px-4 py-3">
                                  <span className={`text-xs font-bold px-2 py-1 rounded uppercase tracking-wider ${predictorColorClass}`}>
                                    {pred.name}
                                  </span>
                                </td>
                                <td className={`px-4 py-3 font-medium ${pred.isUser ? 'text-slate-200' : 'text-slate-900 dark:text-white'} whitespace-normal break-words max-w-sm`} title={pred.title}>
                                  {pred.title}
                                </td>
                                <td className="px-4 py-3">
                                  <div className="flex items-center gap-2 text-xs whitespace-normal break-words max-w-xs">
                                    <span className="uppercase tracking-wider font-semibold opacity-90">L{pred.level}</span>
                                    <span className="opacity-50">&bull;</span>
                                    <span className="opacity-90" title={pred.label ? pred.label : `${pred.goal} ${pred.unit || ''}`}>
                                      {pred.label ? pred.label : `${pred.goal} ${pred.unit || ''}`}
                                    </span>
                                  </div>
                                </td>
                                <td className="px-4 py-3 text-right text-xs opacity-70">
                                  {pred.timestamp ? new Date(pred.timestamp).toLocaleDateString() : 'N/A'}
                                </td>
                                <td className="px-4 py-3 text-right text-xs">
                                  {pred.isUser && pred.measurementId && (
                                    <div className="flex justify-end gap-3">
                                      <button
                                        onClick={() => handleEditPrediction(pred.measurementId!, pred.level, pred.year)}
                                        className="text-slate-300 hover:text-indigo-400 transition-colors"
                                        title="Edit Prediction"
                                      >
                                        Edit
                                      </button>
                                      <button
                                        onClick={() => handleDeletePrediction(pred.measurementId!, pred.level)}
                                        className="text-slate-300 hover:text-red-400 transition-colors"
                                        title="Delete Prediction"
                                      >
                                        Delete
                                      </button>
                                    </div>
                                  )}
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      );
                    })}
                    {allPredictions.sortedYears.length === 0 && (
                      <tbody>
                        <tr>
                          <td colSpan={6} className="px-4 py-8 text-center text-slate-500">
                            No predictions found for the selected filter.
                          </td>
                        </tr>
                      </tbody>
                    )}
                  </table>
                </div>

              </div>
            </div>
          </div>
        )}
      </div>

      <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 shadow-sm overflow-hidden transition-colors duration-200 relative z-10">
        <div className="w-full overflow-hidden">
          {/* Header Row - Main Domains */}
          <div className="flex flex-wrap border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 transition-colors duration-200">
            {MAIN_DOMAINS.map((domain, index) => {
              const isActive = index === activeMainTab;

              let activeClasses = "text-white dark:text-slate-900 border-slate-900 dark:border-white bg-slate-900 dark:bg-white";
              if (isActive) {
                switch (domain.name) {
                  case "AUTOMATION":
                    activeClasses = "text-white border-red-600 bg-red-600 dark:border-red-500 dark:bg-red-500";
                    break;
                  case "CIVILIZATION":
                    activeClasses = "text-white border-slate-500 bg-slate-500 dark:border-slate-400 dark:bg-slate-400";
                    break;
                  case "HARDWARE":
                    activeClasses = "text-slate-900 border-yellow-400 bg-yellow-400 dark:border-yellow-500 dark:bg-yellow-500";
                    break;
                  case "NEURO":
                    activeClasses = "text-white border-blue-600 bg-blue-600 dark:border-blue-500 dark:bg-blue-500";
                    break;
                  case "SUSTAINABILITY":
                    activeClasses = "text-white border-emerald-600 bg-emerald-600 dark:border-emerald-500 dark:bg-emerald-500";
                    break;
                  default:
                    break;
                }
              }

              return (
                <button
                  key={`main-header-${index}`}
                  onClick={() => handleMainTabClick(index)}
                  className={`
                    flex-1 min-w-fit
                    py-2 px-1 sm:py-3 sm:px-2
                    flex items-center justify-center
                    text-center whitespace-nowrap sm:whitespace-normal sm:break-words sm:hyphens-auto leading-tight
                    text-[9px] sm:text-[10px] md:text-[11px] lg:text-xs
                    font-bold tracking-wider sm:tracking-widest
                    uppercase transition-all duration-200
                    active:scale-95
                    border-b-2 cursor-pointer
                    ${
                      isActive
                        ? activeClasses
                        : "text-slate-500 dark:text-slate-400 border-transparent hover:text-slate-700 dark:hover:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/50"
                    }
                    ${index !== MAIN_DOMAINS.length - 1 ? "border-r border-slate-200 dark:border-slate-800" : ""}
                  `}
                  style={{ wordBreak: 'break-word', hyphens: 'auto' }}
                >
                  {domain.name}
                </button>
              );
            })}
          </div>

          {/* Second Header Row - Subdomains */}
          <div className="flex flex-wrap border-b border-slate-200 dark:border-slate-800 bg-slate-100/50 dark:bg-slate-800/30 transition-colors duration-200">
            {activeMainDomain.subdomains.map((subdomain, index) => {
              const isActive = index === activeSubTab;
              return (
                <button
                  key={`sub-header-${index}`}
                  onClick={() => handleSubTabClick(index)}
                  className={`
                    flex-1 min-w-fit
                    py-2 px-2 sm:py-2 sm:px-4
                    flex items-center justify-center
                    text-center whitespace-nowrap
                    text-[10px] sm:text-xs
                    font-bold tracking-wide
                    uppercase transition-all duration-200
                    active:scale-95
                    border-b-2 cursor-pointer
                    ${
                      isActive
                        ? "text-indigo-600 dark:text-indigo-400 border-indigo-600 dark:border-indigo-400 bg-indigo-50 dark:bg-indigo-900/20"
                        : "text-slate-500 dark:text-slate-400 border-transparent hover:text-slate-700 dark:hover:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800/60"
                    }
                    ${index !== activeMainDomain.subdomains.length - 1 ? "border-r border-slate-200 dark:border-slate-800" : ""}
                  `}
                >
                  {subdomain.name}
                </button>
              );
            })}
          </div>

          {/* Body Rows - Selected Tab Content */}
          <div className="flex flex-col p-4 md:p-6 lg:p-8 space-y-6">
            {activeDomain.description && (
              <div className="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 text-sm md:text-base leading-relaxed">
                {activeDomain.description}
              </div>
            )}

            {activeDomain.id === "lev" && <LevProgressGraph />}
            {activeDomain.id === "nuclear-fusion" && <NuclearFusionGraph />}
            {activeDomain.id === "bci" && <BciGraph />}
            {activeDomain.id === "vr" && <VrGraph />}
            {activeDomain.id === "superconductor" && <SuperconductorGraph />}
            {activeDomain.id === "robotics" && <RoboticsGraph />}
            {activeDomain.id === "space-exploration" && <SpaceExplorationGraph />}
            {activeDomain.id === "ai" && <AiGraph />}
            {activeDomain.id === "quantum-computing" && <QuantumComputingGraph />}
            {activeDomain.id === "mind-upload" && <MindUploadGraph />}

            {activeDomain.measurements.length === 0 ? (
              <div className="py-12 text-center text-slate-500 dark:text-slate-400">
                Data for {activeDomain.name} is coming soon.
              </div>
            ) : (
              <div className="space-y-8">
                {Object.keys(groupedMeasurements).length > 1 && (
                  <div className="flex justify-end">
                    <button
                      onClick={toggleAll}
                      className="text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-slate-100 transition-all cursor-pointer flex items-center gap-1.5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 px-3 py-1.5 rounded-full border border-slate-200 dark:border-slate-700 shadow-sm"
                    >
                      {areAllExpanded ? (
                        <>Collapse All <ChevronUpIcon className="w-4 h-4" /></>
                      ) : (
                        <>Expand All <ChevronDownIcon className="w-4 h-4" /></>
                      )}
                    </button>
                  </div>
                )}

                {Object.entries(groupedMeasurements).map(([category, measurements]) => {
                  const isExpanded = expandedCategories[category];
                  return (
                    <div key={category} className="border border-slate-200 dark:border-slate-800/60 rounded-2xl overflow-hidden bg-slate-50/50 dark:bg-slate-900/20">
                      <button
                        onClick={() => toggleCategory(category)}
                        className="w-full flex items-center justify-between p-4 md:px-6 hover:bg-slate-100/50 dark:hover:bg-slate-800/30 transition-colors text-left group cursor-pointer"
                      >
                        <div className="flex items-center gap-3">
                          <h2 className="text-lg md:text-xl font-bold tracking-tight text-slate-800 dark:text-slate-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                            {category}
                          </h2>
                          <div className="h-px bg-slate-200 dark:bg-slate-800 flex-grow rounded-full transition-colors group-hover:bg-indigo-200 dark:group-hover:bg-indigo-900/50 hidden sm:block"></div>
                        </div>
                        <div className="ml-4 p-1 rounded-full bg-slate-200/50 dark:bg-slate-800/80 text-slate-500 dark:text-slate-400 group-hover:bg-indigo-100 dark:group-hover:bg-indigo-900/50 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors shrink-0">
                          {isExpanded ? (
                            <ChevronUpIcon className="w-5 h-5" />
                          ) : (
                            <ChevronDownIcon className="w-5 h-5" />
                          )}
                        </div>
                      </button>

                      {isExpanded && (
                        <div className="p-4 md:p-6 pt-0 md:pt-0 space-y-6 animate-in slide-in-from-top-2 fade-in duration-200">
                          {measurements.map((measurement) => (
                            <MeasurementCard key={measurement.id} measurement={measurement} />
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}

            <FictionalFuture domainId={activeDomain.id} />
          </div>
        </div>
      </div>
    </div>
  );
}

function MeasurementCard({ measurement }: { measurement: Measurement }) {
  const isLowerBetter = measurement.isLowerBetter;

  // Memoize level-related values
  const { activeLevelIdx, actualCurrentLevel, allGoalsAchieved } = React.useMemo(() => {
    const activeIdx = measurement.levels.findIndex(level => {
      return isLowerBetter
        ? measurement.currentValue > level.goal
        : measurement.currentValue < level.goal;
    });

    let actualLevel = 0;
    if (activeIdx === -1) {
      actualLevel = measurement.levels.length; // Max level reached
    } else if (activeIdx === 0) {
      actualLevel = 0; // Has not reached level 1
    } else {
      actualLevel = measurement.levels[activeIdx - 1].level;
    }

    return {
      activeLevelIdx: activeIdx,
      actualCurrentLevel: actualLevel,
      allGoalsAchieved: activeIdx === -1
    };
  }, [measurement.currentValue, measurement.levels, isLowerBetter]);

  const initialLevelIdx = activeLevelIdx === -1 ? measurement.levels.length - 1 : activeLevelIdx;
  const [viewLevelIdx, setViewLevelIdx] = useState(initialLevelIdx);

  const canGoLeft = viewLevelIdx > 0;
  const canGoRight = viewLevelIdx < measurement.levels.length - 1;

  const handleGoLeft = () => {
    if (canGoLeft) setViewLevelIdx(viewLevelIdx - 1);
  };

  const handleGoRight = () => {
    if (canGoRight) setViewLevelIdx(viewLevelIdx + 1);
  };

  const currentLevelGoal = measurement.levels[viewLevelIdx];
  const previousGoalValue = viewLevelIdx > 0 ? measurement.levels[viewLevelIdx - 1].goal : measurement.baseValue || 0;
  const previousGoalLabel = viewLevelIdx > 0 ? measurement.levels[viewLevelIdx - 1].label : undefined;

  // Calculate percentage for the currently viewed level
  let percentage = 0;
  let displayValue = measurement.currentValue;

  const isQc3 = measurement.id === "qc-3";
  const powerMarkers: number[] = [];

  if (isQc3) {
    const logCurrent = Math.log2(measurement.currentValue);
    const logGoal = Math.log2(currentLevelGoal.goal);
    const logPrevious = Math.log2(previousGoalValue || 1); // fallback to 1 to avoid log2(0)

    // Generate power markers (integers between logPrevious and logGoal, exclusive of ends, or inclusive if we want)
    // Actually we want dots strictly between previous and goal.
    for (let p = Math.ceil(logPrevious); p <= Math.floor(logGoal); p++) {
      if (p > logPrevious && p < logGoal) {
        powerMarkers.push(p);
      }
    }

    if (measurement.currentValue >= currentLevelGoal.goal) {
      percentage = 100;
      displayValue = currentLevelGoal.goal;
    } else if (measurement.currentValue <= previousGoalValue) {
      percentage = 0;
      displayValue = previousGoalValue;
    } else {
      const range = logGoal - logPrevious;
      const progress = logCurrent - logPrevious;
      percentage = Math.max(0, Math.min(100, (progress / range) * 100));
    }
  } else if (isLowerBetter) {
    if (measurement.currentValue <= currentLevelGoal.goal) {
      percentage = 100;
      displayValue = currentLevelGoal.goal;
    } else if (measurement.currentValue >= previousGoalValue) {
      percentage = 0;
      displayValue = previousGoalValue;
    } else {
      const range = previousGoalValue - currentLevelGoal.goal;
      const progress = previousGoalValue - measurement.currentValue;
      percentage = Math.max(0, Math.min(100, (progress / range) * 100));
    }
  } else {
    if (measurement.currentValue >= currentLevelGoal.goal) {
      percentage = 100;
      displayValue = currentLevelGoal.goal; // Cap display at 100% of this level
    } else if (measurement.currentValue <= previousGoalValue) {
      percentage = 0;
      displayValue = previousGoalValue;
    } else {
      const range = currentLevelGoal.goal - previousGoalValue;
      const progress = measurement.currentValue - previousGoalValue;
      percentage = Math.max(0, Math.min(100, (progress / range) * 100));
    }
  }

  // Should we show the actual current value marker, or just a generic completion marker?
  const isViewingCompletedLevel = isLowerBetter
    ? measurement.currentValue <= currentLevelGoal.goal
    : measurement.currentValue >= currentLevelGoal.goal;
  const isViewingFutureLevel = isLowerBetter
    ? measurement.currentValue >= previousGoalValue
    : measurement.currentValue <= previousGoalValue;

  const getLevelMedalInfo = (level: number) => {
    switch (level) {
      case 0: return { name: "Stone", className: "bg-stone-200 text-stone-800 dark:bg-stone-800 dark:text-stone-300 border border-stone-300 dark:border-stone-700" };
      case 1: return { name: "Iron", className: "bg-slate-300 text-slate-800 dark:bg-slate-700 dark:text-slate-200 border border-slate-400 dark:border-slate-600" };
      case 2: return { name: "Copper", className: "bg-orange-200 text-orange-900 dark:bg-orange-900/50 dark:text-orange-300 border border-orange-400 dark:border-orange-700" };
      case 3: return { name: "Bronze", className: "bg-amber-700/30 text-amber-900 dark:bg-amber-900/60 dark:text-amber-400 border border-amber-700/50 dark:border-amber-700/60" };
      case 4: return { name: "Silver", className: "bg-gradient-to-r from-slate-100 via-slate-300 to-slate-100 text-slate-800 dark:from-slate-700 dark:via-slate-500 dark:to-slate-700 dark:text-slate-100 border border-slate-400 dark:border-slate-500 shadow-sm" };
      case 5: return { name: "Gold", className: "bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-200 text-yellow-900 dark:from-yellow-700 dark:via-yellow-500 dark:to-yellow-700 dark:text-yellow-100 border border-yellow-500 dark:border-yellow-600 shadow-md" };
      case 6: return { name: "Platinum", className: "bg-gradient-to-r from-teal-100 via-cyan-200 to-teal-100 text-teal-900 dark:from-teal-900 dark:via-cyan-700 dark:to-teal-900 dark:text-cyan-100 border border-cyan-400 dark:border-cyan-600 shadow-lg" };
      case 7: return { name: "Antimatter", className: "bg-gradient-to-r from-purple-900 via-black to-purple-900 text-purple-200 dark:from-purple-950 dark:via-black dark:to-purple-950 border border-purple-500/50 shadow-[0_0_10px_rgba(168,85,247,0.5)]" };
      default: return { name: "Unknown", className: "bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-300" };
    }
  };

  const currentMedal = getLevelMedalInfo(actualCurrentLevel);

  return (
    <div className="border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden bg-white dark:bg-slate-900/50 transition-colors duration-200 shadow-sm relative">
      <div className="p-4 md:p-6 relative">
        <div className="flex flex-col md:flex-row md:items-start justify-between mb-4 gap-4">
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white">
              {measurement.title}
            </h3>
            <div className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${currentMedal.className}`}>
              Current Level: {allGoalsAchieved ? `${measurement.levels.length} - MAX` : actualCurrentLevel} ({currentMedal.name})
            </div>
          </div>
          <div className="text-left md:text-right">
            {allGoalsAchieved ? (
              <div className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400">
                All goals achieved!
              </div>
            ) : null}
          </div>
        </div>

        {/* Progress Bar */}
        {currentLevelGoal && (
          <div className="mb-4 mt-12 relative flex items-center gap-4">
            <button
              onClick={handleGoLeft}
              disabled={!canGoLeft}
              className={`p-1 rounded-full transition-opacity ${canGoLeft ? 'text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer' : 'opacity-0 pointer-events-none'}`}
            >
              <ChevronLeftIcon className="w-6 h-6" />
            </button>
            <div className="flex-1 relative">
              {/* Dynamic Current Value Marker */}
              {!isViewingFutureLevel && (
                <div
                  className={`absolute transition-all duration-1000 ease-out ${isQc3 ? 'z-0' : 'z-10'}`}
                  style={{
                    left: `${percentage}%`,
                    transform: 'translateX(-50%)',
                    top: '-32px' // Adjust the top position to accommodate the date text
                  }}
                >
                  <div className="flex flex-col items-center">
                    <div className="bg-slate-800 dark:bg-slate-200 text-white dark:text-slate-900 px-3 py-1.5 rounded-md text-sm font-bold shadow-md whitespace-nowrap relative flex flex-col items-center z-10">
                      {isQc3 ? (
                        <span>2<sup>{Math.log2(measurement.currentValue)}</sup> <span className="font-normal text-xs">{measurement.unit}</span></span>
                      ) : (
                        <span>{measurement.currentValue === Infinity ? '∞' : measurement.currentValue} <span className="font-normal text-xs">{measurement.unit}</span></span>
                      )}
                      {/* Little triangle pointing down */}
                      <div className="absolute -bottom-1 w-2 h-2 bg-slate-800 dark:bg-slate-200 rotate-45"></div>
                    </div>
                    {/* Vertical line through progress bar */}
                    <div className={`w-0.5 ${isQc3 ? 'h-10' : 'h-12'} bg-slate-800 dark:bg-slate-200 opacity-30 my-1`}></div>
                  </div>
                </div>
              )}

              <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-3 md:h-4 overflow-visible relative mt-8">
                <div
                  className="bg-indigo-500 dark:bg-indigo-400 h-full rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${percentage}%` }}
                ></div>
                {isQc3 && powerMarkers.map((power) => {
                  const logGoal = Math.log2(currentLevelGoal.goal);
                  const logPrevious = Math.log2(previousGoalValue || 1);
                  const logCurrent = Math.log2(measurement.currentValue);
                  const posPercent = ((power - logPrevious) / (logGoal - logPrevious)) * 100;

                  const isReached = logCurrent >= power;

                  return (
                    <div
                      key={power}
                      className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none z-10"
                      style={{ left: `${posPercent}%` }}
                    >
                      <div className={`w-5 h-5 rounded-full transition-colors duration-1000 ${isReached ? "bg-indigo-500 dark:bg-indigo-400" : "bg-slate-400 dark:bg-slate-500"}`}></div>
                      <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 mt-3 absolute top-full">2<sup>{power}</sup></span>
                    </div>
                  );
                })}
              </div>
              <div className="flex justify-between mt-12">
                <div className="flex flex-col items-start">
                  <span className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
                    Starting Value
                  </span>
                  <span className="text-lg font-bold text-slate-900 dark:text-white">
                    {previousGoalLabel ? previousGoalLabel : (
                      isQc3 ? <>2<sup>{Math.log2(previousGoalValue || 1)}</sup></> : (
                        <>{previousGoalValue === Infinity ? '∞' : previousGoalValue} <span className="text-sm font-normal text-slate-500 dark:text-slate-400">{measurement.unit}</span></>
                      )
                    )}
                  </span>

                  {/* Render details if available on the current history */}
                  {measurement.history && measurement.history.length > 0 && measurement.history[measurement.history.length - 1].details && (
                    <div className="mt-4 flex flex-col items-start text-xs space-y-2 w-full">
                      <div className="flex items-center gap-1 font-bold text-[10px] text-slate-500 dark:text-slate-400 tracking-widest uppercase mb-1">
                        AS OF TODAY
                        <div className="relative group flex items-center">
                          <QuestionMarkCircleIcon className="w-4 h-4 text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300 cursor-pointer transition-colors" />
                          <div className="absolute left-0 top-full mt-2 w-56 p-2 bg-slate-900/95 dark:bg-slate-800/95 text-slate-100 dark:text-slate-200 text-xs rounded-lg shadow-xl opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 z-50 backdrop-blur-sm border border-slate-700/50 text-left normal-case tracking-normal">
                            Latest real-world values and historically significant past milestones.
                            <div className="absolute -top-1 left-2 w-3 h-3 bg-slate-900/95 dark:bg-slate-800/95 border-t border-l border-slate-700/50 rotate-45 transform translate-y-px"></div>
                          </div>
                        </div>
                      </div>
                      {measurement.history[measurement.history.length - 1].details?.map((detail, idx) => {
                        const isLastUpdated = detail.toLowerCase().startsWith("last updated");

                        if (isLastUpdated) {
                          return (
                            <div key={idx} className="mt-2 w-full flex justify-start">
                              <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-semibold bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800/50 shadow-sm transition-all hover:bg-indigo-100 dark:hover:bg-indigo-900/50">
                                <svg className="w-3.5 h-3.5 mr-1.5 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                {detail}
                              </span>
                            </div>
                          );
                        }

                        return (
                          <div key={idx} className="flex items-start gap-1.5 py-1 text-slate-700 dark:text-slate-300">
                            <span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-indigo-400 dark:bg-indigo-500 shrink-0"></span>
                            <span className="font-medium text-sm">{detail}</span>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-xs font-medium text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-1">
                    Level {currentLevelGoal.level} Goal
                  </span>
                  <span className="text-lg font-bold text-slate-900 dark:text-white">
                    {currentLevelGoal.label ? currentLevelGoal.label : (
                      isQc3 ? <>2<sup>{Math.log2(currentLevelGoal.goal)}</sup></> : (
                        <>{currentLevelGoal.goal} <span className="text-sm font-normal text-slate-500 dark:text-slate-400">{measurement.unit}</span></>
                      )
                    )}
                  </span>

                  {(currentLevelGoal.aiPredictions && currentLevelGoal.aiPredictions.length > 0) || currentLevelGoal.realityYear ? (
                    <div className="mt-3 flex flex-col items-end text-xs space-y-1.5">
                      {currentLevelGoal.realityYear && (
                        <div className="flex items-center gap-1.5 text-slate-800 dark:text-slate-200 mb-1">
                          <span className="font-semibold">Reality:</span>
                          <span className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400 px-1.5 py-0.5 rounded font-mono font-medium">
                            {currentLevelGoal.realityYear}
                          </span>
                        </div>
                      )}
                      {currentLevelGoal.aiPredictions && currentLevelGoal.aiPredictions.length > 0 && (
                        <>
                          <div className="flex items-center gap-1 mb-0.5 mt-1">
                            <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 tracking-wider bg-slate-100 dark:bg-slate-800/50 px-2 py-0.5 rounded-full border border-slate-200 dark:border-slate-700/50">
                              PREDICTIONS BY
                            </span>
                            <div className="relative group flex items-center">
                              <QuestionMarkCircleIcon className="w-4 h-4 text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300 cursor-pointer transition-colors" />
                              <div className="absolute right-0 bottom-full mb-2 w-64 md:w-80 p-3 bg-slate-900/95 dark:bg-slate-800/95 text-slate-100 dark:text-slate-200 text-xs rounded-lg shadow-xl opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 z-50 backdrop-blur-sm border border-slate-700/50 text-left">
                                <span className="font-bold block mb-1">DISCLAIMER:</span>
                                The predictions gathered here are not intended to show the definitive accuracy of each model. Due to how LLMs work, each attempt to get a prediction will result in different answers. As such, there may be inconsistent predictions (such as stating BCI medical-only use will be approved in less countries than free elective use at a certain year). Therefore, the purposes of the AI predictions are:
                                <br/><br/>
                                <span className="font-semibold text-indigo-300">Number 1:</span> To have a baseline for what the average expectation is for each milestone<br/>
                                <span className="font-semibold text-indigo-300">Number 2:</span> To have fun with how precise or imprecise the models can be
                                {/* Little triangle pointing down */}
                                <div className="absolute -bottom-1 right-1 w-3 h-3 bg-slate-900/95 dark:bg-slate-800/95 border-b border-r border-slate-700/50 rotate-45 transform translate-y-px"></div>
                              </div>
                            </div>
                          </div>
                          {[...currentLevelGoal.aiPredictions]
                            .sort((a, b) => a.year - b.year)
                            .map((pred, idx) => {
                              // Determine color based on AI name
                              let colorClass = "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300";
                              let yearBgClass = "bg-slate-200/50 dark:bg-slate-700/50";

                              if (pred.name.toLowerCase().includes("grok")) {
                                colorClass = "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-400 border border-yellow-200/50 dark:border-yellow-800/50";
                                yearBgClass = "bg-yellow-200/50 dark:bg-yellow-800/50";
                              } else if (pred.name.toLowerCase().includes("claude")) {
                                colorClass = "bg-orange-100 text-orange-800 dark:bg-orange-900/40 dark:text-orange-400 border border-orange-200/50 dark:border-orange-800/50";
                                yearBgClass = "bg-orange-200/50 dark:bg-orange-800/50";
                              } else if (pred.name.toLowerCase().includes("gemini")) {
                                colorClass = "bg-sky-100 text-sky-800 dark:bg-sky-900/40 dark:text-sky-400 border border-sky-200/50 dark:border-sky-800/50";
                                yearBgClass = "bg-sky-200/50 dark:bg-sky-800/50";
                              } else if (pred.name.toLowerCase().includes("gpt")) {
                                colorClass = "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-400 border border-emerald-200/50 dark:border-emerald-800/50";
                                yearBgClass = "bg-emerald-200/50 dark:bg-emerald-800/50";
                              }

                              return (
                                <div key={idx} className={`flex items-center gap-1.5 px-2 py-1 rounded-md ${colorClass} shadow-sm whitespace-nowrap`}>
                                  <span className="font-medium">{pred.name}:</span>
                                  <span className={`px-1.5 py-0.5 rounded font-mono font-semibold ${yearBgClass}`}>
                                    {pred.year}
                                  </span>
                                </div>
                              );
                            })}
                        </>
                      )}
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
            <button
              onClick={handleGoRight}
              disabled={!canGoRight}
              className={`p-1 rounded-full transition-opacity ${canGoRight ? 'text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer' : 'opacity-0 pointer-events-none'}`}
            >
              <ChevronRightIcon className="w-6 h-6" />
            </button>
          </div>
        )}
      </div>

    </div>
  );
}
