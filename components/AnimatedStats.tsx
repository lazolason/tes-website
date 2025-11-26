"use client";

import { useEffect, useRef, useState } from "react";

interface StatItem {
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
  description: string;
}

const stats: StatItem[] = [
  {
    value: 40,
    suffix: "%",
    prefix: "↑",
    label: "TR Improvement",
    description: "Temperature Rise improvement measured at Kriel Unit 6",
  },
  {
    value: 4,
    suffix: "°C",
    prefix: "↓",
    label: "Cooling Gain",
    description: "Average condenser outlet temperature reduction",
  },
  {
    value: 90,
    suffix: "+",
    label: "Days Trial",
    description: "Extended trial period with consistent results",
  },
  {
    value: 15,
    suffix: "+",
    label: "Years Experience",
    description: "Mexel International global deployment track record",
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

    const duration = 2000; // 2 seconds
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
    <section ref={ref} className="border-b bg-gradient-to-br from-gray-900 to-gray-800 py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-400">
            Proven Results
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
            Measurable Impact, Verified Performance
          </h2>
          <p className="mt-3 text-sm text-gray-400">
            Real data from our TES deployments at Eskom power stations
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`group relative overflow-hidden rounded-xl bg-white/5 p-6 backdrop-blur transition-all duration-700 hover:bg-white/10 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-brand-500/10 transition-transform group-hover:scale-150" />
              <div className="relative">
                <p className="text-4xl font-bold text-brand-400 lg:text-5xl">
                  <AnimatedNumber
                    value={stat.value}
                    suffix={stat.suffix}
                    prefix={stat.prefix}
                    isVisible={isVisible}
                  />
                </p>
                <p className="mt-2 text-sm font-semibold text-white">
                  {stat.label}
                </p>
                <p className="mt-1 text-xs text-gray-400">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
