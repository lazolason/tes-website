import type { Metadata } from "next";
import Link from "next/link";
import dynamic from "next/dynamic";
import FadeIn from "../../components/FadeIn";
import SystemHeader from "../../components/SystemHeader";
import Tooltip from "../../components/Tooltip";
import { MonitoringIcon, VerificationIcon } from "../../components/BenefitIcons";

// Lazy load heavy interactive components
const ProcessSteps = dynamic(() => import("../../components/ProcessSteps"), {
  loading: () => <div className="h-96 bg-white animate-pulse" />,
});

const PowerEnergySchematic = dynamic(
  () => import("../../components/schematics/PowerEnergySchematic"),
  {
    loading: () => <div className="h-96 bg-slate-50 animate-pulse" />,
  }
);

export const metadata: Metadata = {
  title: "TES System Overview",
  description:
    "TES is a verifiable cooling-water efficiency system combining Mexel®432 chemistry, controlled dosing, monitoring and RT&D-aligned verification for wet-cooled units.",
  openGraph: {
    title: "TES System Overview | Mexel Energy Sustain",
    description:
      "Chemistry, dosing, monitoring and verification tied to measurable condenser indicators.",
  },
};

export default function TesPage() {
  return (
    <main id="main-content" className="min-h-screen bg-white">
      <SystemHeader
        tag="TES SYSTEM"
        title="System architecture for verifiable cooling-water efficiency."
        description="TES combines Mexel®432 chemistry, controlled dosing, and monitoring tied to condenser indicators (TR, TTD, vacuum). Structured baseline → intervention → review keeps results measurable and audit-ready, designed to stabilise condenser performance — not a replacement for maintenance."
        continuity="This is the system architecture behind the Home overview."
        currentLabel="Architecture"
      />

      {/* What TES is / is not */}
      <section className="border-b bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14 lg:py-20">
          <FadeIn>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
              What TES is — and what it is not
            </h2>
          </FadeIn>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <FadeIn delay={100}>
              <div className="rounded-xl border border-emerald-200 bg-emerald-50/50 p-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100">
                    <svg
                      className="h-5 w-5 text-emerald-700"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-sm font-semibold text-emerald-900">TES is…</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    "A cooling-water stabilisation and verification layer.",
                    "Focused on condenser cleanliness and water-side control.",
                    "Built for traceable dosing and measurable outcomes.",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
                      <svg
                        className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                      >
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
            <FadeIn delay={200}>
              <div className="rounded-xl border border-slate-300 bg-slate-100/50 p-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-200">
                    <svg
                      className="h-5 w-5 text-slate-700"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-sm font-semibold text-slate-900">TES is not…</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    "A replacement for maintenance or asset upgrades.",
                    "A boiler programme or combustion optimisation.",
                    "Implemented without baseline definition and agreed KPIs.",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
                      <svg
                        className="h-5 w-5 text-slate-500 flex-shrink-0 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                      >
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="border-b bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 lg:py-20">
          <FadeIn>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
              TES architecture
            </h2>
            <p className="mt-3 max-w-3xl text-base text-slate-600">
              A four-stage system designed for traceability and measured efficiency
              gains in wet-cooled environments.
            </p>
          </FadeIn>
          <div className="mt-10">
            <ProcessSteps variant="tes-system" />
          </div>
        </div>
      </section>

      {/* Measured Indicators + Technical Visual */}
      <section className="border-b bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14 lg:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <FadeIn>
                <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                  Measured indicators
                </h2>
                <p className="mt-3 text-base text-slate-600">
                  TES tracks condenser indicators that show real water-side performance.
                </p>
                <p className="mt-2 text-sm text-slate-600">
                  Compared at matched load/ambient conditions using agreed{" "}
                  <Tooltip content="A baseline is the reference dataset collected before TES intervention, used to measure performance improvements against controlled conditions.">
                    baselines
                  </Tooltip>.
                </p>
              </FadeIn>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {[
                  {
                    title: "TR",
                    fullTitle: "Temperature Rise",
                    detail: "Cooling-water rise across the condenser.",
                    tooltip: "Temperature Rise (TR) measures the increase in water temperature as it passes through the condenser, indicating heat transfer efficiency.",
                    icon: <MonitoringIcon className="w-5 h-5" />,
                  },
                  {
                    title: "TTD",
                    fullTitle: "Terminal Temperature Difference",
                    detail: "Primary indicator of fouling resistance.",
                    tooltip: "Terminal Temperature Difference (TTD) is the difference between exhaust steam temperature and cooling water outlet temperature. Lower TTD indicates better heat transfer and less fouling.",
                    icon: <MonitoringIcon className="w-5 h-5" />,
                  },
                  {
                    title: "Vacuum",
                    fullTitle: "Condenser Vacuum",
                    detail: "Stability under matched load and ambient.",
                    tooltip: "Condenser vacuum stability indicates consistent low-pressure conditions that improve turbine efficiency. Degraded vacuum often signals fouling or air ingress.",
                    icon: <VerificationIcon className="w-5 h-5" />,
                  },
                  {
                    title: "Water Quality",
                    fullTitle: "Water-Side Stability",
                    detail: "Make-up, blowdown, and chemistry control.",
                    tooltip: "Water-side stability tracks make-up rates, blowdown cycles, and chemistry parameters to ensure optimal treatment and system control.",
                    icon: <VerificationIcon className="w-5 h-5" />,
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="group rounded-lg border border-slate-200 bg-white p-4 transition-all duration-200 hover:border-emerald-300 hover:shadow-md hover:-translate-y-0.5"
                  >
                    <div className="flex items-center justify-between">
                      <Tooltip content={item.tooltip}>
                        <span className="text-xs font-semibold uppercase tracking-wide text-slate-700">
                          {item.title}
                        </span>
                      </Tooltip>
                      <span className="text-emerald-600 transition-transform duration-200 group-hover:scale-110">
                        {item.icon}
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-slate-500">{item.fullTitle}</p>
                    <p className="mt-2 text-sm text-slate-700">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-4">
            <PowerEnergySchematic />
              <p className="mt-3 text-xs text-slate-700">
                Simplified loop view showing TES dosing point and monitored pathways.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation workflow */}
      <section className="border-b bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 lg:py-20">
          <FadeIn>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
              Implementation workflow
            </h2>
            <p className="mt-3 max-w-3xl text-base text-slate-600">
              A repeatable method with traceable logs and consistent baselines.
            </p>
          </FadeIn>
          <div className="mt-10 relative">
            {/* Timeline connector */}
            <div className="absolute top-0 left-1/2 h-full w-0.5 bg-gradient-to-b from-emerald-200 via-emerald-300 to-emerald-200 hidden md:block -translate-x-1/2"></div>

            <div className="grid gap-8 md:grid-cols-3 relative">
              {[
                {
                  step: "Baseline",
                  number: 1,
                  detail:
                    "Confirm KPIs, collection intervals, and operating context before dosing.",
                  deliverable: "Baseline pack: KPIs, intervals, operating context.",
                },
                {
                  step: "Intervention window",
                  number: 2,
                  detail:
                    "Apply Mexel®432 with controlled dosing and traceable event logs.",
                  deliverable: "Event log + dosing trace.",
                },
                {
                  step: "Review & sign-off",
                  number: 3,
                  detail:
                    "Compare against baseline, document findings, and confirm repeatability.",
                  deliverable: "Comparison report + sign-off notes.",
                },
              ].map((item) => (
                <div key={item.step} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 hidden md:flex h-8 w-8 items-center justify-center rounded-full bg-emerald-600 text-white text-xs font-bold shadow-lg ring-4 ring-white z-10">
                    {item.number}
                  </div>

                  <div className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:border-emerald-300 hover:shadow-lg hover:-translate-y-1 md:mt-6">
                    <div className="flex items-center gap-2 mb-3 md:hidden">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-600 text-white text-sm font-bold">
                        {item.number}
                      </div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-emerald-700">
                        {item.step}
                      </p>
                    </div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-emerald-700 mb-3 hidden md:block">
                      {item.step}
                    </p>
                    <p className="text-sm text-slate-700 leading-relaxed">{item.detail}</p>
                    <div className="mt-4 pt-4 border-t border-slate-100">
                      <p className="text-xs font-medium text-slate-500 mb-1">Deliverable:</p>
                      <p className="text-xs text-slate-700">{item.deliverable}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-emerald">
        <div className="mx-auto max-w-6xl px-4 py-14 lg:py-20">
          <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-50 rounded-full -mr-32 -mt-32 opacity-50"></div>
            <div className="relative flex flex-col gap-6 p-8 md:flex-row md:items-center md:justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-emerald-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                  </div>
                  <h2 className="text-base font-semibold text-slate-900">
                    Engage TES with a structured pilot
                  </h2>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed max-w-xl">
                  We scope the unit, agree KPIs, and align verification expectations before deployment. Baseline → intervention → review methodology ensures measurable, audit-ready results.
                </p>
              </div>
              <div className="flex flex-col gap-3 text-sm flex-shrink-0">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-6 py-3 font-semibold text-white shadow-sm transition-all hover:bg-emerald-700 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:ring-offset-2 cta-pulse"
                >
                  Request a Pilot Study
                </Link>
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center gap-1 font-semibold text-emerald-700 transition-colors hover:text-emerald-900"
                >
                  View Technical Specs
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
