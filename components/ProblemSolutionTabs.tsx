"use client";

import { useState } from "react";
import Image from "next/image";
import FadeIn from "./FadeIn";

type TabType = "problem" | "solution" | "approach";

export default function ProblemSolutionTabs() {
  const [activeTab, setActiveTab] = useState<TabType>("problem");

  const tabs = [
    { id: "problem", label: "The Problem", activeClass: "bg-rose-500 ring-rose-500" },
    { id: "solution", label: "The Solution", activeClass: "bg-emerald-500 ring-emerald-500" },
    { id: "approach", label: "Our Approach", activeClass: "bg-blue-500 ring-blue-500" },
  ];

  return (
    <section className="bg-slate-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              From hidden losses to verifiable gains
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              Cooling water systems are often the neglected bottleneck of plant performance. 
              We turn that bottleneck into an efficiency driver.
            </p>
          </div>
        </FadeIn>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12" role="tablist" aria-label="TES overview tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as TabType)}
              id={`tab-${tab.id}`}
              type="button"
              role="tab"
              aria-selected={activeTab === tab.id}
              aria-controls={`panel-${tab.id}`}
              className={`px-8 py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                activeTab === tab.id
                  ? `${tab.activeClass} text-white shadow-lg scale-105 ring-2 ring-offset-2`
                  : "bg-white text-slate-600 hover:bg-slate-100 shadow-sm hover:shadow"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="relative min-h-[400px]">
          
          {/* PROBLEM CONTENT */}
          <div
            role="tabpanel"
            id="panel-problem"
            aria-labelledby="tab-problem"
            className={`transition-all duration-500 absolute inset-0 ${
              activeTab === "problem"
                ? "opacity-100 translate-x-0 z-10 relative"
                : "opacity-0 translate-x-8 pointer-events-none absolute"
            }`}
          >
            <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-rose-100">
              <div className="grid lg:grid-cols-2">
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="inline-flex items-center gap-2 text-rose-600 font-bold uppercase tracking-wider text-sm mb-4">
                    <span className="w-2 h-2 rounded-full bg-rose-600"></span>
                    Pain Points
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-6">
                    The Silent Efficiency Killer
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex gap-4">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-rose-100 flex items-center justify-center text-rose-600 font-bold text-xs">✕</div>
                      <p className="text-slate-600"><strong>Micro-fouling:</strong> Even a thin slime layer creates an insulating barrier, destroying heat transfer.</p>
                    </li>
                    <li className="flex gap-4">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-rose-100 flex items-center justify-center text-rose-600 font-bold text-xs">✕</div>
                      <p className="text-slate-600"><strong>Corrosion:</strong> MIC (Microbiologically Influenced Corrosion) quietly eats away at condenser tubes.</p>
                    </li>
                    <li className="flex gap-4">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-rose-100 flex items-center justify-center text-rose-600 font-bold text-xs">✕</div>
                      <p className="text-slate-600"><strong>Lost Megawatts:</strong> Higher backpressure means burning more coal for the same output.</p>
                    </li>
                  </ul>
                </div>
                <div className="bg-rose-50 relative h-64 lg:h-auto overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    {/* Placeholder for Problem Illustration - using CSS pattern for now */}
                    <div className="w-full h-full bg-[radial-gradient(#e11d48_1px,transparent_1px)] [background-size:16px_16px] opacity-10"></div>
                     <div className="absolute inset-0 flex items-center justify-center text-rose-200">
                        <svg className="w-32 h-32" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                     </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SOLUTION CONTENT */}
          <div
            role="tabpanel"
            id="panel-solution"
            aria-labelledby="tab-solution"
            className={`transition-all duration-500 absolute inset-0 ${
              activeTab === "solution"
                ? "opacity-100 translate-x-0 z-10 relative"
                : "opacity-0 translate-x-8 pointer-events-none absolute"
            }`}
          >
             <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-emerald-100">
              <div className="grid lg:grid-cols-2">
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="inline-flex items-center gap-2 text-emerald-600 font-bold uppercase tracking-wider text-sm mb-4">
                    <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                    The TES System
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-6">
                    Active Performance Management
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex gap-4">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold text-xs">✓</div>
                      <p className="text-slate-600"><strong>Clean Surfaces:</strong> Mexel®432 forms a protective film that prevents fouling from attaching.</p>
                    </li>
                    <li className="flex gap-4">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold text-xs">✓</div>
                      <p className="text-slate-600"><strong>IoT Dosing:</strong> Smart skids dose precisely when needed, logging every event to the cloud.</p>
                    </li>
                    <li className="flex gap-4">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold text-xs">✓</div>
	                      <p className="text-slate-600"><strong>Efficiency Gains:</strong> Maintain &quot;Day 1&quot; cleanliness for better vacuum and lower fuel use.</p>
                    </li>
                  </ul>
                </div>
                 <div className="bg-emerald-50 relative h-64 lg:h-auto overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full h-full bg-[radial-gradient(#059669_1px,transparent_1px)] [background-size:16px_16px] opacity-10"></div>
                     <div className="absolute inset-0 flex items-center justify-center text-emerald-200">
                        <svg className="w-32 h-32" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                     </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* APPROACH CONTENT */}
          <div
            role="tabpanel"
            id="panel-approach"
            aria-labelledby="tab-approach"
            className={`transition-all duration-500 absolute inset-0 ${
              activeTab === "approach"
                ? "opacity-100 translate-x-0 z-10 relative"
                : "opacity-0 translate-x-8 pointer-events-none absolute"
            }`}
          >
             <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-blue-100">
              <div className="grid lg:grid-cols-2">
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="inline-flex items-center gap-2 text-blue-600 font-bold uppercase tracking-wider text-sm mb-4">
                    <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                    Methodology
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-6">
                    A Partnership, Not a Product
                  </h3>
	                  <p className="text-slate-600 mb-6">
	                    We don&apos;t just sell drums of chemical. We deploy a managed system with shared goals.
	                  </p>
                  <ul className="space-y-4">
                    <li className="flex gap-4">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs">1</div>
                      <p className="text-slate-600"><strong>Baseline:</strong> We verify current performance gaps using Eskom RT&D protocols.</p>
                    </li>
                    <li className="flex gap-4">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs">2</div>
                      <p className="text-slate-600"><strong>Intervention:</strong> We deploy the skid and chemistry, monitoring TR and TTD in real-time.</p>
                    </li>
                    <li className="flex gap-4">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs">3</div>
                      <p className="text-slate-600"><strong>Verification:</strong> Independent referees validate the results for total transparency.</p>
                    </li>
                  </ul>
                </div>
                <div className="bg-blue-50 relative h-64 lg:h-auto overflow-hidden">
                   <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full h-full bg-[radial-gradient(#2563eb_1px,transparent_1px)] [background-size:16px_16px] opacity-10"></div>
                     <div className="absolute inset-0 flex items-center justify-center text-blue-200">
                        <svg className="w-32 h-32" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        </svg>
                     </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
