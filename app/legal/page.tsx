export default function LegalPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="border-b border-slate-200/70 bg-slate-50">
        <div className="mx-auto max-w-5xl px-4 py-12 lg:py-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-emerald-700">
            Legal
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Legal
          </h1>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-700">
            This website is provided for informational purposes only. © {new Date().getFullYear()}{" "}
            Mexel Energy Sustain. All rights reserved.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-5xl px-4 py-12 lg:py-16">
          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm leading-relaxed text-slate-700">
              Use of this site constitutes acceptance of our privacy policy and terms of
              service. Content may not be reproduced without permission.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
