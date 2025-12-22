import FadeIn from "../../../../components/FadeIn";
import PlaybookBreadcrumbs from "../../../../components/PlaybookBreadcrumbs";
import PlaybookNavigation from "../../../../components/PlaybookNavigation";
import ProtocolCTA from "../../../../components/ProtocolCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Safety & Compliance | Engineering Playbook",
  description:
    "Safety handling notes, ecotoxicology considerations, and compliance references for TES deployments.",
  openGraph: {
    title: "Safety & Compliance | Engineering Playbook",
    description:
      "Safety handling notes, ecotoxicology considerations, and compliance references for TES deployments.",
  },
};

export default function SafetyCompliancePage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="border-b bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-12 lg:py-20">
          <PlaybookBreadcrumbs />
          <p className="mt-6 text-xs font-semibold uppercase tracking-widest text-brand-500">
            Safety & Compliance
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-[2.5rem] lg:leading-[1.15]">
            Handling, ecotoxicology, and compliance references.
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-gray-600">
            TES chemistry is handled within standard industrial PPE and storage practices.
            Always follow the approved safety data and local discharge regulations.
          </p>
        </div>
      </section>

      <section className="border-b">
        <div className="mx-auto max-w-6xl px-4 py-12 lg:py-16">
          <FadeIn>
            <h2 className="text-2xl font-semibold tracking-tight text-gray-900">
              Field handling guidance
            </h2>
          </FadeIn>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <FadeIn delay={100}>
              <div className="rounded-lg border bg-white p-6 shadow-sm">
                <p className="text-sm text-gray-700 leading-relaxed">
                  • Non-oxidant chemistry with standard industrial PPE requirements.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={160}>
              <div className="rounded-lg border bg-white p-6 shadow-sm">
                <p className="text-sm text-gray-700 leading-relaxed">
                  • Store and handle in accordance with approved SDS guidance.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={220}>
              <div className="rounded-lg border bg-white p-6 shadow-sm">
                <p className="text-sm text-gray-700 leading-relaxed">
                  • Avoid mixing with strong oxidants without defined spacing.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={280}>
              <div className="rounded-lg border bg-white p-6 shadow-sm">
                <p className="text-sm text-gray-700 leading-relaxed">
                  • Verify local discharge limits before any operational change.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-4 py-12 lg:py-16">
          <ProtocolCTA
            title="SDS Compliance Pack"
            description="Request the SDS compliance pack and handling checklist for site teams."
            topic="SDS Compliance Pack"
            buttonLabel="Request SDS pack"
          />
          <PlaybookNavigation
            previous={{
              href: "/knowledge-hub/engineering-playbook/troubleshooting",
              label: "Troubleshooting",
            }}
            next={{
              href: "/knowledge-hub/engineering-playbook",
              label: "Playbook Index",
            }}
          />
        </div>
      </section>
    </main>
  );
}
