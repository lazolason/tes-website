import Link from "next/link";
import FadeIn from "../../../components/FadeIn";
import PlaybookBreadcrumbs from "../../../components/PlaybookBreadcrumbs";
import PlaybookNavigation from "../../../components/PlaybookNavigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Engineering Playbook | TES",
  description:
    "Engineering playbook for TES deployment: fundamentals, protocols, dosing overview, readiness limits, troubleshooting, and compliance references.",
  openGraph: {
    title: "Engineering Playbook | Mexel Energy Sustain",
    description:
      "Technical playbook for TES: fundamentals, protocols, dosing overview, readiness limits, troubleshooting, and compliance references.",
  },
};

const sections = [
  {
    title: "Fundamentals",
    href: "/knowledge-hub/engineering-playbook/fundamentals",
    status: "Public",
    description:
      "Fouling physics, film formation, and how TES stabilises condenser performance without replacing maintenance.",
  },
  {
    title: "Protocol (Overview)",
    href: "/knowledge-hub/engineering-playbook/protocol",
    status: "Overview",
    description:
      "Verification methodology aligned with Eskom RT&D Rev08. Full protocol pack available on request.",
  },
  {
    title: "IoT Dosing (Overview)",
    href: "/knowledge-hub/engineering-playbook/iot-dosing",
    status: "Overview",
    description:
      "Fail-safe dosing architecture, telemetry, and governance controls. Full dosing pack available on request.",
  },
  {
    title: "Station Readiness & Limits",
    href: "/knowledge-hub/engineering-playbook/station-readiness",
    status: "Public",
    description:
      "Readiness checklist, limits, and red flags before any pilot or rollout.",
  },
  {
    title: "Troubleshooting",
    href: "/knowledge-hub/engineering-playbook/troubleshooting",
    status: "Public",
    description:
      "Field scenarios, diagnostic signals, and escalation guidance for flat or noisy data.",
  },
  {
    title: "Safety & Compliance",
    href: "/knowledge-hub/engineering-playbook/safety-compliance",
    status: "Public",
    description:
      "Ecotoxicology, handling notes, and compliance references for field teams.",
  },
];

export default function EngineeringPlaybookIndexPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="border-b bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-12 lg:py-20">
          <PlaybookBreadcrumbs />
          <p className="mt-6 text-xs font-semibold uppercase tracking-widest text-brand-500">
            Engineering Playbook
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
            TES Engineering Playbook
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-gray-600">
            A structured guide for engineers and station teams. Focused on physics,
            operational limits, and verification discipline — no hype, no shortcuts.
          </p>
        </div>
      </section>

      <section className="border-b">
        <div className="mx-auto max-w-6xl px-4 py-12 lg:py-16">
          <FadeIn>
            <div className="rounded-lg border bg-white p-6 shadow-sm">
              <p className="text-sm text-gray-600">
                <span className="font-semibold text-gray-900">Status legend:</span> Public
                sections are fully readable. Overview sections provide a summary and point to
                request the full pack.
              </p>
            </div>
          </FadeIn>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {sections.map((section, index) => (
              <FadeIn key={section.title} delay={index * 80}>
                <Link
                  href={section.href}
                  className="group flex h-full flex-col justify-between rounded-lg border bg-white p-6 shadow-sm transition-all hover:border-brand-500 hover:shadow-md"
                >
                  <div>
                    <div className="flex items-center gap-3">
                      <h2 className="text-lg font-semibold text-gray-900 group-hover:text-brand-500">
                        {section.title}
                      </h2>
                      <span className="rounded-full bg-gray-100 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-gray-600">
                        {section.status}
                      </span>
                    </div>
                    <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                      {section.description}
                    </p>
                  </div>
                  <span className="mt-6 text-sm font-semibold text-brand-500">
                    Open section →
                  </span>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-4 py-12 lg:py-16">
          <FadeIn>
            <div className="rounded-lg border bg-gray-50 p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-gray-900">
                Start with fundamentals before any intervention.
              </h2>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                TES stabilises condenser performance when the system is ready. It does not
                replace maintenance, instrumentation, or operational discipline.
              </p>
            </div>
          </FadeIn>
          <PlaybookNavigation
            next={{
              href: "/knowledge-hub/engineering-playbook/fundamentals",
              label: "Fundamentals",
            }}
          />
        </div>
      </section>
    </main>
  );
}
