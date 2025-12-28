"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { NavIcons } from "./icons/NavIcons";

interface StatItem {
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  gradient: string; // Tailwind gradient classes
  accentColor: string; // For number and icon
}

const stats: StatItem[] = [
  {
    value: 95,
    suffix: "%",
    label: "Condenser Efficiency Improvement",
    description: "Typical efficiency recovery in wet-cooled power stations",
    icon: NavIcons.CheckCircle,
    gradient: "from-emerald-500/10 to-emerald-600/5",
    accentColor: "emerald",
  },
  {
    value: 50,
    suffix: "+",
    label: "MW Recovered Annually",
    description: "Average output restoration across deployed sites",
    icon: NavIcons.Power,
    gradient: "from-secondary-500/10 to-secondary-600/5",
    accentColor: "secondary",
  },
  {
    value: 15,
    suffix: "+",
    label: "Years Proven Results",
    description: "Track record of verified customer outcomes",
    icon: NavIcons.Data,
    gradient: "from-emerald-500/10 to-blue-500/5",
    accentColor: "emerald",
  },
  {
    value: 98,
    suffix: "%",
    label: "Client Retention Rate",
    description: "Customers who continue deployment after pilot",
    icon: NavIcons.CheckCircle,
    gradient: "from-secondary-500/10 to-emerald-500/5",
    accentColor: "secondary",
  },
];

function AnimatedNumber({
  value,
  suffix,
  prefix,
  isVisible,
}: {
  value: number;
  suffix: string;
  prefix?: string;
  isVisible: boolean;
}) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setDisplayValue(value);
        clearInterval(timer);
      } else {
        setDisplayValue(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  return (
    <span className="tabular-nums">
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
}

export default function AnimatedStats() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="border-t border-slate-200 bg-slate-50 py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-emerald-700">
              Outcomes
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-slate-900 sm:text-3xl">
              Measured outcomes, not marketing claims.
            </h2>
            <p className="mt-4 text-sm text-slate-600 sm:text-base">
              Results are reported against baselines and operating context, with
              data available for independent review when required.
            </p>
          </div>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            {/* Image brief: /public/images/home-outcomes-cooling-water.png — Cooling water in motion near condenser outflow, high shutter detail, industrial realism. */}
            <Image
              src="/hero-image.webp"
              alt="Cooling water discharge with visible flow texture"
              fill
              className="object-cover"
              loading="lazy"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
            />
          </div>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const StatIcon = stat.icon;
            const numberColor = stat.accentColor === 'secondary'
              ? 'bg-gradient-to-r from-secondary-600 to-secondary-500'
              : 'bg-gradient-to-r from-emerald-600 to-emerald-500';
            const iconBg = stat.accentColor === 'secondary'
              ? 'bg-gradient-to-br from-secondary-500 to-secondary-600'
              : 'bg-gradient-to-br from-emerald-500 to-emerald-600';

            return (
              <div
                key={stat.label}
                className={`relative group transition-all duration-700 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                {/* Animated gradient blob background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100`}
                  aria-hidden="true"
                />

                {/* Card content */}
                <div className="relative bg-white/80 backdrop-blur-sm border border-slate-200 rounded-2xl p-6 hover:border-slate-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  {/* Icon with gradient background */}
                  <div className={`w-12 h-12 rounded-xl ${iconBg} flex items-center justify-center mb-4 shadow-lg`}>
                    <StatIcon className="w-6 h-6 text-white" />
                  </div>

                  {/* Animated number with gradient */}
                  <p className={`text-4xl font-bold ${numberColor} bg-clip-text text-transparent tabular-nums`}>
                    <AnimatedNumber
                      value={stat.value}
                      suffix={stat.suffix}
                      prefix={stat.prefix}
                      isVisible={isVisible}
                    />
                  </p>

                  {/* Label and description */}
                  <p className="mt-3 text-sm font-semibold text-slate-900 leading-tight">
                    {stat.label}
                  </p>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                    {stat.description}
                  </p>

                  {/* Bottom accent line */}
                  <div className={`mt-4 h-1 w-0 bg-gradient-to-r ${
                    stat.accentColor === 'secondary'
                      ? 'from-secondary-500 to-emerald-500'
                      : 'from-emerald-500 to-blue-500'
                  } group-hover:w-full transition-all duration-500 rounded-full`} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
