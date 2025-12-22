import Link from "next/link";
import FadeIn from "../../../components/FadeIn";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Advanced Engineering Reference | TES",
  description:
    "Deep-dive engineering reference for TES: dosing theory, chemistry interactions, data interpretation, and pilot review guidance.",
  openGraph: {
    title: "Advanced Engineering Reference | Mexel Energy Sustain",
    description:
      "Deep-dive engineering reference for TES: dosing theory, chemistry interactions, data interpretation, and pilot review guidance.",
  },
};

export default function AdvancedEngineeringPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="border-b bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-16 lg:py-24">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-500">
            Advanced Engineering Reference
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
            Deep-dive guidance for engineering teams.
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-gray-600">
            This reference keeps only advanced, technical material. Operational readiness,
            troubleshooting, and compliance guidance now live in the Engineering Playbook.
          </p>
        </div>
      </section>

      {/* Playbook Banner */}
      <section className="border-b">
        <div className="mx-auto max-w-6xl px-4 py-8">
          <div className="rounded-lg border bg-white p-6 shadow-sm">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-lg font-semibold text-gray-900">
                  Start with the Engineering Playbook
                </h2>
                <p className="mt-2 text-sm text-gray-600">
                  Fundamentals, station readiness, troubleshooting, and safety guidance are
                  consolidated in one structured playbook.
                </p>
              </div>
              <Link
                href="/knowledge-hub/engineering-playbook"
                className="inline-flex items-center justify-center rounded-md bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2"
              >
                Open playbook
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Playbook Summaries */}
      <section className="border-b bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-12 lg:py-16">
          <FadeIn>
            <h2 className="text-2xl font-semibold tracking-tight text-gray-900">
              Playbook-linked topics
            </h2>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              These sections are now consolidated in the Engineering Playbook to avoid
              duplication and keep operational guidance consistent.
            </p>
          </FadeIn>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <FadeIn delay={100}>
              <div className="rounded-lg border bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900">Troubleshooting</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Field scenarios and corrective actions for flat or noisy signals.
                </p>
                <Link
                  href="/knowledge-hub/engineering-playbook/troubleshooting"
                  className="mt-4 inline-flex text-sm font-semibold text-brand-500 hover:text-brand-900"
                >
                  Go to Troubleshooting →
                </Link>
              </div>
            </FadeIn>
            <FadeIn delay={180}>
              <div className="rounded-lg border bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900">
                  Station Readiness & Limits
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  Readiness checklist, operating limits, and red flags before any pilot.
                </p>
                <Link
                  href="/knowledge-hub/engineering-playbook/station-readiness"
                  className="mt-4 inline-flex text-sm font-semibold text-brand-500 hover:text-brand-900"
                >
                  Go to Readiness →
                </Link>
              </div>
            </FadeIn>
            <FadeIn delay={260}>
              <div className="rounded-lg border bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900">Safety & Compliance</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Safety handling notes, ecotoxicology considerations, and compliance
                  references.
                </p>
                <Link
                  href="/knowledge-hub/engineering-playbook/safety-compliance"
                  className="mt-4 inline-flex text-sm font-semibold text-brand-500 hover:text-brand-900"
                >
                  Go to Safety & Compliance →
                </Link>
              </div>
            </FadeIn>
            <FadeIn delay={340}>
              <div className="rounded-lg border bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900">Protocol & IoT Overview</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Overview pages for protocol discipline and dosing telemetry.
                </p>
                <Link
                  href="/knowledge-hub/engineering-playbook/protocol"
                  className="mt-4 inline-flex text-sm font-semibold text-brand-500 hover:text-brand-900"
                >
                  Go to Protocol Overview →
                </Link>
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
              Dosing Theory (Chemical & Hydrodynamic Basis)
            </h2>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              The deep-dive theory below supports engineering interpretation and is not a
              substitute for field readiness checks.
            </p>
          </FadeIn>

          <div className="mt-8 space-y-6">
            <FadeIn delay={100}>
              <div className="rounded-lg border bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900">Film Formation</h3>
                <p className="mt-3 text-sm text-gray-700 leading-relaxed">
                  Mexel®432 forms a thin hydrophobic layer on metal and polymer surfaces. This
                  layer detaches existing biofilm, reduces new adhesion, and limits oxygen
                  diffusion at the surface.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={150}>
              <div className="rounded-lg border bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900">
                  Surface Conditioning Cycle
                </h3>
                <p className="mt-3 text-sm text-gray-700 leading-relaxed">
                  Dosing must occur periodically to maintain surface conditioning. Typical
                  cycles include softening, stability, and performance phases under controlled
                  conditions.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={200}>
              <div className="rounded-lg border bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900">
                  Flow & Shear Dependence
                </h3>
                <p className="mt-3 text-sm text-gray-700 leading-relaxed">
                  Performance improves under consistent flow velocity. Low flow reduces
                  shear-induced removal of detached fouling and complicates verification.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Chemistry Interactions Section */}
      <section className="border-b bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-14 lg:py-20">
          <FadeIn>
            <h2 className="text-2xl font-semibold tracking-tight text-gray-900">
              Chemistry Interactions
            </h2>
          </FadeIn>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <FadeIn delay={100}>
              <div className="rounded-lg border border-green-200 bg-green-50 p-6">
                <h3 className="text-lg font-semibold text-green-900">Compatible with</h3>
                <ul className="mt-3 text-sm text-green-800 space-y-2 list-disc pl-5">
                  <li>Scale inhibitors</li>
                  <li>Dispersants</li>
                  <li>Low-dose oxidants (spaced out)</li>
                  <li>Coagulants in raw-water treatment</li>
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={150}>
              <div className="rounded-lg border border-red-200 bg-red-50 p-6">
                <h3 className="text-lg font-semibold text-red-900">
                  Avoid simultaneous use with
                </h3>
                <ul className="mt-3 text-sm text-red-800 space-y-2 list-disc pl-5">
                  <li>High chlorine shock doses</li>
                  <li>Strong oxidising biocides</li>
                  <li>Polymer overdosing</li>
                </ul>
                <p className="mt-3 text-xs text-red-700 font-semibold">
                  Reason: These can degrade the film prematurely.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Data Interpretation Section */}
      <section className="border-b">
        <div className="mx-auto max-w-6xl px-4 py-14 lg:py-20">
          <FadeIn>
            <h2 className="text-2xl font-semibold tracking-tight text-gray-900">
              Data Interpretation Guide
            </h2>
          </FadeIn>

          <div className="mt-8 space-y-6">
            <FadeIn delay={100}>
              <div className="rounded-lg border bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900">TR (Temperature Rise)</h3>
                <p className="mt-2 text-sm text-gray-700">
                  Primary indicator. Stabilisation or reduction suggests improved heat-transfer
                  conditions.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={150}>
              <div className="rounded-lg border bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900">
                  TTD (Terminal Temperature Difference)
                </h3>
                <p className="mt-2 text-sm text-gray-700">
                  Secondary indicator that should align with TR trends under stable load.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={200}>
              <div className="rounded-lg border bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900">Vacuum Stability</h3>
                <p className="mt-2 text-sm text-gray-700">
                  Indirect indicator. Sudden noise can signal air ingress or fouling activity.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={250}>
              <div className="rounded-lg border bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900">
                  CW ΔT vs. Load Curve
                </h3>
                <p className="mt-2 text-sm text-gray-700 leading-relaxed">
                  A clean condenser shows a predictable ΔT-to-load ratio. TES aims to
                  stabilise this curve rather than override mechanical constraints.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Pilot Failure Analysis Section */}
      <section className="border-b bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-14 lg:py-20">
          <FadeIn>
            <h2 className="text-2xl font-semibold tracking-tight text-gray-900">
              Pilot Review Guidance
            </h2>
          </FadeIn>

          <div className="mt-8 space-y-6">
            <FadeIn delay={100}>
              <div className="rounded-lg border border-amber-200 bg-amber-50 p-6">
                <h3 className="text-lg font-semibold text-amber-900 mb-3">
                  A pilot can be inconclusive when
                </h3>
                <ul className="text-sm text-amber-800 space-y-2 list-disc pl-5">
                  <li>Baseline conditions were unstable.</li>
                  <li>Dosing was insufficient or not traceable.</li>
                  <li>Water-side debris exceeded hydraulic capacity.</li>
                  <li>Mechanical issues dominated the response.</li>
                  <li>Instrumentation was inaccurate or missing.</li>
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={150}>
              <div className="rounded-lg border bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900">
                  Distinguish TES vs. system constraints
                </h3>
                <ul className="mt-4 text-sm text-gray-700 space-y-3 list-disc pl-5">
                  <li>Partial response suggests TES is active but constrained.</li>
                  <li>No response usually indicates a dominant mechanical constraint.</li>
                  <li>Improvement then decline can indicate mobilisation exceeding capacity.</li>
                </ul>
              </div>
            </FadeIn>
          </div>
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
                    Need a data snapshot review?
                  </h2>
                  <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                    Share a focused data snapshot and we will review signal quality and
                    readiness before any operational change.
                  </p>
                </div>
                <div className="flex flex-col gap-3">
                  <Link
                    href="/contact?topic=Data%20Snapshot%20Review"
                    className="inline-flex items-center justify-center rounded-md bg-brand-500 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2"
                  >
                    Request review
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
