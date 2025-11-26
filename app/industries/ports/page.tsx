import Link from "next/link";
import FadeIn from "../../../components/FadeIn";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sea / Harbours / Ports | Industries",
  description:
    "TES and Mexel®432 for maritime and port facilities: marine cooling systems, desalination support, and coastal industrial operations.",
  openGraph: {
    title: "Maritime & Port Solutions | Mexel Energy Sustain",
    description:
      "Cooling-water treatment for port facilities, marine terminals, and coastal infrastructure.",
  },
};

export default function PortsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="border-b bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-16 lg:py-24">
          <p className="text-xs font-semibold uppercase tracking-widest text-cyan-700">
            Industries / Sea / Harbours / Ports
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
            Maritime, harbours and port facilities
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-gray-600">
            Port facilities, marine terminals, coastal power plants and desalination
            operations face unique cooling-water challenges due to seawater intake,
            biological growth, and harsh marine environments. Mexel®432 provides
            effective fouling control without relying heavily on aggressive biocides.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="border-b">
        <div className="mx-auto max-w-6xl px-4 py-14 lg:py-20">
          <div className="grid gap-8 md:grid-cols-2">
            <FadeIn>
              <div>
                <h2 className="text-xl font-semibold tracking-tight text-gray-900">
                  Marine cooling challenges
                </h2>
                <ul className="mt-4 space-y-2 text-sm text-gray-700">
                  <li>• Biofouling from algae, barnacles and marine organisms</li>
                  <li>• High salinity and corrosive seawater environments</li>
                  <li>• Scaling in heat exchangers and desalination pre-treatment</li>
                  <li>• Seasonal variation in water temperature and quality</li>
                  <li>• Regulatory limits on biocide discharge to marine environments</li>
                  <li>• Mixed seawater and freshwater cooling loops</li>
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={150}>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  How TES works in marine environments
                </h3>
                <p className="mt-4 text-sm text-gray-600 leading-relaxed">
                  Mexel®432's film-forming properties create a protective layer that
                  discourages biofouling attachment and reduces corrosion on heat-transfer
                  surfaces. This is particularly valuable in once-through seawater cooling
                  systems or where environmental discharge standards limit traditional
                  biocide use.
                </p>
                <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                  For coastal power plants, desalination facilities and port infrastructure,
                  TES provides a structured approach to managing cooling-water performance
                  while meeting environmental compliance requirements.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Applications section */}
      <section className="border-b bg-cyan-50">
        <div className="mx-auto max-w-6xl px-4 py-14 lg:py-20">
          <FadeIn>
            <h2 className="text-xl font-semibold text-gray-900">
              Typical applications
            </h2>
          </FadeIn>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <FadeIn delay={100}>
              <div className="rounded-lg bg-white border border-cyan-100 p-5">
                <h3 className="text-sm font-semibold text-gray-900">
                  Coastal power plants
                </h3>
                <p className="mt-2 text-xs text-gray-600 leading-relaxed">
                  Once-through seawater cooling for steam condensers and auxiliary
                  heat exchangers.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={200}>
              <div className="rounded-lg bg-white border border-cyan-100 p-5">
                <h3 className="text-sm font-semibold text-gray-900">
                  Desalination plants
                </h3>
                <p className="mt-2 text-xs text-gray-600 leading-relaxed">
                  Pre-treatment and cooling loops supporting reverse osmosis or
                  thermal desalination processes.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={300}>
              <div className="rounded-lg bg-white border border-cyan-100 p-5">
                <h3 className="text-sm font-semibold text-gray-900">
                  Port terminals
                </h3>
                <p className="mt-2 text-xs text-gray-600 leading-relaxed">
                  Refrigeration and HVAC systems for cold storage, container
                  terminals and marine facilities.
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
                Discuss marine cooling-water solutions
              </h2>
              <p className="mt-2 text-xs text-gray-700 leading-relaxed">
                Let's explore how TES can work in your coastal or maritime operation.
              </p>
            </div>
            <div className="flex flex-col gap-2 text-xs">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-cyan-700 px-5 py-2.5 font-semibold text-white shadow-sm hover:bg-cyan-800"
              >
                Contact Us
              </Link>
              <Link
                href="/knowledge-hub/case-studies"
                className="inline-flex items-center justify-center font-semibold text-cyan-700 hover:text-cyan-900"
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
