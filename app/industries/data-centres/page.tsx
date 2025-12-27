import Image from "next/image";
import IndustryCTA from "../../../components/IndustryCTA";
import DataCentreSchematic from "../../../components/schematics/DataCentreSchematic";
import FadeIn from "../../../components/FadeIn";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data Centres | Industries",
  description:
    "TES and Mexel®432 for data centres: efficient cooling-water treatment, reduced PUE, and reliable thermal management for critical IT infrastructure.",
  openGraph: {
    title: "Data Centre Solutions | Mexel Energy Sustain",
    description:
      "Cooling-water treatment for hyperscale, colocation and enterprise data centres.",
  },
};

export default function DataCentresPage() {
  return (
    <main id="main-content" className="min-h-screen bg-white">
      {/* Hero */}
      <section className="border-b border-slate-200/70 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-16 lg:py-24">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-emerald-700">
                Industries / Data Centres
              </p>
              <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
                Data centre cooling systems
              </h1>
              <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-600">
                Modern data centres depend on reliable, efficient cooling to maintain
                uptime and control PUE (Power Usage Effectiveness). Chilled-water loops,
                cooling towers and heat-rejection systems must operate continuously with
                minimal fouling, scaling or efficiency loss.
              </p>
            </div>
            <div className="relative h-64 lg:h-80">
              <Image
                src="/industry-data-centre.webp"
                alt="Data centre cooling infrastructure"
                fill
                className="rounded-xl object-cover shadow-lg"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="border-b border-slate-200/70">
        <div className="mx-auto max-w-6xl px-4 py-14 lg:py-20">
          <div className="grid gap-8 md:grid-cols-2">
            <FadeIn>
              <div className="flex flex-col gap-4">
                <DataCentreSchematic />
                <h2 className="text-xl font-semibold tracking-tight text-slate-900">
                  Data centre cooling challenges
                </h2>
                <ul className="mt-4 space-y-2 text-sm text-slate-700">
                  <li>• Maintaining low PUE targets under variable IT loads</li>
                  <li>• Biofouling in cooling towers and distribution systems</li>
                  <li>• Scaling on heat exchangers and chiller condensers</li>
                  <li>• Water quality variability in municipal or recycled water feeds</li>
                  <li>• Corrosion risk in mixed-metallurgy systems</li>
                  <li>• Zero-tolerance for unplanned cooling outages</li>
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={150}>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  How TES supports data centre operations
                </h3>
                <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                  Mexel®432 helps maintain cleaner heat-transfer surfaces in chillers,
                  dry coolers and cooling-tower basins, reducing biological fouling and
                  mineral scaling. This keeps thermal performance stable and helps
                  data centre operators hit PUE and sustainability targets.
                </p>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  TES&apos;s IoT dosing and performance tracking provide visibility into
                  cooling-water treatment effectiveness, making it easier to identify
                  efficiency drift before it affects critical IT infrastructure.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Benefits section */}
      <section className="border-b border-slate-200/70 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14 lg:py-20">
          <FadeIn>
            <h2 className="text-xl font-semibold text-slate-900">
              Benefits for data centre operators
            </h2>
          </FadeIn>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <FadeIn delay={100}>
              <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="text-sm font-semibold text-slate-900">
                  Lower PUE
                </h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  Cleaner cooling loops mean better heat transfer and less energy
                  wasted on mechanical cooling.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={200}>
              <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="text-sm font-semibold text-slate-900">
                  Predictable performance
                </h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  IoT dosing and monitoring provide early warning of cooling
                  performance drift.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={300}>
              <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="text-sm font-semibold text-slate-900">
                  Reduced chemical footprint
                </h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  Mexel®432 can replace or reduce traditional biocides and scale
                  inhibitors, simplifying water treatment.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <IndustryCTA
        industry="data centre"
        description="Start with a technical discussion about your cooling infrastructure and PUE targets."
      />
    </main>
  );
}
