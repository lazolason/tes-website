"use client";

import FadeIn from "./FadeIn";

type ProcessStepsVariant = "default" | "tes-system";

interface ProcessStepsProps {
  variant?: ProcessStepsVariant;
}

const defaultSteps = [
  {
    number: "01",
    title: "Chemistry",
    subtitle: "Mexel®432",
    description:
      "Surface-active emulsion that forms a protective film on wetted surfaces, dislodges fouling, and inhibits corrosion.",
    icon: (
      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Dosing",
    subtitle: "Controlled Skid",
    description:
      "Automated dosing skids with level sensing and event logs. Every dose is traceable and repeatable.",
    icon: (
      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Monitoring",
    subtitle: "Performance View",
    description:
      "Dosing history correlated with TR, TTD, and vacuum stability to make fouling visible.",
    icon: (
      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Verification",
    subtitle: "RT&D Protocol",
    description:
      "Baseline → intervention → review workflow aligned with Eskom RT&D and independent referees when needed.",
    icon: (
      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const tesSystemSteps = [
  {
    number: "01",
    title: "Chemistry",
    subtitle: "Mexel®432",
    description:
      "Forms a controlled surface condition to reduce water-side film resistance.",
    icon: defaultSteps[0].icon,
  },
  {
    number: "02",
    title: "Dosing",
    subtitle: "Controlled Skid",
    description: "Traceable dosing with logged events and repeatable settings.",
    icon: defaultSteps[1].icon,
  },
  {
    number: "03",
    title: "Monitoring",
    subtitle: "Condenser Indicators",
    description: "TR, TTD, condenser vacuum, and water-side stability (make-up/blowdown).",
    icon: defaultSteps[2].icon,
  },
  {
    number: "04",
    title: "Verification",
    subtitle: "Baseline → Review",
    description: "Baseline → intervention → review with audit-ready evidence pack.",
    icon: defaultSteps[3].icon,
  },
];

export default function ProcessSteps({ variant = "default" }: ProcessStepsProps) {
  const steps = variant === "tes-system" ? tesSystemSteps : defaultSteps;

  return (
    <div className="relative">
      <div className="absolute top-12 hidden h-0.5 w-full bg-slate-200 lg:block" />

      <div className="grid gap-8 lg:grid-cols-4 lg:gap-6">
        {steps.map((step, index) => (
          <FadeIn key={step.number} delay={index * 150} className="relative">
            <div className="group flex flex-col text-left lg:items-center lg:text-center">
              <div className="flex items-center gap-4 lg:flex-col lg:gap-4">
                <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-emerald-600 shadow-sm ring-4 ring-white transition-transform duration-300 group-hover:scale-105 lg:h-16 lg:w-16">
                  {step.icon}
                  <span className="absolute -right-1 -top-1 rounded-full border-2 border-white bg-slate-900 px-1.5 py-0.5 text-[10px] font-bold text-white">
                    {step.number}
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    {step.title}
                  </h3>
                  <span className="block text-xs font-semibold uppercase tracking-wider text-emerald-700 lg:hidden">
                    {step.subtitle}
                  </span>
                </div>
              </div>

              <div className="ml-16 lg:ml-0 lg:mt-4">
                <span className="mb-2 hidden text-xs font-semibold uppercase tracking-wider text-emerald-700 lg:block">
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
