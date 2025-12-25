"use client";

import Image from "next/image";
import FadeIn from "./FadeIn";

const pillars = [
  {
    title: "Eskom RT&D Protocol",
    description:
      "Verification follows the Tutuka Rev08 baseline → intervention → review structure to ensure comparable results.",
    icon: (
      <svg
        className="h-10 w-10 text-emerald-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
  {
    title: "Field Data Reference",
    description:
      "Measured improvements are reported against site baselines and ambient conditions to avoid false positives.",
    icon: (
      <svg
        className="h-10 w-10 text-emerald-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
        />
      </svg>
    ),
  },
  {
    title: "Independent Review",
    description:
      "WRC or other referees can be engaged to validate data integrity and conclusions.",
    icon: (
      <svg
        className="h-10 w-10 text-emerald-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
        />
      </svg>
    ),
  },
];

export default function ValidationSection() {
  return (
    <section className="border-t border-slate-200 bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <FadeIn>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-emerald-700">
                Verification
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                Baseline → intervention → review.
              </h2>
              <p className="mt-4 text-base text-slate-600">
                TES is built on engineering discipline. We establish comparable baselines,
                log every intervention, and deliver audit-ready datasets for review.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-slate-700">
                <li className="flex gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-600" />
                  Baseline window aligned to plant operating regime.
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-600" />
                  Dosing events recorded and correlated with KPIs.
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-600" />
                  Independent referees supported when required.
                </li>
              </ul>
            </div>
          </FadeIn>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-sm">
            {/* Image brief: /public/images/home-verification-instrumentation.png — Instrumentation panel or data logger in a plant control room, clear gauges and readouts, calm lighting. */}
            <Image
              src="/images/home-verification-instrumentation.png"
              alt="Plant instrumentation panel showing logged measurements"
              fill
              className="object-cover"
              loading="lazy"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
            />
          </div>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {pillars.map((pillar, index) => (
            <FadeIn key={pillar.title} delay={index * 150}>
              <div className="flex flex-col items-start rounded-2xl border border-slate-200 bg-white p-6 shadow-md transition-all duration-200 hover:shadow-lg hover:scale-[1.02]">
                <div className="mb-4 rounded-xl bg-emerald-50 p-3 ring-1 ring-emerald-100">
                  {pillar.icon}
                </div>
                <h3 className="text-lg font-semibold text-slate-900">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {pillar.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
