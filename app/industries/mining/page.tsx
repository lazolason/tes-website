import Link from "next/link";
import Image from "next/image";
import FadeIn from "../../../components/FadeIn";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mining & Minerals | Industries",
  description:
    "TES and Mexel®432 for mining operations: cleaner heat exchangers, reduced downtime, better cooling performance under variable loads.",
  openGraph: {
    title: "Mining & Minerals Solutions | Mexel Energy Sustain",
    description:
      "Cooling-water treatment for mines, concentrators and minerals processing facilities.",
  },
};

export default function MiningPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="border-b bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-16 lg:py-24">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-emerald-700">
                Industries / Mining & Minerals
              </p>
              <h1 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
                Mining and minerals processing
              </h1>
              <p className="mt-5 max-w-3xl text-base leading-relaxed text-gray-600">
                Mines and concentrators often run large open cooling circuits,
                with water quality influenced by process streams, tailings and
                recycled mine water. Fouling, corrosion and solids build-up are
                common, and interventions are normally reactive.
              </p>
            </div>
            <div className="relative h-64 lg:h-80">
              <Image
                src="/industry-mining.png"
                alt="Mining operations cooling systems"
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
                    src="/mining-plant.png"
                    alt="Mining and minerals processing plant"
                    fill
                    className="object-cover"
                  />
                </div>

                <div>
                  <h2 className="text-xl font-semibold tracking-tight text-gray-900">
                    Common challenges
                  </h2>
                  <ul className="mt-3 space-y-2 text-sm text-gray-700">
                    <li>• High solids loading (ash, tailings, fines)</li>
                    <li>• Variable chemistry and temperature</li>
                    <li>• Exchangers and towers that foul faster than planned</li>
                    <li>• Interactions between process water and cooling water</li>
                  </ul>
                  <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                    Mexel®432&apos;s film-forming and dispersant properties keep surfaces cleaner 
                    and solids mobile, improving cooling performance and reducing unscheduled cleaning.
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={150}>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Benefits in mining environments
                </h3>
                <ul className="mt-4 space-y-3 text-sm text-gray-700">
                  <li>• Cleaner heat exchangers and cooling-tower internals</li>
                  <li>• Reduced downtime for mechanical cleaning or acid-washing</li>
                  <li>• Better separation and clarification behaviour in some circuits</li>
                  <li>• More stable cooling performance under variable loads</li>
                </ul>
                <p className="mt-5 text-sm text-gray-600 leading-relaxed">
                  TES can be applied to critical cooling loops at mines in the same
                  structured way as at power stations: defined baselines, clear
                  intervention periods and measurable outcomes.
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
                Explore TES for your mining operation
              </h2>
              <p className="mt-2 text-xs text-gray-700 leading-relaxed">
                Discuss your cooling-water challenges and see how TES can help.
              </p>
            </div>
            <div className="flex flex-col gap-2 text-xs">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-emerald-700 px-5 py-2.5 font-semibold text-white shadow-sm hover:bg-emerald-800"
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
