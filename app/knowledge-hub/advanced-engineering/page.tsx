import Link from "next/link";
import FadeIn from "../../../components/FadeIn";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Advanced Engineering Sections | TES",
  description:
    "TES advanced engineering guide: troubleshooting field scenarios, failure modes analysis, dosing theory, operating limits, chemistry interactions, data interpretation and pilot failure analysis.",
  openGraph: {
    title: "Advanced Engineering Sections | Mexel Energy Sustain",
    description:
      "Technical depth for engineers: troubleshooting, failure modes, dosing theory, operating constraints and data interpretation.",
  },
};

export default function AdvancedEngineeringPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="border-b bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-16 lg:py-24">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-500">
            Advanced Engineering
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
            Technical depth for real plant conditions.
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-gray-600">
            These sections strengthen the technical foundation of TES documentation, 
            giving engineers, chemistry teams, and station management a clear view of how 
            TES behaves under real plant conditions. Honest, field-tested guidance for 
            troubleshooting, failure analysis, and operational constraints.
          </p>
        </div>
      </section>

      {/* Troubleshooting Section */}
      <section className="border-b">
        <div className="mx-auto max-w-6xl px-4 py-14 lg:py-20">
          <FadeIn>
            <h2 className="text-2xl font-semibold tracking-tight text-gray-900">
              1. Troubleshooting (Common Field Scenarios)
            </h2>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              Real-world scenarios and corrective actions based on field experience.
            </p>
          </FadeIn>

          <div className="mt-8 space-y-8">
            {/* 1.1 TR shows no improvement */}
            <FadeIn delay={100}>
              <div className="rounded-lg border bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900">
                  1.1 TR shows no improvement during intervention
                </h3>
                <div className="mt-4 space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">
                      Possible causes:
                    </h4>
                    <ul className="text-sm text-gray-700 space-y-1 list-disc pl-5">
                      <li>Baseline unstable (load swings, tower fan changes, bypass flows)</li>
                      <li>Mexel®432 underdosed</li>
                      <li>Dosing point incorrect (poor mixing)</li>
                      <li>High suspended solids → TES mobilises but cannot flush through</li>
                      <li>Mechanical restrictions (blocked screens, non-functioning CW pumps)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">
                      Corrective actions:
                    </h4>
                    <ul className="text-sm text-gray-700 space-y-1 list-disc pl-5">
                      <li>Verify load stability ±5%</li>
                      <li>Increase dosing frequency (within safe limits)</li>
                      <li>Check dosing pump calibration</li>
                      <li>Inspect CW screens for partial blockage</li>
                      <li>Perform short backwash cycle if allowable</li>
                    </ul>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* 1.2 TTD unstable */}
            <FadeIn delay={200}>
              <div className="rounded-lg border bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900">
                  1.2 TTD unstable despite dosing
                </h3>
                <div className="mt-4 space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">
                      Causes:
                    </h4>
                    <ul className="text-sm text-gray-700 space-y-1 list-disc pl-5">
                      <li>Vacuum excursions unrelated to fouling</li>
                      <li>Air ingress in condenser</li>
                      <li>Cooling tower performance issue</li>
                      <li>Make-up water chemistry shift (COD or turbidity spike)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">
                      Corrective actions:
                    </h4>
                    <ul className="text-sm text-gray-700 space-y-1 list-disc pl-5">
                      <li>Compare vacuum trace with TR trace (should correlate under fouling)</li>
                      <li>Check air-in leakage tests</li>
                      <li>Review fan configuration and drift losses</li>
                      <li>Request water lab sample</li>
                    </ul>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* 1.3 Sudden dirt mobilisation */}
            <FadeIn delay={300}>
              <div className="rounded-lg border bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900">
                  1.3 Sudden dirt mobilisation
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  This is expected if heavy fouling was present.
                </p>
                <div className="mt-4 space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">
                      Indicators:
                    </h4>
                    <ul className="text-sm text-gray-700 space-y-1 list-disc pl-5">
                      <li>Sharp drop then rise in TR</li>
                      <li>Increased suspended solids</li>
                      <li>Temporary cloudiness at discharge</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">
                      Actions:
                    </h4>
                    <ul className="text-sm text-gray-700 space-y-1 list-disc pl-5">
                      <li>Maintain dosing</li>
                      <li>Check filters/screens</li>
                      <li>Inform chemistry team — not a failure, but a normal TES phase</li>
                    </ul>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Failure Modes Section */}
      <section className="border-b bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-14 lg:py-20">
          <FadeIn>
            <h2 className="text-2xl font-semibold tracking-tight text-gray-900">
              2. Failure Modes (When TES Shows Reduced Effectiveness)
            </h2>
          </FadeIn>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <FadeIn delay={100}>
              <div className="rounded-lg border bg-white p-6 shadow-sm">
                <h3 className="text-base font-semibold text-gray-900">
                  2.1 High-load variability
                </h3>
                <p className="mt-2 text-sm text-gray-700">
                  If load varies ±20–30% frequently, fouling becomes masked.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={150}>
              <div className="rounded-lg border bg-white p-6 shadow-sm">
                <h3 className="text-base font-semibold text-gray-900">
                  2.2 Water quality instability
                </h3>
                <p className="mt-2 text-sm text-gray-700">
                  High COD &gt; 60 mg/L or turbidity &gt; 15 NTU may hinder film formation.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={200}>
              <div className="rounded-lg border bg-white p-6 shadow-sm">
                <h3 className="text-base font-semibold text-gray-900">
                  2.3 Under-maintained cooling towers
                </h3>
                <p className="mt-2 text-sm text-gray-700">
                  Inefficient heat rejection can overshadow TES gains.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={250}>
              <div className="rounded-lg border bg-white p-6 shadow-sm">
                <h3 className="text-base font-semibold text-gray-900">
                  2.4 No historical data or broken sensors
                </h3>
                <p className="mt-2 text-sm text-gray-700">
                  TES depends on repeatability; missing instrumentation reduces verification quality.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Dosing Theory Section */}
      <section className="border-b">
        <div className="mx-auto max-w-6xl px-4 py-14 lg:py-20">
          <FadeIn>
            <h2 className="text-2xl font-semibold tracking-tight text-gray-900">
              3. Dosing Theory (Chemical & Hydrodynamic Basis)
            </h2>
          </FadeIn>

          <div className="mt-8 space-y-6">
            <FadeIn delay={100}>
              <div className="rounded-lg border bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900">
                  3.1 Film Formation
                </h3>
                <p className="mt-3 text-sm text-gray-700 leading-relaxed">
                  Mexel®432 forms a thin hydrophobic layer on metal and polymer surfaces.
                  This layer:
                </p>
                <ul className="mt-3 text-sm text-gray-700 space-y-2 list-disc pl-5">
                  <li>detaches existing biofilm</li>
                  <li>prevents new adhesion</li>
                  <li>reduces corrosion by blocking oxygen diffusion</li>
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={150}>
              <div className="rounded-lg border bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900">
                  3.2 Surface Conditioning Cycle
                </h3>
                <p className="mt-3 text-sm text-gray-700 leading-relaxed">
                  Dosing must occur periodically to maintain surface conditioning.
                  Typical cycle:
                </p>
                <ul className="mt-3 text-sm text-gray-700 space-y-2 list-disc pl-5">
                  <li><strong>Softening phase</strong> (Week 1–2)</li>
                  <li><strong>Stability phase</strong> (Week 3–4)</li>
                  <li><strong>Performance phase</strong> (Week 4–8)</li>
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={200}>
              <div className="rounded-lg border bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900">
                  3.3 Flow & Shear Dependence
                </h3>
                <p className="mt-3 text-sm text-gray-700 leading-relaxed">
                  TES performance improves under consistent flow velocity.
                  Very low flow (&lt;0.8 m/s) reduces shear-induced removal of detached fouling.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Operating Limits Section */}
      <section className="border-b bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-14 lg:py-20">
          <FadeIn>
            <h2 className="text-2xl font-semibold tracking-tight text-gray-900">
              4. Operating Limits & Constraints
            </h2>
          </FadeIn>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <FadeIn delay={100}>
              <div className="rounded-lg border bg-white p-6 shadow-sm">
                <h4 className="text-base font-semibold text-gray-900">Temperature</h4>
                <p className="mt-2 text-sm text-gray-700">
                  Effective from 5°C to 45°C CW temperature
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={150}>
              <div className="rounded-lg border bg-white p-6 shadow-sm">
                <h4 className="text-base font-semibold text-gray-900">Materials</h4>
                <p className="mt-2 text-sm text-gray-700">
                  Compatible with carbon steel, copper alloys, stainless steel, FRP
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={200}>
              <div className="rounded-lg border bg-white p-6 shadow-sm">
                <h4 className="text-base font-semibold text-gray-900">Dosing concentration</h4>
                <p className="mt-2 text-sm text-gray-700">
                  As per protocol (not public here)
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={250}>
              <div className="rounded-lg border bg-white p-6 shadow-sm">
                <h4 className="text-base font-semibold text-gray-900">pH range</h4>
                <p className="mt-2 text-sm text-gray-700">
                  Effective between pH 6.5–9.0
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={300}>
              <div className="rounded-lg border bg-white p-6 shadow-sm md:col-span-2">
                <h4 className="text-base font-semibold text-gray-900">Regulatory</h4>
                <p className="mt-2 text-sm text-gray-700">
                  EPA-registered as a biocide, but operational mode is surface-active film formation (non-oxidant)
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Chemistry Interactions Section */}
      <section className="border-b">
        <div className="mx-auto max-w-6xl px-4 py-14 lg:py-20">
          <FadeIn>
            <h2 className="text-2xl font-semibold tracking-tight text-gray-900">
              5. Chemistry Interactions
            </h2>
          </FadeIn>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <FadeIn delay={100}>
              <div className="rounded-lg border border-green-200 bg-green-50 p-6">
                <h3 className="text-lg font-semibold text-green-900">
                  Compatible with:
                </h3>
                <ul className="mt-3 text-sm text-green-800 space-y-2 list-disc pl-5">
                  <li>Scale inhibitors</li>
                  <li>Dispersants</li>
                  <li>Low-dose oxidants (if spaced out)</li>
                  <li>Coagulants in raw-water treatment</li>
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={150}>
              <div className="rounded-lg border border-red-200 bg-red-50 p-6">
                <h3 className="text-lg font-semibold text-red-900">
                  Avoid simultaneous use with:
                </h3>
                <ul className="mt-3 text-sm text-red-800 space-y-2 list-disc pl-5">
                  <li>High chlorine shock doses</li>
                  <li>Strong oxidising biocides</li>
                  <li>Polymer overdosing</li>
                </ul>
                <p className="mt-3 text-xs text-red-700 font-semibold">
                  Reason: These degrade the film prematurely.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Data Interpretation Section */}
      <section className="border-b bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-14 lg:py-20">
          <FadeIn>
            <h2 className="text-2xl font-semibold tracking-tight text-gray-900">
              6. Data Interpretation Guide
            </h2>
          </FadeIn>

          <div className="mt-8 space-y-6">
            <FadeIn delay={100}>
              <div className="rounded-lg border bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900">
                  6.1 TR (Temperature Rise)
                </h3>
                <p className="mt-2 text-sm text-gray-700">
                  <strong>Primary metric. Improvement = lower fouling.</strong>
                </p>
                <ul className="mt-3 text-sm text-gray-700 space-y-1 list-disc pl-5">
                  <li>TR decreasing or stabilising = positive TES effect</li>
                  <li>TR rising = fouling or water-side restriction</li>
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={150}>
              <div className="rounded-lg border bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900">
                  6.2 TTD (Terminal Temperature Difference)
                </h3>
                <p className="mt-2 text-sm text-gray-700">
                  <strong>Secondary metric. Improvement = better heat transfer.</strong>
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={200}>
              <div className="rounded-lg border bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900">
                  6.3 Vacuum Stability
                </h3>
                <p className="mt-2 text-sm text-gray-700">
                  <strong>Indirect indicator.</strong> Sudden vacuum noise → fouling or air ingress.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={250}>
              <div className="rounded-lg border bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900">
                  6.4 CW ΔT vs. Load Curve
                </h3>
                <p className="mt-2 text-sm text-gray-700 leading-relaxed">
                  A clean condenser shows a predictable ΔT-to-load ratio.
                  TES aims to restore this curve.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Pilot Failure Analysis Section */}
      <section className="border-b">
        <div className="mx-auto max-w-6xl px-4 py-14 lg:py-20">
          <FadeIn>
            <h2 className="text-2xl font-semibold tracking-tight text-gray-900">
              7. Pilot Failure Analysis (Critical for Credibility)
            </h2>
          </FadeIn>

          <div className="mt-8 space-y-6">
            <FadeIn delay={100}>
              <div className="rounded-lg border border-amber-200 bg-amber-50 p-6">
                <h3 className="text-lg font-semibold text-amber-900 mb-3">
                  A TES pilot can "fail" when:
                </h3>
                <ul className="text-sm text-amber-800 space-y-2 list-disc pl-5">
                  <li>Baseline conditions were unstable</li>
                  <li>Dosing was insufficient</li>
                  <li>Wrong dosing point</li>
                  <li>Excessive solids in system</li>
                  <li>Mechanical issues overwhelmed chemical response</li>
                  <li>Measurement instruments inaccurate</li>
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={150}>
              <div className="rounded-lg border bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900">
                  How to distinguish TES failure vs system failure:
                </h3>
                <ul className="mt-4 text-sm text-gray-700 space-y-3">
                  <li>
                    <strong>Partial response:</strong> If TR, TTD, and vacuum respond <em>partially</em>, TES is working.
                  </li>
                  <li>
                    <strong>No response:</strong> If no metric moves at all, system constraints are dominating (fans, pumps, air ingress).
                  </li>
                  <li>
                    <strong>Improvement then decline:</strong> If metrics improve then decline, fouling mobilisation exceeded hydraulic capacity.
                  </li>
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* When TES Will NOT Work Section */}
      <section className="border-b bg-red-50">
        <div className="mx-auto max-w-6xl px-4 py-14 lg:py-20">
          <FadeIn>
            <h2 className="text-2xl font-semibold tracking-tight text-gray-900">
              8. When TES Will NOT Work (Important for Honesty)
            </h2>
            <p className="mt-3 text-sm text-gray-700">
              TES will <strong>not</strong> deliver clear results if:
            </p>
          </FadeIn>

          <div className="mt-6 rounded-lg border-l-4 border-red-600 bg-white p-6 shadow-sm">
            <ul className="text-sm text-gray-700 space-y-2 list-disc pl-5">
              <li>Load varies more than ±30% frequently</li>
              <li>Water quality shifts daily</li>
              <li>CW system has unmanaged debris ingress</li>
              <li>Cooling towers are underperforming</li>
              <li>Condenser tubes are severely damaged or eroded</li>
              <li>Unit is on unstable free-throttle or cycling mode</li>
              <li>Station does not have minimum instrumentation</li>
            </ul>
          </div>

          <p className="mt-6 text-xs text-gray-600 italic">
            Including this list increases trust with engineers.
          </p>
        </div>
      </section>

      {/* Safety & Environmental Section */}
      <section className="border-b">
        <div className="mx-auto max-w-6xl px-4 py-14 lg:py-20">
          <FadeIn>
            <h2 className="text-2xl font-semibold tracking-tight text-gray-900">
              9. Safety & Environmental Notes
            </h2>
          </FadeIn>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <FadeIn delay={100}>
              <div className="rounded-lg border bg-white p-6 shadow-sm">
                <p className="text-sm text-gray-700 leading-relaxed">
                  • Mexel®432 is <strong>non-oxidant</strong> and <strong>non-chlorinated</strong>
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={150}>
              <div className="rounded-lg border bg-white p-6 shadow-sm">
                <p className="text-sm text-gray-700 leading-relaxed">
                  • EPA-registered for biocidal use, but functionally acts through <strong>film formation</strong>
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={200}>
              <div className="rounded-lg border bg-white p-6 shadow-sm">
                <p className="text-sm text-gray-700 leading-relaxed">
                  • <strong>Rapidly biodegradable</strong>
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={250}>
              <div className="rounded-lg border bg-white p-6 shadow-sm">
                <p className="text-sm text-gray-700 leading-relaxed">
                  • Safe for discharge under SA/NEMA limits
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={300}>
              <div className="rounded-lg border bg-white p-6 shadow-sm">
                <p className="text-sm text-gray-700 leading-relaxed">
                  • <strong>No hazardous by-products</strong>
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={350}>
              <div className="rounded-lg border bg-white p-6 shadow-sm">
                <p className="text-sm text-gray-700 leading-relaxed">
                  • Pumps and drums require normal <strong>industrial PPE</strong>
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Station Readiness Checklist Section */}
      <section className="border-b bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-14 lg:py-20">
          <FadeIn>
            <h2 className="text-2xl font-semibold tracking-tight text-gray-900">
              10. Station Readiness Checklist (Pre-Pilot)
            </h2>
          </FadeIn>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <FadeIn delay={100}>
              <div className="rounded-lg border border-green-200 bg-green-50 p-6">
                <h3 className="text-lg font-semibold text-green-900 mb-4">
                  Must Have:
                </h3>
                <ul className="text-sm text-green-800 space-y-2 list-disc pl-5">
                  <li>Consistent load (±5–10%)</li>
                  <li>Working sensors (inlet, outlet, vacuum)</li>
                  <li>Stable water chemistry</li>
                  <li>Accessible dosing point</li>
                  <li>CSM + Chemistry buy-in</li>
                  <li>Agreement on baseline period</li>
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={150}>
              <div className="rounded-lg border border-blue-200 bg-blue-50 p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-4">
                  Nice-to-Have:
                </h3>
                <ul className="text-sm text-blue-800 space-y-2 list-disc pl-5">
                  <li>TTD monitoring</li>
                  <li>Coal burn/net MWh data</li>
                  <li>Tower fan performance logs</li>
                  <li>Offline inspection history</li>
                </ul>
              </div>
            </FadeIn>
          </div>

          <p className="mt-6 text-sm text-gray-700 leading-relaxed">
            <strong>This checklist is essential when deciding if a unit is ready for TES pilot deployment.</strong>
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section>
        <div className="mx-auto max-w-6xl px-4 py-14 lg:py-20">
          <FadeIn>
            <div className="rounded-lg border bg-gray-50 p-8 shadow-sm">
              <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div className="flex-1">
                  <h2 className="text-xl font-semibold text-gray-900">
                    Ready to apply TES at your station?
                  </h2>
                  <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                    Start with the Station Readiness Checklist to ensure your plant meets 
                    the minimum requirements. Then connect with our team to discuss your specific 
                    cooling-water challenges and pilot approach.
                  </p>
                </div>
                <div className="flex flex-col gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-md bg-brand-500 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2"
                  >
                    Get in touch
                  </Link>
                  <Link
                    href="/knowledge-hub"
                    className="inline-flex items-center justify-center text-sm font-semibold text-brand-500 hover:text-brand-900"
                  >
                    Back to Knowledge Hub →
                  </Link>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
