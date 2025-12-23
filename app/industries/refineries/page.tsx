import Link from "next/link";
import Image from "next/image";
import FadeIn from "../../../components/FadeIn";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refineries & Petrochemical | Industries",
  description:
    "TES and Mexel®432 for refineries and petrochemical plants: improved exchanger cleanliness, corrosion protection, and stable cooling performance.",
  openGraph: {
    title: "Refineries & Petrochemical Solutions | Mexel Energy Sustain",
    description:
      "Cooling-water treatment for refineries, petrochemical plants and steel mills.",
  },
};

export default function RefineriesPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="border-b border-slate-200/70 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-16 lg:py-24">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-emerald-700">
                Industries / Refineries & Petrochemical
              </p>
              <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
                Refineries, petrochemical and metals
              </h1>
              <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-600">
                Refineries, petrochemical plants and steel mills run networks of
                critical heat exchangers and cooling-water loops. Fouling or
                corrosion here quickly becomes a production and safety issue, not
                just an efficiency problem.
              </p>
            </div>
            <div className="relative h-64 lg:h-80">
              <Image
                src="/industry-refinery.png"
                alt="Refinery cooling infrastructure"
                fill
                className="rounded-xl object-cover shadow-lg"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="border-b border-slate-200/70">
        <div className="mx-auto max-w-6xl px-4 py-14 lg:py-20">
          <div className="grid gap-8 md:grid-cols-2">
            <FadeIn>
              <div className="flex flex-col gap-4">
                <div className="relative h-48 w-full overflow-hidden rounded-lg">
                  <Image
                    src="/refinery.png"
                    alt="Refinery and petrochemical plant"
                    fill
                    className="object-cover"
                  />
                </div>

                <div>
                  <h2 className="text-xl font-semibold tracking-tight text-slate-900">
                    Critical challenges
                  </h2>
                  <ul className="mt-3 space-y-2 text-sm text-slate-700">
                    <li>• Exchanger fouling that drives higher energy spend or throughput limits</li>
                    <li>• Corrosion risk on carbon steel and mixed-metallurgy systems</li>
                    <li>• Biofouling in cooling towers and distribution headers</li>
                    <li>• Tight operating windows on temperature and reliability</li>
                  </ul>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={150}>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  How Mexel®432 and TES help
                </h3>
                <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                  In these environments, Mexel®432 is used to improve surface cleanliness
                  and corrosion protection in the cooling-water system, while TES
                  provides a structured way to link those interventions to performance
                  data. Our focus remains on cooling-water, not on process-side chemistry.
                </p>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  Where required, we work with site engineering and existing water-treatment
                  partners to integrate Mexel®432 into established programs without
                  disrupting critical production.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* MexSteam 100 - Boiler-side complement */}
      <section id="mexsteam" className="border-b border-slate-200/70 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-12 lg:py-16">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-emerald-700">
              STRATEGIC COMPLEMENT
            </p>
            <h2 className="mt-3 text-xl font-semibold text-slate-900">
              MexSteam 100 for boiler-side efficiency
            </h2>
            <p className="mt-3 text-sm text-slate-700 leading-relaxed">
              Refineries and petrochemical plants typically operate large process
              steam boilers, heat recovery steam generators (HRSG) and integrated
              condensate systems. Process contamination, variable water quality and
              high heat loads make boiler-side corrosion and deposition common.
              MexSteam 100 provides film-forming corrosion protection and helps
              maintain heat-transfer surfaces in boiler and steam circuits operating
              under demanding conditions.
            </p>

            {/* Industry-specific boiler applications */}
            <div className="mt-5">
              <h3 className="text-sm font-semibold text-slate-900">
                Typical boiler applications in refineries and petrochemical plants
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                <li>
                  • Process steam boilers supplying reboilers, distillation columns
                  and reaction vessels with high reliability requirements
                </li>
                <li>
                  • Heat recovery steam generators (HRSG) in combined-cycle power
                  blocks or waste-heat recovery systems
                </li>
                <li>
                  • Condensate return networks showing low pH corrosion from
                  carbonic acid or contamination from process leaks
                </li>
                <li>
                  • Feedwater circuits where water quality varies due to blowdown
                  recycling or integration with process streams
                </li>
                <li>
                  • Steam distribution systems requiring protection against
                  deposition and corrosion in superheater, reheater or economizer sections
                </li>
              </ul>
            </div>

            <div className="mt-5 flex flex-wrap gap-3 text-xs">
              <span className="rounded-full bg-slate-100 px-3 py-1 font-semibold text-slate-800">
                Boiler / steam-side
              </span>
              <span className="rounded-full bg-slate-100 px-3 py-1 font-semibold text-slate-800">
                Outside TES verification
              </span>
            </div>

            <div className="mt-5 text-xs">
              <Link
                href="/products#mexsteam"
                className="inline-flex items-center font-semibold text-emerald-600 hover:text-emerald-800"
              >
                Learn more about MexSteam 100 →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="mx-auto max-w-6xl px-4 py-14 lg:py-20">
          <div className="flex flex-col gap-4 rounded-lg border border-slate-200 bg-slate-50 p-6 shadow-sm md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-sm font-semibold text-slate-900">
                Integrate TES into your refinery operations
              </h2>
              <p className="mt-2 text-xs text-slate-700 leading-relaxed">
                Discuss how TES can fit your existing water-treatment program.
              </p>
            </div>
            <div className="flex flex-col gap-2 text-xs">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-emerald-600 px-5 py-2.5 font-semibold text-white shadow-sm hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:ring-offset-2"
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
