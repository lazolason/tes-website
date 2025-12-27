import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mexel®432",
  description:
    "Mexel®432: Non-oxidant emulsion chemistry for cooling-water treatment. Detaches biofilm, prevents fouling, inhibits corrosion in condensers and heat exchangers.",
  openGraph: {
    title: "Mexel®432 Chemistry | Mexel Energy Sustain",
    description:
      "Surface-active cooling-water treatment that replaces multiple chemicals with a single molecular film approach.",
  },
};

export default function Mexel432Page() {
  return (
    <main id="main-content" className="min-h-screen bg-white">
      {/* Hero with Infographic */}
      <section className="border-b border-slate-200/70 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:py-24">
          <div className="text-center mb-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-emerald-700">
              Mexel®432
            </p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Restoring Thermal Efficiency: The Mexel®432 Solution
            </h1>
            <p className="mt-5 max-w-3xl mx-auto text-base leading-relaxed text-slate-600">
              A non-oxidant, surface-active emulsion that detaches existing biofilm, prevents regrowth, and maintains condenser cleanliness with a protective molecular film.
            </p>
          </div>

          {/* Technical Infographic */}
          <div className="mt-10 relative h-96 md:h-[32rem] lg:h-[40rem]">
            <Image
              src="/before-after-tubes.webp"
              alt="Before: Heavily fouled condenser tubes vs After: Restored tubes with Mexel432 treatment"
              fill
              className="object-contain"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 90vw, 80vw"
            />
          </div>
        </div>
      </section>

      {/* What is Mexel®432 */}
      <section className="border-b border-slate-200/70">
        <div className="mx-auto max-w-6xl px-4 py-14 lg:py-20">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
            What is Mexel®432?
          </h2>
          <div className="mt-6 grid gap-8 md:grid-cols-2">
            <div>
              <p className="text-sm text-slate-700 leading-relaxed">
                Mexel®432 is a <span className="font-semibold">long-chain alkyl amine emulsion</span> designed for cooling-water service in condensers, heat exchangers and cooling towers. Unlike oxidising biocides or traditional multi-chemical programs, Mexel®432 works through a surface-active mechanism.
              </p>
              <p className="mt-3 text-sm text-slate-700 leading-relaxed">
                It forms a <span className="font-semibold">protective molecular film</span> on wetted metal surfaces, detaches existing biofilm and deposits, prevents recolonisation by bacteria and organic matter, and provides corrosion inhibition. This single treatment replaces separate biocides, anti-scalants, dispersants and corrosion inhibitors.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate-900">Key characteristics</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                <li>• Non-oxidant chemistry (no chlorine, bromine or peroxide)</li>
                <li>• Biodegradable molecular film technology</li>
                <li>• Effective across variable water quality and pH ranges</li>
                <li>• Single-product replacement for multi-chemical dosing</li>
                <li>• Proven in thermal power, nuclear, industrial and process cooling</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="border-b border-slate-200/70 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14 lg:py-20">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
            Measurable Benefits
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-sm font-semibold text-slate-900">Improved Heat Transfer</h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                Restores condenser cleanliness, reduces terminal temperature difference (TTD), increases cooling-water temperature rise (TR).
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-sm font-semibold text-slate-900">Reduced Fouling</h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                Detaches biofilm, mud, ash and scaling deposits. Prevents recolonisation and maintains long-term cleanliness.
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-sm font-semibold text-slate-900">Corrosion Protection</h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                Molecular film inhibits corrosion on copper alloys, stainless steel and carbon steel cooling-water wetted surfaces.
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-sm font-semibold text-slate-900">Lower Emissions Intensity</h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                Improved condenser efficiency reduces fuel consumption per MWh, cutting CO₂ emissions without capital investment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Evidence */}
      <section className="border-b border-slate-200/70">
        <div className="mx-auto max-w-6xl px-4 py-14 lg:py-20">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
            Evidence and Case Studies
          </h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-sm font-semibold text-slate-900">Kriel Power Station (South Africa)</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Mexel®432 application at Kriel showed <span className="font-semibold text-slate-900">40% performance improvement</span> on Unit 6, with significant temperature rise improvement demonstrated over a 90-day trial period.
              </p>
              <p className="mt-2 text-xs text-slate-700">
                Documented by Eskom RT&D with station data showing measurable condenser efficiency gains.
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-sm font-semibold text-slate-900">International References</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Mexel®432 has been applied in thermal and nuclear power plants, refineries, petrochemical facilities and industrial cooling systems across France, USA, UAE, Japan, Brazil and India.
              </p>
              <p className="mt-2 text-xs text-slate-700">
                Common results: improved condenser cleanliness, reduced corrosion, measurable heat-rate improvements.
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/knowledge-hub/case-studies"
              className="inline-flex items-center text-sm font-semibold text-emerald-700 hover:text-emerald-900"
            >
              See detailed case studies →
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
                Interested in Mexel®432 for your cooling-water system?
              </h2>
              <p className="mt-2 text-xs text-slate-700 leading-relaxed">
                Contact us to discuss how Mexel®432 can be integrated into your condenser or heat exchanger cooling loops.
              </p>
            </div>
            <div className="flex flex-col gap-2 text-xs">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-emerald-600 px-5 py-2.5 font-semibold text-white shadow-sm hover:bg-emerald-700"
              >
                Contact Us
              </Link>
              <Link
                href="/tes"
                className="inline-flex items-center justify-center font-semibold text-emerald-700 hover:text-emerald-900"
              >
                Learn about the TES system →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
