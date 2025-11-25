import Link from "next/link";
import FadeIn from "../../components/FadeIn";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "TES case studies: Mexel®432 cooling-water treatment at Eskom power stations and international deployments in nuclear, refinery, desalination and petrochemical industries worldwide.",
  openGraph: {
    title: "TES Case Studies | Mexel Energy Sustain",
    description:
      "Real-world evidence from TES pilots at Eskom stations and 30+ years of Mexel®432 deployments across power generation, refining and desalination worldwide.",
  },
};

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="border-b bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-16 lg:py-24">
          <p className="text-xs font-semibold uppercase tracking-widest text-sky-700">
            Case Studies
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
            TES in practice: evidence from the field.
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-gray-600">
            These case studies document where TES and Mexel®432 have been applied,
            what was measured and what results were observed. They are written to
            give station engineers and decision-makers a clear, honest picture of
            what TES can deliver — and what it cannot.
          </p>
        </div>
      </section>

      {/* South Africa case studies */}
      <section className="border-b">
        <div className="mx-auto max-w-6xl px-4 py-14 lg:py-20">
          <p className="text-xs font-semibold uppercase tracking-widest text-sky-700">
            South Africa
          </p>
          <h2 className="mt-2 text-xl font-bold text-gray-900">
            Eskom power stations
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-gray-600">
            TES has focused its initial deployments at South African coal-fired
            power stations where cooling-water challenges are acute.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <FadeIn>
              <Link
                href="/case-studies/kriel"
                className="group block rounded-lg border bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-sky-700">
                  Eskom • Wet-cooled coal
                </p>
                <h3 className="mt-2 text-lg font-semibold text-gray-900 group-hover:text-sky-700">
                  Kriel Power Station
                </h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  Mexel®432 application at Kriel showed improved condenser
                  performance during treatment. This case study documents the
                  background, intervention approach and observed results.
                </p>
                <p className="mt-4 text-xs font-semibold text-sky-700 group-hover:underline">
                  Read case study →
                </p>
              </Link>
            </FadeIn>

            <FadeIn delay={100}>
              <div className="rounded-lg border border-dashed border-gray-300 bg-gray-50 p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                  Coming soon
                </p>
                <h3 className="mt-2 text-lg font-semibold text-gray-400">
                  Tutuka Power Station
                </h3>
                <p className="mt-2 text-sm text-gray-400 leading-relaxed">
                  TES dosing system installed and RT&D protocol issued. Pilot
                  progress constrained by on-the-ground conditions. Full case
                  study to follow once data collection is complete.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* International case studies */}
      <section className="border-b bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-14 lg:py-20">
          <p className="text-xs font-semibold uppercase tracking-widest text-sky-700">
            International
          </p>
          <h2 className="mt-2 text-xl font-bold text-gray-900">
            Global Mexel®432 installations
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-gray-600">
            Mexel®432 has a 30-year track record across power generation, refining,
            petrochemical and marine industries worldwide. These reference cases
            demonstrate the product&apos;s proven performance.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <FadeIn>
              <div className="rounded-lg border bg-white p-5 shadow-sm">
                <div className="flex items-center gap-2">
                  <span className="text-lg">🇫🇷</span>
                  <p className="text-xs font-semibold uppercase tracking-wider text-sky-700">
                    France
                  </p>
                </div>
                <h3 className="mt-3 text-base font-semibold text-gray-900">
                  EDF Nuclear Power Stations
                </h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  Multiple EDF nuclear plants use Mexel®432 for condenser and
                  cooling-system protection. Long-term deployments with consistent
                  biofouling control results.
                </p>
                <p className="mt-3 text-xs text-gray-500">
                  Nuclear power • Condenser protection
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={100}>
              <div className="rounded-lg border bg-white p-5 shadow-sm">
                <div className="flex items-center gap-2">
                  <span className="text-lg">🇺🇸</span>
                  <p className="text-xs font-semibold uppercase tracking-wider text-sky-700">
                    United States
                  </p>
                </div>
                <h3 className="mt-3 text-base font-semibold text-gray-900">
                  Refinery cooling towers
                </h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  US refineries have deployed Mexel®432 to manage biofilm and
                  Legionella risk in recirculating cooling water systems while
                  reducing chemical load.
                </p>
                <p className="mt-3 text-xs text-gray-500">
                  Oil &amp; gas • Cooling towers
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={200}>
              <div className="rounded-lg border bg-white p-5 shadow-sm">
                <div className="flex items-center gap-2">
                  <span className="text-lg">🇦🇪</span>
                  <p className="text-xs font-semibold uppercase tracking-wider text-sky-700">
                    Middle East
                  </p>
                </div>
                <h3 className="mt-3 text-base font-semibold text-gray-900">
                  Desalination plants
                </h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  Mexel®432 protects intake systems and heat exchangers in
                  seawater desalination facilities, preventing marine fouling
                  without environmental harm.
                </p>
                <p className="mt-3 text-xs text-gray-500">
                  Desalination • Marine fouling
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={300}>
              <div className="rounded-lg border bg-white p-5 shadow-sm">
                <div className="flex items-center gap-2">
                  <span className="text-lg">🇯🇵</span>
                  <p className="text-xs font-semibold uppercase tracking-wider text-sky-700">
                    Japan
                  </p>
                </div>
                <h3 className="mt-3 text-base font-semibold text-gray-900">
                  Coastal power stations
                </h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  Japanese thermal power stations using seawater cooling have
                  applied Mexel®432 to control mussel and barnacle fouling in
                  intake tunnels and condensers.
                </p>
                <p className="mt-3 text-xs text-gray-500">
                  Thermal power • Seawater cooling
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={400}>
              <div className="rounded-lg border bg-white p-5 shadow-sm">
                <div className="flex items-center gap-2">
                  <span className="text-lg">🇧🇷</span>
                  <p className="text-xs font-semibold uppercase tracking-wider text-sky-700">
                    Brazil
                  </p>
                </div>
                <h3 className="mt-3 text-base font-semibold text-gray-900">
                  Petrochemical complexes
                </h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  Brazilian petrochemical facilities have used Mexel®432 for
                  heat exchanger protection, reducing unplanned shutdowns and
                  maintenance costs.
                </p>
                <p className="mt-3 text-xs text-gray-500">
                  Petrochemical • Heat exchangers
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={500}>
              <div className="rounded-lg border bg-white p-5 shadow-sm">
                <div className="flex items-center gap-2">
                  <span className="text-lg">🇮🇳</span>
                  <p className="text-xs font-semibold uppercase tracking-wider text-sky-700">
                    India
                  </p>
                </div>
                <h3 className="mt-3 text-base font-semibold text-gray-900">
                  Steel &amp; manufacturing
                </h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  Indian steel plants and heavy manufacturing sites have deployed
                  Mexel®432 to protect process cooling systems from scale and
                  biofouling buildup.
                </p>
                <p className="mt-3 text-xs text-gray-500">
                  Steel • Process cooling
                </p>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={600}>
            <p className="mt-8 text-xs text-gray-500 leading-relaxed">
              <strong>Note:</strong> International case studies represent Mexel®432
              deployments by Mexel Industries (France) and its global partners. TES
              holds the exclusive distribution rights for Mexel®432 in Southern Africa.
              Detailed technical documentation is available on request.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="mx-auto max-w-6xl px-4 py-14 lg:py-20">
          <FadeIn>
            <div className="flex flex-col gap-4 rounded-lg border bg-gray-50 p-6 shadow-sm md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-lg font-semibold text-gray-900">
                  Want to discuss a TES pilot at your site?
                </h2>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  We&apos;re happy to share more detail on these case studies and
                  discuss how TES could apply to your station or plant.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-sky-700 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-800 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
              >
                Contact us
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
