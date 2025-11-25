import Link from "next/link";

export default function TesPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="border-b bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-16 lg:py-24">
          <p className="text-xs font-semibold uppercase tracking-widest text-sky-700">
            Thermal Efficiency Solution (TES)
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
            TES: A cooling-water efficiency system,<br className="hidden lg:block" /> not a generic chemical.
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-gray-600">
            TES is our focused approach to improving condenser and
            cooling-water performance on wet-cooled units. It combines
            Mexel®432 chemistry, IoT-enabled dosing, a cooling-water
            performance view and a verification framework based on Eskom
            RT&amp;D&apos;s Tutuka protocol. TES does not claim to optimise
            the whole plant; it concentrates on the cold end, where fouling
            and corrosion quietly erode efficiency.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-md bg-sky-700 px-5 py-2.5 text-xs font-semibold text-white shadow-sm hover:bg-sky-800 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
            >
              Discuss a TES pilot
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center text-xs font-semibold text-sky-700 hover:text-sky-900"
            >
              Mexel®432 technical information →
            </Link>
          </div>
        </div>
      </section>

      {/* What TES is / is not */}
      <section className="border-b">
        <div className="mx-auto max-w-6xl px-4 py-14 lg:py-20">
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900">
            What TES is – and what it is not
          </h2>
          <div className="mt-6 grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-sm font-semibold text-gray-900">
                TES is…
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-gray-700">
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
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900">
                TES is not…
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-gray-700">
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
              <p className="mt-3 text-xs text-gray-500">
                Note: MexSteam 100 remains a separate, strategic boiler-side
                product. It is deliberately not included under TES&apos;s
                cooling-water verification claims.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Four building blocks */}
      <section className="border-b bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-14 lg:py-20">
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900">
            TES in four building blocks
          </h2>
          <p className="mt-3 max-w-3xl text-base text-gray-600">
            TES has four components that work together. Each one is simple on
            its own; the value is in the way they combine to give a clear
            picture of cooling-water performance.
          </p>

          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg border bg-white p-4 shadow-sm">
              <h3 className="text-sm font-semibold text-gray-900">
                1. Chemistry: Mexel®432
              </h3>
              <p className="mt-2 text-xs text-gray-700 leading-relaxed">
                A non-oxidant emulsion of long-chain alkyl amines. Forms a
                protective film on wetted surfaces, detaches existing biofilm,
                mud, ash and deposits, limits new deposition and provides
                corrosion inhibition. Replaces multiple separate chemicals
                (biocides, anti-scalants, dispersants and corrosion
                inhibitors) with a single, surface-active treatment.
              </p>
            </div>
            <div className="rounded-lg border bg-white p-4 shadow-sm">
              <h3 className="text-sm font-semibold text-gray-900">
                2. IoT dosing: Thingy:91X
              </h3>
              <p className="mt-2 text-xs text-gray-700 leading-relaxed">
                IoT-enabled dosing skids with level sensing, event logging and
                remote configuration based on Nordic&apos;s Thingy:91X
                platform. Creates a traceable dosing record – what was dosed,
                when, for how long – that can be correlated with condenser
                performance data.
              </p>
            </div>
            <div className="rounded-lg border bg-white p-4 shadow-sm">
              <h3 className="text-sm font-semibold text-gray-900">
                3. Data: cooling-water view
              </h3>
              <p className="mt-2 text-xs text-gray-700 leading-relaxed">
                A simple cooling-water performance view that links dosing
                history with metrics such as cooling-water temperature rise
                (TR), terminal temperature difference (TTD), condenser vacuum
                stability and, where available, coal use per net MWh. The aim
                is to make condenser fouling visible as a managed variable,
                not a hidden loss.
              </p>
            </div>
            <div className="rounded-lg border bg-white p-4 shadow-sm">
              <h3 className="text-sm font-semibold text-gray-900">
                4. Verification: RT&amp;D protocol
              </h3>
              <p className="mt-2 text-xs text-gray-700 leading-relaxed">
                Verification follows the baseline → intervention →
                post-intervention structure defined in Eskom RT&amp;D&apos;s
                Tutuka Surfactant (FFA) Testing Protocol Rev08. Independent
                bodies such as the Water Research Commission (WRC) can act as
                referees, and separate carbon-verification bodies (e.g.
                Brundtland) can be engaged where emissions intensity is in
                scope.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Evidence & Eskom context */}
      <section className="border-b">
        <div className="mx-auto max-w-6xl px-4 py-14 lg:py-20">
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900">
            Evidence and Eskom context
          </h2>
          <div className="mt-6 grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="text-sm font-semibold text-gray-900">
                RT&amp;D and Kriel experience
              </h3>
              <p className="mt-2 text-xs text-gray-700 leading-relaxed">
                Mexel®432 has already been examined through Eskom RT&amp;D&apos;s
                process, including application at Kriel where station data
                showed improved condenser performance during treatment. The
                Tutuka Testing Protocol Rev08 provides a clear framework for
                baseline and intervention assessment.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900">
                Tutuka readiness and delays
              </h3>
              <p className="mt-2 text-xs text-gray-700 leading-relaxed">
                At Tutuka, the TES dosing system has been installed and the
                RT&amp;D protocol issued. Project progress has been constrained
                by on-the-ground conditions such as dam status, water
                configuration and induction scheduling, rather than by any
                limitation of the chemistry or hardware.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900">
                International references
              </h3>
              <p className="mt-2 text-xs text-gray-700 leading-relaxed">
                Internationally, Mexel®432 has been used in thermal and
                nuclear power plants, petrochemical sites and industrial
                cooling systems. The common thread is improved condenser
                cleanliness, reduced corrosion and a measurable contribution
                to overall heat-rate improvement where the cooling system was
                a known bottleneck.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TES for Eskom vs Industry */}
      <section className="border-b bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-14 lg:py-20">
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900">
            Where TES fits: Eskom and industry
          </h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border bg-white p-6 shadow-sm">
              <h3 className="text-sm font-semibold text-gray-900">
                Wet-cooled Eskom stations
              </h3>
              <p className="mt-2 text-xs text-gray-700 leading-relaxed">
                TES is suited to wet-cooled stations where the condenser and
                cooling-water system are significant contributors to
                efficiency loss. Typical targets include units at Tutuka,
                Matla, Kriel, Kendal and other wet-cooled plants where water
                quality, biofouling and scaling have historically been
                difficult to manage with multi-chemical programs.
              </p>
              <p className="mt-2 text-xs text-gray-700 leading-relaxed">
                The goal is not to replace existing chemistry overnight, but
                to run a structured pilot on one or more units and let the
                data speak.
              </p>
            </div>
            <div className="rounded-lg border bg-white p-6 shadow-sm">
              <h3 className="text-sm font-semibold text-gray-900">
                Industrial cooling-water users
              </h3>
              <p className="mt-2 text-xs text-gray-700 leading-relaxed">
                Mines, refineries, steel plants, breweries, laundries and
                large commercial users also operate critical cooling-water
                systems. They face similar challenges: variable raw-water
                quality, corrosion, scaling, fouling and unplanned outages.
              </p>
              <p className="mt-2 text-xs text-gray-700 leading-relaxed">
                TES applies the same principles – Mexel®432 chemistry, smart
                dosing and data – to improve reliability, reduce cleaning
                interventions and extend equipment life in these environments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How a pilot works */}
      <section>
        <div className="mx-auto max-w-6xl px-4 py-14 lg:py-20">
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900">
            How a TES pilot works in practice
          </h2>
          <div className="mt-4 grid gap-6 md:grid-cols-3">
            <div>
              <h3 className="text-sm font-semibold text-gray-900">
                1. Scoping and baseline
              </h3>
              <p className="mt-2 text-xs text-gray-700 leading-relaxed">
                Agree on the unit(s), circuits and KPIs. Confirm how TR, TTD,
                condenser vacuum and water quality are currently measured.
                Collect a baseline dataset over an agreed period using the
                RT&amp;D protocol structure.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900">
                2. Dosing and monitoring
              </h3>
              <p className="mt-2 text-xs text-gray-700 leading-relaxed">
                Install the TES dosing skid, configure Mexel®432 treatment and
                begin dosing. Monitor cooling-water and condenser performance
                against the baseline. Adjust within agreed bounds to manage
                water chemistry and plant constraints.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900">
                3. Review and decision
              </h3>
              <p className="mt-2 text-xs text-gray-700 leading-relaxed">
                Compare intervention results with the baseline, using the same
                KPIs and the RT&amp;D protocol. If an independent referee is
                involved, provide them with complete data. On that basis,
                decide whether to extend TES to more units or stations.
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3 text-sm">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-md bg-sky-700 px-5 py-2.5 text-xs font-semibold text-white shadow-sm hover:bg-sky-800 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
            >
              Start a TES pilot discussion
            </Link>
            <Link
              href="/applications"
              className="inline-flex items-center text-xs font-semibold text-sky-700 hover:text-sky-900"
            >
              See typical TES applications →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
