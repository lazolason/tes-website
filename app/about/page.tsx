import Link from "next/link";
import Image from "next/image";
import FadeIn from "../../components/FadeIn";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Mexel Energy Sustain (Pty) Ltd – a South African company focused on cooling-water efficiency using Mexel®432 chemistry, IoT dosing and the TES verification framework.",
  openGraph: {
    title: "About Mexel Energy Sustain",
    description:
      "South African company focused on cooling-water and thermal efficiency for power stations and industrial plants.",
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="border-b bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-12 lg:py-16">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-brand-500">
                About
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                About Mexel Energy Sustain.
              </h1>
              <p className="mt-4 max-w-3xl text-sm leading-relaxed text-gray-700">
                Mexel Energy Sustain (Pty) Ltd is a South African company focused on{" "}
                <span className="font-semibold">cooling-water and thermal efficiency</span>.
                We combine Mexel chemistry with IoT dosing, data and verification to help
                large energy and industrial users reduce cold-end losses in a disciplined,
                engineering-led way.
              </p>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-gray-700">
                Our work sits at the intersection of energy efficiency, water treatment and
                system performance. TES is our practical framework for applying this at
                wet-cooled coal units and industrial cooling-water systems.
              </p>
            </div>
            <div className="relative h-56 overflow-hidden rounded-xl shadow-lg lg:h-64">
              <Image
                src="/control-room.webp"
                alt="Power station control room"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our approach */}
      <section className="border-b">
        <div className="mx-auto max-w-6xl px-4 py-12 lg:py-16">
          <FadeIn>
            <h2 className="text-xl font-semibold text-gray-900">Our technical approach</h2>
          </FadeIn>
          <div className="mt-4 grid gap-8 md:grid-cols-2">
            <FadeIn delay={100}>
              <p className="text-sm text-gray-700 leading-relaxed">
                We do not start with a catalogue of products. We start with{" "}
                <span className="font-semibold">how energy and water are being used</span>{" "}
                at the cold end: condensers, cooling towers, exchangers and critical
                cooling-water loops. From there we design an intervention that makes
                technical sense for that specific system.
              </p>
              <p className="mt-3 text-sm text-gray-700 leading-relaxed">
                TES is the way we structure this thinking:{" "}
                <span className="font-semibold">Mexel®432 chemistry</span>,{" "}
                <span className="font-semibold">IoT dosing</span>, a focused{" "}
                <span className="font-semibold">cooling-water performance view</span> and a
                clear <span className="font-semibold">verification framework</span>. Each
                element is simple; the value is in how they work together.
              </p>
            </FadeIn>
            <FadeIn delay={200}>
              <div className="space-y-3">
              <h3 className="text-sm font-semibold text-gray-900">Principles</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Transparent, data-driven, engineering-first.</li>
                <li>• Respect existing station and plant protocols.</li>
                <li>• Scope tightly; avoid overpromising or overselling.</li>
                <li>• Let measured results, not claims, drive decisions.</li>
              </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Why TES exists */}
      <section className="border-b bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-12 lg:py-16">
          <h2 className="text-xl font-semibold text-gray-900">Why TES exists</h2>
          <div className="mt-4 grid gap-8 md:grid-cols-2">
            <div>
              <p className="text-sm text-gray-700 leading-relaxed">
                At many wet-cooled stations and industrial sites, the cold end quietly
                erodes performance. Biofouling, scaling, corrosion and ash or mud
                deposits reduce condenser cleanliness, increase cooling-water
                temperatures and make TR / TTD unstable. Multiple chemicals are dosed,
                but their true impact on energy efficiency is often unclear.
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-700 leading-relaxed">
                TES exists to make this part of the system visible and manageable. By
                focusing on cooling-water and condenser performance, we help clients
                recover efficiency that is already sitting in their assets, without
                claiming to replace proper operations, maintenance or long-term capital
                projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="border-b">
        <div className="mx-auto max-w-6xl px-4 py-14 lg:py-20">
          <FadeIn>
            <h2 className="text-2xl font-semibold tracking-tight text-gray-900">
              Leadership
            </h2>
          </FadeIn>
          <div className="mt-8 grid gap-8 md:grid-cols-3 lg:grid-cols-4">
            <FadeIn delay={100}>
              <div className="relative h-64 md:h-80 overflow-hidden rounded-lg shadow-lg">
                <Image
                  src="/lazola-sonqishe.webp"
                  alt="Lazola Sonqishe, Managing Director"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>
            <FadeIn delay={200}>
              <div className="md:col-span-2 lg:col-span-3">
                <h3 className="text-xl font-semibold text-gray-900">
                  Lazola Sonqishe
                </h3>
                <p className="mt-1 text-sm font-medium text-brand-500">
                  Managing Director
                </p>
                <p className="mt-4 text-sm text-gray-700 leading-relaxed">
                  Lazola Sonqishe is the Managing Director of Mexel Energy Sustain (Pty) Ltd. With a background in energy systems and industrial efficiency, Lazola leads the technical and commercial development of the TES (Thermal Efficiency Solution) framework and Mexel®432 cooling-water applications across South Africa.
                </p>
                <p className="mt-3 text-sm text-gray-700 leading-relaxed">
                  Under his leadership, Mexel Energy Sustain has worked with Eskom RT&D to develop structured verification protocols for cooling-water efficiency interventions at wet-cooled power stations, including documented work at Kriel and the formal testing protocol for Tutuka.
                </p>
                <p className="mt-3 text-sm text-gray-700 leading-relaxed">
                  Lazola&apos;s approach is rooted in engineering discipline, transparent data and alignment with existing plant protocols. He focuses on measurable results, structured verification and building long-term partnerships with energy and industrial clients who value technical integrity over marketing claims.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Eskom context */}
      <section className="border-b">
        <div className="mx-auto max-w-6xl px-4 py-14 lg:py-20">
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900">
            Our work with Eskom and large energy users
          </h2>
          <div className="mt-5 grid gap-8 md:grid-cols-2">
            <div>
              <p className="text-base text-gray-600 leading-relaxed">
                Mexel®432 has been through Eskom&apos;s RT&amp;D processes, including
                application at Kriel and a formal testing protocol for Tutuka. We
                understand the realities of working on live stations: water-quality
                constraints, operational risk, safety, and the need to align with
                engineering, chemical services and station management.
              </p>
            </div>
            <div>
              <p className="text-base text-gray-600 leading-relaxed">
                Our goal is straightforward:{" "}
                <span className="font-semibold text-gray-900">
                  help stations stabilise condenser performance, not replace maintenance
                  or plant disciplines.
                </span>{" "}
                TES is structured so that station teams, RT&amp;D and independent
                referees can see the same data and draw their own technical conclusions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Evidence & Timeline */}
      <section className="border-b bg-brand-50">
        <div className="mx-auto max-w-6xl px-4 py-14 lg:py-20">
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900">
            Evidence and verification timeline
          </h2>
          <p className="mt-3 max-w-3xl text-base text-gray-600">
            TES is built on documented work with Eskom RT&amp;D, independent referees and
            structured verification. Key milestones:
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {/* Kriel */}
            <div className="rounded-lg border bg-white p-5 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wider text-brand-500">Kriel Power Station</p>
              <h3 className="mt-2 text-sm font-semibold text-gray-900">Initial Mexel®432 application</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                First Eskom site where Mexel®432 was applied in cooling-water service.
                Station data indicated improved condenser performance during treatment period.
              </p>
            </div>

            {/* Tutuka Protocol */}
            <div className="rounded-lg border bg-white p-5 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wider text-brand-500">Tutuka Protocol</p>
              <h3 className="mt-2 text-sm font-semibold text-gray-900">RT&amp;D Testing Protocol Rev08</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                Eskom RT&amp;D issued the Tutuka Surfactant (FFA) Testing Protocol Rev08,
                defining baseline → intervention → post-intervention methodology for TES verification.
              </p>
            </div>

            {/* WRC */}
            <div className="rounded-lg border bg-white p-5 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wider text-brand-500">Independent Referee</p>
              <h3 className="mt-2 text-sm font-semibold text-gray-900">Water Research Commission</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                The WRC can act as an independent referee for TES pilots, reviewing methodology
                and results under their established frameworks for water-treatment research.
              </p>
            </div>

            {/* IoT Dosing */}
            <div className="rounded-lg border bg-white p-5 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wider text-brand-500">IoT Infrastructure</p>
              <h3 className="mt-2 text-sm font-semibold text-gray-900">Thingy:91X dosing skids</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                TES dosing skids based on Nordic&apos;s Thingy:91X platform installed at Tutuka,
                providing traceable dosing records linked to condenser performance data.
              </p>
            </div>

            {/* Carbon potential */}
            <div className="rounded-lg border bg-white p-5 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wider text-brand-500">Future Potential</p>
              <h3 className="mt-2 text-sm font-semibold text-gray-900">Emissions-intensity verification</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                Once cooling-water improvements are measured and repeatable, they can support
                future carbon-credit methodologies through bodies such as Brundtland.
              </p>
            </div>

            {/* JET correspondence */}
            <div className="rounded-lg border bg-white p-5 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wider text-brand-500">Strategic Engagement</p>
              <h3 className="mt-2 text-sm font-semibold text-gray-900">JET &amp; transition context</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                TES is positioned within the Just Energy Transition context as a practical
                efficiency intervention that can extend asset life and reduce emissions intensity.
              </p>
            </div>
          </div>

          <p className="mt-6 text-xs text-gray-500">
            Documentation including the TES Master Evidence Pack, RT&amp;D protocol and JET correspondence
            is available for qualified enquiries.
          </p>
        </div>
      </section>

      {/* Industrial clients */}
      <section className="border-b bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-12 lg:py-16">
          <h2 className="text-xl font-semibold text-gray-900">
            Industrial cooling-water clients
          </h2>
          <div className="mt-4 grid gap-8 md:grid-cols-2">
            <div>
              <p className="text-sm text-gray-700 leading-relaxed">
                Beyond power stations, many industrial and commercial sites depend on
                reliable cooling-water systems: mines, refineries, steel plants,
                breweries, laundries and large processing facilities. They face the same
                underlying issues – biofilm, corrosion, scaling, solids – often with
                variable raw-water quality.
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-700 leading-relaxed">
                TES principles translate directly into these environments. We adapt the
                same Mexel®432 chemistry, dosing and data approach to the specific
                cooling loops and constraints of each plant, with the same emphasis on
                transparency and measurable results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="mx-auto max-w-6xl px-4 py-10 lg:py-12">
          <div className="flex flex-col gap-4 rounded-lg border bg-white p-6 shadow-sm md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-sm font-semibold text-gray-900">
                Talk to us about your cooling-water or TES questions.
              </h2>
              <p className="mt-2 text-xs text-gray-700 leading-relaxed">
                If you are responsible for a wet-cooled unit or a critical industrial
                cooling-water system, we are happy to explore whether TES and
                Mexel®432 are a good fit. A short, technical discussion is usually
                enough to see if there is a realistic path.
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
                href="/tes"
                className="inline-flex items-center justify-center font-semibold text-brand-500 hover:text-brand-900"
              >
                Revisit the TES system overview →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
