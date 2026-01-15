import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import type { Metadata } from "next";
import { ArrowRightIcon } from "@/components/icons/NavIcons";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Power & Energy | Industries",
  description:
    "TES and Mexel®432 for wet-cooled power stations: reducing condenser fouling, improving efficiency, and extending asset life.",
  openGraph: {
    title: "Power & Energy Solutions | Mexel Energy Sustain",
    description:
      "Cooling-water treatment for coal, gas, and nuclear power generation facilities.",
  },
};

export default function PowerEnergyPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-slate-900 z-0">
          <Image
            src="/power-energy-v2.webp?v=4"
            alt="Power generation facility"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 rounded-full mb-6 border border-emerald-500/20">
              Industries / Power & Energy
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-[1.1]">
              Verification for <br />
              <span className="text-emerald-400">Large-Scale Cold Ends.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl mb-10">
              Wet-cooled power stations are where TES was born. We bridge the gap
              between complex chemistry and station-ready performance metrics
              to restore MW capacity lost to condenser fouling.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="/contact" size="lg" className="shadow-xl shadow-emerald-900/40 hover:-translate-y-1">
                Engineering Enquiry
              </Button>
              <Link
                href="/knowledge-hub/case-studies/kriel"
                className="rounded-xl bg-white/10 backdrop-blur-md px-8 py-4 text-sm font-bold text-white border border-white/20 transition-all hover:bg-white/20"
              >
                View Kriel Case Study
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Schematic & Technical Deep-Dive */}
      <section className="py-20 lg:py-32 border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading
                tag="The Methodology"
                title="Cold-End Optimisation."
                description="TES is primarily designed for wet-cooled coal and gas units where the condenser is a primary source of efficiency loss."
              />
              <ul className="space-y-6">
                {[
                  { title: "Condenser Performance", desc: "Stabilise TR and TTD values by keeping condenser tubes free of biofouling and scale." },
                  { title: "Make-up Integrity", desc: "Maintain system efficiency even as make-up water quality (dam/mine water) fluctuates." },
                  { title: "MW Restoration", desc: "Directly link cleaner surfaces to measurable improvements in unit heat rate." }
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
                    src="/power-energy-v2.webp?v=4"
                    alt="Power Generation Cooling Schematic"
                    fill
                    className="object-contain bg-white"
                  />
                </div>
                <div className="mt-8 text-center">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em]">Condenser & Tower Circuit</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 5. Production Continuity */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Uninterrupted MW Generation.</h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                By maintaining the surface interface with Mexel®432, we prevent the biological
                blanketing that causes the secondary baseline to drift from design capacity.
                This ensures that your unit can meet its full load profile throughout the summer peak
                without requiring manual condenser cleaning outages.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                "Vacuum Stability",
                "Fouling Prevention",
                "Thermal Recovery",
                "Design Compliance"
              ].map((tag) => (
                <div key={tag} className="bg-slate-900 text-white rounded-xl p-6 text-xs font-bold uppercase tracking-tight shadow-lg">
                  {tag}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 lg:py-32 text-center bg-white">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-8">
            Start Your Thermal Baseline Review.
          </h2>
          <p className="text-slate-600 text-lg mb-12">
            The first step in any TES implementation is a disciplined primary → secondary baseline.
            Connect with our engineering team to begin the process.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Button href="/contact" size="lg">
              Contact Power Engineering
            </Button>
            <Button href="/knowledge-hub/engineering-playbook" variant="outline" size="lg">
              Explore Engineering Playbook
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
