import type { Metadata } from "next";
import Link from "next/link";
import dynamic from "next/dynamic";
import FadeIn from "../../components/FadeIn";
import SystemHeader from "../../components/SystemHeader";
import Tooltip from "../../components/Tooltip";

// Lazy load heavy interactive components
const ModernProcess = dynamic(() => import("../../components/ModernProcess"), {
  loading: () => <div className="h-96 bg-white animate-pulse" />,
});

const CoolingSchematic = dynamic(() => import("../../components/CoolingSchematic"), {
  loading: () => <div className="h-96 bg-slate-50 animate-pulse" />,
});

// INLINE ICONS to prevent dependency errors and keep the system robust
const Icons = {
  Hardware: (props: any) => (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
    </svg>
  ),
  Chemistry: (props: any) => (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
    </svg>
  ),
  Data: (props: any) => (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2z" />
    </svg>
  )
};

export const metadata: Metadata = {
  title: "TES Integrated System",
  description:
    "TES is a hardware and consumable system combining Mexel®432 emulsions, automated dosing units, and thermodynamic monitoring for condenser efficiency.",
  openGraph: {
    title: "TES Integrated System | Mexel Energy Sustain",
    description:
      "Supply and installation of automated dosing units and Mexel®432 performance emulsions.",
  },
};

export default function TesPage() {
  return (
    <main className="min-h-screen bg-white">
      <SystemHeader
        tag="TECHNOLOGY STACK"
        title="Integrated Hardware & Emulsion System."
        description="TES is not a service contract. It is a proprietary system comprising automated dosing units, the Mexel®432 consumable emulsion, and telemetry integration. The system mechanically injects surfactant at specific intervals to maintain condenser vacuum and thermodynamic transfer."
        continuity="System specifications and component breakdown."
        currentLabel="System Architecture"
      />

      {/* The "Product" Definition - Critical for PFMA */}
      <section className="border-b bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14 lg:py-20">
          <FadeIn>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
              System Components (Supply & Install)
            </h2>
            <p className="mt-4 text-slate-600 max-w-3xl">
              The TES solution is delivered as a turnkey technical installation consisting of three integrated components.
            </p>
          </FadeIn>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "1. The Hardware",
                subtitle: "Automated Dosing Unit",
                desc: "Skid-mounted injection system with programmable logic controllers (PLC) and variable speed drives. Installed directly into the CW intake lines.",
                icon: Icons.Hardware,
              },
              {
                title: "2. The Consumable",
                subtitle: "Mexel®432 Emulsion",
                desc: "A filming polyamine surfactant supplied in bulk IBCs. It acts as a dispersant and corrosion inhibitor, forming a micron-thin barrier on tube surfaces.",
                icon: Icons.Chemistry,
              },
              {
                title: "3. The Telemetry",
                subtitle: "Performance Monitoring",
                desc: "Integration with plant Scada to track Vacuum, TR, and TTD in real-time. Provides verification of system performance against guarantees.",
                icon: Icons.Data,
              },
            ].map((item) => (
              <FadeIn key={item.title} delay={100}>
                <div className="h-full rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:border-emerald-300 transition-colors">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 mb-4">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-sm font-bold uppercase tracking-wide text-slate-400">{item.title}</h3>
                  <div className="text-lg font-bold text-slate-900 mt-1">{item.subtitle}</div>
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Visual */}
      <section className="border-b bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 lg:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <FadeIn>
                <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                  Thermodynamic Verification
                </h2>
                <p className="mt-3 text-base text-slate-600">
                  The system is validated by physical indicators, not theoretical models. We track the recovery of the condenser's design parameters.
                </p>
              </FadeIn>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {[
                  {
                    title: "TR (Temp Rise)",
                    detail: "Restoring the Delta-T across the condenser (Heat Absorption).",
                  },
                  {
                    title: "TTD (Temp Diff)",
                    detail: "Minimizing the gap between Steam Temp and Outlet Water Temp.",
                  },
                  {
                    title: "Back Pressure",
                    detail: "Reducing kPa to design specifications (Vacuum Recovery).",
                  },
                  {
                    title: "Tube Cleanliness",
                    detail: "Physical reduction in fouling factor (Rf) and biological film.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="group rounded-lg border border-slate-200 bg-slate-50 p-4"
                  >
                    <span className="text-xs font-semibold uppercase tracking-wide text-emerald-700">
                      {item.title}
                    </span>
                    <p className="mt-2 text-sm text-slate-700">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <CoolingSchematic />
              <p className="mt-3 text-xs text-slate-500 text-center">
                Fig 1. Typical Injection Layout for 600MW+ Unit
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Deployment Methodology */}
      <ModernProcess />

      {/* Target Sectors - CLEANED (No Food/Ag) */}
      <section className="border-b bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 lg:py-20">
          <FadeIn>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
              Core Applications
            </h2>
          </FadeIn>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <FadeIn delay={100}>
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 shadow-sm h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-white rounded-lg border border-slate-200">
                    <Icons.Hardware className="w-6 h-6 text-slate-700" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">Power Generation (Utilities)</h3>
                </div>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Engineered for 500MW+ wet-cooled units (coal/nuclear) using river or mine-water.
                  Focus on restoring MW output lost to back-pressure/vacuum decay.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={200}>
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 shadow-sm h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-white rounded-lg border border-slate-200">
                    <Icons.Chemistry className="w-6 h-6 text-slate-700" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">Heavy Industry & Mining</h3>
                </div>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Critical cooling for smelter furnaces, compressors, and underground refrigeration.
                  Focus on preventing heat-exchanger fouling in high-solids water loops.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA - Engineering Focus */}
      <section className="bg-slate-900">
        <div className="mx-auto max-w-6xl px-4 py-14 lg:py-20">
          <div className="relative overflow-hidden rounded-2xl border border-slate-700 bg-slate-800 shadow-2xl">
            <div className="relative flex flex-col gap-6 p-8 md:flex-row md:items-center md:justify-between">
              <div className="flex-1">
                <h2 className="text-xl font-bold text-white mb-2">
                  System Specifications
                </h2>
                <p className="text-sm text-slate-400 leading-relaxed max-w-xl">
                  Request the technical data sheets for the Mexel®432 emulsion and the Dosing Unit skid layout.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 text-sm flex-shrink-0">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-6 py-3 font-semibold text-white shadow-sm transition-all hover:bg-emerald-500 hover:shadow-md border border-transparent"
                >
                  Request Data Sheets
                </Link>
                {/* WHATSAPP SAFETY NET */}
                <a
                  href="https://wa.me/27794648298"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-lg border border-slate-600 bg-transparent px-6 py-3 font-semibold text-white hover:bg-slate-700"
                >
                  Talk to Engineering
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
