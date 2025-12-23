"use client";

import Link from "next/link";
import FadeIn from "./FadeIn";

export default function PathwayCTA() {
  return (
    <section className="border-y border-slate-200 bg-white py-12 lg:py-16">
      <div className="mx-auto max-w-6xl px-4">
        <FadeIn>
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              Choose your pathway
            </h2>
            <p className="mt-3 text-sm text-slate-600">
              Explore TES applications for your context or review engineering evidence
            </p>
          </div>
        </FadeIn>

        <div className="grid gap-6 md:grid-cols-3">
          {/* Card 1: Power Stations */}
          <FadeIn delay={100}>
            <Link
              href="/industries/power-energy"
              className="group relative flex flex-col rounded-xl border-2 border-slate-200 bg-white p-6 transition-all hover:-translate-y-1 hover:border-emerald-500 hover:shadow-lg"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 transition-colors group-hover:bg-emerald-600 group-hover:text-white">
                {/* Icon: Lightning/Power */}
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 transition-colors group-hover:text-emerald-600">
                Power stations
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Wet-cooled condensers, cooling towers, STEP-aligned measurement.
              </p>
              <div className="mt-4 flex items-center text-sm font-medium text-emerald-600 opacity-0 transition-opacity group-hover:opacity-100">
                Explore power & energy
                <svg className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          </FadeIn>

          {/* Card 2: Industrial Users */}
          <FadeIn delay={200}>
            <Link
              href="/industries"
              className="group relative flex flex-col rounded-xl border-2 border-slate-200 bg-white p-6 transition-all hover:-translate-y-1 hover:border-emerald-500 hover:shadow-lg"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 transition-colors group-hover:bg-emerald-600 group-hover:text-white">
                {/* Icon: Factory/Industry */}
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 transition-colors group-hover:text-emerald-600">
                Industrial users
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Cooling networks, process heat exchangers, uptime-focused.
              </p>
              <div className="mt-4 flex items-center text-sm font-medium text-emerald-600 opacity-0 transition-opacity group-hover:opacity-100">
                Browse all industries
                <svg className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          </FadeIn>

          {/* Card 3: View Results */}
          <FadeIn delay={300}>
            <Link
              href="/knowledge-hub/engineering-playbook"
              className="group relative flex flex-col rounded-xl border-2 border-emerald-500 bg-gradient-to-br from-emerald-50 to-white p-6 transition-all hover:-translate-y-1 hover:border-emerald-600 hover:shadow-lg"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-emerald-600 text-white transition-colors group-hover:bg-emerald-700">
                {/* Icon: Document/Clipboard */}
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 transition-colors group-hover:text-emerald-600">
                View results
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Engineering Playbook + field scenarios + constraints.
              </p>
              <div className="mt-4 flex items-center text-sm font-medium text-emerald-600 opacity-0 transition-opacity group-hover:opacity-100">
                Explore playbook
                <svg className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
