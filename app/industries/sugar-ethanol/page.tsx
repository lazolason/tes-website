import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import type { Metadata } from "next";
import { ArrowRightIcon } from "@/components/icons/NavIcons";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
    title: "Sugar & Ethanol | Industries",
    description:
        "TES and Mexel®432 for the sugar industry: improve evaporator efficiency, reduce scale formation, and extend intervals between boil-outs.",
    openGraph: {
        title: "Sugar & Ethanol Solutions | Mexel Energy Sustain",
        description:
            "Operational efficiency in sugar mills and ethanol distilleries through advanced surface treatment.",
    },
};

export default function SugarEthanolPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative py-24 lg:py-32 overflow-hidden">
                <div className="absolute inset-0 bg-slate-900 z-0">
                    <Image
                        src="/sugar-ethanol-v2.webp?v=4"
                        alt="Sugar mill process infrastructure"
                        fill
                        className="object-cover opacity-40"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent" />
                </div>

                <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-50/10 rounded-full mb-6 border border-emerald-500/20">
                            Industries / Sugar & Ethanol
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-[1.1]">
                            Efficiency for <br />
                            <span className="text-emerald-400">Process Evaporators.</span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl mb-10">
                            In sugar mills and distilleries, heat transfer is the engine of production.
                            TES ensures that evaporators and condensers remain protected from scaling
                            and biological deposits to maximize throughput.
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
                                tag="Technical Overview"
                                title="Maintaining Design Deltas."
                                description="The sugar extraction process involves aggressive thermal cycling. TES provides the film-forming protection needed to keep heat-transfer surfaces clean."
                            />
                            <ul className="space-y-6">
                                {[
                                    { title: "Evaporator Efficiency", desc: "Maintain vacuum and heat transfer rates across multiple-effect evaporators by preventing organic and mineral scaling." },
                                    { title: "Reduced Boil-outs", desc: "Extend the time between chemical boil-outs and mechanical cleaning by stabilizing juice-side and water-side surfaces." },
                                    { title: "Condenser Stability", desc: "Ensure peak vacuum in pan houses through effective biofouling and scale control in cooling circuits." }
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
                                <div className="relative aspect-[16/10] rounded-xl overflow-hidden shadow-2xl border border-white">
                                    <Image
                                        src="/sugar-ethanol-v2.webp?v=4"
                                        alt="Evaporator system visual context"
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-slate-900/20" />
                                </div>
                                <div className="mt-8 text-center text-xs font-bold text-slate-400 uppercase tracking-[0.2em]">
                                    Process Flow Stability
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
                            { title: "Higher Throughput", desc: "Cleaner surfaces mean faster evaporation and higher through-plant processing rates." },
                            { title: "Energy Savings", desc: "Lower steam consumption per ton of sugar processed through improved thermal efficiency." },
                            { title: "Operational Continuity", desc: "Less downtime for cleaning means better alignment with seasonal harvest peaks." }
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
                        title="Optimise Your Extraction Efficiency."
                        description="Discuss your process cooling and evaporator challenges with our sugar industry engineering specialists."
                        centered
                    />
                    <div className="flex flex-wrap justify-center gap-6">
                        <Button href="/contact" size="lg">
                            Contact Sugar Team
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
