'use client';

import Image from 'next/image';

export default function TrustedBy() {
  const partners = [
    { 
      name: 'Eskom', 
      desc: 'Power Generation',
      logo: (
        <div className="relative h-28 w-64 overflow-hidden rounded-xl transition-all duration-500 group-hover:scale-105 sm:h-32 sm:w-80 lg:h-36 lg:w-96">
          <Image 
            src="/logos/eskom-logo.jpeg" 
            alt="Eskom Logo" 
            fill
            className="object-cover opacity-50 mix-blend-screen invert grayscale contrast-150 brightness-125 transition-all duration-500 group-hover:opacity-100 group-hover:drop-shadow-[0_0_18px_rgba(16,185,129,0.55)]" 
          />
        </div>
      )
    },
    { 
      name: 'WRC', 
      desc: 'Water Research Commission',
      logo: (
        <div className="relative h-24 w-56 overflow-hidden rounded-xl transition-all duration-500 group-hover:scale-105 sm:h-28 sm:w-72 lg:h-32 lg:w-80">
          <Image 
            src="/logos/wrc-logo.jpeg" 
            alt="WRC Logo" 
            fill
            className="object-cover opacity-50 mix-blend-screen invert grayscale contrast-150 brightness-125 transition-all duration-500 group-hover:opacity-100 group-hover:drop-shadow-[0_0_18px_rgba(16,185,129,0.55)]" 
          />
        </div>
      )
    },
    { 
      name: 'BRUNDTLAND', 
      desc: 'Advisory Partners',
      logo: (
        <div className="flex h-24 w-56 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition-all duration-500 group-hover:scale-105 group-hover:border-white/20 group-hover:bg-white/10 group-hover:shadow-[0_0_24px_rgba(255,255,255,0.12)] sm:h-28 sm:w-72 lg:h-32 lg:w-80">
          <svg className="h-5 text-slate-400 transition-colors duration-500 group-hover:text-white sm:h-6" viewBox="0 0 240 30" fill="currentColor">
            <path d="M10 5 L25 5 L17 25 Z" fill="none" stroke="currentColor" strokeWidth="3"/>
            <text x="40" y="22" fontSize="16" fontWeight="300" fontFamily="sans-serif" letterSpacing="6">BRUNDTLAND</text>
          </svg>
        </div>
      )
    },
  ];

  return (
    <section className="border-b border-slate-800 bg-slate-950 py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-bold uppercase tracking-widest text-slate-500 mb-14">
          Trusted by engineering & advisory leaders
        </p>
        
        <div className="grid grid-cols-1 items-center justify-items-center gap-10 md:grid-cols-3">
          {partners.map((partner) => (
            <div key={partner.name} className="group flex cursor-default flex-col items-center justify-center">
              {partner.logo}
              <span className="text-[10px] font-medium uppercase tracking-widest text-emerald-500 mt-4 opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                {partner.desc}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
