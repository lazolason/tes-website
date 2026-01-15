'use client';

import { useEffect, useState, useRef } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

// --- INLINE ICONS (To prevent 'Sea of Red' errors) ---
const Icons = {
  Temperature: ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path fillRule="evenodd" d="M13.5 4.06c0-1.058-.42-2.039-1.135-2.802A3.955 3.955 0 009.688.045 4.002 4.002 0 005.137 6.917c-.895.81-1.387 1.9-1.387 3.083 0 1.25.56 2.454 1.556 3.238l.006.004a4.01 4.01 0 001.624 2.89l.491.328a.75.75 0 00.832 0l.491-.328a4.01 4.01 0 001.624-2.89l.006-.004c.996-.784 1.556-1.988 1.556-3.238 0-1.183-.492-2.273-1.387-3.083.435-.91.65-1.91.65-2.956z" clipRule="evenodd" />
    </svg>
  ),
  Pressure: ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z" clipRule="evenodd" />
    </svg>
  ),
  TrendingDown: ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path fillRule="evenodd" d="M1.72 17.78a.75.75 0 001.06 1.06l5.47-5.47 2.47 2.47a.75.75 0 001.06 0l9.47-9.47a.75.75 0 00-1.06-1.06l-8.94 8.94-2.47-2.47a.75.75 0 00-1.06 0l-6 6z" clipRule="evenodd" />
    </svg>
  ),
  TrendingUp: ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path fillRule="evenodd" d="M1.72 6.22a.75.75 0 00-1.06 1.06l6 6a.75.75 0 001.06 0l2.47-2.47 8.94 8.94a.75.75 0 101.06-1.06l-9.47-9.47a.75.75 0 00-1.06 0l-2.47 2.47-5.47-5.47z" clipRule="evenodd" />
    </svg>
  )
};

// --- DATA LOGIC: FIXED PHYSICS ---
// Scenario: Fouled condenser (High Back Pressure, Low TR) -> Clean (Low Back Pressure, High TR)
const generateBaselineData = () => {
  return [
    { week: 0, tr: 4.2, ttd: 8.5, backPressure: 12.5, phase: 'Fouled Baseline' },
    { week: 1, tr: 4.1, ttd: 8.8, backPressure: 12.8, phase: 'Fouled Baseline' },
    { week: 2, tr: 4.0, ttd: 9.1, backPressure: 13.1, phase: 'Fouled Baseline' },
  ];
};

const generateInterventionData = () => {
  return [
    { week: 0, tr: 4.2, ttd: 8.5, backPressure: 12.5, phase: 'Fouled Baseline' },
    { week: 1, tr: 4.1, ttd: 8.8, backPressure: 12.8, phase: 'Fouled Baseline' },
    { week: 2, tr: 4.0, ttd: 9.1, backPressure: 13.1, phase: 'Dosing Start' },
    // Dosing starts: TTD drops (better approach), Back Pressure drops (vacuum recovery), TR rises (better heat transfer)
    { week: 3, tr: 5.5, ttd: 7.2, backPressure: 10.5, phase: 'Intervention' },
    { week: 4, tr: 6.8, ttd: 5.5, backPressure: 8.2, phase: 'Intervention' },
    { week: 5, tr: 7.5, ttd: 4.8, backPressure: 6.5, phase: 'Stabilization' },
    { week: 6, tr: 7.9, ttd: 4.2, backPressure: 5.8, phase: 'Stabilization' },
    { week: 7, tr: 8.1, ttd: 3.9, backPressure: 5.5, phase: 'Verified' },
    { week: 8, tr: 8.2, ttd: 3.8, backPressure: 5.4, phase: 'Verified' },
  ];
};

interface MetricCardProps {
  label: string;
  value: string;
  unit: string;
  trend: 'up' | 'down';
  trendLabel: string; // e.g., "Efficiency Gain" or "Vacuum Recovery"
  icon: React.ComponentType<{ className?: string }>;
  accentColor: 'emerald' | 'amber';
}

function MetricCard({ label, value, unit, trend, trendLabel, icon: Icon, accentColor }: MetricCardProps) {
  const gradientColor = accentColor === 'emerald'
    ? 'from-emerald-400 to-emerald-500'
    : 'from-amber-400 to-amber-500';

  const iconBg = accentColor === 'emerald'
    ? 'bg-emerald-500/20 text-emerald-400'
    : 'bg-amber-500/20 text-amber-400';

  const TrendIcon = trend === 'up' ? Icons.TrendingUp : Icons.TrendingDown;
  const trendColor = accentColor === 'emerald' ? 'text-emerald-400' : 'text-amber-400';

  return (
    <div className="relative group">
      <div className="relative bg-slate-800/60 backdrop-blur-md border border-slate-700/50 rounded-2xl p-6 hover:border-slate-500 transition-all duration-300">
        <div className="flex justify-between items-start mb-4">
          <div className={`w-10 h-10 rounded-lg ${iconBg} flex items-center justify-center`}>
            <Icon className="w-5 h-5" />
          </div>
          {/* Trend Indicator */}
          <div className={`flex items-center gap-1 text-xs font-bold uppercase tracking-wide ${trendColor}`}>
            <TrendIcon className="w-4 h-4" />
            <span>{trendLabel}</span>
          </div>
        </div>

        <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
          {label}
        </div>

        <div className="flex items-baseline gap-2">
          <span className={`text-3xl lg:text-4xl font-bold bg-gradient-to-r ${gradientColor} bg-clip-text text-transparent tabular-nums`}>
            {value}
          </span>
          <span className="text-sm font-medium text-slate-500">{unit}</span>
        </div>
      </div>
    </div>
  );
}

export default function LiveDashboard() {
  const [data, setData] = useState(generateBaselineData());
  const [isActive, setIsActive] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          setTimeout(() => {
            setIsActive(true);
            setData(generateInterventionData());
          }, 1000);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  const latestData = data[data.length - 1];

  return (
    <div ref={ref} className="relative rounded-3xl bg-slate-900 p-6 lg:p-10 shadow-2xl border border-slate-800 overflow-hidden">

      {/* Header */}
      <div className="relative flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className={`relative flex h-3 w-3`}>
              {isActive && <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>}
              <span className={`relative inline-flex rounded-full h-3 w-3 ${isActive ? 'bg-emerald-500' : 'bg-red-500'}`}></span>
            </span>
            <span className="text-white font-bold text-lg tracking-tight">Live Performance Data</span>
          </div>
          <p className="text-sm text-slate-400">Comparing Baseline (Fouled) vs. Post-Intervention (Clean)</p>
        </div>

        <div className={`self-start sm:self-auto text-xs font-bold px-4 py-2 rounded-full border transition-colors duration-500 ${isActive
            ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
            : 'bg-red-500/10 text-red-400 border-red-500/20'
          }`}>
          STATUS: {isActive ? 'TES ACTIVE' : 'FOULED BASELINE'}
        </div>
      </div>

      {/* Main Chart */}
      <div className="relative bg-slate-950/50 rounded-2xl p-4 lg:p-6 mb-8 border border-slate-800">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
            <XAxis dataKey="week" stroke="#475569" tick={{ fill: '#94a3b8', fontSize: 12 }} />
            <YAxis stroke="#475569" tick={{ fill: '#94a3b8', fontSize: 12 }} />
            <Tooltip
              contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', color: '#f8fafc' }}
              itemStyle={{ fontSize: '12px' }}
            />
            <Legend wrapperStyle={{ paddingTop: '20px' }} />

            {/* TR (Good = Up) */}
            <Line
              type="monotone"
              dataKey="tr"
              name="TR (Temp Rise)"
              stroke="#10b981" // Emerald
              strokeWidth={3}
              dot={false}
              animationDuration={2000}
            />

            {/* TTD (Good = Down) */}
            <Line
              type="monotone"
              dataKey="ttd"
              name="TTD (Temp Diff)"
              stroke="#f59e0b" // Amber
              strokeWidth={3}
              dot={false}
              animationDuration={2000}
            />

            {/* Back Pressure (Good = Down) */}
            <Line
              type="monotone"
              dataKey="backPressure"
              name="Back Pressure (kPa)"
              stroke="#ef4444" // Red
              strokeWidth={2}
              strokeDasharray="5 5"
              dot={false}
              animationDuration={2000}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <MetricCard
          label="Back Pressure"
          value={latestData.backPressure.toFixed(1)}
          unit="kPa"
          trend="down"
          trendLabel="Restored"
          icon={Icons.Pressure}
          accentColor="emerald"
        />
        <MetricCard
          label="Terminal Temp Diff"
          value={latestData.ttd.toFixed(1)}
          unit="°C"
          trend="down"
          trendLabel="Optimized"
          icon={Icons.Temperature}
          accentColor="emerald"
        />
        <MetricCard
          label="Heat Transfer (TR)"
          value={latestData.tr.toFixed(1)}
          unit="°C"
          trend="up"
          trendLabel="Recovered"
          icon={Icons.TrendingUp} // Generic Trend Up Icon
          accentColor="amber"
        />
      </div>

      <div className="mt-6 text-[10px] text-slate-500 text-center uppercase tracking-widest">
        *Data based on verified thermodynamic baselines from similar interventions
      </div>
    </div>
  );
}
