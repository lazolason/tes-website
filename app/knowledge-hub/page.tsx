import { Metadata } from 'next';
import Link from 'next/link';
import FadeIn from '../../components/FadeIn';

export const metadata: Metadata = {
  title: 'Knowledge Hub | Mexel Energy Sustain',
  description: 'TES Knowledge Base: methodology, engineering FAQ, evidence library, and advanced technical guidance for wet-cooled power stations and industrial cooling systems.',
  openGraph: {
    title: 'Knowledge Hub | Mexel Energy Sustain',
    description: 'Central reference for engineers evaluating TES: methodology, FAQ, case studies and advanced technical guidance.',
  },
};

// Icons for quick navigation
const Icons = {
  Methodology: (props: any) => (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
    </svg>
  ),
  FAQ: (props: any) => (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
    </svg>
  ),
  Evidence: (props: any) => (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
    </svg>
  ),
  Advanced: (props: any) => (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
};

// Reusable Checkmark Icon Component
const CheckIcon = ({ className = "h-4 w-4" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
  </svg>
);

export default function KnowledgeHubPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="border-b bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-16 lg:py-24">
          <p className="text-xs font-semibold uppercase tracking-widest text-emerald-600">
            Knowledge Hub
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
            TES Knowledge Base
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-600">
            A central reference for engineers, chemistry teams, operations staff, and station
            leadership evaluating the Thermal Efficiency Solution (TES) for wet-cooled units.
            Everything you need to understand, deploy, and verify TES performance.
          </p>
        </div>
      </section>

      {/* Featured Playbook */}
      <section className="border-b bg-gradient-slate">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <FadeIn>
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div className="flex-1">
                  <p className="text-xs font-semibold uppercase tracking-widest text-emerald-600">
                    New
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900">
                    TES Engineering Playbook
                  </h2>
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                    A structured, engineering-first guide covering fundamentals, readiness,
                    troubleshooting, and compliance. Built for audit-ready evaluation.
                  </p>
                </div>
                <Link
                  href="/knowledge-hub/engineering-playbook"
                  className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-emerald-700 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:ring-offset-2"
                >
                  Open playbook
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="border-b">
        <div className="mx-auto max-w-6xl px-4 py-8">
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            {[
              { href: "#methodology", label: "Methodology", icon: Icons.Methodology },
              { href: "#faq", label: "Engineer FAQ", icon: Icons.FAQ },
              { href: "#evidence", label: "Evidence Library", icon: Icons.Evidence },
              { href: "#advanced", label: "Advanced Sections", icon: Icons.Advanced },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group flex flex-col items-center gap-3 rounded-xl border border-slate-200 bg-white p-5 text-center transition-all duration-200 hover:border-emerald-300 hover:shadow-lg hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 text-emerald-700 transition-all duration-200 group-hover:bg-emerald-600 group-hover:text-white group-hover:scale-110">
                  <item.icon className="h-6 w-6" />
                </div>
                <div className="text-sm font-semibold text-slate-900 group-hover:text-emerald-700 transition-colors">
                  {item.label}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* A. TES Methodology */}
      <section id="methodology" className="border-b bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14 lg:py-20">
          <FadeIn>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
              A. TES Methodology
            </h2>
            <p className="mt-3 text-base text-slate-700 leading-relaxed">
              <strong>Baseline → Intervention → Review.</strong> Every TES deployment follows a strict,
              repeatable, engineering-centred process aligned with Eskom RT&D protocols.
            </p>
          </FadeIn>

          <div className="mt-10 space-y-8">
            {/* Phase 1: Baseline */}
            <FadeIn delay={100}>
              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-emerald-100">
                    <span className="text-xl font-bold text-emerald-700">1</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-slate-900">
                      Baseline (3–4 weeks)
                    </h3>
                    <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                      A clean, non-intervention period that establishes how the condenser and
                      cooling-water system currently behaves.
                    </p>

                    <h4 className="mt-4 text-sm font-semibold text-slate-900">Required measurements:</h4>
                    <ul className="mt-2 grid gap-2 text-sm text-slate-700 md:grid-cols-2">
                      <li className="flex items-start gap-2">
                        <CheckIcon className="h-4 w-4 shrink-0 text-emerald-600 mt-0.5" />
                        Cooling-water inlet & outlet temperatures
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckIcon className="h-4 w-4 shrink-0 text-emerald-600 mt-0.5" />
                        Temperature Rise (TR)
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckIcon className="h-4 w-4 shrink-0 text-emerald-600 mt-0.5" />
                        Terminal Temperature Difference (TTD)
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckIcon className="h-4 w-4 shrink-0 text-emerald-600 mt-0.5" />
                        Condenser vacuum stability
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckIcon className="h-4 w-4 shrink-0 text-emerald-600 mt-0.5" />
                        ΔT across cooling towers
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckIcon className="h-4 w-4 shrink-0 text-emerald-600 mt-0.5" />
                        Plant load profile (min/avg/max)
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckIcon className="h-4 w-4 shrink-0 text-emerald-600 mt-0.5" />
                        Make-up water quality
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckIcon className="h-4 w-4 shrink-0 text-emerald-600 mt-0.5" />
                        Operating constraints & excursions
                      </li>
                    </ul>

                    <div className="mt-4 rounded-lg bg-emerald-50 p-4">
                      <h4 className="text-sm font-semibold text-emerald-900">Purpose of baseline:</h4>
                      <ul className="mt-2 space-y-1 text-sm text-emerald-800">
                        <li>• Quantify fouling as a <em>variable</em>, not background noise</li>
                        <li>• Understand TR/TTD behaviour relative to load</li>
                        <li>• Confirm operational stability before intervention</li>
                        <li>• Build a defendable dataset for GM/RT&D decision-making</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Phase 2: Intervention */}
            <FadeIn delay={200}>
              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-emerald-100">
                    <span className="text-xl font-bold text-emerald-700">2</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-slate-900">
                      Intervention (4–6 weeks)
                    </h3>
                    <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                      The TES system is implemented using:
                    </p>

                    <div className="mt-4 grid gap-3 md:grid-cols-3">
                      <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-3">
                        <p className="text-sm font-semibold text-emerald-900">Mexel®432</p>
                        <p className="text-xs text-emerald-700 mt-1">(chemistry)</p>
                      </div>
                      <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-3">
                        <p className="text-sm font-semibold text-emerald-900">Thingy:91X dosing skid</p>
                        <p className="text-xs text-emerald-700 mt-1">(IoT)</p>
                      </div>
                      <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-3">
                        <p className="text-sm font-semibold text-emerald-900">Performance view</p>
                        <p className="text-xs text-emerald-700 mt-1">(cooling-water)</p>
                      </div>
                    </div>

                    <h4 className="mt-4 text-sm font-semibold text-slate-900">What happens during intervention:</h4>
                    <ul className="mt-2 space-y-2 text-sm text-slate-700">
                      <li className="flex items-start gap-2">
                        <CheckIcon className="h-4 w-4 shrink-0 text-emerald-600 mt-0.5" />
                        Mexel®432 forms a microscopic surface film
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckIcon className="h-4 w-4 shrink-0 text-emerald-600 mt-0.5" />
                        Existing biofilm, suspended solids, mud/ash loosen and detach
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckIcon className="h-4 w-4 shrink-0 text-emerald-600 mt-0.5" />
                        Tube-side heat-transfer improves
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckIcon className="h-4 w-4 shrink-0 text-emerald-600 mt-0.5" />
                        TR and TTD begin moving toward engineering targets
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckIcon className="h-4 w-4 shrink-0 text-emerald-600 mt-0.5" />
                        Dosing events are automatically logged for transparency
                      </li>
                    </ul>

                    <div className="mt-4 rounded-lg bg-slate-100 p-4">
                      <p className="text-sm text-slate-700">
                        <strong>Station involvement:</strong> minimal. TES does not interfere with turbine,
                        boiler, chemistry program or operations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Phase 3: Review */}
            <FadeIn delay={300}>
              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-emerald-100">
                    <span className="text-xl font-bold text-emerald-700">3</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-slate-900">
                      Review (2–3 weeks)
                    </h3>
                    <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                      Post-intervention analysis where performance data is compared against baseline
                      conditions at matched load and ambient temperature.
                    </p>

                    <h4 className="mt-4 text-sm font-semibold text-slate-900">Review deliverables:</h4>
                    <ul className="mt-2 space-y-2 text-sm text-slate-700">
                      <li className="flex items-start gap-2">
                        <CheckIcon className="h-4 w-4 shrink-0 text-emerald-600 mt-0.5" />
                        Baseline vs intervention comparison reports
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckIcon className="h-4 w-4 shrink-0 text-emerald-600 mt-0.5" />
                        TR/TTD improvement quantification
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckIcon className="h-4 w-4 shrink-0 text-emerald-600 mt-0.5" />
                        Heat rate and efficiency gain calculations
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckIcon className="h-4 w-4 shrink-0 text-emerald-600 mt-0.5" />
                        Dosing event log and chemistry compliance summary
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckIcon className="h-4 w-4 shrink-0 text-emerald-600 mt-0.5" />
                        Recommendations for ongoing TES deployment
                      </li>
                    </ul>

                    <div className="mt-4 rounded-lg bg-emerald-50 p-4">
                      <h4 className="text-sm font-semibold text-emerald-900">Success criteria:</h4>
                      <p className="mt-2 text-sm text-emerald-800">
                        Measurable improvement in condenser performance, validated against baseline data
                        with full transparency of dosing events and operational conditions. All findings
                        are audit-ready and suitable for RT&D/GM review.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Enhanced CTA */}
      <section className="bg-gradient-emerald">
        <div className="mx-auto max-w-6xl px-4 py-14 lg:py-20">
          <FadeIn>
            <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg">
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-50 rounded-full -mr-32 -mt-32 opacity-50"></div>
              <div className="relative flex flex-col gap-6 p-8 md:flex-row md:items-center md:justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center">
                      <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                      </svg>
                    </div>
                    <h2 className="text-base font-semibold text-slate-900">
                      Ready to explore TES for your operation?
                    </h2>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed max-w-xl">
                    Whether you&apos;re evaluating TES for a power station unit, industrial cooling system,
                    or process application, we&apos;re here to answer your questions and discuss pilot readiness.
                  </p>
                </div>
                <div className="flex flex-col gap-3 text-sm flex-shrink-0">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-6 py-3 font-semibold text-white shadow-sm transition-all hover:bg-emerald-700 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:ring-offset-2 cta-pulse"
                  >
                    Get in touch
                  </Link>
                  <Link
                    href="/knowledge-hub/case-studies"
                    className="inline-flex items-center justify-center gap-1 font-semibold text-emerald-700 transition-colors hover:text-emerald-900"
                  >
                    View case studies
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
