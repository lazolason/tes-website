import Link from "next/link";
import Image from "next/image";
import FadeIn from "../../../components/FadeIn";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Food & Beverage | Industries",
  description:
    "TES and Mexel®432 for food processing, breweries and laundries: stable cooling, reduced energy consumption, better biofilm control.",
  openGraph: {
    title: "Food & Beverage Solutions | Mexel Energy Sustain",
    description:
      "Cooling-water treatment for food processing, breweries, and commercial laundries.",
  },
};

export default function FoodBeveragePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="border-b bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-16 lg:py-24">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-violet-700">
                Industries / Food & Beverage
              </p>
              <h1 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
                Food & beverage, breweries and laundries
              </h1>
              <p className="mt-5 max-w-3xl text-base leading-relaxed text-gray-600">
                These operations run almost continuously and depend on stable cooling
                for process, refrigeration and HVAC. Fouling and biofilm drive up
                energy usage and risk unplanned downtime.
              </p>
            </div>
            <div className="relative h-64 lg:h-80">
              <Image
                src="/industry-agriculture.png"
                alt="Food and beverage processing facilities"
                fill
                className="rounded-xl object-cover shadow-lg"
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
                <div className="relative h-48 w-full overflow-hidden rounded-lg">
                  <Image
                    src="/food-beverage.png"
                    alt="Food and beverage processing facility"
                    fill
                    className="object-cover"
                  />
                </div>

                <div>
                  <h2 className="text-xl font-semibold tracking-tight text-gray-900">
                    Common challenges
                  </h2>
                  <ul className="mt-3 space-y-2 text-sm text-gray-700">
                    <li>• Chillers and condensers losing performance over time</li>
                    <li>• Cooling towers with biological growth and scale</li>
                    <li>• High energy consumption for refrigeration or hot-water systems</li>
                    <li>• Tight quality and reliability requirements</li>
                  </ul>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={150}>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Cooling-water focus in these sectors
                </h3>
                <p className="mt-4 text-sm text-gray-600 leading-relaxed">
                  In these plants, Mexel®432 is applied to cooling towers, condensers
                  and critical cooling loops to keep surfaces cleaner and control
                  biofouling and corrosion. TES concepts can be scaled down to fit the
                  size and data-availability of each site, while keeping the same
                  discipline around baselines and measurable impact.
                </p>
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
                Improve cooling efficiency in your facility
              </h2>
              <p className="mt-2 text-xs text-gray-700 leading-relaxed">
                Let&apos;s discuss how TES can reduce energy costs and downtime.
              </p>
            </div>
            <div className="flex flex-col gap-2 text-xs">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-violet-700 px-5 py-2.5 font-semibold text-white shadow-sm hover:bg-violet-800"
              >
                Contact Us
              </Link>
              <Link
                href="/knowledge-hub/case-studies"
                className="inline-flex items-center justify-center font-semibold text-violet-700 hover:text-violet-900"
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
