'use client';

import Link from 'next/link';
import Image from 'next/image';
import { INDUSTRIES_DATA } from '@/lib/data';
import FadeIn from '@/components/FadeIn';
import { NavIcons, ArrowRightIcon } from './icons/NavIcons';
import Button from './ui/Button';
import { cn } from '@/lib/utils';

export default function VisualIndustryGrid() {
    return (
        <section className="relative py-24 lg:py-32 overflow-hidden bg-slate-50">
            {/* Background patterns */}
            <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 lg:mb-16 gap-6">
                    <div className="max-w-2xl">
                        <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-widest text-emerald-700 bg-emerald-50 rounded-full mb-4">
                            Our Expertise
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
                            Operational Impact Across Industrial Verticals
                        </h2>
                    </div>
                    <Button
                        href="/industries"
                        variant="outline"
                        size="sm"
                        className="group"
                    >
                        Explore all sectors
                        <ArrowRightIcon className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {INDUSTRIES_DATA.map((industry, index) => (
                        <FadeIn key={industry.id} delay={index * 100}>
                            <div className="relative group">
                                {/* Animated gradient blob that appears on hover */}
                                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/15 to-secondary-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 group-hover:blur-2xl transition-all duration-700" aria-hidden="true" />

                                <Link
                                    href={`/industries/${industry.slug}`}
                                    className="relative flex flex-col h-[420px] overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border border-slate-200/60 hover:border-emerald-300"
                                >
                                {/* Background Image with Overlay */}
                                <div className="absolute inset-0 z-0">
                                    <Image
                                        src={industry.image}
                                        alt={industry.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                                </div>

                                {/* Content */}
                                <div className="relative z-10 flex flex-col h-full p-8 justify-end">
                                    <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-emerald-500/20 backdrop-blur-md border border-white/10 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                                        {industry.icon && <industry.icon className="w-6 h-6" />}
                                    </div>

                                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                                        {industry.title}
                                    </h3>

                                    <p className="text-slate-300 text-sm leading-relaxed mb-6 line-clamp-2 group-hover:text-white transition-colors">
                                        {industry.description}
                                    </p>

                                    <ul className="space-y-2 mb-8 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                        {industry.benefits?.slice(0, 2).map((benefit) => (
                                            <li key={benefit} className="flex items-center gap-2 text-xs font-medium text-emerald-400">
                                                <span className="w-1 h-1 rounded-full bg-emerald-500" />
                                                {benefit}
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="flex items-center gap-2 text-sm font-bold text-white group-hover:text-emerald-400 transition-colors">
                                        Case Studies
                                        <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                    </div>
                                </div>

                                {/* Sliding accent border at bottom */}
                                <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-emerald-500 via-secondary-500 to-emerald-500 group-hover:w-full transition-all duration-700 rounded-full z-20" />
                            </Link>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
