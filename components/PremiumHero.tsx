'use client';

import Link from 'next/link';
import Image from 'next/image';
import { cn } from '../lib/utils';
import { buttonVariants } from './ui/Button';
import { trackCompanyProfileClick, trackEvent, trackWhatsAppClick } from '@/lib/analytics';

export default function PremiumHero() {
    return (
        <section className="relative min-h-[90vh] flex items-center pt-14 sm:pt-16 md:pt-20 pb-16 overflow-hidden bg-slate-950">
            {/* BACKGROUND IMAGE */}
            <Image
                src="/power-gen.webp"
                alt=""
                fill
                priority
                className="object-cover object-center opacity-30"
                sizes="100vw"
            />
            {/* Gradient overlay — stronger on the left so text is always readable */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/40 pointer-events-none z-[1]" />
            {/* Bottom fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950/60 to-transparent pointer-events-none z-[1]" />

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10 w-full">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

                    {/* LEFT COLUMN: The Engineering Pitch — single unified fade-in */}
                    <div className="max-w-2xl animate-fade-in">

                        {/* 1. PRODUCT CATEGORY (Not Service) */}
                        <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm px-3 py-1 mb-8">
                            <span className="relative flex h-2 w-2">
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-400"></span>
                            </span>
                            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-300">
                                TES: Thermal Efficiency Solution &bull; Mexel®432
                            </span>
                        </div>

                        {/* 2. THE HEADLINE (Outcome Focused) */}
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05] mb-8">
                            Industrial Cooling <br />
                            Performance <span className="text-brand-400">Reviewed.</span> <br />
                            Evidence First.
                        </h1>

                        {/* 3. THE SUB-HEAD (focused on verification) */}
                        <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-xl mb-10 font-medium">
                            TES combines Mexel®432 chemistry with IoT-enabled dosing and performance tracking for condenser and cooling-water systems in power generation, mining, data-centre and HVAC environments.
                            <br /><br />
                            Move beyond generic chemical claims. We use measurable <strong className="text-white">thermodynamic baselines</strong> to review cooling performance.
                            <br /><br />
                            Prior Eskom RT&amp;D work at Kriel is treated as technical evidence, with future deployments subject to site-specific verification.
                        </p>

                        {/* 4. THE CALL TO ACTION (Direct Line for Emergencies) */}
                        <div className="flex flex-wrap gap-4 mb-12">
                            {/* Primary Button */}
                            <Link
                                href="/mexel432"
                                className={cn(buttonVariants({ variant: "default", size: "lg" }), "bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-900/40")}
                                onClick={() =>
                                    trackEvent('datasheet_click', {
                                        event_category: 'engagement',
                                        cta_location: 'hero',
                                        destination: '/mexel432',
                                    })
                                }
                            >
                                Mexel®432 Data Sheet
                            </Link>

                            {/* WhatsApp Button */}
                            <a
                                href="https://wa.me/27794648298"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={cn(buttonVariants({ variant: "outline", size: "lg" }), "border-brand-500 text-brand-400 hover:bg-brand-400/10")}
                                onClick={() => trackWhatsAppClick('hero')}
                            >
                                <span className="mr-2">⚡</span> Talk to Engineering
                            </a>

                        </div>

                        {/* 5. THE TRUST SIGNALS (Compliance & Data) */}
                        <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-10">
                            <div className="flex gap-4">
                                <div className="w-10 h-10 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center text-brand-400 flex-shrink-0">
                                    {/* Inline SVG: Check Circle */}
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div>
                                    <div className="text-xs font-bold text-white uppercase tracking-wider">Structured Review</div>
                                    <div className="text-xs text-slate-400 mt-1">Baseline-led scope</div>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-10 h-10 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center text-brand-400 flex-shrink-0">
                                    {/* Inline SVG: Data/Chart */}
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                        <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.035-.84-1.875-1.875-1.875h-.75zM9.75 8.625c-1.035 0-1.875.84-1.875 1.875v8.25c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V10.5c0-1.035-.84-1.875-1.875-1.875h-.75zM3 13.125c-1.035 0-1.875.84-1.875 1.875v3.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875v-3.75c0-1.035-.84-1.875-1.875-1.875h-.75z" />
                                    </svg>
                                </div>
                                <div>
                                    <div className="text-xs font-bold text-white uppercase tracking-wider">Traceability</div>
                                    <div className="text-xs text-slate-400 mt-1">Live Performance Data</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDE: The Engineering Minimalist Layout */}
                    <div className="relative mt-16 lg:mt-0 lg:col-span-6 xl:col-span-6 lg:flex lg:items-center">
                        <div className="relative w-full rounded-2xl border border-white/10 bg-slate-900/60 p-8 backdrop-blur-2xl shadow-2xl shadow-black/40">

                            {/* Header */}
                            <div className="flex items-center justify-between border-b border-slate-800 pb-6 mb-6">
                                <div>
                                    <h3 className="text-lg font-semibold text-white">Mexel®432 Evidence Pathway</h3>
                                    <p className="text-sm text-slate-400">Kriel Power Station — 2018 RT&amp;D evidence</p>
                                </div>
                                <div className="h-2 w-2 rounded-full bg-brand-500" />
                            </div>

                            {/* Two Killer Metrics */}
                            <div className="grid grid-cols-2 gap-8">
                                {/* Metric 1 */}
                                <div>
                                    <div className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-1">
                                        Kriel Cleanliness Factor
                                    </div>
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-4xl lg:text-5xl font-bold text-white tracking-tight">
                                            Approx. 30
                                        </span>
                                        <span className="text-lg font-medium text-brand-400">%</span>
                                    </div>
                                    <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                                        Report conclusion: improvement within 3 days of application.
                                    </p>
                                </div>

                                {/* Metric 2 */}
                                <div className="border-l border-slate-800 pl-8">
                                    <div className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-1">
                                        Review Output
                                    </div>
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-3xl lg:text-4xl font-bold text-brand-700 tracking-tight">
                                            Site
                                        </span>
                                        <span className="text-lg font-medium text-brand-400">Specific</span>
                                    </div>
                                    <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                                        Heat-rate, fuel or emissions impact requires verified plant data.
                                    </p>
                                </div>
                            </div>

                            {/* Footer Verification */}
                            <div className="mt-8 pt-6 border-t border-slate-800 flex items-center gap-2 text-xs text-slate-400">
                                <svg className="w-4 h-4 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                ASME PTC 12.2-aligned review where station data supports it
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
