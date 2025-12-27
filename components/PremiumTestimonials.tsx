'use client';

import FadeIn from '@/components/FadeIn';
import { TESTIMONIALS_DATA } from '@/lib/data';
import SectionHeading from './ui/SectionHeading';

export default function PremiumTestimonials() {
    return (
        <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
            {/* Decorative quotes background */}
            <div className="absolute top-24 left-12 text-[15rem] leading-none font-serif text-slate-50 select-none pointer-events-none">
                &ldquo;
            </div>

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <SectionHeading
                    tag="Testimonials"
                    title="Voice of the Industry."
                    description="Straight feedback from station chemistry teams and plant managers 
            operating TES across utility and industrial sectors."
                    centered
                />

                <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                    {TESTIMONIALS_DATA.map((t, index) => (
                        <FadeIn key={t.id} delay={index * 150}>
                            <div className="relative flex flex-col h-full bg-slate-50 rounded-3xl p-8 lg:p-12 border border-slate-100 transition-all duration-300 hover:shadow-xl hover:bg-white group">
                                <div className="mb-8">
                                    {[1, 2, 3, 4, 5].map((s) => (
                                        <span key={s} className="text-emerald-500 text-lg">★</span>
                                    ))}
                                </div>

                                <blockquote className="text-xl lg:text-2xl font-medium text-slate-900 leading-relaxed mb-10 flex-1 italic">
                                    &ldquo;{t.quote}&rdquo;
                                </blockquote>

                                <div className="flex items-center gap-4 border-t border-slate-200 pt-8">
                                    <div className="w-12 h-12 rounded-full bg-emerald-600 flex items-center justify-center text-white font-bold text-lg">
                                        {t.author.charAt(0)}
                                    </div>
                                    <div>
                                        <div className="font-bold text-slate-900">{t.author}</div>
                                        <div className="text-sm text-slate-500">{t.role}</div>
                                        <div className="text-sm font-bold text-emerald-700 mt-1">{t.company}</div>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
