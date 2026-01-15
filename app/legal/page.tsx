import type { Metadata } from "next";
import FadeIn from "../../components/FadeIn";

export const metadata: Metadata = {
  title: "Corporate Governance | Mexel Energy Sustain",
  description:
    "Legal notices, corporate identity, and engineering disclaimers for Mexel Energy Sustain (Pty) Ltd.",
};

export default function LegalPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <section className="border-b border-slate-200/70 bg-slate-50">
        <div className="mx-auto max-w-4xl px-4 py-16 lg:py-20">
          <p className="text-xs font-semibold uppercase tracking-widest text-emerald-700">
            Corporate Governance
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Legal & Regulatory
          </h1>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Regulatory disclosures, terms of use, and technical disclaimers for Mexel Energy Sustain (Pty) Ltd.
          </p>
        </div>
      </section>

      {/* Corporate Details (PFMA Requirement: Know Your Vendor) */}
      <section className="border-b border-slate-200/70">
        <div className="mx-auto max-w-4xl px-4 py-12 lg:py-16">
          <FadeIn>
            <h2 className="text-xl font-bold text-slate-900">Corporate Information</h2>
            <div className="mt-6 rounded-lg border border-slate-200 bg-slate-50 p-6">
              <dl className="grid gap-x-4 gap-y-6 sm:grid-cols-2">
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Legal Entity
                  </dt>
                  <dd className="mt-1 text-sm font-medium text-slate-900">
                    Mexel Energy Sustain (Pty) Ltd
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Registration Number
                  </dt>
                  <dd className="mt-1 text-sm font-medium text-slate-900">
                    [Insert Reg Number]
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    VAT Number
                  </dt>
                  <dd className="mt-1 text-sm font-medium text-slate-900">
                    4550274700
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Head Office
                  </dt>
                  <dd className="mt-1 text-sm font-medium text-slate-900">
                    Gauteng, South Africa
                  </dd>
                </div>
              </dl>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Engineering Disclaimer - CRITICAL for your Graphs/Charts */}
      <section className="border-b border-slate-200/70">
        <div className="mx-auto max-w-4xl px-4 py-12 lg:py-16">
          <FadeIn>
            <h2 className="text-xl font-bold text-slate-900">Technical Disclaimer</h2>
            <div className="mt-6 space-y-4 text-sm text-slate-600 leading-relaxed">
              <p>
                <strong>Performance Data:</strong> All performance metrics, graphs, and case study data presented on this website (including TR, TTD, and Vacuum improvement figures) are derived from specific historical interventions. These figures are illustrative of the potential technical impact of the TES system.
              </p>
              <p>
                <strong>Site Specificity:</strong> Cooling water systems vary significantly in design, operating context, and water quality. Mexel Energy Sustain does not guarantee identical results for every application. Definitive performance guarantees are only provided following a verified Baseline Study and the signing of a formal Performance Contract.
              </p>
              <p>
                <strong>No Professional Advice:</strong> The information contained on this website is for general technical reference and does not constitute site-specific engineering advice.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* POPIA / PAIA (South African Standard) */}
      <section>
        <div className="mx-auto max-w-4xl px-4 py-12 lg:py-16">
          <FadeIn>
            <h2 className="text-xl font-bold text-slate-900">Privacy & POPIA</h2>
            <div className="mt-6 space-y-4 text-sm text-slate-600 leading-relaxed">
              <p>
                Mexel Energy Sustain is committed to protecting your privacy in accordance with the Protection of Personal Information Act (POPIA).
              </p>
              <p>
                We only collect personal information (such as names and email addresses) when voluntarily submitted via our contact forms for the purpose of engineering enquiries. We do not sell or share this data with third parties unless required by law or for the direct fulfilment of a project contract.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
