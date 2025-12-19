"use client";

import FadeIn from "./FadeIn";

const pillars = [
  {
    title: "Eskom RT&D Protocol",
    description: "Built on Eskom's Research, Testing & Development framework (Tutuka Rev08), ensuring total alignment with utility-scale requirements and independent baseline verification.",
    icon: (
      <svg className="w-10 h-10 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    title: "Kriel Unit 6 Results",
    description: "Verified field data from Kriel Power Station showing a 4°C improvement in Temperature Rise (TR) and a corresponding reduction in cold-end efficiency losses within 90 days.",
    icon: (
      <svg className="w-10 h-10 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
      </svg>
    )
  },
  {
    title: "International Credentials",
    description: "Mexel®432 is utilized globally across nuclear, thermal, and industrial plants. Our results are backed by the WRC and strategic carbon verification bodies like Brundtland.",
    icon: (
      <svg className="w-10 h-10 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    )
  }
];

export default function ValidationSection() {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20 xl:py-28 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-emerald-50 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeIn>
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Rigorous Validation, Trusted Results
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
              TES is built on a foundation of scientific protocols and real-world performance data.
            </p>
          </div>
        </FadeIn>

        <div className="grid gap-8 sm:gap-12 lg:grid-cols-3">
          {pillars.map((pillar, index) => (
            <FadeIn key={pillar.title} delay={index * 150}>
              <div className="flex flex-col items-center text-center p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-slate-50 border border-slate-100 transition-all duration-300 hover:shadow-lg">
                <div className="mb-5 sm:mb-6 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white shadow-sm ring-1 ring-slate-200/50">
                  {pillar.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 sm:mb-4">
                  {pillar.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  {pillar.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}