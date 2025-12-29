import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import type { Metadata } from "next";
import { ArrowRightIcon } from "@/components/icons/NavIcons";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Refineries & Petrochemical | Industries",
  description:
    "TES and Mexel®432 for refineries and petrochemical plants: improved exchanger cleanliness, corrosion protection, and stable cooling performance.",
  openGraph: {
    title: "Refineries & Petrochemical Solutions | Mexel Energy Sustain",
    description:
      "Cooling-water treatment for refineries, petrochemical plants and steel mills.",
  },
};

export default function RefineriesPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-slate-900 z-0">
          <Image
            src="/industry-refinery.webp"
            alt="Refinery cooling infrastructure"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 rounded-full mb-6 border border-emerald-500/20">
              Industries / Refineries & Petrochemical
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-[1.1]">
              Reliability for <br />
              <span className="text-emerald-400">Critical Process Loops.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl mb-10">
              In refineries and petrochemical plants, cooling failure isn&apos;t just an efficiency loss—it&apos;s a production bottleneck.
              TES focuses on maintaining heat transfer where it matters most.
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
                title="Engineering Out Fouling Plateaus."
                description="Refineries run networks of complex exchangers. TES provides the film-forming protection needed to keep these surfaces at design performance."
              />
              <ul className="space-y-6">
                {[
                  { title: "Surface Stabilisation", desc: "Keep critical reboilers and condensers at peak heat-transfer efficiency." },
                  { title: "Corrosion Inhibition", desc: "Superior protection for mixed-metallurgy systems common in petrochemical loops." },
                  { title: "Throughput Protection", desc: "Avoid cooling-water driven production limits during high ambient conditions." }
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
              <div className="relative bg-slate-50 rounded-[2.5rem] p-8 border border-slate-100 shadow-inner">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-2xl border border-white">
                  <Image
                    src="/schematics/refinery-v2.png"
                    alt="Refinery Cooling Schematic"
                    fill
                    className="object-contain bg-white"
                  />
                </div>
                <div className="mt-8 text-center">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em]">Typical Refinery Integration</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Strategic Complement: MexSteam 100 */}
      <section className="py-20 lg:py-32 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-600/10 -skew-x-12 transform translate-x-1/4" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-emerald-400 font-bold text-xs uppercase tracking-widest mb-6 block">Strategic Complement</span>
              <h2 className="text-3xl lg:text-5xl font-bold mb-8">MexSteam 100 for Process Steam Circuits.</h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-10">
                Refineries operate large process steam boilers and heat recovery steam generators (HRSG).
                MexSteam 100 provides essential film-forming protection against corrosion and deposition
                in high-reliability boiler systems.
              </p>
              <Button href="/products#mexsteam" className="gap-2">
                Learn More About MexSteam
                <ArrowRightIcon className="w-4 h-4 ml-2" />
              </Button>
            </div>
            <div className="space-y-4">
              {[
                "High-Reliability Boilers",
                "Process-Side Heat Recovery",
                "Condensate Circuit Stability",
                "Deposition Control"
              ].map((item) => (
                <div key={item} className="bg-white/5 border border-white/10 rounded-2xl p-6 flex items-center justify-between">
                  <span className="font-semibold text-slate-200">{item}</span>
                  <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-8">
            Optimise Your Cooling Performance.
          </h2>
          <p className="text-slate-600 text-lg mb-12">
            Connect with our refinery engineering team to discuss your specific exchanger challenges
            and learn how TES can restore design heat-transfer capability.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Button href="/contact" size="lg">
              Contact Engineering
            </Button>
            <Button href="/knowledge-hub/case-studies" variant="outline" size="lg">
              View Refinery Results
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
