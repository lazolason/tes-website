import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-slate-900 flex flex-col items-center justify-center text-white px-4">
      <div className="absolute inset-0 bg-[url('/power-gen.webp')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/90 to-transparent"></div>
      
      <div className="relative z-10 text-center max-w-2xl">
        <p className="text-emerald-400 font-bold tracking-widest uppercase text-sm mb-4">Error 404</p>
        <h1 className="text-5xl sm:text-7xl font-bold tracking-tight mb-6">
          System Not Found
        </h1>
        <p className="text-xl text-slate-300 mb-10 leading-relaxed">
          The requested page, document, or resource could not be located in our system. It may have been moved, renamed, or is temporarily unavailable.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-8 py-3 rounded-md bg-emerald-600 text-white font-semibold hover:bg-emerald-500 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-slate-900"
          >
            Return to Dashboard
          </Link>
          <Link
            href="/knowledge-hub"
            className="inline-flex items-center justify-center px-8 py-3 rounded-md bg-transparent border border-slate-600 text-white font-semibold hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-slate-900"
          >
            Search Knowledge Hub
          </Link>
        </div>
      </div>
    </main>
  );
}
