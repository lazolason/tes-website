import Link from "next/link";
import FadeIn from "../../../components/FadeIn";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Technical resources, white papers and documentation from Mexel Energy Sustain: TES system overview, Mexel®432 technical data and case study reports.",
  openGraph: {
    title: "Resources | Mexel Energy Sustain",
    description:
      "Download technical resources, white papers and case study documentation.",
  },
};

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="border-b bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-16 lg:py-24">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-500">
            Resources
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
            Technical resources and documentation.
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-gray-600">
            Download technical documentation, white papers and case study reports
            about TES, Mexel®432 and cooling-water efficiency solutions.
          </p>
        </div>
      </section>

      {/* White papers & Technical docs */}
      <section className="border-b">
        <div className="mx-auto max-w-6xl px-4 py-14 lg:py-20">
          <FadeIn>
            <h2 className="text-2xl font-semibold tracking-tight text-gray-900">
              White papers & Technical documentation
            </h2>
          </FadeIn>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <FadeIn delay={100}>
              <a
                href="/Lost_Megawatts_Restored.pdf"
                download
                className="group block rounded-lg border bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-100">
                    <svg
                      className="h-6 w-6 text-brand-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <svg
                    className="h-5 w-5 text-gray-400 transition-colors group-hover:text-brand-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                </div>
                <h3 className="mt-4 text-base font-semibold text-gray-900 group-hover:text-brand-500">
                  Lost Megawatts Restored
                </h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  Unlocking hidden performance: A systemic approach to cooling
                  efficiency in South Africa&apos;s coal fleet. Technical overview
                  of TES applications and measured results.
                </p>
                <div className="mt-4 flex items-center gap-3 text-xs text-gray-500">
                  <span className="rounded-full bg-gray-100 px-2.5 py-1 font-medium">
                    PDF
                  </span>
                  <span>15 pages</span>
                </div>
              </a>
            </FadeIn>

            <FadeIn delay={200}>
              <div className="rounded-lg border border-dashed border-gray-300 bg-gray-50 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-200">
                  <svg
                    className="h-6 w-6 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="mt-4 text-base font-semibold text-gray-400">
                  Mexel®432 Technical Data Sheet
                </h3>
                <p className="mt-2 text-sm text-gray-400 leading-relaxed">
                  Product specifications, application guidelines and chemistry
                  details. Available on request for qualified enquiries.
                </p>
                <div className="mt-4">
                  <Link
                    href="/contact"
                    className="text-xs font-semibold text-brand-500 hover:text-brand-900"
                  >
                    Request document →
                  </Link>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={300}>
              <div className="rounded-lg border border-dashed border-gray-300 bg-gray-50 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-200">
                  <svg
                    className="h-6 w-6 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <h3 className="mt-4 text-base font-semibold text-gray-400">
                  TES Master Evidence Pack
                </h3>
                <p className="mt-2 text-sm text-gray-400 leading-relaxed">
                  Comprehensive documentation including RT&D protocol, WRC
                  correspondence and JET alignment. Available for station
                  engineers and decision-makers.
                </p>
                <div className="mt-4">
                  <Link
                    href="/contact"
                    className="text-xs font-semibold text-brand-500 hover:text-brand-900"
                  >
                    Request document →
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Case study reports */}
      <section className="border-b bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-14 lg:py-20">
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900">
            Case study reports
          </h2>
          <p className="mt-3 text-sm text-gray-600">
            Detailed reports from TES pilots and Mexel®432 applications.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-dashed border-gray-300 bg-white p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-200">
                <svg
                  className="h-6 w-6 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h3 className="mt-4 text-base font-semibold text-gray-400">
                Kriel Power Station Report
              </h3>
              <p className="mt-2 text-sm text-gray-400 leading-relaxed">
                Detailed technical report with baseline data, intervention
                methodology and measured results. Available for qualified
                station engineers.
              </p>
              <div className="mt-4">
                <Link
                  href="/contact"
                  className="text-xs font-semibold text-brand-500 hover:text-brand-900"
                >
                  Request report →
                </Link>
              </div>
            </div>

            <div className="rounded-lg border border-dashed border-gray-300 bg-white p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-200">
                <svg
                  className="h-6 w-6 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h3 className="mt-4 text-base font-semibold text-gray-400">
                Industrial case studies
              </h3>
              <p className="mt-2 text-sm text-gray-400 leading-relaxed">
                Anonymized reports from mining, refining and manufacturing
                sites. Metrics, outcomes and lessons learned from TES
                applications.
              </p>
              <div className="mt-4">
                <Link
                  href="/contact"
                  className="text-xs font-semibold text-brand-500 hover:text-brand-900"
                >
                  Request reports →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="mx-auto max-w-6xl px-4 py-14 lg:py-20">
          <FadeIn>
            <div className="flex flex-col gap-4 rounded-lg border bg-gray-50 p-6 shadow-sm md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-lg font-semibold text-gray-900">
                  Need additional documentation?
                </h2>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  If you need specific technical data, RT&D protocols or
                  detailed case study reports, contact us directly. We share
                  documentation with qualified station engineers and
                  decision-makers.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2"
              >
                Contact us
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
