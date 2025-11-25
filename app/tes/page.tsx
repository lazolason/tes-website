import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TES System Overview",
  description:
    "Detailed overview of the Thermal Efficiency Solution (TES): Mexel®432 chemistry, IoT-enabled dosing, cooling-water performance data and the RT&D verification framework for wet-cooled units.",
  openGraph: {
    title: "TES System Overview | Mexel Energy Sustain",
    description:
      "How TES works: chemistry, dosing, data and verification for cooling-water efficiency.",
  },
};

export default function TesPage() {
  return (
    <article className="prose dark:prose-invert mx-auto py-10">
      <h1>Thermal Efficiency Solution (TES)</h1>
      <p>
        TES is Mexel Energy Sustain&apos;s focused approach to improving cooling-water and condenser performance on wet-cooled units. It combines Mexel®432 chemistry, IoT-enabled dosing, cooling-water data and a clear verification framework to reduce cold-end losses, stabilise operation and extend asset life.
      </p>
      <p>
        TES does not claim to optimise the whole plant — it concentrates on the cold end, where fouling, biofilm and corrosion quietly erode efficiency.
      </p>
      <h2>Chemistry: Mexel®432 in cooling-water service</h2>
      <p>
        Mexel®432 is a film-forming amine emulsion with a specialised surfactant system. It forms a protective molecular layer on wetted surfaces, detaches existing biofilm and sludge, limits new deposits and provides corrosion inhibition. In cooling-water systems this means cleaner condenser tube inlets, less scaling and corrosion, and more stable heat transfer — without relying on aggressive oxidising biocides.
      </p>
      <p>
        Within TES, Mexel®432 replaces or reduces multiple traditional chemicals (biocides, anti-scalants, dispersants and corrosion inhibitors) with a single, surface-active treatment focused on the cold end.
      </p>
      <h2>IoT &amp; Data</h2>
      <p>
        TES uses IoT-enabled dosing skids (based on the Nordic Thingy:91X platform) to create a traceable record of what was dosed, where and when. Level sensing and event logging mean dosing history is no longer guesswork.
      </p>
      <p>
        This dosing record is then linked to cooling-water and condenser metrics — such as TR, TTD and vacuum stability — to build a simple performance view. The goal is to make condenser fouling a visible, managed variable, not a hidden loss in the heat-rate.
      </p>
      <h2>Verification &amp; future carbon-credit potential</h2>
      <p>
        Verification follows the baseline → intervention → post-intervention structure in Eskom RT&amp;D&apos;s Tutuka Surfactant (FFA) Testing Protocol Rev08. The same logic can be adapted for other stations or industrial plants, and allows an independent referee such as the Water Research Commission (WRC) to review the results.
      </p>
      <p>
        Once cooling-water improvements are measured and repeatable, they can support future work on emissions-intensity and carbon-credit methodologies (e.g. through bodies such as Brundtland), but TES is presented first as a technical efficiency solution, not a carbon-trading scheme.
      </p>
    </article>
  )
}
