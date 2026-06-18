
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

export function DashboardSkeleton() {
    return (
        <div className="mx-auto max-w-6xl w-full h-[500px] rounded-3xl bg-slate-100 border border-slate-200 animate-pulse overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-16 bg-slate-200" />
            <div className="absolute bottom-8 left-8 right-8 h-64 bg-slate-200 rounded-xl" />
        </div>
    );
}

export function CTASkeleton() {
    return (
        <section className="relative py-24 overflow-hidden bg-emerald-600">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10 animate-pulse">
                <div className="mx-auto max-w-2xl text-center">
                    <div className="h-10 w-3/4 mx-auto bg-emerald-500/50 rounded-lg mb-6" />
                    <div className="h-6 w-full mx-auto bg-emerald-500/50 rounded-lg mb-10" />
                    <div className="h-12 w-48 mx-auto bg-emerald-400 rounded-full" />
                </div>
            </div>
        </section>
    );
}
