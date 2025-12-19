import Link from "next/link";
import Image from "next/image";
import FadeIn from "../../../components/FadeIn";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agriculture & Irrigation | Industries",
  description:
    "TES and Mexel®432 for agricultural operations: cleaner irrigation systems, better evaporative cooling, reduced maintenance.",
  openGraph: {
    title: "Agriculture & Irrigation Solutions | Mexel Energy Sustain",
    description:
      "Cooling-water treatment for greenhouses, cold storage, aquaculture and irrigation networks.",
  },
};

export default function AgriculturePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="border-b bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-16 lg:py-24">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-green-700">
                Industries / Agriculture & Irrigation
              </p>
              <h1 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
                Agriculture and irrigation
              </h1>
              <p className="mt-5 max-w-3xl text-base leading-relaxed text-gray-600">
                Large-scale farming operations, greenhouses, aquaculture and 
                irrigation networks rely on cooling-water systems for climate 
                control, refrigeration and process water. Biofilm, scaling and 
                corrosion in cooling loops, evaporative coolers and irrigation 
                lines reduce efficiency and increase maintenance.
              </p>
            </div>
            <div className="relative h-64 lg:h-80">
              <Image
                src="/industry-agriculture.webp"
                alt="Agricultural cooling and irrigation systems"
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
              <div>
                <h2 className="text-xl font-semibold tracking-tight text-gray-900">
                  Common challenges
                </h2>
                <ul className="mt-4 space-y-2 text-sm text-gray-700">
                  <li>• Cooling systems for cold storage and packhouses</li>
                  <li>• Evaporative coolers in greenhouses and livestock facilities</li>
                  <li>• Irrigation system fouling from biological growth and particulates</li>
                  <li>• Water quality variability in rural or dam-fed systems</li>
                  <li>• Corrosion in galvanized and mixed-metal irrigation infrastructure</li>
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={150}>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  How TES applies in agriculture
                </h3>
                <p className="mt-4 text-sm text-gray-600 leading-relaxed">
                  Mexel®432&apos;s film-forming and dispersant properties help keep 
                  heat exchangers, cooling towers and irrigation lines cleaner, 
                  reducing biofilm build-up and scaling. In cooling-water circuits, 
                  this translates to lower energy use for refrigeration and more 
                  stable operating temperatures.
                </p>
                <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                  For irrigation systems, improved water flow and reduced fouling 
                  can extend maintenance intervals and improve uniformity. TES 
                  monitoring concepts can be adapted to smaller agricultural 
                  operations where cooling-water performance directly impacts 
                  product quality and energy costs.
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
                Optimize cooling and irrigation systems
              </h2>
              <p className="mt-2 text-xs text-gray-700 leading-relaxed">
                Discuss your agricultural cooling-water challenges with us.
              </p>
            </div>
            <div className="flex flex-col gap-2 text-xs">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-green-700 px-5 py-2.5 font-semibold text-white shadow-sm hover:bg-green-800"
              >
                Contact Us
              </Link>
              <Link
                href="/knowledge-hub"
                className="inline-flex items-center justify-center font-semibold text-green-700 hover:text-green-900"
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
