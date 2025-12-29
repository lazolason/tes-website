import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import type { Metadata } from "next";
import { ArrowRightIcon } from "@/components/icons/NavIcons";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Agriculture & Irrigation | Industries",
  description:
    "TES and Mexel®432 for agricultural operations: cleaner irrigation systems, better evaporative cooling, reduced maintenance.",
  openGraph: {
    title: "Agriculture & Irrigation Solutions | Mexel Energy Sustain",
    description:
      "Cooling-water treatment for greenhouses, cold storage, aquaculture and irrigation networks.",
  },
};

export default function AgriculturePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-slate-900 z-0">
          <Image
            src="/industry-agriculture.webp?v=4"
            alt="Agricultural cooling and irrigation systems"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 rounded-full mb-6 border border-emerald-500/20">
              Industries / Agriculture
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-[1.1]">
              Reliability for <br />
              <span className="text-emerald-400">Rural Water Networks.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl mb-10">
              Protecting irrigation infrastructure and climate control systems from
              biological fouling and corrosion in variable-quality water environments.
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
                tag="Agri-Engineering"
                title="Sustaining Flow & Cooling."
                description="Agriculture relies on consistent water flow and efficient cooling for packhouses, cold storage, and greenhouse environments."
              />
              <ul className="space-y-6">
                {[
                  { title: "Bio-Deposit Control", desc: "Prevent the build-up of organic slime and algae in irrigation emitters, pumps, and manifolds." },
                  { title: "Cold Storage Uptime", desc: "Maintain the efficiency of refrigeration cooling loops during peak harvest periods." },
                  { title: "Infrastructure Protection", desc: "Extend the life of pipelines and pumps by mitigating under-deposit corrosion and scale." }
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
                    src="/industry-agriculture.webp?v=4"
                    alt="Agricultural Water System"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <span className="bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-full border border-white/20">
                      Visual Context Only
                    </span>
                  </div>
                </div>
                <div className="mt-8 text-center">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em]">Large-Scale Irrigation Context</p>
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
              { title: "Operational Continuity", desc: "Reduce unscheduled pump maintenance and irrigation line flushing requirements." },
              { title: "Water Stewardship", desc: "Maintain efficiency even with high organic loading from dam and river water sources." },
              { title: "Sustainable Chemistry", desc: "FDA-aligned, non-oxidising chemistry reduces the toxic load on local water tables." }
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
            title="Maintain Your Agri-Cooling Edge."
            description="Contact our team to discuss how TES can stabilize your cooling and irrigation performance."
            centered
          />
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/contact" size="md">
              Contact Agri Engineering
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
