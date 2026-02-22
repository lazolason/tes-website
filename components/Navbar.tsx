"use client";

import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { solutions, industries, knowledgeHub } from '@/lib/navigation';
import { buttonVariants } from '@/components/ui/Button';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 z-50 w-full border-b transition-all duration-300 ${
      scrolled
        ? 'border-white/20 bg-slate-900/98 backdrop-blur-lg shadow-lg shadow-slate-900/50'
        : 'border-white/10 bg-slate-900/95 backdrop-blur-md'
    }`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 sm:h-16 md:h-20 items-center justify-between">

          {/* Logo Section */}
          <div className="flex items-center">
            <Link
              href="/"
              className="flex-shrink-0 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
              onClick={() => setIsOpen(false)}
            >
              <Image
                src="/logonew.svg"
                alt="Mexel Energy Sustain - TES Cooling Water Efficiency Solutions"
                width={320}
                height={80}
                priority
                className="h-12 sm:h-14 md:h-16 w-auto object-contain transition-opacity hover:opacity-90"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-baseline space-x-8">
              <Link href="/" className="text-sm font-medium text-white hover:text-emerald-400">Home</Link>
              <Link href="/mexel432" className="text-sm font-semibold text-emerald-300 hover:text-emerald-200">Mexel®432</Link>

              {/* Solutions Dropdown */}
              <div className="relative group">
                <button
                  onClick={() => toggleDropdown('solutions')}
                  onMouseEnter={() => setActiveDropdown('solutions')}
                  className="flex items-center gap-1 text-sm font-medium text-slate-300 hover:text-white focus:outline-none transition-colors duration-150"
                  aria-expanded={activeDropdown === 'solutions'}
                  aria-haspopup="true"
                >
                  Solutions <ChevronDown className="h-4 w-4" />
                </button>
                <div
                  className={`absolute left-0 top-full w-[320px] origin-top transition-all duration-150 ease-out ${
                    activeDropdown === 'solutions'
                      ? 'visible scale-100 opacity-100'
                      : 'invisible scale-95 opacity-0'
                  }`}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <div className="mt-2 rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-2xl">
                    <div className="space-y-4">
                      {solutions.map((item) => (
                        <Link key={item.name} href={item.href} className="group/item flex items-start gap-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-800 group-hover/item:bg-emerald-500/20 transition-colors">
                            <item.icon className="h-5 w-5 text-emerald-500" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-white group-hover/item:text-emerald-400">
                              {item.name}
                            </p>
                            <p className="text-xs text-slate-400 mt-1">
                              {item.desc}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Industries Dropdown */}
              <div className="relative group">
                <button
                  onClick={() => toggleDropdown('industries')}
                  onMouseEnter={() => setActiveDropdown('industries')}
                  className="flex items-center gap-1 text-sm font-medium text-slate-300 hover:text-white focus:outline-none transition-colors duration-150"
                  aria-expanded={activeDropdown === 'industries'}
                  aria-haspopup="true"
                >
                  Industries <ChevronDown className="h-4 w-4" />
                </button>
                <div
                  className={`absolute left-0 top-full w-[320px] origin-top transition-all duration-150 ease-out ${
                    activeDropdown === 'industries'
                      ? 'visible scale-100 opacity-100'
                      : 'invisible scale-95 opacity-0'
                  }`}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <div className="mt-2 rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-2xl">
                    <div className="space-y-4">
                      {industries.map((item) => (
                        <Link key={item.name} href={item.href} className="group/item flex items-start gap-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-800 group-hover/item:bg-emerald-500/20 transition-colors">
                            <item.icon className="h-5 w-5 text-emerald-500" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-white group-hover/item:text-emerald-400">
                              {item.name}
                            </p>
                            <p className="text-xs text-slate-400 mt-1">
                              {item.desc}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Knowledge Hub Dropdown */}
              <div className="relative group">
                <button
                  onClick={() => toggleDropdown('knowledge')}
                  onMouseEnter={() => setActiveDropdown('knowledge')}
                  className="flex items-center gap-1 text-sm font-medium text-slate-300 hover:text-white focus:outline-none transition-colors duration-150"
                  aria-expanded={activeDropdown === 'knowledge'}
                  aria-haspopup="true"
                >
                  Knowledge Hub <ChevronDown className="h-4 w-4" />
                </button>
                <div
                  className={`absolute left-0 top-full w-[320px] origin-top transition-all duration-150 ease-out ${
                    activeDropdown === 'knowledge'
                      ? 'visible scale-100 opacity-100'
                      : 'invisible scale-95 opacity-0'
                  }`}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <div className="mt-2 rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-2xl">
                    <div className="space-y-4">
                      {knowledgeHub.map((item) => (
                        <Link key={item.name} href={item.href} className="group/item flex items-start gap-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-800 group-hover/item:bg-emerald-500/20 transition-colors">
                            <item.icon className="h-5 w-5 text-emerald-500" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-white group-hover/item:text-emerald-400">
                              {item.name}
                            </p>
                            <p className="text-xs text-slate-400 mt-1">
                              {item.desc}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <Link href="/contact" className="text-sm font-medium text-slate-300 hover:text-white">Contact</Link>
            </div>
          </div>

          {/* Desktop Action Button */}
          <div className="hidden md:block">
            <Link href="/contact" className={buttonVariants({ variant: "default" })}>
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
            <Link
              href="/mexel432"
              className="block rounded-md px-3 py-2 text-base font-medium text-emerald-200 hover:bg-slate-800 hover:text-emerald-100"
              onClick={() => setIsOpen(false)}
            >
              Mexel®432
            </Link>

            {/* Mobile Solutions Section */}
            <div className="px-3 py-2">
              <div className="text-xs font-bold uppercase tracking-widest text-emerald-500 mb-2">Solutions</div>
              <div className="space-y-2 pl-2 border-l border-slate-800">
                {solutions.map((item) => (
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

            {/* Mobile Industries Section */}
            <div className="px-3 py-2">
              <div className="text-xs font-bold uppercase tracking-widest text-emerald-500 mb-2">Industries</div>
              <div className="space-y-2 pl-2 border-l border-slate-800">
                {industries.map((item) => (
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

            {/* Mobile Knowledge Hub Section */}
            <div className="px-3 py-2">
              <div className="text-xs font-bold uppercase tracking-widest text-emerald-500 mb-2">Knowledge Hub</div>
              <div className="space-y-2 pl-2 border-l border-slate-800">
                {knowledgeHub.map((item) => (
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

            <Link
              href="/contact"
              className="block rounded-md px-3 py-2 text-base font-medium text-slate-300 hover:bg-slate-800 hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>

            <div className="mt-4 px-3">
              <Link href="/contact"
                className={buttonVariants({ variant: "default", className: "flex w-full items-center justify-center py-3" })}
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
