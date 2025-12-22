import FadeIn from "../../../../components/FadeIn";
import PlaybookBreadcrumbs from "../../../../components/PlaybookBreadcrumbs";
import PlaybookNavigation from "../../../../components/PlaybookNavigation";
import ProtocolCTA from "../../../../components/ProtocolCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Station Readiness & Limits | Engineering Playbook",
  description:
    "Readiness checklist, operating limits, and red flags before TES pilots or rollouts.",
  openGraph: {
    title: "Station Readiness & Limits | Engineering Playbook",
    description:
      "Readiness checklist, operating limits, and red flags before TES pilots or rollouts.",
  },
};

export default function StationReadinessPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="border-b bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-12 lg:py-20">
          <PlaybookBreadcrumbs />
          <p className="mt-6 text-xs font-semibold uppercase tracking-widest text-brand-500">
            Station Readiness & Limits
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-[2.5rem] lg:leading-[1.15]">
            Confirm readiness before any pilot or rollout.
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-gray-600">
            TES stabilises condenser performance when core operating conditions are
            consistent. It does not fix broken instrumentation or bypass maintenance.
          </p>
        </div>
      </section>

      <section className="border-b">
        <div className="mx-auto max-w-6xl px-4 py-12 lg:py-16">
          <FadeIn>
            <h2 className="text-2xl font-semibold tracking-tight text-gray-900">
              Readiness checklist
            </h2>
          </FadeIn>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <FadeIn delay={100}>
              <div className="rounded-lg border border-green-200 bg-green-50 p-6">
                <h3 className="text-lg font-semibold text-green-900">Must-have</h3>
                <ul className="mt-3 space-y-2 text-sm text-green-900 list-disc pl-5">
                  <li>Stable load envelope during baseline and intervention.</li>
                  <li>Working sensors: inlet/outlet temperatures and vacuum.</li>
                  <li>Stable make-up water chemistry and blowdown control.</li>
                  <li>Accessible dosing point with verified mixing.</li>
                  <li>Agreement on baseline period and reporting cadence.</li>
                </ul>
              </div>
            </FadeIn>
            <FadeIn delay={180}>
              <div className="rounded-lg border border-blue-200 bg-blue-50 p-6">
                <h3 className="text-lg font-semibold text-blue-900">Nice-to-have</h3>
                <ul className="mt-3 space-y-2 text-sm text-blue-900 list-disc pl-5">
                  <li>TTD monitoring and archived trend data.</li>
                  <li>Cooling tower fan performance logs.</li>
                  <li>Offline inspection history for tube condition.</li>
                  <li>Coal burn/net MWh data for context.</li>
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="border-b bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-12 lg:py-16">
          <FadeIn>
            <h2 className="text-2xl font-semibold tracking-tight text-gray-900">
              Operating limits and red flags
            </h2>
          </FadeIn>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <FadeIn delay={100}>
              <div className="rounded-lg border bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900">Load volatility</h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  Repeated load swings or cycling obscure fouling trends and undermine
                  verification.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={180}>
              <div className="rounded-lg border bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900">Water quality instability</h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  Large turbidity or COD changes will mask TES signals and make baseline
                  comparison unreliable.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={260}>
              <div className="rounded-lg border bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900">Mechanical constraints</h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  Blocked screens, poor cooling tower performance, or pump constraints can
                  dominate system behaviour.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={340}>
              <div className="rounded-lg border bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900">Instrumentation gaps</h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  Missing or unreliable sensors reduce auditability and risk false conclusions.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-4 py-12 lg:py-16">
          <ProtocolCTA
            title="Readiness Assessment"
            description="Request a readiness assessment checklist and pre-pilot review framework."
            topic="Readiness Assessment"
            buttonLabel="Request readiness review"
          />
          <PlaybookNavigation
            previous={{
              href: "/knowledge-hub/engineering-playbook/iot-dosing",
              label: "IoT Dosing (Overview)",
            }}
            next={{
              href: "/knowledge-hub/engineering-playbook/troubleshooting",
              label: "Troubleshooting",
            }}
          />
        </div>
      </section>
    </main>
  );
}
