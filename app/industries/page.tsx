import Link from "next/link";
import type { Metadata } from "next";
import SystemHeader from "../../components/SystemHeader";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "TES and Mexel®432 applications across industries: power stations, mining, refineries, data centres, ports, food & beverage, and agricultural operations.",
  openGraph: {
    title: "Industries Served | Mexel Energy Sustain",
    description:
      "Cooling-water efficiency across power generation, mining, refineries, data centres and industrial plants.",
  },
};

// Industry icons matching the Navbar mega menu
const Icons = {
  Power: (props: any) => (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  Mining: (props: any) => (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
    </svg>
  ),
  Refineries: (props: any) => (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
    </svg>
  ),
  Food: (props: any) => (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
    </svg>
  ),
  Agriculture: (props: any) => (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  ),
  Data: (props: any) => (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
    </svg>
  ),
  Ports: (props: any) => (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>
  ),
};

// Data-driven industry cards
const industries = [
  {
    href: "/industries/power-energy",
    title: "Power & Energy",
    description: "Wet-cooled coal, gas and nuclear stations",
    icon: Icons.Power,
  },
  {
    href: "/industries/mining",
    title: "Mining & Minerals",
    description: "Concentrators and processing plants",
    icon: Icons.Mining,
  },
  {
    href: "/industries/refineries",
    title: "Refineries & Petrochemical",
    description: "Critical process cooling loops",
    icon: Icons.Refineries,
  },
  {
    href: "/industries/food-beverage",
    title: "Food & Beverage",
    description: "Breweries, processing and laundries",
    icon: Icons.Food,
  },
  {
    href: "/industries/agriculture",
    title: "Agriculture & Irrigation",
    description: "Greenhouses, cold storage, irrigation",
    icon: Icons.Agriculture,
  },
  {
    href: "/industries/data-centres",
    title: "Data Centres",
    description: "Hyperscale and colocation facilities",
    icon: Icons.Data,
  },
  {
    href: "/industries/ports",
    title: "Sea / Harbours / Ports",
    description: "Maritime and coastal infrastructure",
    icon: Icons.Ports,
  },
];

export default function IndustriesPage() {
  return (
    <main className="min-h-screen bg-white">
      <SystemHeader
        tag="OPERATING CONTEXTS"
        title="Operating contexts for TES deployment."
        description="TES is applied where cooling-water performance can be measured and verified using baseline → review methodology at matched load and ambient conditions."
        continuity="These are the operating contexts where TES is applied."
        currentLabel="Contexts"
        activeSteps={[2, 3]}
      />

      <section className="border-b border-slate-200/70 bg-gradient-slate">
        <div className="mx-auto max-w-6xl px-4 py-12 lg:py-16">
          <p className="max-w-3xl text-sm leading-relaxed text-slate-700">
            Select an industry below to learn more about how TES addresses specific
            cooling-water challenges in each sector.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <Link
                key={industry.href}
                href={industry.href}
                className="group flex items-start gap-4 rounded-xl border border-slate-200/70 bg-white p-5 shadow-sm transition-all duration-200 hover:border-emerald-300 hover:shadow-lg hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-700 transition-all duration-200 group-hover:bg-emerald-600 group-hover:text-white group-hover:scale-110">
                  <industry.icon className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-semibold text-slate-900 group-hover:text-emerald-700 transition-colors">
                    {industry.title}
                  </h3>
                  <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                    {industry.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA */}
      <section className="bg-gradient-emerald">
        <div className="mx-auto max-w-6xl px-4 py-14 lg:py-20">
          <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-50 rounded-full -mr-32 -mt-32 opacity-50"></div>
            <div className="relative flex flex-col gap-6 p-8 md:flex-row md:items-center md:justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center">
                    <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                    </svg>
                  </div>
                  <h2 className="text-base font-semibold text-slate-900">
                    Not sure which industry page fits your operation?
                  </h2>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed max-w-xl">
                  Contact us for a technical discussion about your specific cooling-water challenges. Our team will help identify the best TES approach for your facility.
                </p>
              </div>
              <div className="flex flex-col gap-3 text-sm flex-shrink-0">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-6 py-3 font-semibold text-white shadow-sm transition-all hover:bg-emerald-700 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:ring-offset-2 cta-pulse"
                >
                  Request a Pilot Study
                </Link>
                <Link
                  href="/knowledge-hub"
                  className="inline-flex items-center justify-center gap-1 font-semibold text-emerald-700 transition-colors hover:text-emerald-900"
                >
                  Explore Knowledge Hub
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Stats section */}
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            <div className="text-center">
              <div className="text-2xl font-bold text-emerald-600">7</div>
              <div className="mt-1 text-xs text-slate-600">Industries Served</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-emerald-600">50+</div>
              <div className="mt-1 text-xs text-slate-600">Active Facilities</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-emerald-600">15%</div>
              <div className="mt-1 text-xs text-slate-600">Avg. Efficiency Gain</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
