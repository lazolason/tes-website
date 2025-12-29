import Link from "next/link";
import Image from "next/image";
import FadeIn from "../../../../components/FadeIn";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Study: Kriel Power Station",
  description:
    "Mexel®432 application at Kriel Power Station: background, intervention approach, condenser performance data and lessons learned from this TES pilot.",
  openGraph: {
    title: "Kriel Power Station Case Study | Mexel Energy Sustain",
    description:
      "TES pilot at Kriel: improved condenser performance with Mexel®432 cooling-water treatment.",
  },
};

export default function KrielCaseStudyPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="border-b bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-16 lg:py-24">
          <Link
            href="/case-studies"
            className="inline-flex items-center text-xs font-semibold text-brand-500 hover:text-brand-900"
          >
            ← Back to case studies
          </Link>
          <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-brand-500">
            Case Study • Eskom Wet-Cooled Coal
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
            Kriel Power Station
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-gray-600">
            Mexel®432 was applied at Kriel Power Station as part of Eskom
            RT&D&apos;s evaluation of film-forming amine chemistry for
            cooling-water treatment. Station data showed improved condenser
            performance during the treatment period.
          </p>

          {/* Hero image */}
          <div className="relative mt-8 h-48 overflow-hidden rounded-xl shadow-lg lg:h-64">
            <Image
              src="/cooling-tower.webp"
              alt="Kriel Power Station cooling towers"
              fill
              className="object-cover"
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 75vw"
            />
          </div>

          {/* Key facts */}
          <div className="mt-8 grid gap-4 sm:grid-cols-4">
            <div className="rounded-lg border bg-white p-4 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                Station type
              </p>
              <p className="mt-1 text-sm font-semibold text-gray-900">
                Wet-cooled coal
              </p>
            </div>
            <div className="rounded-lg border bg-white p-4 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                Units treated
              </p>
              <p className="mt-1 text-sm font-semibold text-gray-900">
                Selected unit(s)
              </p>
            </div>
            <div className="rounded-lg border bg-white p-4 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                Chemistry
              </p>
              <p className="mt-1 text-sm font-semibold text-gray-900">
                Mexel®432
              </p>
            </div>
            <div className="rounded-lg border bg-white p-4 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                Status
              </p>
              <p className="mt-1 text-sm font-semibold text-gray-900">
                Completed
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Background */}
      <section className="border-b">
        <div className="mx-auto max-w-6xl px-4 py-14 lg:py-20">
          <FadeIn>
            <h2 className="text-2xl font-semibold tracking-tight text-gray-900">
              Background
            </h2>
          </FadeIn>
          <div className="mt-6 grid gap-8 md:grid-cols-2">
            <FadeIn delay={100}>
              <div>
                <h3 className="text-sm font-semibold text-gray-900">
                  Station context
                </h3>
                <p className="mt-2 text-sm text-gray-700 leading-relaxed">
                  Kriel Power Station is a wet-cooled coal-fired plant in
                  Mpumalanga. Like many Eskom stations of its generation, it uses
                  large volumes of cooling water and has historically faced
                  challenges with condenser fouling, biofouling and variable
                  raw-water quality.
                </p>
                <p className="mt-3 text-sm text-gray-700 leading-relaxed">
                  The condenser and cooling-water system are significant
                  contributors to overall station efficiency. Fouling at the cold
                  end — even modest fouling — can quietly erode heat rate and
                  increase coal consumption per net MWh.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={200}>
              <div>
                <h3 className="text-sm font-semibold text-gray-900">
                  Why Mexel®432 was considered
                </h3>
                <p className="mt-2 text-sm text-gray-700 leading-relaxed">
                  Traditional multi-chemical programs (biocides, anti-scalants,
                  dispersants, corrosion inhibitors) were in use but did not
                  always deliver stable condenser performance. Mexel®432 was
                  proposed as a single, film-forming treatment that could address
                  multiple fouling mechanisms at once.
                </p>
                <p className="mt-3 text-sm text-gray-700 leading-relaxed">
                  The evaluation was conducted through Eskom RT&D to ensure a
                  structured, protocol-based approach rather than an ad-hoc trial.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Intervention */}
      <section className="border-b bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-14 lg:py-20">
          <FadeIn>
            <h2 className="text-2xl font-semibold tracking-tight text-gray-900">
              Intervention approach
            </h2>
          </FadeIn>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <FadeIn delay={100}>
              <div className="rounded-lg border bg-white p-5 shadow-sm h-full">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand-500">
                  Phase 1
                </p>
                <h3 className="mt-2 text-sm font-semibold text-gray-900">
                  Baseline data collection
                </h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  Condenser performance data was collected before Mexel®432
                  treatment began. Key metrics included terminal temperature
                  difference (TTD), cooling-water temperature rise (TR), condenser
                  vacuum and relevant water chemistry parameters.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={200}>
              <div className="rounded-lg border bg-white p-5 shadow-sm h-full">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand-500">
                  Phase 2
                </p>
                <h3 className="mt-2 text-sm font-semibold text-gray-900">
                  Mexel®432 treatment
                </h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  Mexel®432 was dosed into the cooling-water system at agreed
                  concentrations. The film-forming chemistry was allowed to
                  establish on condenser tube surfaces and other wetted areas.
                  Dosing was monitored and adjusted as needed.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={300}>
              <div className="rounded-lg border bg-white p-5 shadow-sm h-full">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand-500">
                  Phase 3
                </p>
                <h3 className="mt-2 text-sm font-semibold text-gray-900">
                  Performance monitoring
                </h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  Condenser performance was monitored during treatment. The same
                  metrics collected at baseline were tracked to allow direct
                  comparison. Station operating conditions were noted to account
                  for load and ambient variations.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="border-b">
        <div className="mx-auto max-w-6xl px-4 py-14 lg:py-20">
          <FadeIn>
            <h2 className="text-2xl font-semibold tracking-tight text-gray-900">
              Observed results
            </h2>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed max-w-3xl">
              The following observations are based on station data collected
              during the Kriel evaluation. They are presented as indicative
              results, not as guaranteed outcomes for other stations or
              conditions.
            </p>
          </FadeIn>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <FadeIn delay={100}>
              <div className="rounded-lg border border-brand-100 bg-brand-50 p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand-500">
                  Condenser cleanliness
                </p>
                <p className="mt-2 text-lg font-bold text-gray-900">
                  Improved
                </p>
                <p className="mt-1 text-xs text-gray-600 leading-relaxed">
                  Visual and performance indicators showed cleaner tube surfaces
                  during treatment.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={150}>
              <div className="rounded-lg border border-brand-100 bg-brand-50 p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand-500">
                  TTD stability
                </p>
                <p className="mt-2 text-lg font-bold text-gray-900">
                  More stable
                </p>
                <p className="mt-1 text-xs text-gray-600 leading-relaxed">
                  Terminal temperature difference showed less variability during
                  treatment periods.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={200}>
              <div className="rounded-lg border border-brand-100 bg-brand-50 p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand-500">
                  Vacuum performance
                </p>
                <p className="mt-2 text-lg font-bold text-gray-900">
                  Maintained
                </p>
                <p className="mt-1 text-xs text-gray-600 leading-relaxed">
                  Condenser vacuum remained stable, consistent with improved tube
                  cleanliness.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={250}>
              <div className="rounded-lg border border-brand-100 bg-brand-50 p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand-500">
                  Biofouling
                </p>
                <p className="mt-2 text-lg font-bold text-gray-900">
                  Reduced
                </p>
                <p className="mt-1 text-xs text-gray-600 leading-relaxed">
                  Biofilm and organic deposits were visibly reduced at condenser
                  tube inlets.
                </p>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={300}>
            <div className="mt-8 rounded-lg border bg-amber-50 p-5">
              <h3 className="text-sm font-semibold text-amber-900">
                Important note on results
              </h3>
              <p className="mt-2 text-sm text-amber-800 leading-relaxed">
                These results are specific to the Kriel evaluation and the
                conditions at that time. Condenser performance depends on many
                factors including raw-water quality, load profile, ambient
                conditions and existing asset condition. TES pilots at other
                stations should establish their own baselines and measure against
                their own KPIs.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Lessons learned */}
      <section className="border-b bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-14 lg:py-20">
          <FadeIn>
            <h2 className="text-2xl font-semibold tracking-tight text-gray-900">
              Lessons learned
            </h2>
          </FadeIn>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <FadeIn delay={100}>
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-semibold text-gray-900">
                    Baseline data matters
                  </h3>
                  <p className="mt-1 text-sm text-gray-700 leading-relaxed">
                    Without clear baseline data, it is difficult to demonstrate
                    improvement. The RT&D protocol structure (baseline →
                    intervention → post-intervention) is essential for credible
                    evaluation.
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-900">
                    Film formation takes time
                  </h3>
                  <p className="mt-1 text-sm text-gray-700 leading-relaxed">
                    Mexel®432 works by establishing a protective film. This is not
                    instant — some patience is required before full effect is
                    observed. Rushing to judgement too early can miss the benefit.
                  </p>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={200}>
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-semibold text-gray-900">
                    Station conditions vary
                  </h3>
                  <p className="mt-1 text-sm text-gray-700 leading-relaxed">
                    What works at Kriel may perform differently at another station
                    with different water quality, load patterns or asset
                    condition. Each site needs its own assessment.
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-900">
                    TES is a system, not just a chemical
                  </h3>
                  <p className="mt-1 text-sm text-gray-700 leading-relaxed">
                    The Kriel experience informed the development of TES as a
                    complete system: Mexel®432 chemistry, IoT dosing, data view
                    and verification framework working together.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Next steps */}
      <section>
        <div className="mx-auto max-w-6xl px-4 py-14 lg:py-20">
          <FadeIn>
            <h2 className="text-2xl font-semibold tracking-tight text-gray-900">
              From Kriel to TES
            </h2>
            <p className="mt-3 text-sm text-gray-700 leading-relaxed max-w-3xl">
              The Kriel experience was one of the inputs that shaped TES as it
              exists today. The need for structured baselines, traceable dosing
              and independent verification became clear during this work.
            </p>
            <p className="mt-3 text-sm text-gray-700 leading-relaxed max-w-3xl">
              TES now incorporates IoT-enabled dosing (Thingy:91X), a cooling-water
              performance view and alignment with Eskom RT&D&apos;s Tutuka
              protocol — all designed to make future pilots more rigorous and
              their results more defensible.
            </p>
          </FadeIn>

          <FadeIn delay={100}>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-md bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2"
              >
                Discuss a TES pilot
              </Link>
              <Link
                href="/tes"
                className="inline-flex items-center text-sm font-semibold text-brand-500 hover:text-brand-900"
              >
                Learn more about TES →
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center text-sm font-semibold text-gray-600 hover:text-gray-900"
              >
                ← Back to case studies
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
