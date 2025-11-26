import Link from "next/link";
import Image from "next/image";
import CoolingSchematic from "../../components/CoolingSchematic";
import FadeIn from "../../components/FadeIn";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "TES and Mexel®432 applications across industries: wet-cooled power stations, mining, refineries, petrochemical, food & beverage, and commercial cooling-water systems.",
  openGraph: {
    title: "Industries Served | Mexel Energy Sustain",
    description:
      "Cooling-water efficiency for power generation, mining, refineries and industrial plants.",
  },
};

export default function IndustriesPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="border-b bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-16 lg:py-24">
          <p className="text-xs font-semibold uppercase tracking-widest text-sky-700">
            Industries
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
            Where TES and Mexel chemistry are applied.
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-gray-600">
            TES and Mexel®432 are designed for cooling-water systems wherever
            energy, reliability and water use matter. The same principles apply
            across wet-cooled power stations, mines, refineries, process plants,
            breweries, laundries and other large industrial users.
          </p>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-gray-700">
            This page summarises the main sectors we work in and the types of
            cooling-water problems TES is built to address.
          </p>
          <div className="mt-6 flex flex-wrap gap-2 text-xs sm:text-[11px]">
            <span className="rounded-full bg-sky-100 px-3 py-1.5 font-semibold text-sky-800 sm:py-1">
              Wet-cooled coal stations
            </span>
            <span className="rounded-full bg-emerald-50 px-3 py-1.5 font-semibold text-emerald-800 sm:py-1">
              Mining & minerals processing
            </span>
            <span className="rounded-full bg-amber-50 px-3 py-1.5 font-semibold text-amber-800 sm:py-1">
              Refineries & petrochemical
            </span>
            <span className="rounded-full bg-violet-50 px-3 py-1.5 font-semibold text-violet-800 sm:py-1">
              Food & beverage, laundries
            </span>
            <span className="rounded-full bg-green-50 px-3 py-1.5 font-semibold text-green-800 sm:py-1">
              Agriculture & irrigation
            </span>
          </div>
        </div>
      </section>

      {/* Power & energy */}
      <section id="power" className="border-b">
        <div className="mx-auto max-w-6xl px-4 py-14 lg:py-20">
          <div className="grid gap-8 md:grid-cols-2">
            <FadeIn>
              <div className="flex flex-col gap-4">
              {/* Cooling-water system schematic */}
              <CoolingSchematic />

              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-gray-900">
                  Wet-cooled coal units (power generation)
                </h2>
                <p className="mt-3 text-base text-gray-600 leading-relaxed">
                  TES is primarily designed for wet-cooled coal-fired units where
                  the condenser and cooling-water system are a significant source
                  of efficiency loss. These are typically large stations using
                  river, dam or mine water, with complex chemistry and high raw-water
                  demand.
                </p>
                <ul className="mt-3 space-y-2 text-sm text-gray-700">
                  <li>• Biofouling and sludge at condenser tube inlets.</li>
                  <li>• Scaling and corrosion on heat-transfer surfaces.</li>
                  <li>• Variable make-up water (dam, mine water, blends).</li>
                  <li>• Multi-chemical regimes with unclear net impact.</li>
                  <li>• TR / TTD instability linked to cold-end fouling.</li>
                </ul>
                <p className="mt-3 text-xs text-gray-700 leading-relaxed">
                  TES combines Mexel®432, IoT dosing and a cooling-water performance
                  view to restore and maintain condenser cleanliness on these units.
                </p>
              </div>
              </div>
            </FadeIn>

            <FadeIn delay={150}>
              <div className="flex flex-col gap-4">
              {/* Condenser image */}
              <div className="relative h-32 w-full overflow-hidden rounded-lg">
                <Image
                  src="/condenser.png"
                  alt="Industrial condenser system"
                  fill
                  className="object-cover"
                />
              </div>

              <div>
                <h3 className="text-sm font-semibold text-gray-900">
                  Typical use cases in power generation
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-gray-700">
                  <li>• Units with recurring condenser cleaning or tube issues.</li>
                  <li>• Stations where dam or mine-water quality has deteriorated.</li>
                  <li>• Sites planning life-extension but still running on old cooling assets.</li>
                  <li>• Stations seeking structured, RT&amp;D-aligned trials instead of ad-hoc dosing.</li>
                </ul>
                <p className="mt-3 text-xs text-gray-700 leading-relaxed">
                  Our goal in this sector is simple: help stabilise condenser performance
                  and reduce cold-end losses in a way that station teams can see and verify.
                </p>
              </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Mining & minerals processing */}
      <section id="mining" className="border-b bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-14 lg:py-20">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="flex flex-col gap-4">
              {/* Mining plant image */}
              <div className="relative h-32 w-full overflow-hidden rounded-lg">
                <Image
                  src="/mining-plant.png"
                  alt="Mining and minerals processing plant"
                  fill
                  className="object-cover"
                />
              </div>

              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-gray-900">
                  Mining and minerals processing
                </h2>
                <p className="mt-3 text-base text-gray-600 leading-relaxed">
                  Mines and concentrators often run large open cooling circuits,
                  with water quality influenced by process streams, tailings and
                  recycled mine water. Fouling, corrosion and solids build-up are
                  common, and interventions are normally reactive.
                </p>
                <ul className="mt-3 space-y-2 text-sm text-gray-700">
                  <li>• High solids loading (ash, tailings, fines).</li>
                  <li>• Variable chemistry and temperature.</li>
                  <li>• Exchangers and towers that foul faster than planned.</li>
                  <li>• Interactions between process water and cooling water.</li>
                </ul>
                <p className="mt-3 text-xs text-gray-700 leading-relaxed">
                  Mexel®432&apos;s film-forming and dispersant properties are used to keep
                  surfaces cleaner and solids mobile, improving cooling performance
                  and reducing unscheduled cleaning.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-sm font-semibold text-gray-900">
                Benefits in mining environments
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-gray-700">
                <li>• Cleaner heat exchangers and cooling-tower internals.</li>
                <li>• Reduced downtime for mechanical cleaning or acid-washing.</li>
                <li>• Better separation and clarification behaviour in some circuits.</li>
                <li>• More stable cooling performance under variable loads.</li>
              </ul>
              <p className="mt-3 text-xs text-gray-700 leading-relaxed">
                TES can be applied to critical cooling loops at mines in the same
                structured way as at power stations: defined baselines, clear
                intervention periods and measurable outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Petrochemical, refineries, metals */}
      <section id="refineries" className="border-b">
        <div className="mx-auto max-w-6xl px-4 py-14 lg:py-20">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="flex flex-col gap-4">
              {/* Refinery image */}
              <div className="relative h-32 w-full overflow-hidden rounded-lg">
                <Image
                  src="/refinery.png"
                  alt="Refinery and petrochemical plant"
                  fill
                  className="object-cover"
                />
              </div>

              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-gray-900">
                  Refineries, petrochemical and metals
                </h2>
                <p className="mt-3 text-base text-gray-600 leading-relaxed">
                  Refineries, petrochemical plants and steel mills run networks of
                  critical heat exchangers and cooling-water loops. Fouling or
                  corrosion here quickly becomes a production and safety issue, not
                  just an efficiency problem.
                </p>
                <ul className="mt-3 space-y-2 text-sm text-gray-700">
                  <li>• Exchanger fouling that drives higher energy spend or throughput limits.</li>
                  <li>• Corrosion risk on carbon steel and mixed-metallurgy systems.</li>
                  <li>• Biofouling in cooling towers and distribution headers.</li>
                  <li>• Tight operating windows on temperature and reliability.</li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-sm font-semibold text-gray-900">
                How Mexel®432 and TES help
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                In these environments, Mexel®432 is used to improve surface cleanliness
                and corrosion protection in the cooling-water system, while TES
                provides a structured way to link those interventions to performance
                data. Our focus remains on cooling-water, not on process-side chemistry.
              </p>
              <p className="mt-3 text-xs text-gray-700 leading-relaxed">
                Where required, we work with site engineering and existing water-treatment
                partners to integrate Mexel®432 into established programs without
                disrupting critical production.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Food & beverage, laundries, commercial */}
      <section id="food-beverage" className="border-b bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-14 lg:py-20">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="flex flex-col gap-4">
              {/* Food & beverage image */}
              <div className="relative h-32 w-full overflow-hidden rounded-lg">
                <Image
                  src="/food-beverage.png"
                  alt="Food and beverage processing facility"
                  fill
                  className="object-cover"
                />
              </div>

              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-gray-900">
                  Food &amp; beverage, breweries and laundries
                </h2>
                <p className="mt-3 text-base text-gray-600 leading-relaxed">
                  These operations run almost continuously and depend on stable cooling
                  for process, refrigeration and HVAC. Fouling and biofilm drive up
                  energy usage and risk unplanned downtime.
                </p>
                <ul className="mt-3 space-y-2 text-sm text-gray-700">
                  <li>• Chillers and condensers losing performance over time.</li>
                  <li>• Cooling towers with biological growth and scale.</li>
                  <li>• High energy consumption for refrigeration or hot-water systems.</li>
                  <li>• Tight quality and reliability requirements.</li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-sm font-semibold text-gray-900">
                Cooling-water focus in these sectors
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                In these plants, Mexel®432 is applied to cooling towers, condensers
                and critical cooling loops to keep surfaces cleaner and control
                biofouling and corrosion. TES concepts can be scaled down to fit the
                size and data-availability of each site, while keeping the same
                discipline around baselines and measurable impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Agriculture & irrigation */}
      <section id="agriculture" className="border-b">
        <div className="mx-auto max-w-6xl px-4 py-14 lg:py-20">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="flex flex-col gap-4">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-gray-900">
                  Agriculture and irrigation
                </h2>
                <p className="mt-3 text-base text-gray-600 leading-relaxed">
                  Large-scale farming operations, greenhouses, aquaculture and 
                  irrigation networks rely on cooling-water systems for climate 
                  control, refrigeration and process water. Biofilm, scaling and 
                  corrosion in cooling loops, evaporative coolers and irrigation 
                  lines reduce efficiency and increase maintenance.
                </p>
                <ul className="mt-3 space-y-2 text-sm text-gray-700">
                  <li>• Cooling systems for cold storage and packhouses.</li>
                  <li>• Evaporative coolers in greenhouses and livestock facilities.</li>
                  <li>• Irrigation system fouling from biological growth and particulates.</li>
                  <li>• Water quality variability in rural or dam-fed systems.</li>
                  <li>• Corrosion in galvanized and mixed-metal irrigation infrastructure.</li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-sm font-semibold text-gray-900">
                How TES applies in agriculture
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Mexel®432&apos;s film-forming and dispersant properties help keep 
                heat exchangers, cooling towers and irrigation lines cleaner, 
                reducing biofilm build-up and scaling. In cooling-water circuits, 
                this translates to lower energy use for refrigeration and more 
                stable operating temperatures.
              </p>
              <p className="mt-3 text-xs text-gray-700 leading-relaxed">
                For irrigation systems, improved water flow and reduced fouling 
                can extend maintenance intervals and improve uniformity. TES 
                monitoring concepts can be adapted to smaller agricultural 
                operations where cooling-water performance directly impacts 
                product quality and energy costs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Boiler-side note */}
      <section className="border-b">
        <div className="mx-auto max-w-6xl px-4 py-14 lg:py-20">
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900">
            Boiler and steam-side (MexSteam 100)
          </h2>
          <div className="mt-4 grid gap-8 md:grid-cols-2">
            <div>
              <p className="text-sm text-gray-700 leading-relaxed">
                In some of these industries, boiler and steam systems also present
                corrosion and efficiency challenges. MexSteam 100 is our separate
                film-forming amine solution for steam-side protection. It is
                considered a strategic product and discussed on a case-by-case basis.
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-700 leading-relaxed">
                Importantly, MexSteam 100 is{" "}
                <span className="font-semibold">
                  not included in TES&apos;s current verification boundary
                </span>
                . TES is defined around Mexel®432 in cooling-water service. Any
                efficiency claims for boiler-side chemistry would require their own
                methodology and test plan, aligned with each site&apos;s standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="mx-auto max-w-6xl px-4 py-14 lg:py-20">
          <div className="flex flex-col gap-4 rounded-lg border bg-white p-6 shadow-sm md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-sm font-semibold text-gray-900">
                Not sure if TES fits your industry?
              </h2>
              <p className="mt-2 text-xs text-gray-700 leading-relaxed">
                The quickest way to find out is a short technical discussion about
                your cooling-water system, constraints and data. From there we can
                say clearly whether TES and Mexel®432 make sense, or whether a
                different approach is better.
              </p>
            </div>
            <div className="flex flex-col gap-2 text-xs">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-sky-700 px-5 py-2.5 font-semibold text-white shadow-sm hover:bg-sky-800 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
              >
                Contact Mexel Energy Sustain
              </Link>
              <Link
                href="/applications"
                className="inline-flex items-center justify-center font-semibold text-sky-700 hover:text-sky-900"
              >
                View TES application examples →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
