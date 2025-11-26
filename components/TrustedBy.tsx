"use client";

import { useEffect, useRef, useState } from "react";

const partners = [
  { name: "Eskom", abbr: "ESKOM" },
  { name: "Water Research Commission", abbr: "WRC" },
  { name: "Mexel International", abbr: "MEXEL" },
  { name: "Nordic Semiconductor", abbr: "NORDIC" },
  { name: "Brundtland Carbon", abbr: "BRUNDTLAND" },
];

export default function TrustedBy() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="border-b bg-white py-8 lg:py-10">
      <div className="mx-auto max-w-6xl px-4">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-gray-400">
          Trusted by industry leaders
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {partners.map((partner, index) => (
            <div
              key={partner.name}
              className={`flex h-12 items-center justify-center transition-all duration-700 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="group relative flex items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 px-4 py-2 transition-all hover:border-brand-500/30 hover:bg-brand-50">
                <div className="flex h-6 w-6 items-center justify-center rounded bg-brand-500/10">
                  <span className="text-[10px] font-bold text-brand-600">
                    {partner.abbr.charAt(0)}
                  </span>
                </div>
                <span className="text-xs font-medium text-gray-600 group-hover:text-gray-900">
                  {partner.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
