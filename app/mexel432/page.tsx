import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import SystemHeader from "@/components/SystemHeader";
import TechnicalDosingSpec from "@/components/TechnicalDosingSpec";
import { buttonVariants } from "@/components/ui/Button";
import type { IconProps } from '@/types';

// Inline icons for this page (specific to product specs)
const Icons = {
  Molecule: (props: IconProps) => (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
    </svg>
  ),
  Eco: (props: IconProps) => (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  Download: (props: IconProps) => (
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
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://mexelenergysustain.com";

  return (
    <main className="min-h-screen bg-white">
      {/* JSON-LD Structured Data for Product */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: "Mexel®432",
            description: "A filming polyamine emulsion for biofouling control, corrosion inhibition, and scale prevention in cooling water systems.",
            brand: {
              "@type": "Brand",
              name: "Mexel Energy Sustain",
            },
            manufacturer: {
              "@type": "Organization",
              name: "Mexel Energy Sustain",
              url: siteUrl,
            },
            category: "Industrial Chemicals",
            url: `${siteUrl}/mexel432`,
          }),
        }}
      />
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

      {/* NEW: Technical Dosing Specification (Hardware & Performance) */}
      <TechnicalDosingSpec />

      {/* Application & Dosing Protocols */}
      <section className="border-b bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 lg:py-20">
          <FadeIn>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
              Application & Dosing Protocols
            </h2>
            <p className="mt-4 text-slate-600 max-w-3xl">
              Mexel®432 is applied via <strong>pulsed dosing</strong> rather than continuous feed,
              targeting the surface interface specifically while minimizing chemical consumption.
            </p>
          </FadeIn>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            {/* Dosing Rates Table */}
            <FadeIn delay={100}>
              <h3 className="text-lg font-bold text-slate-900 mb-4">Typical Dosing Parameters</h3>
              <div className="overflow-hidden rounded-lg border border-slate-200">
                <table className="min-w-full divide-y divide-slate-200">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider text-slate-700">
                        System Type
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider text-slate-700">
                        Dosing Rate
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    {[
                      { system: "Once-Through (Power Station)", rate: "3-5 ppm, 20-30 min/day" },
                      { system: "Recirculating Cooling Tower", rate: "5-8 ppm, 2-3 pulses/day" },
                      { system: "Closed Loop (HVAC)", rate: "10-15 ppm, weekly maintenance" },
                    ].map((row) => (
                      <tr key={row.system}>
                        <td className="px-6 py-4 text-sm font-medium text-slate-900">
                          {row.system}
                        </td>
                        <td className="px-6 py-4 text-sm text-slate-600 font-mono">
                          {row.rate}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </FadeIn>

            {/* TES Integration */}
            <FadeIn delay={200}>
              <h3 className="text-lg font-bold text-slate-900 mb-4">TES IoT Integration</h3>
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 space-y-4">
                <div className="flex gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center">
                      <span className="text-emerald-600 font-bold text-sm">1</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Automated Dosing Skid</h4>
                    <p className="text-sm text-slate-600 mt-1">
                      TES Thingy:91 skid controls dosing timing and volume precisely,
                      logging all events to the cloud for compliance.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center">
                      <span className="text-emerald-600 font-bold text-sm">2</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Compatibility</h4>
                    <p className="text-sm text-slate-600 mt-1">
                      Can be integrated with existing anti-scalants if required,
                      though Mexel®432 typically replaces multi-product programs.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center">
                      <span className="text-emerald-600 font-bold text-sm">3</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">No Shutdown Required</h4>
                    <p className="text-sm text-slate-600 mt-1">
                      Installation is a simple tap-in to the cooling water inlet.
                      Cleaning happens entirely while the unit runs.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
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

      {/* Performance Validation Data */}
      <section className="border-b bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14 lg:py-20">
          <FadeIn>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
              Performance Validation Data
            </h2>
            <p className="mt-4 text-slate-600 max-w-3xl">
              Mexel®432 performance is validated using <strong>ASME PTC 12.2</strong> methodology,
              ensuring that MW gains are engineering-grade measurements, not estimates.
            </p>
          </FadeIn>

          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {/* Key Metrics */}
            <FadeIn delay={100}>
              <div className="rounded-xl border border-slate-200 bg-white p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center">
                    <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-slate-900">TTD Reduction</h3>
                </div>
                <p className="text-2xl font-bold text-emerald-600 mb-2">2-4°C</p>
                <p className="text-sm text-slate-600">
                  Typical Terminal Temperature Difference improvement during intervention phase
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={200}>
              <div className="rounded-xl border border-slate-200 bg-white p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                    <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-slate-900">Vacuum Improvement</h3>
                </div>
                <p className="text-2xl font-bold text-blue-600 mb-2">5-15 kPa</p>
                <p className="text-sm text-slate-600">
                  Condenser back-pressure reduction at matched load conditions
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={300}>
              <div className="rounded-xl border border-slate-200 bg-white p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center">
                    <svg className="w-5 h-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-slate-900">Heat Rate Recovery</h3>
                </div>
                <p className="text-2xl font-bold text-amber-600 mb-2">1-3%</p>
                <p className="text-sm text-slate-600">
                  Station heat rate improvement translating to MW capacity restoration
                </p>
              </div>
            </FadeIn>
          </div>

          {/* Case Study Links */}
          <FadeIn delay={400}>
            <div className="mt-10 rounded-xl border border-slate-200 bg-white p-8">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Validation Documentation</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <Link
                  href="/Lost_Megawatts_Restored.pdf"
                  className="flex items-start gap-4 p-4 rounded-lg border border-slate-200 hover:border-emerald-300 hover:bg-emerald-50/50 transition-all group"
                >
                  <div className="flex-shrink-0">
                    <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 group-hover:text-emerald-700">Lost Megawatts Restored</h4>
                    <p className="text-sm text-slate-600 mt-1">15-page technical overview of TES methodology and ASME PTC 12.2 application</p>
                  </div>
                </Link>

                <Link
                  href="/knowledge-hub/case-studies/kriel"
                  className="flex items-start gap-4 p-4 rounded-lg border border-slate-200 hover:border-emerald-300 hover:bg-emerald-50/50 transition-all group"
                >
                  <div className="flex-shrink-0">
                    <svg className="w-8 h-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 group-hover:text-emerald-700">Kriel Power Station Case Study</h4>
                    <p className="text-sm text-slate-600 mt-1">Full pilot documentation with baseline, intervention, and measured results</p>
                  </div>
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Comparative Analysis */}
      <section className="border-b bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 lg:py-20">
          <FadeIn>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
              Why Mexel®432 vs. Traditional Chemicals
            </h2>
            <p className="mt-4 text-slate-600 max-w-3xl">
              Mexel®432 represents a fundamental shift from &quot;slash and burn&quot; oxidizing biocides
              to a surface-active, film-forming approach.
            </p>
          </FadeIn>

          <div className="mt-10 overflow-hidden rounded-lg border border-slate-200">
            <table className="min-w-full divide-y divide-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider text-slate-700">
                    Criteria
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider text-emerald-700">
                    Mexel®432 (TES)
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider text-slate-500">
                    Traditional Biocides
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                {[
                  {
                    criteria: "Dosing Frequency",
                    mexel: "Pulsed (20-30 min/day)",
                    traditional: "Continuous or frequent shock"
                  },
                  {
                    criteria: "Chemical Consumption",
                    mexel: "90% reduction vs. continuous",
                    traditional: "High volume required"
                  },
                  {
                    criteria: "Environmental Impact",
                    mexel: "Biodegradable, non-toxic",
                    traditional: "Persistent, aquatic toxicity"
                  },
                  {
                    criteria: "Corrosion Protection",
                    mexel: "Active film-forming inhibitor",
                    traditional: "None (can accelerate corrosion)"
                  },
                  {
                    criteria: "Scale Prevention",
                    mexel: "Crystal lattice distortion",
                    traditional: "Requires separate anti-scalant"
                  },
                ].map((row) => (
                  <tr key={row.criteria}>
                    <td className="px-6 py-4 text-sm font-medium text-slate-900 bg-slate-50">
                      {row.criteria}
                    </td>
                    <td className="px-6 py-4 text-sm text-emerald-700 font-medium">
                      {row.mexel}
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-500">
                      {row.traditional}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Safety & Handling */}
      <section className="border-b bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14 lg:py-20">
          <FadeIn>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
              Safety & Handling
            </h2>
            <p className="mt-4 text-slate-600 max-w-3xl">
              Mexel®432 is classified as non-hazardous under standard transport regulations.
            </p>
          </FadeIn>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <FadeIn delay={100}>
              <div className="rounded-xl border border-slate-200 bg-white p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-4">Storage Requirements</h3>
                <ul className="space-y-3 text-sm text-slate-600">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span><strong>Temperature:</strong> Store between 5-35°C. Avoid freezing.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span><strong>Container:</strong> Keep in original sealed containers. Compatible with HDPE/PP.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span><strong>Shelf Life:</strong> 12 months from manufacture date when stored correctly.</span>
                  </li>
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={200}>
              <div className="rounded-xl border border-slate-200 bg-white p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-4">Handling Precautions</h3>
                <ul className="space-y-3 text-sm text-slate-600">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span><strong>PPE:</strong> Use gloves and safety glasses during handling.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span><strong>First Aid:</strong> In case of skin contact, rinse with water. If swallowed, seek medical advice.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span><strong>Full SDS:</strong> Always consult the Safety Data Sheet for complete safety information.</span>
                  </li>
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Technical FAQ */}
      <section className="border-b bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 lg:py-20">
          <FadeIn>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
              Technical FAQ
            </h2>
            <p className="mt-4 text-slate-600 max-w-3xl">
              Common questions from station engineers and chemists.
            </p>
          </FadeIn>

          <div className="mt-10 space-y-6">
            {[
              {
                q: "Does Mexel®432 work with seawater?",
                a: "Yes. Mexel®432 has been successfully deployed in seawater cooling systems (desalination, coastal power stations). It prevents marine fouling without environmental harm."
              },
              {
                q: "Is it compatible with Admiralty Brass tubes?",
                a: "Yes. Mexel®432 is compatible with all common condenser tube metallurgies including Admiralty Brass, Titanium, Stainless Steel, and Copper-Nickel alloys."
              },
              {
                q: "What if TTD doesn't improve after dosing?",
                a: "High TTD is not always fouling. Our verification protocol includes a baseline phase to rule out non-fouling issues (air ingress, passing valves, mechanical problems) before dosing begins."
              },
              {
                q: "Can I use it alongside my existing anti-scalant?",
                a: "Mexel®432 typically replaces both biocides and anti-scalants. However, it can be integrated with certain programs if required. Contact our engineering team for compatibility assessment."
              },
              {
                q: "How quickly will I see results?",
                a: "Measurable TTD improvement typically appears within 2-4 weeks of intervention. The full cleaning effect depends on the severity of existing fouling."
              },
            ].map((faq, index) => (
              <FadeIn key={index} delay={index * 50}>
                <div className="rounded-lg border border-slate-200 bg-slate-50 p-6">
                  <h3 className="font-bold text-slate-900 mb-2">{faq.q}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{faq.a}</p>
                </div>
              </FadeIn>
            ))}
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
              className={buttonVariants({ variant: "default", className: "flex items-center gap-2 rounded-lg py-3" })}
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
