'use client';

import Link from 'next/link';
import BeforeAfterSlider from './BeforeAfterSlider';
import FadeIn from '@/components/FadeIn';
import { NavIcons } from './icons/NavIcons';
import Button from './ui/Button';

export default function PremiumHero() {
    return (
        <section className="relative min-h-[90vh] flex items-center pt-24 pb-16 overflow-hidden bg-white">
            {/* Decorative Blur Backgrounds */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-50/50 -skew-x-12 transform translate-x-1/4 pointer-events-none z-0" />
            <div className="absolute top-24 left-10 w-64 h-64 bg-emerald-200/20 rounded-full blur-3xl pointer-events-none z-0" />

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10 w-full">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                    <div className="max-w-2xl">
                        <FadeIn>
                            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50/50 px-3 py-1 mb-8">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                </span>
                                <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-800">
                                    Thermal Efficiency Solution
                                </span>
                            </div>

                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[1.05] mb-8">
                                Restore Thermal <br />
                                <span className="text-emerald-600">Capability.</span> <br />
                                Verify Results.
                            </h1>

                            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-xl mb-10">
                                A disciplined engineering approach to condenser stability.
                                Move beyond guesswork with RT&D-aligned chemical surface
                                treatment and traceable performance data.
                            </p>

                            <div className="flex flex-wrap gap-4 mb-12">
                                <Button href="/contact" size="lg" className="cta-pulse">
                                    Request a Pilot Study
                                </Button>
                                <Button href="/products" variant="outline" size="lg">
                                    Technical Specs
                                </Button>
                            </div>

                            <div className="grid grid-cols-2 gap-8 border-t border-slate-100 pt-10">
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center text-emerald-600 flex-shrink-0">
                                        <NavIcons.CheckCircle className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <div className="text-xs font-bold text-slate-900 uppercase tracking-wider">M&V Protocol</div>
                                        <div className="text-xs text-slate-500 mt-1">Audit-Ready Evidence</div>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center text-emerald-600 flex-shrink-0">
                                        <NavIcons.Data className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <div className="text-xs font-bold text-slate-900 uppercase tracking-wider">Live IoT</div>
                                        <div className="text-xs text-slate-500 mt-1">Continuous Traceability</div>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    </div>

                    <div className="relative lg:ml-auto w-full max-w-[600px]">
                        <FadeIn delay={200}>
                            <div className="relative z-10 w-full aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl shadow-slate-200 border border-slate-200/50 bg-slate-100">
                                <BeforeAfterSlider
                                    className="absolute inset-0"
                                    beforeImage="/images/hero/before-fouled-tubes-v3.webp"
                                    afterImage="/images/hero/after-clean-tubes-v3.webp"
                                    beforeLabel="FOULED TUBES"
                                    afterLabel="CLEAN TUBES WITH MEXEL®432"
                                    captionTitle="ILLUSTRATIVE RESULT"
                                    caption="Visual evidence of Mexel®432 effectiveness. Fouling removed, thermal transfer restored."
                                    beforeAlt="Heavily fouled condenser tubes before treatment"
                                    afterAlt="Clean condenser tubes after Mexel®432 treatment"
                                />
                            </div>

                            {/* Floating Badge */}
                            <div className="absolute -bottom-6 -left-6 z-20 bg-white rounded-2xl p-6 shadow-xl border border-slate-100 max-w-[200px] animate-float">
                                <div className="text-3xl font-bold text-emerald-600">50MW+</div>
                                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">
                                    Recovered capacity
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </div>
        </section>
    );
}
