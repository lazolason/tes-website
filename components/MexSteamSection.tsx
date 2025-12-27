// components/MexSteamSection.tsx
// Shared MexSteam 100 section for industry pages

import Link from "next/link";

interface MexSteamSectionProps {
  industry: string;
  introText: string;
  applicationsTitle: string;
  applications: string[];
}

export default function MexSteamSection({
  industry,
  introText,
  applicationsTitle,
  applications,
}: MexSteamSectionProps) {
  return (
    <section id="mexsteam" className="border-b border-slate-200/70 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-12 lg:py-16">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-emerald-700">
            STRATEGIC COMPLEMENT
          </p>
          <h2 className="mt-3 text-xl font-semibold text-slate-900">
            MexSteam 100 for boiler-side efficiency
          </h2>
          <p className="mt-3 text-sm text-slate-700 leading-relaxed">
            {introText}
          </p>

          {/* Industry-specific boiler applications */}
          <div className="mt-5">
            <h3 className="text-sm font-semibold text-slate-900">
              {applicationsTitle}
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              {applications.map((application, index) => (
                <li key={index}>• {application}</li>
              ))}
            </ul>
          </div>

          <div className="mt-5 flex flex-wrap gap-3 text-xs">
            <span className="rounded-full bg-slate-100 px-3 py-1 font-semibold text-slate-800">
              Boiler / steam-side
            </span>
            <span className="rounded-full bg-slate-100 px-3 py-1 font-semibold text-slate-800">
              Outside TES verification
            </span>
          </div>

          <div className="mt-5 text-xs">
            <Link
              href="/products#mexsteam"
              className="inline-flex items-center font-semibold text-emerald-600 hover:text-emerald-800"
            >
              Learn more about MexSteam 100 →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
