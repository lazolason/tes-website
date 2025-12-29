import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import type { Metadata } from "next";
import { ArrowRightIcon } from "@/components/icons/NavIcons";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Food & Beverage | Industries",
  description:
    "TES and Mexel®432 for food processing, breweries and laundries: stable cooling, reduced energy consumption, better biofilm control.",
  openGraph: {
    title: "Food & Beverage Solutions | Mexel Energy Sustain",
    description:
      "Cooling-water treatment for food processing, breweries, and commercial laundries.",
  },
};

export default function FoodBeveragePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-slate-900 z-0">
          <Image
            src="/food-beverage.webp"
            alt="Food & Beverage processing"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 rounded-full mb-6 border border-emerald-500/20">
              Industries / Food & Beverage
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-[1.1]">
              Hygiene and <br />
              <span className="text-emerald-400">Cooling Stability.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl mb-10">
              Breweries, laundries, and processing plants depend on refrigeration
              and steam for continuous ops. TES keeps the cooling side deposit-free
              to ensure your process never hits a thermal limit.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="/contact" size="lg" className="shadow-xl shadow-emerald-900/40 hover:-translate-y-1">
                Request a Pilot Study
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Schematic & Problem Solving */}
      <section className="py-20 lg:py-32 border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading
                tag="Technical Overview"
                title="Process Reliability."
                description="Food processing depends on stable chiller loops. TES provides the surface layer stability needed for zero-fouling operations."
              />
              <ul className="space-y-6">
                {[
                  { title: "Biofilm Prevention", desc: "Non-oxidising protection that keeps pasteurisers and condensers free from efficiency-robbing biofilm." },
                  { title: "Energy Reduction", desc: "Maintain low compressor discharge pressures by ensuring peak heat-rejection in cooling towers." },
                  { title: "Water Optimisation", desc: "Reduce blowdown and chemical handling while maintaining system integrity." }
                ].map((item, i) => (
                  <FadeIn key={i} delay={item.title === "Water Optimisation" ? 200 : i * 100}>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600 font-bold text-sm">
                        {i + 1}
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900 uppercase tracking-tight text-sm mb-1">{item.title}</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </ul>
            </div>

            <FadeIn delay={300}>
              <div className="relative bg-slate-50 rounded-[2.5rem] p-8 border border-slate-100 shadow-inner">
                <div className="relative aspect-[16/10] rounded-xl overflow-hidden shadow-2xl border border-white">
                  <Image
                    src="/schematics/food-beverage-v2.png?v=2"
                    alt="Food & Beverage Cooling Schematic"
                    fill
                    className="object-contain bg-white"
                  />
                </div>
                <div className="mt-8 text-center">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em]">Pasteuriser & Chiller Layout</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 lg:py-32 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Compliance Ready", desc: "Environmentally responsible chemistry that aligns with corporate sustainability goals." },
              { title: "Reduced Maintenance", desc: "Extend the interval between mechanical cleanings of condensers and reboilers." },
              { title: "Stable Quality", desc: "Predictive cooling ensures process temperatures remain within narrow quality bands." }
            ].map((benefit, i) => (
              <FadeIn key={i} delay={i * 100}>
                <div className="bg-white p-8 rounded-2xl border border-slate-200/60 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{benefit.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{benefit.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 lg:py-32 text-center bg-white">
        <div className="mx-auto max-w-4xl px-4">
          <SectionHeading
            title="Maintain Your Thermal Integrity."
            description="Discuss your cooling infrastructure and PUE goals with our food & beverage engineering specialists."
            centered
          />
          <div className="flex flex-wrap justify-center gap-6">
            <Button href="/contact" size="lg">
              Contact Specialist Team
            </Button>
            <Button href="/knowledge-hub" variant="outline" size="lg">
              Explore Knowledge Hub
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
