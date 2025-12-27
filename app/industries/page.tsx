import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { INDUSTRIES_DATA } from "@/lib/data";
import FadeIn from "@/components/FadeIn";
import { ArrowRightIcon } from "@/components/icons/NavIcons";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "TES and Mexel®432 applications across industries: power stations, mining, refineries, data centres, ports, food & beverage, and agricultural operations.",
  openGraph: {
    title: "Industries Served | Mexel Energy Sustain",
    description:
      "Cooling-water efficiency across power generation, mining, refineries, data centres and industrial plants.",
  },
};

export default function IndustriesPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-slate-50 z-0" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-50/30 -skew-x-12 transform translate-x-1/4 pointer-events-none z-0" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Operating Contexts"
            title="Sectors Engineered for Thermal Recovery."
            description="TES is applied where cooling-water performance can be measured and verified using our primary → secondary baseline methodology."
          />
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:gap-24">
            {INDUSTRIES_DATA.map((industry, index) => (
              <FadeIn key={industry.id} delay={index * 100}>
                <div className={index % 2 === 1 ? "lg:flex-row-reverse flex flex-col lg:flex-row gap-12 lg:items-center" : "flex flex-col lg:flex-row gap-12 lg:items-center"}>
                  {/* Image Side */}
                  <div className="lg:w-1/2">
                    <div className="group relative aspect-[16/9] overflow-hidden rounded-3xl shadow-2xl border border-slate-200">
                      <Image
                        src={industry.image}
                        alt={industry.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className="lg:w-1/2">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 mb-6 border border-emerald-100 transition-all duration-300 hover:scale-110 hover:rotate-3 hover:bg-emerald-100">
                      {industry.icon && <industry.icon className="w-6 h-6" />}
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                      {industry.title}
                    </h2>
                    <p className="text-lg text-slate-600 leading-relaxed mb-8">
                      {industry.description}
                    </p>

                    <div className="grid sm:grid-cols-2 gap-4 mb-10">
                      {industry.benefits?.map((benefit) => (
                        <div key={benefit} className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                          {benefit}
                        </div>
                      ))}
                    </div>

                    <Button href={`/industries/${industry.slug}`} variant="secondary">
                      Explore Solutions
                      <ArrowRightIcon className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-slate-900 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
              Not sure where your operation fits?
            </h2>
            <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-12">
              Our engineering team works across diverse cooling-water contexts.
              Contact us for a high-level technical assessment of your thermal delta potential.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="/contact" size="lg">
                Request a Pilot Study
              </Button>
              <Button href="/knowledge-hub" variant="outline" size="lg" className="bg-white/5 border-white/10 text-white hover:bg-white/10 hover:text-white hover:border-white/20">
                Explore Knowledge Hub
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
