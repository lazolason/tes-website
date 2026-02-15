import React from 'react';
import FadeIn from './FadeIn';

const industries = [
    {
        title: "Power Generation",
        subtitle: "Vacuum Recovery & Heat Rate",
        // Using the new, premium vertical asset
        image: "/power-gen.webp",
        description: "Specialized in 500MW+ condenser circuits. Restoring design-spec back pressure through targeted filming amine intervention."
    },
    {
        title: "Mining & Smelters",
        subtitle: "Process Cooling Continuity",
        // Using the new, premium vertical asset
        image: "/mining-vertical.webp",
        description: "Managing high-heat furnace cooling and compressor loops. Preventing scaling and fouling in harsh, high-solids environments."
    },
    {
        title: "Critical HVAC",
        subtitle: "Efficiency & Risk Mitigation",
        // Using the new, premium vertical asset
        image: "/hvac-vertical.webp",
        description: "Data centres and large-scale commercial cooling. Focus on PUE reduction and rigorous Legionella compliance."
    }
];

export default function VisualIndustryGrid() {
    return (
        <section className="bg-white py-24 sm:py-32 overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">

                {/* The "Baseline Narrative" Header */}
                <FadeIn>
                    <div className="max-w-3xl mb-16">
                        <p className="text-sm font-bold uppercase tracking-widest text-emerald-600">
                            A DISCIPLINED LOOP OF EFFICIENCY
                        </p>
                        <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                            Baseline <span className="text-emerald-500">→</span> intervention <span className="text-emerald-500">→</span> review.
                        </h2>
                        <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                            TES is built on engineering discipline. We establish comparable baselines,
                            log every intervention event, and deliver audit-ready datasets for performance verification.
                        </p>
                    </div>
                </FadeIn>

                {/* The 3-Sector Grid with Fixed Aspect Ratio */}
                <div className="grid grid-cols-1 gap-y-12 md:grid-cols-3 md:gap-x-8 lg:gap-x-12">
                    {industries.map((industry, index) => (
                        <FadeIn key={index} delay={index * 0.1}>
                            <div className="group relative flex flex-col items-start">
                                {/* Image Container - FIXED 4:5 ASPECT RATIO */}
                                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-slate-100 shadow-lg">
                                    <img
                                        src={industry.image}
                                        alt={industry.title}
                                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    {/* Branding Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-90" />

                                    <div className="absolute bottom-6 left-6 right-6">
                                        <p className="text-xs font-bold uppercase tracking-widest text-emerald-400 mb-1">
                                            {industry.subtitle}
                                        </p>
                                        <h3 className="text-2xl font-bold text-white tracking-tight">
                                            {industry.title}
                                        </h3>
                                    </div>
                                </div>

                                {/* Technical Copy */}
                                <p className="mt-6 text-sm leading-relaxed text-slate-600">
                                    {industry.description}
                                </p>

                                <div className="mt-4 flex items-center gap-2 text-sm font-bold text-emerald-700 cursor-pointer hover:text-emerald-600 transition-colors">
                                    View Case Study
                                    <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}