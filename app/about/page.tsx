import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Mexel Energy Sustain",
  description:
    "About Mexel Energy Sustain (Pty) Ltd – a South African company focused on cooling-water efficiency using Mexel®432 chemistry, IoT dosing and the TES verification framework.",
  openGraph: {
    title: "About Mexel Energy Sustain",
    description:
      "South African company focused on cooling-water and thermal efficiency for power stations and industrial plants.",
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero — dark, image-backed */}
      <section className="relative overflow-hidden bg-slate-900 pt-24 pb-20 text-white">
        <div className="absolute inset-0 bg-[url('/power-gen.webp')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900/90 to-transparent" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-widest text-emerald-400 mb-4">About</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 max-w-3xl leading-[1.1]">
            Engineering-led thermal efficiency.
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mb-8">
            Mexel Energy Sustain (Pty) Ltd is a South African company combining Mexel®432
            chemistry, IoT dosing and data-driven verification to address cold-end fouling
            where site data shows a measurable condenser or cooling-water performance penalty.
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="rounded-full bg-emerald-500/20 border border-emerald-500/30 px-4 py-1.5 text-xs font-semibold text-emerald-300 uppercase tracking-wider">
              Mexel®432 Chemistry
            </span>
            <span className="rounded-full bg-white/10 border border-white/20 px-4 py-1.5 text-xs font-semibold text-white/80 uppercase tracking-wider">
              IoT Dosing
            </span>
            <span className="rounded-full bg-white/10 border border-white/20 px-4 py-1.5 text-xs font-semibold text-white/80 uppercase tracking-wider">
              ASME PTC 12.2 Aligned
            </span>
            <span className="rounded-full bg-white/10 border border-white/20 px-4 py-1.5 text-xs font-semibold text-white/80 uppercase tracking-wider">
              Site-Specific Review
            </span>
          </div>
        </div>
      </section>

      {/* Stats band */}
      <section className="bg-emerald-600 text-white py-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 text-center">
            <div>
              <p className="text-3xl font-bold">30%</p>
              <p className="text-emerald-100 text-sm mt-1">Cleanliness-factor improvement<br/><span className="text-xs opacity-75">(Kriel Unit 6, report conclusion)</span></p>
            </div>
            <div>
              <p className="text-3xl font-bold">4.3°C</p>
              <p className="text-emerald-100 text-sm mt-1">Later actual TTD<br/><span className="text-xs opacity-75">(Kriel Unit 6 report observation)</span></p>
            </div>
            <div>
              <p className="text-3xl font-bold">5ppm</p>
              <p className="text-emerald-100 text-sm mt-1">Daily trial dose<br/><span className="text-xs opacity-75">(30 min/day Kriel protocol)</span></p>
            </div>
            <div>
              <p className="text-3xl font-bold">93%</p>
              <p className="text-emerald-100 text-sm mt-1">Aerobic bacteria kill<br/><span className="text-xs opacity-75">(Lab biocide comparison, report p.14)</span></p>
            </div>
          </div>
        </div>
      </section>

      {/* Evidence references */}
      <section className="border-b bg-slate-50 py-8">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-sm font-semibold text-slate-500 uppercase tracking-widest shrink-0">
              Technical Documents Available On Request
            </p>
            <div className="flex flex-wrap items-center justify-center md:justify-end gap-x-8 gap-y-4">
              <span className="flex items-center gap-2 text-sm font-medium text-slate-700">
                <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                SDS/TDS
              </span>
              <span className="flex items-center gap-2 text-sm font-medium text-slate-700">
                <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                Kriel RT&amp;D Report
              </span>
              <span className="flex items-center gap-2 text-sm font-medium text-slate-700">
                <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                Verification Protocol
              </span>
              <span className="flex items-center gap-2 text-sm font-medium text-slate-700">
                <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                Environmental Review Docs
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Our approach */}
      <section className="border-b">
        <div className="mx-auto max-w-6xl px-4 py-12 lg:py-16">
          <FadeIn>
            <h2 className="text-xl font-semibold text-slate-900">Our technical approach</h2>
          </FadeIn>
          <div className="mt-4 grid gap-8 md:grid-cols-2">
            <FadeIn delay={100}>
              <p className="text-sm text-slate-700 leading-relaxed">
                We do not start with a catalogue of products. We start with{" "}
                <span className="font-semibold">how energy and water are being used</span>{" "}
                at the cold end: condensers, cooling towers, exchangers and critical
                cooling-water loops. From there we design an intervention that makes
                technical sense for that specific system.
              </p>
              <p className="mt-3 text-sm text-slate-700 leading-relaxed">
                TES is the way we structure this thinking:{" "}
                <span className="font-semibold">Mexel®432 chemistry</span>,{" "}
                <span className="font-semibold">IoT dosing</span>, a focused{" "}
                <span className="font-semibold">cooling-water performance view</span> and a
                clear <span className="font-semibold">verification framework</span>. Each
                element is simple; the value is in how they work together.
              </p>
            </FadeIn>
            <FadeIn delay={200}>
              <div className="space-y-3">
                <h3 className="text-sm font-semibold text-slate-900">Principles</h3>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li>• Transparent, data-driven, engineering-first.</li>
                  <li>• Respect existing station and plant protocols.</li>
                  <li>• Scope tightly; avoid overpromising or overselling.</li>
                  <li>• Let measured results, not claims, drive decisions.</li>
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Why TES exists */}
      <section className="border-b bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-12 lg:py-16">
          <h2 className="text-xl font-semibold text-slate-900">Why TES exists</h2>
          <div className="mt-4 grid gap-8 md:grid-cols-2">
            <div>
              <p className="text-sm text-slate-700 leading-relaxed">
                At many wet-cooled stations and industrial sites, the cold end quietly
                erodes performance. Biofouling, scaling, corrosion and ash or mud
                deposits reduce condenser cleanliness, increase cooling-water
                temperatures and make TR / TTD unstable. Multiple chemicals are dosed,
                but their true impact on energy efficiency is often unclear.
              </p>
            </div>
            <div>
              <p className="text-sm text-slate-700 leading-relaxed">
                TES exists to make this part of the system visible and manageable. By
                focusing on cooling-water and condenser performance, we help clients
                recover efficiency that is already sitting in their assets, without
                claiming to replace proper operations, maintenance or long-term capital
                projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Eskom context */}
      <section className="border-b">
        <div className="mx-auto max-w-6xl px-4 py-14 lg:py-20">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
            Our work with Eskom and large energy users
          </h2>
          <div className="mt-5 grid gap-8 md:grid-cols-2">
            <div>
              <p className="text-base text-slate-600 leading-relaxed">
                Mexel®432 has prior Eskom technical engagement history, including
                RT&amp;D evaluation at Kriel and a structured testing protocol pathway for Tutuka. We
                understand the realities of working on live stations: water-quality
                constraints, operational risk, safety, and the need to align with
                engineering, chemical services and station management.
              </p>
            </div>
            <div>
              <p className="text-base text-slate-600 leading-relaxed">
                Our goal is straightforward:{" "}
                <span className="font-semibold text-slate-900">
                  help stations stabilise condenser performance, not replace maintenance
                  or plant disciplines.
                </span>{" "}
                TES is structured so that station teams, engineering and independent
                referees can see the same data and draw their own technical conclusions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Evidence & Timeline */}
      <section className="border-b bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14 lg:py-20">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
            Evidence and verification timeline
          </h2>
          <p className="mt-3 max-w-3xl text-base text-slate-600">
            TES is built on documented work using ASME PTC 12.2 heat-rate review concepts, independent referee options and
            structured verification. Key evidence points:
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {/* Kriel */}
            <div className="rounded-lg border bg-white p-5 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wider text-emerald-600">Kriel Power Station</p>
              <h3 className="mt-2 text-sm font-semibold text-slate-900">Initial Mexel®432 application</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                First Eskom site where Mexel®432 was applied in cooling-water service.
                Station data indicated improved condenser performance during treatment period.
              </p>
            </div>

            {/* Tutuka Protocol */}
            <div className="rounded-lg border bg-white p-5 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wider text-emerald-600">Verification Standard</p>
              <h3 className="mt-2 text-sm font-semibold text-slate-900">ASME PTC 12.2 Aligned</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Performance gains should be reviewed using ASME PTC 12.2-aligned methodology
                where station data supports it. Any fuel or CO₂ figure is a derived calculation,
                not a standalone product claim.
              </p>
            </div>

            {/* WRC */}
            <div className="rounded-lg border bg-white p-5 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wider text-emerald-600">Independent Referee</p>
              <h3 className="mt-2 text-sm font-semibold text-slate-900">Water Research Commission</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                The WRC can act as an independent referee for TES pilots, reviewing methodology
                and results under their established frameworks for water-treatment research.
              </p>
            </div>

            {/* IoT Dosing */}
            <div className="rounded-lg border bg-white p-5 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wider text-emerald-600">IoT Infrastructure</p>
              <h3 className="mt-2 text-sm font-semibold text-slate-900">Thingy:91X dosing skids</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                TES dosing skids based on Nordic&apos;s Thingy:91X platform installed at Tutuka,
                providing traceable dosing records linked to condenser performance data.
              </p>
            </div>

            {/* Carbon Credit Development */}
            <div className="rounded-lg border-2 border-emerald-200 bg-emerald-50 p-5 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wider text-emerald-700">Emissions Methodology</p>
              <h3 className="mt-2 text-sm font-semibold text-slate-900">Derived emissions review</h3>
              <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                Working with{" "}
                <a
                  href="https://www.brundtland.co.za"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-emerald-700 hover:text-emerald-900 underline"
                >
                  Brundtland Consulting
                </a>, we can assess whether reviewed site data creates a credible basis for an emissions methodology.
              </p>
              <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                ASME PTC 12.2-aligned heat-rate analysis can support documentation for later review under international (VCS) or South African (DFFE) frameworks, subject to project-specific validation.
              </p>
              <p className="mt-3 text-xs text-slate-600 italic border-t border-emerald-200 pt-2">
                Verified efficiency data → derived emissions estimate → project-specific methodology review
              </p>
            </div>

            {/* JET correspondence */}
            <div className="rounded-lg border bg-white p-5 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wider text-emerald-600">Strategic Engagement</p>
              <h3 className="mt-2 text-sm font-semibold text-slate-900">JET &amp; transition context</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                TES is positioned within the Just Energy Transition context as a practical
                efficiency intervention that can extend asset life and reduce emissions intensity.
              </p>
            </div>
          </div>

          <p className="mt-6 text-xs text-slate-700">
            Documentation including the TES Master Evidence Pack and engineering protocol
            is available for qualified enquiries.
          </p>
        </div>
      </section>

      {/* Industrial clients */}
      <section className="border-b bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-12 lg:py-16">
          <h2 className="text-xl font-semibold text-slate-900">
            Industrial cooling-water clients
          </h2>
          <div className="mt-4 grid gap-8 md:grid-cols-2">
            <div>
              <p className="text-sm text-slate-700 leading-relaxed">
                Beyond power stations, many industrial sites depend on
                reliable cooling-water systems: mines, refineries, steel plants,
                and large processing facilities. They face the same
                underlying issues – biofilm, corrosion, scaling, solids – often with
                variable raw-water quality.
              </p>
            </div>
            <div>
              <p className="text-sm text-slate-700 leading-relaxed">
                TES principles translate directly into these environments. We adapt the
                same Mexel®432 chemistry, dosing and data approach to the specific
                cooling loops and constraints of each plant, with the same emphasis on
                transparency and measurable results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-2xl p-10 sm:p-14 text-center shadow-xl">
            <p className="text-xs font-bold uppercase tracking-widest text-emerald-400 mb-4">Talk to us</p>
            <h2 className="text-3xl font-bold text-white mb-4">
              Is TES right for your station?
            </h2>
            <p className="text-slate-300 mb-10 max-w-xl mx-auto leading-relaxed">
              If you manage a wet-cooled unit or industrial cooling-water system,
              a short technical discussion is usually enough to see if there is a
              realistic path to efficiency recovery.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex justify-center items-center rounded-xl bg-emerald-500 px-8 py-4 text-sm font-bold text-white shadow-lg shadow-emerald-900/40 hover:bg-emerald-400 transition-colors"
              >
                Contact Engineering
              </Link>
              <Link
                href="/tes"
                className="inline-flex justify-center items-center rounded-xl bg-white/10 px-8 py-4 text-sm font-bold text-white border border-white/20 hover:bg-white/20 transition-colors"
              >
                TES System Overview
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
