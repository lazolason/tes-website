import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "TES System Overview",
  description:
    "Detailed overview of the Thermal Efficiency Solution (TES): Mexel®432 chemistry, IoT-enabled dosing, cooling-water performance data and the RT&D verification framework for wet-cooled units.",
  openGraph: {
    title: "TES System Overview | Mexel Energy Sustain",
    description:
      "How TES works: chemistry, dosing, data and verification for cooling-water efficiency.",
  },
};

export default function TesPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="border-b bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-16 lg:py-24">
          <p className="text-xs font-semibold uppercase tracking-widest text-sky-700">
            TES System
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
            Thermal Efficiency Solution (TES)
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-gray-600">
            TES is Mexel Energy Sustain&apos;s focused approach to improving
            cooling-water and condenser performance on wet-cooled units. It
            combines Mexel®432 chemistry, IoT-enabled dosing, cooling-water data
            and a clear verification framework to reduce cold-end losses,
            stabilise operation and extend asset life.
          </p>
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-gray-600">
            TES does not claim to optimise the whole plant — it concentrates on
            the cold end, where fouling, biofilm and corrosion quietly erode
            efficiency.
          </p>
        </div>
      </section>

      {/* Chemistry */}
      <section className="border-b">
        <div className="mx-auto max-w-6xl px-4 py-14 lg:py-20">
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900">
            Chemistry: Mexel®432 in cooling-water service
          </h2>
          <div className="mt-5 grid gap-8 md:grid-cols-2">
            <div>
              <p className="text-base text-gray-600 leading-relaxed">
                Mexel®432 is a film-forming amine emulsion with a specialised
                surfactant system. It forms a protective molecular layer on wetted
                surfaces, detaches existing biofilm and sludge, limits new deposits
                and provides corrosion inhibition.
              </p>
              <p className="mt-3 text-base text-gray-600 leading-relaxed">
                In cooling-water systems this means cleaner condenser tube inlets,
                less scaling and corrosion, and more stable heat transfer — without
                relying on aggressive oxidising biocides.
              </p>
            </div>
            <div className="rounded-lg border bg-gray-50 p-5">
              <h3 className="text-sm font-semibold text-gray-900">
                What Mexel®432 replaces or reduces
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-gray-700">
                <li>• Traditional biocides (oxidising and non-oxidising)</li>
                <li>• Anti-scalants and scale inhibitors</li>
                <li>• Dispersants and sludge conditioners</li>
                <li>• Corrosion inhibitors</li>
              </ul>
              <p className="mt-3 text-xs text-gray-500">
                A single, surface-active treatment focused on the cold end.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* IoT & Data */}
      <section className="border-b bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-14 lg:py-20">
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900">
            IoT dosing and cooling-water data
          </h2>
          <div className="mt-5 grid gap-8 md:grid-cols-2">
            <div>
              <p className="text-base text-gray-600 leading-relaxed">
                TES uses IoT-enabled dosing skids (based on the Nordic Thingy:91X
                platform) to create a traceable record of what was dosed, where and
                when. Level sensing and event logging mean dosing history is no
                longer guesswork.
              </p>
              <p className="mt-3 text-base text-gray-600 leading-relaxed">
                This dosing record is then linked to cooling-water and condenser
                metrics — such as TR, TTD and vacuum stability — to build a simple
                performance view.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900">
                The goal
              </h3>
              <p className="mt-2 text-base text-gray-600 leading-relaxed">
                Make condenser fouling a visible, managed variable — not a hidden
                loss buried in the heat-rate. Station teams can see the correlation
                between dosing and performance, and adjust with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Verification */}
      <section className="border-b">
        <div className="mx-auto max-w-6xl px-4 py-14 lg:py-20">
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900">
            Verification and future carbon-credit potential
          </h2>
          <div className="mt-5 grid gap-8 md:grid-cols-2">
            <div>
              <p className="text-base text-gray-600 leading-relaxed">
                Verification follows the baseline → intervention → post-intervention
                structure in Eskom RT&amp;D&apos;s Tutuka Surfactant (FFA) Testing
                Protocol Rev08. The same logic can be adapted for other stations or
                industrial plants.
              </p>
              <p className="mt-3 text-base text-gray-600 leading-relaxed">
                An independent referee such as the Water Research Commission (WRC)
                can review the methodology and results where required.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900">
                Carbon-credit potential
              </h3>
              <p className="mt-2 text-base text-gray-600 leading-relaxed">
                Once cooling-water improvements are measured and repeatable, they can
                support future work on emissions-intensity and carbon-credit
                methodologies (e.g. through bodies such as Brundtland).
              </p>
              <p className="mt-3 text-sm text-gray-500">
                TES is presented first as a technical efficiency solution, not a
                carbon-trading scheme.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reference frameworks & governance */}
      <section className="border-b bg-sky-50">
        <div className="mx-auto max-w-6xl px-4 py-14 lg:py-20">
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900">
            Reference frameworks and governance
          </h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <div className="rounded-lg border border-sky-100 bg-white p-5 shadow-sm">
              <h3 className="text-sm font-semibold text-gray-900">
                Eskom RT&amp;D alignment
              </h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                TES uses the baseline → intervention → post-intervention structure
                defined in Eskom RT&amp;D&apos;s Tutuka Surfactant (FFA) Testing
                Protocol Rev08. This gives station teams, RT&amp;D and governance
                bodies a shared, documented way to assess performance.
              </p>
            </div>
            <div className="rounded-lg border border-sky-100 bg-white p-5 shadow-sm">
              <h3 className="text-sm font-semibold text-gray-900">
                Independent technical review
              </h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                Independent organisations such as the Water Research Commission (WRC)
                can act as referees for TES pilots where needed. Their role is to
                verify that the agreed protocol and data handling have been followed,
                not to market the solution.
              </p>
            </div>
            <div className="rounded-lg border border-sky-100 bg-white p-5 shadow-sm">
              <h3 className="text-sm font-semibold text-gray-900">
                International Mexel track record
              </h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                Mexel®432 has been used at thermal and nuclear plants, refineries and
                industrial cooling systems internationally. TES leverages that history
                but is tailored to South African station and industrial conditions,
                with a clear efficiency and governance focus.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How a pilot works */}
      <section className="border-b">
        <div className="mx-auto max-w-6xl px-4 py-14 lg:py-20">
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900">
            How a TES pilot works
          </h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <div className="rounded-lg border bg-gray-50 p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-sky-700">
                Step 1
              </p>
              <h3 className="mt-2 text-sm font-semibold text-gray-900">
                Scoping and baseline
              </h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                Agree on the unit(s), circuits and KPIs. Confirm how TR, TTD,
                condenser vacuum and water quality are currently measured. Collect a
                baseline dataset over an agreed period.
              </p>
            </div>
            <div className="rounded-lg border bg-gray-50 p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-sky-700">
                Step 2
              </p>
              <h3 className="mt-2 text-sm font-semibold text-gray-900">
                Dosing and monitoring
              </h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                Install the TES dosing skid, configure Mexel®432 treatment and begin
                dosing. Monitor cooling-water and condenser performance against the
                baseline.
              </p>
            </div>
            <div className="rounded-lg border bg-gray-50 p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-sky-700">
                Step 3
              </p>
              <h3 className="mt-2 text-sm font-semibold text-gray-900">
                Review and decision
              </h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                Compare intervention results with the baseline, using the same KPIs
                and the RT&amp;D protocol. Decide whether to extend TES to more units
                or stations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="mx-auto max-w-6xl px-4 py-14 lg:py-20">
          <div className="flex flex-col gap-4 rounded-lg border bg-gray-50 p-6 shadow-sm md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-lg font-semibold text-gray-900">
                Ready to discuss a TES pilot?
              </h2>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                A short technical discussion is usually enough to see if TES fits
                your station or plant. We&apos;ll scope the pilot, agree on KPIs and
                get started.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-sky-700 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-800 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
              >
                Contact Mexel Energy Sustain
              </Link>
              <Link
                href="/applications"
                className="inline-flex items-center justify-center text-sm font-semibold text-sky-700 hover:text-sky-900"
              >
                View application examples →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
