import Image from "next/image";
import FadeIn from "../../../../components/FadeIn";
import CoolingSchematic from "../../../../components/CoolingSchematic";
import PlaybookBreadcrumbs from "../../../../components/PlaybookBreadcrumbs";
import PlaybookNavigation from "../../../../components/PlaybookNavigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fundamentals | Engineering Playbook",
  description:
    "TES fundamentals: fouling physics, film formation, and operational baselines that stabilise condenser performance.",
  openGraph: {
    title: "Fundamentals | Engineering Playbook",
    description:
      "Fouling physics, film formation, and operational baselines that stabilise condenser performance.",
  },
};

export default function FundamentalsPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="border-b bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-12 lg:py-20">
          <PlaybookBreadcrumbs />
          <p className="mt-6 text-xs font-semibold uppercase tracking-widest text-brand-500">
            Fundamentals
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-[2.5rem] lg:leading-[1.15]">
            Fouling physics and film formation.
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-gray-600">
            TES stabilises condenser performance by changing surface conditions and
            controlling fouling behaviour. It does not replace maintenance, and it
            requires baseline discipline to verify outcomes.
          </p>
        </div>
      </section>

      <section className="border-b">
        <div className="mx-auto max-w-6xl px-4 py-12 lg:py-16">
          <FadeIn>
            <h2 className="text-2xl font-semibold tracking-tight text-gray-900">
              Why fouling matters in wet-cooled systems
            </h2>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              Biofilm, mud, and suspended solids build a thermal barrier. The result is
              unstable heat transfer and noisy TR/TTD signals that obscure real performance
              trends. TES aims to stabilise that surface condition so changes become
              measurable.
            </p>
          </FadeIn>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <FadeIn delay={100}>
              <div className="rounded-lg border bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900">
                  Film formation mechanism
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-gray-700 list-disc pl-5">
                  <li>Forms a thin hydrophobic layer on metal and polymer surfaces.</li>
                  <li>Reduces adhesion of new biofilm and suspended solids.</li>
                  <li>Stabilises heat-transfer conditions when operating inputs remain steady.</li>
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={160}>
              <div className="rounded-lg border bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900">
                  Verification discipline
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-gray-700 list-disc pl-5">
                  <li>Baseline, intervention, and review phases must be defined.</li>
                  <li>Instrumentation and load stability are non-negotiable.</li>
                  <li>TES stabilises, but does not override mechanical limits.</li>
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
              Visual reference: surface condition shift
            </h2>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              These images illustrate the qualitative change in surface condition before
              and after stabilisation. Captions are intentionally conservative and do not
              include station identifiers or performance metrics.
            </p>
          </FadeIn>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <FadeIn delay={120}>
              <figure className="rounded-lg border bg-white p-4 shadow-sm">
                <div className="relative h-64 w-full overflow-hidden rounded-md">
                  <Image
                    src="/images/hero/before-fouled-tubes.jpg"
                    alt="Cooling tube surface with visible fouling"
                    fill
                    className="object-cover"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <figcaption className="mt-3 text-xs text-gray-500">
                  Pre-stabilisation condition with visible fouling accumulation.
                </figcaption>
              </figure>
            </FadeIn>
            <FadeIn delay={200}>
              <figure className="rounded-lg border bg-white p-4 shadow-sm">
                <div className="relative h-64 w-full overflow-hidden rounded-md">
                  <Image
                    src="/images/hero/after-stabilised-tubes.jpg"
                    alt="Cooling tube surface after stabilisation"
                    fill
                    className="object-cover"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <figcaption className="mt-3 text-xs text-gray-500">
                  Post-stabilisation condition with a clearer, more uniform surface.
                </figcaption>
              </figure>
            </FadeIn>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-4 py-12 lg:py-16">
          <FadeIn>
            <h2 className="text-2xl font-semibold tracking-tight text-gray-900">
              System context
            </h2>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              TES performance is tied to cooling-water circulation, tower behaviour, and
              condenser instrumentation. A system view keeps interpretation honest.
            </p>
          </FadeIn>
          <div className="mt-6">
            <CoolingSchematic />
          </div>
          <PlaybookNavigation
            previous={{
              href: "/knowledge-hub/engineering-playbook",
              label: "Playbook Index",
            }}
            next={{
              href: "/knowledge-hub/engineering-playbook/protocol",
              label: "Protocol (Overview)",
            }}
          />
        </div>
      </section>
    </main>
  );
}
