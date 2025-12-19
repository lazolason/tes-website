import Link from "next/link";
import type { Metadata } from "next";
import SystemHeader from "../../components/SystemHeader";

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
      <SystemHeader
        tag="OPERATING CONTEXTS"
        title="Operating contexts for TES deployment."
        description="TES is applied where cooling-water performance can be measured and verified using baseline → review methodology at matched load and ambient conditions."
        continuity="These are the operating contexts where TES is applied."
        currentLabel="Contexts"
        activeSteps={[2, 3]}
      />

      <section className="border-b border-slate-200/70 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-12 lg:py-16">
          <p className="max-w-3xl text-sm leading-relaxed text-slate-700">
            Select an industry below to learn more about how TES addresses specific
            cooling-water challenges in each sector.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <Link
              href="/industries/power-energy"
              className="group rounded-lg border border-slate-200 bg-white p-4 transition-all hover:border-emerald-300"
            >
              <h3 className="text-sm font-semibold text-slate-900 group-hover:text-emerald-700">
                Power & Energy
              </h3>
              <p className="mt-1 text-xs text-slate-600">
                Wet-cooled coal, gas and nuclear stations
              </p>
            </Link>
            <Link
              href="/industries/mining"
              className="group rounded-lg border border-slate-200 bg-white p-4 transition-all hover:border-emerald-300"
            >
              <h3 className="text-sm font-semibold text-slate-900 group-hover:text-emerald-700">
                Mining & Minerals
              </h3>
              <p className="mt-1 text-xs text-slate-600">
                Concentrators and processing plants
              </p>
            </Link>
            <Link
              href="/industries/refineries"
              className="group rounded-lg border border-slate-200 bg-white p-4 transition-all hover:border-emerald-300"
            >
              <h3 className="text-sm font-semibold text-slate-900 group-hover:text-emerald-700">
                Refineries & Petrochemical
              </h3>
              <p className="mt-1 text-xs text-slate-600">
                Critical process cooling loops
              </p>
            </Link>
            <Link
              href="/industries/food-beverage"
              className="group rounded-lg border border-slate-200 bg-white p-4 transition-all hover:border-emerald-300"
            >
              <h3 className="text-sm font-semibold text-slate-900 group-hover:text-emerald-700">
                Food & Beverage
              </h3>
              <p className="mt-1 text-xs text-slate-600">
                Breweries, processing and laundries
              </p>
            </Link>
            <Link
              href="/industries/agriculture"
              className="group rounded-lg border border-slate-200 bg-white p-4 transition-all hover:border-emerald-300"
            >
              <h3 className="text-sm font-semibold text-slate-900 group-hover:text-emerald-700">
                Agriculture & Irrigation
              </h3>
              <p className="mt-1 text-xs text-slate-600">
                Greenhouses, cold storage, irrigation
              </p>
            </Link>
            <Link
              href="/industries/data-centres"
              className="group rounded-lg border border-slate-200 bg-white p-4 transition-all hover:border-emerald-300"
            >
              <h3 className="text-sm font-semibold text-slate-900 group-hover:text-emerald-700">
                Data Centres
              </h3>
              <p className="mt-1 text-xs text-slate-600">
                Hyperscale and colocation facilities
              </p>
            </Link>
            <Link
              href="/industries/ports"
              className="group rounded-lg border border-slate-200 bg-white p-4 transition-all hover:border-emerald-300"
            >
              <h3 className="text-sm font-semibold text-slate-900 group-hover:text-emerald-700">
                Sea / Harbours / Ports
              </h3>
              <p className="mt-1 text-xs text-slate-600">
                Maritime and coastal infrastructure
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="mx-auto max-w-6xl px-4 py-14 lg:py-20">
          <div className="flex flex-col gap-4 rounded-lg border border-slate-200 bg-slate-50 p-6 shadow-sm md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-sm font-semibold text-slate-900">
                Not sure which industry page fits your operation?
              </h2>
              <p className="mt-2 text-xs text-slate-700 leading-relaxed">
                Contact us for a technical discussion about your specific cooling-water challenges.
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
                href="/knowledge-hub"
                className="inline-flex items-center justify-center font-semibold text-emerald-700 hover:text-emerald-900"
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
