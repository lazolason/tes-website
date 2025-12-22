import FadeIn from "../../../../components/FadeIn";
import PlaybookBreadcrumbs from "../../../../components/PlaybookBreadcrumbs";
import PlaybookNavigation from "../../../../components/PlaybookNavigation";
import ProcessSteps from "../../../../components/ProcessSteps";
import ProtocolCTA from "../../../../components/ProtocolCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Protocol Overview | Engineering Playbook",
  description:
    "Overview of TES verification methodology aligned with Eskom RT&D Rev08. Full protocol pack available on request.",
  openGraph: {
    title: "Protocol Overview | Engineering Playbook",
    description:
      "Overview of TES verification methodology aligned with Eskom RT&D Rev08. Full protocol pack available on request.",
  },
};

export default function ProtocolOverviewPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="border-b bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-12 lg:py-20">
          <PlaybookBreadcrumbs />
          <p className="mt-6 text-xs font-semibold uppercase tracking-widest text-brand-500">
            Protocol Overview
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-[2.5rem] lg:leading-[1.15]">
            Verification workflow (aligned with Eskom RT&D Rev08).
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-gray-600">
            This is an overview only. The full protocol pack includes detailed measurement
            requirements, baseline durations, and reporting templates.
          </p>
        </div>
      </section>

      <section className="border-b">
        <div className="mx-auto max-w-6xl px-4 py-12 lg:py-16">
          <FadeIn>
            <h2 className="text-2xl font-semibold tracking-tight text-gray-900">
              Baseline → Intervention → Review
            </h2>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              TES verification relies on disciplined sequencing and stable operating
              conditions. The protocol formalises what must be measured and how results are
              interpreted.
            </p>
          </FadeIn>
          <div className="mt-8">
            <ProcessSteps variant="tes-system" />
          </div>
        </div>
      </section>

      <section className="border-b bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-12 lg:py-16">
          <FadeIn>
            <h2 className="text-2xl font-semibold tracking-tight text-gray-900">
              Minimum verification conditions
            </h2>
          </FadeIn>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <FadeIn delay={100}>
              <div className="rounded-lg border bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900">Stable load</h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  Load variability should be constrained during baseline and intervention to
                  avoid masking fouling effects.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={180}>
              <div className="rounded-lg border bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900">Instrumented signals</h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  TR, TTD, condenser vacuum, and cooling-water inlet/outlet temperatures must
                  be reliable and logged.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={260}>
              <div className="rounded-lg border bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900">Data governance</h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  Dosing logs, operational constraints, and maintenance events must be
                  recorded for audit-ready review.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={340}>
              <div className="rounded-lg border bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900">Independent review</h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  Independent engineering review is recommended for disputed outcomes or
                  high-stakes decisions.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-4 py-12 lg:py-16">
          <ProtocolCTA
            title="Protocol Pack"
            description="Request the full RT&D-aligned protocol pack, including templates, data requirements, and reporting guidance."
            topic="Protocol Pack"
            buttonLabel="Request protocol pack"
          />
          <PlaybookNavigation
            previous={{
              href: "/knowledge-hub/engineering-playbook/fundamentals",
              label: "Fundamentals",
            }}
            next={{
              href: "/knowledge-hub/engineering-playbook/iot-dosing",
              label: "IoT Dosing (Overview)",
            }}
          />
        </div>
      </section>
    </main>
  );
}
