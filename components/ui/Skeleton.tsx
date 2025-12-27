'use client';

import { cn } from '@/lib/utils';

/**
 * Base Skeleton component with shimmer effect
 */
interface SkeletonProps {
    className?: string;
}

export function Skeleton({ className }: SkeletonProps) {
    return (
        <div
            className={cn(
                'relative overflow-hidden rounded-lg bg-slate-100',
                'before:absolute before:inset-0 before:-translate-x-full',
                'before:bg-gradient-to-r before:from-transparent before:via-slate-200/60 before:to-transparent',
                'before:animate-[shimmer_1.5s_infinite]',
                className
            )}
            aria-hidden="true"
        />
    );
}

/**
 * Card Skeleton - for industry cards, testimonial cards, etc.
 */
export function CardSkeleton({ className }: SkeletonProps) {
    return (
        <div className={cn('rounded-xl border border-slate-200 bg-white p-5 shadow-sm', className)}>
            {/* Image placeholder */}
            <Skeleton className="aspect-video w-full rounded-lg" />
            {/* Title */}
            <Skeleton className="mt-4 h-5 w-3/4" />
            {/* Description lines */}
            <Skeleton className="mt-3 h-3 w-full" />
            <Skeleton className="mt-2 h-3 w-5/6" />
        </div>
    );
}

/**
 * Stats Grid Skeleton - for AnimatedStats component
 */
export function StatsGridSkeleton() {
    return (
        <section className="bg-slate-50 py-16">
            <div className="mx-auto max-w-6xl px-4">
                {/* Section header */}
                <div className="mb-10 text-center">
                    <Skeleton className="mx-auto h-4 w-32" />
                    <Skeleton className="mx-auto mt-4 h-8 w-64" />
                </div>
                {/* Stats grid */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {[1, 2, 3, 4].map((i) => (
                        <div
                            key={i}
                            className="rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm"
                        >
                            <Skeleton className="mx-auto h-12 w-24" />
                            <Skeleton className="mx-auto mt-3 h-4 w-20" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

/**
 * Industry Grid Skeleton
 */
export function IndustryGridSkeleton() {
    return (
        <section className="bg-slate-50 py-16">
            <div className="mx-auto max-w-6xl px-4">
                <div className="mb-10 text-center">
                    <Skeleton className="mx-auto h-4 w-24" />
                    <Skeleton className="mx-auto mt-4 h-8 w-80" />
                </div>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <CardSkeleton key={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}

/**
 * Testimonials Skeleton
 */
export function TestimonialsSkeleton() {
    return (
        <section className="bg-white py-16">
            <div className="mx-auto max-w-6xl px-4">
                <div className="mb-10 text-center">
                    <Skeleton className="mx-auto h-4 w-28" />
                    <Skeleton className="mx-auto mt-4 h-8 w-72" />
                </div>
                <div className="grid gap-8 md:grid-cols-2">
                    {[1, 2].map((i) => (
                        <div key={i} className="rounded-xl border border-slate-200 bg-slate-50 p-6">
                            {/* Quote */}
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="mt-2 h-4 w-full" />
                            <Skeleton className="mt-2 h-4 w-3/4" />
                            {/* Author */}
                            <div className="mt-6 flex items-center gap-4">
                                <Skeleton className="h-12 w-12 rounded-full" />
                                <div className="flex-1">
                                    <Skeleton className="h-4 w-32" />
                                    <Skeleton className="mt-2 h-3 w-24" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

/**
 * CTA Section Skeleton
 */
export function CTASkeleton() {
    return (
        <section className="bg-emerald-600 py-16">
            <div className="mx-auto max-w-4xl px-4 text-center">
                <Skeleton className="mx-auto h-8 w-80 bg-emerald-500" />
                <Skeleton className="mx-auto mt-4 h-4 w-96 bg-emerald-500" />
                <div className="mt-8 flex justify-center gap-4">
                    <Skeleton className="h-12 w-40 bg-emerald-500" />
                    <Skeleton className="h-12 w-40 bg-emerald-500" />
                </div>
            </div>
        </section>
    );
}

/**
 * Pathway CTA Skeleton
 */
export function PathwaySkeleton() {
    return (
        <section className="bg-white py-16">
            <div className="mx-auto max-w-6xl px-4">
                <div className="mb-10 text-center">
                    <Skeleton className="mx-auto h-4 w-32" />
                    <Skeleton className="mx-auto mt-4 h-8 w-64" />
                </div>
                <div className="grid gap-6 md:grid-cols-3">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                            <Skeleton className="h-10 w-10 rounded-full" />
                            <Skeleton className="mt-4 h-6 w-40" />
                            <Skeleton className="mt-3 h-4 w-full" />
                            <Skeleton className="mt-2 h-4 w-5/6" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skeleton;
