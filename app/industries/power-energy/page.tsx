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
      <section className="border-b bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-16 lg:py-24">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-500">
                Industries / Power & Energy
              </p>
              <h1 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
                Wet-cooled power generation
              </h1>
              <p className="mt-5 max-w-3xl text-base leading-relaxed text-gray-600">
                TES is primarily designed for wet-cooled coal-fired units where
                the condenser and cooling-water system are a significant source
                of efficiency loss. These are typically large stations using
                river, dam or mine water, with complex chemistry and high raw-water
                demand.
              </p>
            </div>
            <div className="relative h-64 overflow-hidden rounded-xl shadow-lg lg:h-80">
              <Image
                src="/industry-power.webp"
                alt="Power generation facility with cooling towers"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="border-b">
        <div className="mx-auto max-w-6xl px-4 py-14 lg:py-20">
          <div className="grid gap-8 md:grid-cols-2">
            <FadeIn>
              <div className="flex flex-col gap-4">
                {/* Cooling-water system schematic */}
                <CoolingSchematic />

                <div>
                  <h2 className="text-xl font-semibold tracking-tight text-gray-900">
                    Common cooling-water challenges
                  </h2>
                  <ul className="mt-3 space-y-2 text-sm text-gray-700">
                    <li>• Biofouling and sludge at condenser tube inlets</li>
                    <li>• Scaling and corrosion on heat-transfer surfaces</li>
                    <li>• Variable make-up water (dam, mine water, blends)</li>
                    <li>• Multi-chemical regimes with unclear net impact</li>
                    <li>• TR / TTD instability linked to cold-end fouling</li>
                  </ul>
                  <p className="mt-3 text-sm text-gray-600 leading-relaxed">
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
                    src="/condenser.webp"
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
                    <li>• Units with recurring condenser cleaning or tube issues</li>
                    <li>• Stations where dam or mine-water quality has deteriorated</li>
                    <li>• Sites planning life-extension but still running on old cooling assets</li>
                    <li>• Stations seeking structured, RT&D-aligned trials instead of ad-hoc dosing</li>
                  </ul>
                  <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                    Our goal in this sector is simple: help stabilise condenser performance
                    and reduce cold-end losses in a way that station teams can see and verify.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="mx-auto max-w-6xl px-4 py-14 lg:py-20">
          <div className="flex flex-col gap-4 rounded-lg border bg-gray-50 p-6 shadow-sm md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-sm font-semibold text-gray-900">
                Interested in TES for your power station?
              </h2>
              <p className="mt-2 text-xs text-gray-700 leading-relaxed">
                Start with a technical discussion about your cooling-water system and constraints.
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
                href="/knowledge-hub/case-studies"
                className="inline-flex items-center justify-center font-semibold text-brand-500 hover:text-brand-900"
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
