// components/IndustryCTA.tsx
// Shared CTA component for industry pages

import Link from "next/link";

interface IndustryCTAProps {
  industry: string;
  description?: string;
}

export default function IndustryCTA({
  industry,
  description = "Discuss your cooling-water challenges and see how TES can help."
}: IndustryCTAProps) {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 py-14 lg:py-20">
        <div className="flex flex-col gap-4 rounded-lg border border-slate-200 bg-slate-50 p-6 shadow-sm md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-sm font-semibold text-slate-900">
              Explore TES for your {industry} operation
            </h2>
            <p className="mt-2 text-xs text-slate-700 leading-relaxed">
              {description}
            </p>
          </div>
          <div className="flex flex-col gap-2 text-xs">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-emerald-600 px-5 py-2.5 font-semibold text-white shadow-sm hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:ring-offset-2"
            >
              Contact Us
            </Link>
            <Link
              href="/knowledge-hub/case-studies"
              className="inline-flex items-center justify-center font-semibold text-emerald-700 hover:text-emerald-900"
            >
              View case studies →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
