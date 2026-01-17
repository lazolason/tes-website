"use client";

import React, { useState } from 'react';
import { ChevronDown, ChartColumn, Wind, Droplets, Gauge, Menu, X } from 'lucide-react';
import Link from 'next/link';

const solutions = [
  {
    category: "Thermal Efficiency (TES)",
    items: [
      { name: 'Condenser Performance', href: '/solutions/condenser-performance', desc: 'Vacuum recovery & heat rate optimization.', icon: Gauge },
      { name: 'ROI Verification', href: '/solutions/roi-verification', desc: 'ASME PTC 12.2 methodology & auditing.', icon: ChartColumn },
    ]
  },
  {
    category: "Industrial Systems",
    items: [
      { name: 'Cooling Water', href: '/solutions/cooling-water', desc: 'Scale, corrosion & bio-fouling control.', icon: Wind },
      { name: 'Boiler Water', href: '/solutions/boiler-water', desc: 'Integrity & fuel efficiency solutions.', icon: Droplets },
    ]
  }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-slate-900/95 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">

          {/* Logo Section */}
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0" onClick={() => setIsOpen(false)}>
              <img
                src="/logonew.png"
                alt="Mexel Energy Sustain"
                className="h-12 w-auto object-contain"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-baseline space-x-8">
              <Link href="/" className="text-sm font-medium text-white hover:text-emerald-400">Home</Link>

              {/* Mega Menu Trigger */}
              <div className="relative group">
                <button className="flex items-center gap-1 text-sm font-medium text-slate-300 hover:text-white py-8 focus:outline-none">
                  Solutions <ChevronDown className="h-4 w-4" />
                </button>

                {/* Mega Menu Panel */}
                <div className="absolute -left-48 top-full w-[600px] origin-top-left scale-95 opacity-0 invisible group-hover:visible group-hover:scale-100 group-hover:opacity-100 transition-all duration-200 ease-out">
                  <div className="mt-2 grid grid-cols-2 gap-8 rounded-2xl border border-slate-800 bg-slate-900 p-8 shadow-2xl">
                    {solutions.map((col) => (
                      <div key={col.category}>
                        <h3 className="text-xs font-bold uppercase tracking-widest text-emerald-500 mb-4">
                          {col.category}
                        </h3>
                        <div className="space-y-6">
                          {col.items.map((item) => (
                            <Link key={item.name} href={item.href} className="group/item flex items-start gap-4">
                              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-800 group-hover/item:bg-emerald-500/20 transition-colors">
                                <item.icon className="h-5 w-5 text-emerald-500" />
                              </div>
                              <div>
                                <p className="text-sm font-semibold text-white group-hover/item:text-emerald-400">
                                  {item.name}
                                </p>
                                <p className="text-xs text-slate-400 mt-1 line-clamp-1">
                                  {item.desc}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <Link href="/knowledge-hub/case-studies" className="text-sm font-medium text-slate-300 hover:text-white">Case Studies</Link>
              <Link href="/contact" className="text-sm font-medium text-slate-300 hover:text-white">Contact</Link>
            </div>
          </div>

          {/* Desktop Action Button */}
          <div className="hidden md:block">
            <Link href="/contact" className="rounded-full bg-emerald-600 px-6 py-2.5 text-sm font-bold text-white hover:bg-emerald-500 transition-all shadow-lg shadow-emerald-900/20">
              Request Technical Audit
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-slate-400 hover:bg-slate-800 hover:text-white focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800" id="mobile-menu">
          <div className="space-y-1 px-4 pb-3 pt-2">
            <Link
              href="/"
              className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-slate-800"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>

            {/* Mobile Solutions Section */}
            <div className="px-3 py-2">
              <div className="text-xs font-bold uppercase tracking-widest text-emerald-500 mb-2">Solutions</div>
              {solutions.map((group) => (
                <div key={group.category} className="mb-4 last:mb-0 pl-2 border-l border-slate-800">
                   <div className="text-xs text-slate-400 mb-2 font-medium">{group.category}</div>
                   <div className="space-y-2">
                      {group.items.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="flex items-center gap-3 rounded-md p-2 text-sm text-slate-300 hover:bg-slate-800 hover:text-white"
                          onClick={() => setIsOpen(false)}
                        >
                          <item.icon className="h-4 w-4 text-emerald-500" />
                          {item.name}
                        </Link>
                      ))}
                   </div>
                </div>
              ))}
            </div>

            <Link
              href="/knowledge-hub/case-studies"
              className="block rounded-md px-3 py-2 text-base font-medium text-slate-300 hover:bg-slate-800 hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              Case Studies
            </Link>
            <Link
              href="/contact"
              className="block rounded-md px-3 py-2 text-base font-medium text-slate-300 hover:bg-slate-800 hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            
            <div className="mt-4 px-3">
                 <Link href="/contact" 
                    className="flex w-full items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-sm font-bold text-white hover:bg-emerald-500 transition-all shadow-lg"
                    onClick={() => setIsOpen(false)}
                 >
                    Request Technical Audit
                 </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
