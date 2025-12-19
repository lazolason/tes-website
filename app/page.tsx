import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import FadeIn from "../components/FadeIn";
import TrustedBy from "../components/TrustedBy";
import AnimatedStats from "../components/AnimatedStats";
import Testimonials from "../components/Testimonials";
import BeforeAfterSlider from "../components/BeforeAfterSlider";
import ProcessSteps from "../components/ProcessSteps";
import ProblemSolutionTabs from "../components/ProblemSolutionTabs";
import IndustryGrid from "../components/IndustryGrid";
import ValidationSection from "../components/ValidationSection";
import CTASection from "../components/CTASection";
import HeroCTA from "../components/HeroCTA";

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
      <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-slate-50">
        {/* Gradient Blobs Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 -right-40 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute -bottom-20 -left-40 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-float-delayed"></div>
          <div className="absolute inset-0 opacity-[0.02]" style={{backgroundImage: 'radial-gradient(circle, #334155 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="max-w-2xl animate-fade-in">
              <div className="inline-flex items-center rounded-full bg-emerald-600/10 px-3 py-1.5 text-xs font-semibold text-emerald-700 ring-1 ring-inset ring-emerald-600/20 mb-6">
                Thermal Efficiency Solution
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl lg:leading-[1.1]">
                Stop hidden losses in your{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600">cooling water.</span>
	              </h1>
	              <p className="mt-6 text-lg leading-8 text-slate-700">
	                TES isn&apos;t just a chemical—it&apos;s a verifiable system. We combine{' '}
	                <span className="text-slate-900 font-semibold">Mexel®432 chemistry</span>,{' '}
	                <span className="text-slate-900 font-semibold">IoT dosing</span>, and{' '}
	                <span className="text-slate-900 font-semibold">rigorous data</span> to
	                restore condenser performance on wet-cooled units.
	              </p>

              <HeroCTA />

              {/* Credibility Labels */}
              <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 border-t border-slate-200 pt-8">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 ring-1 ring-emerald-200">
                    <svg className="h-4 w-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-slate-700">Eskom RT&D Protocol</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 ring-1 ring-emerald-200">
                    <svg className="h-4 w-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-slate-700">Mexel®432 Technology</span>
                </div>
              </div>
            </div>

            {/* Slider Interaction */}
            <div className="relative mx-auto w-full max-w-lg lg:max-w-none animate-slide-in-right">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-2xl ring-1 ring-slate-200 bg-white">
                <BeforeAfterSlider
                  beforeImage="https://images.unsplash.com/photo-1621905251189-fc015e877473?q=80&w=2070&auto=format&fit=crop"
                  afterImage="https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=2070&auto=format&fit=crop"
                  beforeAlt="Fouled / Corroded Surface"
                  afterAlt="Clean / Protected Surface"
                />
                {/* Floating Badge */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-xl border border-slate-200 shadow-lg">
                  <p className="text-xs text-emerald-600 font-bold uppercase tracking-wider mb-1">Live Result</p>
                  <p className="text-sm text-slate-700">Drag slider to see how Mexel®432 cleans and protects surfaces against fouling.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution/Approach Tabs */}
      <ProblemSolutionTabs />

      {/* Trusted By Strip */}
      <TrustedBy />

      {/* TES 4-Step Process */}
      <section className="border-b bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 lg:py-20">
          <FadeIn>
            <h2 className="text-2xl font-semibold tracking-tight text-gray-900 text-center">
              How TES Works
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-base text-gray-600 text-center">
              TES combines four integrated components to deliver measurable cooling-water efficiency improvements.
            </p>
          </FadeIn>
          <div className="mt-12">
            <ProcessSteps />
          </div>
        </div>
      </section>

      {/* TES Benefits Grid */}
      <section className="border-b bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14 lg:py-20">
          <FadeIn>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 text-center">
              Why TES Delivers Results
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-base text-slate-600 text-center">
              Eight core capabilities working together to transform cooling-water performance.
            </p>
          </FadeIn>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <FadeIn delay={100}>
              <div className="group rounded-lg border bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-emerald-500/50">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-500/10">
                  <svg className="h-6 w-6 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="mt-4 text-sm font-semibold text-slate-900">Efficiency Gains</h3>
                <p className="mt-2 text-sm text-slate-600">Improved heat transfer, reduced energy consumption, better output per unit of fuel.</p>
              </div>
            </FadeIn>
            <FadeIn delay={150}>
              <div className="group rounded-lg border bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-emerald-500/50">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-500/10">
                  <svg className="h-6 w-6 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="mt-4 text-sm font-semibold text-slate-900">Corrosion Protection</h3>
                <p className="mt-2 text-sm text-slate-600">Active corrosion inhibition protects heat exchangers, extending asset life and reliability.</p>
              </div>
            </FadeIn>
            <FadeIn delay={200}>
              <div className="group rounded-lg border bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-emerald-500/50">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-500/10">
                  <svg className="h-6 w-6 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="mt-4 text-sm font-semibold text-slate-900">Biofouling Control</h3>
                <p className="mt-2 text-sm text-slate-600">Prevents biofilm formation, keeping tubes clean and heat transfer optimal.</p>
              </div>
            </FadeIn>
            <FadeIn delay={250}>
              <div className="group rounded-lg border bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-emerald-500/50">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-500/10">
                  <svg className="h-6 w-6 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="mt-4 text-sm font-semibold text-slate-900">Cost Savings</h3>
                <p className="mt-2 text-sm text-slate-600">Lower chemical costs, reduced shutdowns, and measurable OPEX reduction.</p>
              </div>
            </FadeIn>
            <FadeIn delay={300}>
              <div className="group rounded-lg border bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-emerald-500/50">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-500/10">
                  <svg className="h-6 w-6 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="mt-4 text-sm font-semibold text-slate-900">Environmental Benefits</h3>
                <p className="mt-2 text-sm text-slate-600">Reduced emissions, lower water consumption, and gentler environmental footprint.</p>
              </div>
            </FadeIn>
            <FadeIn delay={350}>
              <div className="group rounded-lg border bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-emerald-500/50">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-500/10">
                  <svg className="h-6 w-6 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                <h3 className="mt-4 text-sm font-semibold text-slate-900">IoT Monitoring</h3>
                <p className="mt-2 text-sm text-slate-600">Real-time data collection, cloud dashboards, and automated alerts for proactive control.</p>
              </div>
            </FadeIn>
            <FadeIn delay={400}>
              <div className="group rounded-lg border bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-emerald-500/50">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-500/10">
                  <svg className="h-6 w-6 text-emerald-500" fill="none" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="mt-4 text-sm font-semibold text-slate-900">Independent Verification</h3>
                <p className="mt-2 text-sm text-slate-600">Third-party validated results, transparent baselines, and credible performance claims.</p>
              </div>
            </FadeIn>
            <FadeIn delay={450}>
              <div className="group rounded-lg border bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-emerald-500/50">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-500/10">
                  <svg className="h-6 w-6 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="mt-4 text-sm font-semibold text-slate-900">RT&D Foundation</h3>
                <p className="mt-2 text-sm text-slate-600">Developed with Eskom Research, Testing & Development for South African conditions.</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* What TES is / is not */}
      <section className="border-b bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 lg:py-20">
          <FadeIn>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
              What TES is – and what it is not
            </h2>
          </FadeIn>
          <div className="mt-6 grid gap-8 md:grid-cols-2">
            <FadeIn delay={100}>
              <h3 className="text-sm font-semibold text-slate-900">
                TES is…
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                <li>
                  • A cooling-water efficiency system for wet-cooled coal and
                  large industrial units.
                </li>
                <li>
                  • Built around Mexel®432 in cooling-water service: restoring
                  and maintaining condenser cleanliness.
                </li>
                <li>
                  • Structured to fit alongside existing plant tools such as
                  STEP, not to replace them.
                </li>
                <li>
                  • Designed for clear baselines, transparent data and
                  independent review where required.
                </li>
              </ul>
            </FadeIn>
            <FadeIn delay={200}>
              <h3 className="text-sm font-semibold text-slate-900">
                TES is not…
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                <li>
                  • Not a generic “magic” chemical that claims to fix all
                  plant problems.
                </li>
                <li>
                  • Not a boiler-treatment or combustion optimisation package.
                  TES focuses on the cold end.
                </li>
                <li>
                  • Not a replacement for proper operations, maintenance or
                  long-term capital projects.
                </li>
                <li>
                  • Not an excuse to ignore existing water-treatment
                  obligations and compliance limits.
                </li>
              </ul>
              <p className="mt-3 text-xs text-slate-500">
                Note: MexSteam 100 remains a separate, strategic boiler-side
                product. It is deliberately not included under TES&apos;s
                cooling-water verification claims.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Four building blocks */}
      <section className="border-b bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14 lg:py-20">
          <FadeIn>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
              TES in four building blocks
            </h2>
            <p className="mt-3 max-w-3xl text-base text-slate-600">
              TES has four components that work together. Each one is simple on
              its own; the value is in the way they combine to give a clear
              picture of cooling-water performance.
            </p>
          </FadeIn>

          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <FadeIn delay={100}>
              <div className="rounded-lg border bg-white p-4 shadow-sm h-full">
              <h3 className="text-sm font-semibold text-slate-900">
                1. Chemistry: Mexel®432
              </h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                A non-oxidant emulsion of long-chain alkyl amines. Forms a
                protective film on wetted surfaces, detaches existing biofilm,
                mud, ash and deposits, limits new deposition and provides
                corrosion inhibition. Replaces multiple separate chemicals
                (biocides, anti-scalants, dispersants and corrosion
                inhibitors) with a single, surface-active treatment.
              </p>
              </div>
            </FadeIn>
            <FadeIn delay={200}>
              <div className="rounded-lg border bg-white p-4 shadow-sm h-full">
              <h3 className="text-sm font-semibold text-slate-900">
                2. IoT dosing: Thingy:91X
              </h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                IoT-enabled dosing skids with level sensing, event logging and
                remote configuration based on Nordic&apos;s Thingy:91X
                platform. Creates a traceable dosing record – what was dosed,
                when, for how long – that can be correlated with condenser
                performance data.
              </p>
              </div>
            </FadeIn>
            <FadeIn delay={300}>
              <div className="rounded-lg border bg-white p-4 shadow-sm h-full">
              <h3 className="text-sm font-semibold text-slate-900">
                3. Data: cooling-water view
              </h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                A simple cooling-water performance view that links dosing
                history with metrics such as cooling-water temperature rise
                (TR), terminal temperature difference (TTD), condenser vacuum
                stability and, where available, coal use per net MWh. The aim
                is to make condenser fouling visible as a managed variable,
                not a hidden loss.
              </p>
              </div>
            </FadeIn>
            <FadeIn delay={400}>
              <div className="rounded-lg border bg-white p-4 shadow-sm h-full">
              <h3 className="text-sm font-semibold text-slate-900">
                4. Verification: RT&amp;D protocol
              </h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                Verification follows the baseline → intervention →
                post-intervention structure defined in Eskom RT&amp;D&apos;s
                Tutuka Surfactant (FFA) Testing Protocol Rev08. Independent
                bodies such as the Water Research Commission (WRC) can act as
                referees, and separate carbon-verification bodies (e.g.
                Brundtland) can be engaged where emissions intensity is in
                scope.
              </p>
              </div>
            </FadeIn>
          </div>

          {/* TR Improvement Chart */}
          <FadeIn delay={500}>
            <div className="mt-10">
              <h3 className="text-lg font-semibold text-slate-900 text-center">
                Measured Results: TR Improvement Over 90 Days
              </h3>
              <p className="mt-2 text-sm text-slate-600 text-center max-w-2xl mx-auto">
                Actual temperature rise (TR) data from Kriel Unit 6 trial showing 4°C improvement after Mexel®432 application.
              </p>
              <div className="mt-6 relative h-64 md:h-80">
                <Image
                  src="/tr-improvement-chart.png"
                  alt="TR Improvement Over Time: 28C to 32C increase over 90 days"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <ValidationSection />

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
              className="inline-flex items-center text-xs font-semibold text-emerald-600 hover:text-emerald-800"
            >
              See typical TES applications →
            </Link>
          </div>
        </div>
      </section>

      {/* Animated Stats Section */}
      <AnimatedStats />

      {/* Testimonials Section */}
      <Testimonials />

      <CTASection />
    </main>
  );
}
