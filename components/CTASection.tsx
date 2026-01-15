"use client";

import Link from "next/link";
import FadeIn from "./FadeIn";
import Button from "./ui/Button";

export default function CTASection() {
  return (
    <section className="border-t border-slate-200 bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-emerald-700 bg-emerald-600 px-6 py-16 text-center text-white shadow-sm sm:px-12">
          <FadeIn>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to restore your plant&apos;s efficiency?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-emerald-100">
              Engage TES with a structured baseline, controlled dosing, and
              verification-ready reporting.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button href="/contact" variant="outline" size="md">
                Contact Engineering
              </Button>
              <Button href="/knowledge-hub/case-studies" variant="ghost" size="md" className="text-white hover:bg-white/10">
                View Case Studies
              </Button>
            </div>
          </FadeIn>
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-6 text-slate-600 md:flex-row">
          <div className="flex items-center gap-2">
            <svg className="h-5 w-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="text-sm font-medium">info@mexelenergysustain.com</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="h-5 w-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="text-sm font-medium">South Africa | Global</span>
          </div>
        </div>
      </div>
    </section>
  );
}
