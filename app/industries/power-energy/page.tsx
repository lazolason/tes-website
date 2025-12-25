import Link from "next/link";
import Image from "next/image";
import CoolingSchematic from "../../../components/CoolingSchematic";
import FadeIn from "../../../components/FadeIn";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Power & Energy | Industries",
  description:
    "TES and Mexel®432 for wet-cooled power stations: reducing condenser fouling, improving efficiency, and extending asset life.",
  openGraph: {
    title: "Power & Energy Solutions | Mexel Energy Sustain",
    description:
      "Cooling-water treatment for coal, gas, and nuclear power generation facilities.",
  },
};

export default function PowerEnergyPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="border-b border-slate-200/70 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-16 lg:py-24">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-emerald-700">
                Industries / Power & Energy
              </p>
              <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
                Wet-cooled power generation
              </h1>
              <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-600">
                TES is primarily designed for wet-cooled coal-fired units where
                the condenser and cooling-water system are a significant source
                of efficiency loss. These are typically large stations using
                river, dam or mine water, with complex chemistry and high raw-water
                demand.
              </p>
            </div>
            <div className="relative h-64 overflow-hidden rounded-xl shadow-lg lg:h-80">
              <Image
                src="/industry-power.png"
                alt="Power generation facility with cooling towers"
                fill
                className="object-cover"
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
                {/* Cooling-water system schematic */}
                <CoolingSchematic />

                <div>
                  <h2 className="text-xl font-semibold tracking-tight text-slate-900">
                    Common cooling-water challenges
                  </h2>
                  <ul className="mt-3 space-y-2 text-sm text-slate-700">
                    <li>• Biofouling and sludge at condenser tube inlets</li>
                    <li>• Scaling and corrosion on heat-transfer surfaces</li>
                    <li>• Variable make-up water (dam, mine water, blends)</li>
                    <li>• Multi-chemical regimes with unclear net impact</li>
                    <li>• TR / TTD instability linked to cold-end fouling</li>
                  </ul>
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                    TES combines Mexel®432, IoT dosing and a cooling-water performance
                    view to restore and maintain condenser cleanliness on these units.
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={150}>
              <div className="flex flex-col gap-4">
                {/* Condenser image */}
                <div className="relative h-48 w-full overflow-hidden rounded-lg">
                  <Image
                    src="/condenser.png"
                    alt="Industrial condenser system"
                    fill
                    className="object-cover"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-slate-900">
                    Typical use cases in power generation
                  </h3>
                  <ul className="mt-3 space-y-2 text-sm text-slate-700">
                    <li>• Units with recurring condenser cleaning or tube issues</li>
                    <li>• Stations where dam or mine-water quality has deteriorated</li>
                    <li>• Sites planning life-extension but still running on old cooling assets</li>
                    <li>• Stations seeking structured, RT&D-aligned trials instead of ad-hoc dosing</li>
                  </ul>
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                    Our goal in this sector is simple: help stabilise condenser performance
                    and reduce cold-end losses in a way that station teams can see and verify.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* MexSteam 100 - Boiler-side complement */}
      <section id="mexsteam" className="border-b border-slate-200/70 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-12 lg:py-16">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-emerald-700">
              STRATEGIC COMPLEMENT
            </p>
            <h2 className="mt-3 text-xl font-semibold text-slate-900">
              MexSteam 100 for boiler-side efficiency
            </h2>
            <p className="mt-3 text-sm text-slate-700 leading-relaxed">
              While TES addresses cooling-water and condenser performance,
              MexSteam 100 is designed for boiler feedwater, condensate return
              and steam systems. In coal-fired power stations, boiler-side
              corrosion and deposition can reduce efficiency through higher
              firing rates, forced outages and increased maintenance.
            </p>

            {/* Industry-specific boiler applications */}
            <div className="mt-5">
              <h3 className="text-sm font-semibold text-slate-900">
                Typical boiler applications in power generation
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                <li>
                  • High-pressure boilers in coal, gas and biomass units with
                  recurring tube failures or scale formation
                </li>
                <li>
                  • Condensate return systems showing low pH corrosion or
                  oxygen ingress
                </li>
                <li>
                  • Feedwater treatment circuits requiring corrosion inhibition
                  alongside demineralisation or polishing
                </li>
                <li>
                  • Economizer and evaporator sections with deposition issues
                  linked to water chemistry drift
                </li>
                <li>
                  • Combined-cycle plants with heat recovery steam generators
                  (HRSG) requiring steam-side protection
                </li>
              </ul>
            </div>

            <div className="mt-5 flex flex-wrap gap-3 text-xs">
              <span className="rounded-full bg-slate-100 px-3 py-1 font-semibold text-slate-800">
                Boiler / steam-side
              </span>
              <span className="rounded-full bg-slate-100 px-3 py-1 font-semibold text-slate-800">
                Outside TES verification
              </span>
            </div>

            <div className="mt-5 text-xs">
              <Link
                href="/products#mexsteam"
                className="inline-flex items-center font-semibold text-emerald-600 hover:text-emerald-800"
              >
                Learn more about MexSteam 100 →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="mx-auto max-w-6xl px-4 py-14 lg:py-20">
          <div className="flex flex-col gap-4 rounded-lg border border-slate-200 bg-slate-50 p-6 shadow-sm md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-sm font-semibold text-slate-900">
                Interested in TES for your power station?
              </h2>
              <p className="mt-2 text-xs text-slate-700 leading-relaxed">
                Start with a technical discussion about your cooling-water system and constraints.
              </p>
            </div>
            <div className="flex flex-col gap-2 text-xs">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-emerald-600 px-5 py-2.5 font-semibold text-white shadow-sm hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:ring-offset-2"
              >
                Contact Us
              </Link>
              <Link
                href="/knowledge-hub/case-studies"
                className="inline-flex items-center justify-center font-semibold text-emerald-700 hover:text-emerald-900"
              >
                View case studies →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
