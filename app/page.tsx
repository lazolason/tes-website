import Link from "next/link";
import type { Metadata } from "next";
import TrustedBy from "../components/TrustedBy";
import AnimatedStats from "../components/AnimatedStats";
import Testimonials from "../components/Testimonials";
import BeforeAfterSlider from "../components/BeforeAfterSlider";
import IndustryGrid from "../components/IndustryGrid";
import ValidationSection from "../components/ValidationSection";
import CTASection from "../components/CTASection";
import PathwayCTA from "../components/PathwayCTA";

export const metadata: Metadata = {
  title: "TES Cooling-Water Efficiency System",
  description:
    "TES combines Mexel®432 chemistry, IoT dosing and cooling-water data to improve condenser performance on wet-cooled power stations and industrial plants. Reduce cold-end losses with a structured, verifiable approach.",
  openGraph: {
    title: "TES Cooling-Water Efficiency System | Mexel Energy Sustain",
    description:
      "Improve condenser performance on wet-cooled units with Mexel®432 chemistry, IoT dosing and structured verification.",
  },
};

export default function TesPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative pt-28 pb-16 px-6 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="max-w-2xl">
              <div className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-700">
                Cooling-Water Efficiency System
              </div>
              <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Measured thermal efficiency recovery for wet-cooled plants.
              </h1>
              <p className="mt-4 text-xl font-medium leading-8 text-slate-800 sm:text-2xl">
                Restore lost efficiency. Recover output capability. Reduce emissions — with verification, not guesswork.
              </p>
              <p className="mt-6 text-base leading-7 text-slate-700 sm:text-lg">
                TES combines chemistry, dosing control, monitoring, and protocol-aligned verification to stabilise condenser performance.
              </p>
              <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-slate-700">
                Implementation supports maintenance — it does not replace it.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="rounded-md bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2"
                >
                  Request a Pilot Study
                </Link>
                <Link
                  href="/products"
                  className="rounded-md border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition-colors hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2"
                >
                  Technical Specs
                </Link>
              </div>

              <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-600">
                <div className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>RT&D protocol aligned</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Fully traceable data</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Audit-ready verification</span>
                </div>
              </div>
            </div>

            <div className="relative w-full">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-slate-200/50 bg-slate-100 shadow-[0_6px_18px_rgba(15,23,42,0.08)]">
                {/* Image brief: /public/images/hero/before-fouled-tubes.jpg and /public/images/hero/after-stabilised-tubes.jpg — Same angle, lighting, and geometry; only surface condition changes. */}
                <BeforeAfterSlider
                  className="absolute inset-0"
                  beforeImage="/images/hero/before-fouled-tubes.png"
                  afterImage="/images/hero/after-stabilised-tubes.png"
                  beforeLabel="FOULED SURFACE"
                  afterLabel="STABILISED SURFACE"
                  captionTitle="ILLUSTRATIVE RESULT"
                  caption="Illustrative comparison. Actual performance is verified using site baselines and condenser indicators (TR, TTD, vacuum stability)."
                  beforeAlt="Fouled condenser tubes with visible deposits"
                  afterAlt="Stabilised condenser tubes after treatment"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why TES */}
      <section className="border-t border-slate-200 bg-slate-50 py-12 lg:py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-emerald-700">
              Why TES
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              A disciplined system for condenser stability.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-slate-200/70 bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-lg">
              <h3 className="text-base font-semibold text-slate-900">
                Outcome: Stabilise condenser performance
              </h3>
              <p className="mt-3 text-sm text-slate-700 leading-relaxed">
                Reduce fouling-driven losses and keep heat transfer consistent under real operating conditions.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/70 bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-lg">
              <h3 className="text-base font-semibold text-slate-900">
                Mechanism: Surface treatment + controlled dosing
              </h3>
              <p className="mt-3 text-sm text-slate-700 leading-relaxed">
                Film-forming approach with repeatable dosing schedules and operational discipline.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/70 bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-lg">
              <h3 className="text-base font-semibold text-slate-900">
                Proof: Measured indicators + protocol-aligned verification
              </h3>
              <p className="mt-3 text-sm text-slate-700 leading-relaxed">
                Interpret TR/TTD/vacuum trends using normalisation principles for audit-ready reporting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Primary Conversion Pathways */}
      <PathwayCTA />

      {/* Trusted By Strip */}
      <TrustedBy />

      {/* How TES Works - System Overview */}
      <section className="border-t border-slate-200 bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-8 text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-emerald-700">
              System Overview
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              How TES works
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
              TES integrates four components into a unified efficiency system, designed for measurable and verifiable results.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                number: "01",
                title: "Chemistry",
                subtitle: "Mexel®432",
                detail: "Surface-active emulsion that forms a protective film on wetted surfaces.",
              },
              {
                number: "02",
                title: "Dosing",
                subtitle: "Controlled Skid",
                detail: "Automated dosing with level sensing and traceable event logs.",
              },
              {
                number: "03",
                title: "Monitoring",
                subtitle: "Condenser Indicators",
                detail: "TR, TTD, condenser vacuum, and water-side stability tracked continuously.",
              },
              {
                number: "04",
                title: "Verification",
                subtitle: "Baseline → Review",
                detail: "Baseline → intervention → review with audit-ready evidence pack.",
              },
            ].map((step) => (
              <div
                key={step.number}
                className="rounded-xl border border-slate-200/70 bg-white p-5 shadow-sm transition-shadow duration-200 hover:shadow-lg"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-600 text-xs font-bold text-white">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900">{step.title}</h3>
                    <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700">
                      {step.subtitle}
                    </span>
                  </div>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{step.detail}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/tes"
              className="inline-flex items-center text-sm font-semibold text-emerald-700 hover:text-emerald-800"
            >
              View full system architecture →
            </Link>
          </div>
        </div>
      </section>

      {/* Verification */}
      <ValidationSection />

      {/* Outcomes */}
      <AnimatedStats />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Industry Grid Section */}
      <IndustryGrid />

      {/* How a pilot works */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 lg:py-20">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            How a TES pilot works in practice
          </h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <div>
              <h3 className="text-base font-semibold text-slate-900">
                1. Scoping and baseline
              </h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                Agree on the unit(s), circuits and KPIs. Confirm how TR, TTD,
                condenser vacuum and water quality are currently measured.
                Collect a baseline dataset over an agreed period using the
                RT&amp;D protocol structure.
              </p>
            </div>
            <div>
              <h3 className="text-base font-semibold text-slate-900">
                2. Dosing and monitoring
              </h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                Install the TES dosing skid, configure Mexel®432 treatment and
                begin dosing. Monitor cooling-water and condenser performance
                against the baseline. Adjust within agreed bounds to manage
                water chemistry and plant constraints.
              </p>
            </div>
            <div>
              <h3 className="text-base font-semibold text-slate-900">
                3. Review and decision
              </h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                Compare intervention results with the baseline, using the same
                KPIs and the RT&amp;D protocol. If an independent referee is
                involved, provide them with complete data. On that basis,
                decide whether to extend TES to more units or stations.
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3 text-sm">
            <Link
              href="/applications"
              className="inline-flex items-center text-xs font-semibold text-emerald-700 hover:text-emerald-800"
            >
              See typical TES applications →
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
