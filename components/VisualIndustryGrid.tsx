'use client';

import Link from 'next/link';
import Image from 'next/image';
import { INDUSTRIES_DATA } from '@/lib/data';
import { ArrowRightIcon } from './icons/NavIcons';

export default function VisualIndustryGrid() {

    // STRATEGY: Filter specifically for the "Big Budget" sectors.
    // We match keywords to find the right cards from your data file.
    const TARGET_KEYWORDS = ['Power', 'Mining', 'HVAC', 'Data', 'Heavy'];

    const strategicIndustries = INDUSTRIES_DATA.filter(industry =>
        TARGET_KEYWORDS.some(keyword => industry.title.includes(keyword))
    );

    // FALLBACK: If the filter matches nothing (e.g. typos), show the first 3.
    const displayIndustries = strategicIndustries.length > 0
        ? strategicIndustries
        : INDUSTRIES_DATA.slice(0, 3);

    return (
        <section className="relative py-24 bg-white border-t border-slate-200">
            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                {/* HEADLINE: Pure Engineering Focus */}
                <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-6">
                    <div className="max-w-2xl">
                        <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-widest text-slate-500 border border-slate-200 bg-slate-50 rounded-full mb-4">
                            Core Sectors
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 leading-tight">
                            High-Load Industrial Cooling
                        </h2>
                        <p className="mt-4 text-lg text-slate-600">
                            We specialize in critical vacuum recovery for utilities and energy-intensive processing plants.
                        </p>
                    </div>
                    {/* BUTTON REMOVED: No "Exploring". Focus only on what matters. */}
                </div>

                {/* THE GRID: Static, Clean, Professional */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {displayIndustries.map((industry) => (
                        <div key={industry.id} className="relative group">
                            <Link
                                href={`/industries/${industry.slug}`}
                                className="relative flex flex-col h-[400px] overflow-hidden rounded-xl bg-slate-900 shadow-sm border border-slate-200 group-hover:shadow-xl transition-shadow duration-300"
                            >
                                {/* Background Image: Darkened for Text Readability */}
                                <div className="absolute inset-0 z-0">
                                    {/* Note: We keep the image but kill the 'Scale' animation */}
                                    <Image
                                        src={industry.image}
                                        alt={industry.title}
                                        fill
                                        className="object-cover opacity-60"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                    {/* Professional Gradient Overlay (Static) */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
                                </div>

                                {/* Content */}
                                <div className="relative z-10 flex flex-col h-full p-8 justify-end">
                                    <h3 className="text-2xl font-bold text-white mb-2">
                                        {industry.title}
                                    </h3>

                                    <p className="text-slate-300 text-sm leading-relaxed mb-6 line-clamp-2">
                                        {industry.description}
                                    </p>

                                    {/* Benefits List: Always Visible (No Hover Hide/Seek) */}
                                    <ul className="space-y-2 mb-6">
                                        {industry.benefits?.slice(0, 2).map((benefit) => (
                                            <li key={benefit} className="flex items-center gap-2 text-xs font-medium text-emerald-400">
                                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                                {benefit}
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="flex items-center gap-2 text-sm font-bold text-white border-t border-white/10 pt-4">
                                        View Case Studies
                                        <ArrowRightIcon className="w-4 h-4 text-emerald-500" />
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}