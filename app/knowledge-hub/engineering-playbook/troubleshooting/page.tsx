import FadeIn from "../../../../components/FadeIn";
import PlaybookBreadcrumbs from "../../../../components/PlaybookBreadcrumbs";
import PlaybookNavigation from "../../../../components/PlaybookNavigation";
import ProtocolCTA from "../../../../components/ProtocolCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Troubleshooting | Engineering Playbook",
  description:
    "Field troubleshooting guide for flat or noisy data, including diagnostic signals and corrective actions.",
  openGraph: {
    title: "Troubleshooting | Engineering Playbook",
    description:
      "Field troubleshooting guide for flat or noisy data, including diagnostic signals and corrective actions.",
  },
};

export default function TroubleshootingPage() {
  return (
    <main id="main-content" className="min-h-screen bg-white">
      <section className="border-b bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-12 lg:py-20">
          <PlaybookBreadcrumbs />
          <p className="mt-6 text-xs font-semibold uppercase tracking-widest text-brand-500">
            Troubleshooting
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-[2.5rem] lg:leading-[1.15]">
            Diagnose flat or noisy signals early.
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-gray-600">
            TES stabilises condenser performance, but field conditions can obscure the
            signal. These scenarios help isolate system constraints vs. dosing behaviour.
          </p>
        </div>
      </section>

      <section className="border-b">
        <div className="mx-auto max-w-6xl px-4 py-12 lg:py-16">
          <FadeIn>
            <h2 className="text-2xl font-semibold tracking-tight text-gray-900">
              Common field scenarios
            </h2>
          </FadeIn>
          <div className="mt-6 space-y-6">
            <FadeIn delay={100}>
              <div className="rounded-lg border bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900">
                  TR shows no improvement during intervention
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-gray-700 list-disc pl-5">
                  <li>Baseline unstable due to load swings or tower fan changes.</li>
                  <li>Underdosing or incorrect dosing point causing poor mixing.</li>
                  <li>High suspended solids overwhelming hydraulic capacity.</li>
                </ul>
                <p className="mt-3 text-sm text-gray-600">
                  Corrective action: confirm load stability, verify dosing calibration, and
                  inspect CW screens for blockages.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={180}>
              <div className="rounded-lg border bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900">
                  TTD unstable despite dosing
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-gray-700 list-disc pl-5">
                  <li>Vacuum excursions unrelated to fouling.</li>
                  <li>Air ingress in condenser or cooling tower performance shifts.</li>
                  <li>Make-up water chemistry spikes (turbidity/COD).</li>
                </ul>
                <p className="mt-3 text-sm text-gray-600">
                  Corrective action: correlate TTD with TR trends and verify auxiliary systems
                  before adjusting dosing.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={260}>
              <div className="rounded-lg border bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900">
                  Sudden dirt mobilisation
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-gray-700 list-disc pl-5">
                  <li>Sharp TR drop followed by a brief rise.</li>
                  <li>Visible solids or temporary cloudiness at discharge.</li>
                </ul>
                <p className="mt-3 text-sm text-gray-600">
                  Corrective action: maintain dosing, monitor filters/screens, and log the
                  event as expected mobilisation if confirmed.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-4 py-12 lg:py-16">
          <ProtocolCTA
            title="Data Snapshot Review"
            description="Request a data snapshot review to validate signals before adjusting dosing or maintenance plans."
            topic="Data Snapshot Review"
            buttonLabel="Request data review"
          />
          <PlaybookNavigation
            previous={{
              href: "/knowledge-hub/engineering-playbook/station-readiness",
              label: "Station Readiness & Limits",
            }}
            next={{
              href: "/knowledge-hub/engineering-playbook/safety-compliance",
              label: "Safety & Compliance",
            }}
          />
        </div>
      </section>
    </main>
  );
}
