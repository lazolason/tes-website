"use client";

import FadeIn from "./FadeIn";

const steps = [
  {
    number: "01",
    title: "Chemistry",
    subtitle: "Mexel®432",
    description:
      "A surface-active emulsion that forms a protective film on wetted surfaces. It cleans existing fouling, prevents new deposition, and inhibits corrosion—replacing multiple traditional chemicals.",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "IoT Dosing",
    subtitle: "Smart Skid",
    description:
      "Automated dosing units with Thingy:91X technology. They log every dosing event, monitor tank levels, and allow remote configuration to ensure precise treatment delivery.",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Data",
    subtitle: "Performance View",
    description:
      "Real-time correlation of dosing history with plant performance metrics (TR, TTD, Vacuum). This makes condenser fouling a visible, managed variable rather than a hidden loss.",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Verification",
    subtitle: "RT&D Protocol",
    description:
      "A structured framework based on Eskom RT&D protocols. We establish a baseline, implement the intervention, and verify results with independent referees like the WRC.",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function ProcessSteps() {
  return (
    <div className="relative">
      {/* Connecting Line (Desktop) */}
      <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-slate-200 -z-10" />

      <div className="grid gap-8 lg:grid-cols-4 lg:gap-6">
        {steps.map((step, index) => (
          <FadeIn key={step.number} delay={index * 150} className="relative bg-white lg:bg-transparent">
             {/* Mobile Connecting Line (Vertical) */}
             {index !== steps.length - 1 && (
                <div className="lg:hidden absolute top-12 left-6 bottom-[-32px] w-0.5 bg-slate-200 -z-10" />
             )}

            <div className="flex flex-col lg:items-center text-left lg:text-center group">
              {/* Icon / Number Bubble */}
              <div className="flex items-center gap-4 lg:flex-col lg:gap-4">
                <div className="relative flex items-center justify-center w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-emerald-600 shadow-md ring-4 ring-white group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                    <span className="absolute -top-1 -right-1 lg:top-0 lg:right-0 bg-slate-900 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full border-2 border-white">
                        {step.number}
                    </span>
                </div>
                <div>
                   <h3 className="text-lg font-bold text-slate-900">{step.title}</h3>
                   <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700 lg:hidden block">
                     {step.subtitle}
                   </span>
                </div>
              </div>
              
              <div className="ml-16 lg:ml-0 lg:mt-4">
                 <span className="hidden lg:block text-xs font-semibold uppercase tracking-wider text-emerald-700 mb-2">
                     {step.subtitle}
                 </span>
                 <p className="text-sm leading-relaxed text-slate-600">
                    {step.description}
                 </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
