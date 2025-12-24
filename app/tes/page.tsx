import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "../../components/FadeIn";
import ProcessSteps from "../../components/ProcessSteps";
import SystemHeader from "../../components/SystemHeader";
import CoolingSchematic from "../../components/CoolingSchematic";

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
    <main className="min-h-screen bg-white">
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
          <div className="mt-6 grid gap-8 md:grid-cols-2">
            <FadeIn delay={100}>
              <h3 className="text-sm font-semibold text-slate-900">TES is…</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                <li>• A cooling-water stabilisation and verification layer.</li>
                <li>• Focused on condenser cleanliness and water-side control.</li>
                <li>• Built for traceable dosing and measurable outcomes.</li>
              </ul>
            </FadeIn>
            <FadeIn delay={200}>
              <h3 className="text-sm font-semibold text-slate-900">TES is not…</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                <li>• Not a replacement for maintenance or asset upgrades.</li>
                <li>• Not a boiler programme or combustion optimisation.</li>
                <li>• Not implemented without baseline definition and agreed KPIs.</li>
              </ul>
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
                  Compared at matched load/ambient conditions using agreed baselines.
                </p>
              </FadeIn>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {[
                  {
                    title: "Temperature Rise (TR)",
                    detail: "Cooling-water rise across the condenser.",
                  },
                  {
                    title: "Terminal Temp. Diff. (TTD)",
                    detail: "Primary indicator of fouling resistance.",
                  },
                  {
                    title: "Condenser Vacuum",
                    detail: "Stability under matched load and ambient.",
                  },
                  {
                    title: "Water-Side Stability",
                    detail: "Make-up, blowdown, and chemistry control.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-lg border border-slate-200 bg-white p-4"
                  >
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-700">
                      {item.title}
                    </p>
                    <p className="mt-2 text-sm text-slate-700">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-4">
              <CoolingSchematic />
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
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {[
              {
                step: "Baseline",
                detail:
                  "Confirm KPIs, collection intervals, and operating context before dosing.",
                deliverable: "Baseline pack: KPIs, intervals, operating context.",
              },
              {
                step: "Intervention window",
                detail:
                  "Apply Mexel®432 with controlled dosing and traceable event logs.",
                deliverable: "Event log + dosing trace.",
              },
              {
                step: "Review & sign-off",
                detail:
                  "Compare against baseline, document findings, and confirm repeatability.",
                deliverable: "Comparison report + sign-off notes.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="rounded-lg border border-slate-200 bg-slate-50 p-5"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-emerald-700">
                  {item.step}
                </p>
                <p className="mt-2 text-sm text-slate-700">{item.detail}</p>
                <p className="mt-2 text-xs text-slate-700">{item.deliverable}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 lg:py-20">
          <div className="flex flex-col gap-4 rounded-lg border border-slate-200 bg-slate-50 p-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-lg font-semibold text-slate-900">
                Engage TES with a structured pilot
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                We scope the unit, agree KPIs, and align verification expectations
                before deployment.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700"
              >
                Request a Pilot Study
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center justify-center text-sm font-semibold text-emerald-700 hover:text-emerald-800"
              >
                View Technical Specs
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
