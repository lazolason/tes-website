'use client';

import { useState } from 'react';
import { PROCESS_STEPS } from '@/lib/data';
import { cn } from '@/lib/utils';
import FadeIn from '@/components/FadeIn';

export default function ModernProcess() {
    const [activeStep, setActiveStep] = useState(0);

    return (
        <section className="py-24 lg:py-32 bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
                    <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-widest text-emerald-700 bg-emerald-50 rounded-full mb-4">
                        Our Methodology
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
                        A Disciplined Loop of Efficiency.
                    </h2>
                    <p className="text-slate-600 text-lg">
                        Our 4-step integration ensures that thermal recovery isn't just a
                        chemical dosing event—it's a verifiable system of performance.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                    {/* Steps List */}
                    <div className="space-y-4">
                        {PROCESS_STEPS.map((step, index) => (
                            <button
                                key={step.number}
                                onClick={() => setActiveStep(index)}
                                className={cn(
                                    'flex items-start gap-6 p-6 rounded-2xl text-left transition-all duration-300 w-full',
                                    activeStep === index
                                        ? 'bg-emerald-50 border-l-4 border-emerald-600 shadow-sm'
                                        : 'bg-transparent border-l-4 border-transparent hover:bg-slate-50'
                                )}
                            >
                                <div className={cn(
                                    'flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-colors',
                                    activeStep === index ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-500'
                                )}>
                                    {step.number}
                                </div>
                                <div>
                                    <h3 className={cn(
                                        'text-lg font-bold transition-colors',
                                        activeStep === index ? 'text-emerald-900' : 'text-slate-900'
                                    )}>
                                        {step.title}
                                    </h3>
                                    <p className="text-emerald-700 font-semibold text-xs uppercase tracking-wider mb-2">
                                        {step.subtitle}
                                    </p>
                                    <p className={cn(
                                        'text-sm leading-relaxed transition-colors',
                                        activeStep === index ? 'text-slate-700' : 'text-slate-500'
                                    )}>
                                        {step.detail}
                                    </p>
                                </div>
                            </button>
                        ))}
                    </div>

                    {/* Visual Representation */}
                    <div className="relative">
                        <FadeIn>
                            <div className="relative aspect-square max-w-[500px] mx-auto">
                                {/* Circular visualization */}
                                <div className="absolute inset-0 rounded-full border-2 border-dashed border-slate-200 animate-[spin_60s_linear_infinite]" />

                                {/* Center visual */}
                                <div className="absolute inset-8 rounded-full bg-slate-50 flex items-center justify-center overflow-hidden border border-slate-100 shadow-inner">
                                    <div className="text-center p-8">
                                        <div className="text-6xl font-bold text-emerald-600 mb-2">
                                            {PROCESS_STEPS[activeStep].number}
                                        </div>
                                        <div className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-tighter">
                                            {PROCESS_STEPS[activeStep].title}
                                        </div>
                                        <div className="w-12 h-1 bg-emerald-500 mx-auto rounded-full" />
                                    </div>
                                </div>

                                {/* Orbiting nodes */}
                                {PROCESS_STEPS.map((step, index) => {
                                    const angle = (index * 90) - 90; // Start at top
                                    const radian = (angle * Math.PI) / 180;
                                    const radius = 50; // Percentage
                                    const x = 50 + radius * Math.cos(radian);
                                    const y = 50 + radius * Math.sin(radian);

                                    return (
                                        <div
                                            key={step.number}
                                            className={cn(
                                                'absolute w-12 h-12 -ml-6 -mt-6 rounded-full flex items-center justify-center border-2 transition-all duration-500 z-20',
                                                activeStep === index
                                                    ? 'bg-emerald-600 border-white text-white shadow-xl scale-125'
                                                    : 'bg-white border-slate-200 text-slate-400'
                                            )}
                                            style={{ left: `${x}%`, top: `${y}%` }}
                                        >
                                            <span className="font-bold text-xs">{step.number}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        </FadeIn>

                        {/* Context tagline */}
                        <div className="mt-12 text-center">
                            <p className="text-sm font-bold text-slate-900 uppercase tracking-widest">
                                System Overview
                            </p>
                            <p className="text-xs text-slate-500 mt-2">
                                Click a step to explore our deployment framework.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
