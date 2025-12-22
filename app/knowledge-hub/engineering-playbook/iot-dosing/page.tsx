import FadeIn from "../../../../components/FadeIn";
import PlaybookBreadcrumbs from "../../../../components/PlaybookBreadcrumbs";
import PlaybookNavigation from "../../../../components/PlaybookNavigation";
import ProtocolCTA from "../../../../components/ProtocolCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IoT Dosing Overview | Engineering Playbook",
  description:
    "Overview of TES dosing architecture, telemetry, and fail-safe controls. Full dosing pack available on request.",
  openGraph: {
    title: "IoT Dosing Overview | Engineering Playbook",
    description:
      "Overview of TES dosing architecture, telemetry, and fail-safe controls. Full dosing pack available on request.",
  },
};

export default function IoTDosingOverviewPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="border-b bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-12 lg:py-20">
          <PlaybookBreadcrumbs />
          <p className="mt-6 text-xs font-semibold uppercase tracking-widest text-brand-500">
            IoT Dosing Overview
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-[2.5rem] lg:leading-[1.15]">
            Fail-safe dosing with traceable telemetry.
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-gray-600">
            This overview describes the TES dosing architecture. It highlights how dosing
            is controlled, logged, and safeguarded without claiming performance outcomes.
          </p>
        </div>
      </section>

      <section className="border-b">
        <div className="mx-auto max-w-6xl px-4 py-12 lg:py-16">
          <FadeIn>
            <h2 className="text-2xl font-semibold tracking-tight text-gray-900">
              Architecture overview
            </h2>
          </FadeIn>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <FadeIn delay={100}>
              <div className="rounded-lg border bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900">Dosing governance</h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  Dosing schedules are pre-defined, logged, and locked to avoid manual drift.
                  Any changes require documented approval.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={180}>
              <div className="rounded-lg border bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900">Telemetry & audit</h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  Every dosing event is time-stamped and visible in the performance view,
                  enabling independent audit and data reconciliation.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={260}>
              <div className="rounded-lg border bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900">Fail-safe design</h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  Alarms, tank-level verification, and pump health checks prevent silent
                  failures. The system flags dosing anomalies early.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={340}>
              <div className="rounded-lg border bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900">Data custody</h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  Operators retain data ownership. TES supports exportable logs for station
                  archives and RT&D review.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-4 py-12 lg:py-16">
          <ProtocolCTA
            title="IoT Dosing Pack"
            description="Request the detailed dosing architecture pack, including fail-safe logic, telemetry definitions, and governance steps."
            topic="IoT Dosing"
            buttonLabel="Request dosing pack"
          />
          <PlaybookNavigation
            previous={{
              href: "/knowledge-hub/engineering-playbook/protocol",
              label: "Protocol (Overview)",
            }}
            next={{
              href: "/knowledge-hub/engineering-playbook/station-readiness",
              label: "Station Readiness & Limits",
            }}
          />
        </div>
      </section>
    </main>
  );
}
