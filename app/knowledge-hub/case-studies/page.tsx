import Link from "next/link";
import FadeIn from "../../../components/FadeIn";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies | TES",
  description:
    "TES case studies: Mexel®432 cooling-water treatment at Eskom power stations and international deployments in nuclear, refinery, desalination and petrochemical industries worldwide.",
  openGraph: {
    title: "TES Case Studies | Mexel Energy Sustain",
    description:
      "Real-world evidence from TES pilots at Eskom stations and 30+ years of Mexel®432 deployments across power generation, refining and desalination worldwide.",
  },
};

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="border-b bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-16 lg:py-24">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-500">
            Case Studies
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
            TES in practice: evidence from the field.
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-gray-600">
            These case studies document where TES and Mexel®432 have been applied,
            what was measured and what results were observed. They are written to
            give station engineers and decision-makers a clear, honest picture of
            what TES can deliver — and what it cannot.
          </p>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-gray-700">
            Each case study follows a consistent structure: baseline conditions,
            intervention approach, observed results and lessons learned. Where
            independent verification was conducted, we include the referee's
            conclusions.
          </p>
        </div>
      </section>

      {/* What you'll find in these case studies */}
      <section className="border-b">
        <div className="mx-auto max-w-6xl px-4 py-12 lg:py-16">
          <FadeIn>
            <h2 className="text-xl font-semibold text-gray-900">
              What you'll find in these case studies
            </h2>
          </FadeIn>
          <div className="mt-6 grid gap-5 md:grid-cols-4">
            <FadeIn delay={100}>
              <div className="rounded-lg border bg-white p-4 shadow-sm">
                <div className="flex h-9 w-9 items-center justify-center rounded-md bg-brand-100">
                  <svg className="h-5 w-5 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="mt-3 text-sm font-semibold text-gray-900">
                  Baseline data
                </h3>
                <p className="mt-2 text-xs text-gray-600 leading-relaxed">
                  Pre-treatment performance metrics including TR, TTD, condenser
                  vacuum, and where available, heat-rate data.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={200}>
              <div className="rounded-lg border bg-white p-4 shadow-sm">
                <div className="flex h-9 w-9 items-center justify-center rounded-md bg-emerald-100">
                  <svg className="h-5 w-5 text-emerald-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="mt-3 text-sm font-semibold text-gray-900">
                  Treatment protocol
                </h3>
                <p className="mt-2 text-xs text-gray-600 leading-relaxed">
                  Dosing rates, chemistry parameters, and integration with
                  existing water-treatment programs.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={300}>
              <div className="rounded-lg border bg-white p-4 shadow-sm">
                <div className="flex h-9 w-9 items-center justify-center rounded-md bg-amber-100">
                  <svg className="h-5 w-5 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="mt-3 text-sm font-semibold text-gray-900">
                  Measured results
                </h3>
                <p className="mt-2 text-xs text-gray-600 leading-relaxed">
                  Changes in key performance indicators during treatment period
                  compared to baseline.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={400}>
              <div className="rounded-lg border bg-white p-4 shadow-sm">
                <div className="flex h-9 w-9 items-center justify-center rounded-md bg-violet-100">
                  <svg className="h-5 w-5 text-violet-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="mt-3 text-sm font-semibold text-gray-900">
                  Lessons learned
                </h3>
                <p className="mt-2 text-xs text-gray-600 leading-relaxed">
                  Operational insights, challenges encountered, and
                  recommendations for future deployments.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* South Africa case studies */}
      <section className="border-b bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-14 lg:py-20">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-500">
            South Africa
          </p>
          <h2 className="mt-2 text-2xl font-bold text-gray-900">
            Eskom power stations
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-gray-600 leading-relaxed">
            TES has focused its initial deployments at South African coal-fired
            power stations where cooling-water challenges are acute. These sites
            face variable raw-water quality, high solids loading, biofouling and
            corrosion—conditions that make them ideal testing grounds for the TES
            approach.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <FadeIn>
              <Link
                href="/knowledge-hub/case-studies/kriel"
                className="group block rounded-lg border bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-brand-300"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-brand-500">
                      Eskom • Wet-cooled coal
                    </p>
                    <h3 className="mt-2 text-lg font-semibold text-gray-900 group-hover:text-brand-500">
                      Kriel Power Station
                    </h3>
                  </div>
                  <span className="rounded-full bg-green-100 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-green-800">
                    Completed
                  </span>
                </div>
                <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                  Mexel®432 application at Kriel showed improved condenser
                  performance during treatment. This case study documents the
                  background, intervention approach and observed results including
                  TR/TTD improvements and reduction in condenser back-pressure.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-md bg-gray-100 px-2 py-1 text-[10px] font-medium text-gray-700">
                    RT&D Protocol
                  </span>
                  <span className="rounded-md bg-gray-100 px-2 py-1 text-[10px] font-medium text-gray-700">
                    Condenser efficiency
                  </span>
                  <span className="rounded-md bg-gray-100 px-2 py-1 text-[10px] font-medium text-gray-700">
                    Biofouling control
                  </span>
                </div>
                <p className="mt-4 text-xs font-semibold text-brand-500 group-hover:underline">
                  Read full case study →
                </p>
              </Link>
            </FadeIn>

            <FadeIn delay={100}>
              <div className="rounded-lg border border-dashed border-gray-300 bg-gray-50 p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                      Eskom • Wet-cooled coal
                    </p>
                    <h3 className="mt-2 text-lg font-semibold text-gray-700">
                      Tutuka Power Station
                    </h3>
                  </div>
                  <span className="rounded-full bg-amber-100 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-amber-800">
                    In Progress
                  </span>
                </div>
                <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                  TES dosing system installed and RT&D Testing Protocol Rev08
                  issued. Pilot progress constrained by on-the-ground conditions
                  including dam status, water configuration and induction scheduling.
                  Full case study to follow once baseline and intervention data
                  collection is complete.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-md bg-gray-200 px-2 py-1 text-[10px] font-medium text-gray-600">
                    RT&D Protocol Rev08
                  </span>
                  <span className="rounded-md bg-gray-200 px-2 py-1 text-[10px] font-medium text-gray-600">
                    WRC referee
                  </span>
                </div>
                <p className="mt-4 text-xs font-medium text-gray-500">
                  Expected completion: Subject to station conditions
                </p>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={200}>
            <div className="mt-8 rounded-lg border bg-white p-6 shadow-sm">
              <h3 className="text-sm font-semibold text-gray-900">
                Why Eskom stations?
              </h3>
              <div className="mt-3 grid gap-4 md:grid-cols-3">
                <div>
                  <p className="text-xs font-medium text-brand-500">
                    Complex water chemistry
                  </p>
                  <p className="mt-1 text-xs text-gray-600 leading-relaxed">
                    Eskom stations face challenging raw-water quality with high
                    TDS, variable pH and seasonal biofouling—perfect for
                    validating Mexel®432 performance.
                  </p>
                </div>
                <div>
                  <p className="text-xs font-medium text-brand-500">
                    Established protocols
                  </p>
                  <p className="mt-1 text-xs text-gray-600 leading-relaxed">
                    RT&D's Testing Protocol Rev08 provides a rigorous,
                    transparent framework for baseline → intervention → review
                    assessment.
                  </p>
                </div>
                <div>
                  <p className="text-xs font-medium text-brand-500">
                    Independent verification
                  </p>
                  <p className="mt-1 text-xs text-gray-600 leading-relaxed">
                    Water Research Commission (WRC) can act as independent
                    referee, ensuring credible, unbiased evaluation of results.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* International case studies */}
      <section className="border-b">
        <div className="mx-auto max-w-6xl px-4 py-14 lg:py-20">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-500">
            International
          </p>
          <h2 className="mt-2 text-2xl font-bold text-gray-900">
            Global Mexel®432 installations
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-gray-600 leading-relaxed">
            Mexel®432 has a 30+ year track record across power generation, refining,
            petrochemical, desalination and marine industries worldwide. These
            reference cases demonstrate the product's proven performance in diverse
            cooling-water environments and validate the chemistry underlying the TES
            approach.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <FadeIn>
              <div className="rounded-lg border bg-white p-5 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2">
                  <span className="text-lg">🇫🇷</span>
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand-500">
                    France
                  </p>
                </div>
                <h3 className="mt-3 text-base font-semibold text-gray-900">
                  EDF Nuclear Power Stations
                </h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  Multiple EDF nuclear plants use Mexel®432 for condenser and
                  cooling-system protection. Long-term deployments (10+ years in
                  some cases) with consistent biofouling control and improved heat
                  transfer performance.
                </p>
                <div className="mt-4 space-y-1 text-xs">
                  <p className="flex items-center gap-1.5 text-gray-700">
                    <svg className="h-3.5 w-3.5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Reduced mussel/barnacle fouling
                  </p>
                  <p className="flex items-center gap-1.5 text-gray-700">
                    <svg className="h-3.5 w-3.5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Extended cleaning intervals
                  </p>
                  <p className="flex items-center gap-1.5 text-gray-700">
                    <svg className="h-3.5 w-3.5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Corrosion inhibition
                  </p>
                </div>
                <p className="mt-4 text-xs text-gray-500 border-t pt-3">
                  <strong>Industry:</strong> Nuclear power<br />
                  <strong>Application:</strong> Condenser protection
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={100}>
              <div className="rounded-lg border bg-white p-5 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2">
                  <span className="text-lg">🇺🇸</span>
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand-500">
                    United States
                  </p>
                </div>
                <h3 className="mt-3 text-base font-semibold text-gray-900">
                  Refinery cooling towers
                </h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  US refineries have deployed Mexel®432 to manage biofilm and
                  Legionella risk in recirculating cooling water systems while
                  reducing overall chemical load. Replaces multi-product programs
                  with single-chemistry approach.
                </p>
                <div className="mt-4 space-y-1 text-xs">
                  <p className="flex items-center gap-1.5 text-gray-700">
                    <svg className="h-3.5 w-3.5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Biofilm control
                  </p>
                  <p className="flex items-center gap-1.5 text-gray-700">
                    <svg className="h-3.5 w-3.5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Legionella risk reduction
                  </p>
                  <p className="flex items-center gap-1.5 text-gray-700">
                    <svg className="h-3.5 w-3.5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Lower chemical footprint
                  </p>
                </div>
                <p className="mt-4 text-xs text-gray-500 border-t pt-3">
                  <strong>Industry:</strong> Oil & gas<br />
                  <strong>Application:</strong> Cooling towers
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={200}>
              <div className="rounded-lg border bg-white p-5 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2">
                  <span className="text-lg">🇦🇪</span>
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand-500">
                    Middle East
                  </p>
                </div>
                <h3 className="mt-3 text-base font-semibold text-gray-900">
                  Desalination plants
                </h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  Mexel®432 protects intake systems and heat exchangers in
                  seawater desalination facilities, preventing marine fouling
                  without environmental harm. Critical for maintaining thermal
                  efficiency in high-salinity environments.
                </p>
                <div className="mt-4 space-y-1 text-xs">
                  <p className="flex items-center gap-1.5 text-gray-700">
                    <svg className="h-3.5 w-3.5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Marine fouling prevention
                  </p>
                  <p className="flex items-center gap-1.5 text-gray-700">
                    <svg className="h-3.5 w-3.5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Heat exchanger protection
                  </p>
                  <p className="flex items-center gap-1.5 text-gray-700">
                    <svg className="h-3.5 w-3.5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Environmental compliance
                  </p>
                </div>
                <p className="mt-4 text-xs text-gray-500 border-t pt-3">
                  <strong>Industry:</strong> Desalination<br />
                  <strong>Application:</strong> Marine fouling control
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={300}>
              <div className="rounded-lg border bg-white p-5 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2">
                  <span className="text-lg">🇯🇵</span>
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand-500">
                    Japan
                  </p>
                </div>
                <h3 className="mt-3 text-base font-semibold text-gray-900">
                  Coastal power stations
                </h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  Japanese thermal power stations using seawater cooling have
                  applied Mexel®432 to control mussel and barnacle fouling in
                  intake tunnels and condensers. Demonstrated efficacy in challenging
                  marine environments with high biofouling pressure.
                </p>
                <div className="mt-4 space-y-1 text-xs">
                  <p className="flex items-center gap-1.5 text-gray-700">
                    <svg className="h-3.5 w-3.5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Mussel/barnacle control
                  </p>
                  <p className="flex items-center gap-1.5 text-gray-700">
                    <svg className="h-3.5 w-3.5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Intake tunnel protection
                  </p>
                  <p className="flex items-center gap-1.5 text-gray-700">
                    <svg className="h-3.5 w-3.5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Seawater compatibility
                  </p>
                </div>
                <p className="mt-4 text-xs text-gray-500 border-t pt-3">
                  <strong>Industry:</strong> Thermal power<br />
                  <strong>Application:</strong> Seawater cooling
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={400}>
              <div className="rounded-lg border bg-white p-5 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2">
                  <span className="text-lg">🇧🇷</span>
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand-500">
                    Brazil
                  </p>
                </div>
                <h3 className="mt-3 text-base font-semibold text-gray-900">
                  Petrochemical complexes
                </h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  Brazilian petrochemical facilities have used Mexel®432 for
                  heat exchanger protection across multiple process units,
                  reducing unplanned shutdowns and maintenance costs. Proven
                  integration with existing treatment programs.
                </p>
                <div className="mt-4 space-y-1 text-xs">
                  <p className="flex items-center gap-1.5 text-gray-700">
                    <svg className="h-3.5 w-3.5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Reduced maintenance shutdowns
                  </p>
                  <p className="flex items-center gap-1.5 text-gray-700">
                    <svg className="h-3.5 w-3.5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Multi-unit application
                  </p>
                  <p className="flex items-center gap-1.5 text-gray-700">
                    <svg className="h-3.5 w-3.5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Cost efficiency
                  </p>
                </div>
                <p className="mt-4 text-xs text-gray-500 border-t pt-3">
                  <strong>Industry:</strong> Petrochemical<br />
                  <strong>Application:</strong> Heat exchangers
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={500}>
              <div className="rounded-lg border bg-white p-5 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2">
                  <span className="text-lg">🇮🇳</span>
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand-500">
                    India
                  </p>
                </div>
                <h3 className="mt-3 text-base font-semibold text-gray-900">
                  Steel & manufacturing
                </h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  Indian steel plants and heavy manufacturing sites have deployed
                  Mexel®432 to protect process cooling systems from scale and
                  biofouling buildup. Effective in high-temperature, high-solids
                  industrial cooling-water environments.
                </p>
                <div className="mt-4 space-y-1 text-xs">
                  <p className="flex items-center gap-1.5 text-gray-700">
                    <svg className="h-3.5 w-3.5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Scale control
                  </p>
                  <p className="flex items-center gap-1.5 text-gray-700">
                    <svg className="h-3.5 w-3.5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    High-solids tolerance
                  </p>
                  <p className="flex items-center gap-1.5 text-gray-700">
                    <svg className="h-3.5 w-3.5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Process reliability
                  </p>
                </div>
                <p className="mt-4 text-xs text-gray-500 border-t pt-3">
                  <strong>Industry:</strong> Steel & manufacturing<br />
                  <strong>Application:</strong> Process cooling
                </p>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={600}>
            <div className="mt-8 rounded-lg border-l-4 border-sky-700 bg-brand-50 p-5">
              <h3 className="text-sm font-semibold text-gray-900">
                About international references
              </h3>
              <p className="mt-2 text-xs text-gray-700 leading-relaxed">
                These international case studies represent Mexel®432 deployments by
                Mexel Industries (France) and its global partners across 30+ years
                of field application. TES holds the exclusive distribution rights
                for Mexel®432 in Southern Africa and applies the same proven
                chemistry within the structured TES approach (IoT dosing, data
                integration and RT&D protocol verification).
              </p>
              <p className="mt-2 text-xs text-gray-700 leading-relaxed">
                Detailed technical documentation, site reports and performance data
                are available on request for qualified enquiries. Contact us to
                discuss specific industry applications relevant to your operation.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-14 lg:py-20">
          <FadeIn>
            <div className="rounded-lg border bg-white p-8 shadow-sm">
              <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div className="flex-1">
                  <h2 className="text-xl font-semibold text-gray-900">
                    Want more detail on these case studies?
                  </h2>
                  <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                    We maintain detailed technical documentation, site reports and
                    performance data for all international Mexel®432 deployments.
                    For Eskom stations, we can share RT&D protocol documentation
                    and discuss how the same approach could apply to your site.
                  </p>
                  <div className="mt-4 space-y-2 text-xs text-gray-700">
                    <p className="flex items-center gap-2">
                      <svg className="h-4 w-4 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Technical site reports and performance summaries
                    </p>
                    <p className="flex items-center gap-2">
                      <svg className="h-4 w-4 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                      Baseline vs. intervention data comparisons
                    </p>
                    <p className="flex items-center gap-2">
                      <svg className="h-4 w-4 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      Industry-specific application guidance
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-md bg-brand-500 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2"
                  >
                    Request case study details
                  </Link>
                  <Link
                    href="/knowledge-hub/resources"
                    className="inline-flex items-center justify-center text-sm font-semibold text-brand-500 hover:text-brand-900"
                  >
                    Browse resources →
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
