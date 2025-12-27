'use client';

import { cn } from '@/lib/utils';
import FadeIn from '@/components/FadeIn';

interface SectionHeadingProps {
    tag?: string;
    title: string;
    description?: string;
    centered?: boolean;
    className?: string;
    dark?: boolean;
}

export default function SectionHeading({
    tag,
    title,
    description,
    centered = false,
    className,
    dark = false,
}: SectionHeadingProps) {
    return (
        <FadeIn>
            <div
                className={cn(
                    'mb-12 lg:mb-16',
                    centered && 'text-center',
                    className
                )}
            >
                {tag && (
                    <span
                        className={cn(
                            'inline-block px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] rounded-full mb-4',
                            dark
                                ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                                : 'bg-emerald-50 text-emerald-700 border border-emerald-100'
                        )}
                    >
                        {tag}
                    </span>
                )}
                <h2
                    className={cn(
                        'text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 leading-[1.1]',
                        dark ? 'text-white' : 'text-slate-900'
                    )}
                >
                    {title}
                </h2>
                {description && (
                    <p
                        className={cn(
                            'text-lg md:text-xl leading-relaxed max-w-3xl',
                            centered && 'mx-auto',
                            dark ? 'text-slate-400' : 'text-slate-600'
                        )}
                    >
                        {description}
                    </p>
                )}
            </div>
        </FadeIn>
    );
}
