import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { INDUSTRIES_DATA } from "@/lib/data";
// REMOVED: FadeIn (Too flashy)
import SectionHeading from "@/components/ui/SectionHeading";
// REMOVED: NavIcons import (Using inline SVG for safety)
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Core Industries",
  description:
    "TES and Mexel®432 applications for critical infrastructure: Power Generation, Heavy Industry, and Mining Cooling Systems.",
  openGraph: {
    title: "Core Industries | Mexel Energy Sustain",
    description:
      "Cooling-water efficiency for Power Generation, Heavy Industry, and Mining.",
  },
};

export default function IndustriesPage() {

  // STRATEGY: Filter specifically for the "Big Budget" sectors.
  // We match keywords to find the right cards from your data file.
  const TARGET_KEYWORDS = ['Power', 'Mining', 'HVAC', 'Data', 'Heavy'];

  const strategicIndustries = INDUSTRIES_DATA.filter(industry =>
    TARGET_KEYWORDS.some(keyword => industry.title.includes(keyword))
  );

  // FALLBACK: If filter fails, show first 3 (Power is usually first)
  const displayIndustries = strategicIndustries.length > 0
    ? strategicIndustries
    : INDUSTRIES_DATA.slice(0, 3);

  return (
    <main className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden border-b border-slate-200">
        <div className="absolute inset-0 bg-slate-50 z-0" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Core Infrastructure"
            title="Sectors Engineered for Thermal Recovery."
            description="Our primary → secondary baseline methodology is designed for high-MW environments where cooling-water performance is a critical production constraint."
          />
        </div>
      </section>

      {/* Industries Grid (Static & Serious) */}
      <section className="py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:gap-24">
            {displayIndustries.map((industry, index) => (
              // REMOVED: FadeIn Wrapper
              <div key={industry.id} className={index % 2 === 1 ? "lg:flex-row-reverse flex flex-col lg:flex-row gap-12 lg:items-start" : "flex flex-col lg:flex-row gap-12 lg:items-start"}>

                {/* Image Side (Clean, No Hover Zoom) */}
                <div className="lg:w-1/2">
                  <div className="relative aspect-[16/9] overflow-hidden rounded-xl shadow-lg border border-slate-200 bg-slate-100">
                    <Image
                      src={industry.image}
                      alt={industry.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    {/* Professional Static Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                  </div>
                </div>

                {/* Content Side */}
                <div className="lg:w-1/2 pt-4">
                  {/* Icon Badge (Static) */}
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-emerald-50 text-emerald-700 mb-6 border border-emerald-100">
                    {industry.icon && <industry.icon className="w-6 h-6" />}
                  </div>

                  <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                    {industry.title}
                  </h2>

                  <p className="text-lg text-slate-600 leading-relaxed mb-8">
                    {industry.description}
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 mb-10">
                    {industry.benefits?.map((benefit) => (
                      <div key={benefit} className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                        {benefit}
                      </div>
                    ))}
                  </div>

                  <Button href={`/industries/${industry.slug}`} variant="secondary" className="border-slate-200 hover:bg-slate-50">
                    Technical Specifications
                    {/* Inline SVG Arrow */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 ml-2 text-emerald-600">
                      <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                    </svg>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA (Updated for Engineering Access) */}
      <section className="bg-slate-900 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Engineering Assessment
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-12">
            We provide a high-level technical audit of your thermal delta potential based on your current condenser data sheets.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {/* Primary: Request Specs */}
            <Button href="/contact" size="lg" className="bg-emerald-600 hover:bg-emerald-500 text-white border-none">
              Request Specifications
            </Button>

            {/* Secondary: WhatsApp Safety Net */}
            <a
              href="https://wa.me/27794648298"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg border border-slate-700 bg-slate-800 px-8 py-4 text-sm font-semibold text-white hover:bg-slate-700 transition-colors"
            >
              <span className="mr-2">⚡</span> Talk to Engineering
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
