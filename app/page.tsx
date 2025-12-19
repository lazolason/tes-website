import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import FadeIn from "../components/FadeIn";
import TrustedBy from "../components/TrustedBy";
import AnimatedStats from "../components/AnimatedStats";
import Testimonials from "../components/Testimonials";
import BeforeAfterSlider from "../components/BeforeAfterSlider";
import ProcessSteps from "../components/ProcessSteps";
import IndustryGrid from "../components/IndustryGrid";
import ValidationSection from "../components/ValidationSection";
import CTASection from "../components/CTASection";

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
                Measured thermal efficiency for wet-cooled plants.
              </h1>
              <p className="mt-6 text-base leading-7 text-slate-700 sm:text-lg">
                TES integrates Mexel®432 surface-active chemistry, controlled dosing, and
                transparent performance data to stabilize condenser heat transfer. The
                result is a credible, engineering-first path to reduced cold-end losses.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="rounded-md bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-emerald-700"
                >
                  Request a Pilot Study
                </Link>
                <Link
                  href="/products"
                  className="rounded-md border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition-colors hover:bg-slate-50"
                >
                  Technical Specs
                </Link>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                <div className="rounded-lg border border-slate-200 bg-white p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Protocol aligned
                  </p>
                  <p className="mt-2 text-sm text-slate-700">
                    Eskom RT&D baseline structure
                  </p>
                </div>
                <div className="rounded-lg border border-slate-200 bg-white p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Data traceable
                  </p>
                  <p className="mt-2 text-sm text-slate-700">
                    Dosing and performance logged
                  </p>
                </div>
                <div className="rounded-lg border border-slate-200 bg-white p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Verification-ready
                  </p>
                  <p className="mt-2 text-sm text-slate-700">
                    Independent review supported
                  </p>
                </div>
              </div>
              <div className="mt-6 rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Indicative impact (site-specific)
                </p>
                <ul className="mt-3 grid gap-2 text-sm text-slate-700 sm:grid-cols-3">
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-700">↓</span>
                    TTD drift
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-700">↑</span>
                    condenser vacuum stability
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-700">↓</span>
                    auxiliary power loss
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative w-full">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-slate-200/50 bg-slate-100 shadow-[0_6px_18px_rgba(15,23,42,0.08)]">
                {/* Image brief: /public/images/hero/before-fouled-tubes.jpg and /public/images/hero/after-stabilised-tubes.jpg — Same angle, lighting, and geometry; only surface condition changes. */}
                <BeforeAfterSlider
                  className="absolute inset-0"
                  beforeImage="/images/hero/before-fouled-tubes.jpg"
                  afterImage="/images/hero/after-stabilised-tubes.jpg"
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

      {/* Trusted By Strip */}
      <TrustedBy />

      {/* Problem */}
      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-16 lg:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <FadeIn>
                <p className="text-xs font-semibold uppercase tracking-widest text-emerald-700">
                  Problem
                </p>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                  Cold-end losses hide in the water side.
                </h2>
                <p className="mt-4 text-sm leading-6 text-slate-600 sm:text-base">
                  Fouling and biofilm add film resistance, driving up terminal temperature
                  difference (TTD) and reducing condenser vacuum. The result is lost MW,
                  unstable performance, and higher auxiliary demand.
                </p>
              </FadeIn>
              <ul className="mt-6 space-y-3 text-sm text-slate-700">
                <li className="flex gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-600" />
                  TTD drift and backpressure during steady load.
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-600" />
                  Temperature rise (TR) underperforms in similar ambient conditions.
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-600" />
                  Frequent cleaning outages or unstable water chemistry.
                </li>
              </ul>
            </div>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-sm">
              {/* Image brief: /public/images/home-problem-fouled-tubes.jpg — Close-up of fouled condenser tubes or heat exchanger surfaces showing scale and biofilm; cool industrial lighting. */}
              <Image
                src="/images/home-problem-fouled-tubes.jpg"
                alt="Fouled heat-exchanger tubes showing scale and biofilm"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Physics */}
      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 lg:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-sm">
                {/* Image brief: /public/images/home-physics-heat-exchanger.jpg — Clean heat exchanger/condensate system with instrumentation and piping, sharp detail, industrial realism. */}
                <Image
                  src="/images/home-physics-heat-exchanger.jpg"
                  alt="Heat exchanger piping and instrumentation in a plant condenser hall"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <FadeIn>
                <p className="text-xs font-semibold uppercase tracking-widest text-emerald-700">
                  Physics
                </p>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                  Heat transfer is measurable and repeatable.
                </h2>
                <p className="mt-4 text-sm leading-6 text-slate-600 sm:text-base">
                  TES quantifies film resistance using standard condenser indicators and
                  consistent baselines. We focus on the cold end, where small shifts in
                  heat-transfer performance have outsized efficiency impact.
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
                    detail: "Make-up, blowdown, and chemistry balance.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-lg border border-slate-200 bg-white p-4"
                  >
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                      {item.title}
                    </p>
                    <p className="mt-2 text-sm text-slate-700">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intervention */}
      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-16 lg:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <FadeIn>
                <p className="text-xs font-semibold uppercase tracking-widest text-emerald-700">
                  Intervention
                </p>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                  TES combines chemistry, dosing, and measurement.
                </h2>
                <p className="mt-4 text-sm leading-6 text-slate-600 sm:text-base">
                  Mexel®432 forms a protective surface film, controlled dosing maintains
                  coverage, and every intervention is logged against performance data.
                  The system is designed for plant engineers, not marketing promises.
                </p>
              </FadeIn>
            </div>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-sm">
              {/* Image brief: /public/images/home-intervention-dosing-skid.jpg — Dosing skid or chemical feed system in an industrial plant, clear controls, stainless steel, clean layout. */}
              <Image
                src="/images/home-intervention-dosing-skid.jpg"
                alt="TES dosing skid and chemical feed system in an industrial plant"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="mt-12">
            <ProcessSteps />
          </div>
        </div>
      </section>

      {/* Verification */}
      <ValidationSection />

      {/* Outcomes */}
      <AnimatedStats />

      {/* Industry Grid Section */}
      <IndustryGrid />

      {/* How a pilot works */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 lg:py-20">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
            How a TES pilot works in practice
          </h2>
          <div className="mt-4 grid gap-6 md:grid-cols-3">
            <div>
              <h3 className="text-sm font-semibold text-slate-900">
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
              <h3 className="text-sm font-semibold text-slate-900">
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
              <h3 className="text-sm font-semibold text-slate-900">
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

      {/* Testimonials Section */}
      <Testimonials />

      <CTASection />
    </main>
  );
}
