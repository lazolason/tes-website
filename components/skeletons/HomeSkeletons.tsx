
export function TrustedBySkeleton() {
    return (
        <div className="border-y border-slate-100 bg-slate-50 py-12">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5 animate-pulse">
                    {[1, 2, 3, 4, 5].map((i) => (
                        <div key={i} className="h-12 w-full rounded-lg bg-slate-200/50" />
                    ))}
                </div>
            </div>
        </div>
    );
}

export function IndustryGridSkeleton() {
    return (
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
            <div className="mb-16 text-center animate-pulse">
                <div className="mx-auto h-4 w-32 rounded bg-slate-200" />
                <div className="mx-auto mt-4 h-10 w-3/4 max-w-2xl rounded bg-slate-200" />
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div key={i} className="h-96 rounded-2xl bg-slate-100 animate-pulse" />
                ))}
            </div>
        </div>
    );
}

export function ProcessSkeleton() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 animate-pulse">
                <div className="h-4 w-24 rounded bg-slate-200 mb-4" />
                <div className="h-10 w-96 rounded bg-slate-200 mb-16" />
                <div className="grid gap-12 lg:grid-cols-1">
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="h-48 rounded-2xl bg-slate-50 border border-slate-100" />
                    ))}
                </div>
            </div>
        </div>
    );
}

export function StatsSkeleton() {
    return (
        <div className="bg-slate-900 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 animate-pulse">
                <div className="h-8 w-64 rounded bg-slate-800 mb-12" />
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {[1, 2, 3, 4].map(i => (
                        <div key={i} className="h-32 rounded-xl bg-slate-800" />
                    ))}
                </div>
            </div>
        </div>
    );
}

export function TestimonialsSkeleton() {
    return (
        <div className="bg-slate-50 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 animate-pulse">
                <div className="h-10 w-1/2 mx-auto rounded bg-slate-200 mb-16" />
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {[1, 2, 3].map(i => (
                        <div key={i} className="h-64 rounded-2xl bg-white border border-slate-200" />
                    ))}
                </div>
            </div>
        </div>
    )
}
