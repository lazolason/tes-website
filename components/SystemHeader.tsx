interface SystemHeaderProps {
  tag: string;
  title: string;
  description: string;
  continuity?: string;
  currentLabel: string;
  activeSteps?: number[];
}

const steps = ["Chemistry", "Dosing", "Monitoring", "Verification"];

export default function SystemHeader({
  tag,
  title,
  description,
  continuity,
  currentLabel,
  activeSteps,
}: SystemHeaderProps) {
  const active = activeSteps ?? [0, 1, 2, 3];

  return (
    <section className="border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-14 lg:py-20">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-emerald-700">
            {tag}
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            {title}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            {description}
          </p>
          {continuity && (
            <p className="mt-3 text-sm text-slate-500">{continuity}</p>
          )}
        </div>

        <div className="mt-8 border-t border-slate-200 pt-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap items-center gap-2 text-[11px] font-semibold uppercase tracking-widest">
              {steps.map((step, index) => {
                const isActive = active.includes(index);
                return (
                  <div key={step} className="flex items-center gap-2">
                    <span
                      className={`flex items-center gap-2 ${
                        isActive ? "text-emerald-700" : "text-slate-500"
                      }`}
                    >
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${
                          isActive ? "bg-emerald-600" : "bg-slate-300"
                        }`}
                      />
                      {step}
                    </span>
                    {index < steps.length - 1 && (
                      <span className="text-slate-300">→</span>
                    )}
                  </div>
                );
              })}
            </div>
            <span className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-emerald-700">
              Current: {currentLabel}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
