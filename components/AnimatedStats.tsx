"use client";

import Image from "next/image";
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
    description: "Temperature rise recovery measured in trial conditions",
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
    description: "Extended trial period with stable monitoring",
  },
  {
    value: 15,
    suffix: "+",
    label: "Years Experience",
    description: "Mexel International deployment track record",
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
            {/* Image brief: /public/images/home-outcomes-cooling-water.jpg — Cooling water in motion near condenser outflow, high shutter detail, industrial realism. */}
            <Image
              src="/images/home-outcomes-cooling-water.jpg"
              alt="Cooling water discharge with visible flow texture"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-700 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              <p className="text-3xl font-semibold text-emerald-700 lg:text-4xl">
                <AnimatedNumber
                  value={stat.value}
                  suffix={stat.suffix}
                  prefix={stat.prefix}
                  isVisible={isVisible}
                />
              </p>
              <p className="mt-2 text-sm font-semibold text-slate-900">
                {stat.label}
              </p>
              <p className="mt-1 text-xs text-slate-600">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
