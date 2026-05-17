'use client';

import Image from 'next/image';

export default function TrustedBy() {
  const partners = [
    { 
      name: 'Eskom', 
      desc: 'Power Generation',
      logo: (
        <div className="relative w-44 h-16 sm:w-52 sm:h-20 bg-white rounded-xl p-3 shadow-md shadow-black/20 group-hover:shadow-lg group-hover:shadow-emerald-500/10 group-hover:scale-105 transition-all duration-500">
          <Image 
            src="/logos/eskom-logo.jpeg" 
            alt="Eskom Logo" 
            fill
            className="object-contain p-3" 
          />
        </div>
      )
    },
    { 
      name: 'WRC', 
      desc: 'Water Research Commission',
      logo: (
        <div className="relative w-36 h-16 sm:w-44 sm:h-20 bg-white rounded-xl p-3 shadow-md shadow-black/20 group-hover:shadow-lg group-hover:shadow-emerald-500/10 group-hover:scale-105 transition-all duration-500">
          <Image 
            src="/logos/wrc-logo.jpeg" 
            alt="WRC Logo" 
            fill
            className="object-contain p-3" 
          />
        </div>
      )
    },
    { 
      name: 'BRUNDTLAND', 
      desc: 'Advisory Partners',
      logo: (
        <div className="flex items-center justify-center w-44 h-16 sm:w-52 sm:h-20 bg-white/5 border border-white/10 rounded-xl group-hover:border-emerald-500/30 group-hover:bg-white/10 group-hover:scale-105 transition-all duration-500">
          <svg className="h-5 sm:h-6 text-slate-400 group-hover:text-white transition-colors duration-500" viewBox="0 0 240 30" fill="currentColor">
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
        
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 items-center justify-items-center">
          {partners.map((partner) => (
            <div key={partner.name} className="flex flex-col items-center justify-center group cursor-default">
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
