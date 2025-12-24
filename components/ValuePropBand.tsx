import FadeIn from "./FadeIn";

export default function ValuePropBand() {
  return (
    <section className="bg-slate-50 py-10 border-y border-slate-200">
      <div className="mx-auto max-w-7xl px-6">
        <FadeIn>
          <div className="grid gap-6 md:grid-cols-3">
            {/* Outcome */}
            <div className="relative overflow-hidden rounded-xl border border-slate-200 bg-white p-6 transition-all hover:border-emerald-200 hover:shadow-sm">
              <div className="flex flex-col h-full">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-600 mb-3">
                  Outcome
                </span>
                <h3 className="text-lg font-semibold text-slate-900 leading-tight">
                  Stabilise condenser performance
                </h3>
              </div>
            </div>

            {/* Mechanism */}
            <div className="relative overflow-hidden rounded-xl border border-slate-200 bg-white p-6 transition-all hover:border-emerald-200 hover:shadow-sm">
              <div className="flex flex-col h-full">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-600 mb-3">
                  Mechanism
                </span>
                <h3 className="text-lg font-semibold text-slate-900 leading-tight">
                  Surface-treatment approach + dosing control
                </h3>
              </div>
            </div>

            {/* Proof */}
            <div className="relative overflow-hidden rounded-xl border border-slate-200 bg-white p-6 transition-all hover:border-emerald-200 hover:shadow-sm">
              <div className="flex flex-col h-full">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-600 mb-3">
                  Proof
                </span>
                <h3 className="text-lg font-semibold text-slate-900 leading-tight">
                  Measured indicators + protocol-aligned verification
                </h3>
              </div>
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <p className="border-l-2 border-slate-200 pl-4 text-xs font-medium italic text-slate-600">
              “Designed for audit-ready reporting. Implementation does not replace maintenance.”
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
