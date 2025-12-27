import Image from "next/image";
import IndustryCTA from "../../../components/IndustryCTA";
import MexSteamSection from "../../../components/MexSteamSection";
import RefinerySchematic from "../../../components/schematics/RefinerySchematic";
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
    <main id="main-content" className="min-h-screen bg-white">
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
                src="/industry-refinery.webp"
                alt="Refinery cooling infrastructure"
                fill
                className="rounded-xl object-cover shadow-lg"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
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
                <RefinerySchematic />
                <div className="relative h-48 w-full overflow-hidden rounded-lg">
                  <Image
                    src="/refinery.webp"
                    alt="Refinery and petrochemical plant"
                    fill
                    className="object-cover"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 50vw"
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

      <MexSteamSection
        industry="refineries"
        introText="Refineries and petrochemical plants typically operate large process steam boilers, heat recovery steam generators (HRSG) and integrated condensate systems. Process contamination, variable water quality and high heat loads make boiler-side corrosion and deposition common. MexSteam 100 provides film-forming corrosion protection and helps maintain heat-transfer surfaces in boiler and steam circuits operating under demanding conditions."
        applicationsTitle="Typical boiler applications in refineries and petrochemical plants"
        applications={[
          "Process steam boilers supplying reboilers, distillation columns and reaction vessels with high reliability requirements",
          "Heat recovery steam generators (HRSG) in combined-cycle power blocks or waste-heat recovery systems",
          "Condensate return networks showing low pH corrosion from carbonic acid or contamination from process leaks",
          "Feedwater circuits where water quality varies due to blowdown recycling or integration with process streams",
          "Steam distribution systems requiring protection against deposition and corrosion in superheater, reheater or economizer sections",
        ]}
      />

      <IndustryCTA
        industry="refinery"
        description="Discuss how TES can fit your existing water-treatment program."
      />
    </main>
  );
}
