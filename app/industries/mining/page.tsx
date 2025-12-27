import Image from "next/image";
import IndustryCTA from "../../../components/IndustryCTA";
import MexSteamSection from "../../../components/MexSteamSection";
import MiningSchematic from "../../../components/schematics/MiningSchematic";
import FadeIn from "../../../components/FadeIn";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mining & Minerals | Industries",
  description:
    "TES and Mexel®432 for mining operations: cleaner heat exchangers, reduced downtime, better cooling performance under variable loads.",
  openGraph: {
    title: "Mining & Minerals Solutions | Mexel Energy Sustain",
    description:
      "Cooling-water treatment for mines, concentrators and minerals processing facilities.",
  },
};

export default function MiningPage() {
  return (
    <main id="main-content" className="min-h-screen bg-white">
      {/* Hero */}
      <section className="border-b border-slate-200/70 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-16 lg:py-24">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-emerald-700">
                Industries / Mining & Minerals
              </p>
              <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
                Mining and minerals processing
              </h1>
              <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-600">
                Mines and concentrators often run large open cooling circuits,
                with water quality influenced by process streams, tailings and
                recycled mine water. Fouling, corrosion and solids build-up are
                common, and interventions are normally reactive.
              </p>
            </div>
            <div className="relative h-64 lg:h-80">
              <Image
                src="/industry-mining.webp"
                alt="Mining operations cooling systems"
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
                <MiningSchematic />
                <div className="relative h-48 w-full overflow-hidden rounded-lg">
                  <Image
                    src="/mining-plant.webp"
                    alt="Mining and minerals processing plant"
                    fill
                    className="object-cover"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                <div>
                  <h2 className="text-xl font-semibold tracking-tight text-slate-900">
                    Common challenges
                  </h2>
                  <ul className="mt-3 space-y-2 text-sm text-slate-700">
                    <li>• High solids loading (ash, tailings, fines)</li>
                    <li>• Variable chemistry and temperature</li>
                    <li>• Exchangers and towers that foul faster than planned</li>
                    <li>• Interactions between process water and cooling water</li>
                  </ul>
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                    Mexel®432&apos;s film-forming and dispersant properties keep surfaces cleaner 
                    and solids mobile, improving cooling performance and reducing unscheduled cleaning.
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={150}>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  Benefits in mining environments
                </h3>
                <ul className="mt-4 space-y-3 text-sm text-slate-700">
                  <li>• Cleaner heat exchangers and cooling-tower internals</li>
                  <li>• Reduced downtime for mechanical cleaning or acid-washing</li>
                  <li>• Better separation and clarification behaviour in some circuits</li>
                  <li>• More stable cooling performance under variable loads</li>
                </ul>
                <p className="mt-5 text-sm text-slate-600 leading-relaxed">
                  TES can be applied to critical cooling loops at mines in the same
                  structured way as at power stations: defined baselines, clear
                  intervention periods and measurable outcomes.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <MexSteamSection
        industry="mining"
        introText="Mining operations typically have boilers for process steam, heating or power generation. Mine-water quality (high TDS, variable chemistry) makes boiler feedwater treatment challenging. MexSteam 100 provides film-forming corrosion protection and helps maintain heat-transfer surfaces in boiler and steam circuits operating with difficult water."
        applicationsTitle="Typical boiler applications in mining"
        applications={[
          "Mine-water boilers where high TDS or aggressive chemistry causes scaling and corrosion in boiler tubes",
          "Process steam generators for ore processing, smelting or on-site power generation",
          "Condensate return systems showing low pH corrosion from carbonic acid",
          "Feedwater circuits where polishing or demineralisation is partial or intermittent",
          "Heat recovery systems integrated with process equipment requiring steam-side protection",
        ]}
      />

      <IndustryCTA industry="mining" />
    </main>
  );
}
