import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import type { Metadata } from "next";
import { ArrowRightIcon } from "@/components/icons/NavIcons";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Ports & Harbours | Industries",
  description:
    "TES and Mexel®432 for maritime and port facilities: marine cooling systems, desalination support, and coastal industrial operations.",
  openGraph: {
    title: "Maritime & Port Solutions | Mexel Energy Sustain",
    description:
      "Cooling-water treatment for port facilities, marine terminals, and coastal infrastructure.",
  },
};

export default function PortsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-slate-900 z-0">
          <Image
            src="/ports-v2.webp?v=4"
            alt="Maritime and port facilities"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 rounded-full mb-6 border border-emerald-500/20">
              Industries / Ports & Harbours
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-[1.1]">
              Protection for <br />
              <span className="text-emerald-400">Coastal Asset Clusters.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl mb-10">
              Seawater cooling systems face unique challenges from macro-fouling and aggressive corrosion.
              TES provides a non-oxidising solution that protects critical marine infrastructure.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="/contact" size="lg" className="shadow-xl shadow-emerald-900/40 hover:-translate-y-1">
                Request a Pilot Study
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Overview */}
      <section className="py-20 lg:py-32 border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading
                tag="Marine Engineering"
                title="Managing Seawater Loops."
                description="Port facilities and coastal terminals rely on once-through or open-loop seawater systems that are highly susceptible to biological ingress."
              />
              <ul className="space-y-6">
                {[
                  { title: "Macro-Fouling Control", desc: "Prevent the attachment of mussels, barnacles, and algae in intake galleries and pipelines." },
                  { title: "Corrosion Inhibition", desc: "Film-forming chemistry provides a barrier against chloride-driven corrosion in metal alloy systems." },
                  { title: "Environmental Compliance", desc: "Reduce reliance on high-concentration chlorine, meeting stringent marine discharge standards." }
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
                    src="/ports-v2.webp?v=4"
                    alt="Port & Marine Cooling Schematic"
                    fill
                    className="object-contain bg-white"
                  />
                </div>
                <div className="mt-8 text-center">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em]">Typical Maritime Cooling Layout</p>
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
              { title: "Asset Longevity", desc: "Protect expensive titanium and copper-nickel alloys from under-deposit corrosion and pitting." },
              { title: "Sustainable Discharge", desc: "Eco-friendly chemistry ensures minimal impact on local marine ecosystems and biodiversity." },
              { title: "Operational Continuity", desc: "Reduce the need for mechanical intake cleaning and unplanned marine-growth related shutdowns." }
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

      {/* CTA Section */}
      <section className="py-24 lg:py-32 text-center bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Secure Your Coastal Infrastructure."
            description="Contact our marine engineering specialists to discuss a tailored fouling control strategy for your port or coastal facility."
            centered
          />
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/contact" size="md">
              Contact Marine Team
            </Button>
            <Button href="/knowledge-hub/case-studies" variant="outline" size="md">
              View Marine Case Studies
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
