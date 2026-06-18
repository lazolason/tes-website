import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import type { Metadata } from "next";

const caseStudiesSocialImage = {
  url: "/og/case-studies.png",
  width: 1200,
  height: 630,
  alt: "Mexel Energy Sustain case studies social preview",
};

export const metadata: Metadata = {
  title: "Case Studies | TES",
  description:
    "TES case studies and technical references for Mexel®432 cooling-water treatment, including prior Eskom RT&D evidence and international deployment references.",
  openGraph: {
    title: "TES Case Studies | Mexel Energy Sustain",
    description:
      "Evidence-led references for engineers reviewing TES, Kriel RT&D observations and international Mexel®432 deployments.",
    images: [caseStudiesSocialImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "TES Case Studies | Mexel Energy Sustain",
    description:
      "Evidence-led references for engineers reviewing TES, Kriel RT&D observations and international Mexel®432 deployments.",
    images: [caseStudiesSocialImage.url],
  },
};

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-900 pt-24 pb-20 text-white">
        <div className="absolute inset-0 bg-[url('/power-gen.webp')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900/90 to-transparent" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-widest text-emerald-400 mb-4">
            Case Studies
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 max-w-3xl leading-[1.1]">
            TES in practice: evidence from the field.
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mb-6">
            These case studies document where TES and Mexel®432 have been applied,
            what was measured and what results were observed. They are written to
            give station engineers and decision-makers a clear, honest picture of
            what TES can deliver — and what it cannot.
          </p>
          <p className="text-lg text-slate-400 leading-relaxed max-w-2xl">
            Each case study follows a consistent structure: baseline conditions,
            intervention approach, observed results and lessons learned. Where
            independent verification was conducted, we include the referee&apos;s
            conclusions.
          </p>
        </div>
      </section>

      {/* What you'll find in these case studies */}
      <section className="border-b">
        <div className="mx-auto max-w-6xl px-4 py-12 lg:py-16">
          <FadeIn>
            <h2 className="text-xl font-semibold text-gray-900">
              What you&apos;ll find in these case studies
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
            corrosion, making them relevant environments for structured technical
            evaluation of the TES approach.
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
                    RT&amp;D Evidence
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
                    Verification Protocol
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
                    Protocol Pathway
                  </span>
                </div>
                <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                  Tutuka is referenced as evidence that Eskom had a structured technical
                  pathway for baseline, intervention and review. It should not be read as
                  an approved rollout or completed performance case study.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-md bg-gray-200 px-2 py-1 text-[10px] font-medium text-gray-600">
                    Verification Protocol
                  </span>
                  <span className="rounded-md bg-gray-200 px-2 py-1 text-[10px] font-medium text-gray-600">
                    WRC referee
                  </span>
                </div>
                <p className="mt-4 text-xs font-medium text-gray-500">
                  Status: protocol and procurement history only
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
                    TDS, variable pH and seasonal biofouling, making them suitable
                    for disciplined, site-specific evaluation.
                  </p>
                </div>
                <div>
                  <p className="text-xs font-medium text-brand-500">
                    Established protocols
                  </p>
                  <p className="mt-1 text-xs text-gray-600 leading-relaxed">
                    Heat rate performance is measured using ASME PTC 12.2
                    (TTD/TR methodology), providing a rigorous,
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

      {/* International references */}
      <section className="border-b">
        <div className="mx-auto max-w-6xl px-4 py-14 lg:py-20">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-500">
            International
          </p>
          <h2 className="mt-2 text-2xl font-bold text-gray-900">
            International reference library
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-gray-600 leading-relaxed">
            Mexel®432 has been used in multiple industrial cooling-water contexts outside
            Southern Africa. We keep public claims on this site limited to broad application
            areas unless a site report is cleared for sharing.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <FadeIn>
              <div className="rounded-lg border bg-white p-5 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="mt-3 text-base font-semibold text-gray-900">
                  Power generation
                </h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  Condenser and cooling-system references are available for qualified
                  engineering review where disclosure permits.
                </p>
                <p className="mt-4 text-xs text-gray-500 border-t pt-3">
                  Typical review material: operating context, dosing approach, and available
                  thermal-performance indicators.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={100}>
              <div className="rounded-lg border bg-white p-5 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="mt-3 text-base font-semibold text-gray-900">
                  Refining and petrochemical
                </h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  Recirculating cooling-water and process heat-exchanger references can be
                  discussed under an appropriate technical-review process.
                </p>
                <p className="mt-4 text-xs text-gray-500 border-t pt-3">
                  Public summaries avoid health, shutdown-reduction, or cost-saving claims
                  unless supported by a cleared site document.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={200}>
              <div className="rounded-lg border bg-white p-5 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="mt-3 text-base font-semibold text-gray-900">
                  Seawater and desalination
                </h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  Seawater applications are handled through local environmental approvals,
                  discharge limits and site-specific operating records.
                </p>
                <p className="mt-4 text-xs text-gray-500 border-t pt-3">
                  Relevant documents are shared only when they match the client&#39;s use case
                  and disclosure requirements.
                </p>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={300}>
            <div className="mt-8 rounded-lg border-l-4 border-sky-700 bg-brand-50 p-5">
              <h3 className="text-sm font-semibold text-gray-900">
                About international references
              </h3>
              <p className="mt-2 text-xs text-gray-700 leading-relaxed">
                TES can discuss international Mexel®432 application history during qualified
                technical enquiries. Public summaries are intentionally conservative until
                supporting documents are cleared for release.
              </p>
              <p className="mt-2 text-xs text-gray-700 leading-relaxed">
                The Southern Africa TES approach remains based on site scoping, traceable dosing,
                and baseline-to-review verification rather than generic global performance claims.
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
                    We can share available documentation where disclosure allows. For Eskom
                    stations, we can discuss verification protocol documentation and how a
                    structured baseline-to-review approach could apply to your site.
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
