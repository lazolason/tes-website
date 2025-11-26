import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "TES and Mexel®432 applications across industries: power stations, mining, refineries, data centres, ports, food & beverage, and agricultural operations.",
  openGraph: {
    title: "Industries Served | Mexel Energy Sustain",
    description:
      "Cooling-water efficiency across power generation, mining, refineries, data centres and industrial plants.",
  },
};

export default function IndustriesPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="border-b bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-16 lg:py-24">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-500">
            Industries
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
            Where TES and Mexel chemistry are applied
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-gray-600">
            TES and Mexel®432 are designed for cooling-water systems wherever
            energy, reliability and water use matter. The same principles apply
            across wet-cooled power stations, mines, refineries, process plants,
            data centres, maritime facilities and agricultural operations.
          </p>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-gray-700">
            Select an industry below to learn more about how TES addresses
            specific cooling-water challenges in each sector.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <Link
              href="/industries/power-energy"
              className="group rounded-lg border bg-white p-4 shadow-sm transition-all hover:border-brand-300 hover:shadow-md"
            >
              <h3 className="text-sm font-semibold text-gray-900 group-hover:text-brand-500">
                Power & Energy
              </h3>
              <p className="mt-1 text-xs text-gray-600">
                Wet-cooled coal, gas and nuclear stations
              </p>
            </Link>
            <Link
              href="/industries/mining"
              className="group rounded-lg border bg-white p-4 shadow-sm transition-all hover:border-emerald-300 hover:shadow-md"
            >
              <h3 className="text-sm font-semibold text-gray-900 group-hover:text-emerald-700">
                Mining & Minerals
              </h3>
              <p className="mt-1 text-xs text-gray-600">
                Concentrators and processing plants
              </p>
            </Link>
            <Link
              href="/industries/refineries"
              className="group rounded-lg border bg-white p-4 shadow-sm transition-all hover:border-amber-300 hover:shadow-md"
            >
              <h3 className="text-sm font-semibold text-gray-900 group-hover:text-amber-700">
                Refineries & Petrochemical
              </h3>
              <p className="mt-1 text-xs text-gray-600">
                Critical process cooling loops
              </p>
            </Link>
            <Link
              href="/industries/food-beverage"
              className="group rounded-lg border bg-white p-4 shadow-sm transition-all hover:border-violet-300 hover:shadow-md"
            >
              <h3 className="text-sm font-semibold text-gray-900 group-hover:text-violet-700">
                Food & Beverage
              </h3>
              <p className="mt-1 text-xs text-gray-600">
                Breweries, processing and laundries
              </p>
            </Link>
            <Link
              href="/industries/agriculture"
              className="group rounded-lg border bg-white p-4 shadow-sm transition-all hover:border-green-300 hover:shadow-md"
            >
              <h3 className="text-sm font-semibold text-gray-900 group-hover:text-green-700">
                Agriculture & Irrigation
              </h3>
              <p className="mt-1 text-xs text-gray-600">
                Greenhouses, cold storage, irrigation
              </p>
            </Link>
            <Link
              href="/industries/data-centres"
              className="group rounded-lg border bg-white p-4 shadow-sm transition-all hover:border-blue-300 hover:shadow-md"
            >
              <h3 className="text-sm font-semibold text-gray-900 group-hover:text-blue-700">
                Data Centres
              </h3>
              <p className="mt-1 text-xs text-gray-600">
                Hyperscale and colocation facilities
              </p>
            </Link>
            <Link
              href="/industries/ports"
              className="group rounded-lg border bg-white p-4 shadow-sm transition-all hover:border-cyan-300 hover:shadow-md"
            >
              <h3 className="text-sm font-semibold text-gray-900 group-hover:text-cyan-700">
                Sea / Harbours / Ports
              </h3>
              <p className="mt-1 text-xs text-gray-600">
                Maritime and coastal infrastructure
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="mx-auto max-w-6xl px-4 py-14 lg:py-20">
          <div className="flex flex-col gap-4 rounded-lg border bg-gray-50 p-6 shadow-sm md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-sm font-semibold text-gray-900">
                Not sure which industry page fits your operation?
              </h2>
              <p className="mt-2 text-xs text-gray-700 leading-relaxed">
                Contact us for a technical discussion about your specific cooling-water challenges.
              </p>
            </div>
            <div className="flex flex-col gap-2 text-xs">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-brand-500 px-5 py-2.5 font-semibold text-white shadow-sm hover:bg-brand-700"
              >
                Contact Us
              </Link>
              <Link
                href="/knowledge-hub"
                className="inline-flex items-center justify-center font-semibold text-brand-500 hover:text-brand-900"
              >
                Explore Knowledge Hub →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
