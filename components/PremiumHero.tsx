'use client';

import Link from 'next/link';

export default function PremiumHero() {
    return (
        <section className="relative min-h-[90vh] flex items-center pt-24 pb-16 overflow-hidden bg-white">
            {/* CLEAN BACKGROUND (No Blurs/Distractions) */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50 -skew-x-12 transform translate-x-1/4 pointer-events-none z-0" />

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10 w-full">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

                    {/* LEFT COLUMN: The Engineering Pitch */}
                    <div className="max-w-2xl">

                        {/* 1. PRODUCT CATEGORY (Not Service) */}
                        <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 mb-8">
                            <span className="relative flex h-2 w-2">
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
                            </span>
                            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-700">
                                Emulsion Technology &bull; Cooling Water
                            </span>
                        </div>

                        {/* 2. THE HEADLINE (Outcome Focused) */}
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[1.05] mb-8">
                            Restore Condenser <br />
                            <span className="text-emerald-700">Vacuum.</span> <br />
                            Verify the MW Gain.
                        </h1>

                        {/* 3. THE SUB-HEAD (No estimates, No RT&D name-dropping) */}
                        <p className="text-lg md:text-xl text-slate-700 leading-relaxed max-w-xl mb-10 font-medium">
                            Move beyond guesswork. We use measurable <strong>thermodynamic baselines</strong> to verify condenser performance.
                            <br /><br />
                            No estimates. No "managed service" contracts. Just raw data and a solution that cleans the tubes while the unit runs.
                        </p>

                        {/* 4. THE CALL TO ACTION (Direct Line for Emergencies) */}
                        <div className="flex flex-wrap gap-4 mb-12">
                            {/* Primary Button */}
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-8 py-4 text-sm font-semibold text-white shadow-sm hover:bg-slate-800 transition-colors"
                            >
                                Request Specs
                            </Link>

                            {/* WhatsApp Button: Bypasses the broken Email Server */}
                            <a
                                href="https://wa.me/27794648298"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center rounded-lg border border-emerald-600 px-8 py-4 text-sm font-semibold text-emerald-700 hover:bg-emerald-50 transition-colors"
                            >
                                <span className="mr-2">⚡</span> Talk to Engineering
                            </a>
                        </div>

                        {/* 5. THE TRUST SIGNALS (Compliance & Data) */}
                        <div className="grid grid-cols-2 gap-8 border-t border-slate-200 pt-10">
                            <div className="flex gap-4">
                                <div className="w-10 h-10 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center text-emerald-700 flex-shrink-0">
                                    {/* Inline SVG: Check Circle */}
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div>
                                    <div className="text-xs font-bold text-slate-900 uppercase tracking-wider">PFMA Compliant</div>
                                    <div className="text-xs text-slate-600 mt-1">Fixed-Cost Supply</div>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-10 h-10 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center text-emerald-700 flex-shrink-0">
                                    {/* Inline SVG: Data/Chart */}
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                        <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.035-.84-1.875-1.875-1.875h-.75zM9.75 8.625c-1.035 0-1.875.84-1.875 1.875v8.25c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V10.5c0-1.035-.84-1.875-1.875-1.875h-.75zM3 13.125c-1.035 0-1.875.84-1.875 1.875v3.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875v-3.75c0-1.035-.84-1.875-1.875-1.875h-.75z" />
                                    </svg>
                                </div>
                                <div>
                                    <div className="text-xs font-bold text-slate-900 uppercase tracking-wider">Traceability</div>
                                    <div className="text-xs text-slate-600 mt-1">Live Performance Data</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDE: The Engineering Minimalist Layout */}
                    <div className="relative mt-16 lg:mt-0 lg:col-span-6 xl:col-span-6 lg:flex lg:items-center">
                        <div className="relative w-full rounded-2xl border border-slate-800 bg-slate-900/80 p-8 backdrop-blur-xl shadow-2xl">

                            {/* Header */}
                            <div className="flex items-center justify-between border-b border-slate-800 pb-6 mb-6">
                                <div>
                                    <h3 className="text-lg font-semibold text-white">Performance Delta</h3>
                                    <p className="text-sm text-slate-400">Typical validated recovery</p>
                                </div>
                                <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                            </div>

                            {/* Two Killer Metrics */}
                            <div className="grid grid-cols-2 gap-8">
                                {/* Metric 1 */}
                                <div>
                                    <div className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-1">
                                        Vacuum Gain
                                    </div>
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-4xl lg:text-5xl font-bold text-white tracking-tight">
                                            4.5
                                        </span>
                                        <span className="text-lg font-medium text-emerald-400">kPa</span>
                                    </div>
                                    <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                                        Restored back-pressure to design spec.
                                    </p>
                                </div>

                                {/* Metric 2 */}
                                <div className="border-l border-slate-800 pl-8">
                                    <div className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-1">
                                        Payback Period
                                    </div>
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-4xl lg:text-5xl font-bold text-white tracking-tight">
                                            &lt;12
                                        </span>
                                        <span className="text-lg font-medium text-emerald-400">Months</span>
                                    </div>
                                    <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                                        Self-funding via fuel efficiency gains.
                                    </p>
                                </div>
                            </div>

                            {/* Footer Verification */}
                            <div className="mt-8 pt-6 border-t border-slate-800 flex items-center gap-2 text-xs text-slate-400">
                                <svg className="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                Verified via ASME PTC 12.2 Methodology
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}