import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "../../components/FadeIn";
import SystemHeader from "../../components/SystemHeader";

// INLINE ICONS (Robust & Technical)
const Icons = {
  Molecule: (props: any) => (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
    </svg>
  ),
  Eco: (props: any) => (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  Download: (props: any) => (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
    </svg>
  )
};

export const metadata: Metadata = {
  title: "Mexel®432 Product Specifications",
  description:
    "Technical Data Sheet for Mexel®432: A filming polyamine emulsion for biofouling control, corrosion inhibition, and scale prevention in cooling water systems.",
  openGraph: {
    title: "Mexel®432 | Technical Data Sheet",
    description:
      "Filming amine emulsion specifications, dosing parameters, and eco-toxicity profile.",
  },
};

export default function MexelProductPage() {
  return (
    <main className="min-h-screen bg-white">
      <SystemHeader
        tag="PRODUCT DATA SHEET"
        title="Mexel®432 Performance Emulsion."
        description="Mexel®432 is a proprietary filming polyamine that acts as a surface-active agent (surfactant). Unlike bulk water treatments, it functions by adsorbing onto system surfaces to create a monomolecular barrier against biofouling, corrosion, and scale."
        continuity="Technical specifications and application data."
        currentLabel="Mexel®432 Specs"
      />

      {/* Mode of Action - The "Science" bit */}
      <section className="border-b bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14 lg:py-20">
          <FadeIn>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
              Mechanism of Action
            </h2>
            <p className="mt-4 text-slate-600 max-w-3xl">
              Mexel®432 operates via <strong>Surface Interface Activity</strong> rather than bulk water chemistry modification.

            </p>
          </FadeIn>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Dispersant Action",
                desc: "Prevents suspended solids and biological matter from adhering to tube surfaces/plates.",
                icon: Icons.Molecule,
              },
              {
                title: "Corrosion Inhibition",
                desc: "Forms a hydrophobic film (migrating to the cathode) that isolates metal from oxygen/water contact.",
                icon: Icons.Molecule,
              },
              {
                title: "Scale Prevention",
                desc: "Distorts crystal lattice formation, preventing hard calcite/silica deposits from bonding.",
                icon: Icons.Molecule,
              },
            ].map((item, index) => (
              <FadeIn key={item.title} delay={index * 100}>
                <div className="h-full rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="text-sm font-bold uppercase tracking-wide text-emerald-700 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications Table */}
      <section className="border-b bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-start">

            {/* Table */}
            <FadeIn>
              <h2 className="text-xl font-bold text-slate-900 mb-6">Physical Properties</h2>
              <div className="overflow-hidden rounded-lg border border-slate-200">
                <table className="min-w-full divide-y divide-slate-200">
                  <tbody className="divide-y divide-slate-200 bg-white">
                    {[
                      { prop: "Appearance", val: "Cream/White Emulsion" },
                      { prop: "Active Ingredient", val: "Alkylamine fatty polyamines" },
                      { prop: "Density (20°C)", val: "0.98 - 1.02 g/cm³" },
                      { prop: "pH (Pure)", val: "7.5 - 9.0" },
                      { prop: "Solubility", val: "Dispersible in water" },
                      { prop: "Flash Point", val: "> 100°C (Non-flammable)" },
                      { prop: "Shelf Life", val: "12 months (stored 5-35°C)" },
                    ].map((row) => (
                      <tr key={row.prop}>
                        <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-slate-900 bg-slate-50 w-1/3">
                          {row.prop}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-600 font-mono">
                          {row.val}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </FadeIn>

            {/* Eco/Regulatory */}
            <FadeIn delay={200}>
              <h2 className="text-xl font-bold text-slate-900 mb-6">Environmental Profile</h2>
              <div className="rounded-xl border border-emerald-100 bg-emerald-50/50 p-6 space-y-6">

                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <Icons.Eco className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Biodegradability</h3>
                    <p className="text-sm text-slate-600 mt-1">
                      Mexel®432 is readily biodegradable. It naturally degrades in the water column within 24-48 hours, leaving no persistent residue.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <Icons.Eco className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Toxicity (LC50)</h3>
                    <p className="text-sm text-slate-600 mt-1">
                      At recommended dosing concentrations (e.g., 5ppm for 30 mins/day), the discharge load is significantly below acute toxicity thresholds for aquatic life.
                    </p>
                  </div>
                </div>

                <div className="border-t border-emerald-200 pt-4 mt-2">
                  <p className="text-xs text-emerald-800 italic">
                    *Always refer to the latest Safety Data Sheet (SDS) for site-specific compliance.
                  </p>
                </div>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* Supply & Logistics */}
      <section className="bg-slate-900 py-16">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Supply Specifications</h2>
          <p className="text-slate-400 mb-10 max-w-2xl mx-auto">
            Mexel®432 is a strategic consumable. We manage the supply chain to ensure consistent site availability.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            {/* Download CTA */}
            <Link
              href="/contact"
              className="flex items-center gap-2 rounded-lg bg-emerald-600 px-6 py-3 font-semibold text-white hover:bg-emerald-500 transition-all"
            >
              <Icons.Download className="w-5 h-5" />
              Request SDS & TDS
            </Link>

            {/* WhatsApp */}
            <a
              href="https://wa.me/27794648298"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg border border-slate-600 px-6 py-3 font-semibold text-white hover:bg-slate-800 transition-all"
            >
              Check Stock Availability
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
