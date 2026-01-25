import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import SystemHeader from "../../components/SystemHeader";
import { Button } from "../../components/ui/Button";

export const metadata: Metadata = {
  title: "TES Applications",
  description:
    "TES applications at Eskom wet-cooled power stations (Tutuka, Kriel, Matla, Kendal) and industrial cooling-water systems. Structured pilots with baseline, intervention and verification.",
  openGraph: {
    title: "TES Applications | Mexel Energy Sustain",
    description:
      "Where TES fits: Eskom stations and industrial cooling-water users.",
  },
};

export default function ApplicationsPage() {
  return (
    <main className="min-h-screen bg-white">
      <SystemHeader
        tag="TES APPLICATIONS"
        title="Application pathways for TES pilots."
        description="TES pilots follow baseline → intervention → review using condenser indicators (TR, TTD, vacuum) with traceable dosing records."
        continuity="This is how the TES system is applied in practice."
        currentLabel="Pilots"
        activeSteps={[2, 3]}
      />

      {/* SECTION 1: Condenser Efficiency (Eskom) */}
      <section id="condenser" className="scroll-mt-20 border-b bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="flex flex-col gap-6">
              <div className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 w-fit">
                UTILITY SECTOR
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Condenser Efficiency <br className="hidden sm:block" /> for Power Generation.
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                At wet-cooled stations, TES focuses on the condenser as a critical performance node.
                We restore MW output lost to back-pressure decay by maintaining a clean, film-protected surface.
              </p>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Vacuum Recovery</h4>
                    <p className="text-sm text-slate-500">Restore design kPa and heat transfer rates.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Station Fitment</h4>
                    <p className="text-sm text-slate-500">Ideally suited for Tutuka, Matla, Kriel, and Kendal units.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-2xl shadow-2xl lg:aspect-square">
              <Image
                src="/power-station-clean.png"
                alt="Wet-cooled power station cooling tower"
                fill
                className="object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Cooling Tower Preservation (Industrial) */}
      <section id="cooling-towers" className="scroll-mt-20 border-b bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-16 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="relative order-last lg:order-first aspect-video overflow-hidden rounded-2xl shadow-2xl lg:aspect-square">
              <Image
                src="/industrial-plant.webp"
                alt="Industrial cooling water system"
                fill
                className="object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
            </div>
            <div className="flex flex-col gap-6">
              <div className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 w-fit">
                INDUSTRIAL SECTOR
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Cooling Tower Preservation <br className="hidden sm:block" /> & Asset Integrity.
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Outside the utility sector, cooling towers are critical production assets.
                TES prevents structural collapse and airflow restriction by stoping bio-mass accumulation in the fill pack.
              </p>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Structural Protection</h4>
                    <p className="text-sm text-slate-500">Prevent fill collapse and weight gain risks.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Heavy Industry Focus</h4>
                    <p className="text-sm text-slate-500">Designed for mines, refineries, and petrochemical plants.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TES building blocks in context – with placeholders */}
      <section className="border-b bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-12 lg:py-16">
          <h2 className="text-xl font-semibold text-slate-900">
            The same four TES building blocks, applied to different sites.
          </h2>
          <p className="mt-2 max-w-3xl text-sm text-slate-700">
            Regardless of site, TES is always built from the same elements: Mexel®432,
            IoT-enabled dosing, a cooling-water performance view and a verification
            framework. The application details change by station or plant.
          </p>

          <div className="mt-6 grid gap-6 md:grid-cols-4">
            {/* 432 image */}
            <div className="flex flex-col gap-3 rounded-lg border bg-white p-4 shadow-sm">
              <div className="relative h-24 w-full overflow-hidden rounded">
                <Image
                  src="/dosing-skid.webp"
                  alt="Mexel®432 dosing equipment"
                  fill
                  className="object-cover"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <h3 className="text-sm font-semibold text-slate-900">
                Mexel®432 chemistry
              </h3>
              <p className="mt-1 text-xs text-slate-700 leading-relaxed">
                Applied to once-through and recirculating systems using river, dam, mine
                or seawater. Focused on biofouling, corrosion, scaling and solids
                dispersion at the cold end.
              </p>
            </div>

            {/* IoT skid */}
            <div className="flex flex-col gap-3 rounded-lg border bg-white p-4 shadow-sm">
              <div className="relative h-24 w-full overflow-hidden rounded">
                <Image
                  src="/iot-dashboard.webp"
                  alt="IoT dosing dashboard"
                  fill
                  className="object-cover"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <h3 className="text-sm font-semibold text-slate-900">
                TES dosing skid (Thingy:91X)
              </h3>
              <p className="mt-1 text-xs text-slate-700 leading-relaxed">
                IoT-enabled dosing units sized for station or plant circuits, with
                level sensing, logging and remote configuration for transparent dosing
                records.
              </p>
            </div>

            {/* Data view */}
            <div className="flex flex-col gap-3 rounded-lg border bg-white p-4 shadow-sm">
              <div className="relative h-24 w-full overflow-hidden rounded">
                <Image
                  src="/control-room.webp"
                  alt="Cooling water data view"
                  fill
                  className="object-cover"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <h3 className="text-sm font-semibold text-slate-900">
                Cooling-water data view
              </h3>
              <p className="mt-1 text-xs text-slate-700 leading-relaxed">
                Simple dashboards linking dosing history with TR, TTD, vacuum and other
                key indicators, tailored for each station or industrial plant.
              </p>
            </div>

            {/* Verification */}
            <div className="flex flex-col gap-3 rounded-lg border bg-white p-4 shadow-sm">
              <div className="relative h-24 w-full overflow-hidden rounded">
                <Image
                  src="/verification.webp"
                  alt="Verification framework"
                  fill
                  className="object-cover"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <h3 className="text-sm font-semibold text-slate-900">
                Verification framework
              </h3>
              <p className="mt-1 text-xs text-slate-700 leading-relaxed">
                Built on ASME PTC 12.2 methodology for stations, and adapted
                to industrial sites with clear baselines, interventions and reviews.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Example pilot structures */}
      <section className="border-b">
        <div className="mx-auto max-w-6xl px-4 py-12 lg:py-16">
          <h2 className="text-xl font-semibold text-slate-900">
            Example TES pilot structures
          </h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border bg-white p-6 shadow-sm">
              <h3 className="text-sm font-semibold text-slate-900">
                Eskom wet-cooled unit pilot
              </h3>
              <ul className="mt-3 space-y-2 text-xs text-slate-700 leading-relaxed">
                <li>• Select one unit and associated cooling-water circuits.</li>
                <li>• Define KPIs: TR, TTD, vacuum stability, key chemistry parameters.</li>
                <li>• Collect baseline data using RT&amp;D protocol structure.</li>
                <li>• Install TES dosing skid and start Mexel®432 treatment.</li>
                <li>• Monitor performance and compare to baseline.</li>
                <li>• Optional: WRC or other body as independent referee.</li>
              </ul>
            </div>
            <div className="rounded-lg border bg-white p-6 shadow-sm">
              <h3 className="text-sm font-semibold text-slate-900">
                Industrial cooling-water pilot
              </h3>
              <ul className="mt-3 space-y-2 text-xs text-slate-700 leading-relaxed">
                <li>• Identify the most critical cooling-water loop or exchanger bank.</li>
                <li>• Agree on metrics: heat-exchanger performance, downtime, cleaning frequency.</li>
                <li>• Establish a realistic baseline period.</li>
                <li>• Apply Mexel®432 via a TES dosing skid under controlled conditions.</li>
                <li>• Track performance, inspections and cleaning intervals.</li>
                <li>• Decide on extension based on observed technical benefits.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="mx-auto max-w-6xl px-4 py-10 lg:py-12">
          <div className="flex flex-col gap-4 rounded-lg border bg-white p-6 shadow-sm md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-sm font-semibold text-slate-900">
                Exploring TES for your station or plant.
              </h2>
              <p className="mt-2 text-xs text-slate-700 leading-relaxed">
                We usually start with a short technical discussion: your current cooling-water
                configuration, constraints and data. From there we can propose a TES pilot
                that is realistic for your site and aligned with your existing protocols.
              </p>
            </div>
            <div className="flex flex-col gap-2 text-xs">
              <Button asChild>
                <Link href="/contact">
                  Request a Pilot Study
                </Link>
              </Button>
              <Link
                href="/tes"
                className="inline-flex items-center justify-center font-semibold text-emerald-600 hover:text-emerald-800"
              >
                Revisit the TES system overview →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
