import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import FadeIn from "@/components/FadeIn";
import Button from "@/components/ui/Button";
import Tooltip from "@/components/Tooltip";
import { CorrosionIcon, ScalingIcon, EfficiencyIcon, VerificationIcon } from "@/components/BenefitIcons";

export const metadata: Metadata = {
    title: "MexSteam 100 | Boiler & Steam System Treatment",
    description:
        "MexSteam 100: Film-forming amine chemistry for boiler feedwater, condensate return and steam systems. Corrosion protection and deposition control.",
    openGraph: {
        title: "MexSteam 100 | Mexel Energy Sustain",
        description:
            "Advanced boiler treatment for high-pressure steam systems and condensate protection.",
    },
};

export default function MexSteamPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero */}
            <section className="border-b border-slate-200/70 bg-slate-50">
                <div className="mx-auto max-w-7xl px-4 py-16 lg:py-24">
                    <div className="text-center mb-8">
                        <p className="text-xs font-semibold uppercase tracking-widest text-blue-700">
                            MexSteam 100
                        </p>
                        <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                            Boiler & Steam System Protection
                        </h1>
                        <p className="mt-5 max-w-3xl mx-auto text-base leading-relaxed text-slate-600">
                            Film-forming amine chemistry designed for high-pressure boilers, feedwater systems, and condensate return circuits.
                        </p>
                    </div>

                    {/* Product Image */}
                    <FadeIn delay={200}>
                        <div className="relative mt-10 h-64 md:h-96 w-full max-w-4xl mx-auto overflow-hidden rounded-2xl bg-slate-100 border border-slate-200">
                            <Image
                                src="/mexsteam-boiler-system.webp"
                                alt="High-pressure boiler steam system with MexSteam 100 treatment"
                                fill
                                className="object-cover"
                                priority
                                sizes="(max-width: 768px) 100vw, 80vw"
                            />
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* What is MexSteam 100 */}
            <section className="border-b border-slate-200/70">
                <div className="mx-auto max-w-6xl px-4 py-14 lg:py-20">
                    <FadeIn>
                        <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                            What is MexSteam 100?
                        </h2>
                    </FadeIn>
                    <div className="mt-6 grid gap-8 md:grid-cols-2">
                        <FadeIn delay={100}>
                            <div>
                                <p className="text-sm text-slate-700 leading-relaxed">
                                    MexSteam 100 is a <span className="font-semibold">film-forming amine-based treatment</span> designed for boiler feedwater, condensate return and steam systems. It provides multi-function protection in high-temperature, high-pressure boiler environments.
                                </p>
                                <p className="mt-3 text-sm text-slate-700 leading-relaxed">
                                    Unlike traditional oxygen scavengers and neutralising amines that only address specific corrosion mechanisms, MexSteam 100 creates a protective molecular layer on metal surfaces throughout the steam cycle.
                                </p>
                            </div>
                        </FadeIn>
                        <FadeIn delay={200}>
                            <div>
                                <h3 className="text-sm font-semibold text-slate-900">Key Characteristics</h3>
                                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                                    <li>• Film-forming amine (FFA) technology</li>
                                    <li>• Effective in HP/IP/LP boiler circuits</li>
                                    <li>• Condensate return protection</li>
                                    <li>• Compatible with modern feedwater regimes</li>
                                    <li>• Reduces blowdown requirements</li>
                                </ul>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Key Functions */}
            <section className="border-b border-slate-200/70 bg-slate-50">
                <div className="mx-auto max-w-6xl px-4 py-14 lg:py-20">
                    <FadeIn>
                        <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                            Key Functions
                        </h2>
                        <p className="mt-3 text-base text-slate-600">
                            Comprehensive protection mechanisms for steam-generating infrastructure.
                        </p>
                    </FadeIn>
                    <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {[
                            {
                                icon: <CorrosionIcon className="w-6 h-6" />,
                                title: "Corrosion Protection",
                                description: "Forms a protective molecular film on metal surfaces, reducing oxygen and carbonic acid attack.",
                                tooltip: "The amine film acts as a barrier between the metal surface and corrosive agents like dissolved oxygen and carbonic acid, preventing pitting and general corrosion.",
                            },
                            {
                                icon: <ScalingIcon className="w-6 h-6" />,
                                title: "Deposition Control",
                                description: "Prevents scale formation on boiler tubes, economizers and superheaters.",
                                tooltip: "MexSteam 100 modifies the crystal structure of potential scale-forming minerals, preventing them from adhering to heat transfer surfaces.",
                            },
                            {
                                icon: <EfficiencyIcon className="w-6 h-6" />,
                                title: "Condensate pH Stabilisation",
                                description: "Maintains condensate pH within operating ranges, reducing low-pH corrosion.",
                                tooltip: "Neutralizing amines in the formulation elevate the pH of the condensate, neutralizing carbonic acid formed from carbonate breakdown.",
                            },
                            {
                                icon: <VerificationIcon className="w-6 h-6" />,
                                title: "Steam Purity",
                                description: "Minimises carryover and maintains steam quality by reducing deposit formation.",
                                tooltip: "By preventing foaming and carryover in the steam drum, MexSteam 100 ensures that steam quality remains high, protecting downstream turbines and equipment.",
                            },
                        ].map((item, index) => (
                            <FadeIn key={item.title} delay={100 * index}>
                                <div className="group rounded-xl border border-slate-200 bg-white p-6 transition-all duration-200 hover:border-blue-300 hover:shadow-md hover:-translate-y-1">
                                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                                        {item.icon}
                                    </div>
                                    <h3 className="text-sm font-semibold text-slate-900">
                                        <Tooltip content={item.tooltip}>
                                            <span>{item.title}</span>
                                        </Tooltip>
                                    </h3>
                                    <p className="mt-2 text-xs text-slate-600 leading-relaxed">{item.description}</p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* Applications */}
            <section className="border-b border-slate-200/70">
                <div className="mx-auto max-w-6xl px-4 py-14 lg:py-20">
                    <FadeIn>
                        <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                            Typical Applications
                        </h2>
                    </FadeIn>
                    <div className="mt-8 grid gap-6 md:grid-cols-3">
                        {[
                            {
                                title: "Power Generation",
                                items: ["Coal-fired HP boilers", "Gas turbine HRSG", "Biomass boilers", "Nuclear steam generators"],
                            },
                            {
                                title: "Industrial Steam",
                                items: ["Mining process boilers", "Petrochemical steam systems", "Food processing steam", "Pulp & paper recovery boilers"],
                            },
                            {
                                title: "Condensate Systems",
                                items: ["Condensate return lines", "Feedwater circuits", "Deaerator systems", "LP heater protection"],
                            },
                        ].map((section, index) => (
                            <FadeIn key={section.title} delay={100 * index}>
                                <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
                                    <h3 className="text-sm font-semibold text-slate-900">{section.title}</h3>
                                    <ul className="mt-3 space-y-2 text-xs text-slate-700">
                                        {section.items.map((item) => (
                                            <li key={item}>• {item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* Comparison with TES */}
            <section className="border-b border-slate-200/70 bg-emerald-50">
                <div className="mx-auto max-w-6xl px-4 py-14 lg:py-20">
                    <FadeIn>
                        <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                            MexSteam 100 vs TES (Mexel®432)
                        </h2>
                        <p className="mt-3 text-sm text-slate-600 max-w-3xl">
                            Both products use film-forming amine technology but serve different system boundaries.
                        </p>
                    </FadeIn>
                    <div className="mt-8 overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="border-b border-emerald-200">
                                    <th className="text-left py-3 px-4 font-semibold text-slate-900">Attribute</th>
                                    <th className="text-left py-3 px-4 font-semibold text-emerald-700">Mexel®432 (TES)</th>
                                    <th className="text-left py-3 px-4 font-semibold text-blue-700">MexSteam 100</th>
                                </tr>
                            </thead>
                            <tbody className="text-slate-700">
                                <tr className="border-b border-emerald-100">
                                    <td className="py-3 px-4 font-medium">System Boundary</td>
                                    <td className="py-3 px-4">Cooling water (condensers, heat exchangers)</td>
                                    <td className="py-3 px-4">Boiler feedwater, steam, condensate</td>
                                </tr>
                                <tr className="border-b border-emerald-100">
                                    <td className="py-3 px-4 font-medium">Primary Function</td>
                                    <td className="py-3 px-4">Biofouling control, corrosion inhibition</td>
                                    <td className="py-3 px-4">Corrosion protection, scale prevention</td>
                                </tr>
                                <tr className="border-b border-emerald-100">
                                    <td className="py-3 px-4 font-medium">Temperature Range</td>
                                    <td className="py-3 px-4">Ambient to ~60°C</td>
                                    <td className="py-3 px-4">High-pressure steam (up to 540°C)</td>
                                </tr>
                                <tr className="border-b border-emerald-100">
                                    <td className="py-3 px-4 font-medium">Verification</td>
                                    <td className="py-3 px-4">TES protocol (TR, TTD, vacuum)</td>
                                    <td className="py-3 px-4">Separate boiler-side methodology</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section>
                <div className="mx-auto max-w-6xl px-4 py-14 lg:py-20">
                    <div className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-8 shadow-sm md:flex-row md:items-center md:justify-between">
                        <div>
                            <h2 className="text-lg font-semibold text-slate-900">
                                Interested in MexSteam 100 for your boiler system?
                            </h2>
                            <p className="mt-2 text-sm text-slate-600 leading-relaxed max-w-xl">
                                Contact us to discuss how MexSteam 100 can be integrated into your feedwater and condensate circuits.
                            </p>
                        </div>
                        <div className="flex flex-col gap-3">
                            <Button href="/contact" size="lg">
                                Contact Us
                            </Button>
                            <Button href="/tes" variant="ghost" size="md">
                                Learn about TES →
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
