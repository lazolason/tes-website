import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import type { Metadata } from "next";
import { ArrowRightIcon } from "@/components/icons/NavIcons";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Mining & Minerals | Industries",
  description:
    "TES and Mexel®432 for mining operations: cleaner heat exchangers, reduced downtime, better cooling performance under variable loads.",
  openGraph: {
    title: "Mining & Minerals Solutions | Mexel Energy Sustain",
    description:
      "Cooling-water treatment for mines, concentrators and minerals processing facilities.",
  },
};

export default function MiningPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-slate-900 z-0">
          <Image
            src="/mining-v2.webp?v=4"
            alt="Mining operations"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 rounded-full mb-6 border border-emerald-500/20">
              Industries / Mining & Minerals
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-[1.1]">
              Stability for <br />
              <span className="text-emerald-400">Complex Mining Circuits.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl mb-10">
              Mines and concentrators often run large open cooling circuits with variable water quality.
              TES provides the operational discipline needed to maintain heat transfer on critical process loops.
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
                title="A Direct Path to Cooling Stability."
                description="Mines deal with high solids loading, tailings ingress, and variable chemistry. 
                  TES addresses these challenges at the surface layer, keeping exchangers cleaner for longer."
              />
              <ul className="space-y-6">
                {[
                  { title: "Solids Management", desc: "Film-forming properties help keep solids mobile and prevent under-deposit corrosion." },
                  { title: "Variable Loads", desc: "Maintain design delta-T even as process throughput fluctuates." },
                  { title: "Reduced Downtime", desc: "Significantly extend the mean-time-between-cleaning for critical heat exchangers." }
                ].map((item, i) => (
                  <FadeIn key={i} delay={i * 100}>
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
              <div className="relative bg-slate-50 rounded-[2rem] p-8 border border-slate-100 shadow-inner">
                <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl border border-white">
                  <Image
                    src="/mining-v2.webp?v=4"
                    alt="Mining Operations Cooling Schematic"
                    fill
                    className="object-contain bg-white"
                  />
                </div>
                <div className="mt-8 text-center">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em]">Typical Mining Layout</p>
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
              { title: "Operational Uptime", desc: "Reduce unscheduled shutdowns caused by cooling-driven process constraints." },
              { title: "Water Stewardship", desc: "Maintain system efficiency even when using low-quality or recycled mine water." },
              { title: "Sustainable Chemistry", desc: "Non-toxic, non-oxidising chemistry reduces discharge environmental impact." }
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

      {/* Strategic Complement: MexSteam 100 */}
      <section className="py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-[2.5rem] overflow-hidden relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(16,185,129,0.1),transparent_50%)]" />
            <div className="relative p-12 lg:p-20 grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-emerald-400 font-bold text-xs uppercase tracking-widest mb-6 block">Strategic Complement</span>
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">MexSteam 100 for Boiler-Side Efficiency.</h2>
                <p className="text-slate-400 text-lg leading-relaxed mb-8">
                  Mining operations with process steam or heating systems face unique
                  boiler feedwater challenges. MexSteam 100 provides film-forming
                  corrosion protection where traditional treatments struggle.
                </p>
                <Link
                  href="/products#mexsteam"
                  className="inline-flex items-center gap-2 text-emerald-400 font-bold hover:text-emerald-300 transition-colors"
                >
                  View Product Details
                  <ArrowRightIcon className="w-4 h-4" />
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Process Steam HP Boilers",
                  "Mv-TDS Management",
                  "Condensate Return Stability",
                  "Evaporator Protection"
                ].map((tag) => (
                  <div key={tag} className="bg-white/5 border border-white/10 rounded-xl p-4 text-xs font-bold text-white uppercase tracking-tight">
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 lg:py-32 text-center">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Ready to Stabilise Your Mining Cooling Loops?"
            description="Start with a technical baseline Review. Our engineers will 
              assess your current delta and identify hidden capacity."
            centered
          />
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/contact" size="md">
              Contact Engineering Team
            </Button>
            <Button href="/knowledge-hub/case-studies" variant="outline" size="md">
              View Case Studies
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
