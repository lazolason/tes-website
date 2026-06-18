import type { Metadata } from "next";
import Image from "next/image";
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

const mexelProductSocialImage = {
  url: "/og/mexel432.png",
  width: 1200,
  height: 630,
  alt: "Mexel 432 product data sheet social preview",
};

export const metadata: Metadata = {
  title: "Mexel®432 Product Specifications",
  description:
    "Technical overview for Mexel®432: a filming polyamine emulsion used in industrial cooling-water treatment programs.",
  alternates: {
    canonical: "/mexel432/",
  },
  openGraph: {
    type: "website",
    url: "/mexel432/",
    title: "Mexel®432 | Technical Data Sheet",
    description:
      "Filming amine emulsion specifications, dosing parameters, and SDS/TDS review notes.",
    images: [mexelProductSocialImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mexel®432 | Technical Data Sheet",
    description:
      "Filming amine emulsion specifications, dosing parameters, and SDS/TDS review notes.",
    images: [mexelProductSocialImage.url],
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
            description: "A filming polyamine emulsion used in industrial cooling-water treatment programs.",
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
        description="Mexel®432 is a proprietary filming polyamine that acts as a surface-active agent. It is assessed for cooling-water systems where surface condition, fouling behaviour and site chemistry need a structured review."
        continuity="Technical specifications and application data."
        currentLabel="Mexel®432 Specs"
      />

      <section className="border-b bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 lg:py-16">
          <FadeIn>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
              What Stations Actually Buy
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-600">
              Mexel®432 is supplied as part of a practical station package: the consumable
              emulsion, a controlled dosing arrangement, and the records needed for baseline
              review. Performance conclusions remain tied to site data, not generic savings claims.
            </p>
          </FadeIn>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Cooling-water application context",
                desc: "A station-specific review of condenser, cooling-tower or exchanger conditions before dosing scope is agreed.",
                image: "/power-station-clean.webp",
                alt: "Wet-cooled power station used as cooling-water application context",
              },
              {
                title: "Mexel®432 consumable supply",
                desc: "Bulk emulsion supply with dosing rates, storage notes and SDS/TDS documentation for the site team.",
                image: "/dosing-skid.webp",
                alt: "Dosing skid and consumable supply arrangement",
              },
              {
                title: "Traceable dosing records",
                desc: "Logged dosing events that can be compared with TR, TTD, vacuum and chemistry indicators during review.",
                image: "/iot-dashboard.webp",
                alt: "IoT dashboard for traceable dosing and performance records",
              },
            ].map((item, index) => (
              <FadeIn key={item.title} delay={index * 100}>
                <div className="h-full overflow-hidden rounded-xl border border-slate-200 bg-slate-50 shadow-sm">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-sm font-semibold text-slate-900">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Mode of Action - The "Science" bit */}
      <section className="border-b bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14 lg:py-20">
          <FadeIn>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
              Mechanism of Action
            </h2>
            <p className="mt-4 text-slate-600 max-w-3xl">
              Mexel®432 is designed around <strong>surface interface activity</strong> rather than
              default bulk-water dosing. Site results still need to be verified against baseline data.

            </p>
          </FadeIn>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Dispersant Action",
                desc: "Helps reduce adhesion of suspended solids and biological matter on heat-transfer surfaces.",
                icon: Icons.Molecule,
              },
              {
                title: "Corrosion Inhibition",
                desc: "Forms a hydrophobic film intended to support corrosion-control objectives.",
                icon: Icons.Molecule,
              },
              {
                title: "Scale Control Review",
                desc: "Can be assessed as part of a scale-control program where site chemistry supports the approach.",
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
              targeting the surface interface while keeping dosing volume traceable for review.
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
                      logging all events for later review.
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
                      Can be assessed alongside existing treatment programs where the station
                      chemistry team requires compatibility review.
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
                      The preferred dosing point is reviewed during scoping. Online installation
                      or a short outage depends on site access and operating constraints.
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
            <FadeIn className="min-w-0">
              <h2 className="text-xl font-bold text-slate-900 mb-6">Physical Properties</h2>
              <div className="overflow-x-auto rounded-lg border border-slate-200">
                <table className="w-full divide-y divide-slate-200">
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
                        <td className="w-1/3 px-4 py-4 text-sm font-medium text-slate-900 bg-slate-50 sm:px-6">
                          {row.prop}
                        </td>
                        <td className="px-4 py-4 text-sm text-slate-600 font-mono sm:px-6">
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
                      Supporting environmental documents are available for technical review.
                      Site use must follow the latest SDS and local discharge requirements.
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
                      Toxicity and discharge implications must be checked against the latest
                      SDS, dosing plan, and site-specific discharge limits.
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
              Mexel®432 performance is reviewed using <strong>ASME PTC 12.2</strong> methodology
              where applicable. TTD, TR and back-pressure trends are compared against baseline
              data before any heat-rate or MW impact is discussed.
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
                <p className="text-2xl font-bold text-emerald-600 mb-2">Site-specific</p>
                <p className="text-sm text-slate-600">
                  Terminal Temperature Difference is reviewed against a baseline and matched operating conditions
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
                <p className="text-2xl font-bold text-blue-600 mb-2">Measured</p>
                <p className="text-sm text-slate-600">
                  Condenser back-pressure is assessed at matched load conditions where data quality allows
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
                <p className="text-2xl font-bold text-amber-600 mb-2">Derived</p>
                <p className="text-sm text-slate-600">
                  Heat-rate or MW impact is calculated from verified thermodynamic indicators
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
                  href="/knowledge-hub/engineering-playbook"
                  className="flex items-start gap-4 p-4 rounded-lg border border-slate-200 hover:border-emerald-300 hover:bg-emerald-50/50 transition-all group"
                >
                  <div className="flex-shrink-0">
                    <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 group-hover:text-emerald-700">Engineering Playbook</h4>
                    <p className="text-sm text-slate-600 mt-1">Structured, engineering-first guide covering TES fundamentals and deployment</p>
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
              How Mexel®432 Differs From Conventional Programs
            </h2>
            <p className="mt-4 text-slate-600 max-w-3xl">
              Mexel®432 is positioned as a surface-active, film-forming chemistry. Whether it
              replaces or complements an existing program depends on site chemistry and permits.
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
                    mexel: "Lower-volume pulsed dosing",
                    traditional: "Often continuous or frequent feed"
                  },
                  {
                    criteria: "Environmental Impact",
                    mexel: "Reviewed through SDS and environmental documentation",
                    traditional: "Reviewed through product-specific SDS and permits"
                  },
                  {
                    criteria: "Corrosion Protection",
                    mexel: "Film-forming chemistry",
                    traditional: "Program-specific"
                  },
                  {
                    criteria: "Scale Control Review",
                    mexel: "Assessed within the site chemistry program",
                    traditional: "Often managed by a dedicated anti-scalant"
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
              Always refer to the latest SDS for handling, storage and transport classification.
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
                a: "Mexel®432 can be assessed for seawater cooling applications. Site use must follow the relevant environmental approvals, discharge limits and SDS guidance."
              },
              {
                q: "Is it compatible with Admiralty Brass tubes?",
                a: "Compatibility should be confirmed against the latest TDS/SDS and the site materials list before dosing."
              },
              {
                q: "What if TTD doesn't improve after dosing?",
                a: "High TTD is not always fouling. Our verification protocol includes a baseline phase to rule out non-fouling issues (air ingress, passing valves, mechanical problems) before dosing begins."
              },
              {
                q: "Can I use it alongside my existing anti-scalant?",
                a: "Mexel®432 can be assessed as an alternative to parts of an existing program or integrated where compatibility allows. The station chemistry team should approve any change."
              },
              {
                q: "How quickly will I see results?",
                a: "Timing depends on baseline stability, fouling severity, dosing access and operating conditions. Results should be judged from matched site data."
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
