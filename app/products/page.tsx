import Link from "next/link";
import Image from "next/image";
import FadeIn from "../../components/FadeIn";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products – Mexel®432 & MexSteam 100",
  description:
    "Mexel®432 for cooling-water treatment: film-forming amine chemistry that controls biofouling, corrosion and scaling. MexSteam 100 for boiler and steam-side protection.",
  openGraph: {
    title: "Mexel®432 & MexSteam 100 | Mexel Energy Sustain",
    description:
      "Film-forming amine chemistry for cooling-water and steam systems.",
  },
};

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="border-b bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-12 lg:py-16">
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-500">
            Products
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Mexel chemistry for cooling-water and steam systems.
          </h1>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-gray-700">
            Mexel Energy Sustain supplies proven film-forming amine/surfactant
            technologies for industrial water systems. TES is built around{" "}
            <span className="font-semibold">Mexel®432</span> in cooling-water
            service, with <span className="font-semibold">MexSteam 100</span>{" "}
            retained as a separate, boiler-side strategic product.
          </p>
        </div>
      </section>

      {/* Mexel 432 – primary TES product */}
      <section className="border-b">
        <div className="mx-auto max-w-6xl px-4 py-12 lg:py-16">
          {/* Product image */}
          <div className="relative mb-8 h-48 w-full overflow-hidden rounded-xl lg:h-64">
            <Image
              src="/dosing-skid.png"
              alt="TES dosing system for Mexel®432"
              fill
              className="object-cover"
            />
          </div>

          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <FadeIn>
              <div className="max-w-xl">
              <h2 className="text-xl font-semibold text-gray-900">
                Mexel®432 – Cooling-water film-forming amine/surfactant
              </h2>
              <p className="mt-3 text-sm text-gray-700 leading-relaxed">
                Mexel®432 is a non-oxidant, film-forming amine emulsion
                containing a specialised surfactant system. It is designed for
                once-through and recirculating cooling-water systems using river,
                dam, mine or seawater. In TES, Mexel®432 is the core chemistry
                used to restore and maintain condenser and cooling-water
                performance.
              </p>
              <p className="mt-3 text-sm text-gray-700 leading-relaxed">
                Applied correctly, Mexel®432 reduces fouling and corrosion at the
                cold end, helping stations burn less coal or fuel per net MWh,
                reduce emissions intensity and extend asset life.
              </p>

              <div className="mt-5 flex flex-wrap gap-3 text-xs">
                <span className="rounded-full bg-brand-100 px-3 py-1 font-semibold text-brand-800">
                  Cooling-water TES core product
                </span>
                <span className="rounded-full bg-emerald-50 px-3 py-1 font-semibold text-emerald-800">
                  Film-forming amine (FFA)
                </span>
                <span className="rounded-full bg-violet-50 px-3 py-1 font-semibold text-violet-800">
                  Multi-function chemistry
                </span>
              </div>
              </div>
            </FadeIn>

            <FadeIn delay={150}>
              <div className="max-w-md rounded-lg border bg-white p-5 shadow-sm">
              <h3 className="text-sm font-semibold text-gray-900">
                Key functions in cooling-water systems
              </h3>
              <ul className="mt-3 space-y-2 text-xs text-gray-700 leading-relaxed">
                <li>
                  • <span className="font-semibold">Surfactant / film-forming layer:</span>{" "}
                  creates a protective molecular film on metal and other wetted
                  surfaces, modifying surface energy and making it harder for
                  deposits and organisms to attach.
                </li>
                <li>
                  • <span className="font-semibold">Biofouling / biocide effect:</span>{" "}
                  detaches and controls biofilm, algae and other organic deposits,
                  reducing biological fouling pressure in condenser tubes and
                  cooling circuits.
                </li>
                <li>
                  • <span className="font-semibold">Corrosion inhibitor:</span>{" "}
                  reduces corrosion on carbon steel and other materials by
                  forming a barrier between the metal surface and the water
                  phase.
                </li>
                <li>
                  • <span className="font-semibold">Ash / mud / sludge dispersant:</span>{" "}
                  helps lift and disperse fine solids (ash, mud, silt) that
                  accumulate at tube inlets and low-velocity areas, improving
                  effective cross-section and heat transfer.
                </li>
                <li>
                  • <span className="font-semibold">Scaling control:</span>{" "}
                  interferes with scale formation on heat-transfer surfaces,
                  complementing or replacing traditional anti-scalants depending
                  on the system design.
                </li>
                <li>
                  • <span className="font-semibold">Separation support in process water:</span>{" "}
                  by modifying surface interactions, Mexel®432 can assist in
                  keeping solids dispersed and improving clarification and
                  separation behaviour in certain mining and industrial circuits.
                </li>
              </ul>
              </div>
            </FadeIn>
          </div>

          {/* Role in TES */}
          <div className="mt-10 grid gap-6 md:grid-cols-3">\
            <div className="rounded-lg border bg-gray-50 p-5">
              <h3 className="text-sm font-semibold text-gray-900">
                Role within TES
              </h3>
              <p className="mt-2 text-xs text-gray-700 leading-relaxed">
                Within TES, Mexel®432 is the primary intervention at the cold
                end. The IoT dosing, data view and verification framework are
                built specifically to understand and demonstrate what Mexel®432
                is doing for condenser cleanliness and cooling-water performance.
              </p>
            </div>
            <div className="rounded-lg border bg-gray-50 p-5">
              <h3 className="text-sm font-semibold text-gray-900">
                Verification boundary
              </h3>
              <p className="mt-2 text-xs text-gray-700 leading-relaxed">
                TES verification is explicitly defined around Mexel®432 in
                cooling-water service, using Eskom RT&amp;D&apos;s baseline →
                intervention → post-intervention protocol. Other products are
                not included in TES efficiency claims unless a separate,
                station-approved methodology is developed.
              </p>
            </div>
            <div className="rounded-lg border bg-gray-50 p-5">
              <h3 className="text-sm font-semibold text-gray-900">
                Typical applications
              </h3>
              <p className="mt-2 text-xs text-gray-700 leading-relaxed">
                • Wet-cooled coal-fired units (condenser and cooling-tower
                circuits){" "}
                <br />
                • Once-through and recirculating cooling systems at industrial
                sites (mines, refineries, steel, pulp &amp; paper, breweries,
                laundries){" "}
                <br />
                • Seawater, river, dam and blended mine-water systems where
                fouling, corrosion and scaling are persistent issues.
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3 text-sm">
            <Link
              href="/tes"
              className="inline-flex items-center text-xs font-semibold text-brand-500 hover:text-brand-900"
            >
              See how Mexel®432 fits into TES →
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center text-xs font-semibold text-brand-500 hover:text-brand-900"
            >
              Request Mexel®432 technical data sheets →
            </Link>
          </div>
        </div>
      </section>

      {/* MexSteam 100 – separate, boiler-side strategic product */}
      <section className="border-b bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-12 lg:py-16">
          <div className="max-w-3xl">
            <h2 className="text-xl font-semibold text-gray-900">
              MexSteam 100 – Boiler-side strategic product
            </h2>
            <p className="mt-3 text-sm text-gray-700 leading-relaxed">
              MexSteam 100 is a boiler-treatment product for steam-side
              protection and efficiency. It is a film-forming amine-based
              solution designed to protect condensate and steam circuits from
              corrosion and deposition in specific boiler applications.
            </p>
            <p className="mt-3 text-sm text-gray-700 leading-relaxed">
              We regard MexSteam 100 as a strategic product that complements
              TES at the plant level, but it is deliberately kept outside the
              current TES verification boundary. Any efficiency or fuel-related
              claims for MexSteam 100 would need their own test plan and
              station-approved methodology.
            </p>

            <div className="mt-5 flex flex-wrap gap-3 text-xs">
              <span className="rounded-full bg-amber-50 px-3 py-1 font-semibold text-amber-800">
                Boiler / steam-side
              </span>
              <span className="rounded-full bg-gray-100 px-3 py-1 font-semibold text-gray-800">
                Strategic product (not in TES verification)
              </span>
            </div>

            <p className="mt-5 text-xs text-gray-600 leading-relaxed">
              For now, TES communications and verification remain focused on
              Mexel®432 in cooling-water service. MexSteam 100 is available as
              a separate discussion for customers with suitable boiler and
              condensate systems.
            </p>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section>
        <div className="mx-auto max-w-6xl px-4 py-10 lg:py-12">
          <div className="flex flex-col gap-4 rounded-lg border bg-white p-6 shadow-sm md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-sm font-semibold text-gray-900">
                Need to understand how these products fit your plant?
              </h2>
              <p className="mt-2 text-xs text-gray-700 leading-relaxed">
                We prefer to start with your specific cooling-water or boiler
                context, not a generic brochure. A short technical discussion is
                usually enough to see whether Mexel®432, MexSteam 100 or TES as
                a system makes sense for your site.
              </p>
            </div>
            <div className="flex flex-col gap-2 text-xs">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-brand-500 px-5 py-2.5 font-semibold text-white shadow-sm hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2"
              >
                Contact Mexel Energy Sustain
              </Link>
              <Link
                href="/applications"
                className="inline-flex items-center justify-center font-semibold text-brand-500 hover:text-brand-900"
              >
                View typical TES applications →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
