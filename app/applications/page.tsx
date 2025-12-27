import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import SystemHeader from "../../components/SystemHeader";

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
    <main id="main-content" className="min-h-screen bg-white">
      <SystemHeader
        tag="TES APPLICATIONS"
        title="Application pathways for TES pilots."
        description="TES pilots follow baseline → intervention → review using condenser indicators (TR, TTD, vacuum) with traceable dosing records."
        continuity="This is how the TES system is applied in practice."
        currentLabel="Pilots"
        activeSteps={[2, 3]}
      />

      {/* Two main tracks: Eskom vs Industry */}
      <section className="border-b">
        <div className="mx-auto max-w-6xl px-4 py-12 lg:py-16">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Eskom wet-cooled applications */}
            <div className="flex flex-col gap-4">
              {/* Power station image */}
              <div className="relative h-32 w-full overflow-hidden rounded-lg">
                <Image
                  src="/cooling-tower.webp"
                  alt="Wet-cooled power station cooling tower"
                  fill
                  className="object-cover"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              <div>
                <h2 className="text-xl font-semibold text-slate-900">
                  TES for Eskom wet-cooled coal stations
                </h2>
                <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                  At wet-cooled stations, TES focuses on the condenser and cooling-water
                  system as a distinct performance node. It is suited to units at stations
                  such as Tutuka, Matla, Kriel, Kendal and similar plants where raw-water
                  quality, biofouling, scaling and corrosion have historically been
                  difficult to manage with multi-chemical programs.
                </p>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  <li>• Units with persistent condenser fouling and unstable TR / TTD.</li>
                  <li>• Stations using dam, river or mine water with variable quality.</li>
                  <li>• Sites where the cooling-water system is the dominant raw-water user.</li>
                  <li>• Stations that already track performance but lack a clear “cooling-water KPI”.</li>
                </ul>
              </div>
            </div>

            {/* Industrial applications */}
            <div className="flex flex-col gap-4">
              {/* Industrial plant image */}
              <div className="relative h-32 w-full overflow-hidden rounded-lg">
                <Image
                  src="/industrial-plant.webp"
                  alt="Industrial cooling water system"
                  fill
                  className="object-cover"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              <div>
                <h2 className="text-xl font-semibold text-slate-900">
                  TES for industrial cooling-water users
                </h2>
                <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                  Outside the utility sector, many industrial plants operate cooling-water
                  systems that are just as critical as a condenser in a power station.
                  TES principles – Mexel®432 chemistry, smart dosing and targeted data –
                  translate directly into these environments.
                </p>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  <li>• Mines and concentrators with large open cooling circuits.</li>
                  <li>• Refineries, petrochemical and steel plants.</li>
                  <li>• Breweries, food &amp; beverage and laundries with constant cooling duty.</li>
                  <li>• Sites dealing with high-solids or blended mine / process waters.</li>
                </ul>
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
                Built on Eskom RT&amp;D’s Tutuka protocol for stations, and adapted
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
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-emerald-600 px-5 py-2.5 font-semibold text-white shadow-sm hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:ring-offset-2"
              >
                Request a Pilot Study
              </Link>
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
