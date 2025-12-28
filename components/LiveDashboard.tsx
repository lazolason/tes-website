'use client';

import { useEffect, useState, useRef } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { NavIcons } from './icons/NavIcons';

// Real data simulating 8-week TES intervention
const generateBaselineData = () => {
  return [
    { week: 0, tr: 6.8, ttd: 8.2, vacuum: 88.5, phase: 'Baseline' },
    { week: 1, tr: 6.9, ttd: 8.3, vacuum: 88.3, phase: 'Baseline' },
    { week: 2, tr: 7.0, ttd: 8.5, vacuum: 88.1, phase: 'Baseline' },
  ];
};

const generateInterventionData = () => {
  return [
    { week: 0, tr: 6.8, ttd: 8.2, vacuum: 88.5, phase: 'Baseline' },
    { week: 1, tr: 6.9, ttd: 8.3, vacuum: 88.3, phase: 'Baseline' },
    { week: 2, tr: 7.0, ttd: 8.5, vacuum: 88.1, phase: 'Baseline' },
    { week: 3, tr: 5.8, ttd: 7.2, vacuum: 89.5, phase: 'Intervention' }, // TES starts
    { week: 4, tr: 4.5, ttd: 6.1, vacuum: 90.8, phase: 'Intervention' },
    { week: 5, tr: 3.2, ttd: 5.0, vacuum: 91.5, phase: 'Stabilization' },
    { week: 6, tr: 2.5, ttd: 4.5, vacuum: 92.1, phase: 'Stabilization' },
    { week: 7, tr: 2.1, ttd: 4.3, vacuum: 92.5, phase: 'Verified' },
    { week: 8, tr: 2.0, ttd: 4.2, vacuum: 92.6, phase: 'Verified' },
  ];
};

interface MetricCardProps {
  label: string;
  value: string;
  unit: string;
  trend: 'up' | 'down';
  improvement: string;
  icon: React.ComponentType<{ className?: string }>;
  accentColor: 'emerald' | 'secondary';
}

function MetricCard({ label, value, unit, trend, improvement, icon: Icon, accentColor }: MetricCardProps) {
  const gradientColor = accentColor === 'emerald'
    ? 'from-emerald-500 to-emerald-600'
    : 'from-secondary-500 to-secondary-600';

  const iconBg = accentColor === 'emerald'
    ? 'bg-emerald-500/20'
    : 'bg-secondary-500/20';

  const trendIcon = trend === 'down' ? '↓' : '↑';
  const trendColor = trend === 'down' ? 'text-emerald-400' : 'text-secondary-400';

  return (
    <div className="relative group">
      <div className="relative bg-slate-800/40 backdrop-blur-md border border-slate-700/50 rounded-2xl p-6 hover:border-slate-600 transition-all duration-300">
        {/* Icon */}
        <div className={`w-10 h-10 rounded-xl ${iconBg} backdrop-blur-sm flex items-center justify-center mb-3`}>
          <Icon className={`w-5 h-5 ${accentColor === 'emerald' ? 'text-emerald-400' : 'text-secondary-400'}`} />
        </div>

        {/* Label */}
        <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
          {label}
        </div>

        {/* Value */}
        <div className="flex items-baseline gap-2 mb-2">
          <span className={`text-4xl font-bold bg-gradient-to-r ${gradientColor} bg-clip-text text-transparent tabular-nums`}>
            {value}
          </span>
          <span className="text-lg text-slate-500">{unit}</span>
        </div>

        {/* Trend */}
        <div className={`flex items-center gap-1 text-sm ${trendColor}`}>
          <span className="text-xl">{trendIcon}</span>
          <span className="font-semibold">{improvement}</span>
        </div>

        {/* Glow effect */}
        <div className={`absolute inset-0 bg-gradient-to-r ${gradientColor} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />
      </div>
    </div>
  );
}

export default function LiveDashboard() {
  const [data, setData] = useState(generateBaselineData());
  const [isActive, setIsActive] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Intersection observer for auto-play on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          // Start intervention animation after 1 second
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

  // Calculate current metrics from latest data point
  const latestData = data[data.length - 1];
  const baselineData = data[0];

  const trImprovement = ((baselineData.tr - latestData.tr) / baselineData.tr * 100).toFixed(0);
  const ttdImprovement = ((baselineData.ttd - latestData.ttd) / baselineData.ttd * 100).toFixed(0);
  const vacuumImprovement = ((latestData.vacuum - baselineData.vacuum) / baselineData.vacuum * 100).toFixed(1);

  return (
    <div ref={ref} className="relative rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 lg:p-10 shadow-2xl border border-slate-700/50 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      {/* Header */}
      <div className="relative flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="relative flex h-3 w-3">
            {isActive && (
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            )}
            <span className={`relative inline-flex rounded-full h-3 w-3 ${isActive ? 'bg-emerald-500' : 'bg-slate-600'}`}></span>
          </div>
          <span className="text-white font-bold text-lg">Live Performance Metrics</span>
        </div>
        <div className={`text-sm font-semibold px-3 py-1 rounded-full ${
          isActive
            ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
            : 'bg-slate-700/50 text-slate-400 border border-slate-600/30'
        }`}>
          {isActive ? 'TES Active' : 'Baseline'}
        </div>
      </div>

      {/* Chart */}
      <div className="relative bg-slate-800/30 backdrop-blur-sm rounded-2xl p-6 mb-6 border border-slate-700/30">
        <ResponsiveContainer width="100%" height={280}>
          <LineChart data={data} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
            <defs>
              <linearGradient id="trGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="ttdGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#f97316" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#f97316" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" opacity={0.2} />
            <XAxis
              dataKey="week"
              stroke="#64748b"
              tick={{ fill: '#94a3b8', fontSize: 12 }}
              label={{ value: 'Week', position: 'insideBottom', offset: -5, fill: '#64748b' }}
            />
            <YAxis
              stroke="#64748b"
              tick={{ fill: '#94a3b8', fontSize: 12 }}
              label={{ value: '°C', angle: -90, position: 'insideLeft', fill: '#64748b' }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: '#1e293b',
                border: '1px solid #334155',
                borderRadius: '12px',
                boxShadow: '0 10px 40px rgba(0,0,0,0.3)'
              }}
              labelStyle={{ color: '#94a3b8', fontWeight: 600 }}
              itemStyle={{ color: '#e2e8f0' }}
            />
            <Legend
              wrapperStyle={{ paddingTop: '20px' }}
              iconType="line"
            />
            <Line
              type="monotone"
              dataKey="tr"
              stroke="#10b981"
              strokeWidth={3}
              name="TR (Temperature Rise)"
              dot={{ fill: '#10b981', r: 4 }}
              activeDot={{ r: 6, fill: '#10b981' }}
              animationDuration={2000}
              fill="url(#trGradient)"
            />
            <Line
              type="monotone"
              dataKey="ttd"
              stroke="#f97316"
              strokeWidth={3}
              name="TTD (Terminal Temp Diff)"
              dot={{ fill: '#f97316', r: 4 }}
              activeDot={{ r: 6, fill: '#f97316' }}
              animationDuration={2000}
              fill="url(#ttdGradient)"
            />
          </LineChart>
        </ResponsiveContainer>

        {/* Phase annotation */}
        {isActive && (
          <div className="absolute top-8 right-8 bg-slate-700/50 backdrop-blur-md border border-slate-600/50 rounded-lg px-3 py-2 animate-fade-in">
            <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">
              Phase: {latestData.phase}
            </div>
          </div>
        )}
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <MetricCard
          label="Temperature Rise"
          value={latestData.tr.toFixed(1)}
          unit="°C"
          trend="down"
          improvement={`${trImprovement}% improvement`}
          icon={NavIcons.CheckCircle}
          accentColor="emerald"
        />
        <MetricCard
          label="Terminal Temp Diff"
          value={latestData.ttd.toFixed(1)}
          unit="°C"
          trend="down"
          improvement={`${ttdImprovement}% improvement`}
          icon={NavIcons.CheckCircle}
          accentColor="secondary"
        />
        <MetricCard
          label="Vacuum Stability"
          value={latestData.vacuum.toFixed(1)}
          unit="kPa"
          trend="up"
          improvement={`${vacuumImprovement}% improvement`}
          icon={NavIcons.Data}
          accentColor="emerald"
        />
      </div>

      {/* Disclaimer */}
      <div className="mt-6 text-xs text-slate-500 text-center">
        Simulated data based on typical TES intervention results. Actual performance varies by site conditions.
      </div>
    </div>
  );
}
