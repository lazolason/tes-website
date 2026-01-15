import Link from "next/link";
import Image from "next/image";
import FadeIn from "../../components/FadeIn";
import SystemHeader from "../../components/SystemHeader";
import Tooltip from "../../components/Tooltip";
import Button from "../../components/ui/Button";
import type { Metadata } from "next";

// INLINE ICONS (Robust & Technical)
const Icons = {
  Biofouling: (props: any) => (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
    </svg>
  ),
  Corrosion: (props: any) => (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
    </svg>
  ),
  Scaling: (props: any) => (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
    </svg>
  ),
  Download: (props: any) => (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
    </svg>
  )
};

export const metadata: Metadata = {
  title: "Products | Mexel®432 & MexSteam 100",
  description:
    "Product catalog: Mexel®432 (Cooling Water Emulsion) and MexSteam 100 (Boiler Film-Forming Amine). Technical specifications for power and heavy industry.",
  openGraph: {
    title: "Product Catalog | Mexel Energy Sustain",
    description:
      "Filming amine commodities for cooling-water and steam generation systems.",
  },
};

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-white">
      <SystemHeader
        tag="PRODUCT CATALOG"
        title="Commodity Chemistry Solutions."
        description="We supply two core proprietary emulsions: Mexel®432 for cooling-water circuits (condenser protection) and MexSteam 100 for high-pressure boiler systems. Both technologies utilize film-forming amine mechanisms to isolate metal surfaces from corrosive fluids."
        continuity="Available in IBCs (1000L) or Bulk Supply."
        currentLabel="Catalog"
      />

      {/* Mexel 432 – Primary Product */}
      <section className="border-b">
        <div className="mx-auto max-w-6xl px-4 py-14 lg:py-20">
          <FadeIn>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
              1. Mexel®432 (Cooling Water)
            </h2>
            <p className="mt-3 max-w-3xl text-base text-slate-600">
              The core consumable of the TES system. A filming polyamine emulsion designed to maintain condenser vacuum and cleanliness.
            </p>
          </FadeIn>

          <div className="mt-10 flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
            {/* Left: Description */}
            <div className="max-w-xl">
              <h3 className="text-lg font-bold text-slate-900">
                Technical Profile
              </h3>
              <p className="mt-3 text-sm text-slate-700 leading-relaxed">
                Mexel®432 is a non-oxidant, film-forming surfactant. Unlike bulk water treatments that attempt to chemically alter the entire water volume, Mexel®432 operates at the <strong>surface interface</strong>.
              </p>
              <p className="mt-3 text-sm text-slate-700 leading-relaxed">
                It migrates to metal surfaces (condenser tubes, plates) to form a mono-molecular barrier. This barrier prevents the adhesion of biological slime (biofouling), inhibits oxygen contact (corrosion), and disrupts crystal growth (scaling).
              </p>

              <div className="mt-6 flex flex-wrap gap-2 text-xs">
                <span className="rounded bg-emerald-50 px-2 py-1 font-semibold text-emerald-800 border border-emerald-100">
                  Cooling-Water Surfactant
                </span>
                <span className="rounded bg-slate-100 px-2 py-1 font-semibold text-slate-700 border border-slate-200">
                  Filming Amine (FFA)
                </span>
                <span className="rounded bg-slate-100 px-2 py-1 font-semibold text-slate-700 border border-slate-200">
                  Biodegradable
                </span>
              </div>

              <div className="mt-8">
                <Button href="/mexel432" variant="outline" className="w-full sm:w-auto">
                  View Technical Data Sheet
                </Button>
              </div>
            </div>

            {/* Right: Feature Grid */}
            <div className="max-w-md w-full">
              <div className="grid gap-4">
                {[
                  {
                    icon: <Icons.Biofouling className="w-5 h-5" />,
                    title: "Biofouling Control",
                    description: "Disrupts biofilm attachment mechanism, causing slime layers to detach from tubes.",
                  },
                  {
                    icon: <Icons.Corrosion className="w-5 h-5" />,
                    title: "Corrosion Inhibition",
                    description: "Isolates carbon steel/admiralty brass from dissolved oxygen and chlorides.",
                  },
                  {
                    icon: <Icons.Scaling className="w-5 h-5" />,
                    title: "Scale Prevention",
                    description: "Distorts crystal lattice formation, preventing hard calcite/silica deposits.",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 rounded-lg border border-slate-200 bg-white p-4 shadow-sm"
                  >
                    <div className="flex-shrink-0 rounded-lg bg-emerald-50 p-2 text-emerald-700">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">
                        {item.title}
                      </h4>
                      <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MexSteam 100 – Boiler Product */}
      <section id="mexsteam" className="border-b bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14 lg:py-20">
          <FadeIn>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
              2. MexSteam 100 (Boiler System)
            </h2>
            <p className="mt-3 max-w-3xl text-base text-slate-600">
              High-temperature film-forming amine for boiler feedwater, condensate return, and steam circuits.
            </p>
          </FadeIn>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-slate-100 rounded-lg">
                  <Icons.Corrosion className="w-6 h-6 text-slate-700" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Application Scope</h3>
              </div>
              <p className="text-sm text-slate-700 leading-relaxed mb-4">
                MexSteam 100 is designed for high-pressure environments where traditional treatments struggle. It provides comprehensive protection across the steam cycle:
              </p>
              <ul className="space-y-2 text-xs text-slate-600">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
                  <strong>Feedwater:</strong> Protects pumps and heaters from oxygen pitting.
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
                  <strong>Boiler Internal:</strong> Prevents magnetite layer disruption.
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
                  <strong>Condensate:</strong> Neutralizes carbonic acid in return lines.
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-slate-100 rounded-lg">
                  <Icons.Scaling className="w-6 h-6 text-slate-700" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Strategic Fit</h3>
              </div>
              <p className="text-sm text-slate-700 leading-relaxed mb-4">
                While Mexel®432 handles the "Cold End" (Cooling Water), MexSteam 100 handles the "Hot End" (Steam Generation).
              </p>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
                <p className="text-xs text-amber-900 font-medium">
                  <strong>Verification Note:</strong> MexSteam 100 is supplied as a standalone chemical commodity. It falls outside the specific TES Vacuum Recovery verification protocols used for cooling water.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA - Procurement Focus */}
      <section className="bg-slate-900 py-16">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Procurement & Supply</h2>
          <p className="text-slate-400 mb-10 max-w-2xl mx-auto">
            We maintain strategic stock levels of both emulsions to ensure uninterrupted site operations.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            {/* Primary CTA */}
            <Link
              href="/contact"
              className="flex items-center gap-2 rounded-lg bg-emerald-600 px-6 py-3 font-semibold text-white hover:bg-emerald-500 transition-all border border-transparent"
            >
              <Icons.Download className="w-5 h-5" />
              Request Price List
            </Link>

            {/* WhatsApp Safety Net */}
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
