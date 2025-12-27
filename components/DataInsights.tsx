'use client';

import { useState, useEffect, useRef } from 'react';
import { STATS_DATA } from '@/lib/data';
import FadeIn from '@/components/FadeIn';
import { cn } from '@/lib/utils';

// Count-up hook for animated numbers
function useCountUp(target: number, duration: number = 2000, trigger: boolean = false) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!trigger) return;

        let startTime: number | null = null;
        let animationFrame: number;

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            setCount(Math.floor(progress * target));

            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate);
            }
        };

        animationFrame = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationFrame);
    }, [target, duration, trigger]);

    return count;
}

export default function DataInsights() {
    const [hasAnimated, setHasAnimated] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setHasAnimated(true);
                }
            },
            { threshold: 0.2 }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section className="bg-slate-900 py-24 lg:py-32 overflow-hidden relative" ref={containerRef}>
            {/* Decorative background elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(16,185,129,0.05),transparent_50%)]" />

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    <div>
                        <FadeIn>
                            <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-emerald-400 bg-emerald-500/10 rounded-full mb-6 border border-emerald-500/20">
                                Verified Proof
                            </span>
                            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-8 leading-tight">
                                Empirical Thermal <br />
                                <span className="text-emerald-400">Recovery Results.</span>
                            </h2>
                            <p className="text-slate-400 text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
                                TES doesn't rely on chemical projections. We verify impact through normalized
                                heat rate delta, vacuum stability, and TTD trends—traceable to source data.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-4 pr-6 transition-all duration-300 hover:bg-white/10 hover:border-white/20">
                                    <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <span className="text-sm font-semibold text-white">RT&D Protocol Aligned</span>
                                </div>
                                <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-4 pr-6 transition-all duration-300 hover:bg-white/10 hover:border-white/20">
                                    <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </div>
                                    <span className="text-sm font-semibold text-white">Live Performance Monitoring</span>
                                </div>
                            </div>
                        </FadeIn>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                        {STATS_DATA.map((stat, index) => (
                            <StatCard
                                key={stat.id}
                                stat={stat}
                                index={index}
                                trigger={hasAnimated}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function StatCard({ stat, index, trigger }: { stat: any, index: number, trigger: boolean }) {
    const count = useCountUp(stat.value, 2000, trigger);

    return (
        <FadeIn delay={index * 100}>
            <div className="group relative bg-[#131b2b] border border-white/5 rounded-2xl p-8 transition-all duration-300 hover:border-emerald-500/30 hover:shadow-[0_0_30px_rgba(16,185,129,0.1)] hover:scale-105">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                </div>

                <div className="text-4xl md:text-5xl font-bold text-white mb-2 tabular-nums">
                    {count}{stat.suffix}
                </div>
                <div className="text-emerald-400 font-bold text-sm uppercase tracking-widest mb-4">
                    {stat.label}
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">
                    {stat.description}
                </p>
            </div>
        </FadeIn>
    );
}
