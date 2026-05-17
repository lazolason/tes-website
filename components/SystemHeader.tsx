interface SystemHeaderProps {
  tag: string;
  title: string;
  description: string;
  continuity?: string;
  currentLabel: string;
  activeSteps?: number[];
  backgroundImage?: string;
}

const steps = ["Chemistry", "Dosing", "Monitoring", "Verification"];

export default function SystemHeader({
  tag,
  title,
  description,
  continuity,
  currentLabel,
  activeSteps,
  backgroundImage = "/power-gen.webp",
}: SystemHeaderProps) {
  const active = activeSteps ?? [0, 1, 2, 3];

  return (
    <section className="relative overflow-hidden border-b border-slate-800 bg-slate-900 text-white">
      {backgroundImage && (
        <>
          <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: `url('${backgroundImage}')` }} />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900/90 to-transparent" />
        </>
      )}
      <div className="relative mx-auto max-w-6xl px-4 py-14 lg:py-20">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-emerald-400">
            {tag}
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl lg:leading-[1.1]">
            {title}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-slate-300">
            {description}
          </p>
          {continuity && (
            <p className="mt-3 text-sm text-slate-400 font-medium">{continuity}</p>
          )}
        </div>

        <div className="mt-10 border-t border-slate-800 pt-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap items-center gap-2 text-[11px] font-semibold uppercase tracking-widest">
              {steps.map((step, index) => {
                const isActive = active.includes(index);
                return (
                  <div key={step} className="flex items-center gap-2">
                    <span
                      className={`flex items-center gap-2 ${
                        isActive ? "text-emerald-400" : "text-slate-500"
                      }`}
                    >
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${
                          isActive ? "bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]" : "bg-slate-700"
                        }`}
                      />
                      {step}
                    </span>
                    {index < steps.length - 1 && (
                      <span className="text-slate-700">→</span>
                    )}
                  </div>
                );
              })}
            </div>
            <span className="inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-emerald-300">
              Current: {currentLabel}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
